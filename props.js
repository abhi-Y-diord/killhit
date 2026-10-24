import * as THREE from 'three';
import { makeTextTexture } from './textures.js';

// ---------------------------------------------------------------------------
// Reusable detailed props. Everything is built from a handful of primitives
// and the shared material set so draw calls and memory stay reasonable.
// ---------------------------------------------------------------------------

const cylCache = new Map();
function cyl(rt, rb, h, seg = 10) {
  const key = `${rt}|${rb}|${h}|${seg}`;
  if (!cylCache.has(key)) cylCache.set(key, new THREE.CylinderGeometry(rt, rb, h, seg));
  return cylCache.get(key);
}

const propBoxCache = new Map();
function box(_world, parent, size, pos, mat, rot = null) {
  const key = size.join('|');
  if (!propBoxCache.has(key)) propBoxCache.set(key, new THREE.BoxGeometry(...size));
  const m = new THREE.Mesh(propBoxCache.get(key), mat);
  m.position.set(...pos);
  if (rot) m.rotation.set(...rot);
  m.castShadow = false;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function cylinder(parent, geo, mat, pos, rot = null) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(...pos);
  if (rot) m.rotation.set(...rot);
  parent.add(m);
  return m;
}

function registerGroup(world, group, { collider = true, solid = true } = {}) {
  world.scene.add(group);
  if (solid) {
    group.traverse((child) => {
      if (child.isMesh && child.material !== world.mats.glass) world.solidMeshes.push(child);
    });
  }
  if (collider) {
    const b = new THREE.Box3().setFromObject(group);
    // Ignore markers / lights in the bounding box; they are at group origin.
    world.colliders.push({ mesh: group, box: b, min: b.min, max: b.max });
  }
}

export function streetLamp(world, x, z, rotY = 0, light = true) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  cylinder(g, cyl(0.09, 0.13, 5.6, 8), world.mats.darkMetal, [0, 2.8, 0]);
  // Base.
  cylinder(g, cyl(0.26, 0.32, 0.28, 10), world.mats.darkMetal, [0, 0.14, 0]);
  // Curved arm and head.
  box(g, g, [1.15, 0.09, 0.09], [0.5, 5.52, 0], world.mats.darkMetal);
  box(g, g, [0.72, 0.16, 0.38], [1.02, 5.4, 0], world.mats.darkMetal);
  box(g, g, [0.6, 0.06, 0.3], [1.02, 5.3, 0], world.mats.lampWarm);
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 1.2),
    new THREE.MeshBasicMaterial({ color: 0xffcf8a, transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide })
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.set(1.02, 5.24, 0);
  g.add(glow);
  if (light) {
    const l = new THREE.PointLight(0xffc57a, 22, 20, 1.8);
    l.position.set(1.02, 5.15, 0);
    g.add(l);
  }
  registerGroup(world, g);
  return g;
}

export function ceilingLight(world, x, y, z, length = 3.2, rotY = 0, light = false) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  box(g, g, [length + 0.2, 0.12, 0.34], [0, 0, 0], world.mats.darkMetal);
  box(g, g, [length, 0.05, 0.22], [0, -0.08, 0], world.mats.lampCool);
  if (light) {
    const l = new THREE.PointLight(0xd8efff, 18, 16, 1.7);
    l.position.set(0, -0.3, 0);
    g.add(l);
  }
  world.scene.add(g);
  world.hitOnlyMeshes.push(g.children[0]);
  return g;
}

export function bench(world, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  const seat = box(g, g, [1.9, 0.09, 0.52], [0, 0.45, 0], world.mats.wood);
  box(g, g, [1.9, 0.5, 0.07], [0, 0.72, 0.26], world.mats.wood);
  for (const lx of [-0.82, 0.82]) {
    box(g, g, [0.08, 0.45, 0.4], [lx, 0.22, 0], world.mats.darkMetal);
  }
  // Divider armrests.
  box(g, g, [0.06, 0.28, 0.5], [0, 0.6, 0], world.mats.darkMetal);
  world.scene.add(g);
  world.solidMeshes.push(seat);
  const b = new THREE.Box3().setFromObject(g);
  world.colliders.push({ mesh: g, box: b, min: b.min, max: b.max });
  return g;
}

