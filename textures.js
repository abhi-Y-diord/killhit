import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Procedural texture factory. Every surface in the game is generated here so
// there are no external assets to load. Textures include noise + grime, and
// all material maps are reused between meshes.
// ---------------------------------------------------------------------------

function makeCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

export function makeTexture(size, draw, repeatX = 1, repeatY = 1) {
  const canvas = makeCanvas(size);
  draw(canvas.getContext('2d'), size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function cloneRepeat(tex, x, y) {
  const t = tex.clone();
  t.needsUpdate = true;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(x, y);
  return t;
}

function grain(ctx, size, amount = 16, alpha = 0.05) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * amount;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
  // Grime streaks.
  ctx.save();
  ctx.globalAlpha = alpha;
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
    ctx.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 5, 10 + Math.random() * 60);
  }
  ctx.restore();
}

function drawConcrete(ctx, s) {
  ctx.fillStyle = '#6b6f72';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    const c = 90 + Math.random() * 60;
    ctx.fillStyle = `rgba(${c},${c},${c + 4},${Math.random() * 0.25})`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 4, 1 + Math.random() * 4);
  }
  ctx.strokeStyle = 'rgba(35,38,40,0.45)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (s / 2) * i);
    ctx.lineTo(s, (s / 2) * i);
    ctx.stroke();
  }
  grain(ctx, s, 18, 0.04);
}

function drawTiles(ctx, s) {
  ctx.fillStyle = '#c7cdd0';
  ctx.fillRect(0, 0, s, s);
  const n = 4;
  const t = s / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const v = 198 + Math.random() * 34;
      ctx.fillStyle = `rgb(${v},${v + 3},${v + 5})`;
      ctx.fillRect(x * t + 2, y * t + 2, t - 4, t - 4);
      ctx.fillStyle = 'rgba(90,105,110,0.22)';
      ctx.fillRect(x * t + 3, y * t + t - 8, t - 6, 5);
    }
  }
  ctx.strokeStyle = 'rgba(84,96,100,0.65)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= n; i++) {
    ctx.beginPath();
    ctx.moveTo(i * t, 0);
    ctx.lineTo(i * t, s);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * t);
    ctx.lineTo(s, i * t);
    ctx.stroke();
  }
  grain(ctx, s, 12, 0.05);
}

function drawPlatformTiles(ctx, s) {
  ctx.fillStyle = '#9aa2a4';
  ctx.fillRect(0, 0, s, s);
  const n = 4;
  const t = s / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const v = 148 + Math.random() * 22;
      ctx.fillStyle = `rgb(${v},${v + 2},${v})`;
      ctx.fillRect(x * t + 1, y * t + 1, t - 2, t - 2);
    }
  }
  ctx.strokeStyle = 'rgba(60,64,62,0.5)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= n; i++) {
    ctx.beginPath();
    ctx.moveTo(i * t, 0);
    ctx.lineTo(i * t, s);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * t);
    ctx.lineTo(s, i * t);
    ctx.stroke();
  }
  // Dark grime patches near edges.
  ctx.fillStyle = 'rgba(32,34,33,0.16)';
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.ellipse(Math.random() * s, Math.random() * s, 10 + Math.random() * 44, 4 + Math.random() * 16, Math.random() * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  grain(ctx, s, 14, 0.05);
}

function drawAsphalt(ctx, s) {
  ctx.fillStyle = '#2c3033';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 2200; i++) {
    const v = 38 + Math.random() * 62;
    ctx.fillStyle = `rgba(${v},${v + 2},${v + 4},${0.25 + Math.random() * 0.45})`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
  ctx.strokeStyle = 'rgba(15,16,18,0.6)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * s, 0);
    ctx.bezierCurveTo(Math.random() * s, s * 0.4, Math.random() * s, s * 0.7, Math.random() * s, s);
    ctx.stroke();
  }
  grain(ctx, s, 16, 0.06);
}

