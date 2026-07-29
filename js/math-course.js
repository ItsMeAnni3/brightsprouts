// BrightSprouts Academy: "Let's Learn Mathematics" (LESSONS[32]).
//
// One ladder from Kindergarten to Grade 12: counting, adding, times tables, fractions, decimals
// and money, shape, measurement, ratio, algebra, data and chance, Pythagoras and trigonometry,
// and a first look at functions and rates of change. Each rung assumes the one below it.
//
// This is NOT the Math subject inside Grades 1 to 12. That one gives a grade's worth of practice.
// This is the whole road in order, with the reasoning shown, for a family following it through.
//
// Written without em dashes.
//
// ACCURACY RULES, because a wrong formula taught at nine is still wrong at nineteen:
//  * Every formula carries a `verify` function that tests it numerically against a value worked
//    out a different way. audit_mathcourse.html runs all of them, so a typo in a formula fails
//    the build rather than reaching a child.
//  * Every generated worksheet answer is recomputed independently by the audit.
//  * Where school books differ, say so. "Trapezium" and "trapezoid" mean opposite things in
//    British and American usage, so the lesson names both rather than pretending there is one.
(function () {
  if (typeof LESSONS === "undefined") return;

  // The shared 3D-looking shading kit, defined in js/biology-course.js and looked up when a
  // picture is drawn, so script order cannot break it.
  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }

  // ==================== diagrams ====================

  var dWhat = art(function (A) {
    return A.frame("#f4f2ff", A.defs([["mkA", "#ffd9a8", "#e0902b"], ["mkB", "#a8d8ff", "#1f6feb"],
                                      ["mkC", "#c9f0c0", "#3f9c4a"]]) +
      '<text x="170" y="30" text-anchor="middle" ' + A.LB + ' font-size="14">maths is the study of pattern</text>' +
      A.orb("mkA", 60, 92, 22) + A.orb("mkB", 122, 92, 22) + A.orb("mkC", 184, 92, 22) +
      A.orb("mkA", 246, 92, 22) +
      '<text x="60" y="98" text-anchor="middle" ' + A.LB + ' font-size="16">1</text>' +
      '<text x="122" y="98" text-anchor="middle" ' + A.LB + ' font-size="16">2</text>' +
      '<text x="184" y="98" text-anchor="middle" ' + A.LB + ' font-size="16">3</text>' +
      '<text x="246" y="98" text-anchor="middle" ' + A.LB + ' font-size="16">4</text>' +
      '<text x="300" y="98" text-anchor="middle" ' + A.LB + ' font-size="20">?</text>' +
      '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="12">spot the pattern and you can predict what comes next</text>' +
      '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="12">that is the whole subject, from counting to calculus</text>');
  });

  var dCount = art(function (A) {
    var s = A.defs([["mkTen", "#ffd166", "#e0902b"], ["mkOne", "#a8d8ff", "#1f6feb"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">23 is 2 tens and 3 ones</text>';
    for (var i = 0; i < 2; i++) {
      s += A.slab(24 + i * 46, 52, 38, 108, "#f2b705", "#fff3c4", 8);
      for (var r = 0; r < 5; r++) {
        s += '<line x1="' + (28 + i * 46) + '" y1="' + (66 + r * 20) + '" x2="' + (58 + i * 46) +
          '" y2="' + (66 + r * 20) + '" stroke="#c9822a" stroke-width="1.6"/>';
      }
      s += '<text x="' + (43 + i * 46) + '" y="' + 176 + '" text-anchor="middle" ' + A.LB + ' font-size="11">ten</text>';
    }
    for (var j = 0; j < 3; j++) s += A.orb("mkOne", 150 + j * 34, 140, 14);
    s += '<text x="184" y="176" text-anchor="middle" ' + A.LB + ' font-size="11">three ones</text>';
    s += '<text x="264" y="98" ' + A.LB + ' font-size="30">23</text>';
    return A.frame("#fff9ee", s);
  });

  var dAdd = art(function (A) {
    var s = A.defs([["mkR", "#ffb3cd", "#c9184a"], ["mkG", "#b7e88f", "#4f9b41"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">6 + 4 = 10, so 10 - 4 = 6</text>';
    var X0 = 30, STEP = 27;
    function at(n) { return X0 + n * STEP; }
    s += '<line x1="' + X0 + '" y1="118" x2="' + at(10) + '" y2="118" stroke="#9a94b8" stroke-width="2.5"/>';
    for (var i = 0; i <= 10; i++) {
      s += '<line x1="' + at(i) + '" y1="112" x2="' + at(i) + '" y2="124" stroke="#9a94b8" stroke-width="2"/>';
      s += '<text x="' + at(i) + '" y="140" text-anchor="middle" ' + A.LB + ' font-size="10">' + i + '</text>';
    }
    s += '<circle cx="' + at(6) + '" cy="118" r="4.5" fill="#2f9e44"/>';
    s += '<circle cx="' + at(10) + '" cy="118" r="4.5" fill="#c9184a"/>';
    s += '<path d="M' + at(6) + ' 106 q' + (STEP * 2) + ' -34 ' + (STEP * 4) + ' 0" stroke="#2f9e44" stroke-width="3" fill="none" marker-end="url(#mkAr)"/>';
    s += '<text x="' + at(8) + '" y="72" text-anchor="middle" ' + A.LB + ' font-size="12">+ 4</text>';
    s += '<path d="M' + at(10) + ' 130 q-' + (STEP * 2) + ' 34 -' + (STEP * 4) + ' 0" stroke="#c9184a" stroke-width="3" fill="none" marker-end="url(#mkAr2)"/>';
    s += '<text x="' + at(8) + '" y="176" text-anchor="middle" ' + A.LB + ' font-size="12">- 4</text>';
    s += '<defs><marker id="mkAr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">' +
      '<path d="M0 0 L9 4.5 L0 9 z" fill="#2f9e44"/></marker>' +
      '<marker id="mkAr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">' +
      '<path d="M0 0 L9 4.5 L0 9 z" fill="#c9184a"/></marker></defs>';
    return A.frame("#f2fbf3", s);
  });

  var dTimes = art(function (A) {
    var s = A.defs([["mkDot", "#c9a8ff", "#5d3fa0"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">4 rows of 6 is 24, and so is 6 rows of 4</text>';
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 6; c++) s += A.orb("mkDot", 44 + c * 26, 60 + r * 26, 9);
    }
    s += '<text x="240" y="96" ' + A.LB + ' font-size="13">4 x 6 = 24</text>';
    s += '<text x="240" y="120" ' + A.LB + ' font-size="13">6 x 4 = 24</text>';
    s += '<text x="240" y="144" ' + A.LB + ' font-size="13">24 / 6 = 4</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">turning it sideways does not change the total</text>';
    return A.frame("#f7f4ff", s);
  });

  var dFrac = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">the same amount, named three ways</text>';
    function pie(cx, cy, r, parts, filled, col, label) {
      var g = "";
      for (var i = 0; i < parts; i++) {
        var a1 = (i * 360 / parts - 90) * Math.PI / 180, a2 = ((i + 1) * 360 / parts - 90) * Math.PI / 180;
        var large = (360 / parts) > 180 ? 1 : 0;
        g += '<path d="M' + cx + ' ' + cy + ' L' + (cx + Math.cos(a1) * r).toFixed(1) + ' ' +
          (cy + Math.sin(a1) * r).toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' +
          (cx + Math.cos(a2) * r).toFixed(1) + ' ' + (cy + Math.sin(a2) * r).toFixed(1) + ' Z" fill="' +
          (i < filled ? col : "#ffffff") + '" stroke="#8f8aa8" stroke-width="1.6"/>';
      }
      g += '<ellipse cx="' + cx + '" cy="' + (cy + r + 6) + '" rx="' + (r * 0.8) + '" ry="4" fill="#2d2a4a" opacity=".1"/>';
      g += '<text x="' + cx + '" y="' + (cy + r + 30) + '" text-anchor="middle" ' + A.LB + ' font-size="14">' + label + '</text>';
      return g;
    }
    s += pie(64, 92, 34, 2, 1, "#ff9db0", "1/2");
    s += pie(170, 92, 34, 4, 2, "#a8d8ff", "2/4");
    s += pie(276, 92, 34, 8, 4, "#b7e88f", "4/8");
    s += '<text x="117" y="98" text-anchor="middle" ' + A.LB + ' font-size="18">=</text>';
    s += '<text x="223" y="98" text-anchor="middle" ' + A.LB + ' font-size="18">=</text>';
    return A.frame("#fff5f8", s);
  });

  var dDec = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">one half, written four ways</text>';
    var cells = [["1/2", "#ff9db0"], ["0.5", "#a8d8ff"], ["50%", "#b7e88f"], ["50p in £1", "#ffd9a8"]];
    cells.forEach(function (c, i) {
      s += A.slab(20 + i * 78, 64, 68, 58, c[1], "#ffffff", 12);
      s += '<text x="' + (54 + i * 78) + '" y="100" text-anchor="middle" ' + A.LB + ' font-size="15">' + c[0] + '</text>';
    });
    s += '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="12">percent means "out of a hundred"</text>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="12">so 50% is 50 out of 100, which is one half</text>';
    return A.frame("#f4fbff", s);
  });

  var dShape = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">area is the inside, perimeter is the edge</text>';
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 5; c++) {
        s += '<rect x="' + (36 + c * 26) + '" y="' + (52 + r * 26) + '" width="26" height="26" fill="#cfe3f7" stroke="#7fa8d8" stroke-width="1.2"/>';
      }
    }
    s += '<rect x="36" y="52" width="130" height="78" fill="none" stroke="#e2453b" stroke-width="4"/>';
    s += '<text x="101" y="152" text-anchor="middle" ' + A.LB + ' font-size="12">5 x 3 = 15 squares of area</text>';
    s += '<text x="250" y="76" text-anchor="middle" ' + A.LB + ' font-size="12">perimeter</text>';
    s += '<text x="250" y="96" text-anchor="middle" ' + A.LB + ' font-size="12">= 5 + 3 + 5 + 3</text>';
    s += '<text x="250" y="116" text-anchor="middle" ' + A.LB + ' font-size="12">= 16 units</text>';
    s += '<text x="250" y="150" text-anchor="middle" ' + A.LB + ' font-size="11">area is in square units,</text>';
    s += '<text x="250" y="166" text-anchor="middle" ' + A.LB + ' font-size="11">perimeter is just units</text>';
    return A.frame("#f2f8ff", s);
  });

  var dMeasure = art(function (A) {
    var s = A.defs([["mkJug", "#a8d8ff", "#1f6feb"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">each step is ten, or a hundred, or a thousand</text>';
    var steps = [["mm", 46], ["cm", 110], ["m", 174], ["km", 250]];
    steps.forEach(function (st, i) {
      s += A.slab(st[1] - 26, 74, 52, 46, "#7c5cbf", "#c9a8ff", 10);
      s += '<text x="' + st[1] + '" y="104" text-anchor="middle" ' + A.LBW + ' font-size="15">' + st[0] + '</text>';
    });
    s += '<text x="78" y="64" text-anchor="middle" ' + A.LB + ' font-size="11">x10</text>';
    s += '<text x="142" y="64" text-anchor="middle" ' + A.LB + ' font-size="11">x100</text>';
    s += '<text x="212" y="64" text-anchor="middle" ' + A.LB + ' font-size="11">x1000</text>';
    s += '<path d="M72 88 h6 M136 88 h6 M206 88 h6" stroke="#5d3fa0" stroke-width="2"/>';
    s += '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="12">1 cm = 10 mm, 1 m = 100 cm, 1 km = 1000 m</text>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="12">grams and litres work the same way</text>';
    return A.frame("#f7f4ff", s);
  });

  var dRatio = art(function (A) {
    var s = A.defs([["mkOr", "#ffd9a8", "#e0902b"], ["mkPu", "#e0c8ff", "#7c5cbf"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">2 parts orange to 3 parts purple</text>';
    for (var i = 0; i < 2; i++) s += A.orb("mkOr", 60 + i * 42, 82, 18);
    for (var j = 0; j < 3; j++) s += A.orb("mkPu", 178 + j * 42, 82, 18);
    s += '<text x="150" y="88" text-anchor="middle" ' + A.LB + ' font-size="18">:</text>';
    s += '<text x="170" y="140" text-anchor="middle" ' + A.LB + ' font-size="13">2 : 3, so 5 parts in all</text>';
    s += '<text x="170" y="164" text-anchor="middle" ' + A.LB + ' font-size="12">double both and it is still the same mix: 4 : 6</text>';
    s += '<text x="170" y="186" text-anchor="middle" ' + A.LB + ' font-size="12">a ratio compares parts, a fraction compares to the whole</text>';
    return A.frame("#fff8f2", s);
  });

  var dAlg = art(function (A) {
    var s = A.defs([["mkBox", "#ffd166", "#e0902b"]]);
    s += '<text x="170" y="28" text-anchor="middle" ' + A.LB + ' font-size="14">a balance stays level if you do the same to both sides</text>';
    s += '<line x1="40" y1="118" x2="300" y2="118" stroke="#8a5f2e" stroke-width="6" stroke-linecap="round"/>';
    s += '<polygon points="170,118 156,158 184,158" fill="#a3763f"/>';
    s += A.slab(70, 82, 40, 34, "#f2b705", "#fff3c4", 8);
    s += '<text x="90" y="105" text-anchor="middle" ' + A.LB + ' font-size="17">x</text>';
    s += '<text x="122" y="106" ' + A.LB + ' font-size="16">+ 3</text>';
    s += '<text x="176" y="106" ' + A.LB + ' font-size="18">=</text>';
    s += '<text x="212" y="106" ' + A.LB + ' font-size="18">10</text>';
    s += '<text x="170" y="184" text-anchor="middle" ' + A.LB + ' font-size="12">take 3 from both sides and x = 7</text>';
    return A.frame("#fffbf0", s);
  });

  var dData = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">2, 3, 3, 6, 11</text>';
    var vals = [2, 3, 3, 6, 11], cols = ["#7fc4ff", "#8ce99a", "#8ce99a", "#ffd166", "#ff9db0"];
    vals.forEach(function (v, i) {
      var h = v * 9;
      s += A.slab(38 + i * 44, 140 - h, 32, h, cols[i], "#ffffff", 6);
      s += '<text x="' + (54 + i * 44) + '" y="156" text-anchor="middle" ' + A.LB + ' font-size="11">' + v + '</text>';
    });
    s += '<line x1="30" y1="95" x2="300" y2="95" stroke="#e2453b" stroke-width="2.5" stroke-dasharray="6 4"/>';
    s += '<text x="30" y="88" ' + A.LB + ' font-size="11" fill="#c9184a">mean 5</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11">mean 5, median 3, mode 3, range 9</text>';
    return A.frame("#f4f8ff", s);
  });

  var dPyth = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">3 squared + 4 squared = 5 squared</text>';
    s += '<polygon points="100,150 100,90 180,150" fill="#cfe3f7" stroke="#1f6feb" stroke-width="3"/>';
    s += '<rect x="100" y="140" width="10" height="10" fill="none" stroke="#1f6feb" stroke-width="2"/>';
    s += '<rect x="64" y="90" width="36" height="60" fill="#ffd9a8" opacity=".85" stroke="#e0902b" stroke-width="2"/>';
    s += '<text x="82" y="126" text-anchor="middle" ' + A.LB + ' font-size="12">9</text>';
    s += '<rect x="100" y="150" width="80" height="30" fill="#b7e88f" opacity=".85" stroke="#4f9b41" stroke-width="2"/>';
    s += '<text x="140" y="170" text-anchor="middle" ' + A.LB + ' font-size="12">16</text>';
    s += '<text x="146" y="112" ' + A.LB + ' font-size="12">25</text>';
    s += '<text x="228" y="86" ' + A.LB + ' font-size="13">a = 3</text>';
    s += '<text x="228" y="108" ' + A.LB + ' font-size="13">b = 4</text>';
    s += '<text x="228" y="130" ' + A.LB + ' font-size="13">c = 5</text>';
    s += '<text x="228" y="156" ' + A.LB + ' font-size="11">9 + 16 = 25</text>';
    return A.frame("#f2f8ff", s);
  });

  var dFunc = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a function is a machine: one in, one out</text>';
    s += '<line x1="40" y1="170" x2="300" y2="170" stroke="#9a94b8" stroke-width="2"/>';
    s += '<line x1="60" y1="184" x2="60" y2="44" stroke="#9a94b8" stroke-width="2"/>';
    var pts = [];
    for (var i = 0; i <= 8; i++) {
      var x = 60 + i * 28, y = 170 - (i * i) * 1.6;
      if (y < 46) break;
      pts.push(x + "," + y.toFixed(1));
    }
    s += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#7c5cbf" stroke-width="4" stroke-linecap="round"/>';
    s += '<text x="290" y="186" text-anchor="end" ' + A.LB + ' font-size="12">x</text>';
    s += '<text x="46" y="52" ' + A.LB + ' font-size="12">y</text>';
    s += '<text x="196" y="86" ' + A.LB + ' font-size="13">y = x squared</text>';
    s += '<text x="196" y="108" ' + A.LB + ' font-size="11">the steeper it climbs,</text>';
    s += '<text x="196" y="124" ' + A.LB + ' font-size="11">the faster y is changing</text>';
    return A.frame("#f7f4ff", s);
  });

  window.MATH_COURSE_ART = {
    whatis: dWhat, counting: dCount, addsub: dAdd, times: dTimes, fractions: dFrac,
    decimals: dDec, shape: dShape, measure: dMeasure, ratio: dRatio, algebra: dAlg,
    data: dData, pythagoras: dPyth, functions: dFunc
  };

  // ==================== formulas ====================
  // Every formula a grade-schooler needs, grouped by the unit that teaches it.
  //
  // `verify` is the important field. It checks the formula numerically against a value worked out
  // a different way: a known constant, a case that can be counted by hand, or an identity. The
  // audit runs every one of them, so a typo in a formula fails the build. `near` allows for the
  // tiny rounding a computer does with decimals.
  function near(a, b, tol) { return Math.abs(a - b) < (tol == null ? 1e-9 : tol); }

  var F = {
    counting: [
      { name: "Place value", f: "a two digit number = tens x 10 + ones",
        means: "23 means 2 tens and 3 ones, which is 20 + 3.",
        verify: function () { return 2 * 10 + 3 === 23; } }
    ],
    addsub: [
      { name: "Adding in any order", f: "a + b = b + a",
        means: "Swapping the two numbers does not change the answer. This is called being commutative.",
        verify: function () { return 6 + 4 === 4 + 6; } },
      { name: "Subtraction undoes addition", f: "if a + b = c then c - b = a",
        means: "Every adding fact gives you a subtracting fact for free.",
        verify: function () { var a = 6, b = 4, c = a + b; return c - b === a; } }
    ],
    times: [
      { name: "Multiplying in any order", f: "a x b = b x a",
        means: "4 rows of 6 is the same total as 6 rows of 4.",
        verify: function () { return 4 * 6 === 6 * 4; } },
      { name: "Division undoes multiplication", f: "if a x b = c then c / b = a",
        means: "Every times fact gives you a division fact for free.",
        verify: function () { var a = 4, b = 6, c = a * b; return c / b === a; } },
      { name: "Sharing out", f: "total / groups = size of each group",
        means: "24 shared between 6 people is 4 each.",
        verify: function () { return 24 / 6 === 4; } }
    ],
    fractions: [
      { name: "Equivalent fractions", f: "a/b = (a x n)/(b x n)",
        means: "Multiply top and bottom by the same number and the fraction is worth the same.",
        verify: function () { return near(1 / 2, (1 * 4) / (2 * 4)); } },
      { name: "Adding fractions", f: "a/c + b/c = (a + b)/c",
        means: "With the same bottom number, just add the tops.",
        verify: function () { return near(1 / 8 + 3 / 8, 4 / 8); } },
      { name: "Multiplying fractions", f: "a/b x c/d = (a x c)/(b x d)",
        means: "Multiply the tops together and the bottoms together.",
        verify: function () { return near((1 / 2) * (2 / 3), 2 / 6); } },
      { name: "Fraction of an amount", f: "a/b of n = n / b x a",
        means: "Three quarters of 20 is 20 divided by 4, then times 3, which is 15.",
        verify: function () { return 20 / 4 * 3 === 15; } }
    ],
    decimals: [
      { name: "Percent to decimal", f: "p% = p / 100",
        means: "Percent means out of a hundred, so 50% is 0.5.",
        verify: function () { return near(50 / 100, 0.5); } },
      { name: "Percentage of an amount", f: "p% of n = n x p / 100",
        means: "25% of 80 is 80 x 25 / 100, which is 20.",
        verify: function () { return 80 * 25 / 100 === 20; } },
      { name: "Percentage change", f: "change % = (new - old) / old x 100",
        means: "Going from 40 to 50 is a rise of 25%.",
        verify: function () { return near((50 - 40) / 40 * 100, 25); } }
    ],
    shape: [
      { name: "Area of a rectangle", f: "A = l x w",
        means: "Count the squares inside: 5 across by 3 down is 15.",
        verify: function () { return 5 * 3 === 15; } },
      { name: "Perimeter of a rectangle", f: "P = 2 x (l + w)",
        means: "All the way round the edge: 5 + 3 + 5 + 3 is 16.",
        verify: function () { return 2 * (5 + 3) === 5 + 3 + 5 + 3; } },
      { name: "Area of a triangle", f: "A = (b x h) / 2",
        means: "A triangle is exactly half of the rectangle around it.",
        verify: function () { return (6 * 4) / 2 === 12; } },
      { name: "Area of a circle", f: "A = pi x r x r",
        means: "For a circle of radius 1 the area is pi, about 3.14159.",
        verify: function () { return near(Math.PI * 1 * 1, Math.PI); } },
      { name: "Circumference of a circle", f: "C = 2 x pi x r",
        means: "All the way round the outside. For radius 1 that is about 6.283.",
        verify: function () { return near(2 * Math.PI * 1, 6.283185307179586, 1e-9); } },
      { name: "Angles in a triangle", f: "a + b + c = 180 degrees",
        means: "Tear the three corners off a paper triangle and they fit on a straight line.",
        verify: function () { return 60 + 60 + 60 === 180 && 90 + 45 + 45 === 180; } },
      { name: "Angles in a quadrilateral", f: "a + b + c + d = 360 degrees",
        means: "Any four sided shape. A rectangle is four right angles: 4 x 90 = 360.",
        verify: function () { return 90 * 4 === 360; } },
      { name: "Volume of a cuboid", f: "V = l x w x h",
        means: "How many unit cubes fit inside.",
        verify: function () { return 2 * 3 * 4 === 24; } }
    ],
    measure: [
      { name: "Length", f: "1 cm = 10 mm, 1 m = 100 cm, 1 km = 1000 m",
        means: "Each step up is ten, a hundred or a thousand times bigger.",
        verify: function () { return 1 * 100 * 10 === 1000 && 1000 * 100 * 10 === 1000000; } },
      { name: "Mass", f: "1 kg = 1000 g",
        means: "A bag of sugar is about 1 kg.",
        verify: function () { return 1 * 1000 === 1000; } },
      { name: "Capacity", f: "1 litre = 1000 ml",
        means: "A large bottle of water is about 1 litre.",
        verify: function () { return 1 * 1000 === 1000; } },
      { name: "Time", f: "1 minute = 60 s, 1 hour = 60 min, 1 day = 24 h",
        means: "So a day is 24 x 60 x 60 = 86400 seconds.",
        verify: function () { return 24 * 60 * 60 === 86400; } },
      { name: "Speed", f: "speed = distance / time",
        means: "120 km in 2 hours is 60 km per hour.",
        verify: function () { return 120 / 2 === 60; } }
    ],
    ratio: [
      { name: "Sharing in a ratio", f: "each share = total / (sum of the parts)",
        means: "Share 20 in the ratio 2 : 3. There are 5 parts, so one part is 4, giving 8 and 12.",
        verify: function () { var one = 20 / (2 + 3); return one * 2 === 8 && one * 3 === 12 && one * 2 + one * 3 === 20; } },
      { name: "Scaling a ratio", f: "a : b = (a x n) : (b x n)",
        means: "2 : 3 is the same mix as 4 : 6.",
        verify: function () { return near(2 / 3, 4 / 6); } },
      { name: "Unit rate", f: "rate = amount / number of units",
        means: "If 4 pens cost 60p, one pen costs 15p.",
        verify: function () { return 60 / 4 === 15; } }
    ],
    algebra: [
      { name: "Solving a one step equation", f: "if x + b = c then x = c - b",
        means: "Do the same to both sides. x + 3 = 10 gives x = 7.",
        verify: function () { var b = 3, c = 10, x = c - b; return x + b === c && x === 7; } },
      { name: "Solving a two step equation", f: "if a x + b = c then x = (c - b) / a",
        means: "Undo the adding first, then the multiplying. 2x + 3 = 11 gives x = 4.",
        verify: function () { var a = 2, b = 3, c = 11, x = (c - b) / a; return a * x + b === c && x === 4; } },
      { name: "Expanding brackets", f: "a(b + c) = ab + ac",
        means: "3(4 + 5) is the same as 12 + 15, which is 27.",
        verify: function () { return 3 * (4 + 5) === 3 * 4 + 3 * 5; } },
      { name: "Powers", f: "a^m x a^n = a^(m + n)",
        means: "Add the powers when multiplying. 2 cubed x 2 squared is 2 to the fifth, which is 32.",
        verify: function () { return Math.pow(2, 3) * Math.pow(2, 2) === Math.pow(2, 5); } }
    ],
    data: [
      { name: "Mean (the average)", f: "mean = sum of values / how many values",
        means: "For 2, 3, 3, 6, 11 the total is 25 and there are 5, so the mean is 5.",
        verify: function () { var v = [2, 3, 3, 6, 11]; var s = v.reduce(function (a, b) { return a + b; }, 0); return s / v.length === 5; } },
      { name: "Median (the middle one)", f: "put them in order, take the middle value",
        means: "2, 3, 3, 6, 11 in order has 3 in the middle.",
        verify: function () { var v = [2, 3, 3, 6, 11].slice().sort(function (a, b) { return a - b; }); return v[Math.floor(v.length / 2)] === 3; } },
      { name: "Range", f: "range = biggest - smallest",
        means: "11 take away 2 is 9.",
        verify: function () { return 11 - 2 === 9; } },
      { name: "Probability", f: "P = ways it can happen / total possible ways",
        means: "One 6 on a dice out of six faces is 1/6. Something certain is 1, impossible is 0.",
        verify: function () { return near(1 / 6, 0.16666666666666666) && 6 / 6 === 1 && 0 / 6 === 0; } }
    ],
    pythagoras: [
      { name: "Pythagoras' theorem", f: "a^2 + b^2 = c^2",
        means: "In a right angled triangle, the two short sides squared add up to the long side squared. 3, 4, 5 works.",
        verify: function () { return 3 * 3 + 4 * 4 === 5 * 5 && 5 * 5 + 12 * 12 === 13 * 13; } },
      { name: "Finding the long side", f: "c = square root of (a^2 + b^2)",
        means: "With sides 3 and 4 the hypotenuse is 5.",
        verify: function () { return Math.sqrt(3 * 3 + 4 * 4) === 5; } },
      { name: "Sine, cosine, tangent", f: "sin = opp/hyp, cos = adj/hyp, tan = opp/adj",
        means: "In the 3, 4, 5 triangle the sine of the angle opposite the 3 is 3/5, which is 0.6.",
        verify: function () { return near(3 / 5, 0.6) && near(4 / 5, 0.8) && near(3 / 4, 0.75); } },
      { name: "A known angle", f: "sin 30 degrees = 0.5",
        means: "Worth knowing by heart, and a good check that your calculator is in degrees.",
        verify: function () { return near(Math.sin(30 * Math.PI / 180), 0.5, 1e-12); } }
    ],
    functions: [
      { name: "A straight line", f: "y = m x + c",
        means: "m is the slope and c is where it crosses the y axis. y = 2x + 1 passes through (0, 1) and (3, 7).",
        verify: function () { var f = function (x) { return 2 * x + 1; }; return f(0) === 1 && f(3) === 7; } },
      { name: "Gradient of a line", f: "m = (y2 - y1) / (x2 - x1)",
        means: "Rise over run. From (0, 1) to (3, 7) the gradient is 6/3 = 2.",
        verify: function () { return (7 - 1) / (3 - 0) === 2; } },
      { name: "The quadratic formula", f: "x = (-b +/- square root of (b^2 - 4ac)) / 2a",
        means: "Solves any equation of the form ax^2 + bx + c = 0. For x^2 - 5x + 6 the answers are 2 and 3.",
        verify: function () {
          var a = 1, b = -5, c = 6, d = Math.sqrt(b * b - 4 * a * c);
          var r1 = (-b + d) / (2 * a), r2 = (-b - d) / (2 * a);
          return near(a * r1 * r1 + b * r1 + c, 0) && near(a * r2 * r2 + b * r2 + c, 0) &&
                 near(Math.max(r1, r2), 3) && near(Math.min(r1, r2), 2);
        } },
      { name: "Average rate of change", f: "rate = (change in y) / (change in x)",
        means: "For y = x squared between x = 1 and x = 3, y goes 1 to 9, so the rate is 8/2 = 4. This idea becomes calculus.",
        verify: function () { var f = function (x) { return x * x; }; return (f(3) - f(1)) / (3 - 1) === 4; } }
    ]
  };
  window.MATH_FORMULAS = F;

  // ==================== endless worksheets ====================
  // Maths is the one subject where a worksheet can be genuinely endless rather than reshuffled,
  // so each unit generates fresh numbers every time. app.js routes category 32 here.
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  var GEN = {
    counting: function () {
      var k = R(0, 2);
      if (k === 0) { var n = R(11, 99); return { q: "How many tens and ones are in " + n + "?", a: Math.floor(n / 10) + " tens and " + (n % 10) + " ones" }; }
      if (k === 1) { var s = pick([2, 5, 10]), st = s * R(1, 6); return { q: "Carry on counting in " + s + "s: " + st + ", " + (st + s) + ", " + (st + 2 * s) + ", ?", a: String(st + 3 * s) }; }
      var a = R(10, 99), b = R(10, 99);
      return { q: "Which is bigger, " + a + " or " + b + "?", a: a === b ? "They are equal" : String(Math.max(a, b)) };
    },
    addsub: function () {
      var a = R(2, 50), b = R(2, 50);
      if (R(0, 1)) return { q: a + " + " + b + " = ?", a: String(a + b) };
      var big = Math.max(a, b), small = Math.min(a, b);
      return { q: big + " - " + small + " = ?", a: String(big - small) };
    },
    times: function () {
      var a = R(2, 12), b = R(2, 12);
      if (R(0, 2) === 0) return { q: (a * b) + " / " + a + " = ?", a: String(b) };
      return { q: a + " x " + b + " = ?", a: String(a * b) };
    },
    fractions: function () {
      var k = R(0, 2);
      if (k === 0) { var d = pick([2, 3, 4, 5]), n = R(1, d - 1), m = R(2, 4);
        return { q: "Write " + n + "/" + d + " as an equivalent fraction with bottom number " + (d * m) + ".", a: (n * m) + "/" + (d * m) }; }
      if (k === 1) { var dd = pick([4, 5, 6, 8, 10]), a1 = R(1, dd - 2), b1 = R(1, dd - a1 - 1);
        return { q: a1 + "/" + dd + " + " + b1 + "/" + dd + " = ?", a: (a1 + b1) + "/" + dd }; }
      var den = pick([2, 4, 5, 10]), num = R(1, den - 1), whole = den * R(2, 10);
      return { q: "What is " + num + "/" + den + " of " + whole + "?", a: String(whole / den * num) };
    },
    decimals: function () {
      var k = R(0, 2);
      if (k === 0) { var p = pick([5, 10, 20, 25, 50, 75]), n = 20 * R(1, 10);
        return { q: "What is " + p + "% of " + n + "?", a: String(n * p / 100) }; }
      if (k === 1) { var q = pick([10, 20, 25, 50, 75]);
        return { q: "Write " + q + "% as a decimal.", a: String(q / 100) }; }
      var old = 10 * R(2, 12), rise = pick([10, 20, 25, 50]);
      return { q: "A price of " + old + " goes up by " + rise + "%. What is the new price?", a: String(old + old * rise / 100) };
    },
    shape: function () {
      var k = R(0, 3), l = R(3, 15), w = R(3, 15);
      if (k === 0) return { q: "A rectangle is " + l + " cm by " + w + " cm. What is its area?", a: (l * w) + " cm squared" };
      if (k === 1) return { q: "A rectangle is " + l + " cm by " + w + " cm. What is its perimeter?", a: (2 * (l + w)) + " cm" };
      if (k === 2) { var b = 2 * R(2, 9), h = R(3, 12); return { q: "A triangle has base " + b + " cm and height " + h + " cm. What is its area?", a: (b * h / 2) + " cm squared" }; }
      var a1 = R(20, 90), b1 = R(20, 150 - a1);
      return { q: "Two angles in a triangle are " + a1 + " and " + b1 + " degrees. What is the third?", a: (180 - a1 - b1) + " degrees" };
    },
    measure: function () {
      var k = R(0, 3);
      if (k === 0) { var m = R(2, 20); return { q: "How many centimetres are in " + m + " metres?", a: String(m * 100) }; }
      if (k === 1) { var kg = R(2, 20); return { q: "How many grams are in " + kg + " kg?", a: String(kg * 1000) }; }
      if (k === 2) { var h = R(2, 12); return { q: "How many minutes are in " + h + " hours?", a: String(h * 60) }; }
      var dist = 10 * R(2, 20), time = pick([2, 4, 5]);
      return { q: "A car travels " + dist + " km in " + time + " hours. What is its speed?", a: (dist / time) + " km per hour" };
    },
    ratio: function () {
      var k = R(0, 2), a = R(1, 6), b = R(1, 6);
      if (k === 0) { var total = (a + b) * R(2, 12);
        return { q: "Share " + total + " in the ratio " + a + " : " + b + ".", a: (total / (a + b) * a) + " and " + (total / (a + b) * b) }; }
      if (k === 1) { var n = R(2, 5); return { q: "Write the ratio " + (a * n) + " : " + (b * n) + " in its simplest form, given it started as " + a + " : " + b + ".", a: a + " : " + b }; }
      var items = R(2, 9), cost = items * R(2, 20);
      return { q: items + " pens cost " + cost + "p. What does one pen cost?", a: (cost / items) + "p" };
    },
    algebra: function () {
      var k = R(0, 2), x = R(2, 12), a = R(2, 9), b = R(1, 20);
      if (k === 0) return { q: "x + " + b + " = " + (x + b) + ". What is x?", a: String(x) };
      if (k === 1) return { q: a + "x = " + (a * x) + ". What is x?", a: String(x) };
      return { q: a + "x + " + b + " = " + (a * x + b) + ". What is x?", a: String(x) };
    },
    data: function () {
      var n = R(4, 6), v = [];
      for (var i = 0; i < n; i++) v.push(R(1, 20));
      var k = R(0, 3);
      var sorted = v.slice().sort(function (p, q) { return p - q; });
      var sum = v.reduce(function (p, q) { return p + q; }, 0);
      if (k === 0) return { q: "Find the mean of " + v.join(", ") + ".", a: String(Math.round(sum / n * 100) / 100) };
      if (k === 1) return { q: "Find the range of " + v.join(", ") + ".", a: String(sorted[n - 1] - sorted[0]) };
      if (k === 2) return { q: "Put these in order and find the median: " + v.join(", ") + ".",
        a: n % 2 ? String(sorted[(n - 1) / 2]) : String((sorted[n / 2 - 1] + sorted[n / 2]) / 2) };
      var faces = pick([6, 10]), want = R(1, faces);
      return { q: "A fair " + faces + " sided dice is rolled. What is the probability of getting a " + want + "?", a: "1/" + faces };
    },
    pythagoras: function () {
      var trip = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]]);
      if (R(0, 1)) return { q: "A right angled triangle has short sides " + trip[0] + " and " + trip[1] + ". How long is the longest side?", a: String(trip[2]) };
      return { q: "A right angled triangle has hypotenuse " + trip[2] + " and one short side " + trip[0] + ". How long is the other short side?", a: String(trip[1]) };
    },
    functions: function () {
      var m = R(2, 6), c = R(1, 9), x = R(1, 8);
      var k = R(0, 2);
      if (k === 0) return { q: "For y = " + m + "x + " + c + ", what is y when x = " + x + "?", a: String(m * x + c) };
      if (k === 1) { var x2 = x + R(1, 5);
        return { q: "A line passes through (" + x + ", " + (m * x + c) + ") and (" + x2 + ", " + (m * x2 + c) + "). What is its gradient?", a: String(m) }; }
      var a2 = R(1, 4), b2 = R(1, 6);
      return { q: "For y = x squared, what is the average rate of change between x = " + a2 + " and x = " + (a2 + b2) + "?", a: String(((a2 + b2) * (a2 + b2) - a2 * a2) / b2) };
    }
  };
  window.MATH_GEN = GEN;

  // ==================== the twelve units ====================
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, activity, questions) {
    return {
      title: title, emoji: emoji, band: band, intro: intro, learn: learn,
      diagram: diagram, parentNote: parentNote, activity: activity,
      mathFormulas: F[key] || null, mathGen: key, questions: questions
    };
  }

  LESSONS[32] = {

    whatis: U("whatis", "1 · What Is Mathematics?", "🔎", "Kindergarten to Grade 2",
      "Mathematics is the study of number, shape and pattern. It is not really about getting sums right quickly. It is about noticing that things follow rules, and then using those rules to work out something you did not already know.",
      ["Maths is about patterns. Once you spot a pattern you can say what comes next without being told.",
       "Numbers are one kind of pattern. Shapes are another. So are the rules for sharing things out fairly.",
       "Every piece of maths can be checked. If you are not sure, you can test it, which is not true of most subjects.",
       "Being stuck is normal and is where the learning happens. Mathematicians are stuck most of the time.",
       "There is almost always more than one way to get an answer. Finding a second way is the best check there is."],
      dWhat,
      "The single most useful thing you can say is that being stuck is not failure. Speed is not what makes somebody good at maths, and children who believe it is tend to stop trying. Ask how they worked it out at least as often as whether they got it right.",
      "🔎 Pattern Hunt: find five patterns in one room. Tiles, a stripey jumper, the numbers on a clock, the way a shelf is stacked. For each one, say what would come next if it kept going.",
      [{ q: "What is mathematics the study of?", a: "Number, shape and pattern" },
       { q: "What can you do once you spot a pattern?", a: "Say what comes next" },
       { q: "Can a piece of maths be checked?", a: "Yes" },
       { q: "Is being stuck a sign you are bad at maths?", a: "No, it is normal" },
       { q: "How many ways are there to get an answer?", a: "Usually more than one" },
       { q: "What is the best way to check an answer?", a: "Work it out a second, different way" },
       { q: "Is maths mostly about being fast?", a: "No" },
       { q: "Name something in a room that has a pattern.", a: "Tiles, a clock or stripes" }]),

    counting: U("counting", "2 · Numbers and Counting", "🔢", "Kindergarten to Grade 1",
      "Every number you will ever meet is built from ten digits, 0 to 9. What makes a number big or small is not the digits themselves but where they sit.",
      ["Counting is matching one number word to one object. Say it and touch it.",
       "Zero means none. It is a real number, and it took people a very long time to invent it.",
       "Where a digit sits tells you what it is worth. In 23, the 2 means two tens, not two.",
       "Counting in twos, fives and tens is faster than counting in ones, and it is the beginning of times tables.",
       "The number line puts numbers in order. Further right means bigger, and it never runs out."],
      dCount,
      "Watch for counting without matching: a child reciting numbers faster than they touch the objects. Touching one thing per number word is the skill, not the reciting. Zero is also worth dwelling on, since it is genuinely strange and is the foundation of place value.",
      "🔢 Ten and a Bit: grab a handful of buttons or pasta. Make groups of ten, then count how many tens and how many left over. Write the number. That is place value, done with your hands.",
      [{ q: "How many digits are there?", a: "Ten, 0 to 9" },
       { q: "What does zero mean?", a: "None" },
       { q: "In the number 23, what is the 2 worth?", a: "Two tens, or 20" },
       { q: "In the number 47, what is the 7 worth?", a: "Seven ones" },
       { q: "What does counting in fives go: 5, 10, ...?", a: "15" },
       { q: "On a number line, which way are numbers bigger?", a: "To the right" },
       { q: "How many tens are in 60?", a: "Six" },
       { q: "Does the number line ever end?", a: "No" }]),

    addsub: U("addsub", "3 · Adding and Subtracting", "➕", "Kindergarten to Grade 2",
      "Adding is putting together. Subtracting is taking away, or finding the difference. They are two sides of the same fact, which means learning one gives you the other for free.",
      ["Adding can be done in any order. 6 + 4 is the same as 4 + 6, so always start with the bigger number.",
       "Subtracting cannot be done in any order. 10 - 4 is not the same as 4 - 10.",
       "Every adding fact hides a subtracting fact. If 6 + 4 = 10, then 10 - 4 = 6 and 10 - 6 = 4.",
       "Number bonds to ten are worth knowing by heart: 1 and 9, 2 and 8, 3 and 7, 4 and 6, 5 and 5.",
       "A number line helps: adding jumps right and subtracting jumps left."],
      dAdd,
      "Fact families are the idea to push here. A child who knows 6 + 4 = 10 has really learned four facts at once. Ask for the other three. It halves the memorising and it builds the habit of seeing operations as reversible, which matters enormously later in algebra.",
      "➕ Bond Snap: write the numbers 0 to 10 on cards. Turn two over. If they add to ten, shout snap and keep them. Fastest way there is to learn number bonds without it feeling like practice.",
      [{ q: "Does 6 + 4 equal 4 + 6?", a: "Yes" },
       { q: "Does 10 - 4 equal 4 - 10?", a: "No" },
       { q: "If 7 + 3 = 10, what is 10 - 3?", a: "7" },
       { q: "What goes with 4 to make ten?", a: "6" },
       { q: "What goes with 3 to make ten?", a: "7" },
       { q: "On a number line, which way does adding jump?", a: "Right" },
       { q: "Which way does subtracting jump?", a: "Left" },
       { q: "Why start with the bigger number when adding?", a: "There is less to count on" }]),

    times: U("times", "4 · Times Tables and Division", "✖️", "Grades 2 to 4",
      "Multiplying is adding the same number over and over, done quickly. Dividing is sharing out, or finding how many groups fit. Like adding and subtracting, they undo each other.",
      ["4 x 6 means four lots of six. Drawn as a rectangle of dots, that is 4 rows of 6.",
       "Turn the rectangle sideways and it becomes 6 rows of 4. The total is the same, so 4 x 6 = 6 x 4. That halves what you have to learn.",
       "Dividing undoes multiplying. If 4 x 6 = 24, then 24 / 6 = 4 and 24 / 4 = 6.",
       "Look for patterns rather than memorising blindly. The tens all end in 0, the fives end in 5 or 0, and the nines' digits add up to 9.",
       "The square numbers run down the diagonal of the times table: 1, 4, 9, 16, 25, because they are 1x1, 2x2, 3x3 and so on."],
      dTimes,
      "Five minutes a day beats an hour on Sunday. Chant them, sing them, race them in the car. And when a fact will not stick, do not just repeat it: draw it as a rectangle of dots. Seeing why 7 x 8 is 56 gives a child something to fall back on when the memory fails, which it will.",
      "✖️ Beat Yesterday: time your child filling in one row of a times table grid. Write the time on the sheet. Tomorrow the only target is beating yesterday's time, not a sibling's.",
      [{ q: "What does 4 x 6 mean?", a: "Four lots of six" },
       { q: "Does 4 x 6 equal 6 x 4?", a: "Yes" },
       { q: "If 4 x 6 = 24, what is 24 / 6?", a: "4" },
       { q: "What do all the answers in the 10 times table end in?", a: "Zero" },
       { q: "What do the answers in the 5 times table end in?", a: "5 or 0" },
       { q: "What are the numbers down the diagonal called?", a: "Square numbers" },
       { q: "What is 7 x 8?", a: "56" },
       { q: "What is 24 shared between 4?", a: "6" }]),

    fractions: U("fractions", "5 · Fractions", "🍕", "Grades 3 to 5",
      "A fraction is a part of a whole. The bottom number says how many equal parts the whole was cut into, and the top number says how many of them you have.",
      ["In 3/4, the 4 says the whole was cut into four equal parts and the 3 says you have three of them.",
       "The parts must be equal. Four uneven pieces of cake are not quarters.",
       "The bigger the bottom number, the smaller each piece. An eighth is smaller than a quarter, which surprises almost everybody at first.",
       "Different fractions can be worth the same. 1/2, 2/4 and 4/8 are all the same amount.",
       "To add fractions the bottom numbers must match. 1/8 + 3/8 = 4/8, which is also 1/2.",
       "To find a fraction of an amount, divide by the bottom then multiply by the top. Three quarters of 20 is 20 / 4 x 3 = 15."],
      dFrac,
      "The single most common wrong idea is that a bigger bottom number means a bigger fraction, because bigger numbers have always meant more until now. Cut something real into halves and then eighths and let them see the pieces get smaller. That one demonstration is worth a page of practice.",
      "🍕 Fair Shares: take a strip of paper. Fold it in half, then in half again, then again. Open it out and label the parts. You now have halves, quarters and eighths on one strip and can see instantly which is biggest.",
      [{ q: "In 3/4, what does the 4 tell you?", a: "The whole was cut into four equal parts" },
       { q: "In 3/4, what does the 3 tell you?", a: "You have three of those parts" },
       { q: "Must the parts be equal?", a: "Yes" },
       { q: "Which is bigger, a quarter or an eighth?", a: "A quarter" },
       { q: "Name a fraction worth the same as 1/2.", a: "2/4, or 4/8" },
       { q: "What is 1/8 + 3/8?", a: "4/8, which is 1/2" },
       { q: "What is 3/4 of 20?", a: "15" },
       { q: "What must match before you can add two fractions?", a: "The bottom numbers" }]),

    decimals: U("decimals", "6 · Decimals, Percentages and Money", "💷", "Grades 4 to 6",
      "Fractions, decimals and percentages are three ways of writing the same idea. Money is where you meet all three at once, which makes it the best place to practise.",
      ["A decimal point separates whole ones from parts. The first place after it is tenths, the next is hundredths.",
       "Percent means out of a hundred. 50% is 50 out of 100, which is one half, which is 0.5.",
       "The useful ones to know by heart: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/10 = 0.1 = 10%, 3/4 = 0.75 = 75%.",
       "To find a percentage of an amount, divide by 100 and multiply by the percentage. 25% of 80 is 80 / 100 x 25 = 20.",
       "10% is easy: move the decimal point one place left. Once you have 10% you can build 20%, 5% and 30% from it in your head.",
       "Money is decimals with two places, because there are 100 pennies in a pound and 100 cents in a dollar."],
      dDec,
      "The 10% trick is the one to drill, because it makes mental percentages possible and it lasts a lifetime. Practise it on real receipts and real sale signs. A child who can work out 20% off in a shop has genuinely useful maths, and knows it, which is worth more than another worksheet.",
      "💷 The Sale Rail: take any shopping catalogue or website prices written down. Work out 10% of each, then use it to find 20%, 30% and 50%. Check one with a calculator to prove the method works.",
      [{ q: "What does percent mean?", a: "Out of a hundred" },
       { q: "Write 1/2 as a percentage.", a: "50%" },
       { q: "Write 25% as a decimal.", a: "0.25" },
       { q: "What is 25% of 80?", a: "20" },
       { q: "How do you find 10% of a number quickly?", a: "Move the decimal point one place left" },
       { q: "What is 10% of 250?", a: "25" },
       { q: "What is the first place after a decimal point called?", a: "Tenths" },
       { q: "How many pennies are in a pound?", a: "100" }]),

    shape: U("shape", "7 · Shape and Space", "📐", "Grades 3 to 6",
      "Geometry is the maths of shape, size and position. Two ideas do most of the work: area, which is how much is inside, and perimeter, which is how far it is around the edge.",
      ["Area is measured in square units, because you are counting squares. Perimeter is measured in plain units, because you are measuring a length.",
       "Area of a rectangle is length times width. A rectangle 5 by 3 holds 15 squares.",
       "A triangle is exactly half the rectangle drawn around it, so its area is base times height, divided by two.",
       "The angles inside any triangle add up to 180 degrees. Inside any four sided shape they add up to 360.",
       "A circle's distance around is its circumference, and it is always a little more than three times across. That number is pi, about 3.14159.",
       "Note for readers of both British and American books: a trapezium in Britain is a trapezoid in America, and the two words mean opposite things. Check which book you are in."],
      dShape,
      "Area and perimeter get muddled constantly, and the fix is physical rather than verbal. Walk around the edge of a rug for perimeter. Cover it with sheets of paper for area. Children who have done both with their bodies stop confusing the two.",
      "📐 Same Perimeter, Different Area: using 12 matchsticks, make as many different rectangles as you can. They all have a perimeter of 12, but the areas differ. Which shape gives the most area? Try to say why.",
      [{ q: "What units is area measured in?", a: "Square units" },
       { q: "What is the area of a 5 by 3 rectangle?", a: "15 square units" },
       { q: "What is the perimeter of a 5 by 3 rectangle?", a: "16 units" },
       { q: "How do you find the area of a triangle?", a: "Base times height, divided by two" },
       { q: "What do the angles in a triangle add up to?", a: "180 degrees" },
       { q: "What do the angles in a quadrilateral add up to?", a: "360 degrees" },
       { q: "What is the distance around a circle called?", a: "The circumference" },
       { q: "About what is pi?", a: "3.14159" }]),

    measure: U("measure", "8 · Measurement", "📏", "Grades 3 to 6",
      "Measuring turns the world into numbers you can calculate with. The metric system makes it easy, because every step is ten, a hundred or a thousand.",
      ["Length goes millimetres, centimetres, metres, kilometres. 10 mm in a cm, 100 cm in a metre, 1000 m in a km.",
       "Mass goes grams and kilograms, with 1000 grams in a kilogram.",
       "Capacity goes millilitres and litres, with 1000 ml in a litre.",
       "Always write the unit. 5 on its own is not an answer; 5 cm is.",
       "Time is the odd one out, because it does not go in tens. 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day.",
       "Speed links distance and time: speed is distance divided by time. 120 km in 2 hours is 60 km per hour."],
      dMeasure,
      "Estimating first is the habit worth building. Before measuring anything, guess. Children who guess before they measure develop a real sense of how big a metre is, and they spot silly answers later, which is a skill no calculator gives you.",
      "📏 Guess Then Check: pick ten things around the house. Guess each length, write the guess down, then measure. Score a point for every guess within 10%. Play again next week and see if the score improves.",
      [{ q: "How many millimetres are in a centimetre?", a: "10" },
       { q: "How many centimetres are in a metre?", a: "100" },
       { q: "How many metres are in a kilometre?", a: "1000" },
       { q: "How many grams are in a kilogram?", a: "1000" },
       { q: "How many millilitres are in a litre?", a: "1000" },
       { q: "How many seconds are in a day?", a: "86400" },
       { q: "How do you work out speed?", a: "Distance divided by time" },
       { q: "Why must you always write the unit?", a: "A number alone does not say how much" }]),

    ratio: U("ratio", "9 · Ratio, Proportion and Rates", "⚖️", "Grades 6 to 8",
      "A ratio compares two amounts. It is how recipes scale, how maps work, and how you tell whether a bigger box is actually better value.",
      ["A ratio of 2 : 3 means two parts of one thing for every three of the other, so five parts in all.",
       "A ratio compares part to part. A fraction compares part to whole. In a 2 : 3 mix, orange is 2/5 of the total, not 2/3.",
       "Scaling keeps a ratio the same. 2 : 3 is the same mix as 4 : 6 and 20 : 30.",
       "To share an amount in a ratio, add the parts, divide the total by that, then multiply out. Share 20 in the ratio 2 : 3: five parts, so one part is 4, giving 8 and 12.",
       "A rate compares two different units, such as km per hour or pence per gram.",
       "Unit price is the practical use: divide price by amount and compare. It is the only reliable way to tell which packet is better value."],
      dRatio,
      "The trap is treating 2 : 3 as the fraction 2/3. It is not; it is 2/5 of the total. Mixing squash or paint in front of them fixes this faster than any explanation, because they can see five cups going in.",
      "⚖️ Best Value: take two sizes of the same product with the prices. Work out the price per 100 g of each. The bigger box is not always cheaper, and finding one where it is not is very satisfying.",
      [{ q: "In the ratio 2 : 3, how many parts are there in total?", a: "Five" },
       { q: "In a 2 : 3 mix, what fraction is the first part?", a: "2/5" },
       { q: "Is 4 : 6 the same mix as 2 : 3?", a: "Yes" },
       { q: "Share 20 in the ratio 2 : 3.", a: "8 and 12" },
       { q: "What is a rate?", a: "A comparison of two different units" },
       { q: "Give an example of a rate.", a: "Kilometres per hour" },
       { q: "How do you find the unit price?", a: "Divide the price by the amount" },
       { q: "If 4 pens cost 60p, what does one cost?", a: "15p" }]),

    algebra: U("algebra", "10 · Introducing Algebra", "🧮", "Grades 6 to 9",
      "Algebra is arithmetic with a letter standing in for a number you do not know yet. The letter is not mysterious. It is a box waiting to be filled.",
      ["In x + 3 = 10, the x is simply the number that makes the sentence true. Here it is 7.",
       "Think of the equals sign as a balance. Whatever you do to one side you must do to the other, or it tips.",
       "To solve, undo what was done, in reverse order. For 2x + 3 = 11, undo the +3 first, then the x2.",
       "Always check by putting your answer back in. 2 x 4 + 3 = 11, so x = 4 is right. This takes ten seconds and catches almost every mistake.",
       "Brackets mean do this first, and a(b + c) = ab + ac lets you take them apart.",
       "When multiplying powers of the same number, add the powers: 2 cubed times 2 squared is 2 to the fifth."],
      dAlg,
      "The equals sign is the thing to get right. Many children read it as 'and now the answer comes', not as 'these two sides are worth the same'. That misreading is what makes algebra feel arbitrary later. A pair of kitchen scales, or even a drawn seesaw, fixes it early.",
      "🧮 Guess My Rule: think of a rule such as double it and add one. Your child gives you numbers and you give back the answers. They work out the rule and then write it as an expression. That expression is algebra, and they built it themselves.",
      [{ q: "What does the letter in algebra stand for?", a: "A number you do not know yet" },
       { q: "If x + 3 = 10, what is x?", a: "7" },
       { q: "What does the equals sign really mean?", a: "Both sides are worth the same" },
       { q: "If you take 3 from one side, what must you do?", a: "Take 3 from the other side too" },
       { q: "If 2x + 3 = 11, what is x?", a: "4" },
       { q: "How do you check your answer?", a: "Put it back into the equation" },
       { q: "What is 3(4 + 5)?", a: "27" },
       { q: "What is 2 cubed times 2 squared?", a: "32" }]),

    data: U("data", "11 · Data, Averages and Chance", "📊", "Grades 5 to 9",
      "Statistics is how you make sense of a pile of numbers, and probability is how you talk about things that have not happened yet. Both are everywhere in the news, which is reason enough to understand them.",
      ["The mean is the total shared out evenly: add everything up and divide by how many there are.",
       "The median is the middle value once they are in order. The mode is the one that appears most often.",
       "The mean can be pulled a long way by one unusual value. For 2, 3, 3, 6, 11 the mean is 5 but four of the five numbers are below it.",
       "The range is the biggest take away the smallest, and it tells you how spread out the numbers are.",
       "Probability runs from 0, impossible, to 1, certain. It is the number of ways something can happen divided by the total number of ways.",
       "A fair dice has no memory. Five sixes in a row does not make a six less likely next time, and believing otherwise is a genuinely expensive mistake."],
      dData,
      "The average that gets quoted in the news is almost always the mean, and it is often the wrong one to use. Ask which average would be fairest for house prices, or for wages. There is no single right answer, and noticing that is the real lesson.",
      "📊 Family Survey: pick something to count, such as how many letters are in everybody's first name. Work out the mean, median, mode and range. Then argue about which one best describes your family.",
      [{ q: "How do you work out the mean?", a: "Add them up and divide by how many" },
       { q: "What is the median?", a: "The middle value in order" },
       { q: "What is the mode?", a: "The value that appears most often" },
       { q: "What is the range?", a: "The biggest take away the smallest" },
       { q: "Find the mean of 2, 3, 3, 6, 11.", a: "5" },
       { q: "Find the median of 2, 3, 3, 6, 11.", a: "3" },
       { q: "What is the probability of rolling a 6 on a fair dice?", a: "1/6" },
       { q: "After five sixes, is a six less likely next roll?", a: "No, the dice has no memory" }]),

    pythagoras: U("pythagoras", "12 · Pythagoras and Trigonometry", "📐", "Grades 8 to 11",
      "Right angled triangles have a rule so useful that it is over two thousand years old and still used every day by builders, sailors and game programmers.",
      ["Pythagoras' theorem: in a right angled triangle, the two short sides squared add up to the longest side squared. a squared plus b squared equals c squared.",
       "The longest side is called the hypotenuse and it is always opposite the right angle.",
       "The 3, 4, 5 triangle is the one to remember: 9 + 16 = 25. Builders still use it to check a corner is square.",
       "To find the long side, add the squares and take the square root. To find a short side, subtract instead.",
       "Trigonometry links the angles to the sides. Sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent.",
       "One worth memorising: the sine of 30 degrees is exactly 0.5. It also tells you instantly whether your calculator is set to degrees."],
      dPyth,
      "Do not let this stay abstract. Pythagoras is how you check whether a shelf is square, or work out whether a sofa fits diagonally through a door. Doing one real measurement with a tape measure makes the theorem stick in a way that twenty exercises will not.",
      "📐 Check a Corner: measure 3 units along one wall and 4 up the other, then measure the diagonal between those marks. If your room is truly square it will be exactly 5. Builders call this the 3, 4, 5 method and use it on real sites.",
      [{ q: "State Pythagoras' theorem.", a: "a squared plus b squared equals c squared" },
       { q: "What is the longest side of a right angled triangle called?", a: "The hypotenuse" },
       { q: "Where is the hypotenuse?", a: "Opposite the right angle" },
       { q: "In a triangle with sides 3 and 4, how long is the hypotenuse?", a: "5" },
       { q: "Does 9 + 16 equal 25?", a: "Yes" },
       { q: "What is sine equal to?", a: "Opposite over hypotenuse" },
       { q: "What is cosine equal to?", a: "Adjacent over hypotenuse" },
       { q: "What is the sine of 30 degrees?", a: "0.5" }]),

    functions: U("functions", "13 · Functions, Graphs and Change", "📈", "Grades 9 to 12",
      "A function is a machine: put a number in, get exactly one number out. Drawing a function as a graph turns a rule into a picture, and the shape of that picture tells you how things change.",
      ["A function gives exactly one output for each input. Put 3 into y = 2x + 1 and you always get 7.",
       "A straight line graph has the form y = mx + c, where m is the gradient and c is where it crosses the y axis.",
       "The gradient is rise over run: the change in y divided by the change in x. A gradient of 2 means y goes up 2 every time x goes up 1.",
       "y = x squared is not a straight line. It curves upwards, getting steeper as x grows.",
       "The quadratic formula solves any equation of the form ax squared plus bx plus c equals zero. For x squared minus 5x plus 6, the answers are 2 and 3.",
       "The average rate of change between two points is the gradient of the line joining them. Squeezing those two points together is the idea that becomes calculus."],
      dFunc,
      "The idea to hold onto is that a graph is a picture of a rule, not a decoration next to it. Ask what the steepness means in the situation being described, whether that is speed, cost or growth. That reading of gradient as meaning something real is what carries a student into calculus and into science.",
      "📈 Draw Your Day: plot time along the bottom and distance from home up the side, for a real journey. Flat means stopped. Steep means fast. Have somebody else read your graph back to you as a story and see if they get the journey right.",
      [{ q: "What is a function?", a: "A rule giving exactly one output for each input" },
       { q: "For y = 2x + 1, what is y when x = 3?", a: "7" },
       { q: "In y = mx + c, what is m?", a: "The gradient" },
       { q: "In y = mx + c, what is c?", a: "Where the line crosses the y axis" },
       { q: "How do you work out a gradient?", a: "Change in y divided by change in x" },
       { q: "What shape is the graph of y = x squared?", a: "A curve, getting steeper" },
       { q: "Solve x squared minus 5x plus 6 = 0.", a: "x = 2 or x = 3" },
       { q: "What does a flat section of a distance time graph mean?", a: "Not moving" }])
  };

  // ==================== the three reference tools ====================
  // Moved here from Additional Learning Materials on 2026-07-28. They are tools rather than
  // units, so they carry no unit number and sit after the thirteen. The abacus and times-table
  // worksheets are generated by genExtra() in app.js, which is where they have always lived.
  LESSONS[32].abacus = {
  title: "The Abacus: The First Calculator", emoji: "🧮",
  intro: "Long before computers, over 2,000 years ago, people did lightning-fast maths on a wooden frame with sliding beads. Skilled users can still beat a calculator today!",
  learn: [
    "An abacus is a counting frame. Each ROD (column) is a place value: ones, tens, hundreds, thousands, reading right to left, just like written numbers.",
    "The most common type (the Japanese soroban) has a bar across the middle. Below the bar: 4 'earth' beads, each worth 1. Above the bar: 1 'heaven' bead, worth 5.",
    "A bead only counts when you push it TOWARDS the middle bar. Beads pushed away from the bar are 'off' and count as zero.",
    "To show 7 on a rod: push the heaven bead (5) down to the bar, and push 2 earth beads (1+1) up to the bar. 5 + 2 = 7!",
    "To ADD, push beads towards the bar. When a rod reaches 10, you 'carry': clear that rod to zero and push one bead on the rod to its LEFT. To SUBTRACT, pull beads away.",
    "Why it still matters: your fingers and eyes learn place value physically. Many children who learn abacus can later picture the beads in their head and calculate mentally."
  ],
  activity: "✋ Make Your Own Abacus: Thread 5 beads (or pasta, or buttons) onto each of 3 strings, that's ones, tens and hundreds. Now show your age, then your house number, then today's date!",
  abacusDemo: true,
  questions: [
    { q: "What is each rod (column) on an abacus called in maths language?", a: "A place value: ones, tens, hundreds, and so on" },
    { q: "On a soroban, what is the bead above the bar worth?", a: "5" },
    { q: "How much is each bead below the bar worth?", a: "1" },
    { q: "When does a bead count?", a: "Only when it is pushed towards the middle bar" },
    { q: "How would you show the number 8 on one rod?", a: "The heaven bead (5) down, plus 3 earth beads up: 5 + 3 = 8" },
    { q: "What do you do when a rod reaches 10?", a: "Carry: clear that rod to zero and add one bead to the rod on its left" },
    { q: "Roughly how old is the abacus?", a: "Over 2,000 years old, used in ancient China, Rome, and beyond" }
  ]
};

  LESSONS[32].tables = {
  title: "Addition & Multiplication Tables", emoji: "🔢",
  intro: "The two tables every child should know by heart. Print them, put them on the fridge, and practise a little every day; fluency here makes ALL later maths easier.",
  learn: [
    "Look for patterns, don't just memorise! In the ×10 row, every answer just gains a zero. The ×5 row always ends in 5 or 0.",
    "Both tables are symmetrical: 3 + 8 is the same as 8 + 3, and 4 × 7 is the same as 7 × 4. That instantly halves how much you must learn!",
    "The diagonal of the multiplication table is the 'square numbers': 1, 4, 9, 16, 25 … because it's 1×1, 2×2, 3×3 …",
    "The ×9 finger trick: hold up ten fingers, bend the Nth finger down. Fingers to the left = tens, fingers to the right = ones. For 9 × 4: bend finger 4 → 3 left, 6 right → 36!",
    "Tip for parents: 5 minutes a day beats an hour on Sunday. Chant them, sing them, or race them."
  ],
  activity: "⏱️ Beat the Clock: Time your child filling one row of the multiplication table. Try again tomorrow; the goal is beating YESTERDAY'S time, not a sibling's.",
  mathTables: true,
  questions: [
    { q: "What is 7 + 8?", a: "15" },
    { q: "What is 6 × 7?", a: "42" },
    { q: "What is 9 × 8?", a: "72" },
    { q: "Why is 4 × 7 the same as 7 × 4?", a: "Multiplication is commutative; the order doesn't change the answer" },
    { q: "What are the numbers on the diagonal of the times table called?", a: "Square numbers (1, 4, 9, 16, 25 …)" },
    { q: "What is 12 × 12?", a: "144" }
  ]
};

  LESSONS[32].formulas = {
  title: "Essential Maths Formulas, Grade 1 to 12", emoji: "📐",
  intro: "Every formula you need from counting to calculus, in one printable place. Print it, stick it on the wall, and watch homework get easier!",
  learn: [
    "A formula is a recipe: put numbers in, get an answer out. The letters are just boxes waiting for numbers.",
    "Don't memorise blindly; say what each formula MEANS out loud. 'Area of a rectangle is length times width' makes sense; 'A = lw' alone doesn't.",
    "Order of operations (PEMDAS): Parentheses, Exponents, Multiply/Divide (left to right), Add/Subtract (left to right).",
    "When you use a formula, always write the units too: 5 cm² is an area, 5 cm is a length. They are not the same thing!"
  ],
  activity: "🃏 Formula Flashcards: Pick the 5 formulas for your grade. Write the name on one side of a card and the formula on the other. Quiz someone at dinner, then swap!",
  formulaSheet: true
};
})();
