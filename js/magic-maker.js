// BrightSprouts Academy — Magic Creature Maker.
// Children build a creature from hand-drawn SVG parts. Safety is structural: the parts box
// contains only friendly shapes, so every one of the millions of combinations is age-appropriate.
// No AI, no API key, no network call, no cost, nothing to moderate.
// All parts draw into a 200x200 viewBox. Anchors: head centre (100,74), body centre (100,142).

const MM_SCENES = {
  meadow: `<rect width="200" height="200" fill="#e8f7ff"/>
    <circle cx="34" cy="34" r="16" fill="#ffd166" class="mm-pulse"/>
    <ellipse cx="150" cy="36" rx="22" ry="12" fill="#fff"/><ellipse cx="166" cy="30" rx="15" ry="10" fill="#fff"/>
    <path d="M0 168 Q50 156 100 168 Q150 180 200 164 L200 200 L0 200 Z" fill="#8fd694"/>
    <path d="M0 182 Q60 174 120 184 Q170 192 200 182 L200 200 L0 200 Z" fill="#6bcb77"/>`,
  space: `<rect width="200" height="200" fill="#1e1b3a"/>
    <circle cx="36" cy="36" r="13" fill="#fff8d6"/><circle cx="31" cy="32" r="4" fill="#e8e2d0"/>
    <g class="mm-tw"><circle cx="160" cy="28" r="2.4" fill="#fff"/></g>
    <g class="mm-tw" style="animation-delay:.6s"><circle cx="176" cy="60" r="2" fill="#fff"/></g>
    <g class="mm-tw" style="animation-delay:1.2s"><circle cx="24" cy="86" r="2.2" fill="#fff"/></g>
    <g class="mm-tw" style="animation-delay:1.8s"><circle cx="120" cy="18" r="1.8" fill="#fff"/></g>
    <g class="mm-tw" style="animation-delay:.3s"><circle cx="60" cy="26" r="2" fill="#fff"/></g>
    <ellipse cx="168" cy="120" rx="18" ry="7" fill="none" stroke="#c39bff" stroke-width="2"/>
    <circle cx="168" cy="120" r="10" fill="#c39bff"/>
    <path d="M0 178 Q50 166 100 178 Q150 190 200 174 L200 200 L0 200 Z" fill="#4a4470"/>`,
  ocean: `<rect width="200" height="200" fill="#bdeaf7"/>
    <rect y="60" width="200" height="140" fill="#4dc9e6"/>
    <path d="M0 60 Q25 52 50 60 Q75 68 100 60 Q125 52 150 60 Q175 68 200 60 L200 66 L0 66 Z" fill="#7fdcef"/>
    <g class="mm-float"><circle cx="30" cy="110" r="5" fill="none" stroke="#fff" stroke-width="2"/></g>
    <g class="mm-float" style="animation-delay:.8s"><circle cx="172" cy="90" r="7" fill="none" stroke="#fff" stroke-width="2"/></g>
    <g class="mm-float" style="animation-delay:1.5s"><circle cx="46" cy="70" r="4" fill="none" stroke="#fff" stroke-width="2"/></g>
    <path d="M0 180 Q50 170 100 180 Q150 190 200 178 L200 200 L0 200 Z" fill="#f6e2b3"/>
    <path d="M24 178 q-4 -18 4 -26 q4 10 0 26 M32 178 q6 -16 14 -20 q-4 12 -8 20" stroke="#2ec4b6" stroke-width="3" fill="none"/>`,
  forest: `<rect width="200" height="200" fill="#eafaf0"/>
    <circle cx="168" cy="32" r="14" fill="#ffd166" class="mm-pulse"/>
    <path d="M26 170 L44 120 L62 170 Z" fill="#4e9f3d"/><path d="M26 150 L44 104 L62 150 Z" fill="#6bcb77"/>
    <path d="M40 170 L40 182" stroke="#8b5a2b" stroke-width="5"/>
    <path d="M150 172 L164 128 L178 172 Z" fill="#4e9f3d"/><path d="M164 172 L164 182" stroke="#8b5a2b" stroke-width="5"/>
    <path d="M0 176 Q50 166 100 176 Q150 186 200 172 L200 200 L0 200 Z" fill="#8fd694"/>
    <g class="mm-flutter"><path d="M74 60 q-7 -7 -12 -2 q5 5 12 2 z M74 60 q7 -7 12 -2 q-5 5 -12 2 z" fill="#ff9f68"/></g>`,
  rainbow: `<rect width="200" height="200" fill="#fff6fb"/>
    <g opacity=".85">
      <path d="M20 170 A80 80 0 0 1 180 170" fill="none" stroke="#ff6b9d" stroke-width="11"/>
      <path d="M31 170 A69 69 0 0 1 169 170" fill="none" stroke="#ff9f68" stroke-width="11"/>
      <path d="M42 170 A58 58 0 0 1 158 170" fill="none" stroke="#ffd166" stroke-width="11"/>
      <path d="M53 170 A47 47 0 0 1 147 170" fill="none" stroke="#6bcb77" stroke-width="11"/>
      <path d="M64 170 A36 36 0 0 1 136 170" fill="none" stroke="#4d96ff" stroke-width="11"/>
      <path d="M75 170 A25 25 0 0 1 125 170" fill="none" stroke="#c39bff" stroke-width="11"/>
    </g>
    <g class="mm-float"><ellipse cx="34" cy="166" rx="22" ry="13" fill="#fff"/><ellipse cx="50" cy="160" rx="15" ry="10" fill="#fff"/></g>
    <g class="mm-float" style="animation-delay:.7s"><ellipse cx="166" cy="166" rx="22" ry="13" fill="#fff"/><ellipse cx="150" cy="160" rx="15" ry="10" fill="#fff"/></g>
    <path d="M0 180 L200 180 L200 200 L0 200 Z" fill="#8fd694"/>`,
  castle: `<rect width="200" height="200" fill="#f2ecff"/>
    <circle cx="36" cy="34" r="13" fill="#ffd166" class="mm-pulse"/>
    <path d="M60 170 L60 96 L140 96 L140 170 Z" fill="#cfc6ee"/>
    <path d="M52 96 L52 74 L68 74 L68 96 M132 96 L132 74 L148 96" fill="#b9aee4"/>
    <path d="M52 74 L60 60 L68 74 M132 74 L140 60 L148 74" fill="#7c5cbf"/>
    <path d="M92 170 L92 130 Q100 120 108 130 L108 170 Z" fill="#7c5cbf"/>
    <rect x="72" y="112" width="14" height="16" rx="7" fill="#ffd166"/><rect x="114" y="112" width="14" height="16" rx="7" fill="#ffd166"/>
    <path d="M0 170 L200 170 L200 200 L0 200 Z" fill="#8fd694"/>`
};

