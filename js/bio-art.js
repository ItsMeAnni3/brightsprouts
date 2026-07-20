// BrightSprouts Academy — labeled biology diagrams (self-contained inline SVG), one per grade.
// Attached to each Grade 6–12 biology lesson as `.diagram` and rendered inside the lesson.
(function () {
  if (typeof LESSONS === "undefined") return;
  var L = 'font-family="Fredoka, system-ui, sans-serif" font-size="12.5" fill="#2d2a4a"';
  var LN = 'stroke="#9a94b8" stroke-width="1.2"';

  var BIO_ART = {
    // 6 — labeled plant cell
    6: '<svg viewBox="0 0 340 214"><rect width="340" height="214" rx="14" fill="#f7fdf4"/>'
      + '<rect x="96" y="34" width="150" height="146" rx="22" fill="#8fce7e" stroke="#4f9b41" stroke-width="7"/>'
      + '<rect x="105" y="43" width="132" height="128" rx="16" fill="#e2f6da" stroke="#7bc267" stroke-width="2"/>'
      + '<ellipse cx="150" cy="118" rx="40" ry="36" fill="#bfe4ff" opacity=".7"/>'
      + '<circle cx="196" cy="82" r="20" fill="#b07cff"/><circle cx="196" cy="82" r="7" fill="#7c5cbf"/>'
      + '<ellipse cx="128" cy="66" rx="11" ry="6" fill="#3d9950" transform="rotate(-20 128 66)"/>'
      + '<ellipse cx="210" cy="140" rx="11" ry="6" fill="#3d9950" transform="rotate(28 210 140)"/>'
      + '<ellipse cx="126" cy="150" rx="11" ry="6" fill="#3d9950"/>'
      + '<g ' + L + '>'
      + '<line x1="100" y1="40" x2="52" y2="22" ' + LN + '/><text x="6" y="20">Cell wall</text>'
      + '<line x1="107" y1="52" x2="52" y2="52" ' + LN + '/><text x="4" y="56">Cell membrane</text>'
      + '<line x1="118" y1="100" x2="70" y2="120" ' + LN + '/><text x="6" y="124">Cytoplasm</text>'
      + '<line x1="150" y1="118" x2="150" y2="200" ' + LN + '/><text x="122" y="210">Vacuole</text>'
      + '<line x1="196" y1="82" x2="292" y2="50" ' + LN + '/><text x="266" y="48">Nucleus</text>'
      + '<line x1="210" y1="140" x2="290" y2="150" ' + LN + '/><text x="258" y="154">Chloroplast</text>'
      + '</g></svg>',

    // 7 — human body systems
    7: '<svg viewBox="0 0 340 214"><rect width="340" height="214" rx="14" fill="#f5f8ff"/>'
      + '<circle cx="170" cy="46" r="26" fill="#f0c9a0"/>'
      + '<path d="M142 74 Q170 64 198 74 L212 168 Q170 182 128 168 Z" fill="#9ab7e0"/>'
      + '<circle cx="170" cy="44" r="13" fill="#ff9db0"/>'
      + '<ellipse cx="156" cy="104" rx="11" ry="17" fill="#a6d5ff"/><ellipse cx="184" cy="104" rx="11" ry="17" fill="#a6d5ff"/>'
      + '<path d="M170 104 q6 -8 12 0 q0 9 -12 17 q-12 -8 -12 -17 q6 -8 12 0 z" fill="#e2453b"/>'
      + '<ellipse cx="163" cy="140" rx="17" ry="13" fill="#f0a04a"/>'
      + '<g ' + L + '>'
      + '<line x1="170" y1="40" x2="250" y2="30" ' + LN + '/><text x="228" y="28">Brain</text><text x="228" y="42" font-size="10" fill="#6a668c">nervous</text>'
      + '<line x1="184" y1="104" x2="252" y2="96" ' + LN + '/><text x="230" y="94">Lungs</text><text x="230" y="108" font-size="10" fill="#6a668c">respiratory</text>'
      + '<line x1="176" y1="112" x2="252" y2="140" ' + LN + '/><text x="230" y="144">Heart</text><text x="230" y="158" font-size="10" fill="#6a668c">circulatory</text>'
      + '<line x1="150" y1="140" x2="70" y2="120" ' + LN + '/><text x="16" y="118">Stomach</text><text x="16" y="132" font-size="10" fill="#6a668c">digestive</text>'
      + '<line x1="140" y1="150" x2="70" y2="176" ' + LN + '/><text x="30" y="180">Bones</text><text x="30" y="194" font-size="10" fill="#6a668c">skeletal</text>'
      + '</g></svg>',

    // 8 — the five vertebrate groups
    8: '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#fdf6ff"/>'
      + '<text x="170" y="24" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="15" font-weight="600" fill="#5d3fa0">The 5 Vertebrate Groups</text>'
      + '<g text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" fill="#2d2a4a">'
      + '<text x="42" y="86" font-size="34">🐟</text><text x="42" y="112">Fish</text>'
      + '<text x="106" y="86" font-size="34">🐸</text><text x="106" y="112">Amphibians</text>'
      + '<text x="170" y="86" font-size="34">🦎</text><text x="170" y="112">Reptiles</text>'
      + '<text x="234" y="86" font-size="34">🐦</text><text x="234" y="112">Birds</text>'
      + '<text x="298" y="86" font-size="34">🦁</text><text x="298" y="112">Mammals</text>'
      + '<text x="170" y="150" font-size="12.5" fill="#6a668c">Invertebrates (no backbone):  🐛   🦋   🐙   🦀</text>'
      + '</g></svg>',

    // 9 — DNA double helix + chromosome
    9: '<svg viewBox="0 0 340 210"><rect width="340" height="210" rx="14" fill="#f4f8ff"/>'
      + '<g><path d="M120 26 C 158 52, 158 52, 120 78 C 82 104, 82 104, 120 130 C 158 156, 158 156, 120 182" stroke="#4d96ff" stroke-width="6" fill="none" stroke-linecap="round"/>'
      + '<path d="M170 26 C 132 52, 132 52, 170 78 C 208 104, 208 104, 170 130 C 132 156, 132 156, 170 182" stroke="#ff6b9d" stroke-width="6" fill="none" stroke-linecap="round"/>'
      + '<g stroke-width="4" stroke-linecap="round"><line x1="128" y1="34" x2="162" y2="34" stroke="#6bcb77"/><line x1="140" y1="52" x2="150" y2="52" stroke="#ffd166"/><line x1="128" y1="70" x2="162" y2="70" stroke="#e2453b"/><line x1="128" y1="86" x2="162" y2="86" stroke="#6bcb77"/><line x1="140" y1="104" x2="150" y2="104" stroke="#ffd166"/><line x1="128" y1="122" x2="162" y2="122" stroke="#e2453b"/><line x1="128" y1="138" x2="162" y2="138" stroke="#6bcb77"/><line x1="140" y1="156" x2="150" y2="156" stroke="#ffd166"/><line x1="128" y1="174" x2="162" y2="174" stroke="#e2453b"/></g></g>'
      + '<g fill="#7c5cbf"><path d="M264 46 L300 92 M300 46 L264 92" stroke="#7c5cbf" stroke-width="11" stroke-linecap="round"/></g>'
      + '<g ' + L + '>'
      + '<line x1="118" y1="78" x2="70" y2="70" ' + LN + '/><text x="8" y="66">DNA</text><text x="8" y="80" font-size="10" fill="#6a668c">double helix</text>'
      + '<line x1="146" y1="122" x2="122" y2="192" ' + LN + '/><text x="66" y="204">Base pairs (rungs)</text>'
      + '<line x1="282" y1="92" x2="282" y2="120" ' + LN + '/><text x="282" y="134" text-anchor="middle">Chromosome</text>'
      + '</g></svg>',

    // 10 — food chain (with decomposer)
    10: '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#f3fbf3"/>'
      + '<g text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#2d2a4a">'
      + '<text x="34" y="52" font-size="30">☀️</text><text x="34" y="74">Sun</text>'
      + '<text x="104" y="52" font-size="30">🌱</text><text x="104" y="74">Plant</text><text x="104" y="88" font-size="10" fill="#3d9950">producer</text>'
      + '<text x="184" y="52" font-size="30">🐰</text><text x="184" y="74">Rabbit</text><text x="184" y="88" font-size="10" fill="#c07f2a">consumer</text>'
      + '<text x="266" y="52" font-size="30">🦊</text><text x="266" y="74">Fox</text><text x="266" y="88" font-size="10" fill="#c07f2a">consumer</text>'
      + '<g stroke="#8a86a8" stroke-width="2" marker-end="url(#ar)" fill="none"><line x1="52" y1="44" x2="86" y2="44"/><line x1="124" y1="44" x2="164" y2="44"/><line x1="204" y1="44" x2="246" y2="44"/></g>'
      + '<text x="170" y="132" font-size="30">🍄</text><text x="170" y="154">Mushroom</text><text x="170" y="168" font-size="10" fill="#7c5cbf">decomposer — recycles nutrients</text>'
      + '</g><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#8a86a8"/></marker></defs></svg>',

    // 11 — photosynthesis
    11: '<svg viewBox="0 0 340 210"><rect width="340" height="210" rx="14" fill="#f2fbf4"/>'
      + '<circle cx="52" cy="46" r="18" fill="#ffd166"/><g stroke="#ffd166" stroke-width="3" stroke-linecap="round"><line x1="52" y1="18" x2="52" y2="8"/><line x1="28" y1="30" x2="20" y2="24"/><line x1="76" y1="30" x2="84" y2="24"/></g>'
      + '<rect x="162" y="132" width="10" height="46" fill="#7a5a34"/>'
      + '<path d="M167 132 q-40 -8 -50 -44 q34 -4 50 30 z" fill="#6bcb77"/><path d="M167 130 q40 -10 52 -46 q-34 -4 -52 32 z" fill="#57bd66"/>'
      + '<path d="M167 176 q-16 6 -30 4 M167 176 q16 6 30 4" stroke="#7a5a34" stroke-width="3" fill="none"/>'
      + '<g font-family="system-ui, sans-serif" font-size="12" fill="#2d2a4a">'
      + '<g stroke="#ffb03a" stroke-width="2" fill="none" marker-end="url(#a2)"><line x1="68" y1="56" x2="120" y2="92"/></g><text x="60" y="78" fill="#c07f2a">sunlight</text>'
      + '<g stroke="#8a86a8" stroke-width="2" fill="none" marker-end="url(#a2)"><line x1="292" y1="96" x2="222" y2="96"/></g><text x="250" y="90">CO₂ in</text>'
      + '<g stroke="#4d96ff" stroke-width="2" fill="none" marker-end="url(#a2)"><line x1="118" y1="112" x2="52" y2="118"/></g><text x="46" y="140" fill="#3a72c0">O₂ out</text>'
      + '<g stroke="#4d96ff" stroke-width="2" fill="none" marker-end="url(#a2)"><line x1="167" y1="200" x2="167" y2="176"/></g><text x="176" y="200" fill="#3a72c0">water</text>'
      + '<text x="196" y="150" fill="#3d9950">→ glucose (food)</text>'
      + '</g><defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#8a86a8"/></marker></defs></svg>',

    // 12 — adaptation: different beaks for different foods
    12: '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#fff8ee"/>'
      + '<text x="170" y="24" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="14" font-weight="600" fill="#5d3fa0">Adaptation: a beak for every food</text>'
      + '<g>'
      + '<ellipse cx="60" cy="86" rx="26" ry="20" fill="#8a9a5b"/><circle cx="82" cy="70" r="12" fill="#8a9a5b"/><path d="M92 66 l16 6 -16 6 z" fill="#e0a91f"/><circle cx="85" cy="67" r="2" fill="#2d2a4a"/>'
      + '<ellipse cx="170" cy="86" rx="26" ry="20" fill="#7a8a4b"/><circle cx="192" cy="70" r="12" fill="#7a8a4b"/><path d="M202 68 l26 3 -26 5 z" fill="#e0a91f"/><circle cx="195" cy="67" r="2" fill="#2d2a4a"/>'
      + '<ellipse cx="280" cy="86" rx="26" ry="20" fill="#6a8a5b"/><circle cx="302" cy="70" r="12" fill="#6a8a5b"/><path d="M312 68 q18 4 20 16 q-14 -6 -20 -8 z" fill="#e0a91f"/><circle cx="305" cy="67" r="2" fill="#2d2a4a"/>'
      + '</g>'
      + '<g text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#4a4770">'
      + '<text x="60" y="130">short &amp; strong</text><text x="60" y="146" font-size="10" fill="#6a668c">cracks seeds</text>'
      + '<text x="170" y="130">long &amp; thin</text><text x="170" y="146" font-size="10" fill="#6a668c">catches insects</text>'
      + '<text x="280" y="130">curved</text><text x="280" y="146" font-size="10" fill="#6a668c">sips nectar</text>'
      + '</g></svg>'
  };

  for (var g = 6; g <= 12; g++) {
    if (LESSONS[g] && LESSONS[g].biology && BIO_ART[g]) LESSONS[g].biology.diagram = BIO_ART[g];
  }
})();
