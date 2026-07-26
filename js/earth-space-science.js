// BrightSprouts Academy — Earth & Space Science category (LESSONS[28]): weather, water cycle and
// oceans, stars and galaxies, and Earth's rotation/seasons for grade-schoolers, K-12 appropriate.
// Deliberately does NOT cover rocks/plate tectonics (see Geology, LESSONS[20]) or the solar
// system/spaceflight (see Space, LESSONS[24]) to avoid duplicating those standalone categories.
// Facts checked against NOAA, NASA and ESA (weather vs. climate, the four-stage water cycle, the
// five oceans incl. the Southern Ocean, Earth's 23.5° axial tilt, and Milky Way / Alpha Centauri
// distance figures).
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';
  // Light-on-dark label, for the two night-sky diagrams below — LB's fill is baked in, so a
  // separately-appended fill="..." after it becomes a duplicate attribute (first one wins).
  var LBW = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#fff"';

  // A tiny auto-turning 3D scene: a starfield + sun sit behind a globe that spins continuously
  // around its own tilted axis (see .earth3d in styles.css — same rotate3d technique validated
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
      intro: "Look up! The sky is always doing something — sunny, cloudy, rainy or stormy. Let's learn what makes our weather, and how it's different from climate.",
      learn: [
        "Weather is what's happening in the atmosphere right now or over the next few days — sunny, rainy, windy, hot or cold. Climate is the average weather a place has over many years.",
        "The atmosphere is the blanket of air surrounding Earth. It's mostly nitrogen and oxygen gas, and it's where all our weather happens.",
        "Clouds form when water vapor in the air cools and condenses into tiny droplets. Puffy cumulus clouds often mean fair weather; tall, dark cumulonimbus clouds can bring thunderstorms.",
        "Precipitation is water falling from clouds — as rain, snow, sleet or hail, depending on the temperature of the air it falls through.",
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
      intro: "Water is always on the move — rising into clouds, falling as rain, and flowing back to the sea. Let's follow the water cycle and meet Earth's five oceans.",
      learn: [
        "The water cycle has four main stages: evaporation (water heats up and rises as vapor), condensation (vapor cools and forms clouds), precipitation (water falls as rain, snow, sleet or hail), and collection (water gathers in rivers, lakes and oceans).",
        "The Sun powers the whole water cycle by heating water and causing evaporation — mostly from the oceans, since they cover most of Earth's surface.",
        "Earth has five oceans: the Pacific, Atlantic, Indian, Southern and Arctic. The Pacific is the largest and deepest of them all.",
        "About 97% of Earth's water is salty ocean water; only about 3% is freshwater, and most of that is locked up in ice and glaciers.",
        "Water keeps cycling forever — the same water molecules that fell as rain long ago are still moving through the cycle today."
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
    },
    stars: {
      title: "Stars & Galaxies", emoji: "✨",
      intro: "On a clear night, the sky fills with thousands of tiny lights. Each one is a star like our Sun, and they're grouped into enormous islands called galaxies.",
      learn: [
        "A star is a giant ball of hot, glowing gas that makes its own light and heat through a process called nuclear fusion. Our Sun is a star — just much closer than the others.",
        "Stars look tiny only because they're incredibly far away. Distances in space are so huge that scientists measure them in light-years — the distance light travels in one year.",
        "The nearest star system to our Sun, Alpha Centauri, is about 4.2 light-years away. That's roughly 25 trillion miles — and it's still our closest neighbor!",
        "A galaxy is a huge collection of stars, gas and dust held together by gravity. Our solar system is inside a galaxy called the Milky Way, home to an estimated 100 to 400 billion stars.",
        "The Milky Way is just one of billions of galaxies in the universe. On a clear, dark night, patterns of stars called constellations — like Orion or the Big Dipper — can help you find your way around the sky."
      ],
      activity: "✨ Star Count: On the next clear night, find a dark spot outside and count how many stars you can see in one small patch of sky (about the size of your fist held at arm's length). Try again another night — does the number change?",
      diagram: '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#0f1730"/>'
        + '<g fill="#fff"><circle cx="30" cy="30" r="1.6"/><circle cx="70" cy="18" r="1.3"/><circle cx="110" cy="40" r="1.5"/><circle cx="150" cy="15" r="1.4"/>'
        + '<circle cx="200" cy="30" r="1.6"/><circle cx="250" cy="18" r="1.3"/><circle cx="290" cy="42" r="1.5"/><circle cx="320" cy="20" r="1.4"/>'
        + '<circle cx="50" cy="55" r="1.3"/><circle cx="180" cy="55" r="1.4"/><circle cx="270" cy="60" r="1.3"/></g>'
        + '<ellipse cx="170" cy="120" rx="150" ry="30" fill="#ffffff" opacity=".14"/><ellipse cx="170" cy="120" rx="90" ry="16" fill="#ffffff" opacity=".18"/>'
        + '<circle cx="170" cy="120" r="10" fill="#ffe08a"/>'
        + '<g ' + LBW + ' text-anchor="middle"><text x="170" y="150">Our Sun, inside the Milky Way galaxy</text></g>'
        + '<g ' + LBW + '><text x="12" y="16" font-size="10">Alpha Centauri: about 4.2 light-years away</text></g></svg>',
      questions: [
        { q: "A giant ball of hot, glowing gas that makes its own light is a ____.", a: "Star" },
        { q: "Stars make light and heat through a process called nuclear ____.", a: "Fusion" },
        { q: "Space distances are measured in ____, the distance light travels in a year.", a: "Light-years" },
        { q: "Name the nearest star system to our Sun.", a: "Alpha Centauri" },
        { q: "About how many light-years away is Alpha Centauri?", a: "About 4.2 light-years" },
        { q: "A huge collection of stars, gas and dust held by gravity is a ____.", a: "Galaxy" },
        { q: "Name the galaxy our solar system is inside.", a: "The Milky Way" },
        { q: "About how many stars does the Milky Way have?", a: "Hundreds of billions" },
        { q: "Is the Milky Way the only galaxy in the universe?", a: "No, there are billions" },
        { q: "A recognizable pattern of stars in the sky is a ____.", a: "Constellation" },
        { q: "Name a well-known constellation.", a: "Orion or the Big Dipper" },
        { q: "Is our Sun a star?", a: "Yes, it is a star" }
      ]
    },
    rotation: {
      title: "Earth's Rotation & Seasons", emoji: "🍂",
      intro: "Earth is never standing still — it's always spinning and racing around the Sun. That non-stop motion gives us day and night, and the four seasons.",
      learn: [
        "Earth spins all the way around on its axis once every 24 hours — that spin is what gives us day and night. The side facing the Sun has day; the side facing away has night.",
        "Earth also travels all the way around the Sun once every year — about 365.25 days. That's why we add a leap day every four years, to keep our calendar in sync.",
        "Earth's axis is tilted about 23.5 degrees. As Earth orbits the Sun, that tilt means different parts of Earth get more or less direct sunlight at different times of year — and that's what causes the seasons, not how close or far Earth is from the Sun.",
        "When the Northern Hemisphere is tilted toward the Sun, it's summer there — and winter in the Southern Hemisphere, which is tilted away at the same time.",
        "The equinoxes (spring and fall) are the two days a year when neither hemisphere is tilted toward or away from the Sun, so day and night are close to equal length almost everywhere."
      ],
      activity: "🍂 Tilt a Flashlight: Shine a flashlight straight down onto a piece of paper, then shine it at an angle from the same distance. See how the light spreads out and looks dimmer at an angle? That's why tilted parts of Earth get less direct — and cooler — sunlight.",
      diagram: '<svg viewBox="0 0 340 190"><rect width="340" height="190" rx="14" fill="#0f1730"/>'
        + '<ellipse cx="170" cy="100" rx="130" ry="55" fill="none" stroke="#4d5b8a" stroke-width="1.5" stroke-dasharray="3 5"/>'
        + '<circle cx="170" cy="100" r="18" fill="#ffd166"/>'
        + '<circle cx="170" cy="47" r="9" fill="#4d96ff"/><circle cx="298" cy="100" r="9" fill="#4d96ff"/><circle cx="170" cy="153" r="9" fill="#4d96ff"/><circle cx="42" cy="100" r="9" fill="#4d96ff"/>'
        + '<g ' + LBW + ' text-anchor="middle" font-size="10">'
        + '<text x="170" y="30">Winter (N. Hemisphere)</text><text x="298" y="122">Spring</text><text x="170" y="178">Summer (N. Hemisphere)</text><text x="42" y="122">Fall</text></g>'
        + '<g ' + LBW + '><text x="170" y="14" text-anchor="middle" font-size="9">Earth\'s tilt (not to scale)</text></g></svg>'
        + EARTH_3D,
      questions: [
        { q: "Earth spinning all the way around once every 24 hours causes ____.", a: "Day and night" },
        { q: "About how many days does Earth take to orbit the Sun once?", a: "About 365 days" },
        { q: "Earth's axis is tilted about how many degrees?", a: "About 23.5 degrees" },
        { q: "What actually causes the seasons: Earth's tilt or its distance from the Sun?", a: "Earth's tilt" },
        { q: "When the Northern Hemisphere tilts toward the Sun, what season is it there?", a: "Summer" },
        { q: "When it's summer in the Northern Hemisphere, what season is it in the south?", a: "Winter" },
        { q: "The extra day added every four years to keep the calendar in sync is a ____ day.", a: "Leap" },
        { q: "The two days a year when day and night are close to equal length are ____.", a: "Equinoxes" },
        { q: "Does Earth's axis stay tilted in the same direction all year?", a: "Yes" },
        { q: "Sunlight hitting Earth at an angle is more spread out and ____ than direct light.", a: "Weaker (dimmer)" },
        { q: "Which side of Earth has night: the side facing the Sun, or facing away?", a: "The side facing away" },
        { q: "About how long does it take Earth to spin around once?", a: "About 24 hours" }
      ]
    }
  };
})();
