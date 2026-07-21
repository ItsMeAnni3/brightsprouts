// BrightSprouts Academy — Spelling Bee: hear a word, then type how it's spelled.
// Pure logic here; the screens live in app.js. Words come from the Spelling subject's lists.
const BEE_ROUND = 10;
const BEE_LEVELS = [
  { key: "easy",   name: "Easy",   emoji: "🌱", desc: "Grades 1–2", grades: [1, 2] },
  { key: "medium", name: "Medium", emoji: "🌤️", desc: "Grades 3–4", grades: [3, 4] },
  { key: "tricky", name: "Tricky", emoji: "🔥", desc: "Grades 5–6", grades: [5, 6] }
];

// A word you can only HEAR is unfair if another word sounds identical — a real bee solves this
// by giving a sentence, so we simply keep homophones out of the pool.
const BEE_HOMOPHONES = ["there","their","they're","to","too","two","your","you're","its","it's",
  "hear","here","write","right","one","won","be","bee","see","sea","blue","blew","knew","new",
  "know","no","buy","by","bye","for","four","fore","son","sun","would","wood","our","hour",
  "made","maid","week","weak","plane","plain","sale","sail","tail","tale","pair","pear","pare",
  "bear","bare","road","rode","mail","male","meat","meet","flour","flower","hole","whole",
  "night","knight","piece","peace","threw","through","wait","weight","break","brake","hi","high",
  "ate","eight","allowed","aloud","cell","sell","dear","deer","fair","fare","great","grate",
  "heard","herd","him","hymn","not","knot","or","oar","past","passed","read","red","seen","scene",
  "some","sum","steal","steel","tide","tied","toe","tow","way","weigh","wear","where","which","witch",
  "flew","flu","mist","missed","peak","peek","plum","plumb","rain","reign","rein","sight","site",
  "stair","stare","tea","tee","threw","vain","vein","waist","waste","weather","whether","won't"];

function beeWordPool(level) {
  const lv = BEE_LEVELS.find(l => l.key === level) || BEE_LEVELS[0];
  const seen = Object.create(null), pool = [];
  const add = grades => grades.forEach(g => {
    const sp = (typeof LESSONS !== "undefined") && LESSONS[g] && LESSONS[g].spelling;
    const list = sp && sp.spellWords;
    if (!list) return;
    list.forEach(raw => {
      const w = String(raw).trim(), k = w.toLowerCase();
      if (!w || seen[k] || k.length < 2) return;
      if (BEE_HOMOPHONES.indexOf(k) >= 0) return;
      seen[k] = true; pool.push(w);
    });
  });
  add(lv.grades);
  if (pool.length < BEE_ROUND) add([1, 2, 3, 4, 5, 6]);   // safety net for a thin list
  return pool;
}

function beeNewGame(level) {
  const pool = (typeof arcShuffle === "function" ? arcShuffle(beeWordPool(level)) : beeWordPool(level));
  return {
    level: level, words: pool.slice(0, BEE_ROUND), i: 0, correct: 0, streak: 0, best: 0,
    status: null, hint: false, revealed: false, typed: "", done: pool.length === 0
  };
}

// Forgiving compare: ignore case, surrounding space and curly apostrophes — but not the spelling itself.
function beeMatches(typed, word) {
  const norm = s => String(s == null ? "" : s).trim().toLowerCase()
    .replace(/[‘’ʼ]/g, "'").replace(/\s+/g, " ");
  return norm(typed) === norm(word);
}

// "school" -> "S _ _ _ _ _"
function beeHintFor(word) {
  return String(word).split("").map((c, i) =>
    i === 0 ? c.toUpperCase() : (/\s/.test(c) ? " " : "_")).join(" ");
}
