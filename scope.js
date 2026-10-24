// DOM-based optic overlays: red dot, iron sights and the sniper scope.
export class ScopeOverlay {
  constructor(container) {
    this.root = document.createElement('div');
    this.root.className = 'ads-overlay';
    this.root.dataset.mode = 'none';
    this.root.setAttribute('aria-hidden', 'true');

    const milDots = [];
    for (const y of [-14, -7, 7, 14]) milDots.push(`<circle cx="0" cy="${y}" r="0.62" fill="rgba(238,248,242,.86)"/>`);
    for (const x of [-14, -7, 7, 14]) milDots.push(`<circle cx="${x}" cy="0" r="0.62" fill="rgba(238,248,242,.86)"/>`);

    this.root.innerHTML = `
      <div class="ads-sight">
        <span class="ads-dot"></span>
        <span class="ads-ring"></span>
        <span class="ads-tick ads-tick-top"></span>
        <span class="ads-tick ads-tick-bottom"></span>
        <span class="ads-tick ads-tick-left"></span>
        <span class="ads-tick ads-tick-right"></span>
      </div>
      <div class="sniper-scope">
        <div class="scope-edge"></div>
        <div class="scope-lens"></div>
        <div class="scope-reticle">
          <svg viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <g stroke="rgba(236,250,244,.82)" stroke-width="0.32" fill="none">
              <line x1="-46" y1="0" x2="-4.2" y2="0"/>
              <line x1="4.2" y1="0" x2="46" y2="0"/>
              <line x1="0" y1="-46" x2="0" y2="-4.2"/>
              <line x1="0" y1="4.2" x2="0" y2="46"/>
              <circle cx="0" cy="0" r="1.35"/>
            </g>
            <g>${milDots.join('')}</g>
          </svg>
        </div>
        <div class="scope-glint"></div>
      </div>`;

    container.appendChild(this.root);
    this.mode = 'none';
    this.time = 0;
  }

  setMode(mode) {
    if (mode === this.mode) return;
    this.mode = mode;
    this.root.dataset.mode = mode;
    this.root.classList.toggle('active', mode !== 'none');
  }

  hide() {
    this.setMode('none');
  }

  update(delta, { mode = 'none', breath = false, speed = 0 } = {}) {
    this.setMode(mode);
    if (mode === 'none') return;

    this.time += delta;
    const t = this.time;
    const moving = Math.min(1, speed / 4.5);
    const sniper = mode === 'sniper';
    const breathScale = sniper && breath ? 0.16 : 1;
    const amp = (sniper ? 7.5 : 1.1) * breathScale * (0.65 + moving * 0.9);

    const x = (Math.sin(t * 0.82) * 0.75 + Math.sin(t * 1.93 + 1.2) * 0.25) * amp;
    const y = (Math.cos(t * 0.61 + 0.4) * 0.7 + Math.sin(t * 2.31) * 0.3) * amp;

    this.root.style.setProperty('--sx', `${x.toFixed(2)}px`);
    this.root.style.setProperty('--sy', `${y.toFixed(2)}px`);
  }
}
