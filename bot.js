import * as THREE from 'three';
import { BotCharacter } from './characters.js';

// ---------------------------------------------------------------------------
// Navmesh-driven bot soldier.
// - Patrols / hunts using Navigation A* paths
// - Real line-of-sight checks against solid world meshes
// - Burst fire with tracers, damage, death animation and a stuck recovery
// ---------------------------------------------------------------------------
const BOT_RADIUS = 0.46;
const BOT_HEIGHT = 1.82;
const BOT_STEP = 0.36;
const BOT_GRAVITY = 25;
const SIGHT_RANGE = 44;

const NAMES = [
  'VIPER', 'KILO', 'RAVEN', 'GHOST', 'ONI', 'SABLE', 'RIFT', 'NOVA',
  'MACE', 'WRAITH', 'HEX', 'DAGGER', 'CINDER', 'VOLT', 'SHADE', 'BISHOP',
  'RONIN', 'FROST', 'TALON', 'ZERO'
];

let botCounter = 0;

export class Bot {
  constructor(scene, camera, player, colliders, world, options = {}) {
    this.scene = scene;
    this.camera = camera;
    this.player = player;
    this.colliders = colliders;
    this.world = world;
    this.nav = world.nav;

    this.id = botCounter++;
    this.name = options.name || NAMES[this.id % NAMES.length];
    this.startPosition = options.startPosition
      ? options.startPosition.clone()
      : (world.getRespawnPoint ? world.getRespawnPoint() : new THREE.Vector3(-20, -2.6, 0));

    this.speedMultiplier = options.speedMultiplier || 1;
    this.spreadMultiplier = options.spreadMultiplier || 1;
    this.damage = options.damage || 9;
    this.onKilled = options.onKilled || null;

    this.maxHealth = 100;
    this.health = 100;
    this.isAlive = true;
    this.radius = BOT_RADIUS;
    this.height = BOT_HEIGHT;
    this.vy = 0;
    this.blocked = false;
    this.hitTimer = 0;

    this.character = new BotCharacter(
      scene,
      this.name,
      options.palette ?? Math.floor(Math.random() * 6)
    );
    this.group = this.character.root;
    this.group.position.copy(this.startPosition);
    this.character.setHealth(this.health, this.maxHealth);

    this.speed = 3.25 * this.speedMultiplier;
    this.chaseSpeed = 3.9 * this.speedMultiplier;
    this.sightRange = SIGHT_RANGE;

    this.state = 'patrol';
    this.path = null;
    this.pathIndex = 0;
    this.destination = null;
    this.repathTimer = 0;
    this.lastKnown = new THREE.Vector3().copy(this.startPosition);
    this.timeSinceSeen = 99;
    this.aiming = false;
    this.strafeDir = Math.random() < 0.5 ? 1 : -1;
    this.strafeTimer = 0;
    this.burstTimer = 0;
    this.burstCount = 0;
    this.fireTimer = 1.0 + Math.random() * 1.4;
    this.attackCooldown = 0;
    this.stuckTimer = 0;
    this.trackTimer = 0;
    this.lastPos = this.group.position.clone();
    this.tryingToMove = false;
    this.deathElapsed = 0;

    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = this.sightRange;
    this._tmpA = new THREE.Vector3();
    this._tmpB = new THREE.Vector3();
    this._tmpC = new THREE.Vector3();

    this.pickPatrolGoal(true);
  }

  // ------------------------------------------------------------------ helpers
  get eyePosition() {
    return this._tmpA.set(
      this.group.position.x,
      this.group.position.y + 1.52,
      this.group.position.z
    );
  }

  getMuzzleWorldPosition() {
    this.character.muzzle.getWorldPosition(this._tmpB);
    return this._tmpB;
  }

  hasLineOfSight(targetPos) {
    if (!this.world.getObstacleMeshes) return true;
    const origin = this.eyePosition.clone();
    const direction = this._tmpC.subVectors(targetPos, origin);
    const distance = direction.length();
    if (distance > this.sightRange) return false;
    direction.normalize();

    this.raycaster.set(origin, direction);
    this.raycaster.far = distance;
    const hits = this.raycaster.intersectObjects(this.world.getObstacleMeshes(), false);
    return !hits.length || hits[0].distance > distance - 0.4;
  }

