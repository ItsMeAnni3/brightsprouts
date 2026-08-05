// BrightSprouts Academy — Sprout's Castle Quest.
// An arithmetic adventure: Sprout explores four rooms of a castle, each guarded by a locked door
// that only opens after 3 correct answers in that room's operation (+, -, x, /), then meets the
// castle's lonely one-eyed guardian for a final mixed round. Nobody "fights": the guardian is
// grumpy from being alone, not evil, and cheers up once Sprout solves the last puzzles together.
// All art is hand-drawn SVG (viewBox 0 0 320 220), composed on the fly, same convention as
// js/plant-game.js. Interaction/state lives in js/app.js (App.castle*), this file is pure
// data + drawing, so it can be unit-checked without any DOM.

const CASTLE_TIERS = [
  { key: 0, name: "Sprout Steps",     grades: "Kindergarten – Grade 1", emoji: "🌱" },
  { key: 1, name: "Squire Trail",     grades: "Grades 2 – 3",            emoji: "🗝️" },
  { key: 2, name: "Knight's Path",    grades: "Grades 4 – 6",            emoji: "🛡️" },
  { key: 3, name: "Champion's Climb", grades: "Grades 7 – 12",           emoji: "👑" }
];

const CASTLE_ROOMS = [
  { key: "add", op: "+", sym: "+", name: "Adding Armory",       accent: "#c9a227", blurb: "Push the numbers together to open the gate." },
  { key: "sub", op: "-", sym: "−", name: "Subtraction Stairs", accent: "#1f6feb", blurb: "Take steps away to see what's left." },
  { key: "mul", op: "*", sym: "×", name: "Multiplication Maze", accent: "#237a35", blurb: "Group the torches to light the way through." },
  { key: "div", op: "/", sym: "÷", name: "Division Dungeon",    accent: "#8a5f2e", blurb: "Share the gems fairly to unlock the cell." }
];
const CASTLE_NEED = 3;    // correct answers per room to open its door
const CASTLE_BOSS_N = 4;  // mixed questions to befriend the guardian

// Number ranges per operation, one range per tier (0=Sprout Steps .. 3=Champion's Climb).
// Division is always built from a clean multiplication, so answers are exact.
const CASTLE_RANGES = {
  "+": [[1, 10], [10, 50], [25, 200], [100, 900]],
  "-": [[5, 15], [20, 80], [50, 300], [200, 999]],
  "*": [[1, 5], [2, 9], [3, 12], [6, 20]],
  "/": [[1, 5], [2, 9], [3, 12], [4, 15]]
};

function castleProblem(op, tier) {
  const r = CASTLE_RANGES[op][tier];
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  let x, y, a;
  if (op === "+") { x = R(r[0], r[1]); y = R(r[0], r[1]); a = x + y; }
  else if (op === "-") { x = R(r[0], r[1]); const maxY = Math.max(1, x - 1); y = R(1, maxY); a = x - y; }
  else if (op === "*") { x = R(r[0], r[1]); y = R(r[0], r[1]); a = x * y; }
  else { const d = R(r[0], r[1]), q = R(r[0], r[1]); x = d * q; y = d; a = q; }
  return { x, y, op, a };
}
// A random operation, for the boss's mixed round.
function castleBossProblem(tier) {
  const op = pick(["+", "-", "*", "/"]);
  return castleProblem(op, tier);
}
function castleOptions(a) {
  const opts = new Set([a]);
  let guard = 0;
  while (opts.size < 4 && guard < 60) {
    guard++;
    const spread = Math.max(2, Math.round(Math.abs(a) * 0.25) + 2);
    const d = a + (rand(2) ? 1 : -1) * (1 + rand(spread));
    if (d >= 0 && d !== a) opts.add(d);
  }
  let filler = a + 1;
  while (opts.size < 4) { if (!opts.has(filler)) opts.add(filler); filler++; }
  return shuffleArr([...opts]);
}
function castleOpSymbol(op) { return (CASTLE_ROOMS.find((r) => r.op === op) || {}).sym || op; }

