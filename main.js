import * as THREE from 'three';
import { World } from './world.js';
import { Player } from './player.js';
import { Enemies } from './enemies.js';
import { Gun, WEAPONS } from './gun.js';
import { Pickups } from './pickups.js';
import { SoundManager } from './audio.js';
import { UI } from './ui.js';

// ---------------------------------------------------------------------------
// Renderer / camera
// ---------------------------------------------------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.display = 'block';
document.body.appendChild(renderer.domElement);

// ---------------------------------------------------------------------------
// UI is created before the arena so the home screen paints immediately.
// ---------------------------------------------------------------------------
const ui = new UI({
  onStartMatch: (weaponId) => startMatch(weaponId),
  onExitMatch: () => leaveMatch(),
  onResume: () => resumeMatch(),
  onSettingsChange: (settings) => applySettings(settings)
});

let player = null;
let gun = null;
let enemies = null;
let pickups = null;
let sound = null;
let world = null;

let gameReady = false;
let matchActive = false;
let deathHandled = false;
let appliedQuality = '';

const MATCH_DURATION = 600;
const RESPAWN_DELAY = 3;
const SPAWN_PROTECTION = 2;
let matchTimeRemaining = MATCH_DURATION;
let deathTimer = 0;
let startingWeaponId = 'rifle';
let startingSpawn = null;
let matchEnding = false;

const fpsElement = document.getElementById('fps');
const muteIndicator = document.getElementById('mute-indicator');
const captureHint = document.getElementById('capture-hint');

let frameCount = 0;
let lastTime = performance.now();
let previousTime = performance.now();

// ---------------------------------------------------------------------------
// Game bootstrap — runs while the home screen is visible.
// ---------------------------------------------------------------------------
function initGame() {
  sound = new SoundManager();
  sound.setVolume((ui.profile.settings.volume ?? 32) / 100);

  world = new World(scene, renderer);
  window.__world = world;

  player = new Player(camera, renderer.domElement, world.getColliders(), world);
  player.audio = sound;
  player.onDeath = () => handlePlayerDeath();
  startingSpawn = player.spawnPosition.clone();

  gun = new Gun(camera, scene, renderer.domElement, { checkHit: () => null }, null, world);
  gun.audio = sound;
  player.gunRef = gun;

  enemies = new Enemies(scene, camera, player, world, sound, (meta) => ui.onKill(meta));
  // Gun keeps a live reference to this exact array.
  gun.bots = enemies.bots;
  gun.onShot = () => {
    if (enemies) enemies.alertNear(player.camera.position, 20);
  };

  pickups = new Pickups(scene, player, gun, sound);

  ui.attachGame({ world, player, enemies, gun, sound, camera, scene, renderer });
  window.__game = { world, player, enemies, gun, sound, camera, scene, renderer, ui };

  // Pre-warm bot shaders + spawn logic behind the home screen, then clear.
  enemies.start();
  renderer.compile(scene, camera);
  renderer.render(scene, camera);
  enemies.stop();

  applySettings(ui.profile.settings);
  gameReady = true;
  ui.setGameReady(true);

  // The Play click is a valid user gesture for starting Web Audio.
  document.getElementById('play-btn')?.addEventListener('click', () => sound.unlock());
}

// ---------------------------------------------------------------------------
// Match flow
// ---------------------------------------------------------------------------
function startMatch(weaponId) {
  if (!gameReady || !player || !gun) return;

  const index = Math.max(0, WEAPONS.findIndex(weapon => weapon.id === weaponId));
  startingWeaponId = WEAPONS[index] ? WEAPONS[index].id : 'rifle';
  if (startingSpawn) player.spawnPosition.copy(startingSpawn);
  gun.equip(index);
  player.respawn();
  player.spawnProtection = 0;
  player.hasStarted = true;
  player.isPaused = false;
  deathHandled = false;
  deathTimer = 0;
  matchTimeRemaining = MATCH_DURATION;
  matchEnding = false;
  matchActive = true;

  resetPickups();
  if (enemies) {
    enemies.stop();
    enemies.start();
  }

  if (sound) sound.unlock();
  if (ui) {
    ui.hideRespawnOverlay();
    ui.updateMatchTime(matchTimeRemaining);
  }
  ui.updateHUD();

  // Called from a button-driven flow. Some browsers still refuse pointer lock
  // here; the capture hint asks for a click, and the match stays playable.
  requestMouseLock();
  updateCaptureHint();
}

