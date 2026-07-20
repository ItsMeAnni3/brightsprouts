// BrightSprouts Academy — Historical Eras (category 19).
// A kid-friendly walk through the major periods of the human journey. Dates are the standard
// textbook ranges (approximate for prehistory) and are written the way a grade-schooler can grasp.
// Each era: emoji, name, a friendly time range, a colour for the timeline, a short summary, and
// a few "cool facts". Order is strictly chronological.

const HIST_ERAS = [
  { emoji: "🦴", name: "The Stone Age", when: "Millions of years ago – about 3000 BCE", color: "#a3763f",
    blurb: "The very beginning of the human story! Early people learned to make tools out of stone, discovered how to use fire, and lived by hunting animals and gathering wild plants. They painted amazing pictures on cave walls. Near the end of this age came a giant discovery — farming — so families could grow their own food and stay in one place.",
    facts: [
      "🔥 Learning to use fire meant warmth, cooked food, and safety at night.",
      "🎨 Some cave paintings in France and Spain are over 15,000 years old.",
      "🌾 Farming began about 12,000 years ago and changed human life forever."
    ] },
  { emoji: "🏺", name: "The First Civilizations", when: "About 3000 – 1200 BCE (the Bronze Age)", color: "#d9a441",
    blurb: "Once people could farm, small villages grew into the world's very first cities. People learned to mix metals to make bronze for stronger tools — and, most importantly, they invented writing! The earliest great civilizations grew up along rivers: Ancient Egypt beside the Nile, and Mesopotamia between two rivers in the Middle East.",
    facts: [
      "✍️ The first writing was pressed into soft clay with a reed pen.",
      "🔺 The Egyptians built the Great Pyramid about 4,500 years ago.",
      "🏙️ Some of the world's first cities were in Mesopotamia (today's Iraq)."
    ] },
  { emoji: "🏛️", name: "The Classical Age", when: "About 800 BCE – 500 CE", color: "#4d96ff",
    blurb: "A time of big ideas and mighty empires. In Ancient Greece, people invented democracy — letting citizens vote — and thinkers asked big questions about the world. Later the Romans built a huge empire with roads, laws, and cities all across Europe. Great civilizations also flourished in China and India at the same time.",
    facts: [
      "🗳️ 'Democracy' is a Greek word meaning 'rule by the people'.",
      "🛣️ Roman roads were so straight and strong that some are still used today.",
      "🏯 In China, builders began the earliest parts of the Great Wall."
    ] },
  { emoji: "🏰", name: "The Middle Ages", when: "About 500 – 1500 CE", color: "#7c5cbf",
    blurb: "After the Roman Empire fell, Europe entered the Middle Ages — the age of castles, knights in shining armor, and kings and queens. Most people were farmers living in small villages. Meanwhile the Islamic world and China led the way in science, mathematics, and trade, sharing ideas along famous routes like the Silk Road.",
    facts: [
      "🐴 Knights trained for years and wore heavy suits of metal armor.",
      "🏰 Tall stone castles were built to keep people safe from attacks.",
      "📚 Scholars kept learning alive and made big discoveries in math and medicine."
    ] },
  { emoji: "🎨", name: "The Renaissance", when: "About 1300 – 1600 CE", color: "#e26d5c",
    blurb: "'Renaissance' means 'rebirth'. People became excited about art, science, and learning all over again. Artists like Leonardo da Vinci and Michelangelo created world-famous paintings and sculptures. A clever new machine — the printing press — could make books quickly, so ideas spread faster than ever before.",
    facts: [
      "🖼️ Leonardo da Vinci painted the Mona Lisa — and sketched flying machines!",
      "🖨️ The printing press (around 1450) made books cheap enough to share widely.",
      "🔭 A new curiosity about the world set the stage for modern science."
    ] },
  { emoji: "🧭", name: "The Age of Exploration", when: "About 1400 – 1600 CE", color: "#2ec4b6",
    blurb: "Daring sailors set out in wooden ships to explore the oceans and map the world, connecting faraway lands for the first time. It was a time of amazing voyages — but it also had a sad side, because it brought conflict and great hardship to many people already living in those lands.",
    facts: [
      "⛵ In 1492 Christopher Columbus sailed west across the Atlantic Ocean.",
      "🌍 Magellan's crew were the first known to sail all the way around the world.",
      "🗺️ Explorers filled in world maps that once had big blank spaces."
    ] },
  { emoji: "🔬", name: "Science & New Ideas", when: "About 1550 – 1800 CE", color: "#3a86ff",
    blurb: "People began using experiments and careful observation to understand how the world really works — this was the Scientific Revolution. Scientists like Galileo and Isaac Newton uncovered laws of nature, such as gravity. In the Enlightenment that followed, thinkers shared powerful new ideas about freedom and fairness.",
    facts: [
      "🍎 Isaac Newton explained gravity and how objects move.",
      "🔭 Galileo used a telescope to study the Moon and the planets.",
      "💡 Bold ideas about freedom inspired revolutions around the world."
    ] },
  { emoji: "🏭", name: "The Industrial Revolution", when: "About 1760 – 1900 CE", color: "#6b7280",
    blurb: "Machines changed everything! People invented engines powered by steam that could do the work of many hands. Goods were made in enormous factories, and steam trains and ships carried people and cargo faster than ever. Small towns grew into busy cities as families moved to work in the factories.",
    facts: [
      "🚂 Steam trains let people travel far in hours instead of days.",
      "🏭 Factories made clothes and everyday goods quickly and cheaply.",
      "💡 Toward the end came electricity, telephones, and the light bulb."
    ] },
  { emoji: "⚡", name: "The Modern Age", when: "About 1900 – 2000 CE", color: "#f4732a",
    blurb: "The 1900s were packed with change. Cars and airplanes let people travel the whole world, and electricity lit up homes everywhere. There were also two terrible world wars that affected the entire planet. By the end of the century, humans had done something incredible — walked on the Moon — and built the very first computers.",
    facts: [
      "✈️ The first airplane flew in 1903; by 1969 astronauts walked on the Moon.",
      "💡 Electricity at home brought lights, radios, and television.",
      "🖥️ The first electronic computers were as big as a whole room!"
    ] },
  { emoji: "💻", name: "The Information Age", when: "About 1990 – today", color: "#9b5de5",
    blurb: "Welcome to now! The internet connects people all over the world in an instant. Computers became small enough to fit in your pocket — that's your smartphone. Today we can video-call a friend across the planet, look up almost anything, and computers are even learning to think with artificial intelligence. What will YOU invent next?",
    facts: [
      "🌐 The World Wide Web was invented around 1990.",
      "📱 Smartphones put a powerful computer right in your pocket.",
      "🤖 Artificial intelligence (AI) helps computers learn — like me!"
    ] }
];

