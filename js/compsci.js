// BrightSprouts Academy — "Let's Learn Computer Science" (LESSONS[17]).
// A single ladder from Grade 1 to Grade 12: what a computer is → algorithms → loops →
// conditionals → variables → functions → block coding → text coding → networks → safety & AI.
// Every level carries a printable activity sheet and free places to actually try it.
(function () {
  if (typeof LESSONS === "undefined") return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  function chipRow(items, y, fill, w, gap) {
    var s = "";
    for (var i = 0; i < items.length; i++) {
      var x = 14 + i * (w + gap);
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="9" fill="' + fill + '" stroke="#d8d2ec" stroke-width="1.5"/>'
        + '<text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + items[i] + '</text>';
    }
    return s;
  }

  // input → process → output
  var ioDia = '<svg viewBox="0 0 340 150"><rect width="340" height="150" rx="14" fill="#eef6ff"/>'
    + '<defs><marker id="csA" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#5d3fa0"/></marker></defs>'
    + '<rect x="14" y="44" width="88" height="52" rx="12" fill="#fff" stroke="#4d96ff" stroke-width="2.5"/>'
    + '<text x="58" y="68" text-anchor="middle" ' + FA + ' font-size="13" fill="#2d2a4a">INPUT</text>'
    + '<text x="58" y="85" text-anchor="middle" ' + FA + ' font-size="10" fill="#6a668c">keyboard, mouse</text>'
    + '<rect x="126" y="44" width="88" height="52" rx="12" fill="#5d3fa0"/>'
    + '<text x="170" y="68" text-anchor="middle" ' + FA + ' font-size="13" fill="#fff">THINK</text>'
    + '<text x="170" y="85" text-anchor="middle" ' + FA + ' font-size="10" fill="#e0d6f5">the program runs</text>'
    + '<rect x="238" y="44" width="88" height="52" rx="12" fill="#fff" stroke="#43aa8b" stroke-width="2.5"/>'
    + '<text x="282" y="68" text-anchor="middle" ' + FA + ' font-size="13" fill="#2d2a4a">OUTPUT</text>'
    + '<text x="282" y="85" text-anchor="middle" ' + FA + ' font-size="10" fill="#6a668c">screen, sound</text>'
    + '<line x1="104" y1="70" x2="122" y2="70" stroke="#5d3fa0" stroke-width="3" marker-end="url(#csA)"/>'
    + '<line x1="216" y1="70" x2="234" y2="70" stroke="#5d3fa0" stroke-width="3" marker-end="url(#csA)"/>'
    + '<text x="170" y="128" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">A computer only does exactly what it is told</text></svg>';

  var algoDia = '<svg viewBox="0 0 340 166"><rect width="340" height="166" rx="14" fill="#fff6ee"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">An algorithm is steps, in the right order</text>';
  ["1. Get bread", "2. Add filling", "3. Close it up", "4. Eat!"].forEach(function (t, i) {
    algoDia += '<rect x="60" y="' + (36 + i * 30) + '" width="220" height="24" rx="8" fill="#fff" stroke="#f0a04a" stroke-width="2"/>'
      + '<text x="72" y="' + (53 + i * 30) + '" ' + FA + ' font-size="12" fill="#2d2a4a">' + t + '</text>';
  });
  algoDia += '<text x="170" y="158" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">Swap two steps and it stops working — that is a bug</text></svg>';

  var loopDia = '<svg viewBox="0 0 340 160"><rect width="340" height="160" rx="14" fill="#f3fbf4"/>'
    + '<rect x="40" y="28" width="260" height="86" rx="14" fill="none" stroke="#43aa8b" stroke-width="3" stroke-dasharray="7 5"/>'
    + '<text x="170" y="50" text-anchor="middle" ' + FA + ' font-size="13" fill="#2f6b45">repeat 4 times</text>'
    + '<rect x="70" y="60" width="200" height="24" rx="8" fill="#fff" stroke="#9ad6bd" stroke-width="2"/>'
    + '<text x="170" y="77" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">move forward · turn right</text>'
    + '<text x="170" y="104" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">…draws a square</text>'
    + '<text x="170" y="138" text-anchor="middle" ' + FA + ' font-size="12" fill="#2f6b45">2 lines instead of 8 — loops save work</text></svg>';

  var ifDia = '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#fdf6ff"/>'
    + '<path d="M170 20 L232 52 L170 84 L108 52 Z" fill="#e0d6f5" stroke="#7c5cbf" stroke-width="2.5"/>'
    + '<text x="170" y="50" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">Is it</text>'
    + '<text x="170" y="64" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">raining?</text>'
    + '<g stroke="#7c5cbf" stroke-width="2.5"><line x1="108" y1="52" x2="60" y2="52"/><line x1="60" y1="52" x2="60" y2="102"/>'
    + '<line x1="232" y1="52" x2="280" y2="52"/><line x1="280" y1="52" x2="280" y2="102"/></g>'
    + '<text x="82" y="46" ' + FA + ' font-size="11" fill="#43aa8b">YES</text>'
    + '<text x="242" y="46" ' + FA + ' font-size="11" fill="#e2453b">NO</text>'
    + '<rect x="14" y="102" width="92" height="30" rx="9" fill="#fff" stroke="#43aa8b" stroke-width="2"/>'
    + '<text x="60" y="122" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">take umbrella</text>'
    + '<rect x="234" y="102" width="92" height="30" rx="9" fill="#fff" stroke="#e2453b" stroke-width="2"/>'
    + '<text x="280" y="122" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">wear a cap</text>'
    + '<text x="170" y="158" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">IF … THEN … ELSE</text></svg>';

  var varDia = '<svg viewBox="0 0 340 156"><rect width="340" height="156" rx="14" fill="#fff7ea"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">A variable is a named box that holds a value</text>'
    + '<g><rect x="26" y="40" width="86" height="56" rx="10" fill="#fff" stroke="#e0a94a" stroke-width="2.5"/>'
    + '<text x="69" y="62" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">score</text>'
    + '<text x="69" y="84" text-anchor="middle" ' + FA + ' font-size="20" fill="#2d2a4a">7</text></g>'
    + '<g><rect x="127" y="40" width="86" height="56" rx="10" fill="#fff" stroke="#e0a94a" stroke-width="2.5"/>'
    + '<text x="170" y="62" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">name</text>'
    + '<text x="170" y="84" text-anchor="middle" ' + FA + ' font-size="15" fill="#2d2a4a">"Maya"</text></g>'
    + '<g><rect x="228" y="40" width="86" height="56" rx="10" fill="#fff" stroke="#e0a94a" stroke-width="2.5"/>'
    + '<text x="271" y="62" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">alive</text>'
    + '<text x="271" y="84" text-anchor="middle" ' + FA + ' font-size="15" fill="#2d2a4a">true</text></g>'
    + '<text x="170" y="124" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">number · text (string) · true/false (boolean)</text>'
    + '<text x="170" y="144" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">score = score + 1</text></svg>';

  var funcDia = '<svg viewBox="0 0 340 164"><rect width="340" height="164" rx="14" fill="#eef6ff"/>'
    + '<rect x="108" y="30" width="124" height="44" rx="13" fill="#4d96ff"/>'
    + '<text x="170" y="58" text-anchor="middle" ' + FA + ' font-size="15" fill="#fff">makeToast()</text>'
    + '<g stroke="#9ab6e8" stroke-width="2" fill="none">'
    + '<path d="M150 74 L84 100"/><path d="M170 74 L170 100"/><path d="M190 74 L256 100"/></g>'
    + chipRow(["get bread", "toast it", "butter it"], 102, "#fff", 96, 12)
    + '<text x="170" y="152" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">One name hides many steps — that is abstraction</text></svg>';

  var netDia = '<svg viewBox="0 0 340 172"><rect width="340" height="172" rx="14" fill="#f5f2ff"/>'
    + '<rect x="14" y="60" width="76" height="48" rx="10" fill="#fff" stroke="#7c5cbf" stroke-width="2.5"/>'
    + '<text x="52" y="82" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">your device</text>'
    + '<text x="52" y="98" text-anchor="middle" ' + FA + ' font-size="10" fill="#6a668c">the client</text>'
    + '<rect x="250" y="60" width="76" height="48" rx="10" fill="#fff" stroke="#43aa8b" stroke-width="2.5"/>'
    + '<text x="288" y="82" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">server</text>'
    + '<text x="288" y="98" text-anchor="middle" ' + FA + ' font-size="10" fill="#6a668c">holds the site</text>'
    + '<g fill="#ffd166" stroke="#e0a94a" stroke-width="1.5">'
    + '<rect x="110" y="56" width="26" height="18" rx="4"/><rect x="152" y="76" width="26" height="18" rx="4"/>'
    + '<rect x="194" y="56" width="26" height="18" rx="4"/><rect x="152" y="36" width="26" height="18" rx="4"/></g>'
    + '<text x="170" y="122" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">Data travels as small packets, then is rebuilt</text>'
    + '<text x="170" y="146" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">a URL is the address · DNS is the phone book</text>'
    + '<text x="170" y="163" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#8a86a8">the Web runs ON the internet — they are not the same thing</text></svg>';

  var binDia = '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#141a35"/>'
    + '<text x="170" y="26" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#dfe6ff">Computers store everything as 1s and 0s</text>';
  var bits = ["0", "1", "0", "0", "0", "0", "0", "1"];
  for (var b = 0; b < 8; b++) {
    var bx = 24 + b * 37;
    binDia += '<rect x="' + bx + '" y="40" width="30" height="34" rx="7" fill="' + (bits[b] === "1" ? "#43aa8b" : "#3a3a55") + '"/>'
      + '<text x="' + (bx + 15) + '" y="63" text-anchor="middle" ' + FA + ' font-size="15" fill="#fff">' + bits[b] + '</text>';
  }
  binDia += '<text x="170" y="96" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#9aa5cc">8 bits = 1 byte — this one is the letter A</text>'
    + '<text x="170" y="128" text-anchor="middle" ' + FA + ' font-size="12" fill="#fff">Strong password = long, unique, never reused</text>'
    + '<text x="170" y="150" text-anchor="middle" ' + FA + ' font-size="11" fill="#9aa5cc">AI learns patterns from data — it can be wrong, so check it</text></svg>';

  var codeDia = '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#1e2233"/>'
    + '<rect x="16" y="16" width="308" height="136" rx="10" fill="#141a26"/>'
    + '<g font-family="Consolas, Menlo, monospace" font-size="13">'
    + '<text x="30" y="42" fill="#6a7a99"># ask a question</text>'
    + '<text x="30" y="64" fill="#9fdbe0">name</text><text x="72" y="64" fill="#dfe6ff"> = input("Your name? ")</text>'
    + '<text x="30" y="86" fill="#ffd166">print</text><text x="70" y="86" fill="#dfe6ff">("Hi " + name)</text>'
    + '<text x="30" y="112" fill="#a06cf0">for</text><text x="60" y="112" fill="#dfe6ff"> i </text><text x="80" y="112" fill="#a06cf0">in</text>'
    + '<text x="100" y="112" fill="#dfe6ff"> range(3):</text>'
    + '<text x="52" y="132" fill="#ffd166">print</text><text x="92" y="132" fill="#dfe6ff">("Hooray!")</text></g></svg>';

  var scratchDia = '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#fff6ee"/>'
    + '<text x="170" y="26" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">Blocks snap together — no typing needed</text>'
    + '<rect x="52" y="38" width="200" height="28" rx="8" fill="#ffbf00"/>'
    + '<text x="66" y="57" ' + FA + ' font-size="12" fill="#3a3352">when ⚑ clicked</text>'
    + '<rect x="52" y="70" width="200" height="28" rx="8" fill="#4d96ff"/>'
    + '<text x="66" y="89" ' + FA + ' font-size="12" fill="#fff">move 10 steps</text>'
    + '<rect x="52" y="102" width="200" height="28" rx="8" fill="#e0a94a"/>'
    + '<text x="66" y="121" ' + FA + ' font-size="12" fill="#fff">change score by 1</text>'
    + '<text x="170" y="154" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">Start small, then add score, sound and a win screen</text></svg>';

  var R_UNPLUGGED = { name: "CS Unplugged", url: "https://csunplugged.org", note: "Computer science games with no computer at all" };
  var R_CODEORG = { name: "Code.org", url: "https://code.org", note: "Free courses and the Hour of Code" };
  var R_BLOCKLY = { name: "Blockly Games", url: "https://blockly.games", note: "Puzzle your way through coding ideas" };
  var R_SCRATCH = { name: "Scratch", url: "https://scratch.mit.edu", note: "Free block coding from MIT — make games and stories" };
  var R_SCRATCHJR = { name: "ScratchJr", url: "https://www.scratchjr.org", note: "Block coding for ages 5–7 (tablet app)" };
  var R_TRINKET = { name: "Trinket", url: "https://trinket.io/python", note: "Write and run real Python in your browser" };
  var R_PYTHON = { name: "Python.org", url: "https://www.python.org", note: "Download Python free, for any computer" };
  var R_KHAN = { name: "Khan Academy Computing", url: "https://www.khanacademy.org/computing", note: "Free video courses and challenges" };
  var R_AWESOME = { name: "Be Internet Awesome", url: "https://beinternetawesome.withgoogle.com", note: "A game about staying safe and kind online" };
  var R_COMMONSENSE = { name: "Common Sense Media", url: "https://www.commonsense.org/education/digital-citizenship", note: "Digital citizenship lessons for families" };

  LESSONS[17] = {
    basics: {
      title: "What Is a Computer?", emoji: "💻", band: "Grades 1–2",
      intro: "A computer is a machine that follows instructions. It is very fast and never gets tired — but it cannot think for itself.",
      learn: [
        "A computer takes something IN (input), works on it, and sends something OUT (output).",
        "Input comes from a keyboard, mouse, microphone or camera. Output goes to a screen, speaker or printer.",
        "Hardware is the parts you can touch. Software is the programs that tell the hardware what to do.",
        "Computers are hidden everywhere: phones, cars, washing machines, traffic lights and TVs.",
        "A computer only does exactly what it is told. If something goes wrong, it is usually the instructions, not the machine."
      ],
      activity: "🖥️ Activity Sheet — Spot the Computer: Walk around your home and list ten things with a computer inside. For three of them, draw what the INPUT is and what the OUTPUT is.",
      diagram: ioDia,
      resources: [R_UNPLUGGED, R_CODEORG],
      questions: [
        { q: "What is a computer?", a: "A machine that follows instructions" },
        { q: "Can a computer think for itself?", a: "No" },
        { q: "Name an input device.", a: "Keyboard, mouse, microphone or camera" },
        { q: "Name an output device.", a: "Screen, speaker or printer" },
        { q: "What do we call the parts you can touch?", a: "Hardware" },
        { q: "What do we call the programs that tell it what to do?", a: "Software" },
        { q: "Is a mouse hardware or software?", a: "Hardware" },
        { q: "Is a game you play software or hardware?", a: "Software" },
        { q: "Name something in a home that has a computer inside.", a: "A phone, TV, car or washing machine" },
        { q: "What are the three steps a computer follows?", a: "Input, then process, then output" },
        { q: "If a program does the wrong thing, whose mistake is it usually?", a: "The instructions we gave it" },
        { q: "Which is the output when you print a picture?", a: "The printed paper" }
      ]
    },
    algorithms: {
      title: "Algorithms & Steps", emoji: "🪜", band: "Grades 1–3",
      intro: "An algorithm is just a list of steps in the right order. You already use them — brushing your teeth is an algorithm!",
      learn: [
        "An algorithm is a set of steps that gets a job done, in order.",
        "Computers cannot guess, so every step has to be spelled out exactly.",
        "Order matters: putting your socks on AFTER your shoes will not work.",
        "A mistake in your steps is called a bug, and fixing it is called debugging.",
        "Good programmers plan the steps on paper before they write any code."
      ],
      activity: "🥪 Activity Sheet — Robot Sandwich: Write exact instructions for making a sandwich, then have a grown-up follow them literally (they must not guess!). Rewrite your steps until it works.",
      diagram: algoDia,
      resources: [R_CODEORG, R_BLOCKLY, R_SCRATCHJR],
      questions: [
        { q: "What is an algorithm?", a: "A list of steps in the right order" },
        { q: "Why must every step be spelled out?", a: "A computer cannot guess" },
        { q: "What do we call a mistake in a program?", a: "A bug" },
        { q: "What do we call fixing that mistake?", a: "Debugging" },
        { q: "Does the order of steps matter?", a: "Yes" },
        { q: "What should you do before writing code?", a: "Plan the steps" },
        { q: "Give an everyday example of an algorithm.", a: "Brushing teeth, or a recipe" },
        { q: "Is a recipe an algorithm?", a: "Yes" },
        { q: "What happens if two steps are swapped?", a: "The program may not work" },
        { q: "Who makes the mistake in a buggy program?", a: "The person who wrote the steps" },
        { q: "What is the first thing to do when your program misbehaves?", a: "Read your steps in order to find the bug" },
        { q: "Should steps be written before or after coding?", a: "Before" }
      ]
    },
    loops: {
      title: "Loops & Repeats", emoji: "🔁", band: "Grades 2–4",
      intro: "Why write the same instruction eight times when you can say 'do this four times'? That's a loop.",
      learn: [
        "A loop repeats instructions so you do not have to write them again and again.",
        "\"Repeat 4 times: move forward, turn right\" draws a perfect square.",
        "Loops make programs shorter, easier to read and easier to fix.",
        "Some loops repeat a set number of times; others repeat until something happens.",
        "Real life is full of loops: every step you take, every day of the week."
      ],
      activity: "🔁 Activity Sheet — Dance Loop: Invent a three-move dance. Write it once with 'repeat 4 times' instead of writing twelve moves, then perform it.",
      diagram: loopDia,
      resources: [R_BLOCKLY, R_SCRATCH, R_CODEORG],
      questions: [
        { q: "What does a loop do?", a: "Repeats instructions" },
        { q: "Why are loops useful?", a: "They save writing the same thing again and again" },
        { q: "How many times do you repeat 'forward, turn right' to draw a square?", a: "Four" },
        { q: "Do loops make a program shorter or longer?", a: "Shorter" },
        { q: "Name a loop you do every day.", a: "Brushing each tooth, or steps when walking" },
        { q: "Can a loop repeat until something happens?", a: "Yes" },
        { q: "You want to clap 10 times. Write it as a loop.", a: "Repeat 10 times: clap" },
        { q: "If a loop repeats forever, what is that called?", a: "An infinite loop" },
        { q: "Which is easier to fix: one loop or twelve copied lines?", a: "One loop" },
        { q: "How many sides does the shape have if you repeat 3 times?", a: "Three — a triangle" },
        { q: "What goes inside a loop?", a: "The instructions you want repeated" },
        { q: "Do loops change what the program does, or just how it is written?", a: "Just how it is written — the result is the same" }
      ]
    },
    conditionals: {
      title: "If This, Then That", emoji: "❓", band: "Grades 3–5",
      intro: "Programs make decisions. A conditional asks a yes-or-no question and picks what to do next.",
      learn: [
        "A conditional says: IF something is true, THEN do this — otherwise (ELSE) do that.",
        "The question must have a yes/no answer: is the score above 10? did the player touch the wall?",
        "Games use conditionals constantly: if you touch the spikes, then lose a life.",
        "You can join conditions with AND (both must be true) and OR (either one will do).",
        "An event is a trigger that starts code running: when the flag is clicked, when a key is pressed."
      ],
      activity: "❓ Activity Sheet — If-Then Day: Write five IF–THEN rules for your day, such as 'IF it is raining THEN take an umbrella'. Act out what happens when each condition is true and false.",
      diagram: ifDia,
      resources: [R_SCRATCH, R_CODEORG, R_BLOCKLY],
      questions: [
        { q: "What does a conditional do?", a: "Makes a decision in a program" },
        { q: "Complete it: IF … THEN … ____", a: "ELSE" },
        { q: "What kind of answer must a condition have?", a: "Yes or no (true or false)" },
        { q: "What runs when the condition is false?", a: "The ELSE part" },
        { q: "What does AND mean in a condition?", a: "Both things must be true" },
        { q: "What does OR mean in a condition?", a: "Either one can be true" },
        { q: "What is an event in a program?", a: "A trigger that starts code running" },
        { q: "Give an example of an event.", a: "Clicking the flag, or pressing a key" },
        { q: "Write a game rule as IF–THEN.", a: "e.g. IF touching spikes THEN lose a life" },
        { q: "Is 'is the score above 10?' a good condition?", a: "Yes — it has a yes/no answer" },
        { q: "Can a program have more than one conditional?", a: "Yes, as many as it needs" },
        { q: "Do conditionals let a program react to what happens?", a: "Yes" }
      ]
    },
    variables: {
      title: "Variables & Data", emoji: "📦", band: "Grades 4–6",
      intro: "A variable is a labelled box that holds a piece of information — and you can change what is inside as the program runs.",
      learn: [
        "A variable has a name and a value: score = 7, name = \"Maya\".",
        "Give variables clear names. 'score' tells you far more than 'x'.",
        "Common data types: numbers, text (called strings), and true/false values (called booleans).",
        "Programs update variables as they run: score = score + 1 adds one to the score.",
        "A list is one variable that holds many values, like a register of names."
      ],
      activity: "📦 Activity Sheet — Score Keeper: Play any game and track three variables on paper — score, lives and level. Write the new value each time one changes, and circle every change.",
      diagram: varDia,
      resources: [R_SCRATCH, R_KHAN],
      questions: [
        { q: "What is a variable?", a: "A named box that holds a value" },
        { q: "What two things does a variable have?", a: "A name and a value" },
        { q: "Which is the better variable name: 'x' or 'score'?", a: "score" },
        { q: "What data type is the number 12?", a: "A number" },
        { q: "What data type is the word \"Maya\"?", a: "Text (a string)" },
        { q: "What data type is true or false?", a: "A boolean" },
        { q: "What does score = score + 1 do?", a: "Adds one to the score" },
        { q: "What is a list?", a: "One variable that holds many values" },
        { q: "Can a variable's value change while the program runs?", a: "Yes" },
        { q: "Name a variable a game might need.", a: "score, lives, level or time" },
        { q: "Is \"7\" in quotation marks a number or text?", a: "Text" },
        { q: "Why do clear variable names matter?", a: "They make the program easy to read and fix" }
      ]
    },
    functions: {
      title: "Functions & Breaking It Down", emoji: "🧩", band: "Grades 5–7",
      intro: "Big problems are just small problems stacked up. Functions let you name a chunk of work and reuse it forever.",
      learn: [
        "A function is a named piece of code you can run again whenever you need it.",
        "Decomposition means breaking a big problem into smaller, easier pieces.",
        "Functions can take inputs (called parameters) and hand back a result.",
        "Reuse means fixing a bug in one place instead of in ten copies.",
        "Abstraction is hiding the messy details behind a simple name — you say 'makeToast()' and forget the steps."
      ],
      activity: "🧩 Activity Sheet — Recipe Functions: Write 'make toast' as one instruction, then list every step it hides underneath. Do the same for 'tidy my room'. You have just written two functions.",
      diagram: funcDia,
      resources: [R_SCRATCH, R_KHAN, R_CODEORG],
      questions: [
        { q: "What is a function?", a: "A named piece of code you can reuse" },
        { q: "What does decomposition mean?", a: "Breaking a big problem into smaller parts" },
        { q: "What are the inputs to a function called?", a: "Parameters" },
        { q: "Why is reusing a function helpful?", a: "You fix a bug once instead of many times" },
        { q: "What does abstraction mean?", a: "Hiding the details behind a simple name" },
        { q: "Is 'makeToast()' a function or a variable?", a: "A function" },
        { q: "Can a function give a result back?", a: "Yes" },
        { q: "Why break a big program into functions?", a: "It is easier to write, read and fix" },
        { q: "In Scratch, what are custom functions called?", a: "My Blocks" },
        { q: "If you use a function five times and find a bug, how many places must you fix?", a: "One" },
        { q: "Name a job in a game that could be its own function.", a: "e.g. resetGame, addScore, playSound" },
        { q: "Does a function have to be run straight away?", a: "No — it runs when you call it" }
      ]
    },
    scratch: {
      title: "Build a Game in Scratch", emoji: "🐱", band: "Grades 4–8",
      intro: "Time to build something real. Scratch is free block coding from MIT — you drag blocks together and watch your game come alive.",
      learn: [
        "Scratch is free at scratch.mit.edu, works in a browser, and needs no typing.",
        "Sprites are the characters; the stage is the background they move on.",
        "Blocks snap together into scripts, and each script starts with an event block.",
        "Build in small steps: make it move, then add a score, then add a way to win.",
        "Remixing means opening someone else's project, looking inside, and changing it — one of the fastest ways to learn."
      ],
      activity: "🐱 Activity Sheet — Catch the Apple: Plan a game on paper first — list your sprites, what each one does, and how the score works. Then build it: an apple falls, a basket catches it, the score goes up.",
      diagram: scratchDia,
      resources: [R_SCRATCH, R_SCRATCHJR, R_CODEORG],
      questions: [
        { q: "What is Scratch?", a: "A free block-coding tool from MIT" },
        { q: "Do you need to type code in Scratch?", a: "No — you drag blocks" },
        { q: "What is a sprite?", a: "A character in your project" },
        { q: "What is the stage?", a: "The background the sprites move on" },
        { q: "What block does a script usually start with?", a: "An event block" },
        { q: "What does 'remix' mean?", a: "Changing someone else's project to make your own" },
        { q: "Should you build a game all at once or in small steps?", a: "In small steps" },
        { q: "What would you add to keep track of points?", a: "A score variable" },
        { q: "Which block makes a sprite move?", a: "The 'move 10 steps' motion block" },
        { q: "How do you make something happen repeatedly in Scratch?", a: "Use a repeat (loop) block" },
        { q: "What should you plan before building?", a: "The sprites, what they do, and the rules" },
        { q: "Does Scratch cost money?", a: "No — it is free" }
      ]
    },
    python: {
      title: "Text Code: Python", emoji: "🐍", band: "Grades 7–10",
      intro: "Blocks were the training wheels. Python is a real language used by scientists, game studios and websites — and it reads almost like English.",
      learn: [
        "print() shows something on screen; input() asks the user a question.",
        "A # starts a comment — a note for humans that Python ignores.",
        "Variables work exactly as they did in blocks, you just type them: score = 0.",
        "Indentation (the spaces at the start of a line) tells Python which lines are inside a loop or an if.",
        "Errors are normal and useful. Read the message — it usually tells you the line number and what went wrong."
      ],
      activity: "🐍 Activity Sheet — Quiz Bot: Write a Python program that asks three questions, adds one to a score for each right answer, and prints the final result. Then add an if that prints 'Perfect!' for 3 out of 3.",
      diagram: codeDia,
      resources: [R_TRINKET, R_PYTHON, R_KHAN],
      questions: [
        { q: "What does print() do?", a: "Shows something on the screen" },
        { q: "What does input() do?", a: "Asks the user for something" },
        { q: "What does a # start?", a: "A comment" },
        { q: "Does Python read comments?", a: "No — they are for humans" },
        { q: "What does indentation tell Python?", a: "Which lines are inside a loop or an if" },
        { q: "How do you make a variable called score equal to 0?", a: "score = 0" },
        { q: "Are errors a normal part of coding?", a: "Yes" },
        { q: "What does an error message usually tell you?", a: "The line number and what went wrong" },
        { q: "Is Python free to use?", a: "Yes" },
        { q: "Write a line that prints Hello.", a: "print(\"Hello\")" },
        { q: "Name something Python is used for in the real world.", a: "Science, websites, games or AI" },
        { q: "What is the loop keyword that repeats a set number of times?", a: "for" }
      ]
    },
    internet: {
      title: "How the Internet Works", emoji: "🌐", band: "Grades 6–9",
      intro: "You tap a link and a page appears in a heartbeat. Here is what actually happens in between.",
      learn: [
        "The internet is a giant network of computers joined by cables, wifi and satellites.",
        "Your data is chopped into small packets that travel separately and are rebuilt at the other end.",
        "Your device is the client; the computer that stores the website is the server.",
        "A URL is a web address, and DNS is the phone book that turns a name like example.com into a number (an IP address).",
        "The World Wide Web is not the same as the internet — the Web is one of many things that run ON the internet."
      ],
      activity: "🌐 Activity Sheet — Packet Relay: Write a sentence across five numbered cards, shuffle them, and pass them one at a time to a family 'router'. They must reassemble the message in order — exactly what packets do.",
      diagram: netDia,
      resources: [R_CODEORG, R_UNPLUGGED, R_KHAN],
      questions: [
        { q: "What is the internet?", a: "A giant network of connected computers" },
        { q: "What are the small pieces data travels in called?", a: "Packets" },
        { q: "What do we call the computer that stores a website?", a: "A server" },
        { q: "What do we call your own device in that exchange?", a: "The client" },
        { q: "What is a URL?", a: "A web address" },
        { q: "What does DNS do?", a: "Turns a website name into an IP address" },
        { q: "What is an IP address?", a: "A number that identifies a device on the network" },
        { q: "Are the internet and the Web the same thing?", a: "No — the Web runs on the internet" },
        { q: "Do all packets travel by the same route?", a: "No — they can take different paths" },
        { q: "What happens to packets when they arrive?", a: "They are put back in order" },
        { q: "Name one way computers connect to the internet.", a: "Cables, wifi or satellite" },
        { q: "Which came first: the internet or the Web?", a: "The internet" }
      ]
    },
    safety: {
      title: "Online Safety, Data & AI", emoji: "🛡️", band: "Grades 8–12",
      intro: "Knowing how computers work also means knowing how to stay safe and think critically about what they tell you.",
      learn: [
        "Never share personal details online: your full name, address, school, phone number or passwords.",
        "A strong password is long and unique. A passphrase of a few random words beats a short complicated one, and you should never reuse it across sites.",
        "Think before you post. Anything online can be copied, shared and kept long after you delete it.",
        "Computers store everything in binary — 1s and 0s. Eight bits make a byte, and every letter, picture and song is just numbers underneath.",
        "AI learns patterns from enormous amounts of data. It can sound confident and still be wrong or biased, so check anything important — and tell a trusted adult about anything online that worries or upsets you."
      ],
      activity: "🛡️ Activity Sheet — Password Audit: With a grown-up, check the family's passwords. Are they long? Unique? Reused anywhere? Invent a passphrase from four random words and write down why it is hard to guess.",
      diagram: binDia,
      resources: [R_AWESOME, R_COMMONSENSE, R_UNPLUGGED],
      questions: [
        { q: "Name something you should never share online.", a: "Your address, phone number, school or password" },
        { q: "What makes a password strong?", a: "It is long and unique" },
        { q: "Should you reuse the same password on many sites?", a: "No" },
        { q: "Why think before you post?", a: "Things online can be copied and kept forever" },
        { q: "What number system do computers use?", a: "Binary — 1s and 0s" },
        { q: "How many bits are in a byte?", a: "Eight" },
        { q: "How does AI learn?", a: "By finding patterns in large amounts of data" },
        { q: "Can AI be confidently wrong?", a: "Yes — always check important facts" },
        { q: "What should you do if something online worries you?", a: "Tell a trusted adult" },
        { q: "Is a passphrase of random words a good idea?", a: "Yes — long and easy to remember" },
        { q: "Can deleted posts still exist somewhere?", a: "Yes, they may have been copied or saved" },
        { q: "Are pictures and songs also stored as numbers?", a: "Yes" }
      ]
    }
  };
})();