function requestMouseLock() {
  try {
    const result = renderer.domElement.requestPointerLock();
    if (result && typeof result.catch === 'function') result.catch(() => {});
  } catch (err) {
    // Pointer lock is optional; movement still works without it.
  }
}

function updateCaptureHint() {
  if (!captureHint) return;
  const show = !!player && ui.matchRunning && !player.isDead && !player.isPaused
    && document.pointerLockElement !== renderer.domElement;
  captureHint.classList.toggle('visible', show);
}

function resumeMatch() {
  if (!gameReady || !player) return;
  ui.hidePause();
  player.isPaused = false;
  if (sound) sound.unlock();
  requestMouseLock();
  updateCaptureHint();
}

function leaveMatch() {
  matchActive = false;
  matchEnding = false;
  deathTimer = 0;
  deathHandled = false;
  if (enemies) enemies.stop();
  if (player) {
    player.isPaused = true;
    player.hasStarted = false;
    player.clearMovementKeys();
  }
  if (ui) ui.hideRespawnOverlay();
  if (document.pointerLockElement) document.exitPointerLock();
  updateCaptureHint();
}

function handlePlayerDeath() {
  if (deathHandled || !matchActive || matchEnding) return;
  deathHandled = true;
  deathTimer = RESPAWN_DELAY;

  if (ui) {
    ui.onPlayerDeath();
    ui.updateRespawnCountdown(RESPAWN_DELAY);
  }
}

function chooseSafeSpawn() {
  const points = world && Array.isArray(world.spawnPoints) ? world.spawnPoints : [];
  if (!points.length) return startingSpawn ? startingSpawn.clone() : null;

  const bots = enemies && Array.isArray(enemies.bots)
    ? enemies.bots.filter(bot => bot && bot.isAlive)
    : [];

  const scored = points.map(point => {
    let nearest = Infinity;
    for (const bot of bots) {
      const pos = bot.group ? bot.group.position : bot.position;
      if (!pos) continue;
      const dx = point.x - pos.x;
      const dz = point.z - pos.z;
      nearest = Math.min(nearest, Math.hypot(dx, dz));
    }
    return { point, distance: nearest };
  });

  scored.sort((a, b) => b.distance - a.distance);
  const pool = scored.slice(0, Math.min(3, scored.length));
  const choice = pool[Math.floor(Math.random() * pool.length)];
  return choice ? choice.point.clone() : null;
}

function respawnPlayer() {
  if (!player) return;

  const point = chooseSafeSpawn();
  if (point) {
    // Spawn points are floor positions; the player spawn stores eye height.
    player.spawnPosition.set(point.x, point.y + player.height + 0.05, point.z);
  } else if (startingSpawn) {
    player.spawnPosition.copy(startingSpawn);
  }

  player.respawn();
  deathHandled = false;
  deathTimer = 0;

  const index = Math.max(0, WEAPONS.findIndex(weapon => weapon.id === startingWeaponId));
  if (gun) gun.equip(index);

  player.spawnProtection = SPAWN_PROTECTION;

  if (ui) ui.hideRespawnOverlay();
  if (sound) sound.unlock();
  updateCaptureHint();
}

function endMatch() {
  if (!matchActive || matchEnding) return;
  matchEnding = true;
  matchActive = false;
  deathTimer = 0;
  deathHandled = true;

  if (enemies) enemies.stop();
  if (gun) {
    gun.isFiring = false;
    gun.setZoom(false);
  }
  if (player) {
    player.clearMovementKeys();
    player.isPaused = true;
  }

  if (ui) {
    ui.hideRespawnOverlay();
    ui.finishMatch();
  }

  if (document.pointerLockElement) document.exitPointerLock();
  updateCaptureHint();
}

