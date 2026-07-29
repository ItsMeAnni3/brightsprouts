// BrightSprouts Academy: Maze Worksheets (LESSONS[14].mazes).
//
// Every maze is GENERATED, not drawn by hand, so the sheet never runs out. The generator is a
// recursive backtracker, which produces a "perfect" maze: exactly one route between any two
// squares, no loops and no walled-off islands. That means a maze is solvable by construction,
// but audit_mazes.html does not take that on trust. It runs an independent breadth-first search
// over every generated maze and fails if any one of them has no route from start to finish, or
// if the route it finds disagrees with the one the answer key draws.
//
// Written without em dashes.
(function () {
  if (typeof LESSONS === "undefined") return;

  // ==================== seeded random ====================
  // A seed means the same maze can be redrawn identically: the answer key has to show the SAME
  // maze the child is holding, and a printed sheet has to survive a page refresh.
  function rng(seed) {
    var t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      var r = t;
      r = Math.imul(r ^ (r >>> 15), r | 1);
      r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ==================== the maze itself ====================
  // Walls are stored per cell as a bitmask of the sides that are OPEN.
  var N = 1, E = 2, S = 4, W = 8;
  var DX = {}, DY = {}, OPP = {};
  DX[N] = 0; DY[N] = -1; OPP[N] = S;
  DX[E] = 1; DY[E] = 0;  OPP[E] = W;
  DX[S] = 0; DY[S] = 1;  OPP[S] = N;
  DX[W] = -1; DY[W] = 0; OPP[W] = E;

  function carve(w, h, seed) {
    var rand = rng(seed);
    var cells = [];
    for (var y = 0; y < h; y++) {
      cells.push([]);
      for (var x = 0; x < w; x++) cells[y].push(0);
    }
    var seen = {};
    var stack = [[0, 0]];
    seen["0,0"] = 1;
    while (stack.length) {
      var cur = stack[stack.length - 1], cx = cur[0], cy = cur[1];
      var open = [];
      [N, E, S, W].forEach(function (d) {
        var nx = cx + DX[d], ny = cy + DY[d];
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) return;
        if (seen[nx + "," + ny]) return;
        open.push(d);
      });
      if (!open.length) { stack.pop(); continue; }
      var d2 = open[Math.floor(rand() * open.length)];
      var nx2 = cx + DX[d2], ny2 = cy + DY[d2];
      cells[cy][cx] |= d2;
      cells[ny2][nx2] |= OPP[d2];
      seen[nx2 + "," + ny2] = 1;
      stack.push([nx2, ny2]);
    }
    return { w: w, h: h, cells: cells, seed: seed };
  }

  // Breadth-first search from the top left to the bottom right. Returns the list of cells on the
  // route, or null if there is none. The audit runs this too, which is the point of writing it
  // as a separate function rather than trusting the carver.
  function solve(m) {
    var start = "0,0", goal = (m.w - 1) + "," + (m.h - 1);
    var prev = {}, q = [[0, 0]], seen = {};
    seen[start] = 1;
    while (q.length) {
      var c = q.shift(), cx = c[0], cy = c[1], key = cx + "," + cy;
      if (key === goal) break;
      var bits = m.cells[cy][cx];
      [N, E, S, W].forEach(function (d) {
        if (!(bits & d)) return;
        var nx = cx + DX[d], ny = cy + DY[d], k = nx + "," + ny;
        if (nx < 0 || ny < 0 || nx >= m.w || ny >= m.h || seen[k]) return;
        seen[k] = 1; prev[k] = key; q.push([nx, ny]);
      });
    }
    if (!seen[goal]) return null;
    var path = [], at = goal;
    while (at) { path.push(at.split(",").map(Number)); at = prev[at]; }
    return path.reverse();
  }

  // ==================== themes ====================
  // Each theme brings its own colours and two little drawn characters: who you are, and what you
  // are trying to reach. Drawn with gradients, a highlight and a contact shadow so they read as
  // solid objects rather than flat stickers.
  function orb(id, cx, cy, r, extra) {
    return '<ellipse cx="' + cx + '" cy="' + (cy + r * 0.95) + '" rx="' + (r * 0.8) + '" ry="' + (r * 0.2) +
      '" fill="#2d2a4a" opacity=".18"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + id + ')"' + (extra || "") + '/>' +
      '<ellipse cx="' + (cx - r * 0.3) + '" cy="' + (cy - r * 0.36) + '" rx="' + (r * 0.28) + '" ry="' + (r * 0.18) +
      '" fill="#fff" opacity=".55" transform="rotate(-28 ' + (cx - r * 0.3) + ' ' + (cy - r * 0.36) + ')"/>';
  }
  function grad(id, a, b) {
    return '<radialGradient id="' + id + '" cx="34%" cy="28%" r="76%">' +
      '<stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></radialGradient>';
  }

  var THEMES = [
    { key: "forest", name: "Forest Trail", emoji: "🌲",
      bg: ["#eaf7ea", "#cdeccd"], wall: ["#6aa84f", "#38761d"], line: "#2b5e16",
      you: "the squirrel", goal: "the acorn",
      defs: grad("mzForA", "#e8a55c", "#a1642a") + grad("mzForB", "#f0c987", "#a5762f"),
      start: function () {
        return orb("mzForA", 0, 0, 9) +
          '<path d="M6 -3 q10 -8 6 -16 q-8 2 -9 12" fill="#c07f3a"/>' +
          '<circle cx="-3" cy="-2" r="1.6" fill="#2d2a4a"/><circle cx="3" cy="-2" r="1.6" fill="#2d2a4a"/>';
      },
      goalArt: function () {
        return orb("mzForB", 0, 2, 8) +
          '<path d="M-8 -2 h16 a8 8 0 0 0 -16 0 z" fill="#7a4a1d"/>' +
          '<path d="M0 -10 v-4" stroke="#7a4a1d" stroke-width="2.4" stroke-linecap="round"/>';
      } },
    { key: "space", name: "Space Station", emoji: "🚀",
      bg: ["#1b1f3b", "#0c0f22"], wall: ["#7a86c9", "#3a4382"], line: "#232a55", dark: true,
      you: "the rocket", goal: "the planet",
      defs: grad("mzSpaA", "#ffffff", "#b8c2e8") + grad("mzSpaB", "#ffc27a", "#c96a2a"),
      start: function () {
        return '<path d="M0 -12 q7 7 7 15 h-14 q0 -8 7 -15 z" fill="url(#mzSpaA)"/>' +
          '<path d="M-7 3 l-5 7 h5 z M7 3 l5 7 h-5 z" fill="#e2453b"/>' +
          '<circle cx="0" cy="-2" r="3.2" fill="#3a7fc9"/>' +
          '<path d="M-3 10 q3 7 3 7 q0 0 3 -7 z" fill="#ffb703" opacity=".9"/>';
      },
      goalArt: function () {
        return orb("mzSpaB", 0, 0, 9) +
          '<ellipse cx="0" cy="1" rx="15" ry="4" fill="none" stroke="#ffd166" stroke-width="2.4" transform="rotate(-16 0 1)"/>';
      } },
    { key: "reef", name: "Coral Reef", emoji: "🐠",
      bg: ["#dff3ff", "#a9dcf5"], wall: ["#5bb3d9", "#1d6f96"], line: "#14526f",
      you: "the fish", goal: "the shell",
      defs: grad("mzRefA", "#ffb26b", "#e06f1f") + grad("mzRefB", "#ffd6ec", "#d982b4"),
      start: function () {
        return '<ellipse cx="0" cy="0" rx="11" ry="7.5" fill="url(#mzRefA)"/>' +
          '<path d="M9 0 l9 -6 v12 z" fill="#e06f1f"/>' +
          '<circle cx="-4" cy="-2" r="1.8" fill="#2d2a4a"/>';
      },
      goalArt: function () {
        var s = '<path d="M0 8 a11 11 0 0 1 11 -11 h-22 a11 11 0 0 1 11 11 z" fill="url(#mzRefB)"/>';
        for (var i = -3; i <= 3; i++) s += '<path d="M0 8 L' + (i * 3.2) + ' -2" stroke="#c96aa0" stroke-width="1" opacity=".7"/>';
        return s;
      } },
    { key: "castle", name: "Castle Quest", emoji: "🏰",
      bg: ["#f6f0ff", "#ded0f5"], wall: ["#9b8bc4", "#5d3fa0"], line: "#42287a",
      you: "the knight", goal: "the treasure",
      defs: grad("mzCasA", "#e6e9f2", "#9aa2bd") + grad("mzCasB", "#ffe08a", "#d99b12"),
      start: function () {
        return orb("mzCasA", 0, 0, 9) +
          '<path d="M-9 -2 h18 v-3 a9 9 0 0 0 -18 0 z" fill="#7f879e"/>' +
          '<rect x="-2" y="-2" width="4" height="8" fill="#4a4f61"/>';
      },
      goalArt: function () {
        return '<rect x="-11" y="-4" width="22" height="13" rx="2" fill="url(#mzCasB)"/>' +
          '<path d="M-11 -4 a11 6 0 0 1 22 0 z" fill="#c98a12"/>' +
          '<rect x="-2.4" y="-2" width="4.8" height="7" rx="1" fill="#7a4a1d"/>';
      } },
    { key: "dino", name: "Dino Valley", emoji: "🦕",
      bg: ["#eef7e2", "#cfe8b4"], wall: ["#8fbf5a", "#4b7c1e"], line: "#365a12",
      you: "the dinosaur", goal: "the egg",
      defs: grad("mzDinA", "#a8dd7a", "#4f8a2a") + grad("mzDinB", "#fff6e0", "#dcc79a"),
      start: function () {
        return '<ellipse cx="0" cy="2" rx="11" ry="8" fill="url(#mzDinA)"/>' +
          '<path d="M6 -3 q7 -3 8 -10 q-8 1 -10 8 z" fill="#4f8a2a"/>' +
          '<circle cx="9" cy="-8" r="4.6" fill="url(#mzDinA)"/>' +
          '<circle cx="10.4" cy="-9" r="1.3" fill="#2d2a4a"/>' +
          '<path d="M-10 0 l-8 -5" stroke="#4f8a2a" stroke-width="3.4" stroke-linecap="round"/>';
      },
      goalArt: function () {
        return orb("mzDinB", 0, 0, 9, ' transform="scale(1,1.22)"') +
          '<path d="M-5 3 q5 3 10 0" stroke="#c2a878" stroke-width="1.4" fill="none"/>';
      } },
    { key: "candy", name: "Candy Land", emoji: "🍭",
      bg: ["#fff0f7", "#ffd3e7"], wall: ["#ff9ec7", "#d4407f"], line: "#a82a5e",
      you: "the gummy bear", goal: "the lollipop",
      defs: grad("mzCanA", "#ffd166", "#e08a12") + grad("mzCanB", "#ff8fc0", "#c9184a"),
      start: function () {
        return orb("mzCanA", 0, 1, 8) +
          '<circle cx="-7" cy="-7" r="3.4" fill="#e08a12"/><circle cx="7" cy="-7" r="3.4" fill="#e08a12"/>' +
          '<circle cx="-3" cy="0" r="1.4" fill="#7a4a1d"/><circle cx="3" cy="0" r="1.4" fill="#7a4a1d"/>';
      },
      goalArt: function () {
        var s = '<path d="M0 4 v12" stroke="#e8e8ee" stroke-width="3" stroke-linecap="round"/>';
        s += '<circle cx="0" cy="-2" r="9.5" fill="url(#mzCanB)"/>';
        s += '<path d="M0 -2 m0 -8 a8 8 0 0 1 0 16 a5 5 0 0 0 0 -10 a3 3 0 0 1 0 -6" fill="#fff" opacity=".6"/>';
        return s;
      } },
    { key: "train", name: "Train Yard", emoji: "🚂",
      bg: ["#fff6e8", "#f6dfba"], wall: ["#c9905a", "#8a5524"], line: "#6b3f18",
      you: "the train", goal: "the station",
      defs: grad("mzTraA", "#7fb8e8", "#1f5f9e") + grad("mzTraB", "#ffb9a1", "#c95a34"),
      start: function () {
        return '<rect x="-11" y="-6" width="18" height="11" rx="2.5" fill="url(#mzTraA)"/>' +
          '<rect x="-5" y="-12" width="9" height="7" rx="2" fill="#1f5f9e"/>' +
          '<circle cx="-6" cy="7" r="3.4" fill="#3b3b45"/><circle cx="3" cy="7" r="3.4" fill="#3b3b45"/>' +
          '<path d="M-9 -12 q0 -5 4 -6" stroke="#cfd6e4" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
      },
      goalArt: function () {
        return '<rect x="-12" y="-3" width="24" height="12" rx="2" fill="url(#mzTraB)"/>' +
          '<path d="M-14 -3 L0 -12 L14 -3 z" fill="#c95a34"/>' +
          '<rect x="-3" y="1" width="6" height="8" fill="#7a3a1d"/>';
      } },
    { key: "bee", name: "Bee Garden", emoji: "🐝",
      bg: ["#fffbe6", "#ffeeb0"], wall: ["#f2c14e", "#b98613"], line: "#8a6209",
      you: "the bee", goal: "the flower",
      defs: grad("mzBeeA", "#ffd75e", "#c99012") + grad("mzBeeB", "#ff9ec7", "#d4407f"),
      start: function () {
        return orb("mzBeeA", 0, 0, 8) +
          '<path d="M-4 -6 v13 M2 -7 v15" stroke="#3b3b45" stroke-width="2.6"/>' +
          '<ellipse cx="-3" cy="-9" rx="6" ry="3.6" fill="#fff" opacity=".8" transform="rotate(-24 -3 -9)"/>' +
          '<ellipse cx="5" cy="-9" rx="6" ry="3.6" fill="#fff" opacity=".8" transform="rotate(24 5 -9)"/>';
      },
      goalArt: function () {
        var s = '<path d="M0 4 v10" stroke="#4f8a2a" stroke-width="2.6" stroke-linecap="round"/>';
        for (var i = 0; i < 6; i++) {
          var a = i * 60 * Math.PI / 180;
          s += '<ellipse cx="' + (Math.cos(a) * 7).toFixed(1) + '" cy="' + (Math.sin(a) * 7 - 1).toFixed(1) +
            '" rx="4.6" ry="3.2" fill="url(#mzBeeB)" transform="rotate(' + (i * 60) + ' ' +
            (Math.cos(a) * 7).toFixed(1) + ' ' + (Math.sin(a) * 7 - 1).toFixed(1) + ')"/>';
        }
        return s + '<circle cx="0" cy="-1" r="4" fill="#ffd166"/>';
      } },
    { key: "snow", name: "Snow Day", emoji: "🐧",
      bg: ["#f2fbff", "#cfeaf7"], wall: ["#8fc7e8", "#2f6f96"], line: "#215574",
      you: "the penguin", goal: "the igloo",
      defs: grad("mzSnoA", "#4a4f61", "#22252f") + grad("mzSnoB", "#ffffff", "#c9dbe8"),
      start: function () {
        return '<ellipse cx="0" cy="1" rx="9" ry="11" fill="url(#mzSnoA)"/>' +
          '<ellipse cx="0" cy="3" rx="5.6" ry="8" fill="#fff"/>' +
          '<circle cx="-2.6" cy="-5" r="1.4" fill="#2d2a4a"/><circle cx="2.6" cy="-5" r="1.4" fill="#2d2a4a"/>' +
          '<path d="M-2.6 -2 h5.2 l-2.6 3 z" fill="#f2942b"/>';
      },
      goalArt: function () {
        return '<path d="M-13 8 a13 13 0 0 1 26 0 z" fill="url(#mzSnoB)" stroke="#a9c6d8" stroke-width="1.2"/>' +
          '<path d="M-4.5 8 a4.5 5.5 0 0 1 9 0 z" fill="#7fa8c4"/>' +
          '<path d="M-9 2 h18 M-6 -3 h12" stroke="#a9c6d8" stroke-width="1.1"/>';
      } },
    { key: "pirate", name: "Pirate Island", emoji: "🏴‍☠️",
      bg: ["#fdf3dc", "#eed9a8"], wall: ["#c9a25a", "#8a6522"], line: "#6b4c13",
      you: "the ship", goal: "the treasure chest",
      defs: grad("mzPirA", "#c98a5a", "#7a4a1d") + grad("mzPirB", "#ffe08a", "#c98a12"),
      start: function () {
        return '<path d="M-12 2 h24 l-4 8 h-16 z" fill="url(#mzPirA)"/>' +
          '<path d="M0 2 v-14" stroke="#5c3a14" stroke-width="2.4"/>' +
          '<path d="M1 -12 q9 4 0 9 z" fill="#fff"/>' +
          '<path d="M-1 -12 q-8 4 0 9 z" fill="#f0f0f4"/>';
      },
      goalArt: function () {
        return '<rect x="-12" y="-2" width="24" height="11" rx="2" fill="url(#mzPirB)"/>' +
          '<path d="M-12 -2 a12 7 0 0 1 24 0 z" fill="#c98a12"/>' +
          '<rect x="-13" y="1" width="26" height="2.6" fill="#7a4a1d"/>' +
          '<rect x="-2.2" y="0" width="4.4" height="6" rx="1" fill="#7a4a1d"/>';
      } }
  ];
  window.MAZE_THEMES = THEMES;

  // Difficulty. The grid grows with the grade band, which is the only thing that really makes a
  // maze harder. Sizes were checked by hand on a phone: past about 16 wide the paths get too
  // thin to trace with a crayon on a printed page.
  var LEVELS = [
    { key: "easy", name: "Easy", band: "Kindergarten to Grade 1", w: 6, h: 6 },
    { key: "medium", name: "Medium", band: "Grades 2 to 3", w: 9, h: 9 },
    { key: "hard", name: "Hard", band: "Grades 4 to 5", w: 12, h: 12 },
    { key: "expert", name: "Expert", band: "Grades 6 and up", w: 16, h: 16 }
  ];
  window.MAZE_LEVELS = LEVELS;

  // ==================== drawing ====================
  var CELL = 26, PAD = 20;

  function wallPath(m) {
    var d = "";
    for (var y = 0; y < m.h; y++) {
      for (var x = 0; x < m.w; x++) {
        var b = m.cells[y][x], px = PAD + x * CELL, py = PAD + y * CELL;
        if (!(b & N)) d += "M" + px + " " + py + "h" + CELL;
        if (!(b & W)) d += "M" + px + " " + py + "v" + CELL;
        if (y === m.h - 1 && !(b & S)) d += "M" + px + " " + (py + CELL) + "h" + CELL;
        if (x === m.w - 1 && !(b & E)) d += "M" + (px + CELL) + " " + py + "v" + CELL;
      }
    }
    return d;
  }

  function centre(x, y) { return [PAD + x * CELL + CELL / 2, PAD + y * CELL + CELL / 2]; }

  function mazeSvg(theme, level, seed, showPath) {
    var m = carve(level.w, level.h, seed);
    var W = PAD * 2 + level.w * CELL, H = PAD * 2 + level.h * CELL;
    var uid = "mz" + theme.key + seed;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="mzsvg" role="img" aria-label="' +
      theme.name + ' maze, ' + level.name + '">';
    s += '<defs>' + theme.defs +
      '<linearGradient id="' + uid + 'bg" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + theme.bg[0] + '"/><stop offset="1" stop-color="' + theme.bg[1] + '"/></linearGradient>' +
      '<linearGradient id="' + uid + 'w" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + theme.wall[0] + '"/><stop offset="1" stop-color="' + theme.wall[1] + '"/></linearGradient>' +
      '<filter id="' + uid + 'sh" x="-20%" y="-20%" width="140%" height="140%">' +
      '<feDropShadow dx="0" dy="2" stdDeviation="1.6" flood-color="#2d2a4a" flood-opacity=".38"/></filter>' +
      '</defs>';
    s += '<rect width="' + W + '" height="' + H + '" rx="16" fill="url(#' + uid + 'bg)"/>';

    var d = wallPath(m);
    // the solution goes UNDER the walls, so a wall always reads as solid
    if (showPath) {
      var path = solve(m);
      var pd = path.map(function (c, i) {
        var p = centre(c[0], c[1]);
        return (i ? "L" : "M") + p[0] + " " + p[1];
      }).join("");
      s += '<path d="' + pd + '" stroke="#e2453b" stroke-width="6" fill="none" stroke-linecap="round" ' +
        'stroke-linejoin="round" opacity=".85"/>';
    }
    // the extruded wall: a dark body, then a lighter lip along the top
    s += '<path d="' + d + '" stroke="' + theme.line + '" stroke-width="7" fill="none" stroke-linecap="round" ' +
      'filter="url(#' + uid + 'sh)"/>';
    s += '<path d="' + d + '" stroke="url(#' + uid + 'w)" stroke-width="5" fill="none" stroke-linecap="round"/>';
    s += '<path d="' + d + '" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round" ' +
      'opacity=".38" transform="translate(0,-1.4)"/>';

    var a = centre(0, 0), b = centre(m.w - 1, m.h - 1);
    // A soft halo behind each character. On the bigger grids the art alone is only a few pixels
    // across, and a child should be able to find the start without hunting for it.
    var halo = CELL * 0.46;
    s += '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="' + halo.toFixed(1) + '" fill="#ffffff" opacity="' +
      (theme.dark ? '.28' : '.72') + '"/>';
    s += '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="' + halo.toFixed(1) + '" fill="#ffffff" opacity="' +
      (theme.dark ? '.28' : '.72') + '"/>';
    // scaled to sit inside one cell without touching the walls around it
    var sc = (CELL / 34).toFixed(3);
    s += '<g transform="translate(' + a[0] + ',' + a[1] + ') scale(' + sc + ')">' + theme.start() + '</g>';
    s += '<g transform="translate(' + b[0] + ',' + b[1] + ') scale(' + sc + ')">' + theme.goalArt() + '</g>';
    // The start really is the top left cell and the finish really is the bottom right one, so
    // the two labels sit beside the corners they describe rather than both along the bottom.
    var lab = theme.dark ? '#ffffff' : '#2d2a4a';
    var LF = 'font-family="Fredoka, system-ui, sans-serif" font-size="11" fill="' + lab + '" opacity=".8"';
    s += '<text x="' + PAD + '" y="' + (PAD - 7) + '" ' + LF + '>Start here</text>';
    s += '<text x="' + (W - PAD) + '" y="' + (H - 7) + '" text-anchor="end" ' + LF + '>Finish</text>';
    return s + '</svg>';
  }

  // ==================== the lesson ====================
  function themeByKey(k) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].key === k) return THEMES[i];
    return THEMES[0];
  }
  function levelByKey(k) {
    for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].key === k) return LEVELS[i];
    return LEVELS[1];
  }

  window.MazeBook = {
    themes: THEMES,
    levels: LEVELS,
    svg: mazeSvg,
    themeByKey: themeByKey,
    levelByKey: levelByKey,
    _test: { carve: carve, solve: solve, rng: rng, wallPath: wallPath }
  };

  LESSONS[14].mazes = {
    title: "Maze Worksheets", emoji: "🌀",
    intro: "Ten themes, four sizes, and a brand new set of mazes every time you press the button. Pick a theme, choose how tricky you want it, and print. Every maze has exactly one route from start to finish, and the answer key shows it.",
    learn: [
      "A maze is a thinking puzzle. Following it trains the same left-to-right eye tracking that reading needs.",
      "There is always exactly one route through, so there is no guesswork and no dead-end that traps you forever.",
      "Try tracing with a finger first, then a pencil. Backing out of a dead end is part of solving, not a mistake.",
      "A good trick for a hard maze is to work backwards from the finish. It often has fewer false turns.",
      "Younger children can start with Easy and a fat crayon. The bigger squares are deliberately wide enough for one.",
      "Every maze here is generated fresh, so nobody can memorise the answer and the sheet never runs out."
    ],
    activity: "🌀 Race a Grown-Up: print two copies of the same maze, take one each and start together. The loser gets to pick the next theme.",
    mazeBook: true
  };
})();
