// BrightSprouts Academy — Biology subject for Grades 6–12 (a progressive life-science curriculum).
// Each grade builds on the last: cells → body systems → classifying life → genetics → ecology →
// cell processes → evolution. Every lesson has a hands-on activity and a bank of verifiable
// questions (biology facts are objective) that feed the standard worksheet generator.
(function () {
  if (typeof LESSONS === "undefined") return;
  var BIOLOGY = {
    6: {
      title: "Cells — The Building Blocks of Life", emoji: "🔬",
      intro: "Every living thing — from a giant whale to a tiny blade of grass — is built from cells. Let's meet the smallest unit of life!",
      learn: [
        "All living things are made of cells. Some tiny creatures are just ONE cell; you are made of trillions.",
        "A cell is the smallest unit that can be alive on its own.",
        "Plant and animal cells share parts: a nucleus (control center), cytoplasm (jelly inside), and a cell membrane (the outer skin).",
        "Plant cells have extra parts: a stiff cell wall for support, and chloroplasts that make food from sunlight.",
        "Most cells are far too small to see — you need a microscope."
      ],
      activity: "🔬 Build a Cell: Use a zip-lock bag (membrane), jelly or water (cytoplasm) and small objects for the nucleus and other parts. Label each one!",
      questions: [
        { q: "What is the smallest unit of life?", a: "The cell" },
        { q: "Are living things made of one cell or many?", a: "Some have one cell; many (like you) have trillions" },
        { q: "Which part of the cell is the 'control center'?", a: "The nucleus" },
        { q: "What is the jelly-like substance inside a cell?", a: "Cytoplasm" },
        { q: "What thin layer surrounds a cell and controls what goes in and out?", a: "The cell membrane" },
        { q: "Which extra part do PLANT cells have for support?", a: "A cell wall" },
        { q: "What green part of a plant cell makes food from sunlight?", a: "Chloroplasts" },
        { q: "Do animal cells have a cell wall?", a: "No" },
        { q: "What tool do you need to see most cells?", a: "A microscope" },
        { q: "True or False: a rock is made of cells.", a: "False — only living things are made of cells" },
        { q: "Name two parts found in BOTH plant and animal cells.", a: "Any two of: nucleus, cytoplasm, cell membrane" },
        { q: "Chloroplasts make food using energy from ____.", a: "The Sun (sunlight)" }
      ]
    },
    7: {
      title: "The Human Body & Its Systems", emoji: "🫀",
      intro: "Your body is an amazing team of systems, each with a big job — and they all work together every second of the day.",
      learn: [
        "Cells group into tissues, tissues into organs, and organs into body systems.",
        "The digestive system breaks food into nutrients (mouth → stomach → intestines).",
        "The circulatory system pumps blood with the heart, carrying oxygen and food to every cell.",
        "The respiratory system (lungs) takes in oxygen and breathes out carbon dioxide.",
        "The skeleton supports and protects you, muscles move you, and the nervous system (brain + nerves) is the control network."
      ],
      activity: "🫀 Find Your Pulse: Put two fingers on your wrist and count beats for 15 seconds, then times by 4. Jump for a minute and count again — feel your heart speed up!",
      questions: [
        { q: "Cells group together to form ____.", a: "Tissues" },
        { q: "Which body system breaks down the food you eat?", a: "The digestive system" },
        { q: "Which organ pumps blood around your body?", a: "The heart" },
        { q: "Which system takes in oxygen and removes carbon dioxide?", a: "The respiratory system (lungs)" },
        { q: "What gas do your lungs breathe OUT?", a: "Carbon dioxide" },
        { q: "Which system supports and protects the body with bones?", a: "The skeletal system" },
        { q: "What carries messages between your brain and your body?", a: "Nerves (the nervous system)" },
        { q: "Blood carries oxygen and food to every ____.", a: "Cell" },
        { q: "Which organ is the control center of the nervous system?", a: "The brain" },
        { q: "Put these in order, small to big: organ, cell, tissue, system.", a: "Cell, tissue, organ, system" },
        { q: "What gas does your body need from the air to survive?", a: "Oxygen" },
        { q: "Muscles work with bones to help you ____.", a: "Move" }
      ]
    },
    8: {
      title: "Classifying Life — Kingdoms & Diversity", emoji: "🐾",
      intro: "Millions of different living things share our planet. Scientists sort them into groups so we can understand the incredible diversity of life.",
      learn: [
        "Sorting living things into groups so we can study them is called classification.",
        "Life is split into big groups called kingdoms — including animals, plants, fungi and bacteria.",
        "Animals WITH a backbone are vertebrates (fish, amphibians, reptiles, birds, mammals); those without are invertebrates (insects, worms, jellyfish).",
        "Every species gets a two-part scientific name, like Homo sapiens for humans.",
        "Fungi (like mushrooms) can't make their own food, so they aren't plants; bacteria are single-celled and live almost everywhere."
      ],
      activity: "🐾 Backbone or Not? Make two lists — vertebrates and invertebrates — from animals you know. Which is longer? (Over 95% of all animals are invertebrates!)",
      questions: [
        { q: "Sorting living things into groups is called ____.", a: "Classification" },
        { q: "The largest groups of living things are called ____.", a: "Kingdoms" },
        { q: "An animal WITH a backbone is called a ____.", a: "Vertebrate" },
        { q: "An animal WITHOUT a backbone is called an ____.", a: "Invertebrate" },
        { q: "Name the five groups of vertebrates.", a: "Fish, amphibians, reptiles, birds, mammals" },
        { q: "Is an insect a vertebrate or an invertebrate?", a: "An invertebrate" },
        { q: "What is the two-part scientific name for humans?", a: "Homo sapiens" },
        { q: "Are mushrooms plants?", a: "No — they are fungi" },
        { q: "Can fungi make their own food like plants?", a: "No" },
        { q: "Which kingdom is single-celled and found almost everywhere?", a: "Bacteria" },
        { q: "Which vertebrate group do frogs belong to?", a: "Amphibians" },
        { q: "Are MOST animals vertebrates or invertebrates?", a: "Invertebrates (over 95%)" }
      ]
    },
    9: {
      title: "Genetics & Heredity — Passing on Traits", emoji: "🧬",
      intro: "Why do you look a little like your parents? The answer is written in a tiny molecule inside almost every cell: DNA.",
      learn: [
        "Heredity is how living things pass traits (like eye colour) from parents to offspring.",
        "Instructions for life are stored in DNA, a molecule shaped like a twisted ladder — a double helix.",
        "DNA is packed into chromosomes; a section of DNA that codes for a trait is a gene.",
        "You get one copy of each gene from each parent. Different versions are alleles — some dominant, some recessive.",
        "Gregor Mendel, studying pea plants in the 1860s, discovered the basic rules of inheritance."
      ],
      activity: "🧬 Trait Survey: Check family or friends for traits like tongue-rolling or attached vs free earlobes. Which is more common? Every trait comes from the genes you inherited.",
      questions: [
        { q: "Passing traits from parents to offspring is called ____.", a: "Heredity (inheritance)" },
        { q: "What molecule stores the instructions for life?", a: "DNA" },
        { q: "What shape is a DNA molecule?", a: "A double helix (a twisted ladder)" },
        { q: "A section of DNA that codes for a trait is a ____.", a: "Gene" },
        { q: "DNA is packaged into structures called ____.", a: "Chromosomes" },
        { q: "How many copies of each gene do you get from each parent?", a: "One copy from each parent" },
        { q: "A gene version that shows even with one copy is ____.", a: "Dominant" },
        { q: "A gene version hidden unless you have two copies is ____.", a: "Recessive" },
        { q: "Which scientist discovered inheritance using pea plants?", a: "Gregor Mendel" },
        { q: "Different versions of the same gene are called ____.", a: "Alleles" },
        { q: "Do you inherit your genes from your parents or your friends?", a: "Your parents" },
        { q: "Eye colour and hair colour are examples of inherited ____.", a: "Traits" }
      ]
    },
    10: {
      title: "Ecology — Life & Its Environment", emoji: "🌍",
      intro: "No living thing lives alone. Ecology explores how plants, animals and their surroundings all connect in a web of life.",
      learn: [
        "Ecology is the study of how living things interact with each other and their environment.",
        "A food chain shows who eats whom; energy flows from the Sun to producers to consumers.",
        "Producers (plants) make their own food; consumers eat others; decomposers (fungi, bacteria) break down dead things and recycle nutrients.",
        "An ecosystem is all the living and non-living things in an area; large regions with a similar climate are biomes (desert, rainforest, tundra).",
        "Living things depend on each other — relationships like predator/prey keep nature in balance."
      ],
      activity: "🌍 Build a Food Web: Pick a habitat (a pond, a forest) and draw arrows from each living thing to what eats it. What happens to the whole web if one predator disappears?",
      questions: [
        { q: "The study of how living things interact with their environment is ____.", a: "Ecology" },
        { q: "A diagram of who eats whom is a ____.", a: "Food chain" },
        { q: "Where does the energy in almost every food chain start?", a: "The Sun" },
        { q: "Organisms that make their own food (like plants) are ____.", a: "Producers" },
        { q: "Organisms that eat other living things are ____.", a: "Consumers" },
        { q: "Organisms that break down dead things and recycle nutrients are ____.", a: "Decomposers" },
        { q: "All the living and non-living things in an area form an ____.", a: "Ecosystem" },
        { q: "A large region with a certain climate and life (like a desert) is a ____.", a: "Biome" },
        { q: "Name a decomposer.", a: "Fungi (mushrooms) or bacteria" },
        { q: "An animal that hunts another is a ____; the hunted one is the ____.", a: "Predator; prey" },
        { q: "True or False: plants are consumers.", a: "False — plants are producers" },
        { q: "In a food chain, energy flows from producers to ____.", a: "Consumers" }
      ]
    },
    11: {
      title: "Cell Processes — Photosynthesis & Respiration", emoji: "🍃",
      intro: "Deep inside every cell, tiny machines are hard at work capturing and releasing energy. Let's look at the two great processes that power all life.",
      learn: [
        "Cells contain tiny 'organs' called organelles: the nucleus (DNA), mitochondria (energy) and, in plants, chloroplasts.",
        "Photosynthesis: plants use sunlight, water and carbon dioxide to make glucose (sugar) and release oxygen. It happens in chloroplasts.",
        "Cellular respiration: cells break down glucose with oxygen to release energy, giving off carbon dioxide and water. It happens in mitochondria.",
        "Photosynthesis and respiration are opposites that balance each other — one stores energy, the other releases it.",
        "Cells make new cells by dividing: mitosis makes two identical cells for growth and repair."
      ],
      activity: "🍃 Leaf in the Sun: Put a fresh leaf in a clear cup of water in bright sunlight. After a while, tiny bubbles appear on the leaf — that's oxygen from photosynthesis!",
      questions: [
        { q: "Tiny structures inside a cell that each do a special job are called ____.", a: "Organelles" },
        { q: "Which organelle is the cell's powerhouse, releasing energy?", a: "The mitochondria" },
        { q: "In which organelle does photosynthesis happen?", a: "The chloroplast" },
        { q: "Photosynthesis uses sunlight, water and ____ to make sugar.", a: "Carbon dioxide" },
        { q: "What gas do plants RELEASE during photosynthesis?", a: "Oxygen" },
        { q: "What sugar does photosynthesis produce?", a: "Glucose" },
        { q: "Cellular respiration breaks down glucose to release ____.", a: "Energy" },
        { q: "What gas does respiration give off?", a: "Carbon dioxide" },
        { q: "Photosynthesis stores energy; respiration ____ it.", a: "Releases" },
        { q: "Cell division that makes two identical cells for growth is ____.", a: "Mitosis" },
        { q: "Which process happens in mitochondria: photosynthesis or respiration?", a: "Respiration" },
        { q: "Plants photosynthesise — do they also respire?", a: "Yes — all living cells respire" }
      ]
    },
    12: {
      title: "Evolution & Modern Biology", emoji: "🦒",
      intro: "How did Earth end up with millions of different living things? The big idea that ties all of biology together is evolution.",
      learn: [
        "Evolution is the change in living things over many generations — it explains the huge variety of life on Earth.",
        "Charles Darwin proposed natural selection: individuals with helpful traits survive and reproduce more, passing those traits on.",
        "'Survival of the fittest' means the best-SUITED survive (not the strongest). Over long times, small changes can form new species.",
        "Evidence for evolution comes from fossils, shared body structures, and DNA similarities between species.",
        "Modern biology puts this knowledge to work in medicine, genetics and biotechnology."
      ],
      activity: "🦒 Adaptation Detective: Pick an animal and list how its body suits where it lives (a polar bear's fur, a camel's hump). Each adaptation is evolution at work.",
      questions: [
        { q: "The change in living things over many generations is ____.", a: "Evolution" },
        { q: "Which scientist proposed the theory of natural selection?", a: "Charles Darwin" },
        { q: "The idea that better-suited individuals survive and reproduce is ____.", a: "Natural selection" },
        { q: "'Survival of the fittest' means the best-____ survive, not the strongest.", a: "Suited (adapted)" },
        { q: "A trait that helps a living thing survive in its environment is an ____.", a: "Adaptation" },
        { q: "Name one kind of evidence for evolution.", a: "Fossils, shared body structures, or DNA similarities" },
        { q: "Over long times, small changes can lead to new ____.", a: "Species" },
        { q: "Preserved remains of ancient life that show evolution are ____.", a: "Fossils" },
        { q: "A camel's hump and a polar bear's thick fur are examples of ____.", a: "Adaptations" },
        { q: "Does evolution happen quickly in one lifetime, or slowly over many generations?", a: "Slowly, over many generations" },
        { q: "Comparing ____ between species shows how closely related they are.", a: "DNA" },
        { q: "Modern biology applies genetics in medicine and ____.", a: "Biotechnology" }
      ]
    }
  };

  for (var g = 6; g <= 12; g++) {
    if (LESSONS[g] && BIOLOGY[g]) LESSONS[g].biology = BIOLOGY[g];
  }
})();
