// BrightSprouts Academy — interactive 3D globe.
// Renders an orthographic sphere by sampling an equirectangular political-map texture
// (real Natural Earth geometry, see globe-data.js) per pixel, with directional lighting for
// a 3D look. Drag to rotate, wheel/pinch/buttons to zoom, tap a country to identify it.
const Globe = {
  active: false, ready: false, spinning: true,
  lon0: 20, lat0: 12, zoom: 1,
  cw: 0, ch: 0, R: 0, cx: 0, cy: 0,
  tex: null, tw: 0, th: 0, revmap: null,
  cache: null, out: null, needsRender: true,
  pointers: {}, dragMoved: 0, lastPinch: 0,
  onPick: null,

  MINZOOM: 1, MAXZOOM: 6,

  // Load the texture once (shared across mounts). Calls cb when ready.
  _loadTexture(cb) {
    if (this.tex) { cb(); return; }
    const img = new Image();
    img.onload = () => {
      this.tw = img.naturalWidth; this.th = img.naturalHeight;
      const oc = document.createElement("canvas");
      oc.width = this.tw; oc.height = this.th;
      const g = oc.getContext("2d");
      g.drawImage(img, 0, 0);
      this.tex = g.getImageData(0, 0, this.tw, this.th).data;
      // exact-colour -> country id lookup (ocean = 0)
      this.revmap = new Map();
      const o = GLOBE_META.ocean; this.revmap.set((o[0] << 16) | (o[1] << 8) | o[2], 0);
      GLOBE_META.countries.forEach((c, i) => {
        const k = (c.rgb[0] << 16) | (c.rgb[1] << 8) | c.rgb[2];
        this.revmap.set(k, i + 1);   // id is index+1
      });
      cb();
    };
    img.onerror = () => { const el = document.getElementById("globe-status"); if (el) el.textContent = "Sorry — the map image couldn't load."; };
    img.src = "globe-map.png";
  },

  mount(onPick) {
    const cv = document.getElementById("globe-canvas");
    if (!cv) return;
    this.canvas = cv; this.ctx = cv.getContext("2d");
    this.onPick = onPick || null;
    this.active = true;
    this._resize();
    this._bind();
    this._loadTexture(() => { this.ready = true; this.needsRender = true; });
    this._loop();
  },
  unmount() {
    this.active = false; this.pointers = {};
    if (this._ro) { try { this._ro.disconnect(); } catch (e) {} this._ro = null; }
  },

  _resize() {
    const cv = this.canvas; if (!cv) return;
    const wrap = cv.parentElement;
    const size = Math.max(220, Math.min(560, wrap.clientWidth - 4));
    this.cw = size; this.ch = size;
    cv.width = size; cv.height = size;      // backing == CSS px (dpr 1) to bound per-pixel work
    cv.style.width = size + "px"; cv.style.height = size + "px";
    this.cx = size / 2; this.cy = size / 2;
    this.out = this.ctx.createImageData(size, size);
    this._buildCache();
  },

  // Per-pixel geometry cache. Depends on zoom (R) and tilt (lat0); NOT on spin (lon0),
  // so spinning is a cheap column shift with no trig. Rebuilt on zoom/tilt/resize.
  _buildCache() {
    const cw = this.cw, ch = this.ch, n = cw * ch;
    this.R = (Math.min(cw, ch) / 2 - 6) * this.zoom;
    const R = this.R, cx = this.cx, cy = this.cy;
    const inside = new Uint8Array(n), rowW = new Int32Array(n),
          colBase = new Float32Array(n), shade = new Float32Array(n);
    const lat0 = this.lat0 * Math.PI / 180, sinLat0 = Math.sin(lat0), cosLat0 = Math.cos(lat0);
    const tw = this.tw || 1, th = this.th || 1;
    // light from upper-left, toward viewer
    let lx = -0.4, ly = 0.55, lz = 0.85; const ll = Math.hypot(lx, ly, lz); lx /= ll; ly /= ll; lz /= ll;
    for (let py = 0; py < ch; py++) {
      for (let px = 0; px < cw; px++) {
        const i = py * cw + px;
        const x = (px - cx) / R, y = -(py - cy) / R;   // y up
        const rho2 = x * x + y * y;
        if (rho2 > 1) { inside[i] = 0; continue; }
        inside[i] = 1;
        const cosc = Math.sqrt(1 - rho2);               // = z (view-space normal z)
        // inverse orthographic (lon relative to centre; spin added at draw time)
        const lat = Math.asin(cosc * sinLat0 + y * cosLat0);
        const lonRel = Math.atan2(x, cosc * cosLat0 - y * sinLat0);
        const latDeg = lat * 180 / Math.PI, lonRelDeg = lonRel * 180 / Math.PI;
        let row = Math.floor((90 - latDeg) / 180 * th); if (row < 0) row = 0; else if (row >= th) row = th - 1;
        rowW[i] = row * tw;
        colBase[i] = (lonRelDeg + 180) / 360 * tw;
        // directional light on the sphere normal (x, y, cosc)
        let s = 0.5 + 0.6 * (x * lx + y * ly + cosc * lz);
        shade[i] = s < 0.35 ? 0.35 : (s > 1 ? 1 : s);
      }
    }
    this.cache = { inside, rowW, colBase, shade };
  },

  _render() {
    if (!this.ready || !this.cache || !this.out) return;
    const { inside, rowW, colBase, shade } = this.cache;
    const tex = this.tex, tw = this.tw, out = this.out.data, n = this.cw * this.ch;
    const spin = (this.lon0 / 360) * tw;
    for (let i = 0, o = 0; i < n; i++, o += 4) {
      if (!inside[i]) { out[o + 3] = 0; continue; }
      let col = colBase[i] + spin; col %= tw; if (col < 0) col += tw; col |= 0;
      const t = (rowW[i] + col) * 4, s = shade[i];
      out[o] = tex[t] * s; out[o + 1] = tex[t + 1] * s; out[o + 2] = tex[t + 2] * s; out[o + 3] = 255;
    }
    this.ctx.putImageData(this.out, 0, 0);
    // soft atmosphere ring
    const ctx = this.ctx;
    ctx.save();
    ctx.beginPath(); ctx.arc(this.cx, this.cy, this.R, 0, 7); ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(120,170,230,.6)"; ctx.stroke();
    ctx.restore();
  },

  _loop() {
    if (!this.active || !document.getElementById("globe-canvas")) { this.active = false; return; }
    if (this.spinning && !this._nDrag()) { this.lon0 = (this.lon0 + 0.14) % 360; this.needsRender = true; }
    if (this.needsRender) { this._render(); this.needsRender = false; }
    requestAnimationFrame(() => this._loop());
  },
  _nDrag() { return Object.keys(this.pointers).length > 0; },

  // ---- country lookup at a canvas pixel ----
  _idAt(px, py) {
    if (!this.ready || !this.cache) return -1;
    px |= 0; py |= 0;
    if (px < 0 || py < 0 || px >= this.cw || py >= this.ch) return -1;
    const i = py * this.cw + px;
    if (!this.cache.inside[i]) return -1;
    let col = this.cache.colBase[i] + (this.lon0 / 360) * this.tw;
    col %= this.tw; if (col < 0) col += this.tw; col |= 0;
    const t = this.cache.rowW[i] + col;
    const r = this.tex[t * 4], g = this.tex[t * 4 + 1], b = this.tex[t * 4 + 2];
    const id = this.revmap.get((r << 16) | (g << 8) | b);
    return id == null ? -1 : id;
  },

  // ---- controls ----
  setZoom(z) { this.zoom = Math.max(this.MINZOOM, Math.min(this.MAXZOOM, z)); this._buildCache(); this.needsRender = true; },
  zoomBy(f) { this.setZoom(this.zoom * f); },
  toggleSpin() { this.spinning = !this.spinning; this.needsRender = true; return this.spinning; },
  reset() { this.lon0 = 20; this.lat0 = 12; this.zoom = 1; this.spinning = true; this._buildCache(); this.needsRender = true; },

  _bind() {
    const cv = this.canvas;
    const pos = e => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    cv.style.touchAction = "none";
    cv.onpointerdown = e => {
      cv.setPointerCapture(e.pointerId);
      this.pointers[e.pointerId] = pos(e);
      this.dragMoved = 0;
      if (Object.keys(this.pointers).length === 2) {
        const p = Object.values(this.pointers);
        this.lastPinch = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      }
    };
    cv.onpointermove = e => {
      if (!this.pointers[e.pointerId]) return;
      const p = pos(e), prev = this.pointers[e.pointerId];
      const ids = Object.keys(this.pointers);
      if (ids.length === 2) {
        this.pointers[e.pointerId] = p;
        const q = Object.values(this.pointers);
        const d = Math.hypot(q[0].x - q[1].x, q[0].y - q[1].y);
        if (this.lastPinch) this.zoomBy(d / this.lastPinch);
        this.lastPinch = d;
        return;
      }
      const dx = p.x - prev.x, dy = p.y - prev.y;
      this.dragMoved += Math.abs(dx) + Math.abs(dy);
      const k = 0.32 / this.zoom;
      this.lon0 = (this.lon0 - dx * k) % 360;   // spin: free, no rebuild needed
      if (dy !== 0) {                            // tilt: changes the cache
        this.lat0 = Math.max(-89, Math.min(89, this.lat0 + dy * k));
        this._buildCache();
      }
      this.pointers[e.pointerId] = p;
      this.needsRender = true;
    };
    const up = e => {
      const wasTap = this.dragMoved < 6 && Object.keys(this.pointers).length === 1;
      const p = pos(e);
      delete this.pointers[e.pointerId];
      this.lastPinch = 0;
      if (wasTap) { const id = this._idAt(p.x, p.y); if (this.onPick) this.onPick(id); }
    };
    cv.onpointerup = up;
    cv.onpointercancel = e => { delete this.pointers[e.pointerId]; this.lastPinch = 0; };
    cv.onwheel = e => { e.preventDefault(); this.zoomBy(e.deltaY < 0 ? 1.12 : 1 / 1.12); };
    // keep crisp on container resize
    if (window.ResizeObserver) {
      this._ro = new ResizeObserver(() => { if (this.active) this._resize(); });
      this._ro.observe(this.canvas.parentElement);
    }
  }
};
