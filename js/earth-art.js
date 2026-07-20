// BrightSprouts Academy — kid-friendly illustrations for the "Earth's Story" timeline.
// Self-contained inline SVG (no external images), one scene per era + a dinosaur gallery.
// EARTH_ART is parallel to EARTH_ERAS (same order). EARTH_DINOS shows real dinosaurs.

const EARTH_ART = [
  // 0 — The Big Bang
  '<svg viewBox="0 0 240 96" preserveAspectRatio="xMidYMid slice"><rect width="240" height="96" fill="#1c1246"/>'
  +'<g fill="#fff"><circle cx="28" cy="20" r="1.6"/><circle cx="212" cy="24" r="1.4"/><circle cx="46" cy="72" r="1.2"/><circle cx="196" cy="74" r="1.6"/><circle cx="20" cy="50" r="1"/><circle cx="150" cy="14" r="1.2"/></g>'
  +'<circle cx="120" cy="48" r="34" fill="#ff9f68" opacity=".3"/><circle cx="120" cy="48" r="20" fill="#ffd166" opacity=".7"/><circle cx="120" cy="48" r="10" fill="#fff"/>'
  +'<g stroke="#ffe08a" stroke-width="2.5" stroke-linecap="round" opacity=".85"><line x1="120" y1="8" x2="120" y2="20"/><line x1="120" y1="76" x2="120" y2="88"/><line x1="80" y1="48" x2="68" y2="48"/><line x1="160" y1="48" x2="172" y2="48"/><line x1="94" y1="22" x2="86" y2="14"/><line x1="146" y1="22" x2="154" y2="14"/><line x1="94" y1="74" x2="86" y2="82"/><line x1="146" y1="74" x2="154" y2="82"/></g></svg>',

  // 1 — The Sun & Solar System
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#241a4d"/>'
  +'<g fill="none" stroke="#5a4b93" stroke-width="1.5"><ellipse cx="46" cy="48" rx="74" ry="30"/><ellipse cx="46" cy="48" rx="128" ry="52"/><ellipse cx="46" cy="48" rx="182" ry="74"/></g>'
  +'<circle cx="46" cy="48" r="26" fill="#ffd166"/><circle cx="46" cy="48" r="26" fill="none" stroke="#ff9f68" stroke-width="3"/>'
  +'<circle cx="118" cy="54" r="5" fill="#4d96ff"/><circle cx="170" cy="28" r="6" fill="#e26d5c"/><circle cx="214" cy="62" r="7" fill="#6bcb77"/>'
  +'<g fill="#fff"><circle cx="150" cy="82" r="1.3"/><circle cx="205" cy="12" r="1.3"/></g></svg>',

  // 2 — Earth Is Born (molten planet + volcanoes + young Moon)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#2a1338"/>'
  +'<circle cx="92" cy="52" r="40" fill="#b5451f"/>'
  +'<path d="M60 58 q10 -16 20 0 q9 -12 18 0 q9 -14 16 2" fill="none" stroke="#ff8a3d" stroke-width="4" stroke-linecap="round" opacity=".8"/>'
  +'<circle cx="80" cy="44" r="7" fill="#ff6b3d"/><circle cx="108" cy="60" r="6" fill="#ffb03a"/><circle cx="92" cy="70" r="5" fill="#ff8a3d"/>'
  +'<circle cx="196" cy="30" r="15" fill="#d9d4ea"/><circle cx="190" cy="27" r="3.4" fill="#bcb6d4"/><circle cx="201" cy="35" r="2.6" fill="#bcb6d4"/>'
  +'<g fill="#ffd166"><circle cx="150" cy="72" r="1.5"/><circle cx="30" cy="18" r="1.5"/><circle cx="220" cy="70" r="1.3"/></g></svg>',

  // 3 — Oceans & the First Life (tiny microbes in the sea)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#2e7fd6"/><rect width="240" height="30" fill="#7fc0ff"/>'
  +'<g stroke="#fff" stroke-width="2" fill="none" opacity=".55"><path d="M8 22 q10 -6 20 0 q10 6 20 0"/><path d="M188 18 q10 -6 20 0 q10 6 20 0"/></g>'
  +'<g><circle cx="86" cy="60" r="8" fill="#a6ecb4"/><circle cx="86" cy="60" r="3" fill="#3d9950"/>'
  +'<circle cx="142" cy="72" r="6" fill="#a6ecb4"/><circle cx="142" cy="72" r="2.2" fill="#3d9950"/>'
  +'<circle cx="58" cy="80" r="5" fill="#a6ecb4"/><circle cx="176" cy="54" r="5" fill="#c9f5d3"/><circle cx="110" cy="84" r="4" fill="#c9f5d3"/></g></svg>',

  // 4 — The Air Fills with Oxygen (bubbles rising from green mats)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#2ea8b6"/>'
  +'<g fill="#eafcff" opacity=".85"><circle cx="60" cy="72" r="5"/><circle cx="70" cy="52" r="4"/><circle cx="80" cy="32" r="3"/><circle cx="150" cy="74" r="6"/><circle cx="160" cy="50" r="4"/><circle cx="169" cy="28" r="3"/><circle cx="110" cy="62" r="4"/><circle cx="116" cy="40" r="3"/><circle cx="196" cy="66" r="4"/></g>'
  +'<g fill="#3d9950"><ellipse cx="60" cy="88" rx="16" ry="7"/><ellipse cx="150" cy="90" rx="18" ry="7"/><ellipse cx="110" cy="90" rx="12" ry="5"/></g></svg>',

  // 5 — Animals Appear in the Sea (jellyfish, trilobite, big-eyed critter)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#3a6ea5"/>'
  +'<path d="M22 90 q8 -22 0 -46" stroke="#6bcb77" stroke-width="5" fill="none" stroke-linecap="round"/>'
  +'<path d="M44 44 a17 13 0 0 1 34 0 z" fill="#ff9db0"/><g stroke="#ff9db0" stroke-width="2.4" stroke-linecap="round"><line x1="50" y1="56" x2="50" y2="74"/><line x1="61" y1="56" x2="61" y2="78"/><line x1="72" y1="56" x2="72" y2="74"/></g>'
  +'<g><ellipse cx="150" cy="66" rx="28" ry="13" fill="#c79a5a"/><path d="M124 66 h52" stroke="#8a6a33" stroke-width="2"/><g stroke="#8a6a33" stroke-width="1.6"><line x1="138" y1="55" x2="138" y2="77"/><line x1="150" y1="54" x2="150" y2="78"/><line x1="162" y1="55" x2="162" y2="77"/></g></g>'
  +'<g><circle cx="210" cy="42" r="11" fill="#e2c17a"/><circle cx="210" cy="42" r="3.4" fill="#2d2a4a"/></g></svg>',

  // 6 — Life Crawls onto Land (green land, fern, bug, little amphibian)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#bfe6ff"/><rect y="60" width="240" height="36" fill="#6bcb77"/>'
  +'<circle cx="206" cy="24" r="12" fill="#ffd166"/>'
  +'<path d="M56 60 q-2 -22 0 -34" stroke="#3d9950" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M56 30 q-16 -4 -22 -16 q14 -2 22 10 z" fill="#7ed957"/><path d="M56 30 q16 -4 22 -16 q-14 -2 -22 10 z" fill="#57bd66"/>'
  +'<g><ellipse cx="150" cy="74" rx="20" ry="9" fill="#5aa469"/><circle cx="168" cy="70" r="6" fill="#5aa469"/><circle cx="169" cy="68" r="1.8" fill="#2d2a4a"/></g>'
  +'<g><ellipse cx="108" cy="52" rx="6" ry="4" fill="#e26d5c"/><g stroke="#b5432f" stroke-width="1.4"><line x1="103" y1="52" x2="99" y2="49"/><line x1="103" y1="54" x2="99" y2="56"/><line x1="113" y1="52" x2="117" y2="49"/></g></g></svg>',

  // 7 — The Age of Dinosaurs (prehistoric landscape; the gallery sits below)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#cfe8a8"/><rect y="66" width="240" height="30" fill="#8fae59"/>'
  +'<path d="M-4 66 L44 26 L92 66 Z" fill="#9c9270"/><path d="M28 44 l16 -18 l16 18 q-16 8 -32 0 z" fill="#b8ad86"/>'
  +'<circle cx="210" cy="24" r="13" fill="#ffd166"/>'
  // long-neck silhouette
  +'<g fill="#5f7d3a"><ellipse cx="150" cy="70" rx="24" ry="14"/><path d="M168 62 Q182 42 180 22 Q179 14 186 12" stroke="#5f7d3a" stroke-width="9" fill="none" stroke-linecap="round"/><ellipse cx="188" cy="13" rx="7" ry="5"/><path d="M128 68 Q116 66 112 72" stroke="#5f7d3a" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="140" y="80" width="7" height="14" rx="3"/><rect x="158" y="80" width="7" height="14" rx="3"/></g>'
  // little raptor silhouette
  +'<g fill="#4f6b30"><path d="M60 78 q10 -14 24 -12 q10 1 12 8 q-6 6 -14 5 z"/><path d="M62 84 l-5 8 M74 84 l4 8" stroke="#4f6b30" stroke-width="4" stroke-linecap="round"/><path d="M40 74 q10 2 18 8" stroke="#4f6b30" stroke-width="5" fill="none" stroke-linecap="round"/></g></svg>',

  // 8 — The Dinosaurs Vanish (asteroid streaking toward Earth)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#3a2b4a"/>'
  +'<g fill="#fff" opacity=".8"><circle cx="150" cy="16" r="1.4"/><circle cx="120" cy="30" r="1.1"/><circle cx="200" cy="20" r="1.4"/></g>'
  +'<path d="M0 96 Q120 58 240 96 Z" fill="#5f7d3a"/><path d="M0 96 Q120 70 240 96 Z" fill="#4f6b30" opacity=".6"/>'
  +'<path d="M72 40 L18 4" stroke="#ffd166" stroke-width="6" stroke-linecap="round" opacity=".9"/><path d="M78 36 L34 2" stroke="#ff9f68" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>'
  +'<circle cx="76" cy="42" r="11" fill="#7a6a52"/><circle cx="72" cy="38" r="3" fill="#5e5140"/><circle cx="80" cy="45" r="2.4" fill="#5e5140"/>'
  +'<g fill="#8a7a66" opacity=".55"><circle cx="150" cy="74" r="7"/><circle cx="172" cy="80" r="9"/><circle cx="130" cy="82" r="6"/></g></svg>',

  // 9 — Mammals Rise & the First Ancestors (savanna, big mammal + early human)
  '<svg viewBox="0 0 240 96"><rect width="240" height="96" fill="#ffe3b8"/><rect y="64" width="240" height="32" fill="#d7ac63"/>'
  +'<circle cx="206" cy="24" r="13" fill="#ff9f68"/>'
  +'<g fill="#8a6d4b"><ellipse cx="66" cy="56" rx="30" ry="18"/><path d="M40 58 q-8 8 -6 16 h8 z"/><path d="M92 58 q8 8 6 16 h-8 z"/><path d="M40 52 q-14 4 -16 18 q8 2 12 -6 q3 -8 8 -8 z"/><circle cx="30" cy="50" r="9"/></g>'
  +'<g fill="#5e4a34"><circle cx="176" cy="36" r="6"/><path d="M176 42 v18" stroke="#5e4a34" stroke-width="4"/><path d="M176 48 l-9 8 M176 48 l9 8" stroke="#5e4a34" stroke-width="4" stroke-linecap="round"/><path d="M176 60 l-7 12 M176 60 l7 12" stroke="#5e4a34" stroke-width="4" stroke-linecap="round"/></g></svg>'
];

