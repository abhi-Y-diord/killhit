import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Vehicles: shaped bodies via ExtrudeGeometry, glass, wheels/tyres/rims,
// lights, bumpers, mirrors. Four car types plus detailed train builders.
// ---------------------------------------------------------------------------

const wheelTyreGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 18);
const wheelRimGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 12);
const wheelHubGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.32, 8);

function shapeFrom(points) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p.length === 4) shape.quadraticCurveTo(p[0], p[1], p[2], p[3]);
    else shape.lineTo(p[0], p[1]);
  }
  shape.closePath();
  return shape;
}

function extrudeBody(points, width, bevel = 0.07) {
  const shape = shapeFrom(points);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: width - bevel * 2,
    bevelEnabled: true,
    bevelSize: bevel,
    bevelThickness: bevel,
    bevelSegments: 2,
    curveSegments: 8
  });
  geo.translate(0, 0, -(width - bevel * 2) / 2);
  return geo;
}

const carGeos = new Map();
function carBodyGeo(type) {
  if (carGeos.has(type)) return carGeos.get(type);

  let points;
  let width;
  if (type === 'van') {
    width = 2.0;
    points = [
      [-2.3, 0.3], [-2.3, 1.2], [-2.15, 1.55], [-1.85, 1.8],
      [0.9, 1.8], [1.5, 1.55], [1.9, 1.2], [2.05, 0.72], [2.05, 0.3]
    ];
  } else if (type === 'truck') {
    width = 2.15;
    points = [
      [-2.4, 0.35], [-2.4, 1.6], [-1.4, 1.95], [-0.2, 1.95],
      [0.4, 1.55], [1.1, 1.2], [1.6, 1.2], [1.7, 0.65], [1.7, 0.35]
    ];
  } else {
    width = 1.9;
    points = [
      [-2.15, 0.32], [-2.16, 0.78], [-2.05, 0.94], [-1.75, 1.0],
      [-1.15, 1.02], [-0.85, 1.42], [-0.4, 1.58], [0.55, 1.58],
      [0.95, 1.42], [1.18, 1.03], [1.8, 0.96], [2.05, 0.86],
      [2.12, 0.55], [2.1, 0.32]
    ];
  }
  const geo = extrudeBody(points, width);
  carGeos.set(type, geo);
  return geo;
}

function windowGeo() {
  // Side window strip shape (thin, mounted on both sides).
  const shape = shapeFrom([
    [-1.45, 1.08], [-1.45, 1.34], [-0.55, 1.48], [0.55, 1.48], [0.95, 1.32], [0.95, 1.08]
  ]);
  return new THREE.ShapeGeometry(shape);
}

const sideWindowGeo = windowGeo();

function addWheel(parent, x, z, mats) {
  const tyre = new THREE.Mesh(wheelTyreGeo, mats.rubber);
  tyre.rotation.x = Math.PI / 2;
  tyre.position.set(x, 0.38, z);
  tyre.castShadow = true;
  parent.add(tyre);

  const rim = new THREE.Mesh(wheelRimGeo, mats.chrome);
  rim.rotation.x = Math.PI / 2;
  rim.position.set(x, 0.38, z + (z > 0 ? 0.01 : -0.01));
  parent.add(rim);

  const hub = new THREE.Mesh(wheelHubGeo, mats.darkMetal);
  hub.rotation.x = Math.PI / 2;
  hub.position.copy(rim.position);
  parent.add(hub);
}

function addLightBar(parent, x, y, z, width, mats, tail = false) {
  const mat = tail ? mats.taillight : mats.headlight;
  const geo = new THREE.BoxGeometry(0.06, 0.16, width);
  const light = new THREE.Mesh(geo, mat);
  light.position.set(x, y, z);
  parent.add(light);
  // Small glow plane to help bloom pick it up.
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(width + 0.15, 0.34),
    new THREE.MeshBasicMaterial({
      color: tail ? 0xff2a18 : 0xfff1c2,
      transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide
    })
  );
  glow.position.set(x + (tail ? -0.035 : 0.035), y, z);
  glow.rotation.y = Math.PI / 2;
  parent.add(glow);
}

