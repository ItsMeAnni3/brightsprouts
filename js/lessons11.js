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

const HIST_SUBJECTS = [
  { key: "eras", label: "The Timeline", emoji: "⏳" }
];

LESSONS[19] = {
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
