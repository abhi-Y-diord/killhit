import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Navigation graph generated from world walkable zones + stair volumes.
// Nodes are placed on real floor heights and validated against colliders.
// A* is used for chasing/patrolling, with straight-line steering between nodes.
// ---------------------------------------------------------------------------
export class Navigation {
  constructor(world) {
    this.world = world;
    this.nodes = [];
    this.gridStep = 3.1;

    this.build();
  }

  build() {
    const w = this.world;
    const nodes = this.nodes;

    // Flat zones.
    for (const zone of w.navZones) {
      const width = zone.x2 - zone.x1;
      const depth = zone.z2 - zone.z1;
      if (width < 1.2 || depth < 1.2) continue;

      const step = Math.min(this.gridStep, Math.max(2.0, Math.min(width, depth) * 0.6));
      const cols = Math.max(1, Math.round(width / step));
      const rows = Math.max(1, Math.round(depth / step));
      const sx = width / cols;
      const sz = depth / rows;

      for (let ix = 0; ix < cols; ix++) {
        for (let iz = 0; iz < rows; iz++) {
          const x = zone.x1 + sx * (ix + 0.5);
          const z = zone.z1 + sz * (iz + 0.5);
          const floor = w.getFloorHeightAt(x, z, zone.y + 1.2);
          if (!isFinite(floor)) continue;
          if (floor < zone.y - 0.5 || floor > zone.y + 0.45) continue;
          if (w.isPointBlocked(x, z, floor + 0.06, 0.52, 1.75, 0.42)) continue;
          nodes.push({
            pos: new THREE.Vector3(x, floor, z),
            links: [],
            tag: zone.tag,
            zone,
            stair: null
          });
        }
      }
    }

    // Stair lanes.
    for (const stair of w.navStairs) {
      const alongX = Math.abs(stair.x2 - stair.x1) >= Math.abs(stair.z2 - stair.z1);
      const length = alongX ? Math.abs(stair.x2 - stair.x1) : Math.abs(stair.z2 - stair.z1);
      const width = alongX ? Math.abs(stair.z2 - stair.z1) : Math.abs(stair.x2 - stair.x1);
      if (length < 0.5) continue;

      const segments = Math.max(2, Math.ceil(length / 1.0));
      const lanes = width > 2.8 ? [-width * 0.23, width * 0.23] : [0];
      const crossCenter = alongX
        ? (stair.z1 + stair.z2) / 2
        : (stair.x1 + stair.x2) / 2;
      for (const lane of lanes) {
        let previous = null;
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const x = alongX
            ? stair.x1 + (stair.x2 - stair.x1) * t
            : crossCenter + lane;
          const z = alongX
            ? crossCenter + lane
            : stair.z1 + (stair.z2 - stair.z1) * t;
          const y = stair.y1 + (stair.y2 - stair.y1) * t;
          if (w.isPointBlocked(x, z, y + 0.08, 0.42, 1.7, 0.5)) {
            previous = null;
            continue;
          }
          const node = {
            pos: new THREE.Vector3(x, y, z),
            links: [],
            tag: stair.tag,
            zone: null,
            stair
          };
          nodes.push(node);
          if (previous) {
            previous.links.push(node);
            node.links.push(previous);
          }
          previous = node;
        }
      }
    }

    // Link nearby nodes. Spatial hash keeps this fast even with ~1000 nodes.
    const cell = 4.0;
    const buckets = new Map();
    const key = (x, z) => `${Math.floor(x / cell)},${Math.floor(z / cell)}`;
    for (const node of nodes) {
      const k = key(node.pos.x, node.pos.z);
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(node);
    }