// [name, main, shade, belly]
const MM_COLORS = [
  ["Bubblegum", "#ff8fb3", "#e0507f", "#ffd9e5"],
  ["Sunshine",  "#ffd166", "#e0a92e", "#fff0c2"],
  ["Mint",      "#6bcb77", "#3f8f4a", "#d6f5da"],
  ["Sky",       "#6bb8ff", "#3a7fd0", "#d6ebff"],
  ["Grape",     "#c39bff", "#8b5fd6", "#eee0ff"],
  ["Tangerine", "#ff9f68", "#d96a2e", "#ffe3d1"],
  ["Teal",      "#2ec4b6", "#1a8a80", "#c7f2ee"],
  ["Cloud",     "#f0eefb", "#c3bcda", "#ffffff"],
  ["Cocoa",     "#c68a5e", "#8b5a2b", "#f0d9c4"],
  ["Cherry",    "#ff6b6b", "#c73c3c", "#ffd4d4"]
];

// Bodies: get(c) where c = colour tuple
const MM_BODIES = {
  round:  c => `<ellipse cx="100" cy="142" rx="40" ry="36" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <ellipse cx="100" cy="150" rx="24" ry="24" fill="${c[3]}"/>
                <path d="M74 172 l-3 10 M126 172 l3 10" stroke="${c[2]}" stroke-width="6" stroke-linecap="round"/>`,
  tall:   c => `<rect x="66" y="104" width="68" height="76" rx="22" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <rect x="82" y="122" width="36" height="44" rx="14" fill="${c[3]}"/>
                <path d="M80 180 l0 8 M120 180 l0 8" stroke="${c[2]}" stroke-width="7" stroke-linecap="round"/>`,
  blob:   c => `<path d="M100 106 q46 0 44 42 q-2 34 -44 34 q-42 0 -44 -34 q-2 -42 44 -42 z" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <ellipse cx="100" cy="152" rx="26" ry="20" fill="${c[3]}"/>
                <path d="M78 180 q-6 6 -14 4 M122 180 q6 6 14 4" stroke="${c[2]}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  fluffy: c => `<circle cx="100" cy="142" r="38" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <circle cx="70" cy="130" r="14" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <circle cx="130" cy="130" r="14" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <circle cx="100" cy="150" r="22" fill="${c[3]}"/>
                <circle cx="80" cy="176" r="9" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <circle cx="120" cy="176" r="9" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>`,
  bean:   c => `<path d="M100 104 q40 6 38 44 q-2 32 -38 32 q-36 0 -38 -32 q-2 -38 38 -44 z" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                <path d="M84 138 q16 -8 32 0 q0 26 -16 30 q-16 -4 -16 -30 z" fill="${c[3]}"/>
                <path d="M72 168 l-8 12 M128 168 l8 12" stroke="${c[2]}" stroke-width="6" stroke-linecap="round"/>`
};

const MM_HEADS = {
  round: c => `<circle cx="100" cy="74" r="34" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>`,
  wide:  c => `<ellipse cx="100" cy="76" rx="38" ry="30" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>`,
  square:c => `<rect x="66" y="44" width="68" height="62" rx="16" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>`,
  egg:   c => `<ellipse cx="100" cy="76" rx="30" ry="34" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>`
};

const MM_EYES = {
  happy:   () => `<circle cx="87" cy="70" r="9" fill="#fff" stroke="#2d2a4a" stroke-width="2"/><circle cx="113" cy="70" r="9" fill="#fff" stroke="#2d2a4a" stroke-width="2"/>
                  <circle cx="88" cy="71" r="4.5" fill="#2d2a4a" class="mm-blink"/><circle cx="114" cy="71" r="4.5" fill="#2d2a4a" class="mm-blink"/>
                  <circle cx="90" cy="69" r="1.6" fill="#fff"/><circle cx="116" cy="69" r="1.6" fill="#fff"/>`,
  big:     () => `<circle cx="86" cy="70" r="12" fill="#fff" stroke="#2d2a4a" stroke-width="2"/><circle cx="114" cy="70" r="12" fill="#fff" stroke="#2d2a4a" stroke-width="2"/>
                  <circle cx="88" cy="72" r="6" fill="#2d2a4a" class="mm-blink"/><circle cx="116" cy="72" r="6" fill="#2d2a4a" class="mm-blink"/>
                  <circle cx="91" cy="69" r="2.2" fill="#fff"/><circle cx="119" cy="69" r="2.2" fill="#fff"/>`,
  sleepy:  () => `<path d="M78 70 q9 -8 18 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M104 70 q9 -8 18 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  star:    () => `<path d="M87 60 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" fill="#ffd166" stroke="#2d2a4a" stroke-width="1.5" class="mm-pulse"/>
                  <path d="M113 60 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" fill="#ffd166" stroke="#2d2a4a" stroke-width="1.5" class="mm-pulse"/>`,
  one:     () => `<circle cx="100" cy="70" r="15" fill="#fff" stroke="#2d2a4a" stroke-width="2.5"/>
                  <circle cx="102" cy="72" r="7" fill="#2d2a4a" class="mm-blink"/><circle cx="105" cy="68" r="2.6" fill="#fff"/>`,
  three:   () => `<circle cx="80" cy="72" r="7" fill="#fff" stroke="#2d2a4a" stroke-width="2"/><circle cx="81" cy="73" r="3.4" fill="#2d2a4a" class="mm-blink"/>
                  <circle cx="100" cy="62" r="7" fill="#fff" stroke="#2d2a4a" stroke-width="2"/><circle cx="101" cy="63" r="3.4" fill="#2d2a4a" class="mm-blink"/>
                  <circle cx="120" cy="72" r="7" fill="#fff" stroke="#2d2a4a" stroke-width="2"/><circle cx="121" cy="73" r="3.4" fill="#2d2a4a" class="mm-blink"/>`
};

const MM_MOUTHS = {
  smile:  () => `<path d="M86 90 q14 14 28 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  grin:   () => `<path d="M84 88 q16 18 32 0 z" fill="#fff" stroke="#2d2a4a" stroke-width="2.5" stroke-linejoin="round"/>
                 <path d="M92 89 l0 6 M100 90 l0 7 M108 89 l0 6" stroke="#2d2a4a" stroke-width="1.4"/>`,
  o:      () => `<ellipse cx="100" cy="92" rx="7" ry="9" fill="#e0507f" stroke="#2d2a4a" stroke-width="2"/>`,
  tongue: () => `<path d="M86 88 q14 14 28 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>
                 <path d="M96 95 q4 10 10 2 q-2 -4 -10 -2 z" fill="#ff8fb3" stroke="#2d2a4a" stroke-width="1.6"/>`,
  fangs:  () => `<path d="M86 90 q14 12 28 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>
                 <path d="M92 92 l2 6 3 -6 z M106 92 l2 6 3 -6 z" fill="#fff" stroke="#2d2a4a" stroke-width="1.2"/>`,
  beak:   c => `<path d="M92 88 L100 100 L108 88 Z" fill="#ff9f68" stroke="#2d2a4a" stroke-width="2" stroke-linejoin="round"/>`
};

const MM_TOPS = {
  none:    () => ``,
  ears:    c => `<path d="M76 50 L66 24 L92 40 Z" fill="${c[1]}" stroke="${c[2]}" stroke-width="3" stroke-linejoin="round"/>
                 <path d="M124 50 L134 24 L108 40 Z" fill="${c[1]}" stroke="${c[2]}" stroke-width="3" stroke-linejoin="round"/>
                 <path d="M78 46 L72 32 L87 41 Z" fill="${c[3]}"/><path d="M122 46 L128 32 L113 41 Z" fill="${c[3]}"/>`,
  bunny:   c => `<ellipse cx="84" cy="28" rx="9" ry="24" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                 <ellipse cx="116" cy="28" rx="9" ry="24" fill="${c[1]}" stroke="${c[2]}" stroke-width="3"/>
                 <ellipse cx="84" cy="28" rx="4" ry="16" fill="${c[3]}"/><ellipse cx="116" cy="28" rx="4" ry="16" fill="${c[3]}"/>`,
  horn:    () => `<path d="M100 40 L94 12 L106 12 Z" fill="#ffd166" stroke="#c9a227" stroke-width="2.5" stroke-linejoin="round"/>
                  <path d="M96 30 L104 26 M97 22 L103 19" stroke="#c9a227" stroke-width="1.6"/>`,
  horns:   c => `<path d="M78 46 q-10 -18 2 -26 q6 10 10 20 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5"/>
                 <path d="M122 46 q10 -18 -2 -26 q-6 10 -10 20 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5"/>`,
  antenna: () => `<path d="M88 44 q-6 -18 -14 -22 M112 44 q6 -18 14 -22" stroke="#2d2a4a" stroke-width="2.5" fill="none"/>
                  <circle cx="73" cy="20" r="5" fill="#ff6b9d" class="mm-pulse"/><circle cx="127" cy="20" r="5" fill="#2ec4b6" class="mm-pulse"/>`,
  spikes:  c => `<path d="M84 44 l6 -14 6 14 M96 42 l4 -18 4 18 M108 44 l6 -14 6 14" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" stroke-linejoin="round"/>`,
  tuft:    c => `<path d="M100 42 q-4 -20 -14 -24 q14 2 14 14 q0 -16 12 -18 q-6 12 -12 28 z" fill="${c[2]}"/>`
};

