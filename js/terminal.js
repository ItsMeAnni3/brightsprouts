// BrightSprouts Academy: the Code Terminal, added to Let's Learn Computer Science (LESSONS[17]).
//
// A real JavaScript console that runs in the child's own browser. What they type really runs, and
// what it prints really came from their code. There is no backend, no account and no internet
// needed, so it works offline in the installed app exactly as it does on the web.
//
// It is NOT a system shell, and it must never become one. It cannot reach files, the network, the
// rest of this page, or anything the child owns. Three things keep that true:
//
//   1. The code runs inside a Web Worker built from a Blob. A worker has no DOM, no window, no
//      localStorage and no cookies, so there is nothing there to break.
//   2. A worker runs on its own thread, so terminate() really does stop it. That is the whole
//      reason for using one: a child WILL write while(true) on their first afternoon, and an
//      iframe or a plain eval would freeze the tab and lose their work.
//   3. A watchdog terminates anything still running after RUN_MS and explains what happened in
//      words a child can act on.
//
// Written without em dashes, like the rest of this category.
(function () {
  if (typeof LESSONS === "undefined") return;

  var RUN_MS = 3000;     // how long a program may run before we stop it
  var MAX_LINES = 300;   // output lines kept before we stop collecting

  // The audit turns this off (0) while it checks the model answers, and back on for the two
  // checks that want it to fire. Headless Chrome fast-forwards timers, so a real three second
  // watchdog would go off before a worker on a real thread could ever reply and every answer
  // would look like a timeout. Nothing in the app calls this; RUN_MS is 3000 for every child.
  function setRunMs(ms) { RUN_MS = ms; }

  // ---------- the code that runs inside the worker ----------
  // Kept as a string because a Blob worker needs a source, not a function reference.
  var WORKER_SRC = [
    "var LINES = [], TRUNC = false;",
    "function fmt(v) {",
    "  if (typeof v === 'string') return v;",
    "  if (v === undefined) return 'undefined';",
    "  if (v === null) return 'null';",
    "  if (typeof v === 'number' || typeof v === 'boolean') return String(v);",
    "  try { return JSON.stringify(v); } catch (e) { return String(v); }",
    "}",
    "function out(kind, args) {",
    "  if (LINES.length >= " + MAX_LINES + ") { TRUNC = true; return; }",
    "  LINES.push({ k: kind, t: Array.prototype.map.call(args, fmt).join(' ') });",
    "}",
    // print() is the friendly name; console.log is kept so real examples from books still work
    "self.print = function () { out('out', arguments); };",
    "self.say = self.print;",
    "self.console = {",
    "  log: function () { out('out', arguments); },",
    "  info: function () { out('out', arguments); },",
    "  warn: function () { out('out', arguments); },",
    "  error: function () { out('err', arguments); }",
    "};",
    "self.onmessage = function (e) {",
    "  LINES = []; TRUNC = false;",
    "  var err = null;",
    "  try {",
    "    var fn = new Function(e.data.code);",   // a SyntaxError is thrown right here
    "    fn();",
    "  } catch (ex) {",
    "    err = (ex && ex.name ? ex.name + ': ' : '') + (ex && ex.message ? ex.message : String(ex));",
    "  }",
    "  self.postMessage({ lines: LINES, error: err, truncated: TRUNC });",
    "};"
  ].join("\n");

  var worker = null, workerUrl = null, watchdog = null, busy = false;

  function killWorker() {
    if (watchdog) { clearTimeout(watchdog); watchdog = null; }
    if (worker) { try { worker.terminate(); } catch (e) {} worker = null; }
    if (workerUrl) { try { URL.revokeObjectURL(workerUrl); } catch (e) {} workerUrl = null; }
    busy = false;
  }

  // Runs `code` and calls done({ lines, error, truncated, timeout }). Never throws.
  function runCode(code, done) {
    killWorker();
    if (typeof Worker === "undefined" || typeof Blob === "undefined" || typeof URL === "undefined") {
      done({ lines: [], error: "This browser cannot run the terminal. Try a different one." });
      return;
    }
    var finished = false;
    function finish(res) {
      if (finished) return;
      finished = true;
      killWorker();
      done(res);
    }
    try {
      workerUrl = URL.createObjectURL(new Blob([WORKER_SRC], { type: "text/javascript" }));
      worker = new Worker(workerUrl);
    } catch (e) {
      finish({ lines: [], error: "This browser would not start the terminal." });
      return;
    }
    busy = true;
    worker.onmessage = function (e) { finish(e.data || { lines: [], error: null }); };
    worker.onerror = function (e) {
      finish({ lines: [], error: (e && e.message) ? String(e.message) : "Something went wrong." });
    };
    if (RUN_MS > 0) {
      watchdog = setTimeout(function () { finish({ lines: [], error: null, timeout: true }); }, RUN_MS);
    }
    try { worker.postMessage({ code: String(code || "") }); }
    catch (e) { finish({ lines: [], error: "Could not send your code to the terminal." }); }
  }

  // ==================== illustrations ====================
  // Drawn with window.PaperArt, the site's shared SVG kit, looked up when the picture is drawn.
  function art(draw) { return function () { return window.PaperArt.box(draw(window.PaperArt)); }; }

  function screenBox(A, inner, tint) {
    return A.sheet(24, 28, 152, 96, tint || "#1e2233", 0, 10) +
      A.circ(36, 40, 3.4, "#e2453b") + A.circ(46, 40, 3.4, "#ffd166") + A.circ(56, 40, 3.4, "#6bcb77") +
      A.line(24, 50, 176, 50, "#39405a", 1.6) + inner;
  }
  function codeLine(A, y, w, col) {
    return A.line(38, y, 38 + w, y, col || "#7fc4ff", 4);
  }
  function mono(A, x, y, text, col, size) {
    return '<text x="' + x + '" y="' + y + '" font-family="Consolas, monospace" font-size="' +
      (size || 11) + '" font-weight="700" fill="' + (col || "#8ce99a") + '">' + text + '</text>';
  }

  var ART = {
    hello: art(function (A) {
      return screenBox(A, mono(A, 38, 74, "print(\"Hello!\")", "#7fc4ff") +
        mono(A, 38, 96, "Hello!", "#8ce99a")) +
        A.path("M132 108 q18 6 30 -4 l2 12 z", "#ffffff") +
        A.circ(150, 96, 16, "#ffffff") + A.label(150, 100, "hi!", "#5d3fa0");
    }),
    maths: art(function (A) {
      return screenBox(A, mono(A, 38, 72, "print(7 * 8)", "#7fc4ff") + mono(A, 38, 92, "56", "#8ce99a") +
        mono(A, 38, 112, "print(100 - 45)", "#7fc4ff")) +
        A.circ(150, 132, 13, "#ffd166") + A.label(150, 136, "x", "#8a6300") +
        A.circ(120, 132, 13, "#ff9db0") + A.label(120, 136, "+", "#8f1d47");
    }),
    variables: art(function (A) {
      return A.sheet(22, 44, 72, 56, "#ffd166", 0, 8) + A.sheet(106, 44, 72, 56, "#7fc4ff", 0, 8) +
        A.label(58, 40, "name", "#8a6300") + A.label(142, 40, "age", "#12447f") +
        mono(A, 34, 78, "\"Sam\"", "#8a6300", 14) + mono(A, 130, 78, "9", "#12447f", 16) +
        A.label(100, 124, "a box with a label on it", "#a89ec4");
    }),
    countten: art(function (A) {
      var s = "";
      for (var i = 0; i < 10; i++) {
        var x = 22 + i * 17;
        s += A.sheet(x, 96 - i * 5, 14, 20 + i * 5, "#7c5cbf", 0, 3);
        s += A.label(x + 7, 110 - i * 5 + 4, String(i + 1), "#fff");
      }
      return s + A.label(100, 30, "for (var i = 1; i <= 10; i++)", "#5d3fa0");
    }),
    evens: art(function (A) {
      var s = "";
      for (var i = 1; i <= 10; i++) {
        var x = 14 + (i - 1) * 18, ev = i % 2 === 0;
        s += A.circ(x + 9, 76, 8.6, ev ? "#6bcb77" : "#ece7f7");
        s += A.label(x + 9, 80, String(i), ev ? "#fff" : "#b8b2cc");
      }
      return s + A.label(100, 40, "i % 2 === 0", "#2f6b32") +
        A.label(100, 118, "keep only the even ones", "#a89ec4");
    }),
    timestable: art(function (A) {
      var s = "";
      for (var i = 0; i < 4; i++) {
        s += mono(A, 30, 46 + i * 22, "7 x " + (i + 1) + " = " + (7 * (i + 1)), "#5d3fa0", 13);
      }
      s += mono(A, 30, 134, "...", "#a89ec4", 13);
      return s + A.circ(150, 74, 30, "#ffd166") + A.label(150, 80, "x7", "#8a6300");
    }),
    countdown: art(function (A) {
      var s = "";
      for (var i = 0; i < 4; i++) s += A.label(34, 40 + i * 20, String(10 - i), "#5d3fa0");
      s += A.label(34, 122, "1", "#e2453b");
      return s + A.poly("112,30 128,30 128,92 112,92", "#ffffff") +
        A.poly("112,30 120,10 128,30", "#e2453b") +
        A.poly("112,80 98,104 112,96", "#e2453b") + A.poly("128,80 142,104 128,96", "#e2453b") +
        A.circ(120, 48, 7, "#7fc4ff") +
        A.poly("112,92 128,92 124,120 116,120", "#ff9f68") +
        A.poly("115,100 125,100 121,128 119,128", "#ffd166");
    }),
    sum100: art(function (A) {
      var s = "";
      for (var i = 0; i < 5; i++) s += mono(A, 40, 40 + i * 16, String(i + 1) + " +", "#5d3fa0", 12);
      s += mono(A, 40, 120, "...", "#a89ec4", 12);
      return s + A.line(96, 34, 96, 126, "#e6e0f5", 2) +
        A.circ(140, 78, 34, "#6bcb77") + A.label(140, 84, "5050", "#fff");
    }),
    fizzbuzz: art(function (A) {
      return A.sheet(14, 50, 52, 52, "#4d96ff", -6, 8) + A.label(40, 80, "Fizz", "#fff") +
        A.sheet(74, 44, 52, 52, "#ff6b9d", 3, 8) + A.label(100, 74, "Buzz", "#fff") +
        A.sheet(134, 50, 52, 52, "#7c5cbf", 6, 8) + A.label(160, 74, "Fizz", "#fff") +
        A.label(160, 88, "Buzz", "#fff") +
        A.label(100, 128, "3, 5, or both", "#a89ec4");
    }),
    reverse: art(function (A) {
      var w = "computer";
      var s = "";
      for (var i = 0; i < 8; i++) {
        s += A.sheet(20 + i * 20, 36, 17, 22, "#7fc4ff", 0, 4) +
          mono(A, 25 + i * 20, 52, w[i], "#12447f", 12);
        s += A.sheet(20 + i * 20, 92, 17, 22, "#ffd166", 0, 4) +
          mono(A, 25 + i * 20, 108, w[7 - i], "#8a6300", 12);
      }
      return s + A.path("M40 70 q60 -16 120 0", "none", ' stroke="#5d3fa0" stroke-width="2.4" fill="none"') +
        A.poly("44,64 32,72 46,78", "#5d3fa0");
    }),
    biggest: art(function (A) {
      var v = [12, 45, 7, 98, 23];
      var s = A.ground(126);
      for (var i = 0; i < 5; i++) {
        var h = 12 + v[i] * 0.9, x = 30 + i * 30;
        s += A.sheet(x - 11, 120 - h, 22, h, v[i] === 98 ? "#6bcb77" : "#c9c3d8", 0, 4);
        s += A.label(x, 134, String(v[i]), v[i] === 98 ? "#2f6b32" : "#a89ec4");
      }
      return s + A.star(120, 20, 11, "#ffd166");
    }),
    vowels: art(function (A) {
      var w = "computer";
      var s = "";
      for (var i = 0; i < 8; i++) {
        var ch = w[i], vow = "aeiou".indexOf(ch) >= 0;
        var x = 26 + i * 20;
        if (vow) s += A.circ(x + 8, 74, 12, "#ff9db0");
        s += mono(A, x + 2, 80, ch, vow ? "#8f1d47" : "#57547a", 17);
      }
      return s + A.label(100, 34, "a e i o u", "#d6336c") +
        A.label(100, 122, "count only the vowels", "#a89ec4");
    }),
    prime: art(function (A) {
      var s = "";
      var pr = { 2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1, 19: 1 };
      for (var n = 2; n <= 19; n++) {
        var i = n - 2, x = 24 + (i % 6) * 27, y = 42 + Math.floor(i / 6) * 30;
        s += A.circ(x + 11, y, 12, pr[n] ? "#7c5cbf" : "#ece7f7");
        s += A.label(x + 11, y + 4, String(n), pr[n] ? "#fff" : "#b8b2cc");
      }
      return s + A.label(100, 132, "only divisible by 1 and itself", "#a89ec4");
    }),
    stars: art(function (A) {
      var s = "";
      for (var r = 0; r < 5; r++) {
        for (var c = 0; c <= r; c++) {
          s += A.star(38 + c * 24, 34 + r * 22, 9, ["#ffd166", "#ff9f68", "#ff6b9d", "#7c5cbf", "#4d96ff"][r]);
        }
      }
      return s;
    }),
    guess: art(function (A) {
      var s = A.line(20, 96, 180, 96, "#c9c3d8", 3) +
        A.label(22, 116, "1", "#a89ec4") + A.label(178, 116, "100", "#a89ec4");
      [[100, "50", 0], [140, "75", 1], [122, "62", 2]].forEach(function (p) {
        s += A.line(p[0], 96, p[0], 78 - p[2] * 16, "#4d96ff", 2);
        s += A.circ(p[0], 70 - p[2] * 16, 12, "#4d96ff") + A.label(p[0], 74 - p[2] * 16, p[1], "#fff");
      });
      return s + A.star(146, 96, 9, "#6bcb77") + A.label(100, 136, "halve what is left, every time", "#a89ec4");
    })
  };

  // ==================== activities ====================
  // expect[] is what the program must print, line for line. solution is a working answer, and the
  // audit runs every one of them through the real terminal and checks it produces expect exactly.
  // If a solution and its expect ever disagree, the audit fails rather than a child being told
  // their correct answer is wrong.
  var TASKS = [
    {
      id: "hello", name: "Say Hello", emoji: "👋", level: "Easy",
      teaches: "print, and how a program shows you something",
      brief: [
        "Every programmer starts here.",
        "Use print to make the terminal show exactly this line: Hello, world!",
        "The words go inside quote marks, and the quotes are not printed."
      ],
      starter: "// Type your code below, then press Run.\n",
      expect: ["Hello, world!"],
      solution: 'print("Hello, world!");',
      hint: "print(\"...\") puts whatever is inside the quotes on the screen."
    },
    {
      id: "maths", name: "Do Some Maths", emoji: "➗", level: "Easy",
      teaches: "Numbers, and the difference between text and a sum",
      brief: [
        "The terminal can do sums much faster than you can.",
        "Print the answer to 7 x 8, then to 100 - 45, then to 144 / 12.",
        "Use * for times and / for divide. Do not put the sums in quote marks, or it will print the sum instead of the answer."
      ],
      starter: "print(7 * 8);\n",
      expect: ["56", "55", "12"],
      solution: "print(7 * 8);\nprint(100 - 45);\nprint(144 / 12);",
      hint: "print(7 * 8) shows 56. print(\"7 * 8\") shows 7 * 8, which is not what we want."
    },
    {
      id: "variables", name: "Boxes Called Variables", emoji: "📦", level: "Easy",
      teaches: "Variables, and joining text together",
      brief: [
        "A variable is a box with a label on it. You put something in, and use the label to get it back.",
        "Make a variable called name holding Sam, and one called age holding 9.",
        "Then print exactly: Sam is 9 years old.",
        "Use + to join pieces of text together."
      ],
      starter: 'var name = "Sam";\nvar age = 9;\n',
      expect: ["Sam is 9 years old."],
      solution: 'var name = "Sam";\nvar age = 9;\nprint(name + " is " + age + " years old.");',
      hint: "Watch the spaces. \" is \" has a space at each end, or the words run together."
    },
    {
      id: "countten", name: "Count to Ten", emoji: "🔢", level: "Easy",
      teaches: "Loops, and doing something ten times without writing it ten times",
      brief: [
        "Print the numbers 1 to 10, each on its own line.",
        "You could write ten print lines, but a loop does it in one.",
        "A for loop says: start here, keep going while this is true, and change this each time round."
      ],
      starter: "for (var i = 1; i <= 10; i++) {\n  \n}\n",
      expect: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      solution: "for (var i = 1; i <= 10; i++) {\n  print(i);\n}",
      hint: "Inside the loop, print(i). The i holds a different number each time round."
    },
    {
      id: "evens", name: "Only the Even Ones", emoji: "⚖️", level: "Easy",
      teaches: "if inside a loop, and the remainder operator",
      brief: [
        "Print every even number from 1 to 20.",
        "Go through all the numbers with a loop, then use an if to decide which ones to print.",
        "The % sign gives the remainder after dividing. A number is even when the remainder after dividing by 2 is 0."
      ],
      starter: "for (var i = 1; i <= 20; i++) {\n  \n}\n",
      expect: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
      solution: "for (var i = 1; i <= 20; i++) {\n  if (i % 2 === 0) {\n    print(i);\n  }\n}",
      hint: "if (i % 2 === 0) is true only for even numbers. Three equals signs means 'is exactly'."
    },
    {
      id: "timestable", name: "The 7 Times Table", emoji: "✖️", level: "Medium",
      teaches: "Building a line of text out of numbers inside a loop",
      brief: [
        "Print the whole 7 times table, from 7 x 1 up to 7 x 12.",
        "Each line must look exactly like this: 7 x 3 = 21",
        "Mind the spaces around the x and the equals sign."
      ],
      starter: "for (var i = 1; i <= 12; i++) {\n  \n}\n",
      expect: ["7 x 1 = 7", "7 x 2 = 14", "7 x 3 = 21", "7 x 4 = 28", "7 x 5 = 35", "7 x 6 = 42",
               "7 x 7 = 49", "7 x 8 = 56", "7 x 9 = 63", "7 x 10 = 70", "7 x 11 = 77", "7 x 12 = 84"],
      solution: 'for (var i = 1; i <= 12; i++) {\n  print("7 x " + i + " = " + (7 * i));\n}',
      hint: "Put the sum in brackets: (7 * i). Without them the number gets joined on as text instead of multiplied."
    },
    {
      id: "countdown", name: "Countdown to Blast Off", emoji: "🚀", level: "Medium",
      teaches: "Counting downwards in a loop",
      brief: [
        "Count down from 10 to 1, one number per line.",
        "After the 1, print: Blast off!",
        "To count down, start high and take one away each time round with i--."
      ],
      starter: "for (var i = 10; i >= 1; i--) {\n  \n}\n",
      expect: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "Blast off!"],
      solution: 'for (var i = 10; i >= 1; i--) {\n  print(i);\n}\nprint("Blast off!");',
      hint: "The Blast off! line goes AFTER the loop's closing brace, or it prints ten times."
    },
    {
      id: "sum100", name: "Add Up to 100", emoji: "➕", level: "Medium",
      teaches: "Keeping a running total in a variable",
      brief: [
        "Add up every number from 1 to 100 and print the answer, and only the answer.",
        "Make a variable called total that starts at 0.",
        "Go round a loop adding each number onto total, then print total once at the end."
      ],
      starter: "var total = 0;\nfor (var i = 1; i <= 100; i++) {\n  \n}\n",
      expect: ["5050"],
      solution: "var total = 0;\nfor (var i = 1; i <= 100; i++) {\n  total = total + i;\n}\nprint(total);",
      hint: "total = total + i means 'make total its old value plus i'. Print it after the loop, not inside."
    },
    {
      id: "fizzbuzz", name: "Fizz Buzz", emoji: "🥤", level: "Medium",
      teaches: "if, else if and else, and the order you test things in",
      brief: [
        "Go through the numbers 1 to 20.",
        "If a number divides by 3, print Fizz. If it divides by 5, print Buzz.",
        "If it divides by BOTH, print FizzBuzz. Otherwise print the number itself.",
        "Test for both first. If you test for 3 first, 15 will print Fizz and never reach FizzBuzz."
      ],
      starter: "for (var i = 1; i <= 20; i++) {\n  \n}\n",
      expect: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
               "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz"],
      solution: 'for (var i = 1; i <= 20; i++) {\n  if (i % 15 === 0) {\n    print("FizzBuzz");\n  } else if (i % 3 === 0) {\n    print("Fizz");\n  } else if (i % 5 === 0) {\n    print("Buzz");\n  } else {\n    print(i);\n  }\n}',
      hint: "A number that divides by both 3 and 5 divides by 15. Check that one first."
    },
    {
      id: "reverse", name: "Backwards Words", emoji: "🔄", level: "Medium",
      teaches: "Reading the letters of a word one at a time",
      brief: [
        "Print the word computer backwards, all on one line.",
        "word.length tells you how many letters there are. word[0] is the first letter, not word[1].",
        "So the last letter is word[word.length - 1]. Build up the answer in a variable, then print it once."
      ],
      starter: 'var word = "computer";\nvar backwards = "";\n',
      expect: ["retupmoc"],
      solution: 'var word = "computer";\nvar backwards = "";\nfor (var i = word.length - 1; i >= 0; i--) {\n  backwards = backwards + word[i];\n}\nprint(backwards);',
      hint: "Loop from the last position down to 0, adding each letter onto the end of backwards."
    },
    {
      id: "biggest", name: "Find the Biggest", emoji: "📈", level: "Medium",
      teaches: "Searching a list by remembering the best so far",
      brief: [
        "The list of scores is already in the code.",
        "Find the biggest one and print it, and nothing else.",
        "Keep a variable holding the biggest you have seen so far. Look at each score, and if it beats the best so far, that becomes the new best."
      ],
      starter: "var scores = [12, 45, 7, 98, 23];\nvar biggest = scores[0];\n",
      expect: ["98"],
      solution: "var scores = [12, 45, 7, 98, 23];\nvar biggest = scores[0];\nfor (var i = 1; i < scores.length; i++) {\n  if (scores[i] > biggest) {\n    biggest = scores[i];\n  }\n}\nprint(biggest);",
      hint: "Start biggest at the first score, not at 0. A list of all negative numbers would break the 0 version."
    },
    {
      id: "vowels", name: "Count the Vowels", emoji: "🔤", level: "Hard",
      teaches: "Counting things that match a test",
      brief: [
        "Count how many vowels are in the sentence in the code, and print just the number.",
        "The vowels are a, e, i, o and u. There are no capital letters in this sentence to worry about.",
        "Keep a count in a variable and add 1 every time a letter is a vowel.",
        "\"aeiou\".indexOf(letter) gives -1 when the letter is not a vowel."
      ],
      starter: 'var sentence = "computer science is brilliant";\nvar count = 0;\n',
      expect: ["10"],
      solution: 'var sentence = "computer science is brilliant";\nvar count = 0;\nfor (var i = 0; i < sentence.length; i++) {\n  if ("aeiou".indexOf(sentence[i]) >= 0) {\n    count = count + 1;\n  }\n}\nprint(count);',
      hint: "indexOf gives back -1 for 'not found', so the test you want is >= 0. The space is not a vowel."
    },
    {
      id: "prime", name: "Is It Prime?", emoji: "🔱", level: "Hard",
      teaches: "A loop inside a loop, and stopping early",
      brief: [
        "Print every prime number from 2 to 20, each on its own line.",
        "A prime number can only be divided exactly by 1 and by itself.",
        "For each number, try dividing it by every number below it. If any of them divides exactly, it is not prime.",
        "You will need one loop inside another."
      ],
      starter: "for (var n = 2; n <= 20; n++) {\n  \n}\n",
      expect: ["2", "3", "5", "7", "11", "13", "17", "19"],
      solution: "for (var n = 2; n <= 20; n++) {\n  var isPrime = true;\n  for (var d = 2; d < n; d++) {\n    if (n % d === 0) {\n      isPrime = false;\n    }\n  }\n  if (isPrime) {\n    print(n);\n  }\n}",
      hint: "Use a true or false variable. Set it to true before the inner loop, and to false the moment something divides exactly."
    },
    {
      id: "stars", name: "Draw a Triangle", emoji: "⭐", level: "Hard",
      teaches: "Using a loop to build a line of a picture",
      brief: [
        "Print a triangle of stars five rows tall.",
        "Row 1 has one star, row 2 has two, and so on down to row 5.",
        "Build each row up in a variable first, then print that row once. Printing inside the inner loop puts every star on its own line."
      ],
      starter: "for (var row = 1; row <= 5; row++) {\n  var line = \"\";\n  \n}\n",
      expect: ["*", "**", "***", "****", "*****"],
      solution: 'for (var row = 1; row <= 5; row++) {\n  var line = "";\n  for (var s = 1; s <= row; s++) {\n    line = line + "*";\n  }\n  print(line);\n}',
      hint: "The print goes in the OUTER loop, after the inner one has finished building the line."
    },
    {
      id: "guess", name: "Halving Search", emoji: "🔍", level: "Hard",
      teaches: "Binary search: throwing away half the possibilities every guess",
      brief: [
        "The secret number is 73, somewhere between 1 and 100.",
        "Guess by always taking the middle of what is left, printing each guess as you go.",
        "If the guess is too low, the answer is above it, so move the bottom of the range up. If it is too high, move the top down.",
        "Use Math.floor((low + high) / 2) to find the middle.",
        "When you find it, print: Found it in N guesses! with N being how many guesses you took."
      ],
      starter: "var secret = 73;\nvar low = 1;\nvar high = 100;\nvar guesses = 0;\n",
      expect: ["50", "75", "62", "68", "71", "73", "Found it in 6 guesses!"],
      solution: 'var secret = 73;\nvar low = 1;\nvar high = 100;\nvar guesses = 0;\nwhile (low <= high) {\n  var guess = Math.floor((low + high) / 2);\n  guesses = guesses + 1;\n  print(guess);\n  if (guess === secret) {\n    print("Found it in " + guesses + " guesses!");\n    break;\n  }\n  if (guess < secret) {\n    low = guess + 1;\n  } else {\n    high = guess - 1;\n  }\n}',
      hint: "A while loop is easier than a for loop here. Remember to break once you have found it, or it will keep going."
    }
  ];
  TASKS.forEach(function (t) { t.art = ART[t.id]; });

  // ==================== the UI ====================
  var st = { task: TASKS[0].id, code: null, out: null, checked: null };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function current() {
    for (var i = 0; i < TASKS.length; i++) if (TASKS[i].id === st.task) return TASKS[i];
    return TASKS[0];
  }
  function $(id) { return document.getElementById(id); }

  function outputHtml() {
    var o = st.out;
    if (!o) return '<div class="tm-hint">Press <b>Run</b> and whatever your program prints will appear here.</div>';
    var rows = "";
    if (o.timeout) {
      rows += '<div class="tm-line tm-err">Your program was still running after 3 seconds, so I stopped it. ' +
        'Look for a loop that never finishes.</div>';
    }
    (o.lines || []).forEach(function (l) {
      rows += '<div class="tm-line' + (l.k === "err" ? " tm-err" : "") + '">' + esc(l.t) + '</div>';
    });
    if (o.truncated) rows += '<div class="tm-line tm-note">... that is the first ' + MAX_LINES + ' lines. There were more.</div>';
    if (o.error) rows += '<div class="tm-line tm-err">' + esc(o.error) + '</div>';
    if (!rows) rows = '<div class="tm-line tm-note">Your program ran, but it did not print anything.</div>';
    return rows;
  }

  function checkHtml() {
    var c = st.checked;
    if (!c) return "";
    if (c.pass) {
      return '<div class="tm-check ok">🎉 <b>Correct!</b> That is exactly right. Try the next one, ' +
        'or change your code and see what happens.</div>';
    }
    return '<div class="tm-check no"><b>Not quite yet.</b> ' + esc(c.why) + '</div>';
  }

  window.CodeTerminal = {
    _html: function () {
      var t = current();
      var picker = TASKS.map(function (x) {
        return '<button type="button" class="tm-task' + (x.id === st.task ? " active" : "") +
          '" onclick="CodeTerminal.pick(\'' + x.id + '\')">' + esc(x.emoji) + ' ' + esc(x.name) +
          '<i class="tm-lvl ' + x.level.toLowerCase() + '">' + x.level + '</i></button>';
      }).join("");
      return '<div class="tm-wrap" id="tm-wrap">' +
        '<div class="tm-tasks no-print">' + picker + '</div>' +
        '<div class="tm-brief">' +
          '<div class="tm-briefart">' + (t.art ? t.art() : "") + '</div>' +
          '<div class="tm-brieftext">' +
            '<h4>' + esc(t.emoji) + ' ' + esc(t.name) +
              '<i class="tm-lvl ' + t.level.toLowerCase() + '">' + t.level + '</i></h4>' +
            '<p class="tm-teaches"><b>Teaches:</b> ' + esc(t.teaches) + '</p>' +
            '<ol class="tm-steps">' + t.brief.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join("") + '</ol>' +
            '<p class="tm-want"><b>It should print:</b> <span>' +
              t.expect.slice(0, 4).map(esc).join(" / ") + (t.expect.length > 4 ? " / ..." : "") + '</span></p>' +
          '</div>' +
        '</div>' +
        '<div class="tm-editor no-print">' +
          '<div class="tm-bar"><span>📝 your code</span><span class="tm-lang">JavaScript</span></div>' +
          '<textarea id="tm-code" spellcheck="false" autocomplete="off" autocorrect="off" ' +
            'autocapitalize="off" aria-label="Your code">' + esc(st.code == null ? t.starter : st.code) + '</textarea>' +
          '<div class="tm-tools">' +
            '<button class="btn btn-primary btn-sm" onclick="CodeTerminal.run()">▶ Run</button>' +
            '<button class="btn btn-secondary btn-sm" onclick="CodeTerminal.check()">✅ Check my answer</button>' +
            '<button class="btn btn-ghost btn-sm" onclick="CodeTerminal.reset()">↺ Start again</button>' +
            '<button class="btn btn-ghost btn-sm" onclick="CodeTerminal.showHint()">💡 Hint</button>' +
          '</div>' +
        '</div>' +
        '<div class="tm-screen no-print">' +
          '<div class="tm-bar dark"><span class="tm-dots"><i></i><i></i><i></i></span><span>output</span></div>' +
          '<div class="tm-out" id="tm-out">' + outputHtml() + '</div>' +
        '</div>' +
        '<div id="tm-checkbox" class="no-print">' + checkHtml() + '</div>' +
      '</div>';
    },

    _repaint: function () {
      var w = $("tm-wrap");
      if (w) w.outerHTML = this._html();
    },
    _grab: function () {
      var el = $("tm-code");
      if (el) st.code = el.value;
    },
    pick: function (id) {
      st.task = id; st.code = null; st.out = null; st.checked = null;
      this._repaint();
      var w = $("tm-wrap");
      if (w && w.scrollIntoView) w.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    reset: function () {
      st.code = null; st.out = null; st.checked = null;
      this._repaint();
    },
    showHint: function () {
      this._grab();
      st.checked = { pass: false, why: "Hint: " + current().hint };
      var box = $("tm-checkbox");
      if (box) box.innerHTML = checkHtml();
    },
    run: function (then) {
      this._grab();
      var self = this;
      var el = $("tm-out");
      if (el) el.innerHTML = '<div class="tm-line tm-note">running...</div>';
      runCode(st.code == null ? current().starter : st.code, function (res) {
        st.out = res;
        var o = $("tm-out");
        if (o) o.innerHTML = outputHtml();
        if (then) then(res);
      });
    },
    check: function () {
      var self = this, t = current();
      this.run(function (res) {
        st.checked = self._judge(t, res);
        var box = $("tm-checkbox");
        if (box) box.innerHTML = checkHtml();
      });
    },
    // Pure, and exported for the audit: given a task and a run result, did it pass, and if not why.
    _judge: function (t, res) {
      if (res.timeout) return { pass: false, why: "Your program never finished. Check for a loop that cannot end." };
      if (res.error) return { pass: false, why: "Your code stopped with this message: " + res.error };
      var got = (res.lines || []).filter(function (l) { return l.k !== "err"; })
        .map(function (l) { return String(l.t).replace(/\s+$/, ""); });
      var want = t.expect;
      if (got.length === 0) return { pass: false, why: "Nothing was printed. Did you use print?" };
      if (got.length !== want.length) {
        return { pass: false, why: "You printed " + got.length + " line" + (got.length === 1 ? "" : "s") +
          " but this one needs " + want.length + "." };
      }
      for (var i = 0; i < want.length; i++) {
        if (got[i] !== want[i]) {
          return { pass: false, why: "Line " + (i + 1) + " should be \"" + want[i] + "\" but it was \"" + got[i] + "\"." };
        }
      }
      return { pass: true };
    },
    _test: {
      TASKS: TASKS, runCode: runCode, setRunMs: setRunMs,
      judge: function (t, r) { return window.CodeTerminal._judge(t, r); }
    }
  };

  // ==================== the lesson ====================
  LESSONS[17].terminal = {
    title: "The Code Terminal", emoji: "⌨️", band: "Grades 3 to 12",
    intro: "This is a real terminal. What you type here really runs, in this browser, right now. There are fifteen challenges below, from printing your first line to writing a search that finds a number in seven guesses. Nothing you type can break anything, so try things.",
    learn: [
      "The language is JavaScript, the language every web browser already speaks. It is real code, not a toy.",
      "print(something) puts something on the screen. Text goes inside quote marks, numbers do not.",
      "Press Run to see what your code does. Press Check my answer and the terminal compares your output with what the challenge asked for, line by line.",
      "Red writing is an error message. Errors are normal and they are useful: read the message, because it usually says which line went wrong.",
      "If you write a loop that never ends, the terminal stops it after three seconds and tells you. You cannot lock up the page, so experiment freely.",
      "Your code runs in a sealed sandbox with no access to your files, your network or anything else on this page. It is a safe place to be wrong."
    ],
    codeTerminal: true,
    activity: "⌨️ Activity Sheet: Change one thing: pick a challenge you have finished and change ONE number or word. Predict out loud what will happen, then press Run and see whether you were right. Being wrong is the interesting part.",
    questions: [
      { q: "What does print do?", a: "Shows something on the screen" },
      { q: "Which language does the terminal use?", a: "JavaScript" },
      { q: "How do you write text so it prints?", a: "Inside quote marks" },
      { q: "What does the % sign give you?", a: "The remainder after dividing" },
      { q: "How do you test if a number is even?", a: "Check if number % 2 is 0" },
      { q: "What does a for loop do?", a: "Repeats something a number of times" },
      { q: "What is a variable?", a: "A named box that holds a value" },
      { q: "What happens if a loop never ends?", a: "The terminal stops it after 3 seconds" },
      { q: "What colour is an error message?", a: "Red" },
      { q: "Is an error message useful?", a: "Yes, it says what went wrong" },
      { q: "What does word.length tell you?", a: "How many letters it has" },
      { q: "What is the first position in a word called?", a: "0" },
      { q: "What does Math.floor do to 7.8?", a: "Makes it 7" },
      { q: "In FizzBuzz, which test must come first?", a: "The one for both 3 and 5" },
      { q: "How many guesses does halving need for 1 to 100?", a: "7 at most" }
    ]
  };
})();
