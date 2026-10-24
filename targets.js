import * as THREE from 'three';

export class Targets {
  constructor(scene) {
    this.scene = scene;
    this.targets = [];

    this.initTargets();
  }

  initTargets() {
    // Practice dummies along the southern end of the station (one on the
    // track bed, the rest on the platforms), clear of crates and pillars.
    const targetConfigs = [
      { pos: [-20.5, -2.0, -36.5] },
      { pos: [-16, -2.0, -36.5] },
      { pos: [2, -2.9, -36.5] },
      { pos: [14, -2.0, -36.5] },
      { pos: [21, -2.0, -36.5] }
    ];

    targetConfigs.forEach(config => {
      const targetGroup = new THREE.Group();
      targetGroup.position.set(...config.pos);

      // Body (Box)
      const bodyGeo = new THREE.BoxGeometry(1.0, 1.6, 0.5);
      const material = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.3 });
      const body = new THREE.Mesh(bodyGeo, material);
      body.position.y = 0.8;
      body.castShadow = true;
      targetGroup.add(body);

      // Head (Sphere)
      const headGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const head = new THREE.Mesh(headGeo, material);
      head.position.y = 1.95;
      head.castShadow = true;
      targetGroup.add(head);

      this.scene.add(targetGroup);

      const targetData = {
        group: targetGroup,
        body: body,
        head: head,
        material: material,
        health: 100,
        maxHealth: 100,
        isAlive: true,
        respawnTimer: 0,
        flashTimer: 0,
        originalColor: 0xcc2222,
        applyDamage(isHeadshot, damageOverride = null) {
          const damage = damageOverride !== null ? damageOverride : (isHeadshot ? 50 : 20);
          this.health -= damage;

          this.material.color.setHex(0xffffff);
          this.flashTimer = 0.1;

          if (this.health <= 0) {
            this.isAlive = false;
            this.group.visible = false;
            this.respawnTimer = 3.0;
          }
        }
      };

      this.targets.push(targetData);
    });
  }

  checkHit(raycaster) {
    let closestHit = null;
    let minDistance = Infinity;

    for (const target of this.targets) {
      if (!target.isAlive) continue;

      const headIntersects = raycaster.intersectObject(target.head);
      if (headIntersects.length > 0) {
        if (headIntersects[0].distance < minDistance) {
          minDistance = headIntersects[0].distance;
          closestHit = {
            target: target,
            isHeadshot: true,
            point: headIntersects[0].point
          };
        }
      }

      const bodyIntersects = raycaster.intersectObject(target.body);
      if (bodyIntersects.length > 0) {
        if (bodyIntersects[0].distance < minDistance) {
          minDistance = bodyIntersects[0].distance;
          closestHit = {
            target: target,
            isHeadshot: false,
            point: bodyIntersects[0].point
          };
        }
      }
    }

    return closestHit;
  }

  update(delta) {
    for (const target of this.targets) {
      if (target.flashTimer > 0) {
        target.flashTimer -= delta;
        if (target.flashTimer <= 0 && target.isAlive) {
          target.material.color.setHex(target.originalColor);
        }
      }

      if (!target.isAlive) {
        target.respawnTimer -= delta;
        if (target.respawnTimer <= 0) {
          target.health = target.maxHealth;
          target.isAlive = true;
          target.group.visible = true;
          target.material.color.setHex(target.originalColor);
        }
      }
    }
  }
}