function drawPavement(ctx, s) {
  ctx.fillStyle = '#666b6a';
  ctx.fillRect(0, 0, s, s);
  const n = 4;
  const t = s / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const v = 98 + Math.random() * 26;
      ctx.fillStyle = `rgb(${v},${v + 3},${v})`;
      ctx.fillRect(x * t + 2, y * t + 2, t - 4, t - 4);
    }
  }
  ctx.strokeStyle = 'rgba(50,54,52,0.65)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= n; i++) {
    ctx.beginPath();
    ctx.moveTo(i * t, 0);
    ctx.lineTo(i * t, s);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * t);
    ctx.lineTo(s, i * t);
    ctx.stroke();
  }
  grain(ctx, s, 14, 0.05);
}

function drawMetal(ctx, s) {
  ctx.fillStyle = '#5e666c';
  ctx.fillRect(0, 0, s, s);
  const grad = ctx.createLinearGradient(0, 0, s, s);
  grad.addColorStop(0, 'rgba(255,255,255,0.12)');
  grad.addColorStop(0.5, 'rgba(0,0,0,0.10)');
  grad.addColorStop(1, 'rgba(255,255,255,0.06)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
  // Brushed lines.
  ctx.strokeStyle = 'rgba(200,210,215,0.12)';
  for (let i = 0; i < 120; i++) {
    const y = Math.random() * s;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(s, y + (Math.random() - 0.5) * 3);
    ctx.stroke();
  }
  grain(ctx, s, 10, 0.03);
}

function drawPaintedSteel(ctx, s) {
  ctx.fillStyle = '#3b4a52';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 70; i++) {
    ctx.fillStyle = `rgba(${Math.random() > 0.5 ? '255,255,255' : '0,0,0'},${Math.random() * 0.05})`;
    ctx.fillRect(0, Math.random() * s, s, 1 + Math.random() * 6);
  }
  // Chipped rust.
  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = `rgba(120,62,32,${0.2 + Math.random() * 0.4})`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 5, 1 + Math.random() * 3);
  }
  grain(ctx, s, 10, 0.04);
}

function drawWood(ctx, s) {
  ctx.fillStyle = '#6b4a2e';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 40; i++) {
    const y = Math.random() * s;
    ctx.strokeStyle = `rgba(${40 + Math.random() * 50},${22 + Math.random() * 30},10,${0.2 + Math.random() * 0.4})`;
    ctx.lineWidth = 1 + Math.random() * 3;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(s * 0.35, y + (Math.random() - 0.5) * 12, s * 0.7, y + (Math.random() - 0.5) * 12, s, y);
    ctx.stroke();
  }
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'rgba(20,10,5,0.35)';
    ctx.beginPath();
    ctx.ellipse(Math.random() * s, Math.random() * s, 3 + Math.random() * 6, 2 + Math.random() * 3, Math.random(), 0, Math.PI * 2);
    ctx.fill();
  }
  grain(ctx, s, 12, 0.04);
}

function drawGravel(ctx, s) {
  ctx.fillStyle = '#3a3833';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 2600; i++) {
    const v = 40 + Math.random() * 70;
    ctx.fillStyle = `rgb(${v},${v - 2},${v - 4})`;
    ctx.beginPath();
    ctx.arc(Math.random() * s, Math.random() * s, 0.6 + Math.random() * 2.2, 0, Math.PI * 2);
    ctx.fill();
  }
  grain(ctx, s, 20, 0.05);
}

function drawBrick(ctx, s) {
  ctx.fillStyle = '#3a2220';
  ctx.fillRect(0, 0, s, s);
  const bh = 16;
  const bw = 32;
  for (let y = 0; y < s; y += bh) {
    const off = (y / bh) % 2 ? bw / 2 : 0;
    for (let x = -bw; x < s + bw; x += bw) {
      const v = 90 + Math.random() * 40;
      ctx.fillStyle = `rgb(${v + 35},${v - 12},${v - 24})`;
      ctx.fillRect(x + off + 2, y + 2, bw - 4, bh - 4);
    }
  }
  grain(ctx, s, 14, 0.05);
}

