import * as THREE from 'three';
import { MAP_BOUNDS, VOID_Y, MAP_SIZE } from './config.js';
import { createMaterials } from './textures.js';
import { buildStation } from './mapStation.js';
import { buildCity } from './mapCity.js';
import { Navigation } from './navigation.js';

// ---------------------------------------------------------------------------
// World: one 150 x 100 arena split into an underground metro station (west)
// and a night city street (east). This file owns shared geometry helpers,
// collision registration, lighting, sky, nav zones and safe spawn points.
// Actual layout lives in mapStation.js / mapCity.js.
// ---------------------------------------------------------------------------
export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.colliders = [];
    this.solidMeshes = [];     // stops bullets and bot line of sight
    this.hitOnlyMeshes = [];   // stops bullets only (small decorations)
    this.navZones = [];
    this.navStairs = [];
    this.spawnPoints = [];
    this.mapFeatures = [];
    this.updaters = [];
    this.time = 0;

    this._geoCache = new Map();
    this.mats = createMaterials(renderer);

    this.respawnPoints = [];

    this.init();
  }

  init() {
    this.scene.background = new THREE.Color(0x060a10);
    this.scene.fog = new THREE.FogExp2(0x0a1219, 0.0072);

    this.createSky();
    this.createLighting();

    buildStation(this);
    buildCity(this);
    this.createBoundaries();

    this.nav = new Navigation(this);

    if (this.spawnPoints.length === 0) {
      this.spawnPoints.push(new THREE.Vector3(-20, -2.6, 0));
    }
    // Safety respawns use the same verified points.
    this.respawnPoints = this.spawnPoints.map(p => p.clone());
  }

  // ---------- geometry helpers ----------
  boxGeo(sx, sy, sz) {
    const key = `${sx}|${sy}|${sz}`;
    if (!this._geoCache.has(key)) this._geoCache.set(key, new THREE.BoxGeometry(sx, sy, sz));
    return this._geoCache.get(key);
  }

  addBox(size, position, material, options = {}) {
    const {
      collider = true, solid = true, castShadow = false, receiveShadow = true,
      rotation = null, hitOnly = false
    } = options;

    const mesh = new THREE.Mesh(this.boxGeo(...size), material);
    mesh.position.set(...position);
    if (rotation) mesh.rotation.set(...rotation);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    this.scene.add(mesh);

    if (hitOnly) this.hitOnlyMeshes.push(mesh);
    else if (solid) this.solidMeshes.push(mesh);

    if (collider) this.addColliderFromMesh(mesh);
    return mesh;
  }

  // Axis-aligned floor slab. Top surface is at topY.
  floor(x1, z1, x2, z2, topY, thickness, material, options = {}) {
    const w = Math.abs(x2 - x1);
    const d = Math.abs(z2 - z1);
    return this.addBox(
      [w, thickness, d],
      [(x1 + x2) / 2, topY - thickness / 2, (z1 + z2) / 2],
      material,
      { ...options, collider: options.collider !== false }
    );
  }

  wall(x1, z1, x2, z2, y0, y1, material, options = {}) {
    const w = Math.max(0.2, Math.abs(x2 - x1));
    const d = Math.max(0.2, Math.abs(z2 - z1));
    const h = y1 - y0;
    return this.addBox(
      [w, h, d],
      [(x1 + x2) / 2, y0 + h / 2, (z1 + z2) / 2],
      material,
      options
    );
  }

  // Steps along the longer axis of the given rectangle. The top of step i is
  // interpolated from yLow at (x1,z1) to yHigh at (x2,z2).
  stairs(x1, z1, x2, z2, yLow, yHigh, steps, material, options = {}) {
    const alongX = Math.abs(x2 - x1) >= Math.abs(z2 - z1);
    const width = alongX ? Math.abs(z2 - z1) : Math.abs(x2 - x1);
    const rise = (yHigh - yLow) / steps;
    const base = Math.min(yLow, yHigh) - 0.5;

    for (let i = 0; i < steps; i++) {
      const top = yLow + rise * (i + 1);
      const thickness = Math.max(0.14, top - base);
      const t = (i + 0.5) / steps;
      const cx = alongX ? x1 + (x2 - x1) * t : (x1 + x2) / 2;
      const cz = alongX ? (z1 + z2) / 2 : z1 + (z2 - z1) * t;
      const length = alongX
        ? Math.abs(x2 - x1) / steps
        : Math.abs(z2 - z1) / steps;
      this.addBox(
        alongX ? [length + 0.02, thickness, width] : [width, thickness, length + 0.02],
        [cx, top - thickness / 2, cz],
        material,
        { ...options, receiveShadow: true }
      );
    }
  }

  addColliderFromMesh(mesh) {
    const box = new THREE.Box3().setFromObject(mesh);
    this.colliders.push({ mesh, box, min: box.min, max: box.max });
    return box;
  }

  addColliderBox(min, max, mesh = null) {
    const box = new THREE.Box3(new THREE.Vector3(...min), new THREE.Vector3(...max));
    this.colliders.push({ mesh, box, min: box.min, max: box.max });
    return box;
  }

  addBlockerBox(size, position, minY, maxY) {
    this.addColliderBox(
      [position[0] - size[0] / 2, minY, position[2] - size[1] / 2],
      [position[0] + size[0] / 2, maxY, position[2] + size[1] / 2]
    );
  }

  addSolid(mesh) { this.solidMeshes.push(mesh); }
  addHitOnly(mesh) { this.hitOnlyMeshes.push(mesh); }

  // ---------- sky / lights ----------
  createSky() {
    const skyGeo = new THREE.SphereGeometry(360, 24, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x03060c) },
        midColor: { value: new THREE.Color(0x0b1a2a) },
        bottomColor: { value: new THREE.Color(0x16222b) }
      },
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorld;
        void main() {
          float h = normalize(vWorld).y;
          vec3 col = h > 0.0
            ? mix(midColor, topColor, smoothstep(0.0, 0.7, h))
            : mix(bottomColor, midColor, smoothstep(-0.3, 0.0, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);

    // Stars.
    const starPos = [];
    for (let i = 0; i < 900; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.46;
      const r = 300;
      starPos.push(
        Math.cos(theta) * Math.cos(phi) * r,
        Math.sin(phi) * r + 8,
        Math.sin(theta) * Math.cos(phi) * r
      );
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xcfe4ff, size: 1.1, sizeAttenuation: true, transparent: true, opacity: 0.8, depthWrite: false
    }));
    this.scene.add(stars);

    // Moon + soft halo.
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(11, 20, 16),
      new THREE.MeshBasicMaterial({ color: 0xf2f7ff })
    );
    moon.position.set(120, 92, -190);
    this.scene.add(moon);
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = haloCanvas.height = 128;
    const hc = haloCanvas.getContext('2d');
    const grad = hc.createRadialGradient(64, 64, 2, 64, 64, 62);
    grad.addColorStop(0, 'rgba(220,238,255,0.7)');
    grad.addColorStop(0.35, 'rgba(160,200,255,0.22)');
    grad.addColorStop(1, 'rgba(100,160,255,0)');
    hc.fillStyle = grad;
    hc.fillRect(0, 0, 128, 128);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(haloCanvas), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
    }));
    halo.scale.set(55, 55, 1);
    halo.position.copy(moon.position);
    this.scene.add(halo);

    // Distant skyline silhouette.
    const sil = new THREE.Mesh(
      new THREE.BoxGeometry(240, 34, 2),
      new THREE.MeshBasicMaterial({ color: 0x060b12 })
    );
    sil.position.set(30, 17, -120);
    this.scene.add(sil);
  }

  createLighting() {
    this.scene.add(new THREE.AmbientLight(0x3b4a60, 0.42));
    this.scene.add(new THREE.HemisphereLight(0x4f6d8e, 0x0b0f13, 0.68));

    const moonLight = new THREE.DirectionalLight(0x9fbfe8, 0.72);
    moonLight.position.set(-40, 80, -30);
    moonLight.target.position.set(0, 0, 0);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(2048, 2048);
    moonLight.shadow.camera.left = -100;
    moonLight.shadow.camera.right = 100;
    moonLight.shadow.camera.top = 100;
    moonLight.shadow.camera.bottom = -100;
    moonLight.shadow.camera.near = 1;
    moonLight.shadow.camera.far = 260;
    moonLight.shadow.bias = -0.0007;
    moonLight.shadow.normalBias = 0.04;
    this.scene.add(moonLight, moonLight.target);

    // Cool bounce from the street neon.
    const fill = new THREE.DirectionalLight(0x2a4a6a, 0.2);
    fill.position.set(30, 20, 40);
    this.scene.add(fill);

    // A few warm ambience lights. Point-light count is deliberately small:
    // emissive materials + bloom do most of the work for lamps and neon.
    const streetGlow = [
      [24, 5, 24, 0xffc57a, 24],
      [-12, 1, 0, 0xbfe6ff, 26],
      [54, 3, 14, 0xbff6ff, 18]
    ];
    for (const [x, y, z, color, dist] of streetGlow) {
      const l = new THREE.PointLight(color, 18, dist, 1.8);
      l.position.set(x, y, z);
      this.scene.add(l);
    }
  }

  // ---------- world registration ----------
  addNavZone(x1, z1, x2, z2, y, tag = '') {
    this.navZones.push({
      x1: Math.min(x1, x2), x2: Math.max(x1, x2),
      z1: Math.min(z1, z2), z2: Math.max(z1, z2),
      y, tag
    });
  }

  addNavStairs(x1, z1, x2, z2, y1, y2, tag = '', wide = 3.2) {
    // Keep the raw endpoint order: (x1,z1,y1) is the bottom/low side and
    // (x2,z2,y2) the top/high side. Navigation interpolates y along that axis.
    this.navStairs.push({ x1, z1, x2, z2, y1, y2, tag, wide });
  }

  addSpawnPoint(x, y, z) {
    this.spawnPoints.push(new THREE.Vector3(x, y, z));
  }

  addMapRect(x1, z1, x2, z2, color) {
    this.mapFeatures.push({
      x1: Math.min(x1, x2), z1: Math.min(z1, z2),
      x2: Math.max(x1, x2), z2: Math.max(z1, z2), color
    });
  }

  addUpdater(fn) { this.updaters.push(fn); }

  // ---------- boundaries / queries ----------
  createBoundaries() {
    const b = MAP_BOUNDS;
    // Invisible walls at the true outer extents, tall enough for stairs/roofs.
    this.addColliderBox([b.minX - 2, -8, b.minZ - 2], [b.minX, 14, b.maxZ + 2]);
    this.addColliderBox([b.maxX, -8, b.minZ - 2], [b.maxX + 2, 14, b.maxZ + 2]);
    this.addColliderBox([b.minX - 2, -8, b.minZ - 2], [b.maxX + 2, 14, b.minZ]);
    this.addColliderBox([b.minX - 2, -8, b.maxZ], [b.maxX + 2, 14, b.maxZ + 2]);

    // Last-resort solid slab. The safety respawn fires at VOID_Y (-9) before
    // anyone can ever stand down here, but this guarantees no open void.
    this.floor(b.minX, b.minZ, b.maxX, b.maxZ, -12, 1.0, this.mats.concreteDark, { solid: false });
  }

  getBounds() {
    return {
      minX: MAP_BOUNDS.minX, maxX: MAP_BOUNDS.maxX,
      minZ: MAP_BOUNDS.minZ, maxZ: MAP_BOUNDS.maxZ
    };
  }

  getKillY() { return VOID_Y; }
  getWidth() { return MAP_SIZE.width; }
  getDepth() { return MAP_SIZE.depth; }

  getColliders() { return this.colliders; }
  getObstacleMeshes() { return this.solidMeshes; }
  getHitMeshes() { return this.solidMeshes.concat(this.hitOnlyMeshes); }

  // Highest floor top below `ceiling` at an XZ point.
  getFloorHeightAt(x, z, ceiling = 30) {
    let best = -Infinity;
    for (const c of this.colliders) {
      const b = c.box;
      if (b.max.y > ceiling) continue;
      if (x < b.min.x || x > b.max.x || z < b.min.z || z > b.max.z) continue;
      if (b.max.y > best) best = b.max.y;
    }
    return best;
  }

  // Body-clearance check used by nav generation and props.
  isPointBlocked(x, z, y, radius = 0.5, height = 1.9, stepUp = 0.35) {
    for (const c of this.colliders) {
      const b = c.box;
      if (x + radius <= b.min.x || x - radius >= b.max.x) continue;
      if (z + radius <= b.min.z || z - radius >= b.max.z) continue;
      if (y + height <= b.min.y) continue;
      if (b.max.y <= y + stepUp) continue;
      return true;
    }
    return false;
  }

  getRespawnPoint() {
    const pool = this.spawnPoints.length ? this.spawnPoints : this.respawnPoints;
    return pool[Math.floor(Math.random() * pool.length)].clone();
  }

  // ---------- runtime ----------
  update(delta) {
    this.time += delta;
    for (const fn of this.updaters) fn(delta, this.time);
  }
}
