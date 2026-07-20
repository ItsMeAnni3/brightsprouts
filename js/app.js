// ============================================================
// BrightSprouts Academy — application engine
// Accounts are stored in the browser (localStorage) for this
// starter version. See README.md for upgrading to a real
// backend + Stripe payments when you're ready to launch.
// ============================================================

const SUBJECTS = [
  { key: "math",       label: "Math",       emoji: "🔢" },
  { key: "reading",    label: "Reading",    emoji: "📖" },
  { key: "vocabulary", label: "Vocabulary", emoji: "🦋" },
  { key: "spelling",   label: "Spelling",   emoji: "🐝" },
  { key: "writing",    label: "Writing",    emoji: "✍️" },
  { key: "science",    label: "Science",    emoji: "🔬" },
  { key: "history",    label: "History",    emoji: "🏛️" },
  { key: "art",        label: "Visual Art", emoji: "🎨" },
  { key: "music",      label: "Music",      emoji: "🎵" }
];
const K_SUBJECTS = [
  { key: "alphabet", label: "Alphabet",      emoji: "🔤" },
  { key: "counting", label: "Counting",      emoji: "💯" },
  { key: "shapes",   label: "Shapes",        emoji: "🔷" },
  { key: "animals",  label: "Animals",       emoji: "🐶" },
  { key: "fruits",   label: "Food",          emoji: "🍎" },
  { key: "things",   label: "Toys & Things", emoji: "🧸" }
];
const GEN_SUBJECTS = [
  { key: "geography",  label: "Geography",     emoji: "🌍" },
  { key: "florafauna", label: "Flora & Fauna", emoji: "🌿" }
];
const BOOK_SUBJECTS = [
  { key: "readnow", label: "Read Online", emoji: "📖" }
];
const ADD_SUBJECTS = [
  { key: "periodic", label: "Periodic Table",  emoji: "⚗️" },
  { key: "abacus",   label: "Abacus",          emoji: "🧮" },
  { key: "formulas", label: "Formulas",        emoji: "📐" },
  { key: "tables",   label: "Maths Tables",    emoji: "🔢" },
  { key: "tracing",  label: "Tracing",         emoji: "✏️" },
  { key: "coloring", label: "Colouring Book",  emoji: "🖍️" }
];
const MAKE_SUBJECTS = [{ key: "create", label: "Creature Maker", emoji: "🎨" }, { key: "engineer", label: "Build It!", emoji: "🔧" }];
const ENG_SUBJECTS = [
  { key: "engplan",      label: "The Plan",  emoji: "🗺️" },
  { key: "engreading",   label: "Reading",   emoji: "📖" },
  { key: "engwriting",   label: "Writing",   emoji: "✍️" },
  { key: "engspeaking",  label: "Speaking",  emoji: "🎤" },
  { key: "englistening", label: "Listening", emoji: "👂" }
];
const CS_SUBJECTS = [
  { key: "csplan", label: "The Plan",     emoji: "🗺️" },
  { key: "cs12",   label: "Grades 1–2",   emoji: "🧩" },
  { key: "cs35",   label: "Grades 3–5",   emoji: "🧱" },
  { key: "cs68",   label: "Grades 6–8",   emoji: "🔢" },
  { key: "cs912",  label: "Grades 9–12",  emoji: "🐍" }
];
// Extra subjects added to every Grade 1–12 tab bar (content matched to the grade's level).
const GRADE_EXTRA = [
  { key: "compsci",  label: "Computer Science", emoji: "💻" },
  { key: "english",  label: "English",          emoji: "🗣️" },
  { key: "books",    label: "Books",            emoji: "📚" }
];
// The creative tools appear only in the younger grades (1–6).
const CREATE_SUBJECTS_INLINE = [
  { key: "create",   label: "Creature Maker",   emoji: "🎨" },
  { key: "engineer", label: "Build It!",        emoji: "🔧" }
];
// Biology is a dedicated life-science subject from Grade 6 up (placed right after Science).
const BIO_SUBJECT = { key: "biology", label: "Biology", emoji: "🧬" };
// Chemistry runs from Grade 9 up (placed right after Biology).
const CHEM_SUBJECT = { key: "chemistry", label: "Chemistry", emoji: "⚗️" };
// Physics runs from Grade 9 up (placed right after Chemistry).
const PHYS_SUBJECT = { key: "physics", label: "Physics", emoji: "⚛️" };
// Geology (category 20): basic earth science for grade-schoolers — a standalone tile.
const GEO_SUBJECTS = [
  { key: "rocks",   label: "Rocks & Minerals", emoji: "🪨" },
  { key: "cycle",   label: "The Rock Cycle",   emoji: "🔁" },
  { key: "earth",   label: "Inside the Earth", emoji: "🌋" },
  { key: "fossils", label: "Fossils & Gems",   emoji: "💎" }
];
// Learn Spanish (category 21): basic Spanish for grade-schoolers — a standalone tile.
const SPANISH_SUBJECTS = [
  { key: "greetings", label: "Greetings & Manners", emoji: "👋" },
  { key: "numbers",   label: "Numbers 1–10",        emoji: "🔢" },
  { key: "colours",   label: "Colours",             emoji: "🌈" },
  { key: "family",    label: "Family",              emoji: "👨‍👩‍👧" },
  { key: "animals",   label: "Animals",             emoji: "🐶" }
];
function subjectsFor(g) {
  if (g === 0) return K_SUBJECTS;
  if (g === 13) return GEN_SUBJECTS;
  if (g === 14) return ADD_SUBJECTS;
  if (g === 15) return BOOK_SUBJECTS;
  if (g === 16) return MAKE_SUBJECTS;
  if (g === 17) return CS_SUBJECTS;
  if (g === 18) return ENG_SUBJECTS;
  if (g === 19) return HIST_SUBJECTS;
  if (g === 20) return GEO_SUBJECTS;
  if (g === 21) return SPANISH_SUBJECTS;
  // Grades 1–12: core subjects (+ Biology after Science from Grade 6) + folded-in extras
  // (+ the creative tools in Grades 1–6 only).
  let core = SUBJECTS.slice();
  if (g >= 6) {
    const i = core.findIndex(s => s.key === "science") + 1;
    core.splice(i, 0, BIO_SUBJECT);
  }
  if (g >= 9) {
    const j = core.findIndex(s => s.key === "biology") + 1;      // Chemistry right after Biology
    core.splice(j, 0, CHEM_SUBJECT);
    const k = core.findIndex(s => s.key === "chemistry") + 1;    // Physics right after Chemistry
    core.splice(k, 0, PHYS_SUBJECT);
  }
  let subs = core.concat(GRADE_EXTRA);
  if (g <= 6) subs = subs.concat(CREATE_SUBJECTS_INLINE);
  return subs;
}
function gradeName(g) {
  if (g === 0) return "Kindergarten";
  if (g === 13) return "General Knowledge";
  if (g === 14) return "Additional Learning Material";
  if (g === 15) return "Books";
  if (g === 16) return "Create";
  if (g === 17) return "Computer Science";
  if (g === 18) return "The English Language";
  if (g === 19) return "Historical Eras";
  if (g === 20) return "Geology";
  if (g === 21) return "Learn Spanish";
  return "Grade " + g;
}
// Build the creature SVG from the chosen parts. Order matters: back to front.
function mmSvg(m, forExport) {
  const c = MM_COLORS[m.colour];
  const call = (tbl, key) => (tbl[key] ? tbl[key](c) : "");
  return `
    <g class="mm-layer mm-back">${MM_SCENES[m.scene]}</g>
    <g class="mm-layer mm-char">
      <g class="${forExport ? "" : "mm-breathe"}">
        ${call(MM_WINGS, m.wings)}
        ${call(MM_TAILS, m.tail)}
        ${call(MM_BODIES, m.body)}
        ${call(MM_EXTRAS, m.extra === "cape" ? "cape" : "none")}
        ${call(MM_HEADS, m.head)}
        ${call(MM_TOPS, m.top)}
        ${call(MM_EYES, m.eyes)}
        ${call(MM_MOUTHS, m.mouth)}
        ${m.extra !== "cape" ? call(MM_EXTRAS, m.extra) : ""}
      </g>
    </g>
    <g class="mm-layer mm-front">
      <g class="mm-tw"><path d="M26 60 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" fill="#ffd166"/></g>
      <g class="mm-tw" style="animation-delay:.9s"><path d="M176 78 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" fill="#fff"/></g>
      <g class="mm-tw" style="animation-delay:1.7s"><path d="M164 154 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ff6b9d"/></g>
    </g>`;
}
function doodle(key, cls) {
  const d = (typeof BOOK_DOODLES !== "undefined") ? BOOK_DOODLES[key] : null;
  return d ? `<svg class="doodle ${cls || ""}" viewBox="0 0 88 88" aria-hidden="true">${d}</svg>` : "";
}
function flagImg(iso, size) { return `<img class="flagimg" src="https://flagcdn.com/w${size || 40}/${iso}.png" alt="flag" loading="lazy">`; }
// species entries are [common name, scientific name]
function spImgSrc(sci) { return (typeof SPECIES_IMG !== "undefined") ? SPECIES_IMG[sci] : null; }
function spChip(sp) {
  const [name, sci] = sp, src = spImgSrc(sci);
  return `<span class="spchip" title="${esc(sci)}">${src ? `<img src="${src}" alt="${esc(name)}" loading="lazy">` : ""}<span class="spname">${esc(name)}<i>${esc(sci)}</i></span></span>`;
}
function spPhoto(sci, big) {
  const src = spImgSrc(sci);
  return src ? `<img class="spphoto${big ? " big" : ""}" src="${src}" alt="species photo" loading="lazy">` : "";
}

const THEME_LABELS = {
  adventure: "🗺️ Adventures",
  strangers: "🤝 Helping Strangers",
  home:      "🏠 Helping at Home"
};

// ---------- Free vs Premium rules (your monetization!) ----------
// Books (15) are free for everyone: the reading library is the best thing we can give away,
// and a family that reads here is a family that subscribes later.
const RULES = {
  guest:   { grades: [0, 1, 15, 16],    stories: 3,  custom: 0 },
  free:    { grades: [0, 1, 2, 15, 16], stories: 10, custom: 2 },
  premium: { grades: "all",  stories: "all", custom: "all" }
};
const PRICE = "$9.99";
const TAX_NOTE = "Plus sales tax based on your state, calculated at checkout.";
// Paste your Stripe Payment Link between the quotes to switch from demo checkout to real payments.
// In Stripe, set the link's after-payment redirect to: https://brightsprouts.academy/#payment-success
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/9B6dR9f5Mfta6o4f9q3gk04";

// ---- Shop checkout ----
// To take real cart payments, deploy the tiny checkout function (see server/README.md) and paste
// its public URL here. Until then, the cart works fully and checkout shows a friendly setup note.
// NEVER put your Stripe SECRET key in this file — it lives only on the server.
const CHECKOUT_ENDPOINT = "";

// ---- Family codes ----
// Codes that unlock Premium for free (for family & friends). We store the SHA-256 HASH of each
// code, never the code itself, so the actual code can't be read by viewing the page source.
// The code is checked case-insensitively and ignores spaces/dashes.
// To add or change a code: hash the normalized code (uppercase, letters+digits only) with SHA-256
// and put the hex here. (The plaintext code is deliberately kept out of this file.)
const FAMILY_CODE_HASHES = ["c278d76277555dccb5c8766098d82c57fb6f5b21a665211328ae609db3894519"];
function normalizeCode(raw) { return (raw || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }
async function isFamilyCode(raw) {
  const norm = normalizeCode(raw);
  if (!norm || !window.crypto || !crypto.subtle) return false;
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(norm));
    const hex = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
    return FAMILY_CODE_HASHES.includes(hex);
  } catch (e) { return false; }
}
// Redeem a code for the currently logged-in user. Returns true if it unlocked Premium.
async function redeemFamilyCode(raw) {
  const u = currentUser();
  if (!u) return false;
  if (!(await isFamilyCode(raw))) return false;
  u.plan = "premium";
  u.familyCode = true;
  saveCurrentUser(u);
  return true;
}

// ---- Contact form ----
// Paste the Web3Forms access key (emailed to you from web3forms.com) between the quotes and
// messages post straight to your inbox — the key stands in for your address, so the form itself
// never carries it. While the key is empty, Send falls back to opening the visitor's own email app.
// See README.md.
const CONTACT_ACCESS_KEY = "8a53ecc1-cc59-4aa7-9edb-274d34222ad7";
const CONTACT_ENDPOINT = "https://api.web3forms.com/submit";
// Only used for the mailto fallback and the "if all else fails, write to us" message. Assembled at
// runtime rather than written out whole, so the plain address isn't sitting in the file for
// scrapers to lift. It's a speed bump, not a lock — anyone determined can still read it.
const CONTACT_EMAIL = ["ana.d.malone", "outlook.com"].join("@");
const CONTACT_TOPICS = ["A question about the lessons", "Feedback or a suggestion",
  "I found a mistake in the content", "Something isn't working", "Billing or my subscription", "Something else"];

// ---------- State ----------
const state = {
  view: "home", grade: 1, subject: "math",
  storyFilter: "all", currentStory: null,
  authMode: "signup", authMsg: "", authOk: "",
  sheetCache: {}, madeStory: null,
  colorTheme: "all", colorBig: false, colorPick: null,
  contactForm: {}, contactErr: {}, contactMsg: "", contactSent: null,
  traceMode: "upper", tracePick: null,
  reading: null, readFont: 18,
  maker: null,
  game: { plant: null, stage: 0, water: 0, sun: 0 }
};

// ---------- Storage helpers ----------
function loadUsers() { try { return JSON.parse(localStorage.getItem("bs_users")) || {}; } catch (e) { return {}; } }
function saveUsers(u) { localStorage.setItem("bs_users", JSON.stringify(u)); }
function currentUser() {
  const email = localStorage.getItem("bs_session");
  if (!email) return null;
  return loadUsers()[email] || null;
}
function saveCurrentUser(user) {
  const users = loadUsers();
  users[user.email] = user;
  saveUsers(users);
}
function tier() {
  const u = currentUser();
  return u ? (u.plan === "premium" ? "premium" : "free") : "guest";
}
function hashPw(pw) { // simple obfuscation for the demo — replace with real auth before launch
  let h = 5381;
  for (let i = 0; i < pw.length; i++) h = ((h << 5) + h + pw.charCodeAt(i)) >>> 0;
  return "h" + h.toString(36);
}

// ---------- Access checks ----------
function canGrade(g) {
  const r = RULES[tier()];
  return r.grades === "all" || r.grades.includes(g);
}
// Books are free in every grade, even premium ones — the reading library is our best giveaway.
const FREE_SUBJECTS = ["books"];
function canSubject(g, subj) { return canGrade(g) || FREE_SUBJECTS.includes(subj); }
function canStory(id) {
  const r = RULES[tier()];
  return r.stories === "all" || id <= r.stories;
}
function customLeft() {
  const r = RULES[tier()];
  if (r.custom === "all") return Infinity;
  const u = currentUser();
  const used = u ? (u.customCount || 0) : 0;
  return Math.max(0, r.custom - used);
}

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function gcd(a, b) { return b ? gcd(b, a % b) : a; }
function rand(n) { return Math.floor(Math.random() * n); }
function pick(arr) { return arr[rand(arr.length)]; }

// ============================================================
// MATH WORKSHEET GENERATOR — fresh problems every time!
// ============================================================
function genMath(grade) {
  const qs = [];
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  for (let i = 0; i < 10; i++) {
    let q, a;
    switch (grade) {
      case 1: {
        if (i % 2 === 0) { const x = R(1, 10), y = R(1, 10); q = `${x} + ${y} = ____`; a = x + y; }
        else { const x = R(5, 15), y = R(1, x - 1); q = `${x} − ${y} = ____`; a = x - y; }
        break;
      }
      case 2: {
        if (i % 2 === 0) { const x = R(10, 60), y = R(10, 39); q = `${x} + ${y} = ____`; a = x + y; }
        else { const x = R(40, 99), y = R(10, 35); q = `${x} − ${y} = ____`; a = x - y; }
        break;
      }
      case 3: {
        if (i % 3 === 2) { const y = R(2, 9), ans = R(2, 9); q = `${y * ans} ÷ ${y} = ____`; a = ans; }
        else { const x = R(2, 10), y = R(2, 10); q = `${x} × ${y} = ____`; a = x * y; }
        break;
      }
      case 4: {
        if (i % 3 === 0) { const x = R(12, 99), y = R(3, 9); q = `${x} × ${y} = ____`; a = x * y; }
        else if (i % 3 === 1) { const y = R(3, 9), ans = R(11, 40); q = `${y * ans} ÷ ${y} = ____`; a = ans; }
        else { const d = R(3, 8), n = R(1, d - 1); q = `What fraction is shaded if ${n} out of ${d} equal parts are colored? ____`; a = `${n}/${d}`; }
        break;
      }
      case 5: {
        if (i % 3 === 0) { const d = R(4, 12), n1 = R(1, d - 2), n2 = R(1, d - n1 - 1); q = `${n1}/${d} + ${n2}/${d} = ____`; a = `${n1 + n2}/${d}`; }
        else if (i % 3 === 1) { const x = (R(10, 89) / 10), y = (R(10, 89) / 10); q = `${x.toFixed(1)} + ${y.toFixed(1)} = ____`; a = (x + y).toFixed(1); }
        else { const x = R(2, 12), y = R(2, 12); q = `${x} × ${y} = ____`; a = x * y; }
        break;
      }
      case 6: {
        // (p * n) / 100 keeps the arithmetic exact — (p / 100) * n rounds twice and prints 7.6000000000000005
        if (i % 3 === 0) { const p = pick([10, 20, 25, 50, 75]), n = R(2, 20) * 4; q = `Find ${p}% of ${n}. ____`; a = (p * n) / 100; }
        else if (i % 3 === 1) {
          // reduce x:y to lowest terms first, or the "simplified" answer key isn't simplified (8:8 -> 4:4)
          let x = R(2, 9), y = R(2, 9);
          const d = gcd(x, y); x /= d; y /= d;
          const k = R(2, 6);
          q = `Simplify the ratio ${x * k}:${y * k} = ____`; a = `${x}:${y}`;
        }
        else { const m = R(2, 6) * 30, h = pick([2, 3, 5]); q = `A car travels ${m * h} miles in ${h} hours. What is its speed in miles per hour? ____`; a = m; }
        break;
      }
      case 7: {
        if (i % 3 === 0) { const x = R(-12, 12), y = R(-12, 12); q = `${x} + (${y}) = ____`; a = x + y; }
        else if (i % 3 === 1) { const x = R(-9, 9) || 3, y = R(-9, 9) || -4; q = `${x} × (${y}) = ____`; a = x * y; }
        else { const s = R(2, 12), b = R(1, 15); q = `Solve for x:  x + ${b} = ${s + b}`; a = `x = ${s}`; }
        break;
      }
      case 8: {
        if (i % 3 === 0) { const m = R(2, 9), x = R(2, 9), b = R(1, 12); q = `Solve for x:  ${m}x + ${b} = ${m * x + b}`; a = `x = ${x}`; }
        else if (i % 3 === 1) { const x1 = R(0, 5), y1 = R(0, 5), m = R(1, 4), dx = R(1, 4); q = `Find the slope between (${x1}, ${y1}) and (${x1 + dx}, ${y1 + m * dx}). ____`; a = m; }
        else { const m = R(2, 6), b = R(1, 9), x = R(2, 8); q = `If f(x) = ${m}x + ${b}, find f(${x}). ____`; a = m * x + b; }
        break;
      }
      case 9: {
        if (i % 3 === 0) { const p = R(1, 8), r = R(1, 8); q = `Expand: (x + ${p})(x + ${r}) = ____`; a = `x² + ${p + r}x + ${p * r}`; }
        else if (i % 3 === 1) { const p = R(1, 8), r = R(1, 8); q = `Factor: x² + ${p + r}x + ${p * r} = ____`; a = `(x + ${p})(x + ${r})`; }
        else { const p = R(1, 9), r = R(1, 9); q = `Solve: (x − ${p})(x + ${r}) = 0`; a = `x = ${p} or x = −${r}`; }
        break;
      }
      case 10: {
        if (i % 4 === 0) { const a1 = R(25, 80), a2 = R(20, 170 - a1); q = `Two angles of a triangle are ${a1}° and ${a2}°. Find the third angle. ____`; a = `${180 - a1 - a2}°`; }
        else if (i % 4 === 1) { const t = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]]); q = `A right triangle has legs ${t[0]} and ${t[1]}. Find the hypotenuse. ____`; a = t[2]; }
        else if (i % 4 === 2) { const r = R(2, 12); q = `Find the area of a circle with radius ${r}. (Use π ≈ 3.14) ____`; a = `≈ ${(3.14 * r * r).toFixed(2)}`; }
        else { const l = R(4, 15), w = R(3, 12), h = R(2, 10); q = `Find the volume of a box ${l} × ${w} × ${h}. ____`; a = l * w * h; }
        break;
      }
      case 11: {
        if (i % 4 === 0) { const x = R(2, 6), y = R(2, 6); q = `Simplify: x${sup(x)} · x${sup(y)} = ____`; a = `x${sup(x + y)}`; }
        else if (i % 4 === 1) { const aa = R(2, 5), bb = R(2, 5), x = R(1, 4); q = `If f(x) = ${aa}x² − ${bb}x, find f(${x}). ____`; a = aa * x * x - bb * x; }
        else if (i % 4 === 2) { const p = pick([100, 200, 500]), n = R(2, 5); q = `A colony of ${p} bacteria doubles every hour. How many after ${n} hours? ____`; a = p * Math.pow(2, n); }
        else { q = `In a right triangle with legs 3 and 4 (hypotenuse 5), find sin of the angle opposite the side of length 3. ____`; a = "3/5"; }
        break;
      }
      case 12: {
        if (i % 4 === 0) { const n = R(2, 6); q = `Evaluate: log₂(${Math.pow(2, n)}) = ____`; a = n; }
        else if (i % 4 === 1) { const a1 = R(2, 9), d = R(2, 7), n = R(5, 12); q = `Arithmetic sequence: first term ${a1}, common difference ${d}. Find term #${n}. ____`; a = a1 + (n - 1) * d; }
        else if (i % 4 === 2) { const arr = [R(1, 9), R(10, 19), R(20, 29), R(30, 39), R(40, 49)]; const mean = arr.reduce((s, v) => s + v, 0) / 5; q = `Find the mean of: ${arr.join(", ")} ____`; a = mean.toFixed(1); }
        else { const s = pick([["a coin twice: two heads", "1/4"], ["one die: rolling a 6", "1/6"], ["one die: rolling an even number", "1/2"], ["a coin three times: three tails", "1/8"]]); q = `Probability of flipping/rolling ${s[0]}? ____`; a = s[1]; }
        break;
      }
    }
    qs.push({ q, a: String(a) });
  }
  return qs;
}
function sup(n) {
  const m = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  return String(n).split("").map(c => m[c] || c).join("");
}

