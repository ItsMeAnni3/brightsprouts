// BrightSprouts Academy — handwriting tracing and learn-to-draw tracing, folded into K–Grade 2.
// Both progress: capitals → small letters → both cases & 100; shapes → objects → machines & buildings.
(function () {
  if (typeof LESSONS === "undefined") return;

  var TRACING = {
    0: {
      title: "Tracing: Capitals & Numbers", emoji: "✏️",
      intro: "Big capital letters and the numbers 1 to 10 — the perfect place for little hands to start writing.",
      learn: [
        "Trace the dashed lines slowly. Slow and neat beats fast and messy — speed arrives on its own later.",
        "Capitals are the easiest letters to begin with: straight lines and simple curves, and they all sit between the top and bottom lines.",
        "The first letter in each row is solid — that is your model. Look at it, then trace the dashed ones.",
        "Hold the pencil loosely, about a thumb's width above the point. A tight grip tires the hand fast.",
        "Five to ten minutes a day is plenty. Stop before it stops being fun!"
      ],
      activity: "🌟 Rainbow Tracing: Trace each letter a second and third time in different colours, right on top. Children love it — and the repetition is exactly what builds muscle memory.",
      traceModes: ["upper", "num10"], traceStart: "upper"
    },
    1: {
      title: "Tracing: Small Letters & Numbers", emoji: "✏️",
      intro: "Now for the small letters — the ones in almost every word you will ever read — plus numbers all the way to 20.",
      learn: [
        "Small (lowercase) letters make up nearly all writing, so they are the ones worth practising most.",
        "The three guide lines are your runway: tall letters (b, d, h, k, l) reach the top line, small ones stop at the dashed middle line, and every letter sits on the bottom line.",
        "Letters with tails (g, j, p, q, y) hang below the bottom line — that is the fourth, lowest line.",
        "Start each letter at the top and pull downwards. That is how letters are meant to be formed, and it makes joining them up easy later.",
        "Say the letter's sound out loud as you trace it, so handwriting and phonics grow together."
      ],
      activity: "✏️ Sound & Shape: Say each letter's sound as you trace it. By the end of the page you have practised handwriting AND phonics at the same time.",
      traceModes: ["lower", "num20"], traceStart: "lower"
    },
    2: {
      title: "Tracing: Both Cases & Numbers to 100", emoji: "✏️",
      intro: "Capitals and small letters together — the way real writing works — plus counting all the way to one hundred.",
      learn: [
        "Real writing mixes both cases: a capital to start a name or a sentence, small letters for everything else.",
        "Practising the pair together (Aa, Bb, Cc) teaches your hand how the two sizes relate.",
        "Keep letters an even height and evenly spaced. Neat spacing is what makes handwriting easy to read.",
        "The 1–100 grid builds number formation and number order at the same time.",
        "Try the 🎲 practice set for a mixed page — it is the best test of what you really know."
      ],
      activity: "📝 Name Practice: Write your full name five times — capital first letter, small letters after. Then write the name of everyone in your family.",
      traceModes: ["both", "num100", "random"], traceStart: "both"
    }
  };

  var DRAWING = {
    0: {
      title: "Trace & Draw: Shapes", emoji: "🖌️",
      intro: "Every drawing in the world is built from a few simple shapes. This is where drawing starts!",
      learn: [
        "Trace the dashed shape, then draw your own in the empty box.",
        "Circles, squares and triangles are the building blocks of almost every picture you will ever draw.",
        "Go slowly and follow the dots. Lift your pencil and start again whenever you need to.",
        "Drawing shapes builds exactly the same hand control you need for writing letters.",
        "Once you can draw a shape from memory, you can build anything out of it."
      ],
      activity: "🔷 Shape Hunt: Find a circle, a square and a triangle somewhere in your home. Draw each one you find, then label it!",
      groupKeys: ["shapes"]
    },
    1: {
      title: "Trace & Draw: Fruits & Animals", emoji: "🖌️",
      intro: "Now let's turn those shapes into real things — juicy fruits and friendly animals.",
      learn: [
        "Look for the shapes hiding inside each picture: an apple is mostly a circle, a fish is an oval with a triangle tail.",
        "Trace the dashed picture first, then draw your own in the empty box.",
        "Draw the big shape first and add the small details last — that is the order artists work in.",
        "If a line goes wrong, don't rub it out — just try again beside it. Artists draw the same thing many times over.",
        "Say the name of what you are drawing out loud to build your vocabulary as well."
      ],
      activity: "🍎 Draw Your Dinner: Draw one fruit from your kitchen, then an animal you love. Colour them both in and put them on the fridge!",
      groupKeys: ["fruits", "animals"]
    },
    2: {
      title: "Trace & Draw: Vehicles & Buildings", emoji: "🖌️",
      intro: "Time for the tricky ones — the machines that move us about and the buildings we live in.",
      learn: [
        "Vehicles and buildings are just rectangles, circles and triangles put together in clever ways.",
        "Draw the biggest box first, then add the wheels, windows and doors on top of it.",
        "Straight lines come out better if you move your whole arm rather than just your fingers.",
        "Look at the real thing — or a photo — while you draw. Artists almost always do.",
        "Draw the same picture bigger each time. Bigger drawings are easier to control than tiny ones."
      ],
      activity: "🚗 Design Your Own: Trace a car and a house, then invent a vehicle or a building nobody has ever seen and draw it from scratch.",
      groupKeys: ["cars", "structures"]
    }
  };

  for (var g = 0; g <= 2; g++) {
    if (!LESSONS[g]) continue;

    var t = TRACING[g];
    LESSONS[g].tracing = {
      title: t.title, emoji: t.emoji, intro: t.intro, learn: t.learn, activity: t.activity,
      tracingSheet: true, traceModes: t.traceModes, traceStart: t.traceStart
    };

    var d = DRAWING[g], sets = [];
    if (typeof DRAW_TRACE !== "undefined") {
      // keep the library's own order, just narrowed to this grade's sets
      sets = DRAW_TRACE.filter(function (cat) { return d.groupKeys.indexOf(cat.key) >= 0; });
    }
    if (sets.length) {
      LESSONS[g].drawtrace = {
        title: d.title, emoji: d.emoji, intro: d.intro, learn: d.learn, activity: d.activity,
        drawTracing: true, groups: sets
      };
    }
  }
})();
