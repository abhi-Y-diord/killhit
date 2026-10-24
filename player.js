import * as THREE from 'three';
import { PLAYER_SPAWN } from './config.js';

export class Player {
  constructor(camera, domElement, colliders, world = null) {
    this.camera = camera;
    this.domElement = domElement;
    this.colliders = colliders;
    this.world = world;

    // Spawn in the station ticket hall (camera position = eye height).
    this.spawnPosition = new THREE.Vector3(PLAYER_SPAWN.x, PLAYER_SPAWN.y, PLAYER_SPAWN.z);
    this.camera.position.copy(this.spawnPosition);

    // Physics / Movement state
    this.velocity = new THREE.Vector3();
    this.direction = new THREE.Vector3();
    this.speed = 5.0;
    this.sprintMultiplier = 1.8;
    this.gravity = 25.0;
    this.jumpForce = 8.0;
    this.radius = 0.4;
    this.height = 1.7;
    this.stepHeight = 0.34; // small ledges (stairs, curbs) are climbed automatically

    // Health state
    this.maxHealth = 100;
    this.health = 100;
    this.isDead = false;
    this.spawnProtection = 0;
    this.hasStarted = false;
    this.isPaused = false;
    this.gunRef = null;
    this.audio = null;

    // Health regeneration
    this.timeSinceDamage = 999;
    this.regenDelay = 5.0;
    this.regenRate = 10; // HP per second
    this.lastHealthShown = -1;

    // Mouse sensitivity
    this.sensitivity = 0.002;

    this.healthElement = document.getElementById('health-text');
    this.healthBarFill = document.getElementById('health-bar-fill');
    this.damageArcsContainer = document.getElementById('damage-arcs');
    this.damageVignette = document.getElementById('damage-vignette');
    this.deathScreen = document.getElementById('death-screen');

    // Directional damage indicator state (one thin red arc per recent hit).
    this.damageArcs = [];      // { element, source: Vector3, age }
    this.maxDamageArcs = 8;
    this.damageArcLife = 1.0;
    this.vignetteIntensity = 0;

    this.isLocked = false;
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.isSprinting = false;
    this.canJump = false;

    // Mouse look angles
    this.euler = new THREE.Euler(0, 0, 0, 'YXZ');
    this.PI_2 = Math.PI / 2;

    this.initEvents();
  }

  initEvents() {
    const startGame = () => {
      if (this.isDead) return;

      if (!this.hasStarted) {
        this.hasStarted = true;
        this.isPaused = false;
        const instructions = document.getElementById('instructions');
        if (instructions) instructions.style.display = 'none';
      }

      if (this.audio) this.audio.unlock();
      if (!this.isLocked) this.domElement.requestPointerLock();
    };

    this.domElement.addEventListener('click', () => {
      if (!this.isLocked && !this.isDead) startGame();
    });

    const instructionsEl = document.getElementById('instructions');
    if (instructionsEl) {
      instructionsEl.addEventListener('click', startGame);
    }

    if (this.deathScreen) {
      this.deathScreen.addEventListener('click', () => {
        if (this.isDead) {
          this.respawn();
          if (this.audio) this.audio.unlock();
          this.domElement.requestPointerLock();
        }
      });
    }

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.domElement) {
        this.isLocked = true;
        this.hasStarted = true;
      } else {
        this.isLocked = false;
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isLocked || this.isDead) return;

      // Aiming down sights lowers the turn rate.
      const zoomScale = this.gunRef && this.gunRef.getZoomSensitivityScale
        ? this.gunRef.getZoomSensitivityScale()
        : 1;
      const sens = this.sensitivity * zoomScale;

      const movementX = e.movementX || e.px || e.initX || 0;
      const movementY = e.movementY || e.py || e.initY || 0;

      this.euler.y -= movementX * sens;
      this.euler.x -= movementY * sens;

