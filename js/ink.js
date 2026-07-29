// BrightSprouts Academy: write and draw on any sheet with a stylus, a finger or a mouse.
//
// One reusable layer that clips itself over a lesson card, so every worksheet, maze, colouring
// page and tracing sheet gets handwriting for free rather than each one growing its own canvas.
//
// Written without em dashes.
//
// The things that actually matter for a child holding a pen:
//
//  * PRESSURE. A real stylus reports 0 to 1 in PointerEvent.pressure, and using it is the whole
//    difference between "a line appeared" and "I am drawing". A mouse reports 0.5, and some
//    report 0 while the button is down, so 0 is treated as "no pressure sensor" rather than as
//    "pressed infinitely lightly".
//  * PALM REJECTION. A child rests their hand on the screen. Once a pen has been seen, touch
//    input is ignored for a while, so the palm does not scribble across the page.
//  * THE ERASER END. A stylus turned upside down arrives as pointerType "eraser". That should
//    just erase, with no need to find a button, because that is what the hardware promised.
//  * COALESCED EVENTS. Pens report far faster than the screen refreshes. Without
//    getCoalescedEvents a fast stroke comes out as straight segments between distant points.
//  * NORMALISED COORDINATES. Strokes are stored as fractions of the card's width, never pixels,
//    so rotating a tablet or printing does not leave the writing somewhere else on the page.
(function () {
  "use strict";

  var PENS = [
    { key: "ink",    name: "Pencil",      colour: "#2d2a4a", width: 2.6, alpha: 1 },
    { key: "blue",   name: "Blue",        colour: "#1f6feb", width: 2.6, alpha: 1 },
    { key: "red",    name: "Red",         colour: "#e2453b", width: 2.6, alpha: 1 },
    { key: "green",  name: "Green",       colour: "#2f9e44", width: 2.6, alpha: 1 },
    { key: "fat",    name: "Fat crayon",  colour: "#7c5cbf", width: 9,   alpha: 1 },
    { key: "hi",     name: "Highlighter", colour: "#ffd166", width: 16,  alpha: 0.4 }
  ];

  var state = {
    on: false,
    pen: "ink",
    erasing: false,
    strokes: [],      // { pen, pts: [[x, y, pressure], ...] } with x and y as fractions of width
    undone: [],
    key: null,        // where this sheet's writing is saved
    lastPenAt: 0,     // when a real stylus was last seen, for palm rejection
    penDown: false
  };

  var host = null, canvas = null, ctx = null, dpr = 1, boxW = 0, boxH = 0;
  var live = null;    // the stroke being drawn right now
  var saveTimer = null;

  function penByKey(k) {
    for (var i = 0; i < PENS.length; i++) if (PENS[i].key === k) return PENS[i];
    return PENS[0];
  }

  // ==================== the canvas ====================

  function sizeCanvas() {
    if (!host || !canvas) return;
    boxW = host.offsetWidth;
    boxH = host.offsetHeight;
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

  function strokePath(s) {
    if (!ctx || !s.pts.length) return;
    var p = penByKey(s.pen);
    ctx.globalAlpha = p.alpha;
    ctx.strokeStyle = p.colour;
    if (s.pts.length === 1) {
      var only = s.pts[0];
      ctx.beginPath();
      ctx.arc(only[0] * boxW, only[1] * boxW, Math.max(0.6, p.width * only[2] * 0.6), 0, Math.PI * 2);
      ctx.fillStyle = p.colour;
      ctx.fill();
      ctx.globalAlpha = 1;
      return;
    }
    // Each segment is drawn on its own so the width can follow the pressure along the stroke.
    // A single path with one lineWidth would throw that information away.
    for (var i = 1; i < s.pts.length; i++) {
      var a = s.pts[i - 1], b = s.pts[i];
      var press = (a[2] + b[2]) / 2;
      ctx.lineWidth = Math.max(0.5, p.width * (0.35 + press * 1.3));
      ctx.beginPath();
      ctx.moveTo(a[0] * boxW, a[1] * boxW);
      ctx.lineTo(b[0] * boxW, b[1] * boxW);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function redraw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, boxW, boxH);
    for (var i = 0; i < state.strokes.length; i++) strokePath(state.strokes[i]);
    if (live) strokePath(live);
  }

  // ==================== input ====================

  function pointFrom(e) {
    var r = canvas.getBoundingClientRect();
    var press = e.pressure;
    // A mouse reports 0.5. Several report 0 even while held down, which must not be read as a
    // feather-light touch, so treat 0 from a non-pen as "this device has no pressure sensor".
    if (!press || press <= 0) press = (e.pointerType === "pen") ? 0.5 : 0.5;
    return [(e.clientX - r.left) / boxW, (e.clientY - r.top) / boxW, press];
  }

  // True when this pointer should be ignored: a palm or a stray finger while a pen is in use.
  function rejected(e) {
    if (e.pointerType === "pen" || e.pointerType === "eraser") return false;
    if (e.pointerType !== "touch") return false;
    if (state.penDown) return true;
    return (Date.now() - state.lastPenAt) < 1200;
  }

  // Distance from a point to a line SEGMENT, not to its ends. A quick stroke may be stored as
  // only two points metres apart, and rubbing at the middle of it has to work: measuring to the
  // stored points alone would find nothing there and the mark would refuse to go.
  function distToSeg(px, py, ax, ay, bx, by) {
    var vx = bx - ax, vy = by - ay;
    var len = vx * vx + vy * vy;
    var t = len ? ((px - ax) * vx + (py - ay) * vy) / len : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    var dx = px - (ax + t * vx), dy = py - (ay + t * vy);
    return Math.sqrt(dx * dx + dy * dy);
  }

  function hitStroke(pt) {
    // Stroke level erase: whole marks disappear. Kids find that far easier to aim than nibbling
    // pixels away, and it keeps undo simple.
    var near = 14 / (boxW || 1);
    for (var i = state.strokes.length - 1; i >= 0; i--) {
      var pts = state.strokes[i].pts;
      if (pts.length === 1) {
        var dx = pts[0][0] - pt[0], dy = pts[0][1] - pt[1];
        if (Math.sqrt(dx * dx + dy * dy) < near) return i;
        continue;
      }
      for (var j = 1; j < pts.length; j++) {
        if (distToSeg(pt[0], pt[1], pts[j - 1][0], pts[j - 1][1], pts[j][0], pts[j][1]) < near) return i;
      }
    }
    return -1;
  }

  function onDown(e) {
    if (!state.on || rejected(e)) return;
    if (e.pointerType === "pen" || e.pointerType === "eraser") {
      state.lastPenAt = Date.now();
      state.penDown = true;
    }
    // The barrel button and the flipped end of a stylus both mean erase, without hunting for a
    // button on screen.
    var erasing = state.erasing || e.pointerType === "eraser" || (e.buttons & 32) === 32;
    try { canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId); } catch (err) { /* not active */ }
    e.preventDefault();
    var pt = pointFrom(e);
    if (erasing) {
      live = { erase: true };
      eraseAt(pt);
      return;
    }
    live = { pen: state.pen, pts: [pt] };
    redraw();
  }

  function eraseAt(pt) {
    var i = hitStroke(pt);
    if (i >= 0) {
      state.strokes.splice(i, 1);
      state.undone.length = 0;
      redraw();
      queueSave();
    }
  }

  function onMove(e) {
    if (!state.on || !live || rejected(e)) return;
    if (e.pointerType === "pen" || e.pointerType === "eraser") state.lastPenAt = Date.now();
    e.preventDefault();
    if (live.erase) { eraseAt(pointFrom(e)); return; }
    // A pen reports far faster than the screen redraws. Without this the fast bits of a stroke
    // come out as long straight lines between whichever points happened to land on a frame.
    var evs = (e.getCoalescedEvents && e.getCoalescedEvents()) || [];
    if (!evs.length) evs = [e];
    for (var i = 0; i < evs.length; i++) live.pts.push(pointFrom(evs[i]));
    redraw();
  }

  function onUp(e) {
    if (!live) { state.penDown = false; return; }
    if (e && e.pointerType === "pen") state.penDown = false;
    if (!live.erase && live.pts.length) {
      state.strokes.push(live);
      state.undone.length = 0;
      queueSave();
    }
    live = null;
    redraw();
  }

  // ==================== saving ====================

  function queueSave() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 400);
  }
  function save() {
    if (!state.key) return;
    try {
      // Round hard: three decimals is well under a pixel on any screen and keeps a long sheet of
      // writing inside the localStorage budget.
      var packed = state.strokes.map(function (s) {
        return { p: s.pen, t: s.pts.map(function (q) {
          return [+q[0].toFixed(3), +q[1].toFixed(3), +q[2].toFixed(2)];
        }) };
      });
      if (!packed.length) localStorage.removeItem(state.key);
      else localStorage.setItem(state.key, JSON.stringify(packed));
    } catch (err) { /* a full or blocked localStorage must never break the pen */ }
  }
  function load(key) {
    state.key = key;
    state.strokes = [];
    state.undone = [];
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return;
      var packed = JSON.parse(raw);
      if (!Array.isArray(packed)) return;
      state.strokes = packed.map(function (s) {
        return { pen: s.p, pts: (s.t || []).map(function (q) { return [q[0], q[1], q[2]]; }) };
      }).filter(function (s) { return s.pts.length; });
    } catch (err) { state.strokes = []; }
  }

  // ==================== public ====================

  function attach(el, key) {
    detach();
    if (!el) return;
    host = el;
    load(key);
    canvas = document.createElement("canvas");
    canvas.className = "inklayer";
    canvas.setAttribute("aria-hidden", "true");
    host.appendChild(canvas);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onUp);
    // A stylus with a barrel button fires contextmenu; that must not open a menu mid-stroke.
    canvas.addEventListener("contextmenu", function (e) { if (state.on) e.preventDefault(); });
    sizeCanvas();
    applyMode();
    window.addEventListener("resize", sizeCanvas);
  }

  function detach() {
    if (saveTimer) { clearTimeout(saveTimer); save(); }
    window.removeEventListener("resize", sizeCanvas);
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    canvas = null; ctx = null; host = null; live = null;
  }

  function applyMode() {
    if (canvas) canvas.classList.toggle("on", state.on);
    document.body.classList.toggle("inkon", state.on);
  }

  var Ink = {
    pens: PENS,
    attach: attach,
    detach: detach,
    isOn: function () { return state.on; },
    setOn: function (v) { state.on = !!v; applyMode(); return state.on; },
    toggle: function () { return Ink.setOn(!state.on); },
    setPen: function (k) { state.pen = penByKey(k).key; state.erasing = false; },
    currentPen: function () { return state.pen; },
    setErase: function (v) { state.erasing = !!v; },
    isErasing: function () { return state.erasing; },
    undo: function () {
      if (!state.strokes.length) return false;
      state.undone.push(state.strokes.pop());
      redraw(); queueSave(); return true;
    },
    redo: function () {
      if (!state.undone.length) return false;
      state.strokes.push(state.undone.pop());
      redraw(); queueSave(); return true;
    },
    clear: function () {
      if (!state.strokes.length) return false;
      state.undone = state.strokes.slice();
      state.strokes = [];
      redraw(); save(); return true;
    },
    count: function () { return state.strokes.length; },
    // Does this device have a pen at all? Used only to word the hint, never to withhold the
    // feature: a mouse and a finger both draw perfectly well.
    hasPen: function () {
      return !!(window.PointerEvent && window.matchMedia &&
                window.matchMedia("(any-pointer: fine)").matches);
    },
    _test: {
      state: state,
      strokes: function () { return state.strokes; },
      rejected: rejected,
      hitStroke: hitStroke,
      distToSeg: distToSeg,
      load: load,
      save: save,
      sizeCanvas: sizeCanvas,
      canvas: function () { return canvas; },
      penByKey: penByKey
    }
  };
  window.Ink = Ink;
})();
