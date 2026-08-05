// BrightSprouts Academy: 25 more arcade games, drawn from lessons across the whole site,
// spread over Easy / Medium / Hard — plus a colour theme for every game in the arcade.
//
// Each generator returns the shape the arcade already uses:
//   { promptText, prompt (html), options[4], answer }
// Subject quizzes read the lesson question banks at call time, so their facts are the ones
// already checked in the lessons themselves; the maths games compute their own answers.
(function () {
  function gEsc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function R(lo, hi) { return arcRand(lo, hi); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  function big(t) { return '<span class="arcbig">' + gEsc(t) + '</span>'; }
  function mid(t) { return '<span class="arcmid">' + gEsc(t) + '</span>'; }

  // ---- option builders --------------------------------------------------------------------
  // Four distinct numeric options around the answer.
  function numOptions(ans, spread, min) {
    var seen = {}, out = [String(ans)], guard = 0;
    seen[ans] = 1;
    while (out.length < 4 && guard++ < 200) {
      var d = ans + R(-spread, spread);
      if (d === ans || (min != null && d < min) || seen[d]) continue;
      seen[d] = 1; out.push(String(d));
    }
    for (var n = 1; out.length < 4; n++) {
      var f = ans + n * (spread + 1);
      if (!seen[f]) { seen[f] = 1; out.push(String(f)); }
    }
    return arcShuffle(out);
  }
  // Four distinct text options: the answer plus three drawn from `pool`.
  function textOptions(ans, pool) {
    var seen = {}, out = [ans];
    seen[String(ans).toLowerCase()] = 1;
    var rest = arcShuffle(pool);
    for (var i = 0; i < rest.length && out.length < 4; i++) {
      var k = String(rest[i]).toLowerCase();
      if (seen[k]) continue;
      seen[k] = 1; out.push(rest[i]);
    }
    return out.length === 4 ? arcShuffle(out) : null;
  }
  // Four distinct options built from `wanted` (answer first), padded by calling `more(n)` until
  // there are four. Two identical buttons would make a question unanswerable, so nothing that
  // reaches the screen skips this.
  function four(wanted, more) {
    var seen = {}, out = [];
    wanted.forEach(function (v) {
      var s = String(v);
      if (seen[s]) return;
      seen[s] = 1; out.push(s);
    });
    for (var n = 1; out.length < 4 && n < 400; n++) {
      var c = String(more(n));
      if (seen[c]) continue;
      seen[c] = 1; out.push(c);
    }
    return arcShuffle(out.slice(0, 4));
  }

  // ---- lesson question banks --------------------------------------------------------------
  // Only answers that stand alone make good multiple choice, so open-ended ones are filtered out.
  function usable(x) {
    return x && x.q && x.a && String(x.a).length <= 30 &&
      !/^(e\.g\.|any\b|examples?\b)/i.test(x.a) && !/\bor\b.*\bor\b/i.test(x.a);
  }
  // A wrong answer only makes the child think if it could plausibly be the answer. Pulling three
  // at random from the bank gives away the answer by shape ("A thousand millions (1,000)" next to
  // "Plants"), so candidates are ranked: same kind of answer first (number vs words), then
  // closest in length. Ties keep the shuffled order, so questions still vary between rounds.
  function answerShape(a) {
    var s = String(a).trim();
    return { num: /^[-+]?\d[\d,.\s]*$/.test(s), words: s.split(/\s+/).length };
  }
  function bankQuestion(pool) {
    var clean = (pool || []).filter(usable);
    if (clean.length < 6) return null;
    var q = clean[R(0, clean.length - 1)], target = answerShape(q.a);
    var seen = {}, cands = [];
    seen[String(q.a).toLowerCase()] = 1;
    arcShuffle(clean).forEach(function (x) {
      var k = String(x.a).toLowerCase();
      if (seen[k]) return;
      seen[k] = 1;
      var sh = answerShape(x.a);
      cands.push({ a: x.a, score: (sh.num === target.num ? 0 : 10) + Math.abs(sh.words - target.words) });
    });
    if (cands.length < 3) return null;
    cands.sort(function (a, b) { return a.score - b.score; });
    return { promptText: q.q, prompt: mid(q.q),
             options: arcShuffle([q.a].concat(cands.slice(0, 3).map(function (c) { return c.a; }))), answer: q.a };
  }
  // Most lessons keep their bank on the lesson itself; Social Studies splits each grade into
  // units and keeps a bank per unit, so both shapes are collected.
  function banksIn(L) {
    var out = [];
    if (!L) return out;
    if (L.questions) out = out.concat(L.questions);
    if (L.extraQuestions) out = out.concat(L.extraQuestions);   // the reshuffle pool in lessons3.js
    (L.units || []).forEach(function (u) { if (u && u.questions) out = out.concat(u.questions); });
    return out;
  }
  function poolOf(grades, subject) {
    var out = [];
    grades.forEach(function (g) {
      if (typeof LESSONS !== "undefined" && LESSONS[g]) out = out.concat(banksIn(LESSONS[g][subject]));
    });
    return out;
  }
  function poolOfCategory(g) {
    var out = [], L = (typeof LESSONS !== "undefined") && LESSONS[g];
    if (!L) return out;
    Object.keys(L).forEach(function (k) { out = out.concat(banksIn(L[k])); });
    return out;
  }
  // If a bank ever comes up short, fall back to a sure thing rather than crashing the game.
  function orFallback(q) { return q || G.numbersense(); }

  // ---- small reference tables (facts a child can check by counting) ------------------------
  var SHAPES = [
    { n: "Circle",    sides: 0 }, { n: "Triangle", sides: 3 }, { n: "Square",   sides: 4 },
    { n: "Rectangle", sides: 4 }, { n: "Pentagon", sides: 5 }, { n: "Hexagon",  sides: 6 },
    { n: "Heptagon",  sides: 7 }, { n: "Octagon",  sides: 8 }
  ];
  // Time facts, written as [how many, of what, in one of these, in several of these]
  var TIME_FACTS = [
    [60, "seconds", "a minute", "minutes"], [60, "minutes", "an hour", "hours"],
    [24, "hours", "a day", "days"], [7, "days", "a week", "weeks"],
    [12, "months", "a year", "years"], [52, "weeks", "a year", "years"],
    [365, "days", "an ordinary year", "ordinary years"], [10, "years", "a decade", "decades"],
    [100, "years", "a century", "centuries"], [30, "minutes", "half an hour", "half hours"]
  ];
  // Metric conversions, as [big unit, small unit, how many small in one big]
  var METRIC = [
    ["metre", "centimetres", 100], ["kilometre", "metres", 1000], ["kilogram", "grams", 1000],
    ["litre", "millilitres", 1000], ["centimetre", "millimetres", 10], ["tonne", "kilograms", 1000]
  ];

  function primesTo(n) {
    var sieve = [], out = [], i, j;
    for (i = 0; i <= n; i++) sieve[i] = true;
    for (i = 2; i * i <= n; i++) if (sieve[i]) for (j = i * i; j <= n; j += i) sieve[j] = false;
    for (i = 2; i <= n; i++) if (sieve[i]) out.push(i);
    return out;
  }
  var PRIMES = primesTo(120);
  var PRIME_SET = {};
  PRIMES.forEach(function (p) { PRIME_SET[p] = 1; });
  function gcd(a, b) { while (b) { var t = a % b; a = b; b = t; } return a; }

  // Emoji sit inside the lesson "cool facts"; the question reads better without them.
  function stripEmoji(s) {
    return String(s).replace(/^[^A-Za-z0-9(]+/, "").trim();
  }

  var G = {
    // ================= EASY =================

    // Kindergarten alphabet cards: letter → picture word, and picture word → letter.
    alphabetgame: function () {
      var cards = (typeof LESSONS !== "undefined") && LESSONS[0] && LESSONS[0].alphabet && LESSONS[0].alphabet.cards;
      if (!cards || cards.length < 6) return G.numbersense();
      var c = pick(cards);
      if (R(0, 1)) {
        var names = cards.map(function (x) { return x.n; });
        var o1 = textOptions(c.n, names);
        if (!o1) return G.numbersense();
        return { promptText: "Which word starts with the letter " + c.l + "?",
                 prompt: big(c.l) + mid("Which word starts with this letter?"), options: o1, answer: c.n };
      }
      var letters = cards.map(function (x) { return x.l; });
      var o2 = textOptions(c.l, letters);
      if (!o2) return G.numbersense();
      return { promptText: "Which letter does '" + c.n + "' start with?",
               prompt: big(c.e + " " + c.n) + mid("Which letter does it start with?"), options: o2, answer: c.l };
    },

    // Shapes: count the sides and corners. Only side-counts unique to one shape are asked about.
    shapesgame: function () {
      var kind = R(0, 2);
      if (kind === 0) {
        var s = pick(SHAPES);
        return { promptText: "How many sides does a " + s.n.toLowerCase() + " have?",
                 prompt: big(s.n) + mid("How many sides does it have?"),
                 options: numOptions(s.sides, 3, 0), answer: String(s.sides) };
      }
      if (kind === 1) {
        // "which shape has N sides" only works when exactly one shape has N sides
        var counts = {};
        SHAPES.forEach(function (x) { counts[x.sides] = (counts[x.sides] || 0) + 1; });
        var uniq = SHAPES.filter(function (x) { return counts[x.sides] === 1 && x.sides > 0; });
        var u = pick(uniq);
        var opts = textOptions(u.n, SHAPES.map(function (x) { return x.n; }));
        if (!opts) return G.numbersense();
        return { promptText: "Which shape has " + u.sides + " sides?",
                 prompt: big(u.sides + " sides") + mid("Which shape is it?"), options: opts, answer: u.n };
      }
      var round = SHAPES.filter(function (x) { return x.sides > 0; }).map(function (x) { return x.n; });
      return { promptText: "Which shape has no corners at all?", prompt: mid("Which shape has no corners at all?"),
               options: textOptions("Circle", round), answer: "Circle" };
    },

    // Counting: skip-count patterns, what comes next, and which number is biggest.
    countingup: function () {
      var kind = R(0, 2);
      if (kind === 0) {                                   // missing number in a skip-count
        var step = [1, 2, 5, 10][R(0, 3)], start = step * R(1, 8), gapAt = R(1, 3);
        var seq = [], ans = 0;
        for (var i = 0; i < 5; i++) {
          var v = start + i * step;
          if (i === gapAt) { ans = v; seq.push("?"); } else seq.push(String(v));
        }
        return { promptText: "What is the missing number: " + seq.join(", ") + "?",
                 prompt: big(seq.join("  ")) + mid("Which number is missing?"),
                 options: numOptions(ans, step * 3, 0), answer: String(ans) };
      }
      if (kind === 1) {                                   // which is biggest / smallest
        var wantBig = R(0, 1), nums = {}, list = [], guard = 0;
        while (list.length < 4 && guard++ < 80) {
          var n = R(11, 99);
          if (nums[n]) continue;
          nums[n] = 1; list.push(n);
        }
        var target = wantBig ? Math.max.apply(null, list) : Math.min.apply(null, list);
        return { promptText: "Which number is the " + (wantBig ? "biggest" : "smallest") + "?",
                 prompt: mid("Which number is the " + (wantBig ? "BIGGEST" : "SMALLEST") + "?"),
                 options: arcShuffle(list.map(String)), answer: String(target) };
      }
      var b = R(10, 98), after = R(0, 1);                 // what comes next / before
      var a2 = after ? b + 1 : b - 1;
      return { promptText: "Which number comes " + (after ? "after" : "before") + " " + b + "?",
               prompt: big(String(b)) + mid("Which number comes " + (after ? "AFTER" : "BEFORE") + " it?"),
               options: numOptions(a2, 4, 0), answer: String(a2) };
    },

    // Number sense: spot the even one, the odd one, or the multiple.
    numbersense: function () {
      var kind = R(0, 2);
      if (kind === 2) {
        var m = [3, 4, 5, 10][R(0, 3)];
        var ans = m * R(3, 12), seen = {}, out = [String(ans)], guard = 0;
        seen[ans] = 1;
        while (out.length < 4 && guard++ < 200) {
          var d = R(ans - 15, ans + 15);
          if (d < 1 || d % m === 0 || seen[d]) continue;
          seen[d] = 1; out.push(String(d));
        }
        for (var k = 1; out.length < 4; k++) if (!seen[ans + k] && (ans + k) % m !== 0) { seen[ans + k] = 1; out.push(String(ans + k)); }
        return { promptText: "Which number is a multiple of " + m + "?",
                 prompt: mid("Which number is a multiple of " + m + "?"), options: arcShuffle(out), answer: String(ans) };
      }
      var wantEven = kind === 0;
      var ansN = wantEven ? 2 * R(3, 49) : 2 * R(3, 49) + 1;
      var s2 = {}, list = [String(ansN)], g2 = 0;
      s2[ansN] = 1;
      while (list.length < 4 && g2++ < 200) {
        var w = wantEven ? 2 * R(3, 49) + 1 : 2 * R(3, 49);
        if (s2[w]) continue;
        s2[w] = 1; list.push(String(w));
      }
      return { promptText: "Which number is " + (wantEven ? "even" : "odd") + "?",
               prompt: mid("Which number is " + (wantEven ? "EVEN" : "ODD") + "?"),
               options: arcShuffle(list), answer: String(ansN) };
    },

    // Vocabulary words from the Grade 1–5 word collections: word → meaning.
    vocabmatch: function () {
      var all = [];
      [1, 2, 3, 4, 5].forEach(function (g) {
        var V = (typeof LESSONS !== "undefined") && LESSONS[g] && LESSONS[g].vocabulary;
        if (V && V.words) all = all.concat(V.words);
      });
      all = all.filter(function (w) { return w && w[0] && w[1]; });
      if (all.length < 6) return G.numbersense();
      var w2 = pick(all);
      var opts = textOptions(w2[1], all.map(function (x) { return x[1]; }));
      if (!opts) return G.numbersense();
      return { promptText: "What does '" + w2[0] + "' mean?", prompt: big(w2[0]) + mid("What does this word mean?"),
               options: opts, answer: w2[1] };
    },

    musicquiz:   function () { return orFallback(bankQuestion(poolOf([1, 2, 3, 4, 5], "music"))); },
    artquiz:     function () { return orFallback(bankQuestion(poolOf([1, 2, 3, 4, 5], "art"))); },
    sciencequiz: function () { return orFallback(bankQuestion(poolOf([1, 2, 3, 4, 5, 6], "science"))); },

    // Hours, minutes and days: the conversions from the Time & Money lessons.
    timeunits: function () {
      var f = pick(TIME_FACTS);
      if (R(0, 1)) {
        return { promptText: "How many " + f[1] + " are in " + f[2] + "?",
                 prompt: mid("How many " + f[1] + " are in " + f[2] + "?"),
                 options: numOptions(f[0], Math.max(3, Math.round(f[0] / 4)), 1), answer: String(f[0]) };
      }
      var n = R(2, 6), total = f[0] * n;
      return { promptText: "How many " + f[1] + " are in " + n + " " + f[3] + "?",
               prompt: mid("How many " + f[1] + " are in " + n + " " + f[3] + "?"),
               options: numOptions(total, Math.max(3, f[0]), 1), answer: String(total) };
    },

    // ================= MEDIUM =================

    // Place value: what a digit is worth, and which digit sits in a place.
    placevalue: function () {
      var places = [["ones", 1], ["tens", 10], ["hundreds", 100], ["thousands", 1000]];
      var digits = [];
      for (var i = 0; i < 4; i++) digits.push(R(1, 9));      // no zeros: keeps every place askable
      var num = digits[0] * 1000 + digits[1] * 100 + digits[2] * 10 + digits[3];
      var shown = num.toLocaleString("en-US");
      // `digits` runs thousands → ones, `places` runs ones → thousands, so the indexes mirror.
      var pi = R(0, 3), place = places[pi], digit = digits[3 - pi];
      if (R(0, 1)) {
        var val = digit * place[1];
        return { promptText: "In " + shown + ", what is the digit " + digit + " in the " + place[0] + " place worth?",
                 prompt: big(shown) + mid("What is the " + place[0] + " digit worth?"),
                 options: numOptions(val, Math.max(3, place[1] * 3), 0), answer: String(val) };
      }
      return { promptText: "Which digit is in the " + place[0] + " place of " + shown + "?",
               prompt: big(shown) + mid("Which digit is in the " + place[0] + " place?"),
               options: uniqDigits(digit), answer: String(digit) };
    },

    // Rounding to the nearest 10, 100 or 1000.
    rounding: function () {
      var to = [10, 100, 1000][R(0, 2)];
      var num = R(to, to * 20) + R(1, to - 1);
      var ans = Math.round(num / to) * to;
      var seen = {}, out = [String(ans)];
      seen[ans] = 1;
      for (var k = 1; out.length < 4; k++) {
        var cand = ans + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * to;
        if (cand >= 0 && !seen[cand]) { seen[cand] = 1; out.push(String(cand)); }
      }
      return { promptText: "Round " + num + " to the nearest " + to + ".",
               prompt: big(String(num)) + mid("Round to the nearest " + to), options: arcShuffle(out), answer: String(ans) };
    },

    // Area and perimeter of the shapes from the formula sheet.
    geometry: function () {
      var kind = R(0, 3);
      if (kind === 0) {
        var l = R(3, 15), w = R(3, 15), a = l * w;
        return { promptText: "A rectangle is " + l + " cm long and " + w + " cm wide. What is its area?",
                 prompt: mid("Rectangle " + l + " cm × " + w + " cm — what is the AREA?"),
                 options: numOptions(a, Math.max(4, Math.round(a / 4)), 1).map(function (x) { return x + " cm²"; }),
                 answer: a + " cm²" };
      }
      if (kind === 1) {
        var l2 = R(3, 15), w2 = R(3, 15), p = 2 * (l2 + w2);
        return { promptText: "A rectangle is " + l2 + " cm long and " + w2 + " cm wide. What is its perimeter?",
                 prompt: mid("Rectangle " + l2 + " cm × " + w2 + " cm — what is the PERIMETER?"),
                 options: numOptions(p, 8, 1).map(function (x) { return x + " cm"; }), answer: p + " cm" };
      }
      if (kind === 2) {
        var b = 2 * R(2, 10), h = R(3, 14), at = b * h / 2;
        return { promptText: "A triangle has a base of " + b + " cm and a height of " + h + " cm. What is its area?",
                 prompt: mid("Triangle: base " + b + " cm, height " + h + " cm — what is the AREA?"),
                 options: numOptions(at, Math.max(4, Math.round(at / 3)), 1).map(function (x) { return x + " cm²"; }),
                 answer: at + " cm²" };
      }
      var s = R(3, 15);
      return { promptText: "A square has sides of " + s + " cm. What is its area?",
               prompt: mid("Square with " + s + " cm sides — what is the AREA?"),
               options: numOptions(s * s, Math.max(4, s * 2), 1).map(function (x) { return x + " cm²"; }),
               answer: (s * s) + " cm²" };
    },

    // Metric measurement: converting between the units.
    measure: function () {
      var m = pick(METRIC);
      if (R(0, 1)) {
        return { promptText: "How many " + m[1] + " are in 1 " + m[0] + "?",
                 prompt: mid("How many " + m[1] + " are in 1 " + m[0] + "?"),
                 options: four([m[2], m[2] * 10, m[2] / 10, m[2] * 100], function (n) { return m[2] * (n + 3); }),
                 answer: String(m[2]) };
      }
      var n2 = R(2, 9), total = n2 * m[2];
      return { promptText: "How many " + m[1] + " are in " + n2 + " " + m[0] + "s?",
               prompt: mid(n2 + " " + m[0] + "s = how many " + m[1] + "?"),
               options: four([total, total * 10, total / 10, total + m[2]], function (k) { return total + k * m[2]; }),
               answer: String(total) };
    },

    histquiz: function () { return orFallback(bankQuestion(poolOf([1, 2, 3, 4, 5, 6, 7, 8], "history"))); },

    // The historical eras timeline: when an era ran, and which era a fact belongs to.
    eraquiz: function () {
      var eras = (typeof HIST_ERAS !== "undefined") && HIST_ERAS;
      if (!eras || eras.length < 4) return orFallback(bankQuestion(poolOfCategory(19)));
      var kind = R(0, 2);
      if (kind === 2) return orFallback(bankQuestion(poolOfCategory(19)));
      var e = pick(eras);
      if (kind === 0) {
        var whens = eras.map(function (x) { return x.when; });
        var o1 = textOptions(e.when, whens);
        if (!o1) return orFallback(bankQuestion(poolOfCategory(19)));
        return { promptText: "When was " + e.name + "?", prompt: big(e.emoji + " " + e.name) + mid("When was it?"),
                 options: o1, answer: e.when };
      }
      if (!e.facts || !e.facts.length) return orFallback(bankQuestion(poolOfCategory(19)));
      var fact = stripEmoji(pick(e.facts));
      var o2 = textOptions(e.name, eras.map(function (x) { return x.name; }));
      if (!o2) return orFallback(bankQuestion(poolOfCategory(19)));
      return { promptText: "In which era did this happen? " + fact,
               prompt: mid("In which era did this happen? " + fact), options: o2, answer: e.name };
    },

    csquiz:    function () { return orFallback(bankQuestion(poolOfCategory(17))); },
    jokequiz:  function () { return orFallback(bankQuestion(poolOfCategory(29))); },
    moneyquiz: function () { return orFallback(bankQuestion(poolOfCategory(23))); },

    // Flora & Fauna: match a common name to its scientific name (the per-country species lists).
    speciesquiz: function () {
      if (typeof FF_COUNTRY === "undefined") return G.numbersense();
      var keys = Object.keys(FF_COUNTRY);
      if (!keys.length) return G.numbersense();
      var all = [], seen = {};
      for (var t = 0; t < 8; t++) {                     // a few countries is plenty of choices
        var c = FF_COUNTRY[pick(keys)];
        if (!c) continue;
        (c.flora || []).concat(c.fauna || []).forEach(function (sp) {
          if (!sp || !sp[0] || !sp[1] || seen[sp[1]]) return;
          seen[sp[1]] = 1; all.push(sp);
        });
      }
      if (all.length < 6) return G.numbersense();
      var s = pick(all);
      var opts = textOptions(s[1], all.map(function (x) { return x[1]; }));
      if (!opts) return G.numbersense();
      return { promptText: "What is the scientific name of the " + s[0] + "?",
               prompt: big(s[0]) + mid("What is its scientific name?"), options: opts, answer: s[1] };
    },

    // ================= HARD =================

    // Solve a one- or two-step linear equation. The numbers are chosen so x is always a whole number.
    algebra: function () {
      var x = R(2, 12), a = R(2, 9), b = R(1, 20);
      if (R(0, 1)) {
        var c = a * x + b;
        return { promptText: a + "x + " + b + " = " + c + ". What is x?",
                 prompt: big(a + "x + " + b + " = " + c) + mid("What is x?"),
                 options: numOptions(x, 5, 0), answer: String(x) };
      }
      var d = a * x - b;
      return { promptText: a + "x − " + b + " = " + d + ". What is x?",
               prompt: big(a + "x − " + b + " = " + d) + mid("What is x?"),
               options: numOptions(x, 5, 0), answer: String(x) };
    },

    // Percentages: of an amount, as a fraction, and percentage change.
    percent: function () {
      var kind = R(0, 2);
      // Every whole is a multiple of 20 and every percentage a multiple of 5, so the answers
      // are always whole numbers — no child should meet "18.75" in a percentages game.
      if (kind === 0) {
        var p = [5, 10, 20, 25, 50, 75][R(0, 5)], whole = 20 * R(1, 15), ans = whole * p / 100;
        return { promptText: "What is " + p + "% of " + whole + "?", prompt: big(p + "% of " + whole),
                 options: numOptions(ans, Math.max(3, Math.round(ans / 3)), 0), answer: String(ans) };
      }
      if (kind === 1) {
        var whole2 = [20, 40, 60, 80, 100, 200][R(0, 5)];
        var pct = [10, 20, 25, 50, 75][R(0, 4)], part = whole2 * pct / 100;
        return { promptText: part + " is what percent of " + whole2 + "?",
                 prompt: big(part + " out of " + whole2) + mid("What percentage is that?"),
                 options: four([pct + "%", (pct + 10) + "%", (pct + 25) + "%", Math.max(5, pct - 10) + "%"],
                   function (n) { return (pct + 5 * n) + "%"; }), answer: pct + "%" };
      }
      var base = 20 * R(1, 15), up = [10, 20, 25, 50][R(0, 3)], res = base + base * up / 100;
      return { promptText: "Increase " + base + " by " + up + "%. What do you get?",
               prompt: big(base + "  +" + up + "%") + mid("What is the new amount?"),
               options: numOptions(res, Math.max(4, Math.round(base / 4)), 0), answer: String(res) };
    },

    // Primes, factors and multiples.
    primes: function () {
      var kind = R(0, 2);
      if (kind === 0) {
        var p = pick(PRIMES.filter(function (v) { return v > 10; }));
        var seen = {}, out = [String(p)], guard = 0;
        seen[p] = 1;
        while (out.length < 4 && guard++ < 300) {
          var d = R(11, 120);
          if (PRIME_SET[d] || seen[d]) continue;
          seen[d] = 1; out.push(String(d));
        }
        return { promptText: "Which of these is a prime number?", prompt: mid("Which of these is a PRIME number?"),
                 options: arcShuffle(out), answer: String(p) };
      }
      if (kind === 1) {
        var a = R(6, 40), b = R(6, 40), g = gcd(a, b);
        return { promptText: "What is the highest common factor of " + a + " and " + b + "?",
                 prompt: big(a + "  and  " + b) + mid("What is their highest common factor?"),
                 options: numOptions(g, 4, 1), answer: String(g) };
      }
      var a2 = R(2, 12), b2 = R(2, 12), l = a2 * b2 / gcd(a2, b2);
      return { promptText: "What is the lowest common multiple of " + a2 + " and " + b2 + "?",
               prompt: big(a2 + "  and  " + b2) + mid("What is their lowest common multiple?"),
               options: numOptions(l, Math.max(4, Math.round(l / 3)), 1), answer: String(l) };
    },

    // Squares, cubes, roots and the index laws.
    powers: function () {
      var kind = R(0, 3);
      if (kind === 0) {
        var n = R(2, 20);
        return { promptText: n + "² = ?", prompt: big(n + "² = ?"), options: numOptions(n * n, Math.max(4, n * 2), 1), answer: String(n * n) };
      }
      if (kind === 1) {
        var c = R(2, 10);
        return { promptText: c + "³ = ?", prompt: big(c + "³ = ?"), options: numOptions(c * c * c, Math.max(6, c * c), 1), answer: String(c * c * c) };
      }
      if (kind === 2) {
        var r = R(2, 20);
        return { promptText: "What is the square root of " + (r * r) + "?", prompt: big("√" + (r * r) + " = ?"),
                 options: numOptions(r, 5, 1), answer: String(r) };
      }
      var base = R(2, 6), e1 = R(2, 4), e2 = R(2, 4);
      return { promptText: base + "^" + e1 + " × " + base + "^" + e2 + " = ?",
               prompt: big(base + "^" + e1 + " × " + base + "^" + e2) + mid("What is it as a single power?"),
               options: four([base + "^" + (e1 + e2), base + "^" + (e1 * e2), (base * base) + "^" + (e1 + e2)],
                 function (n) { return base + "^" + (e1 + e2 + n); }), answer: base + "^" + (e1 + e2) };
    },

    // Negative numbers: the four operations across zero.
    integers: function () {
      var kind = R(0, 3), a, b, ans, q;
      if (kind === 0) { a = -R(2, 20); b = R(2, 30); ans = a + b; q = "(" + a + ") + " + b; }
      else if (kind === 1) { a = R(2, 15); b = R(16, 35); ans = a - b; q = a + " − " + b; }
      else if (kind === 2) { a = -R(2, 12); b = R(2, 9); ans = a * b; q = "(" + a + ") × " + b; }
      else { b = R(2, 9); ans = -R(2, 12); a = ans * b; q = "(" + a + ") ÷ " + b; }
      return { promptText: q + " = ?", prompt: big(q + " = ?"), options: numOptions(ans, 7), answer: String(ans) };
    },

    // The periodic table by atomic number (the same PubChem data the Periodic Table lesson uses).
    atomquiz: function () {
      if (typeof ELEMENTS === "undefined" || !ELEMENTS.length) return G.powers();
      var pool = ELEMENTS.slice(0, 60);
      var e = pick(pool);
      if (R(0, 1)) {
        var opts = textOptions(e[2], pool.map(function (x) { return x[2]; }));
        if (!opts) return G.powers();
        return { promptText: "Which element has atomic number " + e[0] + "?",
                 prompt: big("#" + e[0]) + mid("Which element has this atomic number?"), options: opts, answer: e[2] };
      }
      return { promptText: "What is the atomic number of " + e[2] + "?",
               prompt: big(e[1]) + mid("What is the atomic number of " + e[2] + "?"),
               options: numOptions(e[0], 8, 1), answer: String(e[0]) };
    },

    // Senior Social Studies: world history (9–10), US History III (11) and Civics (12).
    civicsquiz: function () { return orFallback(bankQuestion(poolOf([9, 10, 11, 12], "history"))); }
  };

  // Four distinct single digits including `d` — used by the place-value question.
  function uniqDigits(d) {
    var seen = {}, out = [String(d)], guard = 0;
    seen[d] = 1;
    while (out.length < 4 && guard++ < 60) {
      var n = R(1, 9);
      if (seen[n]) continue;
      seen[n] = 1; out.push(String(n));
    }
    return arcShuffle(out);
  }

  // ---- register the games -----------------------------------------------------------------
  // `theme` names a colour palette in styles.css (.gt-*), used for the tile and the game screen.
  var MORE_GAMES = [
    { key: "alphabetgame", name: "Alphabet Adventure", emoji: "🔤", desc: "Match every letter to its picture word.",        level: "Easy",   subject: "Alphabet",         theme: "lemon" },
    { key: "shapesgame",   name: "Shape Safari",       emoji: "🔷", desc: "Count sides and corners to name the shape.",     level: "Easy",   subject: "Shapes",           theme: "sky" },
    { key: "countingup",   name: "Count & Compare",    emoji: "🔢", desc: "Missing numbers, skip counting and biggest of all.", level: "Easy", subject: "Counting",       theme: "mint" },
    { key: "numbersense",  name: "Number Detective",   emoji: "🔎", desc: "Spot the odd, the even and the multiples.",      level: "Easy",   subject: "Maths",            theme: "candy" },
    { key: "vocabmatch",   name: "Word Wizard",        emoji: "🦋", desc: "What does the word mean? Grow your word collection.", level: "Easy", subject: "Vocabulary",   theme: "berry" },
    { key: "musicquiz",    name: "Music Maestro",      emoji: "🎼", desc: "Beat, rhythm, pitch and the musical alphabet.",  level: "Easy",   subject: "Music",            theme: "grape" },
    { key: "artquiz",      name: "Art Studio",         emoji: "🖼️", desc: "Colours, lines, shapes and how artists mix them.", level: "Easy", subject: "Visual Art",      theme: "sunrise" },
    { key: "sciencequiz",  name: "Science Sprout",     emoji: "🔬", desc: "Senses, plants, weather, animals and matter.",   level: "Easy",   subject: "Science",          theme: "forest" },
    { key: "timeunits",    name: "Time Traveller",     emoji: "⏳", desc: "Seconds, minutes, hours, days and years.",       level: "Easy",   subject: "Time",             theme: "sand" },
    { key: "jokequiz",     name: "Joke Detective",     emoji: "🎭", desc: "Set-ups, punchlines, puns and what makes them funny.", level: "Easy", subject: "Jokes",         theme: "candy" },

    { key: "placevalue",   name: "Place Value Pro",    emoji: "🏷️", desc: "Ones, tens, hundreds — what is each digit worth?", level: "Medium", subject: "Maths",          theme: "ocean" },
    { key: "rounding",     name: "Round It Off",       emoji: "🎯", desc: "Round to the nearest 10, 100 or 1000.",          level: "Medium", subject: "Maths",            theme: "sky" },
    { key: "geometry",     name: "Shape Space",        emoji: "📐", desc: "Area and perimeter of squares, rectangles and triangles.", level: "Medium", subject: "Geometry", theme: "slate" },
    { key: "measure",      name: "Measure Up",         emoji: "📏", desc: "Millimetres to kilometres, grams to kilograms.", level: "Medium", subject: "Measurement",      theme: "mint" },
    { key: "histquiz",     name: "History Detective",  emoji: "🏛️", desc: "People, places and turning points of the past.", level: "Medium", subject: "History",          theme: "sand" },
    { key: "eraquiz",      name: "Time Machine",       emoji: "🕰️", desc: "Place each era on the timeline of human history.", level: "Medium", subject: "Historical Eras", theme: "clay" },
    { key: "csquiz",       name: "Code Cracker",       emoji: "💻", desc: "Algorithms, loops, variables and staying safe online.", level: "Medium", subject: "Computer Science", theme: "galaxy" },
    { key: "moneyquiz",    name: "Money Smart",        emoji: "🏦", desc: "Counting money, change, saving and spending.",   level: "Medium", subject: "Money",            theme: "forest" },
    { key: "speciesquiz",  name: "Nature Explorer",    emoji: "🌿", desc: "Match wild plants and animals to their scientific names.", level: "Medium", subject: "Flora & Fauna", theme: "jungle" },

    { key: "algebra",      name: "Solve for X",        emoji: "🧩", desc: "Balance the equation and find the missing value.", level: "Hard",  subject: "Algebra",          theme: "galaxy" },
    { key: "percent",      name: "Percent Power",      emoji: "💯", desc: "Percentages of amounts, and percentage increase.", level: "Hard",  subject: "Maths",            theme: "flame" },
    { key: "primes",       name: "Prime Hunter",       emoji: "🔱", desc: "Primes, highest common factors and lowest common multiples.", level: "Hard", subject: "Maths", theme: "ocean" },
    { key: "powers",       name: "Power Up",           emoji: "⚡", desc: "Squares, cubes, roots and the laws of indices.",  level: "Hard",   subject: "Maths",            theme: "lemon" },
    { key: "integers",     name: "Integer Ice",        emoji: "🧊", desc: "Adding, subtracting and multiplying negatives.",  level: "Hard",   subject: "Maths",            theme: "frost" },
    { key: "atomquiz",     name: "Atomic Number",      emoji: "💠", desc: "Name the element from its number on the table.",  level: "Hard",   subject: "Chemistry",        theme: "slate" },
    { key: "civicsquiz",   name: "Civics Champion",    emoji: "🗳️", desc: "World history, the US story and how government works.", level: "Hard", subject: "Social Studies", theme: "flame" }
  ];

  // Themes for the games that were already here, so the whole arcade is colour-coded.
  var THEME_BY_KEY = {
    plant: "forest", castle: "castle",
    matharace: "ocean", flagquiz: "berry", bee: "lemon", spellbee: "candy", memory: "grape",
    addsub: "mint", clockread: "sky", rhyme: "candy", spanishq: "flame", spacequiz: "galaxy",
    feelquiz: "berry", times: "ocean", coincount: "sand", rockquiz: "clay", paleoquiz: "jungle",
    physsciquiz: "slate", earthspacequiz: "frost", bioquiz: "forest", elements: "grape",
    continent: "jungle", fractions: "sunrise", capitals: "sky", chemquiz: "flame", physquiz: "galaxy"
  };

  if (typeof ARCADE_GAMES !== "undefined") {
    ARCADE_GAMES.forEach(function (g) { if (!g.theme && THEME_BY_KEY[g.key]) g.theme = THEME_BY_KEY[g.key]; });
    MORE_GAMES.forEach(function (g) { g.quiz = true; ARCADE_GAMES.push(g); });
  }

  // games2.js owns window.EXTRA_GAMES; merge rather than replace so both files' games work.
  window.EXTRA_GAMES = window.EXTRA_GAMES || {};
  Object.keys(G).forEach(function (k) { window.EXTRA_GAMES[k] = G[k]; });
  window.ARCADE_THEME_BY_KEY = THEME_BY_KEY;
})();