const MM_EXTRAS = {
  none:    () => ``,
  hat:     () => `<path d="M70 44 L130 44 L124 40 Q100 18 76 40 Z" fill="#ff6b9d" stroke="#c2185b" stroke-width="2.5" stroke-linejoin="round"/>
                  <rect x="64" y="42" width="72" height="7" rx="3.5" fill="#c2185b"/>`,
  crown:   () => `<path d="M74 42 L74 20 L86 32 L100 16 L114 32 L126 20 L126 42 Z" fill="#ffd166" stroke="#c9a227" stroke-width="2.5" stroke-linejoin="round"/>
                  <circle cx="100" cy="30" r="3" fill="#ff6b9d"/><circle cx="80" cy="26" r="2.4" fill="#4d96ff"/><circle cx="120" cy="26" r="2.4" fill="#4d96ff"/>`,
  bow:     () => `<path d="M100 42 q-16 -12 -20 0 q4 10 20 4 z" fill="#ff6b9d" stroke="#c2185b" stroke-width="2"/>
                  <path d="M100 42 q16 -12 20 0 q-4 10 -20 4 z" fill="#ff6b9d" stroke="#c2185b" stroke-width="2"/>
                  <circle cx="100" cy="44" r="4" fill="#c2185b"/>`,
  glasses: () => `<circle cx="86" cy="70" r="13" fill="none" stroke="#2d2a4a" stroke-width="2.5"/>
                  <circle cx="114" cy="70" r="13" fill="none" stroke="#2d2a4a" stroke-width="2.5"/>
                  <path d="M99 70 L101 70 M73 68 L64 64 M127 68 L136 64" stroke="#2d2a4a" stroke-width="2.5"/>`,
  scarf:   () => `<path d="M70 104 q30 12 60 0 l0 10 q-30 12 -60 0 z" fill="#4d96ff" stroke="#2c5f9e" stroke-width="2"/>
                  <path d="M124 112 l8 22 l10 -4 l-8 -20 z" fill="#4d96ff" stroke="#2c5f9e" stroke-width="2"/>`,
  cape:    c => `<path d="M68 106 q-14 46 4 68 q28 8 56 0 q18 -22 4 -68 q-32 12 -64 0 z" fill="#c2185b" opacity=".9" stroke="#8e0f3d" stroke-width="2" class="mm-capeflap"/>`
};