function resetPickups() {
  if (!pickups) return;
  for (const item of pickups.items) {
    item.active = true;
    item.group.visible = true;
    item.respawnTimer = 0;
  }
}

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------
function applySettings(settings = {}) {
  const quality = ['low', 'medium', 'high'].includes(settings.quality) ? settings.quality : 'high';

  if (quality !== appliedQuality) {
    appliedQuality = quality;
    const ratio = quality === 'low' ? 0.75 : quality === 'medium' ? 1 : Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(Math.max(0.6, ratio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = quality !== 'low';

    // Material programs reference the shadow map state; refresh them on change.
    scene.traverse(object => {
      if (!object.material) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) {
        if (material) material.needsUpdate = true;
      }
    });
  }

  if (sound) sound.setVolume((settings.volume ?? 32) / 100);
  if (player) player.sensitivity = (settings.sensitivity ?? 4) * 0.0005;
}

// ---------------------------------------------------------------------------
// Global input / browser events
// ---------------------------------------------------------------------------
document.addEventListener('pointerlockchange', () => {
  if (!player) return;

  if (document.pointerLockElement === renderer.domElement) {
    player.isPaused = false;
    ui.hidePause();
  } else if (ui.matchRunning && !player.isDead && player.hasStarted) {
    player.isPaused = true;
    player.clearMovementKeys();
    ui.showPause();
  }
  updateCaptureHint();
});

document.addEventListener('pointerlockerror', () => {
  if (player && ui.matchRunning && !player.isDead) {
    player.isPaused = false;
    ui.hidePause();
  }
  updateCaptureHint();
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'F3') {
    event.preventDefault();
    if (fpsElement) fpsElement.classList.add('visible');
    return;
  }
  if (event.code !== 'KeyM') return;
  if (event.target && event.target.tagName === 'INPUT') return;
  if (!sound) return;

  const muted = sound.toggleMute();
  if (muteIndicator) {
    muteIndicator.style.display = muted ? 'block' : 'none';
    muteIndicator.textContent = muted ? 'MUTED (M)' : '';
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code === 'F3' && fpsElement) fpsElement.classList.remove('visible');
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
function animate(currentTime) {
  requestAnimationFrame(animate);

  const rawDelta = Math.max(0, (currentTime - previousTime) / 1000);
  const delta = Math.min(rawDelta, 0.05);
  // Timers use real elapsed time (capped for tab-switch jumps), so a slow
  // frame rate cannot stretch the match or the respawn countdown.
  const timerDelta = Math.min(rawDelta, 1.0);
  previousTime = currentTime;

  frameCount++;
  if (currentTime - lastTime >= 1000) {
    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
    if (fpsElement) fpsElement.textContent = `FPS: ${fps}`;
    frameCount = 0;
    lastTime = currentTime;
  }

  if (matchActive && player && !player.isPaused) {
    matchTimeRemaining = Math.max(0, matchTimeRemaining - timerDelta);
    if (ui) ui.updateMatchTime(matchTimeRemaining);

    if (matchTimeRemaining <= 0) {
      endMatch();
    } else {
      player.update(delta);
      if (pickups) pickups.update(delta);
      if (enemies) enemies.update(delta);
      if (gun) gun.update(delta);
      if (world) world.update(delta);

      if (player.isDead && deathTimer > 0) {
        deathTimer = Math.max(0, deathTimer - timerDelta);
        if (ui) ui.updateRespawnCountdown(deathTimer);
        if (deathTimer <= 0) respawnPlayer();
      }

      if (ui) ui.updateHUD();
      updateCaptureHint();
    }
  }

  if (ui.shouldRenderWorld() && world) {
    renderer.render(scene, camera);
  }
}

requestAnimationFrame(animate);

// Defer the heavy arena build one tick so the home screen appears first.
setTimeout(initGame, 40);

// ---------------------------------------------------------------------------
// Browser chrome / interface background
// ---------------------------------------------------------------------------
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
}, { capture: true });

document.addEventListener('dragstart', (event) => {
  event.preventDefault();
}, { capture: true });

document.addEventListener('selectstart', (event) => {
  const target = event.target;
  const editable = target && (
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.isContentEditable
  );
  if (!editable) event.preventDefault();
});

let stationBackgroundWarned = false;
const stationBackgroundProbe = new Image();
stationBackgroundProbe.onload = () => {
  document.body.classList.add('station-bg-ready');
};
stationBackgroundProbe.onerror = () => {
  if (stationBackgroundWarned) return;
  stationBackgroundWarned = true;
  console.warn('KillHit: /images/station-bg.jpg is missing; using the fallback interface gradient.');
};
stationBackgroundProbe.src = '/images/station-bg.jpg';
