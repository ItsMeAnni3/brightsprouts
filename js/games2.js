// BrightSprouts Academy — 16 more arcade games across the subjects, at three difficulty levels.
// Each generator returns the same shape the arcade already uses:
//   { promptText, prompt (html), options[4], answer }
// Subject quizzes draw on the lesson question banks, so their facts are the ones already checked.
(function () {
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';
  function gEsc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function R(lo, hi) { return arcRand(lo, hi); }
  function big(t) { return '<span class="arcbig">' + gEsc(t) + '</span>'; }
  function mid(t) { return '<span class="arcmid">' + gEsc(t) + '</span>'; }

  // four distinct numeric options around the answer
  function numOptions(ans, spread, min) {
    var set = {}, out = [String(ans)];
    set[ans] = 1;
    var guard = 0;
    while (out.length < 4 && guard++ < 200) {
      var d = ans + R(-spread, spread);
      if (d === ans || (min != null && d < min) || set[d]) continue;
      set[d] = 1; out.push(String(d));
    }
    while (out.length < 4) { var f = ans + out.length; if (!set[f]) { set[f] = 1; out.push(String(f)); } }
    return arcShuffle(out);
  }

  // ---- questions built from a lesson bank -------------------------------------------------
  // Only answers that stand alone make good multiple choice, so open-ended ones are filtered out.
  function usable(x) {
    return x && x.q && x.a && String(x.a).length <= 30 &&
      !/^(e\.g\.|any\b)/i.test(x.a) && !/\bor\b.*\bor\b/i.test(x.a);
  }
  function bankQuestion(pool) {
    var clean = (pool || []).filter(usable);
    if (clean.length < 6) return null;
    var pick = clean[R(0, clean.length - 1)];
    var seen = {}, wrong = [];
    seen[String(pick.a).toLowerCase()] = 1;
    var rest = arcShuffle(clean);
    for (var i = 0; i < rest.length && wrong.length < 3; i++) {
      var k = String(rest[i].a).toLowerCase();
      if (seen[k]) continue;
      seen[k] = 1; wrong.push(rest[i].a);
    }
    if (wrong.length < 3) return null;
    return { promptText: pick.q, prompt: mid(pick.q), options: arcShuffle([pick.a].concat(wrong)), answer: pick.a };
  }
  function poolOf(grades, subject) {
    var out = [];
    grades.forEach(function (g) {
      var L = (typeof LESSONS !== "undefined") && LESSONS[g] && LESSONS[g][subject];
      if (L && L.questions) out = out.concat(L.questions);
    });
    return out;
  }
  function poolOfCategory(g) {
    var out = [], L = (typeof LESSONS !== "undefined") && LESSONS[g];
    if (!L) return out;
    Object.keys(L).forEach(function (k) { if (L[k] && L[k].questions) out = out.concat(L[k].questions); });
    return out;
  }
  // if a bank ever comes up short, fall back to a sure thing rather than crashing the game
  function orFallback(q) { return q || EXTRA_GAMES.addsub(); }

  // ---- a clock face for "What's the Time?" ------------------------------------------------
  function clockSvg(h, m) {
    var cx = 90, cy = 90, r = 74, s = '<svg viewBox="0 0 180 180" width="180" height="180">'
      + '<circle cx="90" cy="90" r="74" fill="#fff" stroke="#5d3fa0" stroke-width="4"/>';
    for (var i = 1; i <= 12; i++) {
      var a = (i * 30 - 90) * Math.PI / 180;
      s += '<text x="' + Math.round(cx + Math.cos(a) * (r - 15)) + '" y="' + Math.round(cy + Math.sin(a) * (r - 15) + 5)
        + '" text-anchor="middle" ' + FA + ' font-size="14" fill="#2d2a4a">' + i + '</text>';
    }
    var ha = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180, ma = (m * 6 - 90) * Math.PI / 180;
    s += '<line x1="90" y1="90" x2="' + Math.round(cx + Math.cos(ha) * r * 0.46) + '" y2="' + Math.round(cy + Math.sin(ha) * r * 0.46)
      + '" stroke="#e2453b" stroke-width="6" stroke-linecap="round"/>';
    s += '<line x1="90" y1="90" x2="' + Math.round(cx + Math.cos(ma) * r * 0.74) + '" y2="' + Math.round(cy + Math.sin(ma) * r * 0.74)
      + '" stroke="#4d96ff" stroke-width="4" stroke-linecap="round"/>';
    return s + '<circle cx="90" cy="90" r="5" fill="#2d2a4a"/></svg>';
  }
  function timeLabel(h, m) {
    var nx = (h % 12) + 1;
    if (m === 0) return h + " o'clock";
    if (m === 15) return "quarter past " + h;
    if (m === 30) return "half past " + h;
    return "quarter to " + nx;
  }

  // ---- coins for "Coin Counter" -----------------------------------------------------------
  var COINS = [{ v: 1, n: "1¢", r: 17, f: "#e0a86a", s: "#b87333" },
               { v: 5, n: "5¢", r: 19, f: "#d8dce4", s: "#a8adba" },
               { v: 10, n: "10¢", r: 15, f: "#d8dce4", s: "#a8adba" },
               { v: 25, n: "25¢", r: 21, f: "#d8dce4", s: "#a8adba" }];
  function coinsSvg(list) {
    var w = list.length * 52 + 10, s = '<svg viewBox="0 0 ' + w + ' 60" width="' + Math.min(w, 320) + '" height="60">';
    list.forEach(function (c, i) {
      var x = 30 + i * 52;
      s += '<circle cx="' + x + '" cy="30" r="' + c.r + '" fill="' + c.f + '" stroke="' + c.s + '" stroke-width="2"/>'
        + '<text x="' + x + '" y="35" text-anchor="middle" ' + FA + ' font-size="13" fill="#3a3352">' + c.n + '</text>';
    });
    return s + '</svg>';
  }

  // ---- rhyming families -------------------------------------------------------------------
  var RHYME = [["cat", "hat", "bat", "mat", "rat"], ["can", "fan", "man", "pan", "van"],
               ["big", "dig", "fig", "pig", "wig"], ["hop", "mop", "pop", "top", "stop"],
               ["bug", "hug", "jug", "mug", "rug"], ["cake", "lake", "make", "rake", "snake"],
               ["king", "ring", "sing", "wing", "swing"], ["bell", "fell", "sell", "tell", "well"],
               ["clock", "lock", "rock", "sock", "block"], ["bee", "sea", "tree", "knee", "free"]];

  var EXTRA_GAMES = {
    // ---------------- Maths ----------------
    addsub: function () {
      var a, b, q, ans;
      if (R(0, 1)) { a = R(2, 20); b = R(2, 20); q = a + " + " + b; ans = a + b; }
      else { a = R(5, 25); b = R(1, a); q = a + " − " + b; ans = a - b; }
      return { promptText: q + " = ?", prompt: big(q + " = ?"), options: numOptions(ans, 5, 0), answer: String(ans) };
    },
    times: function () {
      var a = R(2, 12), b = R(2, 12);
      if (R(0, 2) === 0) {
        var p = a * b;
        return { promptText: p + " ÷ " + a + " = ?", prompt: big(p + " ÷ " + a + " = ?"), options: numOptions(b, 4, 1), answer: String(b) };
      }
      return { promptText: a + " × " + b + " = ?", prompt: big(a + " × " + b + " = ?"), options: numOptions(a * b, 9, 1), answer: String(a * b) };
    },
    fractions: function () {
      var kind = R(0, 2);
      if (kind === 0) {                       // equivalent fraction
        var d = [2, 3, 4, 5][R(0, 3)], n = R(1, d - 1), k = R(2, 4);
        var ans = String(n * k) + "/" + (d * k);
        var opts = {}; opts[ans] = 1; var list = [ans];
        var guard = 0;
        while (list.length < 4 && guard++ < 60) {
          var o = String(n * k + R(-2, 2)) + "/" + (d * k + [0, 2, -2][R(0, 2)]);
          if (!opts[o] && !/(^|\/)(0|-\d+)/.test(o)) { opts[o] = 1; list.push(o); }
        }
        while (list.length < 4) { var f = String(n * k + list.length) + "/" + (d * k); if (!opts[f]) { opts[f] = 1; list.push(f); } }
        return { promptText: n + "/" + d + " is the same as ?", prompt: big(n + "/" + d + "  =  ?"), options: arcShuffle(list), answer: ans };
      }
      if (kind === 1) {                       // add with the same denominator
        var dd = [4, 5, 6, 8][R(0, 3)], a1 = R(1, dd - 2), b1 = R(1, dd - a1 - 1);
        var sum = a1 + b1, ansS = sum + "/" + dd;
        var seen = {}; seen[ansS] = 1; var l2 = [ansS];
        for (var t = 1; l2.length < 4 && t < 40; t++) {
          var c = sum + (t % 2 ? t : -t);
          if (c > 0 && c <= dd && !seen[c + "/" + dd]) { seen[c + "/" + dd] = 1; l2.push(c + "/" + dd); }
        }
        while (l2.length < 4) { var g2 = (sum + l2.length) + "/" + (dd * 2); if (!seen[g2]) { seen[g2] = 1; l2.push(g2); } }
        return { promptText: a1 + "/" + dd + " + " + b1 + "/" + dd + " = ?", prompt: big(a1 + "/" + dd + " + " + b1 + "/" + dd + " = ?"),
                 options: arcShuffle(l2), answer: ansS };
      }
      var pairs = [["1/2", "1/3"], ["1/2", "1/4"], ["2/3", "1/3"], ["3/4", "1/2"], ["1/5", "1/2"], ["2/5", "3/5"], ["5/8", "3/8"], ["1/3", "1/6"]];
      var pr = pairs[R(0, pairs.length - 1)];
      var val = function (f) { var p = f.split("/"); return +p[0] / +p[1]; };
      var bigger = val(pr[0]) > val(pr[1]) ? pr[0] : pr[1];
      return { promptText: "Which is bigger: " + pr[0] + " or " + pr[1] + "?", prompt: big(pr[0] + "   or   " + pr[1] + " ?"),
               options: arcShuffle([pr[0], pr[1], "They are equal", "You cannot tell"]), answer: bigger };
    },

    // ---------------- Time & money ----------------
    clockread: function () {
      var h = R(1, 12), mins = [0, 15, 30, 45], m = mins[R(0, 3)];
      var ans = timeLabel(h, m), seen = {}; seen[ans] = 1;
      var list = [ans], guard = 0;
      while (list.length < 4 && guard++ < 60) {
        var h2 = R(1, 12), m2 = mins[R(0, 3)], lbl = timeLabel(h2, m2);
        if (!seen[lbl]) { seen[lbl] = 1; list.push(lbl); }
      }
      return { promptText: "What time is it?", prompt: '<div>' + clockSvg(h, m) + '</div>' + mid("What time is it?"),
               options: arcShuffle(list), answer: ans };
    },
    coincount: function () {
      var n = R(2, 4), list = [], total = 0;
      for (var i = 0; i < n; i++) { var c = COINS[R(0, 3)]; list.push(c); total += c.v; }
      var opts = {}; opts[total] = 1; var out = [total + "¢"], guard = 0;
      while (out.length < 4 && guard++ < 80) {
        var d = total + [5, -5, 10, -10, 1, -1, 25][R(0, 6)];
        if (d > 0 && !opts[d]) { opts[d] = 1; out.push(d + "¢"); }
      }
      while (out.length < 4) { var f = total + out.length * 3; if (!opts[f]) { opts[f] = 1; out.push(f + "¢"); } }
      return { promptText: "How much money is this?", prompt: '<div>' + coinsSvg(list) + '</div>' + mid("How much altogether?"),
               options: arcShuffle(out), answer: total + "¢" };
    },

    // ---------------- Words ----------------
    rhyme: function () {
      var fam = RHYME[R(0, RHYME.length - 1)];
      var pair = arcShuffle(fam).slice(0, 2);
      var others = arcShuffle(RHYME.filter(function (f) { return f !== fam; })).slice(0, 3)
        .map(function (f) { return f[R(0, f.length - 1)]; });
      var seen = {}; seen[pair[1]] = 1;
      var wrong = others.filter(function (w) { if (seen[w]) return false; seen[w] = 1; return true; });
      while (wrong.length < 3) { var extra = RHYME[R(0, RHYME.length - 1)][0]; if (!seen[extra]) { seen[extra] = 1; wrong.push(extra); } }
      return { promptText: "Which word rhymes with '" + pair[0] + "'?", prompt: mid("Which word rhymes with “" + pair[0] + "”?"),
               options: arcShuffle([pair[1]].concat(wrong.slice(0, 3))), answer: pair[1] };
    },
    spanishq: function () {
      var L = (typeof LESSONS !== "undefined") && LESSONS[21];
      if (!L) return EXTRA_GAMES.rhyme();
      var all = [];
      Object.keys(L).forEach(function (k) { if (L[k] && L[k].vocab) all = all.concat(L[k].vocab); });
      all = all.filter(function (v) { return v.es && v.en && v.en.length <= 24 && v.en !== "sight word"; });
      if (all.length < 6) return EXTRA_GAMES.rhyme();
      var pick = all[R(0, all.length - 1)], seen = {}; seen[pick.en.toLowerCase()] = 1;
      var wrong = [], rest = arcShuffle(all);
      for (var i = 0; i < rest.length && wrong.length < 3; i++) {
        var k2 = rest[i].en.toLowerCase();
        if (seen[k2]) continue; seen[k2] = 1; wrong.push(rest[i].en);
      }
      if (wrong.length < 3) return EXTRA_GAMES.rhyme();
      return { promptText: "What does '" + pick.es + "' mean?", prompt: big(pick.es) + mid("What does this mean?"),
               options: arcShuffle([pick.en].concat(wrong)), answer: pick.en };
    },

    // ---------------- Science ----------------
    bioquiz: function () { return orFallback(bankQuestion(poolOf([6, 7, 8, 9, 10, 11, 12], "biology"))); },
    chemquiz: function () { return orFallback(bankQuestion(poolOf([9, 10, 11, 12], "chemistry"))); },
    physquiz: function () { return orFallback(bankQuestion(poolOf([9, 10, 11, 12], "physics"))); },
    elements: function () {
      if (typeof ELEMENTS === "undefined") return EXTRA_GAMES.addsub();
      var pool = ELEMENTS.slice(0, 40);
      var pick = pool[R(0, pool.length - 1)];
      var seen = {}; seen[pick[2]] = 1;
      var wrong = [], rest = arcShuffle(pool);
      for (var i = 0; i < rest.length && wrong.length < 3; i++) {
        if (seen[rest[i][2]]) continue; seen[rest[i][2]] = 1; wrong.push(rest[i][2]);
      }
      return { promptText: "Which element has the symbol " + pick[1] + "?", prompt: big(pick[1]) + mid("Which element is this?"),
               options: arcShuffle([pick[2]].concat(wrong)), answer: pick[2] };
    },
    spacequiz: function () { return orFallback(bankQuestion(poolOfCategory(24))); },
    rockquiz: function () { return orFallback(bankQuestion(poolOfCategory(20))); },
    feelquiz: function () { return orFallback(bankQuestion(poolOfCategory(25))); },

    // ---------------- Geography ----------------
    continent: function () {
      var geo = (typeof LESSONS !== "undefined") && LESSONS[13] && LESSONS[13].geography;
      if (!geo || !geo.continents) return EXTRA_GAMES.addsub();
      var names = geo.continents.map(function (c) { return c.name; }).filter(Boolean);
      var c = geo.continents[R(0, geo.continents.length - 1)];
      if (!c.countries || !c.countries.length) return EXTRA_GAMES.addsub();
      var k = c.countries[R(0, c.countries.length - 1)];
      var wrong = arcShuffle(names.filter(function (n) { return n !== c.name; })).slice(0, 3);
      return { promptText: "Which continent is " + k[1] + " in?", prompt: big(k[1]) + mid("Which continent is it in?"),
               options: arcShuffle([c.name].concat(wrong)), answer: c.name };
    },
    capitals: function () {
      var geo = (typeof LESSONS !== "undefined") && LESSONS[13] && LESSONS[13].geography;
      if (!geo || !geo.continents) return EXTRA_GAMES.addsub();
      var all = [];
      geo.continents.forEach(function (c) { (c.countries || []).forEach(function (k) { if (k[2]) all.push(k); }); });
      if (all.length < 6) return EXTRA_GAMES.addsub();
      var pick = all[R(0, all.length - 1)], seen = {}; seen[pick[2]] = 1;
      var wrong = [], rest = arcShuffle(all);
      for (var i = 0; i < rest.length && wrong.length < 3; i++) {
        if (seen[rest[i][2]]) continue; seen[rest[i][2]] = 1; wrong.push(rest[i][2]);
      }
      return { promptText: "What is the capital of " + pick[1] + "?", prompt: mid("What is the capital of " + pick[1] + "?"),
               options: arcShuffle([pick[2]].concat(wrong)), answer: pick[2] };
    }
  };

  var NEW_GAMES = [
    { key: "addsub",    name: "Add & Subtract",   emoji: "➕", desc: "Sums and take-aways against the clock.",      level: "Easy",   subject: "Maths" },
    { key: "clockread", name: "What's the Time?", emoji: "🕐", desc: "Read the clock face and pick the right time.", level: "Easy",  subject: "Time" },
    { key: "rhyme",     name: "Rhyme Time",       emoji: "🎵", desc: "Which word rhymes? Great early reading practice.", level: "Easy", subject: "Phonics" },
    { key: "spanishq",  name: "Spanish Match",    emoji: "💬", desc: "What does the Spanish word mean?",            level: "Easy",   subject: "Spanish" },
    { key: "spacequiz", name: "Space Cadet",      emoji: "🚀", desc: "Planets, the Moon, rockets and astronauts.",  level: "Easy",   subject: "Space" },
    { key: "feelquiz",  name: "Feelings & Kindness", emoji: "💛", desc: "Naming feelings, calming down and being kind.", level: "Easy", subject: "Wellbeing" },
    { key: "times",     name: "Times Tables",     emoji: "✖️", desc: "Multiplication and division up to 12.",       level: "Medium", subject: "Maths" },
    { key: "coincount", name: "Coin Counter",     emoji: "💰", desc: "Add up the coins — how much altogether?",     level: "Medium", subject: "Money" },
    { key: "rockquiz",  name: "Rock Detective",   emoji: "🪨", desc: "Rocks, the rock cycle, fossils and gems.",    level: "Medium", subject: "Geology" },
    { key: "bioquiz",   name: "Life Science Lab", emoji: "🧬", desc: "Cells, body systems, genetics and ecology.",  level: "Medium", subject: "Biology" },
    { key: "elements",  name: "Element Hunt",     emoji: "🧪", desc: "Name the element from its symbol.",           level: "Medium", subject: "Chemistry" },
    { key: "continent", name: "Which Continent?", emoji: "🗺️", desc: "Find the continent each country belongs to.", level: "Medium", subject: "Geography" },
    { key: "fractions", name: "Fraction Frenzy",  emoji: "🍕", desc: "Compare, add and match equivalent fractions.", level: "Hard",  subject: "Maths" },
    { key: "capitals",  name: "Capital Cities",   emoji: "🏙️", desc: "Name the capital city of each country.",      level: "Hard",   subject: "Geography" },
    { key: "chemquiz",  name: "Chem Lab",         emoji: "⚗️", desc: "Atoms, the periodic table, bonds and reactions.", level: "Hard", subject: "Chemistry" },
    { key: "physquiz",  name: "Physics Force",    emoji: "⚛️", desc: "Forces, energy, waves, electricity and magnets.", level: "Hard", subject: "Physics" }
  ];
  NEW_GAMES.forEach(function (g) { g.quiz = true; ARCADE_GAMES.push(g); });

  window.EXTRA_GAMES = EXTRA_GAMES;
})();
