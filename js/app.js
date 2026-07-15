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
  { key: "writing",    label: "Writing",    emoji: "✍️" },
  { key: "science",    label: "Science",    emoji: "🔬" },
  { key: "history",    label: "History",    emoji: "🏛️" }
];

const THEME_LABELS = {
  adventure: "🗺️ Adventures",
  strangers: "🤝 Helping Strangers",
  home:      "🏠 Helping at Home"
};

// ---------- Free vs Premium rules (your monetization!) ----------
const RULES = {
  guest:   { grades: [1],    stories: 3,  custom: 0 },
  free:    { grades: [1, 2], stories: 10, custom: 2 },
  premium: { grades: "all",  stories: "all", custom: "all" }
};
const PRICE = "$9.99";
const TAX_NOTE = "Plus sales tax based on your state, calculated at checkout.";

// ---------- State ----------
const state = {
  view: "home", grade: 1, subject: "math",
  storyFilter: "all", currentStory: null,
  authMode: "signup", authMsg: "", authOk: "",
  sheetCache: {}, madeStory: null
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
        if (i % 3 === 0) { const p = pick([10, 20, 25, 50, 75]), n = R(2, 20) * 4; q = `Find ${p}% of ${n}. ____`; a = (p / 100) * n; }
        else if (i % 3 === 1) { const k = R(2, 6), x = R(2, 9), y = R(2, 9); q = `Simplify the ratio ${x * k}:${y * k} = ____`; a = `${x}:${y}`; }
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
function makeSheet(g, subj, lesson) {
  if (subj === "math") return genMath(g);
  if (subj === "vocabulary") return genVocab(lesson.words);
  if (subj === "writing") return shuffleArr(lesson.prompts).slice(0, 4).map(p => ({ q: p, a: lesson.rubric }));
  const pool = (lesson.questions || []).concat(lesson.extraQuestions || []);
  return shuffleArr(pool).slice(0, Math.min(6, pool.length));
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
function go(view) { state.view = view; state.authMsg = ""; state.authOk = ""; render(); window.scrollTo(0, 0); }

function navHtml() {
  const items = [["home", "🏡 Home"], ["lessons", "📚 Lessons"], ["stories", "📖 Stories"], ["maker", "✨ Story Maker"], ["pricing", "⭐ Plans"]];
  return items.map(([v, l]) => `<button class="${state.view === v ? "active" : ""}" onclick="App.go('${v}')">${l}</button>`).join("");
}
function authZoneHtml() {
  const u = currentUser();
  if (!u) return `<button class="btn btn-gold btn-sm" onclick="App.goAuth('login')">Log In</button>
                  <button class="btn btn-primary btn-sm" onclick="App.goAuth('signup')">Sign Up Free</button>`;
  const badge = u.plan === "premium" ? `<span class="badge">⭐ Premium</span>` : `<span class="badge free">Free Plan</span>`;
  return `<span class="hello">Hi, ${esc(u.name.split(" ")[0])}! ${badge}</span>
          <button class="btn btn-ghost btn-sm" onclick="App.go('account')">My Account</button>`;
}

// ---------- Home ----------
function homeView() {
  return `
  <div class="hero">
    <span class="big-emoji">🌱</span>
    <h1>BrightSprouts Academy</h1>
    <p>Fun, printable lessons for <b>Grades 1–12</b> in Math, Reading, Vocabulary, Writing, Science & History — plus <b>50 stories</b> that teach kindness, courage, and character. Made for parents. Loved by kids.</p>
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
  for (let g = 1; g <= 12; g++) {
    const locked = !canGrade(g);
    tiles.push(`<button class="grade-tile g${g}" onclick="App.openGrade(${g})">${locked ? '<span class="lock">🔒</span>' : ""}Grade ${g}</button>`);
  }
  return `<div class="view">
    <h1>📚 Pick a Grade</h1>
    <p class="subtitle">Six subjects per grade: Math • Reading • Vocabulary • Writing • Science • History ${tier() !== "premium" ? "&nbsp;·&nbsp; 🔒 = Premium" : ""}</p>
    <div class="grid grid-4">${tiles.join("")}</div>
  </div>`;
}

function lessonView() {
  const g = state.grade, subj = state.subject;
  const lesson = LESSONS[g][subj];
  const tabs = SUBJECTS.map(s =>
    `<button class="${s.key === subj ? "active" : ""}" onclick="App.openSubject('${s.key}')">${s.emoji} ${s.label}</button>`).join("");

  let body = "";
  if (lesson.passage) body += `<div class="passage-box"><b>📄 Read this:</b><br><br>${esc(lesson.passage)}</div>`;
  if (lesson.words) {
    body += `<table class="word-table"><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>` +
      lesson.words.map(w => `<tr><td class="w">${esc(w[0])}</td><td>${esc(w[1])}</td><td><i>${esc(w[2])}</i></td></tr>`).join("") + `</table>`;
  }

  const sheetKey = g + "-" + subj;
  if (!state.sheetCache[sheetKey]) state.sheetCache[sheetKey] = makeSheet(g, subj, lesson);
  const questions = state.sheetCache[sheetKey];
  const qHtml = questions.length ? `
    <div class="questions"><h3>✏️ Practice Time <button class="btn btn-secondary btn-sm no-print" onclick="App.newSheet()">🎲 New Worksheet</button></h3>
      ${questions.map((qa, i) => `<div class="q-item">${i + 1}. ${esc(qa.q)}${'<span class="write-line print-only"></span>'.repeat(subj === "writing" ? 5 : 1)}</div>`).join("")}
    </div>
    <div class="answers-section answers-page" style="display:none">
      <h3>✅ Answer Key — ${esc(lesson.title)} (Grade ${g})</h3>
      ${questions.map((qa, i) => `<div class="q-item">${i + 1}. ${esc(qa.q)}<span class="answer">Answer: ${esc(qa.a)}</span></div>`).join("")}
    </div>` : "";

  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.go('lessons')">← All Grades</button>
    <h1 style="margin-top:14px">Grade ${g}</h1>
    <div class="tabs no-print">${tabs}</div>
    <div class="card" id="lesson-card">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — Grade ${g} ${SUBJECTS.find(s => s.key === subj).label}</span><span>Name: ____________ &nbsp; Date: ________</span></div>
      <div class="lesson-head"><span class="lesson-emoji">${lesson.emoji}</span><h2>${esc(lesson.title)}</h2></div>
      <p class="lesson-intro">${esc(lesson.intro)}</p>
      ${lesson.learn ? `<div class="learn-box"><h3>🧠 Let's Learn!</h3><ul>${lesson.learn.map(l => `<li>${esc(l)}</li>`).join("")}</ul></div>` : ""}
      ${body}
      ${lesson.activity ? `<div class="activity-box"><h3>🎉 Fun Family Activity</h3><p>${esc(lesson.activity)}</p></div>` : ""}
      ${qHtml}
      <div class="lesson-tools no-print">
        <button class="btn btn-primary" onclick="window.print()">🖨️ Print Worksheet</button>
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

function storyView() {
  const s = STORIES.find(x => x.id === state.currentStory);
  return `<div class="view">
    <button class="btn btn-ghost btn-sm no-print" onclick="App.go('stories')">← Story Library</button>
    <div class="card" style="margin-top:14px">
      <div class="print-only print-header"><span class="brand">🌱 BrightSprouts Academy — Story Time</span><span>${THEME_LABELS[s.theme]}</span></div>
      <h1>${esc(s.title)}</h1>
      <p class="subtitle">${THEME_LABELS[s.theme]} · Ages ${s.ages}</p>
      <div class="story-full">${esc(s.text)}</div>
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
      <div class="story-full">${esc(state.madeStory.text)}</div>
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
          <li>Grades 1 & 2 — all six subjects</li>
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
          <li>ALL grades 1–12, all six subjects</li>
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
const App = {
  go,
  goAuth(mode) { state.authMode = mode; go("auth"); },

  openGrade(g) {
    if (!canGrade(g)) {
      if (!currentUser()) { state.authMode = "signup"; state.authMsg = "Create a free account to open more grades — Grades 1 & 2 are free forever!"; go("auth"); }
      else go("pricing");
      return;
    }
    state.grade = g; state.subject = "math"; go("lesson");
  },
  openSubject(s) { state.subject = s; go("lesson"); },
  newSheet() { delete state.sheetCache[state.grade + "-" + state.subject]; render(); },
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
    const el = document.getElementById("made-story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },

  signup() {
    const name = (document.getElementById("au-name").value || "").trim();
    const email = (document.getElementById("au-email").value || "").trim().toLowerCase();
    const pw = document.getElementById("au-pw").value || "";
    if (!name || !email || !pw) { state.authMsg = "Please fill in every field."; render(); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { state.authMsg = "That email doesn't look right — try again?"; render(); return; }
    if (pw.length < 6) { state.authMsg = "Password needs at least 6 characters."; render(); return; }
    const users = loadUsers();
    if (users[email]) { state.authMsg = "That email already has an account. Try logging in!"; render(); return; }
    users[email] = { name, email, pw: hashPw(pw), plan: "free", customCount: 0, joined: new Date().toLocaleDateString() };
    saveUsers(users);
    localStorage.setItem("bs_session", email);
    go("home");
  },
  login() {
    const email = (document.getElementById("au-email").value || "").trim().toLowerCase();
    const pw = document.getElementById("au-pw").value || "";
    const users = loadUsers();
    if (!users[email] || users[email].pw !== hashPw(pw)) { state.authMsg = "Email or password doesn't match. Try again!"; render(); return; }
    localStorage.setItem("bs_session", email);
    go("home");
  },
  logout() { localStorage.removeItem("bs_session"); go("home"); },

  startUpgrade() {
    if (!currentUser()) { state.authMode = "signup"; state.authMsg = "Create your free account first, then upgrade to Premium!"; go("auth"); return; }
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
function render() {
  const views = {
    home: homeView, lessons: lessonsView, lesson: lessonView,
    stories: storiesView, story: storyView, maker: makerView,
    pricing: pricingView, auth: authView, account: accountView
  };
  document.getElementById("nav").innerHTML = navHtml();
  document.getElementById("authzone").innerHTML = authZoneHtml();
  document.getElementById("app").innerHTML = (views[state.view] || homeView)() + (state.modal ? upgradeModal() : "");
}
// Optional deep links: #lessons, #stories, #maker, #pricing, #lesson-3-science, #story-12
function applyHash() {
  const h = (location.hash || "").slice(1);
  if (!h) return;
  let m;
  if ((m = h.match(/^lesson-(\d+)-(\w+)$/))) {
    const g = +m[1];
    if (LESSONS[g] && LESSONS[g][m[2]] && canGrade(g)) { state.grade = g; state.subject = m[2]; state.view = "lesson"; }
  } else if ((m = h.match(/^story-(\d+)$/))) {
    if (canStory(+m[1]) && STORIES.some(s => s.id === +m[1])) { state.currentStory = +m[1]; state.view = "story"; }
  } else if (["home", "lessons", "stories", "maker", "pricing"].includes(h)) {
    state.view = h;
  }
}
document.addEventListener("DOMContentLoaded", () => { applyHash(); render(); });
