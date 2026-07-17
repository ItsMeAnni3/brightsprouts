// BrightSprouts Academy — Books category: the free Read Online classics library.
// Little animated doodles that sit between the sections and down the margins.
const BOOK_DOODLES = {
openbook: `
<g class="sc-float">
  <path d="M8 40 L44 32 L44 68 L8 74 Z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M76 40 L44 32 L44 68 L76 74 Z" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M14 46 L38 41 M14 54 L38 49 M14 62 L38 57" stroke="#fff" stroke-width="2"/>
  <path d="M70 46 L50 41 M70 54 L50 49 M70 62 L50 57" stroke="#fff" stroke-width="2"/>
</g>
<g class="sc-tw"><path d="M64 18 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:1s"><path d="M18 20 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 z" fill="#ff9f68"/></g>`,

dragon: `
<g class="sc-bob">
  <ellipse cx="44" cy="54" rx="22" ry="14" fill="#6bcb77" stroke="#3f8f4a" stroke-width="2"/>
  <circle cx="24" cy="40" r="12" fill="#8fd694" stroke="#3f8f4a" stroke-width="2"/>
  <circle cx="20" cy="37" r="2.4" fill="#2d2a4a"/>
  <path d="M30 34 l4 -8 4 8 z" fill="#3f8f4a"/>
  <path d="M46 40 q10 -18 22 -10 q-6 12 -18 16 z" fill="#2ec4b6" stroke="#3f8f4a" stroke-width="2" class="sc-sway" style="transform-origin:50px 44px"/>
  <path d="M66 56 q12 4 10 16" stroke="#3f8f4a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M32 66 l0 8 M50 68 l0 8" stroke="#3f8f4a" stroke-width="4" stroke-linecap="round"/>
</g>
<g class="sc-flicker"><path d="M12 40 q-8 -2 -10 -8 q8 2 10 4 z" fill="#ff9f68"/></g>`,

magnifier: `
<g class="sc-sway" style="transform-origin:44px 44px">
  <circle cx="40" cy="38" r="20" fill="#dceefb" stroke="#7c5cbf" stroke-width="3"/>
  <circle cx="40" cy="38" r="20" fill="none" stroke="#fff" stroke-width="1.5" opacity=".8"/>
  <path d="M54 54 L72 74" stroke="#8b5a2b" stroke-width="7" stroke-linecap="round"/>
  <path d="M32 30 q6 -6 14 -2" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
</g>
<g class="sc-tw"><circle cx="16" cy="66" r="3" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:.8s"><circle cx="70" cy="22" r="2.4" fill="#ff6b9d"/></g>`,

rocket: `
<g class="sc-float">
  <path d="M44 12 q12 14 12 34 l-24 0 q0 -20 12 -34 z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
  <circle cx="44" cy="34" r="6" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M32 46 l-10 12 10 -2 z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M56 46 l10 12 -10 -2 z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M36 46 l16 0 0 6 -16 0 z" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
</g>
<g class="sc-flicker"><path d="M38 58 q6 16 6 22 q0 -6 6 -22 z" fill="#ff9f68"/></g>
<g class="sc-tw"><circle cx="16" cy="24" r="2.4" fill="#fff8d6"/></g>
<g class="sc-tw" style="animation-delay:.7s"><circle cx="70" cy="16" r="2" fill="#fff8d6"/></g>
<g class="sc-tw" style="animation-delay:1.4s"><circle cx="74" cy="46" r="2.4" fill="#fff8d6"/></g>`,

stack: `
<g class="sc-bob">
  <rect x="14" y="60" width="60" height="12" rx="2" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="18" y="48" width="52" height="12" rx="2" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="12" y="36" width="58" height="12" rx="2" fill="#2ec4b6" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="22" y="24" width="44" height="12" rx="2" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
</g>
<g class="sc-flutter"><path d="M62 16 q-7 -7 -12 -2 q5 5 12 2 z M62 16 q7 -7 12 -2 q-5 5 -12 2 z" fill="#c39bff"/></g>`,

lamp: `
<path d="M30 74 L58 74" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round"/>
<path d="M44 74 L44 46" stroke="#8b5a2b" stroke-width="4"/>
<path d="M26 46 L62 46 L54 24 L34 24 Z" fill="#ffd166" stroke="#c9a227" stroke-width="2"/>
<g class="sc-glow"><path d="M44 46 L24 76 L64 76 Z" fill="#ffe680" opacity=".55"/></g>
<g class="sc-tw"><circle cx="18" cy="34" r="2.4" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:.9s"><circle cx="70" cy="38" r="2" fill="#ffd166"/></g>`,

owl: `
<g class="sc-bob">
  <ellipse cx="44" cy="48" rx="20" ry="22" fill="#e8c48b" stroke="#8b5a2b" stroke-width="2"/>
  <circle cx="36" cy="40" r="7" fill="#fff" stroke="#8b5a2b" stroke-width="1.6"/>
  <circle cx="52" cy="40" r="7" fill="#fff" stroke="#8b5a2b" stroke-width="1.6"/>
  <circle cx="36" cy="40" r="3" fill="#2d2a4a" class="sc-blink"/>
  <circle cx="52" cy="40" r="3" fill="#2d2a4a" class="sc-blink"/>
  <path d="M44 46 l-3 5 6 0 z" fill="#ff9f68"/>
  <path d="M28 30 l3 -9 6 6 z M60 30 l-3 -9 -6 6 z" fill="#e8c48b" stroke="#8b5a2b" stroke-width="1.6"/>
  <path d="M30 62 L58 62 L58 70 L30 70 Z" fill="#4d96ff" stroke="#7c5cbf" stroke-width="1.6"/>
</g>
<path d="M16 74 L72 74" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round"/>`,

quill: `
<g class="sc-sway" style="transform-origin:56px 70px">
  <path d="M56 70 q-6 -30 14 -46 q6 22 -8 42 z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M62 34 q4 10 0 24" stroke="#c9c4dd" stroke-width="1.4" fill="none"/>
  <path d="M56 70 l-4 6" stroke="#2d2a4a" stroke-width="3" stroke-linecap="round"/>
</g>
<path d="M14 76 q14 -6 28 0" stroke="#4d96ff" stroke-width="2.4" fill="none" class="sc-wave"/>
<g class="sc-tw"><circle cx="22" cy="34" r="2.4" fill="#ffd166"/></g>`
};

LESSONS[15] = {
readnow: {
  title: "Read Online — Free Classic Books", emoji: "📖",
  intro: "Complete books your child can read right here, right now, free. Every one is out of copyright, so it belongs to everybody — including you.",
  learn: [
    "These are the whole books, not summaries. Every word the author wrote.",
    "The reader remembers where your child stopped, so they can come back tomorrow and carry on.",
    "Use A− and A+ to change the text size. Bigger text genuinely helps newer and dyslexic readers.",
    "Any chapter can be printed if your child prefers paper — a lot of children do.",
    "Some of these are over a hundred years old, so the language can be old-fashioned. That's a feature: reading slightly-hard writing is how vocabulary grows."
  ],
  activity: "🌙 Bedtime Chapter: Read one chapter aloud together each night. A chapter a night finishes The Secret Garden in under a month.",
  readOnline: true
}
};
