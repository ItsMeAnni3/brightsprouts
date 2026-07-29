// BrightSprouts Academy: the globe's country hover card.
//
// The globe has no DOM element per country (it is one canvas, painted per pixel from a flat
// world texture), so unlike the Flora & Fauna chips this cannot be a delegated listener on
// document. It hooks the canvas directly, the same way Globe itself does, and is mounted and
// unmounted alongside it from app.js.
//
// The "3D shape" is the country's own real outline, cropped straight out of the same map
// texture Globe already draws the sphere from, then lifted with a bevel and a drop shadow so it
// reads as a die-cut sticker rather than a flat cutout. Natural Earth's 110m data, which this
// texture is built from, only carries about 177 of the 195 countries as their own coloured
// region: micro-states and small island nations (Vatican City, Singapore, the small Caribbean
// and Pacific nations...) fall inside a neighbour's colour at this resolution, so the globe
// cannot pick them out individually. That is a limit of the source map, not of this card; those
// countries are still reachable through the Countries & Continents and Flora & Fauna tables.
//
// Written without em dashes.
(function () {
  "use strict";

  var HOVER_DELAY = 420;   // a country sliding past under a still cursor should not pop open
  var LEAVE_GRACE = 160;

  var canvas = null, card = null, backdrop = null;
  var hoverTimer = null, leaveTimer = null;
  var hoverId = -1, openId = -1;
  var pinned = false;
  var bboxCache = null;     // built once: country id -> {minX,minY,maxX,maxY} in texture space
  var shapeCache = {};      // country id -> {url, w, h}

  function build() {
    if (card) return;
    backdrop = document.createElement("div");
    backdrop.className = "gp-pop-backdrop";
    card = document.createElement("div");
    card.className = "gp-pop";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-label", "Country card");
    card.innerHTML =
      '<button type="button" class="gp-pop-close" aria-label="Close">✕</button>' +
      '<div class="gp-pop-top">' +
        '<div class="gp-pop-shape"><img class="gp-pop-shape-img" alt=""></div>' +
        '<img class="gp-pop-photo" alt="">' +
      '</div>' +
      '<div class="gp-pop-info">' +
        '<p class="gp-pop-name"></p>' +
        '<p class="gp-pop-desc"></p>' +
        '<p class="gp-pop-fact">\u{1F31F} <span></span></p>' +
      '</div>';
    document.body.appendChild(backdrop);
    document.body.appendChild(card);
    backdrop.addEventListener("click", close);
    card.querySelector(".gp-pop-close").addEventListener("click", close);
    card.addEventListener("mouseenter", function () { if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; } });
    card.addEventListener("mouseleave", function () { if (!pinned) scheduleClose(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && isOpen()) close(); });
  }

  function isOpen() { return card && card.classList.contains("open"); }

  function scheduleClose() {
    if (leaveTimer) clearTimeout(leaveTimer);
    leaveTimer = setTimeout(close, LEAVE_GRACE);
  }

  // ---------- cropping the country's real shape out of the world texture ----------
  function buildBboxes() {
    if (bboxCache || !Globe.ready || !Globe.tex) return;
    bboxCache = {};
    var tw = Globe.tw, th = Globe.th, tex = Globe.tex, revmap = Globe.revmap;
    for (var y = 0; y < th; y++) {
      var rowBase = y * tw * 4;
      for (var x = 0; x < tw; x++) {
        var o = rowBase + x * 4;
        var id = revmap.get((tex[o] << 16) | (tex[o + 1] << 8) | tex[o + 2]);
        if (!id) continue;   // 0 (ocean) or unmatched
        var b = bboxCache[id];
        if (!b) { bboxCache[id] = { minX: x, maxX: x, minY: y, maxY: y }; }
        else {
          if (x < b.minX) b.minX = x; else if (x > b.maxX) b.maxX = x;
          if (y < b.minY) b.minY = y; else if (y > b.maxY) b.maxY = y;
        }
      }
    }
  }

  function cropShape(id) {
    if (shapeCache[id]) return shapeCache[id];
    buildBboxes();
    var b = bboxCache && bboxCache[id];
    if (!b) return null;
    var meta = GLOBE_META.countries[id - 1];
    if (!meta) return null;
    var tw = Globe.tw, tex = Globe.tex;
    var r0 = meta.rgb[0], g0 = meta.rgb[1], b0 = meta.rgb[2];
    var w = b.maxX - b.minX + 1, h = b.maxY - b.minY + 1;
    var oc = document.createElement("canvas");
    oc.width = w; oc.height = h;
    var octx = oc.getContext("2d");
    var img = octx.createImageData(w, h);
    for (var yy = 0; yy < h; yy++) {
      var srcRow = (b.minY + yy) * tw;
      for (var xx = 0; xx < w; xx++) {
        var so = (srcRow + b.minX + xx) * 4, di = (yy * w + xx) * 4;
        if (tex[so] === r0 && tex[so + 1] === g0 && tex[so + 2] === b0) {
          // a flat brand colour, not the pale id-map tint: this is a picture of a place, not a
          // debug view of the lookup texture
          img.data[di] = 124; img.data[di + 1] = 92; img.data[di + 2] = 191; img.data[di + 3] = 255;
        } else {
          img.data[di + 3] = 0;
        }
      }
    }
    octx.putImageData(img, 0, 0);
    var entry = { url: oc.toDataURL("image/png"), w: w, h: h };
    shapeCache[id] = entry;
    return entry;
  }

  // ---------- opening the card ----------
  function place(x, y) {
    var w = card.offsetWidth, h = card.offsetHeight;
    var left = Math.min(Math.max(8, x - w / 2), window.innerWidth - w - 8);
    var top = y + 16;
    if (top + h > window.innerHeight - 8) top = Math.max(8, y - h - 16);
    card.style.left = left + "px";
    card.style.top = top + "px";
  }

  function open(id, x, y, keepPinned) {
    var meta = GLOBE_META.countries[id - 1];
    if (!meta || !meta.iso) return;
    var info = (typeof COUNTRY_INFO !== "undefined") ? COUNTRY_INFO[meta.iso] : null;
    build();
    openId = id;
    pinned = !!keepPinned;
    if (pinned) backdrop.classList.add("show"); else backdrop.classList.remove("show");

    card.querySelector(".gp-pop-name").textContent = meta.name;
    var descEl = card.querySelector(".gp-pop-desc"), factEl = card.querySelector(".gp-pop-fact span");
    var photo = card.querySelector(".gp-pop-photo");
    if (info) {
      descEl.textContent = info.desc || "";
      descEl.style.display = info.desc ? "" : "none";
      factEl.textContent = info.fact || "";
      factEl.parentElement.style.display = info.fact ? "" : "none";
      if (info.img) { photo.src = info.img; photo.alt = meta.name; photo.style.display = ""; }
      else { photo.removeAttribute("src"); photo.style.display = "none"; }
    } else {
      descEl.style.display = "none";
      factEl.parentElement.style.display = "none";
      photo.removeAttribute("src"); photo.style.display = "none";
    }

    var shape = cropShape(id);
    var shapeImg = card.querySelector(".gp-pop-shape-img");
    if (shape) {
      shapeImg.src = shape.url; shapeImg.alt = meta.name + " outline";
      shapeImg.parentElement.style.display = "";
    } else {
      shapeImg.removeAttribute("src");
      shapeImg.parentElement.style.display = "none";
    }

    card.classList.add("open");
    place(x, y);
    Globe.hoverFreeze = true;
    Globe.needsRender = true;
  }

  function close() {
    if (!card) return;
    card.classList.remove("open");
    backdrop.classList.remove("show");
    pinned = false; openId = -1;
    Globe.hoverFreeze = false;
  }

  // ---------- wiring: hooked directly to the canvas, mounted alongside Globe itself ----------
  function onMove(e) {
    if (!canvas || Globe._nDrag()) { clearHover(); return; }
    var r = canvas.getBoundingClientRect();
    var id = Globe._idAt(e.clientX - r.left, e.clientY - r.top);
    if (id === hoverId) return;
    hoverId = id;
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
    if (id <= 0) { if (!pinned) scheduleClose(); return; }
    var cx = e.clientX, cy = e.clientY;
    hoverTimer = setTimeout(function () {
      if (hoverId === id && !Globe._nDrag()) open(id, cx, cy, false);
    }, HOVER_DELAY);
  }
  function clearHover() {
    hoverId = -1;
    if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
  }
  function onLeave() {
    clearHover();
    if (!pinned) scheduleClose();
  }
  function onUp(e) {
    if (!canvas || Globe.dragMoved >= 6) return;   // a drag, not a tap
    var r = canvas.getBoundingClientRect();
    var id = Globe._idAt(e.clientX - r.left, e.clientY - r.top);
    if (id > 0) open(id, e.clientX, e.clientY, true);
  }

  function mount() {
    canvas = document.getElementById("globe-canvas");
    if (!canvas) return;
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerup", onUp);
  }
  function unmount() {
    if (canvas) {
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerup", onUp);
    }
    canvas = null;
    clearHover();
    close();
  }

  window.GlobePopup = {
    mount: mount,
    unmount: unmount,
    close: close,
    _test: { cropShape: cropShape, buildBboxes: buildBboxes, bboxOf: function (id) { buildBboxes(); return bboxCache && bboxCache[id]; } }
  };
})();
