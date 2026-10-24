import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Shared PBR materials, noise/wear maps and cached geometry.
// ---------------------------------------------------------------------------
function makeNoiseTexture(base = 128, spread = 26, scratches = true) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(128, 128);
  for (let i = 0; i < image.data.length; i += 4) {
    const value = Math.max(0, Math.min(255, base + (Math.random() - 0.5) * spread));
    image.data[i] = image.data[i + 1] = image.data[i + 2] = value;
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  if (scratches) {
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = '#f4f4f4';
    for (let i = 0; i < 18; i++) {
      ctx.beginPath();
      const y = Math.random() * 128;
      ctx.moveTo(Math.random() * 40, y);
      ctx.lineTo(40 + Math.random() * 90, y + (Math.random() - 0.5) * 2);
      ctx.stroke();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.5, 2.5);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function makeWoodTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#5b3822';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 34; i++) {
    ctx.strokeStyle = i % 3 ? 'rgba(35,18,10,0.26)' : 'rgba(160,105,60,0.16)';
    ctx.lineWidth = 0.6 + Math.random() * 1.6;
    ctx.beginPath();
    const x = Math.random() * 128;
    ctx.moveTo(x, 0);
    ctx.bezierCurveTo(x + 9, 42, x - 8, 88, x + 3, 128);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.4, 1.4);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const metalWear = makeNoiseTexture(126, 30, true);
const polymerWear = makeNoiseTexture(112, 18, false);

export const gunMaterials = {
  metal: new THREE.MeshStandardMaterial({
    color: 0x515b5f,
    metalness: 0.58,
    roughness: 0.44,
    roughnessMap: metalWear,
    bumpMap: metalWear,
    bumpScale: 0.0024,
    emissive: 0x080b0c,
    emissiveIntensity: 0.32
  }),
  steel: new THREE.MeshStandardMaterial({
    color: 0xb0babd,
    metalness: 0.72,
    roughness: 0.27,
    roughnessMap: metalWear,
    bumpMap: metalWear,
    bumpScale: 0.0015,
    emissive: 0x07090a,
    emissiveIntensity: 0.22
  }),
  darkSteel: new THREE.MeshStandardMaterial({
    color: 0x3a4245,
    metalness: 0.62,
    roughness: 0.38,
    roughnessMap: metalWear,
    bumpMap: metalWear,
    bumpScale: 0.0018,
    emissive: 0x050708,
    emissiveIntensity: 0.3
  }),
  polymer: new THREE.MeshStandardMaterial({
    color: 0x24282a,
    metalness: 0.06,
    roughness: 0.78,
    roughnessMap: polymerWear,
    bumpMap: polymerWear,
    bumpScale: 0.0016,
    emissive: 0x040505,
    emissiveIntensity: 0.26
  }),
  rubber: new THREE.MeshStandardMaterial({
    color: 0x161718,
    metalness: 0.01,
    roughness: 0.95,
    roughnessMap: polymerWear,
    emissive: 0x030303,
    emissiveIntensity: 0.2
  }),
  wood: new THREE.MeshStandardMaterial({
    color: 0x8a5530,
    metalness: 0.02,
    roughness: 0.55,
    map: makeWoodTexture(),
    roughnessMap: polymerWear,
    bumpMap: polymerWear,
    bumpScale: 0.002,
    emissive: 0x0d0703,
    emissiveIntensity: 0.22
  }),
  glove: new THREE.MeshStandardMaterial({
    color: 0x6a5e4d,
    metalness: 0.02,
    roughness: 0.92,
    emissive: 0x0b0805,
    emissiveIntensity: 0.28
  }),
  sleeve: new THREE.MeshStandardMaterial({
    color: 0x4a4e45,
    metalness: 0.02,
    roughness: 0.88,
    emissive: 0x070806,
    emissiveIntensity: 0.24
  }),
  lens: new THREE.MeshStandardMaterial({
    color: 0x15313b,
    metalness: 0.9,
    roughness: 0.04,
    transparent: true,
    opacity: 0.42,
    emissive: 0x0a2028,
    emissiveIntensity: 0.65,
    side: THREE.DoubleSide,
    depthWrite: false
  }),
  redLens: new THREE.MeshStandardMaterial({
    color: 0x2b0808,
    metalness: 0.75,
    roughness: 0.08,
    transparent: true,
    opacity: 0.4,
    emissive: 0x9a140c,
    emissiveIntensity: 0.9,
    side: THREE.DoubleSide,
    depthWrite: false
  }),
  brass: new THREE.MeshStandardMaterial({ color: 0xb48a3d, metalness: 0.92, roughness: 0.28 })
};

const geometryCache = new Map();
function cacheGeometry(key, make) {
  if (!geometryCache.has(key)) geometryCache.set(key, make());
  return geometryCache.get(key);
}

function roundedGeo(w, h, d, radius = 0.01) {
  const key = `r:${w}:${h}:${d}:${radius}`;
  return cacheGeometry(key, () => new RoundedBoxGeometry(w, h, d, 3, Math.min(radius, w / 2.01, h / 2.01, d / 2.01)));
}

function cylinderGeo(rt, rb, length, segments = 12, open = false) {
  const key = `c:${rt}:${rb}:${length}:${segments}:${open}`;
  return cacheGeometry(key, () => new THREE.CylinderGeometry(rt, rb, length, segments, 1, open));
}

function circleGeo(radius, segments = 16) {
  return cacheGeometry(`circle:${radius}:${segments}`, () => new THREE.CircleGeometry(radius, segments));
}

function addBox(parent, material, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0, radius = 0.008) {
  const mesh = new THREE.Mesh(roundedGeo(w, h, d, radius), material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  parent.add(mesh);
  return mesh;
}

function addCylinder(parent, material, radius, length, x, y, z, rx = Math.PI / 2, rz = 0, segments = 12, open = false) {
  const mesh = new THREE.Mesh(cylinderGeo(radius, radius, length, segments, open), material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, 0, rz);
  parent.add(mesh);
  return mesh;
}

function addTorus(parent, material, radius, tube, x, y, z, arc = Math.PI * 1.4) {
  const geo = cacheGeometry(`torus:${radius}:${tube}:${arc}`, () => new THREE.TorusGeometry(radius, tube, 6, 18, arc));
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(0, Math.PI / 2, -0.3);
  parent.add(mesh);
  return mesh;
}

function sideProfile(points, width, material, x, y, z) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) shape.lineTo(points[i][0], points[i][1]);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.003,
    bevelSegments: 2,
    steps: 1,
    curveSegments: 4
  });
  geo.translate(0, 0, -width / 2);
  geo.rotateY(Math.PI / 2);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  return mesh;
}