export function vendingMachine(world, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  const body = box(g, g, [0.95, 1.95, 0.72], [0, 0.975, 0], world.mats.paintedSteel);
  // Front lit panel.
  const front = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.55), world.mats.vending);
  front.position.set(0, 1.05, -0.365);
  front.rotation.y = Math.PI;
  g.add(front);
  // Top sign strip.
  box(g, g, [0.98, 0.16, 0.76], [0, 1.94, 0], world.mats.darkMetal);
  // Buttons + coin slot.
  for (let i = 0; i < 4; i++) {
    box(g, g, [0.05, 0.04, 0.02], [-0.32 + i * 0.06, 0.72, -0.37], world.mats.neonCyan);
  }
  box(g, g, [0.16, 0.22, 0.02], [0.29, 0.74, -0.37], world.mats.darkMetal);
  // Glow.
  const glow = new THREE.PointLight(0xbff6ff, 4, 4, 2);
  glow.position.set(0, 1.1, -0.6);
  g.add(glow);
  registerGroup(world, g);
  return g;
}

export function trashCan(world, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  cylinder(g, cyl(0.27, 0.24, 0.8, 12), world.mats.metal, [0, 0.4, 0]);
  cylinder(g, cyl(0.3, 0.3, 0.06, 12), world.mats.darkMetal, [0, 0.82, 0]);
  const bag = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), world.mats.darkPlastic);
  bag.scale.y = 0.5;
  bag.position.y = 0.87;
  g.add(bag);
  registerGroup(world, g);
  return g;
}

export function barrier(world, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  box(g, g, [2.2, 0.85, 0.12], [0, 0.65, 0], world.mats.white);
  for (const sx of [-0.75, -0.25, 0.25, 0.75]) {
    box(g, g, [0.24, 0.28, 0.14], [sx, 0.8, 0.01], world.mats.red);
  }
  for (const lx of [-0.95, 0.95]) {
    box(g, g, [0.09, 0.3, 0.5], [lx, 0.15, 0.12], world.mats.darkMetal);
  }
  registerGroup(world, g);
  return g;
}

export function signBoard(world, x, y, z, text, opts = {}) {
  const { width = 3, height = 0.8, rotY = 0, bg = '#0b1116', color = '#f3fbff', accent = '#3df0ff', sub = '', doubleSide = true } = opts;
  const tex = makeTextTexture(text, {
    width: 512, height: Math.max(96, Math.round(512 * height / width)), bg, color, accent, sub,
    font: `bold ${Math.round(512 * height / width * 0.42)}px Arial`
  });
  const mat = new THREE.MeshStandardMaterial({
    map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32,
    roughness: 0.6, side: doubleSide ? THREE.DoubleSide : THREE.FrontSide
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  world.scene.add(mesh);
  return mesh;
}

export function neonSign(world, x, y, z, text, color = 0x3df0ff, opts = {}) {
  const { width = 4, height = 1.1, rotY = 0 } = opts;
  const tex = makeTextTexture(text, {
    width: 512, height: 160, bg: '#070c10', color: '#ffffff',
    accent: '#' + new THREE.Color(color).getHexString(), font: 'bold 62px Arial', border: false
  });
  const mat = new THREE.MeshStandardMaterial({
    map: tex, emissive: color, emissiveMap: tex, emissiveIntensity: 2.4,
    color: 0x111111, roughness: 0.4, side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  world.scene.add(mesh);
  // Backing frame.
  const frame = new THREE.Mesh(new THREE.BoxGeometry(width + 0.1, height + 0.1, 0.08), world.mats.darkMetal);
  frame.position.set(x - Math.sin(rotY) * 0.06, y, z - Math.cos(rotY) * 0.06);
  frame.rotation.y = rotY;
  world.scene.add(frame);
  return mesh;
}

export function hangingLantern(world, x, y, z, color = 0xffb066) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  const top = box(g, g, [0.18, 0.05, 0.18], [0, 0.16, 0], world.mats.darkWood);
  top.castShadow = false;
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), world.mats.lantern);
  body.scale.set(1, 1.25, 1);
  body.position.y = 0;
  g.add(body);
  box(g, g, [0.16, 0.04, 0.16], [0, -0.24, 0], world.mats.darkWood);
  const line = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.3, 4), world.mats.darkMetal);
  line.position.y = 0.38;
  g.add(line);
  world.scene.add(g);
  return g;
}

