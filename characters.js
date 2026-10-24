import * as THREE from 'three';
import { makeTextTexture } from './textures.js';

// ---------------------------------------------------------------------------
// Stylized low-poly operator model used by every bot. Separate body parts,
// outfit palettes, walk / aim / hit / death poses and a floating name + health
// bar. Geometry and materials are shared between bots.
// ---------------------------------------------------------------------------
const geo = {
  torso: new THREE.BoxGeometry(0.58, 0.62, 0.34),
  vest: new THREE.BoxGeometry(0.66, 0.44, 0.4),
  hips: new THREE.BoxGeometry(0.46, 0.28, 0.3),
  head: new THREE.SphereGeometry(0.17, 12, 10),
  helmet: new THREE.SphereGeometry(0.2, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.62),
  brim: new THREE.BoxGeometry(0.32, 0.05, 0.28),
  mask: new THREE.BoxGeometry(0.24, 0.1, 0.06),
  upperArm: new THREE.CapsuleGeometry(0.07, 0.24, 4, 8),
  foreArm: new THREE.CapsuleGeometry(0.062, 0.22, 4, 8),
  hand: new THREE.SphereGeometry(0.07, 8, 6),
  upperLeg: new THREE.CapsuleGeometry(0.085, 0.3, 4, 8),
  lowerLeg: new THREE.CapsuleGeometry(0.075, 0.3, 4, 8),
  boot: new THREE.BoxGeometry(0.16, 0.15, 0.28),
  knee: new THREE.BoxGeometry(0.15, 0.12, 0.12),
  pouch: new THREE.BoxGeometry(0.14, 0.16, 0.08),
  backpack: new THREE.BoxGeometry(0.38, 0.44, 0.16),
  shoulder: new THREE.SphereGeometry(0.105, 8, 6),
  gunBody: new THREE.BoxGeometry(0.1, 0.12, 0.52),
  gunBarrel: new THREE.CylinderGeometry(0.022, 0.022, 0.42, 8),
  gunMag: new THREE.BoxGeometry(0.07, 0.2, 0.11),
  gunStock: new THREE.BoxGeometry(0.08, 0.1, 0.22),
  gunSight: new THREE.BoxGeometry(0.07, 0.06, 0.1)
};

const matCache = new Map();
function mat(color, metalness = 0.04, roughness = 0.7) {
  const key = `${color}-${metalness}-${roughness}`;
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshStandardMaterial({ color, metalness, roughness }));
  }
  return matCache.get(key);
}

function part(parent, geometry, material, x, y, z) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

// Shared enemy aura: an inverted-hull silhouette plus a soft additive glow.
// Both are depth-tested so walls and props still occlude them.
const auraOutlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xff2a24,
  transparent: true,
  opacity: 0.55,
  side: THREE.BackSide,
  depthWrite: false,
  depthTest: true
});

function makeAuraGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,70,50,0.55)');
  gradient.addColorStop(0.4, 'rgba(255,40,30,0.22)');
  gradient.addColorStop(1, 'rgba(255,20,20,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const auraGlowMaterial = new THREE.SpriteMaterial({
  map: makeAuraGlowTexture(),
  color: 0xff4030,
  transparent: true,
  opacity: 0.5,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  depthTest: true
});

const PALETTES = [
  { outfit: 0x313d4a, vest: 0x1c252e, accent: 0x3df0ff, pants: 0x232c35, skin: 0xc69372, helmet: 0x161d23 },
  { outfit: 0x4a3830, vest: 0x2a201b, accent: 0xffb45a, pants: 0x2b2420, skin: 0x9a6b4f, helmet: 0x241b16 },
  { outfit: 0x31473a, vest: 0x1d2b23, accent: 0x8cff5a, pants: 0x1f2a23, skin: 0xb88463, helmet: 0x18211b },
  { outfit: 0x463149, vest: 0x291d2b, accent: 0xff4fa3, pants: 0x2a202c, skin: 0xcf9a76, helmet: 0x211725 },
  { outfit: 0x3b3b44, vest: 0x222229, accent: 0xffd23a, pants: 0x2b2b32, skin: 0x8a5f48, helmet: 0x1b1b20 },
  { outfit: 0x2f4155, vest: 0x1b2735, accent: 0xff5a4a, pants: 0x202b38, skin: 0xd0a07f, helmet: 0x151e28 }
];