// ---- Universal worksheet generator: every subject gets fresh sheets ----
function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function scrambleWord(w) {
  let s = w, tries = 0;
  while (s === w && tries < 10) { s = shuffleArr(w.split("")).join(""); tries++; }
  return s;
}
function genVocab(words) {
  return shuffleArr(words).map(w => {
    const kind = rand(3);
    if (kind === 0) {
      const blanked = w[2].replace(new RegExp(w[0], "i"), "________");
      return { q: `Fill in the blank: ${blanked}`, a: w[0] };
    }
    if (kind === 1) return { q: `Unscramble this word: "${scrambleWord(w[0])}"  (hint: ${w[1].split("(")[0].trim()})`, a: w[0] };
    return { q: `Write your own sentence using the word "${w[0]}"  (meaning: ${w[1].split("(")[0].trim()})`, a: "Sentences will vary — check the word is used correctly." };
  });
}
// ---- Spelling generator: endless sheets with auto-generated misspellings ----
function misspellOnce(w) {
  const kind = rand(4), L = w.length;
  if (kind === 0 && L > 3) { // swap two adjacent letters (keep the first letter)
    const i = 1 + rand(L - 2);
    return w.slice(0, i) + w[i + 1] + w[i] + w.slice(i + 2);
  }
  if (kind === 1 && L > 4) { // drop a middle letter
    const i = 1 + rand(L - 2);
    return w.slice(0, i) + w.slice(i + 1);
  }
  if (kind === 2) { // double a letter
    const i = 1 + rand(L - 1);
    return w.slice(0, i) + w[i - 1] + w.slice(i);
  }
  const idxs = []; // swap a vowel
  for (let i = 1; i < L; i++) if ("aeiou".includes(w[i])) idxs.push(i);
  if (idxs.length) {
    const i = pick(idxs);
    return w.slice(0, i) + pick("aeiou".replace(w[i], "").split("")) + w.slice(i + 1);
  }
  return w + w[L - 1];
}
function misspell(w, avoid) {
  for (let t = 0; t < 20; t++) { const m = misspellOnce(w); if (m !== w && !avoid.includes(m)) return m; }
  return w + w[w.length - 1];
}
function genSpelling(words) {
  const qs = [];
  shuffleArr(words).slice(0, 10).forEach((w, i) => {
    const kind = i % 4;
    if (kind === 0) qs.push({ q: `Unscramble the word:  "${scrambleWord(w)}"  (it starts with "${w[0]}")`, a: w });
    else if (kind === 1) {
      let shown = w[0];
      for (let j = 1; j < w.length; j++) shown += (j % 3 === 2 ? "_" : w[j]);
      qs.push({ q: `Fill in the missing letters:   ${shown.split("").join(" ")}`, a: w });
    } else if (kind === 2) {
      const m1 = misspell(w, [w]), m2 = misspell(w, [w, m1]);
      qs.push({ q: `Circle the correct spelling:   ${shuffleArr([w, m1, m2]).join("     ")}`, a: w });
    } else {
      qs.push({ q: `🗣️ Spelling test: a grown-up reads answer #${i + 1} from the answer key out loud — you write it!`, a: w });
    }
  });
  return qs;
}

// ---- Geography generator: endless flag/capital/continent quizzes ----
function genGeo(lesson) {
  const all = [];
  lesson.continents.forEach(c => (c.countries || []).forEach(k => all.push({ iso: k[0], country: k[1], capital: k[2], cont: c.name })));
  return shuffleArr(all).slice(0, 8).map((p, i) => {
    const kind = i % 4;
    if (kind === 0) return { html: true, q: `What is the capital of ${flagImg(p.iso)} <b>${esc(p.country)}</b>?  ______________`, a: p.capital };
    if (kind === 1) return { html: true, q: `Which country has the capital city <b>${esc(p.capital)}</b>?  ______________`, a: p.country };
    if (kind === 2) return { html: true, q: `Which continent is ${flagImg(p.iso)} <b>${esc(p.country)}</b> on?  ______________`, a: p.cont };
    return { html: true, q: `Name the country this flag belongs to:  ${flagImg(p.iso, 80)}  ______________`, a: `${p.country} (capital: ${p.capital})` };
  });
}

function genFF() {
  const all = [];
  LESSONS[13].geography.continents.forEach(c => (c.countries || []).forEach(k => {
    const ff = FF_COUNTRY[k[0]];
    if (ff) all.push({ iso: k[0], country: k[1], flora: ff.flora, fauna: ff.fauna });
  }));
  const names = list => list.map(s => s[0]).join(", ");
  return shuffleArr(all).slice(0, 8).map((p, i) => {
    const kind = i % 5;
    if (kind === 0) return { html: true, q: `Name two animals you could find in ${flagImg(p.iso)} <b>${esc(p.country)}</b>.  ______________`, a: `Any two of: ${names(p.fauna)}` };
    if (kind === 1) return { html: true, q: `Name a famous plant or tree of ${flagImg(p.iso)} <b>${esc(p.country)}</b>.  ______________`, a: `Any of: ${names(p.flora)}` };
    if (kind === 2) {
      const isFlora = rand(2) === 0;
      const sp = isFlora ? pick(p.flora) : pick(p.fauna);
      return { html: true, q: `FLORA or FAUNA? Is this a plant or an animal? ${spPhoto(sp[1])} <b>${esc(sp[0])}</b>  ______________`, a: isFlora ? "Flora — a plant!" : "Fauna — an animal!" };
    }
    if (kind === 3) {
      const isFlora = rand(2) === 0;
      const sp = isFlora ? pick(p.flora) : pick(p.fauna);
      const photo = spPhoto(sp[1], true);
      if (photo) return { html: true, q: `Name this ${isFlora ? "plant" : "animal"} — it lives in ${flagImg(p.iso)} ${esc(p.country)}:<br>${photo}  ______________`, a: `${sp[0]} (${sp[1]})` };
    }
    const ic = pick(FF_ICONIC);
    return { html: true, q: `Which country is famous for the ${esc(ic[0])}? ${spPhoto(ic[1])}  ______________`, a: ic[2] };
  });
}

// ---- Additional-material worksheets ----
function genExtra(subj, lesson) {
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  const qs = [];
  if (subj === "periodic") {
    for (let i = 0; i < 8; i++) {
      const e = pick(ELEMENTS), k = i % 4;
      if (k === 0) qs.push({ q: `What is the chemical symbol for ${e[2]}?  ______`, a: e[1] });
      else if (k === 1) qs.push({ q: `Which element has the symbol ${e[1]}?  ______`, a: e[2] });
      else if (k === 2) qs.push({ q: `What is the atomic number of ${e[2]} (${e[1]})?  ______`, a: e[0] });
      else qs.push({ q: `${e[2]} (${e[1]}) has ${e[0]} protons. How many protons does an atom of ${e[2]} have?  ______`, a: e[0] });
    }
  } else if (subj === "abacus") {
    for (let i = 0; i < 8; i++) {
      const k = i % 3;
      if (k === 0) {
        const n = R(1, 9);
        qs.push({ q: `Show ${n} on one abacus rod: how many 5-beads and how many 1-beads?  ______`,
                  a: `${n >= 5 ? "1 five-bead" : "0 five-beads"} and ${n % 5} one-bead${n % 5 === 1 ? "" : "s"}  (${n >= 5 ? "5 + " + (n % 5) : n} = ${n})` });
      } else if (k === 1) {
        const h = R(0, 1), e = R(0, 4);
        qs.push({ q: `A rod has ${h ? "the 5-bead pushed down" : "no 5-bead pushed down"} and ${e} one-bead${e === 1 ? "" : "s"} pushed up. What number is it showing?  ______`, a: h * 5 + e });
      } else {
        const n = R(2, 4), digits = Array.from({ length: n }, () => R(0, 9)).join("");
        const names = ["ones", "tens", "hundreds", "thousands"];
        qs.push({ q: `Which rods would you use to show ${digits}? (name them right to left)  ______`,
                  a: names.slice(0, n).join(", ") + ` — ${n} rods` });
      }
    }
  } else if (subj === "tables") {
    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) { const a = R(1, 12), b = R(1, 12); qs.push({ q: `${a} + ${b} = ____`, a: a + b }); }
      else { const a = R(1, 12), b = R(1, 12); qs.push({ q: `${a} × ${b} = ____`, a: a * b }); }
    }
  } else { // formulas
    const pool = [];
    FORMULAS.forEach(b => b.items.forEach(f => pool.push([b.band, f[0], f[1]])));
    shuffleArr(pool).slice(0, 8).forEach(f => {
      qs.push({ q: `Write the formula for: ${f[1]}  (${f[0].split("·")[1] ? f[0].split("·")[1].trim() : f[0]})  ______________`, a: f[2] });
    });
  }
  return qs;
}

// ---- Computer Science worksheets: every answer is computed, so the key can't be wrong ----
const CS_ORDER_TASKS = [
  ["brush your teeth", ["put toothpaste on the brush", "brush every tooth", "rinse your mouth", "put the brush away"]],
  ["make a jam sandwich", ["take two slices of bread", "spread the jam", "put the slices together", "cut it in half"]],
  ["plant a seed", ["dig a small hole", "drop in the seed", "cover it with soil", "water it"]],
  ["wash your hands", ["turn on the tap", "add soap and scrub", "rinse the soap off", "dry your hands"]],
  ["draw a snowman", ["draw a big circle", "draw a smaller circle on top", "add eyes and a carrot nose", "add stick arms"]]
];
const CS_IO = [["keyboard","INPUT — you use it to talk to the computer"],["mouse","INPUT — you use it to talk to the computer"],
  ["microphone","INPUT — you use it to talk to the computer"],["camera","INPUT — you use it to talk to the computer"],
  ["scanner","INPUT — you use it to talk to the computer"],["screen (monitor)","OUTPUT — the computer uses it to talk to you"],
  ["speakers","OUTPUT — the computer uses it to talk to you"],["printer","OUTPUT — the computer uses it to talk to you"],
  ["headphones","OUTPUT — the computer uses it to talk to you"]];
const CS_CHIP = [["a laptop","Yes"],["a smartphone","Yes"],["a modern washing machine","Yes — a small chip runs its programs!"],
  ["a modern car","Yes — dozens of chips!"],["a games console","Yes"],["a wooden spoon","No"],["a teddy bear","No"],
  ["a rock","No"],["a paper book","No"],["a bicycle bell","No"]];
const CS_IF = [
  ["it is raining", "take your umbrella", "It is raining.", true],
  ["it is raining", "take your umbrella", "It is sunny.", false],
  ["the light is red", "stop and wait", "The light is red.", true],
  ["the light is red", "stop and wait", "The light is green.", false],
  ["you are hungry", "eat an apple", "You just ate a big lunch and are full.", false],
  ["the music is playing", "dance", "The music is playing.", true]
];
const CS_BOOL = [["True and False","False"],["True and True","True"],["False and False","False"],
  ["True or False","True"],["False or False","False"],["True or True","True"],["not True","False"],["not False","True"]];
const CS_WORDS = ["cat","python","robot","code","loop","screen","pixel"];

function genCS(subj) {
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  const qs = [];
  for (let i = 0; i < 8; i++) {
    if (subj === "cs12") {
      const k = i % 3;
      if (k === 0) {
        const t = pick(CS_ORDER_TASKS);
        const idx = shuffleArr(t[1].map((_, n) => n));
        const shown = idx.map((n, j) => String.fromCharCode(65 + j) + ") " + t[1][n]).join("   ");
        const ans = t[1].map((_, n) => String.fromCharCode(65 + idx.indexOf(n))).join(" ");
        qs.push({ q: `Algorithm scramble! To ${t[0]}, put these steps in order (write the letters):   ${shown}`, a: ans });
      } else if (k === 1) {
        const d = pick(CS_IO);
        qs.push({ q: `Is a ${d[0]} an INPUT or an OUTPUT?  ______`, a: d[1] });
      } else {
        const c = pick(CS_CHIP);
        qs.push({ q: `Computer hunt: does ${c[0]} have a computer chip inside? (yes/no)  ______`, a: c[1] });
      }
    } else if (subj === "cs35") {
      const k = i % 4;
      if (k === 0) { const n = R(2, 6), m = R(2, 5); qs.push({ q: `A program says: repeat ${n} times [ move ${m} steps ]. How many steps does the robot move in total?  ______`, a: n * m }); }
      else if (k === 1) { const n = R(2, 5), m = R(2, 4); qs.push({ q: `A loop runs ${n} times. Each time it stamps ${m} stars and 1 heart. How many stars, and how many hearts?  ______`, a: `${n * m} stars and ${n} hearts` }); }
      else if (k === 2) { const a = R(2, 6), b = R(2, 6), c = R(1, Math.min(3, a + b - 1)); qs.push({ q: `A robot starts at 0 on a number line. It runs: forward ${a}, forward ${b}, back ${c}. Where does it stop?  ______`, a: a + b - c }); }
      else { const f = pick(CS_IF); qs.push({ q: `The program says: IF ${f[0]} THEN ${f[1]}. ${f[2]} Does the program do it? (yes/no)  ______`, a: f[3] ? "Yes — the IF is true, so the steps inside run" : "No — the IF is false, so the steps inside are skipped" }); }
    } else if (subj === "cs68") {
      const k = i % 4;
      if (k === 0) { const n = R(2, 31); qs.push({ q: `Change binary ${n.toString(2)} into an ordinary number.  ______`, a: n }); }
      else if (k === 1) { const n = R(2, 31); qs.push({ q: `Write ${n} in binary.  ______`, a: n.toString(2) }); }
      else if (k === 2) {
        const a = R(2, 9), b = R(2, 9), op = pick(["+", "*", "-"]);
        const res = op === "+" ? a + b : op === "*" ? a * b : (a >= b ? a - b : b - a);
        const x = op === "-" ? Math.max(a, b) : a, y = op === "-" ? Math.min(a, b) : b;
        qs.push({ q: `Trace this Python:   x = ${x}   then   x = x ${op} ${y}   then   print(x).  What is printed?  ______`, a: res });
      }
      else { const n = R(2, 8); qs.push({ q: `How many times does this loop print hello?   for i in range(${n}): print("hello")  ______`, a: n }); }
    } else { // cs912
      const k = i % 6;
      if (k === 0) { const b = R(3, 9), a = R(b + 1, 40); qs.push({ q: `Python:  print(${a} // ${b})  prints what?  ______`, a: Math.floor(a / b) }); }
      else if (k === 1) { const b = R(3, 9), a = R(b + 1, 40); qs.push({ q: `Python:  print(${a} % ${b})  prints what?  ______`, a: a % b }); }
      else if (k === 2) { const e = R(2, 6); qs.push({ q: `Python:  print(2 ** ${e})  prints what?  ______`, a: Math.pow(2, e) }); }
      else if (k === 3) { const w = pick(CS_WORDS); qs.push({ q: `Python:  print(len("${w}"))  prints what?  ______`, a: w.length }); }
      else if (k === 4) {
        const nums = [R(1, 9) * 10, R(1, 9) * 10 + 1, R(1, 9) * 10 + 2, R(1, 9) * 10 + 3];
        const idx = R(0, 3);
        qs.push({ q: `Python:  nums = [${nums.join(", ")}]   then   print(nums[${idx}]).  What is printed? (careful — counting starts at 0!)  ______`, a: nums[idx] });
      }
      else { const b = pick(CS_BOOL); qs.push({ q: `Python:  print(${b[0]})  prints what?  ______`, a: b[1] }); }
    }
  }
  return qs;
}

// ---- English Language worksheets ----
function engFixSentence(s) {
  return (s.charAt(0).toUpperCase() + s.slice(1)).replace(/\bi\b/g, "I") + ".";
}
function genEng(subj) {
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  const POS = ["FIRST", "SECOND", "THIRD", "FOURTH"];
  const qs = [];
  const n = subj === "engspeaking" ? 6 : 8;
  for (let i = 0; i < n; i++) {
    if (subj === "engreading") {
      const k = i % 4;
      if (k === 0) { const w = pick(ENG_SYLLABLES); qs.push({ q: `Clap it out: how many syllables (beats) in "${w[0]}"?  ______`, a: w[1] }); }
      else if (k === 1) {
        const g1 = pick(ENG_RHYMES);
        let others = shuffleArr(ENG_RHYMES.filter(r => r !== g1)).slice(0, 2).map(r => r[0]);
        const correct = pick(g1[1]);
        qs.push({ q: `Which word rhymes with "${g1[0]}"?   ( ${shuffleArr([correct, others[0], others[1]]).join(" / ")} )  ______`, a: correct });
      }
      else if (k === 2) {
        const words = shuffleArr(ENG_WORDPOOL).slice(0, 3);
        qs.push({ q: `Put these in dictionary (ABC) order:   ${words.join(", ")}  ______`, a: words.slice().sort().join(", ") });
      }
      else { const p = pick(ENG_PLURALS); qs.push({ q: `Tricky plurals: one ${p[0]}, two ______`, a: p[1] }); }
    } else if (subj === "engwriting") {
      const k = i % 4;
      if (k === 0) { const s = pick(ENG_FIXCAP); qs.push({ q: `Fix this sentence (capitals and an end mark): "${s}"  ______`, a: engFixSentence(s) }); }
      else if (k === 1) { const e = pick(ENG_ENDMARK); qs.push({ q: `Which end mark finishes it: "${e[0]}__"   ( .  ?  ! )  ______`, a: e[1] }); }
      else if (k === 2) { const v = pick(ENG_PAST); qs.push({ q: `Time travel the verb: today I ${v[0]}, yesterday I ______`, a: v[1] }); }
      else {
        const topics = ["recess should be longer", "dogs make the best pets", "everyone should learn to swim", "homework should be optional on birthdays", "breakfast is the best meal"];
        qs.push({ q: `Write ONE persuasive sentence arguing that ${pick(topics)} — a claim plus a because.  ______________`, a: "Sentences will vary — check for a clear claim and at least one reason after 'because'." });
      }
    } else if (subj === "engspeaking") {
      qs.push({ q: `🎤 ${pick(ENG_SPEAK_PROMPTS)}`, a: ENG_SPEAK_RUBRIC });
    } else { // englistening
      const k = i % 4;
      if (k === 0) { const a = R(2, 5), b = R(1, 4); qs.push({ q: `🗣️ A grown-up reads aloud: "Clap ${a} times, then stomp ${b} times." How many sounds altogether?  ______`, a: a + b }); }
      else if (k === 1) {
        const seq = pick(ENG_SEQS), p = R(0, 3);
        qs.push({ q: `🗣️ A grown-up reads this list ONCE: "${seq.join(", ")}". Then asks: which one was ${POS[p]}?  ______`, a: seq[p] });
      }
      else if (k === 2) {
        const g1 = pick(ENG_RHYMES);
        const rhymers = shuffleArr(g1[1]).slice(0, 2);
        const odd = pick(ENG_RHYMES.filter(r => r !== g1)[R(0, ENG_RHYMES.length - 2)][1]);
        qs.push({ q: `🗣️ A grown-up reads: "${shuffleArr([g1[0], rhymers[0], odd, rhymers[1]]).join(", ")}". Which word does NOT rhyme with the others?  ______`, a: odd });
      }
      else { const w = pick(ENG_SYLLABLES); qs.push({ q: `🗣️ A grown-up says "${w[0]}" out loud. Clap the beats you hear — how many claps?  ______`, a: w[1] }); }
    }
  }
  return qs;
}

