// BrightSprouts Academy — Geology category (LESSONS[20]): basic earth science for grade-schoolers.
// Rocks & minerals, the rock cycle, inside the Earth, and fossils & gems — each with a diagram.
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';

  LESSONS[20] = {
    rocks: {
      title: "Rocks & Minerals", emoji: "🪨",
      intro: "The ground beneath your feet is made of rock — and every rock has a story. Let's meet the three kinds and learn how to tell them apart.",
      learn: [
        "Rocks are made of natural materials called minerals.",
        "There are three main types of rock, grouped by HOW they form: igneous, sedimentary and metamorphic.",
        "Igneous rock forms when hot melted rock cools and hardens — like granite and basalt.",
        "Sedimentary rock forms from layers of sand, mud and shells pressed together over time — like sandstone and limestone. Fossils hide here!",
        "Metamorphic rock forms when heat and pressure change an existing rock — like marble (from limestone). A mineral's hardness is rated 1–10 on the Mohs scale, from soft talc to hard diamond."
      ],
      activity: "🪨 Rock Hunt: Collect 5 rocks from outside. Are they smooth or rough? Do they have layers, sparkly crystals, or holes? Sort them and guess which type each might be!",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<g><rect x="26" y="26" width="84" height="66" rx="10" fill="#9a94a0"/><g fill="#6a6478"><circle cx="46" cy="46" r="4"/><circle cx="70" cy="40" r="3"/><circle cx="88" cy="58" r="4"/><circle cx="54" cy="72" r="3"/><circle cx="80" cy="76" r="4"/></g></g>'
        + '<g><rect x="128" y="26" width="84" height="66" rx="10" fill="#d9b46a"/><g stroke="#b58f4a" stroke-width="3"><line x1="128" y1="44" x2="212" y2="44"/><line x1="128" y1="58" x2="212" y2="58"/><line x1="128" y1="72" x2="212" y2="72"/></g></g>'
        + '<g><rect x="230" y="26" width="84" height="66" rx="10" fill="#8a7fa8"/><g stroke="#b9aede" stroke-width="4" fill="none"><path d="M230 46 q42 -12 84 0"/><path d="M230 60 q42 12 84 0"/><path d="M230 76 q42 -10 84 0"/></g></g>'
        + '<g ' + LB + ' text-anchor="middle">'
        + '<text x="68" y="112">Igneous</text><text x="68" y="128" font-size="10" fill="#6a668c">cooled magma</text>'
        + '<text x="170" y="112">Sedimentary</text><text x="170" y="128" font-size="10" fill="#6a668c">pressed layers</text>'
        + '<text x="272" y="112">Metamorphic</text><text x="272" y="128" font-size="10" fill="#6a668c">heat &amp; pressure</text>'
        + '</g></svg>',
      questions: [
        { q: "Rocks are made of natural materials called ____.", a: "Minerals" },
        { q: "Name the three main types of rock.", a: "Igneous, sedimentary, and metamorphic" },
        { q: "Which rock forms when melted rock cools and hardens?", a: "Igneous" },
        { q: "Which rock forms from layers pressed together over time?", a: "Sedimentary" },
        { q: "Which rock forms when heat and pressure change another rock?", a: "Metamorphic" },
        { q: "In which rock type are fossils usually found?", a: "Sedimentary" },
        { q: "Granite and basalt are examples of ____ rock.", a: "Igneous" },
        { q: "Marble forms when heat and pressure change ____.", a: "Limestone" },
        { q: "The scale that measures a mineral's hardness is the ____ scale.", a: "Mohs" },
        { q: "What is the hardest mineral (a 10 on the scale)?", a: "Diamond" },
        { q: "Hot melted rock underground is called ____; above ground it is lava.", a: "Magma" },
        { q: "Sandstone and limestone are examples of ____ rock.", a: "Sedimentary" }
      ]
    },
    cycle: {
      title: "The Rock Cycle", emoji: "🔁",
      intro: "Here's a secret: rocks are never finished! Over millions of years, any rock can slowly turn into another kind. That journey is the rock cycle.",
      learn: [
        "Rocks change — very slowly — from one type to another in a never-ending loop called the rock cycle.",
        "Melting turns rock into magma; when it cools, it becomes igneous rock.",
        "Weathering and erosion break rocks into tiny bits called sediment, which pile up and press into sedimentary rock.",
        "Heat and pressure deep underground squeeze rocks into metamorphic rock; enough heat melts them back into magma.",
        "The rock cycle is powered by Earth's inner heat and by the Sun, wind and water on the surface."
      ],
      activity: "🔁 Crayon Rock Cycle (with an adult): Shave old crayons (sediment), press them (sedimentary), warm them gently (metamorphic), then melt and cool them (igneous) — the rock cycle in colour!",
      diagram: '<svg viewBox="0 0 340 210"><rect width="340" height="210" rx="14" fill="#fdf6ef"/>'
        + '<defs><marker id="rc" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#8a86a8"/></marker></defs>'
        + '<g fill="none" stroke="#8a86a8" stroke-width="2.5" marker-end="url(#rc)">'
        + '<path d="M196 60 Q266 74 250 116"/><path d="M226 156 Q170 198 114 156"/><path d="M90 116 Q74 74 144 60"/></g>'
        + '<g><circle cx="170" cy="46" r="26" fill="#9a94a0"/><circle cx="250" cy="140" r="26" fill="#d9b46a"/><circle cx="90" cy="140" r="26" fill="#8a7fa8"/><circle cx="170" cy="104" r="17" fill="#ff8a3d"/></g>'
        + '<g font-family="Fredoka, system-ui, sans-serif" text-anchor="middle" fill="#fff" font-size="11">'
        + '<text x="170" y="50">Igneous</text><text x="250" y="134">Sediment-<tspan x="250" dy="12">ary</tspan></text><text x="90" y="134">Meta-<tspan x="90" dy="12">morphic</tspan></text><text x="170" y="108" font-size="9">Magma</text></g>'
        + '<g font-family="Fredoka, system-ui, sans-serif" font-size="10" fill="#6a668c" text-anchor="middle">'
        + '<text x="300" y="98">weathers</text><text x="46" y="98">melts</text><text x="170" y="202">heat &amp; pressure</text></g></svg>',
      questions: [
        { q: "The never-ending way rocks change from one type to another is the ____.", a: "Rock cycle" },
        { q: "When rock melts, it becomes ____.", a: "Magma" },
        { q: "When magma cools and hardens, it becomes ____ rock.", a: "Igneous" },
        { q: "Tiny broken bits of rock are called ____.", a: "Sediment" },
        { q: "Breaking rock into tiny pieces is called weathering and ____.", a: "Erosion" },
        { q: "Layers of sediment pressed together form ____ rock.", a: "Sedimentary" },
        { q: "Heat and pressure deep underground make ____ rock.", a: "Metamorphic" },
        { q: "If a rock gets hot enough, it melts back into ____.", a: "Magma" },
        { q: "Does the rock cycle happen quickly or very slowly?", a: "Very slowly, over long times" },
        { q: "Which surface forces break rocks apart?", a: "Wind, water, and ice" },
        { q: "The rock cycle is powered by Earth's inner heat and the ____.", a: "Sun" },
        { q: "Can a metamorphic rock become a sedimentary rock?", a: "Yes — in the rock cycle any type can become another" }
      ]
    },
    earth: {
      title: "Inside the Earth", emoji: "🌋",
      intro: "What's under your feet, all the way down? Let's slice the Earth open like a giant peach and meet its layers — plus the volcanoes and earthquakes they cause.",
      learn: [
        "Earth is made of layers: the thin crust we live on, the hot thick mantle below, and the metal core at the center.",
        "The crust is cracked into giant pieces called tectonic plates that move very slowly — only a few centimeters a year.",
        "When plates push, pull or slide past each other, they can cause earthquakes — sudden shaking of the ground.",
        "Volcanoes are openings where magma, ash and gases erupt from below; many form where plates meet.",
        "The very center (the inner core) is solid metal and incredibly hot — thousands of degrees!"
      ],
      activity: "🌋 Baking-Soda Volcano (with an adult): Build a mound around a small cup, add baking soda, then pour in vinegar with red colouring. The 'eruption' shows how gas pushes material up and out!",
      diagram: '<svg viewBox="0 0 340 200"><rect width="340" height="200" rx="14" fill="#f4f8ff"/>'
        + '<circle cx="140" cy="100" r="84" fill="#7fae5a"/><circle cx="140" cy="100" r="78" fill="#ff9f68"/><circle cx="140" cy="100" r="42" fill="#e2453b"/><circle cx="140" cy="100" r="18" fill="#ffd166"/>'
        + '<g stroke="#9a94b8" stroke-width="1.2">'
        + '<line x1="140" y1="18" x2="250" y2="24"/><line x1="196" y1="58" x2="256" y2="60"/><line x1="176" y1="100" x2="256" y2="112"/><line x1="150" y1="108" x2="250" y2="150"/></g>'
        + '<g ' + LB + '>'
        + '<text x="254" y="28">Crust</text><text x="260" y="64">Mantle</text><text x="260" y="116">Outer core</text><text x="254" y="154">Inner core</text>'
        + '</g></svg>',
      questions: [
        { q: "Name Earth's three main layers, from outside in.", a: "Crust, mantle, and core" },
        { q: "Which layer do we live on?", a: "The crust" },
        { q: "The hot, thick layer below the crust is the ____.", a: "Mantle" },
        { q: "The metal center of the Earth is the ____.", a: "Core" },
        { q: "The giant moving pieces of the crust are called tectonic ____.", a: "Plates" },
        { q: "Sudden shaking of the ground when plates move is an ____.", a: "Earthquake" },
        { q: "An opening where magma and ash erupt is a ____.", a: "Volcano" },
        { q: "About how fast do tectonic plates move?", a: "Very slowly — a few centimeters a year" },
        { q: "Is Earth's inner core hot or cold?", a: "Extremely hot (thousands of degrees)" },
        { q: "Melted rock that erupts from a volcano is called ____.", a: "Lava" },
        { q: "Many volcanoes and earthquakes happen where plates ____.", a: "Meet (push, pull or slide)" },
        { q: "Which is thinnest: the crust, the mantle, or the core?", a: "The crust" }
      ]
    },
    fossils: {
      title: "Fossils & Gems", emoji: "💎",
      intro: "Rocks can hide treasures: the footprints of dinosaurs, and sparkling gems! Let's dig into fossils and crystals.",
      learn: [
        "A fossil is the preserved remains or trace of a living thing from long ago — like bones, shells, footprints or leaves.",
        "Most fossils form in sedimentary rock: a plant or animal is buried in mud or sand that slowly hardens around it over thousands of years.",
        "Scientists who study fossils are called palaeontologists; fossils are clues about life in the past, including dinosaurs.",
        "Minerals can grow into beautiful crystals with flat sides and sharp edges, like quartz.",
        "Gemstones are rare, pretty minerals cut and polished for jewellery — like diamonds, rubies and emeralds."
      ],
      activity: "🦴 Make a Fossil: Press a shell or a leaf into playdough or clay to leave an imprint, then let it dry. That's how a 'trace fossil' captures a shape without the object itself!",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<g><rect x="24" y="30" width="150" height="98" rx="8" fill="#cdb48a"/><g stroke="#a98f62" stroke-width="2.5"><line x1="24" y1="54" x2="174" y2="54"/><line x1="24" y1="80" x2="174" y2="80"/><line x1="24" y1="104" x2="174" y2="104"/></g>'
        + '<g fill="#6a5238"><ellipse cx="98" cy="94" rx="15" ry="10"/><ellipse cx="86" cy="74" rx="5" ry="10"/><ellipse cx="100" cy="70" rx="5" ry="11"/><ellipse cx="114" cy="76" rx="5" ry="10"/></g></g>'
        + '<g><path d="M256 44 L288 44 L306 66 L272 118 L238 66 Z" fill="#a6e3ff" stroke="#4d96ff" stroke-width="2"/><g stroke="#4d96ff" stroke-width="1.5" opacity=".7"><line x1="256" y1="44" x2="272" y2="66"/><line x1="288" y1="44" x2="272" y2="66"/><line x1="238" y1="66" x2="306" y2="66"/><line x1="272" y1="66" x2="272" y2="118"/></g></g>'
        + '<g ' + LB + ' text-anchor="middle">'
        + '<text x="99" y="146">Fossil in rock layers</text><text x="272" y="146">Crystal / gem</text>'
        + '</g></svg>',
      questions: [
        { q: "The preserved remains or trace of an ancient living thing is a ____.", a: "Fossil" },
        { q: "In which rock type do most fossils form?", a: "Sedimentary" },
        { q: "A scientist who studies fossils is a ____.", a: "Palaeontologist" },
        { q: "Name something that can become a fossil.", a: "Bones, shells, footprints, or leaves" },
        { q: "Fossils tell us about life in the ____.", a: "Past (long ago)" },
        { q: "About how long does it take a fossil to form?", a: "Thousands (or millions) of years" },
        { q: "A mineral with flat sides and sharp edges is a ____.", a: "Crystal" },
        { q: "Name a common crystal mineral.", a: "Quartz" },
        { q: "Rare, pretty minerals cut for jewellery are ____.", a: "Gemstones (gems)" },
        { q: "Name a famous gemstone.", a: "Diamond, ruby, or emerald" },
        { q: "A dinosaur footprint left in rock is a kind of ____ fossil.", a: "Trace" },
        { q: "Fossils help us learn about which famous extinct animals?", a: "Dinosaurs (and others)" }
      ]
    }
  };
})();