  // ------------------------------------------------------------------ paths
  setDestination(pos) {
    if (!this.nav) return;
    this.destination = pos.clone();
    this.path = this.nav.findPath(this.group.position, pos);
    this.pathIndex = 0;
    this.repathTimer = 0.9 + Math.random() * 0.6;
    if (this.path && this.path.length > 0) {
      // Skip the first node if we are already standing on it.
      if (this.path[0].distanceTo(this.group.position) < 0.75) this.pathIndex = 1;
    }
  }

  pickPatrolGoal(initial = false) {
    if (!this.nav) return;
    const node = this.nav.randomNodeFarFrom(this.group.position, initial ? 10 : 22);
    if (node) {
      this.destination = node.pos.clone();
      this.path = null;
      this.repathTimer = 0;
      this.state = 'patrol';
    }
  }

  followPath(delta, speed, directTarget = null) {
    this.tryingToMove = true;

    // If we have no path, or the goal moved a lot, ask for a new one.
    if (this.repathTimer <= 0) {
      if (directTarget) this.setDestination(directTarget);
      else if (this.destination) {
        this.path = this.nav.findPath(this.group.position, this.destination);
        this.pathIndex = 0;
        this.repathTimer = 1.4 + Math.random() * 0.8;
      }
    }

    let target = null;
    if (this.path && this.pathIndex < this.path.length) {
      target = this.path[this.pathIndex];
      const dx = target.x - this.group.position.x;
      const dz = target.z - this.group.position.z;
      if (Math.hypot(dx, dz) < 0.72) {
        this.pathIndex++;
        target = this.path[this.pathIndex] || null;
      }
    }
    if (!target && directTarget) target = directTarget;
    if (!target && this.destination) target = this.destination;
    if (!target) {
      this.pickPatrolGoal();
      return false;
    }

    const dx = target.x - this.group.position.x;
    const dz = target.z - this.group.position.z;
    const len = Math.hypot(dx, dz);
    if (len < 0.05) return false;

    const step = speed * delta;
    const moved = this.moveBot((dx / len) * step, (dz / len) * step);

    // Face the travel direction unless aiming.
    if (!this.aiming) {
      const yaw = Math.atan2(dx, dz);
      this.group.rotation.y = this.lerpAngle(this.group.rotation.y, yaw, 10 * delta);
    }

    // Detect becoming stuck on props / corners.
    this.trackTimer += delta;
    if (this.trackTimer >= 0.5) {
      const travelled = Math.hypot(
        this.group.position.x - this.lastPos.x,
        this.group.position.z - this.lastPos.z
      );
      if (!moved || travelled < 0.08) this.stuckTimer += 0.5;
      else this.stuckTimer = 0;
      this.lastPos.copy(this.group.position);
      this.trackTimer = 0;

      if (this.stuckTimer >= 1.2) {
        this.path = null;
        this.repathTimer = 0;
        this.stuckTimer = 0;
      }
    }

    return moved;
  }

  lerpAngle(a, b, t) {
    let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (d < -Math.PI) d += Math.PI * 2;
    return a + d * Math.min(1, t);
  }

