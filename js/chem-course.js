// BrightSprouts Academy: "Let's Learn Chemistry" (LESSONS[33]).
//
// One ladder from Kindergarten to Grade 12: what chemistry is, states of matter, materials,
// changes, mixtures, atoms and elements, the periodic table, molecules, reactions, acids and
// bases, the mole and equations, and everyday chemistry.
//
// This is NOT the Chemistry subject inside Grades 9 to 12 (js/chemistry.js), which starts at
// atoms and assumes a lot. This is the whole road, starting from ice melting in a glass.
//
// Written without em dashes.
//
// ACCURACY RULES, because a wrong chemical fact is worse than none:
//  * Element facts are never typed by hand. Symbols, names, atomic numbers and masses all come
//    from the ELEMENTS array in js/elements.js, which is built from PubChem and cross-checked
//    against Wikidata. audit_chemcourse.html re-verifies every element claim against it.
//  * Equations shown must balance. The audit counts the atoms on both sides of every one.
//  * Where school books simplify, say so. A "shell holds 8" is a useful rule for the first
//    twenty elements and stops being true after that, so the lesson says exactly that.
(function () {
  if (typeof LESSONS === "undefined") return;

  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }

  // Look an element up by symbol from the verified data rather than retyping it.
  function el(sym) {
    if (typeof ELEMENTS === "undefined") return null;
    for (var i = 0; i < ELEMENTS.length; i++) if (ELEMENTS[i][1] === sym) return ELEMENTS[i];
    return null;
  }

  // Each diagram is rendered on its own, so it has to carry its own <marker>. Ids do not
  // carry across from one diagram to the next, and two diagrams must never share one.
  function arrowDef(id, col) {
    return '<defs><marker id="' + id + '" markerWidth="9" markerHeight="9" refX="7" refY="4.5" ' +
      'orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="' + col + '"/></marker></defs>';
  }

  // ==================== diagrams ====================

  var dWhat = art(function (A) {
    return A.frame("#f2f8ff", A.defs([["ckwA", "#a8d8ff", "#1f6feb"], ["ckwB", "#ffd9a8", "#e0902b"],
                                      ["ckwC", "#c9f0c0", "#3f9c4a"]]) +
      '<text x="170" y="30" text-anchor="middle" ' + A.LB + ' font-size="14">chemistry is the study of stuff, and how it changes</text>' +
      A.orb("ckwA", 68, 96, 26) + A.orb("ckwB", 170, 96, 26) + A.orb("ckwC", 272, 96, 26) +
      '<path d="M100 96 h36" stroke="#5d3fa0" stroke-width="3" marker-end="url(#ckwAr)"/>' +
      '<path d="M202 96 h36" stroke="#5d3fa0" stroke-width="3" marker-end="url(#ckwAr)"/>' +
      arrowDef("ckwAr", "#5d3fa0") +
      '<text x="68" y="148" text-anchor="middle" ' + A.LB + ' font-size="11.5">what it is made of</text>' +
      '<text x="170" y="148" text-anchor="middle" ' + A.LB + ' font-size="11.5">what it does</text>' +
      '<text x="272" y="148" text-anchor="middle" ' + A.LB + ' font-size="11.5">what it becomes</text>' +
      '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="12">cooking, rusting, burning and digesting are all chemistry</text>');
  });

  var dStates = art(function (A) {
    var s = A.defs([["ckstS", "#a8d8ff", "#1f6feb"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">the same stuff, packed three ways</text>';
    var boxes = [[16, "solid", "keeps its shape"],
                 [118, "liquid", "pours and fills"],
                 [220, "gas", "spreads out"]];
    boxes.forEach(function (b, bi) {
      s += '<rect x="' + b[0] + '" y="46" width="96" height="96" rx="12" fill="#ffffff" stroke="#7fa8d8" stroke-width="2.5"/>';
      var n = bi === 0 ? 16 : bi === 1 ? 12 : 6;
      for (var i = 0; i < n; i++) {
        var cx, cy;
        if (bi === 0) { cx = b[0] + 20 + (i % 4) * 19; cy = 66 + Math.floor(i / 4) * 19; }
        else if (bi === 1) { cx = b[0] + 18 + (i % 4) * 20 + (i % 2) * 4; cy = 80 + Math.floor(i / 4) * 20; }
        else { cx = b[0] + 16 + (i % 3) * 32; cy = 66 + Math.floor(i / 3) * 44; }
        s += A.orb("ckstS", cx, cy, 7);
      }
      s += '<text x="' + (b[0] + 48) + '" y="160" text-anchor="middle" ' + A.LB + ' font-size="12">' + b[1] + '</text>';
      s += '<text x="' + (b[0] + 48) + '" y="178" text-anchor="middle" ' + A.LB + ' font-size="9.5" opacity=".75">' + b[2] + '</text>';
    });
    return A.frame("#f4faff", s);
  });

  var dMaterials = art(function (A) {
    var s = A.defs([["ckW", "#e8c49a", "#8a5f2e"], ["ckM", "#d8dce4", "#8f93a3"],
                    ["ckP", "#ffc8e0", "#c9184a"], ["ckG", "#bfe4ff", "#4d96ff"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">we pick a material for what it can do</text>';
    var items = [["ckW", "wood", "easy to cut"], ["ckM", "metal", "gets hot"],
                 ["ckP", "plastic", "bendy"], ["ckG", "glass", "see through"]];
    items.forEach(function (it, i) {
      s += A.slab(20 + i * 80, 58, 62, 52, "#ffffff", "#f4f7ff", 10);
      s += A.orb(it[0], 51 + i * 80, 84, 18);
      s += '<text x="' + (51 + i * 80) + '" y="130" text-anchor="middle" ' + A.LB + ' font-size="12">' + it[1] + '</text>';
      s += '<text x="' + (51 + i * 80) + '" y="150" text-anchor="middle" ' + A.LB + ' font-size="9" opacity=".72">' + it[2] + '</text>';
    });
    s += '<text x="170" y="186" text-anchor="middle" ' + A.LB + ' font-size="11.5">a window is glass because you need to see through it</text>';
    return A.frame("#fbf8ff", s);
  });

  var dChanges = art(function (A) {
    var s = A.defs([["ckIce", "#dff0ff", "#7fb8e8"], ["ckWat", "#a8d8ff", "#1f6feb"], ["ckVap", "#e8f4ff", "#a8c8e0"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">a change of state is not a new substance</text>';
    s += A.slab(36, 62, 56, 50, "#cfe8ff", "#ffffff", 8);
    s += A.orb("ckWat", 170, 88, 26);
    for (var i = 0; i < 5; i++) s += A.orb("ckVap", 252 + (i % 3) * 22, 66 + Math.floor(i / 3) * 30, 8);
    s += '<text x="64" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">ice</text>';
    s += '<text x="170" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">water</text>';
    s += '<text x="274" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">steam</text>';
    s += '<path d="M98 82 h44" stroke="#e2453b" stroke-width="3" marker-end="url(#ckAr2)"/>';
    s += '<text x="120" y="72" text-anchor="middle" ' + A.LB + ' font-size="10">melt</text>';
    s += '<path d="M200 82 h40" stroke="#e2453b" stroke-width="3" marker-end="url(#ckAr2)"/>';
    s += '<text x="220" y="72" text-anchor="middle" ' + A.LB + ' font-size="10">boil</text>';
    s += '<path d="M240 104 h-40" stroke="#1f6feb" stroke-width="3" marker-end="url(#ckAr3)"/>';
    s += '<path d="M142 104 h-44" stroke="#1f6feb" stroke-width="3" marker-end="url(#ckAr3)"/>';
    s += '<text x="170" y="120" text-anchor="middle" ' + A.LB + ' font-size="10">cool it down and it all goes back</text>';
    s += arrowDef("ckAr2", "#e2453b") + arrowDef("ckAr3", "#1f6feb");
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="11.5">water is still water, however it is packed</text>';
    return A.frame("#f2f9ff", s);
  });

  var dMixtures = art(function (A) {
    var s = A.defs([["ckSand", "#e8d4a8", "#a3873f"], ["ckIron", "#c9cbd6", "#6f7382"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">a mixture can be taken apart again</text>';
    s += '<path d="M44 60 h84 l-12 66 h-60 z" fill="#eef3fa" stroke="#8f93a3" stroke-width="2.5"/>';
    for (var i = 0; i < 14; i++) {
      s += A.orb(i % 2 ? "ckSand" : "ckIron", 58 + (i % 5) * 15, 78 + Math.floor(i / 5) * 18, 6);
    }
    s += '<text x="86" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">mixed</text>';
    s += arrowDef("ckxAr", "#5d3fa0");
    s += '<path d="M140 96 h34" stroke="#5d3fa0" stroke-width="3" marker-end="url(#ckxAr)"/>';
    s += '<text x="157" y="86" text-anchor="middle" ' + A.LB + ' font-size="10">magnet</text>';
    s += '<path d="M190 60 h60 l-8 66 h-44 z" fill="#eef3fa" stroke="#8f93a3" stroke-width="2.5"/>';
    for (var j = 0; j < 7; j++) s += A.orb("ckSand", 202 + (j % 3) * 16, 80 + Math.floor(j / 3) * 20, 6);
    s += '<text x="220" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">sand</text>';
    s += '<path d="M266 66 h40 v34 h-40 z" fill="#ffffff" stroke="#8f93a3" stroke-width="2.5"/>';
    for (var k = 0; k < 6; k++) s += A.orb("ckIron", 276 + (k % 3) * 14, 78 + Math.floor(k / 3) * 16, 6);
    s += '<text x="286" y="120" text-anchor="middle" ' + A.LB + ' font-size="11">iron</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">sieve, filter, evaporate, or use a magnet</text>';
    return A.frame("#fbf9f4", s);
  });

  var dAtoms = art(function (A) {
    var s = A.defs([["ckN", "#ff9db0", "#c9184a"], ["ckE", "#a8d8ff", "#1f6feb"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">an atom is a tiny nucleus with electrons around it</text>';
    s += '<ellipse cx="150" cy="106" rx="66" ry="66" fill="none" stroke="#c9c3d8" stroke-width="2"/>';
    s += '<ellipse cx="150" cy="106" rx="38" ry="38" fill="none" stroke="#c9c3d8" stroke-width="2"/>';
    s += A.orb("ckN", 150, 106, 20);
    s += '<text x="150" y="111" text-anchor="middle" ' + A.LBW + ' font-size="11">nucleus</text>';
    [[150, 68], [188, 106], [150, 144], [112, 106]].forEach(function (p) { s += A.orb("ckE", p[0], p[1], 8); });
    [[150, 40], [216, 106], [150, 172], [84, 106]].forEach(function (p) { s += A.orb("ckE", p[0], p[1], 8); });
    s += A.labR(170, 86, 232, 60, 64, "protons: positive");
    s += A.labR(170, 120, 232, 148, 152, "neutrons: no charge");
    s += A.labR(188, 106, 244, 106, 110, "electrons: negative");
    return A.frame("#fdf4f7", s);
  });

  var dTable = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">rows are periods, columns are groups</text>';
    var cats = [["#ffb3a8", 1], ["#ffd9a8", 2], ["#d9e8a8", 13], ["#a8e0d0", 14],
                ["#a8d8ff", 15], ["#c9b3ff", 16], ["#ffb3cd", 17], ["#c9cbd6", 18]];
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 18; c++) {
        if (r === 0 && c > 0 && c < 17) continue;
        if (r === 1 && c > 1 && c < 12) continue;
        if (r === 2 && c > 1 && c < 12) continue;
        var col = "#e8e4f2";
        cats.forEach(function (k) { if (k[1] === c + 1) col = k[0]; });
        s += '<rect x="' + (16 + c * 16.6) + '" y="' + (40 + r * 26) + '" width="14.6" height="24" rx="3" fill="' +
          col + '" stroke="#ffffff" stroke-width="1"/>';
      }
    }
    s += '<text x="23" y="140" ' + A.LB + ' font-size="10.5">group 1: very reactive metals</text>';
    s += '<text x="23" y="158" ' + A.LB + ' font-size="10.5">group 17: the halogens</text>';
    s += '<text x="23" y="176" ' + A.LB + ' font-size="10.5">group 18: the noble gases, which hardly react at all</text>';
    s += '<text x="23" y="196" ' + A.LB + ' font-size="10.5">elements in the same column behave alike</text>';
    return A.frame("#f7f4ff", s);
  });

  var dMolecules = art(function (A) {
    var s = A.defs([["ckO", "#ff9db0", "#c9184a"], ["ckH", "#e8f0ff", "#8fa8d8"], ["ckmC", "#b0b4c0", "#4a4d58"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">atoms join up to make molecules</text>';
    s += '<line x1="76" y1="88" x2="56" y2="112" stroke="#8f93a3" stroke-width="6"/>';
    s += '<line x1="76" y1="88" x2="98" y2="112" stroke="#8f93a3" stroke-width="6"/>';
    s += A.orb("ckO", 76, 88, 20) + A.orb("ckH", 52, 116, 12) + A.orb("ckH", 102, 116, 12);
    s += '<text x="76" y="93" text-anchor="middle" ' + A.LBW + ' font-size="12">O</text>';
    s += '<text x="76" y="156" text-anchor="middle" ' + A.LB + ' font-size="13">water, H2O</text>';
    s += '<line x1="230" y1="100" x2="196" y2="100" stroke="#8f93a3" stroke-width="6"/>';
    s += '<line x1="230" y1="100" x2="264" y2="100" stroke="#8f93a3" stroke-width="6"/>';
    s += A.orb("ckmC", 230, 100, 18) + A.orb("ckO", 192, 100, 15) + A.orb("ckO", 268, 100, 15);
    s += '<text x="230" y="105" text-anchor="middle" ' + A.LBW + ' font-size="12">C</text>';
    s += '<text x="230" y="156" text-anchor="middle" ' + A.LB + ' font-size="13">carbon dioxide, CO2</text>';
    s += '<text x="170" y="188" text-anchor="middle" ' + A.LB + ' font-size="11">the small number counts the atoms before it</text>';
    return A.frame("#f4f8ff", s);
  });

  var dReact = art(function (A) {
    var s = A.defs([["ckR1", "#a8d8ff", "#1f6feb"], ["ckR2", "#ffd9a8", "#e0902b"], ["ckrP", "#c9f0c0", "#3f9c4a"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">nothing is lost: the atoms are only rearranged</text>';
    s += A.orb("ckR1", 46, 92, 17) + A.orb("ckR1", 46, 130, 17);
    s += '<text x="76" y="116" ' + A.LB + ' font-size="18">+</text>';
    s += A.orb("ckR2", 112, 111, 17);
    s += arrowDef("ckrAr", "#5d3fa0");
    s += '<path d="M142 111 h44" stroke="#5d3fa0" stroke-width="3.5" marker-end="url(#ckrAr)"/>';
    s += '<text x="164" y="100" text-anchor="middle" ' + A.LB + ' font-size="10">reacts to give</text>';
    s += A.orb("ckrP", 218, 92, 17) + A.orb("ckrP", 218, 130, 17);
    s += '<text x="170" y="164" text-anchor="middle" ' + A.LB + ' font-size="11.5">3 atoms go in and the very same 3 come out</text>';
    s += '<text x="170" y="186" text-anchor="middle" ' + A.LB + ' font-size="11">count the atoms on both sides</text>';
    return A.frame("#f4fbf5", s);
  });

  var dAcids = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">the pH scale runs from 0 to 14</text>';
    var cols = ["#e2453b", "#ef6b3a", "#f2942b", "#f2b705", "#d7d43a", "#a8d84a", "#6bcb77",
                "#4ab5a0", "#3aa0c9", "#3a7fc9", "#3a5fc9", "#5a3ac9", "#7a3ac9", "#9a3ac9", "#b03ac9"];
    for (var i = 0; i < 15; i++) {
      s += '<rect x="' + (16 + i * 20.6) + '" y="52" width="19.6" height="40" fill="' + cols[i] + '"/>';
      s += '<text x="' + (25.8 + i * 20.6) + '" y="106" text-anchor="middle" ' + A.LB + ' font-size="9">' + i + '</text>';
    }
    s += '<text x="50" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">acid</text>';
    s += '<text x="170" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">neutral</text>';
    s += '<text x="290" y="132" text-anchor="middle" ' + A.LB + ' font-size="12">alkali</text>';
    s += '<text x="16" y="152" ' + A.LB + ' font-size="9.5">lemon, vinegar</text>';
    s += '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="9.5">pure water</text>';
    s += '<text x="324" y="152" text-anchor="end" ' + A.LB + ' font-size="9.5">soap, baking soda</text>';
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="11">an acid and an alkali cancel each other out</text>';
    return A.frame("#fffaf4", s);
  });

  var dMole = art(function (A) {
    var s = A.defs([["ckoB", "#c9a8ff", "#5d3fa0"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">a mole is a counting word, like a dozen</text>';
    s += A.slab(30, 56, 82, 62, "#ffd166", "#fff3c4", 10);
    s += '<text x="71" y="84" text-anchor="middle" ' + A.LB + ' font-size="13">1 dozen</text>';
    s += '<text x="71" y="104" text-anchor="middle" ' + A.LB + ' font-size="13">= 12</text>';
    s += A.slab(128, 56, 82, 62, "#a8d8ff", "#e8f4ff", 10);
    s += '<text x="169" y="84" text-anchor="middle" ' + A.LB + ' font-size="13">1 pair</text>';
    s += '<text x="169" y="104" text-anchor="middle" ' + A.LB + ' font-size="13">= 2</text>';
    s += A.slab(226, 56, 84, 62, "#c9a8ff", "#efe6ff", 10);
    s += '<text x="268" y="84" text-anchor="middle" ' + A.LB + ' font-size="13">1 mole</text>';
    s += '<text x="268" y="104" text-anchor="middle" ' + A.LB + ' font-size="11">= 6.022 x 10^23</text>';
    s += '<text x="170" y="146" text-anchor="middle" ' + A.LB + ' font-size="11.5">it is a big number because atoms are very small</text>';
    s += '<text x="170" y="168" text-anchor="middle" ' + A.LB + ' font-size="11.5">one mole of carbon atoms weighs about 12 grams</text>';
    return A.frame("#f7f4ff", s);
  });

  var dEveryday = art(function (A) {
    var s = A.defs([["ckF", "#ffc08a", "#e2762b"], ["ckR", "#d89a6a", "#8a4a1a"],
                    ["ckeS", "#e8f4ff", "#a8c8e0"], ["ckL", "#c9f0c0", "#3f9c4a"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">chemistry you can see today</text>';
    var items = [["ckF", "baking", "makes gas"], ["ckR", "rusting", "air and water"],
                 ["ckeS", "soap", "grabs grease"], ["ckL", "leaves", "makes sugar"]];
    items.forEach(function (it, i) {
      s += A.orb(it[0], 44 + i * 84, 84, 22);
      s += '<text x="' + (44 + i * 84) + '" y="128" text-anchor="middle" ' + A.LB + ' font-size="12">' + it[1] + '</text>';
      s += '<text x="' + (44 + i * 84) + '" y="146" text-anchor="middle" ' + A.LB + ' font-size="9" opacity=".72">' + it[2] + '</text>';
    });
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="11.5">every one of these is atoms being rearranged</text>';
    return A.frame("#fff8f2", s);
  });

  window.CHEM_COURSE_ART = {
    whatis: dWhat, states: dStates, materials: dMaterials, changes: dChanges, mixtures: dMixtures,
    atoms: dAtoms, table: dTable, molecules: dMolecules, reactions: dReact, acids: dAcids,
    mole: dMole, everyday: dEveryday
  };

  // ==================== endless worksheets ====================
  // Element questions are generated FROM the verified ELEMENTS data, never from memory, so a
  // generated question and its answer are correct by construction. app.js routes category 33 here.
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  // The first 20 elements are the ones a grade-schooler is actually expected to know.
  function common() {
    return (typeof ELEMENTS === "undefined") ? [] : ELEMENTS.slice(0, 20);
  }

  // Molecules used in the reaction and formula questions. Each is [formula, name, {symbol: count}].
  // Counts are the truth here: the audit adds them up and checks the formula string agrees.
  var MOLS = [
    ["H2O", "water", { H: 2, O: 1 }],
    ["CO2", "carbon dioxide", { C: 1, O: 2 }],
    ["O2", "oxygen gas", { O: 2 }],
    ["N2", "nitrogen gas", { N: 2 }],
    ["NaCl", "salt", { Na: 1, Cl: 1 }],
    ["CH4", "methane", { C: 1, H: 4 }],
    ["NH3", "ammonia", { N: 1, H: 3 }],
    ["H2", "hydrogen gas", { H: 2 }]
  ];
  window.CHEM_MOLS = MOLS;

  var GEN = {
    whatis: null,
    states: function () {
      var k = R(0, 2);
      var things = [["ice", "solid"], ["milk", "liquid"], ["a brick", "solid"], ["steam", "gas"],
                    ["the air", "gas"], ["honey", "liquid"], ["a coin", "solid"], ["juice", "liquid"]];
      var t = pick(things);
      if (k === 0) return { q: "Is " + t[0] + " a solid, a liquid or a gas?", a: t[1] };
      if (k === 1) return { q: "Which state keeps its own shape: solid, liquid or gas?", a: "Solid" };
      return { q: "Which state spreads out to fill the whole container?", a: "Gas" };
    },
    materials: function () {
      var m = pick([["glass", "you can see through it"], ["metal", "it conducts heat and electricity"],
                    ["wood", "it is strong and easy to cut"], ["plastic", "it is light and can bend"],
                    ["wool", "it traps warm air"], ["rubber", "it stretches and grips"]]);
      return { q: "Give one reason we use " + m[0] + ".", a: m[1] };
    },
    changes: function () {
      var k = R(0, 2);
      var pairs = [["ice into water", "melting"], ["water into steam", "boiling or evaporating"],
                   ["steam into water", "condensing"], ["water into ice", "freezing"]];
      var p = pick(pairs);
      if (k === 0) return { q: "What is the change from " + p[0] + " called?", a: p[1] };
      if (k === 1) return { q: "At what temperature does pure water freeze, in degrees Celsius?", a: "0" };
      return { q: "At what temperature does pure water boil at sea level, in degrees Celsius?", a: "100" };
    },
    mixtures: function () {
      var m = pick([["sand from water", "filtering"], ["iron filings from sand", "using a magnet"],
                    ["salt from salty water", "evaporating the water"], ["big stones from gravel", "sieving"],
                    ["the colours in ink", "chromatography"]]);
      return { q: "How would you separate " + m[0] + "?", a: m[1] };
    },
    atoms: function () {
      var e = pick(common()), k = R(0, 3);
      if (k === 0) return { q: "What is the chemical symbol for " + e[2] + "?", a: e[1] };
      if (k === 1) return { q: "Which element has the symbol " + e[1] + "?", a: e[2] };
      if (k === 2) return { q: "What is the atomic number of " + e[2] + "?", a: String(e[0]) };
      return { q: "How many protons are in one atom of " + e[2] + " (" + e[1] + ")?", a: String(e[0]) };
    },
    table: function () {
      var e = pick(common()), k = R(0, 2);
      if (k === 0) return { q: "Which element is number " + e[0] + " on the periodic table?", a: e[2] };
      if (k === 1) return { q: "In a neutral atom of " + e[2] + ", how many electrons are there?", a: String(e[0]) };
      var noble = ["He", "Ne", "Ar"];
      var g = pick(noble), ge = el(g);
      return { q: "Is " + ge[2] + " (" + g + ") a reactive element or a noble gas?", a: "A noble gas" };
    },
    molecules: function () {
      var m = pick(MOLS), k = R(0, 2);
      var syms = Object.keys(m[2]);
      var sym = pick(syms);
      if (k === 0) return { q: "What is the chemical formula for " + m[1] + "?", a: m[0] };
      if (k === 1) return { q: "Which substance has the formula " + m[0] + "?", a: m[1] };
      var n = R(1, 5);
      return { q: "How many atoms of " + sym + " are in " + (n > 1 ? n : "one") + " " + m[0] + "?",
               a: String(m[2][sym] * n) };
    },
    reactions: function () {
      var k = R(0, 2);
      if (k === 0) {
        var n = R(2, 6);
        return { q: "In " + n + " H2O, how many hydrogen atoms are there in total?", a: String(n * 2) };
      }
      if (k === 1) {
        var m = R(2, 5);
        return { q: "In " + m + " CO2, how many oxygen atoms are there in total?", a: String(m * 2) };
      }
      return { q: "In a reaction, is any matter created or destroyed?", a: "No, the atoms are rearranged" };
    },
    acids: function () {
      var k = R(0, 2);
      var subs = [["lemon juice", "acid"], ["vinegar", "acid"], ["pure water", "neutral"],
                  ["soap", "alkali"], ["baking soda solution", "alkali"], ["milk", "slightly acidic"]];
      var s = pick(subs);
      if (k === 0) return { q: "Is " + s[0] + " an acid, neutral or an alkali?", a: s[1] };
      if (k === 1) { var p = R(0, 14);
        return { q: "A liquid has pH " + p + ". Is it acidic, neutral or alkaline?",
                 a: p < 7 ? "Acidic" : (p === 7 ? "Neutral" : "Alkaline") }; }
      return { q: "What is the pH of pure water?", a: "7" };
    },
    mole: function () {
      var k = R(0, 2);
      if (k === 0) {
        var m = pick(MOLS);
        var mass = 0, okAll = true;
        Object.keys(m[2]).forEach(function (sy) {
          var e = el(sy);
          if (!e) { okAll = false; return; }
          mass += parseFloat(e[3]) * m[2][sy];
        });
        if (!okAll) return { q: "How many particles are in one mole?", a: "About 6.022 x 10^23" };
        return { q: "Work out the formula mass of " + m[0] + ", to one decimal place.",
                 a: String(Math.round(mass * 10) / 10) };
      }
      if (k === 1) return { q: "How many particles are in one mole?", a: "About 6.022 x 10^23" };
      var e2 = pick(common());
      return { q: "About what does one mole of " + e2[2] + " weigh, in grams?",
               a: "About " + (Math.round(parseFloat(e2[3]) * 10) / 10) + " g" };
    },
    everyday: function () {
      var m = pick([["What gas makes bread and cakes rise?", "Carbon dioxide"],
                    ["What two things does iron need in order to rust?", "Air and water"],
                    ["What does soap do to grease?", "It lets grease mix with water"],
                    ["What gas do plants take in to make sugar?", "Carbon dioxide"],
                    ["What gas do plants give out?", "Oxygen"],
                    ["Is cooking an egg a change you can undo?", "No, it is a chemical change"]]);
      return { q: m[0], a: m[1] };
    }
  };
  window.CHEM_GEN = GEN;
  window.CHEM_EL = el;

  // ==================== the twelve units ====================
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, activity, questions, extra) {
    var u = {
      title: title, emoji: emoji, band: band, intro: intro, learn: learn,
      diagram: diagram, parentNote: parentNote, activity: activity,
      chemGen: key, questions: questions
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    return u;
  }

  LESSONS[33] = {

    whatis: U("whatis", "1 · What Is Chemistry?", "⚗️", "Kindergarten to Grade 2",
      "Chemistry is the study of what things are made of, and what happens when you mix them, heat them or leave them alone for long enough. Every single thing you can touch is chemistry, including you.",
      ["Everything around you is made of matter, and matter is what chemistry studies.",
       "Chemists ask three questions: what is it made of, what does it do, and what does it turn into.",
       "Cooking is chemistry. So is a nail going rusty, a candle burning, and your dinner being digested.",
       "Chemists test things carefully and write down what happened, including when it did not work.",
       "Safety is part of chemistry, not an extra. Never mix cleaning products, and never taste anything in an experiment."],
      dWhat,
      "Chemistry has the worst reputation of the sciences and the best everyday examples, so lead with the examples. Bread rising, ice melting, an apple going brown. A child who notices those as chemistry has understood the subject better than one who can recite the definition.",
      "⚗️ Kitchen Chemist: put a spoonful of bicarbonate of soda in a cup and add a splash of vinegar. Watch, then write down what you saw, heard and smelled. That is a lab report, and it is a real chemical reaction.",
      [{ q: "What does chemistry study?", a: "What things are made of and how they change" },
       { q: "What is everything around you made of?", a: "Matter" },
       { q: "Is cooking chemistry?", a: "Yes" },
       { q: "Is a nail going rusty chemistry?", a: "Yes" },
       { q: "Name one thing a chemist does.", a: "Tests carefully and writes down what happened" },
       { q: "Should you ever taste something in an experiment?", a: "No" },
       { q: "Should you mix cleaning products together?", a: "No, never" },
       { q: "Is your body chemistry too?", a: "Yes" }]),

    states: U("states", "2 · Solids, Liquids and Gases", "🧊", "Kindergarten to Grade 3",
      "Matter comes in three everyday states. What makes them different is not what they are made of, but how tightly the tiny particles are packed and how freely they can move.",
      ["In a solid the particles are packed tightly in place. A solid keeps its own shape.",
       "In a liquid the particles are close but can slide past each other. A liquid takes the shape of its container and can be poured.",
       "In a gas the particles are far apart and moving fast. A gas spreads out to fill whatever it is in.",
       "The same substance can be all three. Water is ice, water and steam.",
       "Gases are still matter even though you cannot see them. Air has weight, which you can feel by waving a fan.",
       "Heating gives particles more energy so they move more. Cooling takes it away."],
      dStates,
      "The word gas causes trouble, because children often hear it as meaning smelly or dangerous. Air is a gas, and it is all around them right now. Blowing up a balloon and feeling its weight change is the demonstration that fixes it.",
      "🧊 One Substance, Three Ways: put an ice cube in a warm pan and watch it become water, then steam. Draw the particles at each stage as dots: packed, then loose, then far apart and flying about.",
      [{ q: "Which state keeps its own shape?", a: "Solid" },
       { q: "Which state takes the shape of its container?", a: "Liquid" },
       { q: "Which state fills the whole container?", a: "Gas" },
       { q: "In which state are particles packed tightest?", a: "Solid" },
       { q: "In which state are particles furthest apart?", a: "Gas" },
       { q: "Name the three states of water.", a: "Ice, water and steam" },
       { q: "Is air matter?", a: "Yes" },
       { q: "What does heating do to particles?", a: "Makes them move more" }]),

    materials: U("materials", "3 · Materials and Their Properties", "🧱", "Grades 1 to 4",
      "A property is something you can observe or measure about a material. We choose a material for a job because of its properties, which is why windows are glass and saucepans are not.",
      ["Useful properties include hard or soft, bendy or stiff, see through or not, and whether it floats.",
       "Some materials conduct heat and electricity well. Most metals do. Wood, plastic and rubber do not, which is why they are used for handles and cable covers.",
       "Absorbent materials soak up water, like a towel. Waterproof ones keep it out, like a raincoat.",
       "Materials can be natural, like wool and wood, or made by people, like plastic and glass.",
       "The best material depends on the job. There is no best material in general.",
       "Many materials can be recycled, which uses far less energy than making them from scratch."],
      dMaterials,
      "Push past listing properties into choosing. Ask why a saucepan has a metal base and a plastic handle, and let them work out that one material is doing two different jobs. That is real reasoning rather than recall.",
      "🧱 The Property Test: pick six things from around the house. For each, test whether it floats, whether it bends, and whether water soaks in. Make a table and mark each one. Then say which would make the best umbrella and why.",
      [{ q: "What is a property?", a: "Something you can observe or measure about a material" },
       { q: "Name a material that conducts heat well.", a: "A metal" },
       { q: "Why are saucepan handles plastic or wood?", a: "They do not conduct heat well" },
       { q: "What does absorbent mean?", a: "It soaks up water" },
       { q: "Name a waterproof material.", a: "Plastic or rubber" },
       { q: "Name a natural material.", a: "Wood or wool" },
       { q: "Name a material made by people.", a: "Plastic or glass" },
       { q: "Why do we recycle materials?", a: "It uses far less energy than making new ones" }]),

    changes: U("changes", "4 · Changes: Melting, Freezing and Dissolving", "🔥", "Grades 2 to 5",
      "Some changes can be undone and some cannot. Telling the two apart is one of the most useful ideas in the whole of chemistry.",
      ["A physical change alters how something looks or is packed, but it is still the same substance. Melting, freezing, boiling and dissolving are all physical.",
       "Pure water freezes at 0 degrees Celsius and boils at 100 at sea level.",
       "Dissolving is not disappearing. The sugar is still there in the tea, which you can prove by tasting it or by evaporating the water.",
       "A chemical change makes a new substance, and it usually cannot be undone. Burning, rusting and cooking an egg are chemical.",
       "Clues that a chemical change happened: a gas bubbles off, the colour changes, heat is given out, or a solid appears in a liquid.",
       "You cannot unburn toast or uncook an egg, and that is the difference."],
      dChanges,
      "Dissolving is the one children get wrong, because it looks exactly like vanishing. Stir salt into water, then leave the dish on a windowsill for a few days. When the salt reappears the point makes itself far better than any explanation.",
      "🔥 Undo It Or Not: try four changes. Melt some chocolate, dissolve salt in water, burn a piece of paper with a grown-up, and freeze some juice. For each one, decide whether you could get back exactly what you started with.",
      [{ q: "What is a physical change?", a: "A change where it is still the same substance" },
       { q: "Is melting physical or chemical?", a: "Physical" },
       { q: "Is burning physical or chemical?", a: "Chemical" },
       { q: "At what temperature does pure water freeze?", a: "0 degrees Celsius" },
       { q: "At what temperature does pure water boil at sea level?", a: "100 degrees Celsius" },
       { q: "When sugar dissolves, has it disappeared?", a: "No, it is still there" },
       { q: "How could you get dissolved salt back?", a: "Evaporate the water" },
       { q: "Name a clue that a chemical change happened.", a: "A gas, a colour change, or heat given out" }]),

    mixtures: U("mixtures", "5 · Mixtures and How to Separate Them", "🧴", "Grades 3 to 6",
      "A mixture is two or more substances jumbled together but not joined. Because they are not joined, you can always get them apart again if you pick the right method.",
      ["In a mixture each substance keeps its own properties. Iron filings in sand are still iron and still sand.",
       "Sieving separates by size, such as stones from gravel.",
       "Filtering separates a solid that has not dissolved from a liquid, such as sand from water.",
       "Evaporating separates a dissolved solid from its liquid, such as salt from sea water.",
       "A magnet separates magnetic materials such as iron from a mixture.",
       "Chromatography separates dissolved colours, which is how you show that black ink is really several colours."],
      dMixtures,
      "The choice of method is the skill, not the method itself. Give a mixture and ask which technique and why. If a child says filter for dissolved salt, they have not yet separated dissolving from suspending, and that is exactly what to work on.",
      "🧴 Split the Ink: draw a thick dot of black felt tip near the bottom of a strip of kitchen paper. Stand it in a shallow dish of water so the water reaches below the dot. Wait. The colours climb at different speeds and separate.",
      [{ q: "What is a mixture?", a: "Substances jumbled together but not joined" },
       { q: "How would you separate sand from water?", a: "Filtering" },
       { q: "How would you separate salt from salty water?", a: "Evaporating the water" },
       { q: "How would you separate iron filings from sand?", a: "With a magnet" },
       { q: "How would you separate stones from gravel?", a: "Sieving" },
       { q: "What separates the colours in ink?", a: "Chromatography" },
       { q: "In a mixture, do substances keep their properties?", a: "Yes" },
       { q: "Why can a mixture always be separated?", a: "The substances are not joined together" }]),

    atoms: U("atoms", "6 · Atoms and Elements", "⚛️", "Grades 4 to 7",
      "Everything is built from atoms, and there are only about a hundred different kinds. A substance made of just one kind of atom is called an element.",
      ["An atom is the smallest piece of an element that is still that element. Atoms are far too small to see.",
       "An atom has a tiny nucleus in the middle holding protons and neutrons, with electrons moving around it.",
       "Protons are positive, electrons are negative, and neutrons have no charge. In a normal atom the protons and electrons balance out.",
       "The number of protons decides which element it is. That number is called the atomic number, and no two elements share one.",
       "Each element has a symbol of one or two letters. The first is always a capital and the second is always lower case, so it is Co for cobalt but CO for carbon and oxygen together.",
       "Some symbols come from Latin names, which is why sodium is Na and iron is Fe."],
      dAtoms,
      "The capital letter rule genuinely matters and takes two minutes to teach. Co is cobalt; CO is carbon monoxide. Getting into that habit early prevents a surprising number of later mistakes, and it gives a child something concrete to be careful about.",
      "⚛️ Build an Atom: use dried peas for protons, sweetcorn for neutrons and pinheads of paper for electrons. Build carbon: 6 protons, 6 neutrons and 6 electrons. Then add one proton and look up what you just made.",
      [{ q: "What is the smallest piece of an element called?", a: "An atom" },
       { q: "What is in the middle of an atom?", a: "The nucleus" },
       { q: "Which two particles are in the nucleus?", a: "Protons and neutrons" },
       { q: "What charge does a proton have?", a: "Positive" },
       { q: "What charge does an electron have?", a: "Negative" },
       { q: "What charge does a neutron have?", a: "None" },
       { q: "What decides which element an atom is?", a: "The number of protons" },
       { q: "How is a two letter symbol written?", a: "Capital first, then lower case" }],
      { chemNote: "Element facts in this course come from the same verified periodic table data the app uses everywhere else." }),

    table: U("table", "7 · The Periodic Table", "🧪", "Grades 5 to 8",
      "The periodic table is chemistry's map. Every known element has a square, and the arrangement is not decorative: where an element sits tells you how it will behave.",
      ["The elements are laid out in order of atomic number, starting at hydrogen with 1.",
       "A row across is called a period. A column down is called a group.",
       "Elements in the same group behave alike, because they have the same number of electrons in their outer shell.",
       "Group 1 are soft, very reactive metals. Group 17, the halogens, are reactive non-metals. Group 18, the noble gases, hardly react at all.",
       "Metals sit on the left and in the middle, non-metals on the right. There is a staircase of in-between elements called metalloids.",
       "The first twenty elements are the ones worth knowing by heart. Hydrogen, helium, lithium, beryllium, boron, carbon, nitrogen, oxygen, fluorine, neon, sodium, magnesium, aluminium, silicon, phosphorus, sulfur, chlorine, argon, potassium and calcium.",
       "A shell holding eight electrons is a useful rule for those first twenty, and it stops being reliable after that. School books simplify here, and it is worth knowing that they do."],
      dTable,
      "Do not ask for the whole table to be memorised. Twenty symbols and the shape of the thing is plenty, and understanding why group 18 is unreactive is worth more than reciting fifty names. The full interactive table is in Additional Learning Materials if your child wants to explore.",
      "🧪 Twenty Squares: draw a blank grid of the first twenty elements and fill in the symbols from memory, checking against the table afterwards. Do it once a week. Most children have all twenty inside a month without ever sitting down to learn them.",
      [{ q: "What are the elements arranged in order of?", a: "Atomic number" },
       { q: "What is a row across called?", a: "A period" },
       { q: "What is a column down called?", a: "A group" },
       { q: "Why do elements in a group behave alike?", a: "They have the same outer electrons" },
       { q: "Which group hardly reacts at all?", a: "Group 18, the noble gases" },
       { q: "What are the group 17 elements called?", a: "The halogens" },
       { q: "Where are the metals on the table?", a: "On the left and in the middle" },
       { q: "Which element is number 1?", a: "Hydrogen" }],
      { periodicTable: true }),

    molecules: U("molecules", "8 · Molecules and Compounds", "🔗", "Grades 6 to 9",
      "Atoms rarely sit alone. They join up, and when two or more different elements join chemically the result is a compound, with properties of its own.",
      ["A molecule is two or more atoms joined together. O2 is a molecule of one element. H2O is a molecule of a compound.",
       "A compound is not a mixture. Sodium is a metal that reacts violently with water and chlorine is a poisonous gas, but sodium chloride is table salt.",
       "A chemical formula says which atoms and how many. The small number after a symbol counts the atoms of that symbol, so H2O is two hydrogens and one oxygen.",
       "A number in front multiplies the whole thing. 3H2O means three water molecules, which is six hydrogen atoms and three oxygen atoms.",
       "Atoms join by sharing electrons, called a covalent bond, or by giving and taking them, called an ionic bond.",
       "The properties of a compound have nothing to do with the properties of the elements in it, which is one of the strangest and most important facts in chemistry."],
      dMolecules,
      "Salt is the example to reach for, and it is genuinely startling: a violently reactive metal plus a poisonous gas gives you the thing on the dinner table. If your child finds that surprising, they have understood what a compound is.",
      "🔗 Formula Detective: find five packets in the kitchen and look for chemical formulas on the labels. Work out how many atoms of each element are in one unit of each. Sodium chloride and sodium bicarbonate are good ones to start with.",
      [{ q: "What is a molecule?", a: "Two or more atoms joined together" },
       { q: "What is a compound?", a: "Two or more different elements joined chemically" },
       { q: "Is a compound the same as a mixture?", a: "No" },
       { q: "In H2O, how many hydrogen atoms are there?", a: "Two" },
       { q: "In H2O, how many oxygen atoms are there?", a: "One" },
       { q: "What does 3H2O mean?", a: "Three water molecules" },
       { q: "How many hydrogen atoms are in 3H2O?", a: "Six" },
       { q: "What is the formula for carbon dioxide?", a: "CO2" }]),

    reactions: U("reactions", "9 · Chemical Reactions", "💥", "Grades 6 to 9",
      "In a chemical reaction, atoms are rearranged into new combinations. Nothing is created and nothing is destroyed, which is why an equation has to balance.",
      ["The substances you start with are the reactants. The ones you finish with are the products.",
       "Atoms are never made or lost in a reaction, only rearranged. This is called conservation of mass.",
       "That is why equations must balance: the same number of each kind of atom on both sides.",
       "Signs a reaction has happened: bubbles of gas, a colour change, heat given out or taken in, or a solid forming in a liquid.",
       "Reactions that give out heat are exothermic, like burning. Reactions that take heat in are endothermic, and feel cold.",
       "Burning something in air is called combustion, and it usually needs oxygen. Take the oxygen away and the fire goes out, which is how a fire blanket works."],
      dReact,
      "Balancing is easier with objects than with symbols. Use buttons of two colours on the table and physically move them from one side to the other. A child who has done that understands why you cannot change a small number inside a formula to make it balance, which is the classic error.",
      "💥 Trap the Gas: put a spoonful of bicarbonate of soda in a bottle, add vinegar, and quickly stretch a balloon over the neck. The balloon fills with carbon dioxide. The atoms did not appear from nowhere; they were in the vinegar and the powder.",
      [{ q: "What do we call the substances you start with?", a: "The reactants" },
       { q: "What do we call the substances you end with?", a: "The products" },
       { q: "Is any matter created in a reaction?", a: "No" },
       { q: "What is that rule called?", a: "Conservation of mass" },
       { q: "Why must an equation balance?", a: "The same atoms must be on both sides" },
       { q: "What is a reaction that gives out heat called?", a: "Exothermic" },
       { q: "What is a reaction that takes heat in called?", a: "Endothermic" },
       { q: "What gas does burning usually need?", a: "Oxygen" }]),

    acids: U("acids", "10 · Acids, Bases and pH", "🧫", "Grades 7 to 10",
      "Acids and alkalis are opposites, and the pH scale measures where a substance sits between them. It runs from 0 to 14, with 7 in the middle.",
      ["A pH below 7 is acidic. A pH of exactly 7 is neutral. Above 7 is alkaline, which is also called basic.",
       "Pure water is neutral at pH 7. Lemon juice and vinegar are acids. Soap and baking soda solution are alkalis.",
       "An indicator changes colour to show pH. Universal indicator gives a whole range, and red cabbage water works surprisingly well at home.",
       "When an acid and an alkali are mixed they cancel each other out. This is called neutralisation, and it makes a salt and water.",
       "This is why indigestion tablets work: they are alkaline and they neutralise excess stomach acid.",
       "The pH scale is not evenly spaced. Each step is ten times stronger, so pH 3 is ten times more acidic than pH 4."],
      dAcids,
      "The step of ten is the part usually skipped, and it is the part that makes the scale make sense. It also explains why very low pH values are dangerous rather than just a bit more acidic. Strong acids belong in a lab, not a kitchen.",
      "🧫 Red Cabbage Indicator: simmer chopped red cabbage in water, let it cool, and keep the purple liquid. Add a little to vinegar, to water, and to a spoonful of bicarbonate of soda dissolved in water. Pink means acid, purple neutral, green or blue means alkali.",
      [{ q: "What pH is neutral?", a: "7" },
       { q: "Is a pH of 3 acidic or alkaline?", a: "Acidic" },
       { q: "Is a pH of 11 acidic or alkaline?", a: "Alkaline" },
       { q: "What is the pH of pure water?", a: "7" },
       { q: "Name a common acid.", a: "Lemon juice or vinegar" },
       { q: "Name a common alkali.", a: "Soap or baking soda solution" },
       { q: "What happens when an acid meets an alkali?", a: "They neutralise each other" },
       { q: "How much stronger is pH 3 than pH 4?", a: "Ten times" }]),

    mole: U("mole", "11 · The Mole, Formulas and Equations", "📊", "Grades 9 to 12",
      "Atoms are far too small to count one at a time, so chemists count them in moles. A mole is simply a very large number, in the same way that a dozen is a small one.",
      ["One mole is about 6.022 x 10^23 particles. It is a counting word, not a mass.",
       "The relative atomic mass of an element, taken from the periodic table, is the mass in grams of one mole of its atoms.",
       "So one mole of carbon atoms weighs about 12 grams and one mole of oxygen atoms weighs about 16 grams.",
       "The formula mass of a compound is the masses of all its atoms added up. Water is about 18, being 2 hydrogens at about 1 plus one oxygen at about 16.",
       "To balance an equation, change only the big numbers in front. Never change the small numbers inside a formula, because that changes what the substance is.",
       "Moles let you predict amounts: how much you need, and how much you will get."],
      dMole,
      "The rule about never changing the small numbers is the one to enforce, because breaking it turns water into hydrogen peroxide without the student noticing. Say it as a rule with a reason attached, not just a rule.",
      "📊 Weigh a Mole: work out the formula mass of water, salt and carbon dioxide using the periodic table. Then weigh out 18 g of water. That is one mole, and it is about a tablespoon, which contains more molecules than there are stars in the observable universe.",
      [{ q: "About how many particles are in one mole?", a: "6.022 x 10^23" },
       { q: "Is a mole a mass or a number?", a: "A number" },
       { q: "About what does one mole of carbon weigh?", a: "About 12 grams" },
       { q: "About what does one mole of oxygen atoms weigh?", a: "About 16 grams" },
       { q: "What is the formula mass of water, roughly?", a: "About 18" },
       { q: "When balancing, which numbers may you change?", a: "The big ones in front" },
       { q: "Why must you not change the small numbers?", a: "It changes what the substance is" },
       { q: "What do moles let you predict?", a: "How much you need and how much you get" }]),

    everyday: U("everyday", "12 · Chemistry Every Day", "🍞", "Grades 9 to 12",
      "The last rung is not new theory. It is looking at ordinary things and seeing the chemistry that was there all along.",
      ["Baking: bicarbonate of soda reacts with an acid to make carbon dioxide, and the bubbles make the cake rise.",
       "Rusting: iron reacts with oxygen and water to make iron oxide. Take away either one and it does not rust, which is why paint and oil work.",
       "Soap: one end of a soap molecule grabs grease and the other grabs water, so the grease is carried away.",
       "Photosynthesis: plants use light to turn carbon dioxide and water into sugar and oxygen. Respiration in your body does very nearly the reverse.",
       "Cooking: heat changes the shape of proteins permanently, which is why a boiled egg never becomes raw again.",
       "Batteries: a chemical reaction pushes electrons round a circuit, and the battery is flat when the reactants run out."],
      dEveryday,
      "This unit works best as conversation rather than study. Ask what the chemistry is while you cook, or while a bike is being oiled. A student who can spot the chemistry in a kitchen has the thing this whole course was for.",
      "🍞 Chemistry in One Meal: cook something together and write down every chemical change you see. Bubbles, browning, thickening, setting. Then pick one and find out what is actually happening to the molecules.",
      [{ q: "What gas makes a cake rise?", a: "Carbon dioxide" },
       { q: "What two things does iron need to rust?", a: "Oxygen and water" },
       { q: "Why does paint stop rust?", a: "It keeps air and water off the iron" },
       { q: "How does soap remove grease?", a: "One end grabs grease, the other grabs water" },
       { q: "What do plants make in photosynthesis?", a: "Sugar and oxygen" },
       { q: "Why can a boiled egg not become raw again?", a: "The proteins changed shape permanently" },
       { q: "What makes a battery go flat?", a: "The reactants run out" },
       { q: "Is respiration roughly the reverse of photosynthesis?", a: "Yes" }])
  };
})();