// Earth's deep-time story — from the beginning of the universe up to just before the human Stone Age.
// Dates are science's standard best estimates (billions/millions of years ago).
const EARTH_ERAS = [
  { emoji: "🌌", name: "The Big Bang", when: "About 13.8 billion years ago", color: "#5b3fa0",
    blurb: "Everything began! In a single instant, all of space, time, and matter burst into being from something smaller than a dot, then grew unbelievably fast. As it spread out and cooled, the first stars and galaxies switched on and lit up the darkness.",
    facts: [
      "💥 The entire universe began smaller than a tiny dot, then grew in a flash.",
      "⭐ The first stars and galaxies formed from giant clouds of gas.",
      "🧪 Stars cooked simple gases into the materials that later made planets — and you!"
    ] },
  { emoji: "☀️", name: "The Sun & Solar System", when: "About 4.6 billion years ago", color: "#f4732a",
    blurb: "A huge cloud of gas and dust in space slowly squeezed together. At its center it grew so hot and heavy that it burst into light — our Sun was born! The leftover bits circled around and clumped into the planets.",
    facts: [
      "☀️ The Sun holds more than 99% of all the stuff in our solar system.",
      "🪐 Eight planets formed and still circle the Sun today.",
      "🧲 Gravity pulled the dust together like sticky snowballs."
    ] },
  { emoji: "🌋", name: "Earth Is Born", when: "About 4.5 billion years ago", color: "#b5451f",
    blurb: "Baby Earth was NOT a nice place to live — it was a glowing ball of melted rock, exploding volcanoes, and crashing space rocks. Then a world about the size of Mars smashed into Earth, and the splashed-out pieces came together to form our Moon!",
    facts: [
      "🌕 Our Moon was made from a giant collision with the young Earth.",
      "🌋 Early Earth was so hot that its whole surface was molten (melted) rock.",
      "☄️ Space rocks crashed down constantly in a time called the 'heavy bombardment'."
    ] },
  { emoji: "🌊", name: "Oceans & the First Life", when: "About 3.8 billion years ago", color: "#2e7fd6",
    blurb: "As Earth cooled, rain fell for ages and filled the first oceans. And there, hidden in the water, something amazing happened — the very first living things appeared. They were tiny single cells, far too small to see.",
    facts: [
      "🦠 The first living things were tiny single cells, like bacteria.",
      "🌊 Life began in the water, not on land.",
      "🔬 These living specks were much too small to see with just your eyes."
    ] },
  { emoji: "🫧", name: "The Air Fills with Oxygen", when: "About 2.4 billion years ago", color: "#2ec4b6",
    blurb: "For a very long time, Earth's air had no oxygen to breathe. Then tiny living things called cyanobacteria learned to make food from sunlight — and breathed out oxygen as 'waste'. Over millions of years, they filled the sky with the oxygen that animals (and you!) need.",
    facts: [
      "🫧 Tiny microbes slowly filled the air with oxygen using sunlight.",
      "🌬️ Before this, nothing on Earth could breathe air the way we do.",
      "🌱 Making food from sunlight is called photosynthesis — plants still do it."
    ] },
  { emoji: "🐚", name: "Animals Appear in the Sea", when: "About 540 million years ago", color: "#e26d5c",
    blurb: "For billions of years, life stayed tiny. Then, in a burst that scientists call the 'Cambrian Explosion', the oceans suddenly filled with all kinds of strange animals — creatures with shells, spikes, legs, and the very first eyes! It was the beginning of animals as we know them.",
    facts: [
      "👁️ Some of the first animals with eyes appeared during this time.",
      "🦐 The seas swarmed with early relatives of crabs, worms, and shellfish.",
      "🐚 Hard shells and skeletons start showing up as fossils from now on."
    ] },
  { emoji: "🌿", name: "Life Crawls onto Land", when: "About 470 million years ago", color: "#6bcb77",
    blurb: "Until now, ALL life lived in the water. Then plants took the brave first step onto bare rock and slowly turned the land green. Insects followed, and eventually the first backboned animals — amphibians — crawled out of the water onto land.",
    facts: [
      "🌿 Plants turned the bare, rocky land green for the very first time.",
      "🐛 Insects were among the first animals to live on land.",
      "🐸 Amphibians were the first backboned animals to walk on land."
    ] },
  { emoji: "🦕", name: "The Age of Dinosaurs", when: "About 230 to 66 million years ago", color: "#7a9a3d",
    blurb: "Then came the giants! Dinosaurs appeared and ruled the land for over 150 million years — longer than any other animal group. Some were bigger than a bus; others were smaller than a chicken. The first tiny mammals and the first birds also appeared during this age.",
    facts: [
      "🦖 Dinosaurs ruled the Earth for more than 150 million years.",
      "🐦 Birds are actually the living descendants of dinosaurs!",
      "🐭 The first mammals were small and shy, living alongside the dinosaurs."
    ] },
  { emoji: "☄️", name: "The Dinosaurs Vanish", when: "About 66 million years ago", color: "#6b7280",
    blurb: "One terrible day, a giant asteroid — a space rock about the size of a city — slammed into Earth. It threw up so much dust that the sky went dark and cold for years. Most of the dinosaurs could not survive. But small animals, including little furry mammals, made it through.",
    facts: [
      "☄️ A city-sized asteroid struck Earth and changed everything.",
      "🌑 Dust blocked the Sun, making the world dark and cold.",
      "🐁 Small mammals survived — and their story was just beginning."
    ] },
  { emoji: "🐒", name: "Mammals Rise & the First Ancestors", when: "About 66 to 3 million years ago", color: "#a3763f",
    blurb: "With the giant dinosaurs gone, mammals grew bigger and spread everywhere — early elephants, big cats, and whales. Then, in Africa, some clever apes began to stand and walk on two legs. Little by little, these were the earliest ancestors of humans… bringing us right up to the doorstep of the Stone Age.",
    facts: [
      "🐘 Mammals grew large and spread across the whole planet.",
      "🚶 Our early ancestors began walking upright on two legs in Africa.",
      "➡️ The next chapter is the human Stone Age — open the 'Human Story' tab!"
    ] }
];

