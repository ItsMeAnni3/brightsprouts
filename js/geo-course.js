// BrightSprouts Academy — Geography Course, Grades 1–12 (LESSONS[13].geocourse).
// Built on the Five Themes of Geography (location, place, human–environment interaction,
// movement, region), the framework used across US state standards, and sequenced to match the
// usual US progression: my place → maps → landforms → the US → the hemisphere → world physical →
// world regional → human → physical systems → cultural → economic/political → sustainability.
//
// FACT NOTES (checked, and phrased so they stay true):
//   • India is the most populous country — it passed China in April 2023.
//   • Five oceans: NOAA and the US Board on Geographic Names recognise the Southern Ocean.
//   • Nile vs Amazon: genuinely disputed, so both are taught as "the two longest".
//   • Country count is given as "about 195", with 193 UN members as the firm number.
(function () {
  if (typeof LESSONS === "undefined" || !LESSONS[13]) return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // ---- The Five Themes chart ----
  var themes = [["📍", "Location", "where it is"], ["🏞️", "Place", "what it is like"],
                ["🤝", "Human–Environment", "how people and land change each other"],
                ["✈️", "Movement", "how people, goods and ideas travel"],
                ["🗺️", "Region", "areas that share something"]];
  var themeDia = '<svg viewBox="0 0 340 216"><rect width="340" height="216" rx="14" fill="#eef6ff"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="13" fill="#5d3fa0">The Five Themes of Geography</text>';
  for (var t = 0; t < 5; t++) {
    var ty = 36 + t * 35;
    themeDia += '<rect x="14" y="' + ty + '" width="312" height="29" rx="9" fill="#fff" stroke="#9ab6e8" stroke-width="1.8"/>'
      + '<text x="26" y="' + (ty + 20) + '" font-size="15">' + themes[t][0] + '</text>'
      + '<text x="52" y="' + (ty + 19) + '" ' + FA + ' font-size="12.5" fill="#2d2a4a">' + themes[t][1] + '</text>'
      + '<text x="318" y="' + (ty + 19) + '" text-anchor="end" ' + FA + ' font-size="10.5" fill="#6a668c">' + themes[t][2] + '</text>';
  }
  themeDia += '</svg>';

  // ---- Latitude / longitude grid ----
  var gridDia = '<svg viewBox="0 0 340 210"><rect width="340" height="210" rx="14" fill="#f5f2ff"/>'
    + '<circle cx="150" cy="105" r="78" fill="#dceeff" stroke="#4d96ff" stroke-width="2.5"/>'
    + '<g stroke="#7c5cbf" stroke-width="1.6" fill="none">'
    + '<ellipse cx="150" cy="105" rx="78" ry="26"/><ellipse cx="150" cy="105" rx="78" ry="52"/>'
    + '<ellipse cx="150" cy="105" rx="26" ry="78"/><ellipse cx="150" cy="105" rx="52" ry="78"/>'
    + '<line x1="150" y1="27" x2="150" y2="183"/></g>'
    + '<line x1="72" y1="105" x2="228" y2="105" stroke="#e2453b" stroke-width="3"/>'
    + '<g ' + FA + ' font-size="11" fill="#2d2a4a">'
    + '<text x="236" y="108" fill="#c0392b">Equator 0°</text>'
    + '<text x="150" y="20" text-anchor="middle" fill="#5d3fa0">Prime Meridian 0°</text>'
    + '<text x="14" y="196">Latitude: lines across, measure N/S</text>'
    + '<text x="14" y="208">Longitude: lines up/down, measure E/W</text></g></svg>';

  // ---- Climate zones ----
  var bands = [["#cdeef0", "POLAR", "cold all year"], ["#d8f0c8", "TEMPERATE", "four seasons"],
               ["#ffe6a3", "TROPICAL", "hot all year"], ["#d8f0c8", "TEMPERATE", "four seasons"],
               ["#cdeef0", "POLAR", "cold all year"]];
  var climDia = '<svg viewBox="0 0 340 200"><rect width="340" height="200" rx="14" fill="#fdfaff"/>';
  for (var b = 0; b < 5; b++) {
    var by = 22 + b * 32;
    climDia += '<rect x="14" y="' + by + '" width="312" height="28" rx="7" fill="' + bands[b][0] + '"/>'
      + '<text x="28" y="' + (by + 19) + '" ' + FA + ' font-size="12" fill="#2d2a4a">' + bands[b][1] + '</text>'
      + '<text x="312" y="' + (by + 19) + '" text-anchor="end" ' + FA + ' font-size="10.5" fill="#6a668c">' + bands[b][2] + '</text>';
  }
  climDia += '<text x="170" y="196" text-anchor="middle" ' + FA + ' font-size="11" fill="#5d3fa0">'
    + 'The Tropics sit at 23.5°N and 23.5°S — Earth\'s tilt is why</text></svg>';

  function U(emoji, title, band, intro, learn, activity, questions, diagram) {
    return { emoji: emoji, title: title, band: band, intro: intro, learn: learn,
             activity: activity, questions: questions, diagram: diagram };
  }

  var UNITS = [
    U("🏠", "My Place in the World", "Grade 1",
      "Geography is the study of places — and the very first place worth knowing is your own.",
      ["Geography is the study of places on Earth and the people who live in them.",
       "A map is a drawing of a place seen from above. A globe is a model of the whole round Earth.",
       "Maps use small pictures called symbols, and a map key tells you what each one means.",
       "You can describe where you live from small to big: your home, street, town, state, country, continent, planet.",
       "On most maps water is blue and land is green or brown."],
      "🏠 Activity Sheet — My Address Ladder: Write seven steps from your home out to planet Earth (home, street, town, state, country, continent, planet) and draw a small picture beside each.",
      [{ q: "What is geography?", a: "The study of places and the people who live in them" },
       { q: "What is a map?", a: "A drawing of a place seen from above" },
       { q: "What is a globe?", a: "A model of the whole round Earth" },
       { q: "What does a map key tell you?", a: "What the symbols on the map mean" },
       { q: "What colour is usually used for water on a map?", a: "Blue" },
       { q: "Which is bigger, your town or your state?", a: "Your state" },
       { q: "Which is bigger, your country or your continent?", a: "Your continent" },
       { q: "What planet do you live on?", a: "Earth" }], themeDia),

    U("🧭", "Maps, Globes & Directions", "Grade 2",
      "Every map has the same handful of tools. Learn those five things and you can read any map on Earth.",
      ["The four cardinal directions are north, south, east and west. On most maps north is at the top.",
       "A compass rose is the star-shaped symbol showing directions on a map.",
       "A map scale tells you how a small distance on the map matches a big distance in the real world.",
       "The seven continents are Africa, Antarctica, Asia, Australia, Europe, North America and South America.",
       "There are five oceans: the Pacific, Atlantic, Indian, Southern and Arctic. The Southern Ocean was the last to be recognised."],
      "🧭 Activity Sheet — Treasure Map: Draw a treasure map of your yard or park. It must include a compass rose, at least four symbols, a map key and a scale.",
      [{ q: "Name the four cardinal directions.", a: "North, south, east and west" },
       { q: "Which direction is usually at the top of a map?", a: "North" },
       { q: "What is a compass rose?", a: "The symbol on a map that shows directions" },
       { q: "What does a map scale tell you?", a: "How map distance compares to real distance" },
       { q: "How many continents are there?", a: "Seven" },
       { q: "How many oceans are there?", a: "Five" },
       { q: "Which ocean was recognised most recently?", a: "The Southern Ocean" },
       { q: "Name three continents.", a: "e.g. Africa, Asia, Europe, North America" }], null),

    U("🏔️", "Landforms, Water & Weather", "Grade 3",
      "The shape of the land and the water around it decide where people build, farm and travel.",
      ["Landforms are the shapes of the land: mountains, hills, valleys, plains, plateaus, deserts and islands.",
       "A peninsula is land with water on three sides; an island has water all the way around.",
       "Bodies of water include oceans, seas, lakes, rivers, gulfs and bays.",
       "Weather is what the sky is doing today. Climate is the usual pattern of weather over many years.",
       "People adapt to their environment (coats in cold places) and change it (bridges, farms, cities) — geographers call this human–environment interaction."],
      "🏔️ Activity Sheet — Landform Booklet: Fold paper into six boxes. Draw and define mountain, valley, plain, island, peninsula and river, then circle the one closest to where you live.",
      [{ q: "What is a landform?", a: "A shape of the land, such as a mountain or valley" },
       { q: "What is an island?", a: "Land with water all the way around it" },
       { q: "What is a peninsula?", a: "Land with water on three sides" },
       { q: "What is the difference between weather and climate?", a: "Weather is today; climate is the usual pattern over years" },
       { q: "Name three bodies of water.", a: "e.g. ocean, lake, river, sea, bay" },
       { q: "Give an example of people adapting to their environment.", a: "Wearing coats in cold places, or building on stilts in floods" },
       { q: "Give an example of people changing their environment.", a: "Building roads, bridges, farms or cities" },
       { q: "What is a flat, wide stretch of land called?", a: "A plain" }], null),

    U("🇺🇸", "The United States: Regions & States", "Grade 4",
      "Fifty states, five regions, and a set of physical features that shaped where every American city grew.",
      ["The United States has 50 states. Washington, D.C. is the nation's capital and is not a state.",
       "The five regions are the Northeast, Southeast, Midwest, Southwest and West.",
       "Major features include the Appalachian Mountains in the east, the Rocky Mountains in the west, the Great Plains, the Mississippi River and the five Great Lakes.",
       "Alaska is the largest state by area and California has the most people. Denali in Alaska is the highest point at 20,310 feet, and Death Valley in California is the lowest at 282 feet below sea level.",
       "Some state borders follow natural features such as rivers; others are straight survey lines."],
      "🇺🇸 Activity Sheet — Label the Nation: On a blank US map, colour the five regions, label the Rockies, Appalachians, Mississippi River and Great Lakes, then star your own state and its capital.",
      [{ q: "How many states are in the United States?", a: "50" },
       { q: "Is Washington, D.C. a state?", a: "No — it is the nation's capital" },
       { q: "Name the five US regions.", a: "Northeast, Southeast, Midwest, Southwest and West" },
       { q: "Which mountains run along the western US?", a: "The Rocky Mountains" },
       { q: "How many Great Lakes are there?", a: "Five" },
       { q: "Which state is largest by area?", a: "Alaska" },
       { q: "Which state has the most people?", a: "California" },
       { q: "What is the highest point in the United States?", a: "Denali, in Alaska" }], null),

    U("🌎", "North America & the Global Grid", "Grade 5",
      "Zoom out to your continent — and learn the coordinate system that can pin down any spot on Earth.",
      ["North America includes Canada, the United States, Mexico, the countries of Central America and the Caribbean islands.",
       "Lines of latitude run east–west and measure how far north or south of the Equator you are. The Equator is 0° latitude.",
       "Lines of longitude run north–south and measure how far east or west of the Prime Meridian you are. The Prime Meridian is 0° longitude and passes through Greenwich, England.",
       "Absolute location is an exact address such as coordinates. Relative location describes a place compared with others, like 'north of the river'.",
       "The Equator splits Earth into the Northern and Southern Hemispheres; the Prime Meridian splits it into the Eastern and Western Hemispheres."],
      "🌎 Activity Sheet — Coordinate Hunt: Look up the latitude and longitude of your town and four world cities. Plot them on a grid and say which hemisphere each one is in.",
      [{ q: "Name the three largest countries of North America.", a: "Canada, the United States and Mexico" },
       { q: "Which lines measure north and south?", a: "Lines of latitude" },
       { q: "Which lines measure east and west?", a: "Lines of longitude" },
       { q: "What is the latitude of the Equator?", a: "0 degrees" },
       { q: "What is the longitude of the Prime Meridian?", a: "0 degrees" },
       { q: "Which line divides the Northern and Southern Hemispheres?", a: "The Equator" },
       { q: "What is absolute location?", a: "An exact position, such as coordinates" },
       { q: "What is relative location?", a: "Where a place is compared with other places" }], gridDia),

    U("🌍", "World Physical Geography", "Grade 6",
      "The whole planet at once: what shapes its surface, what heats it, and where the records sit.",
      ["Asia is the largest continent and Australia the smallest. The Pacific is the largest ocean.",
       "Earth's surface is broken into tectonic plates. Where they meet, mountains rise and earthquakes and volcanoes occur.",
       "The three broad climate zones are tropical (near the Equator), temperate (in between) and polar (near the poles).",
       "The Tropic of Cancer sits at about 23.5° north and the Tropic of Capricorn at about 23.5° south — the same 23.5° as Earth's tilt.",
       "Records worth knowing: Mount Everest is the highest point above sea level at 29,032 feet (8,849 m); Antarctica is the largest desert of any kind and the Sahara the largest hot desert; the Nile and the Amazon are the two longest rivers, and geographers still disagree over which one wins."],
      "🌍 Activity Sheet — Climate Band Map: On a world map, shade the tropical, temperate and polar zones. Mark the Equator and both Tropics, then add one country in each zone.",
      [{ q: "Which is the largest continent?", a: "Asia" },
       { q: "Which is the smallest continent?", a: "Australia" },
       { q: "Which is the largest ocean?", a: "The Pacific" },
       { q: "What are Earth's surface plates called?", a: "Tectonic plates" },
       { q: "Name the three broad climate zones.", a: "Tropical, temperate and polar" },
       { q: "At what latitude is the Tropic of Cancer?", a: "About 23.5° north" },
       { q: "What is the highest point on Earth above sea level?", a: "Mount Everest, 29,032 feet" },
       { q: "Which two rivers are the longest, and is it settled?", a: "The Nile and the Amazon — sources disagree which is longer" }], climDia),

    U("🗺️", "World Regions & Culture", "Grade 7",
      "Geographers slice the world into regions — sometimes by mountains and rivers, sometimes by how people live.",
      ["A region is an area that shares something in common. Formal regions share a measurable trait, such as a climate or a language.",
       "A culture region is defined by shared language, religion, history or way of life rather than by physical features.",
       "Population density is the number of people per square mile. Some regions are extremely crowded and others nearly empty.",
       "Russia is the largest country by land area. India is the most populous country, having passed China in 2023.",
       "There are about 195 countries. The firm number is 193 UN member states; totals differ because people count disputed places differently."],
      "🗺️ Activity Sheet — Region Profile: Choose a world region. Record its climate, major landforms, main languages and religions, population density and two things it is known for.",
      [{ q: "What is a region?", a: "An area that shares something in common" },
       { q: "What defines a culture region?", a: "Shared language, religion, history or way of life" },
       { q: "What is population density?", a: "The number of people per unit of area" },
       { q: "Which country is largest by land area?", a: "Russia" },
       { q: "Which country has the most people?", a: "India" },
       { q: "When did that country pass China?", a: "In 2023" },
       { q: "How many UN member states are there?", a: "193" },
       { q: "Why do country counts differ?", a: "People count disputed territories differently" }], null),

    U("👥", "Human Geography: People & Movement", "Grade 8",
      "Why do people live where they live — and why do they move? This is the human half of geography.",
      ["Migration is people moving to live somewhere new. Push factors drive people away (war, drought, no work); pull factors attract them (safety, jobs, family).",
       "Urbanisation is the growth of cities. More than half of all people now live in urban areas.",
       "Birth rate and death rate together drive whether a population grows or shrinks; a population pyramid shows a country's age structure.",
       "Natural resources, water and good farmland strongly shape where people settle and what work they do.",
       "Movement — of people, goods and ideas — is one of the Five Themes, and it links places that are far apart."],
      "👥 Activity Sheet — Migration Map: Map where your family has lived across generations. For each move, label at least one push factor and one pull factor.",
      [{ q: "What is migration?", a: "People moving to live somewhere new" },
       { q: "What is a push factor?", a: "Something that drives people away from a place" },
       { q: "What is a pull factor?", a: "Something that attracts people to a place" },
       { q: "Give an example of a push factor.", a: "War, drought, disaster or lack of work" },
       { q: "What is urbanisation?", a: "The growth of cities" },
       { q: "Do more than half of people now live in cities?", a: "Yes" },
       { q: "What does a population pyramid show?", a: "A country's age structure" },
       { q: "Name something that shapes where people settle.", a: "Water, farmland, resources or climate" }], null),

    U("🌦️", "Physical Systems & Natural Hazards", "Grade 9",
      "Earth runs on four connected systems — and when they move suddenly, people need to be ready.",
      ["Earth has four connected systems: the atmosphere (air), hydrosphere (water), geosphere (rock and land) and biosphere (living things).",
       "The water cycle moves water through evaporation, condensation, precipitation and collection. A watershed is all the land draining into one river or lake.",
       "Seasons are caused by Earth's 23.5° tilt, not by how close Earth is to the Sun.",
       "Natural hazards vary by place: hurricanes on the Atlantic and Gulf coasts, tornadoes in the central plains, earthquakes along faults such as those in California, wildfires in dry western states.",
       "Geographers use maps, satellites and GIS to forecast hazards and plan how communities respond."],
      "🌦️ Activity Sheet — Hazard Plan: Identify the two natural hazards most likely where you live. For each, list the warning signs, what your family would do, and what supplies you would need.",
      [{ q: "Name Earth's four systems.", a: "Atmosphere, hydrosphere, geosphere and biosphere" },
       { q: "Which system is all the living things?", a: "The biosphere" },
       { q: "Name two stages of the water cycle.", a: "Evaporation, condensation, precipitation or collection" },
       { q: "What is a watershed?", a: "All the land that drains into one river or lake" },
       { q: "What causes the seasons?", a: "Earth's 23.5° tilt" },
       { q: "Do seasons come from Earth's distance to the Sun?", a: "No — it is the tilt" },
       { q: "Where are tornadoes most common in the US?", a: "The central plains" },
       { q: "What tools help geographers study hazards?", a: "Maps, satellites and GIS" }], null),

    U("🕌", "Cultural Geography", "Grade 10",
      "Culture leaves fingerprints on the land. Learning to read them tells you who lives there and what they value.",
      ["Culture is everything a group shares: language, religion, food, dress, music, and traditions.",
       "The cultural landscape is the visible mark people leave on a place — buildings, farms, street layouts, signs and places of worship.",
       "Cultural diffusion is how ideas, foods and technology spread from place to place. A cultural hearth is where something began.",
       "Languages and religions are spread unevenly across the world, and their patterns often follow old trade routes and migrations.",
       "Globalisation spreads culture quickly, which can bring people together but can also threaten smaller languages and traditions."],
      "🕌 Activity Sheet — Read a Landscape: Photograph or sketch one street near you. List five clues in it that reveal something about the people who live there.",
      [{ q: "What does culture include?", a: "Language, religion, food, dress, music and traditions" },
       { q: "What is the cultural landscape?", a: "The visible mark people leave on a place" },
       { q: "What is cultural diffusion?", a: "The spread of ideas and practices from place to place" },
       { q: "What is a cultural hearth?", a: "The place where a cultural practice began" },
       { q: "Are languages spread evenly across the world?", a: "No — the pattern is very uneven" },
       { q: "Name one thing that spreads culture today.", a: "The internet, trade, travel or media" },
       { q: "Give a benefit of globalisation.", a: "It connects people and shares ideas" },
       { q: "Give a risk of globalisation.", a: "Smaller languages and traditions can be lost" }], null),

    U("💹", "Economic & Political Geography", "Grade 11",
      "Where work happens, where borders fall, and why a shortage in one country empties shelves in another.",
      ["Economic activity is grouped in sectors: primary (farming, mining), secondary (manufacturing), tertiary (services) and quaternary (research and information).",
       "Development is measured with indicators such as GDP per person, literacy rate and life expectancy.",
       "Borders may follow natural features, be drawn as straight geometric lines, or follow cultural divisions. Borders drawn by outsiders often cause lasting conflict.",
       "Natural resources are distributed unevenly, which drives trade and sometimes competition and conflict.",
       "A supply chain links the places where something is grown, made, shipped and sold — so a disruption in one place is felt everywhere."],
      "💹 Activity Sheet — Trace the Supply Chain: Pick one object you own. Research where its materials came from, where it was assembled and how it reached you. Map every step.",
      [{ q: "Name the four economic sectors.", a: "Primary, secondary, tertiary and quaternary" },
       { q: "Which sector is farming and mining?", a: "Primary" },
       { q: "Which sector is manufacturing?", a: "Secondary" },
       { q: "Name a measure of development.", a: "GDP per person, literacy rate or life expectancy" },
       { q: "Name a type of border.", a: "Natural, geometric or cultural" },
       { q: "Why do borders drawn by outsiders cause problems?", a: "They cut across peoples who belong together" },
       { q: "What is a supply chain?", a: "The linked places where goods are made, shipped and sold" },
       { q: "Why does a disruption in one country matter elsewhere?", a: "Supply chains connect distant places" }], null),

    U("🌱", "Environment & Sustainability", "Grade 12",
      "The capstone question of geography: how do eight billion people live well on one planet?",
      ["Renewable resources can be replaced (sunlight, wind, timber); non-renewable ones cannot (coal, oil, natural gas).",
       "Human activity changes the land through deforestation, pollution, urban sprawl and heavy water use.",
       "Greenhouse gases trap heat in the atmosphere. Rising global temperatures raise sea levels, shift rainfall and make some extreme weather more likely.",
       "Sustainability means meeting present needs without stopping future generations from meeting theirs.",
       "Geographers work with GIS (mapping software), remote sensing (satellite images) and GPS to study these problems and plan solutions."],
      "🌱 Activity Sheet — Local Sustainability Audit: For one week, track your household's energy, water and waste. Identify the three biggest uses and propose one realistic change for each.",
      [{ q: "What is a renewable resource?", a: "One that can be replaced, such as sunlight or wind" },
       { q: "Name a non-renewable resource.", a: "Coal, oil or natural gas" },
       { q: "Name a way humans change the land.", a: "Deforestation, pollution, sprawl or water use" },
       { q: "What do greenhouse gases do?", a: "Trap heat in the atmosphere" },
       { q: "Name an effect of a warming climate.", a: "Rising sea levels or shifting rainfall" },
       { q: "What is sustainability?", a: "Meeting today's needs without harming future generations' ability to meet theirs" },
       { q: "What does GIS stand for?", a: "Geographic Information Systems — mapping software" },
       { q: "What is remote sensing?", a: "Studying Earth using satellite images" }], null)
  ];

  LESSONS[13].geocourse = {
    title: "Geography Course", emoji: "🧭",
    intro: "A full geography course, Grade 1 through Grade 12, built on the Five Themes of Geography.",
    units: UNITS
  };
})();
