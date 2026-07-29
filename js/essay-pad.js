// BrightSprouts Academy: the Writing Pad (LESSONS[37].pad).
//
// A sheet of stationery you can write on with a stylus, a finger or a mouse, in ten themes, and
// a button that turns the handwriting into typed notes.
//
// Written without em dashes.
//
// ABOUT TURNING HANDWRITING INTO TEXT, honestly:
//
// There is a real browser API for this, navigator.createHandwritingRecognizer. It runs entirely
// on the device, so a child's writing never leaves the machine, which is the only kind of
// handwriting recognition worth putting in front of a child. It ships on ChromeOS and on some
// Chrome and Edge builds, and it is missing on plenty of others, including every current Safari
// and Firefox.
//
// So this pad uses it when it is there and says plainly when it is not, rather than pretending.
// With no recogniser the Tidy Up panel still keeps the page as a note, saved and printable, and
// offers a typing box, because "your browser cannot do this yet" is a better answer than a
// button that quietly does nothing.
//
// What it will NOT do is send a child's handwriting to somebody else's server to be read.
(function () {
  if (typeof LESSONS === "undefined") return;

  // ==================== stationery ====================
  // Each theme is a whole sheet: the paper, the ruled lines, the colour the pen starts as, and
  // an edge treatment that gives it some thickness on the page.
  var THEMES = [
    { key: "note",   name: "Notebook",   emoji: "📓", edge: "spiral",
      paper: "linear-gradient(160deg,#ffffff,#f3f7ff)", rule: "#c3daf0", margin: "#f2a3b3",
      ink: "pencil", dark: false },
    { key: "sunny",  name: "Sunny Meadow", emoji: "🌻", edge: "torn",
      paper: "linear-gradient(160deg,#fffdf0,#fff0c9)", rule: "#e8cf8e", margin: "#f0b429",
      ink: "brown", dark: false },
    { key: "ocean",  name: "Ocean",      emoji: "🌊", edge: "tape",
      paper: "linear-gradient(160deg,#f2fbff,#cfeaf7)", rule: "#96c9e2", margin: "#2f8fbf",
      ink: "blue", dark: false },
    { key: "candy",  name: "Candy",      emoji: "🍭", edge: "stitched",
      paper: "linear-gradient(160deg,#fff5fa,#ffdcec)", rule: "#f4aecb", margin: "#e0559a",
      ink: "pink", dark: false },
    { key: "kraft",  name: "Kraft Paper", emoji: "📦", edge: "tape",
      paper: "linear-gradient(160deg,#f0dcbb,#e0c79a)", rule: "#c3a578", margin: "#a07c48",
      ink: "pencil", dark: false },
    { key: "mint",   name: "Mint",       emoji: "🌿", edge: "spiral",
      paper: "linear-gradient(160deg,#f3fff8,#d3f2e0)", rule: "#9ad4b6", margin: "#2f9e6b",
      ink: "teal", dark: false },
    { key: "rainbow", name: "Rainbow",   emoji: "🌈", edge: "stitched",
      paper: "linear-gradient(160deg,#fff6fb,#eef4ff 45%,#f2fff4)", rule: "#c9c4dd", margin: "#7c5cbf",
      ink: "purple", dark: false },
    { key: "space",  name: "Space",      emoji: "🚀", edge: "glow",
      paper: "linear-gradient(160deg,#1e2450,#0d1130)", rule: "#3a4382", margin: "#7a86c9",
      ink: "white", dark: true },
    { key: "chalk",  name: "Chalkboard", emoji: "📝", edge: "frame",
      paper: "linear-gradient(160deg,#2f4f42,#233a31)", rule: "#4a6c5d", margin: "#7fb8a0",
      ink: "white", dark: true },
    { key: "map",    name: "Pirate Map", emoji: "🏴‍☠️", edge: "torn",
      paper: "linear-gradient(160deg,#f6e6c4,#e5cfa0)", rule: "#c9ad78", margin: "#8a6522",
      ink: "brown", dark: false }
  ];
  var RULE_H = 38;   // how far apart the writing lines sit, in CSS pixels

  var state = {
    theme: "note",
    colour: "pencil",
    size: "medium",
    strokes: [],     // { c, w, pts: [[x, y, t], ...] } with x and y as fractions of the pad width
    undone: [],
    live: null,
    lastPenAt: 0,
    penDown: false,
    text: ""         // whatever the tidy-up produced, or the child typed
  };

  var pad = null, canvas = null, ctx = null, boxW = 0, boxH = 0, dpr = 1, t0 = 0;

  function themeByKey(k) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].key === k) return THEMES[i];
    return THEMES[0];
  }
  // The pad borrows the pen palette from the writing layer so a child does not meet two
  // different sets of colours on one site.
  function colours() { return (typeof Ink !== "undefined") ? Ink.colours : [{ key: "pencil", name: "Pencil", hex: "#2d2a4a" }]; }
  function sizes() { return (typeof Ink !== "undefined") ? Ink.sizes : [{ key: "medium", name: "Medium", width: 3.4 }]; }
  function hexOf(k) {
    var c = colours();
    for (var i = 0; i < c.length; i++) if (c[i].key === k) return c[i].hex;
    return "#2d2a4a";
  }
  function widthOf(k) {
    var z = sizes();
    for (var i = 0; i < z.length; i++) if (z[i].key === k) return z[i].width;
    return 3.4;
  }

  // ==================== drawing ====================

  function sizeCanvas() {
    if (!pad || !canvas) return;
    boxW = pad.offsetWidth;
    boxH = pad.offsetHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    canvas.width = Math.max(1, Math.round(boxW * dpr));
    canvas.height = Math.max(1, Math.round(boxH * dpr));
    canvas.style.width = boxW + "px";
    canvas.style.height = boxH + "px";
    ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    redraw();
  }

  function drawStroke(s) {
    if (!ctx || !s.pts.length) return;
    ctx.strokeStyle = s.c;
    ctx.fillStyle = s.c;
    if (s.pts.length === 1) {
      ctx.beginPath();
      ctx.arc(s.pts[0][0] * boxW, s.pts[0][1] * boxW, Math.max(0.5, s.w * 0.55), 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.lineWidth = s.w;
    ctx.beginPath();
    ctx.moveTo(s.pts[0][0] * boxW, s.pts[0][1] * boxW);
    for (var i = 1; i < s.pts.length; i++) ctx.lineTo(s.pts[i][0] * boxW, s.pts[i][1] * boxW);
    ctx.stroke();
  }

  function redraw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, boxW, boxH);
    for (var i = 0; i < state.strokes.length; i++) drawStroke(state.strokes[i]);
    if (state.live) drawStroke(state.live);
  }

  // ==================== input ====================

  function rejected(e) {
    if (e.pointerType === "pen" || e.pointerType === "eraser") return false;
    if (e.pointerType !== "touch") return false;
    if (state.penDown) return true;
    return (Date.now() - state.lastPenAt) < 1200;
  }

  function pt(e) {
    var r = canvas.getBoundingClientRect();
    // The time of each point matters: the recogniser uses the order and speed of the writing,
    // not just the shape it left behind.
    return [(e.clientX - r.left) / boxW, (e.clientY - r.top) / boxW, Date.now() - t0];
  }

  function onDown(e) {
    if (rejected(e)) return;
    if (e.pointerType === "pen" || e.pointerType === "eraser") { state.lastPenAt = Date.now(); state.penDown = true; }
    try { canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId); } catch (err) { /* not active */ }
    e.preventDefault();
    if (!t0) t0 = Date.now();
    if (e.pointerType === "eraser" || (e.buttons & 32) === 32) { state.live = { erase: true }; eraseAt(pt(e)); return; }
    state.live = { c: hexOf(state.colour), w: widthOf(state.size), pts: [pt(e)] };
    redraw();
  }

  function eraseAt(p) {
    var near = 16 / (boxW || 1);
    for (var i = state.strokes.length - 1; i >= 0; i--) {
      var pts = state.strokes[i].pts;
      for (var j = 1; j < pts.length; j++) {
        if (segDist(p[0], p[1], pts[j - 1][0], pts[j - 1][1], pts[j][0], pts[j][1]) < near) {
          state.strokes.splice(i, 1); redraw(); return;
        }
      }
      if (pts.length === 1) {
        var dx = pts[0][0] - p[0], dy = pts[0][1] - p[1];
        if (Math.sqrt(dx * dx + dy * dy) < near) { state.strokes.splice(i, 1); redraw(); return; }
      }
    }
  }
  function segDist(px, py, ax, ay, bx, by) {
    var vx = bx - ax, vy = by - ay, len = vx * vx + vy * vy;
    var t = len ? ((px - ax) * vx + (py - ay) * vy) / len : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    var dx = px - (ax + t * vx), dy = py - (ay + t * vy);
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onMove(e) {
    if (!state.live || rejected(e)) return;
    if (e.pointerType === "pen") state.lastPenAt = Date.now();
    e.preventDefault();
    if (state.live.erase) { eraseAt(pt(e)); return; }
    var evs = (e.getCoalescedEvents && e.getCoalescedEvents()) || [];
    if (!evs.length) evs = [e];
    for (var i = 0; i < evs.length; i++) state.live.pts.push(pt(evs[i]));
    redraw();
  }

  function onUp(e) {
    if (e && e.pointerType === "pen") state.penDown = false;
    if (!state.live) return;
    if (!state.live.erase && state.live.pts.length) {
      state.strokes.push(state.live);
      state.undone.length = 0;
    }
    state.live = null;
    redraw();
    paintCounts();
  }

  function paintCounts() {
    var n = document.getElementById("pad-count");
    if (n) n.textContent = state.strokes.length ? (state.strokes.length + " mark" + (state.strokes.length === 1 ? "" : "s")) : "nothing written yet";
  }

  // ==================== handwriting to text ====================

  // Is there a recogniser on this device at all? Answered honestly, and only once.
  function canRecognise() {
    return !!(navigator.createHandwritingRecognizer && navigator.queryHandwritingRecognizerSupport);
  }

  async function recognise() {
    if (!canRecognise()) return { ok: false, reason: "unsupported" };
    if (!state.strokes.length) return { ok: false, reason: "empty" };
    var rec = null;
    try {
      var support = await navigator.queryHandwritingRecognizerSupport({ languages: ["en"] });
      if (!support || support.languages === false) return { ok: false, reason: "unsupported" };
      rec = await navigator.createHandwritingRecognizer({ languages: ["en"] });
      var drawing = rec.startDrawing({
        recognitionType: "text",
        inputType: "stylus",
        textContext: "",
        alternatives: 1
      });
      state.strokes.forEach(function (s) {
        var hs = new HandwritingStroke();
        s.pts.forEach(function (p) {
          // back into pixels: the recogniser expects a real drawing, not fractions
          hs.addPoint({ x: p[0] * boxW, y: p[1] * boxW, t: p[2] });
        });
        drawing.addStroke(hs);
      });
      var preds = await drawing.getPrediction();
      if (rec.finish) rec.finish();
      if (!preds || !preds.length) return { ok: false, reason: "noread" };
      return { ok: true, text: preds[0].text || "" };
    } catch (err) {
      try { if (rec && rec.finish) rec.finish(); } catch (e2) { /* ignore */ }
      return { ok: false, reason: "failed", detail: String(err && err.message || err) };
    }
  }

  // ==================== markup ====================

  function html() {
    var th = themeByKey(state.theme);
    var cols = colours(), zs = sizes();
    var h = '<div class="padwrap">';
    h += '<div class="padbar no-print">' +
      THEMES.map(function (t) {
        return '<button class="btn btn-sm ' + (t.key === state.theme ? "btn-primary" : "btn-ghost") +
          '" onclick="App.padTheme(\'' + t.key + '\')">' + t.emoji + " " + t.name + '</button>';
      }).join("") + '</div>';
    h += '<div class="padbar no-print">' +
      '<span class="inkcolours">' + cols.map(function (c) {
        return '<button class="inkpen' + (c.key === state.colour ? " on" : "") + '" data-padcolour="' + c.key +
          '" title="' + c.name + '" aria-label="' + c.name + '" onclick="App.padColour(\'' + c.key +
          '\')"><i style="background:' + c.hex + '"></i></button>';
      }).join("") + '</span>' +
      '<span class="inksizes">' + zs.map(function (z) {
        return '<button class="inksize' + (z.key === state.size ? " on" : "") + '" data-padsize="' + z.key +
          '" title="' + z.name + '" aria-label="' + z.name + ' line" onclick="App.padSize(\'' + z.key +
          '\')"><i style="width:' + (z.width * 2.2).toFixed(1) + 'px;height:' + (z.width * 2.2).toFixed(1) + 'px"></i></button>';
      }).join("") + '</span>' +
      '<button class="btn btn-sm btn-ghost" onclick="App.padUndo()">↶ Undo</button>' +
      '<button class="btn btn-sm btn-ghost" onclick="App.padClear()">🗑️ Clear page</button>' +
      '<span class="padcount" id="pad-count">nothing written yet</span>' +
      '</div>';
    h += '<div class="padpaper edge-' + th.edge + (th.dark ? " dark" : "") + '" id="padpaper" style="' +
      "background:" + th.paper + ";" +
      "--rule:" + th.rule + ";--margin:" + th.margin + ";--ruleh:" + RULE_H + "px" + '">' + edgeBits(th) + '</div>';
    h += '<div class="padtools no-print">' +
      '<button class="btn btn-primary" onclick="App.padTidy()">✨ Turn my writing into typed notes</button>' +
      '<button class="btn btn-secondary" onclick="window.print()">🖨️ Print my page</button>' +
      '</div>';
    h += '<div class="padnotes" id="padnotes" hidden></div>';
    h += '</div>';
    return h;
  }

  // The spiral holes, the tape corners and the torn edge are real elements rather than pseudo
  // elements, because a pseudo element cannot sit above the canvas and below the shadow.
  function edgeBits(th) {
    if (th.edge === "spiral") return '<span class="spiral"></span>';
    if (th.edge === "tape") return '<span class="tape tl"></span><span class="tape br"></span>';
    if (th.edge === "torn") return '<span class="torn"></span>';
    return "";
  }

  function mount() {
    var el = document.getElementById("padpaper");
    if (!el) { pad = canvas = ctx = null; return; }
    pad = el;
    canvas = document.createElement("canvas");
    canvas.className = "padink";
    pad.appendChild(canvas);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onUp);
    canvas.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    sizeCanvas();
    paintCounts();
    window.addEventListener("resize", sizeCanvas);
  }

  window.EssayPad = {
    themes: THEMES,
    ruleHeight: RULE_H,
    html: html,
    mount: mount,
    recognise: recognise,
    canRecognise: canRecognise,
    setTheme: function (k) { state.theme = themeByKey(k).key; state.colour = themeByKey(k).ink; },
    setColour: function (k) { state.colour = k; },
    setSize: function (k) { state.size = k; },
    theme: function () { return state.theme; },
    colour: function () { return state.colour; },
    size: function () { return state.size; },
    undo: function () { if (!state.strokes.length) return false; state.undone.push(state.strokes.pop()); redraw(); paintCounts(); return true; },
    clear: function () { state.strokes = []; state.undone = []; redraw(); paintCounts(); return true; },
    count: function () { return state.strokes.length; },
    setText: function (t) { state.text = t || ""; },
    text: function () { return state.text; },
    _test: {
      state: state,
      themeByKey: themeByKey,
      segDist: segDist,
      redraw: redraw,
      sizeCanvas: sizeCanvas,
      canvas: function () { return canvas; },
      hexOf: hexOf,
      widthOf: widthOf
    }
  };
})();