function drawRoof(ctx, s) {
  ctx.fillStyle = '#33383c';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 1600; i++) {
    const v = 50 + Math.random() * 40;
    ctx.fillStyle = `rgba(${v},${v + 2},${v + 4},0.5)`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 3, 1 + Math.random() * 3);
  }
  ctx.strokeStyle = 'rgba(15,18,20,0.55)';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, (s / 4) * i);
    ctx.lineTo(s, (s / 4) * i);
    ctx.stroke();
  }
  grain(ctx, s, 16, 0.05);
}

function drawWindows(ctx, s) {
  ctx.fillStyle = '#151b22';
  ctx.fillRect(0, 0, s, s);
  const cols = 6;
  const rows = 8;
  const w = s / cols;
  const h = s / rows;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const lit = Math.random() < 0.32;
      ctx.fillStyle = lit ? (Math.random() < 0.5 ? '#f2c977' : '#79c9e8') : '#0a0f14';
      ctx.fillRect(x * w + 4, y * h + 5, w - 8, h - 10);
      ctx.fillStyle = lit ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.04)';
      ctx.fillRect(x * w + 6, y * h + 7, w - 12, 3);
    }
  }
  ctx.strokeStyle = '#2b333a';
  ctx.lineWidth = 3;
  for (let x = 0; x <= cols; x++) {
    ctx.beginPath();
    ctx.moveTo(x * w, 0);
    ctx.lineTo(x * w, s);
    ctx.stroke();
  }
  for (let y = 0; y <= rows; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * h);
    ctx.lineTo(s, y * h);
    ctx.stroke();
  }
}

function drawVendingFront(ctx, s) {
  ctx.fillStyle = '#d9e3e6';
  ctx.fillRect(0, 0, s, s);
  ctx.fillStyle = '#23343d';
  ctx.fillRect(0, 0, s, 18);
  const colors = ['#e04b4b', '#efc84a', '#3e9ad6', '#63b86d', '#e58b3d', '#b56ad1'];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      ctx.fillStyle = colors[(row * 5 + col) % colors.length];
      ctx.fillRect(22 + col * 46, 44 + row * 48, 30, 34);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillRect(24 + col * 46, 46 + row * 48, 6, 30);
    }
  }
  ctx.fillStyle = '#18242a';
  ctx.fillRect(10, s - 34, s - 20, 18);
  ctx.fillStyle = '#8fffc3';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('DRINKS', 30, 30);
}

export function makeTextTexture(text, opts = {}) {
  const {
    width = 512, height = 128, bg = '#0c1116', color = '#e9f7ff',
    accent = '#20d6c7', font = 'bold 64px Arial', border = true, sub = ''
  } = opts;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (bg === 'transparent') {
    ctx.clearRect(0, 0, width, height);
  } else {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
  }
  if (border) {
    ctx.strokeStyle = accent;
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, width - 8, height - 8);
  }
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = accent;
  ctx.shadowBlur = 16;
  ctx.fillText(text, width / 2, sub ? height * 0.42 : height / 2);
  if (sub) {
    ctx.font = `bold ${Math.round(height * 0.18)}px Arial`;
    ctx.fillStyle = accent;
    ctx.fillText(sub, width / 2, height * 0.75);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function drawNeonStrip(ctx, s) {
  const grad = ctx.createLinearGradient(0, 0, 0, s);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.5, '#9ff7ff');
  grad.addColorStop(1, '#2bb6d8');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, Math.random() * s, s, 1 + Math.random() * 4);
  }
}

