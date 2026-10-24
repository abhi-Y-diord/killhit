# KillHit — Notes

- KillHit is a three.js FPS arena across the Neo-Kanto metro station and night city. The home screen uses a warm, flat operator layout with a live rotating 3D operator, selected weapon, player level/XP, daily quests, loadout, and settings.
- Match flow: PLAY → MATCH FOUND (~2 seconds) → 10:00 free-hunt match. There is no lobby, player list, or team screen.
- Ten hostile bots spawn across valid navigation points, patrol/idle until they see or hear the player, and keep respawning after each kill for the full match.
- Player death does not end the match. A “YOU WERE KILLED” overlay shows a 3-second countdown, then the player respawns away from living bots with full health, their selected loadout weapon, full ammo, and 2 seconds of spawn protection.
- Matches end automatically at 00:00. Results show kills, deaths, headshots, score, XP, quest progress, Play Again, and Main Menu.
- In-match HUD is intentionally minimal: crosshair, vitals, weapon/ammo, match timer, kills/score, kill feed, and enemy health bars. The hostiles panel, deaths counter, minimap, quest panel, weapon hints, scoreboard, and debug text were removed.
- Enemy health bars are always red, have no names or hostile labels, and sit compactly above each bot. Bots keep the red silhouette aura and depth-tested glow.
- FPS is hidden during play and only appears while F3 is held.
- Weapon code is split into `weapons.js` (stats/config), `gunModels.js` (PBR models, scopes/sights, hands/arms), `scope.js` (red-dot/iron/sniper overlays), and `gun.js` (input, ADS, firing, reload, HUD wiring). `effects.js` owns muzzle flash, smoke, casings, tracers, impacts, decals, and flash lighting.
- Four weapons: rifle (red dot), pistol (iron sights), shotgun (bead/iron, 8 pellets), and sniper (4× scope, 5-round magazine, heavy recoil). Models use rounded boxes, cylinders, extruded grip/stock profiles, rails, screws, ejection ports, magazines, charging handles, muzzle brakes, and generated roughness/wear maps. Static weapon and arm sections are merged by material to keep draw calls low.
- First-person view has gloved hands and sleeves on the grip/handguard, with idle sway, walking bob, recoil kick, reload dip, and weapon-draw animation.
- ADS: smooth gun centering, smooth FOV zoom, reduced mouse sensitivity, tighter spread, and the normal crosshair hides. Rifle shows a red-dot reticle; pistol/shotgun show a small iron-sight cross; sniper shows a dark circular 4× scope with thin crosshair, mil-dots, edge blur, and slow sway. Hold Shift while scoped to steady the sniper.
- Shooting: crossed additive muzzle flash + short point light, smoke puffs, falling/bouncing brass, glowing tracers, metal sparks vs concrete dust impacts, short-lived bullet-hole decals, and wall light flicker.
- Controls: WASD move, mouse look, click fire, right-click aim, R reload, 1/2/3/4 switch weapon, Shift hold breath while scoped (it no longer sprints while aiming), M mute, F3 hold for FPS, Esc pause. Pointer lock is best-effort; click the capture hint if the browser blocks it.
- Profile data is stored under `killhit_profile_v1` with daily reset. Dev build: `npm run build` (Vite).