  // ------------------------------------------------------------------ combat
  updateCombat(delta) {
    const playerPos = this.camera.position;
    const flatDist = Math.hypot(
      playerPos.x - this.group.position.x,
      playerPos.z - this.group.position.z
    );
    const target = new THREE.Vector3(playerPos.x, playerPos.y - 0.65, playerPos.z);
    const canSee = !this.player.isDead && this.hasLineOfSight(target);

    if (canSee) {
      this.timeSinceSeen = 0;
      this.lastKnown.copy(playerPos);
      this.state = 'combat';
      this.aiming = true;
    } else {
      this.timeSinceSeen += delta;
      this.aiming = false;
      if (this.timeSinceSeen > 7) {
        if (this.state === 'combat') this.pickPatrolGoal();
        this.state = 'patrol';
      }
    }

    if (this.state === 'combat') {
      const look = canSee ? playerPos : this.lastKnown;
      const yaw = Math.atan2(look.x - this.group.position.x, look.z - this.group.position.z);
      this.group.rotation.y = this.lerpAngle(this.group.rotation.y, yaw, 12 * delta);

      if (flatDist > 19 || !canSee) {
        this.followPath(delta, this.chaseSpeed, new THREE.Vector3(look.x, look.y, look.z));
      } else if (flatDist < 6.5) {
        // Back off while keeping the player in view.
        this.strafeTimer += delta;
        const away = this._tmpA.set(
          this.group.position.x - playerPos.x,
          0,
          this.group.position.z - playerPos.z
        ).normalize();
        const side = this._tmpB.set(-away.z, 0, away.x).multiplyScalar(this.strafeDir * 0.7);
        away.multiplyScalar(0.8).add(side).normalize();
        this.moveBot(away.x * this.speed * 0.8 * delta, away.z * this.speed * 0.8 * delta);
        if (this.strafeTimer > 1.6) {
          this.strafeDir *= -1;
          this.strafeTimer = 0;
        }
      } else {
        // Strafe at medium range.
        this.strafeTimer += delta;
        const toPlayer = this._tmpA.set(
          playerPos.x - this.group.position.x,
          0,
          playerPos.z - this.group.position.z
        ).normalize();
        const strafe = this._tmpB.set(-toPlayer.z, 0, toPlayer.x).multiplyScalar(this.strafeDir);
        const rangeCorrection = flatDist > 13 ? 0.55 : flatDist < 9 ? -0.55 : 0;
        const move = strafe.addScaledVector(toPlayer, rangeCorrection).normalize();
        this.tryingToMove = true;
        this.moveBot(move.x * this.speed * delta, move.z * this.speed * delta);
        if (this.strafeTimer > 1.8) {
          this.strafeDir *= -1;
          this.strafeTimer = 0;
        }
      }

      if (canSee) this.tryShoot(delta, flatDist);
    } else {
      // Hunt the last known position for a while, otherwise patrol.
      if (this.timeSinceSeen < 7) {
        this.followPath(delta, this.speed, this.lastKnown);
      } else {
        this.followPath(delta, this.speed * 0.72);
      }
    }
  }

  tryShoot(delta, flatDist) {
    if (!this.isAlive || this.player.isDead) return;
    if (this.attackCooldown > 0) {
      this.attackCooldown -= delta;
      return;
    }
    if (flatDist > 38) return;

    this.fireTimer -= delta;
    if (this.fireTimer > 0) return;

    // Burst pattern: 3 shots, then a longer pause.
    this.burstCount++;
    this.burstTimer = 0.11;
    this.shootAtPlayer();
    if (this.burstCount % 3 === 0) {
      this.fireTimer = 1.0 + Math.random() * 1.4;
      this.burstCount = 0;
    } else {
      this.fireTimer = 0.14 + Math.random() * 0.1;
    }
  }

