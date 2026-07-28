// BrightSprouts Academy: "Let's Learn Computer Science" (LESSONS[17]).
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
  algoDia += '<text x="170" y="158" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">Swap two steps and it stops working, that is a bug</text></svg>';

  var loopDia = '<svg viewBox="0 0 340 160"><rect width="340" height="160" rx="14" fill="#f3fbf4"/>'
    + '<rect x="40" y="28" width="260" height="86" rx="14" fill="none" stroke="#43aa8b" stroke-width="3" stroke-dasharray="7 5"/>'
    + '<text x="170" y="50" text-anchor="middle" ' + FA + ' font-size="13" fill="#2f6b45">repeat 4 times</text>'
    + '<rect x="70" y="60" width="200" height="24" rx="8" fill="#fff" stroke="#9ad6bd" stroke-width="2"/>'
    + '<text x="170" y="77" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">move forward · turn right</text>'
    + '<text x="170" y="104" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">…draws a square</text>'
    + '<text x="170" y="138" text-anchor="middle" ' + FA + ' font-size="12" fill="#2f6b45">2 lines instead of 8, loops save work</text></svg>';

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
    + '<text x="170" y="152" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">One name hides many steps, that is abstraction</text></svg>';

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
    + '<text x="170" y="163" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#8a86a8">the Web runs ON the internet, they are not the same thing</text></svg>';

  var binDia = '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#141a35"/>'
    + '<text x="170" y="26" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#dfe6ff">Computers store everything as 1s and 0s</text>';
  var bits = ["0", "1", "0", "0", "0", "0", "0", "1"];
  for (var b = 0; b < 8; b++) {
    var bx = 24 + b * 37;
    binDia += '<rect x="' + bx + '" y="40" width="30" height="34" rx="7" fill="' + (bits[b] === "1" ? "#43aa8b" : "#3a3a55") + '"/>'
      + '<text x="' + (bx + 15) + '" y="63" text-anchor="middle" ' + FA + ' font-size="15" fill="#fff">' + bits[b] + '</text>';
  }
  binDia += '<text x="170" y="96" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#9aa5cc">8 bits = 1 byte, this one is the letter A</text>'
    + '<text x="170" y="128" text-anchor="middle" ' + FA + ' font-size="12" fill="#fff">Strong password = long, unique, never reused</text>'
    + '<text x="170" y="150" text-anchor="middle" ' + FA + ' font-size="11" fill="#9aa5cc">AI learns patterns from data, it can be wrong, so check it</text></svg>';

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
    + '<text x="170" y="26" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">Blocks snap together, no typing needed</text>'
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
  var R_SCRATCH = { name: "Scratch", url: "https://scratch.mit.edu", note: "Free block coding from MIT: make games and stories" };
  var R_SCRATCHJR = { name: "ScratchJr", url: "https://www.scratchjr.org", note: "Block coding for ages 5–7 (tablet app)" };
  var R_TRINKET = { name: "Trinket", url: "https://trinket.io/python", note: "Write and run real Python in your browser" };
  var R_PYTHON = { name: "Python.org", url: "https://www.python.org", note: "Download Python free, for any computer" };
  var R_KHAN = { name: "Khan Academy Computing", url: "https://www.khanacademy.org/computing", note: "Free video courses and challenges" };
  var R_AWESOME = { name: "Be Internet Awesome", url: "https://beinternetawesome.withgoogle.com", note: "A game about staying safe and kind online" };
  var R_COMMONSENSE = { name: "Common Sense Media", url: "https://www.commonsense.org/education/digital-citizenship", note: "Digital citizenship lessons for families" };

  LESSONS[17] = {
    basics: {
      title: "What Is a Computer?", emoji: "💻", band: "Grades 1–2",
      intro: "A computer is a machine that follows instructions. It is very fast and never gets tired, but it cannot think for itself.",
      learn: [
        "A computer takes something IN (input), works on it, and sends something OUT (output).",
        "Input comes from a keyboard, mouse, microphone or camera. Output goes to a screen, speaker or printer.",
        "Hardware is the parts you can touch. Software is the programs that tell the hardware what to do.",
        "Computers are hidden everywhere: phones, cars, washing machines, traffic lights and TVs.",
        "A computer only does exactly what it is told. If something goes wrong, it is usually the instructions, not the machine."
      ],
      activity: "🖥️ Activity Sheet: Spot the Computer: Walk around your home and list ten things with a computer inside. For three of them, draw what the INPUT is and what the OUTPUT is.",
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
      intro: "An algorithm is just a list of steps in the right order. You already use them: brushing your teeth is an algorithm!",
      learn: [
        "An algorithm is a set of steps that gets a job done, in order.",
        "Computers cannot guess, so every step has to be spelled out exactly.",
        "Order matters: putting your socks on AFTER your shoes will not work.",
        "A mistake in your steps is called a bug, and fixing it is called debugging.",
        "Good programmers plan the steps on paper before they write any code."
      ],
      activity: "🥪 Activity Sheet: Robot Sandwich: Write exact instructions for making a sandwich, then have a grown-up follow them literally (they must not guess!). Rewrite your steps until it works.",
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
      activity: "🔁 Activity Sheet: Dance Loop: Invent a three-move dance. Write it once with 'repeat 4 times' instead of writing twelve moves, then perform it.",
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
        { q: "How many sides does the shape have if you repeat 3 times?", a: "Three, a triangle" },
        { q: "What goes inside a loop?", a: "The instructions you want repeated" },
        { q: "Do loops change what the program does, or just how it is written?", a: "Just how it is written; the result is the same" }
      ]
    },
    conditionals: {
      title: "If This, Then That", emoji: "❓", band: "Grades 3–5",
      intro: "Programs make decisions. A conditional asks a yes-or-no question and picks what to do next.",
      learn: [
        "A conditional says: IF something is true, THEN do this; otherwise (ELSE) do that.",
        "The question must have a yes/no answer: is the score above 10? did the player touch the wall?",
        "Games use conditionals constantly: if you touch the spikes, then lose a life.",
        "You can join conditions with AND (both must be true) and OR (either one will do).",
        "An event is a trigger that starts code running: when the flag is clicked, when a key is pressed."
      ],
      activity: "❓ Activity Sheet: If-Then Day: Write five IF–THEN rules for your day, such as 'IF it is raining THEN take an umbrella'. Act out what happens when each condition is true and false.",
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
        { q: "Is 'is the score above 10?' a good condition?", a: "Yes, it has a yes/no answer" },
        { q: "Can a program have more than one conditional?", a: "Yes, as many as it needs" },
        { q: "Do conditionals let a program react to what happens?", a: "Yes" }
      ]
    },
    variables: {
      title: "Variables & Data", emoji: "📦", band: "Grades 4–6",
      intro: "A variable is a labelled box that holds a piece of information, and you can change what is inside as the program runs.",
      learn: [
        "A variable has a name and a value: score = 7, name = \"Maya\".",
        "Give variables clear names. 'score' tells you far more than 'x'.",
        "Common data types: numbers, text (called strings), and true/false values (called booleans).",
        "Programs update variables as they run: score = score + 1 adds one to the score.",
        "A list is one variable that holds many values, like a register of names."
      ],
      activity: "📦 Activity Sheet: Score Keeper: Play any game and track three variables on paper: score, lives and level. Write the new value each time one changes, and circle every change.",
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
        "Abstraction is hiding the messy details behind a simple name; you say 'makeToast()' and forget the steps."
      ],
      activity: "🧩 Activity Sheet: Recipe Functions: Write 'make toast' as one instruction, then list every step it hides underneath. Do the same for 'tidy my room'. You have just written two functions.",
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
        { q: "Does a function have to be run straight away?", a: "No, it runs when you call it" }
      ]
    },
    scratch: {
      title: "Build a Game in Scratch", emoji: "🐱", band: "Grades 4–8",
      intro: "Time to build something real. Scratch is free block coding from MIT: you drag blocks together and watch your game come alive.",
      learn: [
        "Scratch is free at scratch.mit.edu, works in a browser, and needs no typing.",
        "Sprites are the characters; the stage is the background they move on.",
        "Blocks snap together into scripts, and each script starts with an event block.",
        "Build in small steps: make it move, then add a score, then add a way to win.",
        "Remixing means opening someone else's project, looking inside, and changing it: one of the fastest ways to learn."
      ],
      activity: "🐱 Activity Sheet: Catch the Apple: Plan a game on paper first: list your sprites, what each one does, and how the score works. Then build it: an apple falls, a basket catches it, the score goes up.",
      diagram: scratchDia,
      resources: [R_SCRATCH, R_SCRATCHJR, R_CODEORG],
      questions: [
        { q: "What is Scratch?", a: "A free block-coding tool from MIT" },
        { q: "Do you need to type code in Scratch?", a: "No, you drag blocks" },
        { q: "What is a sprite?", a: "A character in your project" },
        { q: "What is the stage?", a: "The background the sprites move on" },
        { q: "What block does a script usually start with?", a: "An event block" },
        { q: "What does 'remix' mean?", a: "Changing someone else's project to make your own" },
        { q: "Should you build a game all at once or in small steps?", a: "In small steps" },
        { q: "What would you add to keep track of points?", a: "A score variable" },
        { q: "Which block makes a sprite move?", a: "The 'move 10 steps' motion block" },
        { q: "How do you make something happen repeatedly in Scratch?", a: "Use a repeat (loop) block" },
        { q: "What should you plan before building?", a: "The sprites, what they do, and the rules" },
        { q: "Does Scratch cost money?", a: "No, it is free" }
      ]
    },
    python: {
      title: "Text Code: Python", emoji: "🐍", band: "Grades 7–10",
      intro: "Blocks were the training wheels. Python is a real language used by scientists, game studios and websites, and it reads almost like English.",
      learn: [
        "print() shows something on screen; input() asks the user a question.",
        "A # starts a comment: a note for humans that Python ignores.",
        "Variables work exactly as they did in blocks, you just type them: score = 0.",
        "Indentation (the spaces at the start of a line) tells Python which lines are inside a loop or an if.",
        "Errors are normal and useful. Read the message; it usually tells you the line number and what went wrong."
      ],
      activity: "🐍 Activity Sheet: Quiz Bot: Write a Python program that asks three questions, adds one to a score for each right answer, and prints the final result. Then add an if that prints 'Perfect!' for 3 out of 3.",
      diagram: codeDia,
      resources: [R_TRINKET, R_PYTHON, R_KHAN],
      questions: [
        { q: "What does print() do?", a: "Shows something on the screen" },
        { q: "What does input() do?", a: "Asks the user for something" },
        { q: "What does a # start?", a: "A comment" },
        { q: "Does Python read comments?", a: "No, they are for humans" },
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
        "The World Wide Web is not the same as the internet; the Web is one of many things that run ON the internet."
      ],
      activity: "🌐 Activity Sheet: Packet Relay: Write a sentence across five numbered cards, shuffle them, and pass them one at a time to a family 'router'. They must reassemble the message in order, exactly what packets do.",
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
        { q: "Are the internet and the Web the same thing?", a: "No, the Web runs on the internet" },
        { q: "Do all packets travel by the same route?", a: "No, they can take different paths" },
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
        "Computers store everything in binary: 1s and 0s. Eight bits make a byte, and every letter, picture and song is just numbers underneath.",
        "AI learns patterns from enormous amounts of data. It can sound confident and still be wrong or biased, so check anything important, and tell a trusted adult about anything online that worries or upsets you."
      ],
      activity: "🛡️ Activity Sheet: Password Audit: With a grown-up, check the family's passwords. Are they long? Unique? Reused anywhere? Invent a passphrase from four random words and write down why it is hard to guess.",
      diagram: binDia,
      resources: [R_AWESOME, R_COMMONSENSE, R_UNPLUGGED],
      questions: [
        { q: "Name something you should never share online.", a: "Your address, phone number, school or password" },
        { q: "What makes a password strong?", a: "It is long and unique" },
        { q: "Should you reuse the same password on many sites?", a: "No" },
        { q: "Why think before you post?", a: "Things online can be copied and kept forever" },
        { q: "What number system do computers use?", a: "Binary, 1s and 0s" },
        { q: "How many bits are in a byte?", a: "Eight" },
        { q: "How does AI learn?", a: "By finding patterns in large amounts of data" },
        { q: "Can AI be confidently wrong?", a: "Yes, always check important facts" },
        { q: "What should you do if something online worries you?", a: "Tell a trusted adult" },
        { q: "Is a passphrase of random words a good idea?", a: "Yes, long and easy to remember" },
        { q: "Can deleted posts still exist somewhere?", a: "Yes, they may have been copied or saved" },
        { q: "Are pictures and songs also stored as numbers?", a: "Yes" }
      ]
    },

    // ---- Unplugged: computer science with no computer in the room ----
    // These teach the ideas underneath the ladder above, using paper, cards, string and people.
    // Rules for anything added here: no screen, no internet, no app, and no material a family
    // would have to go out and buy. Every activity names the computer science idea it teaches,
    // so a grown-up can see the point of it before they start.
    unplugged: {
      title: "Unplugged: No Computer Needed", emoji: "🔌", band: "Grades 1 to 8",
      intro: "You can learn most of computer science without a computer at all. These twenty activities use paper, cards, string and people. They teach the same ideas a programmer uses every day: algorithms, loops, binary, sorting, searching, networks and debugging.",
      learn: [
        "Computer science is about ideas, not machines. Sorting, searching and following steps are all things you can do on a kitchen table.",
        "Doing an algorithm with your body makes it stick. Children who have BEEN a sorting algorithm remember what it does.",
        "Every activity below says which idea it teaches. Read that first, then do the activity, then talk about what happened.",
        "Green is Easy, amber is Medium, red is Hard. The hard ones are not harder to do, they just carry a bigger idea.",
        "Nothing here needs a screen, an app or the internet, and nothing needs anything you would have to go and buy."
      ],
      unpluggedList: true,
      activity: "🧑‍🏫 Teach it back: pick any activity below, do it once, then teach it to somebody who has not done it. Explaining an algorithm out loud is the fastest way to find out whether you really understood it.",
      questions: [
        { q: "What is an algorithm?", a: "A list of steps in order" },
        { q: "Why must instructions for a computer be exact?", a: "A computer cannot guess" },
        { q: "What is a loop?", a: "Something repeated a number of times" },
        { q: "What number system do computers use?", a: "Binary" },
        { q: "Which two digits does binary use?", a: "0 and 1" },
        { q: "What is the value of the binary card after 8?", a: "16" },
        { q: "In binary, what does 1 0 1 equal?", a: "5" },
        { q: "What is finding a mistake in your steps called?", a: "Debugging" },
        { q: "What does a bubble sort compare each time?", a: "Two neighbours" },
        { q: "Which is faster on sorted data: guessing halfway or one by one?", a: "Guessing halfway" },
        { q: "What is a small piece of a message sent over a network called?", a: "A packet" },
        { q: "What is a tiny square of colour on a screen called?", a: "A pixel" },
        { q: "What does a Caesar cipher do to each letter?", a: "Shifts it along the alphabet" },
        { q: "What is a check that spots a flipped bit called?", a: "A parity check" },
        { q: "What do we call the smallest piece of computer data?", a: "A bit" }
      ]
    }
  };

  // ==================== The 20 unplugged activities ====================
  // { name, emoji, level, mins, teaches, needs[], steps[], tip }
  // Kept as data so the tab, the print sheet and any future page all read the same list.
  var CS_UNPLUGGED = [

    // ---------- Easy ----------
    {
      name: "The Sandwich Robot", emoji: "🥪", level: "Easy", mins: 15,
      teaches: "Algorithms, and why a computer needs instructions that leave nothing out",
      needs: ["Bread", "Something to spread", "A blunt knife", "Paper and a pencil"],
      steps: [
        "The child writes down the steps for making a sandwich. Every step goes on its own line.",
        "The grown-up is now a robot. Robots do exactly what the paper says and nothing else.",
        "Read step one out loud and do it EXACTLY. If the paper says 'put the jam on the bread', put the closed jar on top of the loaf.",
        "Carry on down the list, being as literal as you can.",
        "When it goes wrong, hand the paper back. The child rewrites the step to be clearer.",
        "Keep going until a real sandwich appears."
      ],
      tip: "Do not help. The whole lesson is in the moment the child realises the robot cannot guess what they meant."
    },
    {
      name: "Robot on the Grid", emoji: "🤖", level: "Easy", mins: 20,
      teaches: "Sequences and commands: writing a program before you run it",
      needs: ["Chalk outside, or masking tape indoors, or 16 sheets of paper", "Paper and a pencil", "A small toy as the treasure"],
      steps: [
        "Lay out a grid four squares by four squares on the floor.",
        "Put the toy on one square. That is the treasure.",
        "One player stands on a corner square and is the robot.",
        "Everyone agrees on four commands: FORWARD, TURN LEFT, TURN RIGHT, PICK UP.",
        "The programmer writes the whole list of commands BEFORE the robot moves at all.",
        "Read the program out one line at a time. The robot does only what is written.",
        "If the robot ends up in the wrong place, fix the program and run it again from the start."
      ],
      tip: "Writing the whole program first is the important bit. Steering the robot square by square is not programming, it is remote control."
    },
    {
      name: "Pattern Bracelets", emoji: "📿", level: "Easy", mins: 20,
      teaches: "Loops: repeating a small pattern many times instead of writing it out",
      needs: ["String or wool", "Beads, buttons or paper circles in two or three colours", "Paper and a pencil"],
      steps: [
        "Choose a short pattern of three or four beads, for example red, red, blue.",
        "Write it down once, then write REPEAT 8 TIMES next to it.",
        "Thread the beads following your written pattern.",
        "Count how many beads you threaded in total.",
        "Now write out every single bead one by one on paper, with no repeat.",
        "Compare the two pieces of paper and see which was quicker to write."
      ],
      tip: "That short version with REPEAT is a loop. It is why a program that draws a hundred stars is not a hundred lines long."
    },
    {
      name: "Pixel Pictures", emoji: "🎨", level: "Easy", mins: 20,
      teaches: "How a screen builds a picture out of tiny coloured squares",
      needs: ["Squared paper", "Coloured pencils or crayons", "A ruler"],
      steps: [
        "Mark out a grid ten squares across and ten squares down.",
        "Draw a simple picture on the grid, colouring in whole squares only. No part squares and no curves.",
        "Hold it at arm's length and then across the room. Notice how the jagged edges smooth out from far away.",
        "Now draw the same picture on a grid of twenty by twenty squares.",
        "Compare the two. The one with more squares looks better and took longer to fill in.",
        "Write down how many squares each picture used."
      ],
      tip: "Each square is a pixel. More pixels means a sharper picture and a bigger file, which is exactly the trade a phone camera makes."
    },
    {
      name: "If This, Then That Cards", emoji: "❓", level: "Easy", mins: 15,
      teaches: "Conditionals: a computer choosing between two paths",
      needs: ["Index cards or paper cut into cards", "A pencil"],
      steps: [
        "Write six rules, one per card, in this shape: IF it is raining THEN take a coat.",
        "On the back of each card, write ELSE and what happens instead.",
        "Shuffle the cards and put them face down in a pile.",
        "Turn one over and read only the IF part out loud.",
        "Everyone else says what should happen next.",
        "Turn the card over to check.",
        "Now make three cards where the IF part is something silly, and see whether the rule still works."
      ],
      tip: "Ask what happens if the IF part is neither clearly true nor clearly false. Computers hate that, and so will your rules."
    },
    {
      name: "The Instruction Trail", emoji: "🗺️", level: "Easy", mins: 25,
      teaches: "Writing a clear sequence for somebody else to follow",
      needs: ["Paper and a pencil", "A room or a garden", "A small prize to hide"],
      steps: [
        "One player hides the prize while everybody else is out of the room.",
        "That player writes a numbered list of instructions to find it, using steps and turns only.",
        "No pointing and no extra hints once the list is written.",
        "Hand the list to somebody else and watch them follow it.",
        "Mark the first instruction that goes wrong.",
        "Rewrite that one instruction so it cannot be misread, then test it on a third person."
      ],
      tip: "Counting steps works far better than 'go a bit further'. Precise words are the whole job."
    },
    {
      name: "Odd One Out Sorting", emoji: "🗂️", level: "Easy", mins: 15,
      teaches: "Data and attributes: describing things so a machine could group them",
      needs: ["A pile of mixed objects from around the house, about twenty", "Paper and a pencil"],
      steps: [
        "Tip all the objects onto the table.",
        "One player secretly picks a rule, for example 'made of metal'.",
        "They sort the objects into two groups following that rule, without saying what it is.",
        "Everybody else guesses the rule.",
        "Write down three different rules that would sort the same pile in three different ways.",
        "Try sorting by a rule that needs a yes or no answer, then by one that needs a number."
      ],
      tip: "A rule a computer can follow must have a clear yes or no answer. 'Is it pretty' will not sort anything."
    },

    // ---------- Medium ----------
    {
      name: "Binary Number Cards", emoji: "🔢", level: "Medium", mins: 25,
      teaches: "Binary: counting with only two digits, the way every computer does",
      needs: ["5 index cards or pieces of card", "A pencil", "Dot stickers, or just draw dots"],
      steps: [
        "Make five cards with dots on one side: 1 dot, 2 dots, 4 dots, 8 dots and 16 dots.",
        "Lay them in a row with 16 on the left and 1 on the right. The blank side means off.",
        "To show a number, turn cards face up until the dots add up to it. Always take the biggest card that still fits.",
        "Make the number 5. You should have 4 and 1 face up, so 0 0 1 0 1.",
        "Take turns calling out a number under 32 for the other person to build.",
        "Now write each answer as five 1s and 0s, where 1 means face up.",
        "Count from 0 up to 10 in binary, writing each one down, and look for the pattern in the last column."
      ],
      tip: "Every card is double the one to its right. That doubling is the whole idea, and it is why the eighth card would be 128."
    },
    {
      name: "Your Name in Binary", emoji: "🅰️", level: "Medium", mins: 25,
      teaches: "How letters are stored as numbers",
      needs: ["String or wool", "Beads or paper squares in two colours", "Paper and a pencil"],
      steps: [
        "Number the alphabet: A is 1, B is 2, all the way to Z is 26.",
        "Write down the number for each letter of your name.",
        "Turn each number into binary using the card trick from Binary Number Cards, with five digits each time.",
        "Choose one bead colour for 1 and another for 0.",
        "Thread the beads for your first letter, then add a spacer bead, then the next letter.",
        "Carry on until your whole name is on the string.",
        "Swap bracelets with somebody and work out whose name you are holding."
      ],
      tip: "Five digits is enough for 26 letters because 5 doublings reach 32. Four digits would only reach 16, so half the alphabet would not fit."
    },
    {
      name: "Bubble Sort Line-Up", emoji: "📏", level: "Medium", mins: 20,
      teaches: "A sorting algorithm, done with people instead of numbers",
      needs: ["6 to 10 players, or 10 cards with numbers on", "Space to stand in a line"],
      steps: [
        "Everybody holds a card with a number on it, or just stands in a random order by height.",
        "Start at the left end of the line.",
        "Compare the first two people only. If the left one is bigger, they swap places.",
        "Move one place right and compare the next two. Swap if the left one is bigger.",
        "Carry on to the end of the line. That is one pass.",
        "Go back to the left and do another pass.",
        "Stop when you get all the way along with no swaps at all. The line is sorted.",
        "Count how many passes and how many swaps it took."
      ],
      tip: "Try it again with ten people instead of six and count again. The work grows much faster than the line does, which is why nobody sorts a million things this way."
    },
    {
      name: "Guess My Number: Two Ways", emoji: "🔍", level: "Medium", mins: 15,
      teaches: "Linear search against binary search, and why the strategy matters",
      needs: ["Paper and a pencil", "Two players"],
      steps: [
        "One player thinks of a number between 1 and 100 and writes it down.",
        "Round one: the guesser starts at 1 and counts up, one number at a time. Count the guesses.",
        "Round two: a new number. This time the guesser always says the middle of what is left, starting with 50.",
        "After each guess the other player says HIGHER or LOWER.",
        "Count the guesses again.",
        "Play three rounds of each way and write down the worst case for both.",
        "Work out how many guesses the halving method would need for 1 to 1000."
      ],
      tip: "Halving needs at most 7 guesses for 100 and only 10 for 1000. Counting up needs 100 and 1000. That gap is why search algorithms matter."
    },
    {
      name: "Loop Dance", emoji: "💃", level: "Medium", mins: 20,
      teaches: "Loops and nested loops, written as a program and then performed",
      needs: ["Paper and a pencil", "Space to move", "Music if you like"],
      steps: [
        "Invent four simple moves and give each one a short name, such as CLAP, STOMP, SPIN, JUMP.",
        "Write a routine using only those names, for example CLAP CLAP STOMP.",
        "Put REPEAT 4 TIMES around it and perform it.",
        "Now write a second short routine and put REPEAT 3 TIMES around that.",
        "Put both loops inside one more loop that says REPEAT 2 TIMES.",
        "Perform the whole thing and count how many moves you actually did.",
        "Check your count by multiplying instead of counting."
      ],
      tip: "A loop inside a loop is a nested loop. Multiplying to predict the total is exactly how a programmer knows what their code will do before running it."
    },
    {
      name: "Debug the Dance", emoji: "🐞", level: "Medium", mins: 20,
      teaches: "Debugging: finding the one wrong step in a program",
      needs: ["Paper and a pencil", "Two or more players"],
      steps: [
        "Player one writes a routine of about ten moves using the names from Loop Dance.",
        "They perform it once, correctly, while everybody watches.",
        "Player one then copies the routine onto a fresh sheet, changing exactly one step, and hands it over.",
        "Player two performs the new sheet exactly as written.",
        "Everybody else watches for the moment it stops matching what they saw.",
        "Whoever spots the wrong line first says STOP and points at that line.",
        "Fix that line, run it again from the top, and check it matches."
      ],
      tip: "Running it from the top after a fix is the habit worth building. Programmers do it because a fix in one place can break another."
    },
    {
      name: "Secret Message Wheel", emoji: "🔐", level: "Medium", mins: 25,
      teaches: "Ciphers: hiding a message by shifting every letter",
      needs: ["Card", "Scissors", "A paper fastener or a pin and a rubber", "A pencil", "A ruler"],
      steps: [
        "Cut two circles of card, one about 10 cm across and one about 7 cm.",
        "Write the alphabet evenly around the edge of each circle.",
        "Push the fastener through the centre of both so the small circle turns on top of the big one.",
        "Choose a shift, for example 3, and line A on the small wheel up with D on the big one.",
        "Write your message, then find each letter on the small wheel and write down the letter it points to.",
        "Give the coded message to somebody with the shift number.",
        "They set their wheel the same way and read it backwards.",
        "Now try to crack a friend's message without being told the shift."
      ],
      tip: "There are only 25 shifts to try, which is why this code is easy to break. Real encryption uses keys with more possibilities than there are atoms in the room."
    },
    {
      name: "Paper Packets", emoji: "📨", level: "Medium", mins: 25,
      teaches: "Networks: how a message is split into packets and put back together",
      needs: ["Paper cut into small slips", "Pencils", "4 or more players", "A room to move around in"],
      steps: [
        "Write a message of about twenty words. Do not show anybody.",
        "Split it up so each slip carries only two or three words.",
        "Number every slip so the order is recorded on the paper itself.",
        "Shuffle the slips and hand them to different players standing around the room.",
        "Each player passes their slip to the next player, and so on, until all the slips reach the person at the far end.",
        "That person puts the message back together using the numbers, not the meaning.",
        "Now play again but secretly lose one slip, and see what the receiver does.",
        "Agree a rule for what the receiver should say when a number is missing."
      ],
      tip: "Numbering the slips is the whole trick. It is why a video still plays properly even though its packets arrive out of order."
    },

    // ---------- Hard ----------
    {
      name: "The Card Flip Trick", emoji: "🃏", level: "Hard", mins: 30,
      teaches: "Error detection: how a computer notices that data got corrupted",
      needs: ["36 cards that are a different colour on each side, or 36 squares of paper coloured on one side only"],
      steps: [
        "Lay the cards out in a square, five across and five down, with random sides showing.",
        "Now add one extra card to the end of every row, choosing its side so each row has an EVEN number of coloured cards.",
        "Do the same for every column, adding an extra card at the bottom.",
        "Add one more card in the bottom right corner so the last row and the last column are both even too.",
        "You now have a six by six square where every row and every column has an even count.",
        "Turn away while somebody flips exactly one card over.",
        "Turn back and find it: one row and one column will now have an odd count, and the flipped card sits where they cross.",
        "Try it again with two cards flipped and see whether you can still find them."
      ],
      tip: "Those extra cards are parity bits. Notice that one flip is always findable but two flips can hide each other, which is a real limit of this method."
    },
    {
      name: "Sorting Network on the Floor", emoji: "🕸️", level: "Hard", mins: 30,
      teaches: "Doing comparisons in parallel instead of one after another",
      needs: ["Chalk outside or masking tape indoors", "6 players", "6 cards with numbers on"],
      steps: [
        "Draw six lanes side by side on the ground, each long enough to walk down.",
        "Draw short rungs joining pairs of lanes at different points along their length. Copy a six input sorting network diagram, or use this order: join lanes 1 and 2, 3 and 4, 5 and 6, then 1 and 3, 4 and 6, then 1 and 2, 3 and 5, 4 and 6, then 2 and 3, 4 and 5, then 3 and 4.",
        "Each player takes a card and stands at the start of one lane.",
        "Walk forward together.",
        "When two players meet at a rung, they compare cards. The smaller number carries on down the left lane, the bigger down the right.",
        "Keep walking until everybody reaches the far end.",
        "Read the cards from left to right. They are sorted.",
        "Do it again with different numbers and time it against the Bubble Sort Line-Up."
      ],
      tip: "Several comparisons happen at the same moment here, which is why it finishes so much faster. That is parallel computing, done with feet."
    },
    {
      name: "Map Colouring Challenge", emoji: "🗺️", level: "Hard", mins: 30,
      teaches: "Graph colouring: solving a problem where choices affect each other",
      needs: ["Paper", "Coloured pencils in at least four colours", "A pencil"],
      steps: [
        "Draw a squiggly closed shape on the paper, then draw more squiggles across it until you have about twelve regions.",
        "The rule: two regions that share an edge must not be the same colour. Touching at a single corner is allowed.",
        "Colour the whole map using as few colours as you can.",
        "Write down how many colours you needed.",
        "Try again on a new map and see whether you can ever be forced to use five.",
        "Now try to DRAW a map that needs five colours."
      ],
      tip: "You will not manage it. Any flat map can be coloured with four, which mathematicians spent over a hundred years proving, and the proof needed a computer."
    },
    {
      name: "The Human Search Engine", emoji: "📚", level: "Hard", mins: 35,
      teaches: "Indexing: why searching an index beats searching everything",
      needs: ["10 short pages of text, from a magazine or written by hand", "Index cards", "Pencils", "A timer"],
      steps: [
        "Number the ten pages 1 to 10 and spread them on the table.",
        "Round one: somebody calls out a word. Everybody searches every page to find which ones contain it. Time it.",
        "Now build an index. Choose about twenty interesting words.",
        "Write each word on its own card, and under it list the page numbers where that word appears.",
        "Sort the cards into alphabetical order.",
        "Round two: call out another word. Find it in the index instead. Time it again.",
        "Compare the two times.",
        "Talk about the cost: how long did building the index take, and how many searches before it pays for itself?"
      ],
      tip: "A search engine does exactly this. It reads the whole web slowly and in advance, so that your search can be fast."
    },
    {
      name: "Paper State Machine", emoji: "🎰", level: "Hard", mins: 35,
      teaches: "State machines: a system that remembers where it is and what happens next",
      needs: ["A large sheet of paper", "Coloured pens", "A counter or coin", "A dice or a coin to flip"],
      steps: [
        "Choose something with a few clear states, for example a traffic light, or a vending machine, or a door that can be locked, shut or open.",
        "Draw a circle for each state and write the state's name inside it.",
        "Draw an arrow from one circle to another for every change that can happen, and write ON the arrow what causes it.",
        "Mark the starting state with a thick arrow coming in from nowhere.",
        "Put the counter on the start state.",
        "Call out events one at a time. Move the counter only if there is an arrow for that event.",
        "If there is no arrow, the machine ignores the event. Say so out loud and leave the counter where it is.",
        "Now find a state you can get into but never get out of, or prove there is not one."
      ],
      tip: "A state you can never leave is called a trap state. Finding one on paper is far cheaper than finding one in a program that is already running."
    }
  ];

  // ==================== Illustrations ====================
  // Kept apart from the activity text so the list above stays readable. Each one is drawn with
  // window.PaperArt, the site's shared SVG kit, so these look like the paper activities rather
  // than a second art style. The kit is looked up when the picture is drawn, not when this file
  // loads, so script order cannot break it.
  function art(draw) { return function () { return window.PaperArt.box(draw(window.PaperArt)); }; }

  // a small friendly stick child, used wherever an activity needs people in it
  function kid(A, x, y, s, shirt) {
    s = s || 1;
    return A.circ(x, y - 16 * s, 8 * s, "#ffd9c0") +
      A.circ(x - 3 * s, y - 17 * s, 1.5 * s, "#2d2a4a") + A.circ(x + 3 * s, y - 17 * s, 1.5 * s, "#2d2a4a") +
      A.path("M" + (x - 3 * s) + " " + (y - 12 * s) + " q" + (3 * s) + " " + (2.5 * s) + " " + (6 * s) + " 0",
        "none", ' stroke="#2d2a4a" stroke-width="' + (1.3 * s) + '" fill="none" stroke-linecap="round"') +
      A.poly((x - 9 * s) + "," + (y + 14 * s) + " " + (x + 9 * s) + "," + (y + 14 * s) + " " +
        (x + 7 * s) + "," + (y - 8 * s) + " " + (x - 7 * s) + "," + (y - 8 * s), shirt || "#4d96ff");
  }

  var CS_ART = {

    "The Sandwich Robot": art(function (A) {
      return A.ground(134) +
        A.sheet(66, 44, 56, 50, "#c9cbd6", 0, 10) +
        A.line(94, 44, 94, 30, "#8f93a3", 3) + A.circ(94, 27, 5, "#e2453b") +
        A.circ(82, 62, 7, "#7fc4ff") + A.circ(106, 62, 7, "#7fc4ff") +
        A.circ(82, 62, 3, "#1f3a5f") + A.circ(106, 62, 3, "#1f3a5f") +
        A.sheet(82, 78, 24, 7, "#5c5f70", 0, 3) +
        A.sheet(58, 94, 72, 30, "#a8adba", 0, 8) +
        A.poly("130,64 154,58 152,80 130,78", "#e8b76a") +
        A.poly("132,68 152,63 151,74 132,74", "#8ce99a") +
        A.sheet(24, 56, 36, 46, "#ffffff", -8, 3) +
        A.line(30, 68, 52, 66, "#c9c3d8", 2) + A.line(30, 76, 48, 74, "#c9c3d8", 2) +
        A.line(30, 84, 52, 82, "#c9c3d8", 2);
    }),

    "Robot on the Grid": art(function (A) {
      var s = A.sheet(46, 24, 108, 108, "#ffffff", 0, 6);
      for (var i = 1; i < 4; i++) {
        s += A.line(46 + i * 27, 24, 46 + i * 27, 132, "#e6e0f5", 1.6);
        s += A.line(46, 24 + i * 27, 154, 24 + i * 27, "#e6e0f5", 1.6);
      }
      s += A.path("M59 118 L59 64 L113 64 L113 51", "none",
        ' stroke="#ff6b9d" stroke-width="2.6" fill="none" stroke-dasharray="5 4" stroke-linecap="round"');
      s += A.sheet(50, 106, 18, 18, "#4d96ff", 0, 5) +
        A.circ(55, 113, 2, "#fff") + A.circ(63, 113, 2, "#fff") +
        A.line(59, 106, 59, 100, "#1f6feb", 2) + A.circ(59, 98, 2.4, "#e2453b");
      return s + A.star(113, 42, 13, "#ffd166");
    }),

    "Pattern Bracelets": art(function (A) {
      var cols = ["#e2453b", "#e2453b", "#4d96ff"];
      var s = A.path("M34 70 Q100 128 166 70", "none", ' stroke="#c9b892" stroke-width="2.4" fill="none"');
      for (var i = 0; i < 12; i++) {
        var t = i / 11, x = 34 + t * 132, y = 70 + Math.sin(t * Math.PI) * 42;
        s += A.circ(x, y, 7.5, cols[i % 3]);
        s += A.circ(x - 2, y - 2, 2.2, "#fff", ' opacity=".45"');
      }
      return s + A.sheet(58, 20, 84, 24, "#f2eefc", 0, 8) +
        A.label(100, 37, "REPEAT x 8", "#5d3fa0");
    }),

    "Pixel Pictures": art(function (A) {
      var grid = [
        "00110011", "01111111", "01111111", "01111111",
        "00111110", "00011100", "00001000", "00000000"
      ];
      var s = A.sheet(58, 22, 88, 88, "#ffffff", 0, 5);
      for (var r = 0; r < 8; r++) {
        for (var c = 0; c < 8; c++) {
          var on = grid[r][c] === "1";
          s += '<rect x="' + (59 + c * 11) + '" y="' + (23 + r * 11) + '" width="10" height="10" fill="' +
            (on ? "#ff6b9d" : "#fdfbff") + '" stroke="#ece7f7" stroke-width="0.7"/>';
        }
      }
      return s + A.label(100, 128, "every square is one pixel", "#a89ec4");
    }),

    "If This, Then That Cards": art(function (A) {
      return A.sheet(20, 44, 62, 62, "#ffffff", -5, 6) +
        A.circ(44, 68, 12, "#c9cbd6") + A.circ(56, 70, 9, "#c9cbd6") +
        A.line(42, 84, 39, 94, "#4d96ff", 2.4) + A.line(52, 84, 49, 94, "#4d96ff", 2.4) +
        A.line(62, 84, 59, 94, "#4d96ff", 2.4) +
        A.label(51, 42, "IF", "#5d3fa0") +
        A.path("M90 74 L112 74", "none", ' stroke="#5d3fa0" stroke-width="3" stroke-linecap="round"') +
        A.poly("110,68 122,74 110,80", "#5d3fa0") +
        A.sheet(126, 44, 60, 62, "#ffffff", 5, 6) +
        A.path("M142 96 L144 62 q14 -10 26 0 L172 96 Z", "#ffd166") +
        A.poly("144,62 138,78 148,74", "#f2b705") + A.poly("170,62 176,78 166,74", "#f2b705") +
        A.label(156, 42, "THEN", "#5d3fa0");
    }),

    "The Instruction Trail": art(function (A) {
      var s = A.path("M26 116 Q54 116 58 92 Q62 66 96 62 Q130 58 134 40", "none",
        ' stroke="#b8b2cc" stroke-width="2.4" fill="none" stroke-dasharray="6 5"');
      [[30, 114, "1"], [58, 96, "2"], [92, 64, "3"], [126, 46, "4"]].forEach(function (p) {
        s += A.circ(p[0], p[1], 10, "#7c5cbf") + A.label(p[0], p[1] + 4, p[2], "#fff");
      });
      return s + A.sheet(146, 74, 40, 34, "#ff6b9d", 0, 5) +
        A.line(166, 74, 166, 108, "#ffd166", 4) + A.line(146, 90, 186, 90, "#ffd166", 4) +
        A.path("M158 74 q8 -14 16 0", "none", ' stroke="#ffd166" stroke-width="4" fill="none"');
    }),

    "Odd One Out Sorting": art(function (A) {
      var s = A.sheet(16, 34, 78, 86, "#eaf9ec", 0, 10) + A.sheet(106, 34, 78, 86, "#eaf3ff", 0, 10);
      [[36, 58], [64, 56], [50, 84], [30, 104], [70, 100]].forEach(function (p) {
        s += A.circ(p[0], p[1], 11, "#6bcb77");
      });
      [[126, 56], [156, 58], [140, 84], [122, 104], [162, 100]].forEach(function (p) {
        s += A.sheet(p[0] - 10, p[1] - 10, 20, 20, "#4d96ff", 0, 4);
      });
      return s + A.line(100, 30, 100, 124, "#c9c3d8", 2, "5 4") +
        A.label(55, 26, "round", "#2f6b32") + A.label(145, 26, "square", "#12447f");
    }),

    "Binary Number Cards": art(function (A) {
      var vals = [16, 8, 4, 2, 1], up = [false, false, true, false, true];
      var s = "";
      for (var i = 0; i < 5; i++) {
        var x = 20 + i * 34;
        s += A.sheet(x, 40, 28, 62, up[i] ? "#ffffff" : "#7c5cbf", 0, 4);
        if (up[i]) {
          s += '<rect x="' + x + '" y="40" width="28" height="62" rx="4" fill="none" stroke="#c9c3d8" stroke-width="1.3"/>';
          var n = vals[i], k = 0;
          for (var r = 0; r < 4 && k < n; r++) {
            for (var c = 0; c < 4 && k < n; c++, k++) {
              s += A.circ(x + 7 + c * 5, 50 + r * 5, 1.8, "#2d2a4a");
            }
          }
        }
        s += A.label(x + 14, 118, up[i] ? "1" : "0", up[i] ? "#2f9e44" : "#a89ec4");
      }
      return s + A.label(100, 30, "4 + 1 = 5", "#5d3fa0") + A.label(100, 136, "0 0 1 0 1", "#a89ec4");
    }),

    "Your Name in Binary": art(function (A) {
      var pat = [1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 2, 0, 1, 1, 0, 0];
      var s = A.path("M24 62 Q100 108 176 62", "none", ' stroke="#c9b892" stroke-width="2.2" fill="none"');
      for (var i = 0; i < pat.length; i++) {
        var t = i / (pat.length - 1), x = 24 + t * 152, y = 62 + Math.sin(t * Math.PI) * 33;
        var col = pat[i] === 2 ? "#c9c3d8" : (pat[i] ? "#ffd166" : "#5b21b6");
        s += A.circ(x, y, pat[i] === 2 ? 4 : 6.6, col);
      }
      return s + A.label(100, 30, "A = 1 = 0 0 0 0 1", "#5d3fa0") +
        A.label(100, 132, "one colour for 1, one for 0", "#a89ec4");
    }),

    "Bubble Sort Line-Up": art(function (A) {
      var hs = [30, 54, 40, 66, 46], cols = ["#6bcb77", "#4d96ff", "#ffd166", "#ff6b9d", "#7c5cbf"];
      var s = A.ground(126);
      for (var i = 0; i < 5; i++) {
        var x = 34 + i * 33, h = hs[i];
        s += A.sheet(x - 12, 120 - h, 24, h, cols[i], 0, 5);
        s += A.label(x, 116, String(i + 1), "#fff");
      }
      s += A.path("M67 42 q16 -16 32 0", "none", ' stroke="#e2453b" stroke-width="2.4" fill="none"') +
        A.poly("95,38 103,44 95,50", "#e2453b") + A.poly("71,38 63,44 71,50", "#e2453b");
      return s + A.label(100, 26, "compare, then swap", "#8f1d47");
    }),

    "Guess My Number: Two Ways": art(function (A) {
      var s = A.line(22, 92, 178, 92, "#c9c3d8", 3);
      s += A.label(24, 112, "1", "#a89ec4") + A.label(176, 112, "100", "#a89ec4");
      [[100, "50"], [139, "75"], [120, "62"]].forEach(function (p, i) {
        s += A.line(p[0], 92, p[0], 80 - i * 12, "#4d96ff", 2);
        s += A.circ(p[0], 76 - i * 12, 11, "#4d96ff") + A.label(p[0], 80 - i * 12, p[1], "#fff");
      });
      s += A.circ(60, 92, 5, "#ff6b9d") + A.label(60, 76, "1,2,3...", "#e05586");
      return s + A.label(100, 132, "halve it, or count them all", "#a89ec4");
    }),

    "Loop Dance": art(function (A) {
      return kid(A, 62, 84, 1.1, "#ff6b9d") + kid(A, 138, 84, 1.1, "#4d96ff") +
        A.path("M78 70 q22 -26 44 0", "none", ' stroke="#7c5cbf" stroke-width="3" fill="none"') +
        A.poly("118,64 130,70 118,76", "#7c5cbf") +
        A.line(48, 74, 34, 62, "#ff6b9d", 3.4) + A.line(152, 74, 166, 62, "#4d96ff", 3.4) +
        A.sheet(66, 18, 68, 24, "#f2eefc", 0, 8) + A.label(100, 35, "REPEAT x 4", "#5d3fa0") +
        A.ground(128);
    }),

    "Debug the Dance": art(function (A) {
      var s = A.sheet(30, 26, 104, 106, "#ffffff", -3, 5);
      var moves = ["CLAP", "STOMP", "SPIN", "JUMP", "CLAP"];
      for (var i = 0; i < 5; i++) {
        var y = 46 + i * 18;
        s += A.label(46, y, String(i + 1), "#a89ec4");
        s += A.line(56, y - 4, 122, y - 4, i === 2 ? "#ffd9d6" : "#e6e0f5", 9);
        s += '<text x="60" y="' + y + '" font-family="Fredoka, system-ui, sans-serif" font-size="9" ' +
          'font-weight="700" fill="' + (i === 2 ? "#b52f2a" : "#57547a") + '">' + moves[i] + '</text>';
      }
      s += A.line(112, 74, 124, 86, "#e2453b", 3) + A.line(124, 74, 112, 86, "#e2453b", 3);
      return s + A.ell(156, 84, 14, 17, "#e2453b") + A.ell(156, 84, 14, 17, "#e2453b") +
        A.line(156, 68, 156, 100, "#2d2a4a", 1.6) +
        A.circ(150, 78, 2.6, "#2d2a4a") + A.circ(162, 90, 2.6, "#2d2a4a") + A.circ(150, 92, 2.6, "#2d2a4a") +
        A.circ(156, 66, 7, "#2d2a4a");
    }),

    "Secret Message Wheel": art(function (A) {
      var s = A.circ(100, 74, 50, "#ffd166") + A.circ(100, 74, 34, "#7c5cbf");
      for (var i = 0; i < 26; i++) {
        var a = (i * (360 / 26) - 90) * Math.PI / 180;
        s += A.circ(100 + Math.cos(a) * 43, 74 + Math.sin(a) * 43, 1.9, "#8a5f2e");
        s += A.circ(100 + Math.cos(a) * 27, 74 + Math.sin(a) * 27, 1.7, "#e0d6f5");
      }
      return s + A.circ(100, 74, 6, "#4a4560") +
        A.line(100, 74, 100, 26, "#e2453b", 2.4) + A.poly("96,30 104,30 100,20", "#e2453b") +
        A.label(100, 140, "shift every letter by 3", "#a89ec4");
    }),

    "Paper Packets": art(function (A) {
      var s = kid(A, 26, 92, 0.9, "#6bcb77") + kid(A, 174, 92, 0.9, "#ff6b9d");
      [[62, 54, "1"], [100, 74, "2"], [138, 50, "3"]].forEach(function (p) {
        s += A.sheet(p[0] - 15, p[1] - 11, 30, 22, "#ffffff", p[0] === 100 ? 6 : -6, 3);
        s += A.line(p[0] - 9, p[1] - 3, p[0] + 9, p[1] - 3, "#e6e0f5", 2);
        s += A.line(p[0] - 9, p[1] + 3, p[0] + 4, p[1] + 3, "#e6e0f5", 2);
        s += A.circ(p[0] + 12, p[1] - 12, 7, "#4d96ff") + A.label(p[0] + 12, p[1] - 9, p[2], "#fff");
      });
      return s + A.path("M42 84 Q100 30 158 84", "none",
        ' stroke="#c9c3d8" stroke-width="1.6" fill="none" stroke-dasharray="4 4"') +
        A.label(100, 132, "the numbers keep the order", "#a89ec4");
    }),

    "The Card Flip Trick": art(function (A) {
      var s = "";
      var on = [[1,0,1,0,1,1],[0,1,1,0,1,1],[1,1,0,0,1,1],[0,0,0,0,0,0],[1,1,1,0,1,0],[1,1,1,0,0,1]];
      for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 6; c++) {
          var last = (r === 5 || c === 5);
          s += '<rect x="' + (40 + c * 21) + '" y="' + (18 + r * 20) + '" width="18" height="17" rx="3" fill="' +
            (on[r][c] ? (last ? "#8ce99a" : "#4d96ff") : "#f2eefc") + '" stroke="#dcd6ee" stroke-width="0.8"/>';
        }
      }
      s += '<rect x="38" y="56" width="128" height="21" rx="5" fill="none" stroke="#e2453b" stroke-width="2.4"/>';
      s += '<rect x="80" y="16" width="22" height="122" rx="5" fill="none" stroke="#e2453b" stroke-width="2.4"/>';
      return s + A.circ(91, 66, 7, "none", ' stroke="#e2453b" stroke-width="2.6"');
    }),

    "Sorting Network on the Floor": art(function (A) {
      var s = "";
      for (var i = 0; i < 6; i++) {
        var x = 26 + i * 30;
        s += A.line(x, 22, x, 128, "#e6e0f5", 7);
        s += A.circ(x, 22, 6, ["#e2453b", "#ff9f68", "#ffd166", "#6bcb77", "#4d96ff", "#7c5cbf"][i]);
      }
      var rungs = [[0, 1, 40], [2, 3, 40], [4, 5, 40], [0, 2, 62], [3, 5, 62],
                   [0, 1, 84], [2, 4, 84], [1, 2, 106], [3, 4, 106]];
      rungs.forEach(function (g) {
        var x1 = 26 + g[0] * 30, x2 = 26 + g[1] * 30;
        s += A.line(x1, g[2], x2, g[2], "#5d3fa0", 2.4);
        s += A.circ(x1, g[2], 3, "#5d3fa0") + A.circ(x2, g[2], 3, "#5d3fa0");
      });
      return s + A.label(100, 142, "smaller goes left", "#a89ec4");
    }),

    "Map Colouring Challenge": art(function (A) {
      return A.sheet(20, 20, 160, 110, "#ffffff", 0, 8) +
        A.path("M20 20 L92 20 L78 68 L20 60 Z", "#ff9db0") +
        A.path("M92 20 L180 20 L180 62 L78 68 Z", "#7fc4ff") +
        A.path("M20 60 L78 68 L70 130 L20 130 Z", "#8ce99a") +
        A.path("M78 68 L180 62 L180 130 L70 130 Z", "#ffd166") +
        A.path("M96 62 q24 -8 34 14 q-14 20 -34 12 q-12 -14 0 -26 Z", "#ff9db0") +
        A.path("M20 20 L92 20 L78 68 L20 60 Z", "none", ' stroke="#fff" stroke-width="2.4"') +
        A.path("M78 68 L180 62", "none", ' stroke="#fff" stroke-width="2.4"') +
        A.path("M20 60 L78 68 L70 130", "none", ' stroke="#fff" stroke-width="2.4"') +
        A.label(100, 144, "no two neighbours the same", "#a89ec4");
    }),

    "The Human Search Engine": art(function (A) {
      var s = "";
      for (var i = 0; i < 4; i++) {
        s += A.sheet(18 + i * 5, 34 + i * 5, 62, 76, "#ffffff", -4 + i, 4);
      }
      s += A.line(38, 60, 82, 58, "#e6e0f5", 3) + A.line(38, 70, 76, 68, "#e6e0f5", 3) +
        A.line(38, 80, 82, 78, "#e6e0f5", 3) + A.line(38, 90, 68, 88, "#e6e0f5", 3);
      s += A.poly("108,44 172,40 176,120 112,124", "#c9974d") +
        A.sheet(112, 36, 18, 74, "#ffd166", 3, 3) + A.sheet(132, 34, 18, 74, "#8ce99a", 3, 3) +
        A.sheet(152, 32, 18, 74, "#7fc4ff", 3, 3) +
        A.label(122, 60, "A", "#8a6300") + A.label(142, 58, "M", "#2f6b32") + A.label(162, 56, "Z", "#12447f");
      return s + A.circ(96, 96, 13, "none", ' stroke="#e2453b" stroke-width="3"') +
        A.line(105, 105, 116, 116, "#e2453b", 3.4);
    }),

    "Paper State Machine": art(function (A) {
      var s = A.circ(46, 44, 22, "#e2453b") + A.circ(154, 44, 22, "#ffd166") + A.circ(100, 110, 22, "#6bcb77");
      s += A.label(46, 48, "STOP", "#fff") + A.label(154, 48, "WAIT", "#7d6210") + A.label(100, 114, "GO", "#fff");
      s += A.path("M68 38 q32 -14 64 0", "none", ' stroke="#5d3fa0" stroke-width="2.4" fill="none"') +
        A.poly("128,32 140,38 128,44", "#5d3fa0");
      s += A.path("M150 66 q-18 30 -34 34", "none", ' stroke="#5d3fa0" stroke-width="2.4" fill="none"') +
        A.poly("122,94 114,104 126,106", "#5d3fa0");
      s += A.path("M80 104 q-24 -12 -30 -38", "none", ' stroke="#5d3fa0" stroke-width="2.4" fill="none"') +
        A.poly("44,72 48,60 56,70", "#5d3fa0");
      return s + A.line(10, 44, 22, 44, "#2d2a4a", 3) + A.poly("20,38 30,44 20,50", "#2d2a4a") +
        A.label(100, 14, "an arrow for every change", "#a89ec4");
    })
  };

  // Attach each picture to its activity. A missing one is a bug worth failing loudly on in the
  // audit rather than quietly rendering an activity with no illustration.
  CS_UNPLUGGED.forEach(function (a) { a.art = CS_ART[a.name]; });

  window.CS_UNPLUGGED = CS_UNPLUGGED;

  // Rendered by app.js when a lesson carries unpluggedList. Prints as well as it displays, so a
  // grown-up can run one of these from a sheet of paper with no screen in the room, which is
  // rather the point.
  window.CSUnplugged = {
    html: function () {
      function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
          .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }
      var counts = { Easy: 0, Medium: 0, Hard: 0 };
      CS_UNPLUGGED.forEach(function (a) { counts[a.level]++; });
      return '<div class="cu-list">' +
        '<p class="cu-intro">' + CS_UNPLUGGED.length + ' activities, no screen required: ' +
          counts.Easy + ' easy, ' + counts.Medium + ' medium, ' + counts.Hard + ' hard.</p>' +
        CS_UNPLUGGED.map(function (a, i) {
          return '<div class="cu-item">' +
            '<h4><span class="cu-num">' + (i + 1) + '</span>' + esc(a.emoji) + ' ' + esc(a.name) +
              '<i class="cu-lvl ' + a.level.toLowerCase() + '">' + a.level + '</i>' +
              '<i class="cu-mins">⏱ ' + a.mins + ' min</i></h4>' +
            '<p class="cu-teaches"><b>Teaches:</b> ' + esc(a.teaches) + '</p>' +
            '<div class="cu-cols">' +
              '<div class="cu-side">' +
                (a.art ? '<div class="cu-art">' + a.art() + '</div>' : '') +
                '<div class="cu-needs"><h5>🧺 What you need</h5><ul>' +
                  a.needs.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") +
                '</ul></div>' +
              '</div>' +
              '<div class="cu-steps"><h5>📋 What to do</h5><ol>' +
                a.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") +
              '</ol></div>' +
            '</div>' +
            (a.tip ? '<p class="cu-tip">💡 <b>Talk about it:</b> ' + esc(a.tip) + '</p>' : '') +
          '</div>';
        }).join("") + '</div>';
    }
  };
})();