function addScrew(parent, x, y, z) {
  const mesh = new THREE.Mesh(cylinderGeo(0.007, 0.007, 0.006, 8), gunMaterials.darkSteel);
  mesh.rotation.z = Math.PI / 2;
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function addRailSlots(parent, y, zStart, zStep, count, width = 0.075) {
  for (let i = 0; i < count; i++) {
    addBox(parent, gunMaterials.darkSteel, width, 0.007, 0.014, 0, y, zStart - i * zStep, 0, 0, 0, 0.002);
  }
}

function addPanelLine(parent, x, y, z, w, h, d) {
  addBox(parent, gunMaterials.darkSteel, w, h, d, x, y, z, 0, 0, 0, 0.001);
}

function addEjectionPort(parent, side, y, z, w = 0.055, h = 0.027) {
  addBox(parent, gunMaterials.darkSteel, 0.006, h, w, side, y, z, 0, 0, 0, 0.001);
  addBox(parent, gunMaterials.brass, 0.004, h * 0.45, w * 0.6, side + 0.002, y, z, 0, 0, 0, 0.001);
}

function addGrip(parent, length = 1) {
  const points = [
    [0, 0],
    [0.073, 0],
    [0.055, -0.09 * length],
    [0.02, -0.22 * length],
    [-0.058, -0.245 * length],
    [-0.078, -0.1 * length]
  ];
  const grip = sideProfile(points, 0.074, gunMaterials.polymer, 0, -0.075, 0.19);
  parent.add(grip);
  addBox(parent, gunMaterials.polymer, 0.07, 0.022, 0.09, 0, -0.078, 0.157, 0.1, 0, 0, 0.006);
  addTorus(parent, gunMaterials.darkSteel, 0.043, 0.007, 0, -0.085, 0.135);
  addBox(parent, gunMaterials.steel, 0.012, 0.045, 0.012, 0, -0.11, 0.145, -0.18, 0, 0, 0.004);
  return grip;
}

function addStock(parent, length = 1, material = gunMaterials.polymer) {
  const points = [
    [0, 0.018],
    [-0.06, 0.02],
    [-0.25 * length, -0.02],
    [-0.29 * length, -0.14],
    [-0.18 * length, -0.17],
    [-0.02, -0.15],
    [0, -0.05]
  ];
  const stock = sideProfile(points, 0.09, material, 0, 0.035, 0.37);
  parent.add(stock);
  addBox(parent, gunMaterials.rubber, 0.095, 0.18, 0.045, 0, -0.02, 0.37 + 0.29 * length, 0, 0, 0, 0.012);
  return stock;
}

function addRedDot(parent) {
  addBox(parent, gunMaterials.darkSteel, 0.075, 0.025, 0.13, 0, 0.087, 0.02, 0, 0, 0, 0.004);
  addBox(parent, gunMaterials.darkSteel, 0.06, 0.025, 0.035, 0, 0.115, 0.065, 0, 0, 0, 0.004);
  addCylinder(parent, gunMaterials.darkSteel, 0.045, 0.095, 0, 0.155, 0.01, Math.PI / 2, 0, 16, true);
  const lens = new THREE.Mesh(circleGeo(0.04), gunMaterials.redLens);
  lens.position.set(0, 0.155, -0.038);
  parent.add(lens);
  const back = new THREE.Mesh(circleGeo(0.038), gunMaterials.lens);
  back.rotation.y = Math.PI;
  back.position.set(0, 0.155, 0.058);
  parent.add(back);
  addBox(parent, gunMaterials.steel, 0.008, 0.018, 0.018, 0.045, 0.14, 0.01, 0, 0, 0, 0.002);
  addBox(parent, gunMaterials.steel, 0.018, 0.008, 0.018, 0.045, 0.155, 0.01, 0, 0, 0, 0.002);
}

function addSniperScope(parent) {
  // Mounts and rings.
  addBox(parent, gunMaterials.darkSteel, 0.11, 0.035, 0.16, 0, 0.112, -0.02, 0, 0, 0, 0.004);
  for (const z of [-0.13, 0.09]) {
    addCylinder(parent, gunMaterials.darkSteel, 0.057, 0.025, 0, 0.17, z, 0, 0, 16, true);
    addBox(parent, gunMaterials.steel, 0.028, 0.055, 0.02, 0, 0.128, z, 0, 0, 0, 0.002);
  }
  // Main tube, objective bell and ocular.
  addCylinder(parent, gunMaterials.steel, 0.045, 0.31, 0, 0.17, -0.02, Math.PI / 2, 0, 18, true);
  addCylinder(parent, gunMaterials.darkSteel, 0.061, 0.075, 0, 0.17, -0.195, Math.PI / 2, 0, 18, true);
  addCylinder(parent, gunMaterials.darkSteel, 0.052, 0.06, 0, 0.17, 0.16, Math.PI / 2, 0, 18, true);
  addCylinder(parent, gunMaterials.rubber, 0.063, 0.012, 0, 0.17, -0.235, Math.PI / 2, 0, 18, true);
  // Lenses.
  const objective = new THREE.Mesh(circleGeo(0.055), gunMaterials.lens);
  objective.position.set(0, 0.17, -0.233);
  parent.add(objective);
  const ocular = new THREE.Mesh(circleGeo(0.046), gunMaterials.lens);
  ocular.rotation.y = Math.PI;
  ocular.position.set(0, 0.17, 0.192);
  parent.add(ocular);
  // Turrets.
  addCylinder(parent, gunMaterials.darkSteel, 0.028, 0.05, 0.045, 0.205, 0.02, Math.PI / 2, 0, 12);
  addCylinder(parent, gunMaterials.darkSteel, 0.026, 0.045, 0, 0.235, 0.02, 0, 0, 12);
  addCylinder(parent, gunMaterials.steel, 0.034, 0.016, 0.045, 0.205, 0.02, Math.PI / 2, 0, 12);
  addCylinder(parent, gunMaterials.steel, 0.032, 0.014, 0, 0.257, 0.02, 0, 0, 12);
  // Adjustment marks.
  for (let i = 0; i < 5; i++) {
    addBox(parent, gunMaterials.steel, 0.002, 0.004, 0.012, 0.075, 0.19 + i * 0.006, 0.02, 0, 0, 0, 0.0005);
  }
}

function addRifleBackupSights(parent) {
  addBox(parent, gunMaterials.darkSteel, 0.026, 0.04, 0.018, 0, 0.1, 0.18, 0, 0, 0, 0.002);
  addBox(parent, gunMaterials.darkSteel, 0.026, 0.05, 0.016, 0, 0.105, -0.63, 0, 0, 0, 0.002);
  addBox(parent, gunMaterials.steel, 0.004, 0.028, 0.004, 0, 0.125, -0.63, 0, 0, 0, 0.001);
}

function addMuzzleBrake(parent, z, radius, material, slots = 3) {
  addCylinder(parent, material, radius, 0.085, 0, 0.02, z, Math.PI / 2, 0, 14);
  for (let i = 0; i < slots; i++) {
    addBox(parent, gunMaterials.darkSteel, radius * 2.1, 0.016, 0.009, 0, 0.02, z - 0.026 + i * 0.025, 0, 0, 0, 0.001);
  }
}

// ---------------------------------------------------------------------------
// First-person arms.
// ---------------------------------------------------------------------------
function addGlovedHand(parent, x, y, z, flip = 1) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  addBox(group, gunMaterials.glove, 0.075, 0.085, 0.095, 0, 0, 0, 0, 0, 0, 0.024);
  for (let i = 0; i < 4; i++) {
    addBox(group, gunMaterials.glove, 0.055, 0.019, 0.022, 0.022 * flip, 0.032 - i * 0.019, -0.048, 0, 0, 0.04, 0.008);
  }
  addBox(group, gunMaterials.glove, 0.026, 0.055, 0.028, -0.045 * flip, -0.005, -0.008, 0, 0, 0.35 * flip, 0.01);
  parent.add(group);
  return group;
}

