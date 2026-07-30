// BrightSprouts Academy: STEM Activities for Kids (category 38).
//
// Twenty hands-on Science, Technology, Engineering and Math activities a family can do together
// with things most kitchens and craft drawers already have. Every one names the idea it teaches,
// so a grown-up can see the point before starting, and every one that needs a grown-up's hands
// (heat, an oven, a needle, a drop height, launching something) says so IN the step, the same
// house rule the paper activities and unplugged computer science activities already follow.
//
// Structure per activity: { name, emoji, theme, level, mins, teaches, needs[], steps[], tip, art }
// `art` draws the idea in a 200x150 box using window.PaperArt, the site's shared SVG kit, so this
// looks like the same family of illustration as the rest of the site, not a new style.
//
// Written without em dashes.
(function () {
  if (typeof LESSONS === "undefined") return;

  var STEM_THEMES = [
    { n: "Kitchen Chemistry", e: "⚗️", colour: "#e2453b" },
    { n: "Forces & Motion",   e: "⚡",       colour: "#4d96ff" },
    { n: "Build & Engineer",  e: "🔧", colour: "#2f9e44" },
    { n: "Math & Patterns",   e: "📐", colour: "#7c5cbf" }
  ];

  // ==================== The 20 activities ====================
  var STEM_ACTIVITIES = [

    // ---------- Kitchen Chemistry ----------
    {
      name: "Baking Soda Volcano", emoji: "🌋", theme: 0, level: "Easy", mins: 15,
      teaches: "Chemical reactions: mixing two things can make a brand new gas",
      needs: ["A small cup or bottle", "Baking soda", "Vinegar", "Red food colouring (optional)", "A tray, or a mound of dirt or clay outside"],
      steps: [
        "Stand the cup on the tray, or build a mound of dirt or clay around it outside so only the top opening shows.",
        "Spoon 2 to 3 tablespoons of baking soda into the cup.",
        "Stir a few drops of red food colouring into a cup of vinegar.",
        "Pour the vinegar into the cup all at once, then step back and watch it erupt.",
        "Talk about what you saw, then rinse the cup and do it again with more or less baking soda."
      ],
      tip: "The bubbles are carbon dioxide gas, the same gas that fizzes in soda pop, made the instant the acid (vinegar) meets the base (baking soda)."
    },
    {
      name: "Invisible Ink", emoji: "🍋", theme: 0, level: "Easy", mins: 20,
      teaches: "Chemistry you cannot see: heat can reveal a hidden reaction",
      needs: ["Half a lemon", "A little water", "A small bowl", "A cotton swab or thin paintbrush", "White paper", "A lamp with a bulb, or a hair dryer"],
      steps: [
        "Squeeze the lemon into the bowl and stir in a few drops of water.",
        "Dip the swab in the lemon juice and write a secret message on the paper.",
        "Let it dry completely. The message disappears.",
        "Ask an adult to hold the paper close to a warm (not hot) lightbulb, or warm it gently with a hair dryer. Never use a candle, match or stove.",
        "Watch your message turn light brown and reappear as it warms up."
      ],
      tip: "Safety: heat comes only from a lamp bulb or a hair dryer on its warm setting, always with an adult holding the paper. No open flames."
    },
    {
      name: "Milk Colour Explosion", emoji: "🥛", theme: 0, level: "Easy", mins: 10,
      teaches: "Surface tension, and how soap breaks it",
      needs: ["A shallow plate", "Whole milk", "Food colouring, several colours", "A cotton swab", "Dish soap"],
      steps: [
        "Pour milk into the plate, just enough to cover the bottom.",
        "Drip 4 or 5 different colours of food colouring around the plate, not in the middle.",
        "Dip only the tip of the swab into dish soap.",
        "Touch the soapy swab to the very centre of the milk and hold it there.",
        "Watch the colours burst outward and swirl on their own."
      ],
      tip: "Milk is full of tiny drops of fat. Soap grabs onto that fat and races through it, dragging the colours along for the ride."
    },
    {
      name: "Rainbow Density Tower", emoji: "🌈", theme: 0, level: "Medium", mins: 20,
      teaches: "Density: some liquids are heavier for their size than others",
      needs: ["A tall clear glass or jar", "Honey", "Dish soap", "Water, coloured with food colouring", "Vegetable oil", "A spoon"],
      steps: [
        "Pour honey into the glass first, about a quarter full. Let it settle.",
        "Pour dish soap slowly down the back of a spoon held just above the honey, so it lands gently in a layer on top.",
        "Do the same with the coloured water, then the vegetable oil, each one poured slowly over the spoon.",
        "Watch the four layers sit on top of each other instead of mixing.",
        "Gently tilt the glass and watch the layers wobble but settle back into their bands."
      ],
      tip: "The heaviest liquid for its size sinks to the bottom and the lightest floats on top. That is density, and it is the same reason oil floats on vinegar in salad dressing."
    },
    {
      name: "Oobleck", emoji: "🟤", theme: 0, level: "Easy", mins: 10,
      teaches: "States of matter: a mixture that acts like a solid AND a liquid",
      needs: ["2 cups cornstarch", "1 cup water", "A big bowl", "Food colouring (optional)", "A tray to catch drips"],
      steps: [
        "Pour the cornstarch into the bowl.",
        "Add the water a little at a time, mixing with your hands as you go.",
        "Stir in food colouring if you are using it.",
        "Punch it fast: it feels solid. Now let your hand rest still on top: it feels liquid.",
        "Scoop some up and let it drip slowly through your fingers."
      ],
      tip: "Oobleck is neither a true solid nor a true liquid. Moving fast locks its tiny particles together, but moving slowly lets them flow around each other."
    },

    // ---------- Forces & Motion ----------
    {
      name: "Bending Water with Static", emoji: "⚡", theme: 1, level: "Easy", mins: 10,
      teaches: "Static electricity: rubbing can move an invisible charge",
      needs: ["A balloon", "Dry hair", "A tap you can turn to a thin, steady trickle"],
      steps: [
        "Turn the tap on to a thin, steady stream of water.",
        "Blow up the balloon and tie it off.",
        "Rub the balloon on your hair, back and forth, about 15 times.",
        "Slowly bring the balloon close to the water stream without touching it.",
        "Watch the stream bend toward the balloon."
      ],
      tip: "Rubbing pulls extra electrons onto the balloon, giving it a static charge. That charge pulls gently on the water and bends the stream toward it."
    },
    {
      name: "Egg Drop Challenge", emoji: "🥚", theme: 1, level: "Medium", mins: 30,
      teaches: "Force and impact: padding changes how hard a landing hits",
      needs: ["A raw egg", "Straws, cotton balls, tape, cardboard or bubble wrap to build a case", "A tarp or old sheet to catch mess"],
      steps: [
        "Design and build a case around the egg using your materials. There is no single right way: try a few ideas.",
        "Predict out loud whether you think your egg will survive.",
        "An adult chooses a safe drop height and a surface (start low, over the tarp).",
        "Drop the case and check the egg.",
        "If it survives, try again from a bit higher. If it cracks, rebuild and try to fix the weak spot."
      ],
      tip: "Safety: an adult always chooses and supervises the drop height and surface. What matters for the egg is not how far it falls but how quickly it stops. Padding spreads the stop out over more time, which softens the force."
    },
    {
      name: "Paper Airplane Distance Lab", emoji: "✈️", theme: 1, level: "Easy", mins: 20,
      teaches: "Fair testing: changing one thing at a time so you know what worked",
      needs: ["Several sheets of paper", "A tape measure, or footsteps to count", "A notebook to record results"],
      steps: [
        "Fold two or three different paper airplane designs.",
        "Mark a starting line on the floor or ground.",
        "Throw each design the same way, three times each, and write down every distance.",
        "Pick your best design, then change just ONE thing about it (the fold, the paper, or the throw angle) and test again.",
        "Compare the new results to your notes. Did that one change help or hurt?"
      ],
      tip: "Changing only one thing at a time is what makes a test fair. If you change the fold AND the paper AND the throw all at once, you will not know which change actually mattered."
    },
    {
      name: "Balance Point Trick", emoji: "🍴", theme: 1, level: "Easy", mins: 10,
      teaches: "Center of gravity: why some odd shapes balance and others tip",
      needs: ["2 forks", "1 toothpick", "The rim of a glass or cup"],
      steps: [
        "An adult helps interlock the two forks' tines together at an angle, like a V.",
        "Push the toothpick through the gap between the interlocked tines.",
        "Rest the tip of the toothpick on the rim of the glass.",
        "Slide it gently until the whole thing balances without falling.",
        "Give it a gentle nudge and watch it wobble back to balanced instead of falling off."
      ],
      tip: "Most of the forks' weight hangs BELOW the balance point once they are interlocked. Weight hanging low keeps the whole shape steady, which is what center of gravity means."
    },
    {
      name: "Balloon Rocket Zip Line", emoji: "🎈", theme: 1, level: "Medium", mins: 20,
      teaches: "Newton's third law: every push has an equal push back",
      needs: ["A balloon", "A drinking straw", "String, at least 10 feet", "Tape", "Two chairs"],
      steps: [
        "Tie one end of the string to a chair, thread it through the straw, then tie the other end to a second chair across the room, pulled tight.",
        "Blow up the balloon but do not tie it. Pinch the end closed with your fingers.",
        "Tape the balloon to the straw, running along the top.",
        "Slide the whole thing to one end of the string.",
        "Let go of the balloon's end and watch it rocket along the line."
      ],
      tip: "Air rushing out of the back of the balloon pushes the balloon forward the other way. Every action (air going one way) has an equal and opposite reaction (balloon going the other way)."
    },

    // ---------- Build & Engineer ----------
    {
      name: "Spaghetti & Marshmallow Tower", emoji: "🍡", theme: 2, level: "Medium", mins: 25,
      teaches: "Structural engineering: why triangles hold shapes up better than squares",
      needs: ["20 sticks of uncooked spaghetti", "20 mini marshmallows", "A ruler", "A timer"],
      steps: [
        "Set a timer for 15 minutes.",
        "Build the tallest tower you can that stands on its own, using only the spaghetti and marshmallows.",
        "Push spaghetti ends into marshmallows to make joints and triangles wherever you can.",
        "When the timer stops, measure your tower's height with the ruler.",
        "Take it apart and try again. Can you beat your own record?"
      ],
      tip: "Triangles are the strongest shape in engineering because pushing on a triangle cannot squash it out of shape the way pushing on a square can."
    },
    {
      name: "Popsicle Stick Catapult", emoji: "🚀", theme: 2, level: "Medium", mins: 20,
      teaches: "Simple machines: how a lever turns a small push into a big motion",
      needs: ["7 to 9 craft sticks", "4 to 6 rubber bands", "A plastic spoon", "Mini marshmallows or pom-poms to launch"],
      steps: [
        "Stack most of the sticks together and rubber-band both ends tightly. This is the base.",
        "Rubber-band one stick crosswise near one end of the base, standing it up like a ramp.",
        "Tape or rubber-band the spoon to the top of that standing stick.",
        "Wedge the ramp stick firmly between two sticks of the base so it cannot slip.",
        "Load a marshmallow or pom-pom in the spoon, press it down, and let go."
      ],
      tip: "Safety: only launch soft things like marshmallows or pom-poms, and never aim at anyone's face. A catapult is a lever: pressing down near the handle moves the far end a long way, fast."
    },
    {
      name: "Aluminum Foil Boat Challenge", emoji: "🚤", theme: 2, level: "Easy", mins: 15,
      teaches: "Buoyancy: how shape changes how much weight something can hold",
      needs: ["A sheet of aluminum foil, about 12 inches square, per boat", "A large basin or bathtub of water", "Pennies or coins to load as cargo"],
      steps: [
        "Shape a piece of foil into a boat with sides, so water cannot spill straight in.",
        "Float it gently in the water.",
        "Add coins one at a time, counting out loud, until the boat sinks.",
        "Write down how many coins it held.",
        "Build a new shape, wider or with higher sides, and see if you can beat your own number."
      ],
      tip: "A wider, shallower boat pushes more water out of its way, and it is that pushed-away water pushing back that holds the boat (and its cargo) up."
    },
    {
      name: "Cardboard Marble Run", emoji: "🎯", theme: 2, level: "Medium", mins: 30,
      teaches: "Gravity and energy: how a ball turns 'stored up' energy into speed",
      needs: ["Cardboard tubes (paper towel or toilet roll) or strips of cardboard", "Tape", "Scissors", "A marble or small ball", "A wall or big board to build against"],
      steps: [
        "Cut the tubes in half the long way to make open troughs.",
        "Tape the first trough near the top of your wall or board, angled gently downward.",
        "Tape the next trough lower down, angled so a marble rolling out of the first one lands in it.",
        "Keep adding troughs, testing with the marble after each one and adjusting the angles.",
        "Once it runs all the way down without stopping, try making it longer or adding a loop."
      ],
      tip: "The marble starts with stored-up (potential) energy just from being held up high. As it rolls down, that turns into motion (kinetic) energy: the steeper the ramp, the faster it goes."
    },
    {
      name: "Make a Floating Compass", emoji: "🧭", theme: 2, level: "Easy", mins: 15,
      teaches: "Magnetism: turning a needle into a magnet that finds north",
      needs: ["A sewing needle", "A magnet (a fridge magnet works)", "A small piece of cork or foam", "A bowl of water"],
      steps: [
        "An adult hands you the needle carefully, point away from you.",
        "Stroke the needle along the magnet in ONE direction only, about 20 times, lifting the magnet away and starting over each time rather than rubbing back and forth.",
        "Rest the needle flat on the piece of cork or foam.",
        "Float the cork gently in the middle of the bowl of water.",
        "Watch it slowly turn and settle, then check it against a real compass or a map to see if it found north."
      ],
      tip: "Stroking the needle lines up tiny magnetic pieces inside the metal, turning it into a weak magnet. It settles pointing along Earth's own magnetic field, just like a real compass."
    },

    // ---------- Math & Patterns ----------
    {
      name: "Fibonacci Nature Hunt", emoji: "🌻", theme: 3, level: "Easy", mins: 20,
      teaches: "Math patterns hiding in real plants",
      needs: ["A notebook and pencil", "A walk outside, a garden, or a fruit bowl"],
      steps: [
        "Look for spirals in things like pinecones, sunflower seed heads or pineapple skin, and count the spiral arms.",
        "Count the petals on a few different flowers.",
        "Write down every number you count.",
        "Check your list against this pattern: 1, 1, 2, 3, 5, 8, 13, 21, where each number is the two before it added together.",
        "See how many of your counted numbers show up in that list."
      ],
      tip: "That list is called the Fibonacci sequence. It shows up in plants again and again because it is a remarkably efficient way to pack seeds and leaves without wasting space."
    },
    {
      name: "Shadow Clock", emoji: "☀️", theme: 3, level: "Medium", mins: 20,
      teaches: "Measurement and Earth's rotation, using nothing but a stick and the sun",
      needs: ["A stick or pencil", "A sunny spot outside", "Chalk or small stones", "A watch or clock"],
      steps: [
        "Safety: never look directly at the sun.",
        "Push the stick upright into the ground in a sunny, open spot.",
        "Every hour, mark where the tip of the shadow lands with chalk or a stone, and write the time next to it.",
        "Keep going through the day.",
        "By evening, look at the marks together. You have built a working sundial."
      ],
      tip: "The shadow moves because Earth is slowly turning, not because the sun is moving around us. The marks you made line up almost exactly like the numbers on a clock face."
    },
    {
      name: "Symmetry Butterfly Painting", emoji: "🦋", theme: 3, level: "Easy", mins: 15,
      teaches: "Symmetry: making a perfect mirror image",
      needs: ["Paper", "Washable paint", "A paintbrush or spoon"],
      steps: [
        "Fold a piece of paper in half, then open it back up flat.",
        "Paint blobs and lines of colour on only ONE half, close to the fold line.",
        "While the paint is still wet, fold the paper closed along the same crease.",
        "Press firmly all over with your hand or a spoon.",
        "Open it up to reveal a butterfly whose two wings match exactly."
      ],
      tip: "Symmetry means one half is a mirror image of the other. Press-printing while the paint is wet is a guaranteed way to make both wings match, since one side is literally stamped from the other."
    },
    {
      name: "Baking Fractions", emoji: "🧁", theme: 3, level: "Medium", mins: 30,
      teaches: "Fractions you can taste: doubling a recipe means doubling every measurement",
      needs: ["A simple recipe, like pancakes or a dozen muffins", "Measuring cups and spoons", "The recipe's ingredients", "An adult to help with the oven"],
      steps: [
        "Read through the whole recipe together before starting.",
        "Find a measurement in the recipe that is a fraction, such as 1/2 cup or 3/4 teaspoon.",
        "Try doubling the whole recipe: double every single measurement, including the fractions (1/2 cup doubled is 1 cup; 1/4 teaspoon doubled is 1/2 teaspoon).",
        "Mix it together, following the doubled amounts.",
        "An adult handles the oven. Bake, then taste the results of your math."
      ],
      tip: "Doubling a recipe means multiplying every measurement by two, fractions included. Get one fraction wrong and the whole batch tastes off, which is a very tasty way to check your work."
    },
    {
      name: "Graph Your Candy", emoji: "🍬", theme: 3, level: "Easy", mins: 15,
      teaches: "Data and bar graphs: turning a pile of numbers into a picture",
      needs: ["A small bag of multi-coloured candy, like the kind that comes in a mix", "Paper", "A ruler", "Colouring pencils matching the candy colours"],
      steps: [
        "Sort the candy into piles by colour.",
        "Count how many are in each pile.",
        "Draw a grid on paper with one column for each colour.",
        "Colour in one square per candy in that colour's column, building each column up from the bottom.",
        "Compare the finished bars. Which colour has the tallest one? Which has the fewest?"
      ],
      tip: "That stacked picture is called a bar graph. It turns a pile of numbers into something you can understand in one glance, which is exactly why scientists and news reports use them."
    }
  ];

  // ==================== Illustrations ====================
  // Drawn with window.PaperArt, the site's shared SVG kit, so these belong to the same family of
  // illustration as the paper activities and the unplugged computer science activities. The kit
  // is looked up when the picture is drawn, not when this file loads, so script order is safe.
  function art(draw) { return function () { return window.PaperArt.box(draw(window.PaperArt)); }; }

  var STEM_ART = {

    "Baking Soda Volcano": art(function (A) {
      return A.ground(136) +
        A.poly("40,134 160,134 118,64 82,64", "#a98f62") +
        A.poly("82,64 118,64 100,40", "#8a7048") +
        A.circ(100, 44, 8, "#ff9f68") + A.circ(92, 34, 5, "#ffd166") + A.circ(110, 32, 6, "#ff6b9d") +
        A.circ(100, 26, 4, "#ffd166") +
        A.label(100, 128, "fizz!", "#c0392b");
    }),

    "Invisible Ink": art(function (A) {
      return A.ground(134) +
        A.sheet(56, 34, 88, 74, "#fffdf7", -2, 6) +
        A.path("M74 58 Q100 50 126 58", "none", ' stroke="#d9c48a" stroke-width="2" fill="none"') +
        A.path("M74 72 Q100 80 126 72", "none", ' stroke="#d9c48a" stroke-width="2" fill="none"') +
        A.poly("140,90 160,80 172,96 158,112", "#f2d94e") + A.circ(156, 96, 9, "#fff3b0") +
        A.line(150, 78, 156, 70, "#f2d94e", 2) + A.line(166, 78, 172, 70, "#f2d94e", 2) +
        A.label(100, 122, "warm = reveal", "#a89ec4");
    }),

    "Milk Colour Explosion": art(function (A) {
      var cols = ["#ff6b9d", "#4d96ff", "#ffd166", "#6bcb77"];
      var s = A.ell(100, 90, 62, 34, "#fdfaf0") + A.ell(100, 90, 56, 29, "#fffdf7");
      for (var i = 0; i < 4; i++) {
        var ang = i * 90 * Math.PI / 180;
        s += A.circ(100 + Math.cos(ang) * 36, 90 + Math.sin(ang) * 18, 6, cols[i]);
      }
      s += A.path("M76 84 Q100 70 124 84 Q140 96 118 100 Q100 108 82 98 Q64 90 76 84 Z", "none",
        ' stroke="#c9c3d8" stroke-width="1.4" fill="none"');
      return s + A.circ(100, 90, 5, "#fff", ' opacity=".9"');
    }),

    "Rainbow Density Tower": art(function (A) {
      return A.ground(136) +
        A.path("M78 30 L78 128 Q78 136 88 136 L112 136 Q122 136 122 128 L122 30 Z", "#f4f0ff", ' stroke="#d8d2ec" stroke-width="2"') +
        '<clipPath id="stemGlass"><path d="M79 31 L79 127 Q79 135 88 135 L112 135 Q121 135 121 127 L121 31 Z"/></clipPath>' +
        '<g clip-path="url(#stemGlass)">' +
        A.path("M76 108 L124 108 L124 135 L76 135 Z", "#e0b84a") +
        A.path("M76 90 L124 90 L124 108 L76 108 Z", "#cfe0d8") +
        A.path("M76 66 L124 66 L124 90 L76 90 Z", "#4d96ff") +
        A.path("M76 31 L124 31 L124 66 L76 66 Z", "#ffd166") +
        '</g>';
    }),

    "Oobleck": art(function (A) {
      return A.ground(136) +
        A.ell(100, 118, 46, 16, "#e8e2d0") + A.path("M56 118 Q56 92 100 92 Q144 92 144 118 Z", "#f4efe0") +
        A.path("M92 92 Q90 68 96 54 Q100 66 98 92 Z", "#cdbf99") +
        A.circ(96, 50, 4, "#cdbf99") +
        A.label(100, 136, "solid... or liquid?", "#a89ec4");
    }),

    "Bending Water with Static": art(function (A) {
      return A.ground(134) +
        A.ell(64, 60, 22, 26, "#ff6b9d") + A.poly("60,86 68,86 64,94", "#ff6b9d") +
        A.path("M130 34 Q124 70 132 110", "none", ' stroke="#7fd8ff" stroke-width="6" fill="none" stroke-linecap="round"') +
        A.line(80, 60, 108, 44, "#ffd166", 1.6, "3 3") +
        A.star(120, 46, 8, "#ffd166");
    }),

    "Egg Drop Challenge": art(function (A) {
      return A.ground(134) +
        A.sheet(56, 88, 88, 40, "#c9cbd6", 0, 8) +
        A.ell(100, 100, 16, 20, "#fff9ec") +
        A.circ(70, 96, 5, "#e8e2d0") + A.circ(130, 96, 5, "#e8e2d0") + A.circ(70, 116, 5, "#e8e2d0") + A.circ(130, 116, 5, "#e8e2d0") +
        A.line(100, 30, 100, 70, "#b8b2cc", 1.6, "4 3") +
        A.poly("94,66 106,66 100,78", "#b8b2cc");
    }),

    "Paper Airplane Distance Lab": art(function (A) {
      return A.ground(134) +
        A.poly("40,110 160,74 118,86 150,96 108,92 40,110", "#eef2ff", ' stroke="#c9c3d8" stroke-width="1.4"') +
        A.line(40, 118, 160, 118, "#b8b2cc", 1.4, "4 3") +
        A.poly("40,124 40,112 30,118", "#7c5cbf") +
        A.label(100, 132, "how far did it fly?", "#a89ec4");
    }),

    "Balance Point Trick": art(function (A) {
      return A.sheet(70, 96, 60, 8, "#e0dcf0", 0, 4) +
        A.ell(100, 100, 4, 30, "#c9c3d8", 90) +
        A.path("M96 74 L92 96 M100 72 L100 96 M104 74 L108 96", "none", ' stroke="#c9cbd6" stroke-width="3" stroke-linecap="round" fill="none"') +
        A.path("M96 126 L92 104 M100 128 L100 104 M104 126 L108 104", "none", ' stroke="#c9cbd6" stroke-width="3" stroke-linecap="round" fill="none"') +
        A.label(100, 144, "balanced!", "#a89ec4");
    }),

    "Balloon Rocket Zip Line": art(function (A) {
      return A.line(30, 60, 170, 60, "#c9c3d8", 1.6, "3 3") +
        A.ell(100, 66, 26, 20, "#ff9f68") + A.poly("96,86 104,86 100,96", "#ff9f68") +
        A.sheet(84, 60, 32, 5, "#dcd6ee", 0, 2) +
        A.path("M74 66 Q60 66 54 66", "none", ' stroke="#c9c3d8" stroke-width="2" fill="none"') +
        A.circ(48, 66, 3, "#7c5cbf") + A.circ(58, 66, 3, "#7c5cbf");
    }),

    "Spaghetti & Marshmallow Tower": art(function (A) {
      var s = A.ground(136);
      var pts = [[70, 136], [130, 136], [100, 96], [70, 136], [100, 96], [130, 96], [100, 96], [100, 56], [80, 56], [120, 56]];
      for (var i = 0; i + 1 < pts.length; i++) {
        s += A.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], "#e0c88a", 2.4);
      }
      [[70, 136], [130, 136], [100, 96], [130, 96], [80, 56], [120, 56], [100, 56]].forEach(function (p) {
        s += A.circ(p[0], p[1], 6, "#fdfaf0", ' stroke="#e8e2d0" stroke-width="1"');
      });
      return s;
    }),

    "Popsicle Stick Catapult": art(function (A) {
      return A.ground(136) +
        A.sheet(50, 118, 100, 12, "#e0b463", 0, 4) +
        A.line(100, 118, 100, 66, "#e0b463", 8) +
        A.ell(100, 60, 14, 9, "#e2453b") +
        A.circ(146, 40, 8, "#ffd9c0") +
        A.line(120, 55, 142, 44, "#c9c3d8", 1.4, "3 3") +
        A.poly("138,48 148,42 144,52", "#c9c3d8");
    }),

    "Aluminum Foil Boat Challenge": art(function (A) {
      return A.path("M40 100 Q100 130 160 100 L150 116 Q100 138 50 116 Z", "#c9cbd6", ' stroke="#9aa4b8" stroke-width="1.5"') +
        A.circ(84, 98, 6, "#f2c14e") + A.circ(100, 96, 6, "#f2c14e") + A.circ(116, 98, 6, "#f2c14e") +
        A.path("M30 118 Q60 112 90 118 T150 118 T180 118", "none", ' stroke="#8fd3f4" stroke-width="2.4" fill="none"');
    }),

    "Cardboard Marble Run": art(function (A) {
      return A.sheet(30, 24, 20, 100, "#e8e2d0", 0, 4) +
        A.path("M50 34 L128 54", "none", ' stroke="#c9a86a" stroke-width="10" fill="none" stroke-linecap="round"') +
        A.path("M60 68 L138 92", "none", ' stroke="#c9a86a" stroke-width="10" fill="none" stroke-linecap="round"') +
        A.path("M50 106 L128 128", "none", ' stroke="#c9a86a" stroke-width="10" fill="none" stroke-linecap="round"') +
        A.circ(58, 32, 7, "#4d96ff") +
        A.ground(140);
    }),

    "Make a Floating Compass": art(function (A) {
      return A.ell(100, 106, 58, 22, "#8fd3f4") + A.ell(100, 106, 52, 18, "#a6e3ff") +
        A.ell(100, 100, 13, 7, "#e0dcc4") +
        A.line(86, 100, 114, 100, "#c0392b", 2.2) + A.circ(114, 100, 2.4, "#c0392b") +
        A.label(100, 78, "N", "#5d3fa0") + A.label(100, 128, "S", "#5d3fa0");
    }),

    "Fibonacci Nature Hunt": art(function (A) {
      var s = A.ground(136) + A.line(100, 136, 100, 84, "#57bd69", 4);
      var cols = ["#ffd166", "#e2453b", "#7c5cbf", "#4d96ff", "#57bd69"];
      for (var i = 0; i < 8; i++) {
        var ang = i * 137.5 * Math.PI / 180;
        var r = 6 + i * 3.6;
        s += A.circ(100 + Math.cos(ang) * r, 70 + Math.sin(ang) * r, 5, cols[i % cols.length]);
      }
      return s;
    }),

    "Shadow Clock": art(function (A) {
      return A.ground(136, "#f2ecd8") +
        A.circ(150, 30, 16, "#ffd166") +
        A.line(100, 136, 100, 66, "#8a7048", 3) +
        A.poly("100,136 100,100 60,132", "#dcd4c0") +
        A.circ(80, 128, 2.4, "#a98f62") + A.circ(64, 118, 2.4, "#a98f62") + A.circ(96, 132, 2.4, "#a98f62");
    }),

    "Symmetry Butterfly Painting": art(function (A) {
      return A.line(100, 30, 100, 130, "#e6e0f5", 1.4, "3 3") +
        A.path("M100 50 Q60 40 50 70 Q46 96 100 90 Z", "#ff6b9d") +
        A.path("M100 50 Q140 40 150 70 Q154 96 100 90 Z", "#ff6b9d") +
        A.path("M100 90 Q66 92 62 112 Q60 128 100 118 Z", "#4d96ff") +
        A.path("M100 90 Q134 92 138 112 Q140 128 100 118 Z", "#4d96ff") +
        A.line(100, 46, 100, 118, "#2d2a4a", 2);
    }),

    "Baking Fractions": art(function (A) {
      return A.ground(136) +
        A.path("M64 74 Q64 130 100 130 Q136 130 136 74 Z", "#fdfaf0", ' stroke="#e8e2d0" stroke-width="2"') +
        A.ell(100, 74, 36, 10, "#f4efe0") +
        A.sheet(90, 40, 20, 28, "#e0dcf0", 0, 4) +
        A.label(100, 56, "1/2", "#7c5cbf");
    }),

    "Graph Your Candy": art(function (A) {
      var cols = ["#e2453b", "#ffd166", "#4d96ff", "#57bd69"];
      var heights = [3, 5, 2, 4];
      var s = A.line(50, 130, 150, 130, "#8a86a8", 2);
      cols.forEach(function (c, i) {
        var x = 60 + i * 24;
        for (var h = 0; h < heights[i]; h++) {
          s += '<rect x="' + (x - 8) + '" y="' + (126 - h * 13) + '" width="16" height="11" rx="2" fill="' + c + '"/>';
        }
      });
      return s;
    })
  };
  STEM_ACTIVITIES.forEach(function (a) { a.art = STEM_ART[a.name] || null; });

  window.STEM_ACTIVITIES = STEM_ACTIVITIES;
  window.STEM_THEMES = STEM_THEMES;

  // Rendered by app.js when a lesson carries stemList. Prints as well as it displays.
  window.StemActivities = {
    html: function () {
      function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
          .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }
      var counts = { Easy: 0, Medium: 0, Hard: 0 };
      STEM_ACTIVITIES.forEach(function (a) { counts[a.level] = (counts[a.level] || 0) + 1; });
      return '<div class="se-list">' +
        '<p class="se-intro">' + STEM_ACTIVITIES.length + ' activities to do together: ' +
          counts.Easy + ' easy, ' + (counts.Medium || 0) + ' medium' + (counts.Hard ? ", " + counts.Hard + " hard" : "") + '.</p>' +
        STEM_ACTIVITIES.map(function (a, i) {
          var th = STEM_THEMES[a.theme] || {};
          return '<div class="se-item">' +
            '<h4><span class="se-num">' + (i + 1) + '</span>' + esc(a.emoji) + ' ' + esc(a.name) +
              '<i class="se-theme" style="--sec:' + th.colour + '">' + th.e + ' ' + esc(th.n) + '</i>' +
              '<i class="se-lvl ' + a.level.toLowerCase() + '">' + a.level + '</i>' +
              '<i class="se-mins">⏱ ' + a.mins + ' min</i></h4>' +
            '<p class="se-teaches"><b>Teaches:</b> ' + esc(a.teaches) + '</p>' +
            '<div class="se-cols">' +
              '<div class="se-side">' +
                (a.art ? '<div class="se-art">' + a.art() + '</div>' : '') +
                '<div class="se-needs"><h5>🧺 What you need</h5><ul>' +
                  a.needs.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") +
                '</ul></div>' +
              '</div>' +
              '<div class="se-steps"><h5>📋 What to do</h5><ol>' +
                a.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") +
              '</ol></div>' +
            '</div>' +
            (a.tip ? '<p class="se-tip">💡 <b>Why it works:</b> ' + esc(a.tip) + '</p>' : '') +
          '</div>';
        }).join("") + '</div>';
    }
  };

  // ==================== the lessons ====================
  LESSONS[38] = {
    activities: {
      title: "STEM Activities for Kids", emoji: "🧪", band: "Grades K to 6",
      intro: "Twenty things to do together that turn a kitchen table into a lab. Every one teaches a real idea in Science, Technology, Engineering or Math, and every one uses things a family already has or can easily find.",
      learn: [
        "STEM stands for Science, Technology, Engineering and Math: four ways of understanding and building the world, and they overlap far more than the four separate words suggest.",
        "Every activity below says which idea it teaches. Read that first, do the activity, then talk about what happened and why.",
        "Green is Easy, amber is Medium. None of these need anything you would have to go and buy specially.",
        "A few need an adult's hands: heat, an oven, a needle, a drop height, or launching something. Those steps say so plainly, right where they happen.",
        "The most important STEM habit of all is not being afraid when something does not work the first time. Rebuild it, change one thing, and try again."
      ],
      stemList: true,
      activity: "🏆 Pick Five: choose five activities, one from each level you can find, and try to do one a week for five weeks. Keep notes on what surprised you most.",
      questions: [
        { q: "What do the letters in STEM stand for?", a: "Science, Technology, Engineering and Math" },
        { q: "In the Baking Soda Volcano, what gas do the bubbles contain?", a: "Carbon dioxide" },
        { q: "What is it called when a mixture acts like both a solid and a liquid, like Oobleck?", a: "A non-Newtonian fluid (a mixture that is neither purely solid nor liquid)" },
        { q: "In the Rainbow Density Tower, why do the liquids sit in layers instead of mixing?", a: "They have different densities; heavier liquids sink below lighter ones" },
        { q: "What is it called when only one thing is changed between two tests, to keep the test fair?", a: "A fair test (a controlled or variable test)" },
        { q: "In the Egg Drop Challenge, what matters most: how far the egg falls, or how fast it stops?", a: "How fast it stops" },
        { q: "What shape makes the strongest tower in the Spaghetti Tower activity?", a: "A triangle" },
        { q: "A catapult is an example of what kind of tool?", a: "A simple machine (a lever)" },
        { q: "In the Aluminum Foil Boat Challenge, what force pushes the boat upward and keeps it floating?", a: "Buoyancy" },
        { q: "Why does a balloon rocket zoom forward when air rushes out the back?", a: "Newton's third law: every action has an equal and opposite reaction" },
        { q: "What is the name for the sequence 1, 1, 2, 3, 5, 8, 13, found in pinecones and sunflowers?", a: "The Fibonacci sequence" },
        { q: "In the Shadow Clock activity, why does the shadow move through the day?", a: "Earth is turning (rotating)" },
        { q: "What word describes a shape where one half is a mirror image of the other, like the painted butterfly?", a: "Symmetry" },
        { q: "If a recipe needs 1/4 cup and you double it, how much do you need?", a: "1/2 cup" },
        { q: "What is a picture made of coloured bars, used to compare counted amounts, called?", a: "A bar graph" }
      ]
    },

    method: {
      title: "Think Like a Scientist", emoji: "🔬",
      intro: "Every activity in this category uses the same secret pattern that real scientists and engineers use every day. Learn the pattern once, and you can use it on anything you are curious about.",
      learn: [
        "It starts with a QUESTION: something you notice and wonder about. 'Why did that happen?' is the beginning of every experiment ever done.",
        "Next comes a HYPOTHESIS: your best guess at the answer, made BEFORE you test it. A hypothesis is not a fact, and it is allowed to be wrong.",
        "Then comes the TEST: an experiment where you change only ONE thing at a time and watch closely, which is the same 'fair test' idea from the Paper Airplane Lab.",
        "After the test, scientists OBSERVE and record what actually happened, even if it is not what they expected.",
        "Finally comes the CONCLUSION: what the results tell you, and often a brand new question to test next. Science is a loop, not a straight line."
      ],
      activity: "📝 Lab Notebook: keep a small notebook next to your STEM activities. For each one, write your question, your guess, what actually happened, and one new question it gave you.",
      diagram: '<svg viewBox="0 0 340 226"><rect width="340" height="226" rx="14" fill="#fdf6ef"/>'
        + '<defs><marker id="stemStep" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#8a86a8"/></marker></defs>'
        + '<g fill="none" stroke="#8a86a8" stroke-width="2.5" marker-end="url(#stemStep)">'
        + '<path d="M78 46 Q120 30 162 46"/><path d="M198 46 Q240 30 262 66"/>'
        + '<path d="M262 100 Q262 140 220 156"/><path d="M180 160 Q120 168 90 140"/><path d="M78 104 Q68 74 78 46" stroke-dasharray="3 4"/>'
        + '</g>'
        + '<g>' + ['Question', 'Guess', 'Test', 'Observe', 'Conclude'].map(function (label, i) {
          var pos = [[60, 46], [180, 40], [268, 100], [200, 168], [70, 130]][i];
          var cols = ["#e2453b", "#ff9f68", "#4d96ff", "#7c5cbf", "#2f9e44"];
          return '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="28" fill="' + cols[i] + '"/>'
            + '<text x="' + pos[0] + '" y="' + (pos[1] + 4) + '" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="10.5" fill="#fff">' + label + '</text>';
        }).join("") + '</g>'
        + '<text x="170" y="216" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-size="11" fill="#6a668c">a new question often starts the loop again</text>'
        + '</svg>',
      questions: [
        { q: "What is the first step in thinking like a scientist?", a: "Asking a question" },
        { q: "What do you call your best guess, made before testing?", a: "A hypothesis" },
        { q: "Is a hypothesis allowed to turn out wrong?", a: "Yes" },
        { q: "In a fair test, how many things should you change at once?", a: "One" },
        { q: "What do scientists call writing down what actually happened?", a: "Observing (making observations)" },
        { q: "What is the last step, where you explain what the results mean?", a: "The conclusion" },
        { q: "Is the scientific method a straight line or a loop?", a: "A loop" },
        { q: "What often comes out of a conclusion, sending the loop around again?", a: "A new question" },
        { q: "What do STEM and 'think like a scientist' have in common?", a: "Both are ways of testing ideas by trying them, not just guessing" },
        { q: "Why is it useful to write your guess down BEFORE testing it?", a: "So you can honestly compare what you expected to what really happened" }
      ]
    }
  };
})();
