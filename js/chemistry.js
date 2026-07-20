// BrightSprouts Academy — Chemistry subject for Grades 9–12 (a progressive physical-science course).
// matter & atoms → the periodic table & atomic structure → bonds, compounds & reactions →
// reactions, the mole & modern chemistry. Verifiable question banks feed the worksheet generator.
(function () {
  if (typeof LESSONS === "undefined") return;
  var CHEMISTRY = {
    9: {
      title: "Matter & Atoms — What Everything Is Made Of", emoji: "⚗️",
      intro: "Look around — everything you can see, touch or breathe is matter. Let's discover what it's all made of, and how it changes.",
      learn: [
        "Matter is anything that has mass and takes up space — solids, liquids, gases, even the air.",
        "Matter comes in three main states: solid (fixed shape), liquid (takes its container's shape), and gas (spreads to fill space).",
        "Heating and cooling change states: melting, freezing, evaporating (boiling) and condensing.",
        "A physical change (like melting ice) changes only the form; a chemical change (like burning) makes a NEW substance.",
        "All matter is built from tiny particles called atoms. A substance made of only one kind of atom is an element."
      ],
      activity: "🧊 State Detective: Watch an ice cube melt into water, then picture it boiling into steam — the same water in three states! Which of those changes are physical?",
      questions: [
        { q: "What is matter?", a: "Anything that has mass and takes up space" },
        { q: "Name the three main states of matter.", a: "Solid, liquid, and gas" },
        { q: "Which state has a fixed shape?", a: "Solid" },
        { q: "Which state spreads out to fill its whole container?", a: "Gas" },
        { q: "What is it called when a solid turns into a liquid?", a: "Melting" },
        { q: "What is it called when a liquid turns into a gas?", a: "Evaporating (boiling)" },
        { q: "Melting ice is a ____ change (form only).", a: "Physical" },
        { q: "Burning wood is a ____ change (it makes a new substance).", a: "Chemical" },
        { q: "The tiny particles all matter is made of are ____.", a: "Atoms" },
        { q: "A substance made of only ONE kind of atom is an ____.", a: "Element" },
        { q: "When a gas cools into a liquid, it is called ____.", a: "Condensing" },
        { q: "True or False: air is matter.", a: "True — it has mass and takes up space" }
      ]
    },
    10: {
      title: "The Periodic Table & Atomic Structure", emoji: "🧪",
      intro: "Every atom is a tiny solar system with a center and moving parts. Meet the particles inside — and the amazing table that organises every element in the universe.",
      learn: [
        "An atom has a tiny center called the nucleus, holding protons (positive) and neutrons (no charge), with electrons (negative) whizzing around it.",
        "The number of protons is the atomic number — it tells you which element the atom is.",
        "The periodic table lists all the elements in order of atomic number, in rows (periods) and columns (groups).",
        "Elements in the same group behave in similar ways. Most elements are metals; a few are non-metals.",
        "Everything is made from about 118 known elements — like Hydrogen (H), Oxygen (O), Carbon (C) and Gold (Au)."
      ],
      activity: "🧪 Element Hunt: Find 5 elements around your home — aluminium (Al) in foil, copper (Cu) in wires, oxygen (O) you breathe. Look up each one's symbol!",
      questions: [
        { q: "What is the tiny center of an atom called?", a: "The nucleus" },
        { q: "Which particle in the atom is positive?", a: "The proton" },
        { q: "Which particle has no charge?", a: "The neutron" },
        { q: "Which particle is negative and moves around the nucleus?", a: "The electron" },
        { q: "The number of protons in an atom is its ____.", a: "Atomic number" },
        { q: "What chart arranges all the elements in order?", a: "The periodic table" },
        { q: "Rows in the periodic table are ____; columns are ____.", a: "Periods; groups" },
        { q: "What is the chemical symbol for Oxygen?", a: "O" },
        { q: "What is the chemical symbol for Hydrogen?", a: "H" },
        { q: "Are most elements metals or non-metals?", a: "Metals" },
        { q: "About how many elements are known?", a: "About 118" },
        { q: "What does the atomic number tell you?", a: "Which element the atom is (its number of protons)" }
      ]
    },
    11: {
      title: "Bonds, Compounds & Reactions", emoji: "🔬",
      intro: "Atoms rarely stay alone — they join up to build everything from water to DNA. Let's see how atoms bond, react, and even fizz.",
      learn: [
        "When atoms join, they form molecules. A compound is two or more DIFFERENT elements joined together, like water (H₂O).",
        "Atoms bond by sharing or swapping electrons: in a covalent bond they SHARE electrons; in an ionic bond one atom GIVES electrons to another.",
        "A chemical reaction rearranges atoms into new substances. We write it as an equation: reactants → products.",
        "In a reaction, atoms are never created or destroyed — this is the conservation of mass.",
        "Acids (like lemon juice) and bases (like soap) are opposites. The pH scale (0–14) measures how acidic or basic something is; 7 is neutral."
      ],
      activity: "🔬 Kitchen Reaction: Mix baking soda (a base) with vinegar (an acid). The fizzing is a chemical reaction making carbon dioxide gas — atoms rearranging before your eyes!",
      questions: [
        { q: "When atoms join together, they form ____.", a: "Molecules" },
        { q: "A substance made of two or more DIFFERENT elements joined is a ____.", a: "Compound" },
        { q: "What is the chemical formula for water?", a: "H₂O" },
        { q: "In a ____ bond, atoms SHARE electrons.", a: "Covalent" },
        { q: "In an ____ bond, one atom gives electrons to another.", a: "Ionic" },
        { q: "In a chemical equation, the starting substances are the ____.", a: "Reactants" },
        { q: "The new substances made in a reaction are the ____.", a: "Products" },
        { q: "Atoms are never created or destroyed — this is conservation of ____.", a: "Mass" },
        { q: "The scale that measures acids and bases is the ____ scale.", a: "pH" },
        { q: "On the pH scale, what number is neutral?", a: "7" },
        { q: "Is lemon juice an acid or a base?", a: "An acid" },
        { q: "Mixing vinegar and baking soda produces which gas?", a: "Carbon dioxide" }
      ]
    },
    12: {
      title: "Reactions, the Mole & Modern Chemistry", emoji: "⚛️",
      intro: "Time to think like a real chemist — counting atoms by the trillion, balancing reactions, and seeing chemistry at work all around you.",
      learn: [
        "Reactions come in types: synthesis (combining), decomposition (breaking apart) and combustion (burning, which needs oxygen).",
        "Chemists count particles in huge groups called moles — one mole is about 6.02 × 10²³ particles (Avogadro's number), a 'chemist's dozen'.",
        "A balanced equation has the same number of each atom on both sides — obeying the conservation of mass.",
        "Organic chemistry is the chemistry of carbon, the element in all living things, plastics and fuels.",
        "Chemistry is everywhere: medicines, batteries, cleaning, cooking and new materials all come from understanding reactions."
      ],
      activity: "⚗️ Rust Watch: Leave a steel nail in a little water for a few days. The reddish rust is iron reacting with oxygen and water — a slow reaction called oxidation.",
      questions: [
        { q: "A reaction that combines substances into one is ____.", a: "Synthesis (a combination reaction)" },
        { q: "A reaction that breaks a substance apart is ____.", a: "Decomposition" },
        { q: "Burning, which needs oxygen, is called ____.", a: "Combustion" },
        { q: "Chemists count particles in groups called ____.", a: "Moles" },
        { q: "About how many particles are in one mole (Avogadro's number)?", a: "About 6.02 × 10²³" },
        { q: "A ____ equation has the same number of each atom on both sides.", a: "Balanced" },
        { q: "The chemistry of carbon and living things is ____ chemistry.", a: "Organic" },
        { q: "Which element is found in all living things, plastics and fuels?", a: "Carbon" },
        { q: "Rust forms when iron reacts with oxygen and water — this is called ____.", a: "Oxidation (rusting)" },
        { q: "Balanced equations obey the conservation of ____.", a: "Mass" },
        { q: "Name one everyday use of chemistry.", a: "Medicine, batteries, cooking, cleaning, or new materials" },
        { q: "Does combustion (burning) need oxygen?", a: "Yes" }
      ]
    }
  };

  for (var g = 9; g <= 12; g++) {
    if (LESSONS[g] && CHEMISTRY[g]) LESSONS[g].chemistry = CHEMISTRY[g];
  }
})();
