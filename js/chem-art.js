// BrightSprouts Academy — labeled chemistry diagrams (inline SVG), one per Grade 9–12.
(function () {
  if (typeof LESSONS === "undefined") return;
  var L = 'font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#2d2a4a"';

  // helper: a box of particles for the states-of-matter diagram
  function dots(pts, r, fill) {
    return pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + r + '" fill="' + fill + '"/>'; }).join("");
  }
  function grid(x0, y0, cols, rows, gap) {
    var p = []; for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) p.push([x0 + c * gap, y0 + r * gap]); return p;
  }

  var solid = grid(34, 44, 4, 4, 18);
  var liquid = [[132, 46], [150, 52], [168, 46], [140, 66], [160, 68], [130, 86], [150, 88], [170, 84], [138, 104], [162, 104], [148, 118]];
  var gas = [[238, 50], [286, 44], [262, 74], [300, 90], [244, 100], [288, 112], [312, 60]];

  var CHEM_ART = {
    // 9 — the three states of matter (particle arrangement)
    9: '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#f5f8ff"/>'
      + '<g fill="none" stroke="#cfc7ea" stroke-width="2"><rect x="20" y="30" width="88" height="104" rx="8"/><rect x="126" y="30" width="88" height="104" rx="8"/><rect x="232" y="30" width="88" height="104" rx="8"/></g>'
      + '<g>' + dots(solid, 7, "#4d96ff") + '</g>'
      + '<g>' + dots(liquid, 7, "#2ec4b6") + '</g>'
      + '<g>' + dots(gas, 7, "#ff6b9d") + '</g>'
      + '<g ' + L + ' text-anchor="middle">'
      + '<text x="64" y="152">Solid</text><text x="170" y="152">Liquid</text><text x="276" y="152">Gas</text>'
      + '<text x="64" y="24" font-size="10" fill="#6a668c">packed &amp; fixed</text><text x="170" y="24" font-size="10" fill="#6a668c">loose, can flow</text><text x="276" y="24" font-size="10" fill="#6a668c">spread far apart</text>'
      + '</g></svg>',

    // 10 — atom model (nucleus + electron shells)
    10: '<svg viewBox="0 0 340 210"><rect width="340" height="210" rx="14" fill="#fdf6ff"/>'
      + '<ellipse cx="150" cy="105" rx="52" ry="34" fill="none" stroke="#b7a6e0" stroke-width="2"/>'
      + '<ellipse cx="150" cy="105" rx="84" ry="56" fill="none" stroke="#b7a6e0" stroke-width="2"/>'
      + '<g><circle cx="140" cy="98" r="8" fill="#e2453b"/><circle cx="152" cy="104" r="8" fill="#8a8f9a"/><circle cx="146" cy="112" r="8" fill="#e2453b"/><circle cx="158" cy="98" r="8" fill="#8a8f9a"/></g>'
      + '<circle cx="202" cy="105" r="5" fill="#4d96ff"/><circle cx="98" cy="105" r="5" fill="#4d96ff"/><circle cx="150" cy="49" r="5" fill="#4d96ff"/><circle cx="150" cy="161" r="5" fill="#4d96ff"/>'
      + '<g ' + L + '>'
      + '<line x1="150" y1="105" x2="150" y2="188" stroke="#9a94b8" stroke-width="1.2"/><text x="150" y="200" text-anchor="middle">Nucleus (protons + neutrons)</text>'
      + '<line x1="140" y1="98" x2="60" y2="66" stroke="#9a94b8" stroke-width="1.2"/><text x="8" y="62">Proton (+)</text>'
      + '<line x1="158" y1="98" x2="250" y2="52" stroke="#9a94b8" stroke-width="1.2"/><text x="238" y="48">Neutron</text>'
      + '<line x1="202" y1="105" x2="300" y2="118" stroke="#9a94b8" stroke-width="1.2"/><text x="266" y="132">Electron (−)</text>'
      + '</g></svg>',

    // 11 — a water molecule (covalent compound)
    11: '<svg viewBox="0 0 340 180"><rect width="340" height="180" rx="14" fill="#f2f9ff"/>'
      + '<line x1="150" y1="86" x2="104" y2="120" stroke="#8a8f9a" stroke-width="7" stroke-linecap="round"/>'
      + '<line x1="150" y1="86" x2="196" y2="120" stroke="#8a8f9a" stroke-width="7" stroke-linecap="round"/>'
      + '<circle cx="150" cy="80" r="30" fill="#e2453b"/><text x="150" y="86" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="22" font-weight="600" fill="#fff">O</text>'
      + '<circle cx="100" cy="124" r="18" fill="#dfe4ee"/><text x="100" y="130" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="16" font-weight="600" fill="#2d2a4a">H</text>'
      + '<circle cx="200" cy="124" r="18" fill="#dfe4ee"/><text x="200" y="130" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="16" font-weight="600" fill="#2d2a4a">H</text>'
      + '<g ' + L + '>'
      + '<line x1="150" y1="80" x2="252" y2="52" stroke="#9a94b8" stroke-width="1.2"/><text x="236" y="48">Oxygen atom</text>'
      + '<line x1="200" y1="124" x2="272" y2="140" stroke="#9a94b8" stroke-width="1.2"/><text x="250" y="154">Hydrogen atom</text>'
      + '<line x1="127" y1="103" x2="70" y2="120" stroke="#9a94b8" stroke-width="1.2"/><text x="6" y="124">Covalent bond</text><text x="6" y="138" font-size="10" fill="#6a668c">(shared electrons)</text>'
      + '<text x="150" y="26" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="15" font-weight="600" fill="#3a72c0">Water — H₂O (a compound)</text>'
      + '</g></svg>',

    // 12 — a balanced reaction: 2H₂ + O₂ → 2H₂O (mass is conserved)
    12: '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#fff8ee"/>'
      // reactants: 2 H2 + O2
      + '<g><circle cx="34" cy="60" r="11" fill="#dfe4ee" stroke="#b8bccb"/><circle cx="52" cy="60" r="11" fill="#dfe4ee" stroke="#b8bccb"/>'
      + '<circle cx="34" cy="94" r="11" fill="#dfe4ee" stroke="#b8bccb"/><circle cx="52" cy="94" r="11" fill="#dfe4ee" stroke="#b8bccb"/>'
      + '<circle cx="96" cy="77" r="13" fill="#e2453b"/><circle cx="118" cy="77" r="13" fill="#e2453b"/></g>'
      + '<text x="86" y="112" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="13" fill="#4a4770">2H₂ + O₂</text>'
      // arrow
      + '<g stroke="#8a86a8" stroke-width="3" fill="none" marker-end="url(#ca)"><line x1="150" y1="77" x2="196" y2="77"/></g>'
      // products: 2 H2O
      + '<g><circle cx="244" cy="60" r="13" fill="#e2453b"/><circle cx="230" cy="72" r="9" fill="#dfe4ee" stroke="#b8bccb"/><circle cx="258" cy="72" r="9" fill="#dfe4ee" stroke="#b8bccb"/>'
      + '<circle cx="300" cy="94" r="13" fill="#e2453b"/><circle cx="286" cy="106" r="9" fill="#dfe4ee" stroke="#b8bccb"/><circle cx="314" cy="106" r="9" fill="#dfe4ee" stroke="#b8bccb"/></g>'
      + '<text x="278" y="134" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="13" fill="#4a4770">2H₂O</text>'
      + '<g ' + L + ' text-anchor="middle">'
      + '<text x="86" y="30">Reactants</text><text x="278" y="30">Products</text>'
      + '<text x="170" y="158" font-size="11.5" fill="#6a668c">Same atoms, rearranged — mass is conserved</text>'
      + '</g>'
      + '<defs><marker id="ca" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#8a86a8"/></marker></defs></svg>'
  };

  for (var g = 9; g <= 12; g++) {
    if (LESSONS[g] && LESSONS[g].chemistry && CHEM_ART[g]) LESSONS[g].chemistry.diagram = CHEM_ART[g];
  }
})();
