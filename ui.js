import * as THREE from 'three';
import { WEAPONS } from './gun.js';
import { buildWeaponModel } from './gunModels.js';
import { BotCharacter } from './characters.js';

// ---------------------------------------------------------------------------
// Persistent profile + daily quests
// ---------------------------------------------------------------------------
const PROFILE_KEY = 'killhit_profile_v1';
const XP_PER_LEVEL = 1000;

const TASKS = [
  {
    id: 'kills',
    title: 'ELIMINATE 20 HOSTILES',
    short: '20 KILLS',
    target: 20,
    reward: 250
  },
  {
    id: 'headshots',
    title: 'LAND 5 HEADSHOT KILLS',
    short: '5 HEADSHOTS',
    target: 5,
    reward: 200
  },
  {
    id: 'score',
    title: 'SCORE 2,500 POINTS',
    short: '2,500 SCORE',
    target: 2500,
    reward: 300
  }
];

function dateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function defaultSettings() {
  return { sensitivity: 4, volume: 32, quality: 'high' };
}

function defaultProfile() {
  return {
    name: 'NIGHTRUNNER',
    xp: 0,
    level: 1,
    loadout: 'rifle',
    settings: defaultSettings(),
    career: { kills: 0, headshots: 0 },
    daily: { date: dateKey(), tasks: TASKS.map(task => ({ id: task.id, progress: 0, awarded: false })) }
  };
}

function loadProfile() {
  const base = defaultProfile();
  let raw = null;
  try {
    raw = JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null');
  } catch (err) {
    raw = null;
  }

  if (!raw || typeof raw !== 'object') return base;

  return {
    ...base,
    ...raw,
    name: typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim().slice(0, 14) : base.name,
    xp: Number.isFinite(raw.xp) ? Math.max(0, raw.xp) : 0,
    settings: { ...base.settings, ...(raw.settings || {}) },
    career: {
      kills: Number.isFinite(raw.career?.kills) ? raw.career.kills : 0,
      headshots: Number.isFinite(raw.career?.headshots) ? raw.career.headshots : 0
    },
    daily: raw.daily && Array.isArray(raw.daily.tasks) ? raw.daily : base.daily
  };
}

function weaponById(id) {
  return WEAPONS.find(weapon => weapon.id === id) || WEAPONS[0];
}

function weaponLabel(id) {
  return (weaponById(id).name || 'RIFLE').toUpperCase();
}

// ---------------------------------------------------------------------------
// UI controller
// ---------------------------------------------------------------------------
export class UI {
  constructor(hooks = {}) {
    this.hooks = hooks;
    this.profile = loadProfile();
    this.currentScreen = 'home';
    this.settingsReturn = 'home';
    this.matchRunning = false;
    this.session = null;
    this.game = null;
    this.gameReady = false;

    this.pendingTimers = [];
    this.countdownTimer = null;
    this.feedTimers = [];
    this.previews = [];
    this.homePreview = null;
    this.previewLast = performance.now();
    this.toastTimer = null;
    this.lastMinimapTime = 0;
    this.hudTaskSignature = '';
    this.minimapContext = null;

    this.cacheDom();
    this.ensureDaily();
    this.saveProfile();
    this.bindEvents();
    this.fillSettingsControls();
    this.refreshHome();
    this.setGameReady(false);
    this.initHomePreview();
    this.startPreviewLoop();
  }

  cacheDom() {
    this.screens = {
      home: document.getElementById('home-screen'),
      loadout: document.getElementById('loadout-screen'),
      matchmaking: document.getElementById('matchmaking-screen'),
      results: document.getElementById('results-screen'),
      pause: document.getElementById('pause-menu')
    };

    this.hud = document.getElementById('hud');
    this.settingsScreen = document.getElementById('settings-screen');
    this.toastElement = document.getElementById('toast');
    this.killFeedElement = document.getElementById('kill-feed');
    this.tasksElement = document.getElementById('daily-tasks');
    this.hudTasksElement = document.getElementById('tasks-hud');
    this.loadoutCardsElement = document.getElementById('loadout-cards');
    this.respawnOverlay = document.getElementById('respawn-overlay');
    this.respawnCountElement = document.getElementById('respawn-count');
    this.hudTimerElement = document.getElementById('hud-timer');
    this.hudDeathsElement = document.getElementById('hud-deaths');

    this.nameInput = document.getElementById('player-name');
    this.playButton = document.getElementById('play-btn');
    this.gameReadyLabel = document.getElementById('game-ready-label');
    this.homeCanvas = document.getElementById('home-preview');

    this.minimap = document.getElementById('minimap');
    this.minimapContext = this.minimap ? this.minimap.getContext('2d') : null;
  }

