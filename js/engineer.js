// BrightSprouts Academy — "Build It!" little-engineers builder (Create category).
// Kids assemble a machine one part at a time; each part teaches what it does; a finale
// animation plays when it's complete. Self-contained inline SVG (viewBox 0 0 240 180).

const ENGINEER_PROJECTS = [
  {
    key: "house", name: "House", emoji: "🏠", doneMsg: "Every part has a job — now it's a cozy home!",
    sky: '<rect width="240" height="180" fill="#cdeafd"/><rect y="150" width="240" height="30" fill="#7fc25a"/><circle cx="206" cy="34" r="16" fill="#ffd166"/>',
    parts: [
      { name: "foundation", fact: "Every strong building starts with a solid foundation.",
        svg: '<rect x="58" y="144" width="124" height="12" rx="2" fill="#8a8272"/>' },
      { name: "walls", fact: "Walls hold the house up and keep it cozy inside.",
        svg: '<rect x="66" y="90" width="108" height="54" fill="#f2d59a" stroke="#d9b46a" stroke-width="2"/>' },
      { name: "roof", fact: "A slanted roof lets rain and snow slide right off.",
        svg: '<path d="M58 92 L120 52 L182 92 Z" fill="#c0392b"/>' },
      { name: "door & windows", fact: "Doors let people in; windows let the sunshine in.",
        svg: '<rect x="108" y="110" width="24" height="34" rx="2" fill="#8a5a2a"/><circle cx="127" cy="128" r="1.6" fill="#ffd166"/><rect x="76" y="102" width="20" height="20" fill="#a6e3ff" stroke="#fff" stroke-width="2"/><rect x="144" y="102" width="20" height="20" fill="#a6e3ff" stroke="#fff" stroke-width="2"/>' },
      { name: "chimney", fact: "A chimney lets smoke escape from the fireplace.",
        svg: '<rect x="150" y="64" width="14" height="26" fill="#8a5a2a"/>' }
    ],
    finaleCls: null,
    outExtra: '<g class="eng-smoke"><circle cx="157" cy="58" r="5" fill="#e6e6ea"/><circle cx="160" cy="46" r="6" fill="#dedee4"/><circle cx="156" cy="34" r="7" fill="#d6d6dc"/></g>'
  },
  {
    key: "car", name: "Car", emoji: "🚗", doneMsg: "Vroom vroom — off it goes!",
    sky: '<rect width="240" height="180" fill="#dff0ff"/><circle cx="205" cy="32" r="15" fill="#ffd166"/><rect y="132" width="240" height="48" fill="#7a8290"/><g stroke="#ffd166" stroke-width="3" stroke-dasharray="14 12"><line x1="0" y1="157" x2="240" y2="157"/></g>',
    parts: [
      { name: "body", fact: "The body (or chassis) is the car's strong frame.",
        svg: '<path d="M60 106 L84 82 L150 82 L176 106 Z" fill="#4d96ff"/><rect x="52" y="104" width="132" height="22" rx="8" fill="#4d96ff"/>' },
      { name: "wheels", fact: "Round wheels roll smoothly so the car can move.",
        svg: '<circle cx="84" cy="128" r="13" fill="#2d2a4a"/><circle cx="154" cy="128" r="13" fill="#2d2a4a"/><circle cx="84" cy="128" r="5" fill="#ccc"/><circle cx="154" cy="128" r="5" fill="#ccc"/>' },
      { name: "windows", fact: "Windows let the driver see the road all around.",
        svg: '<path d="M88 86 L104 86 L104 102 L76 102 Z" fill="#bfe4ff"/><path d="M110 86 L146 86 L158 102 L110 102 Z" fill="#bfe4ff"/>' },
      { name: "lights", fact: "Headlights help you see — and be seen — at night.",
        svg: '<circle cx="176" cy="110" r="4" fill="#ffe08a"/><circle cx="54" cy="110" r="4" fill="#e2453b"/>' }
    ],
    finaleCls: "eng-drive"
  },
  {
    key: "ship", name: "Ship", emoji: "⛵", doneMsg: "It floats and sails across the sea!",
    sky: '<rect width="240" height="180" fill="#cdeafd"/><circle cx="42" cy="34" r="14" fill="#ffd166"/><rect y="122" width="240" height="58" fill="#3a86c8"/><g stroke="#fff" stroke-width="2" fill="none" opacity=".5"><path d="M10 134 q10 -5 20 0 q10 5 20 0"/><path d="M182 142 q10 -5 20 0 q10 5 20 0"/></g>',
    parts: [
      { name: "hull", fact: "A hollow hull traps air, so the heavy ship still floats!",
        svg: '<path d="M74 108 L166 108 L150 134 L90 134 Z" fill="#8a5a2a"/><rect x="74" y="104" width="92" height="6" fill="#6a4a2a"/>' },
      { name: "deck", fact: "The deck is the flat floor on top of the ship.",
        svg: '<rect x="98" y="88" width="44" height="18" rx="2" fill="#c99a5a"/>' },
      { name: "mast & sail", fact: "Sails catch the wind to push the ship along.",
        svg: '<rect x="118" y="44" width="4" height="46" fill="#6a4a2a"/><path d="M122 48 q28 6 28 30 l-28 0 z" fill="#fff"/><path d="M118 48 q-24 6 -24 28 l24 0 z" fill="#f2ead9"/>' },
      { name: "flag", fact: "A flag flies proudly at the very top!",
        svg: '<path d="M122 44 l14 5 -14 5 z" fill="#ff6b9d"/>' }
    ],
    finaleCls: "eng-bob"
  },
  {
    key: "rocket", name: "Rocket", emoji: "🚀", doneMsg: "3… 2… 1… blast off!",
    sky: '<rect width="240" height="180" fill="#1e2450"/><g fill="#fff"><circle cx="30" cy="30" r="1.6"/><circle cx="200" cy="40" r="1.5"/><circle cx="60" cy="64" r="1"/><circle cx="180" cy="86" r="1.2"/><circle cx="214" cy="120" r="1.5"/><circle cx="40" cy="120" r="1.2"/></g><rect y="160" width="240" height="20" fill="#5a5468"/>',
    parts: [
      { name: "body", fact: "A tall tube holds the fuel that powers the rocket.",
        svg: '<rect x="104" y="58" width="32" height="82" rx="8" fill="#e9edf5"/>' },
      { name: "nose cone", fact: "A pointy nose cone slices through the air.",
        svg: '<path d="M104 60 Q120 24 136 60 Z" fill="#e2453b"/>' },
      { name: "fins", fact: "Fins keep the rocket flying straight and steady.",
        svg: '<path d="M104 118 L86 142 L104 138 Z" fill="#e2453b"/><path d="M136 118 L154 142 L136 138 Z" fill="#e2453b"/>' },
      { name: "window", fact: "A round window lets the astronauts look out!",
        svg: '<circle cx="120" cy="84" r="9" fill="#4d96ff" stroke="#fff" stroke-width="2"/>' }
    ],
    finaleCls: "eng-launch",
    inExtra: '<g class="eng-flame"><path d="M110 140 q10 28 20 0 q-4 18 -10 22 q-6 -4 -10 -22 z" fill="#ff9f68"/><path d="M114 140 q6 18 12 0 q-2 12 -6 15 q-4 -3 -6 -15 z" fill="#ffd166"/></g>'
  },
  {
    key: "bridge", name: "Bridge", emoji: "🌉", doneMsg: "Cars can cross the river now!",
    sky: '<rect width="240" height="180" fill="#cdeafd"/><circle cx="206" cy="30" r="14" fill="#ffd166"/><rect y="118" width="240" height="62" fill="#3a86c8"/><rect y="110" width="44" height="12" fill="#7fc25a"/><rect x="196" y="110" width="44" height="12" fill="#7fc25a"/>',
    parts: [
      { name: "towers", fact: "Two strong towers hold the whole bridge up.",
        svg: '<rect x="66" y="40" width="14" height="86" fill="#8f8a9e"/><rect x="160" y="40" width="14" height="86" fill="#8f8a9e"/>' },
      { name: "roadway", fact: "The deck is the road that cars drive across.",
        svg: '<rect x="28" y="102" width="184" height="10" rx="2" fill="#6a6478"/>' },
      { name: "cables", fact: "Cables share the heavy weight so the bridge stays strong.",
        svg: '<path d="M73 44 Q120 96 167 44" stroke="#b0abbf" stroke-width="3" fill="none"/><g stroke="#b0abbf" stroke-width="1.5"><line x1="92" y1="72" x2="92" y2="102"/><line x1="112" y1="86" x2="112" y2="102"/><line x1="128" y1="86" x2="128" y2="102"/><line x1="148" y1="72" x2="148" y2="102"/></g>' }
    ],
    finaleCls: null,
    outExtra: '<g class="eng-drive"><rect x="105" y="90" width="30" height="12" rx="4" fill="#ff6b9d"/><path d="M110 90 q6 -7 20 0 z" fill="#ff8fb3"/><circle cx="112" cy="103" r="4" fill="#2d2a4a"/><circle cx="128" cy="103" r="4" fill="#2d2a4a"/></g>'
  },
  {
    key: "airplane", name: "Airplane", emoji: "✈️", doneMsg: "Up, up and away — it flies!",
    sky: '<rect width="240" height="180" fill="#bfe3ff"/><circle cx="40" cy="34" r="14" fill="#ffd166"/><g fill="#fff" opacity=".85"><ellipse cx="60" cy="52" rx="20" ry="9"/><ellipse cx="46" cy="48" rx="12" ry="7"/><ellipse cx="192" cy="120" rx="22" ry="10"/></g>',
    parts: [
      { name: "body", fact: "The long body carries the people and cargo.",
        svg: '<rect x="66" y="84" width="104" height="20" rx="10" fill="#e9edf5"/><path d="M170 84 q20 4 24 10 q-4 6 -24 10 z" fill="#dfe4ee"/>' },
      { name: "wings", fact: "Wide wings lift the whole plane up into the air!",
        svg: '<path d="M104 96 L86 120 L134 102 Z" fill="#4d96ff"/><path d="M104 92 L86 70 L134 90 Z" fill="#6aa8ff"/>' },
      { name: "tail", fact: "The tail keeps the plane steady and pointing straight.",
        svg: '<path d="M70 84 L56 62 L80 84 Z" fill="#e2453b"/>' },
      { name: "windows", fact: "Round windows let the passengers watch the clouds go by.",
        svg: '<g fill="#bfe4ff"><circle cx="98" cy="94" r="3"/><circle cx="112" cy="94" r="3"/><circle cx="126" cy="94" r="3"/><circle cx="140" cy="94" r="3"/></g>' }
    ],
    finaleCls: "eng-drive"
  },
  {
    key: "castle", name: "Castle", emoji: "🏰", doneMsg: "A mighty castle, fit for a king or queen!",
    sky: '<rect width="240" height="180" fill="#cdeafd"/><rect y="150" width="240" height="30" fill="#7fc25a"/><circle cx="206" cy="32" r="14" fill="#ffd166"/>',
    parts: [
      { name: "walls", fact: "Thick stone walls keep everyone inside safe.",
        svg: '<rect x="62" y="98" width="116" height="52" fill="#9a94a8"/>' },
      { name: "towers", fact: "Tall towers let guards watch for visitors far away.",
        svg: '<rect x="48" y="78" width="26" height="72" fill="#8a84a0"/><rect x="166" y="78" width="26" height="72" fill="#8a84a0"/>' },
      { name: "battlements", fact: "The notched tops let guards peek out and hide.",
        svg: '<g fill="#8a84a0"><rect x="48" y="72" width="7" height="7"/><rect x="58" y="72" width="7" height="7"/><rect x="67" y="72" width="7" height="7"/><rect x="166" y="72" width="7" height="7"/><rect x="176" y="72" width="7" height="7"/><rect x="185" y="72" width="7" height="7"/></g><g fill="#9a94a8"><rect x="62" y="92" width="8" height="7"/><rect x="78" y="92" width="8" height="7"/><rect x="94" y="92" width="8" height="7"/><rect x="110" y="92" width="8" height="7"/><rect x="126" y="92" width="8" height="7"/><rect x="142" y="92" width="8" height="7"/><rect x="158" y="92" width="8" height="7"/></g>' },
      { name: "gate", fact: "A big gate lets friends in — with a flag flying high!",
        svg: '<path d="M108 150 L108 122 Q120 110 132 122 L132 150 Z" fill="#5a4638"/><rect x="84" y="112" width="12" height="16" fill="#2d2a4a"/><rect x="144" y="112" width="12" height="16" fill="#2d2a4a"/>' }
    ],
    finaleCls: null,
    outExtra: '<g><line x1="61" y1="78" x2="61" y2="58" stroke="#6a6478" stroke-width="2"/><path class="eng-wave" d="M61 58 l14 4 -14 4 z" fill="#ff6b9d"/></g><g><line x1="179" y1="78" x2="179" y2="58" stroke="#6a6478" stroke-width="2"/><path class="eng-wave" style="animation-delay:-.3s" d="M179 58 l14 4 -14 4 z" fill="#4d96ff"/></g>'
  },
  {
    key: "robot", name: "Robot", emoji: "🤖", doneMsg: "Beep boop — your robot is alive!",
    sky: '<rect width="240" height="180" fill="#eef2fb"/><rect y="152" width="240" height="28" fill="#d7dbe8"/><g fill="#dfe4ee"><circle cx="40" cy="40" r="10"/><circle cx="200" cy="54" r="8"/></g>',
    parts: [
      { name: "body", fact: "The body holds all the robot's parts together.",
        svg: '<rect x="92" y="82" width="56" height="54" rx="8" fill="#7c5cbf"/><rect x="104" y="98" width="32" height="20" rx="4" fill="#b7a6e0"/>' },
      { name: "head", fact: "The head holds the robot's sensors and its face.",
        svg: '<rect x="100" y="50" width="40" height="30" rx="8" fill="#8a6de0"/><line x1="120" y1="50" x2="120" y2="40" stroke="#8a6de0" stroke-width="3"/><circle cx="120" cy="38" r="4" fill="#ffd166"/>' },
      { name: "arms", fact: "Arms let the robot pick things up and wave hello.",
        svg: '<rect x="74" y="88" width="18" height="10" rx="5" fill="#6a4cb0"/><rect x="148" y="88" width="18" height="10" rx="5" fill="#6a4cb0"/><circle cx="74" cy="93" r="6" fill="#b7a6e0"/><circle cx="166" cy="93" r="6" fill="#b7a6e0"/>' },
      { name: "legs", fact: "Legs (or wheels) let the robot move around.",
        svg: '<rect x="100" y="136" width="12" height="18" rx="4" fill="#6a4cb0"/><rect x="128" y="136" width="12" height="18" rx="4" fill="#6a4cb0"/>' },
      { name: "eyes", fact: "Switch it on — now it can see! Beep boop!",
        svg: '<circle cx="112" cy="64" r="5" fill="#fff"/><circle cx="128" cy="64" r="5" fill="#fff"/><circle cx="112" cy="64" r="2.4" fill="#2d2a4a"/><circle cx="128" cy="64" r="2.4" fill="#2d2a4a"/><path d="M112 74 q8 4 16 0" stroke="#2d2a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>' }
    ],
    finaleCls: "eng-bob"
  }
];

// Add the "Build It!" subject to the Create category (LESSONS[16] is defined in magic-maker.js).
if (typeof LESSONS !== "undefined" && LESSONS[16]) {
  LESSONS[16].engineer = {
    title: "Build It! — Little Engineers", emoji: "🔧",
    intro: "Engineers build the world! Pick a machine and put it together piece by piece — a house, a car, a ship or a rocket. Learn what each part does, then watch your creation come to life!",
    learn: [
      "Engineering means using science and clever ideas to build things that solve problems.",
      "Big builds are put together one part at a time — exactly like you'll do here.",
      "Every part has a job: wheels roll, hollow hulls float, roofs keep off the rain, fins keep rockets straight.",
      "Tap 'Add the next part' to build. When it's finished, watch it move!"
    ],
    activity: "🏗️ Real-World Engineer: Look around your home. Can you spot a foundation, a wheel, a roof and a window? Now draw your OWN invention and label three parts — and what each one does.",
    engineerBuild: true
  };
}
