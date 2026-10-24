// Shared world configuration. One large standalone arena:
// underground station on the west, night city street on the east.
//
// These are OUTER WALL extents. Systems must never use smaller numbers for
// world bounds or fall detection.

export const MAP_BOUNDS = {
  minX: -75,
  maxX: 75,
  minZ: -50,
  maxZ: 50
};

// True fall-out threshold. Every floor in the map is well above this.
// The lowest walkable surface (track bed) is -5.6, so -9 only catches genuine
// falls through the world, never normal level changes or stairs.
export const VOID_Y = -9.0;

export const MAP_SIZE = {
  width: MAP_BOUNDS.maxX - MAP_BOUNDS.minX,
  depth: MAP_BOUNDS.maxZ - MAP_BOUNDS.minZ
};

export const MAP_NAME = 'NEO-KANTO METRO';

// Vertical levels used across the map builders and spawn logic.
export const LEVELS = {
  street: 0,
  hall: -2.6,
  platform: -4.8,
  track: -5.6,
  bridge: 5.2,
  roof: 6.5,
  rail: 8
};

// Player's spawn (standing on the ticket hall floor, facing the gates).
export const PLAYER_SPAWN = { x: -20, y: LEVELS.hall + 1.75, z: 0 };