function makeSheet(g, subj, lesson) {
  if (g === 0) return genKinder(subj, lesson);
  if (g === 17) return genCS(subj);
  if (g === 18) return genEng(subj);
  if (g === 14) return genExtra(subj, lesson);
  if (g === 13) return subj === "florafauna" ? genFF() : genGeo(lesson);
  if (subj === "compsci") return genCS(lesson.csWork);   // Computer Science folded into the grade
  if (subj === "math") return genMath(g);
  if (subj === "spelling") return genSpelling(lesson.spellWords);
  if (subj === "vocabulary") return genVocab(lesson.words);
  if (subj === "writing") return shuffleArr(lesson.prompts).slice(0, 4).map(p => ({ q: p, a: lesson.rubric }));
  const pool = (lesson.questions || []).concat(lesson.extraQuestions || []);
  return shuffleArr(pool).slice(0, Math.min(6, pool.length));
}
const COUNT_EMOJI = ["⭐", "🍎", "🎈", "🐟", "🌸", "🚗", "🧁", "🐤"];
function genKinder(subj, lesson) {
  const qs = [];
  const R = (lo, hi) => lo + rand(hi - lo + 1);
  const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 8; i++) {
    if (subj === "alphabet") {
      if (i % 2 === 0) { const c = pick(lesson.cards); qs.push({ q: `What letter does ${c.e} ${c.n} start with? ____`, a: c.l[0] }); }
      else { const s = R(0, 22); qs.push({ q: `Fill in the missing letter:   ${A[s]}   ${A[s + 1]}   ____   ${A[s + 3]}`, a: A[s + 2] }); }
    } else if (subj === "counting") {
      const kind = i % 3;
      if (kind === 0) { const e = pick(COUNT_EMOJI), n = R(3, 10); qs.push({ q: `Count the ${e}:   ${e.repeat(n)}   How many? ____`, a: n }); }
      else if (kind === 1) { const n = R(1, 98); qs.push({ q: i % 2 ? `What number comes right after ${n}? ____` : `What number comes right before ${n + 2}? ____`, a: n + 1 }); }
      else { const t = R(1, 7) * 10; qs.push({ q: `Count by tens:   ${t},  ${t + 10},  ____,  ${t + 30}`, a: t + 20 }); }
    } else if (subj === "shapes") {
      const pool = [
        ["How many sides does a triangle have? ____", "3"],
        ["How many sides does a square have? ____", "4"],
        ["How many corners does a circle have? ____", "0 — it's perfectly round!"],
        ["How many sides does a rectangle have? ____", "4 (2 long, 2 short)"],
        ["Which shape has 5 points and twinkles in the sky? ____", "A star"],
        ["Which shape means love? ____", "A heart"]
      ];
      if (i % 2 === 0) { const p = pick(pool); qs.push({ q: p[0], a: p[1] }); }
      else { const s = pick(["🔺", "🟥", "🔵", "⭐", "❤️"]), n = R(3, 8); qs.push({ q: `Count the shapes:   ${s.repeat(n)}   ____`, a: n }); }
    } else { // picture-word pages: animals / fruits / things
      if (i % 2 === 0) { const c = pick(lesson.cards); qs.push({ q: `What letter does ${c.e} ${c.n} start with? ____`, a: c.n[0].toUpperCase() }); }
      else { const c = pick(lesson.cards), n = R(3, 9); qs.push({ q: `Count:   ${c.e.repeat(n)}   How many ${c.n.toLowerCase()}s? ____`, a: n }); }
    }
  }
  return qs;
}

// ============================================================
// CUSTOM STORY MAKER
// ============================================================
const SETTINGS_DATA = {
  forest:   { label: "🌲 Enchanted Forest", place: "the Enchanted Forest", scene: "Sunbeams dripped through the tall trees like honey, and somewhere a woodpecker kept the beat", path: "the mossy trail" },
  space:    { label: "🚀 Outer Space", place: "Space Station Twinkle", scene: "Stars glittered past the round windows, and the robot cat floated by doing slow somersaults", path: "the long silver corridor" },
  beach:    { label: "🏖️ Sunny Beach", place: "Coconut Cove", scene: "Waves rolled in with a hush-hush sound, and seagulls argued about a french fry", path: "the warm sandy shore" },
  castle:   { label: "🏰 Old Castle", place: "Thornberry Castle", scene: "Flags snapped on the towers, and the great wooden doors creaked hello", path: "the winding stone staircase" },
  city:     { label: "🏙️ Big City", place: "Maple City", scene: "Buses hummed, pigeons paraded, and the pretzel cart made the whole block smell delicious", path: "the busy crosswalk" },
  mountain: { label: "🏔️ Snowy Mountain", place: "Whistletop Mountain", scene: "Snow sparkled like sugar, and every breath made a tiny cloud", path: "the zigzag trail" }
};
const VALUES_DATA = {
  kindness:       { label: "💗 Kindness", moral: "Kindness is never wasted — it always finds its way back." },
  courage:        { label: "🦁 Courage", moral: "Being brave doesn't mean you aren't scared. It means you try anyway." },
  honesty:        { label: "🌟 Honesty", moral: "The truth is always the strongest place to stand." },
  responsibility: { label: "🎖️ Responsibility", moral: "When people can count on you, you can be proud of yourself." },
  sharing:        { label: "🍰 Sharing", moral: "Whatever is shared becomes twice as good." },
  perseverance:   { label: "🐢 Perseverance", moral: "Keep trying — the ones who don't quit are the ones who succeed." }
};

function makeStory(name, friend, settingKey, themeKey, valueKey) {
  const S = SETTINGS_DATA[settingKey], V = VALUES_DATA[valueKey];
  const opener = `Once upon a bright morning, ${name} set off for ${S.place} with ${friend} close behind. ${S.scene}. "Today feels like a special day," said ${name}, and it absolutely was.`;
  let middle = "", problem = "", solution = "";

  if (themeKey === "adventure") {
    middle = `Along ${S.path}, ${name} spotted something odd: ${pick([
      "an old brass key with a tag that read 'FOR THE ONE WHO FINDS ME'",
      "a trail of glowing pebbles that no one else seemed to notice",
      "a rolled-up map tied with a red ribbon",
      "a tiny door with a doorbell the size of a pea"])}. ${friend} gasped. "We have to find out what it means!" And so the great adventure began.`;
    problem = `But adventures test their heroes. ${pick([
      "The way forward was blocked, and the detour looked dark and twisty",
      "Halfway there, the clue seemed to lead nowhere at all",
      "A grumpy gatekeeper said, 'You'll never manage it — turn back!'",
      "The final step required doing the one thing " + name + " found hardest"])}. ${friend} looked worried. "What do we do now, ${name}?"`;
  } else if (themeKey === "strangers") {
    middle = `Along ${S.path}, they noticed a stranger who needed help: ${pick([
      "an old gardener whose cart had tipped over, scattering seed packets everywhere",
      "a small child who had lost sight of their grandmother in the crowd",
      "a traveler holding a map upside down, turning in slow, confused circles",
      "a musician whose sheet music had blown away in the wind, page by page"])}. Everyone else hurried past, pretending not to see.`;
    problem = `${name} slowed down. Helping would take time — ${pick([
      "and the fun they had planned was waiting",
      "and it looked like a big, messy job",
      "and strangers can be shy to ask",
      "and no one else seemed to think it was their problem"])}. ${friend} whispered, "Should we just keep going?"`;
  } else {
    middle = `But when they got home, they found a house full of jobs: ${pick([
      "a mountain of laundry that had grown overnight",
      "a kitchen stacked with dishes from the family party",
      "a yard buried in leaves, with Grandpa eyeing his rake and sighing",
      "moving boxes stacked to the ceiling, and a very tired Mom"])}. The grown-ups looked exhausted.`;
    problem = `${name} thought about sneaking off to play — ${pick([
      "nobody had actually asked for help, after all",
      "and the chores looked like they would take forever",
      "and it was such a perfect day for anything else",
      "and little kids aren't supposed to fix big problems... right?"])}. ${friend} was already tiptoeing toward the door.`;
  }

  const valueActs = {
    kindness: `Then ${name} remembered what Grandma always said: "Kind hearts are the quiet heroes." So ${name} smiled big and jumped in to help, and ${friend} — after one sheepish grin — jumped in too.`,
    courage: `Then ${name} took a deep, brave breath. "Scared is okay," said ${name}. "Quitting is not." And step by wobbly step, ${name} did the hard thing, with ${friend} cheering every step.`,
    honesty: `Then ${name} stood up tall and told the whole truth about what had happened — no excuses, no wiggling. It was hard for a moment. And then, like a window opening, everything got easier.`,
    responsibility: `Then ${name} squared both shoulders. "If it needs doing, we can do it," said ${name}, and made a plan: first things first, one job at a time, no giving up halfway. ${friend} saluted.`,
    sharing: `Then ${name} opened the backpack and shared everything in it — snacks, tools, time, and the best idea of the day. "Half for you," said ${name}, "which somehow makes MORE for everyone."`,
    perseverance: `The first try failed. So did the second. But ${name} dusted off both knees and grinned. "Third tries are the magic ones," said ${name} — and kept going until, at last, it worked.`
  };
  solution = valueActs[valueKey];

  const endings = {
    adventure: `And that is how ${name} and ${friend} solved the mystery of ${S.place} — not with luck, but with heart. They walked home in the golden afternoon, already planning tomorrow's adventure.`,
    strangers: `The stranger's thank-you was worth more than gold. "You two are the best part of my whole week," they said. ${name} and ${friend} floated home, taller somehow, though their shoes were the same size.`,
    home: `By sunset the work was done, and the whole family sat down together, tired and happy. "How did we get so lucky?" asked Mom. ${name} and ${friend} just grinned into their cocoa.`
  };

  const titles = {
    adventure: `${name} and the Secret of ${S.place}`,
    strangers: `${name} Lends a Hand`,
    home: `${name} Saves the Day at Home`
  };

  return {
    title: titles[themeKey],
    moral: V.moral,
    text: [opener, middle, problem, solution, endings[themeKey]].join("\n\n")
  };
}

// ============================================================
// VIEWS
// ============================================================
function go(view) { if (typeof Speech !== "undefined") Speech.stop(); state.view = view; state.authMsg = ""; state.authOk = ""; render(); window.scrollTo(0, 0); }

function navHtml() {
  const items = [["home", "🏡 Home"], ["game", "🎮 Game"], ["globe", "🌍 Globe"], ["lessons", "📚 Lessons"], ["stories", "📖 Stories"], ["maker", "✨ Story Maker"], ["shop", "🛒 Shop"], ["pricing", "⭐ Plans"], ["contact", "✉️ Contact"]];
  return items.map(([v, l]) => `<button class="${state.view === v ? "active" : ""}" onclick="App.go('${v}')">${l}</button>`).join("");
}
function starChip() {
  const r = Rewards.load();
  return `<button class="starchip" onclick="App.go('rewards')" title="Your stars, streak and stickers">
    ⭐ <b>${r.stars}</b>${r.streak > 1 ? ` <span class="streakpip">🔥${r.streak}</span>` : ""}</button>`;
}
function cartChip() {
  const n = Cart.count();
  return `<button class="cartchip${n > 0 ? " has" : ""}" onclick="App.go('cart')" title="Your shopping cart">
    🛒${n > 0 ? ` <b>${n}</b>` : ""}</button>`;
}
function authZoneHtml() {
  const u = currentUser();
  const chip = starChip() + cartChip();
  if (!u) return `${chip}<button class="btn btn-gold btn-sm" onclick="App.goAuth('login')">Log In</button>
                  <button class="btn btn-primary btn-sm" onclick="App.goAuth('signup')">Sign Up Free</button>`;
  const badge = u.plan === "premium" ? `<span class="badge">⭐ Premium</span>` : `<span class="badge free">Free Plan</span>`;
  return `${chip}<span class="hello">Hi, ${esc(u.name.split(" ")[0])}! ${badge}</span>
          <button class="btn btn-ghost btn-sm" onclick="App.go('account')">My Account</button>`;
}

// ---------- Rewards ----------
function rewardsView() {
  const r = Rewards.load();
  const next = Rewards.nextSticker();
  const unlockedCount = Rewards.stickersUnlocked();
  const pct = next ? Math.min(100, Math.round((r.stars - (STICKERS[unlockedCount - 1] ? STICKERS[unlockedCount - 1].cost : 0)) /
              (next.cost - (STICKERS[unlockedCount - 1] ? STICKERS[unlockedCount - 1].cost : 0)) * 100)) : 100;
  return `<div class="view">
    <h1>🏆 My Rewards</h1>
    <p class="subtitle">Earn stars by reading, playing games, and making things. Fill your sticker shelf and collect every badge!</p>
    <div class="rewardtop">
      <div class="rewardbig"><span class="rbnum">⭐ ${r.stars}</span><span class="rblbl">stars earned</span></div>
      <div class="rewardbig"><span class="rbnum">🔥 ${r.streak}</span><span class="rblbl">day${r.streak === 1 ? "" : "s"} in a row</span></div>
      <div class="rewardbig"><span class="rbnum">🏅 ${r.badges.length}/${BADGES.length}</span><span class="rblbl">badges</span></div>
    </div>
    ${next ? `<div class="nextsticker">
      <p>Next sticker: <b>${next.e} ${esc(next.n)}</b> at ${next.cost} stars — ${next.cost - r.stars} to go!</p>
      <div class="readprog"><i style="width:${pct}%"></i></div>
    </div>` : `<p class="nextsticker"><b>🎉 You've unlocked every sticker!</b></p>`}

    <h2 class="rewardhead">🎨 Sticker Shelf</h2>
    <div class="stickergrid">${STICKERS.map(s => {
      const got = r.stars >= s.cost;
      return `<div class="sticker ${got ? "on" : ""}" title="${got ? esc(s.n) : "Unlocks at " + s.cost + " stars"}">
        <span class="stemoji">${got ? s.e : "❓"}</span>
        <span class="stname">${got ? esc(s.n) : s.cost + "⭐"}</span></div>`;
    }).join("")}</div>

    <h2 class="rewardhead">🏅 Badges</h2>
    <div class="badgegrid">${BADGES.map(b => {
      const got = r.badges.indexOf(b.id) >= 0;
      return `<div class="badge3 ${got ? "on" : ""}">
        <span class="bgemoji">${b.e}</span>
        <div><h4>${esc(b.n)}</h4><p>${esc(b.d)}</p></div>
        ${got ? `<span class="bgtick">✓</span>` : `<span class="bglock">🔒</span>`}</div>`;
    }).join("")}</div>

    <div class="bookfoot" style="margin-top:20px">${doodle("rocket")}
      <p><b>How to earn stars:</b> read a story (+1), read a book chapter (+1), grow a plant all the way (+2),
      make a creature (+1), write a custom story (+1), and win arcade games (up to +10). Come back every day to build your 🔥 streak!</p></div>
  </div>`;
}

// ---------- The Globe ----------
function globeView() {
  return `<div class="view">
    <h1>🌍 The Globe</h1>
    <p class="subtitle">Spin the whole world in your hands! Drag to rotate, zoom in and out, and tap any country to learn its name, capital and flag.</p>
    <div class="globewrap">
      <div class="globestage">
        <div id="globe-canvas-wrap" class="globecanvaswrap">
          <canvas id="globe-canvas" aria-label="An interactive 3D globe of Earth"></canvas>
        </div>
        <div class="globebtns no-print">
          <button class="gbtn" onclick="App.globeZoom(1)" title="Zoom in">➕</button>
          <button class="gbtn" onclick="App.globeZoom(-1)" title="Zoom out">➖</button>
          <button class="gbtn" id="globe-spin-btn" onclick="App.globeSpin()" title="Start/stop spinning">⏸️</button>
          <button class="gbtn" onclick="App.globeReset()" title="Reset the view">🔄</button>
        </div>
        <p class="globehint no-print">🖱️ Drag to spin · scroll or pinch to zoom · tap a country</p>
        <p id="globe-status" class="globehint no-print"></p>
      </div>
      <div class="globeinfo" id="globe-info">${globeInfoHtml(null)}</div>
    </div>
    <div class="bookfoot">${doodle("rocket")}
      <p><b>Did you know?</b> Earth is the only planet we know of with life. It spins once every 24 hours — that's what gives us day and night! This globe uses real map data, so every coastline and country is where it truly belongs.</p></div>
  </div>`;
}
function globeInfoHtml(pick) {
  if (!pick) {
    return `<div class="globecard globecard-empty">
      <div class="gemoji">🌐</div>
      <h3>Tap a country</h3>
      <p>Give the globe a spin and tap any country to see its flag, capital city and continent.</p>
    </div>`;
  }
  if (pick.ocean) {
    return `<div class="globecard globecard-empty">
      <div class="gemoji">🌊</div>
      <h3>The Ocean</h3>
      <p>That's open water! About 71% of Earth is covered by ocean. Spin around and tap some land.</p>
    </div>`;
  }
  const flag = pick.iso ? `<img class="globeflag" src="https://flagcdn.com/w160/${pick.iso}.png" alt="Flag of ${esc(pick.name)}">` : "";
  return `<div class="globecard">
    ${flag}
    <h3>${esc(pick.name)}</h3>
    ${pick.capital ? `<p class="gcap">🏛️ Capital: <b>${esc(pick.capital)}</b></p>` : ""}
    ${pick.continent ? `<p class="gcont">🗺️ ${esc(pick.continent)}</p>` : ""}
    ${pick.iso ? `<button class="btn btn-secondary btn-sm" onclick="App.globeToGeography()">📚 Learn more in Geography</button>` : `<p class="gcont">More facts coming soon!</p>`}
  </div>`;
}
// Look up extra facts (capital, continent) for a picked country by its ISO code.
function globeCountryInfo(id) {
  if (id === 0) return { ocean: true };
  if (id < 0 || id > GLOBE_META.countries.length) return null;
  const meta = GLOBE_META.countries[id - 1];
  const info = { name: meta.name, iso: meta.iso };
  if (meta.iso) {
    LESSONS[13].geography.continents.forEach(c => (c.countries || []).forEach(k => {
      if (k[0] === meta.iso) { info.name = k[1]; info.capital = k[2]; info.continent = c.name; }
    }));
  }
  return info;
}

// ---------- Shop ----------
function shopView() {
  if (!PRODUCTS.length) {
    return `<div class="view">
      <h1>🛒 BrightSprouts Shop</h1>
      <div class="card" style="text-align:center;padding:48px 20px">
        <div style="font-size:56px">🌱</div>
        <h2>Our shop is being stocked!</h2>
        <p class="subtitle">New printable bundles and goodies are on the way. Check back soon!</p>
        <button class="btn btn-primary" onclick="App.go('home')">← Back home</button>
      </div>
    </div>`;
  }
  const types = new Set(PRODUCTS.map(p => p.type));
  const showTabs = types.size > 1;                       // only useful with more than one kind
  const filter = showTabs ? (state.shopFilter || "all") : "all";
  const list = PRODUCTS.filter(p => filter === "all" || p.type === filter);
  const cart = Cart.load();
  const tab = (key, label) => `<button class="${filter === key ? "active" : ""}" onclick="App.shopFilter('${key}')">${label}</button>`;
  return `<div class="view">
    <h1>🛒 BrightSprouts Shop</h1>
    <p class="subtitle">Hand-picked collections of STEM kits, toys and school supplies for curious kids — from our sister shop, Petal &amp; Stone. 🌸</p>
    ${showTabs ? `<div class="tabs no-print">${tab("all", "✨ All")}${tab("digital", "📥 Digital Downloads")}${tab("physical", "📦 Physical Goods")}</div>` : ""}
    <div class="grid grid-3 shopgrid">${list.map(p => {
      if (p.url) {
        return `<div class="prodcard external">
          <div class="prodart">${p.art}<span class="ptype shop">🌸 Petal &amp; Stone</span></div>
          <h3>${esc(p.name)}</h3>
          <p class="prodtag">${esc(p.tag)}</p>
          <p class="proddesc">${esc(p.desc)}</p>
          <div class="prodfoot">
            <a class="btn btn-primary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener">Shop now ↗</a>
          </div>
        </div>`;
      }
      const inCart = cart[p.id] || 0;
      return `<div class="prodcard">
        <div class="prodart">${p.art}<span class="ptype ${p.type}">${p.type === "digital" ? "📥 Digital" : "📦 Ships"}</span></div>
        <h3>${esc(p.name)}</h3>
        <p class="prodtag">${esc(p.tag)}</p>
        <p class="proddesc">${esc(p.desc)}</p>
        <div class="prodfoot">
          <span class="prodprice">${money(p.price)}</span>
          ${inCart
            ? `<button class="btn btn-secondary btn-sm" onclick="App.addToCart('${p.id}')">✓ In cart (${inCart}) · add more</button>`
            : `<button class="btn btn-primary btn-sm" onclick="App.addToCart('${p.id}')">Add to cart</button>`}
        </div>
      </div>`;
    }).join("")}</div>
    <div class="bookfoot">${doodle("rocket")}
      <p><b>How it works:</b> these collections are stocked by our sister store, <b>Petal &amp; Stone</b>. Tapping “Shop now” opens their site in a new tab, where you can browse and check out securely. Every order helps a small family business grow. 🌱</p></div>
  </div>`;
}

// ---------- Cart ----------
function cartView() {
  const items = Cart.items();
  if (!items.length) {
    return `<div class="view">
      <h1>🛒 Your Cart</h1>
      <div class="card" style="text-align:center;padding:48px 20px">
        <div style="font-size:56px">🛒</div>
        <h2>Your cart is empty</h2>
        <p class="subtitle">Add some printable bundles or goodies to get started!</p>
        <button class="btn btn-primary" onclick="App.go('shop')">🛍️ Browse the Shop</button>
      </div>
    </div>`;
  }
  const subtotal = Cart.subtotal();
  const connected = !!CHECKOUT_ENDPOINT;
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.go('shop')">← Keep shopping</button>
    <h1 style="margin-top:12px">🛒 Your Cart</h1>
    <div class="cartwrap">
      <div class="cartlist">
        ${items.map(x => `<div class="cartrow">
          <div class="cartart">${x.product.art}</div>
          <div class="cartinfo">
            <h3>${esc(x.product.name)}</h3>
            <span class="ptype ${x.product.type}">${x.product.type === "digital" ? "📥 Digital download" : "📦 Ships to you"}</span>
            <button class="cartremove" onclick="App.removeFromCart('${x.product.id}')">Remove</button>
          </div>
          <div class="cartqty">
            <button onclick="App.cartQty('${x.product.id}',-1)" aria-label="Decrease quantity">−</button>
            <span>${x.qty}</span>
            <button onclick="App.cartQty('${x.product.id}',1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="cartprice">${money(x.product.price * x.qty)}</div>
        </div>`).join("")}
      </div>
      <div class="cartsum">
        <h3>Order summary</h3>
        <div class="sumrow"><span>Subtotal</span><b>${money(subtotal)}</b></div>
        ${Cart.hasPhysical() ? `<div class="sumrow muted"><span>Shipping</span><span>Calculated at checkout</span></div>` : ""}
        <div class="sumrow muted"><span>Tax</span><span>Calculated at checkout</span></div>
        <button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="App.checkout()">🔒 Checkout securely</button>
        <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px" onclick="App.clearCart()">Empty cart</button>
        ${connected ? "" : `<p class="checkoutnote">💳 <b>Payments aren't switched on yet.</b> The cart works — connecting Stripe is a quick setup step (ask me and I'll walk you through it).</p>`}
      </div>
    </div>
  </div>`;
}

