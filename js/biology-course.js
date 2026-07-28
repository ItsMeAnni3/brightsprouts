// BrightSprouts Academy: "Let's Learn Biology" (LESSONS[31]).
//
// One ladder from Kindergarten to Grade 12: what biology is, living or not living, plants,
// animal groups, life cycles, the human body, habitats and food chains, cells, classifying life,
// genes, evolution, and ecosystems. Each rung assumes the one below it.
//
// This is deliberately NOT the same thing as the Biology subject inside Grades 6 to 12
// (js/biology.js). That one sits in a single grade's tab bar and starts at cells. This is the
// whole story from the beginning, for a family who wants to follow it in order.
//
// Written without em dashes, like the rest of the site's newer categories.
//
// ACCURACY RULES for anything added here, because this is science taught to children:
//  * Say what is settled and hedge what is not. Kingdom counts differ between school systems,
//    so the lesson says so rather than picking one and calling it fact.
//  * Every scientific name used is verified against GBIF and must come back EXACT and ACCEPTED.
//    audit_biocourse.html checks this live, so a typo cannot ship.
//  * Common misconceptions are addressed head on, in the parent note, because a wrong idea that
//    goes uncorrected at eight is still there at eighteen.
(function () {
  if (typeof LESSONS === "undefined") return;

  // ==================== 3D-looking diagram kit ====================
  // Flat SVG with gradients, highlights and cast shadows. Not WebGL: the shading is what gives
  // the depth, which is enough for a diagram and costs nothing to load.
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#2d2a4a"';
  var LBW = 'font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#ffffff"';
  var LN = 'stroke="#9a94b8" stroke-width="1.2"';
  var LNW = 'stroke="#cfe3f7" stroke-width="1.2"';
  var uid = 0;

  // a soft shadow plus one radial gradient per call, so shapes can be lit from the top left
  function defs(grads) {
    var s = '<defs><filter id="bcShadow" x="-30%" y="-30%" width="170%" height="170%">' +
      '<feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#2d2a4a" flood-opacity=".28"/></filter>';
    (grads || []).forEach(function (g) {
      s += '<radialGradient id="' + g[0] + '" cx="34%" cy="28%" r="76%">' +
        '<stop offset="0" stop-color="' + g[1] + '"/><stop offset="1" stop-color="' + g[2] + '"/></radialGradient>';
    });
    return s + '</defs>';
  }
  // a lit sphere: gradient body, specular highlight, contact shadow on the ground
  function orb(id, cx, cy, r, extra) {
    return '<ellipse cx="' + cx + '" cy="' + (cy + r * 0.92) + '" rx="' + (r * 0.86) + '" ry="' + (r * 0.22) +
      '" fill="#2d2a4a" opacity=".14"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + id + ')" filter="url(#bcShadow)"' + (extra || "") + '/>' +
      '<ellipse cx="' + (cx - r * 0.32) + '" cy="' + (cy - r * 0.38) + '" rx="' + (r * 0.26) + '" ry="' + (r * 0.17) +
      '" fill="#ffffff" opacity=".5" transform="rotate(-28 ' + (cx - r * 0.32) + ' ' + (cy - r * 0.38) + ')"/>';
  }
  // a rounded solid with a lit top edge, for anything box-like
  function slab(x, y, w, h, fill, top, r) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 12) +
      '" fill="' + fill + '" filter="url(#bcShadow)"/>' +
      '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="' + (h * 0.34) +
      '" rx="' + (r || 12) + '" fill="' + top + '" opacity=".45"/>';
  }
  function lab(x1, y1, x2, y2, tx, ty, text, white) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' + (white ? LNW : LN) + '/>' +
      '<text x="' + tx + '" y="' + ty + '" ' + (white ? LBW : LB) + '>' + text + '</text>';
  }
  // Right-hand labels are anchored to their right edge at x=334, so however long the words are
  // they grow leftwards into the picture instead of off the side of it.
  function labR(x1, y1, x2, y2, ty, text) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' + LN + '/>' +
      '<text x="334" y="' + ty + '" text-anchor="end" ' + LB + '>' + text + '</text>';
  }
  function frame(bg, inner) {
    return '<svg viewBox="0 0 340 214" role="img">' +
      '<rect width="340" height="214" rx="14" fill="' + bg + '"/>' + inner + '</svg>';
  }

  // ---- 1. what biology is: a magnifying glass over three living things ----
  var dWhat = frame("#eef9f0",
    defs([["bcLeaf", "#a8e6a1", "#3f9c4a"], ["bcBug", "#ffd166", "#e08a1a"], ["bcMe", "#ffd9c0", "#e8a97c"]]) +
    orb("bcLeaf", 74, 118, 30) + orb("bcBug", 170, 128, 24) + orb("bcMe", 258, 118, 30) +
    '<path d="M60 118 q14 -26 28 0 q-14 20 -28 0 z" fill="#2f7a3c" opacity=".55"/>' +
    '<circle cx="163" cy="122" r="3.4" fill="#2d2a4a"/><circle cx="177" cy="122" r="3.4" fill="#2d2a4a"/>' +
    '<circle cx="250" cy="112" r="3.4" fill="#2d2a4a"/><circle cx="266" cy="112" r="3.4" fill="#2d2a4a"/>' +
    '<path d="M248 126 q10 8 20 0" stroke="#2d2a4a" stroke-width="2" fill="none" stroke-linecap="round"/>' +
    '<circle cx="170" cy="86" r="40" fill="#ffffff" opacity=".28"/>' +
    '<circle cx="170" cy="86" r="40" fill="none" stroke="#5d3fa0" stroke-width="7"/>' +
    '<line x1="199" y1="115" x2="228" y2="146" stroke="#5d3fa0" stroke-width="10" stroke-linecap="round"/>' +
    '<text x="170" y="34" text-anchor="middle" ' + LB + ' font-size="15">bio = life, logy = the study of</text>' +
    '<text x="74" y="176" text-anchor="middle" ' + LB + '>plants</text>' +
    '<text x="170" y="176" text-anchor="middle" ' + LB + '>animals</text>' +
    '<text x="258" y="176" text-anchor="middle" ' + LB + '>you</text>');

  // ---- 2. living or not living ----
  var dLiving = frame("#f4f7ff",
    defs([["bcPup", "#ffd9a8", "#c98a3f"], ["bcRock", "#d8dce4", "#8f93a3"], ["bcSeed", "#b7e88f", "#4f9b41"]]) +
    '<rect x="14" y="26" width="150" height="162" rx="16" fill="#eaf9ec" stroke="#4ab55d" stroke-width="2.5"/>' +
    '<rect x="176" y="26" width="150" height="162" rx="16" fill="#f2eefc" stroke="#a89ec4" stroke-width="2.5"/>' +
    '<text x="89" y="48" text-anchor="middle" ' + LB + ' font-size="14">LIVING</text>' +
    '<text x="251" y="48" text-anchor="middle" ' + LB + ' font-size="14">NOT LIVING</text>' +
    orb("bcPup", 60, 94, 24) + orb("bcSeed", 122, 100, 18) +
    '<circle cx="53" cy="88" r="3" fill="#2d2a4a"/><circle cx="67" cy="88" r="3" fill="#2d2a4a"/>' +
    '<ellipse cx="60" cy="100" rx="5" ry="3.4" fill="#2d2a4a"/>' +
    '<path d="M122 82 q7 -14 0 -20" stroke="#2f7a3c" stroke-width="3" fill="none"/>' +
    orb("bcRock", 218, 100, 26) + slab(272, 84, 40, 44, "#7fc4ff", "#cfe3f7", 8) +
    '<text x="89" y="168" text-anchor="middle" ' + LB + ' font-size="11">grows, eats, has young</text>' +
    '<text x="251" y="168" text-anchor="middle" ' + LB + ' font-size="11">does none of those</text>');

  // ---- 3. a plant, with the job of each part ----
  var dPlant = frame("#f4fbf2",
    defs([["bcPot", "#e8a06a", "#a35a24"], ["bcFlow", "#ffb3cd", "#d6336c"]]) +
    '<rect x="0" y="150" width="340" height="64" fill="#e8dcc8"/>' +
    '<path d="M170 150 q-6 -40 0 -70" stroke="#4f9b41" stroke-width="9" fill="none" stroke-linecap="round"/>' +
    '<path d="M170 122 q-42 -6 -56 -30 q34 -2 56 30 z" fill="#5cb85c" filter="url(#bcShadow)"/>' +
    '<path d="M170 108 q42 -6 56 -30 q-34 -2 -56 30 z" fill="#6ec96e" filter="url(#bcShadow)"/>' +
    orb("bcFlow", 170, 62, 24) +
    '<circle cx="170" cy="62" r="10" fill="#ffd166"/>' +
    '<path d="M170 150 q-10 22 -30 34 M170 150 q10 22 30 34 M170 150 v38" stroke="#a35a24" stroke-width="4" fill="none" stroke-linecap="round"/>' +
    '<g>' +
    labR(170, 62, 248, 40, 44, "flower: makes seeds") +
    labR(198, 100, 256, 92, 96, "leaf: makes food") +
    lab(170, 122, 96, 106, 6, 110, "stem: carries water") +
    lab(170, 178, 92, 190, 6, 194, "roots: drink water") +
    '</g>' +
    '<text x="170" y="24" text-anchor="middle" ' + LB + ' font-size="14">every part has a job</text>');

  // ---- 4. vertebrates: the five groups ----
  var dGroups = frame("#eef6ff",
    defs([["bcFish", "#8fd0ff", "#1f6feb"], ["bcAmph", "#a8e6a1", "#2f9e44"], ["bcRept", "#cfe08a", "#7a8f2a"],
          ["bcBird", "#ffd0a8", "#e2762b"], ["bcMam", "#e8c49a", "#8a5f2e"]]) +
    '<text x="170" y="30" text-anchor="middle" ' + LB + ' font-size="14">animals WITH a backbone</text>' +
    orb("bcFish", 48, 92, 26) + orb("bcAmph", 109, 92, 26) + orb("bcRept", 170, 92, 26) +
    orb("bcBird", 231, 92, 26) + orb("bcMam", 292, 92, 26) +
    '<polygon points="26,92 8,78 12,92 8,106" fill="#1f6feb"/>' +
    '<circle cx="103" cy="84" r="4" fill="#2d2a4a"/><circle cx="117" cy="84" r="4" fill="#2d2a4a"/>' +
    '<polygon points="231,74 245,86 231,84" fill="#c9822a"/>' +
    '<ellipse cx="292" cy="72" rx="7" ry="9" fill="#8a5f2e"/><ellipse cx="278" cy="76" rx="6" ry="8" fill="#8a5f2e"/>' +
    '<text x="48" y="140" text-anchor="middle" ' + LB + ' font-size="11">fish</text>' +
    '<text x="109" y="140" text-anchor="middle" ' + LB + ' font-size="11">amphibians</text>' +
    '<text x="170" y="140" text-anchor="middle" ' + LB + ' font-size="11">reptiles</text>' +
    '<text x="231" y="140" text-anchor="middle" ' + LB + ' font-size="11">birds</text>' +
    '<text x="292" y="140" text-anchor="middle" ' + LB + ' font-size="11">mammals</text>' +
    '<path d="M24 162 h292" stroke="#c9c3d8" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<text x="170" y="184" text-anchor="middle" ' + LB + ' font-size="11.5">everything else is an invertebrate: no backbone</text>');

  // ---- 5. butterfly life cycle, as a ring ----
  var dCycle = (function () {
    var s = defs([["bcEgg", "#fff3c4", "#e0b83a"], ["bcCat", "#b7e88f", "#4f9b41"],
                  ["bcPup", "#d9c8f7", "#7c5cbf"], ["bcFly", "#ffc08a", "#e2762b"]]);
    var pts = [[80, 70], [260, 70], [260, 150], [80, 150]];
    var ids = ["bcEgg", "bcCat", "bcPup", "bcFly"];
    var names = ["1. egg", "2. caterpillar", "3. chrysalis", "4. butterfly"];
    pts.forEach(function (p, i) {
      s += orb(ids[i], p[0], p[1], 26);
      // top row labels sit above their circle, bottom row below, or the ring's own arrows and
      // the next circle down run straight through the words
      var ly = (i < 2) ? (p[1] - 34) : (p[1] + 48);
      s += '<text x="' + p[0] + '" y="' + ly + '" text-anchor="middle" ' + LB + ' font-size="11.5">' + names[i] + '</text>';
    });
    // arrows round the ring
    s += '<path d="M110 66 h120" stroke="#5d3fa0" stroke-width="3" fill="none" marker-end="url(#bcAr)"/>';
    s += '<path d="M286 96 v28" stroke="#5d3fa0" stroke-width="3" fill="none" marker-end="url(#bcAr)"/>';
    s += '<path d="M230 154 h-120" stroke="#5d3fa0" stroke-width="3" fill="none" marker-end="url(#bcAr)"/>';
    s += '<path d="M54 124 v-28" stroke="#5d3fa0" stroke-width="3" fill="none" marker-end="url(#bcAr)"/>';
    s += '<defs><marker id="bcAr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">' +
      '<path d="M0 0 L9 4.5 L0 9 z" fill="#5d3fa0"/></marker></defs>';
    s += '<text x="170" y="26" text-anchor="middle" ' + LB + ' font-size="14">the same animal, four times over</text>';
    s += '<path d="M248 62 l10 -10 M262 62 l10 -10" stroke="#e2762b" stroke-width="3" stroke-linecap="round"/>';
    return frame("#fff8ee", s);
  })();

  // ---- 6. the human body: four systems ----
  var dBody = frame("#fff4f6",
    defs([["bcHeart", "#ff8fb1", "#c9184a"], ["bcLung", "#a8d8ff", "#2b6cb0"],
          ["bcBrain", "#f2c7ff", "#8f3fbf"], ["bcBone", "#f7f3e8", "#c9bfa4"]]) +
    '<ellipse cx="170" cy="196" rx="86" ry="12" fill="#2d2a4a" opacity=".08"/>' +
    orb("bcBrain", 170, 52, 26) +
    orb("bcLung", 136, 116, 24) + orb("bcLung", 204, 116, 24) +
    orb("bcHeart", 170, 128, 20) +
    '<path d="M170 138 q-9 -12 0 -18 q9 6 0 18 z" fill="#ffffff" opacity=".45"/>' +
    '<rect x="164" y="76" width="12" height="30" rx="6" fill="url(#bcBone)" filter="url(#bcShadow)"/>' +
    labR(170, 52, 250, 40, 44, "brain: in charge") +
    labR(204, 116, 262, 108, 112, "lungs: air") +
    lab(170, 128, 96, 152, 6, 156, "heart: pumps blood") +
    lab(170, 92, 90, 80, 6, 84, "bones: hold you up") +
    '<text x="170" y="24" text-anchor="middle" ' + LB + ' font-size="14">systems that work together</text>');

  // ---- 7. a food chain, with the arrows pointing the way energy travels ----
  var dChain = (function () {
    var s = defs([["bcGrass", "#a8e6a1", "#3f9c4a"], ["bcRab", "#e8dcc8", "#a3936f"],
                  ["bcFox", "#ffb27a", "#c9601a"], ["bcSun", "#fff3a8", "#f2b705"]]);
    s += orb("bcSun", 40, 44, 22);
    var pts = [[70, 132], [170, 132], [274, 132]];
    var ids = ["bcGrass", "bcRab", "bcFox"];
    var names = ["grass", "rabbit", "fox"];
    var roles = ["producer", "herbivore", "predator"];
    pts.forEach(function (p, i) {
      s += orb(ids[i], p[0], p[1], 28);
      s += '<text x="' + p[0] + '" y="' + (p[1] + 50) + '" text-anchor="middle" ' + LB + ' font-size="12">' + names[i] + '</text>';
      s += '<text x="' + p[0] + '" y="' + (p[1] + 65) + '" text-anchor="middle" ' + LB + ' font-size="10" opacity=".72">(' + roles[i] + ')</text>';
    });
    s += '<path d="M104 132 h30" stroke="#2f9e44" stroke-width="4" fill="none" marker-end="url(#bcAr2)"/>';
    s += '<path d="M204 132 h34" stroke="#2f9e44" stroke-width="4" fill="none" marker-end="url(#bcAr2)"/>';
    s += '<path d="M56 68 q6 26 8 34" stroke="#f2b705" stroke-width="4" fill="none" marker-end="url(#bcAr2)"/>';
    s += '<defs><marker id="bcAr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">' +
      '<path d="M0 0 L9 4.5 L0 9 z" fill="#2f9e44"/></marker></defs>';
    s += '<text x="170" y="24" text-anchor="middle" ' + LB + ' font-size="14">the arrow means "is eaten by"</text>';
    s += '<text x="170" y="42" text-anchor="middle" ' + LB + ' font-size="11" opacity=".8">it points the way the energy goes</text>';
    return frame("#f2fbf3", s);
  })();

  // ---- 8. an animal cell and a plant cell, side by side ----
  var dCell = frame("#f6f2ff",
    defs([["bcNuc", "#c9a8ff", "#5d3fa0"], ["bcMito", "#ffb3cd", "#c9184a"],
          ["bcChl", "#a8e6a1", "#2f7a3c"], ["bcVac", "#bfe4ff", "#4d96ff"]]) +
    '<text x="88" y="26" text-anchor="middle" ' + LB + ' font-size="13.5">animal cell</text>' +
    '<text x="252" y="26" text-anchor="middle" ' + LB + ' font-size="13.5">plant cell</text>' +
    '<ellipse cx="88" cy="118" rx="70" ry="60" fill="#efe6ff" stroke="#a89ec4" stroke-width="4" filter="url(#bcShadow)"/>' +
    orb("bcNuc", 88, 108, 20) + orb("bcMito", 56, 146, 11) + orb("bcMito", 118, 88, 11) +
    '<rect x="188" y="52" width="128" height="130" rx="14" fill="#4f9b41" filter="url(#bcShadow)"/>' +
    '<rect x="196" y="60" width="112" height="114" rx="10" fill="#e6f7e0" stroke="#7bc267" stroke-width="2.5"/>' +
    '<rect x="212" y="76" width="62" height="82" rx="10" fill="url(#bcVac)" opacity=".75"/>' +
    orb("bcNuc", 288, 84, 15) + orb("bcChl", 218, 152, 10) + orb("bcChl", 258, 66, 10) + orb("bcChl", 296, 148, 10) +
    lab(88, 108, 24, 62, 4, 58, "nucleus") +
    lab(118, 88, 148, 56, 118, 50, "mitochondria") +
    lab(316, 60, 330, 46, 268, 42, "cell wall") +
    lab(243, 118, 200, 200, 176, 206, "vacuole") +
    lab(296, 148, 322, 186, 276, 200, "chloroplast"));

  // ---- 9. classification, as a narrowing stack ----
  var dClass = (function () {
    var ranks = ["Domain", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
    var ex = ["Eukarya", "Animalia", "Chordata", "Mammalia", "Primates", "Hominidae", "Homo", "sapiens"];
    var s = defs([]);
    for (var i = 0; i < 8; i++) {
      var w = 300 - i * 18, x = 20 + i * 9, y = 30 + i * 21;
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="9" fill="hsl(' +
        (268 - i * 16) + ',62%,' + (58 + i * 3) + '%)" filter="url(#bcShadow)"/>';
      s += '<text x="' + (x + 10) + '" y="' + (y + 13.5) + '" ' + LBW + ' font-size="11">' + ranks[i] + '</text>';
      s += '<text x="' + (x + w - 10) + '" y="' + (y + 13.5) + '" text-anchor="end" ' + LBW +
        ' font-size="11" opacity=".9">' + ex[i] + '</text>';
    }
    s += '<text x="170" y="206" text-anchor="middle" ' + LB + ' font-size="11.5">' +
      'each step down holds fewer kinds of living thing</text>';
    return frame("#f7f4ff", s);
  })();

  // ---- 10. DNA: a shaded double helix with paired bases ----
  var dDna = (function () {
    var s = defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + LB + ' font-size="14">A pairs with T, C pairs with G</text>';
    for (var i = 0; i < 11; i++) {
      var y = 44 + i * 14;
      var t = i / 10 * Math.PI * 2;
      var x1 = 130 + Math.sin(t) * 44, x2 = 130 - Math.sin(t) * 44;
      var front = Math.cos(t) > 0;
      var pair = (i % 2 === 0) ? ["A", "T"] : ["C", "G"];
      var c1 = (i % 2 === 0) ? "#e2453b" : "#4d96ff", c2 = (i % 2 === 0) ? "#f2b705" : "#2f9e44";
      s += '<line x1="' + x1.toFixed(1) + '" y1="' + y + '" x2="' + x2.toFixed(1) + '" y2="' + y +
        '" stroke="#c9c3d8" stroke-width="' + (front ? 4 : 2.4) + '" opacity="' + (front ? 1 : .55) + '"/>';
      s += '<circle cx="' + x1.toFixed(1) + '" cy="' + y + '" r="' + (front ? 7.5 : 5.5) + '" fill="' + c1 +
        '" opacity="' + (front ? 1 : .6) + '"/>';
      s += '<circle cx="' + x2.toFixed(1) + '" cy="' + y + '" r="' + (front ? 7.5 : 5.5) + '" fill="' + c2 +
        '" opacity="' + (front ? 1 : .6) + '"/>';
      if (front) {
        s += '<text x="' + x1.toFixed(1) + '" y="' + (y + 3.5) + '" text-anchor="middle" ' + LBW + ' font-size="9">' + pair[0] + '</text>';
        s += '<text x="' + x2.toFixed(1) + '" y="' + (y + 3.5) + '" text-anchor="middle" ' + LBW + ' font-size="9">' + pair[1] + '</text>';
      }
    }
    s += labR(174, 100, 232, 84, 88, "one rung = one pair");
    s += '<text x="334" y="150" text-anchor="end" ' + LB + ' font-size="11.5">DNA is coiled inside</text>';
    s += '<text x="334" y="166" text-anchor="end" ' + LB + ' font-size="11.5">the nucleus of a cell</text>';
    return frame("#f3f7ff", s);
  })();

  // ---- 11. natural selection over three generations ----
  var dEvo = (function () {
    var s = defs([["bcD1", "#e8dcc8", "#a3936f"], ["bcD2", "#c9b89a", "#7a6a48"], ["bcD3", "#a08b62", "#5c4d2c"]]);
    var gens = [
      { y: 60, n: 5, dark: 1, label: "1. lots of variation" },
      { y: 118, n: 5, dark: 3, label: "2. the hidden ones survive" },
      { y: 176, n: 5, dark: 4, label: "3. later, most are dark" }
    ];
    gens.forEach(function (g, gi) {
      for (var i = 0; i < g.n; i++) {
        var id = i < g.dark ? "bcD3" : (i < g.dark + 1 ? "bcD2" : "bcD1");
        s += orb(id, 44 + i * 34, g.y, 13);
      }
      s += '<text x="334" y="' + (g.y + 4) + '" text-anchor="end" ' + LB + ' font-size="11">' + g.label + '</text>';
    });
    s += '<text x="170" y="24" text-anchor="middle" ' + LB + ' font-size="13.5">' +
      'no single moth changes colour</text>';
    return frame("#f7f5f0", s);
  })();

  // ---- 12. an ecosystem: living and non-living together ----
  var dEco = frame("#eef8fb",
    defs([["bcSun2", "#fff3a8", "#f2b705"], ["bcTree", "#a8e6a1", "#2f7a3c"],
          ["bcWater", "#a8dcff", "#1f6feb"], ["bcRock2", "#d8dce4", "#8f93a3"]]) +
    '<rect x="0" y="150" width="340" height="64" fill="#dfeee0"/>' +
    orb("bcSun2", 292, 42, 22) +
    orb("bcTree", 84, 104, 34) + '<rect x="78" y="132" width="12" height="26" rx="4" fill="#8a5f2e"/>' +
    orb("bcTree", 150, 122, 22) + '<rect x="145" y="140" width="9" height="18" rx="4" fill="#8a5f2e"/>' +
    '<path d="M198 168 q34 -18 68 0 q-34 12 -68 0 z" fill="url(#bcWater)" filter="url(#bcShadow)"/>' +
    orb("bcRock2", 186, 148, 13) +
    '<text x="170" y="26" text-anchor="middle" ' + LB + ' font-size="14">an ecosystem is both at once</text>' +
    '<text x="86" y="196" text-anchor="middle" ' + LB + ' font-size="11">living: plants, animals</text>' +
    '<text x="248" y="196" text-anchor="middle" ' + LB + ' font-size="11">non-living: sun, water, rock</text>');

  // The shading kit is shared with Let's Learn Mathematics, so both courses draw in one style
  // rather than two. Keep anything here general; anything only biology needs stays private above.
  window.DiagramKit = {
    defs: defs, orb: orb, slab: slab, lab: lab, labR: labR, frame: frame,
    LB: LB, LBW: LBW, LN: LN, LNW: LNW
  };

  window.BIO_COURSE_ART = {
    what: dWhat, living: dLiving, plants: dPlant, groups: dGroups, cycles: dCycle, body: dBody,
    chain: dChain, cell: dCell, classify: dClass, dna: dDna, evolution: dEvo, ecosystem: dEco
  };

  // ==================== the twelve units ====================
  // Every unit: what it teaches, a diagram, a hands-on activity, a note written for the grown-up,
  // and a question bank big enough that the worksheet generator never repeats a sheet.
  LESSONS[31] = {

    whatis: {
      title: "1 · What Is Biology?", emoji: "🔎", band: "Kindergarten to Grade 1",
      intro: "Biology is the study of living things. The word says so: bio means life, and logy means the study of. A biologist is somebody whose job is to find out how living things work, from the tiniest bacteria to the biggest whale.",
      learn: [
        "Biology is one of the sciences. It is the one about life.",
        "Biologists study plants, animals, fungi, and things too small to see without a microscope.",
        "They study you too. You are a living thing, so you are part of biology.",
        "Biologists ask questions, look carefully, write down what they see, and try to explain it.",
        "Looking carefully is the most important skill. Most of biology started with somebody noticing something."
      ],
      diagram: dWhat,
      parentNote: "Start here even with an older child. Knowing that biology is one branch of science, alongside chemistry and physics, gives every later lesson somewhere to sit. If your child asks whether something counts as biology, the useful reply is another question: is it alive, or was it ever?",
      activity: "🔎 Ten Minutes in the Garden: sit outside, or at a window, and write or draw every living thing you can see in ten minutes. Then count them. Most people are surprised how high the number goes once they include the small things.",
      questions: [
        { q: "What does biology mean?", a: "The study of living things" },
        { q: "What does the word part 'bio' mean?", a: "Life" },
        { q: "What does the word part 'logy' mean?", a: "The study of" },
        { q: "What do we call somebody who studies living things?", a: "A biologist" },
        { q: "Is a tree part of biology?", a: "Yes" },
        { q: "Is a rock part of biology?", a: "No" },
        { q: "Are you part of biology?", a: "Yes" },
        { q: "Name one thing a biologist does.", a: "Looks carefully and writes down what they see" },
        { q: "Do biologists study things too small to see?", a: "Yes, using a microscope" },
        { q: "Biology is one of the ____.", a: "Sciences" },
        { q: "What is the most important skill in biology?", a: "Looking carefully" },
        { q: "Name a living thing you might see outside.", a: "A tree, a bird or an insect" }
      ],
      extraQuestions: [
        { q: "Which is bigger, the smallest or the biggest thing a biologist studies?", a: "Both are studied, from bacteria to whales" },
        { q: "What tool helps a biologist see very small living things?", a: "A microscope" },
        { q: "Why do biologists write things down?", a: "So they remember exactly what they saw" },
        { q: "Is a cloud studied in biology?", a: "No, it is not alive" },
        { q: "Are mushrooms studied in biology?", a: "Yes" },
        { q: "What kind of question does a biologist start with?", a: "One about how a living thing works" },
        { q: "Is your pet part of biology?", a: "Yes" },
        { q: "Biology is the science of ____.", a: "Life" }
      ]
    },

    living: {
      title: "2 · Living or Not Living?", emoji: "🌱", band: "Kindergarten to Grade 2",
      intro: "A rabbit is living. A rock is not. That sounds easy, but how do you actually tell? Scientists use a checklist, and anything that does all of the things on it is alive.",
      learn: [
        "Living things need energy. Animals get it from food and plants make their own from sunlight.",
        "Living things grow and change. A puppy becomes a dog, an acorn becomes an oak tree.",
        "Living things react to what is around them. A plant leans towards the light and you jump at a loud noise.",
        "Living things make more of themselves. Animals have young and plants make seeds.",
        "Living things get rid of waste, and they are all made of cells.",
        "One clue is not enough. A river moves and a fire grows, but neither is alive, because they do not do everything on the list."
      ],
      diagram: dLiving,
      parentNote: "The classic trap here is movement. Children decide a car is alive because it moves and a tree is not because it does not. Keep coming back to the whole list rather than a single test, and use the awkward examples on purpose: fire, a river, a seed in a packet, an egg.",
      activity: "🧺 The Sorting Tray: collect ten things from around the house and garden, including some tricky ones like a seed, a feather and a wooden spoon. Sort them into living, never alive, and once alive. That third pile is the interesting one.",
      questions: [
        { q: "Name one thing all living things need.", a: "Energy, or food" },
        { q: "Where do plants get their energy?", a: "From sunlight" },
        { q: "What do we call it when a living thing gets bigger?", a: "Growing" },
        { q: "Give an example of a living thing reacting to something.", a: "A plant leaning towards the light" },
        { q: "How do plants make more of themselves?", a: "They make seeds" },
        { q: "Is a rock alive?", a: "No" },
        { q: "Is a fire alive?", a: "No, even though it grows" },
        { q: "Are all living things made of cells?", a: "Yes" },
        { q: "Is a seed in a packet alive?", a: "Yes, it is alive but resting" },
        { q: "Is a wooden table alive?", a: "No, but it was once part of a living tree" },
        { q: "Why is one clue not enough to decide?", a: "Non-living things can do one thing on the list" },
        { q: "Name two things on the checklist for life.", a: "Any two of: needs energy, grows, reacts, reproduces" }
      ],
      extraQuestions: [
        { q: "Does a car move? Is it alive?", a: "It moves, but it is not alive" },
        { q: "What happens to a plant kept in the dark?", a: "It grows towards any light it can find" },
        { q: "Do living things get rid of waste?", a: "Yes" },
        { q: "Is a cloud alive?", a: "No" },
        { q: "Is an egg alive?", a: "Yes, if it is fertilised and growing" },
        { q: "Name something that was once alive but is not now.", a: "Wood, paper or a leaf" },
        { q: "Do all living things need water?", a: "Yes" },
        { q: "A puppy grows into a ____.", a: "Dog" }
      ]
    },

    plants: {
      title: "3 · Plants and How They Grow", emoji: "🌻", band: "Grades 1 to 3",
      intro: "Plants are the only living things that make their own food. Everything else on Earth depends on them for it, which makes them the most important living things there are.",
      learn: [
        "A plant has roots, a stem, leaves, and usually flowers. Every part has a job.",
        "Roots hold the plant in the ground and drink up water. The stem carries that water upwards and holds the plant up.",
        "Leaves make food. They use sunlight, water, and a gas from the air called carbon dioxide.",
        "That food-making is called photosynthesis. It makes sugar for the plant, and it lets out oxygen, which is the gas you breathe.",
        "Flowers make seeds. Pollen has to move from one flower to another first, usually carried by insects or by the wind.",
        "A seed holds a tiny plant and a packed lunch. Give it water and warmth and it starts to grow, which is called germination."
      ],
      diagram: dPlant,
      parentNote: "Two ideas do most of the work here. First, plants make food rather than take it in, which is genuinely strange and worth saying slowly. Second, the oxygen you breathe was let out by a plant. If a child takes only those two away, this unit has done its job.",
      activity: "🫘 The Bean in a Jar: line a clear jar with damp kitchen paper and tuck a dried bean between the paper and the glass. Keep the paper damp. Over a week the root comes first and grows down, then the shoot grows up. Draw it every day.",
      questions: [
        { q: "Which part of a plant drinks up water?", a: "The roots" },
        { q: "Which part of a plant makes food?", a: "The leaves" },
        { q: "What is food-making in a plant called?", a: "Photosynthesis" },
        { q: "What three things do leaves need to make food?", a: "Sunlight, water and carbon dioxide" },
        { q: "Which gas do plants let out?", a: "Oxygen" },
        { q: "Which part of a plant makes seeds?", a: "The flower" },
        { q: "What is the job of the stem?", a: "To hold the plant up and carry water" },
        { q: "What do we call a seed starting to grow?", a: "Germination" },
        { q: "What does a seed need to start growing?", a: "Water and warmth" },
        { q: "Who usually carries pollen between flowers?", a: "Insects, or the wind" },
        { q: "Are plants the only living things that make their own food?", a: "Yes" },
        { q: "Which grows first from a seed, the root or the shoot?", a: "The root" }
      ],
      extraQuestions: [
        { q: "Why are plants important to animals?", a: "Animals depend on them for food and oxygen" },
        { q: "What is inside a seed?", a: "A tiny plant and a store of food" },
        { q: "Which gas do leaves take in from the air?", a: "Carbon dioxide" },
        { q: "What would happen to a plant with no light?", a: "It could not make food and would die" },
        { q: "What is pollen for?", a: "Making seeds" },
        { q: "Name the four main parts of a plant.", a: "Roots, stem, leaves and flower" },
        { q: "Do roots grow up or down?", a: "Down" },
        { q: "What sugar does a plant make for itself?", a: "Its own food" }
      ]
    },

    groups: {
      title: "4 · Animal Groups", emoji: "🐾", band: "Grades 2 to 4",
      intro: "There are millions of kinds of animal, so scientists sort them into groups. The first cut is the simplest one: does it have a backbone, or not?",
      learn: [
        "An animal with a backbone is a vertebrate. One without is an invertebrate.",
        "Most animals are invertebrates. Insects, spiders, worms, snails and jellyfish all have no backbone.",
        "There are five groups of vertebrate: fish, amphibians, reptiles, birds and mammals.",
        "Mammals have hair or fur, and the mothers feed their young on milk. You are a mammal.",
        "Birds have feathers, a beak, and lay eggs. All birds have feathers and nothing else does.",
        "An insect has six legs and a body in three parts. A spider has eight legs and two parts, so a spider is not an insect."
      ],
      diagram: dGroups,
      parentNote: "Sorting is the real skill here, not memorising. Ask which group something belongs to and then, more usefully, how they know. A child who says 'a bat is a mammal because it has fur and feeds milk' has understood something. One who says 'a bat is a bird because it flies' has told you exactly what to work on next.",
      activity: "🐾 Twenty Questions, Animal Edition: one person thinks of an animal. Everyone else may only ask yes or no questions, starting with 'does it have a backbone?'. Good questions cut the possibilities in half each time.",
      questions: [
        { q: "What do we call an animal with a backbone?", a: "A vertebrate" },
        { q: "What do we call an animal without a backbone?", a: "An invertebrate" },
        { q: "How many groups of vertebrate are there?", a: "Five" },
        { q: "Name the five vertebrate groups.", a: "Fish, amphibians, reptiles, birds and mammals" },
        { q: "Which group are you in?", a: "Mammals" },
        { q: "What covers a bird and nothing else?", a: "Feathers" },
        { q: "How do mammal mothers feed their young?", a: "With milk" },
        { q: "How many legs does an insect have?", a: "Six" },
        { q: "How many legs does a spider have?", a: "Eight" },
        { q: "Is a spider an insect?", a: "No" },
        { q: "Are there more vertebrates or invertebrates?", a: "Invertebrates" },
        { q: "Which group does a frog belong to?", a: "Amphibians" }
      ],
      extraQuestions: [
        { q: "Is a bat a bird or a mammal?", a: "A mammal" },
        { q: "Is a whale a fish or a mammal?", a: "A mammal" },
        { q: "How many body parts does an insect have?", a: "Three" },
        { q: "Name an invertebrate.", a: "An insect, worm, snail or jellyfish" },
        { q: "Do all mammals have hair or fur?", a: "Yes" },
        { q: "Which group does a snake belong to?", a: "Reptiles" },
        { q: "What is the first question to ask when sorting an animal?", a: "Does it have a backbone" },
        { q: "Do birds lay eggs?", a: "Yes" }
      ]
    },

    cycles: {
      title: "5 · Life Cycles", emoji: "🦋", band: "Grades 2 to 4",
      intro: "Every living thing is born, grows, has young of its own, and dies. That circle is a life cycle. Some animals change so completely along the way that the young and the adult look like different creatures altogether.",
      learn: [
        "A life cycle goes round: born, grow, have young, and the young start it all again.",
        "A butterfly goes egg, caterpillar, chrysalis, butterfly. The big change inside the chrysalis is called metamorphosis.",
        "The caterpillar and the butterfly are the same animal. It does not turn into a different one.",
        "A frog goes egg, tadpole, froglet, frog. The tadpole grows legs and loses its tail.",
        "Some animals change much less. A baby grasshopper looks like a small adult and just gets bigger.",
        "Plants have life cycles too: seed, seedling, grown plant, flower, seed again."
      ],
      diagram: dCycle,
      parentNote: "Children often think the caterpillar dies and a butterfly appears. It is the same individual animal the whole way through, rebuilt inside the chrysalis. Saying that plainly clears up a surprising amount. If you can watch tadpoles in spring, do; nothing on a page competes with it.",
      activity: "🦋 The Four Card Shuffle: draw the four butterfly stages on four cards and the four frog stages on four more. Shuffle both sets together and race to lay them out as two correct circles. There is no first card in a circle, which is the whole point.",
      questions: [
        { q: "What do we call the circle of birth, growth and young?", a: "A life cycle" },
        { q: "What are the four stages of a butterfly?", a: "Egg, caterpillar, chrysalis, butterfly" },
        { q: "What is the big change inside a chrysalis called?", a: "Metamorphosis" },
        { q: "Is the caterpillar the same animal as the butterfly?", a: "Yes" },
        { q: "What are the stages of a frog?", a: "Egg, tadpole, froglet, frog" },
        { q: "What does a tadpole grow as it changes?", a: "Legs" },
        { q: "What does a tadpole lose?", a: "Its tail" },
        { q: "What is a young butterfly called?", a: "A caterpillar" },
        { q: "Does a baby grasshopper look like an adult?", a: "Yes, only smaller" },
        { q: "What is the first stage of a plant life cycle?", a: "A seed" },
        { q: "Where does a butterfly lay its eggs?", a: "On a leaf" },
        { q: "Why is a life cycle drawn as a circle?", a: "Because it starts again with the young" }
      ],
      extraQuestions: [
        { q: "What does a caterpillar spend most of its time doing?", a: "Eating" },
        { q: "Where do frogs lay their eggs?", a: "In water" },
        { q: "What is frog spawn?", a: "A mass of frog eggs" },
        { q: "Which stage comes after the egg for a butterfly?", a: "The caterpillar" },
        { q: "Does a chrysalis move about?", a: "No, it stays still" },
        { q: "What is the last stage of a plant's cycle before seeds?", a: "The flower" },
        { q: "Do all animals change shape as they grow?", a: "No, some just get bigger" },
        { q: "Name an animal whose young look like the adult.", a: "A grasshopper, or a cat" }
      ]
    },

    body: {
      title: "6 · Your Amazing Body", emoji: "🫀", band: "Grades 3 to 5",
      intro: "Your body is doing an enormous amount right now without being asked. Your heart is beating, your lungs are filling, your stomach is working, and your brain is running all of it while you read this.",
      learn: [
        "Your body is organised into systems, and each one has a job. Scientists usually count about eleven of them.",
        "Your skeleton holds you up and protects the soft parts. An adult has 206 bones. A baby is born with about 300, and some of them join together as it grows.",
        "Your heart pumps blood. It has four chambers, and it beats about 100,000 times a day.",
        "Your lungs take in oxygen and let out carbon dioxide. That swap is why you breathe.",
        "Your digestive system breaks food down: mouth, then a tube called the oesophagus, then stomach, then the small and large intestines.",
        "Your brain is in charge. It sends and receives messages along nerves, and it is protected by your skull."
      ],
      diagram: dBody,
      parentNote: "The number of bones is a good chance to teach something bigger than a fact. A baby really does have more bones than you, because some fuse as they grow. Facts that change with age are more interesting than facts that do not, and they make it clear that a body is a growing thing rather than a fixed machine.",
      activity: "🫀 Find Your Pulse: put two fingers on your wrist below the thumb, or on your neck beside the windpipe, and count the beats in fifteen seconds. Multiply by four. Now run on the spot for a minute and do it again. Write down both numbers and talk about why they differ.",
      questions: [
        { q: "How many bones does an adult have?", a: "206" },
        { q: "Does a baby have more or fewer bones than an adult?", a: "More" },
        { q: "Why does the number of bones go down?", a: "Some bones join together as you grow" },
        { q: "How many chambers does the heart have?", a: "Four" },
        { q: "What does the heart do?", a: "Pumps blood around the body" },
        { q: "Which gas do your lungs take in?", a: "Oxygen" },
        { q: "Which gas do your lungs let out?", a: "Carbon dioxide" },
        { q: "What is the job of the skeleton?", a: "To hold you up and protect you" },
        { q: "Which organ is in charge of the body?", a: "The brain" },
        { q: "What protects the brain?", a: "The skull" },
        { q: "Where does food go after the mouth?", a: "Down the oesophagus to the stomach" },
        { q: "What carries messages around your body?", a: "Nerves" }
      ],
      extraQuestions: [
        { q: "About how many times does a heart beat in a day?", a: "About 100,000" },
        { q: "What happens to your pulse when you run?", a: "It gets faster" },
        { q: "Why does your pulse speed up during exercise?", a: "Your muscles need more oxygen" },
        { q: "Roughly how many body systems do scientists count?", a: "About eleven" },
        { q: "Which organ breaks food down with acid?", a: "The stomach" },
        { q: "Name the two intestines.", a: "The small and the large intestine" },
        { q: "What is the tube from mouth to stomach called?", a: "The oesophagus" },
        { q: "Where in the body would you find your ribs?", a: "Around the chest" }
      ]
    },

    chains: {
      title: "7 · Habitats and Food Chains", emoji: "🌾", band: "Grades 4 to 6",
      intro: "A habitat is the place an animal or plant lives, and it has everything that living thing needs. Inside a habitat, energy passes from one living thing to the next, and drawing that as a chain shows you who depends on whom.",
      learn: [
        "A habitat provides food, water, shelter and a place to raise young. A pond, a wood and a desert are all habitats.",
        "An adaptation is a feature that helps something survive where it lives. A camel's hump and a cactus's spines are both adaptations.",
        "Every food chain starts with a plant, because plants make their own food. A plant in a chain is called a producer.",
        "Animals that eat are called consumers. A herbivore eats plants, a carnivore eats animals, and an omnivore eats both.",
        "The arrow in a food chain means 'is eaten by'. It always points the way the energy travels.",
        "Decomposers such as fungi and worms break down dead things and return the goodness to the soil, which is where a food chain quietly starts again."
      ],
      diagram: dChain,
      parentNote: "The arrow direction is the single most common mistake, and it matters, because it is really about energy rather than eating. Grass, arrow, rabbit, arrow, fox. If your child draws the arrows pointing at the mouth of the eater, that is worth correcting every time until it sticks.",
      activity: "🌾 Build the Chain, Then Break It: write the parts of a local food chain on separate cards and lay them out with arrows. Now remove one card and talk about what happens to everything else. Removing the plant is the most dramatic, and shows why producers matter.",
      questions: [
        { q: "What is a habitat?", a: "The place where a living thing lives" },
        { q: "Name four things a habitat provides.", a: "Food, water, shelter and a place for young" },
        { q: "What is an adaptation?", a: "A feature that helps something survive where it lives" },
        { q: "What does every food chain start with?", a: "A plant" },
        { q: "What is a plant called in a food chain?", a: "A producer" },
        { q: "What does the arrow in a food chain mean?", a: "Is eaten by" },
        { q: "What is an animal that eats only plants called?", a: "A herbivore" },
        { q: "What is an animal that eats only animals called?", a: "A carnivore" },
        { q: "What is an animal that eats both called?", a: "An omnivore" },
        { q: "Name a decomposer.", a: "A fungus or a worm" },
        { q: "What do decomposers do?", a: "Break down dead things" },
        { q: "Why are producers so important?", a: "They make the food all the others need" }
      ],
      extraQuestions: [
        { q: "Which way does the energy travel in a food chain?", a: "The way the arrows point" },
        { q: "Give an example of an adaptation.", a: "A camel's hump, or a cactus's spines" },
        { q: "What happens if the plants are removed from a chain?", a: "Everything above them runs out of food" },
        { q: "Is a fox a herbivore or a carnivore?", a: "A carnivore" },
        { q: "Are humans herbivores, carnivores or omnivores?", a: "Omnivores" },
        { q: "Name a habitat.", a: "A pond, a wood or a desert" },
        { q: "Where do decomposers return goodness to?", a: "The soil" },
        { q: "What is another name for an animal that eats?", a: "A consumer" }
      ]
    },

    cells: {
      title: "8 · Cells: The Building Blocks", emoji: "🔬", band: "Grades 5 to 8",
      intro: "Every living thing is built from cells. Some living things are a single cell. You are made of trillions of them, and almost all are far too small to see without a microscope.",
      learn: [
        "Cell theory says three things: all living things are made of cells, the cell is the smallest unit that is alive, and every cell comes from another cell.",
        "Animal and plant cells share parts. The nucleus is the control centre and holds the DNA. The cytoplasm is the jelly where things happen. The cell membrane is the skin that decides what goes in and out.",
        "Mitochondria release energy from food. Cells that need a lot of energy, such as muscle cells, have many of them.",
        "Plant cells have three extra parts: a stiff cell wall for support, chloroplasts that make food from sunlight, and one large vacuole full of water.",
        "Cells come in shapes that suit their job. A nerve cell is long and thin for carrying messages. A red blood cell is a flat disc so it can slip through narrow vessels.",
        "Groups of similar cells make a tissue, tissues make an organ, and organs work together as a system."
      ],
      diagram: dCell,
      parentNote: "Scale is what makes this hard. Cells are not small like a grain of rice is small. A useful comparison: if one of your cells were the size of a full stop on this page, you would be about as tall as a mountain. Getting the scale wrong makes every later idea slippery.",
      activity: "🔬 Onion Skin: peel the thin, clear layer from between two layers of an onion, lay it flat on a plate with a drop of water, and look at it with any magnifier you have. Even a phone camera zoomed right in shows the brick-like pattern of cell walls.",
      questions: [
        { q: "What is the smallest unit of life?", a: "The cell" },
        { q: "Which part of a cell is the control centre?", a: "The nucleus" },
        { q: "What is stored in the nucleus?", a: "DNA" },
        { q: "What is the jelly inside a cell called?", a: "Cytoplasm" },
        { q: "What decides what goes in and out of a cell?", a: "The cell membrane" },
        { q: "Which part releases energy from food?", a: "The mitochondria" },
        { q: "Name a part only plant cells have.", a: "A cell wall, chloroplast or large vacuole" },
        { q: "What do chloroplasts do?", a: "Make food using sunlight" },
        { q: "Do animal cells have a cell wall?", a: "No" },
        { q: "What do groups of similar cells make?", a: "A tissue" },
        { q: "What do tissues make?", a: "An organ" },
        { q: "Where does every cell come from?", a: "Another cell" }
      ],
      extraQuestions: [
        { q: "Why is a nerve cell long and thin?", a: "To carry messages a long way" },
        { q: "Why is a red blood cell a flat disc?", a: "So it can fit through narrow vessels" },
        { q: "Which cells have the most mitochondria?", a: "Cells that need a lot of energy, like muscle" },
        { q: "What holds a plant cell rigid?", a: "The cell wall" },
        { q: "What fills the large vacuole in a plant cell?", a: "Water" },
        { q: "Name the three parts of cell theory.", a: "All life is cells, cells are the unit, cells come from cells" },
        { q: "Are all living things made of many cells?", a: "No, some are just one cell" },
        { q: "What tool do you need to see most cells?", a: "A microscope" }
      ]
    },

    classify: {
      title: "9 · Classifying Life", emoji: "🗂️", band: "Grades 6 to 8",
      intro: "There are millions of kinds of living thing, and biologists sort them into a system of nested groups. Each step down the ladder holds fewer kinds, and members that are more alike.",
      learn: [
        "The ranks run domain, kingdom, phylum, class, order, family, genus, species. Species is the smallest.",
        "Every species has a two word scientific name: the genus with a capital letter, then the species in lower case, both in italics. Humans are Homo sapiens.",
        "Scientific names are used worldwide, so a biologist anywhere knows exactly which living thing you mean, whatever language they speak.",
        "There are three domains: Bacteria, Archaea and Eukarya. Every living thing sits in one of them.",
        "How many kingdoms there are depends on which system you use. School books often teach five, some teach six, and biologists still argue about it. It is a way of organising, not a law of nature.",
        "A species is usually defined as a group whose members can breed together and produce young that can themselves have young."
      ],
      diagram: dClass,
      parentNote: "This unit is a good place to show that science changes its mind. The number of kingdoms genuinely differs between textbooks, and that is not a mistake, it is what an active field looks like. A child who learns that classification is a human tool, rather than a fact handed down, is better prepared for everything that follows.",
      activity: "🗂️ Classify the Kitchen: pick twenty things from a cupboard and build your own nested system for them, with at least four levels. Then swap with somebody and try to file a new object into their system. Arguing about where it goes is exactly what taxonomists do.",
      questions: [
        { q: "What is the smallest rank in classification?", a: "Species" },
        { q: "What is the largest rank?", a: "Domain" },
        { q: "Name the ranks in order from domain down.", a: "Domain, kingdom, phylum, class, order, family, genus, species" },
        { q: "How many words are in a scientific name?", a: "Two" },
        { q: "What is the scientific name for humans?", a: "Homo sapiens" },
        { q: "Which part of a scientific name has a capital letter?", a: "The genus" },
        { q: "How many domains are there?", a: "Three" },
        { q: "Name the three domains.", a: "Bacteria, Archaea and Eukarya" },
        { q: "Why are scientific names useful?", a: "They mean the same in every language" },
        { q: "Do all books agree on the number of kingdoms?", a: "No" },
        { q: "What is a species?", a: "A group that can breed and have fertile young" },
        { q: "Which rank is just above species?", a: "Genus" }
      ],
      extraQuestions: [
        { q: "Which domain are humans in?", a: "Eukarya" },
        { q: "Which kingdom are humans in?", a: "Animalia" },
        { q: "How should a scientific name be written?", a: "In italics, genus capitalised" },
        { q: "Is classification a human invention or a natural law?", a: "A human way of organising" },
        { q: "Which rank holds more kinds, order or family?", a: "Order" },
        { q: "What is the genus of a lion, Panthera leo?", a: "Panthera" },
        { q: "Why does classification sometimes change?", a: "New evidence changes how we group things" },
        { q: "Which domain do bacteria belong to?", a: "Bacteria" }
      ]
    },

    genes: {
      title: "10 · Genes and Inheritance", emoji: "🧬", band: "Grades 7 to 10",
      intro: "You look a little like the people you came from, and that is not a coincidence. Instructions are passed from parents to offspring, written in a molecule called DNA.",
      learn: [
        "DNA is a long molecule shaped like a twisted ladder, called a double helix. It sits inside the nucleus of a cell.",
        "The rungs of the ladder are made from four bases: A, T, C and G. A always pairs with T, and C always pairs with G.",
        "A gene is a section of DNA that carries the instructions for one thing, such as a protein.",
        "DNA is packed into chromosomes. A human body cell has 46 chromosomes, arranged as 23 pairs.",
        "You get one chromosome of each pair from each parent, which is why you can resemble both.",
        "Some versions of a gene are dominant and show up whenever they are present. Others are recessive and only show when both copies are the recessive one. Gregor Mendel worked this out by breeding pea plants in the 1860s."
      ],
      diagram: dDna,
      parentNote: "Two cautions. First, most traits are not decided by a single gene; eye colour is far more complicated than the simple version taught with Punnett squares, so treat the pea-plant examples as a model rather than the whole truth. Second, inherited does not mean unchangeable: what you eat, do and practise matters too.",
      activity: "🧬 The Family Trait Survey: pick three traits that are easy to spot, such as whether earlobes hang free or are attached. Survey everybody you can and tally the results. Then look at which traits run in your family and which do not.",
      questions: [
        { q: "What shape is DNA?", a: "A double helix, like a twisted ladder" },
        { q: "Where in a cell is DNA found?", a: "In the nucleus" },
        { q: "How many bases are there in DNA?", a: "Four" },
        { q: "Name the four bases.", a: "A, T, C and G" },
        { q: "Which base pairs with A?", a: "T" },
        { q: "Which base pairs with C?", a: "G" },
        { q: "What is a gene?", a: "A section of DNA with instructions" },
        { q: "How many chromosomes are in a human body cell?", a: "46" },
        { q: "How many pairs is that?", a: "23" },
        { q: "How many chromosomes come from each parent?", a: "One of each pair" },
        { q: "Which kind of gene version shows whenever it is present?", a: "Dominant" },
        { q: "Who worked out inheritance using pea plants?", a: "Gregor Mendel" }
      ],
      extraQuestions: [
        { q: "What does a recessive version need in order to show?", a: "Both copies must be recessive" },
        { q: "What are chromosomes made of?", a: "DNA" },
        { q: "Is eye colour decided by just one gene?", a: "No, several genes are involved" },
        { q: "Does inherited mean nothing can change it?", a: "No, what you do matters too" },
        { q: "What did Mendel breed for his experiments?", a: "Pea plants" },
        { q: "Roughly when did Mendel do his work?", a: "The 1860s" },
        { q: "What are the rungs of the DNA ladder called?", a: "Base pairs" },
        { q: "Why do you resemble both parents?", a: "You get genes from each of them" }
      ]
    },

    evolution: {
      title: "11 · Evolution and Natural Selection", emoji: "🦕", band: "Grades 8 to 11",
      intro: "Living things change over very long spans of time. Charles Darwin explained how, and the explanation is simpler than most people expect, though it is easy to get subtly wrong.",
      learn: [
        "Within any species, individuals vary. Some are faster, some better hidden, some able to eat a wider range of food.",
        "More young are born than can possibly survive, so there is competition.",
        "Individuals whose variations suit their surroundings tend to survive longer and have more young, and they pass those variations on. That is natural selection.",
        "Over very many generations the whole population shifts. No individual changes: what changes is which individuals are common.",
        "Fossils record this. Layers of rock hold the remains of living things from different times, and deeper usually means older.",
        "Charles Darwin published his explanation in 1859, after years of evidence gathering including his voyage on HMS Beagle."
      ],
      diagram: dEvo,
      parentNote: "The commonest error is thinking an individual animal evolves to suit its surroundings, as though a moth darkens because the trees do. It does not. The population changes because darker moths survived to have more young. Listen for 'it changed itself' or 'it needed to' and gently rephrase; that one correction is most of the unit.",
      activity: "🦕 The Bean Hunt: scatter dried beans of two colours over a patterned rug or a patch of grass and give somebody ten seconds to pick up as many as they can. Count what is left. Repeat three times, starting each round with the survivors doubled. The colour that blends in wins, without any bean changing at all.",
      questions: [
        { q: "What do we call the differences between individuals of a species?", a: "Variation" },
        { q: "What is natural selection?", a: "Better suited individuals survive and have more young" },
        { q: "Who explained natural selection?", a: "Charles Darwin" },
        { q: "In which year did Darwin publish his explanation?", a: "1859" },
        { q: "What was the name of Darwin's ship?", a: "HMS Beagle" },
        { q: "Does an individual animal evolve during its life?", a: "No" },
        { q: "What changes over many generations?", a: "Which individuals are common in the population" },
        { q: "What evidence in rock shows life from the past?", a: "Fossils" },
        { q: "In rock layers, which are usually older?", a: "The deeper ones" },
        { q: "Why is there competition between living things?", a: "More young are born than can survive" },
        { q: "What is passed on to the young?", a: "The parents' variations, through genes" },
        { q: "Does evolution happen quickly or slowly?", a: "Slowly, over many generations" }
      ],
      extraQuestions: [
        { q: "If dark moths survive better, what happens to the population?", a: "More of it becomes dark over time" },
        { q: "Can an animal decide to evolve?", a: "No" },
        { q: "What is a fossil?", a: "The preserved remains or trace of a living thing" },
        { q: "Name one thing that varies within a species.", a: "Speed, colour or size" },
        { q: "Does natural selection need genes to work?", a: "Yes, variations must be passed on" },
        { q: "What did Darwin spend years doing before publishing?", a: "Gathering evidence" },
        { q: "Are all variations helpful?", a: "No, many make no difference or are harmful" },
        { q: "What happens to variations that do not help?", a: "They become less common over time" }
      ]
    },

    ecosystems: {
      title: "12 · Ecosystems and Keeping Them Healthy", emoji: "🌍", band: "Grades 9 to 12",
      intro: "An ecosystem is everything in a place, living and non-living, and the way it all interacts. The last rung of this ladder is about how those systems hold together, and what happens when they do not.",
      learn: [
        "An ecosystem includes the living parts, such as plants and animals, and the non-living parts, such as sunlight, water, soil and air.",
        "Food chains join into food webs, because most living things eat more than one thing and are eaten by more than one thing.",
        "Biodiversity means the variety of living things in a place. A system with more variety usually recovers better from damage, because more paths through the web remain.",
        "Matter cycles round. Carbon, water and nitrogen all move between living things, the air, the water and the soil, again and again.",
        "Energy does not cycle. It arrives from the Sun, passes along the chain, and is lost as heat at every step, which is why chains are short.",
        "Human choices change ecosystems, through habitat loss, pollution and a changing climate. Conservation is the work of protecting and restoring them, and it succeeds often enough to be worth doing."
      ],
      diagram: dEco,
      parentNote: "The distinction worth landing here is that matter cycles but energy does not. It explains why food chains are rarely more than four or five links, and it is the idea that turns a list of facts into a system a student can reason about. This is also the natural point to talk about what your own family can actually do, which beats despair.",
      activity: "🌍 Survey a Square Metre: mark out one square metre of garden, park or verge and record every living thing in it, plus the non-living conditions: sun or shade, damp or dry, bare or covered. Do the same on a different square and compare. Two metres apart can be two different worlds.",
      questions: [
        { q: "What is an ecosystem?", a: "The living and non-living things in a place and how they interact" },
        { q: "Name a non-living part of an ecosystem.", a: "Sunlight, water, soil or air" },
        { q: "What do you call food chains joined together?", a: "A food web" },
        { q: "Why do food chains join into webs?", a: "Most living things eat more than one thing" },
        { q: "What does biodiversity mean?", a: "The variety of living things in a place" },
        { q: "Why does more biodiversity help?", a: "The system recovers better from damage" },
        { q: "Name something that cycles through an ecosystem.", a: "Carbon, water or nitrogen" },
        { q: "Does energy cycle round an ecosystem?", a: "No" },
        { q: "Where does an ecosystem's energy come from?", a: "The Sun" },
        { q: "What happens to energy at each step of a chain?", a: "Some is lost as heat" },
        { q: "Why are food chains short?", a: "Energy is lost at every step" },
        { q: "What is conservation?", a: "Protecting and restoring ecosystems" }
      ],
      extraQuestions: [
        { q: "Name a way humans change ecosystems.", a: "Habitat loss, pollution or climate change" },
        { q: "What is habitat loss?", a: "When the place a species lives is destroyed" },
        { q: "Does matter cycle or get used up?", a: "It cycles round again and again" },
        { q: "Which lasts longer in an ecosystem, matter or energy?", a: "Matter, because energy is lost as heat" },
        { q: "Why is a wood with many species more robust?", a: "More paths through the food web remain" },
        { q: "What returns nutrients to the soil?", a: "Decomposers" },
        { q: "Can damaged ecosystems recover?", a: "Yes, often, with protection" },
        { q: "Name one thing a family can do to help.", a: "Plant for pollinators, or waste less" }
      ]
    }
  };
})();