// ---------- drawing ----------
function cqWall(accent) {
  return `<defs>
    <pattern id="cq-bricks" width="30" height="16" patternUnits="userSpaceOnUse">
      <rect width="30" height="16" fill="#4a4160"/>
      <rect width="14" height="7" x="1" y="1" fill="#57506f" rx="1.5"/>
      <rect width="14" height="7" x="16" y="1" fill="#57506f" rx="1.5"/>
      <rect width="14" height="7" x="8" y="9" fill="#57506f" rx="1.5"/>
      <rect width="6" height="7" x="-3" y="9" fill="#57506f" rx="1.5"/>
      <rect width="6" height="7" x="25" y="9" fill="#57506f" rx="1.5"/>
    </pattern>
    <linearGradient id="cq-floorgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a3350"/><stop offset="1" stop-color="#2b2640"/>
    </linearGradient>
  </defs>
  <rect width="320" height="220" fill="url(#cq-bricks)"/>
  <rect y="168" width="320" height="52" fill="url(#cq-floorgrad)"/>
  <rect y="168" width="320" height="4" fill="${accent}" opacity=".55"/>`;
}
function cqTorch(x) {
  return `<g class="cq-torch">
    <rect x="${x - 3}" y="26" width="6" height="26" rx="2" fill="#5c4a33"/>
    <rect x="${x - 7}" y="18" width="14" height="10" rx="3" fill="#3a2f22"/>
    <g class="cq-flame" style="transform-origin:${x}px 16px">
      <path d="M${x} 4 q9 8 3 17 q-3 4 -3 6 q0 -2 -3 -6 q-6 -9 3 -17 z" fill="#ff9f43"/>
      <path d="M${x} 9 q5 6 2 11 q-2 3 -2 4 q0 -1 -2 -4 q-3 -5 2 -11 z" fill="#ffd166"/>
    </g>
  </g>`;
}
function cqRune(op, accent) {
  const sym = castleOpSymbol(op);
  return `<text x="160" y="205" text-anchor="middle" font-size="30" font-weight="900"
    fill="${accent}" opacity=".28" font-family="Fredoka, Verdana, sans-serif">${sym}</text>`;
}
function cqDoor(need, filled, accent) {
  const unlocked = filled >= need;
  const dots = Array.from({ length: need }, (_, i) =>
    `<circle cx="${272 + i * 15}" cy="30" r="5.5" fill="${i < filled ? accent : "#241f36"}" stroke="#0f0c1a" stroke-width="1.4"/>`).join("");
  return `<g class="cq-door${unlocked ? " cq-open" : ""}" style="transform-origin:296px 168px">
      <rect x="272" y="70" width="48" height="98" rx="4" fill="${unlocked ? accent : "#241f36"}" stroke="#120f1f" stroke-width="2.5"/>
      <rect x="279" y="78" width="34" height="82" rx="3" fill="${unlocked ? "#fff4d6" : "#3a3350"}" opacity="${unlocked ? ".9" : ".5"}"/>
      <circle cx="284" cy="122" r="3" fill="${unlocked ? accent : "#7a7196"}"/>
    </g>
    ${dots}`;
}
// Sprout, standing (adapted from js/welcome-sprout.js so the same character appears everywhere).
// Position lives on the OUTER group's plain SVG attribute; the bob/pop animation classes live on
// the INNER group. A CSS "transform" animation on an element replaces its "transform" attribute
// rather than composing with it, so animating the same group that carries translate(x,y) snaps it
// back to the SVG's local origin -- splitting position from animation into two nested groups avoids that.
function cqSprout(x, y, cheer) {
  const armL = cheer ? "M-26 -2 q-9 -16 -3 -26" : "M-26 -2 q-10 6 -9 18";
  const armR = cheer ? "M26 -2 q9 -16 3 -26" : "M26 -2 q10 6 9 18";
  return `<g transform="translate(${x} ${y})"><g class="cq-sprout${cheer ? " cq-cheer" : ""}">
    <ellipse cx="0" cy="60" rx="26" ry="5" fill="rgba(15,10,25,.35)"/>
    <rect x="-9" y="21" width="8" height="22" rx="4" fill="#49ad5c"/><ellipse cx="-6" cy="45" rx="7" ry="4.5" fill="#3d9950"/>
    <rect x="1" y="21" width="8" height="22" rx="4" fill="#49ad5c"/><ellipse cx="6" cy="45" rx="7" ry="4.5" fill="#3d9950"/>
    <path d="${armL}" stroke="#49ad5c" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="${armR}" stroke="#49ad5c" stroke-width="7" stroke-linecap="round" fill="none"/>
    <ellipse cx="0" cy="0" rx="27" ry="26" fill="#69cc7c"/>
    <ellipse cx="0" cy="9" rx="16" ry="12" fill="#a6ecb4" opacity=".55"/>
    <circle cx="-13" cy="6" r="4.4" fill="#ff9db0" opacity=".9"/><circle cx="13" cy="6" r="4.4" fill="#ff9db0" opacity=".9"/>
    <ellipse cx="-9" cy="-4" rx="4" ry="4.8" fill="#2d2a4a"/><ellipse cx="9" cy="-4" rx="4" ry="4.8" fill="#2d2a4a"/>
    <circle cx="-7.6" cy="-6" r="1.4" fill="#fff"/><circle cx="10.4" cy="-6" r="1.4" fill="#fff"/>
    <path d="M-9 8 q9 8 18 0" stroke="#2d2a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <path d="M0 -25 q0 -9 0 -14" stroke="#54b866" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M0 -35 q-15 -4 -20 -17 q13 -1 20 12 z" fill="#7ed957"/>
    <path d="M0 -35 q15 -4 20 -17 q-13 -1 -20 12 z" fill="#66c778"/>
  </g></g>`;
}
function castleRoomScene(room, filled) {
  return `${cqWall(room.accent)}${cqTorch(40)}${cqTorch(200)}${cqRune(room.op, room.accent)}
    ${cqSprout(90, 160, false)}
    ${cqDoor(CASTLE_NEED, filled, room.accent)}`;
}
// The one-eyed castle guardian. mood: "grumpy" (default) or "happy" (after the boss round).
function cqMonster(mood, x, y) {
  const happy = mood === "happy";
  const body = happy ? "#8f7bd6" : "#5d5480";
  const bodyDk = happy ? "#6b57b8" : "#463f63";
  const browL = happy ? `M-16 -30 q10 -4 18 1` : `M-18 -22 q10 -10 20 -3`;
  const browR = happy ? `M16 -30 q-10 -4 -18 1` : `M18 -22 q-10 -10 -20 -3`;
  const mouth = happy ? `M-14 20 q14 14 28 0` : `M-12 24 q12 -8 24 0`;
  const sparkle = happy ? `<g class="cq-sparkle"><text x="-46" y="-40" font-size="16">✨</text><text x="34" y="-46" font-size="14">✨</text><text x="0" y="-58" font-size="14">💜</text></g>` : "";
  return `<g transform="translate(${x} ${y})"><g class="cq-monster${happy ? " cq-happy" : " cq-grumpy"}">
    ${sparkle}
    <ellipse cx="0" cy="78" rx="46" ry="8" fill="rgba(15,10,25,.35)"/>
    <path d="M-38 10 q-6 40 20 54 q18 8 36 0 q26 -14 20 -54 q-4 -34 -38 -34 q-34 0 -38 34 z" fill="${body}" stroke="${bodyDk}" stroke-width="3"/>
    <path d="M-14 -40 q4 -14 -2 -20 q10 2 12 16 z" fill="${bodyDk}"/>
    <path d="M14 -40 q-4 -14 2 -20 q-10 2 -12 16 z" fill="${bodyDk}"/>
    <circle cx="0" cy="-2" r="20" fill="#fff4d6" stroke="${bodyDk}" stroke-width="2.4"/>
    <circle cx="0" cy="-2" r="11" fill="${happy ? "#3fa34d" : "#5b3fa0"}"/>
    <circle cx="0" cy="-2" r="5.5" fill="#150f22"/>
    <circle cx="-2.4" cy="-4.4" r="2" fill="#fff"/>
    <path d="${browL}" stroke="${bodyDk}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="${browR}" stroke="${bodyDk}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="${mouth}" stroke="#2d2140" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${happy ? `<circle cx="-20" cy="14" r="5" fill="#ff9db0" opacity=".8"/><circle cx="20" cy="14" r="5" fill="#ff9db0" opacity=".8"/>` : ""}
    <path d="M-34 42 q-10 8 -8 20" stroke="${bodyDk}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M34 42 q10 8 8 20" stroke="${bodyDk}" stroke-width="7" fill="none" stroke-linecap="round"/>
  </g></g>`;
}
function castleBossScene(mood) {
  return `${cqWall("#7c5cbf")}
    <rect x="128" y="4" width="64" height="70" rx="32" fill="#241f36" opacity=".7"/>
    <rect x="140" y="14" width="40" height="50" rx="20" fill="#7c5cbf" opacity=".35"/>
    ${cqSprout(64, 168, mood === "happy")}
    ${cqMonster(mood, 210, 108)}`;
}
