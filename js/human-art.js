// BrightSprouts Academy — illustrations + notable people & arts for the "Human Story" timeline.
// Self-contained inline SVG. HUMAN_ART is parallel to HIST_ERAS (same order).
// HUMAN_NOTABLES[i] = a small gallery of famous people / arts / landmarks for that era.
// People are friendly stylized figures (not real portraits) distinguished by an accessory.

// A simple friendly figure with a neutral tone; `extra` adds hair/hat/props on top.
function bsFig(clothes, extra) {
  return '<svg viewBox="0 0 80 82">'
    + '<path d="M12 80 Q12 52 40 52 Q68 52 68 80 Z" fill="' + clothes + '"/>'
    + '<circle cx="40" cy="34" r="17" fill="#eebf95"/>'
    + '<circle cx="34" cy="34" r="2.2" fill="#2d2a4a"/><circle cx="46" cy="34" r="2.2" fill="#2d2a4a"/>'
    + '<path d="M34 42 q6 5 12 0" stroke="#b5432f" stroke-width="2" fill="none" stroke-linecap="round"/>'
    + (extra || '')
    + '</svg>';
}

const HUMAN_ART = [
  // 0 — Stone Age: cave wall + painted animal + fire
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#6a4a34"/><path d="M0 0 H240 V16 Q120 26 0 16 Z" fill="#553a28"/>'
  +'<g fill="#c86b3c"><path d="M150 40 q18 -8 34 2 q6 8 -4 12 l-8 10 -6 -8 -8 8 -6 -10 q-8 -6 4 -14 z"/><line x1="152" y1="52" x2="146" y2="62" stroke="#c86b3c" stroke-width="4"/></g>'
  +'<g fill="#3a2718"><ellipse cx="44" cy="70" rx="10" ry="16"/><circle cx="44" cy="50" r="7"/></g>'
  +'<g><path d="M78 82 q6 -18 16 -10 q-2 -14 10 -12 q-6 12 -4 22 z" fill="#ff8a3d"/><path d="M84 82 q4 -10 10 -6 q-2 -8 6 -8 q-4 8 -2 14 z" fill="#ffd166"/></g></svg>',

  // 1 — First Civilizations: pyramids + sun + river
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#f2d59a"/><rect y="72" width="240" height="24" fill="#4d96ff"/>'
  +'<circle cx="205" cy="24" r="14" fill="#ffb03a"/>'
  +'<path d="M60 72 L96 20 L132 72 Z" fill="#d9a441"/><path d="M96 20 L132 72 L118 72 Z" fill="#c08f34"/>'
  +'<path d="M120 72 L146 34 L172 72 Z" fill="#e0b45a"/><path d="M146 34 L172 72 L160 72 Z" fill="#c99a3e"/>'
  +'<g fill="#3a72c0" opacity=".5"><ellipse cx="40" cy="84" rx="16" ry="4"/><ellipse cx="150" cy="88" rx="20" ry="4"/></g></svg>',

  // 2 — Classical Age: Greek temple
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#cfe0f5"/><rect y="78" width="240" height="18" fill="#b7c7dd"/>'
  +'<circle cx="206" cy="24" r="12" fill="#ffd166"/>'
  +'<path d="M70 34 L120 16 L170 34 Z" fill="#e9edf5"/><rect x="70" y="34" width="100" height="8" fill="#dfe4ee"/>'
  +'<g fill="#f2f5fa"><rect x="78" y="44" width="9" height="34"/><rect x="98" y="44" width="9" height="34"/><rect x="118" y="44" width="9" height="34"/><rect x="138" y="44" width="9" height="34"/><rect x="158" y="44" width="9" height="34"/></g>'
  +'<rect x="70" y="76" width="100" height="6" fill="#dfe4ee"/></svg>',

  // 3 — Middle Ages: castle + flag
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#bcd6f0"/><rect y="74" width="240" height="22" fill="#7fae5a"/>'
  +'<g fill="#8f8a9e"><rect x="70" y="40" width="24" height="40"/><rect x="146" y="40" width="24" height="40"/><rect x="94" y="52" width="52" height="28"/>'
  +'<path d="M108 52 q12 -18 24 0 z"/></g>'
  +'<g fill="#8f8a9e"><rect x="70" y="34" width="6" height="8"/><rect x="82" y="34" width="6" height="8"/><rect x="152" y="34" width="6" height="8"/><rect x="164" y="34" width="6" height="8"/></g>'
  +'<rect x="112" y="60" width="16" height="20" rx="8" fill="#5a5468"/>'
  +'<line x1="82" y1="34" x2="82" y2="18" stroke="#6a6478" stroke-width="2"/><path d="M82 18 l16 5 -16 5 z" fill="#ff6b9d"/></svg>',

  // 4 — Renaissance: easel with a painting
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#f3ead9"/>'
  +'<g stroke="#8a6d4b" stroke-width="4" stroke-linecap="round"><line x1="96" y1="30" x2="80" y2="86"/><line x1="132" y1="30" x2="148" y2="86"/><line x1="114" y1="30" x2="114" y2="90"/></g>'
  +'<rect x="86" y="26" width="56" height="44" rx="2" fill="#fff" stroke="#c0a978" stroke-width="3"/>'
  +'<circle cx="114" cy="46" r="12" fill="#e0b58a"/><path d="M104 68 q10 -14 20 0 z" fill="#6a4a2a"/>'
  +'<g fill="#ff6b9d"><circle cx="176" cy="40" r="8"/><circle cx="188" cy="52" r="6" fill="#4d96ff"/><circle cx="170" cy="56" r="6" fill="#ffd166"/></g></svg>',

  // 5 — Age of Exploration: sailing ship + compass
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#bfe3ff"/><rect y="64" width="240" height="32" fill="#3a86c8"/>'
  +'<g stroke="#fff" stroke-width="2" fill="none" opacity=".5"><path d="M8 74 q10 -5 20 0 q10 5 20 0"/><path d="M180 80 q10 -5 20 0 q10 5 20 0"/></g>'
  +'<path d="M70 64 L150 64 L138 80 L82 80 Z" fill="#8a5a2a"/><rect x="108" y="24" width="4" height="40" fill="#6a4a2a"/>'
  +'<path d="M112 28 q30 6 30 26 l-30 0 z" fill="#fff"/><path d="M108 28 q-26 6 -26 24 l26 0 z" fill="#f2ead9"/>'
  +'<circle cx="205" cy="30" r="14" fill="#fff" stroke="#d9a441" stroke-width="2"/><path d="M205 20 l4 10 -4 10 -4 -10 z" fill="#e2453b"/></svg>',

  // 6 — Science & New Ideas: telescope + stars + apple
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#1e2a54"/>'
  +'<g fill="#ffe08a"><circle cx="150" cy="24" r="1.6"/><circle cx="184" cy="40" r="1.4"/><circle cx="120" cy="18" r="1.2"/><circle cx="205" cy="20" r="1.6"/></g>'
  +'<circle cx="196" cy="60" r="12" fill="#f2f0e6"/>'
  +'<g><rect x="40" y="70" width="8" height="16" fill="#6a5a8a"/><g transform="rotate(-32 70 60)"><rect x="46" y="52" width="52" height="14" rx="6" fill="#8a7ab0"/><rect x="92" y="50" width="10" height="18" rx="3" fill="#b0a0d6"/></g></g>'
  +'<circle cx="60" cy="30" r="7" fill="#e2453b"/><path d="M60 23 q3 -4 6 -3" stroke="#6bcb77" stroke-width="2" fill="none"/></svg>',

  // 7 — Industrial Revolution: factory + steam train
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#c9c2b6"/><rect y="76" width="240" height="20" fill="#8a8272"/>'
  +'<g fill="#6f6a5e"><rect x="150" y="40" width="60" height="36"/><rect x="160" y="24" width="8" height="18"/><rect x="184" y="24" width="8" height="18"/></g>'
  +'<g fill="#b7b0a2" opacity=".8"><circle cx="164" cy="18" r="6"/><circle cx="188" cy="16" r="7"/></g>'
  +'<g><rect x="40" y="52" width="46" height="22" rx="3" fill="#c0392b"/><rect x="30" y="60" width="14" height="14" fill="#8a271e"/><rect x="52" y="40" width="10" height="14" fill="#5a5468"/>'
  +'<circle cx="48" cy="78" r="7" fill="#333"/><circle cx="76" cy="78" r="7" fill="#333"/><circle cx="48" cy="78" r="2.5" fill="#ccc"/><circle cx="76" cy="78" r="2.5" fill="#ccc"/></g>'
  +'<g fill="#eee" opacity=".8"><circle cx="60" cy="34" r="5"/><circle cx="70" cy="28" r="6"/></g></svg>',

  // 8 — Modern Age: rocket + car + skyline
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#ffe3b8"/><rect y="74" width="240" height="22" fill="#9aa0ad"/>'
  +'<g fill="#7f8797"><rect x="150" y="36" width="16" height="38"/><rect x="172" y="26" width="16" height="48"/><rect x="194" y="44" width="16" height="30"/></g>'
  +'<g><path d="M60 20 q10 0 12 18 q0 14 -6 22 l-12 0 q-6 -8 -6 -22 q2 -18 12 -18 z" fill="#e9edf5"/><circle cx="60" cy="36" r="5" fill="#4d96ff"/><path d="M48 56 l-8 12 8 -4 z" fill="#e2453b"/><path d="M72 56 l8 12 -8 -4 z" fill="#e2453b"/><path d="M56 62 q4 12 8 0" fill="#ff9f68"/></g>'
  +'<g><rect x="96" y="60" width="40" height="12" rx="5" fill="#ff6b9d"/><path d="M104 60 q8 -10 22 0 z" fill="#ff8fb3"/><circle cx="106" cy="74" r="5" fill="#333"/><circle cx="128" cy="74" r="5" fill="#333"/></g></svg>',

  // 9 — Information Age: computer + phone + wifi/globe
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#e7f0ff"/>'
  +'<g><rect x="52" y="30" width="70" height="44" rx="4" fill="#2d2a4a"/><rect x="58" y="36" width="58" height="32" fill="#4d96ff"/><rect x="78" y="74" width="18" height="6" fill="#2d2a4a"/><rect x="66" y="80" width="42" height="4" rx="2" fill="#8a86a8"/></g>'
  +'<g><rect x="150" y="34" width="30" height="52" rx="6" fill="#2d2a4a"/><rect x="154" y="40" width="22" height="38" fill="#a6e3ff"/><circle cx="165" cy="82" r="2" fill="#8a86a8"/></g>'
  +'<g fill="none" stroke="#6bcb77" stroke-width="3" stroke-linecap="round"><path d="M196 40 q14 12 0 24"/><path d="M204 34 q22 18 0 36"/></g><circle cx="196" cy="52" r="3" fill="#6bcb77"/></svg>'
];