// ---------- Home ----------
function homeView() {
  return `
  <div class="hero">
    <span class="big-emoji">🌱</span>
    <h1>BrightSprouts Academy</h1>
    <p>Fun, printable lessons for <b>Kindergarten through Grade 12</b> — picture words, alphabet & counting for little ones, then Math, Reading, Vocabulary, Spelling, Writing, Science & History — plus <b>50 stories</b> that teach kindness, courage, and character. Made for parents. Loved by kids.</p>
    <button class="btn btn-primary" onclick="App.go('lessons')">🚀 Explore Lessons</button>
    <button class="btn btn-secondary" onclick="App.go('stories')">📖 Read Stories</button>
  </div>
  <div class="grid grid-3">
    <div class="feature"><div class="fe">🖨️</div><h3>Print & Learn</h3><p>Every lesson prints as a beautiful worksheet — with an optional answer key for parents.</p></div>
    <div class="feature"><div class="fe">📖</div><h3>50 Moral Stories</h3><p>Adventures, kids helping strangers, and helping at home — every story teaches a value.</p></div>
    <div class="feature"><div class="fe">✨</div><h3>Custom Story Maker</h3><p>Put YOUR child in the story! Pick a name, a setting, and a value — we write the tale.</p></div>
    <div class="feature"><div class="fe">🔢</div><h3>Endless Worksheets</h3><p>Every subject generates a fresh printable worksheet on demand — never the same sheet twice.</p></div>
  </div>
  <div class="card" style="text-align:center">
    <h2>How it works</h2>
    <p style="margin:10px 0 16px;color:#6a668c">1️⃣ Create a free account &nbsp;→&nbsp; 2️⃣ Pick a grade & subject &nbsp;→&nbsp; 3️⃣ Learn on screen or hit Print!</p>
    ${currentUser() ? `<button class="btn btn-primary" onclick="App.go('lessons')">Continue Learning ➜</button>`
      : `<button class="btn btn-primary" onclick="App.goAuth('signup')">Create Free Account</button>`}
  </div>`;
}

// ---------- Lessons ----------
function lessonsView() {
  const tiles = [];
  for (let g = 0; g <= 21; g++) {
    if (g === 15 || g === 16 || g === 17 || g === 18) continue;  // now folded into each grade's tabs
    const locked = !canGrade(g);
    const label = g === 0 ? "🌈 Kindergarten" : g === 13 ? "🌍 General" : g === 14 ? "⚗️ Extras"
                : g === 19 ? "⏳ History" : g === 20 ? "🪨 Geology" : g === 21 ? "💬 Spanish" : "Grade " + g;
    tiles.push(`<button class="grade-tile g${g}" onclick="App.openGrade(${g})">${locked ? '<span class="lock">🔒</span>' : ""}${label}</button>`);
  }
  return `<div class="view">
    <h1>📚 Pick a Grade</h1>
    <p class="subtitle">Every grade now packs it all in: Math • Reading • Vocabulary • Spelling • Writing • Science • History • Visual Art • Music • Computer Science • English • Books • Create — each matched to that grade's level ${tier() !== "premium" ? "&nbsp;·&nbsp; 🔒 = Premium" : ""}</p>
    <div class="grid grid-4">${tiles.join("")}</div>
  </div>`;
}