  // ---------------------------------------------------------------- storage
  saveProfile() {
    try {
      this.profile.level = this.level;
      localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    } catch (err) {
      // localStorage may be unavailable; the session still works in memory.
    }
  }

  get level() {
    return Math.floor(this.profile.xp / XP_PER_LEVEL) + 1;
  }

  get levelXp() {
    return this.profile.xp % XP_PER_LEVEL;
  }

  ensureDaily() {
    const today = dateKey();
    if (!this.profile.daily || this.profile.daily.date !== today || !Array.isArray(this.profile.daily.tasks)) {
      this.profile.daily = {
        date: today,
        tasks: TASKS.map(task => ({ id: task.id, progress: 0, awarded: false }))
      };
      this.saveProfile();
      return;
    }

    const validIds = new Set(TASKS.map(task => task.id));
    this.profile.daily.tasks = this.profile.daily.tasks.filter(state => validIds.has(state.id));

    for (const task of TASKS) {
      if (!this.profile.daily.tasks.some(state => state.id === task.id)) {
        this.profile.daily.tasks.push({ id: task.id, progress: 0, awarded: false });
      }
    }
  }

  taskState(id) {
    return this.profile.daily.tasks.find(state => state.id === id) || null;
  }

  grantXp(amount) {
    const beforeLevel = this.level;
    this.profile.xp += Math.max(0, Math.round(amount));
    const afterLevel = this.level;
    if (afterLevel > beforeLevel) {
      this.showToast(`LEVEL UP  ·  LV ${afterLevel}`, true);
    }
    this.refreshHome();
    this.saveProfile();
    return afterLevel > beforeLevel;
  }

  updateTaskProgress(id, amount = 1) {
    const state = this.taskState(id);
    const def = TASKS.find(task => task.id === id);
    if (!state || !def || state.awarded) return;

    state.progress = Math.min(def.target, state.progress + amount);
    if (state.progress >= def.target) {
      state.awarded = true;
      if (this.session && this.session.active) {
        this.session.completed.push({ id: def.id, title: def.title, reward: def.reward });
        this.session.xpEarned += def.reward;
      }
      this.grantXp(def.reward);
      this.showToast(`QUEST COMPLETE  +${def.reward} XP`, true);
    }

    this.refreshDailyTasks();
    this.renderHudTasks(true);
    this.saveProfile();
  }

  // ------------------------------------------------------------------ setup
  setGameReady(ready) {
    this.gameReady = !!ready;
    if (this.playButton) this.playButton.disabled = !ready;
    if (this.gameReadyLabel) this.gameReadyLabel.textContent = ready ? 'READY' : 'BOOTING';
  }

  attachGame(game) {
    this.game = game;
    this.applySettings();
    this.updateHUD();
  }

  applySettings() {
    if (this.hooks.onSettingsChange) this.hooks.onSettingsChange(this.profile.settings);
  }

  // ------------------------------------------------------------------ home
  refreshHome() {
    this.ensureDaily();
    this.refreshDailyTasks();

    const reset = document.getElementById('daily-reset');
    if (reset) {
      const now = new Date();
      const remaining = 24 - now.getHours();
      reset.textContent = `${Math.max(1, remaining)}H REMAINING`;
    }

    if (this.nameInput && document.activeElement !== this.nameInput) {
      this.nameInput.value = this.profile.name;
    }

    const level = this.level;
    const levelElement = document.getElementById('profile-level');
    const xpFill = document.getElementById('profile-xp-fill');
    const xpText = document.getElementById('profile-xp-text');
    if (levelElement) levelElement.textContent = `LV ${level}`;
    if (xpFill) xpFill.style.width = `${(this.levelXp / XP_PER_LEVEL) * 100}%`;
    if (xpText) xpText.textContent = `${Math.round(this.levelXp)} / ${XP_PER_LEVEL} XP`;

    const careerKills = document.getElementById('career-kills');
    const careerHeadshots = document.getElementById('career-headshots');
    if (careerKills) careerKills.textContent = String(this.profile.career.kills || 0);
    if (careerHeadshots) careerHeadshots.textContent = String(this.profile.career.headshots || 0);
  }