const MM_WINGS = {
  none:  () => ``,
  bird:  c => `<path d="M64 132 q-34 -22 -46 4 q22 22 46 8 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" class="mm-flap" style="transform-origin:64px 132px"/>
               <path d="M136 132 q34 -22 46 4 q-22 22 -46 8 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" class="mm-flap" style="transform-origin:136px 132px;animation-delay:.05s"/>`,
  bat:   c => `<path d="M64 130 q-30 -20 -44 -2 q10 4 8 12 q10 -4 12 4 q10 -2 12 6 q8 -4 12 -6 z" fill="${c[2]}" stroke="#2d2a4a" stroke-width="2" class="mm-flap" style="transform-origin:64px 130px"/>
               <path d="M136 130 q30 -20 44 -2 q-10 4 -8 12 q-10 -4 -12 4 q-10 -2 -12 6 q-8 -4 -12 -6 z" fill="${c[2]}" stroke="#2d2a4a" stroke-width="2" class="mm-flap" style="transform-origin:136px 130px;animation-delay:.05s"/>`,
  fairy: () => `<ellipse cx="60" cy="122" rx="24" ry="14" fill="#c39bff" opacity=".65" stroke="#8b5fd6" stroke-width="1.5" transform="rotate(-25 60 122)" class="mm-flap" style="transform-origin:80px 130px"/>
                <ellipse cx="140" cy="122" rx="24" ry="14" fill="#c39bff" opacity=".65" stroke="#8b5fd6" stroke-width="1.5" transform="rotate(25 140 122)" class="mm-flap" style="transform-origin:120px 130px;animation-delay:.05s"/>`,
  fins:  c => `<path d="M62 138 q-22 -10 -22 12 q14 8 22 -4 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" class="mm-flap" style="transform-origin:62px 140px"/>
               <path d="M138 138 q22 -10 22 12 q-14 8 -22 -4 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" class="mm-flap" style="transform-origin:138px 140px;animation-delay:.05s"/>`
};