export function marketStall(world, x, z, rotY, colorMat, label) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  // Counter.
  box(g, g, [3.0, 0.9, 0.8], [0, 0.45, 0], world.mats.darkWood);
  box(g, g, [3.15, 0.08, 0.95], [0, 0.92, 0], world.mats.wood);
  // Posts + canopy.
  for (const px of [-1.35, 1.35]) {
    for (const pz of [-0.55, 0.6]) {
      box(g, g, [0.08, 2.7, 0.08], [px, 1.35, pz], world.mats.darkWood);
    }
  }
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 1.8), colorMat);
  canopy.position.set(0, 2.72, 0);
  canopy.rotation.x = -0.08;
  g.add(canopy);
  // Valance.
  box(g, g, [3.2, 0.32, 0.04], [0, 2.55, 0.9], colorMat);
  // Crates / goods.
  for (let i = 0; i < 3; i++) {
    box(g, g, [0.42, 0.28, 0.3], [-0.9 + i * 0.9, 1.08, 0], i % 2 ? world.mats.wood : world.mats.wood);
  }
  // Hanging sign.
  signBoard(world, x, 2.95, z, label, {
    width: 2.4, height: 0.45, bg: '#1d100c', color: '#ffe8c0', accent: '#ffb45a',
    rotY
  });
  hangingLantern(world, x - 1.1, 2.25, z + 0.8, 0xffb066);
  hangingLantern(world, x + 1.1, 2.25, z + 0.8, 0xffb066);
  registerGroup(world, g);
  return g;
}

export function toriiGate(world, x, z, rotY = 0, scale = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  g.scale.setScalar(scale);
  const red = new THREE.MeshStandardMaterial({ color: 0xb83a2b, roughness: 0.62, metalness: 0.05 });
  for (const sx of [-2.6, 2.6]) {
    cylinder(g, cyl(0.22, 0.26, 4.6, 12), red, [sx, 2.3, 0]);
    cylinder(g, cyl(0.32, 0.35, 0.25, 12), world.mats.darkMetal, [sx, 0.12, 0]);
  }
  box(g, g, [6.8, 0.26, 0.34], [0, 4.5, 0], red);
  box(g, g, [7.8, 0.3, 0.44], [0, 4.86, 0], red);
  // Slight upturned ends.
  for (const sx of [-3.9, 3.9]) {
    box(g, g, [0.5, 0.3, 0.46], [sx, 4.94, 0], red, [0, 0, sx < 0 ? 0.18 : -0.18]);
  }
  box(g, g, [4.0, 0.22, 0.3], [0, 3.72, 0], red);
  box(g, g, [1.1, 0.8, 0.12], [0, 4.05, 0], world.mats.darkWood);
  signBoard(world, x, 4.05 * scale, z, 'KANTO', {
    width: 1.0, height: 0.5, bg: '#1b0f0c', color: '#ffd9a0', accent: '#b83a2b', rotY
  });
  registerGroup(world, g);
  return g;
}

