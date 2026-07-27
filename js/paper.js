// BrightSprouts Academy — Paper Activity for Kids & Family (category 30).
//
// 100 things to make out of paper, each with a picture of the finished thing, the materials, and
// numbered steps. The activities themselves live in js/paper-data.js; this file is the engine:
// the themes, the shared drawing helpers every picture is built from, and the studio UI.
//
// House rules for anything added here:
//  * Materials must be things a family already owns. Paper, scissors, glue, tape, string, crayons.
//    No craft-shop shopping list, no special tools.
//  * Steps are numbered, one action each, in the order a child does them. "Fold it in half the
//    long way" beats "create a longitudinal fold".
//  * Anything sharp or hot says so IN the step, not in a footnote: scissors, skewers, an oven.
//  * Every activity says how long it takes, so a grown-up can pick one that fits before dinner.
(function () {

  var PAPER_THEMES = [
    { n: "Origami Animals",   e: "🐾", colour: "#2f9e44", tag: "Fold a creature from one square" },
    { n: "Flowers & Nature",  e: "🌸", colour: "#d6336c", tag: "Blooms, leaves and growing things" },
    { n: "Cards & Keepsakes", e: "💌", colour: "#7c5cbf", tag: "Things to give away" },
    { n: "Party Decorations", e: "🎉", colour: "#ff9f68", tag: "Make the room look ready" },
    { n: "Toys That Move",    e: "⚙️", colour: "#1f6feb", tag: "Spin, flap, pop and jump" },
    { n: "Flight & Space",    e: "🚀", colour: "#5b21b6", tag: "Things that fly, or pretend to" },
    { n: "Dress Up",          e: "👑", colour: "#f2b705", tag: "Hats, masks, crowns and cuffs" },
    { n: "Useful Things",     e: "📦", colour: "#8a5f2e", tag: "Boxes, holders and helpers" },
    { n: "Games to Play",     e: "🎲", colour: "#0e7490", tag: "Make it, then play it" },
    { n: "Seasons & Holidays",e: "🎄", colour: "#e2453b", tag: "Something for every time of year" }
  ];

  // ==================== drawing helpers ====================
  // Every picture is drawn in the same 200×150 box so the cards line up, and is built from these
  // few primitives so 100 drawings stay consistent instead of looking like 100 different hands.
  var A = {
    box: function (inner) {
      return '<svg class="pa-art" viewBox="0 0 200 150" role="img" aria-hidden="true">' +
        '<rect width="200" height="150" rx="12" fill="#fbf8ff"/>' + inner + '</svg>';
    },
    // a sheet of paper with a soft shadow and a lighter "lit" edge
    sheet: function (x, y, w, h, fill, rot, r) {
      var t = rot ? ' transform="rotate(' + rot + ' ' + (x + w / 2) + ' ' + (y + h / 2) + ')"' : '';
      return '<g' + t + '><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
        '" rx="' + (r == null ? 2 : r) + '" fill="' + fill + '"/>' +
        '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="3" fill="#fff" opacity=".35"/></g>';
    },
    poly: function (pts, fill, extra) { return '<polygon points="' + pts + '" fill="' + fill + '"' + (extra || "") + '/>'; },
    path: function (d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + '/>'; },
    line: function (x1, y1, x2, y2, col, w, dash) {
      return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col +
        '" stroke-width="' + (w || 1.5) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
    },
    circ: function (cx, cy, r, fill, extra) {
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '"' + (extra || "") + '/>';
    },
    ell: function (cx, cy, rx, ry, fill, rot) {
      var t = rot ? ' transform="rotate(' + rot + ' ' + cx + ' ' + cy + ')"' : '';
      return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"' + t + '/>';
    },
    // two dot eyes and a smile, for anything with a face
    face: function (cx, cy, s, dark) {
      s = s || 1;
      var c = dark || "#2d2a4a";
      return A.circ(cx - 5 * s, cy, 2.4 * s, c) + A.circ(cx + 5 * s, cy, 2.4 * s, c) +
        '<path d="M' + (cx - 4 * s) + ' ' + (cy + 5 * s) + ' q' + (4 * s) + ' ' + (3.4 * s) + ' ' + (8 * s) + ' 0" stroke="' + c +
        '" stroke-width="' + (1.6 * s) + '" fill="none" stroke-linecap="round"/>';
    },
    // an accordion / concertina fan of n pleats
    fan: function (cx, cy, r, n, a, b, from, to) {
      from = from == null ? 180 : from; to = to == null ? 360 : to;
      var out = "";
      for (var i = 0; i < n; i++) {
        var a1 = (from + (to - from) * (i / n)) * Math.PI / 180;
        var a2 = (from + (to - from) * ((i + 1) / n)) * Math.PI / 180;
        out += A.poly(cx + "," + cy + " " + (cx + Math.cos(a1) * r).toFixed(1) + "," + (cy + Math.sin(a1) * r).toFixed(1) +
          " " + (cx + Math.cos(a2) * r).toFixed(1) + "," + (cy + Math.sin(a2) * r).toFixed(1), i % 2 ? b : a);
      }
      return out;
    },
    // n petals around a centre
    petals: function (cx, cy, r, n, rx, ry, fill) {
      var out = "";
      for (var i = 0; i < n; i++) {
        var ang = i * (360 / n);
        var px = cx + Math.cos(ang * Math.PI / 180) * r, py = cy + Math.sin(ang * Math.PI / 180) * r;
        out += A.ell(+px.toFixed(1), +py.toFixed(1), rx, ry, fill, +ang.toFixed(1));
      }
      return out;
    },
    star: function (cx, cy, r, fill, points, rot) {
      points = points || 5; rot = rot || -90;
      var p = [];
      for (var i = 0; i < points * 2; i++) {
        var rr = i % 2 ? r * 0.42 : r;
        var ang = (rot + i * (180 / points)) * Math.PI / 180;
        p.push((cx + Math.cos(ang) * rr).toFixed(1) + "," + (cy + Math.sin(ang) * rr).toFixed(1));
      }
      return A.poly(p.join(" "), fill);
    },
    heart: function (cx, cy, s, fill) {
      return A.path("M" + cx + " " + (cy + 6 * s) + " C" + (cx - 9 * s) + " " + (cy - 2 * s) + " " +
        (cx - 7 * s) + " " + (cy - 9 * s) + " " + cx + " " + (cy - 4 * s) + " C" + (cx + 7 * s) + " " +
        (cy - 9 * s) + " " + (cx + 9 * s) + " " + (cy - 2 * s) + " " + cx + " " + (cy + 6 * s) + " Z", fill);
    },
    // a chain of interlocking paper loops
    chain: function (x, y, n, cols, step) {
      var out = "";
      step = step || 17;
      for (var i = 0; i < n; i++) {
        out += '<ellipse cx="' + (x + i * step) + '" cy="' + (y + (i % 2 ? 4 : 0)) + '" rx="10" ry="7" fill="none" stroke="' +
          cols[i % cols.length] + '" stroke-width="5"' + (i % 2 ? ' transform="rotate(70 ' + (x + i * step) + ' ' + (y + 4) + ')"' : '') + '/>';
      }
      return out;
    },
    // dashed fold guide, the mark used all through the instructions
    fold: function (x1, y1, x2, y2) { return A.line(x1, y1, x2, y2, "#b8b2cc", 1.4, "4 3"); },
    // a short caption inside the picture, used sparingly
    label: function (x, y, text, col) {
      return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" ' +
        'font-size="11" font-weight="700" fill="' + (col || "#6c6790") + '">' + text + '</text>';
    },
    // a simple table/floor line so objects don't float
    ground: function (y, col) { return A.ell(100, y || 132, 62, 6, col || "#ece7f7"); }
  };

  window.PaperArt = A;
  window.PAPER_THEMES = PAPER_THEMES;

  // ==================== the studio ====================
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function acts() { return window.PAPER_ACTIVITIES || []; }
  var LEVELS = ["Easy", "Medium", "Hard"];
  var st = { theme: "all", level: "all", open: null };

  function shown() {
    return acts().filter(function (a) {
      return (st.theme === "all" || a.t === st.theme) && (st.level === "all" || a.level === st.level);
    });
  }

  function cardHtml(a) {
    var th = PAPER_THEMES[a.t] || {};
    return '<button type="button" class="pa-card" style="--pac:' + th.colour + '" onclick="Paper.open(\'' + a.id + '\')">' +
      A.box(a.art()) +
      '<span class="pa-name">' + esc(a.name) + '</span>' +
      '<span class="pa-meta"><i class="pa-lvl ' + a.level.toLowerCase() + '">' + a.level + '</i>' +
      '<i class="pa-mins">⏱ ' + a.mins + ' min</i></span>' +
      '<span class="pa-theme">' + th.e + ' ' + esc(th.n) + '</span></button>';
  }

  function detailHtml(a) {
    var th = PAPER_THEMES[a.t] || {};
    return '<div class="pa-detail" id="pa-detail" style="--pac:' + th.colour + '">' +
      '<button type="button" class="pa-back no-print" onclick="Paper.close()">← All activities</button>' +
      '<div class="pa-dhead">' +
        '<div class="pa-dart">' + A.box(a.art()) + '</div>' +
        '<div class="pa-dinfo">' +
          '<span class="pa-theme">' + th.e + ' ' + esc(th.n) + '</span>' +
          '<h3>' + esc(a.emoji) + ' ' + esc(a.name) + '</h3>' +
          '<p class="pa-blurb">' + esc(a.blurb) + '</p>' +
          '<span class="pa-meta"><i class="pa-lvl ' + a.level.toLowerCase() + '">' + a.level + '</i>' +
          '<i class="pa-mins">⏱ about ' + a.mins + ' minutes</i></span>' +
        '</div>' +
      '</div>' +
      '<div class="pa-cols">' +
        '<div class="pa-needs"><h4>🧺 What you need</h4><ul>' +
          a.needs.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") +
        '</ul></div>' +
        '<div class="pa-steps"><h4>📋 How to make it</h4><ol>' +
          a.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") +
        '</ol></div>' +
      '</div>' +
      (a.tip ? '<p class="pa-tip">💡 <b>Tip:</b> ' + esc(a.tip) + '</p>' : '') +
      '<div class="pa-dtools no-print"><button class="btn btn-primary btn-sm" onclick="window.print()">🖨️ Print this activity</button>' +
      '<button class="btn btn-secondary btn-sm" onclick="Paper.surprise()">🎲 Surprise me</button></div>' +
    '</div>';
  }

  function studioHtml() {
    var list = shown();
    var chips = '<button type="button" class="pa-chip' + (st.theme === "all" ? " active" : "") +
      '" onclick="Paper.theme(\'all\')">✨ Every theme</button>' +
      PAPER_THEMES.map(function (c, i) {
        return '<button type="button" class="pa-chip' + (st.theme === i ? " active" : "") + '" style="--pac:' + c.colour +
          '" onclick="Paper.theme(' + i + ')">' + c.e + ' ' + esc(c.n) + '</button>';
      }).join("");
    var lvls = ['<button type="button" class="pa-chip' + (st.level === "all" ? " active" : "") +
      '" onclick="Paper.level(\'all\')">Any level</button>'].concat(LEVELS.map(function (l) {
      return '<button type="button" class="pa-chip lv-' + l.toLowerCase() + (st.level === l ? " active" : "") +
        '" onclick="Paper.level(\'' + l + '\')">' + l + '</button>';
    })).join("");

    return '<div class="pa-studio no-print" id="pa-studio">' +
      '<div class="pa-filters"><div class="pa-chips">' + chips + '</div>' +
      '<div class="pa-chips pa-levels">' + lvls + '</div></div>' +
      '<p class="pa-count">📄 ' + list.length + ' activit' + (list.length === 1 ? "y" : "ies") +
      ' · tap one to see the materials and the steps</p>' +
      (list.length ? '<div class="pa-grid">' + list.map(cardHtml).join("") + '</div>'
                   : '<p class="pa-empty">Nothing matches both of those yet — try another level.</p>') +
    '</div>';
  }

  window.Paper = {
    // The whole board: either the browsing grid or one open activity.
    _html: function () {
      var a = st.open && acts().filter(function (x) { return x.id === st.open; })[0];
      return '<div class="pa-board" id="pa-board">' + (a ? detailHtml(a) : studioHtml()) + '</div>';
    },
    _repaint: function () {
      var b = document.getElementById("pa-board");
      if (b) b.outerHTML = window.Paper._html();
    },
    theme: function (t) { st.theme = t; st.open = null; this._repaint(); },
    level: function (l) { st.level = l; st.open = null; this._repaint(); },
    open: function (id) {
      st.open = id;
      this._repaint();
      var d = document.getElementById("pa-detail");
      if (d && d.scrollIntoView) d.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    close: function () { st.open = null; this._repaint(); },
    surprise: function () {
      var list = acts();
      if (!list.length) return;
      this.open(list[Math.floor(Math.random() * list.length)].id);
    },
    // every activity, laid out to print as a booklet
    _bookHtml: function () {
      return '<div class="pa-book">' + PAPER_THEMES.map(function (th, i) {
        var mine = acts().filter(function (a) { return a.t === i; });
        return '<div class="pa-booksec" style="--pac:' + th.colour + '">' +
          '<h3>' + th.e + ' ' + esc(th.n) + ' <span>' + esc(th.tag) + '</span></h3>' +
          mine.map(function (a) {
            return '<div class="pa-bookitem">' +
              '<div class="pa-bookart">' + A.box(a.art()) + '</div>' +
              '<div class="pa-bookbody"><h4>' + esc(a.emoji) + ' ' + esc(a.name) +
                ' <i class="pa-lvl ' + a.level.toLowerCase() + '">' + a.level + '</i>' +
                ' <i class="pa-mins">⏱ ' + a.mins + ' min</i></h4>' +
              '<p class="pa-bneeds"><b>You need:</b> ' + a.needs.map(esc).join(" · ") + '</p>' +
              '<ol>' + a.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ol>' +
              (a.tip ? '<p class="pa-btip">💡 ' + esc(a.tip) + '</p>' : '') + '</div></div>';
          }).join("") + '</div>';
      }).join("") + '</div>';
    },
    _test: { state: st, shown: shown, themes: PAPER_THEMES }
  };

  // ==================== lessons ====================
  if (typeof LESSONS !== "undefined") {
    LESSONS[30] = {
      paperstudio: {
        title: "The Paper Activity Studio", emoji: "✂️",
        intro: "One hundred things to make out of paper, sorted by theme and by how tricky they are. Every one shows you what it will look like when it's finished, exactly what you need, and the steps in order. Nearly all of them use paper, scissors and glue — nothing you have to go out and buy.",
        learn: [
          "Pick by TIME first: some of these take five minutes, some take half an hour. Check the clock on each card.",
          "Green means Easy, amber means Medium, red means Hard. Start one level below where you think you are; finishing something feels better than giving up on it.",
          "Read every step before you start cutting. Paper does not un-cut!",
          "A fold is only crisp if you press it. Run your thumbnail along it, or the back of a spoon.",
          "If a step goes wrong, don't throw the whole thing away. Most paper mistakes can be covered with another piece of paper."
        ],
        paperStudio: true,
        activity: "🗓️ One-a-Week Challenge: put all one hundred on the fridge and tick one off every week. Two years of Saturday afternoons, and by the end you can fold a crane from memory."
      },

      paperbasics: {
        title: "Paper Skills & Scissor Safety", emoji: "📐",
        intro: "Six skills sit underneath all one hundred activities. Learn these first and every project in the studio gets easier — and safer.",
        learn: [
          "A VALLEY fold makes a V: the crease goes down and the paper comes up on both sides. A MOUNTAIN fold is the opposite — flip the paper over and a valley becomes a mountain.",
          "SCORING means pressing a line into thick card with a ruler and a blunt edge (a dead pen works) before folding. It stops card from cracking.",
          "Cut with the scissors still, and move the PAPER, not your hand. Long smooth cuts beat lots of little snips.",
          "Carry scissors closed, held by the blades with the handles pointing away from you, and hand them over handles first. Always.",
          "Glue sticks are for paper on paper. White glue is for card and anything that must hold weight — give it 20 minutes.",
          "Squares matter in origami. To make one from A4 or Letter paper, fold one corner across until the short edge lines up with the long edge, then cut off the strip left over."
        ],
        activity: "📏 The Fold Test: fold one strip of paper into eight equal parts by halving it three times, then open it up and measure. If the eight are the same width, your folds are accurate enough for anything in the studio.",
        questions: [
          { q: "What shape does a valley fold make?", a: "A V" },
          { q: "What do you get if you flip over a valley fold?", a: "A mountain fold" },
          { q: "What is scoring?", a: "Pressing a line before folding" },
          { q: "Why do you score thick card before folding it?", a: "So it does not crack" },
          { q: "When cutting, what should move: the scissors or the paper?", a: "The paper" },
          { q: "How do you carry scissors safely?", a: "Closed, holding the blades" },
          { q: "Which way do you point the handles when passing scissors?", a: "Towards the other person" },
          { q: "Which glue is best for paper on paper?", a: "A glue stick" },
          { q: "Which glue holds card and heavy things?", a: "White glue" },
          { q: "About how long should white glue dry?", a: "About 20 minutes" },
          { q: "What shape of paper do most origami models start from?", a: "A square" },
          { q: "How do you turn A4 paper into a square?", a: "Fold a corner across and cut off the strip" },
          { q: "What can you use to press a crease really flat?", a: "Your thumbnail or a spoon" },
          { q: "Fold a strip in half three times. How many equal parts?", a: "Eight" },
          { q: "Which is trickier in the studio: green or red?", a: "Red" }
        ]
      }
    };
  }
})();