const MM_TAILS = {
  none:   () => ``,
  curly:  c => `<path d="M138 158 q28 6 26 -14 q-2 -12 -12 -8 q-8 4 -2 12" fill="none" stroke="${c[2]}" stroke-width="6" stroke-linecap="round" class="mm-wag" style="transform-origin:138px 158px"/>`,
  fluffy: c => `<circle cx="152" cy="160" r="14" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" class="mm-wag" style="transform-origin:138px 156px"/>`,
  spike:  c => `<path d="M138 156 q26 4 34 -12 l-6 22 q-16 4 -28 0 z" fill="${c[1]}" stroke="${c[2]}" stroke-width="2.5" class="mm-wag" style="transform-origin:138px 156px"/>`,
  fish:   c => `<path d="M138 150 l28 -14 l-6 22 l6 20 l-28 -14 z" fill="${c[3]}" stroke="${c[2]}" stroke-width="2.5" stroke-linejoin="round" class="mm-wag" style="transform-origin:138px 152px"/>`,
  long:   c => `<path d="M138 158 q34 4 40 -22" fill="none" stroke="${c[1]}" stroke-width="8" stroke-linecap="round" class="mm-wag" style="transform-origin:138px 158px"/>
                <circle cx="178" cy="134" r="7" fill="${c[3]}" stroke="${c[2]}" stroke-width="2"/>`
};