function lessonView() {
  const g = state.grade;
  // belt and braces: if state ever holds a subject this grade doesn't have, fall back to its first one
  let subj = state.subject;
  if (!LESSONS[g] || !LESSONS[g][subj]) subj = state.subject = subjectsFor(g)[0].key;
  const lesson = LESSONS[g][subj];
  const gradeLocked = !canGrade(g);
  const tabs = subjectsFor(g).map(s => {
    const locked = gradeLocked && !canSubject(g, s.key);
    return `<button class="${s.key === subj ? "active" : ""}" onclick="App.openSubject('${s.key}')">${s.emoji} ${s.label}${locked ? " 🔒" : ""}</button>`;
  }).join("");

  // Premium subject in a locked grade → show an upgrade card (Books stays free, reachable via its tab).
  if (!canSubject(g, subj)) {
    const u = currentUser();
    return `<div class="view">
      <button class="btn btn-ghost btn-sm no-print" onclick="App.go('lessons')">← All Grades</button>
      <h1 style="margin-top:14px">${gradeName(g)}</h1>
      <div class="tabs no-print">${tabs}</div>
      <div class="card" style="text-align:center;padding:44px 22px">
        <div style="font-size:54px">⭐</div>
        <h2>This subject is Premium</h2>
        <p class="subtitle">Unlock all of ${esc(gradeName(g))} — every subject, worksheet and lesson.${LESSONS[g] && LESSONS[g].books ? "<br>📚 <b>Books are free!</b> Tap the <b>Books</b> tab above to start reading right now." : ""}</p>
        <div class="lesson-tools no-print" style="justify-content:center">
          ${u ? `<button class="btn btn-primary" onclick="App.go('pricing')">⭐ Go Premium</button>`
              : `<button class="btn btn-primary" onclick="App.goAuth('signup')">Create a Free Account</button><button class="btn btn-secondary" onclick="App.go('pricing')">See Plans</button>`}
          ${LESSONS[g] && LESSONS[g].books ? `<button class="btn btn-ghost" onclick="App.openSubject('books')">📚 Read free Books</button>` : ""}
        </div>
      </div>
    </div>`;
  }

  let body = "";
  if (lesson.diagram) body += `<div class="biodiagram">${lesson.diagram}</div>`;
  if (lesson.passage) body += `<div class="lesson-tools no-print" style="margin-bottom:10px">${listenBtn("passage-say", "Read this to me")}</div>
    <div class="passage-box" id="passage-say" data-say="${esc(lesson.passage)}"><b>📄 Read this:</b><br><br>${esc(lesson.passage)}</div>`;
  if (lesson.cards) {
    body += `<div class="kgrid">` + lesson.cards.map(c =>
      `<div class="kcard">${c.l ? `<span class="kletter">${c.l}</span>` : ""}${c.svg ? c.svg : `<span class="kemoji">${c.e}</span>`}<span class="kname">${esc(c.n)}</span></div>`
    ).join("") + `</div>`;
  }
  if (lesson.spellWords) {
    body += `<div class="learn-box"><h3>🐝 This Week's Word List</h3><div class="spellgrid">` +
      lesson.spellWords.map(w => `<span>${esc(w)}</span>`).join("") + `</div></div>`;
  }
  if (lesson.numberGrid) {
    let cells = "";
    for (let n = 1; n <= 100; n++) cells += `<span class="${n % 10 === 0 ? "ten" : ""}">${n}</span>`;
    body += `<div class="numgrid">${cells}</div>`;
  }
  if (lesson.magicMaker) {
    if (!state.maker) state.maker = mmRandom();
    const m = state.maker;
    const chip = (part, key, label) => `<button class="mmchip ${m[part] === key ? "on" : ""}"
        onclick="App.mmSet('${part}','${key}')">${esc(label)}</button>`;
    body += `<div class="mmwrap">
      <div class="mmstage" id="mmstage">
        <div class="mmscene" id="mmscene">
          <svg viewBox="0 0 200 200" class="mmsvg" id="mmsvg" role="img"
               aria-label="A creature called ${esc(m.name)}">${mmSvg(m)}</svg>
        </div>
        <div class="mmshadow"></div>
        <p class="mmhint no-print">👆 Move your mouse or finger over ${esc(m.name)} — watch them lean out at you!</p>
      </div>
      <div class="mmpanel no-print">
        <div class="field">
          <label for="mmname">✏️ Name your creature</label>
          <input id="mmname" value="${esc(m.name)}" maxlength="24" oninput="App.mmName(this.value)">
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="App.mmSurprise()">🎲 Surprise Me!</button>
        <div class="mmparts">
          <div class="mmpart"><span>🏞️ Where</span><div>${Object.keys(MM_SCENES).map(k => chip("scene", k, k)).join("")}</div></div>
          <div class="mmpart"><span>🎨 Colour</span><div>${MM_COLORS.map((c, i) =>
            `<button class="mmswatch ${m.colour === i ? "on" : ""}" title="${esc(c[0])}"
              style="background:${c[1]};border-color:${c[2]}" onclick="App.mmSet('colour',${i})"></button>`).join("")}</div></div>
          <div class="mmpart"><span>🫧 Body</span><div>${Object.keys(MM_BODIES).map(k => chip("body", k, k)).join("")}</div></div>
          <div class="mmpart"><span>😀 Head</span><div>${Object.keys(MM_HEADS).map(k => chip("head", k, k)).join("")}</div></div>
          <div class="mmpart"><span>👀 Eyes</span><div>${Object.keys(MM_EYES).map(k => chip("eyes", k, k)).join("")}</div></div>
          <div class="mmpart"><span>👄 Mouth</span><div>${Object.keys(MM_MOUTHS).map(k => chip("mouth", k, k)).join("")}</div></div>
          <div class="mmpart"><span>👂 Ears &amp; horns</span><div>${Object.keys(MM_TOPS).map(k => chip("top", k, k)).join("")}</div></div>
          <div class="mmpart"><span>🦋 Wings</span><div>${Object.keys(MM_WINGS).map(k => chip("wings", k, k)).join("")}</div></div>
          <div class="mmpart"><span>🐾 Tail</span><div>${Object.keys(MM_TAILS).map(k => chip("tail", k, k)).join("")}</div></div>
          <div class="mmpart"><span>🎩 Accessory</span><div>${Object.keys(MM_EXTRAS).map(k => chip("extra", k, k)).join("")}</div></div>
        </div>
        <div class="mmsave">
          <button class="btn btn-secondary" onclick="App.mmSave()">💾 Save as a picture</button>
          <button class="btn btn-ghost" onclick="window.print()">🖨️ Print</button>
        </div>
        <p class="mmcount">${mmCombos().toLocaleString()} different creatures are possible in here.</p>
      </div>
    </div>
    <div class="print-only" style="text-align:center;margin-top:10px"><h2>${esc(m.name)}</h2></div>`;
  }
  if (lesson.engineerBuild) {
    body += engineerBuildHtml();
  }
  if (lesson.engDoodle) {
    body += `<div class="engdoodle">${doodle(lesson.engDoodle)}</div>`;
  }
  if (lesson.engPlan) {
    body += ENG_PLAN.map(b => `
      <div class="fband csband">
        <div class="bandhead" style="border:none;margin:0 0 10px;padding:0">${doodle(b.doodle)}
          <div><h3 style="margin:0">${esc(b.band)}</h3></div></div>
        <div class="enggrid">${ENG_DOMAINS.map(d => `
          <div class="engdom"><h4>${d[1]}</h4><ul>${b[d[0]].map(g => `<li>${esc(g)}</li>`).join("")}</ul></div>`).join("")}
        </div>
        <p class="csmile">🏁 <b>Milestone:</b> ${esc(b.milestone)}</p>
      </div>`).join("");
    body += `<div class="bookfoot">${doodle("speech")}
      <p><b>How to use this plan:</b> the four domains grow together, so touch all four every week —
      even five minutes of each. The Reading, Writing, Spelling and Vocabulary tabs inside Grades 1–12
      on this site are the daily practice ground for everything named here; the domain tabs above
      hold the ideas, the games and the endless worksheets.</p></div>`;
  }
  if (lesson.engBand != null && typeof ENG_PLAN !== "undefined" && ENG_PLAN[lesson.engBand]) {
    const eb = ENG_PLAN[lesson.engBand];
    body += `<div class="fband csband">
      <div class="bandhead" style="border:none;margin:0 0 10px;padding:0">${doodle(eb.doodle)}
        <div><h3 style="margin:0">${esc(eb.band)}</h3></div></div>
      <div class="enggrid">${ENG_DOMAINS.map(d => `
        <div class="engdom"><h4>${d[1]}</h4><ul>${eb[d[0]].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}
      </div>
      <p class="csmile">🏁 <b>Milestone:</b> ${esc(eb.milestone)}</p>
    </div>
    <div class="bookfoot">${doodle("speech")}
      <p><b>Grow all four together:</b> your grade's <b>Reading, Writing, Spelling and Vocabulary</b> tabs are the daily practice ground for everything above — touch a little of each every week.</p></div>`;
  }
  if (lesson.csPlan) {
    body += CS_PLAN.map((b, i) => `
      <div class="fband csband">
        <h3>${esc(b.band)}</h3>
        <div class="csgoals">
          <div><h4>🎯 What they learn</h4><ul>${b.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul></div>
          <div>
            <h4>🧰 Free tools</h4><p>${esc(b.tools)}</p>
            <h4>🏁 Milestone</h4><p class="csmile">${esc(b.milestone)}</p>
          </div>
        </div>
      </div>`).join("");
    body += `<div class="bookfoot">${doodle("rocket")}
      <p><b>How to use this plan:</b> find your child's band, open that tab above for the lesson,
      and aim for the milestone — there's no deadline. A child who starts at twelve catches up fast;
      the bands are about readiness, not a race. Everything named here is free.</p></div>`;
  }
  if (lesson.readOnline) {
    if (state.reading) return readerHtml();
    const bands = { "1-2": "Grades 1–2", "3-5": "Grades 3–5", "6-8": "Grades 6–8", "9-12": "Grades 9–12" };
    const doodles = { "1-2": "openbook", "3-5": "dragon", "6-8": "magnifier", "9-12": "quill" };
    const showBands = lesson.booksBand ? [lesson.booksBand] : Object.keys(bands);
    showBands.forEach(bd => {
      const list = PD_BOOKS.filter(b => b.b === bd);
      if (!list.length) return;
      body += `<div class="bandhead">${doodle(doodles[bd])}<div><h3>${bands[bd]}</h3>
                 <p>${list.length} free book${list.length === 1 ? "" : "s"} to read right now</p></div></div>`;
      body += `<div class="grid grid-3">` + list.map(b => `
        <div class="pdcard" onclick="App.readBook('${b.slug}')">
          <div class="pdspine"></div>
          <h4>${esc(b.t)}</h4>
          <p class="bookby">${esc(b.a)} · ${b.y}</p>
          <span class="moral-tag">${esc(b.g)}</span>
          <p class="bookwhy">${esc(b.w)}</p>
          <p class="pdmeta">${b.ch} chapter${b.ch === 1 ? "" : "s"} · ${(b.words / 1000).toFixed(0)}k words · about ${Math.max(1, Math.round(b.words / 9000))} hr read</p>
          <button class="btn btn-primary btn-sm">📖 Read it free</button>
        </div>`).join("") + `</div>`;
    });
    body += `<div class="bookfoot">${doodle("lamp")}
      <p><b>Why are these free?</b> Every book here is out of copyright, which means it belongs to
      everybody now. They come from Project Gutenberg, a volunteer library that has been digitising
      public-domain books since 1971. Read them, print them, share them — they're yours.</p></div>`;
  }
  if (lesson.tracingSheet) {
    // A tracing row: three-line handwriting guides, one solid model glyph, then dashed copies.
    // Glyphs are real text rendered as outlines (fill:none + dashed stroke) so they trace properly.
    const FONT = "'Comic Sans MS','Century Gothic','Trebuchet MS',Verdana,sans-serif";
    // Guide lines come from MEASURED Comic Sans ink (canvas actualBoundingBox), not guesses.
    // At 100px: ascender h=78, capital A=72, digit=76, x-height=54, descender g=28. Ink does not scale
    // perfectly linearly (at 64px the h measures 51, i.e. .797em), so each ratio carries a little margin —
    // a glyph poking through its own guide line is exactly what a tracing sheet must not do.
    // Top line = ascender, so b/d/h/k/l touch it and capitals sit just beneath, as on real handwriting paper.
    const SIZE = 64, ASC = 0.80 * SIZE, XH = 0.55 * SIZE, DESC = 0.29 * SIZE;
    const TOP = 8, BASE = TOP + ASC, MID = BASE - XH, DLINE = BASE + DESC, H = DLINE + 8, W = 480;
    const traceRow = (label, reps) => {
      const step = (W - 24) / reps;
      let g = "";
      for (let i = 0; i < reps; i++) {
        const model = i === 0;
        g += `<text x="${12 + i * step}" y="${BASE}" font-family="${FONT}" font-size="${SIZE}"
              fill="none" stroke="${model ? "#8a86a8" : "#c4bedd"}" stroke-width="${model ? 1.6 : 1.1}"
              ${model ? "" : 'stroke-dasharray="4 3.2"'} stroke-linecap="round">${esc(label)}</text>`;
      }
      return `<svg class="tracerow" viewBox="0 0 ${W} ${H}" role="img" aria-label="Trace ${esc(label)}">
        <line x1="6" y1="${TOP}" x2="${W - 6}" y2="${TOP}" stroke="#ddd8ee" stroke-width="1"/>
        <line x1="6" y1="${MID}" x2="${W - 6}" y2="${MID}" stroke="#ddd8ee" stroke-width="1" stroke-dasharray="6 5"/>
        <line x1="6" y1="${BASE}" x2="${W - 6}" y2="${BASE}" stroke="#9a94b8" stroke-width="1.6"/>
        <line x1="6" y1="${DLINE}" x2="${W - 6}" y2="${DLINE}" stroke="#ece8f8" stroke-width="1"/>
        ${g}
      </svg>`;
    };
    const A = n => String.fromCharCode(65 + n), a = n => String.fromCharCode(97 + n);
    const m = state.traceMode;
    let rows = [], grid = false;
    if (m === "upper")      rows = Array.from({ length: 26 }, (_, i) => [A(i), 6]);
    else if (m === "lower") rows = Array.from({ length: 26 }, (_, i) => [a(i), 6]);
    else if (m === "both")  rows = Array.from({ length: 26 }, (_, i) => [A(i) + a(i), 4]);
    else if (m === "num10") rows = Array.from({ length: 10 }, (_, i) => [String(i + 1), 6]);
    else if (m === "num20") rows = Array.from({ length: 20 }, (_, i) => [String(i + 1), 6]);
    else if (m === "num100") grid = true;
    else { // random practice set — a handful of glyphs, lots of repetition
      if (!state.tracePick) {
        const pool = Array.from({ length: 26 }, (_, i) => A(i))
          .concat(Array.from({ length: 26 }, (_, i) => a(i)))
          .concat(Array.from({ length: 10 }, (_, i) => String(i + 1)));
        state.tracePick = shuffleArr(pool).slice(0, 8);
      }
      rows = state.tracePick.map(c => [c, 6]);
    }

    body += `<div class="trace-bar no-print">` + TRACE_MODES.map(t =>
      `<button class="btn btn-sm ${state.traceMode === t[0] ? "btn-primary" : "btn-ghost"}" onclick="App.traceMode('${t[0]}')">${esc(t[1])}</button>`).join("") + `</div>`;

    if (grid) {
      let cells = "";
      for (let n = 1; n <= 100; n++) {
        // digits are .76em tall: font 26 -> 19.8 high, so a baseline at 32 keeps them inside the 40-high cell
        cells += `<div class="tracecell">
          <svg viewBox="0 0 48 42" role="img" aria-label="Trace the number ${n}">
            <line x1="3" y1="33" x2="45" y2="33" stroke="#c9c4dd" stroke-width="1"/>
            <text x="24" y="32" text-anchor="middle" font-family="${FONT}" font-size="26"
                  fill="none" stroke="#c4bedd" stroke-width="1.1" stroke-dasharray="3.4 2.8" stroke-linecap="round">${n}</text>
          </svg></div>`;
      }
      body += `<p class="lesson-intro">Trace every number from 1 to 100. Say each one out loud as you write it!</p>
               <div class="tracegrid">${cells}</div>`;
    } else {
      body += `<div class="tracesheet">` + rows.map(r =>
        `<div class="tracerow-wrap"><span class="tracelabel">${esc(r[0])}</span>${traceRow(r[0], r[1])}</div>`).join("") + `</div>`;
    }
  }
  if (lesson.coloringBook) {
    const pool = COLOR_ART.filter(a => state.colorTheme === "all" || a[2] === state.colorTheme);
    const n = state.colorBig ? 2 : 6;
    if (!state.colorPick || state.colorPick.theme !== state.colorTheme || state.colorPick.big !== state.colorBig) {
      state.colorPick = { theme: state.colorTheme, big: state.colorBig, items: shuffleArr(pool).slice(0, Math.min(n, pool.length)) };
    }
    body += `<div class="color-bar no-print">
      ${COLOR_THEMES.map(t => `<button class="btn btn-sm ${state.colorTheme === t[0] ? "btn-primary" : "btn-ghost"}" onclick="App.colorTheme('${t[0]}')">${t[1]}</button>`).join("")}
      <span class="color-sep"></span>
      <button class="btn btn-sm ${state.colorBig ? "btn-ghost" : "btn-secondary"}" onclick="App.colorSize(false)">6 per page</button>
      <button class="btn btn-sm ${state.colorBig ? "btn-secondary" : "btn-ghost"}" onclick="App.colorSize(true)">2 big pictures</button>
    </div>`;
    body += `<div class="color-grid ${state.colorBig ? "big" : ""}">` + state.colorPick.items.map(a =>
      `<figure class="colorpage">
         <svg viewBox="0 0 100 100" class="lineart" role="img" aria-label="${esc(a[1])} colouring picture">
           <g fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${a[3]}</g>
         </svg>
         <figcaption>${esc(a[1])}</figcaption>
       </figure>`).join("") + `</div>`;
    body += `<p class="no-print" style="font-size:.82rem;color:#8a86a8;margin-top:10px">${pool.length} pictures in this theme · press <b>New Pictures</b> for a different set · <b>Print</b> gives you clean outlines with no website around them.</p>`;
  }
  if (lesson.periodicTable) {
    const catColor = {}; ELEM_CATS.forEach(c => catColor[c[0]] = c[2]);
    body += `<div class="legend">` + ELEM_CATS.map(c =>
      `<span><i style="background:${c[2]}"></i>${esc(c[1])}</span>`).join("") + `</div>`;
    body += `<div class="ptable-scroll"><div class="ptable">` + ELEMENTS.map(e =>
      `<div class="el ${e[4]}" style="grid-column:${e[5]};grid-row:${e[6]};background:${catColor[e[4]]}">
         <span class="z">${e[0]}</span><span class="sym">${esc(e[1])}</span>
         <span class="nm">${esc(e[2])}</span><span class="ms">${esc(e[3])}</span>
       </div>`).join("") +
      `<div class="el-note" style="grid-column:3 / span 15;grid-row:8">↓ Lanthanides (57–71) and actinides (89–103) belong in the gaps above ↓</div>` +
      `</div></div>`;
    body += `<p style="font-size:.8rem;color:#8a86a8;margin-top:10px">Element data from PubChem, US National Library of Medicine. Atomic masses are standard atomic weights.</p>`;
  }
  if (lesson.abacusDemo) {
    const rods = [
      { label: "Thousands", h: 0, e: 2 }, { label: "Hundreds", h: 1, e: 3 },
      { label: "Tens", h: 0, e: 4 }, { label: "Ones", h: 1, e: 2 }
    ];
    const value = rods.map(r => r.h * 5 + r.e).join("");
    body += `<div class="abacus-wrap">
      <svg class="abacus" viewBox="0 0 380 284" role="img" aria-label="Soroban abacus showing ${value}">
        <rect x="8" y="8" width="364" height="268" rx="12" fill="#8d5524" />
        <rect x="22" y="22" width="336" height="230" rx="6" fill="#fff6e5" />
        <rect x="22" y="86" width="336" height="9" fill="#8d5524" />
        ${rods.map((r, i) => {
          const x = 60 + i * 84;
          let s = `<line x1="${x}" y1="30" x2="${x}" y2="246" stroke="#c68642" stroke-width="4"/>`;
          // heaven bead (worth 5): pushed DOWN to the bar = counted; parked up = 0
          s += `<ellipse cx="${x}" cy="${r.h ? 74 : 40}" rx="26" ry="12" fill="${r.h ? "#ff6b9d" : "#e9e2f5"}" stroke="#7c5cbf" stroke-width="2"/>`;
          // 4 earth beads (worth 1 each): pushed UP to the bar = counted; parked at the bottom = 0
          for (let b = 0; b < 4; b++) {
            const counted = b < r.e;
            const y = counted ? 108 + b * 26 : 238 - (3 - b) * 26;
            s += `<ellipse cx="${x}" cy="${y}" rx="26" ry="12" fill="${counted ? "#2ec4b6" : "#e9e2f5"}" stroke="#7c5cbf" stroke-width="2"/>`;
          }
          s += `<text x="${x}" y="268" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">${r.label}</text>`;
          s += `<text x="${x}" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">${r.h * 5 + r.e}</text>`;
          return s;
        }).join("")}
      </svg>
      <div class="abacus-key">
        <p><b>This abacus is showing ${value}.</b> Read it rod by rod, left to right — just like a written number.</p>
        <p><span class="dot pink"></span> Pink bead <b>above</b> the bar = <b>5</b> (only when pushed <i>down</i> to the bar)</p>
        <p><span class="dot teal"></span> Teal beads <b>below</b> the bar = <b>1</b> each (only when pushed <i>up</i> to the bar)</p>
        <p><span class="dot grey"></span> Grey beads are pushed away from the bar — they count as <b>0</b></p>
        <p style="margin-top:8px">Example — the hundreds rod shows ${rods[1].h * 5 + rods[1].e}: one 5-bead down${rods[1].e ? ` plus ${rods[1].e} one-bead${rods[1].e > 1 ? "s" : ""} up` : ""}.</p>
      </div>
    </div>`;
  }
  if (lesson.formulaSheet) {
    body += FORMULAS.map(b => `
      <div class="fband">
        <h3>${esc(b.band)}</h3>
        <table class="ftable"><tr><th>Formula for…</th><th>The formula</th><th>What it means</th></tr>` +
        b.items.map(f => `<tr><td>${esc(f[0])}</td><td class="fmath">${esc(f[1])}</td><td class="fmean">${esc(f[2])}</td></tr>`).join("") +
        `</table></div>`).join("");
  }
  if (lesson.mathTables) {
    const grid = (title, size, fn, note) => {
      let h = `<h3 style="margin:20px 0 8px">${title}</h3><p class="lesson-intro" style="margin-bottom:8px">${note}</p><div style="overflow-x:auto"><table class="mtable"><tr><th class="corner">${title.includes("Addition") ? "+" : "×"}</th>`;
      for (let c = 1; c <= size; c++) h += `<th>${c}</th>`;
      h += `</tr>`;
      for (let r = 1; r <= size; r++) {
        h += `<tr><th>${r}</th>`;
        for (let c = 1; c <= size; c++) h += `<td class="${r === c ? "diag" : ""}">${fn(r, c)}</td>`;
        h += `</tr>`;
      }
      return h + `</table></div>`;
    };
    body += grid("Addition Table (1–12)", 12, (r, c) => r + c, "Find a row and a column — where they meet is the answer. 7 + 8 = 15.");
    body += grid("Multiplication Table (1–12)", 12, (r, c) => r * c, "The shaded diagonal shows the square numbers: 1, 4, 9, 16, 25 …");
  }
  if (lesson.floraFauna) {
    const conts = LESSONS[13].geography.continents;
    body += `<div class="cont-nav no-print">` + conts.filter(c => c.countries).map((c, i) =>
      `<button class="btn btn-ghost btn-sm" onclick="document.getElementById('ff-${i}').scrollIntoView({behavior:'smooth'})">${c.emoji} ${esc(c.name)}</button>`).join("") + `</div>`;
    conts.forEach((c, i) => {
      if (!c.countries) return;
      body += `<div id="ff-${i}"><h3 style="margin:22px 0 10px;font-size:1.3rem">${c.emoji} ${esc(c.name)}</h3>
        <div style="overflow-x:auto"><table class="word-table"><tr><th>Flag</th><th>Country</th><th>🌿 Flora (plants)</th><th>🐾 Fauna (animals)</th></tr>` +
        c.countries.map(k => {
          const ff = FF_COUNTRY[k[0]] || { flora: [], fauna: [] };
          return `<tr><td>${flagImg(k[0])}</td><td><b>${esc(k[1])}</b></td><td><div class="spwrap">${ff.flora.map(spChip).join("")}</div></td><td><div class="spwrap">${ff.fauna.map(spChip).join("")}</div></td></tr>`;
        }).join("") + `</table></div></div>`;
    });
    body += `<p style="font-size:.8rem;color:#8a86a8;margin-top:14px">Each species is listed with its scientific name and was checked against occurrence records in the Global Biodiversity Information Facility (GBIF). Photos courtesy of Wikimedia Commons contributors.</p>`;
  }
  if (lesson.continents) {
    body += `<div class="cont-nav no-print">` + lesson.continents.map((c, i) =>
      `<button class="btn btn-ghost btn-sm" onclick="document.getElementById('cont-${i}').scrollIntoView({behavior:'smooth'})">${c.emoji} ${esc(c.name)}</button>`).join("") + `</div>`;
    lesson.continents.forEach((c, i) => {
      body += `<div id="cont-${i}"><h3 style="margin:22px 0 6px;font-size:1.3rem">${c.emoji} ${esc(c.name)}${c.countries ? ` — ${c.countries.length} countries` : ""}</h3>
        <p class="lesson-intro" style="margin-bottom:10px">${esc(c.facts)}</p>`;
      if (c.countries) {
        body += `<div style="overflow-x:auto"><table class="word-table"><tr><th>Flag</th><th>Country</th><th>Capital</th></tr>` +
          c.countries.map(k => `<tr><td>${flagImg(k[0])}</td><td><b>${esc(k[1])}</b></td><td>${esc(k[2])}</td></tr>`).join("") + `</table></div>`;
      }
      body += `</div>`;
    });
  }
  if (lesson.earthTimeline) {
    const art = (typeof EARTH_ART !== "undefined") ? EARTH_ART : [];
    const dinoGallery = (typeof EARTH_DINOS !== "undefined") ? `<div class="dinozone">
      <h4>🦕 Meet some dinosaurs!</h4>
      <div class="dinogrid">${EARTH_DINOS.map(d => `<div class="dinocard"><div class="dinoart">${d.svg}</div><span class="dinoname">${esc(d.name)}</span>${d.fact ? `<span class="dinofact">${esc(d.fact)}</span>` : ""}</div>`).join("")}</div>
    </div>` : "";
    body += `<div class="eratl">` + EARTH_ERAS.map((e, i) => `
      <div class="eracard" style="--ec:${e.color}">
        <div class="eradot">${e.emoji}</div>
        <div class="erabody">
          ${art[i] ? `<div class="era-illus">${art[i]}</div>` : ""}
          <div class="erahead"><h3>${esc(e.name)}</h3><span class="erawhen">${esc(e.when)}</span></div>
          <p class="erablurb">${esc(e.blurb)}</p>
          <ul class="erafacts">${e.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
          ${/Age of Dino/i.test(e.name) ? dinoGallery : ""}
        </div>
      </div>`).join("") + `</div>`;
    body += `<div class="bookfoot">${doodle("rocket")}
      <p><b>How new are we?</b> If all of Earth's history were squeezed into one single day, humans wouldn't show up until the last few SECONDS before midnight! Everything above happened before the very first stone tool. Next stop — the human story: open the <b>Human Story</b> tab. 🌱</p></div>`;
  }
  if (lesson.erasTimeline) {
    const hart = (typeof HUMAN_ART !== "undefined") ? HUMAN_ART : [];
    const hnot = (typeof HUMAN_NOTABLES !== "undefined") ? HUMAN_NOTABLES : [];
    body += `<div class="eratl">` + HIST_ERAS.map((e, i) => `
      <div class="eracard" style="--ec:${e.color}">
        <div class="eradot">${e.emoji}</div>
        <div class="erabody">
          ${hart[i] ? `<div class="era-illus">${hart[i]}</div>` : ""}
          <div class="erahead"><h3>${esc(e.name)}</h3><span class="erawhen">${esc(e.when)}</span></div>
          <p class="erablurb">${esc(e.blurb)}</p>
          <ul class="erafacts">${e.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
          ${(hnot[i] && hnot[i].length) ? `<div class="dinozone people">
            <h4>⭐ Notable people &amp; arts</h4>
            <div class="dinogrid">${hnot[i].map(p => `<div class="dinocard"><div class="dinoart">${p.svg}</div><span class="dinoname">${esc(p.name)}</span>${p.note ? `<span class="dinofact">${esc(p.note)}</span>` : ""}</div>`).join("")}</div>
          </div>` : ""}
        </div>
      </div>`).join("") + `</div>`;
    body += `<div class="bookfoot">${doodle("rocket")}
      <p><b>And the story keeps going!</b> Every era was built on the one before it — the tools, ideas, and discoveries all added up to the world we live in today. The next chapter of history hasn't been written yet… and one day it might have YOU in it. 🌱</p></div>`;
  }
  if (lesson.words) {
    body += `<table class="word-table"><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>` +
      lesson.words.map(w => `<tr><td class="w">${esc(w[0])}</td><td>${esc(w[1])}</td><td><i>${esc(w[2])}</i></td></tr>`).join("") + `</table>`;
  }

  const sheetKey = g + "-" + subj;
  // Note: the Earth's Story timeline (earthTimeline) DOES get a worksheet — it has a questions bank.
  const noQuiz = lesson.coloringBook || lesson.tracingSheet || lesson.csPlan || lesson.engPlan || lesson.erasTimeline || lesson.engineerBuild || (lesson.engBand != null) || lesson.readOnline || lesson.magicMaker || lesson.earthTimeline;
  if (!noQuiz && !state.sheetCache[sheetKey]) state.sheetCache[sheetKey] = makeSheet(g, subj, lesson);
  const questions = noQuiz ? [] : state.sheetCache[sheetKey];
  const qHtml = questions.length ? `
    <div class="questions"><h3>✏️ Practice Time <button class="btn btn-secondary btn-sm no-print" onclick="App.newSheet()">🎲 New Worksheet</button></h3>
      ${questions.map((qa, i) => `<div class="q-item">${i + 1}. ${qa.html ? qa.q : esc(qa.q)}${'<span class="write-line print-only"></span>'.repeat(subj === "writing" ? 5 : 1)}</div>`).join("")}
    </div>
    <div class="answers-section answers-page" style="display:none">
      <h3>✅ Answer Key — ${esc(lesson.title)} (${gradeName(g)})</h3>
      ${questions.map((qa, i) => `<div class="q-item">${i + 1}. ${qa.html ? qa.q : esc(qa.q)}<span class="answer">Answer: ${esc(qa.a)}</span></div>`).join("")}
    </div>` : "";

  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.go('lessons')">← All Grades</button>
    <h1 style="margin-top:14px">${gradeName(g)}</h1>
    <div class="tabs no-print">${tabs}</div>
    <div class="card" id="lesson-card">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — ${gradeName(g)} ${subjectsFor(g).find(s => s.key === subj).label}</span><span>Name: ____________ &nbsp; Date: ________</span></div>
      <div class="lesson-head"><span class="lesson-emoji">${lesson.emoji}</span><h2>${esc(lesson.title)}</h2></div>
      <p class="lesson-intro">${esc(lesson.intro)}</p>
      ${lesson.learn ? `<div class="learn-box"><h3>🧠 Let's Learn!</h3><ul>${lesson.learn.map(l => `<li>${esc(l)}</li>`).join("")}</ul></div>` : ""}
      ${body}
      ${lesson.activity ? `<div class="activity-box"><h3>🎉 Fun Family Activity</h3><p>${esc(lesson.activity)}</p></div>` : ""}
      ${qHtml}
      <div class="lesson-tools no-print">
        ${lesson.coloringBook ? `<button class="btn btn-secondary" onclick="App.newColorPage()">🎲 New Pictures</button>` : ""}
        ${lesson.tracingSheet && state.traceMode === "random" ? `<button class="btn btn-secondary" onclick="App.newTracePage()">🎲 New Practice Set</button>` : ""}
        <button class="btn btn-primary" onclick="window.print()">🖨️ Print ${lesson.coloringBook ? "Colouring Page" : lesson.tracingSheet ? "Tracing Sheet" : "Worksheet"}</button>
        ${questions.length ? `<label><input type="checkbox" id="key-toggle" onchange="App.toggleKey(this.checked)"> Show / print answer key</label>` : ""}
      </div>
    </div>
  </div>`;
}

// ---------- Stories ----------
function storiesView() {
  const filters = [["all", "🌟 All Stories"], ...Object.entries(THEME_LABELS)];
  const fHtml = filters.map(([k, l]) =>
    `<button class="${state.storyFilter === k ? "active" : ""}" onclick="App.filterStories('${k}')">${l}</button>`).join("");
  const list = STORIES.filter(s => state.storyFilter === "all" || s.theme === state.storyFilter);
  const cards = list.map(s => {
    const locked = !canStory(s.id);
    return `<div class="story-card" style="cursor:pointer" onclick="App.openStory(${s.id})">
      ${locked ? '<span class="lock-tag">🔒</span>' : ""}
      ${sceneFor(s.id)}
      <h3>${esc(s.title)}</h3>
      <div class="meta">${THEME_LABELS[s.theme]} · Ages ${s.ages}</div>
      <div class="moral-tag">💡 ${esc(s.moral)}</div>
    </div>`;
  }).join("");
  return `<div class="view">
    <h1>📖 Story Library</h1>
    <p class="subtitle">50 read-aloud stories, each with a moral value to talk about together. ${tier() !== "premium" ? "🔒 = Premium" : ""}</p>
    <div class="story-filters">${fHtml}</div>
    <div class="grid grid-3">${cards}</div>
  </div>`;
}

// ---------- Read Online reader ----------
function readerHtml() {
  const r = state.reading;
  if (r.loading) return `<div class="view"><div class="card" style="text-align:center;padding:60px">
    ${doodle("openbook")}<h2>Opening the book…</h2><p class="subtitle">Fetching ${esc(r.title)}</p></div></div>`;
  if (r.error) return `<div class="view"><div class="card" style="text-align:center;padding:50px">
    <h2>😕 That book wouldn't open</h2><p class="subtitle">${esc(r.error)}</p>
    <button class="btn btn-primary" onclick="App.closeBook()">← Back to the library</button></div></div>`;
  const ch = r.book.chapters[r.ch];
  const total = r.book.chapters.length;
  const chapterText = ch.t + ". " + ch.p.join(" ");
  return `<div class="view">
    <div class="readerbar no-print">
      <button class="btn btn-ghost btn-sm" onclick="App.closeBook()">← Library</button>
      <select onchange="App.gotoChapter(this.value)" class="chsel">
        ${r.book.chapters.map((c, i) => `<option value="${i}" ${i === r.ch ? "selected" : ""}>${i + 1}. ${esc(c.t)}</option>`).join("")}
      </select>
      <span class="readsize">
        <button class="btn btn-ghost btn-sm" onclick="App.readSize(-1)" title="Smaller text">A−</button>
        <button class="btn btn-ghost btn-sm" onclick="App.readSize(1)" title="Bigger text">A+</button>
      </span>
      <span id="ch-say" data-say="${esc(chapterText)}" style="display:none"></span>
      ${listenBtn("ch-say", "Listen")}
      <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print chapter</button>
    </div>
    <div class="card readerpage" style="font-size:${state.readFont}px">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — Read Online</span><span>${esc(r.book.title)}</span></div>
      <div class="readhead">
        <h1>${esc(r.book.title)}</h1>
        <p class="subtitle">${esc(r.book.author)} · Chapter ${r.ch + 1} of ${total}</p>
        <div class="readprog no-print"><i style="width:${Math.round((r.ch + 1) / total * 100)}%"></i></div>
      </div>
      <h2 class="chtitle">${esc(ch.t)}</h2>
      ${ch.p.map((p, i) => (i > 0 && i % 8 === 0 ? `<div class="paradoodle no-print">${doodle(r.doodles[(i / 8 | 0) % r.doodles.length])}</div>` : "") +
        `<p class="readp">${esc(p)}</p>`).join("")}
      <div class="readnav no-print">
        <button class="btn btn-ghost" ${r.ch === 0 ? "disabled" : ""} onclick="App.gotoChapter(${r.ch - 1})">← Previous</button>
        <span>${r.ch + 1} / ${total}</span>
        <button class="btn btn-primary" ${r.ch === total - 1 ? "disabled" : ""} onclick="App.gotoChapter(${r.ch + 1})">Next chapter →</button>
      </div>
      ${r.ch === total - 1 ? `<div class="bookend">${doodle("stack")}<h3>🎉 You finished ${esc(r.book.title)}!</h3>
        <p>That's ${esc(r.book.author)} read cover to cover. Go and tell someone.</p>
        <button class="btn btn-primary" onclick="App.closeBook()">Pick another book</button></div>` : ""}
      <p class="pdsource">Public domain · ${esc(r.book.source)}</p>
    </div>
  </div>`;
}

function sceneFor(id, cls) {
  const key = (typeof STORY_ART !== "undefined") ? STORY_ART[id] : null;
  const svg = (key && typeof STORY_SCENES !== "undefined") ? STORY_SCENES[key] : null;
  return svg ? `<svg class="storyscene ${cls || ""}" viewBox="0 0 220 130" role="img"
                 aria-label="An illustration for this story">${svg}</svg>` : "";
}
function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return { words, mins: Math.max(2, Math.round(words / 110)) }; // ~110 wpm read aloud to a child
}
function storyView() {
  const s = STORIES.find(x => x.id === state.currentStory);
  const rt = readingTime(s.text);
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.go('stories')">← Story Library</button>
    <div class="card" style="margin-top:14px">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — Story Time</span><span>${THEME_LABELS[s.theme]}</span></div>
      ${sceneFor(s.id)}
      <h1>${esc(s.title)}</h1>
      <p class="subtitle">${THEME_LABELS[s.theme]} · Ages ${s.ages} · 📖 about ${rt.mins} minutes to read aloud</p>
      <div class="lesson-tools no-print" style="margin-bottom:12px">${listenBtn("story-say", "Read this to me")}</div>
      <div class="story-full" id="story-say" data-say="${esc(s.title + ". " + s.text + " The moral of the story: " + s.moral)}">${esc(s.text)}</div>
      <div class="moral-banner">💡 <b>The moral of the story:</b> ${esc(s.moral)}</div>
      <div class="learn-box no-print"><h3>💬 Talk about it together</h3><ul>
        <li>What was the hardest choice a character had to make?</li>
        <li>Have you ever been in a situation like this? What did you do?</li>
        <li>What would YOU do differently, and why?</li>
      </ul></div>
      <div class="lesson-tools no-print"><button class="btn btn-primary" onclick="window.print()">🖨️ Print Story</button></div>
    </div>
  </div>`;
}