  shootAtPlayer() {
    if (!this.isAlive || this.player.isDead) return;

    const muzzlePos = this.getMuzzleWorldPosition().clone();
    const playerPos = this.camera.position.clone();
    const aimPoint = playerPos.clone().add(new THREE.Vector3(
      (Math.random() - 0.5) * 0.25,
      -0.55 + (Math.random() - 0.5) * 0.35,
      (Math.random() - 0.5) * 0.25
    ));
    const direction = aimPoint.sub(muzzlePos).normalize();

    const right = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0));
    if (right.lengthSq() < 1e-6) right.set(1, 0, 0);
    right.normalize();
    const up = new THREE.Vector3().crossVectors(right, direction).normalize();
    const spread = 0.038 * this.spreadMultiplier;
    direction
      .addScaledVector(right, (Math.random() - 0.5) * 2 * spread)
      .addScaledVector(up, (Math.random() - 0.5) * 2 * spread)
      .normalize();

    this.raycaster.set(muzzlePos, direction);
    this.raycaster.far = 80;
    const obstacleHit = this.raycaster.intersectObjects(this.world.getHitMeshes(), false)[0] || null;
    const playerHitPoint = this.raycaster.ray.intersectBox(this.getPlayerBox(), new THREE.Vector3());

    let hitPlayer = false;
    let endPoint;
    if (playerHitPoint) {
      const distanceToPlayer = muzzlePos.distanceTo(playerHitPoint);
      if (!obstacleHit || obstacleHit.distance > distanceToPlayer) {
        hitPlayer = true;
        endPoint = playerHitPoint;
      }
    }
    if (!hitPlayer) {
      endPoint = obstacleHit
        ? obstacleHit.point
        : this.raycaster.ray.at(50, new THREE.Vector3());
      if (obstacleHit && this.scene.__effects) this.scene.__effects.impact(obstacleHit.point, obstacleHit.face?.normal);
    }

    this.createTracer(muzzlePos, endPoint);

    if (hitPlayer) {
      this.player.takeDamage(this.damage + Math.floor(Math.random() * 4), muzzlePos);
    }
  }

  getPlayerBox() {
    const p = this.camera.position;
    return new THREE.Box3(
      new THREE.Vector3(p.x - 0.42, p.y - 1.62, p.z - 0.42),
      new THREE.Vector3(p.x + 0.42, p.y + 0.06, p.z + 0.42)
    );
  }

  createTracer(start, end) {
    const distance = start.distanceTo(end);
    if (distance < 0.01) return;
    const geo = new THREE.CylinderGeometry(0.012, 0.012, distance, 4);
    geo.rotateX(Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff6a4a, transparent: true, opacity: 0.8, depthWrite: false });
    const tracer = new THREE.Mesh(geo, mat);
    tracer.position.copy(start).add(end).multiplyScalar(0.5);
    tracer.lookAt(end);
    this.scene.add(tracer);
    setTimeout(() => {
      this.scene.remove(tracer);
      geo.dispose();
      mat.dispose();
    }, 45);
  }

  // ------------------------------------------------------------------ physics
  resolveCollisions(axis) {
    const pos = this.group.position;
    for (const collider of this.colliders) {
      const box = collider.box;
      const bMinX = pos.x - BOT_RADIUS;
      const bMaxX = pos.x + BOT_RADIUS;
      const bMinY = pos.y;
      const bMaxY = pos.y + BOT_HEIGHT;
      const bMinZ = pos.z - BOT_RADIUS;
      const bMaxZ = pos.z + BOT_RADIUS;

      if (bMaxX > box.min.x && bMinX < box.max.x &&
          bMaxY > box.min.y && bMinY < box.max.y &&
          bMaxZ > box.min.z && bMinZ < box.max.z) {
        const stepRise = box.max.y - pos.y;
        if (stepRise > 0 && stepRise <= BOT_STEP) {
          pos.y = box.max.y;
          if (this.vy < 0) this.vy = 0;
          continue;
        }
        if (axis === 'x') {
          const overlapMin = bMaxX - box.min.x;
          const overlapMax = box.max.x - bMinX;
          pos.x = overlapMin < overlapMax ? box.min.x - BOT_RADIUS : box.max.x + BOT_RADIUS;
        } else {
          const overlapMin = bMaxZ - box.min.z;
          const overlapMax = box.max.z - bMinZ;
          pos.z = overlapMin < overlapMax ? box.min.z - BOT_RADIUS : box.max.z + BOT_RADIUS;
        }
        this.blocked = true;
      }
    }
  }

  moveBot(dx, dz) {
    const pos = this.group.position;
    const startX = pos.x;
    const startZ = pos.z;
    pos.x += dx;
    this.resolveCollisions('x');
    pos.z += dz;
    this.resolveCollisions('z');
    return Math.hypot(pos.x - startX, pos.z - startZ) > 0.0001;
  }

  updateGroundPhysics(delta) {
    const pos = this.group.position;
    const feetBefore = pos.y;
    this.vy -= BOT_GRAVITY * delta;
    pos.y += this.vy * delta;
    if (pos.y < feetBefore - 2.0) pos.y = feetBefore - 2.0;

    let ground = -Infinity;
    for (const collider of this.colliders) {
      const box = collider.box;
      if (box.max.y > feetBefore + 0.06) continue;
      if (pos.x + BOT_RADIUS > box.min.x && pos.x - BOT_RADIUS < box.max.x &&
          pos.z + BOT_RADIUS > box.min.z && pos.z - BOT_RADIUS < box.max.z &&
          box.max.y > ground) {
        ground = box.max.y;
      }
    }
    if (ground > -Infinity && pos.y <= ground) {
      pos.y = ground;
      this.vy = 0;
    }

    const bounds = this.world.getBounds ? this.world.getBounds() : { minX: -75, maxX: 75, minZ: -50, maxZ: 50 };
    const killY = this.world.getKillY ? this.world.getKillY() : -9;
    if (pos.y < killY || pos.x < bounds.minX - 1 || pos.x > bounds.maxX + 1 ||
        pos.z < bounds.minZ - 1 || pos.z > bounds.maxZ + 1) {
      const point = this.world.getRespawnPoint ? this.world.getRespawnPoint() : this.startPosition;
      pos.copy(point);
      this.vy = 0;
      this.path = null;
    }
  }

  // ------------------------------------------------------------------ update
  update(delta) {
    delta = Math.min(delta, 0.05);

    if (!this.isAlive) {
      this.deathElapsed += delta;
      this.character.update(delta, { speed: 0, aiming: false, hit: 0 });
      // Fallen bodies are removed by the enemy director; emergency cleanup here.
      if (this.deathElapsed > 8) this.group.visible = false;
      return;
    }

    this.repathTimer -= delta;

    if (this.player.hasStarted && !this.player.isDead) {
      this.updateCombat(delta);
    } else {
      this.aiming = false;
      this.followPath(delta, this.speed * 0.55);
    }

    this.updateGroundPhysics(delta);

    // Emergency stuck recovery: warp to a safe nav node away from the player.
    if (this.stuckTimer > 3.0) {
      const node = this.nav
        ? this.nav.randomNodeFarFrom(this.player.camera.position, 16)
        : null;
      if (node) {
        this.group.position.copy(node.pos);
        this.vy = 0;
        this.path = null;
        this.stuckTimer = 0;
      }
    }

    const movingSpeed = this.tryingToMove ? this.speed : 0;
    this.tryingToMove = false;
    this.character.update(delta, {
      speed: movingSpeed,
      aiming: this.aiming,
      hit: this.hitTimer
    });
    if (this.hitTimer > 0) this.hitTimer = Math.max(0, this.hitTimer - delta);
  }

  // ------------------------------------------------------------------ damage
  checkHit(raycaster) {
    if (!this.isAlive || !this.group.visible) return null;
    const hits = raycaster.intersectObjects(this.character.hitMeshes, false);
    if (!hits.length) return null;
    const hit = hits[0];
    return {
      target: this,
      point: hit.point.clone(),
      distance: hit.distance,
      isHeadshot: hit.object === this.character.parts.head
    };
  }

  applyDamage(isHeadshot, damage) {
    if (!this.isAlive) return;
    this.health -= damage;
    this.hitTimer = 0.22;
    this.character.flash();
    this.character.setHealth(Math.max(0, this.health), this.maxHealth);
    if (!this.aiming) {
      this.lastKnown.copy(this.player.camera.position);
      this.timeSinceSeen = 0;
    }
    if (isHeadshot) this.character.setHealth(Math.max(0, this.health), this.maxHealth);

    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
      this.aiming = false;
      this.character.playDeath();
      if (this.onKilled) {
        this.onKilled(this, {
          headshot: isHeadshot,
          weaponId: this.lastHit?.weaponId || 'rifle'
        });
      }
    }
  }
}