  initHomePreview() {
    if (!this.homeCanvas) return;
    try {
      const renderer = new THREE.WebGLRenderer({ canvas: this.homeCanvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 30);
      camera.position.set(0.62, 1.32, 4.05);
      camera.lookAt(0, 1.02, 0);

      scene.add(new THREE.HemisphereLight(0xffe5cc, 0x1b1210, 1.9));
      const key = new THREE.DirectionalLight(0xffefd8, 3.2);
      key.position.set(2.6, 4, 3.2);
      scene.add(key);
      const rim = new THREE.PointLight(0xff8b3d, 14, 8, 2);
      rim.position.set(-2.1, 2.0, -1.4);
      scene.add(rim);
      const fill = new THREE.PointLight(0xffc07d, 7, 7, 2);
      fill.position.set(2.4, 1.0, 1.8);
      scene.add(fill);

      const platform = new THREE.Mesh(
        new THREE.CylinderGeometry(1.32, 1.42, 0.12, 48),
        new THREE.MeshStandardMaterial({ color: 0x1d1713, roughness: 0.82, metalness: 0.18 })
      );
      platform.position.y = -0.06;
      scene.add(platform);

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.28, 1.37, 64),
        new THREE.MeshBasicMaterial({ color: 0xff9a42, transparent: true, opacity: 0.78, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.005;
      scene.add(ring);

      const character = new BotCharacter(scene, this.profile.name, 2, { aura: false });
      character.tag.visible = false;
      character.gun.visible = false;

      const holder = new THREE.Group();
      holder.position.set(0, -0.34, -0.05);
      character.parts.elbowR.add(holder);

      this.homePreview = {
        renderer,
        scene,
        camera,
        character,
        holder,
        weapon: null,
        width: 0,
        height: 0
      };

      this.updateHomeWeapon();
      this.resizeHomePreview(true);
      this.renderHomePreview(0.016, performance.now());
    } catch (err) {
      this.homePreview = null;
    }
  }

  resizeHomePreview(force = false) {
    const preview = this.homePreview;
    if (!preview) return;
    const canvas = this.homeCanvas;
    const width = Math.max(1, canvas.clientWidth || 480);
    const height = Math.max(1, canvas.clientHeight || 520);
    if (!force && width === preview.width && height === preview.height) return;
    preview.width = width;
    preview.height = height;
    preview.renderer.setSize(width, height, false);
    preview.camera.aspect = width / height;
    preview.camera.updateProjectionMatrix();
  }

  updateHomeWeapon() {
    const preview = this.homePreview;
    if (!preview) return;
    if (preview.weapon) {
      preview.holder.remove(preview.weapon);
      disposePreviewObject(preview.weapon);
    }

    const id = this.profile.loadout;
    const model = buildHeldWeapon(id);
    const scale = id === 'pistol' ? 0.62 : id === 'shotgun' ? 0.38 : id === 'sniper' ? 0.38 : 0.4;
    model.scale.setScalar(scale);
    // The preview hand is pitched for the old compact props. Align the
    // detailed weapon across the aiming pose instead of pointing it down.
    model.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    model.position.set(0, 0.01, 0.02);
    preview.holder.add(model);
    preview.weapon = model;
  }

  renderHomePreview(delta, now) {
    const preview = this.homePreview;
    if (!preview) return;
    this.resizeHomePreview();

    const character = preview.character;
    character.update(delta, { speed: 0, aiming: true, hit: 0 });
    character.root.rotation.y = -0.12 + Math.sin(now * 0.00035) * 0.5;
    character.root.position.y = Math.sin(now * 0.0015) * 0.008;

    preview.renderer.render(preview.scene, preview.camera);
  }

  refreshDailyTasks() {
    if (!this.tasksElement) return;
    this.tasksElement.textContent = '';

    for (const def of TASKS) {
      const state = this.taskState(def.id) || { progress: 0, awarded: false };
      const progress = Math.min(def.target, state.progress || 0);
      const pct = Math.min(100, Math.round((progress / def.target) * 100));
      const row = document.createElement('div');
      row.className = `quest-row${state.awarded ? ' complete' : ''}`;
      row.innerHTML = `
        <div class="quest-toprow">
          <span class="quest-title">${def.title}</span>
          <span class="quest-prog">${progress}/${def.target}</span>
        </div>
        <div class="quest-line"><i style="width:${pct}%"></i></div>
        <div class="quest-xp">+${def.reward} XP</div>
      `;
      this.tasksElement.appendChild(row);
    }
  }

  // --------------------------------------------------------------- loadout
  showLoadout() {
    if (!this.gameReady) return;
    this.currentScreen = 'loadout';
    this.showScreen('loadout');
    this.initLoadout();
  }

  initLoadout() {
    if (!this.loadoutCardsElement || this.loadoutCardsElement.children.length) {
      this.markSelectedLoadout();
      return;
    }

    for (let i = 0; i < WEAPONS.length; i++) {
      const weapon = WEAPONS[i];
      const damageValue = weapon.pellets > 1
        ? `${weapon.damageBody} × ${weapon.pellets}`
        : String(weapon.damageBody);

      const card = document.createElement('button');
      card.className = 'loadout-card';
      card.dataset.weapon = weapon.id;
      card.innerHTML = `
        <div class="card-top">
          <span class="card-index">0${i + 1}</span>
          <span class="card-type">${weapon.type}</span>
        </div>
        <canvas class="weapon-preview" width="520" height="280"></canvas>
        <div class="card-name">${weapon.name}</div>
        <div class="weapon-stats">
          <div class="stat-row"><span>DAMAGE</span><div class="stat-bar"><i style="width:${Math.min(100, (weapon.damageBody * weapon.pellets / 60) * 100)}%"></i></div><b>${damageValue}</b></div>
          <div class="stat-row"><span>FIRE RATE</span><div class="stat-bar"><i style="width:${Math.min(100, (weapon.fireRate / 10) * 100)}%"></i></div><b>${weapon.fireRate}/s</b></div>
          <div class="stat-row"><span>MAGAZINE</span><div class="stat-bar"><i style="width:${Math.min(100, (weapon.magSize / 30) * 100)}%"></i></div><b>${weapon.magSize}</b></div>
        </div>
        <div class="selected-tag">SELECTED</div>`;

      card.addEventListener('click', () => this.selectLoadout(weapon.id));
      this.loadoutCardsElement.appendChild(card);
      this.createPreview(card.querySelector('canvas'), weapon.id);
    }

    this.markSelectedLoadout();
  }

  selectLoadout(id) {
    this.profile.loadout = weaponById(id).id;
    this.saveProfile();
    this.markSelectedLoadout();
    this.updateHomeWeapon();
    this.showToast(`${weaponLabel(id)} EQUIPPED`, false);
  }

  markSelectedLoadout() {
    if (!this.loadoutCardsElement) return;
    for (const card of this.loadoutCardsElement.children) {
      card.classList.toggle('selected', card.dataset.weapon === this.profile.loadout);
    }
  }

  getStartingWeaponId() {
    return weaponById(this.profile.loadout).id;
  }

  createPreview(canvas, weaponId) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(1);
    renderer.setSize(canvas.width, canvas.height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, canvas.width / canvas.height, 0.05, 20);
    camera.position.set(0, 0.15, 1.7);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0x9cb9c4, 0x080d10, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(1.6, 2.2, 2.2);
    scene.add(key);
    const rim = new THREE.PointLight(0xff9a42, 3.2, 6);
    rim.position.set(-1.5, 0.5, 1.1);
    scene.add(rim);

    const model = buildPreviewWeapon(weaponId);
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    model.position.sub(center);

    const pivot = new THREE.Group();
    pivot.add(model);
    const fit = 1.02 / Math.max(size.x, size.y, size.z, 0.001);
    pivot.scale.setScalar(fit);
    pivot.rotation.set(0.08, 0.72, 0);
    scene.add(pivot);

    this.previews.push({ renderer, scene, camera, pivot, id: weaponId, phase: Math.random() * Math.PI * 2 });
  }

  startPreviewLoop() {
    const loop = (now) => {
      const delta = Math.min((now - this.previewLast) / 1000, 0.05);
      this.previewLast = now;

      if (this.currentScreen === 'loadout' && this.previews.length) {
        for (const preview of this.previews) {
          preview.pivot.rotation.y += delta * 0.62;
          preview.pivot.position.y = Math.sin(now * 0.0016 + preview.phase) * 0.025;
          preview.renderer.render(preview.scene, preview.camera);
        }
      }

      const homeVisible = this.currentScreen === 'home'
        || (this.currentScreen === 'settings' && this.settingsReturn === 'home');
      if (homeVisible && this.homePreview) {
        this.renderHomePreview(delta, now);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }

  // -------------------------------------------------------------- settings
  fillSettingsControls() {
    const sensitivity = document.getElementById('setting-sensitivity');
    const volume = document.getElementById('setting-volume');
    const sensitivityValue = document.getElementById('setting-sensitivity-value');
    const volumeValue = document.getElementById('setting-volume-value');

    if (sensitivity) sensitivity.value = String(this.profile.settings.sensitivity);
    if (volume) volume.value = String(this.profile.settings.volume);
    if (sensitivityValue) sensitivityValue.textContent = String(this.profile.settings.sensitivity);
    if (volumeValue) volumeValue.textContent = `${this.profile.settings.volume}%`;
    this.markSelectedQuality();
  }

  showSettings() {
    this.settingsReturn = this.currentScreen || 'home';
    this.currentScreen = 'settings';
    this.fillSettingsControls();
    if (this.settingsScreen) this.settingsScreen.classList.add('active');
  }

  closeSettings() {
    if (this.settingsScreen) this.settingsScreen.classList.remove('active');
    this.currentScreen = this.settingsReturn || 'home';
    this.applySettings();
    this.saveProfile();
    this.refreshHome();
  }

  markSelectedQuality() {
    const row = document.getElementById('quality-row');
    if (!row) return;
    for (const button of row.querySelectorAll('.quality-btn')) {
      button.classList.toggle('selected', button.dataset.quality === this.profile.settings.quality);
    }
  }

  // --------------------------------------------------------------- screens
  showScreen(name) {
    const target = name === null ? null : (name === 'pause' ? 'pause' : name);
    for (const [key, element] of Object.entries(this.screens)) {
      if (element) element.classList.toggle('active', target === key);
    }
    if (name !== null) this.currentScreen = name;

    if (name === null) this.currentScreen = null;
    document.body.classList.toggle('interface-open', name !== null);
    if (name === 'home') {
      this.exitFullscreen();
      this.refreshHome();
    }
    if (name === 'home' || (name === null && !this.matchRunning)) this.setHUDVisible(false);
  }

  requestFullscreen() {
    const root = document.documentElement;
    const request = root.requestFullscreen || root.webkitRequestFullscreen;
    if (!request) return;
    try {
      const result = request.call(root);
      if (result && typeof result.catch === 'function') result.catch(() => {});
    } catch (err) {
      // Fullscreen is optional; the match still starts without it.
    }
  }

  exitFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) return;
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (!exit) return;
    try {
      const result = exit.call(document);
      if (result && typeof result.catch === 'function') result.catch(() => {});
    } catch (err) {
      // Ignore browsers that refuse or lack the fullscreen API.
    }
  }

  setHUDVisible(visible) {
    if (this.hud) this.hud.classList.toggle('active', !!visible);
  }

  setMatchRunning(running) {
    this.matchRunning = !!running;
    if (!running) this.setHUDVisible(false);
  }

  shouldRenderWorld() {
    return this.matchRunning || this.currentScreen === 'pause';
  }

  // ------------------------------------------------------------ match flow
  beginMatchmaking() {
    if (!this.gameReady) return;
    this.clearTimers();
    this.clearKillFeed();
    this.matchRunning = false;
    this.setHUDVisible(false);
    this.showScreen('matchmaking');

    this.pendingTimers.push(setTimeout(() => this.startMatch(), 2000));
  }

  startMatch() {
    this.clearTimers();
    this.startSession();
    this.showScreen(null);
    this.setHUDVisible(true);
    this.currentScreen = null;
    if (this.hooks.onStartMatch) this.hooks.onStartMatch(this.getStartingWeaponId());
  }

  startSession() {
    this.ensureDaily();
    this.session = {
      active: true,
      kills: 0,
      deaths: 0,
      headshots: 0,
      score: 0,
      xpEarned: 0,
      completed: [],
      startLevel: this.level
    };
    this.hudTaskSignature = '';
    this.matchRunning = true;
    this._lastMatchTime = -1;
    this.clearKillFeed();
    this.hideRespawnOverlay();
    if (this.hudDeathsElement) this.hudDeathsElement.textContent = '0';
    this.renderHudTasks(true);
    this.refreshHome();
  }

  onPlayerDeath() {
    if (!this.session || !this.session.active) return;
    this.session.deaths += 1;
    if (this.hudDeathsElement) this.hudDeathsElement.textContent = String(this.session.deaths);
    if (this.respawnOverlay) this.respawnOverlay.classList.add('active');
  }

  updateRespawnCountdown(seconds) {
    if (this.respawnCountElement) {
      this.respawnCountElement.textContent = String(Math.max(0, Math.ceil(seconds)));
    }
  }

  hideRespawnOverlay() {
    if (this.respawnOverlay) this.respawnOverlay.classList.remove('active');
  }

  updateMatchTime(seconds) {
    if (!this.hudTimerElement) return;
    const safe = Math.max(0, Math.ceil(seconds));
    if (safe === this._lastMatchTime) return;
    this._lastMatchTime = safe;
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    this.hudTimerElement.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    this.hudTimerElement.classList.toggle('urgent', safe <= 60);
  }

  finishMatch() {
    if (!this.session || !this.session.active) return;
    this.session.active = false;
    this.matchRunning = false;
    this.hideRespawnOverlay();
    this.setHUDVisible(false);

    const bonus = 50 + this.session.kills * 25 + this.session.headshots * 15;
    this.session.xpEarned += bonus;
    this.profile.xp += bonus;
    this.saveProfile();

    this.renderResults();
    this.showScreen('results');
    this.refreshHome();
  }

  showHome() {
    this.clearTimers();
    this.matchRunning = false;
    if (this.session) this.session.active = false;
    this.clearKillFeed();
    this.showScreen('home');
    this.currentScreen = 'home';
    this.setHUDVisible(false);
    this.refreshHome();
  }

  showPause() {
    if (!this.matchRunning) return;
    this.showScreen('pause');
    this.currentScreen = 'pause';
  }

  hidePause() {
    if (this.currentScreen !== 'pause') return;
    this.showScreen(null);
    this.currentScreen = null;
  }

  clearTimers() {
    for (const timer of this.pendingTimers) clearTimeout(timer);
    this.pendingTimers = [];
    if (this.countdownTimer) clearInterval(this.countdownTimer);
    this.countdownTimer = null;
  }

  // -------------------------------------------------------------- gameplay
  onKill(meta = {}) {
    if (!this.session || !this.session.active) return;
    const headshot = !!meta.headshot;

    this.session.kills += 1;
    if (headshot) this.session.headshots += 1;
    const points = headshot ? 150 : 100;
    this.session.score += points;
    this.profile.career.kills = (this.profile.career.kills || 0) + 1;
    if (headshot) this.profile.career.headshots = (this.profile.career.headshots || 0) + 1;

    const victim = meta.bot && meta.bot.name ? meta.bot.name : 'HOSTILE';
    this.addKillFeed(this.profile.name, victim, {
      headshot,
      weaponId: meta.weaponId || 'rifle'
    });

    this.updateTaskProgress('kills', 1);
    this.updateTaskProgress('score', points);
    if (headshot) this.updateTaskProgress('headshots', 1);
    this.saveProfile();
    this.updateHUD();
  }

  addKillFeed(killer, victim, { headshot = false, weaponId = 'rifle' } = {}) {
    if (!this.killFeedElement) return;

    const item = document.createElement('div');
    item.className = `feed-item${headshot ? ' headshot' : ''}`;

    const killerEl = document.createElement('b');
    killerEl.textContent = killer;
    const weaponEl = document.createElement('span');
    weaponEl.className = 'feed-weapon';
    weaponEl.textContent = weaponLabel(weaponId);
    const victimEl = document.createElement('b');
    victimEl.className = 'feed-victim';
    victimEl.textContent = victim;
    const tagEl = document.createElement('span');
    tagEl.className = 'feed-tag';
    tagEl.textContent = headshot ? 'HEADSHOT' : 'ELIMINATED';

    item.append(killerEl, weaponEl, victimEl, tagEl);
    this.killFeedElement.prepend(item);

    while (this.killFeedElement.children.length > 6) {
      this.killFeedElement.lastElementChild.remove();
    }

    const timer = setTimeout(() => {
      item.classList.add('out');
      setTimeout(() => item.remove(), 350);
    }, headshot ? 4400 : 3800);
    this.feedTimers.push(timer);
  }

  clearKillFeed() {
    for (const timer of this.feedTimers) clearTimeout(timer);
    this.feedTimers = [];
    if (this.killFeedElement) this.killFeedElement.textContent = '';
  }

  renderHudTasks(force = false) {
    if (!this.hudTasksElement) return;
    const signature = TASKS.map(def => {
      const state = this.taskState(def.id);
      return `${def.id}:${state ? state.progress : 0}:${state ? state.awarded : false}`;
    }).join('|');
    if (!force && signature === this.hudTaskSignature) return;
    this.hudTaskSignature = signature;

    this.hudTasksElement.textContent = '';
    for (const def of TASKS) {
      const state = this.taskState(def.id) || { progress: 0, awarded: false };
      const progress = Math.min(def.target, state.progress || 0);
      const row = document.createElement('div');
      row.className = `hud-task${state.awarded ? ' complete' : ''}`;
      row.innerHTML = `
        <span>${def.short}</span>
        <div class="hud-task-bar"><i style="width:${(progress / def.target) * 100}%"></i></div>
        <b>${progress}/${def.target}</b>`;
      this.hudTasksElement.appendChild(row);
    }
  }

  updateHUD() {
    if (!this.game) return;
    const { player, enemies, gun } = this.game;
    if (!player || !gun) return;

    const health = Math.max(0, Math.ceil(player.health));
    const healthText = document.getElementById('health-text');
    const healthFill = document.getElementById('health-bar-fill');
    if (healthText) healthText.textContent = `${health} / ${player.maxHealth}`;
    if (healthFill) {
      const ratio = health / player.maxHealth;
      healthFill.style.width = `${ratio * 100}%`;
      healthFill.style.backgroundColor = ratio > 0.6 ? '#dce6ef' : ratio > 0.3 ? '#b9c8d6' : '#ff4d5e';
    }

    const weaponName = document.getElementById('weapon-name');
    const ammo = document.getElementById('ammo');
    if (weaponName) weaponName.textContent = gun.weapon.name;
    if (ammo) ammo.textContent = gun.isReloading ? 'RELOADING' : `${gun.weapon.ammo} / ${gun.weapon.magSize}`;

    const alive = enemies && Array.isArray(enemies.bots)
      ? enemies.bots.filter(bot => bot && bot.isAlive).length
      : 0;

    const enemiesEl = document.getElementById('hud-enemies');
    const killsEl = document.getElementById('hud-kills');
    const scoreEl = document.getElementById('hud-score');
    const objectiveEl = document.getElementById('hud-objective-text');
    if (enemiesEl) enemiesEl.textContent = String(alive);
    if (killsEl) killsEl.textContent = String(this.session ? this.session.kills : 0);
    if (scoreEl) scoreEl.textContent = String(this.session ? this.session.score : 0);
    if (objectiveEl) {
      objectiveEl.textContent = alive > 0 ? 'HUNT THE HOSTILES' : 'SECTOR CLEAR';
    }

    this.renderHudTasks(false);

    const now = performance.now();
    if (now - this.lastMinimapTime > 100) {
      this.lastMinimapTime = now;
      this.drawMinimap();
    }
  }

  drawMinimap() {
    const ctx = this.minimapContext;
    if (!ctx || !this.game || !this.game.world || !this.game.player) return;

    const canvas = this.minimap;
    const width = canvas.width;
    const height = canvas.height;
    const bounds = this.game.world.getBounds();
    const pad = 10;
    const mapWidth = bounds.maxX - bounds.minX;
    const mapDepth = bounds.maxZ - bounds.minZ;
    const toX = (x) => pad + ((x - bounds.minX) / mapWidth) * (width - pad * 2);
    const toY = (z) => pad + ((z - bounds.minZ) / mapDepth) * (height - pad * 2);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(3, 10, 12, 0.82)';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(255, 154, 66, 0.14)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 6; i++) {
      const x = pad + ((width - pad * 2) / 6) * i;
      ctx.beginPath();
      ctx.moveTo(x, pad);
      ctx.lineTo(x, height - pad);
      ctx.stroke();
    }
    for (let i = 1; i < 4; i++) {
      const y = pad + ((height - pad * 2) / 4) * i;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(width - pad, y);
      ctx.stroke();
    }

    for (const feature of this.game.world.mapFeatures || []) {
      const color = typeof feature.color === 'number'
        ? `#${feature.color.toString(16).padStart(6, '0')}`
        : (feature.color || '#2a4a4a');
      ctx.globalAlpha = 0.52;
      ctx.fillStyle = color;
      ctx.fillRect(
        toX(feature.x1),
        toY(feature.z1),
        Math.max(1, toX(feature.x2) - toX(feature.x1)),
        Math.max(1, toY(feature.z2) - toY(feature.z1))
      );
    }
    ctx.globalAlpha = 1;

    if (this.game.enemies && this.game.enemies.bots) {
      ctx.fillStyle = '#ff5566';
      for (const bot of this.game.enemies.bots) {
        if (!bot.isAlive) continue;
        ctx.beginPath();
        ctx.arc(toX(bot.group.position.x), toY(bot.group.position.z), 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const player = this.game.player;
    const px = toX(player.camera.position.x);
    const py = toY(player.camera.position.z);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-player.euler.y);

    ctx.fillStyle = 'rgba(255, 154, 66, 0.13)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-16, -40);
    ctx.lineTo(16, -40);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#ff9a42';
    ctx.strokeStyle = '#041012';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2.5);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = 'rgba(255, 154, 66, 0.48)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(0.75, 0.75, width - 1.5, height - 1.5);

    const zone = document.getElementById('minimap-zone');
    if (zone) zone.textContent = player.camera.position.x < -1 ? 'KANTO STATION' : 'NIGHT DISTRICT';

    const heading = document.getElementById('minimap-heading');
    if (heading) {
      const degrees = ((-player.euler.y * 180) / Math.PI % 360 + 360) % 360;
      const labels = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      heading.textContent = labels[Math.round(degrees / 45) % 8];
    }
  }

  // --------------------------------------------------------------- results
  renderResults() {
    if (!this.session) return;
    const session = this.session;
    const set = (id, value) => {
      const element = document.getElementById(id);
      if (element) element.textContent = String(value);
    };

    set('result-kills', session.kills);
    set('result-deaths', session.deaths || 0);
    set('result-headshots', session.headshots);
    set('result-score', session.score);
    set('result-xp', `+${session.xpEarned} XP`);

    const levelUp = document.getElementById('result-levelup');
    if (levelUp) {
      const up = this.level > session.startLevel;
      levelUp.style.display = up ? 'inline-flex' : 'none';
      if (up) levelUp.textContent = `LEVEL UP  ·  LV ${this.level}`;
    }

    const taskList = document.getElementById('result-task-list');
    if (taskList) {
      taskList.textContent = '';
      for (const def of TASKS) {
        const state = this.taskState(def.id) || { progress: 0, awarded: false };
        const progress = Math.min(def.target, state.progress || 0);
        const row = document.createElement('div');
        row.className = `result-task-row${state.awarded ? ' complete' : ''}`;
        row.innerHTML = `<span>${def.title}</span><b>${progress}/${def.target} · +${def.reward} XP</b>`;
        taskList.appendChild(row);
      }
    }
  }

  // ------------------------------------------------------------------ toast
  showToast(message, accent = false) {
    if (!this.toastElement) return;
    this.toastElement.textContent = message;
    this.toastElement.classList.toggle('accent', !!accent);
    this.toastElement.classList.add('visible');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastElement.classList.remove('visible');
    }, 2400);
  }

  // ----------------------------------------------------------------- events
  bindEvents() {
    this.playButton?.addEventListener('click', () => {
      this.requestFullscreen();
      this.beginMatchmaking();
    });
    document.getElementById('loadout-btn')?.addEventListener('click', () => this.showLoadout());
    document.getElementById('settings-btn')?.addEventListener('click', () => this.showSettings());

    document.getElementById('loadout-back')?.addEventListener('click', () => this.showHome());
    document.getElementById('loadout-confirm')?.addEventListener('click', () => this.showHome());

    document.getElementById('resume-btn')?.addEventListener('click', () => {
      if (this.hooks.onResume) this.hooks.onResume();
    });
    document.getElementById('pause-settings-btn')?.addEventListener('click', () => this.showSettings());
    document.getElementById('pause-main-menu')?.addEventListener('click', () => {
      if (this.hooks.onExitMatch) this.hooks.onExitMatch();
      this.showHome();
    });

    document.getElementById('play-again-btn')?.addEventListener('click', () => {
      this.beginMatchmaking();
    });
    document.getElementById('result-main-menu')?.addEventListener('click', () => {
      if (this.hooks.onExitMatch) this.hooks.onExitMatch();
      this.showHome();
    });

    const nameInput = this.nameInput;
    const saveName = () => {
      const value = (nameInput?.value || '').trim().slice(0, 14);
      this.profile.name = value || 'NIGHTRUNNER';
      if (nameInput) nameInput.value = this.profile.name;
      this.saveProfile();
      this.refreshHome();
    };
    nameInput?.addEventListener('change', saveName);
    nameInput?.addEventListener('blur', saveName);
    nameInput?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        nameInput.blur();
      }
      event.stopPropagation();
    });

    const sensitivity = document.getElementById('setting-sensitivity');
    const sensitivityValue = document.getElementById('setting-sensitivity-value');
    sensitivity?.addEventListener('input', () => {
      const value = Math.max(1, Math.min(10, Number(sensitivity.value) || 4));
      this.profile.settings.sensitivity = value;
      if (sensitivityValue) sensitivityValue.textContent = String(value);
      this.applySettings();
    });

    const volume = document.getElementById('setting-volume');
    const volumeValue = document.getElementById('setting-volume-value');
    volume?.addEventListener('input', () => {
      const value = Math.max(0, Math.min(100, Number(volume.value) || 0));
      this.profile.settings.volume = value;
      if (volumeValue) volumeValue.textContent = `${value}%`;
      this.applySettings();
    });

    document.querySelectorAll('.quality-btn').forEach(button => {
      button.addEventListener('click', () => {
        this.profile.settings.quality = button.dataset.quality || 'high';
        this.markSelectedQuality();
        this.applySettings();
      });
    });

    document.getElementById('settings-close')?.addEventListener('click', () => this.closeSettings());

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape' && this.currentScreen === 'settings') {
        this.closeSettings();
      }
    });
  }
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildPreviewWeapon(id) {
  return buildWeaponModel(id).group;
}

function buildHeldWeapon(id) {
  return buildWeaponModel(id).group;
}

function disposePreviewObject(root) {
  // Materials are shared, but merged weapon geometry is unique per model.
  root.traverse(object => {
    if (object.isMesh) object.geometry?.dispose();
  });
}