// ---------- Story Maker ----------
function makerView() {
  const left = customLeft();
  const settingOpts = Object.entries(SETTINGS_DATA).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");
  const valueOpts = Object.entries(VALUES_DATA).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");
  const madeHtml = state.madeStory ? `
    <div class="card" id="made-story">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — A Custom Story</span><span>Starring someone special!</span></div>
      <h2>✨ ${esc(state.madeStory.title)}</h2>
      <div class="lesson-tools no-print" style="margin-bottom:12px">${listenBtn("made-say", "Read this to me")}</div>
      <div class="story-full" id="made-say" data-say="${esc(state.madeStory.title + ". " + state.madeStory.text + " The moral of the story: " + state.madeStory.moral)}">${esc(state.madeStory.text)}</div>
      <div class="moral-banner">💡 <b>The moral of the story:</b> ${esc(state.madeStory.moral)}</div>
      <div class="lesson-tools no-print">
        <button class="btn btn-primary" onclick="window.print()">🖨️ Print This Story</button>
        <button class="btn btn-secondary" onclick="App.createStory()">🎲 Remix (same choices, new story)</button>
      </div>
    </div>` : "";
  return `<div class="view">
    <h1>✨ Custom Story Maker</h1>
    <p class="subtitle">Make your child the hero! Pick the details and we'll write a one-of-a-kind story with a moral.
      ${left !== Infinity ? `<br><b>${left}</b> free custom ${left === 1 ? "story" : "stories"} remaining — <a style="color:var(--pink);cursor:pointer;font-weight:700" onclick="App.go('pricing')">go Premium for unlimited ⭐</a>` : ""}</p>
    <div class="card no-print">
      <div class="maker-form">
        <div class="field"><label>⭐ Hero's name (your child!)</label><input id="mk-name" placeholder="e.g. Maya" maxlength="20"></div>
        <div class="field"><label>🐾 Best friend or sidekick</label><input id="mk-friend" placeholder="e.g. Rex the dog" maxlength="24"></div>
        <div class="field"><label>🗺️ Where does it happen?</label><select id="mk-setting">${settingOpts}</select></div>
        <div class="field"><label>🎬 What kind of story?</label><select id="mk-theme">
          <option value="adventure">🗺️ An exciting adventure</option>
          <option value="strangers">🤝 Helping a stranger</option>
          <option value="home">🏠 Helping out at home</option></select></div>
        <div class="field"><label>💡 What value should it teach?</label><select id="mk-value">${valueOpts}</select></div>
        <div class="field full"><button class="btn btn-primary" style="width:100%" onclick="App.createStory()">✨ Write My Story!</button></div>
      </div>
      <div id="mk-msg"></div>
    </div>
    ${madeHtml}
  </div>`;
}

