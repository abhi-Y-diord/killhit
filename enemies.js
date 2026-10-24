import * as THREE from 'three';
import { Bot } from './bot.js';

const TARGET_COUNT = 10;
const RESPAWN_DELAY = 5.0;

function randomInRange(min, max) {
  return min + Math.random() * (max - min);
}

export class Enemies {
  constructor(scene, camera, player, world, audio, onKill) {
    this.scene = scene;
    this.camera = camera;
    this.player = player;
    this.world = world;
    this.audio = audio;
    this.onKill = onKill;

    this.bots = [];
    this.active = false;
    this.kills = 0;
    this.respawnQueue = [];
  }

  start() {
    this.stop();
    this.active = true;
    this.kills = 0;
    this.respawnQueue = [];
    this.spawnInitial(TARGET_COUNT);
  }

  stop() {
    this.active = false;
    for (const bot of this.bots) {
      try {
        if (bot && bot.group) this.scene.remove(bot.group);
      } catch (e) {}
    }
    this.bots.length = 0;
    this.respawnQueue = [];
  }

  spawnInitial(count) {
    const positions = this.pickSpawnPositions(count, 18);
    for (let i = 0; i < positions.length; i++) {
      this.spawnBotAt(positions[i]);
    }
  }

  spawnBotAt(position) {
    if (!this.active) return;
    const bot = new Bot(
      this.scene,
      this.camera,
      this.player,
      this.world.getColliders(),
      this.world,
      {
        startPosition: position,
        speedMultiplier: 1.0,
        spreadMultiplier: 1.0,
        damage: 8,
        onKilled: (killed, meta) => this.handleBotKilled(killed, meta)
      }
    );
    this.bots.push(bot);
  }

  handleBotKilled(killed, meta = {}) {
    if (!this.active) return;
    this.kills += 1;

    const idx = this.bots.indexOf(killed);
    if (idx >= 0) {
      this.bots.splice(idx, 1);
    }

    try {
      if (killed.group) {
        // Remove immediately as requested
        this.scene.remove(killed.group);
      }
    } catch (e) {}

    if (this.audio) {
      try {
        this.audio.enemyDeath?.();
      } catch (e) {}
    }

    if (this.onKill) {
      this.onKill({
        bot: killed,
        headshot: !!meta.headshot,
        weaponId: meta.weaponId || 'rifle'
      });
    }

    if (this.bots.length < TARGET_COUNT) {
      this.respawnQueue.push({ time: RESPAWN_DELAY });
    }
  }

  alertNear(position, radius = 18) {
    if (!this.active) return;
    const p = position.clone();
    for (const bot of this.bots) {
      if (!bot || !bot.isAlive || !bot.group) continue;
      const dist = bot.group.position.distanceTo(p);
      if (dist < radius) {
        try {
          bot.lastKnown.copy(p);
          bot.timeSinceSeen = 0;
          if (bot.state !== 'combat') {
            bot.state = 'combat';
          }
          if (bot.aiming !== undefined) bot.aiming = true;
        } catch (e) {}
      }
    }
  }

  pickSpawnPositions(count, minDistFromPlayer = 18) {
    const result = [];
    const playerPos = this.player.camera.position;
    const nav = this.world.nav;
    const used = [];

    if (nav && Array.isArray(nav.nodes) && nav.nodes.length > 0) {
      const nodes = [...nav.nodes];
      // Shuffle
      for (let i = nodes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
      }

      for (let ni = 0; ni < nodes.length && result.length < count; ni++) {
        const node = nodes[ni];
        const pos = node.pos.clone();
        if (pos.distanceTo(playerPos) < minDistFromPlayer) continue;
        // ensure not too close to existing bots
        let ok = true;
        for (const u of used) {
          if (u.distanceTo(pos) < 4.0) { ok = false; break; }
        }
        if (!ok) continue;
        // validate not blocked
        if (this.world.isPointBlocked && this.world.isPointBlocked(pos.x, pos.z, pos.y + 0.06, 0.5, 1.8, 0.4)) continue;
        const floor = this.world.getFloorHeightAt ? this.world.getFloorHeightAt(pos.x, pos.z, pos.y + 1.2) : pos.y;
        if (isFinite(floor)) pos.y = floor;
        result.push(pos);
        used.push(pos.clone());
      }
    }

    // Fallback to spawnPoints if not enough
    if (result.length < count) {
      const points = this.world.spawnPoints && this.world.spawnPoints.length ? this.world.spawnPoints : [];
      for (let attempt = 0; attempt < 220 && result.length < count; attempt++) {
        const base = points.length ? points[Math.floor(Math.random() * points.length)] : new THREE.Vector3(-20, -2.6, 0);
        const point = base.clone();
        if (attempt > points.length) {
          point.x += (Math.random() - 0.5) * 6.0;
          point.z += (Math.random() - 0.5) * 6.0;
        }
        if (point.distanceTo(playerPos) < minDistFromPlayer) continue;
        let ok = true;
        for (const u of used) {
          if (u.distanceTo(point) < 4.0) { ok = false; break; }
        }
        if (!ok) continue;
        if (this.world.getFloorHeightAt) {
          const floor = this.world.getFloorHeightAt(point.x, point.z, point.y + 1.2);
          if (!isFinite(floor) || Math.abs(floor - point.y) > 0.6) continue;
          point.y = floor;
        }
        if (this.world.isPointBlocked && this.world.isPointBlocked(point.x, point.z, point.y + 0.06, 0.5, 1.8, 0.4)) continue;
        result.push(point);
        used.push(point.clone());
      }
    }

    // If still not enough, try any point far away.
    let fallbackAttempts = 0;
    while (result.length < count && fallbackAttempts++ < 300 && this.world.respawnPoints && this.world.respawnPoints.length) {
      const base = this.world.respawnPoints[Math.floor(Math.random() * this.world.respawnPoints.length)].clone();
      base.x += randomInRange(-12, 12);
      base.z += randomInRange(-12, 12);
      if (base.distanceTo(playerPos) < minDistFromPlayer - 2) continue;
      const floor = this.world.getFloorHeightAt ? this.world.getFloorHeightAt(base.x, base.z, base.y + 1.2) : base.y;
      if (isFinite(floor)) base.y = floor;
      if (this.world.isPointBlocked && this.world.isPointBlocked(base.x, base.z, base.y + 0.06, 0.5, 1.8, 0.4)) continue;
      let ok = true;
      for (const u of used) {
        if (u.distanceTo(base) < 3.5) { ok = false; break; }
      }
      if (!ok) continue;
      result.push(base);
      used.push(base.clone());
      if (result.length >= count) break;
    }

    return result;
  }

  update(delta) {
    if (!this.active) return;

    // Update respawn queue
    if (this.respawnQueue.length && this.bots.length < TARGET_COUNT) {
      for (let i = this.respawnQueue.length - 1; i >= 0; i--) {
        this.respawnQueue[i].time -= delta;
        if (this.respawnQueue[i].time <= 0) {
          this.respawnQueue.splice(i, 1);
          const positions = this.pickSpawnPositions(1, 22);
          if (positions.length) {
            this.spawnBotAt(positions[0]);
          } else {
            // try again soon
            this.respawnQueue.push({ time: 2.0 });
          }
          break;
        }
      }
    }

    // Update bots
    for (const bot of this.bots) {
      if (!bot) continue;
      try {
        bot.update(delta);
      } catch (e) {}
    }
  }
}