    for (const node of nodes) {
      const cx = Math.floor(node.pos.x / cell);
      const cz = Math.floor(node.pos.z / cell);
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          const list = buckets.get(`${cx + dx},${cz + dz}`);
          if (!list) continue;
          for (const other of list) {
            if (other === node) continue;
            if (node.links.includes(other)) continue;
            const d = node.pos.distanceTo(other.pos);
            if (d > 4.0) continue;
            if (Math.abs(node.pos.y - other.pos.y) > 0.64) continue;
            if (!this.linkIsClear(node, other)) continue;
            node.links.push(other);
            other.links.push(node);
          }
        }
      }
    }

    // Drop nodes with no connections (inside props / isolated ledges).
    this.nodes = nodes.filter(n => n.links.length > 0);
  }

  linkIsClear(a, b) {
    const steps = 5;
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = a.pos.x + (b.pos.x - a.pos.x) * t;
      const z = a.pos.z + (b.pos.z - a.pos.z) * t;
      const y = a.pos.y + (b.pos.y - a.pos.y) * t;
      if (this.world.isPointBlocked(x, z, y + 0.06, 0.36, 1.6, 0.55)) return false;
    }
    return true;
  }

  findNearest(pos, maxDist = 25) {
    let best = null;
    let bestD = maxDist * maxDist;
    for (const node of this.nodes) {
      const dx = node.pos.x - pos.x;
      const dy = (node.pos.y - pos.y) * 1.6;
      const dz = node.pos.z - pos.z;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bestD) {
        bestD = d;
        best = node;
      }
    }
    return best;
  }

  randomNode() {
    return this.nodes.length
      ? this.nodes[Math.floor(Math.random() * this.nodes.length)]
      : null;
  }

  randomNodeFarFrom(pos, minDist = 18) {
    const min2 = minDist * minDist;
    const pool = [];
    for (const node of this.nodes) {
      const dx = node.pos.x - pos.x;
      const dz = node.pos.z - pos.z;
      if (dx * dx + dz * dz >= min2) pool.push(node);
    }
    if (!pool.length) return this.randomNode();
    return pool[Math.floor(Math.random() * pool.length)];
  }

  findPath(startPos, goalPos) {
    const start = this.findNearest(startPos, 30);
    const goal = this.findNearest(goalPos, 30);
    if (!start || !goal) return null;
    if (start === goal) return [goal.pos.clone()];

    // A* with a small binary heap.
    const open = new MinHeap();
    const cameFrom = new Map();
    const gScore = new Map();
    const closed = new Set();

    gScore.set(start, 0);
    open.push(start, start.pos.distanceTo(goal.pos));

    while (open.size) {
      const current = open.pop();
      if (current === goal) {
        const path = [];
        let n = current;
        while (n) {
          path.push(n.pos.clone());
          n = cameFrom.get(n);
        }
        path.reverse();
        return path;
      }
      if (closed.has(current)) continue;
      closed.add(current);

      for (const next of current.links) {
        if (closed.has(next)) continue;
        const tentative = (gScore.get(current) ?? Infinity) + current.pos.distanceTo(next.pos);
        if (tentative < (gScore.get(next) ?? Infinity)) {
          cameFrom.set(next, current);
          gScore.set(next, tentative);
          const h = next.pos.distanceTo(goal.pos);
          open.push(next, tentative + h);
        }
      }
    }
    return null;
  }
}

class MinHeap {
  constructor() { this.items = []; }
  get size() { return this.items.length; }
  push(value, priority) {
    this.items.push({ value, priority });
    let i = this.items.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.items[parent].priority <= this.items[i].priority) break;
      [this.items[parent], this.items[i]] = [this.items[i], this.items[parent]];
      i = parent;
    }
  }
  pop() {
    const top = this.items[0];
    const last = this.items.pop();
    if (this.items.length && last) {
      this.items[0] = last;
      let i = 0;
      while (true) {
        const l = i * 2 + 1;
        const r = l + 1;
        let smallest = i;
        if (l < this.items.length && this.items[l].priority < this.items[smallest].priority) smallest = l;
        if (r < this.items.length && this.items[r].priority < this.items[smallest].priority) smallest = r;
        if (smallest === i) break;
        [this.items[smallest], this.items[i]] = [this.items[i], this.items[smallest]];
        i = smallest;
      }
    }
    return top ? top.value : null;
  }
}