function addForearm(parent, from, to) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const direction = end.clone().sub(start);
  const length = direction.length();
  const mesh = new THREE.Mesh(cylinderGeo(0.032, 0.055, length, 10), gunMaterials.sleeve);
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  parent.add(mesh);
  const cuff = new THREE.Mesh(cylinderGeo(0.036, 0.036, 0.04, 10), gunMaterials.glove);
  cuff.position.copy(start);
  cuff.quaternion.copy(mesh.quaternion);
  parent.add(cuff);
}

export function buildFirstPersonArms(id, meta) {
  const arms = new THREE.Group();
  const right = meta.rightHand;
  const left = meta.leftHand;

  addGlovedHand(arms, right.x, right.y, right.z, 1);
  addGlovedHand(arms, left.x, left.y, left.z, -1);

  addForearm(arms, [right.x + 0.012, right.y - 0.005, right.z + 0.02], [0.28, -0.5, 0.36]);
  addForearm(arms, [left.x - 0.012, left.y - 0.005, left.z + 0.02], [-0.26, -0.52, 0.3]);

  // A hint of the support elbow/wrist keeps the silhouette readable.
  addBox(arms, gunMaterials.glove, 0.07, 0.05, 0.1, right.x - 0.01, right.y + 0.03, right.z + 0.07, 0.2, 0, 0, 0.02);
  addBox(arms, gunMaterials.glove, 0.07, 0.05, 0.1, left.x + 0.01, left.y + 0.03, left.z + 0.07, 0.2, 0, 0, 0.02);

  if (id === 'pistol') {
    arms.scale.set(0.96, 0.96, 0.96);
    arms.position.set(0, 0.03, 0.03);
  }
  mergeStaticMeshes(arms);
  return arms;
}