export function createCar(world, type, x, z, rotY, color = 0x8c3b3b) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.rotation.y = rotY;
  const mats = world.mats;
  const paint = mats.getCarPaint(color);

  const body = new THREE.Mesh(carBodyGeo(type), paint);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Cabin roof / trim.
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(type === 'truck' ? 1.9 : 1.7, 0.05, type === 'van' ? 1.7 : 1.45),
    mats.darkMetal
  );
  roof.position.set(type === 'truck' ? 0.6 : -0.28, type === 'van' ? 1.82 : 1.6, 0);
  group.add(roof);

  // Windows on both sides.
  if (type !== 'truck') {
    const winMat = mats.darkGlass;
    for (const side of [-1, 1]) {
      const win = new THREE.Mesh(sideWindowGeo, winMat);
      win.position.set(0, 0, side * (type === 'van' ? 1.01 : 0.96));
      if (side < 0) win.rotation.y = Math.PI;
      group.add(win);
    }
    // Windscreen + rear glass.
    const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, type === 'van' ? 1.6 : 1.4), mats.darkGlass);
    frontGlass.position.set(type === 'van' ? 1.55 : 1.03, 1.32, 0);
    frontGlass.rotation.z = -0.45;
    group.add(frontGlass);
    const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.42, type === 'van' ? 1.55 : 1.3), mats.darkGlass);
    rearGlass.position.set(type === 'van' ? -2.2 : -1.72, 1.25, 0);
    group.add(rearGlass);
  } else {
    // Truck cargo box.
    const cargo = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.15, 2.15), mats.paintedSteel);
    cargo.position.set(0.65, 1.55, 0);
    cargo.castShadow = true;
    group.add(cargo);
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.06, 0.05), mats.darkMetal);
        rib.position.set(0.65, 0.7 + i * 0.5, side * 1.09);
        group.add(rib);
      }
    }
    const doorLine = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.85, 1.9), mats.darkMetal);
    doorLine.position.set(2.28, 1.55, 0);
    group.add(doorLine);
  }

  // Wheels.
  const wheelZ = type === 'van' ? 0.94 : 0.86;
  addWheel(group, -1.35, wheelZ, mats);
  addWheel(group, 1.35, wheelZ, mats);
  addWheel(group, -1.35, -wheelZ, mats);
  addWheel(group, 1.35, -wheelZ, mats);
  if (type === 'truck') {
    addWheel(group, 1.9, wheelZ, mats);
    addWheel(group, 1.9, -wheelZ, mats);
  }

  // Bumpers.
  const bumperGeo = new THREE.BoxGeometry(0.22, 0.2, type === 'van' ? 2.0 : 1.9);
  const frontBumper = new THREE.Mesh(bumperGeo, mats.chrome);
  frontBumper.position.set(type === 'truck' ? 1.76 : 2.16, 0.42, 0);
  group.add(frontBumper);
  const rearBumper = new THREE.Mesh(bumperGeo, mats.darkMetal);
  rearBumper.position.set(type === 'truck' ? -2.45 : -2.2, 0.42, 0);
  group.add(rearBumper);

  // Lights.
  addLightBar(group, type === 'truck' ? 1.74 : 2.14, 0.73, 0.62, 0.34, mats, false);
  addLightBar(group, type === 'truck' ? 1.74 : 2.14, 0.73, -0.62, 0.34, mats, false);
  addLightBar(group, -2.2, 0.72, 0.62, 0.32, mats, true);
  addLightBar(group, -2.2, 0.72, -0.62, 0.32, mats, true);

  // Mirrors.
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.12), mats.darkMetal);
    arm.position.set(0.85, 1.05, side * 0.98);
    group.add(arm);
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.14, 0.2), mats.chrome);
    mirror.position.set(0.86, 1.08, side * 1.08);
    group.add(mirror);
  }

  // Plate + grille.
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.15), mats.white);
  plate.position.set(type === 'truck' ? 1.89 : 2.24, 0.52, 0);
  plate.rotation.y = Math.PI / 2;
  group.add(plate);
  const grille = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.2, 0.8), mats.darkMetal);
  grille.position.set(type === 'truck' ? 1.74 : 2.14, 0.61, 0);
  group.add(grille);

  // Taxi roof sign.
  if (type === 'taxi') {
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.26), mats.neonYellow);
    sign.position.set(-0.3, 1.74, 0);
    group.add(sign);
    const signGlow = new THREE.PointLight(0xffd23a, 3.2, 6, 2);
    signGlow.position.set(-0.3, 1.75, 0);
    group.add(signGlow);
  }

  world.scene.add(group);

  // Register the vehicle as a solid obstacle. Use a world-space AABB.
  const box = new THREE.Box3().setFromObject(group);
  // Shrink the y a little so bullets can pass over low cars properly.
  box.min.y = Math.max(box.min.y, 0.15);
  world.colliders.push({ mesh: body, box, min: box.min, max: box.max });
  world.solidMeshes.push(body);
  if (type === 'truck') world.solidMeshes.push(group.children.find(c => c.geometry && c.geometry.parameters && c.geometry.parameters.height === 2.15) || body);

  return group;
}

