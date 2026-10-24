// Procedural sound effects using the Web Audio API. No audio files needed.

export class SoundManager {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noiseBuffer = null;
    this.muted = false;
    this.volume = 0.32;
  }

  // Must be called from a user gesture (click / key press).
  unlock() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : this.volume;
      this.master.connect(this.ctx.destination);
      this.noiseBuffer = this.createNoiseBuffer(1.0);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  createNoiseBuffer(seconds) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, Number(value) || 0));
    if (this.master) {
      this.master.gain.value = this.muted ? 0 : this.volume;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) {
      this.master.gain.value = this.muted ? 0 : this.volume;
    }
    return this.muted;
  }

  // ---------- low level helpers ----------
  tone({ frequency, endFrequency = null, duration = 0.15, type = 'square', gain = 0.2, when = 0 }) {
    if (!this.ctx || this.muted) return;

    const t0 = this.ctx.currentTime + when;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, t0);
    if (endFrequency !== null) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFrequency), t0 + duration);
    }

    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    osc.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  noiseBurst({ duration = 0.12, filterFreq = 1200, filterType = 'lowpass', gain = 0.3, when = 0 }) {
    if (!this.ctx || this.muted) return;

    const t0 = this.ctx.currentTime + when;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(filterFreq, t0);
    filter.frequency.exponentialRampToValueAtTime(Math.max(100, filterFreq * 0.35), t0 + duration);

    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start(t0);
    src.stop(t0 + duration + 0.02);
  }

  // ---------- game sounds ----------
  gunShot(weaponId) {
    if (!this.ctx || this.muted) return;

    if (weaponId === 'pistol') {
      this.noiseBurst({ duration: 0.09, filterFreq: 1800, gain: 0.22 });
      this.tone({ frequency: 220, endFrequency: 90, duration: 0.12, type: 'triangle', gain: 0.16 });
    } else if (weaponId === 'shotgun') {
      this.noiseBurst({ duration: 0.28, filterFreq: 900, gain: 0.45 });
      this.tone({ frequency: 120, endFrequency: 45, duration: 0.3, type: 'sawtooth', gain: 0.2 });
    } else if (weaponId === 'sniper') {
      this.noiseBurst({ duration: 0.34, filterFreq: 1250, gain: 0.5 });
      this.tone({ frequency: 150, endFrequency: 42, duration: 0.36, type: 'sawtooth', gain: 0.24 });
      this.tone({ frequency: 860, endFrequency: 180, duration: 0.2, type: 'square', gain: 0.08, when: 0.03 });
    } else {
      this.noiseBurst({ duration: 0.07, filterFreq: 2400, gain: 0.28 });
      this.tone({ frequency: 320, endFrequency: 140, duration: 0.08, type: 'square', gain: 0.12 });
    }
  }

  reload() {
    if (!this.ctx || this.muted) return;
    this.tone({ frequency: 900, duration: 0.04, type: 'square', gain: 0.06 });
    this.noiseBurst({ duration: 0.04, filterFreq: 3000, gain: 0.08, when: 0.05 });
    this.tone({ frequency: 600, duration: 0.05, type: 'square', gain: 0.06, when: 0.16 });
    this.noiseBurst({ duration: 0.05, filterFreq: 2600, gain: 0.09, when: 0.35 });
    this.tone({ frequency: 1000, duration: 0.04, type: 'triangle', gain: 0.05, when: 0.36 });
  }

  hit(headshot = false) {
    if (!this.ctx || this.muted) return;
    if (headshot) {
      this.tone({ frequency: 1300, duration: 0.06, type: 'sine', gain: 0.12 });
      this.tone({ frequency: 1900, duration: 0.09, type: 'sine', gain: 0.1, when: 0.035 });
    } else {
      this.tone({ frequency: 950, duration: 0.05, type: 'sine', gain: 0.1 });
    }
  }

  enemyDeath() {
    if (!this.ctx || this.muted) return;
    this.tone({ frequency: 260, endFrequency: 70, duration: 0.35, type: 'sawtooth', gain: 0.12 });
    this.noiseBurst({ duration: 0.18, filterFreq: 700, gain: 0.1 });
  }

  playerDeath() {
    if (!this.ctx || this.muted) return;
    this.tone({ frequency: 180, endFrequency: 35, duration: 0.9, type: 'sawtooth', gain: 0.18 });
    this.noiseBurst({ duration: 0.5, filterFreq: 500, gain: 0.15 });
  }

  hurt() {
    if (!this.ctx || this.muted) return;
    this.tone({ frequency: 150, endFrequency: 80, duration: 0.12, type: 'triangle', gain: 0.1 });
  }

  pickup() {
    if (!this.ctx || this.muted) return;
    this.tone({ frequency: 520, duration: 0.08, type: 'sine', gain: 0.12 });
    this.tone({ frequency: 780, duration: 0.12, type: 'sine', gain: 0.12, when: 0.07 });
  }
}