// ---------------------------------------------------------------------------
// Weapon builders.
// ---------------------------------------------------------------------------
function buildRifle() {
  const group = new THREE.Group();
  const m = gunMaterials;

  addBox(group, m.metal, 0.13, 0.135, 0.54, 0, 0, 0.02, 0, 0, 0, 0.018);
  addBox(group, m.darkSteel, 0.118, 0.035, 0.5, 0, 0.077, 0.02, 0, 0, 0, 0.008);
  addRailSlots(group, 0.099, 0.16, 0.045, 9);
  addBox(group, m.darkSteel, 0.106, 0.115, 0.36, 0, -0.002, -0.43, 0, 0, 0, 0.02);
  addRailSlots(group, 0.063, -0.26, 0.045, 7, 0.066);
  addBox(group, m.polymer, 0.034, 0.086, 0.34, -0.068, -0.015, -0.43, 0, 0, 0, 0.012);
  addBox(group, m.polymer, 0.034, 0.086, 0.34, 0.068, -0.015, -0.43, 0, 0, 0, 0.012);
  for (let i = 0; i < 5; i++) {
    addBox(group, m.darkSteel, 0.006, 0.038, 0.052, -0.087, -0.015, -0.32 - i * 0.055, 0, 0, 0, 0.003);
    addBox(group, m.darkSteel, 0.006, 0.038, 0.052, 0.087, -0.015, -0.32 - i * 0.055, 0, 0, 0, 0.003);
  }

  addCylinder(group, m.steel, 0.019, 0.42, 0, 0.02, -0.72, Math.PI / 2, 0, 14);
  addCylinder(group, m.darkSteel, 0.027, 0.1, 0, 0.02, -0.94, Math.PI / 2, 0, 14, true);
  addMuzzleBrake(group, -0.99, 0.032, m.darkSteel, 3);
  addCylinder(group, m.darkSteel, 0.036, 0.06, 0, 0.02, -0.62, Math.PI / 2, 0, 12);

  addGrip(group, 1);
  addBox(group, m.polymer, 0.07, 0.21, 0.1, 0, -0.19, 0.01, -0.18, 0, 0, 0.012);
  addBox(group, m.darkSteel, 0.075, 0.025, 0.105, 0, -0.3, 0.035, -0.18, 0, 0, 0.006);
  addBox(group, m.polymer, 0.04, 0.022, 0.1, 0.06, 0.075, 0.18, 0, 0, 0, 0.004);
  addStock(group, 1, m.polymer);
  addCylinder(group, m.darkSteel, 0.027, 0.2, 0, 0.032, 0.36, Math.PI / 2, 0, 12);

  addRedDot(group);
  addRifleBackupSights(group);
  addEjectionPort(group, 0.066, 0.035, 0.075);
  addBox(group, m.steel, 0.05, 0.012, 0.04, 0.068, 0.035, 0.2, 0, 0, 0, 0.002);
  addBox(group, m.darkSteel, 0.03, 0.018, 0.055, 0, 0.116, 0.17, 0, 0, 0, 0.004);
  addBox(group, m.steel, 0.004, 0.036, 0.1, 0, 0.09, 0.27, 0, 0, 0, 0.001);
  addScrew(group, 0.068, 0.012, 0.22);
  addScrew(group, -0.068, 0.012, 0.22);
  addScrew(group, 0.068, -0.03, 0.32);
  addPanelLine(group, 0, -0.065, 0.055, 0.085, 0.002, 0.012);

  return {
    group,
    muzzle: new THREE.Vector3(0, 0.02, -1.04),
    sight: new THREE.Vector3(0, 0.155, 0.01),
    eject: new THREE.Vector3(0.11, 0.045, 0.08),
    rightHand: new THREE.Vector3(-0.04, -0.17, 0.19),
    leftHand: new THREE.Vector3(-0.085, -0.115, -0.39),
    scopeZ: -0.65
  };
}