// Six real dinosaurs, each with its signature feature so kids can tell them apart.
const EARTH_DINOS = [
  { name: "Tyrannosaurus rex",
    svg: '<svg viewBox="0 0 120 96"><path d="M8 62 Q34 54 54 58 L52 72 Q30 76 10 74 Z" fill="#79c267"/>'
      +'<ellipse cx="66" cy="52" rx="27" ry="26" fill="#79c267"/>'
      +'<path d="M58 76 q-3 12 -9 16 h11 l4 -14 z" fill="#5fa94f"/><path d="M78 76 q3 12 9 16 h-11 l-4 -14 z" fill="#69b559"/>'
      +'<path d="M82 32 q26 -6 34 10 q3 9 -6 13 q-2 9 -13 9 q-17 0 -21 -15 q-2 -12 6 -17 z" fill="#79c267"/>'
      +'<path d="M92 58 q13 4 24 -1 q-3 9 -14 9 q-9 0 -12 -8 z" fill="#5fa94f"/>'
      +'<g fill="#fff"><polygon points="96,55 98,60 100,55"/><polygon points="103,55 105,60 107,55"/><polygon points="110,55 112,59 114,55"/></g>'
      +'<path d="M74 55 q7 1 9 8" stroke="#5fa94f" stroke-width="4" fill="none" stroke-linecap="round"/>'
      +'<circle cx="101" cy="41" r="3.4" fill="#2d2a4a"/><circle cx="102.4" cy="39.6" r="1.1" fill="#fff"/></svg>' },

  { name: "Triceratops",
    svg: '<svg viewBox="0 0 120 96"><ellipse cx="50" cy="58" rx="34" ry="20" fill="#e2915a"/>'
      +'<g fill="#cf7f4a"><rect x="26" y="72" width="8" height="16" rx="3"/><rect x="44" y="74" width="8" height="15" rx="3"/><rect x="64" y="74" width="8" height="15" rx="3"/></g>'
      +'<path d="M78 60 q3 12 0 20 h9 l1 -18 z" fill="#d98a52"/>'
      +'<path d="M60 42 q24 -4 36 6 q-6 9 -20 11 q-12 1 -18 -8 z" fill="#e2915a"/>'
      +'<path d="M62 40 q-2 -18 -8 -24 q14 1 18 20 z" fill="#f2b98a"/>'
      +'<path d="M92 44 l16 -11" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/><path d="M90 50 l18 -5" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/><path d="M86 56 l5 7" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
      +'<circle cx="82" cy="49" r="3" fill="#2d2a4a"/></svg>' },

  { name: "Stegosaurus",
    svg: '<svg viewBox="0 0 120 96"><path d="M16 62 Q34 40 62 44 Q92 47 104 62 Q92 74 62 74 Q34 74 16 62 Z" fill="#63b6b0"/>'
      +'<g fill="#e26d5c"><polygon points="40,46 46,26 52,46"/><polygon points="55,44 61,22 67,44"/><polygon points="70,46 76,28 82,46"/></g>'
      +'<g stroke="#2d2a4a" stroke-width="4" stroke-linecap="round"><line x1="18" y1="58" x2="8" y2="50"/><line x1="17" y1="63" x2="5" y2="63"/></g>'
      +'<path d="M100 60 q14 -3 20 5 q-8 5 -19 1 z" fill="#63b6b0"/>'
      +'<g fill="#4f9f99"><rect x="36" y="72" width="7" height="16" rx="3"/><rect x="54" y="73" width="7" height="16" rx="3"/><rect x="72" y="73" width="7" height="16" rx="3"/><rect x="88" y="70" width="7" height="16" rx="3"/></g>'
      +'<circle cx="110" cy="61" r="2.6" fill="#2d2a4a"/></svg>' },

  { name: "Brachiosaurus",
    svg: '<svg viewBox="0 0 120 96"><path d="M20 62 Q6 60 2 68" stroke="#5b8bd0" stroke-width="9" fill="none" stroke-linecap="round"/>'
      +'<ellipse cx="52" cy="62" rx="30" ry="18" fill="#5b8bd0"/>'
      +'<g fill="#4f7bbf"><rect x="34" y="76" width="8" height="16" rx="4"/><rect x="50" y="78" width="8" height="14" rx="4"/><rect x="64" y="78" width="8" height="14" rx="4"/><rect x="78" y="76" width="8" height="16" rx="4"/></g>'
      +'<path d="M78 56 Q94 40 92 20 Q91 12 99 10" stroke="#5b8bd0" stroke-width="12" fill="none" stroke-linecap="round"/>'
      +'<ellipse cx="101" cy="11" rx="9" ry="6" fill="#5b8bd0"/><circle cx="105" cy="9" r="2.2" fill="#2d2a4a"/></svg>' },

  { name: "Velociraptor",
    svg: '<svg viewBox="0 0 120 96"><path d="M10 44 Q34 46 50 56 L46 64 Q28 60 10 58 Z" fill="#f0b04e"/>'
      +'<ellipse cx="60" cy="58" rx="21" ry="18" fill="#f0b04e"/>'
      +'<path d="M52 74 q-6 10 -11 15 l9 3 8 -14 z" fill="#db9c3c"/><path d="M68 74 q6 10 3 17 l-9 -2 -1 -14 z" fill="#e6a745"/>'
      +'<path d="M42 87 l-7 5" stroke="#2d2a4a" stroke-width="3" stroke-linecap="round"/>'
      +'<path d="M74 46 q19 -4 27 6 q-4 9 -15 9 q-10 0 -14 -7 z" fill="#f0b04e"/>'
      +'<g fill="#fff"><polygon points="93,58 95,61 97,58"/><polygon points="98,58 100,61 102,58"/></g>'
      +'<path d="M62 60 q9 5 7 14" stroke="#db9c3c" stroke-width="4" fill="none" stroke-linecap="round"/>'
      +'<circle cx="90" cy="51" r="3" fill="#2d2a4a"/><circle cx="91" cy="50" r="1" fill="#fff"/></svg>' },

  { name: "Ankylosaurus",
    svg: '<svg viewBox="0 0 120 96"><path d="M22 70 Q32 48 62 48 Q94 48 102 68 Q94 78 62 78 Q32 78 22 70 Z" fill="#8a9a5b"/>'
      +'<g fill="#6f7d47"><circle cx="46" cy="56" r="3"/><circle cx="60" cy="52" r="3"/><circle cx="74" cy="54" r="3"/><circle cx="88" cy="60" r="3"/></g>'
      +'<path d="M102 66 q13 0 16 -6" stroke="#6f7d47" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="116" cy="58" r="8" fill="#6f7d47"/>'
      +'<path d="M20 66 q-12 0 -14 7 q9 4 18 -2 z" fill="#8a9a5b"/>'
      +'<g fill="#75824c"><rect x="36" y="76" width="8" height="12" rx="3"/><rect x="54" y="78" width="8" height="12" rx="3"/><rect x="72" y="78" width="8" height="12" rx="3"/><rect x="88" y="76" width="8" height="12" rx="3"/></g>'
      +'<circle cx="9" cy="67" r="2.4" fill="#2d2a4a"/></svg>' }
];