export function shrineBuilding(world, x, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  box(g, g, [5.2, 0.5, 4.2], [0, 0.25, 0], world.mats.concreteDark);
  box(g, g, [4.2, 2.5, 3.2], [0, 1.75, 0], world.mats.darkWood);
  // Roof, layered.
  for (let i = 0; i < 3; i++) {
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(4.1 - i * 0.4, 0.7, 4),
      i === 2 ? world.mats.darkMetal : world.mats.paintedSteel
    );
    roof.position.set(0, 3.2 + i * 0.45, 0);
    roof.rotation.y = Math.PI / 4;
    g.add(roof);
  }
  // Front steps, doors, lanterns.
  box(g, g, [2.4, 0.25, 0.7], [0, 0.12, 2.3], world.mats.concrete);
  box(g, g, [1.2, 1.8, 0.08], [0, 1.35, 1.62], world.mats.wood);
  for (const sx of [-1.4, 1.4]) {
    hangingLantern(world, x + sx, 2.3, z + 1.9, 0xff9a4a);
  }
  registerGroup(world, g);
  return g;
}

export function shippingContainer(world, x, z, rotY, color = 0x2c5f78, y = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.4 });
  box(g, g, [6.0, 2.55, 2.45], [0, 1.28, 0], paint);
  // Corrugation ribs.
  for (let i = -11; i <= 11; i++) {
    box(g, g, [0.06, 2.3, 0.05], [i * 0.26, 1.3, 1.235], world.mats.darkMetal);
  }
  // End frames and doors.
  for (const sx of [-3.02, 3.02]) {
    box(g, g, [0.08, 2.6, 2.5], [sx, 1.3, 0], world.mats.darkMetal);
  }
  for (const side of [-1, 1]) {
    box(g, g, [0.06, 2.2, 1.1], [3.08, 1.25, side * 0.6], world.mats.darkMetal);
    box(g, g, [0.03, 0.18, 0.1], [3.12, 1.2, side * 0.9], world.mats.metal);
  }
  // Cast number.
  signBoard(world, x + 3.1, 1.8, z, 'K-204', {
    width: 1.2, height: 0.35, bg: '#101519', color: '#cfe4ea', accent: '#7f9097', rotY: rotY + Math.PI / 2
  });
  registerGroup(world, g);
  return g;
}

export function railing(world, x1, z1, x2, z2, y = 0, height = 1.05) {
  const g = new THREE.Group();
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const angle = Math.atan2(dx, dz);
  g.position.set(x1, y, z1);
  g.rotation.y = angle;
  const posts = Math.max(2, Math.round(len / 1.8));
  for (let i = 0; i <= posts; i++) {
    const zz = (i / posts) * len;
    box(g, g, [0.07, height, 0.07], [0, height / 2, zz], world.mats.darkMetal);
  }
  box(g, g, [0.07, 0.07, len], [0, height, len / 2], world.mats.darkMetal);
  box(g, g, [0.05, 0.05, len], [0, height * 0.55, len / 2], world.mats.metal);
  // Thin glass/mesh infill.
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x8ebfc4, transparent: true, opacity: 0.18, roughness: 0.2, metalness: 0.4, side: THREE.DoubleSide
  });
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(len, height * 0.75), panelMat);
  panel.position.set(0, height * 0.55, len / 2);
  panel.rotation.y = Math.PI / 2;
  g.add(panel);
  g.traverse(c => { if (c.isMesh) world.hitOnlyMeshes.push(c); });
  world.scene.add(g);
  return g;
}

export function powerLine(world, points, sag = 0.6) {
  const group = new THREE.Group();
  const curvePoints = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = new THREE.Vector3(...points[i]);
    const b = new THREE.Vector3(...points[i + 1]);
    for (let t = 0; t <= 8; t++) {
      const f = t / 8;
      const p = new THREE.Vector3().lerpVectors(a, b, f);
      p.y -= Math.sin(f * Math.PI) * sag;
      curvePoints.push(p);
    }
  }
  const curve = new THREE.CatmullRomCurve3(curvePoints);
  const geo = new THREE.TubeGeometry(curve, Math.max(16, curvePoints.length * 2), 0.025, 4, false);
  const line = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x111417 }));
  group.add(line);
  world.scene.add(group);
  return group;
}