function buildPistol() {
  const group = new THREE.Group();
  const m = gunMaterials;

  addBox(group, m.metal, 0.095, 0.105, 0.36, 0, 0.045, -0.02, 0, 0, 0, 0.018);
  addBox(group, m.darkSteel, 0.088, 0.025, 0.3, 0, 0.105, -0.04, 0, 0, 0, 0.008);
  for (let i = 0; i < 9; i++) {
    addBox(group, m.darkSteel, 0.003, 0.052, 0.011, 0.049, 0.045, 0.1 + i * -0.018, 0, 0, 0, 0.001);
    addBox(group, m.darkSteel, 0.003, 0.052, 0.011, -0.049, 0.045, 0.1 + i * -0.018, 0, 0, 0, 0.001);
  }
  addCylinder(group, m.steel, 0.018, 0.15, 0, 0.045, -0.265, Math.PI / 2, 0, 12);
  addCylinder(group, m.darkSteel, 0.023, 0.035, 0, 0.045, -0.35, Math.PI / 2, 0, 12, true);
  addBox(group, m.polymer, 0.074, 0.1, 0.09, 0, 0.0, 0.11, 0, 0, 0, 0.012);

  const points = [
    [0, 0],
    [0.06, 0],
    [0.04, -0.12],
    [0.01, -0.25],
    [-0.05, -0.255],
    [-0.06, -0.11]
  ];
  group.add(sideProfile(points, 0.072, m.polymer, 0, -0.05, 0.13));
  addTorus(group, m.darkSteel, 0.035, 0.006, 0, -0.065, 0.09);
  addBox(group, m.steel, 0.011, 0.04, 0.011, 0, -0.09, 0.1, -0.2, 0, 0, 0.003);
  addBox(group, m.polymer, 0.065, 0.018, 0.08, 0, -0.3, 0.155, 0.16, 0, 0, 0.008);

  addBox(group, m.darkSteel, 0.025, 0.022, 0.028, 0, 0.132, -0.15, 0, 0, 0, 0.003);
  addBox(group, m.steel, 0.005, 0.02, 0.01, 0, 0.146, -0.15, 0, 0, 0, 0.001);
  addBox(group, m.darkSteel, 0.054, 0.02, 0.026, 0, 0.134, 0.105, 0, 0, 0, 0.003);
  addBox(group, m.darkSteel, 0.012, 0.012, 0.025, -0.02, 0.128, 0.105, 0, 0, 0, 0.002);
  addBox(group, m.darkSteel, 0.012, 0.012, 0.025, 0.02, 0.128, 0.105, 0, 0, 0, 0.002);
  addEjectionPort(group, 0.049, 0.075, -0.02, 0.05, 0.022);
  addScrew(group, 0.049, 0.02, 0.09);
  addScrew(group, -0.049, 0.02, 0.09);
  addPanelLine(group, 0, 0.112, 0.12, 0.055, 0.002, 0.01);

  return {
    group,
    muzzle: new THREE.Vector3(0, 0.045, -0.38),
    sight: new THREE.Vector3(0, 0.145, 0.105),
    eject: new THREE.Vector3(0.08, 0.075, -0.01),
    rightHand: new THREE.Vector3(-0.022, -0.14, 0.16),
    leftHand: new THREE.Vector3(-0.072, -0.12, 0.09),
    scopeZ: -0.55
  };
}

