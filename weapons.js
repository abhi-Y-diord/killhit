// Weapon definitions shared by the game, HUD and loadout preview.
// Positions are in camera space; barrels point toward -Z.
export const WEAPONS = [
  {
    id: 'rifle',
    name: 'RIFLE',
    type: 'ASSAULT',
    magSize: 30,
    reloadTime: 1.8,
    fireRate: 10,
    damageBody: 20,
    damageHead: 40,
    pellets: 1,
    spread: 0.004,
    zoomFactor: 1.8,
    zoomSensitivity: 0.42,
    position: [0.28, -0.22, -0.82],
    recoilKick: 0.065,
    recoilRot: 0.035,
    flashScale: 1,
    shellSize: 1
  },
  {
    id: 'pistol',
    name: 'PISTOL',
    type: 'SIDEARM',
    magSize: 12,
    reloadTime: 1.2,
    fireRate: 4,
    damageBody: 12,
    damageHead: 24,
    pellets: 1,
    spread: 0.006,
    zoomFactor: 1.4,
    zoomSensitivity: 0.55,
    position: [0.27, -0.21, -0.56],
    recoilKick: 0.05,
    recoilRot: 0.045,
    flashScale: 0.75,
    shellSize: 0.85
  },
  {
    id: 'shotgun',
    name: 'SHOTGUN',
    type: 'BREACH',
    magSize: 6,
    reloadTime: 2.2,
    fireRate: 1.3,
    damageBody: 10,
    damageHead: 20,
    pellets: 8,
    spread: 0.055,
    zoomFactor: 1.15,
    zoomSensitivity: 0.62,
    position: [0.3, -0.22, -0.85],
    recoilKick: 0.12,
    recoilRot: 0.08,
    flashScale: 1.3,
    shellSize: 1.15
  },
  {
    id: 'sniper',
    name: 'SNIPER',
    type: 'PRECISION',
    magSize: 5,
    reloadTime: 2.7,
    fireRate: 0.8,
    damageBody: 85,
    damageHead: 170,
    pellets: 1,
    spread: 0.0015,
    zoomFactor: 4.0,
    zoomSensitivity: 0.16,
    position: [0.3, -0.24, -0.9],
    recoilKick: 0.18,
    recoilRot: 0.16,
    flashScale: 1.45,
    shellSize: 1.35
  }
];

export function weaponById(id) {
  return WEAPONS.find(weapon => weapon.id === id) || WEAPONS[0];
}
