import * as THREE from 'three';
import { WEAPONS } from './weapons.js';
import { buildWeaponModel, buildFirstPersonArms } from './gunModels.js';
import { ScopeOverlay } from './scope.js';
import {
  spawnMuzzleFlash,
  spawnSmoke,
  spawnShell,
  spawnTracer,
  spawnImpact,
  spawnSpark
} from './effects.js';

export { WEAPONS };

const UP = new THREE.Vector3(0, 1, 0);

export class Gun {
  constructor(camera, scene, domElement, targets, bots, world) {
    this.camera = camera;
    this.scene = scene;
    this.domElement = domElement;
    this.targets = targets;
    this.bots = bots || [];
    this.world = world;

    this.weapons = WEAPONS.map(config => ({
      ...config,
      ammo: config.magSize,
      fireInterval: 1 / config.fireRate,
      model: null,
      basePosition: null,
      adsPosition: null,
      muzzleMarker: null,
      ejectMarker: null
    }));

    this.currentIndex = 0;
    this.weapon = this.weapons[0];

    this.isReloading = false;
    this.reloadTimer = 0;
    this.reloadDuration = 1;
    this.fireTimer = 0;
    this.isFiring = false;
    this.isHoldingBreath = false;
    this.audio = null;
    this.onHit = null;
    this.onShot = null;

    this.baseFov = camera.fov;
    this.adsTarget = false;
    this.isZoomed = false;
    this.adsProgress = 0;
    this.currentFov = camera.fov;

    this.switchTimer = 0;
    this.switchDuration = 0.3;
    this.time = 0;
    this.bobTime = 0;
    this.lastCameraPosition = camera.position.clone();
    this.recoilOffset = new THREE.Vector3();
    this.recoilRotation = new THREE.Vector3();
    this.scopeSway = new THREE.Vector2();

    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 200;

    this.ammoElement = document.getElementById('ammo');
    this.weaponNameElement = document.getElementById('weapon-name');
    this.hitmarkerElement = document.getElementById('hitmarker');
    this.crosshairElement = document.getElementById('crosshair');
    this.zoomCrosshairElement = document.getElementById('zoom-crosshair');
    if (this.zoomCrosshairElement) this.zoomCrosshairElement.style.display = 'none';
    const hud = document.getElementById('hud') || document.body;
    this.scope = new ScopeOverlay(hud);

    this.initWeaponModels();
    this.initEvents();
    this.updateHUD();
  }

  // ---------- Weapon models ----------
  initWeaponModels() {
    for (const weapon of this.weapons) {
      const built = buildWeaponModel(weapon.id);
      const group = built.group;
      group.position.set(...weapon.position);
      group.visible = false;
      this.camera.add(group);

      const arms = buildFirstPersonArms(weapon.id, built);
      group.add(arms);

      weapon.model = group;
      weapon.basePosition = group.position.clone();
      weapon.sightOffset = built.sight.clone();
      weapon.adsPosition = new THREE.Vector3(
        -built.sight.x,
        -built.sight.y,
        built.scopeZ - built.sight.z
      );

      weapon.muzzleMarker = new THREE.Object3D();
      weapon.muzzleMarker.position.copy(built.muzzle);
      group.add(weapon.muzzleMarker);

      weapon.ejectMarker = new THREE.Object3D();
      weapon.ejectMarker.position.copy(built.eject);
      group.add(weapon.ejectMarker);
    }

    this.scene.add(this.camera);
    this.weapon.model.visible = true;
    this.gunGroup = this.weapon.model;
    this.baseGunPosition = this.weapon.basePosition.clone();
  }