function buildShotgun() {
  const group = new THREE.Group();
  const m = gunMaterials;

  addBox(group, m.metal, 0.145, 0.15, 0.5, 0, 0, 0.02, 0, 0, 0, 0.018);
  addBox(group, m.darkSteel, 0.1, 0.055, 0.46, 0, 0.08, 0.02, 0, 0, 0, 0.01);
  addCylinder(group, m.steel, 0.028, 0.72, 0, 0.045, -0.62, Math.PI / 2, 0, 14);
  addCylinder(group, m.darkSteel, 0.034, 0.11, 0, 0.045, -1.02, Math.PI / 2, 0, 14, true);
  addCylinder(group, m.steel, 0.019, 0.62, 0, -0.035, -0.55, Math.PI / 2, 0, 12);
  addCylinder(group, m.darkSteel, 0.026, 0.07, 0, -0.035, -0.88, Math.PI / 2, 0, 12);

  addBox(group, m.wood, 0.12, 0.105, 0.31, 0, -0.06, -0.38, 0, 0, 0, 0.02);
  for (let i = 0; i < 6; i++) {
    addBox(group, m.darkSteel, 0.125, 0.012, 0.012, 0, -0.11, -0.27 - i * 0.045, 0, 0, 0, 0.003);
  }
  addGrip(group, 0.9);
  addStock(group, 1.1, m.wood);
  addBox(group, m.darkSteel, 0.1, 0.15, 0.043, 0, -0.04, 0.7, 0, 0, 0, 0.008);

  addBox(group, m.darkSteel, 0.024, 0.02, 0.025, 0, 0.128, -0.96, 0, 0, 0, 0.002);
  addBox(group, m.steel, 0.006, 0.014, 0.006, 0, 0.14, -0.96, 0, 0, 0, 0.001);
  addBox(group, m.darkSteel, 0.065, 0.018, 0.035, 0, 0.105, 0.22, 0, 0, 0, 0.003);
  addEjectionPort(group, 0.074, 0.04, 0.02, 0.07, 0.035);
  addBox(group, m.steel, 0.006, 0.04, 0.08, 0.074, -0.03, -0.2, 0, 0, 0, 0.002);
  addScrew(group, 0.075, -0.01, 0.2);
  addScrew(group, -0.075, -0.01, 0.2);
  addPanelLine(group, 0, -0.075, 0.12, 0.1, 0.002, 0.012);

  return {
    group,
    muzzle: new THREE.Vector3(0, 0.045, -1.1),
    sight: new THREE.Vector3(0, 0.11, 0.22),
    eject: new THREE.Vector3(0.12, 0.05, 0.02),
    rightHand: new THREE.Vector3(-0.04, -0.17, 0.19),
    leftHand: new THREE.Vector3(-0.09, -0.125, -0.39),
    scopeZ: -0.62
  };
}

