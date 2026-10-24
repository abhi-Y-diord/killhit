import * as THREE from 'three';

// Fixed pickup locations around the station + street.
// y matches the floor level each spot sits on.
const PICKUP_SPOTS = [
  // Station hall / platforms / track bed.
  { type: 'health', position: [-30, -2.6, -4] },
  { type: 'ammo', position: [-14, -2.6, 4] },
  { type: 'health', position: [-66, -4.8, 24] },
  { type: 'ammo', position: [-38, -4.8, -20] },
  { type: 'ammo', position: [-52, -5.6, -30] },
  { type: 'health', position: [-62, -4.8, 39] },
  // City.
  { type: 'ammo', position: [28, 0.07, -6] },
  { type: 'health', position: [52, 0.12, 2] },
  { type: 'ammo', position: [52, 0.14, 20] },
  { type: 'health', position: [55, 0.1, -36] },
  { type: 'ammo', position: [65, 0.12, 38] },
  { type: 'health', position: [28, 5.2, -23] },
  { type: 'ammo', position: [68, 6.5, -14] }
];

const RESPAWN_TIME = 20;
const PICKUP_RADIUS = 1.4;

export class Pickups {
  constructor(scene, player, gun, audio) {
    this.scene = scene;
    this.player = player;
    this.gun = gun;
    this.audio = audio;

    this.items = [];
    this.time = 0;

    this.init();
  }

  init() {
    for (const spot of PICKUP_SPOTS) {
      const group = new THREE.Group();
      group.position.set(spot.position[0], spot.position[1] + 0.45, spot.position[2]);

      if (spot.type === 'health') this.buildHealthPack(group);
      else this.buildAmmoBox(group);

      this.scene.add(group);

      this.items.push({
        type: spot.type,
        group,
        baseY: spot.position[1] + 0.45,
        active: true,
        respawnTimer: 0
      });
    }
  }

  buildHealthPack(group) {
    const white = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.6 });
    const red = new THREE.MeshStandardMaterial({ color: 0xdd2222, roughness: 0.5 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.4, 0.5), white);
    base.castShadow = true;
    group.add(base);

    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.53), red);
    group.add(crossH);

    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.42, 0.53), red);
    group.add(crossV);
  }

  buildAmmoBox(group) {
    const olive = new THREE.MeshStandardMaterial({ color: 0x3d4a24, roughness: 0.7 });
    const yellow = new THREE.MeshStandardMaterial({ color: 0xd8b12a, roughness: 0.5 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.5), olive);
    base.castShadow = true;
    group.add(base);

    const band = new THREE.Mesh(new THREE.BoxGeometry(0.83, 0.1, 0.53), yellow);
    band.position.y = 0.05;
    group.add(band);

    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.06, 0.52), olive);
    lid.position.y = 0.22;
    group.add(lid);
  }

  update(delta) {
    this.time += delta;

    for (const item of this.items) {
      if (!item.active) {
        item.respawnTimer -= delta;
        if (item.respawnTimer <= 0) {
          item.active = true;
          item.group.visible = true;
        }
        continue;
      }

      // Idle animation.
      item.group.rotation.y += delta * 1.2;
      item.group.position.y = item.baseY + Math.sin(this.time * 2 + item.baseY) * 0.08;

      if (!this.player.hasStarted || this.player.isDead) continue;

      const dx = this.player.camera.position.x - item.group.position.x;
      const dz = this.player.camera.position.z - item.group.position.z;
      const dy = this.player.camera.position.y - item.baseY;
      // Same level only (items on the track bed must not be grabbed from a platform above).
      if (Math.hypot(dx, dz) > PICKUP_RADIUS || dy < 0 || dy > 2.2) continue;

      if (item.type === 'health') {
        if (this.player.health >= this.player.maxHealth) continue;
        this.player.heal(50);
      } else {
        const needsAmmo = this.gun.weapons.some(w => w.ammo < w.magSize);
        if (!needsAmmo) continue;
        this.gun.refillAll();
      }

      this.audio.pickup();
      item.active = false;
      item.group.visible = false;
      item.respawnTimer = RESPAWN_TIME;
    }
  }
}
