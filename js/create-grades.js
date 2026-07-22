// BrightSprouts Academy — Creature Maker and Build It!, made different for each of Grades 1–5.
//
// Creature Maker keeps the same toy at every grade (restricting the parts would just make it less
// fun) but the science around it climbs: describe → habitat → adaptation → classify →
// life cycle and food web.
//
// Build It! unlocks machines cumulatively, so a grade always keeps everything it had before:
//   G1 house, car · G2 +ship, train · G3 +bridge, castle · G4 +airplane, helicopter
//   G5 +rocket, robot — all ten. Both subjects end after Grade 5.
(function () {
  if (typeof LESSONS === "undefined") return;

  var CREATE = {
    1: {
      title: "Creature Maker: Name & Describe", emoji: "🎨",
      intro: "Invent a creature nobody has ever seen — then find the words to describe it.",
      learn: [
        "Build your creature by choosing its body, eyes, wings, hat and colour.",
        "Describing words (adjectives) tell us what something is like: furry, spotted, tall, tiny, striped.",
        "Colour, size and shape are the first things we notice about any living thing.",
        "Give your creature a name. Names can be silly or serious — it is your creature!",
        "Move your mouse or finger across the picture and your creature will lean towards you."
      ],
      activity: "🎨 Activity Sheet — Three Describing Words: Make a creature, then write three describing words for it — one for colour, one for size and one for how it feels to touch. Draw it and label those three things.",
      magicMaker: true
    },
    2: {
      title: "Creature Maker: Where It Lives", emoji: "🏡",
      intro: "Every animal belongs somewhere. Build a creature, then work out the home that would suit it.",
      learn: [
        "A habitat is the place where an animal finds food, water and shelter.",
        "Habitats include forest, desert, ocean, mountain, grassland and the icy poles.",
        "An animal's body suits its home: thick fur for the cold, wide feet for soft sand, gills for water.",
        "Every living thing needs the same four things — food, water, air and shelter.",
        "Choose a scene for your creature. That scene is its habitat."
      ],
      activity: "🏡 Activity Sheet — Habitat Card: Make a creature and pick its habitat. Write what it eats, where it finds water, and where it sleeps. Then explain one body part that helps it live there.",
      magicMaker: true
    },
    3: {
      title: "Creature Maker: Adaptations", emoji: "🦎",
      intro: "Nothing on an animal is there by accident. Give every part of your creature a reason.",
      learn: [
        "An adaptation is a body part or behaviour that helps an animal survive where it lives.",
        "Wings for flying, claws for digging, big ears for hearing, camouflage for hiding.",
        "Structure follows function — the shape of a body part tells you the job it does.",
        "An animal with the wrong adaptations for its habitat will struggle to survive.",
        "Think like a scientist: for each part you add, ask 'what is that FOR?'"
      ],
      activity: "🦎 Activity Sheet — Why That Part? Make a creature, then label three body parts. For each one, write what it helps the creature do and which habitat it suits.",
      magicMaker: true
    },
    4: {
      title: "Creature Maker: Classify It", emoji: "🔬",
      intro: "Scientists sort millions of living things into groups. Now sort yours.",
      learn: [
        "Classification means sorting living things into groups by the features they share.",
        "Vertebrates have a backbone; invertebrates do not.",
        "Diet groups: herbivores eat plants, carnivores eat animals, omnivores eat both.",
        "Warm-blooded animals hold a steady body temperature; cold-blooded ones change with their surroundings.",
        "Sorting is how scientists make sense of the natural world — and every choice needs a reason."
      ],
      activity: "🔬 Activity Sheet — Classification Card: Make a creature and fill in four rows — vertebrate or invertebrate, herbivore/carnivore/omnivore, warm or cold blooded, and where it lives. Give one piece of evidence for each answer.",
      magicMaker: true
    },
    5: {
      title: "Creature Maker: Life Cycle & Food Web", emoji: "🔄",
      intro: "Your creature is born, grows, and fits into a web of who eats whom. Map it out.",
      learn: [
        "A life cycle is the set of stages a living thing passes through: born, grow, reproduce, die.",
        "Cycles differ: some animals hatch from eggs, some are born live, some change completely through metamorphosis.",
        "A food chain shows who eats whom, and the energy in it starts with the Sun.",
        "Producers make their own food, consumers eat other living things, and decomposers break down the dead.",
        "Every creature has a role in its ecosystem — remove one and the others are affected."
      ],
      activity: "🔄 Activity Sheet — Cycle & Chain: Draw your creature's life cycle in four stages. Then place it in a food chain with at least three links, starting from the Sun.",
      magicMaker: true
    }
  };

  var ENGINEER = {
    1: {
      title: "Build It!: First Machines", emoji: "🔧",
      projects: ["house", "car"],
      intro: "Engineers build the world. Start with two things you see every single day.",
      learn: [
        "An engineer designs and builds things that solve a problem.",
        "Big things are put together one part at a time, in the right order.",
        "Every part has a job: walls hold a house up, a roof keeps the rain off, wheels let a car roll.",
        "A strong building starts with a solid foundation at the very bottom.",
        "Tap 'Add the next part' to build, then watch your machine come to life!"
      ],
      activity: "🔧 Activity Sheet — Part Hunt: Find a wall, a roof, a wheel and a window in real life. Draw each one and write the job it does."
    },
    2: {
      title: "Build It!: Things That Travel", emoji: "🚢",
      projects: ["house", "car", "ship", "train"],
      intro: "Now build the machines that carry people and things from place to place.",
      learn: [
        "Vehicles move people and goods, and each one suits a different surface: road, rail or water.",
        "A ship's hull is hollow, which traps air — that is why something so heavy still floats.",
        "Trains run on rails that guide them and let the wheels roll with very little friction.",
        "A vehicle needs something to push it along: an engine, a sail catching wind, or a motor.",
        "Engineers test a design, find the problems, then improve it and test again."
      ],
      activity: "🚢 Activity Sheet — Float or Sink: Predict whether five household objects will float, then test them in water and record what happened. Finally explain why a steel ship floats when a steel nail sinks."
    },
    3: {
      title: "Build It!: Big Structures", emoji: "🌉",
      projects: ["house", "car", "ship", "train", "bridge", "castle"],
      intro: "Some structures have to hold up enormous weight without moving at all. Here is how.",
      learn: [
        "A structure must carry its own weight plus whatever sits on it — engineers call that the load.",
        "Arches and triangles are strong shapes because they spread force out instead of concentrating it.",
        "A bridge has to resist being squashed (compression) and being stretched (tension).",
        "Castles were built with thick walls and high towers because their job was defence.",
        "Materials behave differently: stone is strong when squashed, steel is strong when pulled."
      ],
      activity: "🌉 Activity Sheet — Paper Bridge: Span a gap between two books with one sheet of paper and load it with coins. Then fold the same sheet into arches or a zigzag and test again. Record how many coins each design held and explain the difference."
    },
    4: {
      title: "Build It!: Machines That Fly", emoji: "✈️",
      projects: ["house", "car", "ship", "train", "bridge", "castle", "airplane", "helicopter"],
      intro: "Getting a heavy machine into the air takes four forces working against each other.",
      learn: [
        "Flight depends on four forces: lift up, weight down, thrust forward and drag backward.",
        "A wing is shaped so that air flowing over it produces lift.",
        "A propeller or a jet engine provides the thrust that moves the aircraft forward.",
        "A helicopter's rotor is really a spinning wing, which is why it can rise straight up.",
        "Engineers test models in wind tunnels long before building anything full size."
      ],
      activity: "✈️ Activity Sheet — Paper Plane Trials: Fold three different paper plane designs. Fly each one three times and record the distances. Which design flew furthest, and which of the four forces explains why?"
    },
    5: {
      title: "Build It!: Rockets & Robots", emoji: "🚀",
      projects: ["house", "car", "ship", "train", "bridge", "castle", "airplane", "helicopter", "rocket", "robot"],
      intro: "The two hardest builds: one that leaves the planet, and one that thinks for itself.",
      learn: [
        "A rocket pushes hot gas downwards, so the gas pushes the rocket upwards — action and reaction.",
        "Fins keep a rocket flying straight and a pointed nose cone slices through the air.",
        "A robot is a machine that senses its surroundings, decides what to do, and then acts.",
        "Robots are used for jobs that are dangerous, boring and repetitive, or need extreme precision.",
        "Complicated machines are really lots of simpler systems working together."
      ],
      activity: "🚀 Activity Sheet — Design a Robot: Invent a robot that does one real job. Draw it and label its sensor, its power source and its moving part, then write the problem it solves."
    }
  };

  for (var g = 1; g <= 5; g++) {
    if (!LESSONS[g]) continue;
    LESSONS[g].create = CREATE[g];
    var e = ENGINEER[g];
    LESSONS[g].engineer = {
      title: e.title, emoji: e.emoji, intro: e.intro, learn: e.learn, activity: e.activity,
      engineerBuild: true, engProjects: e.projects
    };
  }
})();
