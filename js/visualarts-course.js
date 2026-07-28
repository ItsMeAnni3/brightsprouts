// BrightSprouts Academy: "Let's Learn Visual Arts" (LESSONS[34]).
//
// One ladder from Kindergarten to Grade 12: what visual art is, line, shape and form, colour,
// texture, value, space and perspective, composition, drawing from life, painting, printmaking
// and sculpture, and finally looking at art and talking about it.
//
// This is NOT the Visual Art subject inside each grade (LESSONS[g].art), which is one grade's
// worth of practice. This is the whole road, in order, with a project at every step.
//
// Written without em dashes.
//
// ACCURACY RULES, because art teaching is full of half-truths that stick for life:
//  * "The primary colours are red, yellow and blue" is only true for PAINT. For light they are
//    red, green and blue, and for a printer they are cyan, magenta and yellow. The course says
//    which system it means every single time, and unit 4 teaches the difference on purpose.
//  * Artwork facts are never typed from memory. Every artist, year and museum in WORKS was
//    checked against Wikidata on 2026-07-28, and the Q-number is kept so it can be rechecked.
//    audit_vacourse.html generates the history questions from that same data, so a generated
//    question and its answer are correct by construction.
//  * Where a work exists in several versions (The Scream, Sunflowers, Water Lilies), the lesson
//    says so rather than pretending there is one.
//  * Where the textbooks disagree, say so. Nearly every list names seven elements of art, but
//    the list of design principles varies, so the course says "most lists include" instead of
//    inventing a number.
(function () {
  if (typeof LESSONS === "undefined") return;

  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }

  // Ids are global to the page, so every diagram defines its own marker and prefixes its own
  // gradients. Two diagrams sharing an id render in each other's colours.
  function arrowDef(id, col) {
    return '<defs><marker id="' + id + '" markerWidth="9" markerHeight="9" refX="7" refY="4.5" ' +
      'orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="' + col + '"/></marker></defs>';
  }

  // ==================== verified data ====================

  // Checked against Wikidata 2026-07-28: creator (P170), inception (P571), location (P276/P195).
  // The Q-number is the receipt. Re-run scratchpad/verify_art3.py to check them again.
  var WORKS = [
    { qid: "Q12418",    title: "Mona Lisa",                   artist: "Leonardo da Vinci", year: 1503,
      where: "the Louvre in Paris",                kind: "painting" },
    { qid: "Q45585",    title: "The Starry Night",            artist: "Vincent van Gogh",  year: 1889,
      where: "the Museum of Modern Art in New York", kind: "painting" },
    { qid: "Q28924776", title: "The Great Wave off Kanagawa", artist: "Katsushika Hokusai", year: 1830,
      where: "several museums, because prints exist in many copies", kind: "woodblock print" },
    { qid: "Q175036",   title: "Guernica",                    artist: "Pablo Picasso",     year: 1937,
      where: "the Reina Sofia museum in Madrid",   kind: "painting" },
    { qid: "Q25729",    title: "The Persistence of Memory",   artist: "Salvador Dali",     year: 1931,
      where: "the Museum of Modern Art in New York", kind: "painting" },
    { qid: "Q185372",   title: "Girl with a Pearl Earring",   artist: "Johannes Vermeer",  year: 1665,
      where: "the Mauritshuis in the Netherlands", kind: "painting" },
    { qid: "Q18891156", title: "The Scream",                  artist: "Edvard Munch",      year: 1893,
      where: "the National Gallery of Norway",     kind: "painting",
      note: "Munch made several versions of this one, so you may see a slightly different picture." },
    { qid: "Q464782",   title: "American Gothic",             artist: "Grant Wood",        year: 1930,
      where: "the Art Institute of Chicago",       kind: "painting" },
    { qid: "Q1044742",  title: "A Sunday Afternoon on the Island of La Grande Jatte",
      artist: "Georges Seurat", year: 1884,
      where: "the Art Institute of Chicago",       kind: "painting" },
    { qid: "Q219831",   title: "The Night Watch",             artist: "Rembrandt",         year: 1642,
      where: "the Rijksmuseum in Amsterdam",       kind: "painting" }
  ];
  window.VA_WORKS = WORKS;

  // Colour facts live here once, so the lessons, the diagrams and the worksheet generator can
  // never disagree with each other.
  var PAINT_MIX = [["red", "yellow", "orange"], ["yellow", "blue", "green"], ["blue", "red", "purple"]];
  var LIGHT_MIX = [["red", "green", "yellow"], ["green", "blue", "cyan"], ["blue", "red", "magenta"]];
  var COMPLEMENT = [["red", "green"], ["blue", "orange"], ["yellow", "purple"]];
  var WARM = ["red", "orange", "yellow"];
  var COOL = ["blue", "green", "purple"];
  var ELEMENTS7 = ["line", "shape", "form", "space", "value", "colour", "texture"];
  window.VA_COLOUR = { paint: PAINT_MIX, light: LIGHT_MIX, complement: COMPLEMENT,
                       warm: WARM, cool: COOL, elements: ELEMENTS7 };

  // ==================== diagrams ====================

  // a pie wedge, used for the colour wheel
  function wedge(cx, cy, r, a0, a1, fill) {
    function pt(a) {
      var t = (a - 90) * Math.PI / 180;
      return [(cx + r * Math.cos(t)).toFixed(1), (cy + r * Math.sin(t)).toFixed(1)];
    }
    var s = pt(a0), e = pt(a1);
    return '<path d="M' + cx + ' ' + cy + ' L' + s[0] + ' ' + s[1] + ' A' + r + ' ' + r +
      ' 0 0 1 ' + e[0] + ' ' + e[1] + ' Z" fill="' + fill + '"/>';
  }

  var dWhat = art(function (A) {
    var s = A.defs([["vaW1", "#ffd9a8", "#e0902b"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">visual art is art you look at</text>';
    // a framed painting
    s += A.slab(18, 46, 92, 82, "#8a5f2e", "#c99a5e", 6);
    s += '<rect x="25" y="53" width="78" height="68" fill="#cfe8ff"/>';
    s += '<path d="M25 106 h78 v15 h-78 z" fill="#8fd39a"/>';
    s += '<circle cx="86" cy="70" r="9" fill="#ffd166"/>';
    s += '<path d="M34 106 l16 -26 l16 26 z" fill="#7fa8d8"/>';
    // a sculpture on a plinth
    s += A.slab(132, 104, 76, 24, "#d8dce4", "#ffffff", 5);
    s += A.orb("vaW1", 170, 74, 22);
    s += '<rect x="158" y="90" width="24" height="18" rx="4" fill="#e0902b"/>';
    // a pot
    s += '<path d="M244 128 q-16 -30 6 -44 q-10 -10 4 -16 q14 6 4 16 q22 14 6 44 z" fill="#c96a4a"/>';
    s += '<path d="M238 112 q28 8 44 0" stroke="#8a3f2a" stroke-width="2.5" fill="none"/>';
    s += '<ellipse cx="262" cy="130" rx="26" ry="5" fill="#2d2a4a" opacity=".14"/>';
    s += '<text x="64" y="150" text-anchor="middle" ' + A.LB + ' font-size="12">painting</text>';
    s += '<text x="170" y="150" text-anchor="middle" ' + A.LB + ' font-size="12">sculpture</text>';
    s += '<text x="262" y="150" text-anchor="middle" ' + A.LB + ' font-size="12">pottery</text>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="11.5">drawing, printing and photography count too</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">the seven elements are the ingredients of all of it</text>';
    return A.frame("#fdf6ff", s);
  });

  var dLine = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">a line is a dot that went for a walk</text>';
    var ST = 'stroke="#5d3fa0" fill="none" stroke-linecap="round"';
    var rows = [
      ['<path d="M28 56 h96" ' + ST + ' stroke-width="4"/>', "straight"],
      ['<path d="M28 92 q24 -22 48 0 q24 22 48 0" ' + ST + ' stroke-width="4"/>', "curved"],
      ['<path d="M28 128 l16 -14 l16 14 l16 -14 l16 14 l16 -14 l16 14" ' + ST + ' stroke-width="4"/>', "zigzag"],
      ['<path d="M190 56 h74" ' + ST + ' stroke-width="9"/>', "thick"],
      ['<path d="M190 92 h74" ' + ST + ' stroke-width="1.6"/>', "thin"],
      ['<path d="M190 128 h74" ' + ST + ' stroke-width="4" stroke-dasharray="9 8"/>', "dotted"]
    ];
    rows.forEach(function (r, i) {
      s += r[0];
      var right = i >= 3;
      s += '<text x="' + (right ? 274 : 132) + '" y="' + ([56, 92, 132][i % 3] + 5) + '" ' +
        A.LB + ' font-size="11">' + r[1] + '</text>';
    });
    s += '<text x="170" y="170" text-anchor="middle" ' + A.LB + ' font-size="11.5">every drawing starts as lines</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">a thick line shouts, a thin line whispers</text>';
    return A.frame("#f4faff", s);
  });

  var dShape = art(function (A) {
    var s = A.defs([["vaS1", "#a8d8ff", "#1f6feb"], ["vaS2", "#ffc8e0", "#c9184a"],
                    ["vaS3", "#c9f0c0", "#3f9c4a"]]);
    s += arrowDef("vaShAr", "#5d3fa0");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a shape is flat, a form is solid</text>';
    // flat shapes
    s += '<circle cx="56" cy="66" r="21" fill="#7fb8e8"/>';
    s += '<rect x="149" y="45" width="42" height="42" fill="#f28fb0"/>';
    s += '<path d="M284 45 l22 42 h-44 z" fill="#8fd39a"/>';
    // solid forms
    s += A.orb("vaS1", 56, 150, 22);
    s += '<path d="M149 130 l16 -12 h42 v42 l-16 12 z" fill="#c9184a" opacity=".55"/>';
    s += '<rect x="149" y="130" width="42" height="42" fill="url(#vaS2)"/>';
    s += '<path d="M284 128 l24 44 h-48 z" fill="url(#vaS3)"/>';
    s += '<ellipse cx="284" cy="172" rx="24" ry="6" fill="#2d2a4a" opacity=".14"/>';
    [56, 170, 284].forEach(function (x) {
      s += '<path d="M' + x + ' 96 v18" stroke="#5d3fa0" stroke-width="3" marker-end="url(#vaShAr)"/>';
    });
    s += '<text x="56" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">circle to sphere</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">square to cube</text>';
    s += '<text x="284" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">triangle to cone</text>';
    return A.frame("#fff8f2", s);
  });

  var dColour = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">it depends what you are mixing</text>';
    // paint wheel, six wedges, primaries ringed
    var cx = 82, cy = 92, r = 46;
    var hues = [["#e2453b", 0], ["#f2942b", 60], ["#f2d024", 120], ["#4ab55d", 180],
                ["#3a7fc9", 240], ["#8a4ac9", 300]];
    hues.forEach(function (h) { s += wedge(cx, cy, r, h[1], h[1] + 60, h[0]); });
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#ffffff" stroke-width="2.5"/>';
    // ring the three paint primaries
    [[0, "#e2453b"], [120, "#f2d024"], [240, "#3a7fc9"]].forEach(function (p) {
      var t = (p[0] + 30 - 90) * Math.PI / 180;
      s += '<circle cx="' + (cx + Math.cos(t) * (r * 0.66)).toFixed(1) + '" cy="' +
        (cy + Math.sin(t) * (r * 0.66)).toFixed(1) + '" r="7.5" fill="none" stroke="#ffffff" stroke-width="2.6"/>';
    });
    s += '<text x="82" y="158" text-anchor="middle" ' + A.LB + ' font-size="11.5">PAINT</text>';
    s += '<text x="82" y="176" text-anchor="middle" ' + A.LB + ' font-size="10.5">red, yellow, blue</text>';
    // light: three overlapping circles, additive
    var lx = 246, ly = 90;
    s += '<rect x="186" y="38" width="122" height="106" rx="12" fill="#141225"/>';
    s += '<circle cx="' + lx + '" cy="' + (ly - 16) + '" r="30" fill="#ff3b30" opacity=".72"/>';
    s += '<circle cx="' + (lx - 24) + '" cy="' + (ly + 20) + '" r="30" fill="#31d158" opacity=".72"/>';
    s += '<circle cx="' + (lx + 24) + '" cy="' + (ly + 20) + '" r="30" fill="#2f7bff" opacity=".72"/>';
    s += '<text x="246" y="158" text-anchor="middle" ' + A.LB + ' font-size="11.5">LIGHT</text>';
    s += '<text x="246" y="176" text-anchor="middle" ' + A.LB + ' font-size="10.5">red, green, blue</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="11">paint mixes darker, light mixes brighter</text>';
    return A.frame("#f7f4ff", s);
  });

  var dTexture = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">texture is how it would feel</text>';
    // four swatches, evenly spaced and all inside the 340 wide frame
    var X = [20, 98, 176, 254], W = 64;
    var box = function (x, fill) { return '<rect x="' + x + '" y="44" width="' + W + '" height="64" rx="9" fill="' + fill + '"/>'; };
    s += box(X[0], "#e8d4a8");
    for (var i = 0; i < 24; i++) {
      s += '<circle cx="' + (X[0] + 8 + (i % 6) * 10) + '" cy="' + (52 + Math.floor(i / 6) * 13) + '" r="2.3" fill="#a3873f"/>';
    }
    s += box(X[1], "#cfe8ff") + '<rect x="' + (X[1] + 6) + '" y="50" width="52" height="52" rx="6" fill="#eaf4ff"/>';
    s += box(X[2], "#ffd9e8");
    for (var j = 0; j < 9; j++) {
      s += '<circle cx="' + (X[2] + 14 + (j % 3) * 18) + '" cy="' + (62 + Math.floor(j / 3) * 18) + '" r="7" fill="#f28fb0"/>';
    }
    s += box(X[3], "#d9f0d4");
    for (var k = 0; k < 5; k++) s += '<rect x="' + (X[3] + 6) + '" y="' + (50 + k * 12) + '" width="52" height="5" fill="#4ab55d"/>';
    ["rough", "smooth", "bumpy", "striped"].forEach(function (t, i2) {
      s += '<text x="' + (X[i2] + W / 2) + '" y="126" text-anchor="middle" ' + A.LB + ' font-size="10.5">' + t + '</text>';
    });
    // a repeating pattern strip
    s += '<rect x="20" y="142" width="300" height="30" rx="8" fill="#ffffff"/>';
    for (var m = 0; m < 10; m++) {
      s += '<path d="M' + (32 + m * 30) + ' 166 l7 -16 l7 16 z" fill="' + (m % 2 ? "#7c5cbf" : "#f2942b") + '"/>';
    }
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">a pattern is a texture that repeats on purpose</text>';
    return A.frame("#f4fbf5", s);
  });

  var dValue = art(function (A) {
    var s = A.defs([["vaV", "#f4f4f6", "#8f93a3"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">value is how light or dark it is</text>';
    var greys = ["#ffffff", "#d5d5db", "#a3a3ad", "#6d6d78", "#2f2f38"];
    greys.forEach(function (g, i) {
      s += '<rect x="' + (20 + i * 38) + '" y="38" width="36" height="36" fill="' + g + '" stroke="#c9c4dd"/>';
    });
    s += '<text x="96" y="90" text-anchor="middle" ' + A.LB + ' font-size="10.5">light to dark, five steps</text>';
    // a lit ball with the four things to look for
    s += A.orb("vaV", 92, 146, 34);
    s += '<text x="324" y="118" text-anchor="end" ' + A.LB + ' font-size="10.5">1 highlight</text>';
    s += '<text x="324" y="138" text-anchor="end" ' + A.LB + ' font-size="10.5">2 the lit side</text>';
    s += '<text x="324" y="158" text-anchor="end" ' + A.LB + ' font-size="10.5">3 the shadow side</text>';
    s += '<text x="324" y="178" text-anchor="end" ' + A.LB + ' font-size="10.5">4 the cast shadow</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="11">value is what makes a flat circle look round</text>';
    return A.frame("#f2f9ff", s);
  });

  var dSpace = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">things get smaller as they go back</text>';
    s += '<rect x="18" y="36" width="304" height="124" rx="10" fill="#eaf4ff"/>';
    s += '<path d="M18 96 h304" stroke="#5d3fa0" stroke-width="2" stroke-dasharray="7 6"/>';
    var vx = 200, vy = 96;
    s += '<path d="M18 160 L' + vx + ' ' + vy + ' L96 160 z" fill="#c9c4dd" opacity=".7"/>';
    s += '<path d="M244 160 L' + vx + ' ' + vy + ' L322 160 z" fill="#c9c4dd" opacity=".7"/>';
    // three posts shrinking towards the vanishing point
    [[40, 34], [110, 22], [162, 12]].forEach(function (p) {
      s += '<rect x="' + p[0] + '" y="' + (vy + 22 - p[1]) + '" width="7" height="' + p[1] + '" fill="#7c5cbf"/>';
    });
    s += '<circle cx="' + vx + '" cy="' + vy + '" r="4.5" fill="#e2453b"/>';
    s += '<text x="24" y="90" ' + A.LB + ' font-size="10.5">horizon line, your eye level</text>';
    s += '<text x="316" y="116" text-anchor="end" ' + A.LB + ' font-size="10.5">vanishing point</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">every line of the road meets at one dot</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="11">that trick is called one point perspective</text>';
    return A.frame("#fbf8ff", s);
  });

  var dComp = art(function (A) {
    var s = A.defs([["vaC", "#ffd166", "#e0902b"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">where you put it matters</text>';
    s += '<rect x="46" y="36" width="248" height="124" rx="8" fill="#dff0ff"/>';
    s += '<path d="M46 128 h248 v32 h-248 z" fill="#8fd39a"/>';
    for (var i = 1; i < 3; i++) {
      s += '<path d="M' + (46 + i * 82.6) + ' 36 v124" stroke="#ffffff" stroke-width="1.6" opacity=".9"/>';
      s += '<path d="M46 ' + (36 + i * 41.3) + ' h248" stroke="#ffffff" stroke-width="1.6" opacity=".9"/>';
    }
    s += A.orb("vaC", 129, 77, 17);
    s += '<circle cx="129" cy="77" r="24" fill="none" stroke="#e2453b" stroke-width="2.2"/>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">split the page in thirds, both ways</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="11">put the important thing where the lines cross</text>';
    return A.frame("#fff8f2", s);
  });

  var dFigure = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">the eyes sit halfway down the head</text>';
    s += '<ellipse cx="104" cy="112" rx="52" ry="66" fill="#ffe0c4" stroke="#c99a5e" stroke-width="2"/>';
    s += '<path d="M46 112 h116" stroke="#e2453b" stroke-width="2" stroke-dasharray="6 5"/>';
    s += '<path d="M52 146 h104" stroke="#7c5cbf" stroke-width="1.6" stroke-dasharray="5 5"/>';
    s += '<path d="M56 166 h96" stroke="#7c5cbf" stroke-width="1.6" stroke-dasharray="5 5"/>';
    s += '<ellipse cx="82" cy="112" rx="9" ry="6" fill="#ffffff" stroke="#2d2a4a" stroke-width="1.6"/>';
    s += '<circle cx="82" cy="112" r="3.2" fill="#2d2a4a"/>';
    s += '<ellipse cx="126" cy="112" rx="9" ry="6" fill="#ffffff" stroke="#2d2a4a" stroke-width="1.6"/>';
    s += '<circle cx="126" cy="112" r="3.2" fill="#2d2a4a"/>';
    s += '<path d="M104 118 v20 q-7 6 -12 3" stroke="#c99a5e" stroke-width="2" fill="none"/>';
    s += '<path d="M88 166 q16 9 32 0" stroke="#c9184a" stroke-width="2.4" fill="none"/>';
    s += '<text x="324" y="108" text-anchor="end" ' + A.LB + ' font-size="10.5">eyes, halfway down</text>';
    s += '<text x="324" y="144" text-anchor="end" ' + A.LB + ' font-size="10.5">nose, about here</text>';
    s += '<text x="324" y="172" text-anchor="end" ' + A.LB + ' font-size="10.5">then the mouth</text>';
    s += '<text x="170" y="198" text-anchor="middle" ' + A.LB + ' font-size="11">nearly everyone draws the eyes too high</text>';
    return A.frame("#fffaf4", s);
  });

  var dPaint = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">add white for a tint, black for a shade</text>';
    var base = "#3a7fc9";
    var tints = ["#ffffff", "#c3dbf2", "#87b7e4", "#3a7fc9"];
    var shades = ["#3a7fc9", "#2b5e96", "#1d3f64", "#0f2033"];
    tints.forEach(function (c, i) {
      s += '<rect x="' + (20 + i * 40) + '" y="46" width="38" height="38" rx="6" fill="' + c + '" stroke="#c9c4dd"/>';
    });
    shades.forEach(function (c, i) {
      s += '<rect x="' + (188 + i * 40) + '" y="46" width="38" height="38" rx="6" fill="' + c + '" stroke="#c9c4dd"/>';
    });
    s += '<text x="98" y="102" text-anchor="middle" ' + A.LB + ' font-size="11">tints</text>';
    s += '<text x="266" y="102" text-anchor="middle" ' + A.LB + ' font-size="11">shades</text>';
    s += '<rect x="20" y="118" width="300" height="46" rx="10" fill="#ffffff"/>';
    s += '<text x="34" y="138" ' + A.LB + ' font-size="10.5">tint = colour + white, it gets lighter</text>';
    s += '<text x="34" y="156" ' + A.LB + ' font-size="10.5">shade = colour + black, it gets darker</text>';
    s += '<text x="170" y="188" text-anchor="middle" ' + A.LB + ' font-size="11">start light. You can darken paint, not lighten it</text>';
    return A.frame("#f4f8ff", s);
  });

  var dMake = art(function (A) {
    var s = A.defs([["vaM", "#e8c49a", "#8a5f2e"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">three ways to make, without a pencil</text>';
    // a stamp printing
    s += A.slab(24, 48, 76, 40, "#c96a4a", "#e89a7a", 8);
    s += '<rect x="40" y="92" width="44" height="34" rx="5" fill="#7c5cbf"/>';
    s += '<path d="M52 100 l10 18 l10 -18 z" fill="#ffd166"/>';
    // a collage
    s += '<rect x="130" y="52" width="80" height="74" rx="6" fill="#ffffff"/>';
    s += '<path d="M136 60 l30 -6 l8 28 l-32 8 z" fill="#f28fb0"/>';
    s += '<path d="M172 84 l34 -10 l6 30 l-32 12 z" fill="#7fb8e8"/>';
    s += '<path d="M138 98 l26 12 l-6 14 l-24 -8 z" fill="#8fd39a"/>';
    // a clay pinch pot: a bowl with a visible rim, so it reads as a pot and not an egg
    s += '<ellipse cx="278" cy="126" rx="30" ry="6" fill="#2d2a4a" opacity=".14"/>';
    s += '<path d="M250 78 q28 -10 56 0 q-5 44 -28 46 q-23 -2 -28 -46 z" fill="url(#vaM)"/>';
    s += '<path d="M250 78 q28 -10 56 0 q-28 12 -56 0 z" fill="#6b4620"/>';
    s += '<path d="M258 92 q20 8 40 0" stroke="#6b4620" stroke-width="2" fill="none" opacity=".55"/>';
    s += '<path d="M261 106 q17 7 34 0" stroke="#6b4620" stroke-width="2" fill="none" opacity=".4"/>';
    s += '<text x="62" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">printing</text>';
    s += '<text x="170" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">collage</text>';
    s += '<text x="278" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">clay</text>';
    s += '<text x="170" y="174" text-anchor="middle" ' + A.LB + ' font-size="11.5">a print can be made again and again</text>';
    s += '<text x="170" y="194" text-anchor="middle" ' + A.LB + ' font-size="11">a sculpture is art you can walk around</text>';
    return A.frame("#f7f4ff", s);
  });

  var dHistory = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">looking is a skill you can practise</text>';
    s += '<rect x="0" y="34" width="340" height="80" fill="#efe6ff"/>';
    s += '<path d="M0 114 h340" stroke="#c9c4dd" stroke-width="2"/>';
    // three little framed works on a gallery wall
    var frames = [[26, "#cfe8ff", "#ffd166"], [136, "#ffe0e8", "#7fb8e8"], [246, "#dff0dd", "#c96a4a"]];
    frames.forEach(function (f) {
      s += A.slab(f[0], 44, 68, 58, "#8a5f2e", "#c99a5e", 4);
      s += '<rect x="' + (f[0] + 6) + '" y="50" width="56" height="46" fill="' + f[1] + '"/>';
      s += '<circle cx="' + (f[0] + 34) + '" cy="73" r="13" fill="' + f[2] + '"/>';
    });
    s += '<rect x="20" y="126" width="300" height="66" rx="10" fill="#ffffff"/>';
    s += '<text x="34" y="145" ' + A.LB + ' font-size="10.5">1 describe: what do you actually see?</text>';
    s += '<text x="34" y="162" ' + A.LB + ' font-size="10.5">2 analyse: which elements did the artist use?</text>';
    s += '<text x="34" y="179" ' + A.LB + ' font-size="10.5">3 interpret, then 4 judge, and say why</text>';
    return A.frame("#fdf6ff", s);
  });

  window.VA_ART = {
    whatis: dWhat, line: dLine, shapeform: dShape, colour: dColour, texture: dTexture,
    value: dValue, space: dSpace, composition: dComp, figure: dFigure, painting: dPaint,
    making: dMake, history: dHistory
  };

  // ==================== endless worksheets ====================
  // Colour and artwork questions are generated FROM the data above, never from memory, so a
  // generated question and its answer cannot disagree with what the lesson taught.
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

  var GEN = {
    whatis: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Name one of the seven elements of art.", a: cap(pick(ELEMENTS7)) };
      if (k === 1) return { q: "Is a photograph a kind of visual art?", a: "Yes" };
      return { q: "Visual art is art you do what with?", a: "Look at" };
    },
    line: function () {
      var t = pick([["a line with no bends", "Straight"], ["a line that bends smoothly", "Curved"],
                    ["a line with sharp points", "Zigzag"], ["a line that winds inward", "Spiral"],
                    ["a line made of separate marks", "Dotted"]]);
      return { q: "What kind of line is " + t[0] + "?", a: t[1] };
    },
    shapeform: function () {
      var p = pick([["circle", "sphere"], ["square", "cube"], ["triangle", "cone"],
                    ["rectangle", "box"], ["circle", "cylinder"]]);
      var k = R(0, 1);
      if (k === 0) return { q: "A " + p[0] + " is flat. What is the solid version called?", a: cap(p[1]) };
      return { q: "Is a " + p[0] + " a shape or a form?", a: "A shape, because it is flat" };
    },
    colour: function () {
      var k = R(0, 4);
      if (k === 0) {
        var m = pick(PAINT_MIX);
        return { q: "Mixing " + m[0] + " and " + m[1] + " paint makes which colour?", a: cap(m[2]) };
      }
      if (k === 1) {
        var l = pick(LIGHT_MIX);
        return { q: "Shining " + l[0] + " and " + l[1] + " light together makes which colour?", a: cap(l[2]) };
      }
      if (k === 2) {
        var c = pick(COMPLEMENT), flip = R(0, 1);
        return { q: "On the paint colour wheel, what is opposite " + c[flip] + "?", a: cap(c[1 - flip]) };
      }
      if (k === 3) {
        var w = R(0, 1), col = w ? pick(WARM) : pick(COOL);
        return { q: "Is " + col + " a warm colour or a cool colour?", a: w ? "Warm" : "Cool" };
      }
      return { q: "What are the three primary colours for paint?", a: "Red, yellow and blue" };
    },
    texture: function () {
      var t = pick([["sandpaper", "Rough"], ["glass", "Smooth"], ["a woolly jumper", "Fuzzy"],
                    ["tree bark", "Rough"], ["a pebble", "Smooth"], ["bubble wrap", "Bumpy"]]);
      return { q: "What texture would you draw for " + t[0] + "?", a: t[1] };
    },
    value: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What does value mean in art?", a: "How light or dark something is" };
      if (k === 1) return { q: "What is the brightest spot on a lit ball called?", a: "The highlight" };
      return { q: "What is the shadow on the table beneath an object called?", a: "The cast shadow" };
    },
    space: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "What is the line at your eye level called?", a: "The horizon line" };
      if (k === 1) return { q: "Where do the lines of a road seem to meet?", a: "The vanishing point" };
      if (k === 2) return { q: "Do things look bigger or smaller as they go further away?", a: "Smaller" };
      return { q: "Perspective with one vanishing point is called what?", a: "One point perspective" };
    },
    composition: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "How many parts does the rule of thirds split a page into?", a: "Nine" };
      if (k === 1) return { q: "What is the part you want looked at first called?", a: "The focal point" };
      return { q: "Where does the rule of thirds say to put the focal point?", a: "Where the lines cross" };
    },
    figure: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "How far down the head do the eyes sit?", a: "About halfway" };
      if (k === 1) return { q: "What mistake do most people make drawing eyes?", a: "They put them too high" };
      return { q: "What is the word for how big one part is next to another?", a: "Proportion" };
    },
    painting: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What do you call a colour with white added?", a: "A tint" };
      if (k === 1) return { q: "What do you call a colour with black added?", a: "A shade" };
      return { q: "Should you start light or start dark when painting?", a: "Start light" };
    },
    making: function () {
      var t = pick([["press an inked shape onto paper again and again", "Printmaking"],
                    ["glue cut pieces of paper into a picture", "Collage"],
                    ["shape clay you can walk all the way around", "Sculpture"],
                    ["cut a stamp from a potato", "Printmaking"]]);
      return { q: "What is it called when you " + t[0] + "?", a: t[1] };
    },
    history: function () {
      var w = pick(WORKS), k = R(0, 2);
      if (k === 0) return { q: "Who made " + w.title + "?", a: w.artist };
      if (k === 1) return { q: "Roughly what year was " + w.title + " made?", a: String(w.year) };
      return { q: "Is " + w.title + " a painting or a print?", a: cap(w.kind) };
    }
  };
  window.VA_GEN = GEN;

  // ==================== the twelve units ====================
  // Every unit: what it teaches, a diagram, a note for the grown-up, and a project written twice,
  // once for an older child working alone and once for a younger child working with a grown-up.
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, project, questions, extra) {
    var u = {
      title: title, emoji: emoji, band: band, intro: intro, learn: learn,
      diagram: diagram, parentNote: parentNote, project: project,
      vaGen: key, questions: questions
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    return u;
  }

  LESSONS[34] = {

    whatis: U("whatis", "1 · What Is Visual Art?", "🎨", "Kindergarten to Grade 2",
      "Visual art is art you look at, rather than art you listen to or read. A drawing is visual art. So is a painting, a photograph, a pot, a printed poster and a statue in a park. Anybody who makes one is an artist while they are making it.",
      ["Visual art is anything made to be looked at. Music and stories are art too, just not visual art.",
       "Most lists name seven elements of art: line, shape, form, space, value, colour and texture. They are the ingredients.",
       "The principles of design are how you arrange the ingredients. Lists vary a little, but nearly all include balance, contrast, emphasis, pattern and unity.",
       "Art does not have to look real to be good. It can be a feeling, a pattern or a puzzle.",
       "There is no wrong answer in art, but there are skills, and skills come from practice.",
       "Artists copy, trace and study other artists to learn. That is normal and always has been."],
      dWhat,
      "The most useful habit you can build here is describing before judging. Instead of asking whether a picture is good, ask what your child can see in it: which colours, which lines, what is biggest. Judgement comes easily to children and description does not, and description is the part that transfers into their own making.",
      { name: "🎨 Elements Scavenger Hunt", mins: 20,
        materials: ["Paper", "A pencil", "Coloured pencils or crayons"],
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Fold your paper so you have seven boxes and label them line, shape, form, space, value, colour, texture.",
                  "Walk around one room. Find something in the room that shows each element and draw it small in its box.",
                  "Under each drawing write the thing you found, for example 'the stripes on the rug' for pattern.",
                  "Pick the box you like most and redraw it big on the back of the paper."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up draws four boxes and writes line, shape, colour, texture.",
                  "Hunt around the room together. Your child says what they spot and the grown-up says which box it goes in.",
                  "Your child draws it. Wobbly is fine and better than traced.",
                  "Say one thing you both like about the finished sheet before putting it up."] } },
      [{ q: "What is visual art?", a: "Art you look at" },
       { q: "Is a photograph visual art?", a: "Yes" },
       { q: "Name one element of art.", a: "Line, or shape, or colour" },
       { q: "How many elements of art do most lists name?", a: "Seven" },
       { q: "Does art have to look real?", a: "No" },
       { q: "Is it cheating to study another artist's work?", a: "No, artists have always done it" },
       { q: "What are the principles of design about?", a: "How you arrange the elements" },
       { q: "What should you do before judging a picture?", a: "Describe what you can see" }]),

    line: U("line", "2 · Line", "✏️", "Kindergarten to Grade 3",
      "A line is the first mark anybody makes. Someone once said a line is a dot that went for a walk, which is exactly right. Every drawing you have ever seen started as lines.",
      ["A line has length and direction. It can be straight, curved, zigzag, spiral, wavy or dotted.",
       "A thick line feels loud and heavy. A thin line feels quiet and light. Changing thickness inside one line makes it look alive.",
       "Lines can show edges, but they can also show movement, like the speed lines in a comic.",
       "Contour lines follow the outer edge of a thing. Drawing only the outline is called a contour drawing.",
       "Hatching means lots of parallel lines close together to darken an area. Crossing them over is cross hatching.",
       "Holding the pencil further back gives you looser, lighter lines. Holding it near the tip gives you tight, dark control."],
      dLine,
      "If your child presses very hard and draws with tiny scratchy strokes, they are usually afraid of being wrong. Give them a big sheet and a fat crayon and ask for lines that go all the way across without stopping. Loosening the grip fixes more drawing problems than any amount of instruction.",
      { name: "✏️ Blind Contour Portrait", mins: 15,
        materials: ["Paper", "A pencil", "A mirror, or somebody willing to sit still"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Look at your face in a mirror, or at a partner's face.",
                  "Put your pencil down and start drawing the edge of the face. Do not look at your paper at all.",
                  "Move your eye slowly along the edge and let your hand follow at the same speed. Do not lift the pencil.",
                  "Stop after two minutes and look. It will be strange and wonky. That is the point.",
                  "Do it a second time, now allowed two quick glances at the paper. Compare the two."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Both of you take a big crayon and a big sheet.",
                  "The grown-up calls out a line: straight, curvy, zigzag, spiral, bumpy. Both draw it across the page.",
                  "Fill the page with six or seven different lines.",
                  "Now colour the spaces the lines made. You have just made an abstract picture out of nothing but line."] } },
      [{ q: "What is a line?", a: "A mark with length and direction" },
       { q: "What kind of line has sharp points?", a: "A zigzag" },
       { q: "Which feels louder, a thick line or a thin line?", a: "A thick line" },
       { q: "What is a drawing of only the outer edge called?", a: "A contour drawing" },
       { q: "What is hatching?", a: "Parallel lines close together to darken an area" },
       { q: "What is it called when hatching lines cross?", a: "Cross hatching" },
       { q: "Name a line that winds inward.", a: "A spiral" },
       { q: "How do you get looser lines?", a: "Hold the pencil further back" }]),

    shapeform: U("shapeform", "3 · Shape and Form", "🔷", "Grades 1 to 4",
      "A shape is flat. A form is solid. That one sentence is the whole difference, and once you can see it you can draw things that look like they are really there instead of stuck on the paper.",
      ["A shape has two dimensions: height and width. A circle, a square and a triangle are shapes.",
       "A form has three: height, width and depth. A sphere, a cube and a cone are forms.",
       "Every flat shape has a solid partner. Circle to sphere, square to cube, triangle to cone or pyramid.",
       "Geometric shapes are the ruler and compass ones. Organic shapes are the ones from nature, like a leaf or a puddle.",
       "The empty space around and between shapes has a shape of its own. Artists call it negative space.",
       "Almost anything complicated can be broken down into simple shapes first, then fixed up afterwards."],
      dShape,
      "Negative space is the idea worth pushing here, because it is the fastest route to accurate drawing. Ask your child to draw the gap between the chair legs rather than the chair. Because the gap has no name, the brain stops substituting a symbol for it and actually looks, and the drawing improves immediately.",
      { name: "🔷 Turn Shapes Into Forms", mins: 25,
        materials: ["Paper", "A pencil", "A rubber", "One real object such as a mug or an apple"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Draw a circle, a square and a triangle in a row, pressing lightly.",
                  "Turn the circle into a sphere by shading one side and adding a shadow underneath.",
                  "Turn the square into a cube by adding two lines going back and a top face.",
                  "Turn the triangle into a cone the same way, with a curved base.",
                  "Now put your real object in front of you, find the simple shapes hiding in it, and build it up the same way."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["Collect five objects from around the house, mixing round ones and boxy ones.",
                  "Sort them into two piles together: 'made of round forms' and 'made of boxy forms'.",
                  "Your child picks one and draws just its big simple shape, nothing else, in ten seconds.",
                  "Then they add one more thing they notice, and one more. Building up beats starting with detail.",
                  "Talk about the gap shapes between the objects. Can you see them?"] } },
      [{ q: "What is the difference between a shape and a form?", a: "A shape is flat, a form is solid" },
       { q: "How many dimensions does a shape have?", a: "Two" },
       { q: "What is the solid version of a circle?", a: "A sphere" },
       { q: "What is the solid version of a square?", a: "A cube" },
       { q: "What are shapes from nature called?", a: "Organic shapes" },
       { q: "What are ruler and compass shapes called?", a: "Geometric shapes" },
       { q: "What is the space around a shape called?", a: "Negative space" },
       { q: "What should you draw first, simple shapes or detail?", a: "Simple shapes" }]),

    colour: U("colour", "4 · Colour", "🌈", "Grades 1 to 5",
      "Colour is the element everybody notices first, and it is also the one most often taught wrongly. The three colours you cannot mix from others are called primaries, but which three they are depends entirely on whether you are mixing paint or mixing light.",
      ["For paint, ink and crayon the primaries are red, yellow and blue. Mixing them makes darker colours, which is called subtractive mixing.",
       "For light the primaries are red, green and blue. Mixing those makes brighter colours, which is called additive mixing. All three together make white light.",
       "That is why a screen and a paint box behave so differently. Your phone mixes light, your paint box mixes paint.",
       "Paint secondaries: red and yellow make orange, yellow and blue make green, blue and red make purple.",
       "Colours opposite each other on the paint wheel are complementary: red and green, blue and orange, yellow and purple. Side by side they look brighter. Mixed together they make mud.",
       "Warm colours are red, orange and yellow, and they seem to come forward. Cool colours are blue, green and purple, and they seem to sit back.",
       "Hue means the colour name. Value means how light or dark it is. Those two words save a lot of confusion."],
      dColour,
      "If your child has been told at school that the primary colours are simply red, yellow and blue, they have been told a useful half truth. It is right for the paint box in front of them and wrong for the screen they will spend their life looking at. Showing both takes two minutes with a torch and some coloured cellophane, and it stops a correction landing much later in physics.",
      { name: "🌈 Mix Your Own Colour Wheel", mins: 30,
        materials: ["Red, yellow and blue paint only, no other colours", "A brush", "A jar of water",
                    "Thick paper", "A plate or tray to mix on", "An apron or an old shirt"],
        safety: "Use washable paint, cover the table, and check that any paint says non toxic on the pot.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Draw a circle and split it into six equal wedges like a pizza.",
                  "Paint red, yellow and blue into alternate wedges, leaving a gap between each.",
                  "Mix red and yellow on the plate and paint the wedge between them. Do the same for yellow and blue, and blue and red.",
                  "Let it dry, then write the colour name in each wedge.",
                  "On the back, paint two small squares of complementary colours touching, then mix those same two together in a third square. Notice how the pair sings and the mix goes muddy."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Put three blobs of paint on a plate: red, yellow, blue.",
                  "The grown-up asks: what do you think red and yellow will make? Guess first, then mix a little with a brush.",
                  "Do the same for yellow and blue, then blue and red. Guessing before mixing is the whole lesson.",
                  "Paint a picture using only the colours you made yourselves.",
                  "In a dark room, shine a torch through red and green cellophane onto a white wall so they overlap. That is light mixing, and it behaves the other way round."] } },
      [{ q: "What are the three primary colours for paint?", a: "Red, yellow and blue" },
       { q: "What are the three primary colours for light?", a: "Red, green and blue" },
       { q: "What do red and yellow paint make?", a: "Orange" },
       { q: "What do blue and yellow paint make?", a: "Green" },
       { q: "What colour is opposite red on the paint wheel?", a: "Green" },
       { q: "Are red, orange and yellow warm or cool?", a: "Warm" },
       { q: "What happens when you mix all three light primaries?", a: "You get white light" },
       { q: "What does hue mean?", a: "The name of the colour" }]),

    texture: U("texture", "5 · Texture and Pattern", "🧶", "Grades 2 to 5",
      "Texture is how something would feel if you touched it. In art there are two kinds: the real texture of a bumpy collage you can actually feel, and the pretend texture of a drawing that only looks rough.",
      ["Real texture is texture you can feel with your fingers, like sand glued to card.",
       "Implied texture is texture you only see, like pencil marks that make paper look like fur.",
       "You make implied texture with marks: dots for grainy, short flicks for fur, wiggles for wool, long strokes for hair.",
       "A pattern is a texture that repeats on purpose. The repeating part is called the motif.",
       "Patterns can repeat in a line, in a grid, or by flipping and turning the motif.",
       "Rubbing a pencil over paper laid on a rough surface is called frottage, and it captures a real texture as a flat picture."],
      dTexture,
      "Texture is the element that rescues children who believe they cannot draw, because it needs patience rather than accuracy. A page filled with careful fur marks looks impressive and requires no proportion skills at all. Use it to rebuild confidence after a frustrating drawing session.",
      { name: "🧶 Texture Rubbing Zoo", mins: 25,
        materials: ["Thin paper", "Crayons with the wrappers peeled off", "Scissors", "Glue", "A big sheet for the background"],
        safety: "Younger children should use round ended scissors, and a grown-up cuts anything stiff.",
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Find eight different surfaces: a brick, a leaf, a coin, a wooden floor, a basket, a zip.",
                  "Lay thin paper on each and rub the side of a crayon over it until the texture appears.",
                  "Cut your rubbings into animal parts: a scaly body, a furry tail, bumpy feet.",
                  "Glue them onto the big sheet to build one invented animal out of real textures.",
                  "Write next to each part which surface it really came from."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up holds the paper still while your child rubs the crayon. That is the tricky bit.",
                  "Collect five rubbings from around the house and garden.",
                  "Spread them out and play a guessing game: can the grown-up work out what each one was?",
                  "Your child chooses two favourites and the grown-up cuts them into simple shapes to glue down together."] } },
      [{ q: "What does texture mean in art?", a: "How something would feel" },
       { q: "What is texture you can actually feel called?", a: "Real texture" },
       { q: "What is texture you can only see called?", a: "Implied texture" },
       { q: "What is a pattern?", a: "A texture that repeats on purpose" },
       { q: "What is the repeating part of a pattern called?", a: "The motif" },
       { q: "What marks would you use for fur?", a: "Short flicks" },
       { q: "What is a pencil rubbing of a rough surface called?", a: "Frottage" },
       { q: "Name one way a pattern can repeat.", a: "In a line, or in a grid" }]),

    value: U("value", "6 · Value: Light and Shadow", "🌗", "Grades 3 to 7",
      "Value means how light or dark something is. It is the element that turns a flat circle into a ball you feel you could pick up, and it does more work than colour ever does.",
      ["Value runs from white through greys to black. A value scale of five steps is enough to start.",
       "Squint at anything and the colours fade but the light and dark stay. That is why value matters more than colour.",
       "On a lit ball look for four things: the highlight, the lit side, the shadow side, and the cast shadow on the surface.",
       "The cast shadow is darkest right where the object touches the surface, and softer further away.",
       "Contrast means how far apart the values are. High contrast is dramatic, low contrast is calm and misty.",
       "Light has a direction. Decide where your light is coming from before you shade anything, and keep it there."],
      dValue,
      "The one instruction that changes everything is: squint. Half closing your eyes throws away colour and detail and leaves only blocks of light and dark, which is exactly the information needed to shade. Children find it funny and it works instantly, on any subject.",
      { name: "🌗 One Lamp, One Ball", mins: 30,
        materials: ["Paper", "A soft pencil, B or 2B if you have one", "A rubber",
                    "A ball, an orange or an egg", "A desk lamp or a torch"],
        safety: "A lamp bulb gets hot. A grown-up positions the lamp for younger children.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Put the ball on a plain sheet of paper and shine the lamp on it from one side only.",
                  "Draw a five step value scale in the corner first, from white to as dark as your pencil goes.",
                  "Lightly draw the circle. Do not outline it darkly.",
                  "Find the highlight and leave that paper completely white.",
                  "Shade the shadow side, then the cast shadow, matching each to a step on your scale.",
                  "Squint at the real ball and at your drawing. Fix whichever value is furthest off."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["Make a shadow together: hold an object in the lamp light and find its shadow on the wall.",
                  "Move the lamp. Ask which way the shadow went, and why.",
                  "Draw round the shadow on a big sheet taped to the wall while the grown-up holds the object still.",
                  "Colour the shadow shape in dark grey and the object in bright colour.",
                  "Try the same object turned a different way and compare the two shadows."] } },
      [{ q: "What does value mean in art?", a: "How light or dark something is" },
       { q: "What is the brightest spot on a lit object called?", a: "The highlight" },
       { q: "What is the shadow on the table called?", a: "The cast shadow" },
       { q: "Where is a cast shadow darkest?", a: "Where the object touches the surface" },
       { q: "What does contrast mean?", a: "How far apart the values are" },
       { q: "What should you do to see values more easily?", a: "Squint" },
       { q: "What should you decide before you start shading?", a: "Where the light is coming from" },
       { q: "Which matters more for making things look solid, value or colour?", a: "Value" }]),

    space: U("space", "7 · Space and Perspective", "🛣️", "Grades 4 to 8",
      "Paper is flat, and yet a good drawing can feel like a window you could climb through. The tricks that do it are hundreds of years old and every one of them can be learned in an afternoon.",
      ["Things further away look smaller. That is the first and most useful rule.",
       "Things further away sit higher up the picture, closer to the horizon.",
       "Things in front overlap and hide the things behind. Overlapping is the simplest depth trick there is.",
       "Distant things look paler, bluer and less detailed. That is called atmospheric perspective.",
       "The horizon line is your own eye level. Move your eye level and the whole picture changes.",
       "In one point perspective, all the lines going away from you meet at a single vanishing point on the horizon.",
       "Two point perspective uses two vanishing points, which is what you need to draw a building from a corner."],
      dSpace,
      "Perspective is the moment art starts to feel like maths, and some children love that and some panic. If yours panics, do the overlapping and the size rules first and leave vanishing points for another year. A drawing with good overlap already reads as deep, and nobody needs rulers to feel that they can draw.",
      { name: "🛣️ The Road to the Vanishing Point", mins: 30,
        materials: ["Paper", "A pencil", "A ruler", "A rubber", "Coloured pencils or crayons"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Rule a horizontal line across the middle of the page. That is the horizon, your eye level.",
                  "Mark one dot on it. That is your vanishing point.",
                  "From the bottom two corners, rule a light line to the dot. That is your road.",
                  "Draw telegraph poles along the road. Rule each one's top and bottom to the dot so every pole shrinks correctly.",
                  "Add a building with its sides ruled to the same dot.",
                  "Colour the far things paler and bluer than the near ones, then rub out your guide lines."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["Stand at one end of a corridor or a path together and look down it. Notice how the sides seem to squeeze together.",
                  "Cut out three paper trees: big, medium and small.",
                  "Glue the big one at the bottom of a sheet, the medium higher up, the small higher still.",
                  "Overlap them slightly. Ask your child which one feels nearest, and why.",
                  "Colour the small one paler than the big one and look again."] } },
      [{ q: "Do far away things look bigger or smaller?", a: "Smaller" },
       { q: "What is the horizon line?", a: "Your eye level" },
       { q: "What is the dot where the lines meet called?", a: "The vanishing point" },
       { q: "What is the simplest way to show something is in front?", a: "Overlap it" },
       { q: "What colour do distant hills tend to look?", a: "Paler and bluer" },
       { q: "What is that paleness called?", a: "Atmospheric perspective" },
       { q: "How many vanishing points in one point perspective?", a: "One" },
       { q: "What do you need to draw a building from its corner?", a: "Two point perspective" }]),

    composition: U("composition", "8 · Composition", "🖼️", "Grades 4 to 9",
      "Composition is where you put things. Two people can draw the same bowl of fruit with the same skill and one picture will hold your eye while the other slides off it, and the difference is nearly always composition.",
      ["The focal point is the thing you want looked at first. Every picture should have one.",
       "The rule of thirds splits the picture into nine with two lines each way. Putting the focal point where lines cross usually beats putting it dead centre.",
       "It is a rule of thumb rather than a law. Dead centre is powerful too, when you mean it.",
       "Balance means the visual weight is spread so the picture does not feel like it is tipping over.",
       "Symmetrical balance is a mirror down the middle. Asymmetrical balance uses different things of similar weight.",
       "Contrast draws the eye. The lightest light next to the darkest dark is where a viewer looks first.",
       "Leaving empty space is a decision, not a mistake. Space around a subject gives it room to breathe."],
      dComp,
      "A quick way to make composition visible is to cut a rectangular window in a piece of card and let your child move it around over a scene or over their own finished drawing. Framing a picture with their hands teaches choosing, and choosing is the skill. It also shows them that cropping can rescue a drawing they had written off.",
      { name: "🖼️ Viewfinder Hunt", mins: 25,
        materials: ["A piece of card", "Scissors", "Paper", "A pencil"],
        safety: "A grown-up cuts the window out of the card for children under about eight.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Cut a rectangular hole about 5cm by 7cm in the middle of a piece of card. That is your viewfinder.",
                  "Hold it up and move it around the room until what you see through it looks good.",
                  "Lightly draw a rectangle on your paper and rule it into thirds both ways.",
                  "Draw what you saw, putting the most interesting thing near a crossing point.",
                  "Do a second version of the same subject with the viewfinder much closer in. Compare which one holds your eye."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["The grown-up cuts a window in card.",
                  "Take turns finding a 'picture' through the window somewhere in the house.",
                  "Say out loud what is in the middle, what is at the edge, and what you would leave out.",
                  "Your child draws their favourite one. The grown-up draws the same view too, and you compare choices, not skill."] } },
      [{ q: "What is composition?", a: "Where you put things in a picture" },
       { q: "What is the focal point?", a: "The thing you want looked at first" },
       { q: "Into how many parts does the rule of thirds split a picture?", a: "Nine" },
       { q: "Where does the rule of thirds suggest putting the focal point?", a: "Where the lines cross" },
       { q: "Is the rule of thirds a law?", a: "No, it is a rule of thumb" },
       { q: "What is a mirror down the middle called?", a: "Symmetrical balance" },
       { q: "What draws the eye first in a picture?", a: "The strongest contrast" },
       { q: "Is empty space a mistake?", a: "No, it can be a choice" }]),

    figure: U("figure", "9 · Drawing People", "🧍", "Grades 5 to 9",
      "People are the hardest thing to draw, because everybody knows what a face looks like and everybody notices when it is off. The good news is that most of the errors are the same few, and they are all fixable with measurements rather than talent.",
      ["The eyes sit about halfway down the head, not near the top. Nearly everyone gets this wrong.",
       "The bottom of the nose sits roughly halfway between the eyes and the chin.",
       "The mouth sits between the nose and the chin, closer to the nose.",
       "The ears run roughly from the eyebrow line down to the bottom of the nose.",
       "There is about one eye's width of gap between the two eyes.",
       "For a whole body, an adult is roughly seven to eight heads tall. A young child is nearer five or six, which is why children's heads look big.",
       "These are averages to check yourself against, not rules. Real people vary, and that variation is what makes a portrait look like a person."],
      dFigure,
      "When a portrait looks wrong but nobody can say why, measure rather than redraw. Hold a pencil at arm's length, thumb marking off the head's height, and check how far down the eyes really fall. Children are usually shocked. Measuring converts a vague sense of failure into one fixable fact, which is a good lesson well beyond art.",
      { name: "🧍 Measure a Real Face", mins: 30,
        materials: ["Paper", "A pencil", "A rubber", "A mirror, or somebody willing to sit still", "A ruler"],
        solo: { band: "Grades 5 and up, on your own",
          steps: ["Draw a large egg shape for the head, narrower at the chin.",
                  "Rule a light line exactly halfway down. Put the eyes on it. Resist moving them up.",
                  "Rule another line halfway between the eye line and the chin. The bottom of the nose goes there.",
                  "Put the mouth between the nose and chin, a little closer to the nose.",
                  "Add the ears from the eyebrow down to the nose line.",
                  "Now look at your real model and change whatever does not match. The guide gets you close, looking makes it a portrait.",
                  "Rub out the guide lines last."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["Lie a big sheet on the floor and draw round your child's hand, then their foot.",
                  "Hold a pencil up and measure together: how many hand lengths tall is your child?",
                  "Draw a person on paper using the head as the measuring unit. Count how many heads tall the grown-up is.",
                  "Compare. Ask why a small child's head looks big for their body.",
                  "Draw each other. Aim for a laugh rather than a likeness."] } },
      [{ q: "Where do the eyes sit on a head?", a: "About halfway down" },
       { q: "What mistake do most people make with eyes?", a: "They draw them too high" },
       { q: "Where does the bottom of the nose sit?", a: "Halfway between the eyes and the chin" },
       { q: "How wide is the gap between the eyes?", a: "About one eye width" },
       { q: "Where do the ears run from and to?", a: "The eyebrow line to the bottom of the nose" },
       { q: "How many heads tall is a typical adult?", a: "About seven to eight" },
       { q: "Why do young children's heads look big?", a: "They are fewer heads tall" },
       { q: "Are these proportions rules or averages?", a: "Averages to check yourself against" }]),

    painting: U("painting", "10 · Painting and Mixing", "🖌️", "Grades 3 to 9",
      "Paint is colour you can push around. Different paints behave in completely different ways, and knowing which one you are holding saves a lot of muddy disappointment.",
      ["Watercolour is see through. You work from light to dark, and the white is the paper itself, so you plan where to leave it.",
       "Poster paint and acrylic are solid. You can paint light over dark, so mistakes can be covered.",
       "A tint is a colour with white added. A shade is a colour with black added. A tone is a colour with grey added.",
       "Mixing a colour with a little of its complementary is a better way to darken it than reaching for black, which flattens things.",
       "Wash your brush between colours or every colour on your palette slowly turns brown.",
       "Big brushes for big areas, small brushes for detail, and detail comes last.",
       "Let a layer dry before painting over it, unless you actually want the colours to run together."],
      dPaint,
      "The commonest painting frustration is everything turning brown, and it has a boring cause: the brush is not being rinsed. Put two jars out, one to rinse in and one of clean water for mixing, and the problem largely disappears. It is worth naming the cause out loud so it feels like a fixable technique rather than bad luck.",
      { name: "🖌️ The Nine Square Mixing Chart", mins: 35,
        materials: ["Red, yellow and blue paint", "White and black paint", "A brush", "Two jars of water",
                    "Thick paper", "A palette or an old plate", "An apron or an old shirt"],
        safety: "Use washable, non toxic paint, cover the table, and roll sleeves up.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Rule a grid of nine squares, three by three.",
                  "Along the top row paint your three primaries: red, yellow, blue.",
                  "In the middle row paint each primary with white added. Those are tints.",
                  "In the bottom row paint each primary with a little black added. Those are shades.",
                  "Keep one jar for rinsing and one for clean water, and rinse every single time.",
                  "On a separate strip, darken red twice: once with black and once with a little green. Label them and decide which you prefer."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Give your child one colour and a blob of white on a plate.",
                  "Paint a row of five squares, adding a bit more white each time, from strongest to palest.",
                  "Do a second row with black instead of white.",
                  "Name them together: which is the tint row, which is the shade row?",
                  "Use the palest one to paint a sky and the darkest to paint a night, on two halves of one sheet."] } },
      [{ q: "Is watercolour see through or solid?", a: "See through" },
       { q: "In watercolour, what makes the white?", a: "The paper itself" },
       { q: "What is a colour with white added called?", a: "A tint" },
       { q: "What is a colour with black added called?", a: "A shade" },
       { q: "What is a colour with grey added called?", a: "A tone" },
       { q: "What is a better way to darken a colour than black?", a: "Add a little of its complementary" },
       { q: "Why does everything turn brown?", a: "The brush is not being rinsed" },
       { q: "When should detail be painted?", a: "Last" }]),

    making: U("making", "11 · Printing, Collage and Sculpture", "🗿", "Grades 2 to 8",
      "Not all art is done with a pencil. Some of the oldest art there is was pressed, stuck, carved or built, and these ways of making are often the ones that click for a child who says they cannot draw.",
      ["A print is made by putting ink on a shape and pressing it onto paper. The point is that you can do it again and again.",
       "Whatever you carve away stays unprinted, and whatever you leave standing prints. That takes a moment to get used to.",
       "A print comes out mirrored, so any letters have to be cut backwards.",
       "Collage means gluing materials down to make a picture. Cut and torn edges feel completely different, so choose on purpose.",
       "Sculpture is art in the round, which means it has to work from every side, not just the front.",
       "Sculpture can be made by taking away, like carving soap, or by building up, like coiling clay.",
       "A relief sits partly raised off a flat background, halfway between a picture and a sculpture."],
      dMake,
      "These sessions are messier and the payoff is worth it, especially for a child who has decided they are bad at art. Printing in particular rewards care rather than accuracy, and pulling a clean print off a block feels genuinely magic. Put newspaper down first and agree the clean up before you start rather than after.",
      { name: "🗿 Potato Print Repeating Pattern", mins: 35,
        materials: ["A potato cut in half by a grown-up", "A blunt knife or a spoon handle",
                    "Poster paint on a saucer", "Paper", "Newspaper for the table", "A cloth"],
        safety: "A grown-up does all the cutting, always. Nobody under about ten holds the knife.",
        solo: { band: "Grades 4 and up, with a grown-up doing the cutting",
          steps: ["Ask a grown-up to cut a potato in half and dry the cut face on a cloth.",
                  "Draw a simple shape on the flat face with a pencil tip. Simple prints best.",
                  "Ask the grown-up to cut away everything around your shape so it stands proud by about half a centimetre.",
                  "Press the shape into paint on a saucer, then press it firmly onto paper and lift straight up.",
                  "Print a repeating pattern: a straight row, then a row where you turn the stamp a quarter each time.",
                  "Cut a second stamp in a second colour and overlap the two."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["A grown-up cuts the potato and carves a very simple shape such as a heart or a star.",
                  "Your child presses it into the paint and stamps a row across the paper.",
                  "Count the stamps together as you go, and try leaving a gap every third one.",
                  "Add stamps from other things too: a cork, a fork, a leaf, half a pepper.",
                  "When it is dry, use it as wrapping paper for a real present."] } },
      [{ q: "What is a print?", a: "A picture made by pressing an inked shape onto paper" },
       { q: "Can you make more than one copy of a print?", a: "Yes, that is the point" },
       { q: "On a print block, which part prints?", a: "The part left standing" },
       { q: "Why must letters be cut backwards?", a: "A print comes out mirrored" },
       { q: "What is collage?", a: "Gluing materials down to make a picture" },
       { q: "What does art in the round mean?", a: "It works from every side" },
       { q: "Name a sculpture method that takes away material.", a: "Carving" },
       { q: "What is a relief?", a: "A sculpture partly raised off a flat background" }]),

    history: U("history", "12 · Looking at Art", "🏛️", "Grades 6 to 12",
      "The last skill is the one that lasts longest: standing in front of a picture and having something to say about it. There is a method, it works on any artwork, and it takes about four minutes.",
      ["Step 1, describe. Say only what is actually there. No opinions yet.",
       "Step 2, analyse. Which elements did the artist use, and how? Where is the contrast, where does your eye go first?",
       "Step 3, interpret. What might it be about? Give your reason from what you saw in step 1.",
       "Step 4, judge. Do you think it works? Now you are allowed an opinion, as long as you can say why.",
       "Leonardo da Vinci painted the Mona Lisa from about 1503. It hangs in the Louvre in Paris.",
       "Vincent van Gogh painted The Starry Night in 1889, using thick swirling brushstrokes you can see from across a room.",
       "Katsushika Hokusai made The Great Wave off Kanagawa around 1830 as a woodblock print, so many original copies exist.",
       "Pablo Picasso painted Guernica in 1937 in black, white and grey, about the bombing of a town.",
       "Some famous works exist in several versions. Edvard Munch made more than one Scream, and Claude Monet painted water lilies about 250 times."],
      dHistory,
      "The four step method is worth learning by heart because it makes gallery visits pleasant instead of dutiful. Insist on step 1 being finished before anybody moves on. Most arguments about art are really two people doing step 4 with no step 1 behind it, and children spot that quickly once they have the vocabulary.",
      { name: "🏛️ Four Step Gallery Review", mins: 25,
        materials: ["Paper", "A pencil", "One artwork to look at, from a book, a museum website or a wall at home"],
        solo: { band: "Grades 6 and up, on your own",
          steps: ["Choose one artwork and set a timer for two minutes. Look only. Write nothing.",
                  "Describe: list ten things that are actually in the picture. Objects, colours, marks. No opinions.",
                  "Analyse: name three elements the artist used and say where. For example 'strong value contrast on the left'.",
                  "Interpret: write two sentences on what you think it is about, each starting 'I think this because I can see'.",
                  "Judge: say whether it works for you and give one reason from the steps above.",
                  "Swap with somebody and see whether their step 1 list matches yours. It usually will not."] },
        together: { band: "Grades 2 to 5, with a grown-up",
          steps: ["Find one picture in a book or online and look at it together for a whole minute without speaking.",
                  "Play I Spy in the picture, taking turns, until you have found ten things.",
                  "The grown-up asks: where do your eyes go first? What made them go there?",
                  "Ask what might have happened just before this moment, and just after.",
                  "Last question, and only now: do you like it, and what makes you say that?"] } },
      [{ q: "What is step 1 of looking at art?", a: "Describe what you can see" },
       { q: "In which step are you allowed an opinion?", a: "Step 4, judge" },
       { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
       { q: "Where does the Mona Lisa hang?", a: "The Louvre in Paris" },
       { q: "Who painted The Starry Night?", a: "Vincent van Gogh" },
       { q: "Who made The Great Wave off Kanagawa?", a: "Katsushika Hokusai" },
       { q: "What colours did Picasso use in Guernica?", a: "Black, white and grey" },
       { q: "How many times did Monet paint water lilies?", a: "About 250" }])
  };
})();