// ---------------------------------------------------------------------------
// Train
// ---------------------------------------------------------------------------
const trainCarGeo = (() => {
  const points = [
    [-5.2, 0.3], [-5.2, 2.5], [-4.95, 2.95], [-4.4, 3.15], [4.4, 3.15],
    [4.75, 3.0], [5.0, 2.6], [5.0, 0.3]
  ];
  return extrudeBody(points, 2.9, 0.12);
})();

const trainNoseGeo = (() => {
  const points = [
    [-1.2, 0.4], [-1.2, 1.4], [-0.7, 2.2], [0.2, 2.7], [1.6, 2.85],
    [2.4, 2.5], [2.7, 1.7], [2.7, 0.4]
  ];
  return extrudeBody(points, 2.85, 0.14);
})();

export function createTrainCar(world, parent, zOffset, isFront = false, isRear = false) {
  const mats = world.mats;
  const car = new THREE.Group();
  car.position.set(0, 0, zOffset);

  const bodyMat = mats.paintedSteel;
  const body = new THREE.Mesh(trainCarGeo, bodyMat);
  body.castShadow = true;
  car.add(body);

  // Alternate accent band.
  const band = new THREE.Mesh(new THREE.BoxGeometry(2.94, 0.3, 9.8), mats.greenSteel);
  band.position.set(0, 1.7, 0);
  car.add(band);

  // Windows.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.78, 1.05), mats.darkGlass);
      win.position.set(side * 1.46, 2.28, -3.8 + i * 1.5);
      car.add(win);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.9, 1.16), mats.chrome);
      frame.position.set(side * 1.475, 2.28, -3.8 + i * 1.5);
      car.add(frame);
    }
    // Doors.
    for (const dz of [-2.2, 2.2]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.0, 1.2), mats.chrome);
      door.position.set(side * 1.47, 1.6, dz);
      car.add(door);
      const doorGlass = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.62, 0.9), mats.darkGlass);
      doorGlass.position.set(side * 1.5, 2.0, dz);
      car.add(doorGlass);
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.9, 0.03), mats.darkMetal);
      line.position.set(side * 1.51, 1.5, dz);
      car.add(line);
    }
  }

  // Roof equipment + AC units.
  for (const dz of [-2.5, 1.6]) {
    const ac = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.28, 2.0), mats.darkMetal);
    ac.position.set(0, 3.25, dz);
    car.add(ac);
    for (let i = 0; i < 5; i++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.04, 0.06), mats.metal);
      vent.position.set(0, 3.4, dz - 0.7 + i * 0.3);
      car.add(vent);
    }
  }

  // Undercarriage and bogies.
  const under = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.55, 9.2), mats.darkMetal);
  under.position.set(0, 0.55, 0);
  car.add(under);
  for (const dz of [-3.3, 3.3]) {
    const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 1.8), mats.darkPlastic);
    bogie.position.set(0, 0.32, dz);
    car.add(bogie);
    for (const side of [-1, 1]) {
      for (const w of [-0.55, 0.55]) {
        const wheel = new THREE.Mesh(wheelTyreGeo, mats.rubber);
        wheel.scale.set(0.9, 0.9, 0.9);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(side * 1.22, 0.35, dz + w);
        car.add(wheel);
      }
    }
  }

  // Nose / tail lights.
  if (isFront) {
    const nose = new THREE.Mesh(trainNoseGeo, bodyMat);
    nose.position.set(0, 0, 5.0);
    car.add(nose);
    for (const side of [-1, 1]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.08), mats.headlight);
      head.position.set(side * 0.75, 1.15, 7.55);
      car.add(head);
      const glow = new THREE.PointLight(0xffe8b0, 7, 18, 2);
      glow.position.set(side * 0.75, 1.15, 7.8);
      car.add(glow);
    }
    const windscreen = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.88, 0.06), mats.darkGlass);
    windscreen.position.set(0, 2.3, 6.35);
    car.add(windscreen);
  }
  if (isRear) {
    const tail = new THREE.Mesh(trainNoseGeo, bodyMat);
    tail.rotation.y = Math.PI;
    tail.position.set(0, 0, -5.0);
    car.add(tail);
    for (const side of [-1, 1]) {
      const light = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 0.08), mats.taillight);
      light.position.set(side * 0.8, 1.2, -7.55);
      car.add(light);
    }
  }

  parent.add(car);
  return car;
}

