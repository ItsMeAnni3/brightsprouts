// BrightSprouts Academy — Arcade games logic (pure, verifiable; DOM lives in app.js).
// Four games. Three are "pick the right answer" quizzes; one is Memory Match.

const ARCADE_GAMES = [
  { key:"matharace",  name:"Math Race",    emoji:"🧮", desc:"Answer 10 sums as fast as you can!", badge:"mathwhiz" },
  { key:"flagquiz",   name:"Flag Quiz",    emoji:"🚩", desc:"Which country does the flag belong to?", badge:"explorer" },
  { key:"bee",        name:"Spelling Bee", emoji:"🐝", desc:"Listen to the word — then spell it!", badge:"speller" },
  { key:"spellbee",   name:"Spot the Spelling", emoji:"🔤", desc:"Pick the word that is spelled correctly.", badge:"speller" },
  { key:"memory",     name:"Memory Match", emoji:"🧠", desc:"Flip the cards and find the matching pairs.", badge:"memory" }
];
const ARCADE_Q = 10;   // questions per quiz game

function arcRand(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
function arcShuffle(a) { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = arcRand(0, i);[r[i], r[j]] = [r[j], r[i]]; } return r; }

// ---- one quiz question: { prompt (html), promptText, options[4], answer } ----
function arcadeQuestion(type) {
  if (type === "matharace") {
    const kind = arcRand(0, 3);
    let a, b, q, ans;
    if (kind === 0) { a = arcRand(2, 20); b = arcRand(2, 20); q = `${a} + ${b}`; ans = a + b; }
    else if (kind === 1) { a = arcRand(10, 30); b = arcRand(1, a); q = `${a} − ${b}`; ans = a - b; }
    else if (kind === 2) { a = arcRand(2, 12); b = arcRand(2, 12); q = `${a} × ${b}`; ans = a * b; }
    else { b = arcRand(2, 12); ans = arcRand(2, 12); a = b * ans; q = `${a} ÷ ${b}`; }
    const opts = new Set([ans]);
    while (opts.size < 4) { const d = ans + arcRand(-6, 6); if (d >= 0 && d !== ans) opts.add(d); }
    return { promptText: q + " = ?", prompt: `<span class="arcbig">${q} = ?</span>`,
             options: arcShuffle([...opts]).map(String), answer: String(ans) };
  }
  if (type === "flagquiz") {
    // uses the geography data (LESSONS[13]) — all 195 countries with flags
    const all = [];
    LESSONS[13].geography.continents.forEach(c => (c.countries || []).forEach(k => all.push({ iso: k[0], name: k[1] })));
    const pick = all[arcRand(0, all.length - 1)];
    const wrong = arcShuffle(all.filter(x => x.name !== pick.name)).slice(0, 3).map(x => x.name);
    return { promptText: "Which country owns this flag?",
             prompt: `<img class="arcflag" src="https://flagcdn.com/w160/${pick.iso}.png" alt="a flag">`,
             options: arcShuffle([pick.name, ...wrong]), answer: pick.name };
  }
  if (type === "spellbee") {
    // reuse the spelling word lists + misspelling generator from the Spelling subject
    const pool = [];
    for (let g = 1; g <= 6; g++) if (LESSONS[g] && LESSONS[g].spelling) pool.push(...LESSONS[g].spelling.spellWords);
    const word = pool[arcRand(0, pool.length - 1)];
    const m1 = misspell(word, [word]), m2 = misspell(word, [word, m1]), m3 = misspell(word, [word, m1, m2]);
    return { promptText: "Which spelling is correct?", prompt: `<span class="arcmid">Which one is spelled correctly?</span>`,
             options: arcShuffle([word, m1, m2, m3]), answer: word };
  }
  return null;
}

// ---- Memory Match: a deck of pairs ----
const MEMORY_FACES = ["🌻","🐶","🦋","🐢","🚀","🌈","🐙","🦉","🍎","🐝","🐬","🦄"];
function memoryDeck(pairs) {
  const faces = arcShuffle(MEMORY_FACES).slice(0, pairs);
  return arcShuffle(faces.concat(faces)).map((f, i) => ({ id: i, face: f, up: false, done: false }));
}

// stars from a finished quiz: one per correct answer (so 0–10)
function arcadeStars(correct) { return Math.max(0, correct); }
// stars from Memory Match: 5 for a perfect run (moves === pairs), sliding down to a floor of 2
function memoryStars(pairs, moves) {
  const waste = moves - pairs;                 // extra flips beyond a perfect run
  return Math.max(2, 5 - Math.floor(waste / 2));
}
