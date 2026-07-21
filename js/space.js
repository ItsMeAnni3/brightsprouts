// BrightSprouts Academy — Space Exploration category (LESSONS[24]) for grade-schoolers.
// Solar system → the Moon → rockets → astronauts → robot explorers.
// Facts kept to the stable, textbook kind (no moon counts or distances that change with new discoveries).
(function () {
  if (typeof LESSONS === "undefined") return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // ---- solar system: the Sun and the eight planets, in order (not to scale) ----
  var planets = [
    { n: "Mercury", x: 62, r: 5, c: "#9a9a9a" }, { n: "Venus", x: 90, r: 7.5, c: "#e0b062" },
    { n: "Earth", x: 120, r: 8, c: "#4d96ff" }, { n: "Mars", x: 150, r: 6, c: "#c1502e" },
    { n: "Jupiter", x: 194, r: 17, c: "#d9a06b" }, { n: "Saturn", x: 244, r: 13, c: "#e3c98d" },
    { n: "Uranus", x: 288, r: 10, c: "#9fdbe0" }, { n: "Neptune", x: 320, r: 9.5, c: "#4a6fd4" }
  ];
  var solarDia = '<svg viewBox="0 0 340 196"><rect width="340" height="196" rx="14" fill="#141a35"/>';
  for (var st = 0; st < 26; st++) {
    solarDia += '<circle cx="' + ((st * 61) % 336 + 3) + '" cy="' + ((st * 43) % 60 + 4) + '" r="1" fill="#fff" opacity=".55"/>';
  }
  solarDia += '<circle cx="4" cy="88" r="36" fill="#ffb703"/><circle cx="4" cy="88" r="27" fill="#ffd166"/>'
    + '<text x="20" y="34" ' + FA + ' font-size="12" fill="#ffd166">Sun</text>';
  for (var pi = 0; pi < planets.length; pi++) {
    var p = planets[pi];
    if (p.n === "Saturn") {
      solarDia += '<ellipse cx="' + p.x + '" cy="88" rx="' + (p.r + 9) + '" ry="4" fill="none" stroke="#e8dcae" stroke-width="2.5"/>';
    }
    solarDia += '<circle cx="' + p.x + '" cy="88" r="' + p.r + '" fill="' + p.c + '"/>'
      + '<text x="' + p.x + '" y="' + (pi % 2 ? 130 : 118) + '" text-anchor="middle" ' + FA + ' font-size="8.5" fill="#dfe6ff">' + p.n + '</text>';
  }
  solarDia += '<text x="170" y="160" text-anchor="middle" ' + FA + ' font-size="12" fill="#fff">The eight planets, in order from the Sun</text>'
    + '<text x="170" y="180" text-anchor="middle" ' + FA + ' font-size="10" fill="#9aa5cc">(sizes and distances are not to scale)</text></svg>';

  // ---- the Moon's phases ----
  // Lit part is drawn as an outer semicircle plus a terminator ellipse whose width sets the phase.
  function moonPhase(cx, cy, r, i) {
    var dark = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#3a3a55" stroke="#7a7a9c" stroke-width="1"/>';
    if (i === 0) return dark;                                                     // new moon
    if (i === 4) return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#f5f3e8"/>';  // full
    var right = i < 4;                       // waxing half of the cycle is lit on the right
    var quarter = (i === 2 || i === 6);
    var crescent = (i === 1 || i === 7);
    var rx = quarter ? 0 : r * 0.55;
    var outer = right ? 1 : 0;
    // crescent: terminator bows toward the lit limb; gibbous: it bows away
    var term = crescent ? (right ? 0 : 1) : (right ? 1 : 0);
    var d = 'M ' + cx + ' ' + (cy - r) + ' A ' + r + ' ' + r + ' 0 0 ' + outer + ' ' + cx + ' ' + (cy + r);
    d += quarter ? ' Z' : ' A ' + rx.toFixed(1) + ' ' + r + ' 0 0 ' + term + ' ' + cx + ' ' + (cy - r) + ' Z';
    return dark + '<path d="' + d + '" fill="#f5f3e8"/>';
  }
  var phaseNames = ["new", "crescent", "half", "gibbous", "full", "gibbous", "half", "crescent"];
  var moonDia = '<svg viewBox="0 0 340 132"><rect width="340" height="132" rx="14" fill="#141a35"/>';
  for (var mi = 0; mi < 8; mi++) {
    var mx = 26 + mi * 41;
    moonDia += moonPhase(mx, 50, 16, mi)
      + '<text x="' + mx + '" y="' + (mi % 2 ? 94 : 82) + '" text-anchor="middle" ' + FA + ' font-size="9" fill="#dfe6ff">' + phaseNames[mi] + '</text>';
  }
  moonDia += '<text x="170" y="118" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#fff">The Moon\'s phases — about a month from new to new</text></svg>';

  // ---- rocket: thrust pushes down, rocket goes up ----
  var rocketDia = '<svg viewBox="0 0 340 214"><rect width="340" height="214" rx="14" fill="#eef3ff"/>'
    + '<path d="M96 26 C112 44 118 70 118 96 L74 96 C74 70 80 44 96 26 Z" fill="#f4f6ff" stroke="#5d3fa0" stroke-width="2.5"/>'
    + '<rect x="74" y="96" width="44" height="46" fill="#f4f6ff" stroke="#5d3fa0" stroke-width="2.5"/>'
    + '<circle cx="96" cy="64" r="9" fill="#9fdbe0" stroke="#5d3fa0" stroke-width="2"/>'
    + '<path d="M74 116 L56 152 L74 142 Z" fill="#e2453b" stroke="#a83228" stroke-width="2"/>'
    + '<path d="M118 116 L136 152 L118 142 Z" fill="#e2453b" stroke="#a83228" stroke-width="2"/>'
    + '<path d="M78 142 L114 142 L108 156 L84 156 Z" fill="#c9c4dd" stroke="#5d3fa0" stroke-width="2"/>'
    + '<path d="M86 156 C86 176 96 194 96 194 C96 194 106 176 106 156 Z" fill="#ff9f68"/>'
    + '<path d="M90 158 C90 172 96 184 96 184 C96 184 102 172 102 158 Z" fill="#ffd166"/>'
    + '<defs><marker id="rkU" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#3d9950"/></marker>'
    + '<marker id="rkD" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#e2453b"/></marker></defs>'
    + '<line x1="176" y1="96" x2="176" y2="40" stroke="#3d9950" stroke-width="4" marker-end="url(#rkU)"/>'
    + '<text x="196" y="60" ' + FA + ' font-size="12.5" fill="#2f7d3d">the rocket</text>'
    + '<text x="196" y="76" ' + FA + ' font-size="12.5" fill="#2f7d3d">pushes UP</text>'
    + '<line x1="176" y1="130" x2="176" y2="186" stroke="#e2453b" stroke-width="4" marker-end="url(#rkD)"/>'
    + '<text x="196" y="150" ' + FA + ' font-size="12.5" fill="#c0392b">hot gas</text>'
    + '<text x="196" y="166" ' + FA + ' font-size="12.5" fill="#c0392b">pushes DOWN</text>'
    + '<text x="170" y="206" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">Every action has an equal and opposite reaction</text></svg>';

  // ---- astronaut in a spacesuit, labeled ----
  var astroDia = '<svg viewBox="0 0 340 212"><rect width="340" height="212" rx="14" fill="#141a35"/>'
    + '<rect x="52" y="58" width="26" height="46" rx="8" fill="#c9c4dd" stroke="#8a86a8" stroke-width="2"/>'
    + '<circle cx="112" cy="56" r="26" fill="#eef2ff" stroke="#8a86a8" stroke-width="2.5"/>'
    + '<path d="M96 46 a18 16 0 0 1 34 4 a18 14 0 0 1 -34 -4 z" fill="#3a4a7a"/>'
    + '<rect x="88" y="82" width="48" height="62" rx="14" fill="#f4f6ff" stroke="#8a86a8" stroke-width="2.5"/>'
    + '<rect x="100" y="96" width="24" height="18" rx="4" fill="#9fdbe0" stroke="#8a86a8" stroke-width="1.5"/>'
    + '<rect x="66" y="88" width="24" height="14" rx="7" fill="#f4f6ff" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="134" y="88" width="26" height="14" rx="7" fill="#f4f6ff" stroke="#8a86a8" stroke-width="2"/>'
    + '<circle cx="164" cy="95" r="9" fill="#e0e4f5" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="92" y="144" width="17" height="40" rx="7" fill="#f4f6ff" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="115" y="144" width="17" height="40" rx="7" fill="#f4f6ff" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="88" y="180" width="23" height="13" rx="5" fill="#c9c4dd" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="113" y="180" width="23" height="13" rx="5" fill="#c9c4dd" stroke="#8a86a8" stroke-width="2"/>'
    + '<g stroke="#7a86b8" stroke-width="1.2">'
    + '<line x1="112" y1="30" x2="196" y2="26"/><line x1="64" y1="70" x2="34" y2="40"/>'
    + '<line x1="173" y1="95" x2="214" y2="104"/><line x1="124" y1="190" x2="188" y2="196"/></g>'
    + '<g ' + FA + ' font-size="11.5" fill="#dfe6ff">'
    + '<text x="200" y="30">helmet &amp; visor</text><text x="10" y="34">oxygen pack</text>'
    + '<text x="218" y="108">glove</text><text x="192" y="200">boots</text></g></svg>';

  // ---- robot explorers: a space telescope and a Mars rover ----
  var exploreDia = '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#141a35"/>'
    + '<g><rect x="46" y="34" width="52" height="34" rx="6" fill="#e0e4f5" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="40" y="38" width="8" height="26" rx="3" fill="#3a4a7a" stroke="#8a86a8" stroke-width="1.5"/>'
    + '<rect x="20" y="44" width="20" height="14" rx="2" fill="#4d96ff" stroke="#8a86a8" stroke-width="1.5"/>'
    + '<rect x="104" y="44" width="20" height="14" rx="2" fill="#4d96ff" stroke="#8a86a8" stroke-width="1.5"/>'
    + '<text x="72" y="90" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#dfe6ff">space telescope</text></g>'
    + '<g><rect x="212" y="42" width="56" height="26" rx="5" fill="#e0e4f5" stroke="#8a86a8" stroke-width="2"/>'
    + '<rect x="236" y="20" width="5" height="22" fill="#8a86a8"/><rect x="228" y="12" width="22" height="11" rx="3" fill="#c9c4dd" stroke="#8a86a8" stroke-width="1.5"/>'
    + '<circle cx="234" cy="17" r="2.5" fill="#3a4a7a"/><circle cx="244" cy="17" r="2.5" fill="#3a4a7a"/>'
    + '<g fill="#3a3a55" stroke="#8a86a8" stroke-width="1.5"><circle cx="220" cy="76" r="8"/><circle cx="240" cy="76" r="8"/><circle cx="260" cy="76" r="8"/></g>'
    + '<text x="240" y="102" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#dfe6ff">Mars rover</text></g>'
    + '<path d="M150 120 q40 -14 92 0 t 92 0" fill="none" stroke="#8a5a4a" stroke-width="2" opacity=".6"/>'
    + '<text x="170" y="150" text-anchor="middle" ' + FA + ' font-size="12" fill="#fff">Robots explore where people cannot go yet</text></svg>';

  LESSONS[24] = {
    solar: {
      title: "The Solar System", emoji: "☀️",
      intro: "Our address in space! The Sun sits in the middle, and everything else — planets, moons and asteroids — travels around it.",
      learn: [
        "The Sun is a star, and it sits at the centre of our solar system. Everything else orbits (travels around) it.",
        "There are eight planets. In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
        "The four closest planets are small and rocky. The four farthest are giants, made mostly of gas and ice.",
        "Jupiter is the biggest planet and Mercury is the smallest. Venus is the hottest — even hotter than Mercury, because its thick clouds trap the heat.",
        "A belt of asteroids orbits between Mars and Jupiter. Earth takes 365 days to travel once around the Sun — that is one year."
      ],
      activity: "🌞 Planet Parade: Write the eight planets on cards and line them up in order. Learn the sentence 'My Very Educated Mother Just Served Us Noodles' — the first letters give you the planets!",
      diagram: solarDia,
      questions: [
        { q: "What is at the centre of our solar system?", a: "The Sun" },
        { q: "Is the Sun a planet or a star?", a: "A star" },
        { q: "How many planets are in our solar system?", a: "Eight" },
        { q: "Which planet is closest to the Sun?", a: "Mercury" },
        { q: "Which planet is the biggest?", a: "Jupiter" },
        { q: "Which planet is the hottest?", a: "Venus" },
        { q: "Which planet is farthest from the Sun?", a: "Neptune" },
        { q: "Which planet is famous for its bright rings?", a: "Saturn" },
        { q: "Going outwards, which planet comes right after Earth?", a: "Mars" },
        { q: "What orbits between Mars and Jupiter?", a: "The asteroid belt" },
        { q: "Is Pluto one of the eight planets?", a: "No — it is a dwarf planet" },
        { q: "How long does Earth take to orbit the Sun once?", a: "365 days (one year)" }
      ]
    },
    moon: {
      title: "The Moon", emoji: "🌙",
      intro: "The Moon is our closest neighbour in space — and the only other world people have ever walked on.",
      learn: [
        "The Moon orbits Earth, taking about a month to travel all the way round.",
        "The Moon does not make its own light. It shines because sunlight bounces off it.",
        "As the Moon orbits, we see different amounts of it lit up. These shapes are called phases: new, crescent, half, gibbous and full.",
        "The same side of the Moon always faces us, so we never see its far side from Earth.",
        "The Moon has no air and no wind, so the astronauts' footprints are still there. In 1969, Apollo 11 landed and Neil Armstrong became the first person to walk on the Moon."
      ],
      activity: "🌙 Moon Diary: Look at the Moon each night for two weeks and draw its shape in a notebook. Watch it grow and shrink through the phases!",
      diagram: moonDia,
      questions: [
        { q: "What does the Moon orbit?", a: "Earth" },
        { q: "About how long does the Moon take to orbit Earth?", a: "About a month" },
        { q: "Does the Moon make its own light?", a: "No — it reflects sunlight" },
        { q: "What do we call the different shapes of the Moon?", a: "Phases" },
        { q: "What is it called when we cannot see the lit Moon at all?", a: "A new moon" },
        { q: "What is it called when the whole face is lit up?", a: "A full moon" },
        { q: "Does the same side of the Moon always face Earth?", a: "Yes" },
        { q: "Is there air to breathe on the Moon?", a: "No" },
        { q: "Why do footprints stay on the Moon?", a: "There is no wind or air to blow them away" },
        { q: "Which mission first landed people on the Moon?", a: "Apollo 11" },
        { q: "In what year did people first walk on the Moon?", a: "1969" },
        { q: "Who was the first person to walk on the Moon?", a: "Neil Armstrong" }
      ]
    },
    rockets: {
      title: "Rockets & How We Fly", emoji: "🚀",
      intro: "How do you leave a whole planet? You need a rocket — and one very clever push.",
      learn: [
        "To reach space, a rocket must travel extremely fast to escape Earth's gravity.",
        "A rocket burns fuel and pushes hot gas out of the bottom. The gas pushes down, so the rocket pushes up — every action has an equal and opposite reaction.",
        "There is no air in space, so a rocket must carry its own oxygen to burn its fuel.",
        "Big rockets are built in stages. When a stage runs out of fuel it drops away, making the rocket lighter.",
        "Satellites are machines we place in orbit around Earth. They help with weather forecasts, television, maps and phone calls."
      ],
      activity: "🎈 Balloon Rocket: Thread a string through a straw and tie it across the room. Tape a blown-up balloon to the straw and let go — the air rushes out one way and the balloon shoots the other, exactly like a rocket!",
      diagram: rocketDia,
      questions: [
        { q: "What must a rocket escape to reach space?", a: "Earth's gravity" },
        { q: "Which way does a rocket push its hot gas?", a: "Down, out of the bottom" },
        { q: "If the gas goes down, which way does the rocket go?", a: "Up" },
        { q: "Every action has an equal and opposite ____.", a: "Reaction" },
        { q: "Why must a rocket carry its own oxygen?", a: "There is no air in space" },
        { q: "What are the parts of a rocket called that drop away?", a: "Stages" },
        { q: "Why do stages drop away?", a: "To make the rocket lighter" },
        { q: "What do we call a machine placed in orbit around Earth?", a: "A satellite" },
        { q: "Name one thing satellites help us with.", a: "Weather, television, maps, or phones" },
        { q: "What does a rocket burn to make hot gas?", a: "Fuel" },
        { q: "Is there air in space?", a: "No" },
        { q: "Must a rocket go fast or slow to reach orbit?", a: "Very fast" }
      ]
    },
    astronauts: {
      title: "Astronauts in Space", emoji: "👨‍🚀",
      intro: "What is it actually like up there? You float, you sleep strapped to a wall, and your morning coffee comes in a pouch.",
      learn: [
        "An astronaut is a person trained to travel and work in space.",
        "Space has no air, so astronauts wear spacesuits that supply oxygen, keep the pressure right, and protect them from heat and cold.",
        "On a space station everything floats. The station and everyone inside are falling around the Earth together, which makes it all feel weightless.",
        "The International Space Station orbits about 400 kilometres above Earth, and astronauts from many countries live and work on board.",
        "Floating is fun, but it weakens bones and muscles — so astronauts exercise every day. They sleep in sleeping bags strapped down so they don't drift away!"
      ],
      activity: "👨‍🚀 Space Menu: Plan a meal an astronaut could eat with no crumbs and no spills. Why would floating crumbs be a real problem on a space station?",
      diagram: astroDia,
      questions: [
        { q: "What is an astronaut?", a: "A person trained to travel and work in space" },
        { q: "Why do astronauts wear spacesuits?", a: "For oxygen, the right pressure, and protection from heat and cold" },
        { q: "What does a spacesuit supply for the astronaut to breathe?", a: "Oxygen" },
        { q: "Why does everything float on a space station?", a: "It is all falling around Earth together, so it feels weightless" },
        { q: "What is the name of the space station where astronauts live?", a: "The International Space Station (ISS)" },
        { q: "About how high above Earth does the ISS orbit?", a: "About 400 kilometres" },
        { q: "Why must astronauts exercise every day?", a: "To keep their bones and muscles strong" },
        { q: "How do astronauts sleep in space?", a: "In sleeping bags strapped down so they don't float away" },
        { q: "Is there air to breathe in space?", a: "No" },
        { q: "Why would crumbs cause trouble in space?", a: "They would float around and get into eyes and equipment" },
        { q: "Do astronauts come from only one country?", a: "No — from many countries" },
        { q: "What do we call the floating feeling in orbit?", a: "Weightlessness" }
      ]
    },
    explore: {
      title: "Exploring Further", emoji: "🔭",
      intro: "People have only walked as far as the Moon — but our robots and telescopes have gone much, much further.",
      learn: [
        "A telescope collects light so we can see things that are very far away.",
        "Space telescopes orbit above the air, which gives them a far clearer view than telescopes on the ground.",
        "Robot rovers drive across Mars, taking photographs, testing rocks and hunting for signs of water and life.",
        "Space probes are robot explorers sent to fly past or land on other worlds. Some have now travelled beyond all the planets.",
        "Sunlight takes about 8 minutes to reach Earth. Stars are so far away that their light has travelled for years before it reaches your eyes."
      ],
      activity: "🔭 Star Gazing: On a clear night, go outside with an adult and let your eyes adjust for ten minutes. Count how many stars you can see, and look for craters on the Moon!",
      diagram: exploreDia,
      questions: [
        { q: "What does a telescope collect?", a: "Light" },
        { q: "Why do we put telescopes in space?", a: "To see more clearly, above the air" },
        { q: "What do we call a robot that drives around on Mars?", a: "A rover" },
        { q: "Name one job a Mars rover does.", a: "Takes photos, tests rocks, or looks for water and signs of life" },
        { q: "What is a space probe?", a: "A robot explorer sent to other worlds" },
        { q: "About how long does sunlight take to reach Earth?", a: "About 8 minutes" },
        { q: "Why does starlight take years to reach us?", a: "The stars are extremely far away" },
        { q: "Which planet do rovers explore?", a: "Mars" },
        { q: "Do people ride inside the Mars rovers?", a: "No — they are robots controlled from Earth" },
        { q: "What are scientists hoping to find on Mars?", a: "Signs of water and life" },
        { q: "Which sees more clearly: a telescope in space or one on the ground?", a: "One in space" },
        { q: "What do we call the study of space and stars?", a: "Astronomy" }
      ]
    }
  };
})();