      this.euler.x = Math.max(-this.PI_2, Math.min(this.PI_2, this.euler.x));
      this.camera.quaternion.setFromEuler(this.euler);
    });

    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
  }

  setSensitivity(value) {
    this.sensitivity = value;
    try {
      localStorage.setItem('fps-sensitivity', String(value));
    } catch (err) {
      // localStorage can be unavailable; ignore.
    }
  }

  takeDamage(amount, sourcePosition = null) {
    if (this.isDead || this.spawnProtection > 0) return;
    this.health -= amount;
    this.health = Math.max(0, this.health);
    this.timeSinceDamage = 0;
    this.updateHealthUI();

    if (this.audio) this.audio.hurt();

    // Light red vignette at the screen edges (not a full-screen flash).
    this.vignetteIntensity = Math.min(0.55, this.vignetteIntensity + 0.3);

    if (sourcePosition) this.spawnDamageArc(sourcePosition);

    if (this.health <= 0) {
      this.die();
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    this.updateHealthUI();
  }

  spawnDamageArc(sourcePosition) {
    const container = this.damageArcsContainer;
    if (!container) return;

    // Drop the oldest indicator when too many stack up.
    while (this.damageArcs.length >= this.maxDamageArcs) {
      const oldest = this.damageArcs.shift();
      oldest.element.remove();
    }

    const element = document.createElement('div');
    element.className = 'dmg-arc';
    container.appendChild(element);

    this.damageArcs.push({
      element,
      source: sourcePosition.clone(),
      age: 0
    });
  }

  updateDamageIndicators(delta) {
    // Fade the red vignette at the screen edges.
    if (this.vignetteIntensity > 0 && this.damageVignette) {
      this.vignetteIntensity = Math.max(0, this.vignetteIntensity - delta * 1.4);
      this.damageVignette.style.opacity = String(this.vignetteIntensity);
    }

    if (!this.damageArcs.length) return;

    // Re-aim every arc each frame so it keeps pointing at its attacker as the player turns.
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3(-forward.z, 0, forward.x);
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.36;

    for (let i = this.damageArcs.length - 1; i >= 0; i--) {
      const arc = this.damageArcs[i];
      arc.age += delta;

      if (arc.age >= this.damageArcLife) {
        arc.element.remove();
        this.damageArcs.splice(i, 1);
        continue;
      }

      const toSource = new THREE.Vector3().subVectors(arc.source, this.camera.position);
      toSource.y = 0;
      toSource.normalize();

      // Screen angle (clockwise from screen-up) toward the attacker.
      const forwardComponent = toSource.dot(forward);
      const rightComponent = toSource.dot(right);
      const angle = Math.atan2(rightComponent, forwardComponent);

      const t = arc.age / this.damageArcLife;
      arc.element.style.opacity = String(1 - t);
      arc.element.style.transform =
        `rotate(${(angle * 180) / Math.PI}deg) translateY(${-radius}px)`;
    }
  }

  updateHealthUI() {
    const health = Math.ceil(this.health);

    if (health !== this.lastHealthShown) {
      this.lastHealthShown = health;
      if (this.healthElement) this.healthElement.textContent = `${health} / ${this.maxHealth}`;
      if (this.healthBarFill) {
        this.healthBarFill.style.width = `${(health / this.maxHealth) * 100}%`;
        this.healthBarFill.style.backgroundColor =
          health > 60 ? '#ff9a42' : health > 30 ? '#ffb300' : '#e53935';
      }
    }
  }

  die() {
    if (this.isDead) return;
    this.isDead = true;
    this.isPaused = false;
    this.clearMovementKeys();

    if (this.audio) this.audio.playerDeath();
    if (this.onDeath) this.onDeath(this);

    if (this.deathScreen) {
      this.deathScreen.style.opacity = '1';
      this.deathScreen.style.pointerEvents = 'auto';
    }

    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  respawn() {
    this.health = this.maxHealth;
    this.isDead = false;
    this.isPaused = false;
    this.spawnProtection = 0;
    this.timeSinceDamage = 999;
    this.camera.position.copy(this.spawnPosition);
    this.euler.set(0, 0, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(this.euler);
    this.velocity.set(0, 0, 0);
    this.clearMovementKeys();

    if (this.deathScreen) {
      this.deathScreen.style.opacity = '0';
      this.deathScreen.style.pointerEvents = 'none';
    }
    this.updateHealthUI();

    if (this.gunRef) {
      if (typeof this.gunRef.refillAll === 'function') {
        this.gunRef.refillAll();
      }
    }

    const instructions = document.getElementById('instructions');
    if (instructions) instructions.style.display = 'none';
  }

  clearMovementKeys() {
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.isSprinting = false;
  }

  onKeyDown(e) {
    if (!this.hasStarted || this.isDead || this.isPaused) return;

    switch (e.code) {
      case 'KeyW': this.moveForward = true; break;
      case 'KeyS': this.moveBackward = true; break;
      case 'KeyA': this.moveLeft = true; break;
      case 'KeyD': this.moveRight = true; break;
      case 'ShiftLeft':
      case 'ShiftRight': this.isSprinting = true; break;
      case 'Space':
        if (this.canJump) {
          this.velocity.y = this.jumpForce;
          this.canJump = false;
        }
        break;
    }
  }

  onKeyUp(e) {
    switch (e.code) {
      case 'KeyW': this.moveForward = false; break;
      case 'KeyS': this.moveBackward = false; break;
      case 'KeyA': this.moveLeft = false; break;
      case 'KeyD': this.moveRight = false; break;
      case 'ShiftLeft':
      case 'ShiftRight': this.isSprinting = false; break;
    }
  }

  update(delta) {
    if (this.spawnProtection > 0) {
      this.spawnProtection = Math.max(0, this.spawnProtection - delta);
    }

    // Regenerate health after staying damage-free for a while.
    if (this.hasStarted && !this.isDead && !this.isPaused) {
      this.timeSinceDamage += delta;

      if (this.timeSinceDamage >= this.regenDelay && this.health < this.maxHealth) {
        this.health = Math.min(this.maxHealth, this.health + this.regenRate * delta);
        this.updateHealthUI();
      }
    }

    // Directional hit indicators + fading edge vignette.
    this.updateDamageIndicators(delta);

    // Movement no longer waits on pointer lock (only mouse look does).
    if (!this.hasStarted || this.isDead || this.isPaused) return;

    // Apply gravity
    this.velocity.y -= this.gravity * delta;

    // Movement direction vector
    this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
    this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
    this.direction.normalize();

    let currentSpeed = this.speed;
    if (this.isSprinting && this.moveForward && !this.moveBackward && !(this.gunRef && this.gunRef.isZoomed)) {
      currentSpeed *= this.sprintMultiplier;
    }

    const cameraDirection = new THREE.Vector3();
    this.camera.getWorldDirection(cameraDirection);
    cameraDirection.y = 0;
    cameraDirection.normalize();

    const cameraSide = new THREE.Vector3(-cameraDirection.z, 0, cameraDirection.x);

    const moveVector = new THREE.Vector3();
    if (this.direction.z !== 0) {
      moveVector.addScaledVector(cameraDirection, this.direction.z * currentSpeed);
    }
    if (this.direction.x !== 0) {
      moveVector.addScaledVector(cameraSide, this.direction.x * currentSpeed);
    }

    // X Axis movement & collision
    if (moveVector.x !== 0) {
      this.camera.position.x += moveVector.x * delta;
      this.resolveCollisions('x');
    }

    // Z Axis movement & collision
    if (moveVector.z !== 0) {
      this.camera.position.z += moveVector.z * delta;
      this.resolveCollisions('z');
    }

    // Y Axis movement & collision
    this.camera.position.y += this.velocity.y * delta;
    this.resolveCollisions('y');

    // Safety net: use the real world extents. Walking between the station
    // and the street must never teleport the player, so this only fires when
    // the player is genuinely outside the outer walls or far below the map.
    const bounds = this.world && this.world.getBounds
      ? this.world.getBounds()
      : { minX: -32, maxX: 32, minZ: -46, maxZ: 47 };
    const killY = this.world && this.world.getKillY ? this.world.getKillY() : -18;
    const feetY = this.camera.position.y - this.height;
    const p = this.camera.position;
    if (
      feetY < killY ||
      p.x < bounds.minX - 1 ||
      p.x > bounds.maxX + 1 ||
      p.z < bounds.minZ - 1 ||
      p.z > bounds.maxZ + 1
    ) {
      this.safetyRespawn();
    }
  }

  safetyRespawn() {
    const point = this.world && this.world.getRespawnPoint
      ? this.world.getRespawnPoint()
      : this.spawnPosition;
    this.camera.position.set(point.x, point.y + this.height, point.z);
    this.velocity.set(0, 0, 0);
    this.canJump = true;
  }

  resolveCollisions(axis) {
    const playerPos = this.camera.position;

    for (const collider of this.colliders) {
      const box = collider.box;

      const pMinX = playerPos.x - this.radius;
      const pMaxX = playerPos.x + this.radius;
      const pMinY = playerPos.y - this.height;
      const pMaxY = playerPos.y;
      const pMinZ = playerPos.z - this.radius;
      const pMaxZ = playerPos.z + this.radius;

      if (
        pMaxX > box.min.x && pMinX < box.max.x &&
        pMaxY > box.min.y && pMinY < box.max.y &&
        pMaxZ > box.min.z && pMinZ < box.max.z
      ) {
        if (axis === 'x' || axis === 'z') {
          const feet = playerPos.y - this.height;
          const stepRise = box.max.y - feet;

          // Stairs and curbs: climb the ledge instead of being pushed back.
          if (stepRise > 0 && stepRise <= this.stepHeight) {
            playerPos.y = box.max.y + this.height;
            if (this.velocity.y < 0) this.velocity.y = 0;
            this.canJump = true;
            continue;
          }

          if (axis === 'x') {
            const overlapMin = pMaxX - box.min.x;
            const overlapMax = box.max.x - pMinX;
            if (overlapMin < overlapMax) {
              playerPos.x = box.min.x - this.radius;
            } else {
              playerPos.x = box.max.x + this.radius;
            }
          } else {
            const overlapMin = pMaxZ - box.min.z;
            const overlapMax = box.max.z - pMinZ;
            if (overlapMin < overlapMax) {
              playerPos.z = box.min.z - this.radius;
            } else {
              playerPos.z = box.max.z + this.radius;
            }
          }
        } else if (axis === 'y') {
          if (this.velocity.y <= 0) {
            playerPos.y = box.max.y + this.height;
            this.velocity.y = 0;
            this.canJump = true;
          } else {
            playerPos.y = box.min.y;
            this.velocity.y = 0;
          }
        }
      }
    }
  }
}
