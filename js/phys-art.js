// BrightSprouts Academy — labeled physics diagrams (inline SVG), one per Grade 9–12.
(function () {
  if (typeof LESSONS === "undefined") return;
  var L = 'font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#2d2a4a"';

  var PHYS_ART = {
    // 9 — forces on a crate
    9: '<svg viewBox="0 0 340 190"><rect width="340" height="190" rx="14" fill="#f5f8ff"/>'
      + '<defs>'
      + '<marker id="fg" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#3d9950"/></marker>'
      + '<marker id="fo" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#e08a2a"/></marker>'
      + '<marker id="fr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#e2453b"/></marker>'
      + '<marker id="fb" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4d96ff"/></marker>'
      + '</defs>'
      + '<line x1="20" y1="146" x2="320" y2="146" stroke="#c9c2e6" stroke-width="3"/>'
      + '<rect x="140" y="86" width="60" height="60" rx="6" fill="#f0a04a" stroke="#c07f2a" stroke-width="3"/>'
      + '<g stroke-linecap="round">'
      + '<line x1="200" y1="104" x2="272" y2="104" stroke="#3d9950" stroke-width="4" marker-end="url(#fg)"/>'
      + '<line x1="140" y1="128" x2="70" y2="128" stroke="#e08a2a" stroke-width="4" marker-end="url(#fo)"/>'
      + '<line x1="170" y1="146" x2="170" y2="182" stroke="#e2453b" stroke-width="4" marker-end="url(#fr)"/>'
      + '<line x1="170" y1="86" x2="170" y2="40" stroke="#4d96ff" stroke-width="4" marker-end="url(#fb)"/>'
      + '</g>'
      + '<g ' + L + '>'
      + '<text x="276" y="108" fill="#2f7d3d">Push</text>'
      + '<text x="20" y="122" fill="#b06a1a">Friction</text>'
      + '<text x="176" y="176" fill="#c0392b">Gravity</text>'
      + '<text x="170" y="32" text-anchor="middle" fill="#3a72c0">Support force</text>'
      + '</g></svg>',

    // 10 — potential → kinetic energy on a hill
    10: '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#eefaf0"/>'
      + '<path d="M36 44 Q120 44 168 100 Q208 146 320 150 L320 176 L36 176 Z" fill="#8fce7e"/>'
      + '<path d="M36 44 Q120 44 168 100 Q208 146 320 150" fill="none" stroke="#5fa94f" stroke-width="3"/>'
      + '<g stroke="#c07f2a" stroke-width="3" fill="none" marker-end="url(#pe)"><path d="M74 46 Q150 78 236 130"/></g>'
      + '<defs><marker id="pe" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#c07f2a"/></marker></defs>'
      + '<circle cx="54" cy="34" r="12" fill="#e2453b"/>'
      + '<circle cx="286" cy="138" r="12" fill="#e2453b"/>'
      + '<g ' + L + '>'
      + '<text x="76" y="24">Potential energy</text><text x="76" y="38" font-size="10" fill="#6a668c">stored, up high</text>'
      + '<text x="196" y="140" text-anchor="end">Kinetic energy</text><text x="196" y="154" text-anchor="end" font-size="10" fill="#6a668c">moving fast</text>'
      + '</g></svg>',

    // 11 — a prism splitting white light into a spectrum
    11: '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#1c2145"/>'
      + '<line x1="18" y1="84" x2="150" y2="84" stroke="#ffffff" stroke-width="6"/>'
      + '<path d="M152 42 L196 104 L152 104 Z" fill="#e7ecff" opacity=".9" stroke="#fff" stroke-width="2"/>'
      + '<g stroke-width="4" stroke-linecap="round">'
      + '<line x1="192" y1="80" x2="322" y2="50" stroke="#e2453b"/><line x1="193" y1="82" x2="322" y2="64" stroke="#ff9f68"/>'
      + '<line x1="194" y1="84" x2="322" y2="80" stroke="#ffd166"/><line x1="194" y1="86" x2="322" y2="96" stroke="#6bcb77"/>'
      + '<line x1="193" y1="88" x2="322" y2="112" stroke="#4d96ff"/><line x1="192" y1="90" x2="322" y2="128" stroke="#a06cf0"/></g>'
      + '<g font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#eef2ff">'
      + '<text x="24" y="74">White light</text>'
      + '<text x="150" y="122" text-anchor="middle">Prism</text>'
      + '<text x="300" y="150" text-anchor="end">Spectrum (the colours)</text>'
      + '</g></svg>',

    // 12 — a simple electric circuit
    12: '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#fffaf0"/>'
      + '<g stroke="#2d2a4a" stroke-width="4" fill="none">'
      + '<path d="M156 44 L80 44 L80 132 L156 132"/><path d="M184 44 L260 44 L260 88"/><path d="M260 116 L260 132 L184 132"/>'
      + '</g>'
      // bulb (top center)
      + '<circle cx="170" cy="44" r="15" fill="#fff3c4" stroke="#2d2a4a" stroke-width="3"/><path d="M162 38 l16 12 M178 38 l-16 12" stroke="#e0a91f" stroke-width="2"/>'
      // battery (bottom center)
      + '<line x1="164" y1="122" x2="164" y2="142" stroke="#2d2a4a" stroke-width="3"/><line x1="176" y1="126" x2="176" y2="138" stroke="#2d2a4a" stroke-width="6"/>'
      // switch (right side, closed lever)
      + '<circle cx="260" cy="116" r="3" fill="#2d2a4a"/><line x1="260" y1="116" x2="272" y2="94" stroke="#2d2a4a" stroke-width="3" stroke-linecap="round"/><circle cx="260" cy="88" r="3" fill="#2d2a4a"/>'
      + '<g ' + L + '>'
      + '<line x1="170" y1="59" x2="170" y2="76" stroke="#9a94b8" stroke-width="1.2"/><text x="170" y="90" text-anchor="middle">Bulb</text>'
      + '<line x1="170" y1="132" x2="170" y2="150" stroke="#9a94b8" stroke-width="1.2"/><text x="170" y="164" text-anchor="middle">Battery</text>'
      + '<line x1="266" y1="102" x2="300" y2="96" stroke="#9a94b8" stroke-width="1.2"/><text x="300" y="94">Switch</text>'
      + '<line x1="80" y1="88" x2="40" y2="88" stroke="#9a94b8" stroke-width="1.2"/><text x="8" y="92">Wire</text>'
      + '</g></svg>'
  };

  for (var g = 9; g <= 12; g++) {
    if (LESSONS[g] && LESSONS[g].physics && PHYS_ART[g]) LESSONS[g].physics.diagram = PHYS_ART[g];
  }
})();
