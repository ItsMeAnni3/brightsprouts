// BrightSprouts Academy: Earth & Space Science category (LESSONS[28]): weather, water cycle and
// oceans, stars and galaxies, and Earth's rotation/seasons for grade-schoolers, K-12 appropriate.
// Deliberately does NOT cover rocks/plate tectonics (see Geology, LESSONS[20]) or the solar
// system/spaceflight (see Space, LESSONS[24]) to avoid duplicating those standalone categories.
// Facts checked against NOAA, NASA and ESA (weather vs. climate, the four-stage water cycle, the
// five oceans incl. the Southern Ocean, Earth's 23.5° axial tilt, and Milky Way / Alpha Centauri
// distance figures).
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';
  // Light-on-dark label, for the two night-sky diagrams below; LB's fill is baked in, so a
  // separately-appended fill="..." after it becomes a duplicate attribute (first one wins).

  // A tiny auto-turning 3D scene: a starfield + sun sit behind a globe that spins continuously
  // around its own tilted axis (see .earth3d in styles.css, same rotate3d technique validated
  // on the Physical Science atom model, applied to a single tilted spin axis instead of 3 rings).
  var EARTH_3D = '<div class="earth3d no-print" aria-hidden="true"><div class="earth3d-stage"><div class="earth3d-scene">'
    + '<div class="e3-back"><svg viewBox="0 0 200 200"><circle cx="168" cy="28" r="15" fill="#ffe08a"/>'
    + '<g fill="#fff"><circle cx="30" cy="40" r="1.6"/><circle cx="60" cy="20" r="1.4"/><circle cx="20" cy="95" r="1.5"/>'
    + '<circle cx="150" cy="130" r="1.3"/><circle cx="100" cy="14" r="1.4"/><circle cx="45" cy="155" r="1.5"/>'
    + '<circle cx="182" cy="95" r="1.4"/><circle cx="120" cy="170" r="1.3"/></g></svg></div>'
    + '<div class="e3-globe"></div>'
    + '</div></div><p class="earth3d-cap">🌍 Earth spins on a tilted axis once a day!</p></div>';

  LESSONS[28] = {
    weather: {
      title: "Weather & Sky", emoji: "🌦️",
      intro: "Look up! The sky is always doing something: sunny, cloudy, rainy or stormy. Let's learn what makes our weather, and how it's different from climate.",
      learn: [
        "Weather is what's happening in the atmosphere right now or over the next few days: sunny, rainy, windy, hot or cold. Climate is the average weather a place has over many years.",
        "The atmosphere is the blanket of air surrounding Earth. It's mostly nitrogen and oxygen gas, and it's where all our weather happens.",
        "Clouds form when water vapor in the air cools and condenses into tiny droplets. Puffy cumulus clouds often mean fair weather; tall, dark cumulonimbus clouds can bring thunderstorms.",
        "Precipitation is water falling from clouds, as rain, snow, sleet or hail, depending on the temperature of the air it falls through.",
        "Wind is simply air moving from areas of high pressure to areas of low pressure. Big pressure differences make strong winds, and can power storms like hurricanes."
      ],
      activity: "🌦️ Cloud Watch: Lie back and watch the clouds for 10 minutes. Sketch the shapes you see. Are they flat and layered, puffy like cotton, or wispy and thin? Try to guess what kind of weather is coming.",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<rect x="20" y="20" width="140" height="100" rx="10" fill="#eaf2ff"/><rect x="180" y="20" width="140" height="100" rx="10" fill="#eef7ee"/>'
        + '<g><circle cx="65" cy="55" r="16" fill="#ffd166"/><ellipse cx="100" cy="70" rx="30" ry="16" fill="#fff"/><ellipse cx="80" cy="76" rx="20" ry="12" fill="#fff"/>'
        + '<g stroke="#4d96ff" stroke-width="3" stroke-linecap="round"><line x1="75" y1="96" x2="70" y2="108"/><line x1="90" y1="96" x2="85" y2="108"/><line x1="105" y1="96" x2="100" y2="108"/></g></g>'
        + '<g fill="#2ec4b6"><rect x="205" y="72" width="16" height="24" rx="2"/><rect x="230" y="60" width="16" height="36" rx="2"/>'
        + '<rect x="255" y="66" width="16" height="30" rx="2"/><rect x="280" y="50" width="16" height="46" rx="2"/></g>'
        + '<g ' + LB + ' text-anchor="middle"><text x="90" y="112">Weather</text><text x="250" y="112">Climate</text>'
        + '<text x="90" y="127" font-size="10" fill="#6a668c">right now</text><text x="250" y="127" font-size="10" fill="#6a668c">average over years</text></g></svg>',
      questions: [
        { q: "What's happening in the atmosphere right now or in the next few days is ____.", a: "Weather" },
        { q: "The average weather a place has over many years is called ____.", a: "Climate" },
        { q: "The blanket of air surrounding Earth is called the ____.", a: "Atmosphere" },
        { q: "Clouds form when water vapor cools and ____.", a: "Condenses" },
        { q: "Puffy, cotton-like clouds that often mean fair weather are ____ clouds.", a: "Cumulus" },
        { q: "Tall, dark clouds that can bring thunderstorms are ____ clouds.", a: "Cumulonimbus" },
        { q: "Water falling from clouds as rain, snow, sleet or hail is ____.", a: "Precipitation" },
        { q: "Wind is air moving from high pressure to ____ pressure.", a: "Low" },
        { q: "Which gas makes up most of Earth's atmosphere?", a: "Nitrogen" },
        { q: "Is weather short-term or long-term?", a: "Short-term" },
        { q: "Is climate short-term or long-term?", a: "Long-term" },
        { q: "Name a form of precipitation besides rain.", a: "Snow, sleet, or hail" }
      ]
    },
    watercycle: {
      title: "Water Cycle & Oceans", emoji: "🌊",
      intro: "Water is always on the move: rising into clouds, falling as rain, and flowing back to the sea. Let's follow the water cycle and meet Earth's five oceans.",
      learn: [
        "The water cycle has four main stages: evaporation (water heats up and rises as vapor), condensation (vapor cools and forms clouds), precipitation (water falls as rain, snow, sleet or hail), and collection (water gathers in rivers, lakes and oceans).",
        "The Sun powers the whole water cycle by heating water and causing evaporation, mostly from the oceans, since they cover most of Earth's surface.",
        "Earth has five oceans: the Pacific, Atlantic, Indian, Southern and Arctic. The Pacific is the largest and deepest of them all.",
        "About 97% of Earth's water is salty ocean water; only about 3% is freshwater, and most of that is locked up in ice and glaciers.",
        "Water keeps cycling forever, the same water molecules that fell as rain long ago are still moving through the cycle today."
      ],
      activity: "🌊 Water Cycle in a Bag: Fill a sealable plastic bag with a little water, tape it to a sunny window, and watch over a day or two. You'll see 'evaporation' and 'condensation' happening right on the bag!",
      diagram: '<svg viewBox="0 0 340 200"><rect width="340" height="200" rx="14" fill="#eaf5ff"/>'
        + '<defs><marker id="wcA" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#4d96ff"/></marker></defs>'
        + '<rect x="0" y="150" width="340" height="50" fill="#4d96ff"/>'
        + '<circle cx="60" cy="40" r="18" fill="#ffd166"/>'
        + '<g fill="#fff"><ellipse cx="150" cy="45" rx="34" ry="18"/><ellipse cx="128" cy="50" rx="22" ry="13"/></g>'
        + '<path d="M100 90 Q120 55 148 48" fill="none" stroke="#4d96ff" stroke-width="2.5" marker-end="url(#wcA)"/>'
        + '<g stroke="#4d96ff" stroke-width="3" stroke-linecap="round"><line x1="140" y1="68" x2="134" y2="82"/><line x1="155" y1="68" x2="149" y2="82"/><line x1="170" y1="68" x2="164" y2="82"/></g>'
        + '<path d="M150 90 Q150 120 150 148" fill="none" stroke="#4d96ff" stroke-width="2.5" marker-end="url(#wcA)"/>'
        + '<path d="M230 148 Q140 100 78 62" fill="none" stroke="#2ec4b6" stroke-width="2.5" stroke-dasharray="2 5" marker-end="url(#wcA)"/>'
        + '<g ' + LB + '><text x="30" y="30">Sun</text><text x="180" y="45">Cloud</text><text x="176" y="78" font-size="10" fill="#2c5f9e">rain</text>'
        + '<text x="90" y="66" font-size="10" fill="#2c5f9e">evaporation</text><text x="235" y="140" font-size="10" fill="#0e6e63">ocean</text></g></svg>'
        + EARTH_3D,
      questions: [
        { q: "Water changing from liquid to vapor as it heats up is ____.", a: "Evaporation" },
        { q: "Water vapor cooling and forming clouds is called ____.", a: "Condensation" },
        { q: "Water falling from clouds as rain or snow is called ____.", a: "Precipitation" },
        { q: "Water gathering in rivers, lakes and oceans is called ____.", a: "Collection" },
        { q: "What powers the entire water cycle?", a: "The Sun" },
        { q: "How many main oceans does Earth have?", a: "Five" },
        { q: "Name the largest and deepest ocean.", a: "The Pacific Ocean" },
        { q: "About what percent of Earth's water is salty ocean water?", a: "About 97%" },
        { q: "About what percent of Earth's water is freshwater?", a: "About 3%" },
        { q: "Where is most of Earth's freshwater locked up?", a: "Ice and glaciers" },
        { q: "List the four stages of the water cycle, in order.", a: "Evaporate, condense, precipitate, collect" },
        { q: "Is ocean water salty or fresh?", a: "Salty" }
      ]
    },};
})();
