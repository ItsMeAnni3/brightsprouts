// BrightSprouts Academy — animated story scenes.
// Hand-drawn SVG, animated with CSS (see .sc* classes in styles.css).
// Every scene is a 220x130 banner. Motion is gentle and loops forever;
// it switches itself off for readers who ask for reduced motion.
const STORY_SCENES = {

treasure: `
<rect x="0" y="0" width="220" height="130" fill="#fdf3e0"/>
<circle cx="188" cy="24" r="12" fill="#ffd166" class="sc-tw"/>
<path d="M0 104 Q40 92 78 104 Q120 116 160 102 Q190 92 220 100 L220 130 L0 130 Z" fill="#8fd694"/>
<g class="sc-float">
  <path d="M62 44 L156 40 L162 92 L58 96 Z" fill="#fff8e7" stroke="#c9a227" stroke-width="2"/>
  <path d="M74 56 Q94 48 112 60 Q130 72 148 62" stroke="#c9a227" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
  <path d="M138 74 l10 10 m0 -10 l-10 10" stroke="#e63946" stroke-width="3.4" stroke-linecap="round"/>
  <circle cx="78" cy="58" r="3" fill="#e63946"/>
  <path d="M92 78 q6 -8 12 0" stroke="#7c5cbf" stroke-width="1.6" fill="none"/>
</g>
<g class="sc-tw" style="animation-delay:.6s"><path d="M172 58 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:1.4s"><path d="M34 40 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ff9f68"/></g>`,

lighthouse: `
<rect x="0" y="0" width="220" height="130" fill="#dceefb"/>
<g class="sc-beam" style="transform-origin:120px 44px">
  <path d="M120 44 L220 14 L220 74 Z" fill="#ffd166" opacity=".55"/>
</g>
<path d="M108 40 L132 40 L138 100 L102 100 Z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
<path d="M110 56 L131 56 M108 72 L134 72" stroke="#ff6b9d" stroke-width="5"/>
<rect x="112" y="30" width="16" height="12" rx="2" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
<path d="M106 30 L134 24 L120 18 Z" fill="#e26d5c"/>
<path d="M0 100 Q30 92 60 100 Q90 108 120 100 Q150 92 180 100 Q205 106 220 100 L220 130 L0 130 Z" fill="#4d96ff"/>
<path d="M0 112 Q26 104 52 112 Q78 120 104 112" stroke="#fff" stroke-width="2.5" fill="none" class="sc-wave"/>
<g class="sc-rain"><line x1="30" y1="10" x2="26" y2="24" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:.5s"><line x1="60" y1="4" x2="56" y2="18" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:1s"><line x1="86" y1="12" x2="82" y2="26" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>`,

boat: `
<rect x="0" y="0" width="220" height="130" fill="#e8f7fb"/>
<circle cx="184" cy="26" r="14" fill="#ffd166" class="sc-pulse"/>
<path d="M0 84 Q40 78 80 84 Q120 90 160 84 Q192 79 220 84 L220 130 L0 130 Z" fill="#4dc9e6"/>
<g class="sc-bob">
  <path d="M76 82 L144 82 L128 100 L92 100 Z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M110 82 L110 46" stroke="#7c5cbf" stroke-width="2.4"/>
  <path d="M108 48 L108 80 L80 80 Z" fill="#ff6b9d"/>
  <path d="M113 52 L113 80 L138 80 Z" fill="#ffd166"/>
</g>
<path d="M14 104 Q34 98 54 104 M150 108 Q170 102 190 108" stroke="#fff" stroke-width="2.5" fill="none" class="sc-wave"/>
<g class="sc-float" style="animation-delay:.4s"><ellipse cx="40" cy="34" rx="16" ry="9" fill="#fff"/><ellipse cx="52" cy="30" rx="11" ry="8" fill="#fff"/></g>`,

kite: `
<rect x="0" y="0" width="220" height="130" fill="#e4f4ff"/>
<circle cx="30" cy="26" r="11" fill="#ffd166" class="sc-pulse"/>
<g class="sc-sway" style="transform-origin:130px 20px">
  <path d="M130 20 L108 48 L130 84 L152 48 Z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M130 20 L130 84 M108 48 L152 48" stroke="#7c5cbf" stroke-width="1.6"/>
  <path d="M130 84 q7 10 -2 16 q10 6 2 14" stroke="#7c5cbf" stroke-width="2" fill="none"/>
  <path d="M124 92 l12 5 M122 104 l12 5" stroke="#2ec4b6" stroke-width="2.6"/>
</g>
<path d="M0 106 Q50 96 110 106 Q170 116 220 104 L220 130 L0 130 Z" fill="#8fd694"/>
<g class="sc-float"><ellipse cx="176" cy="36" rx="17" ry="10" fill="#fff"/><ellipse cx="190" cy="32" rx="12" ry="8" fill="#fff"/></g>`,

camp: `
<rect x="0" y="0" width="220" height="130" fill="#2d2a4a"/>
<circle cx="184" cy="26" r="12" fill="#fff8d6"/>
<g class="sc-tw"><circle cx="30" cy="22" r="2" fill="#fff"/></g>
<g class="sc-tw" style="animation-delay:.5s"><circle cx="70" cy="14" r="2.4" fill="#fff"/></g>
<g class="sc-tw" style="animation-delay:1s"><circle cx="112" cy="26" r="2" fill="#fff"/></g>
<g class="sc-tw" style="animation-delay:1.5s"><circle cx="150" cy="12" r="2.2" fill="#fff"/></g>
<path d="M0 96 Q60 84 120 96 Q180 108 220 94 L220 130 L0 130 Z" fill="#3f6b4a"/>
<path d="M20 96 L34 62 L48 96 Z" fill="#2f5138"/><path d="M186 96 L200 66 L214 96 Z" fill="#2f5138"/>
<path d="M76 98 L102 52 L128 98 Z" fill="#ff9f68" stroke="#e0743a" stroke-width="2"/>
<path d="M102 52 L102 98" stroke="#e0743a" stroke-width="2"/>
<path d="M102 98 L90 98 L102 70 Z" fill="#ffd166"/>
<g class="sc-flicker"><path d="M148 98 q-6 -12 2 -18 q2 8 8 4 q6 8 -2 14 z" fill="#ffd166"/></g>
<g class="sc-firefly"><circle cx="60" cy="76" r="2.6" fill="#ffe680"/></g>
<g class="sc-firefly" style="animation-delay:1.2s"><circle cx="160" cy="66" r="2.6" fill="#ffe680"/></g>`,

garden: `
<rect x="0" y="0" width="220" height="130" fill="#eafaf0"/>
<circle cx="32" cy="26" r="13" fill="#ffd166" class="sc-pulse"/>
<path d="M0 100 L220 100 L220 130 L0 130 Z" fill="#8b5a2b"/>
<path d="M0 100 Q110 92 220 100 L220 104 L0 104 Z" fill="#6bcb77"/>
<g class="sc-sway" style="transform-origin:64px 100px">
  <path d="M64 100 L64 62" stroke="#4e9f3d" stroke-width="3"/>
  <circle cx="64" cy="54" r="8" fill="#ffd166"/>
  <g fill="#ff6b9d"><ellipse cx="64" cy="42" rx="4" ry="7"/><ellipse cx="64" cy="66" rx="4" ry="7"/><ellipse cx="52" cy="54" rx="7" ry="4"/><ellipse cx="76" cy="54" rx="7" ry="4"/></g>
  <path d="M64 82 q-12 -6 -16 4 q10 5 16 -1" fill="#6bcb77"/>
</g>
<g class="sc-sway" style="transform-origin:140px 100px;animation-delay:.7s">
  <path d="M140 100 L140 70" stroke="#4e9f3d" stroke-width="3"/>
  <circle cx="140" cy="62" r="7" fill="#fff"/>
  <g fill="#c39bff"><ellipse cx="140" cy="52" rx="3.5" ry="6"/><ellipse cx="140" cy="72" rx="3.5" ry="6"/><ellipse cx="130" cy="62" rx="6" ry="3.5"/><ellipse cx="150" cy="62" rx="6" ry="3.5"/></g>
</g>
<g class="sc-flutter"><path d="M180 56 q-8 -8 -14 -2 q6 6 14 2 z M180 56 q8 -8 14 -2 q-6 6 -14 2 z" fill="#ff9f68"/></g>`,

umbrella: `
<rect x="0" y="0" width="220" height="130" fill="#dfeaf5"/>
<g class="sc-rain"><line x1="26" y1="6" x2="22" y2="20" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:.35s"><line x1="58" y1="2" x2="54" y2="16" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:.7s"><line x1="166" y1="6" x2="162" y2="20" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:1.05s"><line x1="196" y1="2" x2="192" y2="16" stroke="#89c2ff" stroke-width="2.4" stroke-linecap="round"/></g>
<path d="M0 108 L220 108 L220 130 L0 130 Z" fill="#9fb8c9"/>
<g class="sc-bob">
  <path d="M62 62 Q62 26 110 26 Q158 26 158 62 Z" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M62 62 Q78 52 94 62 Q110 52 126 62 Q142 52 158 62" fill="none" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M110 26 L110 96 q0 12 -12 12 q-9 0 -9 -9" fill="none" stroke="#7c5cbf" stroke-width="2.4"/>
  <circle cx="110" cy="22" r="3" fill="#ff6b9d"/>
</g>
<ellipse cx="46" cy="112" rx="10" ry="3" fill="#89c2ff" class="sc-pulse"/>
<ellipse cx="180" cy="114" rx="12" ry="3" fill="#89c2ff" class="sc-pulse" style="animation-delay:.8s"/>`,

hearts: `
<rect x="0" y="0" width="220" height="130" fill="#fff0f5"/>
<circle cx="188" cy="24" r="12" fill="#ffd166" class="sc-pulse"/>
<path d="M0 104 Q55 96 110 104 Q165 112 220 102 L220 130 L0 130 Z" fill="#8fd694"/>
<g class="sc-float">
  <path d="M74 78 q-18 -18 -2 -28 q10 -6 16 4 q6 -10 16 -4 q16 10 -2 28 l-14 12 z" fill="#ff6b9d"/>
</g>
<g class="sc-float" style="animation-delay:.9s">
  <path d="M150 66 q-12 -12 -1 -19 q7 -4 11 3 q4 -7 11 -3 q11 7 -1 19 l-10 8 z" fill="#ff9f68"/>
</g>
<g class="sc-float" style="animation-delay:1.7s">
  <path d="M42 58 q-9 -9 -1 -14 q5 -3 8 2 q3 -5 8 -2 q8 5 -1 14 l-7 6 z" fill="#c39bff"/>
</g>
<g class="sc-tw" style="animation-delay:.4s"><path d="M116 34 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z" fill="#ffd166"/></g>`,

house: `
<rect x="0" y="0" width="220" height="130" fill="#eaf4ff"/>
<circle cx="30" cy="24" r="11" fill="#ffd166" class="sc-pulse"/>
<g class="sc-float"><ellipse cx="170" cy="28" rx="16" ry="9" fill="#fff"/><ellipse cx="182" cy="24" rx="11" ry="7" fill="#fff"/></g>
<path d="M0 106 L220 106 L220 130 L0 130 Z" fill="#8fd694"/>
<path d="M56 62 L110 30 L164 62" fill="none" stroke="#7c5cbf" stroke-width="3" stroke-linejoin="round"/>
<path d="M56 62 L164 62 L164 106 L56 106 Z" fill="#fff8e7" stroke="#7c5cbf" stroke-width="2"/>
<path d="M52 64 L110 30 L168 64 Z" fill="#e26d5c"/>
<rect x="98" y="80" width="24" height="26" fill="#ff9f68" stroke="#7c5cbf" stroke-width="2"/>
<circle cx="116" cy="94" r="2" fill="#7c5cbf"/>
<rect x="68" y="72" width="20" height="18" fill="#ffd166" stroke="#7c5cbf" stroke-width="2" class="sc-glow"/>
<rect x="132" y="72" width="20" height="18" fill="#ffd166" stroke="#7c5cbf" stroke-width="2" class="sc-glow" style="animation-delay:.9s"/>
<rect x="140" y="34" width="12" height="20" fill="#c9a227"/>
<g class="sc-smoke"><circle cx="146" cy="28" r="5" fill="#fff" opacity=".9"/></g>
<g class="sc-smoke" style="animation-delay:1.2s"><circle cx="150" cy="24" r="4" fill="#fff" opacity=".8"/></g>`,

kitchen: `
<rect x="0" y="0" width="220" height="130" fill="#fff6e8"/>
<path d="M0 96 L220 96 L220 130 L0 130 Z" fill="#e8d5b7"/>
<ellipse cx="110" cy="96" rx="56" ry="10" fill="#fff" stroke="#c9a227" stroke-width="2"/>
<ellipse cx="110" cy="88" rx="42" ry="9" fill="#e8a94b" stroke="#b5762c" stroke-width="2"/>
<ellipse cx="110" cy="80" rx="38" ry="8" fill="#f0b95f" stroke="#b5762c" stroke-width="2"/>
<ellipse cx="110" cy="72" rx="34" ry="7" fill="#f8c973" stroke="#b5762c" stroke-width="2"/>
<path d="M92 68 q18 -8 34 0 q-6 8 -16 4 q-10 6 -18 -4 z" fill="#ffd166"/>
<g class="sc-steam"><path d="M92 56 q-6 -10 2 -18 q6 -6 0 -14" stroke="#d8cfc0" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
<g class="sc-steam" style="animation-delay:1s"><path d="M130 54 q-6 -10 2 -18 q6 -6 0 -14" stroke="#d8cfc0" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
<g class="sc-float" style="animation-delay:.5s"><circle cx="176" cy="46" r="8" fill="#ff6b9d"/><path d="M176 38 q3 -5 7 -4" stroke="#4e9f3d" stroke-width="2" fill="none"/></g>`,

laundry: `
<rect x="0" y="0" width="220" height="130" fill="#eaf6ff"/>
<circle cx="188" cy="24" r="11" fill="#ffd166" class="sc-pulse"/>
<path d="M0 42 Q110 62 220 42" stroke="#b9a98c" stroke-width="2.4" fill="none"/>
<g class="sc-swing" style="transform-origin:44px 50px"><rect x="34" y="50" width="20" height="26" rx="4" fill="#ff6b9d"/><rect x="34" y="70" width="20" height="8" rx="3" fill="#ff6b9d"/></g>
<g class="sc-swing" style="transform-origin:88px 56px;animation-delay:.4s"><rect x="78" y="56" width="20" height="26" rx="4" fill="#4d96ff"/><rect x="78" y="76" width="20" height="8" rx="3" fill="#4d96ff"/></g>
<g class="sc-swing" style="transform-origin:132px 56px;animation-delay:.8s"><rect x="122" y="56" width="20" height="26" rx="4" fill="#ffd166"/><rect x="122" y="76" width="20" height="8" rx="3" fill="#ffd166"/></g>
<g class="sc-swing" style="transform-origin:176px 50px;animation-delay:1.2s"><rect x="166" y="50" width="20" height="26" rx="4" fill="#2ec4b6"/><rect x="166" y="70" width="20" height="8" rx="3" fill="#2ec4b6"/></g>
<path d="M0 106 Q55 98 110 106 Q165 114 220 104 L220 130 L0 130 Z" fill="#8fd694"/>
<g class="sc-float"><ellipse cx="40" cy="22" rx="14" ry="8" fill="#fff"/></g>`,

leaves: `
<rect x="0" y="0" width="220" height="130" fill="#fff4e2"/>
<path d="M0 104 Q60 96 120 104 Q180 112 220 102 L220 130 L0 130 Z" fill="#9fcf7f"/>
<path d="M150 104 L150 66" stroke="#8b5a2b" stroke-width="6"/>
<circle cx="150" cy="48" r="24" fill="#e0743a"/><circle cx="130" cy="60" r="15" fill="#ff9f68"/><circle cx="170" cy="60" r="15" fill="#e8a94b"/>
<g class="sc-fall"><ellipse cx="60" cy="10" rx="7" ry="4" fill="#e0743a" transform="rotate(30 60 10)"/></g>
<g class="sc-fall" style="animation-delay:1s"><ellipse cx="96" cy="4" rx="6" ry="3.5" fill="#ffd166" transform="rotate(-20 96 4)"/></g>
<g class="sc-fall" style="animation-delay:2s"><ellipse cx="34" cy="8" rx="6" ry="3.5" fill="#e8a94b" transform="rotate(50 34 8)"/></g>
<g class="sc-fall" style="animation-delay:2.8s"><ellipse cx="120" cy="6" rx="7" ry="4" fill="#e26d5c" transform="rotate(10 120 6)"/></g>
<ellipse cx="52" cy="102" rx="30" ry="10" fill="#e0743a"/><ellipse cx="44" cy="96" rx="18" ry="8" fill="#ff9f68"/>`,

owl: `
<rect x="0" y="0" width="220" height="130" fill="#dceaf7"/>
<g class="sc-fall"><circle cx="30" cy="8" r="3" fill="#fff"/></g>
<g class="sc-fall" style="animation-delay:1.1s"><circle cx="72" cy="4" r="2.6" fill="#fff"/></g>
<g class="sc-fall" style="animation-delay:2.1s"><circle cx="176" cy="6" r="3" fill="#fff"/></g>
<g class="sc-fall" style="animation-delay:2.9s"><circle cx="200" cy="2" r="2.4" fill="#fff"/></g>
<path d="M0 100 Q60 88 120 100 Q180 112 220 98 L220 130 L0 130 Z" fill="#fff"/>
<path d="M20 86 L60 86" stroke="#8b5a2b" stroke-width="5"/>
<g transform="translate(96 34)">
  <ellipse cx="0" cy="30" rx="26" ry="30" fill="#fff8e7" stroke="#8a86a8" stroke-width="2"/>
  <ellipse cx="0" cy="34" rx="16" ry="20" fill="#f0e6d2"/>
  <circle cx="-10" cy="18" r="9" fill="#fff" stroke="#8a86a8" stroke-width="1.6"/>
  <circle cx="10" cy="18" r="9" fill="#fff" stroke="#8a86a8" stroke-width="1.6"/>
  <circle cx="-10" cy="18" r="4" fill="#2d2a4a" class="sc-blink"/>
  <circle cx="10" cy="18" r="4" fill="#2d2a4a" class="sc-blink"/>
  <path d="M0 24 l-4 6 8 0 z" fill="#ff9f68"/>
  <path d="M-20 2 l4 -12 8 8 z M20 2 l-4 -12 -8 8 z" fill="#fff8e7" stroke="#8a86a8" stroke-width="1.6"/>
  <path d="M-8 60 l-4 6 M8 60 l4 6" stroke="#ff9f68" stroke-width="2.6" stroke-linecap="round"/>
</g>`,

bus: `
<rect x="0" y="0" width="220" height="130" fill="#eef2f7"/>
<g class="sc-rain"><line x1="30" y1="6" x2="27" y2="18" stroke="#89c2ff" stroke-width="2" stroke-linecap="round"/></g>
<g class="sc-rain" style="animation-delay:.6s"><line x1="190" y1="4" x2="187" y2="16" stroke="#89c2ff" stroke-width="2" stroke-linecap="round"/></g>
<path d="M0 104 L220 104 L220 130 L0 130 Z" fill="#a8b4bf"/>
<rect x="40" y="46" width="140" height="46" rx="8" fill="#ffd166" stroke="#c9a227" stroke-width="2"/>
<rect x="50" y="56" width="26" height="20" rx="3" fill="#dceefb"/>
<rect x="84" y="56" width="26" height="20" rx="3" fill="#dceefb"/>
<rect x="118" y="56" width="26" height="20" rx="3" fill="#dceefb"/>
<rect x="152" y="56" width="20" height="20" rx="3" fill="#dceefb"/>
<circle cx="66" cy="96" r="9" fill="#2d2a4a" class="sc-spin" style="transform-origin:66px 96px"/>
<circle cx="154" cy="96" r="9" fill="#2d2a4a" class="sc-spin" style="transform-origin:154px 96px"/>
<circle cx="66" cy="96" r="3" fill="#8a86a8"/><circle cx="154" cy="96" r="3" fill="#8a86a8"/>
<g class="sc-float"><path d="M18 60 Q18 34 40 34 Q40 60 40 60 Z" fill="#ff6b9d"/><path d="M30 34 L30 100" stroke="#7c5cbf" stroke-width="2"/></g>`,

market: `
<rect x="0" y="0" width="220" height="130" fill="#fff8ec"/>
<circle cx="188" cy="22" r="11" fill="#ffd166" class="sc-pulse"/>
<path d="M0 106 L220 106 L220 130 L0 130 Z" fill="#d9c3a5"/>
<path d="M30 44 L190 44 L190 52 L30 52 Z" fill="#e26d5c"/>
<path d="M30 52 l16 12 16 -12 16 12 16 -12 16 12 16 -12 16 12 16 -12 16 12 16 -12" fill="none" stroke="#e26d5c" stroke-width="5"/>
<rect x="46" y="76" width="128" height="30" fill="#c9a227"/>
<g class="sc-float"><circle cx="70" cy="70" r="8" fill="#e63946"/><path d="M70 62 q2 -5 6 -5" stroke="#4e9f3d" stroke-width="2" fill="none"/></g>
<g class="sc-float" style="animation-delay:.5s"><circle cx="94" cy="70" r="8" fill="#ff9f68"/></g>
<g class="sc-float" style="animation-delay:1s"><circle cx="118" cy="70" r="8" fill="#ffd166"/></g>
<g class="sc-float" style="animation-delay:1.5s"><ellipse cx="144" cy="70" rx="9" ry="7" fill="#8fd694"/></g>
<g class="sc-tw"><path d="M40 30 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ffd166"/></g>`,

puppy: `
<rect x="0" y="0" width="220" height="130" fill="#f3f0ff"/>
<circle cx="32" cy="26" r="11" fill="#ffd166" class="sc-pulse"/>
<path d="M0 102 Q60 94 120 102 Q180 110 220 100 L220 130 L0 130 Z" fill="#8fd694"/>
<g transform="translate(104 40)">
  <g class="sc-wag" style="transform-origin:34px 44px"><path d="M34 44 q16 -6 18 -20" stroke="#c9a227" stroke-width="6" fill="none" stroke-linecap="round"/></g>
  <ellipse cx="14" cy="48" rx="30" ry="20" fill="#e8c48b" stroke="#b5762c" stroke-width="2"/>
  <circle cx="-16" cy="26" r="20" fill="#f0d6a8" stroke="#b5762c" stroke-width="2"/>
  <ellipse cx="-32" cy="20" rx="7" ry="13" fill="#c9a227" class="sc-sway" style="transform-origin:-32px 10px"/>
  <ellipse cx="0" cy="20" rx="7" ry="13" fill="#c9a227" class="sc-sway" style="transform-origin:0px 10px;animation-delay:.3s"/>
  <circle cx="-22" cy="24" r="2.6" fill="#2d2a4a" class="sc-blink"/>
  <circle cx="-10" cy="24" r="2.6" fill="#2d2a4a" class="sc-blink"/>
  <ellipse cx="-16" cy="33" rx="4" ry="3" fill="#2d2a4a"/>
  <path d="M-16 36 q-5 5 -9 1 M-16 36 q5 5 9 1" stroke="#b5762c" stroke-width="1.6" fill="none"/>
  <path d="M-2 66 l0 6 M18 66 l0 6 M32 62 l0 8" stroke="#b5762c" stroke-width="4" stroke-linecap="round"/>
</g>
<g class="sc-float" style="animation-delay:.8s"><path d="M60 46 q-9 -9 -1 -14 q5 -3 8 2 q3 -5 8 -2 q8 5 -1 14 l-7 6 z" fill="#ff6b9d"/></g>`,

present: `
<rect x="0" y="0" width="220" height="130" fill="#f6f0ff"/>
<g class="sc-tw"><path d="M30 26 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:.8s"><path d="M188 34 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ff6b9d"/></g>
<g class="sc-tw" style="animation-delay:1.6s"><path d="M172 18 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#4d96ff"/></g>
<path d="M0 106 L220 106 L220 130 L0 130 Z" fill="#e0dcf0"/>
<g class="sc-bob">
  <rect x="72" y="58" width="76" height="48" rx="3" fill="#ff6b9d" stroke="#c2185b" stroke-width="2"/>
  <rect x="66" y="46" width="88" height="14" rx="3" fill="#ff8fb3" stroke="#c2185b" stroke-width="2"/>
  <path d="M110 46 L110 106" stroke="#ffd166" stroke-width="7"/>
  <path d="M104 46 q-16 -6 -16 -16 q0 -9 10 -6 q10 4 12 22" fill="#ffd166" stroke="#c9a227" stroke-width="1.6"/>
  <path d="M116 46 q16 -6 16 -16 q0 -9 -10 -6 q-10 4 -12 22" fill="#ffd166" stroke="#c9a227" stroke-width="1.6"/>
</g>`,

books: `
<rect x="0" y="0" width="220" height="130" fill="#f4f6ff"/>
<path d="M0 104 L220 104 L220 130 L0 130 Z" fill="#c9a227"/>
<g class="sc-float">
  <path d="M50 50 L106 44 L106 92 L50 98 Z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M114 44 L170 50 L170 98 L114 92 Z" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M106 44 Q110 42 114 44 L114 92 Q110 90 106 92 Z" fill="#fff8e7" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M60 60 L96 56 M60 70 L96 66 M124 56 L160 60 M124 66 L160 70" stroke="#fff" stroke-width="2"/>
</g>
<g class="sc-float" style="animation-delay:.7s"><path d="M28 62 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" fill="#ffd166"/></g>
<g class="sc-flutter" style="animation-delay:.3s"><path d="M186 56 q-8 -8 -14 -2 q6 6 14 2 z M186 56 q8 -8 14 -2 q-6 6 -14 2 z" fill="#c39bff"/></g>`,

marbles: `
<rect x="0" y="0" width="220" height="130" fill="#fff4f8"/>
<circle cx="32" cy="24" r="11" fill="#ffd166" class="sc-pulse"/>
<path d="M0 100 L220 100 L220 130 L0 130 Z" fill="#c9c4dd"/>
<g class="sc-roll"><circle cx="40" cy="92" r="9" fill="#ff6b9d"/><circle cx="37" cy="89" r="3" fill="#fff" opacity=".7"/></g>
<g class="sc-roll" style="animation-delay:1s"><circle cx="40" cy="92" r="7" fill="#4d96ff"/><circle cx="38" cy="90" r="2.4" fill="#fff" opacity=".7"/></g>
<circle cx="150" cy="92" r="9" fill="#2ec4b6"/><circle cx="147" cy="89" r="3" fill="#fff" opacity=".7"/>
<circle cx="172" cy="92" r="8" fill="#ffd166"/><circle cx="170" cy="89" r="2.6" fill="#fff" opacity=".7"/>
<circle cx="188" cy="94" r="7" fill="#c39bff"/>
<path d="M96 58 q0 -18 18 -18 q18 0 18 18 l0 34 q-18 6 -36 0 z" fill="#dceefb" stroke="#7c5cbf" stroke-width="2"/>
<circle cx="108" cy="76" r="6" fill="#ff9f68"/><circle cx="122" cy="80" r="6" fill="#8fd694"/><circle cx="114" cy="66" r="6" fill="#ff6b9d"/>`,

mountain: `
<rect x="0" y="0" width="220" height="130" fill="#dfeeff"/>
<circle cx="184" cy="24" r="12" fill="#ffd166" class="sc-pulse"/>
<path d="M0 106 L60 40 L104 106 Z" fill="#8a86a8"/>
<path d="M60 40 L46 60 Q60 52 74 60 Z" fill="#fff"/>
<path d="M84 106 L146 30 L208 106 Z" fill="#7c7898"/>
<path d="M146 30 L128 56 Q146 46 164 56 Z" fill="#fff"/>
<path d="M0 106 Q60 98 120 106 Q180 114 220 104 L220 130 L0 130 Z" fill="#8fd694"/>
<g class="sc-float"><ellipse cx="36" cy="30" rx="15" ry="8" fill="#fff"/><ellipse cx="48" cy="26" rx="10" ry="7" fill="#fff"/></g>
<g class="sc-glide"><path d="M20 46 q8 -6 16 0 q-8 -2 -16 0 z" fill="#2d2a4a"/></g>
<g class="sc-glide" style="animation-delay:1.4s"><path d="M20 58 q6 -5 12 0 q-6 -2 -12 0 z" fill="#2d2a4a"/></g>`
};

// Which scene belongs to which story (by story id).
const STORY_ART = {
  1:"treasure", 2:"lighthouse", 3:"mountain", 4:"boat", 5:"kite", 6:"camp", 7:"garden",
  8:"garden", 9:"camp", 10:"boat", 11:"marbles", 12:"camp", 13:"boat", 14:"owl", 15:"treasure",
  16:"boat", 17:"mountain",
  18:"umbrella", 19:"market", 20:"books", 21:"puppy", 22:"garden", 23:"bus", 24:"hearts",
  25:"market", 26:"books", 27:"market", 28:"market", 29:"hearts", 30:"boat", 31:"kite",
  32:"present", 33:"puppy", 34:"hearts",
  35:"laundry", 36:"kitchen", 37:"kitchen", 38:"leaves", 39:"house", 40:"house", 41:"garden",
  42:"house", 43:"house", 44:"house", 45:"puppy", 46:"kitchen", 47:"house", 48:"house",
  49:"house", 50:"present"
};
