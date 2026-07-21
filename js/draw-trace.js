// BrightSprouts Academy — "Trace & Draw" for the Extras category (LESSONS[14].drawtrace).
// Learn-to-draw tracing: each picture is shown solid (Look), dashed (Trace), and blank (Your turn).
// Line art is stroke-only (no fill/stroke on the elements) so one shape renders solid OR dashed.
(function () {
  if (typeof LESSONS === "undefined" || !LESSONS[14]) return;

  // Reuse the colouring library's outlines where they already exist (same stroke-only style).
  var colorByKey = {};
  if (typeof COLOR_ART !== "undefined") COLOR_ART.forEach(function (a) { colorByKey[a[0]] = a[3]; });
  function reuse(key, name, emoji) { return { name: name, emoji: emoji, art: colorByKey[key] || "" }; }
  function make(name, emoji, art) { return { name: name, emoji: emoji, art: art }; }

  var DRAW_TRACE = [
    {
      key: "shapes", label: "Shapes", emoji: "🔷", items: [
        make("Circle", "⭕", '<circle cx="50" cy="50" r="34"/>'),
        make("Square", "🟩", '<rect x="18" y="18" width="64" height="64" rx="3"/>'),
        make("Triangle", "🔺", '<path d="M50 16 L86 82 L14 82 Z"/>'),
        make("Rectangle", "▭", '<rect x="12" y="30" width="76" height="40" rx="3"/>'),
        make("Star", "⭐", '<path d="M50 14 L61 40 L89 42 L67 60 L75 88 L50 72 L25 88 L33 60 L11 42 L39 40 Z"/>'),
        make("Heart", "❤️", '<path d="M50 80 C20 58 20 30 40 30 C47 30 50 36 50 40 C50 36 53 30 60 30 C80 30 80 58 50 80 Z"/>')
      ]
    },
    {
      key: "fruits", label: "Fruits", emoji: "🍎", items: [
        make("Apple", "🍎",
          '<path d="M50 36 C43 28 30 28 26 40 C22 52 30 74 42 80 C46 82 54 82 58 80 C70 74 78 52 74 40 C70 28 57 28 50 36 Z"/>'
          + '<path d="M50 36 C50 30 50 26 52 20"/>'
          + '<path d="M52 24 C58 18 68 20 66 28 C60 30 54 30 52 24 Z"/>'),
        make("Pear", "🍐",
          '<path d="M50 24 C45 24 43 30 45 36 C36 42 30 56 34 68 C37 80 63 80 66 68 C70 56 64 42 55 36 C57 30 55 24 50 24 Z"/>'
          + '<path d="M50 24 L52 16"/>'
          + '<path d="M52 18 C58 14 66 16 64 22 C58 23 54 22 52 18 Z"/>'),
        make("Banana", "🍌",
          '<path d="M24 46 C30 70 58 78 78 62 C82 59 80 54 76 56 C60 64 44 58 38 44 C36 40 26 40 24 46 Z"/>'),
        make("Cherries", "🍒",
          '<circle cx="38" cy="66" r="13"/><circle cx="64" cy="70" r="13"/>'
          + '<path d="M38 53 C40 38 52 28 68 24"/><path d="M64 57 C62 44 64 34 68 24"/>'
          + '<path d="M68 24 C74 18 84 20 82 28 C76 30 70 28 68 24 Z"/>'),
        make("Grapes", "🍇",
          '<circle cx="42" cy="44" r="8"/><circle cx="58" cy="44" r="8"/>'
          + '<circle cx="34" cy="56" r="8"/><circle cx="50" cy="56" r="8"/><circle cx="66" cy="56" r="8"/>'
          + '<circle cx="42" cy="68" r="8"/><circle cx="58" cy="68" r="8"/><circle cx="50" cy="80" r="8"/>'
          + '<path d="M50 36 L50 26"/><path d="M50 28 C58 20 70 22 68 32 C60 34 54 32 50 28 Z"/>'),
        make("Orange", "🍊",
          '<circle cx="50" cy="54" r="30"/><path d="M50 30 C50 24 52 22 56 20"/>'
          + '<path d="M56 22 C62 16 72 18 70 26 C64 28 58 28 56 22 Z"/>')
      ]
    },
    {
      key: "animals", label: "Animals", emoji: "🐱", items: [
        reuse("cat", "Cat", "🐱"), reuse("bunny", "Bunny", "🐰"), reuse("fish", "Fish", "🐟"),
        reuse("bird", "Bird", "🐦"), reuse("snail", "Snail", "🐌"), reuse("turtle", "Turtle", "🐢"),
        reuse("butterfly", "Butterfly", "🦋"), reuse("elephant", "Elephant", "🐘")
      ]
    },
    {
      key: "cars", label: "Cars & Vehicles", emoji: "🚗", items: [
        reuse("car", "Car", "🚗"),
        make("Truck", "🚚",
          '<path d="M8 66 L8 42 L46 42 L46 66 Z"/>'
          + '<path d="M46 66 L46 48 L60 48 L70 58 L70 66 Z"/>'
          + '<rect x="50" y="51" width="9" height="6"/>'
          + '<path d="M8 66 L70 66"/>'
          + '<circle cx="22" cy="70" r="8"/><circle cx="62" cy="70" r="8"/>'),
        make("Bus", "🚌",
          '<path d="M10 64 L10 34 Q10 30 14 30 L82 30 Q86 30 86 34 L86 64 Z"/>'
          + '<rect x="18" y="36" width="12" height="10"/><rect x="34" y="36" width="12" height="10"/>'
          + '<rect x="50" y="36" width="12" height="10"/><rect x="66" y="36" width="12" height="10"/>'
          + '<rect x="18" y="50" width="10" height="14"/>'
          + '<circle cx="32" cy="66" r="8"/><circle cx="68" cy="66" r="8"/>'),
        reuse("train", "Train", "🚂"), reuse("boat", "Sailboat", "⛵"),
        make("Rocket", "🚀",
          '<path d="M50 12 C60 22 64 42 64 58 L36 58 C36 42 40 22 50 12 Z"/>'
          + '<circle cx="50" cy="34" r="7"/>'
          + '<path d="M36 52 L26 70 L36 62 Z"/><path d="M64 52 L74 70 L64 62 Z"/>'
          + '<path d="M36 58 L64 58"/>'
          + '<path d="M44 58 C44 68 50 76 50 76 C50 76 56 68 56 58"/>')
      ]
    },
    {
      key: "structures", label: "Structures", emoji: "🏠", items: [
        reuse("house", "House", "🏠"),
        make("Castle", "🏰",
          '<path d="M24 82 V38 H31 V44 H38 V38 H46 V44 H54 V38 H62 V44 H69 V38 H76 V82 Z"/>'
          + '<path d="M42 82 L42 64 Q50 56 58 64 L58 82"/>'
          + '<rect x="30" y="54" width="7" height="10"/><rect x="63" y="54" width="7" height="10"/>'
          + '<path d="M50 38 L50 24"/><path d="M50 24 L62 27 L50 31 Z"/>'),
        make("Tent", "⛺",
          '<path d="M50 20 L84 78 L16 78 Z"/>'
          + '<path d="M50 34 C46 52 45 66 40 78 M50 34 C54 52 55 66 60 78"/>'
          + '<path d="M50 20 L50 12"/><path d="M50 12 L60 15 L50 18 Z"/>'),
        make("Bridge", "🌉",
          '<path d="M8 60 L92 60"/><path d="M8 60 L8 52 L92 52 L92 60"/>'
          + '<path d="M22 60 Q36 42 50 60"/><path d="M50 60 Q64 42 78 60"/>'
          + '<path d="M8 60 L8 74 M50 60 L50 74 M92 60 L92 74"/>'
          + '<path d="M6 80 q7 -5 14 0 t14 0 t14 0 t14 0 t14 0 t14 0"/>'),
        make("Tower", "🗼",
          '<rect x="36" y="34" width="28" height="50"/>'
          + '<path d="M32 34 L50 14 L68 34 Z"/>'
          + '<path d="M50 14 L50 6"/><path d="M50 6 L60 9 L50 12 Z"/>'
          + '<path d="M44 84 L44 70 Q50 64 56 70 L56 84"/>'
          + '<rect x="45" y="44" width="10" height="12" rx="5"/>')
      ]
    }
  ];

  // Never show an empty tracing box: drop any reused item whose art wasn't found.
  DRAW_TRACE.forEach(function (cat) {
    cat.items = cat.items.filter(function (it) { return it.art && it.art.length; });
  });

  // Published for trace-grades.js, which hands each of K–Grade 2 its own slice of these sets.
  window.DRAW_TRACE = DRAW_TRACE;
})();
