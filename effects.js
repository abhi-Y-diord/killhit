import * as THREE from 'three';

// Shared effect assets. Geometries/materials are reused wherever possible so
// sustained fire does not allocate a new scene graph every frame.
const sparkGeo = new THREE.SphereGeometry(0.045, 5, 5);
const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffc846, transparent: true, opacity: 1, depthWrite: false });

let flashTexture = null;
let smokeTexture = null;
const flashGeo = new THREE.PlaneGeometry(1, 1);
const tracerGeo = (() => {
  const geo = new THREE.CylinderGeometry(0.006, 0.006, 1, 6, 1, true);
  geo.rotateX(Math.PI / 2);
  return geo;
})();
const tracerMat = new THREE.MeshBasicMaterial({
  color: 0xffd27a,
  transparent: true,
  opacity: 0.7,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  toneMapped: false
});
const tracerGlowMat = new THREE.MeshBasicMaterial({
  color: 0xffa23c,
  transparent: true,
  opacity: 0.16,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  toneMapped: false
});
const casingGeo = new THREE.CylinderGeometry(0.007, 0.008, 0.033, 8);
const casingMat = new THREE.MeshStandardMaterial({ color: 0xc49a44, metalness: 0.9, roughness: 0.28 });
const decalGeo = new THREE.CircleGeometry(0.034, 9);
const decalMetalMat = new THREE.MeshBasicMaterial({
  color: 0x080808,
  transparent: true,
  opacity: 0.72,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -2
});
const decalDustMat = new THREE.MeshBasicMaterial({
  color: 0x29251f,
  transparent: true,
  opacity: 0.42,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -2
});
const decals = [];

function getFlashTexture() {
  if (flashTexture) return flashTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 2, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,235,1)');
  gradient.addColorStop(0.18, 'rgba(255,216,120,0.95)');
  gradient.addColorStop(0.45, 'rgba(255,135,35,0.45)');
  gradient.addColorStop(1, 'rgba(255,80,10,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  ctx.translate(64, 64);
  for (let i = 0; i < 8; i++) {
    ctx.rotate(Math.PI / 4);
    const spike = ctx.createLinearGradient(0, 0, 58, 0);
    spike.addColorStop(0, 'rgba(255,245,205,0.9)');
    spike.addColorStop(1, 'rgba(255,120,30,0)');
    ctx.fillStyle = spike;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(58, 0);
    ctx.lineTo(0, 7);
    ctx.closePath();
    ctx.fill();
  }
  flashTexture = new THREE.CanvasTexture(canvas);
  return flashTexture;
}