// ---------- Pricing ----------
function pricingView() {
  const u = currentUser();
  return `<div class="view" style="text-align:center">
    <h1>⭐ Choose Your Plan</h1>
    <p class="subtitle">Start free. Upgrade any time for the full library.</p>
    <div class="plans">
      <div class="plan">
        <h2>🌱 Free</h2>
        <div class="price">$0<span>/forever</span></div>
        <ul>
          <li>Kindergarten – Grade 2, everything included</li>
          <li>10 moral-value stories</li>
          <li>2 custom stories</li>
          <li>Printable worksheets</li>
          <li class="no">Grades 3–12</li>
          <li class="no">Full 50-story library</li>
        </ul>
        ${u ? `<button class="btn btn-ghost" disabled>Your current plan${u.plan === "premium" ? " was this once!" : ""}</button>`
          : `<button class="btn btn-secondary" onclick="App.goAuth('signup')">Sign Up Free</button>`}
      </div>
      <div class="plan best">
        <span class="ribbon">MOST POPULAR</span>
        <h2>⭐ Premium Family</h2>
        <div class="price">${PRICE}<span>/month + tax</span></div>
        <ul>
          <li>ALL grades K–12 + General Knowledge, Computer Science & English Language</li>
          <li>All 50 moral-value stories</li>
          <li>Unlimited custom stories</li>
          <li>Unlimited fresh worksheets in every subject</li>
          <li>Printable answer keys</li>
          <li>New content as it's added</li>
        </ul>
        ${u && u.plan === "premium" ? `<button class="btn btn-gold" disabled>⭐ You're Premium!</button>`
          : `<button class="btn btn-primary" onclick="App.startUpgrade()">Go Premium ⭐</button>`}
      </div>
    </div>
    <p style="margin-top:22px;color:#8a86a8;font-size:.85rem">${TAX_NOTE}<br>This starter app simulates checkout. See README.md to connect Stripe and collect real payments.</p>
  </div>`;
}

// ---------- Contact ----------
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }
function validPhone(p) {
  const digits = p.replace(/[^\d]/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
function contactView() {
  const u = currentUser();
  // prefill from the signed-in account so parents don't retype what we already know
  if (u && !state.contactForm.name && !state.contactForm.email) {
    state.contactForm = Object.assign({}, state.contactForm, { name: u.name, email: u.email });
  }
  if (state.contactSent) {
    return `<div class="view"><div class="card auth-card" style="text-align:center">
      <div style="font-size:3rem">✅</div>
      <h1>Message sent!</h1>
      <p class="subtitle">Thank you for getting in touch. We read every message and will reply to
        <b>${esc(state.contactSent)}</b> as soon as we can.</p>
      <button class="btn btn-primary" onclick="App.go('home')">Back to Home</button>
      <button class="btn btn-ghost" style="margin-top:8px" onclick="App.contactAgain()">Send another message</button>
    </div></div>`;
  }
  const f = state.contactForm || {};
  const err = state.contactErr || {};
  const field = (id, label, type, ph, hint) => `
    <div class="field">
      <label for="c-${id}">${label}</label>
      <input id="c-${id}" type="${type}" placeholder="${ph}" value="${esc(f[id] || "")}"
             class="${err[id] ? "bad" : ""}" ${type === "tel" ? 'inputmode="tel"' : ""}>
      ${err[id] ? `<span class="field-err">${esc(err[id])}</span>` : (hint ? `<span class="field-hint">${hint}</span>` : "")}
    </div>`;
  return `<div class="view">
    <h1>✉️ Contact Us</h1>
    <p class="subtitle">Questions, feedback, or spotted a mistake? We'd love to hear from you.</p>
    <div class="card contact-card">
      ${state.contactMsg ? `<div class="error-msg">${esc(state.contactMsg)}</div>` : ""}
      <div class="maker-form">
        ${field("name", "Your name *", "text", "e.g. Ana Malone")}
        ${field("email", "Email address *", "email", "you@example.com", "So we can reply to you")}
        ${field("phone", "Phone number", "tel", "(555) 123-4567", "Optional — only if you'd prefer a call")}
        <div class="field">
          <label for="c-topic">What's it about?</label>
          <select id="c-topic">${CONTACT_TOPICS.map(t =>
            `<option ${f.topic === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>
        </div>
        <div class="field full">
          <label for="c-message">Your message *</label>
          <textarea id="c-message" rows="6" placeholder="Tell us what's on your mind…"
                    class="${err.message ? "bad" : ""}">${esc(f.message || "")}</textarea>
          ${err.message ? `<span class="field-err">${esc(err.message)}</span>` : `<span class="field-hint">A few sentences is plenty</span>`}
        </div>
        <div class="field full" style="position:absolute;left:-9999px" aria-hidden="true">
          <label for="c-website">Leave this empty</label><input id="c-website" tabindex="-1" autocomplete="off">
        </div>
        <div class="full">
          <button class="btn btn-primary" style="width:100%" onclick="App.sendContact()">✉️ Send Message</button>
          <p class="privacy-note">🔒 We use your details only to reply to you — never sold, never shared.
          Please don't include passwords or card numbers in your message.
          ${u ? "" : "You don't need an account to write to us."}</p>
        </div>
      </div>
    </div>
  </div>`;
}

// ---------- Auth ----------
function authView() {
  const isLogin = state.authMode === "login";
  return `<div class="view">
    <div class="card auth-card">
      <h1 style="text-align:center">${isLogin ? "👋 Welcome Back!" : "🌱 Join BrightSprouts"}</h1>
      <p class="subtitle" style="text-align:center">${isLogin ? "Log in to keep learning." : "Free forever plan — no credit card needed."}</p>
      ${state.authMsg ? `<div class="error-msg">${esc(state.authMsg)}</div>` : ""}
      ${state.authOk ? `<div class="ok-msg">${esc(state.authOk)}</div>` : ""}
      ${isLogin ? "" : `<div class="field"><label>Parent's name</label><input id="au-name" placeholder="e.g. Ana Malone"></div>`}
      <div class="field"><label>Email</label><input id="au-email" type="email" placeholder="you@example.com"></div>
      <div class="field"><label>Password</label><input id="au-pw" type="password" placeholder="${isLogin ? "Your password" : "Choose a password (6+ characters)"}"></div>
      ${isLogin ? "" : `<div class="field"><label>Family code <span style="font-weight:400;color:#8a86a8">(optional)</span></label><input id="au-code" placeholder="Have a code? Enter it to unlock Premium free"></div>`}
      <button class="btn btn-primary" style="width:100%" onclick="App.${isLogin ? "login" : "signup"}()">${isLogin ? "Log In" : "Create Free Account"}</button>
      <div class="auth-switch">${isLogin
        ? `New here? <a onclick="App.goAuth('signup')">Create a free account</a>`
        : `Already have an account? <a onclick="App.goAuth('login')">Log in</a>`}</div>
    </div>
  </div>`;
}

// ---------- Account ----------
function accountView() {
  const u = currentUser();
  if (!u) { state.view = "auth"; return authView(); }
  return `<div class="view">
    <div class="card auth-card">
      <h1 style="text-align:center">👤 My Account</h1>
      <p style="text-align:center;margin-bottom:18px">${u.plan === "premium" ? '<span class="badge">⭐ Premium Family</span>' : '<span class="badge free">Free Plan</span>'}</p>
      <div class="q-item"><b>Name:</b> ${esc(u.name)}</div>
      <div class="q-item"><b>Email:</b> ${esc(u.email)}</div>
      <div class="q-item"><b>Member since:</b> ${esc(u.joined)}</div>
      <div class="q-item"><b>Custom stories created:</b> ${u.customCount || 0}</div>
      ${u.plan !== "premium" ? `
      <div class="famcode-box">
        <label for="ac-code"><b>🎟️ Have a family code?</b> Enter it to unlock Premium free.</label>
        <div class="famcode-row">
          <input id="ac-code" placeholder="Enter your family code">
          <button class="btn btn-primary" onclick="App.redeemCode()">Redeem</button>
        </div>
        <div id="ac-code-msg"></div>
      </div>` : `<p class="famcode-ok">🎟️ ${u.familyCode ? "Premium unlocked with a family code" : "Premium is active"} — enjoy everything!</p>`}
      <div style="margin-top:20px;display:flex;gap:10px;flex-direction:column">
        ${u.plan !== "premium" ? `<button class="btn btn-primary" onclick="App.go('pricing')">⭐ Upgrade to Premium</button>` : ""}
        <button class="btn btn-ghost" onclick="App.logout()">Log Out</button>
      </div>
    </div>
  </div>`;
}

// ---------- Upgrade modal ----------
function upgradeModal() {
  return `<div class="modal-back" onclick="if(event.target===this)App.closeModal()">
    <div class="modal">
      <h2>⭐ Premium Family — ${PRICE}/month + tax</h2>
      <p>${TAX_NOTE}</p>
      <p>This is a <b>demo checkout</b>. When you launch for real, this button becomes your Stripe payment page (see README.md — it takes about 15 minutes to set up).</p>
      <button class="btn btn-primary" style="width:100%" onclick="App.completeUpgrade()">✅ Complete Demo Purchase</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:10px" onclick="App.closeModal()">Maybe later</button>
    </div>
  </div>`;
}

// ============================================================
// ACTIONS
// ============================================================
// Award stars/badges and show a friendly floating toast. Central so every feature earns the same way.
function earn(stars, msg) {
  if (stars) Rewards.addStars(stars);
  Rewards.checkAutoBadges().forEach(b => showToast(`🏅 Badge earned: ${b.n}!`, true));
  if (msg) showToast(msg);
  const az = document.getElementById("authzone");
  if (az) az.innerHTML = authZoneHtml();   // refresh the star chip without a full re-render
}
function earnBadge(id) {
  const b = Rewards.earnBadge(id);
  if (b) { showToast(`🏅 Badge earned: ${b.n}!`, true); const az = document.getElementById("authzone"); if (az) az.innerHTML = authZoneHtml(); }
}
// Award a reward only the first time a given thing is done (so stars can't be farmed by repeating).
function rewardOnce(key, stars, msg, badge) {
  let done;
  try { done = JSON.parse(localStorage.getItem("bs_rw_done")) || {}; } catch (e) { done = {}; }
  if (done[key]) { if (badge) earnBadge(badge); return false; }
  done[key] = 1;
  localStorage.setItem("bs_rw_done", JSON.stringify(done));
  earn(stars, msg);
  if (badge) earnBadge(badge);
  return true;
}
// Read-aloud button (only shown if the browser supports free speech). Reads the text of element `srcId`.
function listenBtn(srcId, label) {
  if (typeof Speech === "undefined" || !Speech.supported()) return "";
  return `<button class="btn btn-secondary btn-sm listenbtn no-print" data-listen="${srcId}" onclick="App.listen('${srcId}')">🔊 ${label || "Listen"}</button>`;
}
let _toastT = null;
function showToast(text, big) {
  let t = document.getElementById("bs-toast");
  if (!t) { t = document.createElement("div"); t.id = "bs-toast"; document.body.appendChild(t); }
  t.className = "bs-toast show" + (big ? " big" : "");
  t.textContent = text;
  clearTimeout(_toastT);
  _toastT = setTimeout(() => { t.className = "bs-toast"; }, big ? 2600 : 1700);
}

const App = {
  go,
  // single place we hand off to the browser, so tests can observe it instead of navigating
  openLink(url) { window.location.href = url; },
  goAuth(mode) { state.authMode = mode; go("auth"); },

  // Read-aloud toggle. Speaks the text inside element `srcId`; press again (or its Stop) to halt.
  listen(srcId) {
    const btn = document.querySelector('[data-listen="' + srcId + '"]');
    if (typeof Speech === "undefined" || !Speech.supported()) return;
    if (Speech.speaking()) {
      Speech.stop();
      document.querySelectorAll(".listenbtn").forEach(b => b.innerHTML = "🔊 Listen");
      return;
    }
    const src = document.getElementById(srcId);
    if (!src) return;
    const text = src.getAttribute("data-say") || src.textContent || "";
    document.querySelectorAll(".listenbtn").forEach(b => b.innerHTML = "🔊 Listen");
    if (btn) btn.innerHTML = "⏹ Stop";
    Speech.speak(text, () => { if (btn) btn.innerHTML = "🔊 Listen"; });
  },

  openGrade(g) {
    state.grade = g;
    state.reading = null;
    const dflt = g === 0 ? "alphabet" : g === 13 ? "geography" : g === 14 ? "periodic"
               : g === 15 ? "readnow" : g === 16 ? "create" : g === 17 ? "csplan"
               : g === 18 ? "engplan" : g === 19 ? "earth" : g === 20 ? "rocks"
               : g === 21 ? "greetings" : "math";
    // Premium grades still open — landing on the free Books tab; other subjects show an upgrade card.
    state.subject = canGrade(g) ? dflt : "books";
    go("lesson");
  },
  openSubject(s) {
    // never render a subject that doesn't exist for this grade — that used to blank the page
    if (!LESSONS[state.grade] || !LESSONS[state.grade][s]) return;
    state.reading = null;
    state.subject = s; go("lesson");
  },
  newSheet() { delete state.sheetCache[state.grade + "-" + state.subject]; render(); },
  newColorPage() { state.colorPick = null; render(); },
  mmSet(part, val) { state.maker[part] = val; render(); mmPop(); },
  mmName(v) { state.maker.name = v; const s = document.getElementById("mmsvg"); if (s) s.setAttribute("aria-label", "A creature called " + v); },
  // ---- Game hub: routes between the plant game and the four arcade games ----
  openGame(screen) {
    state.gameScreen = screen;
    if (screen === "plant") { if (!state.game) state.game = { plant: null, stage: 0, water: 0, sun: 0 }; }
    else if (screen === "memory") { state.mem = { deck: memoryDeck(6), flipped: [], moves: 0, matched: 0, lock: false, done: false }; }
    else if (screen === "matharace" || screen === "flagquiz" || screen === "spellbee") {
      state.arcade = { type: screen, i: 0, correct: 0, q: arcadeQuestion(screen), answered: null, done: false };
    }
    go("game");
  },
  gameHub() { state.gameScreen = "hub"; state.arcade = null; state.mem = null; go("game"); },

  // ---- The Globe ----
  globePick(id) {
    const info = globeCountryInfo(id);
    const el = document.getElementById("globe-info");
    if (el) el.innerHTML = globeInfoHtml(info);
    // reward curious explorers the first time they identify a real country
    if (info && info.iso) rewardOnce("globe-" + info.iso, 1, "🌍 +1 star for exploring " + info.name + "!");
  },
  globeZoom(dir) { if (typeof Globe !== "undefined") Globe.zoomBy(dir > 0 ? 1.35 : 1 / 1.35); },
  globeSpin() {
    if (typeof Globe === "undefined") return;
    const on = Globe.toggleSpin();
    const b = document.getElementById("globe-spin-btn");
    if (b) b.textContent = on ? "⏸️" : "▶️";
  },
  globeReset() {
    if (typeof Globe !== "undefined") Globe.reset();
    const b = document.getElementById("globe-spin-btn"); if (b) b.textContent = "⏸️";
    const el = document.getElementById("globe-info"); if (el) el.innerHTML = globeInfoHtml(null);
  },
  globeToGeography() { state.grade = 13; state.subject = "geography"; go("lesson"); },

  // ---- Shop & cart ----
  shopFilter(f) { state.shopFilter = f; render(); },
  addToCart(id) {
    Cart.add(id, 1);
    const az = document.getElementById("authzone"); if (az) az.innerHTML = authZoneHtml();
    const p = productById(id);
    showToast("🛒 Added " + (p ? p.name : "item") + " to cart!");
    if (state.view === "shop" || state.view === "cart") render();
  },
  cartQty(id, delta) {
    const c = Cart.load();
    Cart.setQty(id, (c[id] || 0) + delta);
    const az = document.getElementById("authzone"); if (az) az.innerHTML = authZoneHtml();
    render();
  },
  removeFromCart(id) {
    Cart.remove(id);
    const az = document.getElementById("authzone"); if (az) az.innerHTML = authZoneHtml();
    render();
  },
  clearCart() {
    Cart.clear();
    const az = document.getElementById("authzone"); if (az) az.innerHTML = authZoneHtml();
    render();
  },
  async checkout() {
    const items = Cart.items();
    if (!items.length) { go("shop"); return; }
    if (!CHECKOUT_ENDPOINT) {
      showToast("💳 Payments aren't connected yet — see the note in your cart.", true);
      return;
    }
    try {
      const res = await fetch(CHECKOUT_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map(x => ({ id: x.product.id, qty: x.qty })) })
      });
      const data = await res.json();
      if (data && data.url) { window.location.href = data.url; }
      else throw new Error((data && data.error) || "No checkout URL returned");
    } catch (e) {
      showToast("Sorry — checkout couldn't start. Please try again.");
    }
  },

  gamePick(slug) { state.game = { plant: slug, stage: 0, water: 0, sun: 0 }; state.gameScreen = "plant"; go("game"); },
  gamePickNew() { state.game = { plant: null, stage: 0, water: 0, sun: 0 }; state.gameScreen = "plant"; render(); window.scrollTo(0, 0); },
  gameReplant() { state.game.stage = 0; state.game.water = 0; state.game.sun = 0; render(); gamePop(); },

  // ---- Build It! ----
  buildPick(key) {
    const mode = (state.build && state.build.mode) || "guided";
    state.build = { project: key, mode, added: [], last: -1 };
    render();
  },
  buildMode(mode) {
    if (!state.build) return;
    state.build.mode = mode;
    state.build.added = curProject().parts.map(() => false);
    state.build.last = -1;
    render();
  },
  buildAdd() {   // guided: add the next part in order
    const b = state.build, i = b.added.findIndex(x => !x);
    if (i >= 0) {
      b.added[i] = true; b.last = i; render();
      if (b.added.some(x => !x)) engineerPop(); else buildRewardIfComplete(b.project);
    }
  },
  buildAddPart(i) {   // free build: add any part
    const b = state.build;
    if (b.added && !b.added[i]) {
      b.added[i] = true; b.last = i; render();
      if (b.added.some(x => !x)) engineerPop(); else buildRewardIfComplete(b.project);
    }
  },
  buildReset() {
    if (state.build) { state.build.added = curProject().parts.map(() => false); state.build.last = -1; }
    render();
  },
  gameWater() { if (state.game.water < GAME_NEED) state.game.water++; gameCheckGrow(); },
  gameSun() { if (state.game.sun < GAME_NEED) state.game.sun++; gameCheckGrow(); },

  // ---- Arcade quiz answer (Math Race / Flag Quiz / Spelling Bee) ----
  arcadeAnswer(opt) {
    const a = state.arcade;
    if (!a || a.answered != null || a.done) return;
    a.answered = opt;
    if (opt === a.q.answer) a.correct++;
    render();
    setTimeout(() => {
      a.i++;
      if (a.i >= ARCADE_Q) {
        a.done = true;
        const stars = arcadeStars(a.correct);
        if (stars > 0) earn(stars, "⭐ +" + stars + (stars === 1 ? " star!" : " stars!"));
        if (a.type === "matharace" && a.correct === ARCADE_Q) earnBadge("mathwhiz");
        if (a.type === "spellbee" && a.correct === ARCADE_Q) earnBadge("speller");
        if (a.type === "flagquiz" && a.correct >= 8) earnBadge("explorer");
      } else {
        a.q = arcadeQuestion(a.type);
        a.answered = null;
      }
      render();
    }, 850);
  },

  // ---- Memory Match ----
  memFlip(id) {
    const m = state.mem;
    if (!m || m.lock || m.done) return;
    const card = m.deck.find(c => c.id === id);
    if (!card || card.up || card.done) return;
    card.up = true; m.flipped.push(id); render();
    if (m.flipped.length === 2) {
      m.moves++;
      m.lock = true;
      const [a, b] = m.flipped.map(fid => m.deck.find(c => c.id === fid));
      if (a.face === b.face) {
        a.done = b.done = true; m.matched++; m.flipped = []; m.lock = false;
        if (m.matched >= m.deck.length / 2) {
          m.done = true;
          const stars = memoryStars(m.deck.length / 2, m.moves);
          earn(stars, "🧠 +" + stars + " stars — you matched them all!");
          earnBadge("memory");
        }
        render();
      } else {
        setTimeout(() => { a.up = b.up = false; m.flipped = []; m.lock = false; render(); }, 850);
      }
    }
  },
  mmSurprise() { const n = state.maker.name; state.maker = mmRandom(); render(); mmPop(); },
  mmSave() {
    const m = state.maker;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="800" height="800">${mmSvg(m, true)}</svg>`;
    const img = new Image();
    img.onload = function () {
      const cv = document.createElement("canvas");
      cv.width = 800; cv.height = 880;
      const g = cv.getContext("2d");
      g.fillStyle = "#fff"; g.fillRect(0, 0, 800, 880);
      g.drawImage(img, 0, 0, 800, 800);
      g.fillStyle = "#7c5cbf";
      g.font = "bold 44px 'Comic Sans MS', Verdana, sans-serif";
      g.textAlign = "center";
      g.fillText(m.name, 400, 850);
      cv.toBlob(function (blob) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = (m.name || "creature").replace(/[^\w-]+/g, "_") + ".png";
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      }, "image/png");
    };
    img.onerror = function () { alert("Sorry — saving didn't work in this browser. Try the Print button instead!"); };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    earn(1, "⭐ +1 star for making a creature!"); earnBadge("creator");
  },
  readBook(slug) {
    const meta = PD_BOOKS.find(b => b.slug === slug);
    const keys = Object.keys(BOOK_DOODLES);
    state.reading = { slug, title: meta.t, loading: true, ch: 0, doodles: shuffleArr(keys).slice(0, 4) };
    render();
    fetch("books/" + slug + ".json")
      .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(book => {
        if (!state.reading || state.reading.slug !== slug) return;   // reader closed while loading
        state.reading.book = book;
        state.reading.loading = false;
        // pick up where this child left off
        const saved = +(localStorage.getItem("bs_read_" + slug) || 0);
        state.reading.ch = Math.min(Math.max(0, saved), book.chapters.length - 1);
        render();
      })
      .catch(e => {
        if (!state.reading) return;
        state.reading.loading = false;
        state.reading.error = "We couldn't load it just now (" + e.message + "). Check your connection and try again.";
        render();
      });
  },
  closeBook() { state.reading = null; render(); window.scrollTo(0, 0); },
  gotoChapter(i) {
    const r = state.reading; if (!r || !r.book) return;
    r.ch = Math.min(Math.max(0, +i), r.book.chapters.length - 1);
    localStorage.setItem("bs_read_" + r.slug, r.ch);
    rewardOnce("chap-" + r.slug + "-" + r.ch, 1, "⭐ +1 star for reading a chapter!");
    if (r.ch === r.book.chapters.length - 1) rewardOnce("book-" + r.slug, 3, "📚 +3 stars — you finished a whole book!", "bookworm");
    render(); window.scrollTo(0, 0);
  },
  readSize(d) {
    state.readFont = Math.min(30, Math.max(14, state.readFont + d * 2));
    localStorage.setItem("bs_readfont", state.readFont);
    render();
  },
  traceMode(m) { state.traceMode = m; state.tracePick = null; render(); },
  newTracePage() { state.tracePick = null; render(); },
  colorTheme(t) { state.colorTheme = t; state.colorPick = null; render(); },
  colorSize(big) { state.colorBig = big; state.colorPick = null; render(); },
  toggleKey(on) {
    document.querySelectorAll(".answers-section").forEach(el => el.style.display = on ? "block" : "none");
    const t = document.getElementById("key-toggle"); if (t) t.checked = on;
  },

  filterStories(f) { state.storyFilter = f; render(); },
  openStory(id) {
    if (!canStory(id)) {
      if (!currentUser()) { state.authMode = "signup"; state.authMsg = "Create a free account to unlock more stories — your first 10 are free!"; go("auth"); }
      else go("pricing");
      return;
    }
    state.currentStory = id; go("story");
    rewardOnce("story-" + id, 1, "⭐ +1 star for reading a story!", "firststory");
  },

  createStory() {
    const u = currentUser();
    if (!u) { state.authMode = "signup"; state.authMsg = "Create a free account to make custom stories — your first 2 are free!"; go("auth"); return; }
    if (customLeft() <= 0) { go("pricing"); return; }
    const name = (document.getElementById("mk-name").value || "").trim();
    const friend = (document.getElementById("mk-friend").value || "").trim();
    if (!name) { document.getElementById("mk-msg").innerHTML = `<div class="error-msg" style="margin-top:12px">Please enter the hero's name!</div>`; return; }
    const story = makeStory(
      esc(name), esc(friend || "their trusty sidekick"),
      document.getElementById("mk-setting").value,
      document.getElementById("mk-theme").value,
      document.getElementById("mk-value").value
    );
    u.customCount = (u.customCount || 0) + 1;
    saveCurrentUser(u);
    state.madeStory = story;
    render();
    earn(1, "⭐ +1 star for making a story!"); earnBadge("storyteller");
    const el = document.getElementById("made-story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },

  contactAgain() { state.contactSent = null; state.contactForm = {}; state.contactErr = {}; state.contactMsg = ""; render(); },
  sendContact() {
    const val = id => (document.getElementById("c-" + id).value || "").trim();
    const f = { name: val("name"), email: val("email"), phone: val("phone"), topic: val("topic"), message: val("message") };
    state.contactForm = f;
    state.contactMsg = "";
    const err = {};
    if (!f.name) err.name = "Please tell us your name.";
    else if (f.name.length > 80) err.name = "That name looks too long.";
    if (!f.email) err.email = "We need an email address to reply to.";
    else if (!validEmail(f.email)) err.email = "That email doesn't look right — check for a typo?";
    if (f.phone && !validPhone(f.phone)) err.phone = "That phone number doesn't look right (7–15 digits).";
    if (!f.message) err.message = "Please write your message.";
    else if (f.message.length < 10) err.message = "Could you add a little more detail?";
    else if (f.message.length > 5000) err.message = "That message is very long — could you shorten it?";
    state.contactErr = err;
    if (Object.keys(err).length) { render(); return; }
    // honeypot: real people never fill this hidden field, bots do
    if (val("website")) { state.contactSent = f.email; render(); return; }

    const body =
      "Name: " + f.name + "\n" +
      "Email: " + f.email + "\n" +
      "Phone: " + (f.phone || "(not given)") + "\n" +
      "Topic: " + f.topic + "\n" +
      "Account: " + (currentUser() ? currentUser().email + " (" + currentUser().plan + ")" : "not logged in") + "\n" +
      "Sent: " + new Date().toLocaleString() + "\n\n" + f.message;

    if (CONTACT_ACCESS_KEY) {
      const btn = document.querySelector(".contact-card .btn-primary");
      if (btn) { btn.textContent = "Sending…"; btn.disabled = true; }
      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          subject: "BrightSprouts: " + f.topic,
          from_name: "BrightSprouts Academy",
          name: f.name, email: f.email, phone: f.phone || "(not given)",
          topic: f.topic, message: f.message,
          account: currentUser() ? currentUser().email + " (" + currentUser().plan + ")" : "not logged in"
        })
      }).then(r => r.json().then(j => ({ ok: r.ok, j })))
        .then(({ ok, j }) => {
          if (!ok || j.success === false) throw new Error(j.message || "rejected");
          state.contactSent = f.email; state.contactForm = {}; render();
        })
        .catch(() => {
          state.contactMsg = "Sorry — that didn't send. Please email us directly at " + CONTACT_EMAIL + " and we'll get right back to you.";
          if (btn) { btn.textContent = "✉️ Send Message"; btn.disabled = false; }
          render();
        });
      return;
    }
    // No endpoint configured: hand the message to the visitor's own email app.
    App.openLink("mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent("BrightSprouts: " + f.topic) +
      "&body=" + encodeURIComponent(body));
    state.contactSent = f.email;
    render();
  },

  async signup() {
    const name = (document.getElementById("au-name").value || "").trim();
    const email = (document.getElementById("au-email").value || "").trim().toLowerCase();
    const pw = document.getElementById("au-pw").value || "";
    const codeEl = document.getElementById("au-code");
    const code = codeEl ? (codeEl.value || "").trim() : "";
    if (!name || !email || !pw) { state.authMsg = "Please fill in every field."; render(); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { state.authMsg = "That email doesn't look right — try again?"; render(); return; }
    if (pw.length < 6) { state.authMsg = "Password needs at least 6 characters."; render(); return; }
    const users = loadUsers();
    if (users[email]) { state.authMsg = "That email already has an account. Try logging in!"; render(); return; }
    users[email] = { name, email, pw: hashPw(pw), plan: "free", customCount: 0, joined: new Date().toLocaleDateString() };
    saveUsers(users);
    localStorage.setItem("bs_session", email);
    applyPendingUpgrade();
    if (code) {
      const unlocked = await redeemFamilyCode(code);
      go(unlocked ? "account" : "home");
      showToast(unlocked ? "🎉 Family code accepted — Premium unlocked for free!" : "Account created! That family code wasn't recognized — you can add one anytime in My Account.", true);
      return;
    }
    go("home");
  },
  // Redeem a family code from the My Account page (for an existing free account).
  async redeemCode() {
    const el = document.getElementById("ac-code");
    const box = document.getElementById("ac-code-msg");
    const code = el ? (el.value || "").trim() : "";
    if (!code) { if (box) box.innerHTML = `<div class="error-msg" style="margin-top:10px">Please enter your family code.</div>`; return; }
    const unlocked = await redeemFamilyCode(code);
    if (unlocked) { showToast("🎉 Premium unlocked for free! Enjoy everything.", true); render(); }
    else if (box) box.innerHTML = `<div class="error-msg" style="margin-top:10px">Hmm, that code wasn't recognized. Double-check it and try again.</div>`;
  },
  login() {
    const email = (document.getElementById("au-email").value || "").trim().toLowerCase();
    const pw = document.getElementById("au-pw").value || "";
    const users = loadUsers();
    if (!users[email] || users[email].pw !== hashPw(pw)) { state.authMsg = "Email or password doesn't match. Try again!"; render(); return; }
    localStorage.setItem("bs_session", email);
    applyPendingUpgrade();
    go("home");
  },
  logout() { localStorage.removeItem("bs_session"); go("home"); },

  startUpgrade() {
    const u = currentUser();
    if (!u) { state.authMode = "signup"; state.authMsg = "Create your free account first, then upgrade to Premium!"; go("auth"); return; }
    if (STRIPE_PAYMENT_LINK) {
      const sep = STRIPE_PAYMENT_LINK.includes("?") ? "&" : "?";
      window.location.href = STRIPE_PAYMENT_LINK + sep + "prefilled_email=" + encodeURIComponent(u.email);
      return;
    }
    state.modal = true; render();
  },
  closeModal() { state.modal = false; render(); },
  completeUpgrade() {
    const u = currentUser();
    if (u) { u.plan = "premium"; saveCurrentUser(u); }
    state.modal = false;
    go("home");
  }
};
window.App = App;