export function utilityPole(world, x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  cylinder(g, cyl(0.12, 0.16, 6.5, 8), world.mats.darkWood, [0, 3.25, 0]);
  box(g, g, [1.8, 0.1, 0.1], [0, 5.8, 0], world.mats.darkMetal);
  box(g, g, [0.8, 0.08, 0.08], [0, 5.25, 0], world.mats.darkMetal);
  // Transformer can.
  cylinder(g, cyl(0.28, 0.28, 0.8, 10), world.mats.metal, [0.35, 4.5, 0]);
  registerGroup(world, g);
  return g;
}

export function acUnit(world, x, y, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  box(g, g, [1.1, 0.7, 0.55], [0, 0, 0], world.mats.paintedSteel);
  for (let i = 0; i < 5; i++) {
    box(g, g, [0.95, 0.03, 0.02], [0, -0.22 + i * 0.1, -0.29], world.mats.darkMetal);
  }
  const fan = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.03, 12), world.mats.darkMetal);
  fan.rotation.x = Math.PI / 2;
  fan.position.set(0.25, 0, -0.3);
  g.add(fan);
  world.scene.add(g);
  return g;
}

export function airDuct(world, x, y, z, length, axis = 'z') {
  const geo = axis === 'z' ? cyl(0.22, 0.22, length, 10) : cyl(0.22, 0.22, length, 10);
  const pipe = new THREE.Mesh(geo, world.mats.metal);
  pipe.position.set(x, y, z);
  if (axis === 'z') pipe.rotation.x = Math.PI / 2;
  else pipe.rotation.z = Math.PI / 2;
  world.scene.add(pipe);
  for (let i = 0; i < length; i += 2.4) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 6, 12), world.mats.darkMetal);
    ring.position.set(
      x + (axis === 'x' ? i - length / 2 : 0),
      y,
      z + (axis === 'z' ? i - length / 2 : 0)
    );
    ring.rotation.x = axis === 'z' ? Math.PI / 2 : 0;
    ring.rotation.y = axis === 'x' ? Math.PI / 2 : 0;
    world.scene.add(ring);
  }
  return pipe;
}

export function shopFront(world, x, y, z, rotY, opts = {}) {
  const {
    width = 7, height = 3.4, name = 'SHOP', accent = 0x3df0ff,
    awning = 0xb5372f, interior = true
  } = opts;
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  // Facade wall with an opening.
  box(g, g, [width, height, 0.28], [0, height / 2, 0], world.mats.brick);
  const opening = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.55, height * 0.68), world.mats.darkGlass);
  opening.position.set(0, height * 0.4, 0.15);
  g.add(opening);
  // Door frame.
  for (const sx of [-width * 0.28, width * 0.28]) {
    box(g, g, [0.08, height * 0.72, 0.1], [sx, height * 0.38, 0.2], world.mats.chrome);
  }
  box(g, g, [width * 0.56, 0.08, 0.1], [0, height * 0.74, 0.2], world.mats.chrome);
  // Awning.
  const aw = new THREE.Mesh(new THREE.BoxGeometry(width * 0.8, 0.08, 1.5), new THREE.MeshStandardMaterial({ color: awning, roughness: 0.8 }));
  aw.position.set(0, height * 0.84, 0.8);
  aw.rotation.x = 0.12;
  g.add(aw);
  // Sign.
  signBoard(world, x + Math.sin(rotY) * 0.18, y + height + 0.35, z + Math.cos(rotY) * 0.18, name, {
    width: width * 0.8, height: 0.7, rotY, bg: '#0a0e12', color: '#f2fbff',
    accent: '#' + new THREE.Color(accent).getHexString()
  });
  // Neon underglow.
  const neon = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 0.75, 0.06),
    new THREE.MeshBasicMaterial({ color: accent })
  );
  neon.position.set(0, height * 0.77, 1.05);
  g.add(neon);
  registerGroup(world, g, { collider: false });
  return g;
}