function getSmokeTexture() {
  if (smokeTexture) return smokeTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  gradient.addColorStop(0, 'rgba(210,205,195,0.66)');
  gradient.addColorStop(0.5, 'rgba(150,146,138,0.25)');
  gradient.addColorStop(1, 'rgba(90,88,82,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  smokeTexture = new THREE.CanvasTexture(canvas);
  return smokeTexture;
}

export function spawnSpark(scene, point, color = 0xffc846) {
  const mat = sparkMat.clone();
  mat.color.setHex(color);
  const spark = new THREE.Mesh(sparkGeo, mat);
  spark.position.copy(point);
  scene.add(spark);

  const start = performance.now();
  const life = 150;
  function tick() {
    const t = (performance.now() - start) / life;
    if (t >= 1) {
      scene.remove(spark);
      mat.dispose();
      return;
    }
    spark.scale.setScalar(1 + t * 2.2);
    mat.opacity = 1 - t;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function spawnMuzzleFlash(scene, position, direction, scale = 1) {
  const group = new THREE.Group();
  group.position.copy(position);
  const forward = direction.clone().normalize();
  group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), forward);

  const material = new THREE.MeshBasicMaterial({
    map: getFlashTexture(),
    color: 0xffd08a,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false
  });

  for (let i = 0; i < 3; i++) {
    const holder = new THREE.Group();
    holder.rotation.z = (i / 3) * Math.PI;
    const plane = new THREE.Mesh(flashGeo, material);
    plane.rotation.x = Math.PI / 2;
    plane.scale.set(0.26 * scale, 0.72 * scale, 1);
    holder.add(plane);
    group.add(holder);
  }

  const light = new THREE.PointLight(0xffb45e, 2.2 * scale, 3.2, 2);
  group.add(light);
  scene.add(group);

  const start = performance.now();
  const life = 70;
  function tick() {
    const t = (performance.now() - start) / life;
    if (t >= 1) {
      scene.remove(group);
      material.dispose();
      return;
    }
    const grow = 0.8 + t * 0.8;
    group.scale.setScalar(grow);
    material.opacity = (1 - t) * 0.95;
    light.intensity = (1 - t) * 2.2 * scale;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function spawnSmoke(scene, position, direction) {
  const directionNorm = direction.clone().normalize();
  const puffs = [];
  for (let i = 0; i < 3; i++) {
    const material = new THREE.SpriteMaterial({
      map: getSmokeTexture(),
      color: 0xb9b4aa,
      transparent: true,
      opacity: 0.24,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(position)
      .addScaledVector(directionNorm, 0.16 + i * 0.12)
      .add(new THREE.Vector3((Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06));
    const size = 0.16 + Math.random() * 0.14;
    sprite.scale.setScalar(size);
    scene.add(sprite);
    puffs.push({
      sprite,
      material,
      velocity: directionNorm.clone().multiplyScalar(0.18 + Math.random() * 0.16)
        .add(new THREE.Vector3((Math.random() - 0.5) * 0.1, 0.12 + Math.random() * 0.1, 0)),
      size
    });
  }

  const start = performance.now();
  const life = 520;
  function tick() {
    const now = performance.now();
    const t = (now - start) / life;
    if (t >= 1) {
      for (const puff of puffs) {
        scene.remove(puff.sprite);
        puff.material.dispose();
      }
      return;
    }
    for (const puff of puffs) {
      puff.sprite.position.addScaledVector(puff.velocity, 0.016);
      puff.velocity.y += 0.0009;
      puff.sprite.scale.setScalar(puff.size * (1 + t * 2.2));
      puff.material.opacity = (1 - t) * 0.24;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function spawnShell(scene, position, direction, size = 1) {
  const mesh = new THREE.Mesh(casingGeo, casingMat);
  mesh.scale.setScalar(size);
  mesh.position.copy(position);
  mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
  scene.add(mesh);

  const right = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0));
  if (right.lengthSq() < 0.001) right.set(1, 0, 0);
  right.normalize();

  const velocity = right.multiplyScalar(1.4 + Math.random() * 0.6)
    .add(new THREE.Vector3(0, 1.5 + Math.random() * 0.5, 0))
    .addScaledVector(direction, 0.25);
  const floor = position.y - 1.15;
  const start = performance.now();
  const life = 1700;
  function tick() {
    const t = (performance.now() - start) / life;
    if (t >= 1) {
      scene.remove(mesh);
      return;
    }
    velocity.y -= 9.8 * 0.016;
    mesh.position.addScaledVector(velocity, 0.016);
    if (mesh.position.y < floor) {
      mesh.position.y = floor;
      velocity.y = Math.abs(velocity.y) * 0.34;
      velocity.x *= 0.6;
      velocity.z *= 0.6;
    }
    mesh.rotation.x += velocity.z * 0.05;
    mesh.rotation.z += velocity.x * 0.05;
    if (t > 0.8) mesh.material = casingMat;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function spawnTracer(scene, startPoint, endPoint) {
  const distance = startPoint.distanceTo(endPoint);
  if (distance < 0.02) return;

  const tracer = new THREE.Mesh(tracerGeo, tracerMat);
  tracer.position.copy(startPoint).add(endPoint).multiplyScalar(0.5);
  tracer.lookAt(endPoint);
  tracer.scale.z = distance;
  const glow = new THREE.Mesh(tracerGeo, tracerGlowMat);
  glow.position.copy(tracer.position);
  glow.quaternion.copy(tracer.quaternion);
  glow.scale.set(1.7, 1.7, distance);
  scene.add(tracer, glow);

  setTimeout(() => {
    scene.remove(tracer, glow);
  }, 65);
}

export function spawnImpact(scene, point, normal, isMetal = false) {
  // Short-lived point light so nearby walls catch the flash.
  const light = new THREE.PointLight(isMetal ? 0xffb35a : 0xd8b779, isMetal ? 1.4 : 0.7, 2.6, 2);
  light.position.copy(point).addScaledVector(normal, 0.08);
  scene.add(light);
  const lightStart = performance.now();
  function tickLight() {
    const t = (performance.now() - lightStart) / 90;
    if (t >= 1) {
      scene.remove(light);
      return;
    }
    light.intensity *= 0.82;
    requestAnimationFrame(tickLight);
  }
  requestAnimationFrame(tickLight);

  if (isMetal) {
    const count = 12;
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 2.8,
        Math.random() * 2.2,
        (Math.random() - 0.5) * 2.8
      ).addScaledVector(normal, 1.4).multiplyScalar(1.4));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xffcf7a,
      size: 0.028,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });
    const points = new THREE.Points(geo, material);
    scene.add(points);
    const start = performance.now();
    function tick() {
      const t = (performance.now() - start) / 320;
      if (t >= 1) {
        scene.remove(points);
        geo.dispose();
        material.dispose();
        return;
      }
      const array = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        velocities[i].y -= 5.8 * 0.016;
        array[i * 3] += velocities[i].x * 0.016;
        array[i * 3 + 1] += velocities[i].y * 0.016;
        array[i * 3 + 2] += velocities[i].z * 0.016;
      }
      geo.attributes.position.needsUpdate = true;
      material.opacity = 1 - t;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  } else {
    const puffMaterial = new THREE.SpriteMaterial({
      map: getSmokeTexture(),
      color: 0xa69b86,
      transparent: true,
      opacity: 0.3,
      depthWrite: false
    });
    const puff = new THREE.Sprite(puffMaterial);
    puff.position.copy(point).addScaledVector(normal, 0.03);
    puff.scale.setScalar(0.16);
    scene.add(puff);
    const start = performance.now();
    function tick() {
      const t = (performance.now() - start) / 380;
      if (t >= 1) {
        scene.remove(puff);
        puffMaterial.dispose();
        return;
      }
      puff.scale.setScalar(0.16 + t * 0.3);
      puffMaterial.opacity = (1 - t) * 0.3;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const decal = new THREE.Mesh(decalGeo, isMetal ? decalMetalMat : decalDustMat);
  decal.position.copy(point).addScaledVector(normal, 0.012);
  decal.lookAt(point.clone().add(normal));
  decal.rotateZ(Math.random() * Math.PI * 2);
  scene.add(decal);
  decals.push(decal);
  while (decals.length > 60) {
    const old = decals.shift();
    scene.remove(old);
  }
  setTimeout(() => {
    scene.remove(decal);
    const index = decals.indexOf(decal);
    if (index >= 0) decals.splice(index, 1);
  }, 9000);
}
