// BrightSprouts Academy — Space Course, Grades 1–12 (LESSONS[24].spacecourse).
// Sequenced to the NGSS Earth's Place in the Universe strand as US schools teach it:
//   1-ESS1-1/2  sky patterns, daylight through the year
//   5-ESS1-1/2  the Sun is a star; distance explains brightness · 5-PS2-1 gravity pulls down
//   MS-ESS1-1   Earth–Sun–Moon model: phases, eclipses, seasons
//   MS-ESS1-2/3 solar system model, gravity, and scale
//   HS-ESS1-1   the Sun runs on nuclear fusion
//   HS-ESS1-2   Big Bang and the evidence for it
//   HS-ESS1-3   elements are forged in stars
//   HS-ESS1-4   orbital motion (Kepler and Newton)
//
// FACT NOTES (verified, and phrased to stay true):
//   • Universe ≈ 13.8 billion years (WMAP, refined by Planck).
//   • Exoplanets: "more than 6,000 confirmed" — a floor that only grows.
//   • No moon counts or galaxy counts: those change with every survey.
//   • Four common misconceptions are corrected head-on: phases are NOT Earth's shadow,
//     seasons are NOT about distance, there is no permanently dark side of the Moon,
//     and the Sun does not burn — it fuses.
(function () {
  if (typeof LESSONS === "undefined" || !LESSONS[24]) return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // ---- day and night: half of Earth faces the Sun ----
  var dayDia = '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#141a35"/>'
    + '<circle cx="34" cy="88" r="26" fill="#ffb703"/><circle cx="34" cy="88" r="18" fill="#ffd166"/>'
    + '<text x="34" y="140" text-anchor="middle" ' + FA + ' font-size="11" fill="#ffd166">Sun</text>'
    + '<g stroke="#ffd166" stroke-width="2"><line x1="62" y1="72" x2="150" y2="72"/><line x1="62" y1="88" x2="150" y2="88"/><line x1="62" y1="104" x2="150" y2="104"/></g>'
    + '<defs><clipPath id="lit"><rect x="120" y="20" width="60" height="140"/></clipPath></defs>'
    + '<circle cx="210" cy="88" r="52" fill="#26305c" stroke="#7a86b8" stroke-width="2"/>'
    + '<circle cx="210" cy="88" r="52" fill="#4d96ff" clip-path="url(#lit)"/>'
    + '<text x="182" y="92" text-anchor="middle" ' + FA + ' font-size="11" fill="#0b1436">DAY</text>'
    + '<text x="244" y="92" text-anchor="middle" ' + FA + ' font-size="11" fill="#dfe6ff">NIGHT</text>'
    + '<path d="M210 26 a62 62 0 0 1 44 18" fill="none" stroke="#9fdbe0" stroke-width="2.5"/>'
    + '<path d="M254 44 l-11 -2 l5 10 z" fill="#9fdbe0"/>'
    + '<text x="290" y="34" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#9fdbe0">Earth spins</text>'
    + '<text x="170" y="164" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#fff">One spin = one day. Half of Earth is always lit.</text></svg>';

  // ---- seasons: the tilt, not the distance ----
  var seasonDia = '<svg viewBox="0 0 340 190"><rect width="340" height="190" rx="14" fill="#141a35"/>'
    + '<ellipse cx="170" cy="96" rx="128" ry="52" fill="none" stroke="#4a5480" stroke-width="1.5" stroke-dasharray="5 5"/>'
    + '<circle cx="170" cy="96" r="20" fill="#ffb703"/><circle cx="170" cy="96" r="13" fill="#ffd166"/>'
    + '<g stroke="#e2453b" stroke-width="2">'
    + '<line x1="48" y1="78" x2="60" y2="114"/><line x1="280" y1="78" x2="292" y2="114"/></g>'
    + '<circle cx="54" cy="96" r="17" fill="#4d96ff"/><circle cx="286" cy="96" r="17" fill="#4d96ff"/>'
    + '<g ' + FA + ' font-size="10.5" fill="#dfe6ff" text-anchor="middle">'
    + '<text x="54" y="140">North tilted AWAY</text><text x="54" y="153">winter up north</text>'
    + '<text x="286" y="140">North tilted TOWARD</text><text x="286" y="153">summer up north</text></g>'
    + '<text x="170" y="40" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#ffd166">Earth is tilted 23.5°</text>'
    + '<text x="170" y="176" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#fff">Seasons come from the TILT — not from distance to the Sun</text></svg>';

  // ---- eclipses: who is in the middle ----
  var eclDia = '<svg viewBox="0 0 340 190"><rect width="340" height="190" rx="14" fill="#141a35"/>'
    + '<text x="170" y="22" text-anchor="middle" ' + FA + ' font-size="12" fill="#ffd166">Whoever is in the middle casts the shadow</text>'
    + '<g><circle cx="30" cy="62" r="16" fill="#ffd166"/><circle cx="96" cy="62" r="7" fill="#c9c4dd"/><circle cx="170" cy="62" r="14" fill="#4d96ff"/>'
    + '<line x1="46" y1="62" x2="86" y2="62" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="3 3"/>'
    + '<line x1="103" y1="62" x2="154" y2="62" stroke="#6a6a88" stroke-width="1.5" stroke-dasharray="3 3"/>'
    + '<text x="200" y="58" ' + FA + ' font-size="11" fill="#dfe6ff">SOLAR eclipse</text>'
    + '<text x="200" y="72" ' + FA + ' font-size="10" fill="#9aa5cc">Moon between Sun and Earth</text></g>'
    + '<g><circle cx="30" cy="132" r="16" fill="#ffd166"/><circle cx="100" cy="132" r="14" fill="#4d96ff"/><circle cx="172" cy="132" r="7" fill="#c9c4dd"/>'
    + '<line x1="46" y1="132" x2="84" y2="132" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="3 3"/>'
    + '<line x1="115" y1="132" x2="163" y2="132" stroke="#6a6a88" stroke-width="1.5" stroke-dasharray="3 3"/>'
    + '<text x="200" y="128" ' + FA + ' font-size="11" fill="#dfe6ff">LUNAR eclipse</text>'
    + '<text x="200" y="142" ' + FA + ' font-size="10" fill="#9aa5cc">Earth between Sun and Moon</text></g>'
    + '<text x="170" y="178" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#9aa5cc">Moon phases are NOT eclipses — phases happen every month</text></svg>';

  // ---- how far is far ----
  var scale = [["Earth to the Moon", "1.3 light-seconds"], ["Earth to the Sun", "8 light-minutes = 1 AU"],
               ["Sun to Neptune", "about 4 light-hours"], ["To the nearest star", "4.2 light-years"],
               ["Across the Milky Way", "about 100,000 light-years"]];
  var scaleDia = '<svg viewBox="0 0 340 196"><rect width="340" height="196" rx="14" fill="#141a35"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="12" fill="#ffd166">A light-year is a DISTANCE, not a time</text>';
  for (var s = 0; s < 5; s++) {
    var sy = 38 + s * 29;
    scaleDia += '<rect x="14" y="' + sy + '" width="312" height="24" rx="7" fill="#26305c"/>'
      + '<text x="26" y="' + (sy + 16) + '" ' + FA + ' font-size="11" fill="#dfe6ff">' + scale[s][0] + '</text>'
      + '<text x="314" y="' + (sy + 16) + '" text-anchor="end" ' + FA + ' font-size="10.5" fill="#9fdbe0">' + scale[s][1] + '</text>';
  }
  scaleDia += '<text x="170" y="188" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#9aa5cc">Looking far away means looking back in time</text></svg>';

  // ---- a star's life ----
  var life = [["☁️", "nebula"], ["⭐", "main sequence"], ["🔴", "red giant"], ["💥", "supernova"], ["⚫", "remnant"]];
  var lifeDia = '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#141a35"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="12" fill="#ffd166">The life of a massive star</text>';
  for (var l = 0; l < 5; l++) {
    var lx = 38 + l * 66;
    lifeDia += '<circle cx="' + lx + '" cy="66" r="21" fill="#26305c" stroke="#7a86b8" stroke-width="1.5"/>'
      + '<text x="' + lx + '" y="73" text-anchor="middle" font-size="18">' + life[l][0] + '</text>'
      + '<text x="' + lx + '" y="104" text-anchor="middle" ' + FA + ' font-size="9.5" fill="#dfe6ff">' + life[l][1] + '</text>';
    if (l < 4) lifeDia += '<line x1="' + (lx + 23) + '" y1="66" x2="' + (lx + 42) + '" y2="66" stroke="#7a86b8" stroke-width="2"/>';
  }
  lifeDia += '<text x="170" y="132" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#fff">Stars build the atoms that everything is made of</text>'
    + '<text x="170" y="148" text-anchor="middle" ' + FA + ' font-size="10" fill="#9aa5cc">The calcium in your bones was made inside a star</text></svg>';

  function U(emoji, title, band, intro, learn, activity, questions, diagram) {
    return { emoji: emoji, title: title, band: band, intro: intro, learn: learn,
             activity: activity, questions: questions, diagram: diagram };
  }

  var UNITS = [
    U("🌞", "Patterns in the Sky", "Grade 1",
      "Look up often enough and you'll notice the sky repeats itself. Spotting those patterns is real science.",
      ["The Sun, the Moon and the stars all appear to move across the sky, and they follow patterns you can predict.",
       "The Sun appears to rise in the east and set in the west every single day.",
       "We see the Sun in the daytime. We see the Moon and stars best at night — though the Moon is often visible in daylight too.",
       "Stars look tiny because they are very, very far away.",
       "Scientists learn by observing the same thing many times and writing down what they notice."],
      "🌞 Activity Sheet — Sky Watch: For five days, draw the sky at the same time each evening. Mark where the Sun set and whether you could see the Moon. What repeated?",
      [{ q: "In which direction does the Sun appear to rise?", a: "The east" },
       { q: "In which direction does the Sun appear to set?", a: "The west" },
       { q: "Why do stars look so tiny?", a: "They are very far away" },
       { q: "When can you see the stars best?", a: "At night" },
       { q: "Can the Moon ever be seen in the daytime?", a: "Yes" },
       { q: "What is a pattern?", a: "Something that repeats in a way you can predict" },
       { q: "How do scientists find patterns?", a: "By observing many times and recording what they see" },
       { q: "Name three things you can see in the sky.", a: "The Sun, the Moon and stars" }], null),

    U("🌗", "The Moon Changes Shape", "Grade 2",
      "The Moon looks different tonight than it did last week. Follow it for a month and you'll crack the code.",
      ["The Moon's shape seems to change a little every night, and the whole cycle takes about a month.",
       "The shapes have names: new moon, crescent, half, gibbous and full.",
       "The Moon does not make its own light — it shines because sunlight bounces off it.",
       "The Moon is Earth's closest neighbour in space and it travels around Earth.",
       "The pattern repeats over and over, so once you know it you can predict what comes next."],
      "🌗 Activity Sheet — Moon Diary: Draw the Moon every night for four weeks in a row of boxes. Circle the full moon and count how many nights the cycle took.",
      [{ q: "About how long does the Moon's cycle take?", a: "About a month" },
       { q: "Does the Moon make its own light?", a: "No — it reflects sunlight" },
       { q: "What is it called when we cannot see the lit Moon?", a: "A new moon" },
       { q: "What is it called when the whole face is lit?", a: "A full moon" },
       { q: "What do we call the Moon's different shapes?", a: "Phases" },
       { q: "What does the Moon travel around?", a: "Earth" },
       { q: "What shape comes between new and full?", a: "Crescent, then half, then gibbous" },
       { q: "Does the pattern repeat?", a: "Yes — over and over" }], null),

    U("🕐", "Day, Night & Shadows", "Grade 3",
      "The Sun doesn't actually cross the sky. You do — because you're standing on a spinning planet.",
      ["Earth spins like a top. One complete spin takes about 24 hours and gives us one day and one night.",
       "Half of Earth always faces the Sun and has daytime; the other half faces away and has night.",
       "The Sun only SEEMS to move across the sky. It is Earth turning that makes it look that way.",
       "Shadows change through the day: long in the morning, shortest around midday, long again in the evening.",
       "A shadow always points away from the light, so you can use one to work out where the Sun is."],
      "🕐 Activity Sheet — Shadow Clock: Stand a stick in the ground. Mark the tip of its shadow every hour for a day, then describe how the shadow changed and explain why.",
      [{ q: "How long does Earth take to spin once?", a: "About 24 hours" },
       { q: "What does one spin of Earth give us?", a: "One day and one night" },
       { q: "How much of Earth is lit at any moment?", a: "Half of it" },
       { q: "Does the Sun really move across the sky?", a: "No — Earth is turning" },
       { q: "When is your shadow shortest?", a: "Around midday" },
       { q: "When are shadows longest?", a: "Early morning and evening" },
       { q: "Which way does a shadow point?", a: "Away from the light" },
       { q: "Why is it night on one side of Earth?", a: "That side is facing away from the Sun" }], dayDia),

    U("🍂", "Seasons & Sunlight", "Grade 4",
      "Here's the one nearly everybody gets wrong: summer is not when Earth is closest to the Sun.",
      ["Earth travels all the way around the Sun once a year, taking about 365 days.",
       "Earth is tilted about 23.5°, and that tilt stays pointed the same way as Earth orbits.",
       "Seasons happen because of that tilt. When your half of Earth leans toward the Sun you get summer; when it leans away you get winter.",
       "Seasons are NOT caused by Earth being closer to or further from the Sun. When it is summer in the north it is winter in the south — at the very same distance.",
       "Days are longer in summer and shorter in winter, and the Sun climbs higher in the sky in summer."],
      "🍂 Activity Sheet — Daylight Graph: Look up sunrise and sunset times for the 21st of each month for a year. Graph the hours of daylight and mark the longest and shortest days.",
      [{ q: "How long does Earth take to orbit the Sun?", a: "About 365 days — one year" },
       { q: "How far is Earth tilted?", a: "About 23.5 degrees" },
       { q: "What causes the seasons?", a: "Earth's tilt" },
       { q: "Are seasons caused by distance from the Sun?", a: "No — that is a common mistake" },
       { q: "When your half leans toward the Sun, what season is it?", a: "Summer" },
       { q: "If it is summer in the north, what is it in the south?", a: "Winter" },
       { q: "In which season are days longest?", a: "Summer" },
       { q: "Does the tilt change direction as Earth orbits?", a: "No — it stays pointed the same way" }], seasonDia),

    U("⭐", "The Sun Is a Star", "Grade 5",
      "That blazing thing in the daytime sky is exactly the same kind of object as the tiny points you see at night.",
      ["The Sun is a star — an ordinary, middle-sized one.",
       "It looks enormous and blindingly bright only because it is far closer to us than any other star.",
       "Other stars are so far away that their light takes years to reach us, so they look like faint dots.",
       "Sunlight takes about 8 minutes to travel to Earth, which is roughly 93 million miles (150 million km) away.",
       "Gravity is a pull. On Earth it pulls everything toward the centre, which is why 'down' means toward the ground everywhere on the planet."],
      "⭐ Activity Sheet — Brightness and Distance: Shine a torch from 1, 3 and 6 metres away and record how bright it looks each time. Explain what that shows about the Sun and other stars.",
      [{ q: "What kind of object is the Sun?", a: "A star" },
       { q: "Why does the Sun look so much bigger than other stars?", a: "It is far closer to us" },
       { q: "How long does sunlight take to reach Earth?", a: "About 8 minutes" },
       { q: "About how far away is the Sun?", a: "About 93 million miles (150 million km)" },
       { q: "Why do other stars look like tiny dots?", a: "They are enormously far away" },
       { q: "What direction does Earth's gravity pull?", a: "Toward the centre of Earth — 'down'" },
       { q: "Is the Sun a large or an average star?", a: "An average, middle-sized star" },
       { q: "If you moved a light further away, would it look brighter or dimmer?", a: "Dimmer" }], null),

    U("🪐", "The Solar System", "Grade 6",
      "One star, eight planets, and a lot of smaller things — all held in place by a single force.",
      ["The solar system is the Sun and everything held in orbit around it by gravity.",
       "The eight planets in order are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",
       "The four inner planets are small and rocky. The four outer ones are giants of gas and ice.",
       "The solar system also holds moons, dwarf planets such as Pluto, the asteroid belt between Mars and Jupiter, and comets.",
       "Gravity from the Sun keeps every planet in orbit. More mass means a stronger pull, and greater distance means a weaker one."],
      "🪐 Activity Sheet — Order and Compare: Make a table of the eight planets. For each, record rocky or giant, and one distinguishing feature. Then argue in writing why Pluto is classed as a dwarf planet.",
      [{ q: "What is the solar system?", a: "The Sun and everything orbiting it" },
       { q: "How many planets are there?", a: "Eight" },
       { q: "Name the planets in order from the Sun.", a: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune" },
       { q: "What are the four inner planets made of?", a: "Rock" },
       { q: "What are the four outer planets made of?", a: "Mostly gas and ice" },
       { q: "What is Pluto classed as?", a: "A dwarf planet" },
       { q: "What lies between Mars and Jupiter?", a: "The asteroid belt" },
       { q: "What force keeps planets in orbit?", a: "Gravity" }], null),

    U("🌒", "The Earth–Sun–Moon System", "Grade 7",
      "Three objects, one set of geometry — and it explains phases, eclipses and tides all at once.",
      ["We see phases because the Moon orbits Earth and we see different amounts of its sunlit half.",
       "Phases are NOT Earth's shadow falling on the Moon. That is a lunar eclipse, and it is rare — phases happen every month.",
       "A solar eclipse happens when the Moon passes between the Sun and Earth. A lunar eclipse happens when Earth passes between the Sun and the Moon.",
       "The same side of the Moon always faces us, so the other side is called the far side — not the dark side. It gets just as much sunlight.",
       "The Moon's gravity pulls on Earth's oceans and causes the tides."],
      "🌒 Activity Sheet — Model It: Use a lamp as the Sun, a ball as the Moon and your head as Earth. Walk the ball around you and sketch the phase you see at eight positions.",
      [{ q: "Why does the Moon have phases?", a: "We see different amounts of its sunlit half as it orbits" },
       { q: "Are phases caused by Earth's shadow?", a: "No — that is a lunar eclipse" },
       { q: "What is between the Sun and Earth in a solar eclipse?", a: "The Moon" },
       { q: "What is between the Sun and Moon in a lunar eclipse?", a: "Earth" },
       { q: "Is there a permanently dark side of the Moon?", a: "No — there is a far side, and it gets sunlight" },
       { q: "Why do we always see the same side of the Moon?", a: "It turns once for each orbit of Earth" },
       { q: "What causes Earth's tides?", a: "The Moon's gravity pulling on the oceans" },
       { q: "Which happens more often, phases or eclipses?", a: "Phases — every month" }], eclDia),

    U("📏", "Scale & Distance in Space", "Grade 8",
      "Space is mostly space. Getting a feel for the emptiness is half of understanding astronomy.",
      ["An astronomical unit (AU) is the distance from Earth to the Sun — about 93 million miles (150 million km).",
       "A light-year is a DISTANCE, not a length of time: how far light travels in one year, about 6 trillion miles (9.5 trillion km).",
       "Light is the fastest thing there is, yet it still takes about 8 minutes from the Sun and 4.2 years from the next nearest star, Proxima Centauri.",
       "Because light takes time to arrive, looking far into space means looking back in time.",
       "Scale models help: if the Sun were a basketball, Earth would be a peppercorn about 25 metres away."],
      "📏 Activity Sheet — Toilet-Paper Solar System: Roll out a strip of paper and place the Sun at one end and Neptune at the other. Scale each planet's distance onto the strip. What surprised you?",
      [{ q: "What is an astronomical unit?", a: "The distance from Earth to the Sun" },
       { q: "Is a light-year a time or a distance?", a: "A distance" },
       { q: "What is a light-year?", a: "How far light travels in one year" },
       { q: "How long does light take to reach us from the Sun?", a: "About 8 minutes" },
       { q: "What is the nearest star to the Sun?", a: "Proxima Centauri" },
       { q: "How far away is it?", a: "About 4.2 light-years" },
       { q: "Why is looking far away like looking back in time?", a: "The light we see left long ago" },
       { q: "Is space mostly full or mostly empty?", a: "Mostly empty" }], scaleDia),

    U("☀️", "How Stars Shine", "Grade 9",
      "The Sun is not on fire. What is actually happening inside it is far stranger and far more powerful.",
      ["Stars are enormous balls of hot gas, mostly hydrogen and helium.",
       "The Sun does not burn like a fire. It runs on nuclear fusion: hydrogen nuclei are squeezed together to form helium.",
       "Fusion converts a tiny amount of mass into an enormous amount of energy, which is why the Sun has shone for billions of years.",
       "Fusion needs the crushing pressure and the millions of degrees found only in a star's core.",
       "The energy travels outward and leaves as light and heat. The Sun is about 4.6 billion years old and roughly halfway through its life."],
      "☀️ Activity Sheet — Fusion vs Burning: Write a side-by-side comparison of a campfire and the Sun. Cover fuel, the reaction, what it produces and why one lasts hours and the other billions of years.",
      [{ q: "What are stars mostly made of?", a: "Hydrogen and helium" },
       { q: "What process powers the Sun?", a: "Nuclear fusion" },
       { q: "Does the Sun burn like a fire?", a: "No — it fuses hydrogen into helium" },
       { q: "What does fusion turn hydrogen into?", a: "Helium" },
       { q: "What does fusion release?", a: "Enormous amounts of energy" },
       { q: "What conditions does fusion need?", a: "Immense pressure and millions of degrees" },
       { q: "Where in a star does fusion happen?", a: "In the core" },
       { q: "About how old is the Sun?", a: "About 4.6 billion years" }], null),

    U("🌌", "Galaxies & the Big Bang", "Grade 10",
      "Our whole solar system is one dot in one galaxy — and the whole thing has been expanding for 13.8 billion years.",
      ["A galaxy is an enormous collection of stars, gas and dust bound together by gravity. Ours is the Milky Way, a barred spiral holding well over 100 billion stars.",
       "The Sun is one ordinary star far out in one of the Milky Way's spiral arms.",
       "The universe began about 13.8 billion years ago in an event called the Big Bang, and it has been expanding ever since.",
       "The Big Bang is not a guess. Three independent lines of evidence support it: distant galaxies are redshifted, showing everything is moving apart; the cosmic microwave background is leftover heat from the early universe; and the measured amounts of hydrogen and helium match the prediction.",
       "The Big Bang was not an explosion into empty space — space itself expanded, and it is still expanding today."],
      "🌌 Activity Sheet — Expanding Balloon: Draw dots on a balloon and inflate it. Measure how the gaps grow and explain how this models an expanding universe — including why every dot sees the others moving away.",
      [{ q: "What is a galaxy?", a: "A huge collection of stars, gas and dust held by gravity" },
       { q: "What is our galaxy called?", a: "The Milky Way" },
       { q: "About how old is the universe?", a: "About 13.8 billion years" },
       { q: "What is the name of the event that began it?", a: "The Big Bang" },
       { q: "Name one piece of evidence for the Big Bang.", a: "Redshift, the cosmic microwave background, or the amounts of hydrogen and helium" },
       { q: "What does redshift tell us?", a: "Distant galaxies are moving away from us" },
       { q: "What is the cosmic microwave background?", a: "Leftover heat from the early universe" },
       { q: "Did the Big Bang explode into empty space?", a: "No — space itself expanded" }], null),

    U("💫", "Star Life Cycles & Where Atoms Come From", "Grade 11",
      "Every atom heavier than helium was manufactured inside a star. Including the ones in you.",
      ["Stars are born inside nebulae — vast clouds of gas and dust pulled together by gravity.",
       "A star spends most of its life fusing hydrogen into helium. This stable stage is called the main sequence, and it is where the Sun is now.",
       "When the hydrogen runs low the star swells into a red giant. What happens next depends on its mass.",
       "Fusion inside stars builds heavier elements, but only up to iron. Elements heavier than iron are forged in supernova explosions and in collisions between neutron stars.",
       "Those explosions scatter the new elements into space, where they form new stars and planets. The carbon in your cells and the calcium in your bones were made inside stars."],
      "💫 Activity Sheet — Atom Autobiography: Choose one element in your body (iron, calcium, oxygen). Write its story from the Big Bang, through the star that made it, to you.",
      [{ q: "Where are stars born?", a: "In nebulae — clouds of gas and dust" },
       { q: "What is the main sequence?", a: "The long stable stage where a star fuses hydrogen into helium" },
       { q: "What happens when a star's hydrogen runs low?", a: "It swells into a red giant" },
       { q: "What decides how a star ends its life?", a: "Its mass" },
       { q: "Up to which element can normal fusion build?", a: "Iron" },
       { q: "Where are elements heavier than iron made?", a: "In supernovae and neutron star collisions" },
       { q: "How do those elements reach us?", a: "Explosions scatter them into space to form new stars and planets" },
       { q: "Where were the atoms in your body made?", a: "Inside stars" }], lifeDia),

    U("🛰️", "Orbits, Missions & Careers", "Grade 12",
      "Why doesn't a satellite fall down? It is falling — it just keeps missing. That insight put humans on the Moon.",
      ["Kepler showed that orbits are ellipses, not perfect circles, and that a planet moves faster when it is nearer the Sun.",
       "Newton explained why: gravity is an attraction between any two masses, stronger with more mass and weaker with greater distance.",
       "An object in orbit is in constant free fall — it moves sideways fast enough that it keeps missing the Earth. That is why astronauts float.",
       "Astronauts on the International Space Station orbit about 250 miles (400 km) up, and there is still plenty of gravity at that height.",
       "Telescopes and probes have confirmed more than 6,000 planets around other stars, and the count keeps climbing. Space work needs engineers, scientists, doctors, programmers, welders and technicians."],
      "🛰️ Activity Sheet — Mission Proposal: Design a mission to one destination in the solar system. State the science question, the instruments, the crew or robot choice, and the biggest engineering risk.",
      [{ q: "What shape are orbits?", a: "Ellipses" },
       { q: "Who worked out the laws of planetary motion?", a: "Johannes Kepler" },
       { q: "When does a planet move fastest?", a: "When it is closest to the Sun" },
       { q: "What does gravity depend on?", a: "Mass and distance" },
       { q: "Why do astronauts float in orbit?", a: "They are in constant free fall around Earth" },
       { q: "Is there gravity at the space station?", a: "Yes — plenty of it" },
       { q: "What is a planet orbiting another star called?", a: "An exoplanet" },
       { q: "About how many have been confirmed?", a: "More than 6,000, and rising" }], null)
  ];

  LESSONS[24].spacecourse = {
    title: "Space Course", emoji: "🌌",
    intro: "A full space science course, Grade 1 through Grade 12, following the NGSS Earth's Place in the Universe strand.",
    units: UNITS
  };
})();
