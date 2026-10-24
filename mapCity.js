import * as THREE from 'three';
import { createCar, createPassingTrain } from './vehicles.js';
import {
  streetLamp, bench, vendingMachine, signBoard, neonSign, trashCan, barrier,
  marketStall, toriiGate, shrineBuilding, shippingContainer, railing, powerLine,
  utilityPole, acUnit, ceilingLight, airDuct, hangingLantern
} from './props.js';

// ---------------------------------------------------------------------------
// Night city street — east of the metro station.
// Landmarks: neon market, 24/7 mart, ramen shop, torii shrine, parking yard,
// pedestrian overpass and the elevated Kanto line.
// ---------------------------------------------------------------------------
export function buildCity(world) {
  const M = world.mats;

  // ---------------------------------------------------------------- ground
  // One continuous foundation so there are no pits anywhere in the city.
  world.floor(-1, -50, 75, 50, 0, 1.4, M.concreteDark);
  // Road + sidewalks.
  world.floor(20, -48, 36, 48, 0.02, 0.06, M.asphalt, { collider: false });
  world.floor(12, -50, 20, 50, 0.16, 0.16, M.pavement);
  world.floor(36, -50, 44, 50, 0.16, 0.16, M.pavement);
  world.floor(-1, -16, 12, 16, 0.12, 0.12, M.pavement);
  // Market / shop / shrine / parking surfaces.
  world.floor(44, -20, 60, 10, 0.12, 0.14, M.pavement);
  world.floor(44, 10, 75, 30, 0.12, 0.14, M.pavement);
  world.floor(56, 30, 75, 48, 0.12, 0.14, M.pavement);
  world.floor(44, -50, 75, -20, 0.1, 0.12, M.asphalt);
  world.floor(44, 28, 75, 32, 0.11, 0.1, M.pavement);

  // Road details.
  const dashGeo = world.boxGeo(0.16, 0.02, 3.2);
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xd8d9d2 });
  const dashes = new THREE.InstancedMesh(dashGeo, dashMat, 24);
  const m4 = new THREE.Matrix4();
  for (let i = 0; i < 24; i++) {
    m4.makeTranslation(28, 0.055, -46 + i * 4.1);
    dashes.setMatrixAt(i, m4);
  }
  dashes.instanceMatrix.needsUpdate = true;
  world.scene.add(dashes);
  world.hitOnlyMeshes.push(dashes);
  // Crosswalk.
  for (let i = 0; i < 8; i++) {
    world.addBox([0.9, 0.02, 3.0], [20.8 + i * 2.0, 0.055, 0], dashMat,
      { collider: false, solid: false });
  }
  // Stop lines and curbs.
  for (const z of [-30, 24]) {
    world.addBox([7.4, 0.02, 0.3], [28, 0.055, z], dashMat, { collider: false, solid: false });
  }
  for (const x of [20, 36]) {
    world.addBox([0.24, 0.18, 100], [x, 0.09, 0], M.concrete, { collider: false });
  }
  world.addBox([1.8, 0.18, 3.2], [20.5, 0.07, 0], M.concrete, { collider: false });

  // ---------------------------------------------------------------- west edge
  world.wall(-1.2, -50, -0.9, -18, 0, 6.5, M.concreteWall);
  world.wall(-1.2, 18, -0.9, 50, 0, 6.5, M.concreteWall);
  signBoard(world, -0.82, 5.2, -34, 'KANTO METRO', {
    width: 4.4, height: 0.8, rotY: Math.PI / 2, bg: '#0a1015', color: '#dffbff', accent: '#3df0ff'
  });
  signBoard(world, -0.82, 5.2, 32, 'EAST EXIT', {
    width: 3.6, height: 0.7, rotY: Math.PI / 2, bg: '#0a1015', color: '#dffbff', accent: '#8cff5a'
  });

  // Low commercial buildings north and south of the plaza.
  for (const [z1, z2, name, accent] of [[-44, -20, 'TOKYO ELECTRIC', 0x3df0ff], [20, 44, 'SAKURA HOTEL', 0xff4fa3]]) {
    world.addBox([9, 6.0, z2 - z1], [7.5, 3.0, (z1 + z2) / 2], M.windowWall, { castShadow: true });
    world.addBox([9.4, 0.35, z2 - z1 + 0.4], [7.5, 6.15, (z1 + z2) / 2], M.concreteDark, { collider: false });
    neonSign(world, 12.05, 4.2, (z1 + z2) / 2, name, accent, {
      width: 5, height: 0.9, rotY: Math.PI / 2
    });
    // Ground floor shopfront facing the sidewalk.
    world.addBox([0.2, 2.6, z2 - z1 - 2], [11.9, 1.5, (z1 + z2) / 2], M.darkGlass, { collider: false, solid: false });
    for (let z = z1 + 3; z < z2 - 2; z += 4) {
      world.addBox([0.26, 2.8, 0.24], [11.8, 1.4, z], M.darkMetal, { collider: false });
    }
  }

  // ---------------------------------------------------------------- pedestrian bridge
  const bridgeY = 5.2;
  world.floor(12, -24.5, 44, -21.5, bridgeY, 0.4, M.concreteDark);
  world.addBox([32, 0.22, 0.07], [28, bridgeY + 0.1, -21.5], M.yellow, { collider: false, solid: false });
  railing(world, 12, -24.5, 44, -24.5, bridgeY, 1.1);
  railing(world, 12, -21.5, 44, -21.5, bridgeY, 1.1);
  // Bridge supports.
  for (const x of [17, 28, 39]) {
    world.addBox([0.75, bridgeY, 0.75], [x, bridgeY / 2, -23], M.concreteWall, { castShadow: true });
  }
  // Staircases on both sidewalks.
  for (const [x1, x2] of [[12, 16], [40, 44]]) {
    world.stairs(x1, -36, x2, -24, 0.16, bridgeY, 26, M.concrete);
    for (const x of [x1 + 0.1, x2 - 0.1]) {
      railing(world, x, -36, x, -24, (x === x1 + 0.1 ? 0.16 : 5.2), 1.05);
    }
    world.addNavStairs(x1, -36, x2, -24, 0.16, bridgeY, 'bridge-stairs');
  }
  world.addNavZone(12, -24.5, 44, -21.5, bridgeY, 'bridge');
  signBoard(world, 28, bridgeY + 1.7, -21.45, 'PEDESTRIAN BRIDGE', {
    width: 5.6, height: 0.6, bg: '#0b1116', color: '#dffbff', accent: '#3df0ff'
  });
  for (const x of [18, 28, 38]) {
    ceilingLight(world, x, bridgeY + 3.4, -23, 2.6, Math.PI / 2, false);
    world.addBox([0.08, 3.2, 0.08], [x, bridgeY + 1.6, -24.4], M.darkMetal, { collider: false });
  }

  // ---------------------------------------------------------------- elevated railway
  world.floor(-5, -48.6, 75, -45.4, 8.0, 0.5, M.concreteDark);
  for (const x of [-2, 10, 22, 34, 46, 58, 70]) {
    world.addBox([0.9, 8, 0.9], [x, 4, -47], M.concreteWall, { castShadow: true });
    world.addBox([1.5, 0.3, 1.4], [x, 8.05, -47], M.darkMetal, { collider: false });
  }
  // Track rails.
  for (const z of [-48.1, -47.3]) {
    world.addBox([80, 0.14, 0.12], [35, 8.14, z], M.metal, { collider: false, solid: false });
  }
  for (let x = -4; x < 75; x += 0.8) {
    world.addBox([0.5, 0.08, 2.8], [x, 8.08, -47], M.darkWood, { collider: false, solid: false });
  }
  world.addBox([80, 1.0, 0.15], [35, 8.6, -45.5], M.darkMetal, { collider: false, solid: false });
  const passing = createPassingTrain(world);
  // Road-side fence under the line.
  world.addBox([80, 2.2, 0.2], [35, 1.1, -48.7], M.darkMetal, { collider: false });

  // ---------------------------------------------------------------- parking yard
  // Fence and gate.
  for (let x = 44; x <= 74; x += 3) {
    world.addBox([0.12, 2.0, 0.12], [x, 1.0, -24.2], M.darkMetal, { collider: false });
  }
  world.addBox([30, 0.12, 0.12], [59, 2.0, -24.2], M.darkMetal, { collider: false });
  world.addBox([1.2, 1.4, 1.2], [54, 0.7, -44], M.paintedSteel);
  world.addBox([1.1, 1.1, 1.3], [47, 0.55, -34], M.rustMetal);
  shippingContainer(world, 49, -43, 0, 0x2f6478);
  shippingContainer(world, 56, -43, 0, 0x7a4637);
  shippingContainer(world, 63, -43, 0, 0x3f6b4b);
  shippingContainer(world, 69, -37, Math.PI / 2, 0x4a4f66);
  shippingContainer(world, 49, -33, Math.PI / 2, 0x7c6a35, 2.6);
  world.addBox([2.2, 1.8, 3.4], [68, 0.9, -47], M.greenSteel, { castShadow: true });
  neonSign(world, 71.5, 4.6, -24.2, 'PARKING', 0xffd23a, { width: 3.2, height: 0.7 });
  createCar(world, 'van', 66, -27.5, 0.3, 0x51616e);
  createCar(world, 'sedan', 45.5, -28, Math.PI / 2, 0x7d2f33);
  createCar(world, 'truck', 45.5, -37, Math.PI / 2, 0x4a5f4a);

  // ---------------------------------------------------------------- market street
  // Low walls / building shells create a tight alley.
  world.addBox([16, 4.2, 0.4], [52, 2.1, -20.2], M.brick, { castShadow: true });
  world.addBox([0.4, 4.2, 30.4], [60, 2.1, -5], M.brick, { castShadow: true });
  world.addBox([0.4, 4.2, 10], [44, 2.1, 5], M.brick, { castShadow: true });
  world.addBox([16.4, 0.3, 30.4], [52, 4.35, -5], M.darkMetal, { collider: false });
  neonSign(world, 52, 4.4, -19.95, 'NIGHT MARKET', 0xff4fa3, { width: 6, height: 0.8 });
  // Lantern strings.
  for (let z = -16; z <= 6; z += 7) {
    world.addBox([0.05, 0.05, 15.8], [52, 3.8, z], M.darkMetal, { collider: false, solid: false });
    for (let i = 0; i < 5; i++) {
      hangingLantern(world, 46 + i * 3, 3.45, z);
    }
  }
  // Stalls.
  const stalls = [
    [47, -15, Math.PI / 2, M.red, 'YAKITORI'],
    [47, -5, Math.PI / 2, M.blue, 'TEA HOUSE'],
    [47, 5, Math.PI / 2, M.yellow, 'DUMPLINGS'],
    [56, -12, -Math.PI / 2, M.paintedSteel, 'LANTERNS'],
    [56, -2, -Math.PI / 2, M.red, 'RAMEN'],
    [56, 8, -Math.PI / 2, M.greenSteel, 'GAMES']
  ];
  for (const [x, z, rot, mat, label] of stalls) {
    marketStall(world, x, z, rot, mat, label);
  }
  // Crates and bins in the lane.
  world.addBox([0.8, 0.8, 0.8], [50, 0.52, -18], M.wood);
  world.addBox([0.8, 0.7, 0.8], [50, 0.47, -17], M.darkWood);
  trashCan(world, 44.8, 0.12, -11);
  trashCan(world, 59.2, 0.12, 3);
  world.addBox([2.6, 0.9, 1.9], [46, 0.57, 9.4], M.rustMetal);
  world.addMapRect(44, -20, 60, 10, '#5b3b42');

  // ---------------------------------------------------------------- 24/7 mart
  world.floor(44, 12, 60, 28, 0.14, 0.3, M.tileFloor);
  world.wall(44, 12, 44, 18, 0.14, 3.9, M.white);
  world.wall(44, 22, 44, 28, 0.14, 3.9, M.white);
  world.wall(44, 12, 60, 12.2, 0.14, 3.9, M.white);
  world.wall(44, 27.8, 60, 28, 0.14, 3.9, M.white);
  world.wall(59.8, 12, 60, 28, 0.14, 3.9, M.white);
  world.addBox([16, 0.4, 16], [52, 4.1, 20], M.concreteDark, { solid: false });
  // Front glazing + door frame.
  for (const [z1, z2] of [[12.2, 18], [22, 27.8]]) {
    world.addBox([0.08, 2.4, z2 - z1], [44.05, 1.5, (z1 + z2) / 2], M.darkGlass, { collider: false, solid: false });
    for (let z = z1; z <= z2; z += 2) {
      world.addBox([0.16, 2.7, 0.1], [44, 1.5, z], M.chrome, { collider: false });
    }
  }
  for (const z of [18, 22]) {
    world.addBox([0.22, 2.7, 0.18], [44, 1.45, z], M.darkMetal, { collider: false });
  }
  world.addBox([0.12, 0.16, 4.2], [44, 2.95, 20], M.neonCyan, { collider: false, solid: false });
  // Shelves + goods.
  for (const z of [15.5, 24.5]) {
    for (let i = 0; i < 3; i++) {
      world.addBox([7.5, 0.12, 0.5], [52, 0.9 + i * 0.65, z], M.metal, { collider: false });
    }
    world.addBox([7.5, 1.9, 0.12], [52, 1.1, z + 0.28], M.darkMetal, { collider: false });
    for (let i = 0; i < 12; i++) {
      const c = [M.red, M.blue, M.yellow, M.white, M.greenSteel][i % 5];
      world.addBox([0.3, 0.4, 0.28], [48.6 + i * 0.62, 1.22, z], c, { collider: false, solid: false });
    }
  }
  // Fridge wall.
  world.addBox([10, 2.2, 0.6], [54, 1.35, 26.9], M.darkGlass, { collider: false, solid: false });
  for (let i = 0; i < 5; i++) {
    world.addBox([1.7, 2.0, 0.05], [49.5 + i * 2.1, 1.35, 26.55], M.lampCool, { collider: false, solid: false });
  }
  // Counter.
  world.addBox([2.6, 1.1, 0.8], [56.5, 0.7, 20], M.paintedSteel, { castShadow: true });
  world.addBox([0.8, 0.18, 0.4], [56.5, 1.3, 20], M.darkMetal, { collider: false });
  const martGlow = new THREE.PointLight(0xd8efff, 20, 18, 1.8);
  martGlow.position.set(52, 3.0, 20);
  world.scene.add(martGlow);
  for (const x of [48, 56]) ceilingLight(world, x, 3.7, 20, 3.2, Math.PI / 2, false);
  neonSign(world, 43.85, 4.8, 20, '24/7 MART', 0x3df0ff, { width: 7, height: 1.0, rotY: -Math.PI / 2 });
  neonSign(world, 43.85, 3.25, 20, 'OPEN', 0x8cff5a, { width: 2.2, height: 0.5, rotY: -Math.PI / 2 });
  world.addMapRect(44, 12, 60, 28, '#3b5b60');

  // ---------------------------------------------------------------- alley + ramen
  // Narrow alley between mart and ramen shop.
  world.addBox([0.35, 3.2, 18], [61.9, 1.7, 19], M.brick, { collider: false });
  acUnit(world, 61.4, 3.4, 14, Math.PI / 2);
  acUnit(world, 61.4, 3.4, 24, Math.PI / 2);
  trashCan(world, 61, 0.12, 11.2);
  world.addBox([0.5, 0.5, 0.5], [60.6, 0.4, 27], M.wood);
  airDuct(world, 61.7, 2.6, 20, 14, 'z');
  neonSign(world, 61.75, 2.2, 16, 'RAMEN', 0xff5a4a, { width: 1.6, height: 0.5, rotY: -Math.PI / 2 });

  world.floor(62, 12, 74, 26, 0.14, 0.3, M.wood);
  world.wall(62, 12, 74, 12.2, 0.14, 3.8, M.brick);
  world.wall(62, 25.8, 74, 26, 0.14, 3.8, M.brick);
  world.wall(73.8, 12, 74, 26, 0.14, 3.8, M.brick);
  world.wall(62, 12, 62.2, 18, 0.14, 3.8, M.brick);
  world.wall(62, 21, 62.2, 26, 0.14, 3.8, M.brick);
  world.wall(62, 12, 74, 12.2, 0.14, 3.8, M.brick);
  world.addBox([12, 0.4, 14], [68, 4.0, 19], M.darkWood, { solid: false });
  // Noren curtain + doorway.
  world.addBox([3.4, 0.7, 0.08], [68, 2.45, 21], M.red, { collider: false, solid: false });
  // Counter and stools.
  world.addBox([8, 1.05, 0.8], [68, 0.67, 23.8], M.wood, { castShadow: true });
  for (let i = 0; i < 5; i++) {
    world.addBox([0.45, 0.08, 0.45], [64.8 + i * 1.5, 0.75, 22.8], M.darkWood, { collider: false });
    world.addBox([0.08, 0.65, 0.08], [64.8 + i * 1.5, 0.35, 22.8], M.darkMetal, { collider: false });
  }
  // Tables.
  for (const [x, z] of [[65.5, 16], [71, 16]]) {
    world.addBox([1.6, 0.1, 0.9], [x, 0.85, z], M.wood, { collider: false });
    for (const sx of [-0.6, 0.6]) {
      world.addBox([0.1, 0.7, 0.1], [x + sx, 0.5, z], M.darkWood, { collider: false });
    }
    world.addBox([0.4, 0.08, 0.4], [x - 1.2, 0.55, z], M.red, { collider: false });
    world.addBox([0.4, 0.08, 0.4], [x + 1.2, 0.55, z], M.red, { collider: false });
  }
  const ramenLight = new THREE.PointLight(0xffc57a, 16, 16, 1.8);
  ramenLight.position.set(68, 2.8, 19);
  world.scene.add(ramenLight);
  for (const z of [15, 23]) ceilingLight(world, 68, 3.55, z, 3, Math.PI / 2, false);
  neonSign(world, 61.75, 3.5, 21.5, 'RAMEN', 0xff4a3a, { width: 2.6, height: 1.4, rotY: -Math.PI / 2 });
  hangingLantern(world, 63, 2.6, 21.2);
  hangingLantern(world, 73, 2.6, 21.2);
  world.addMapRect(62, 12, 74, 26, '#5c3a34');

  // Small back court between ramen and rooftop building.
  world.addBox([3.2, 0.9, 2.2], [71, 0.57, 8], M.rustMetal);
  acUnit(world, 73, 3.2, 4, -Math.PI / 2);
  trashCan(world, 63.5, 0.12, 7);
  neonSign(world, 62.3, 3.0, 7.5, 'KANTO', 0xffd23a, { width: 1.4, height: 0.6, rotY: -Math.PI / 2 });
  world.addMapRect(60, -20, 75, 10, '#2f3538');

  // ---------------------------------------------------------------- rooftop building
  const roofY = 6.5;
  world.addBox([12, roofY, 20], [68, roofY / 2, -14], M.windowWall, { castShadow: true });
  world.addBox([12.5, 0.35, 20.5], [68, roofY + 0.1, -14], M.roof, { collider: false });
  // Parapet (with a gap at the stair landing).
  world.addBox([12.4, 0.9, 0.25], [68, roofY + 0.45, -24.1], M.concreteWall);
  world.addBox([12.4, 0.9, 0.25], [68, roofY + 0.45, -3.9], M.concreteWall);
  world.addBox([0.25, 0.9, 20.4], [74.1, roofY + 0.45, -14], M.concreteWall);
  world.addBox([0.25, 0.9, 10], [62.1, roofY + 0.45, -19], M.concreteWall);
  world.addBox([0.25, 0.9, 8], [62.1, roofY + 0.45, -8], M.concreteWall);
  // Shopfront facade.
  for (let z = -22; z < -5; z += 3.5) {
    world.addBox([0.2, 2.4, 2.3], [61.9, 1.4, z], M.darkGlass, { collider: false, solid: false });
    world.addBox([0.28, 3.0, 0.16], [61.8, 1.5, z + 1.3], M.chrome, { collider: false });
  }
  neonSign(world, 61.75, 4.4, -14, 'KANTO TRADING', 0xff4fa3, { width: 6.5, height: 0.9, rotY: -Math.PI / 2 });
  neonSign(world, 61.75, 3.4, -8, 'IMPORTS', 0x3df0ff, { width: 3.4, height: 0.6, rotY: -Math.PI / 2 });
  // Exterior stairs + landing.
  world.stairs(58, -22, 62, -10, 0.16, roofY, 26, M.concrete);
  world.floor(58, -10, 62, -6, roofY, 0.3, M.concrete);
  railing(world, 58, -22, 58, -10, 0.16, 1.05);
  railing(world, 58, -10, 58, -6, roofY, 1.05);
  world.addNavStairs(58, -22, 62, -10, 0.16, roofY, 'roof-stairs');
  world.addNavZone(58, -10, 62, -6, roofY, 'roof-landing');
  world.addNavZone(62.4, -23.8, 73.8, -4.2, roofY, 'roof');
  // Roof props.
  world.addBox([1.4, 0.7, 2.2], [69, roofY + 0.35, -20], M.paintedSteel);
  world.addBox([1.3, 0.6, 2.1], [71.5, roofY + 0.3, -18], M.metal);
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.2, 16), M.rustMetal);
  tank.position.set(70, roofY + 1.45, -8);
  tank.castShadow = true;
  world.scene.add(tank);
  const b = new THREE.Box3().setFromObject(tank);
  world.colliders.push({ mesh: tank, box: b, min: b.min, max: b.max });
  world.solidMeshes.push(tank);
  world.addBox([1.0, 0.9, 1.0], [64.5, roofY + 0.45, -16], M.wood);
  world.addBox([0.9, 0.8, 0.9], [64.2, roofY + 0.4, -17.2], M.darkWood);
  bench(world, 68, roofY, -5.5, Math.PI);
  neonSign(world, 74, roofY + 1.8, -14, 'TRADING CO.', 0xff4fa3, { width: 4, height: 0.7, rotY: -Math.PI / 2 });
  world.addMapRect(62, -24, 74, -4, '#4b3b4f');

  // ---------------------------------------------------------------- shrine
  // Low fence with a gate opening.
  for (const [x1, z1, x2, z2] of [
    [56, 30, 56, 48], [56, 48, 74, 48], [74, 30, 74, 48], [56, 30, 60, 30], [70, 30, 74, 30]
  ]) {
    railing(world, x1, z1, x2, z2, 0.12, 0.9);
  }
  toriiGate(world, 65, 32.5, 0, 1.0);
  world.addBox([2.4, 0.06, 15], [65, 0.16, 39.5], M.stone, { collider: false, solid: false });
  for (const [x, z] of [[61.5, 35], [68.5, 35], [61.5, 43], [68.5, 43]]) {
    world.addBox([0.6, 0.3, 0.6], [x, 0.27, z], M.stone, { collider: false });
    world.addBox([0.28, 0.9, 0.28], [x, 0.87, z], M.stone, { collider: false });
    world.addBox([0.5, 0.12, 0.5], [x, 1.37, z], M.lampWarm, { collider: false, solid: false });
  }
  shrineBuilding(world, 65, 42.5, 0);
  // Trees / planter boxes.
  for (const [x, z] of [[58, 33], [72, 33], [58, 45], [72, 45]]) {
    world.addBox([1.2, 0.7, 1.2], [x, 0.47, z], M.darkWood);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 2.6, 8), M.darkWood);
    trunk.position.set(x, 2.0, z);
    world.scene.add(trunk);
    const crown = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.6, 8), M.greenSteel);
    crown.position.set(x, 3.8, z);
    crown.castShadow = true;
    world.scene.add(crown);
  }
  neonSign(world, 65, 2.6, 30.4, 'KANTO SHRINE', 0xffd23a, { width: 4.4, height: 0.7 });
  world.addMapRect(56, 30, 74, 48, '#4a3b2b');

  // ---------------------------------------------------------------- street furniture
  const lampSpots = [
    [13, -40, false], [13, -18, true], [13, 2, false], [13, 24, true], [13, 44, false],
    [43, -38, false], [43, -14, true], [43, 8, false], [43, 28, true], [43, 46, false]
  ];
  for (const [x, z, lit] of lampSpots) streetLamp(world, x, z, x > 30 ? -Math.PI / 2 : Math.PI / 2, lit);

  // Utility poles and power lines.
  const poles = [[13, -44], [13, -4], [13, 36], [43, -32], [43, 10], [43, 40]];
  for (const [x, z] of poles) utilityPole(world, x, z);
  powerLine(world, [[13, 5.7, -44], [13, 5.65, -4], [13, 5.7, 36]], 0.7);
  powerLine(world, [[43, 5.7, -32], [43, 5.65, 10], [43, 5.7, 40]], 0.7);
  powerLine(world, [[13, 5.6, -4], [28, 5.3, -4], [43, 5.6, -4]], 1.2);
  powerLine(world, [[13, 5.6, 36], [28, 5.3, 36], [43, 5.6, 36]], 1.2);

  // Plaza props.
  for (const [x, z] of [[3, -12], [3, 12], [10, -14], [10, 14]]) {
    world.addBox([0.26, 0.9, 0.26], [x, 0.57, z], M.darkMetal);
    world.addBox([0.32, 0.08, 0.32], [x, 1.0, z], M.neonCyan, { collider: false, solid: false });
  }
  bench(world, 6, 0.12, -8, 0);
  bench(world, 6, 0.12, 8, Math.PI);
  vendingMachine(world, 10.8, 0.12, -6, -Math.PI / 2);
  vendingMachine(world, 10.8, 0.12, -4.4, -Math.PI / 2);
  trashCan(world, 11, 0.12, 2);
  signBoard(world, 2, 3.0, -13, 'NEO-KANTO', {
    width: 4, height: 0.8, rotY: Math.PI / 2, bg: '#0a1015', color: '#eaffff', accent: '#3df0ff',
    sub: 'NIGHT DISTRICT'
  });

  // Parked cars / traffic.
  createCar(world, 'sedan', 23.6, 16, 0, 0x8c3b3b);
  createCar(world, 'taxi', 32.2, -10, Math.PI, 0x1e2428);
  createCar(world, 'van', 23.8, -30, 0, 0x4b5d6b);
  createCar(world, 'truck', 32.0, 38, Math.PI, 0x3f5b47);
  createCar(world, 'sedan', 31.8, 14, Math.PI, 0x334455);
  createCar(world, 'taxi', 23.9, 38, 0, 0xd2a72e);

  // Bollards and planters on the east sidewalk.
  for (let z = -40; z <= 44; z += 8) {
    world.addBox([0.22, 0.7, 0.22], [41.6, 0.51, z], M.darkMetal);
    world.addBox([0.28, 0.07, 0.28], [41.6, 0.9, z], M.yellow, { collider: false, solid: false });
  }
  // Market entrance marker.
  world.addBox([0.4, 4.0, 0.4], [43.8, 2.12, -20], M.darkMetal);
  neonSign(world, 43.75, 4.4, -20, 'MARKET', 0xffd23a, { width: 2.6, height: 0.6, rotY: -Math.PI / 2 });

  // ---------------------------------------------------------------- nav zones
  world.addNavZone(-1, -16, 12, 16, 0.12, 'plaza');
  world.addNavZone(12, -49, 20, 49, 0.16, 'sidewalk-west');
  world.addNavZone(20, -49, 36, 49, 0.02, 'road');
  world.addNavZone(36, -49, 44, 49, 0.16, 'sidewalk-east');
  world.addNavZone(44, -20, 60, 10, 0.12, 'market');
  world.addNavZone(60, 10, 62, 28, 0.12, 'alley');
  world.addNavZone(44, 12, 60, 28, 0.14, 'mart');
  world.addNavZone(62, 12, 74, 26, 0.14, 'ramen');
  world.addNavZone(56, 30, 74, 48, 0.12, 'shrine');
  world.addNavZone(44, -50, 75, -20, 0.1, 'parking');
  world.addNavZone(60, -20, 75, 10, 0.12, 'back-court');
  world.addNavZone(-1, -20, 12, -16, 0.12, 'plaza-south');
  world.addNavZone(-1, 16, 12, 20, 0.12, 'plaza-north');

  // ---------------------------------------------------------------- spawns
  world.addSpawnPoint(5, 0.12, 0);
  world.addSpawnPoint(28, 0.02, 20);
  world.addSpawnPoint(40, 0.16, -12);
  world.addSpawnPoint(52, 0.12, -4);
  world.addSpawnPoint(55, 0.1, -36);
  world.addSpawnPoint(52, 0.14, 20);
  world.addSpawnPoint(68, 0.14, 18);
  world.addSpawnPoint(65, 0.12, 38);
  world.addSpawnPoint(28, 5.2, -23);
  world.addSpawnPoint(68, 6.5, -14);
  world.addSpawnPoint(61, 0.12, 20);

  // Map rectangles for the minimap.
  world.addMapRect(20, -50, 36, 50, '#262b2f');
  world.addMapRect(12, -50, 20, 50, '#4a4d4c');
  world.addMapRect(36, -50, 44, 50, '#4a4d4c');
  world.addMapRect(-1, -16, 12, 16, '#3f4b4f');
  world.addMapRect(44, 12, 60, 28, '#2f5056');
  world.addMapRect(62, 12, 74, 26, '#5a3733');
  world.addMapRect(44, -50, 75, -20, '#343a39');
  world.addMapRect(44, -20, 60, 10, '#5a3a40');
  world.addMapRect(56, 30, 74, 48, '#4a3a29');
  world.addMapRect(12, -24.5, 44, -21.5, '#5b6264');
  world.addMapRect(62, -24, 74, -4, '#4a3a4d');
}