  // ---------- Input ----------
  initEvents() {
    window.addEventListener('mousedown', (event) => {
      if (document.pointerLockElement !== this.domElement) return;
      if (event.button === 0) this.isFiring = true;
      else if (event.button === 2) this.setZoom(true);
    });

    window.addEventListener('mouseup', (event) => {
      if (event.button === 0) this.isFiring = false;
      else if (event.button === 2) this.setZoom(false);
    });

    document.addEventListener('contextmenu', (event) => {
      if (document.pointerLockElement === this.domElement) event.preventDefault();
    });

    window.addEventListener('keydown', (event) => {
      if (document.pointerLockElement !== this.domElement) return;
      if (event.code === 'KeyR') this.reload();
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') this.isHoldingBreath = true;
      if (event.code === 'Digit1') this.switchWeapon(0);
      if (event.code === 'Digit2') this.switchWeapon(1);
      if (event.code === 'Digit3') this.switchWeapon(2);
      if (event.code === 'Digit4') this.switchWeapon(3);
    });

    window.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') this.isHoldingBreath = false;
    });

    window.addEventListener('blur', () => {
      this.isHoldingBreath = false;
      this.setZoom(false);
    });
  }

  // ---------- Aim down sights ----------
  setZoom(on) {
    if (on && (this.isReloading || this.switchTimer > 0.02)) return;
    this.adsTarget = on;
    this.isZoomed = on;

    if (this.crosshairElement) {
      this.crosshairElement.style.display = on ? 'none' : '';
    }
    if (!on) {
      this.scope.hide();
      if (this.gunGroup) this.gunGroup.visible = true;
    }
  }

  getZoomSensitivityScale() {
    const target = this.weapon.zoomSensitivity ?? 0.5;
    return 1 + (target - 1) * this.adsProgress;
  }

  // ---------- Weapons ----------
  switchWeapon(index) {
    if (index < 0 || index >= this.weapons.length) return;
    if (index === this.currentIndex) return;
    this.equip(index);
  }

  equip(index, { animate = true } = {}) {
    if (index < 0 || index >= this.weapons.length) return;
    this.setZoom(false);
    this.scope.hide();

    for (const weapon of this.weapons) {
      if (weapon.model) weapon.model.visible = false;
    }

    this.currentIndex = index;
    this.weapon = this.weapons[index];
    this.weapon.model.visible = true;
    this.gunGroup = this.weapon.model;
    this.baseGunPosition = this.weapon.basePosition.clone();
    this.gunGroup.position.copy(this.baseGunPosition);
    this.gunGroup.rotation.set(0, 0, 0);
    this.recoilOffset.set(0, 0, 0);
    this.recoilRotation.set(0, 0, 0);
    this.adsProgress = 0;
    this.adsTarget = false;
    this.switchTimer = animate ? this.switchDuration : 0;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.isFiring = false;
    this.fireTimer = this.weapon.fireInterval;
    this.updateHUD();
  }

  reload() {
    if (this.isReloading || this.weapon.ammo >= this.weapon.magSize) return;
    this.setZoom(false);
    this.isReloading = true;
    this.reloadDuration = this.weapon.reloadTime;
    this.reloadTimer = this.reloadDuration;
    this.isFiring = false;
    if (this.ammoElement) this.ammoElement.textContent = 'RELOADING';
    if (this.audio) this.audio.reload();
  }

  refillAll() {
    for (const weapon of this.weapons) weapon.ammo = weapon.magSize;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.isFiring = false;
    this.fireTimer = this.weapon.fireInterval;
    this.updateHUD();
  }

  // ---------- Shooting ----------
  fire() {
    if (this.isReloading || this.switchTimer > 0.08) return;
    const weapon = this.weapon;
    if (weapon.ammo <= 0) {
      this.reload();
      return;
    }

    weapon.ammo--;
    this.updateAmmoUI();

    if (this.audio) this.audio.gunShot(weapon.id);
    if (this.onShot) this.onShot({ weaponId: weapon.id });

    const kick = weapon.recoilKick;
    this.recoilOffset.z += kick;
    this.recoilOffset.y += kick * 0.22;
    this.recoilRotation.x += weapon.recoilRot;
    this.recoilRotation.z += (Math.random() - 0.5) * weapon.recoilRot * 0.6;

    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);
    const muzzlePos = this.getMuzzleWorldPosition();
    const ejectPos = this.getEjectWorldPosition();

    spawnMuzzleFlash(this.scene, muzzlePos, direction, weapon.flashScale);
    spawnSmoke(this.scene, muzzlePos, direction);
    spawnShell(this.scene, ejectPos, direction, weapon.shellSize);

    let anyHit = false;
    let anyHeadshot = false;
    for (let i = 0; i < weapon.pellets; i++) {
      const result = this.firePellet(weapon, muzzlePos);
      if (result.hit) anyHit = true;
      if (result.headshot) anyHeadshot = true;
    }

    if (anyHit) {
      this.showHitmarker(anyHeadshot);
      if (this.audio) this.audio.hit(anyHeadshot);
      if (this.onHit) this.onHit({ headshot: anyHeadshot, weaponId: weapon.id });
    }
  }

  getMuzzleWorldPosition() {
    this.camera.updateMatrixWorld();
    return this.weapon.muzzleMarker.getWorldPosition(new THREE.Vector3());
  }

  getEjectWorldPosition() {
    this.camera.updateMatrixWorld();
    return this.weapon.ejectMarker.getWorldPosition(new THREE.Vector3());
  }

  firePellet(weapon, muzzlePos) {
    const origin = new THREE.Vector3();
    this.camera.getWorldPosition(origin);
    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);

    // ADS tightens the cone; moving and hip fire are deliberately less precise.
    const spread = weapon.spread * (1 - this.adsProgress * 0.84);
    if (spread > 0) this.applySpread(direction, spread);

    this.raycaster.set(origin, direction);
    this.raycaster.far = 200;

    let closest = null;
    const hitMeshes = this.world && this.world.getHitMeshes ? this.world.getHitMeshes() : [];
    const obstacleHit = this.raycaster.intersectObjects(hitMeshes, false)[0] || null;
    if (obstacleHit) {
      closest = {
        kind: 'world',
        distance: obstacleHit.distance,
        point: obstacleHit.point,
        object: obstacleHit.object,
        face: obstacleHit.face
      };
    }

    const targetHit = this.targets && this.targets.checkHit ? this.targets.checkHit(this.raycaster) : null;
    if (targetHit) {
      const distance = targetHit.point.distanceTo(origin);
      if (!closest || distance < closest.distance) {
        closest = { kind: 'actor', distance, point: targetHit.point, hit: targetHit };
      }
    }

    for (const bot of this.bots) {
      const botHit = bot.checkHit(this.raycaster);
      if (!botHit) continue;
      const distance = botHit.point.distanceTo(origin);
      if (!closest || distance < closest.distance) {
        closest = { kind: 'actor', distance, point: botHit.point, hit: botHit };
      }
    }

    const endPoint = closest ? closest.point : this.raycaster.ray.at(120, new THREE.Vector3());
    spawnTracer(this.scene, muzzlePos, endPoint);

    if (closest && closest.kind === 'world') {
      const normal = closest.face
        ? closest.face.normal.clone().transformDirection(closest.object.matrixWorld)
        : direction.clone().negate();
      const material = Array.isArray(closest.object.material)
        ? closest.object.material[0]
        : closest.object.material;
      spawnImpact(this.scene, closest.point, normal, !!material && material.metalness > 0.45);
      return { hit: false, headshot: false };
    }

    if (closest && closest.kind === 'actor') {
      const damage = closest.hit.isHeadshot ? weapon.damageHead : weapon.damageBody;
      closest.hit.target.lastHit = {
        weaponId: weapon.id,
        headshot: !!closest.hit.isHeadshot
      };
      closest.hit.target.applyDamage(closest.hit.isHeadshot, damage);
      spawnSpark(this.scene, closest.point, 0xff6a4a);
      return { hit: true, headshot: !!closest.hit.isHeadshot };
    }

    return { hit: false, headshot: false };
  }

  applySpread(direction, spread) {
    const right = new THREE.Vector3().crossVectors(direction, UP);
    if (right.lengthSq() < 1e-6) right.set(1, 0, 0);
    right.normalize();
    const up = new THREE.Vector3().crossVectors(right, direction).normalize();
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * spread;
    direction
      .addScaledVector(right, Math.tan(Math.cos(angle) * radius))
      .addScaledVector(up, Math.tan(Math.sin(angle) * radius))
      .normalize();
  }

  showHitmarker(headshot = false) {
    if (!this.hitmarkerElement) return;
    this.hitmarkerElement.classList.toggle('headshot', headshot);
    this.hitmarkerElement.style.opacity = '1';
    setTimeout(() => {
      this.hitmarkerElement.style.opacity = '0';
    }, headshot ? 160 : 100);
  }

  // ---------- HUD / update ----------
  updateAmmoUI() {
    if (!this.ammoElement) return;
    this.ammoElement.textContent = this.isReloading
      ? 'RELOADING'
      : `${this.weapon.ammo} / ${this.weapon.magSize}`;
  }

  updateHUD() {
    if (this.weaponNameElement) this.weaponNameElement.textContent = this.weapon.name;
    this.updateAmmoUI();
  }

  update(delta) {
    if (document.pointerLockElement !== this.domElement) {
      this.isFiring = false;
      if (this.adsTarget) this.setZoom(false);
    }

    this.time += delta;
    const moved = this.camera.position.distanceTo(this.lastCameraPosition);
    const speed = Math.min(9, moved / Math.max(delta, 0.001));
    this.lastCameraPosition.copy(this.camera.position);
    this.bobTime += delta * (1 + Math.min(1.4, speed * 0.2));

    const adsTarget = this.adsTarget ? 1 : 0;
    const adsSpeed = this.weapon.id === 'sniper' ? 7.5 : 14;
    this.adsProgress += (adsTarget - this.adsProgress) * Math.min(1, delta * adsSpeed);
    if (Math.abs(adsTarget - this.adsProgress) < 0.001) this.adsProgress = adsTarget;

    // Smooth camera FOV change.
    const targetFov = this.baseFov / (1 + (this.weapon.zoomFactor - 1) * this.adsProgress);
    if (Math.abs(targetFov - this.camera.fov) > 0.005) {
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();
    }

    if (this.isReloading) {
      this.reloadTimer -= delta;
      if (this.reloadTimer <= 0) {
        this.weapon.ammo = this.weapon.magSize;
        this.isReloading = false;
        this.updateHUD();
      }
    } else {
      if (this.isFiring && this.switchTimer <= 0.08) {
        this.fireTimer += delta;
        if (this.fireTimer >= this.weapon.fireInterval) {
          this.fireTimer = 0;
          this.fire();
        }
      } else {
        this.fireTimer = this.weapon.fireInterval;
      }
    }

    this.switchTimer = Math.max(0, this.switchTimer - delta);

    const recoilDamping = Math.max(0, 1 - delta * 11);
    this.recoilOffset.multiplyScalar(recoilDamping);
    this.recoilRotation.multiplyScalar(recoilDamping);

    const ease = this.adsProgress * this.adsProgress * (3 - 2 * this.adsProgress);
    const swayScale = 1 - ease * 0.78;
    const breathScale = this.weapon.id === 'sniper' && this.isHoldingBreath ? 0.2 : 1;
    const movement = Math.min(1, speed / 4.8);

    const bobX = Math.sin(this.bobTime * 8.4) * 0.0085 * movement * swayScale;
    const bobY = Math.abs(Math.cos(this.bobTime * 8.4)) * 0.0065 * movement * swayScale;
    const idleX = Math.sin(this.time * 1.25) * 0.0035 * swayScale * breathScale;
    const idleY = Math.cos(this.time * 0.92) * 0.003 * swayScale * breathScale;

    const position = this.weapon.basePosition.clone().lerp(this.weapon.adsPosition, ease);
    position.x += bobX + idleX;
    position.y += bobY + idleY;

    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    if (this.switchTimer > 0) {
      const draw = 1 - this.switchTimer / this.switchDuration;
      const drop = 1 - (draw * draw * (3 - 2 * draw));
      position.y -= drop * 0.24;
      rotationZ -= drop * 0.45;
      rotationX += drop * 0.25;
    }

    if (this.isReloading) {
      const progress = 1 - Math.max(0, this.reloadTimer) / this.reloadDuration;
      const arc = Math.sin(Math.min(1, progress) * Math.PI);
      position.y -= arc * 0.13;
      position.z += arc * 0.05;
      rotationZ += arc * 0.42;
      rotationX -= arc * 0.2;
    }

    position.add(this.recoilOffset);
    rotationX += this.recoilRotation.x + Math.sin(this.time * 0.74) * 0.0015 * swayScale;
    rotationZ += this.recoilRotation.z + Math.sin(this.time * 0.53) * 0.0015 * swayScale;
    rotationY += Math.sin(this.bobTime * 4.2) * 0.004 * movement;

    this.gunGroup.position.copy(position);
    this.gunGroup.rotation.set(rotationX, rotationY, rotationZ);

    const mode = this.isZoomed && this.adsProgress > 0.52
      ? (this.weapon.id === 'sniper' ? 'sniper' : this.weapon.id === 'rifle' ? 'reddot' : 'iron')
      : 'none';
    // The DOM scope is the optic while scoped; the first-person model would
    // otherwise sit directly in front of the camera and block the view.
    this.gunGroup.visible = mode !== 'sniper';
    this.scope.update(delta, {
      mode,
      breath: this.isHoldingBreath,
      speed
    });
  }
}