const HIST_SUBJECTS = [
  { key: "earth", label: "Earth's Story", emoji: "🌍" },
  { key: "eras",  label: "The Human Story", emoji: "⏳" }
];

LESSONS[19] = {
  earth: {
    title: "Before Us: Earth's Long, Long Story", emoji: "🌍",
    intro: "Long before the very first humans, Earth had already lived an incredible story — billions of years of it! Let's rewind all the way to the beginning and travel through 'deep time', right up to the moment just before people appeared.",
    learn: [
      "Scientists measure Earth's story in millions and even BILLIONS of years. A billion is a thousand millions — a HUGE amount of time!",
      "We learn about deep time from clues: rocks, the layers in the ground, and fossils (the preserved bones and prints of ancient living things).",
      "These dates are science's best estimates from lots and lots of evidence. Earth itself is about 4.5 billion years old.",
      "This whole journey happened BEFORE the Stone Age. Humans arrive only at the very, very end — you're about to see just how new we really are!"
    ],
    activity: "🧻 Toilet-Paper Timeline: Roll a whole roll of toilet paper across the floor and let it stand for all 4.5 billion years of Earth. Now measure — every bit of human history fits on just the LAST tiny square. That's how new we are!",
    earthTimeline: true
  },
  eras: {
    title: "The Story of Us: Great Eras of History", emoji: "⏳",
    intro: "History is one long, amazing adventure story — the story of people! Travel from the very first humans making stone tools all the way to today's world of smartphones and space rockets. Each stop below is a major era in the human journey.",
    learn: [
      "An 'era' is just a big chunk of time that shares something in common — like the tools people used or the way they lived.",
      "You'll see 'BCE' and 'CE' next to the dates. BCE means 'Before the Common Era' (a long, long time ago) and CE means 'Common Era' (counting up to today). The bigger a BCE number is, the further back in time it happened!",
      "For the earliest times we can only say 'about', because it was so long ago there was no one writing dates down yet.",
      "History doesn't really fit in neat boxes — eras overlap, and different places moved at different speeds. These stops are a map, not a rulebook."
    ],
    activity: "🕰️ Make a Time Rope: tie a long string across a room. Peg a drawing for each era along it, spaced out — early humans at one end, today at the other. Standing at the 'now' end, look back and see just how much of the rope is the Stone Age. History is HUGE!",
    erasTimeline: true
  }
};