function buildSniper() {
  const group = new THREE.Group();
  const m = gunMaterials;

  addBox(group, m.metal, 0.145, 0.145, 0.65, 0, 0, 0.02, 0, 0, 0, 0.018);
  addBox(group, m.darkSteel, 0.118, 0.036, 0.59, 0, 0.083, 0.02, 0, 0, 0, 0.008);
  addRailSlots(group, 0.105, 0.23, 0.045, 11);
  addBox(group, m.darkSteel, 0.108, 0.11, 0.46, 0, -0.005, -0.5, 0, 0, 0, 0.018);
  addRailSlots(group, 0.057, -0.31, 0.05, 8, 0.062);
  for (let i = 0; i < 6; i++) {
    addBox(group, m.darkSteel, 0.006, 0.042, 0.055, -0.082, -0.012, -0.37 - i * 0.06, 0, 0, 0, 0.003);
    addBox(group, m.darkSteel, 0.006, 0.042, 0.055, 0.082, -0.012, -0.37 - i * 0.06, 0, 0, 0, 0.003);
  }

  addCylinder(group, m.steel, 0.022, 0.62, 0, 0.02, -0.92, Math.PI / 2, 0, 16);
  addMuzzleBrake(group, -1.25, 0.038, m.darkSteel, 4);
  addCylinder(group, m.darkSteel, 0.042, 0.07, 0, 0.02, -0.65, Math.PI / 2, 0, 14);

  addGrip(group, 1);
  addBox(group, m.polymer, 0.072, 0.23, 0.11, 0, -0.2, 0.08, -0.14, 0, 0, 0.012);
  addBox(group, m.darkSteel, 0.08, 0.03, 0.14, 0, -0.31, 0.11, -0.14, 0, 0, 0.006);
  addStock(group, 1.15, m.polymer);
  addBox(group, m.rubber, 0.11, 0.06, 0.16, 0, 0.075, 0.51, 0, 0, 0, 0.012);
  addBox(group, m.darkSteel, 0.08, 0.025, 0.16, 0, 0.095, 0.57, 0, 0, 0, 0.006);
  addCylinder(group, m.darkSteel, 0.026, 0.23, 0, 0.035, 0.42, Math.PI / 2, 0, 12);

  addCylinder(group, m.steel, 0.009, 0.1, 0.09, 0.03, 0.18, Math.PI / 2, 0, 8);
  addBox(group, m.darkSteel, 0.035, 0.03, 0.09, 0.09, 0.03, 0.24, 0, 0, 0, 0.006);
  addBox(group, m.polymer, 0.055, 0.032, 0.18, 0, 0.1, 0.25, 0, 0, 0, 0.006);
  addBox(group, m.polymer, 0.09, 0.24, 0.13, 0, -0.19, -0.01, -0.08, 0, 0, 0.012);
  addBox(group, m.darkSteel, 0.1, 0.025, 0.14, 0, -0.31, 0.02, -0.08, 0, 0, 0.006);

  addSniperScope(group);
  addEjectionPort(group, 0.074, 0.04, 0.1, 0.07, 0.03);
  addBox(group, m.steel, 0.075, 0.012, 0.08, 0, 0.13, 0.46, 0, 0, 0, 0.003);
  addBox(group, m.darkSteel, 0.06, 0.02, 0.07, 0.04, 0.11, 0.36, 0, 0, 0.25, 0.004);
  addScrew(group, 0.075, 0.015, 0.3);
  addScrew(group, -0.075, 0.015, 0.3);
  addScrew(group, 0.075, 0.0, 0.44);
  addPanelLine(group, 0, -0.06, 0.1, 0.1, 0.002, 0.012);

  return {
    group,
    muzzle: new THREE.Vector3(0, 0.02, -1.3),
    sight: new THREE.Vector3(0, 0.17, -0.02),
    eject: new THREE.Vector3(0.12, 0.05, 0.12),
    rightHand: new THREE.Vector3(-0.04, -0.17, 0.19),
    leftHand: new THREE.Vector3(-0.1, -0.115, -0.47),
    scopeZ: -0.58
  };
}