export function createTrain(world, x, z, rotY = 0) {
  const group = new THREE.Group();
  group.position.set(x, -5.55, z);
  group.rotation.y = rotY;

  createTrainCar(world, group, 0, false, false);
  createTrainCar(world, group, 11, true, false);
  createTrainCar(world, group, -11, false, true);

  // Pantograph.
  const pantoBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.15, 0.8), world.mats.darkMetal);
  pantoBase.position.set(0, 3.5, 1.5);
  group.add(pantoBase);
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.6, 0.06), world.mats.metal);
    arm.position.set(side * 0.4, 4.3, 1.7);
    arm.rotation.x = 0.35 * side;
    group.add(arm);
  }
  const shoe = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.12), world.mats.metal);
  shoe.position.set(0, 5.15, 2.1);
  group.add(shoe);

  world.scene.add(group);

  // Colliders for each car (big cover).
  for (const dz of [-11, 0, 11]) {
    const box = new THREE.Box3(
      new THREE.Vector3(x - 1.5, -5.5, z + dz - 5.6),
      new THREE.Vector3(x + 1.5, -2.3, z + dz + 5.6)
    );
    world.colliders.push({ mesh: group, box, min: box.min, max: box.max });
  }
  world.solidMeshes.push(group);
  return group;
}

// Lightweight train for the elevated line in the distance (no collider).
export function createPassingTrain(world) {
  const group = new THREE.Group();
  const mats = world.mats;
  for (let i = 0; i < 4; i++) {
    const car = new THREE.Group();
    car.position.z = i * 11.4;
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 3.0, 10.8),
      mats.paintedSteel
    );
    body.position.y = 1.5;
    car.add(body);
    const band = new THREE.Mesh(new THREE.BoxGeometry(2.86, 0.22, 10.6), mats.greenSteel);
    band.position.set(0, 2.0, 0);
    car.add(band);
    for (const side of [-1, 1]) {
      for (let w = 0; w < 5; w++) {
        const win = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.55, 1.05), mats.darkGlass);
        win.position.set(side * 1.42, 2.12, -3.6 + w * 1.6);
        car.add(win);
      }
    }
    for (let k = 0; k < 4; k++) {
      const lit = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 9.5), mats.lampCool);
      lit.position.set(-1.0 + k * 0.65, 0.35, 0);
      car.add(lit);
    }
    group.add(car);
  }
  group.position.set(-110, 8.6, -46.5);
  world.scene.add(group);

  // Headlight + warm interior glow as simple emissive planes.
  const head = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.3), mats.headlight);
  head.position.set(0, 1.5, -0.3);
  group.add(head);

  world.updaters.push((delta, time) => {
    group.position.x += delta * 12;
    if (group.position.x > 110) group.position.x = -110;
    group.position.y = 8.6 + Math.sin(time * 3) * 0.02;
  });

  return group;
}