const MM_PARTS = [
  ["scene",  "🏞️ Where",     () => Object.keys(MM_SCENES)],
  ["colour", "🎨 Colour",     () => MM_COLORS.map((c, i) => i)],
  ["body",   "🫧 Body",       () => Object.keys(MM_BODIES)],
  ["head",   "😀 Head",       () => Object.keys(MM_HEADS)],
  ["eyes",   "👀 Eyes",       () => Object.keys(MM_EYES)],
  ["mouth",  "👄 Mouth",      () => Object.keys(MM_MOUTHS)],
  ["top",    "👂 Ears/Horns", () => Object.keys(MM_TOPS)],
  ["wings",  "🦋 Wings",      () => Object.keys(MM_WINGS)],
  ["tail",   "🐾 Tail",       () => Object.keys(MM_TAILS)],
  ["extra",  "🎩 Accessory",  () => Object.keys(MM_EXTRAS)]
];

const MM_NAMES1 = ["Zib","Bo","Muffin","Pip","Glim","Wob","Tato","Nubs","Fizz","Squig","Doodle","Bram","Yip","Snuggs","Kazoo","Plop","Twix","Gomo","Bibble","Zonk"];
const MM_NAMES2 = ["bles","zoid","kins","worth","monster","face","puff","noodle","boots","whisker","bottom","snout","wing","tail","paws","beak","fluff","stomp","wiggle","snoot"];

function mmRandom() {
  const pick = a => a[Math.floor(Math.random() * a.length)];
  return {
    scene:  pick(Object.keys(MM_SCENES)),
    colour: Math.floor(Math.random() * MM_COLORS.length),
    body:   pick(Object.keys(MM_BODIES)),
    head:   pick(Object.keys(MM_HEADS)),
    eyes:   pick(Object.keys(MM_EYES)),
    mouth:  pick(Object.keys(MM_MOUTHS)),
    top:    pick(Object.keys(MM_TOPS)),
    wings:  pick(Object.keys(MM_WINGS)),
    tail:   pick(Object.keys(MM_TAILS)),
    extra:  pick(Object.keys(MM_EXTRAS)),
    name:   pick(MM_NAMES1) + pick(MM_NAMES2)
  };
}

// How many different creatures are possible?
function mmCombos() {
  return Object.keys(MM_SCENES).length * MM_COLORS.length * Object.keys(MM_BODIES).length *
         Object.keys(MM_HEADS).length * Object.keys(MM_EYES).length * Object.keys(MM_MOUTHS).length *
         Object.keys(MM_TOPS).length * Object.keys(MM_WINGS).length * Object.keys(MM_TAILS).length *
         Object.keys(MM_EXTRAS).length;
}

LESSONS[16] = {
  create: {
    title: "Magic Creature Maker", emoji: "🎨",
    intro: "Invent a creature that has never existed! Pick its body, its eyes, its wings and its hat — then watch it come alive and lean right out of the screen at you.",
    learn: [
      "Move your mouse (or your finger) across the picture — your creature will turn and lean towards you, like it's climbing out of the screen.",
      "There are over " + (mmCombos() / 1000000).toFixed(1) + " million different creatures in here. You will almost certainly make one nobody has ever made before.",
      "Press 🎲 Surprise Me for a completely random creature — that's usually the funniest way to play.",
      "Every creature gets a silly made-up name. You can type your own instead.",
      "Save it as a picture to keep, or print it out to colour in and stick on the wall."
    ],
    activity: "📖 Creature Story: Make a creature, then answer three questions about it — What does it eat? Where does it sleep? What is it afraid of? Now write it a story. Best writing prompt there is.",
    magicMaker: true
  }
};