// ============================================================
// RENDER
// ============================================================
// ---- Creature Maker: the "leaning out of the screen" effect ----
// The scene sits back in 3D space, the creature sits forward. Tilting the whole stage toward the
// pointer makes the creature swing out past the frame — which is the bit children shriek at.
function mmTilt() {
  const stage = document.getElementById("mmstage"), scene = document.getElementById("mmscene");
  if (!stage || !scene) return;
  const move = (px, py) => {
    const r = stage.getBoundingClientRect();
    const dx = (px - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (py - (r.top + r.height / 2)) / (r.height / 2);
    const cl = v => Math.max(-1, Math.min(1, v));
    scene.style.transform = `rotateY(${cl(dx) * 22}deg) rotateX(${cl(-dy) * 16}deg) scale(1.04)`;
    stage.style.setProperty("--sx", (cl(dx) * 16) + "px");
    stage.style.setProperty("--sy", (cl(dy) * 10) + "px");
  };
  const rest = () => {
    scene.style.transform = "";
    stage.style.setProperty("--sx", "0px");
    stage.style.setProperty("--sy", "0px");
  };
  stage.onmousemove = e => move(e.clientX, e.clientY);
  stage.onmouseleave = rest;
  stage.ontouchmove = e => { const t = e.touches[0]; if (t) { move(t.clientX, t.clientY); e.preventDefault(); } };
  stage.ontouchend = rest;
}
function mmPop() {
  const s = document.getElementById("mmscene");
  if (!s) return;
  s.classList.remove("mm-pop");
  void s.offsetWidth;      // restart the animation
  s.classList.add("mm-pop");
}
// ---------- Plant Life Cycle Game ----------
const GAME_NEED = 3;   // waters and suns needed to grow to the next stage
function gameView() {
  const sc = state.gameScreen || "hub";
  if (sc === "plant") return plantGameView();
  if (sc === "memory") return memoryView();
  if (sc === "matharace" || sc === "flagquiz" || sc === "spellbee") return arcadeQuizView();
  return gameHubView();
}

function gameHubView() {
  const plantTile = `
    <div class="gtile" onclick="App.openGame('plant')">
      <div class="gtemoji">🌱</div>
      <h3>Plant Life Cycle</h3>
      <p>Grow your own plant from seed to fruit.</p>
      <button class="btn btn-primary btn-sm">Play</button>
    </div>`;
  const arcTiles = ARCADE_GAMES.map(a => `
    <div class="gtile" onclick="App.openGame('${a.key}')">
      <div class="gtemoji">${a.emoji}</div>
      <h3>${esc(a.name)}</h3>
      <p>${esc(a.desc)}</p>
      <button class="btn btn-primary btn-sm">Play</button>
    </div>`).join("");
  return `<div class="view">
    <h1>🎮 Game Arcade</h1>
    <p class="subtitle">Pick a game to play. Every game you play earns you ⭐ stars for your Rewards collection!</p>
    <div class="grid grid-3 gtiles">${plantTile}${arcTiles}</div>
    <div class="bookfoot">${doodle("rocket")}
      <p><b>Play &amp; learn!</b> Race through sums, guess flags from around the world, spot the correctly spelled word, or test your memory. Win stars, unlock stickers, and earn badges as you go.</p></div>
  </div>`;
}

// ---- Arcade quiz view (Math Race / Flag Quiz / Spelling Bee) ----
function arcadeQuizView() {
  const a = state.arcade;
  const meta = ARCADE_GAMES.find(x => x.key === a.type) || { name: "Game", emoji: "🎮" };
  if (a.done) {
    const stars = arcadeStars(a.correct);
    const perfect = a.correct === ARCADE_Q;
    return `<div class="view">
      <button class="btn btn-ghost btn-sm no-print" onclick="App.gameHub()">← Back to games</button>
      <div class="arcresult">
        <div class="arcbadge">${perfect ? "🏆" : meta.emoji}</div>
        <h1>${perfect ? "Perfect!" : "Nice work!"}</h1>
        <p class="arcscore">You got <b>${a.correct}</b> out of ${ARCADE_Q} right</p>
        <p class="arcstars">⭐ +${stars} star${stars === 1 ? "" : "s"} earned!</p>
        <div class="arcactions">
          <button class="btn btn-primary" onclick="App.openGame('${a.type}')">🔁 Play again</button>
          <button class="btn btn-secondary" onclick="App.gameHub()">🎮 Other games</button>
        </div>
      </div>
    </div>`;
  }
  const q = a.q;
  const opts = q.options.map(o => {
    let cls = "arcopt";
    if (a.answered != null) {
      if (o === q.answer) cls += " correct";
      else if (o === a.answered) cls += " wrong";
      else cls += " dim";
    }
    return `<button class="${cls}" onclick="App.arcadeAnswer(${JSON.stringify(o).replace(/"/g, "&quot;")})" ${a.answered != null ? "disabled" : ""}>${esc(o)}</button>`;
  }).join("");
  const pct = Math.round((a.i / ARCADE_Q) * 100);
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.gameHub()">← Back to games</button>
    <div class="arcgame">
      <div class="archead">
        <span>${meta.emoji} ${esc(meta.name)}</span>
        <span>Question ${a.i + 1} / ${ARCADE_Q} · ⭐ ${a.correct}</span>
      </div>
      <div class="arcprogress"><i style="width:${pct}%"></i></div>
      <div class="arcprompt">${q.prompt}</div>
      <div class="arcopts">${opts}</div>
    </div>
  </div>`;
}

// ---- Memory Match view ----
function memoryView() {
  const m = state.mem;
  const pairs = m.deck.length / 2;
  if (m.done) {
    const stars = memoryStars(pairs, m.moves);
    return `<div class="view">
      <button class="btn btn-ghost btn-sm no-print" onclick="App.gameHub()">← Back to games</button>
      <div class="arcresult">
        <div class="arcbadge">🧠</div>
        <h1>You did it!</h1>
        <p class="arcscore">All ${pairs} pairs matched in <b>${m.moves}</b> tries</p>
        <p class="arcstars">⭐ +${stars} star${stars === 1 ? "" : "s"} earned!</p>
        <div class="arcactions">
          <button class="btn btn-primary" onclick="App.openGame('memory')">🔁 Play again</button>
          <button class="btn btn-secondary" onclick="App.gameHub()">🎮 Other games</button>
        </div>
      </div>
    </div>`;
  }
  const cards = m.deck.map(c => {
    const shown = c.up || c.done;
    return `<button class="memcard ${shown ? "up" : ""} ${c.done ? "done" : ""}" onclick="App.memFlip(${c.id})" ${shown ? "disabled" : ""}>
      <span class="memface">${shown ? c.face : "❓"}</span></button>`;
  }).join("");
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.gameHub()">← Back to games</button>
    <div class="arcgame">
      <div class="archead"><span>🧠 Memory Match</span><span>Tries: ${m.moves} · Pairs: ${m.matched}/${pairs}</span></div>
      <p class="mmhint">Flip two cards. If they match, they stay! Find all ${pairs} pairs.</p>
      <div class="memgrid">${cards}</div>
    </div>
  </div>`;
}

function plantGameView() {
  const g = state.game;
  if (!g.plant) {
    return `<div class="view">
      <button class="btn btn-ghost btn-sm no-print" onclick="App.gameHub()">← Back to games</button>
      <h1 style="margin-top:12px">🌱 Plant Life Cycle Game</h1>
      <p class="subtitle">Pick a plant or tree to grow. Water it, give it sunshine, and watch it live its whole life cycle — from a tiny seed to fruit and new seeds!</p>
      <div class="grid grid-3">${PLANTS.map(p => `
        <div class="pgpick" onclick="App.gamePick('${p.slug}')">
          <div class="pgpickart"><svg viewBox="0 0 220 260">${(function(){ const s = plantScene(p, 4); return s.sky + s.art; })()}</svg></div>
          <h3>${p.emoji} ${esc(p.name)}</h3>
          <p>Grows from ${esc(p.seedName)} into ${esc(p.fruitLabel.toLowerCase())}!</p>
          <button class="btn btn-primary btn-sm">🌱 Plant this</button>
        </div>`).join("")}</div>
      <div class="bookfoot">${doodle("rocket")}
        <p><b>Did you know?</b> Every one of these plants is a "flowering plant" — it grows flowers, and every flower's job is to make new seeds. The apple pip you plant grows a tree that makes more apples, each full of more pips. That's the circle of life, and you're about to run it yourself!</p></div>
    </div>`;
  }
  const p = PLANTS.find(x => x.slug === g.plant);
  const scene = plantScene(p, g.stage);
  const label = plantStageLabel(p, g.stage);
  const fact = plantStageFact(p, g.stage);
  const done = g.stage >= PLANT_STAGES.length - 1;
  const dots = PLANT_STAGES.map((_, i) =>
    `<span class="pgdot ${i < g.stage ? "past" : i === g.stage ? "now" : ""}" title="${esc(plantStageLabel(p, i))}"></span>`).join("");
  const meter = (have) => Array.from({ length: GAME_NEED }, (_, i) => `<i class="${i < have ? "on" : ""}"></i>`).join("");
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.gamePickNew()">← Pick a different plant</button>
    <h1 style="margin-top:12px">${p.emoji} Growing a ${esc(p.name)}</h1>
    <div class="pgwrap">
      <div class="pgstage" id="pgstage">
        <div class="pgscene" id="pgscene">
          <svg viewBox="0 0 220 260" class="pgsvg" id="pgplant" role="img" aria-label="A ${esc(p.name)} at the ${esc(label)} stage">
            <g class="pg-back">${scene.sky}</g>
            <g class="pg-plant">${scene.art}</g>
          </svg>
        </div>
        <p class="mmhint no-print">👆 Move your mouse or finger over your plant — watch it lean out toward you!</p>
      </div>
      <div class="pgpanel no-print">
        <div class="pgdots">${dots}</div>
        <h3 class="pgstagename">Stage ${g.stage + 1} of ${PLANT_STAGES.length}: ${esc(label)}</h3>
        <p class="pgfact">${esc(fact)}</p>
        ${done ? `
          <div class="pgwin">🎉 Your ${esc(p.name)} finished its whole life cycle!
            The ${esc(p.fruitLabel.toLowerCase())} are full of new seeds, ready to start again.</div>
          <button class="btn btn-primary" style="width:100%" onclick="App.gameReplant()">🌱 Plant a new seed</button>
          <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="App.gamePickNew()">Choose a different plant</button>
        ` : `
          <p class="pggrowhint">Fill both meters to help your ${esc(p.name)} grow to the next stage:</p>
          <div class="pgcare">
            <button class="btn pgwater" onclick="App.gameWater()">💧 Water</button>
            <div class="pgmeter water">${meter(g.water)}</div>
          </div>
          <div class="pgcare">
            <button class="btn pgsun" onclick="App.gameSun()">☀️ Sunshine</button>
            <div class="pgmeter sun">${meter(g.sun)}</div>
          </div>
        `}
        <div class="mmsave" style="margin-top:14px">
          <button class="btn btn-secondary" onclick="window.print()">🖨️ Print my plant</button>
        </div>
      </div>
    </div>
    <div class="print-only" style="text-align:center;margin-top:10px"><h2>${p.emoji} ${esc(p.name)} — ${esc(label)}</h2></div>
  </div>`;
}

// Same lean-out effect for the plant game: the growing plant leans forward out of the pot.
function gameTilt() {
  const stage = document.getElementById("pgstage"), scene = document.getElementById("pgscene");
  if (!stage || !scene) return;
  const cl = v => Math.max(-1, Math.min(1, v));
  const move = (px, py) => {
    const r = stage.getBoundingClientRect();
    const dx = (px - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (py - (r.top + r.height / 2)) / (r.height / 2);
    scene.style.transform = `rotateY(${cl(dx) * 20}deg) rotateX(${cl(-dy) * 14}deg) scale(1.05)`;
    stage.style.setProperty("--sx", (cl(dx) * 14) + "px");
  };
  const rest = () => { scene.style.transform = ""; stage.style.setProperty("--sx", "0px"); };
  stage.onmousemove = e => move(e.clientX, e.clientY);
  stage.onmouseleave = rest;
  stage.ontouchmove = e => { const t = e.touches[0]; if (t) { move(t.clientX, t.clientY); e.preventDefault(); } };
  stage.ontouchend = rest;
}
function gamePop() {
  const s = document.getElementById("pgplant");
  if (!s) return;
  s.classList.remove("pg-grow");
  void s.offsetWidth;
  s.classList.add("pg-grow");
}

// ---- Build It! (little engineers) ----
function curProject() {
  return ENGINEER_PROJECTS.find(p => p.key === (state.build && state.build.project)) || ENGINEER_PROJECTS[0];
}
function engineerBuildHtml() {
  const projs = ENGINEER_PROJECTS;
  if (!state.build || !projs.some(p => p.key === state.build.project)) {
    state.build = { project: projs[0].key, mode: "guided", added: [], last: -1 };
  }
  const p = curProject(), b = state.build;
  if (!b.mode) b.mode = "guided";
  if (!Array.isArray(b.added) || b.added.length !== p.parts.length) { b.added = p.parts.map(() => false); b.last = -1; }
  const complete = b.added.every(Boolean);
  const art = /^[aeiou]/i.test(p.name) ? "an" : "a";
  const built = p.parts.map((pt, i) => b.added[i] ? pt.svg : "").join("");
  const scene = `<svg viewBox="0 0 240 180" class="engsvg" role="img" aria-label="Building a ${esc(p.name)}">
    ${p.sky}
    <g class="engbuilt ${complete && p.finaleCls ? p.finaleCls : ""}" id="engbuilt">${built}${complete ? (p.inExtra || "") : ""}</g>
    ${complete ? (p.outExtra || "") : ""}
  </svg>`;
  let doneMap;
  try { doneMap = JSON.parse(localStorage.getItem("bs_rw_done")) || {}; } catch (e) { doneMap = {}; }
  const isBuilt = k => !!doneMap["build-" + k];
  const builtCount = projs.filter(x => isBuilt(x.key)).length, total = projs.length;
  const pick = projs.map(x =>
    `<button class="${x.key === p.key ? "on" : ""}${isBuilt(x.key) ? " built" : ""}" onclick="App.buildPick('${x.key}')">${x.emoji} ${esc(x.name)}${isBuilt(x.key) ? " ✓" : ""}</button>`).join("");
  const hint = `<div class="engprogress no-print">
    <span>🏗️ <b>Master Builder</b> — ${builtCount >= total ? "you built them all! 🎉" : builtCount + " of " + total + " machines built"}</span>
    <div class="readprog"><i style="width:${Math.round(builtCount / total * 100)}%"></i></div>
  </div>`;
  const modeBtns = `<div class="engmode no-print">
    <button class="${b.mode === "guided" ? "on" : ""}" onclick="App.buildMode('guided')">🎯 In order</button>
    <button class="${b.mode === "free" ? "on" : ""}" onclick="App.buildMode('free')">🧩 Free build</button></div>`;
  const dots = p.parts.map((_, i) => `<span class="engdot ${b.added[i] ? "on" : ""}"></span>`).join("");
  const printBtn = `<button class="btn btn-secondary" onclick="window.print()">🖨️ Print</button>`;
  let factHtml, ctrlHtml;
  if (complete) {
    factHtml = `<div class="engfact">🎉 <b>You built ${art} ${esc(p.name.toLowerCase())}!</b> ${esc(p.doneMsg)}</div>`;
    ctrlHtml = `<div class="lesson-tools" style="justify-content:center"><button class="btn btn-primary" onclick="App.buildReset()">🔁 Build it again</button>${printBtn}</div>`;
  } else if (b.mode === "free") {
    factHtml = `<div class="engfact">${b.last >= 0 ? `<b>${esc(p.parts[b.last].name)}:</b> ${esc(p.parts[b.last].fact)}` : `Free build! Add the parts in ANY order you like. 🧩`}</div>`;
    ctrlHtml = `<div class="engchips">${p.parts.map((pt, i) => b.added[i] ? "" : `<button onclick="App.buildAddPart(${i})">➕ ${esc(pt.name)}</button>`).join("")}</div>
      <div class="lesson-tools" style="justify-content:center;margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="App.buildReset()">↺ Start over</button>${printBtn}</div>`;
  } else {
    const nextI = b.added.findIndex(x => !x);
    const last = b.last >= 0 ? p.parts[b.last] : null;
    factHtml = `<div class="engfact">${last ? `<b>${esc(last.name)}:</b> ${esc(last.fact)}` : `Let's build ${art} ${esc(p.name.toLowerCase())}! Add each part one at a time. 🔧`}</div>`;
    ctrlHtml = `<div class="lesson-tools" style="justify-content:center"><button class="btn btn-primary" onclick="App.buildAdd()">🔧 Add the ${esc(p.parts[nextI].name)}</button>${printBtn}</div>`;
  }
  return `<div class="engwrap">
    <div class="engpick no-print">${pick}</div>
    ${hint}
    ${modeBtns}
    <div class="engstage" id="engstage">${scene}</div>
    <div class="engpanel no-print">
      <div class="engdots">${dots}</div>
      ${factHtml}
      ${ctrlHtml}
    </div>
    <div class="print-only" style="text-align:center;margin-top:10px"><h2>${p.emoji} My ${esc(p.name)}</h2></div>
  </div>`;
}
function engineerPop() {
  const s = document.getElementById("engbuilt");
  if (!s) return;
  s.classList.remove("eng-pop");
  void s.offsetWidth;
  s.classList.add("eng-pop");
}
// Award stars the first time each machine is completed; the "builder" badge once all are built.
function buildRewardIfComplete(project) {
  const p = ENGINEER_PROJECTS.find(x => x.key === project);
  if (!p) return;
  const art = /^[aeiou]/i.test(p.name) ? "an" : "a";
  rewardOnce("build-" + project, 2, "🔧 +2 stars — you built " + art + " " + p.name.toLowerCase() + "!");
  let done;
  try { done = JSON.parse(localStorage.getItem("bs_rw_done")) || {}; } catch (e) { done = {}; }
  if (ENGINEER_PROJECTS.every(x => done["build-" + x.key])) earnBadge("builder");
}
// Called after each water/sun tap: refresh the meters, and when both are full, grow to the next stage.
function gameCheckGrow() {
  const g = state.game;
  render();   // fill the meter the child just tapped
  if (g.water >= GAME_NEED && g.sun >= GAME_NEED && g.stage < PLANT_STAGES.length - 1) {
    setTimeout(() => {
      g.stage++; g.water = 0; g.sun = 0;
      render();
      gamePop();
      if (g.stage >= PLANT_STAGES.length - 1) { earn(2, "🌿 +2 stars — your plant is fully grown!"); earnBadge("greenthumb"); }
    }, 550);   // a beat so the child sees both meters fill, then the plant leaps to its new stage
  }
}

function render() {
  const views = {
    home: homeView, lessons: lessonsView, lesson: lessonView,
    stories: storiesView, story: storyView, maker: makerView,
    pricing: pricingView, auth: authView, account: accountView,
    contact: contactView, game: gameView, rewards: rewardsView, globe: globeView,
    shop: shopView, cart: cartView
  };
  document.getElementById("nav").innerHTML = navHtml();
  document.getElementById("authzone").innerHTML = authZoneHtml();
  document.getElementById("app").innerHTML = (views[state.view] || homeView)() + (state.modal ? upgradeModal() : "");
  mmTilt();
  gameTilt();
  if (state.view === "globe") { if (typeof Globe !== "undefined") Globe.mount(App.globePick); }
  else if (typeof Globe !== "undefined") Globe.unmount();
}
// Optional deep links: #lessons, #stories, #maker, #pricing, #lesson-3-science, #story-12
function applyHash() {
  const h = (location.hash || "").slice(1);
  if (!h) return;
  let m;
  if ((m = h.match(/^lesson-(\d+)-(\w+)$/))) {
    const g = +m[1];
    if (LESSONS[g] && LESSONS[g][m[2]] && canSubject(g, m[2])) { state.grade = g; state.subject = m[2]; state.view = "lesson"; }
  } else if ((m = h.match(/^story-(\d+)$/))) {
    if (canStory(+m[1]) && STORIES.some(s => s.id === +m[1])) { state.currentStory = +m[1]; state.view = "story"; }
  } else if (h === "payment-success") {
    const u = currentUser();
    if (u) {
      u.plan = "premium"; saveCurrentUser(u);
      state.view = "account";
    } else {
      localStorage.setItem("bs_pending_upgrade", "1");
      state.authMode = "login";
      state.authOk = "🎉 Payment received! Log in and your Premium will activate.";
      state.view = "auth";
    }
    history.replaceState(null, "", location.pathname);
  } else if (["home", "lessons", "stories", "maker", "pricing", "contact", "game", "rewards", "globe", "shop", "cart"].includes(h)) {
    state.view = h;
  }
}
function applyPendingUpgrade() {
  if (localStorage.getItem("bs_pending_upgrade")) {
    const u = currentUser();
    if (u) { u.plan = "premium"; saveCurrentUser(u); localStorage.removeItem("bs_pending_upgrade"); }
  }
}
document.addEventListener("DOMContentLoaded", () => { applyHash(); render(); });