const HUMAN_NOTABLES = [
  // 0 — Stone Age (no named people yet — first art, tools, fire)
  [
    { name: "Cave Paintings", note: "The very first art, on cave walls.",
      svg: '<svg viewBox="0 0 80 80"><rect x="6" y="10" width="68" height="60" rx="8" fill="#6a4a34"/><g fill="#c86b3c"><path d="M26 44 q16 -8 30 2 q4 8 -4 10 l-6 10 -6 -8 -6 8 -6 -10 q-6 -6 4 -12 z"/><line x1="28" y1="52" x2="22" y2="62" stroke="#c86b3c" stroke-width="4"/></g><g fill="#e2c17a"><circle cx="20" cy="22" r="2"/><circle cx="58" cy="20" r="2"/></g></svg>' },
    { name: "Stone Tools", note: "The very first tools.",
      svg: '<svg viewBox="0 0 80 80"><path d="M28 66 L44 20 Q56 26 58 44 Q56 60 46 68 Z" fill="#9a8f7a"/><path d="M44 20 Q56 26 58 44 L48 40 Q46 28 44 20 Z" fill="#7d7360"/><g stroke="#6a6152" stroke-width="1.6"><line x1="40" y1="34" x2="50" y2="38"/><line x1="38" y1="44" x2="52" y2="50"/></g></svg>' },
    { name: "Taming Fire", note: "Warmth, light and cooked food.",
      svg: '<svg viewBox="0 0 80 80"><g stroke="#8a6d4b" stroke-width="4" stroke-linecap="round"><line x1="24" y1="66" x2="52" y2="58"/><line x1="52" y1="66" x2="24" y2="58"/></g><path d="M40 52 q10 -26 22 -14 q-2 -18 -22 -22 q-20 4 -22 22 q12 -12 22 14 z" fill="#ff8a3d"/><path d="M40 50 q6 -14 12 -8 q-2 -10 -12 -12 q-10 2 -12 12 q6 -6 12 8 z" fill="#ffd166"/></svg>' }
  ],
  // 1 — First Civilizations
  [
    { name: "Tutankhamun", note: "A boy king of Ancient Egypt.",
      svg: bsFig("#e0b23a", '<path d="M20 30 Q40 4 60 30 Q40 22 20 30 Z" fill="#e0b23a"/><path d="M20 30 L23 50 L31 47 L31 32 Z" fill="#e0b23a"/><path d="M60 30 L57 50 L49 47 L49 32 Z" fill="#e0b23a"/><g stroke="#3a5bbf" stroke-width="2"><line x1="26" y1="18" x2="26" y2="30"/><line x1="34" y1="14" x2="34" y2="28"/><line x1="46" y1="14" x2="46" y2="28"/><line x1="54" y1="18" x2="54" y2="30"/></g>') },
    { name: "Great Pyramid", note: "A giant royal tomb in Egypt.",
      svg: '<svg viewBox="0 0 80 80"><rect y="62" width="80" height="18" fill="#e6cf94"/><path d="M14 62 L40 14 L66 62 Z" fill="#d9a441"/><path d="M40 14 L66 62 L52 62 Z" fill="#c08f34"/><circle cx="64" cy="18" r="7" fill="#ffb03a"/></svg>' },
    { name: "Early Writing", note: "One of the first ways to write.",
      svg: '<svg viewBox="0 0 80 80"><rect x="16" y="12" width="48" height="56" rx="5" fill="#cdb48a"/><g stroke="#7d6a44" stroke-width="2" stroke-linecap="round"><line x1="24" y1="24" x2="40" y2="24"/><line x1="24" y1="34" x2="52" y2="34"/><line x1="24" y1="44" x2="46" y2="44"/><line x1="24" y1="54" x2="54" y2="54"/><path d="M46 20 l4 6 -4 4"/></g></svg>' }
  ],
  // 2 — Classical Age
  [
    { name: "Aristotle", note: "A great Greek thinker.",
      svg: bsFig("#eef1f6", '<path d="M26 44 Q40 66 54 44 Q54 56 40 58 Q26 56 26 44 Z" fill="#dcdad6"/><path d="M22 26 Q40 12 58 26" stroke="#6bcb77" stroke-width="4" fill="none"/><g fill="#6bcb77"><circle cx="24" cy="26" r="3"/><circle cx="40" cy="18" r="3"/><circle cx="56" cy="26" r="3"/></g>') },
    { name: "The Parthenon", note: "A famous temple in Greece.",
      svg: '<svg viewBox="0 0 80 80"><path d="M12 28 L40 14 L68 28 Z" fill="#e9edf5"/><rect x="12" y="28" width="56" height="6" fill="#dfe4ee"/><g fill="#f2f5fa"><rect x="16" y="36" width="7" height="30"/><rect x="30" y="36" width="7" height="30"/><rect x="44" y="36" width="7" height="30"/><rect x="58" y="36" width="7" height="30"/></g><rect x="12" y="66" width="56" height="6" fill="#dfe4ee"/></svg>' },
    { name: "Julius Caesar", note: "A famous Roman leader.",
      svg: bsFig("#b5423a", '<path d="M24 24 Q40 14 56 24 Q40 20 24 24 Z" fill="#7d5a3a"/><path d="M22 26 Q40 14 58 26" stroke="#6bcb77" stroke-width="3.5" fill="none"/><g fill="#6bcb77"><circle cx="24" cy="26" r="2.6"/><circle cx="40" cy="19" r="2.6"/><circle cx="56" cy="26" r="2.6"/></g>') }
  ],
  // 3 — Middle Ages
  [
    { name: "Knights", note: "Warriors in shining armor.",
      svg: bsFig("#9aa2b2", '<path d="M22 22 Q40 8 58 22 L58 42 Q40 46 22 42 Z" fill="#c2c8d6"/><rect x="37" y="26" width="6" height="18" fill="#2d2a4a"/><path d="M40 8 l0 -6" stroke="#c0392b" stroke-width="3"/>') },
    { name: "Castles", note: "Stone forts for kings & queens.",
      svg: '<svg viewBox="0 0 80 80"><g fill="#8f8a9e"><rect x="14" y="30" width="16" height="38"/><rect x="50" y="30" width="16" height="38"/><rect x="28" y="40" width="24" height="28"/><rect x="14" y="24" width="4" height="8"/><rect x="22" y="24" width="4" height="8"/><rect x="50" y="24" width="4" height="8"/><rect x="58" y="24" width="4" height="8"/></g><rect x="34" y="50" width="12" height="18" rx="6" fill="#5a5468"/></svg>' },
    { name: "Marco Polo", note: "Traveled the Silk Road to China.",
      svg: bsFig("#3a6b4a", '<path d="M20 24 Q40 12 60 24 Q40 30 20 24 Z" fill="#6a4a2a"/><path d="M18 24 Q40 20 62 24 L60 28 Q40 24 20 28 Z" fill="#553a22"/>') }
  ],
  // 4 — Renaissance
  [
    { name: "Leonardo da Vinci", note: "Painted the Mona Lisa.",
      svg: bsFig("#5a3f6e", '<path d="M24 44 Q40 66 56 44 Q56 58 40 60 Q24 58 24 44 Z" fill="#e2ddd8"/><ellipse cx="40" cy="20" rx="20" ry="8" fill="#7d3a6a"/><circle cx="40" cy="13" r="3" fill="#7d3a6a"/>') },
    { name: "Mona Lisa", note: "The world's most famous painting.",
      svg: '<svg viewBox="0 0 80 80"><rect x="14" y="8" width="52" height="64" rx="3" fill="#c0a06a"/><rect x="20" y="14" width="40" height="52" fill="#7d8a5a"/><circle cx="40" cy="34" r="13" fill="#e0b58a"/><path d="M26 66 q14 -18 28 0 z" fill="#4a3a2a"/><path d="M34 38 q6 4 12 0" stroke="#6a4a2a" stroke-width="1.6" fill="none"/></svg>' },
    { name: "Shakespeare", note: "A famous writer of plays.",
      svg: bsFig("#3a3f52", '<ellipse cx="40" cy="20" rx="18" ry="7" fill="#5a4a38"/><path d="M22 50 q18 6 36 0 l0 6 q-18 6 -36 0 z" fill="#fff"/><path d="M58 30 l10 -12" stroke="#e0b23a" stroke-width="3" stroke-linecap="round"/>') }
  ],
  // 5 — Age of Exploration
  [
    { name: "Columbus", note: "Sailed across the Atlantic in 1492.",
      svg: bsFig("#3a4a6e", '<path d="M18 26 Q40 12 62 26 L58 30 Q40 24 22 30 Z" fill="#2d2a4a"/><path d="M18 26 Q40 20 62 26" stroke="#4d6bc0" stroke-width="3" fill="none"/>') },
    { name: "Sailing Ships", note: "Wooden ships crossed the oceans.",
      svg: '<svg viewBox="0 0 80 80"><path d="M16 52 L64 52 L54 68 L26 68 Z" fill="#8a5a2a"/><rect x="38" y="14" width="4" height="38" fill="#6a4a2a"/><path d="M42 18 q22 5 22 20 l-22 0 z" fill="#fff"/><path d="M38 18 q-18 5 -18 18 l18 0 z" fill="#f2ead9"/><path d="M42 14 l10 4 -10 4 z" fill="#e2453b"/></svg>' },
    { name: "The Compass", note: "Helped sailors find their way.",
      svg: '<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="28" fill="#fff" stroke="#d9a441" stroke-width="3"/><circle cx="40" cy="40" r="22" fill="none" stroke="#e6cf94" stroke-width="1.5"/><path d="M40 20 l6 20 -6 20 -6 -20 z" fill="#e2453b"/><path d="M40 40 l6 0" stroke="#4d96ff" stroke-width="2"/><circle cx="40" cy="40" r="3" fill="#2d2a4a"/></svg>' }
  ],
  // 6 — Science & New Ideas
  [
    { name: "Isaac Newton", note: "Explained gravity.",
      svg: bsFig("#5a4a3a", '<ellipse cx="40" cy="22" rx="18" ry="9" fill="#c9b28a"/><circle cx="40" cy="8" r="6" fill="#e2453b"/><path d="M40 3 q3 -3 6 -2" stroke="#6bcb77" stroke-width="2" fill="none"/>') },
    { name: "Galileo", note: "Studied the Moon and planets.",
      svg: bsFig("#3a5a52", '<path d="M24 46 Q40 66 56 46 Q56 58 40 60 Q24 58 24 46 Z" fill="#dcd8d2"/><g transform="rotate(-28 58 40)"><rect x="44" y="30" width="30" height="9" rx="4" fill="#8a7ab0"/><rect x="70" y="28" width="8" height="13" rx="2" fill="#b0a0d6"/></g>') },
    { name: "The Telescope", note: "Let people see far into space.",
      svg: '<svg viewBox="0 0 80 80"><g transform="rotate(-25 40 40)"><rect x="14" y="34" width="44" height="14" rx="6" fill="#8a7ab0"/><rect x="52" y="31" width="12" height="20" rx="3" fill="#b0a0d6"/><rect x="10" y="36" width="8" height="10" rx="2" fill="#6a5a8a"/></g><rect x="34" y="60" width="6" height="14" fill="#6a5a8a"/><g fill="#ffe08a"><circle cx="66" cy="14" r="2"/><circle cx="54" cy="10" r="1.5"/></g></svg>' }
  ],
  // 7 — Industrial Revolution
  [
    { name: "Steam Engine", note: "Machines powered by steam.",
      svg: '<svg viewBox="0 0 80 80"><rect x="16" y="40" width="40" height="24" rx="3" fill="#6f6a5e"/><rect x="30" y="26" width="10" height="16" fill="#5a5468"/><circle cx="26" cy="66" r="8" fill="#333"/><circle cx="50" cy="66" r="8" fill="#333"/><circle cx="26" cy="66" r="2.6" fill="#ccc"/><circle cx="50" cy="66" r="2.6" fill="#ccc"/><g fill="#ddd" opacity=".8"><circle cx="36" cy="18" r="5"/><circle cx="46" cy="14" r="6"/></g></svg>' },
    { name: "Thomas Edison", note: "Made the light bulb practical.",
      svg: bsFig("#3a3f52", '<ellipse cx="40" cy="22" rx="16" ry="7" fill="#8a8272"/><g><circle cx="40" cy="8" r="7" fill="#ffe08a"/><rect x="37" y="14" width="6" height="4" fill="#8a8272"/><path d="M40 6 v4 M37 8 h6" stroke="#e0a91f" stroke-width="1"/></g>') },
    { name: "Steam Trains", note: "Travel far in hours, not days.",
      svg: '<svg viewBox="0 0 80 80"><rect x="10" y="40" width="40" height="22" rx="3" fill="#c0392b"/><rect x="4" y="48" width="10" height="14" fill="#8a271e"/><rect x="26" y="26" width="10" height="16" fill="#5a5468"/><circle cx="20" cy="66" r="7" fill="#333"/><circle cx="44" cy="66" r="7" fill="#333"/><rect x="52" y="46" width="22" height="16" rx="2" fill="#5a5468"/><g fill="#eee" opacity=".8"><circle cx="32" cy="18" r="5"/><circle cx="42" cy="14" r="6"/></g></svg>' }
  ],
  // 8 — Modern Age
  [
    { name: "Albert Einstein", note: "A brilliant scientist.",
      svg: bsFig("#5a5a66", '<path d="M18 30 Q12 14 28 18 Q40 6 52 18 Q68 14 62 30 Q52 20 40 20 Q28 20 18 30 Z" fill="#eeeef2"/><path d="M30 46 q10 6 20 0" stroke="#dcdce2" stroke-width="4" fill="none" stroke-linecap="round"/>') },
    { name: "First Airplane", note: "The Wright Brothers flew in 1903.",
      svg: '<svg viewBox="0 0 80 80"><rect x="16" y="38" width="48" height="6" rx="3" fill="#e2c17a"/><rect x="16" y="30" width="48" height="6" rx="3" fill="#d9b46a"/><g stroke="#b58f4a" stroke-width="2"><line x1="28" y1="36" x2="28" y2="44"/><line x1="52" y1="36" x2="52" y2="44"/></g><path d="M60 30 l10 11 -10 11 z" fill="#c0392b"/><circle cx="40" cy="41" r="3" fill="#8a6d4b"/></svg>' },
    { name: "Moon Landing", note: "People walked on the Moon in 1969.",
      svg: '<svg viewBox="0 0 80 80"><rect width="80" height="80" rx="10" fill="#151233"/><circle cx="24" cy="26" r="14" fill="#d9d4ea"/><circle cx="20" cy="22" r="3" fill="#bcb6d4"/><g fill="#e9edf5"><path d="M54 20 q8 0 8 18 q0 12 -5 18 l-6 0 q-5 -6 -5 -18 q0 -18 8 -18 z"/><circle cx="54" cy="34" r="4" fill="#4d96ff"/><path d="M46 52 l-6 10 6 -3 z" fill="#e2453b"/><path d="M62 52 l6 10 -6 -3 z" fill="#e2453b"/></g></svg>' }
  ],
  // 9 — Information Age
  [
    { name: "The Internet", note: "The World Wide Web, invented ~1990.",
      svg: '<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="26" fill="#4d96ff"/><ellipse cx="40" cy="40" rx="26" ry="11" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="40" cy="40" rx="11" ry="26" fill="none" stroke="#fff" stroke-width="2"/><line x1="14" y1="40" x2="66" y2="40" stroke="#fff" stroke-width="2"/><path d="M40 14 Q26 40 40 66 Q54 40 40 14" fill="none" stroke="#fff" stroke-width="2"/></svg>' },
    { name: "Smartphones", note: "A computer in your pocket.",
      svg: '<svg viewBox="0 0 80 80"><rect x="26" y="8" width="30" height="64" rx="7" fill="#2d2a4a"/><rect x="30" y="16" width="22" height="44" fill="#a6e3ff"/><g fill="#4d96ff"><rect x="34" y="20" width="6" height="6" rx="1"/><rect x="42" y="20" width="6" height="6" rx="1"/><rect x="34" y="28" width="6" height="6" rx="1"/><rect x="42" y="28" width="6" height="6" rx="1"/></g><circle cx="41" cy="66" r="2.4" fill="#8a86a8"/></svg>' },
    { name: "Artificial Intelligence", note: "Computers learning to think.",
      svg: '<svg viewBox="0 0 80 80"><rect x="18" y="24" width="44" height="34" rx="8" fill="#7c5cbf"/><circle cx="32" cy="41" r="6" fill="#fff"/><circle cx="48" cy="41" r="6" fill="#fff"/><circle cx="32" cy="41" r="2.5" fill="#2d2a4a"/><circle cx="48" cy="41" r="2.5" fill="#2d2a4a"/><rect x="34" y="50" width="12" height="3" rx="1.5" fill="#fff"/><line x1="40" y1="24" x2="40" y2="14" stroke="#7c5cbf" stroke-width="3"/><circle cx="40" cy="12" r="4" fill="#ffd166"/><rect x="12" y="36" width="6" height="10" rx="2" fill="#7c5cbf"/><rect x="62" y="36" width="6" height="10" rx="2" fill="#7c5cbf"/></svg>' }
  ]
];