export class BotCharacter {
  constructor(scene, name, paletteIndex = 0, options = {}) {
    const p = PALETTES[paletteIndex % PALETTES.length];
    this.showAura = options.aura !== false;
    this.palette = p;
    this.root = new THREE.Group();
    this.parts = {};
    this.hitMeshes = [];
    this.flashMeshes = [];
    this.deathT = 0;
    this.dead = false;
    this.phase = Math.random() * Math.PI * 2;

    const outfit = mat(p.outfit);
    const vest = mat(p.vest, 0.1, 0.7);
    const pants = mat(p.pants, 0.02, 0.85);
    const accent = mat(p.accent, 0.25, 0.35);
    const skin = mat(p.skin, 0, 0.72);
    const helmet = mat(p.helmet, 0.35, 0.4);
    const dark = mat(0x13181c, 0.5, 0.5);
    this.materials = [outfit, vest, pants, accent, skin, helmet];

    // Hips + torso.
    this.parts.hips = part(this.root, geo.hips, pants, 0, 0.86, 0);
    this.parts.torso = part(this.root, geo.torso, outfit, 0, 1.25, 0);
    this.parts.vest = part(this.root, geo.vest, vest, 0, 1.31, -0.005);
    part(this.root, geo.shoulder, vest, -0.36, 1.47, 0);
    part(this.root, geo.shoulder, vest, 0.36, 1.47, 0);
    // Chest pouches + belt.
    part(this.root, geo.pouch, dark, -0.16, 1.23, -0.21);
    part(this.root, geo.pouch, dark, 0.16, 1.23, -0.21);
    part(this.root, geo.pouch, dark, 0.0, 0.99, -0.19);
    part(this.root, new THREE.BoxGeometry(0.5, 0.07, 0.33), accent, 0, 1.03, 0);
    // Backpack.
    part(this.root, geo.backpack, mat(0x1a2026), 0, 1.3, 0.26);

    // Head / helmet / mask.
    this.parts.head = part(this.root, geo.head, skin, 0, 1.72, 0);
    this.parts.helmet = part(this.root, geo.helmet, helmet, 0, 1.79, 0);
    part(this.root, geo.brim, helmet, 0, 1.74, -0.16);
    const mask = part(this.root, geo.mask, dark, 0, 1.69, -0.155);
    mask.scale.x = 1.0;
    // Glowing visor accent.
    const visor = part(this.root, new THREE.BoxGeometry(0.18, 0.035, 0.02), accent, 0, 1.735, -0.205);
    visor.material = new THREE.MeshBasicMaterial({ color: p.accent });

    // Arms: pivots at shoulders, then elbows.
    this.parts.armL = new THREE.Group();
    this.parts.armL.position.set(-0.38, 1.46, 0);
    this.root.add(this.parts.armL);
    part(this.parts.armL, geo.upperArm, outfit, 0, -0.18, 0);
    this.parts.elbowL = new THREE.Group();
    this.parts.elbowL.position.set(0, -0.36, 0);
    this.parts.armL.add(this.parts.elbowL);
    part(this.parts.elbowL, geo.foreArm, skin, 0, -0.16, 0);
    this.parts.handL = part(this.parts.elbowL, geo.hand, mat(0x1a1a1d), 0, -0.34, 0);

    this.parts.armR = new THREE.Group();
    this.parts.armR.position.set(0.38, 1.46, 0);
    this.root.add(this.parts.armR);
    part(this.parts.armR, geo.upperArm, outfit, 0, -0.18, 0);
    this.parts.elbowR = new THREE.Group();
    this.parts.elbowR.position.set(0, -0.36, 0);
    this.parts.armR.add(this.parts.elbowR);
    part(this.parts.elbowR, geo.foreArm, skin, 0, -0.16, 0);
    this.parts.handR = part(this.parts.elbowR, geo.hand, mat(0x1a1a1d), 0, -0.34, 0);
    // Elbow pads.
    part(this.parts.elbowL, new THREE.BoxGeometry(0.12, 0.1, 0.12), vest, 0, -0.02, 0);
    part(this.parts.elbowR, new THREE.BoxGeometry(0.12, 0.1, 0.12), vest, 0, -0.02, 0);

    // Legs: pivots at hips, then knees.
    this.parts.legL = new THREE.Group();
    this.parts.legL.position.set(-0.15, 0.8, 0);
    this.root.add(this.parts.legL);
    part(this.parts.legL, geo.upperLeg, pants, 0, -0.2, 0);
    this.parts.kneeL = new THREE.Group();
    this.parts.kneeL.position.set(0, -0.4, 0);
    this.parts.legL.add(this.parts.kneeL);
    part(this.parts.kneeL, geo.lowerLeg, pants, 0, -0.18, 0);
    part(this.parts.kneeL, geo.knee, vest, 0, -0.02, -0.07);
    part(this.parts.kneeL, geo.boot, dark, 0, -0.39, -0.04);

    this.parts.legR = new THREE.Group();
    this.parts.legR.position.set(0.15, 0.8, 0);
    this.root.add(this.parts.legR);
    part(this.parts.legR, geo.upperLeg, pants, 0, -0.2, 0);
    this.parts.kneeR = new THREE.Group();
    this.parts.kneeR.position.set(0, -0.4, 0);
    this.parts.legR.add(this.parts.kneeR);
    part(this.parts.kneeR, geo.lowerLeg, pants, 0, -0.18, 0);
    part(this.parts.kneeR, geo.knee, vest, 0, -0.02, -0.07);
    part(this.parts.kneeR, geo.boot, dark, 0, -0.39, -0.04);

    // Enemy rifle in the right hand.
    this.gun = new THREE.Group();
    this.gun.position.set(0, -0.34, -0.05);
    this.parts.elbowR.add(this.gun);
    part(this.gun, geo.gunBody, mat(0x20262b, 0.5, 0.5), 0, 0, -0.16);
    part(this.gun, geo.gunBarrel, mat(0x12171b, 0.8, 0.35), 0, 0.02, -0.5).rotation.x = Math.PI / 2;
    part(this.gun, geo.gunMag, dark, 0, -0.12, -0.1);
    part(this.gun, geo.gunStock, dark, 0, 0.01, 0.22);
    part(this.gun, geo.gunSight, dark, 0, 0.1, -0.26);
    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.02, -0.74);
    this.gun.add(this.muzzle);