function mergeStaticMeshes(group) {
  const buckets = new Map();
  const children = [...group.children];
  const mergedMeshes = new Set();

  for (const child of children) {
    if (!child.isMesh || !child.material || Array.isArray(child.material)) continue;
    child.updateMatrix();
    let geometry = child.geometry.index
      ? child.geometry.toNonIndexed()
      : child.geometry.clone();
    geometry.applyMatrix4(child.matrix);
    const key = child.material.uuid;
    if (!buckets.has(key)) buckets.set(key, { material: child.material, geometries: [] });
    buckets.get(key).geometries.push(geometry);
    mergedMeshes.add(child);
  }

  for (const child of mergedMeshes) group.remove(child);

  for (const { material, geometries } of buckets.values()) {
    if (geometries.length === 1) {
      group.add(new THREE.Mesh(geometries[0], material));
      continue;
    }

    let merged = null;
    try {
      merged = mergeGeometries(geometries, false);
    } catch (err) {
      merged = null;
    }

    if (!merged) {
      for (const geometry of geometries) group.add(new THREE.Mesh(geometry, material));
      continue;
    }

    for (const geometry of geometries) geometry.dispose();
    group.add(new THREE.Mesh(merged, material));
  }
}

export function buildWeaponModel(id) {
  const builders = { rifle: buildRifle, pistol: buildPistol, shotgun: buildShotgun, sniper: buildSniper };
  const built = (builders[id] || buildRifle)();
  mergeStaticMeshes(built.group);
  built.group.userData.weaponId = id;
  built.group.userData.meta = built;
  return built;
}
