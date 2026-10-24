import * as THREE from 'three';
import { LEVELS } from './config.js';
import { createTrain } from './vehicles.js';
import {
  bench, vendingMachine, signBoard, neonSign, ceilingLight, barrier, trashCan,
  airDuct, hangingLantern
} from './props.js';

// ---------------------------------------------------------------------------
// NEO-KANTO METRO — underground station
//   ticket hall y=-2.6 | platforms y=-4.8 | track bed y=-5.6
// West of the city at x=-1. Entrance stairs rise to the street plaza.
// ---------------------------------------------------------------------------
export function buildStation(world) {
  const M = world.mats;
  const hall = LEVELS.hall;
  const plat = LEVELS.platform;
  const track = LEVELS.track;

  // ---------------------------------------------------------------- entrance
  // Stair shaft from the hall (x=-6) up to the street (x=-1).
  world.stairs(-6, -2, -1, 2, hall, 0, 10, M.tileFloor);
  for (const z of [-2.4, 2.4]) {
    world.wall(-6, z - 0.2, -1, z + 0.2, hall, 0.5, M.tileWall);
  }
  // Street-level facade with the entrance opening.
  world.wall(-1.2, -18, -1.2, -2, 0, 7, M.concreteWall);
  world.wall(-1.2, 2, -1.2, 18, 0, 7, M.concreteWall);
  world.wall(-1.2, -2, -1.2, 2, 3.6, 7, M.concreteWall);
  world.floor(-1.4, -18, -0.9, 18, 0.16, 0.16, M.pavement, { collider: false });
  signBoard(world, -0.95, 4.4, 0, 'NEO-KANTO METRO', {
    width: 7.5, height: 1.2, rotY: Math.PI / 2, bg: '#071018', color: '#f4feff',
    accent: '#3df0ff', sub: 'UNDERGROUND · PLATFORMS 1—2'
  });
  neonSign(world, -0.96, 2.9, 0, 'METRO', 0x3df0ff, { width: 3.2, height: 0.7, rotY: Math.PI / 2 });
  // Canopy over the street entrance.
  world.addBox([5.4, 0.16, 8.4], [-2.6, 3.25, 0], M.darkMetal, { collider: false });
  world.addBox([5.2, 0.06, 8.2], [-2.6, 3.36, 0], M.darkGlass, { collider: false, solid: false });
  for (const sx of [-5.1, -0.1]) {
    for (const sz of [-4, 4]) {
      world.addBox([0.14, 3.25, 0.14], [sx, 1.62, sz], M.darkMetal, { collider: false });
    }
  }
  world.floor(-6.2, -3.2, -0.8, 3.2, hall, 0.6, M.tileFloor);
  world.addNavStairs(-6, -2, -1, 2, hall, 0, 'entrance');
  world.addNavZone(-1, -6, 3, 6, 0, 'entrance-landing');
  world.addMapRect(-6, -3, -1, 3, '#3a6070');

  // ---------------------------------------------------------------- ticket hall
  world.floor(-34, -18, -6, 18, hall, 0.7, M.tileFloor);
  world.addBox([28.4, 0.06, 36.4], [-20, hall + 0.03, 0], M.tileFloor, {
    collider: false, solid: false, receiveShadow: true
  });
  // Walls.
  world.wall(-34.2, -18.2, -5.8, -18, hall, 1.8, M.tileWall);
  world.wall(-34.2, 18, -5.8, 18.2, hall, 1.8, M.tileWall);
  world.wall(-34.2, -18, -34, -15, hall, 1.8, M.tileWall);
  world.wall(-34.2, -11, -34, -3, hall, 1.8, M.tileWall);
  world.wall(-34.2, 3, -34, 11, hall, 1.8, M.tileWall);
  world.wall(-34.2, 15, -34, 18, hall, 1.8, M.tileWall);
  world.wall(-6, -18, -5.8, -2, hall, 1.8, M.tileWall);
  world.wall(-6, 2, -5.8, 18, hall, 1.8, M.tileWall);
  // Ceiling + trim.
  world.addBox([28.4, 0.5, 36.4], [-20, 1.95, 0], M.concreteDark, { solid: false });
  world.addBox([28.2, 0.32, 0.06], [-20, 1.0, -17.9], M.greenSteel, { collider: false, solid: false });
  world.addBox([28.2, 0.32, 0.06], [-20, 1.0, 17.9], M.greenSteel, { collider: false, solid: false });
  world.addMapRect(-34, -18, -6, 18, '#394b56');

  // Ticket gates at x=-11, four lanes.
  for (const zc of [-9, -3, 3, 9]) {
    for (const side of [-1, 1]) {
      const post = world.addBox([0.4, 1.15, 0.26], [-11, hall + 0.575, zc + side * 1.02], M.darkMetal);
      post.castShadow = true;
      world.addBox([0.34, 0.16, 0.3], [-11, hall + 1.2, zc + side * 1.02], M.metal, { collider: false });
      // Card reader.
      world.addBox([0.05, 0.2, 0.16], [-10.78, hall + 0.85, zc + side * 0.82], M.neonCyan, {
        collider: false, solid: false
      });
    }
    world.addBox([0.44, 0.16, 2.3], [-11, hall + 1.42, zc], M.paintedSteel, { collider: false });
    world.addBox([0.1, 0.16, 0.5], [-10.76, hall + 1.55, zc], M.neonGreen, { collider: false, solid: false });
  }
  signBoard(world, -11.4, 0.2, 0, 'TICKET GATES', {
    width: 3.6, height: 0.55, rotY: Math.PI / 2, bg: '#0a1015', color: '#dffbff', accent: '#8cff5a'
  });

  // Hall ceiling lights + two cool fill lights.
  for (const x of [-27, -21, -15]) {
    for (const z of [-12, 0, 12]) {
      ceilingLight(world, x, 1.62, z, 3.4, Math.PI / 2, false);
    }
  }
  for (const x of [-25, -15]) {
    const l = new THREE.PointLight(0xd8efff, 24, 24, 1.8);
    l.position.set(x, 0.9, 0);
    world.scene.add(l);
  }
  // Emergency green glow near exits.
  const exitGlow = new THREE.PointLight(0x66ff99, 7, 12, 2);
  exitGlow.position.set(-8, 0.5, 0);
  world.scene.add(exitGlow);

  // Props: ticket machines, benches, vending, bins, pillars.
  for (let i = 0; i < 3; i++) {
    const g = new THREE.Group();
    g.position.set(-30 + i * 2.1, hall, -16.8);
    g.add(new THREE.Mesh(world.boxGeo(1.5, 1.9, 0.7), M.darkMetal));
    g.children[0].position.y = 0.95;
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.0), M.neonTexture);
    panel.position.set(0, 1.25, 0.37);
    g.add(panel);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.4), M.neonBlue);
    screen.position.set(0, 0.5, 0.37);
    g.add(screen);
    world.scene.add(g);
    const b = new THREE.Box3().setFromObject(g);
    world.colliders.push({ mesh: g, box: b, min: b.min, max: b.max });
    world.solidMeshes.push(g.children[0]);
  }
  bench(world, -8.5, hall, -12, Math.PI / 2);
  bench(world, -8.5, hall, 12, Math.PI / 2);
  vendingMachine(world, -33.3, hall, -8, -Math.PI / 2);
  vendingMachine(world, -33.3, hall, 8, -Math.PI / 2);
  trashCan(world, -33.2, hall, 0);
  barrier(world, -28, hall, 16.7, 0);
  // Columns.
  for (const x of [-27, -18]) {
    for (const z of [-8, 8]) {
      world.addBox([0.55, 4.4, 0.55], [x, hall + 2.2, z], M.concreteWall, { castShadow: true });
    }
  }
  neonSign(world, -34.05, 0.9, 0, 'KANTO LINE', 0xffd23a, { width: 5.2, height: 0.7, rotY: Math.PI / 2 });

  // ---------------------------------------------------------------- stairs down
  const stairBands = [
    { z1: -15, z2: -11, mat: M.tileFloor, tag: 'stairs-north' },
    { z1: 11, z2: 15, mat: M.tileFloor, tag: 'stairs-south' }
  ];
  for (const band of stairBands) {
    world.stairs(-34, band.z1, -44, band.z2, hall, plat, 10, band.mat);
    for (const z of [band.z1 - 0.15, band.z2 + 0.15]) {
      world.wall(-44, z - 0.15, -34, z + 0.15, plat, -0.9, M.tileWall);
    }
    world.addNavStairs(-34, band.z1, -44, band.z2, hall, plat, band.tag);
    world.addBox([10, 0.14, 0.12], [-39, hall - 0.15, band.z1], M.yellow, { collider: false, solid: false });
  }
  // Escalator (middle).
  world.stairs(-34, -3, -44, 3, hall, plat, 12, M.metal);
  for (const z of [-3.2, 3.2]) {
    world.addBox([10, 0.12, 0.12], [-39, hall - 0.5, z], M.darkMetal, { collider: false });
    world.addBox([10, 0.9, 0.08], [-39, hall - 0.9, z], M.darkGlass, { collider: false, solid: false });
    world.addBox([10, 0.08, 0.1], [-39, hall - 0.42, z], M.chrome, { collider: false });
  }
  world.addNavStairs(-34, -3, -44, 3, hall, plat, 'escalator');
  neonSign(world, -34.01, 0.55, -3.1, 'PLATFORMS 1—2', 0x3df0ff, { width: 4.4, height: 0.55, rotY: Math.PI / 2 });
  neonSign(world, -34.01, 0.55, 3.1, 'PLATFORMS 1—2', 0x3df0ff, { width: 4.4, height: 0.55, rotY: Math.PI / 2 });

  // ---------------------------------------------------------------- platform hall
  world.floor(-72, -44, -34, 34, plat, 0.8, M.platform);
  world.floor(-72, 34, -34, 44, plat, 0.8, M.tileFloor);
  world.floor(-58, -44, -44, 34, track, 0.5, M.gravel);
  // Outer walls.
  world.wall(-72.4, -44.4, -72.2, 44.4, plat, 1.4, M.tileWall);
  world.wall(-72.4, -44.4, -34, -44.2, plat, 1.4, M.tileWall);
  world.wall(-72.4, 44.2, -34, 44.4, plat, 1.4, M.tileWall);
  world.wall(-34, -44, -33.8, -18, plat, 1.4, M.tileWall);
  world.wall(-34, 18, -33.8, 34, plat, 1.4, M.tileWall);
  // Underpass doorway wall at z=34 (track bed blocked, platform edges open).
  world.wall(-58, 33.8, -44, 34.2, plat, 0.4, M.tileWall);
  // Ceiling.
  world.addBox([38.4, 0.5, 88.4], [-53, 1.35, 0], M.concreteDark, { solid: false });
  world.addBox([38.2, 0.28, 0.08], [-53, 0.55, -43.9], M.greenSteel, { collider: false, solid: false });
  world.addBox([38.2, 0.28, 0.08], [-53, 0.55, 43.9], M.greenSteel, { collider: false, solid: false });
  world.addMapRect(-72, -44, -34, 34, '#31414c');
  world.addMapRect(-72, 34, -34, 44, '#2a3540');

  // Yellow platform safety lines.
  for (const x of [-58.25, -43.75]) {
    world.addBox([0.35, 0.02, 77.6], [x, plat + 0.01, -5], M.yellow, { collider: false, solid: false });
  }
  // Tactile strip.
  for (const x of [-59.1, -42.9]) {
    world.addBox([0.3, 0.03, 77.6], [x, plat + 0.015, -5], M.paintedSteel, { collider: false, solid: false });
  }

  // Platform ceiling lights (long rows).
  for (const x of [-67, -55, -39]) {
    for (let z = -38; z <= 38; z += 9) {
      ceilingLight(world, x, 0.8, z, 3.6, 0, false);
    }
  }
  const platformLights = [
    [-65, 0.2, -20], [-65, 0.2, 18], [-39, 0.2, -20], [-39, 0.2, 18]
  ];
  for (const [x, y, z] of platformLights) {
    const l = new THREE.PointLight(0xd8efff, 22, 24, 1.8);
    l.position.set(x, y, z);
    world.scene.add(l);
  }

  // Pillars along both platforms.
  for (const x of [-66.5, -39.2]) {
    for (const z of [-32, -18, -4, 10, 24]) {
      world.addBox([0.5, 6.2, 0.5], [x, plat + 3.1, z], M.concreteWall, { castShadow: true });
      world.addBox([0.65, 0.12, 0.65], [x, plat + 0.06, z], M.darkMetal, { collider: false });
    }
  }

  // Platform signs + props.
  for (const [x, z, num] of [[-64, -26, '1'], [-64, 22, '1'], [-41, -26, '2'], [-41, 22, '2']]) {
    signBoard(world, x, 0.3, z, `PLATFORM ${num}`, {
      width: 2.8, height: 0.5, rotY: x < -50 ? Math.PI / 2 : -Math.PI / 2,
      bg: '#081016', color: '#eaffff', accent: '#3df0ff'
    });
  }
  bench(world, -68.5, plat, -14, Math.PI / 2);
  bench(world, -68.5, plat, 6, Math.PI / 2);
  bench(world, -36.5, plat, -10, -Math.PI / 2);
  vendingMachine(world, -70.5, plat, 26, 0);
  vendingMachine(world, -70.5, plat, 29, 0);
  trashCan(world, -70.6, plat, -2);
  barrier(world, -40, plat, 34.6, 0);
  neonSign(world, -71.9, 0.4, 0, 'PLATFORM 1', 0x3df0ff, { width: 4, height: 0.6, rotY: Math.PI / 2 });
  neonSign(world, -34.1, 0.4, 0, 'PLATFORM 2', 0x8cff5a, { width: 4, height: 0.6, rotY: -Math.PI / 2 });

  // ---------------------------------------------------------------- tracks
  // Rails + sleepers are hit-only (the bed floor is the collision surface).
  const railGeo = world.boxGeo(0.12, 0.15, 76);
  for (const x of [-56.25, -54.75, -51.25, -49.75]) {
    const rail = new THREE.Mesh(railGeo, M.metal);
    rail.position.set(x, track + 0.08, -5);
    world.scene.add(rail);
    world.hitOnlyMeshes.push(rail);
  }
  const sleeperGeo = world.boxGeo(2.4, 0.08, 0.32);
  const sleeperCount = 2 * 64;
  const sleepers = new THREE.InstancedMesh(sleeperGeo, M.darkWood, sleeperCount);
  const m4 = new THREE.Matrix4();
  let si = 0;
  for (const tx of [-55.5, -50.5]) {
    for (let i = 0; i < 64; i++) {
      m4.makeTranslation(tx, track + 0.02, -41.5 + i * 1.2);
      sleepers.setMatrixAt(si++, m4);
    }
  }
  sleepers.instanceMatrix.needsUpdate = true;
  world.scene.add(sleepers);
  world.hitOnlyMeshes.push(sleepers);

  // Steps out of the track bed (three small risers each side).
  for (const z of [-41, 30]) {
    for (let i = 0; i < 3; i++) {
      const top = track + 0.2 + i * 0.26;
      const wx = 0.55;
      world.addBox([wx, top - track + 0.5, 4], [-58 + wx / 2 - i * wx, top - (top - track + 0.5) / 2, z], M.concrete);
      world.addBox([wx, top - track + 0.5, 4], [-44 - wx / 2 + i * wx, top - (top - track + 0.5) / 2, z], M.concrete);
    }
  }

  // Parked train on the east track — huge cover.
  createTrain(world, -50.5, -17, 0);
  world.addMapRect(-52, -33.8, -49, -0.2, '#6c7f8b');

  // ---------------------------------------------------------------- underpass
  // Cross-corridor at the south end, connecting both platforms at plat level.
  world.addBox([38, 5.6, 0.4], [-53, 1.0, 44], M.tileWall, { collider: false });
  world.addBox([38, 0.5, 10], [-53, -0.4, 39], M.concreteDark, { collider: false });
  for (const x of [-72, -34]) {
    world.addBox([0.3, 4.0, 9.6], [x + 0.15, -2.8, 39], M.tileWall, { collider: false });
  }
  signBoard(world, -53, -1.2, 34.1, 'UNDERPASS', {
    width: 4.2, height: 0.62, bg: '#081015', color: '#ffe0a8', accent: '#ffb45a'
  });
  for (const x of [-66, -53, -40]) {
    ceilingLight(world, x, -1.4, 39, 2.4, 0, false);
  }
  const underLight = new THREE.PointLight(0xffc57a, 16, 18, 1.8);
  underLight.position.set(-53, -2.2, 39);
  world.scene.add(underLight);
  airDuct(world, -70, -1.5, 39, 8, 'x');

  // ---------------------------------------------------------------- staff area
  world.floor(-34, 18, -18, 34, hall, 0.7, M.tileFloor);
  world.floor(-22, 34, -19, 44, hall, 0.7, M.concrete);
  // Corridor and room walls.
  world.wall(-34.2, 18, -28, 18.2, hall, 0.6, M.tileWall);
  world.wall(-23, 18, -18, 18.2, hall, 0.6, M.tileWall);
  world.wall(-34.2, 22, -31, 22.2, hall, 0.6, M.tileWall);
  world.wall(-29, 22, -21, 22.2, hall, 0.6, M.tileWall);
  world.wall(-19, 22, -18, 22.2, hall, 0.6, M.tileWall);
  world.wall(-33.5, 22, -33.3, 30, hall, 0.6, M.tileWall);
  world.wall(-25.6, 22, -25.4, 30, hall, 0.6, M.tileWall);
  world.wall(-18.2, 22, -18, 30, hall, 0.6, M.tileWall);
  world.wall(-33.5, 30, -31, 30.2, hall, 0.6, M.tileWall);
  world.wall(-29, 30, -21, 30.2, hall, 0.6, M.tileWall);
  world.wall(-19, 30, -18, 30.2, hall, 0.6, M.tileWall);
  // Maintenance corridor and tunnel. A doorway at x=-22..-21 links it to the
  // staff corridor.
  world.wall(-34.2, 34, -22.8, 34.2, hall, 0.6, M.tileWall);
  world.wall(-20.6, 34, -19, 34.2, hall, 0.6, M.tileWall);
  world.wall(-24.4, 34, -24.2, 44, hall, 0.6, M.tileWall);
  world.wall(-19, 34, -18.8, 44, hall, 0.6, M.tileWall);
  world.wall(-24.4, 44, -18.8, 44.2, hall, 0.6, M.concreteDark);
  world.addBox([16.4, 0.5, 16.4], [-26, 0.85, 26], M.concreteDark, { solid: false });
  world.addBox([3.2, 0.5, 10], [-21.6, 0.85, 39], M.concreteDark, { solid: false });
  // Doors: metal frames on both sides of each service room.
  for (const dx of [-30, -20]) {
    for (const dz of [22.1, 30.1]) {
      world.addBox([2.0, 0.12, 0.12], [dx, hall + 2.15, dz], M.darkMetal, { collider: false });
      for (const side of [-1, 1]) {
        world.addBox([0.1, 2.2, 0.14], [dx + side * 1.0, hall + 1.1, dz], M.darkMetal, { collider: false });
      }
      world.addBox([0.05, 0.35, 0.06], [dx + 0.6, hall + 1.0, dz + 0.12], M.chrome, { collider: false });
    }
  }
  // Service room props.
  for (const x of [-31.5, -20.5]) {
    world.addBox([1.8, 1.6, 0.7], [x, hall + 0.8, 27.7], M.paintedSteel, { castShadow: true });
    world.addBox([1.6, 0.08, 0.6], [x, hall + 1.65, 27.7], M.metal, { collider: false });
    world.addBox([0.7, 2.1, 0.7], [x + 2.2, hall + 1.05, 24.5], M.darkMetal);
    world.addBox([0.62, 1.9, 0.04], [x + 2.2, hall + 1.05, 24.86], M.paintedSteel, { collider: false });
    trashCan(world, x - 2.1, hall, 28.9);
  }
  // Dim maintenance lighting + pipes.
  for (const z of [20, 26, 32, 38, 42]) {
    ceilingLight(world, -26, 0.55, z, 1.8, Math.PI / 2, false);
  }
  const staffLight = new THREE.PointLight(0xffd7a1, 10, 14, 2);
  staffLight.position.set(-27, -1.4, 26);
  world.scene.add(staffLight);
  airDuct(world, -21.6, -0.4, 39, 9, 'z');
  // Crates + locker rows.
  for (let i = 0; i < 3; i++) {
    world.addBox([0.8, 0.8, 0.8], [-32 + i * 0.9, hall + 0.4, 40.5], M.wood);
  }
  neonSign(world, -26, 0.0, 18.15, 'STAFF ONLY', 0xff5a4a, { width: 2.8, height: 0.42 });

  // ---------------------------------------------------------------- nav + spawns
  world.addNavZone(-34, -17.8, -6, 17.8, hall, 'hall');
  world.addNavZone(-33, 18, -18, 21.8, hall, 'staff-corridor');
  world.addNavZone(-33, 22.2, -25.6, 29.8, hall, 'service-a');
  world.addNavZone(-25.4, 22.2, -18.2, 29.8, hall, 'service-b');
  // Doorway connectors so the small service rooms stay reachable.
  world.addNavZone(-30.7, 21.3, -29.3, 22.9, hall, 'door-a1');
  world.addNavZone(-20.7, 21.3, -19.3, 22.9, hall, 'door-b1');
  world.addNavZone(-30.7, 29.3, -29.3, 30.9, hall, 'door-a2');
  world.addNavZone(-20.7, 29.3, -19.3, 30.9, hall, 'door-b2');
  world.addNavZone(-22.7, 33.4, -20.8, 34.9, hall, 'door-maint');
  world.addNavZone(-34, 30.2, -18, 33.8, hall, 'staff-corridor-2');
  world.addNavZone(-24.2, 34.2, -19, 43.8, hall, 'maintenance');
  world.addNavZone(-72, -43.8, -58, 33.8, plat, 'platform-west');
  world.addNavZone(-44, -43.8, -34, 33.8, plat, 'platform-east');
  world.addNavZone(-58, -43.8, -44, 33.8, track, 'track-bed');
  world.addNavZone(-71.8, 34.2, -34.2, 43.8, plat, 'underpass');
  // Steps from track bed onto platforms (short risers).
  world.addNavStairs(-58, -43, -60, -39, track, plat, 'track-steps-w');
  world.addNavStairs(-44, -43, -42, -39, track, plat, 'track-steps-e');
  world.addNavStairs(-58, 28, -60, 32, track, plat, 'track-steps-w2');
  world.addNavStairs(-44, 28, -42, 32, track, plat, 'track-steps-e2');

  // Verified bot / player spawn positions.
  world.addSpawnPoint(-20, hall, 0);
  world.addSpawnPoint(-29, hall, 12);
  world.addSpawnPoint(-13, hall, -14);
  world.addSpawnPoint(-38, plat, -24);
  world.addSpawnPoint(-40, plat, 12);
  world.addSpawnPoint(-65, plat, -28);
  world.addSpawnPoint(-68, plat, 8);
  world.addSpawnPoint(-51, track, -30);
  world.addSpawnPoint(-51, plat, 39);
  world.addSpawnPoint(-29, hall, 25);
  world.addSpawnPoint(-21.5, hall, 38);

  // Map landing / plaza art.
  world.addMapRect(-18, -44, -34, 34, '#31414c');
}