    // Hit meshes: torso, head and limbs. Head uses a separate flag.
    this.hitMeshes.push(this.parts.torso, this.parts.head, this.parts.hips);
    for (const arm of [this.parts.armL, this.parts.armR]) {
      arm.traverse(c => { if (c.isMesh) this.hitMeshes.push(c); });
    }
    for (const leg of [this.parts.legL, this.parts.legR]) {
      leg.traverse(c => { if (c.isMesh) this.hitMeshes.push(c); });
    }

    // Red silhouette + soft body glow (added after hitMeshes so shots ignore it).
    if (this.showAura) this.addAura();

    // Floating name plate + health bar.
    this.tagCanvas = document.createElement('canvas');
    this.tagCanvas.width = 256;
    this.tagCanvas.height = 80;
    this.tagTexture = new THREE.CanvasTexture(this.tagCanvas);
    this.tagTexture.colorSpace = THREE.SRGBColorSpace;
    this.tag = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.tagTexture, transparent: true, depthWrite: false, depthTest: true
    }));
    this.tag.scale.set(1.22, 0.38, 1);
    this.tag.position.y = 2.28;
    this.root.add(this.tag);
    this.setName(name);

    scene.add(this.root);
  }

  addAura() {
    const bodyMeshes = [];
    this.root.traverse(object => {
      if (!object.isMesh) return;
      let parent = object.parent;
      while (parent && parent !== this.root) {
        if (parent === this.gun) return;
        parent = parent.parent;
      }
      bodyMeshes.push(object);
    });

    for (const mesh of bodyMeshes) {
      const shell = new THREE.Mesh(mesh.geometry, auraOutlineMaterial);
      shell.position.copy(mesh.position);
      shell.quaternion.copy(mesh.quaternion);
      shell.scale.copy(mesh.scale).multiplyScalar(1.06);
      shell.castShadow = false;
      shell.receiveShadow = false;
      shell.renderOrder = -1;
      shell.userData.aura = true;
      mesh.parent.add(shell);
    }

    this.auraGlow = new THREE.Sprite(auraGlowMaterial);
    this.auraGlow.scale.set(2.4, 3.2, 1);
    this.auraGlow.position.set(0, 1.15, 0);
    this.auraGlow.renderOrder = -1;
    this.root.add(this.auraGlow);
  }

  setName(name) {
    this.name = name;
  }

  setHealth(health, maxHealth) {
    const ctx = this.tagCanvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 80);
    const frac = Math.max(0, Math.min(1, health / maxHealth));
    const x = 22;
    const y = 28;
    const w = 212;
    const h = 18;
    ctx.fillStyle = 'rgba(0,0,0,0.72)';
    ctx.fillRect(x - 2, y - 2, w + 4, h + 4);
    const glow = ctx.createLinearGradient(0, y, 0, y + h);
    glow.addColorStop(0, '#ff5a4a');
    glow.addColorStop(1, '#c81e12');
    ctx.fillStyle = glow;
    ctx.fillRect(x, y, w * frac, h);
    ctx.strokeStyle = 'rgba(255,125,105,0.9)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, w, h);
    this.tagTexture.needsUpdate = true;
  }

  flash() {
    for (const m of this.materials) m.emissive?.setHex(0x332222);
    setTimeout(() => {
      for (const m of this.materials) m.emissive?.setHex(0x000000);
    }, 80);
  }

  playDeath() {
    this.dead = true;
    this.deathT = 0;
    this.tag.visible = false;
    if (this.auraGlow) this.auraGlow.visible = false;
  }

  update(delta, state) {
    if (this.dead) {
      this.deathT += delta;
      const t = Math.min(1, this.deathT / 0.85);
      this.root.rotation.x = -t * Math.PI * 0.5;
      this.root.position.y += delta * 0.05;
      this.root.visible = this.deathT < 6.0;
      return;
    }

    const speed = state.speed || 0;
    if (speed > 0.05) this.phase += delta * (6.5 + speed * 0.9);
    const swing = Math.sin(this.phase) * Math.min(1, speed / 3.2);
    this.parts.legL.rotation.x = swing * 0.55;
    this.parts.legR.rotation.x = -swing * 0.55;
    this.parts.kneeL.rotation.x = Math.max(0, -swing) * 0.6;
    this.parts.kneeR.rotation.x = Math.max(0, swing) * 0.6;

    if (state.aiming) {
      this.parts.armR.rotation.x = -1.35;
      this.parts.armR.rotation.z = -0.1;
      this.parts.elbowR.rotation.x = -0.28;
      this.parts.armL.rotation.x = -1.2;
      this.parts.armL.rotation.z = 0.42;
      this.parts.elbowL.rotation.x = -0.45;
    } else {
      const armSwing = swing * 0.42;
      this.parts.armR.rotation.x = armSwing;
      this.parts.armR.rotation.z = -0.06;
      this.parts.elbowR.rotation.x = -0.18;
      this.parts.armL.rotation.x = -armSwing;
      this.parts.armL.rotation.z = 0.06;
      this.parts.elbowL.rotation.x = -0.18;
    }

    if (state.hit > 0) {
      this.root.rotation.z = Math.sin(state.hit * 40) * 0.08;
      state.hit = Math.max(0, state.hit - delta);
    } else {
      this.root.rotation.z *= 0.85;
    }

    if (this.tag) {
      this.tag.position.y = 2.28;
    }
  }
}