function drawLanternPaper(ctx, s) {
  ctx.fillStyle = '#e8c88a';
  ctx.fillRect(0, 0, s, s);
  ctx.strokeStyle = 'rgba(120,60,30,0.5)';
  ctx.lineWidth = 2;
  for (let y = 10; y < s; y += 18) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(s, y);
    ctx.stroke();
  }
  ctx.fillStyle = '#b83a2a';
  ctx.beginPath();
  ctx.arc(s / 2, s / 2, s * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

export function createMaterials(renderer) {
  const aniso = renderer ? Math.min(8, renderer.capabilities.getMaxAnisotropy()) : 4;
  const setAniso = (t) => { t.anisotropy = aniso; return t; };

  const texConcrete = setAniso(makeTexture(256, drawConcrete, 1, 1));
  const texConcreteDark = setAniso(makeTexture(256, drawConcrete, 1, 1));
  const texTiles = setAniso(makeTexture(256, drawTiles, 1, 1));
  const texPlatform = setAniso(makeTexture(256, drawPlatformTiles, 1, 1));
  const texAsphalt = setAniso(makeTexture(256, drawAsphalt, 1, 1));
  const texPavement = setAniso(makeTexture(256, drawPavement, 1, 1));
  const texMetal = setAniso(makeTexture(128, drawMetal, 1, 1));
  const texSteel = setAniso(makeTexture(128, drawPaintedSteel, 1, 1));
  const texWood = setAniso(makeTexture(128, drawWood, 1, 1));
  const texGravel = setAniso(makeTexture(128, drawGravel, 1, 1));
  const texBrick = setAniso(makeTexture(256, drawBrick, 1, 1));
  const texRoof = setAniso(makeTexture(128, drawRoof, 1, 1));
  const texWindows = setAniso(makeTexture(256, drawWindows, 1, 1));
  const texVending = setAniso(makeTexture(128, drawVendingFront, 1, 1));
  const texNeon = setAniso(makeTexture(64, drawNeonStrip, 1, 1));
  const texLantern = setAniso(makeTexture(64, drawLanternPaper, 1, 1));

  const std = (opts) => new THREE.MeshStandardMaterial(opts);

  const M = {
    concrete: std({ map: cloneRepeat(texConcrete, 6, 6), color: 0x9aa0a3, roughness: 0.95, metalness: 0.02 }),
    concreteDark: std({ map: cloneRepeat(texConcreteDark, 8, 8), color: 0x5d6468, roughness: 1.0, metalness: 0.02 }),
    concreteWall: std({ map: cloneRepeat(texConcrete, 4, 2), color: 0xa9b0b2, roughness: 0.92, metalness: 0.02 }),
    tileWall: std({ map: cloneRepeat(texTiles, 6, 3), color: 0xdfe7e9, roughness: 0.55, metalness: 0.03 }),
    tileFloor: std({ map: cloneRepeat(texTiles, 8, 8), color: 0xb9c2c4, roughness: 0.6, metalness: 0.03 }),
    platform: std({ map: cloneRepeat(texPlatform, 8, 4), color: 0xc2c8c8, roughness: 0.8 }),
    asphalt: std({ map: cloneRepeat(texAsphalt, 12, 8), color: 0x9ba0a4, roughness: 1.0 }),
    pavement: std({ map: cloneRepeat(texPavement, 10, 10), color: 0xb7bcb8, roughness: 0.95 }),
    metal: std({ map: cloneRepeat(texMetal, 2, 2), color: 0x889096, roughness: 0.38, metalness: 0.85 }),
    darkMetal: std({ map: cloneRepeat(texMetal, 2, 2), color: 0x3d454b, roughness: 0.5, metalness: 0.7 }),
    paintedSteel: std({ map: cloneRepeat(texSteel, 3, 2), color: 0x6f8390, roughness: 0.62, metalness: 0.45 }),
    greenSteel: std({ map: cloneRepeat(texSteel, 3, 2), color: 0x53705f, roughness: 0.6, metalness: 0.4 }),
    rustMetal: std({ map: cloneRepeat(texSteel, 3, 2), color: 0x7e5a3e, roughness: 0.85, metalness: 0.35 }),
    wood: std({ map: cloneRepeat(texWood, 3, 2), color: 0xc9a173, roughness: 0.8, metalness: 0.02 }),
    darkWood: std({ map: cloneRepeat(texWood, 3, 2), color: 0x6d523c, roughness: 0.85 }),
    gravel: std({ map: cloneRepeat(texGravel, 10, 20), color: 0xa7a39a, roughness: 1.0 }),
    brick: std({ map: cloneRepeat(texBrick, 6, 3), color: 0xb08c80, roughness: 0.95 }),
    roof: std({ map: cloneRepeat(texRoof, 6, 6), color: 0x8b9397, roughness: 0.9, metalness: 0.1 }),
    windowWall: std({ map: cloneRepeat(texWindows, 3, 2), color: 0xa0a7aa, roughness: 0.55, metalness: 0.2 }),
    glass: std({ color: 0x8fbec4, roughness: 0.08, metalness: 0.35, transparent: true, opacity: 0.32 }),
    darkGlass: std({ color: 0x0d1a22, roughness: 0.12, metalness: 0.6 }),
    plastic: std({ color: 0xd8dde0, roughness: 0.4, metalness: 0.05 }),
    darkPlastic: std({ color: 0x1a2226, roughness: 0.55 }),
    yellow: std({ color: 0xe8b932, roughness: 0.5, metalness: 0.1 }),
    white: std({ color: 0xe8eef0, roughness: 0.6 }),
    red: std({ color: 0xb5372f, roughness: 0.55 }),
    blue: std({ color: 0x2c6ea8, roughness: 0.5, metalness: 0.2 }),
    vending: std({ map: cloneRepeat(texVending, 1, 1), color: 0xeaf2f2, roughness: 0.35, metalness: 0.15 }),
    lantern: std({ map: texLantern, color: 0xffd6a0, emissive: 0xff7a35, emissiveIntensity: 1.2, roughness: 0.7 }),
    stone: std({ map: cloneRepeat(texConcrete, 4, 4), color: 0x8f938e, roughness: 0.95 }),
    rubber: std({ color: 0x14181a, roughness: 0.95 }),
    chrome: std({ color: 0xd5dde2, roughness: 0.16, metalness: 1.0 }),
    headlight: std({ color: 0xfff2cf, emissive: 0xffe8b0, emissiveIntensity: 3.0, roughness: 0.2 }),
    taillight: std({ color: 0xff4636, emissive: 0xff1a0a, emissiveIntensity: 2.2, roughness: 0.3 }),
    lampWarm: new THREE.MeshBasicMaterial({ color: 0xffd7a1 }),
    lampCool: new THREE.MeshBasicMaterial({ color: 0xdcf6ff }),
    neonCyan: new THREE.MeshBasicMaterial({ color: 0x3df0ff }),
    neonPink: new THREE.MeshBasicMaterial({ color: 0xff4fa3 }),
    neonYellow: new THREE.MeshBasicMaterial({ color: 0xffd23a }),
    neonGreen: new THREE.MeshBasicMaterial({ color: 0x8cff5a }),
    neonRed: new THREE.MeshBasicMaterial({ color: 0xff5a4a }),
    neonBlue: new THREE.MeshBasicMaterial({ color: 0x4a8dff }),
    neonTexture: new THREE.MeshStandardMaterial({ map: texNeon, emissive: 0xaef8ff, emissiveIntensity: 1.4, color: 0xbff6ff, roughness: 0.3 })
  };

  // Coloured paints reused by vehicles and shop fronts.
  M.carPaints = new Map();
  M.getCarPaint = (hex) => {
    if (!M.carPaints.has(hex)) {
      M.carPaints.set(hex, std({ color: hex, roughness: 0.28, metalness: 0.55 }));
    }
    return M.carPaints.get(hex);
  };

  M.tex = {
    concrete: texConcrete, concreteDark: texConcreteDark, tiles: texTiles, platform: texPlatform,
    asphalt: texAsphalt, pavement: texPavement, metal: texMetal, steel: texSteel, wood: texWood,
    gravel: texGravel, brick: texBrick, roof: texRoof, windows: texWindows, vending: texVending,
    neon: texNeon, lantern: texLantern
  };

  return M;
}
