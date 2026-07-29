// BrightSprouts Academy: "Let's Learn Essay Writing" (LESSONS[37]).
//
// Twelve units from "an essay is writing that says one thing and shows why" to a long essay with
// sources, plus a Writing Pad (js/essay-pad.js) to write on with a pen.
//
// Written without em dashes.
//
// ACCURACY RULES, because writing advice is full of rules that are not rules:
//  * The five paragraph essay is a training frame, not a law. It is taught here as scaffolding
//    with the scaffolding named out loud, so nobody arrives at university believing an essay has
//    to have exactly five paragraphs.
//  * "Never start a sentence with And or But" and "never use I" are school superstitions, not
//    grammar. Real writers do both. The course says which rules are real and which are habits.
//  * A thesis is a claim somebody could disagree with. "Dogs are animals" is a fact, not a
//    thesis, and that distinction is the single most useful thing in the whole course.
(function () {
  if (typeof LESSONS === "undefined") return;

  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }
  function arrowDef(id, col) {
    return '<defs><marker id="' + id + '" markerWidth="9" markerHeight="9" refX="7" refY="4.5" ' +
      'orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="' + col + '"/></marker></defs>';
  }

  // ==================== the kinds of essay, used by the lesson and the worksheets ====================
  var KINDS = [
    ["narrative", "tells a true story from your life", "The day I got lost at the fair"],
    ["descriptive", "paints a picture so the reader can see it", "My grandmother's kitchen"],
    ["expository", "explains how something works", "How a volcano erupts"],
    ["persuasive", "argues for what you think, to change a mind", "Why our school should start later"],
    ["compare and contrast", "puts two things side by side", "Cats and dogs as pets"],
    ["opinion", "says what you think and why", "The best season of the year"]
  ];
  var PARTS = [
    ["hook", "the first line, which makes somebody want to read on"],
    ["thesis", "the one sentence saying what you are going to argue"],
    ["body paragraph", "one idea, explained and backed up"],
    ["evidence", "the fact, quote or example that shows you are right"],
    ["conclusion", "the ending, which lands the point rather than repeating it"]
  ];
  var LINKERS = [
    ["also", "adding another point"], ["however", "turning to the other side"],
    ["because", "giving a reason"], ["for example", "about to give evidence"],
    ["as a result", "showing what followed"], ["finally", "reaching the last point"]
  ];
  window.ESSAY_FACTS = { kinds: KINDS, parts: PARTS, linkers: LINKERS };

  // ==================== diagrams ====================

  var dWhat = art(function (A) {
    var s = A.defs([["esA", "#ffd9a8", "#e0902b"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">an essay says one thing, then shows why</text>';
    s += A.slab(40, 46, 260, 34, "#ffffff", "#f4f7ff", 8);
    s += '<text x="170" y="68" text-anchor="middle" ' + A.LB + ' font-size="12">one big idea</text>';
    for (var i = 0; i < 3; i++) {
      s += A.slab(40 + i * 92, 100, 76, 46, "#eaf4ff", "#ffffff", 8);
      s += '<text x="' + (78 + i * 92) + '" y="122" text-anchor="middle" ' + A.LB + ' font-size="10.5">reason ' + (i + 1) + '</text>';
      s += '<text x="' + (78 + i * 92) + '" y="138" text-anchor="middle" ' + A.LB + ' font-size="9.5" opacity=".75">plus proof</text>';
      s += '<path d="M' + (78 + i * 92) + ' 100 L170 80" stroke="#9a94b8" stroke-width="1.4"/>';
    }
    s += '<text x="170" y="172" text-anchor="middle" ' + A.LB + ' font-size="11.5">a story tells what happened</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11.5">an essay tells you what to think, and why</text>';
    return A.frame("#fdf6ff", s);
  });

  var dSentence = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a paragraph is one idea, in a bundle</text>';
    s += A.slab(24, 40, 292, 112, "#ffffff", "#f7f4ff", 10);
    s += '<rect x="36" y="54" width="268" height="14" rx="7" fill="#7c5cbf"/>';
    s += '<text x="170" y="65" text-anchor="middle" ' + A.LBW + ' font-size="9.5">topic sentence: what this paragraph is about</text>';
    ["it explains the idea", "it gives an example", "it says why that matters"].forEach(function (t, i) {
      s += '<rect x="46" y="' + (78 + i * 20) + '" width="248" height="12" rx="6" fill="#cfe3f7"/>';
      s += '<text x="54" y="' + (88 + i * 20) + '" ' + A.LB + ' font-size="9">' + t + '</text>';
    });
    s += '<rect x="36" y="138" width="268" height="8" rx="4" fill="#e6e0f5"/>';
    s += '<text x="170" y="172" text-anchor="middle" ' + A.LB + ' font-size="11.5">new idea means new paragraph</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">that is the only rule that never bends</text>';
    return A.frame("#f4faff", s);
  });

  var dPlan = art(function (A) {
    var s = A.defs([]);
    s += arrowDef("esPlAr", "#5d3fa0");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">plan first, and the writing gets easier</text>';
    var steps = [["think", "#ffd166"], ["list", "#8fd39a"], ["order", "#7fb8e8"], ["write", "#f28fb0"]];
    steps.forEach(function (st, i) {
      s += A.slab(20 + i * 78, 52, 62, 48, st[1], "#ffffff", 9);
      s += '<text x="' + (51 + i * 78) + '" y="82" text-anchor="middle" ' + A.LB + ' font-size="11">' + st[0] + '</text>';
      if (i < 3) s += '<path d="M' + (86 + i * 78) + ' 76 h10" stroke="#5d3fa0" stroke-width="2.6" marker-end="url(#esPlAr)"/>';
    });
    s += '<rect x="20" y="116" width="300" height="52" rx="10" fill="#ffffff"/>';
    s += '<text x="32" y="134" ' + A.LB + ' font-size="10">a plan can be six words on the back of the page</text>';
    s += '<text x="32" y="150" ' + A.LB + ' font-size="10">it is there to stop you writing yourself into a corner</text>';
    s += '<text x="32" y="166" ' + A.LB + ' font-size="10">nobody marks the plan, so it can be as messy as you like</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">five minutes planning saves twenty rewriting</text>';
    return A.frame("#fff8f2", s);
  });

  var dHook = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">the opening does two jobs</text>';
    s += A.slab(24, 40, 292, 60, "#fff3c4", "#ffffff", 10);
    s += '<text x="38" y="62" ' + A.LB + ' font-size="11">1 the hook: make them want to read on</text>';
    s += '<text x="38" y="82" ' + A.LB + ' font-size="9.5" opacity=".8">a question, a surprising fact, a tiny moment</text>';
    s += A.slab(24, 108, 292, 60, "#dff0ff", "#ffffff", 10);
    s += '<text x="38" y="130" ' + A.LB + ' font-size="11">2 the thesis: say what you will argue</text>';
    s += '<text x="38" y="150" ' + A.LB + ' font-size="9.5" opacity=".8">one sentence somebody could disagree with</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">"Dogs are animals" is a fact, not a thesis</text>';
    return A.frame("#fffaf4", s);
  });

  var dBody = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">every paragraph does the same four jobs</text>';
    var rows = [["P", "point", "#7c5cbf"], ["E", "evidence", "#3a7fc9"],
                ["E", "explain", "#2f9e44"], ["L", "link", "#e0902b"]];
    rows.forEach(function (r, i) {
      s += '<circle cx="46" cy="' + (54 + i * 34) + '" r="15" fill="' + r[2] + '"/>';
      s += '<text x="46" y="' + (59 + i * 34) + '" text-anchor="middle" ' + A.LBW + ' font-size="14">' + r[0] + '</text>';
      s += '<rect x="72" y="' + (44 + i * 34) + '" width="236" height="20" rx="10" fill="#ffffff"/>';
      s += '<text x="84" y="' + (58 + i * 34) + '" ' + A.LB + ' font-size="10.5">' + r[1] + '</text>';
    });
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">point, evidence, explain, link. Then start again</text>';
    return A.frame("#f7f4ff", s);
  });

  var dEvidence = art(function (A) {
    var s = A.defs([["esE", "#c9f0c0", "#3f9c4a"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">a claim without proof is just an opinion</text>';
    s += A.slab(24, 46, 130, 54, "#ffe0e0", "#ffffff", 9);
    s += '<text x="89" y="70" text-anchor="middle" ' + A.LB + ' font-size="10.5">"break times</text>';
    s += '<text x="89" y="86" text-anchor="middle" ' + A.LB + ' font-size="10.5">are too short"</text>';
    s += '<text x="170" y="76" text-anchor="middle" ' + A.LB + ' font-size="18">+</text>';
    s += A.slab(186, 46, 130, 54, "#dff0dd", "#ffffff", 9);
    s += '<text x="251" y="70" text-anchor="middle" ' + A.LB + ' font-size="10.5">"we counted:</text>';
    s += '<text x="251" y="86" text-anchor="middle" ' + A.LB + ' font-size="10.5">11 minutes"</text>';
    s += A.slab(70, 116, 200, 40, "#fff3c4", "#ffffff", 9);
    s += '<text x="170" y="141" text-anchor="middle" ' + A.LB + ' font-size="11.5">= an argument</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11">numbers, quotes and things that really happened</text>';
    s += '<text x="170" y="199" text-anchor="middle" ' + A.LB + ' font-size="10.5">say where it came from, or it does not count</text>';
    return A.frame("#f4fbf5", s);
  });

  var dEnd = art(function (A) {
    var s = A.defs([]);
    s += arrowDef("esEnAr", "#e2453b");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">an ending lands, it does not repeat</text>';
    s += '<path d="M24 112 q60 -60 130 -30 q70 30 162 -34" stroke="#7c5cbf" stroke-width="4" fill="none" marker-end="url(#esEnAr)"/>';
    s += '<circle cx="24" cy="112" r="6" fill="#7c5cbf"/>';
    s += '<text x="24" y="134" ' + A.LB + ' font-size="10">start</text>';
    s += '<text x="316" y="64" text-anchor="end" ' + A.LB + ' font-size="10">finish somewhere new</text>';
    s += '<rect x="20" y="146" width="300" height="52" rx="10" fill="#ffffff"/>';
    s += '<text x="32" y="164" ' + A.LB + ' font-size="10">weak: "So that is why break times are too short."</text>';
    s += '<text x="32" y="180" ' + A.LB + ' font-size="10">better: say what should happen now, or why it matters</text>';
    s += '<text x="32" y="194" ' + A.LB + ' font-size="9.5" opacity=".8">never put a brand new argument in the last paragraph</text>';
    return A.frame("#fff8f2", s);
  });

  var dLink = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">joining words tell the reader what is coming</text>';
    var pairs = [["also", "one more"], ["however", "the other side"], ["because", "a reason"],
                 ["for example", "some proof"], ["as a result", "what followed"], ["finally", "the last one"]];
    pairs.forEach(function (p, i) {
      var x = 22 + (i % 2) * 154, y = 50 + Math.floor(i / 2) * 40;
      s += A.slab(x, y, 142, 30, "#ffffff", "#f4f7ff", 8);
      s += '<text x="' + (x + 10) + '" y="' + (y + 20) + '" ' + A.LB + ' font-size="10.5">' + p[0] + '</text>';
      s += '<text x="' + (x + 132) + '" y="' + (y + 20) + '" text-anchor="end" ' + A.LB + ' font-size="9" opacity=".72">' + p[1] + '</text>';
    });
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">use them sparingly, or the writing sounds like a robot</text>';
    return A.frame("#f4f8ff", s);
  });

  var dKinds = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">six kinds, six different jobs</text>';
    var ks = [["📖", "narrative", "#f28fb0"], ["🎨", "descriptive", "#ffd166"], ["🔧", "expository", "#8fd39a"],
              ["📣", "persuasive", "#7fb8e8"], ["⚖️", "compare", "#c9a8ff"], ["💭", "opinion", "#ffb26b"]];
    ks.forEach(function (k, i) {
      var x = 24 + (i % 3) * 100, y = 38 + Math.floor(i / 3) * 66;
      s += A.slab(x, y, 88, 54, k[2], "#ffffff", 9);
      s += '<text x="' + (x + 44) + '" y="' + (y + 26) + '" text-anchor="middle" font-size="16">' + k[0] + '</text>';
      s += '<text x="' + (x + 44) + '" y="' + (y + 44) + '" text-anchor="middle" ' + A.LB + ' font-size="9.5">' + k[1] + '</text>';
    });
    s += '<text x="170" y="184" text-anchor="middle" ' + A.LB + ' font-size="11">read the question twice and decide which one it wants</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="10.5">answering the wrong kind loses more marks than bad spelling</text>';
    return A.frame("#fdf6ff", s);
  });

  var dVoice = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">short words beat big ones</text>';
    var rows = [["utilise", "use"], ["in order to", "to"], ["at this moment in time", "now"],
                ["due to the fact that", "because"]];
    rows.forEach(function (r, i) {
      var y = 52 + i * 30;
      s += A.slab(20, y, 138, 22, "#ffe0e0", "#ffffff", 6);
      s += '<text x="28" y="' + (y + 15) + '" ' + A.LB + ' font-size="10">' + r[0] + '</text>';
      s += '<text x="170" y="' + (y + 15) + '" text-anchor="middle" ' + A.LB + ' font-size="11">→</text>';
      s += A.slab(182, y, 138, 22, "#dff0dd", "#ffffff", 6);
      s += '<text x="190" y="' + (y + 15) + '" ' + A.LB + ' font-size="10">' + r[1] + '</text>';
    });
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">writing to sound clever is how writing gets worse</text>';
    return A.frame("#fffaf4", s);
  });

  var dEdit = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">editing and proofreading are two jobs</text>';
    s += A.slab(20, 42, 142, 74, "#e8f0ff", "#ffffff", 9);
    s += '<text x="91" y="62" text-anchor="middle" ' + A.LB + ' font-size="11">edit</text>';
    s += '<text x="30" y="80" ' + A.LB + ' font-size="9">is it clear?</text>';
    s += '<text x="30" y="94" ' + A.LB + ' font-size="9">is it in the right order?</text>';
    s += '<text x="30" y="108" ' + A.LB + ' font-size="9">can anything go?</text>';
    s += A.slab(178, 42, 142, 74, "#ffeef0", "#ffffff", 9);
    s += '<text x="249" y="62" text-anchor="middle" ' + A.LB + ' font-size="11">proofread</text>';
    s += '<text x="188" y="80" ' + A.LB + ' font-size="9">spelling</text>';
    s += '<text x="188" y="94" ' + A.LB + ' font-size="9">capital letters</text>';
    s += '<text x="188" y="108" ' + A.LB + ' font-size="9">full stops</text>';
    s += '<text x="170" y="142" text-anchor="middle" ' + A.LB + ' font-size="11.5">edit first. There is no point spelling a sentence</text>';
    s += '<text x="170" y="160" text-anchor="middle" ' + A.LB + ' font-size="11.5">perfectly and then deleting it</text>';
    s += '<text x="170" y="188" text-anchor="middle" ' + A.LB + ' font-size="11">read it out loud. Your ear finds what your eye misses</text>';
    return A.frame("#f7f4ff", s);
  });

  var dLong = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a long essay is the same shape, bigger</text>';
    s += A.slab(24, 40, 292, 22, "#ffd166", "#ffffff", 6);
    s += '<text x="170" y="55" text-anchor="middle" ' + A.LB + ' font-size="10">introduction and thesis</text>';
    for (var i = 0; i < 4; i++) {
      s += A.slab(24, 70 + i * 24, 292, 18, "#cfe3f7", "#ffffff", 5);
      s += '<text x="34" y="' + (83 + i * 24) + '" ' + A.LB + ' font-size="9">section ' + (i + 1) + ', each with its own point and proof</text>';
    }
    s += A.slab(24, 168, 292, 22, "#c9f0c0", "#ffffff", 6);
    s += '<text x="170" y="183" text-anchor="middle" ' + A.LB + ' font-size="10">conclusion, then the list of sources</text>';
    s += '<text x="170" y="206" text-anchor="middle" ' + A.LB + ' font-size="10">say where every fact came from. That is not optional</text>';
    return A.frame("#f4faff", s);
  });

  var dPad = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">write it by hand, then tidy it up</text>';
    s += A.slab(22, 40, 140, 110, "#ffffff", "#f4f7ff", 8);
    for (var i = 0; i < 5; i++) {
      s += '<path d="M32 ' + (62 + i * 20) + ' h120" stroke="#cfe3f7" stroke-width="1.4"/>';
      s += '<path d="M38 ' + (58 + i * 20) + ' q16 -8 30 0 q14 8 28 -2" stroke="#2d2a4a" stroke-width="1.6" fill="none" opacity=".75"/>';
    }
    s += arrowDef("esPdAr", "#5d3fa0");
    s += '<path d="M170 96 h30" stroke="#5d3fa0" stroke-width="3" marker-end="url(#esPdAr)"/>';
    s += A.slab(210, 40, 108, 110, "#ffffff", "#f7f4ff", 8);
    for (var j = 0; j < 5; j++) {
      s += '<rect x="220" y="' + (54 + j * 20) + '" width="' + (88 - (j % 2) * 22) + '" height="7" rx="3.5" fill="#7c5cbf" opacity=".55"/>';
    }
    s += '<text x="92" y="170" text-anchor="middle" ' + A.LB + ' font-size="10.5">your handwriting</text>';
    s += '<text x="264" y="170" text-anchor="middle" ' + A.LB + ' font-size="10.5">typed notes</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="10.5">the reading happens on your own device, never online</text>';
    return A.frame("#fdf6ff", s);
  });

  // ==================== endless worksheets ====================
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

  var GEN = {
    whatis: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "How many big ideas should one essay have?", a: "One" };
      if (k === 1) return { q: "What is the difference between a story and an essay?", a: "A story tells what happened, an essay says what to think" };
      return { q: "What must follow every claim you make?", a: "A reason or some proof" };
    },
    paragraph: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What is the first sentence of a paragraph called?", a: "The topic sentence" };
      if (k === 1) return { q: "How many ideas go in one paragraph?", a: "One" };
      return { q: "When do you start a new paragraph?", a: "When you start a new idea" };
    },
    plan: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What should you do before you start writing?", a: "Plan" };
      if (k === 1) return { q: "Does anybody mark your plan?", a: "No, so it can be messy" };
      return { q: "What is a plan for?", a: "To stop you writing yourself into a corner" };
    },
    opening: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What is the first line of an essay called?", a: "The hook" };
      if (k === 1) return { q: "What is the sentence saying what you will argue called?", a: "The thesis" };
      return { q: "Is \"Dogs are animals\" a thesis?", a: "No, it is a fact nobody can disagree with" };
    },
    body: function () {
      var p = pick(PARTS);
      var k = R(0, 1);
      if (k === 0) return { q: "In an essay, what is the " + p[0] + "?", a: cap(p[1]) };
      return { q: "What are the four jobs of a body paragraph?", a: "Point, evidence, explain, link" };
    },
    evidence: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What turns an opinion into an argument?", a: "Evidence" };
      if (k === 1) return { q: "Name one kind of evidence.", a: "A number, a quote or something that happened" };
      return { q: "What must you say about a fact you have used?", a: "Where it came from" };
    },
    ending: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Should a conclusion just repeat the introduction?", a: "No" };
      if (k === 1) return { q: "Can you put a brand new argument in the conclusion?", a: "No" };
      return { q: "What makes a strong ending?", a: "Saying why it matters, or what should happen now" };
    },
    linking: function () {
      var l = pick(LINKERS);
      var k = R(0, 1);
      if (k === 0) return { q: "What does \"" + l[0] + "\" tell the reader is coming?", a: cap(l[1]) };
      return { q: "Which joining word would you use before some proof?", a: "For example" };
    },
    kinds: function () {
      var kd = pick(KINDS), k = R(0, 1);
      if (k === 0) return { q: "What does a " + kd[0] + " essay do?", a: cap(kd[1]) };
      return { q: "Which kind of essay would \"" + kd[2] + "\" be?", a: cap(kd[0]) };
    },
    voice: function () {
      var w = pick([["utilise", "use"], ["in order to", "to"], ["at this moment in time", "now"],
                    ["due to the fact that", "because"], ["a large number of", "many"]]);
      return { q: "What is a shorter way to say \"" + w[0] + "\"?", a: cap(w[1]) };
    },
    editing: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Which comes first, editing or proofreading?", a: "Editing" };
      if (k === 1) return { q: "What does proofreading check?", a: "Spelling, capital letters and full stops" };
      return { q: "What is the best trick for catching mistakes?", a: "Read it out loud" };
    },
    longessay: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Does a long essay have a different shape from a short one?", a: "No, the same shape, bigger" };
      if (k === 1) return { q: "What goes at the very end of a long essay?", a: "The list of sources" };
      return { q: "Is saying where a fact came from optional?", a: "No" };
    },
    pad: null
  };
  window.ESSAY_GEN = GEN;

  // ==================== the units ====================
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, activity, questions, extra) {
    var u = { title: title, emoji: emoji, band: band, intro: intro, learn: learn, diagram: diagram,
              parentNote: parentNote, activity: activity, essayGen: key, questions: questions };
    if (extra) for (var k in extra) u[k] = extra[k];
    return u;
  }

  LESSONS[37] = {

    whatis: U("whatis", "1 · What Is an Essay?", "📝", "Grades 2 to 4",
      "An essay is a short piece of writing that says one thing and then shows why it is true. That is the whole definition. It is not a story, it is not a list of everything you know, and it does not have to be boring.",
      ["An essay has one big idea. If you cannot say yours in a sentence, you do not have one yet.",
       "After the idea come the reasons, and after each reason comes the proof.",
       "A story tells you what happened. An essay tells you what to think, and gives you reasons to agree.",
       "Essays are how people argue in writing: in school, in newspapers, in court and in science.",
       "The word essay comes from a French word meaning to try. An essay is an attempt at working something out.",
       "Nobody writes a good essay first go. The first draft is for getting the thinking down."],
      dWhat,
      "The most useful question you can ask about any essay, at any age, is: what is this saying, in one sentence? If your child cannot answer that about their own writing, the problem is not the spelling or the handwriting. It is that the piece does not know what it is about yet, and no amount of tidying will fix that.",
      "📝 One Sentence Challenge: pick something you believe, like which pet is best or what time school should start. Say it in ONE sentence, out loud. Then give three reasons. You have just planned an essay in about a minute.",
      [{ q: "What is an essay?", a: "Writing that says one thing and shows why" },
       { q: "How many big ideas should an essay have?", a: "One" },
       { q: "What comes after each reason?", a: "The proof" },
       { q: "How is an essay different from a story?", a: "A story tells what happened, an essay says what to think" },
       { q: "What does the word essay originally mean?", a: "To try" },
       { q: "Is the first draft meant to be perfect?", a: "No" },
       { q: "Where do people use essays?", a: "School, newspapers, science and law" },
       { q: "What should you be able to say in one sentence?", a: "What your essay is about" }]),

    paragraph: U("paragraph", "2 · Sentences and Paragraphs", "🧱", "Grades 2 to 5",
      "A paragraph is a bundle of sentences about one idea. Get paragraphs right and an essay almost organises itself, because each one becomes a step in the argument.",
      ["A sentence needs someone or something, and something happening. It starts with a capital letter and ends with a full stop.",
       "A paragraph is a group of sentences about ONE idea.",
       "The first sentence of a paragraph is usually the topic sentence: it says what the paragraph is about.",
       "The sentences after it explain that idea, give an example, and say why it matters.",
       "New idea, new paragraph. That is the one rule about paragraphs that never bends.",
       "Mixing sentence lengths keeps writing alive. A long one, then a short one. Like that.",
       "A whole page with no paragraph breaks is exhausting to read, however good the writing is."],
      dSentence,
      "If your child's writing arrives as one enormous block, do not talk about paragraphs in the abstract. Print it out and hand them a pencil: find every place where the subject changes and draw a line. They will find them, because they knew where the joins were when they wrote it. Then type it up with breaks and read both versions.",
      "🧱 Paragraph Hunt: take any page from a book you like and count the paragraphs. Read just the first sentence of each one, in order. You should get a rough summary of the whole page for free.",
      [{ q: "What is a paragraph?", a: "A group of sentences about one idea" },
       { q: "What is the first sentence of a paragraph called?", a: "The topic sentence" },
       { q: "How many ideas go in a paragraph?", a: "One" },
       { q: "When do you start a new paragraph?", a: "When the idea changes" },
       { q: "What does a sentence need?", a: "A subject and something happening" },
       { q: "How does a sentence end?", a: "With a full stop" },
       { q: "Should all your sentences be the same length?", a: "No" },
       { q: "What happens if you never break the page up?", a: "It is exhausting to read" }]),

    plan: U("plan", "3 · Planning Before You Write", "🗺️", "Grades 3 to 6",
      "Nearly everybody who finds essays hard starts writing too soon. Five minutes of planning saves twenty minutes of rewriting, and it is the single easiest habit to teach.",
      ["Read the question twice, and underline the words that tell you what to DO: explain, compare, argue, describe.",
       "Think first. Let your mind wander at the question for a minute before writing anything.",
       "List your ideas in any order, as quickly as you can. Do not judge them yet.",
       "Then order them: which reason is strongest? Strong ones often go first and last.",
       "Cross out anything that does not help the one big idea, however much you like it.",
       "A plan can be six words on the back of the page. Nobody marks it, so it can be as messy as you like.",
       "If you get stuck halfway through writing, the plan is where to go back to, not the beginning."],
      dPlan,
      "Plans feel like a waste of time to a child who wants to be finished. The way to sell it is with a stopwatch: plan one essay and not the next, and compare how long each took in total. Planning nearly always wins, and having proved it themselves they will keep doing it.",
      "🗺️ Two Minute Plan: set a timer for two minutes and plan an essay about your favourite meal. One sentence for the big idea, three reasons, one word each. Stop when the timer goes. That is a plan.",
      [{ q: "What should you do before writing?", a: "Plan" },
       { q: "How many times should you read the question?", a: "At least twice" },
       { q: "What kind of words should you underline in the question?", a: "The ones telling you what to do" },
       { q: "Should you judge your ideas while listing them?", a: "No, list first" },
       { q: "Where do the strongest reasons often go?", a: "First and last" },
       { q: "What do you do with an idea that does not fit?", a: "Cross it out" },
       { q: "Does anybody mark the plan?", a: "No" },
       { q: "Where do you go if you get stuck?", a: "Back to the plan" }]),

    opening: U("opening", "4 · The Opening: Hook and Thesis", "🪝", "Grades 3 to 7",
      "The first paragraph has two jobs: make somebody want to read on, and tell them what you are going to argue. Do both and the rest of the essay has somewhere to go.",
      ["The hook is the first line. It can be a question, a surprising fact, or a tiny moment that pulls the reader in.",
       "Do not open with \"In this essay I will\". It works, and it is the dullest possible start.",
       "The thesis is the sentence that says what you will argue. It usually sits at the end of the first paragraph.",
       "A thesis must be something somebody could disagree with. That is the test.",
       "\"Dogs are animals\" is a fact, so it cannot be a thesis. \"Dogs make better first pets than cats\" is a thesis, because somebody could argue back.",
       "A good thesis also hints at your reasons, which gives the reader a map of what is coming.",
       "Write the opening last if it will not come. Once you know what you argued, saying what you are about to argue gets much easier."],
      dHook,
      "The disagreement test is the thing to keep. Ask your child: could a reasonable person argue the opposite? If not, it is a fact and there is nothing to write about. This single question fixes more stuck essays than any amount of advice about vocabulary, and it keeps working for the rest of their education.",
      "🪝 Thesis or Fact: say five sentences out loud and decide which are theses. \"Break time is 15 minutes\" is a fact. \"Break time should be longer\" is a thesis. Now write one about your own school.",
      [{ q: "What is the first line of an essay called?", a: "The hook" },
       { q: "Name one kind of hook.", a: "A question, a surprising fact or a small moment" },
       { q: "What is the thesis?", a: "The sentence saying what you will argue" },
       { q: "Where does the thesis usually go?", a: "At the end of the first paragraph" },
       { q: "What is the test for a thesis?", a: "Could somebody disagree with it?" },
       { q: "Is \"Dogs are animals\" a thesis?", a: "No, it is a fact" },
       { q: "Is \"Dogs make better first pets than cats\" a thesis?", a: "Yes" },
       { q: "When can you write the opening?", a: "Last, if it will not come" }]),

    body: U("body", "5 · The Middle: One Idea at a Time", "🏗️", "Grades 4 to 8",
      "The middle of an essay is where the arguing happens. Each paragraph takes one reason and does the same four jobs with it, which makes a long piece of writing far less frightening.",
      ["Point: say the reason, in one clear sentence.",
       "Evidence: give the fact, the number, the quote or the example that shows it.",
       "Explain: say how that evidence proves your point. This is the part most people skip, and it is the part that earns the marks.",
       "Link: connect it back to your big idea, or forward to the next paragraph.",
       "Point, evidence, explain, link. Then start again with the next reason.",
       "One reason per paragraph. Two reasons crammed together confuse a reader every time.",
       "A body paragraph that never mentions the thesis has probably wandered off."],
      dBody,
      "The explain step is where nearly all the marks live and nearly all the writing stops. Children present the evidence as if it speaks for itself. Ask, every time: so what? How does that prove your point? Getting them to answer that out loud, then write down what they said, is often the whole difference between a middling essay and a good one.",
      "🏗️ Four Jobs: take one reason from your plan and write four sentences: point, evidence, explain, link. Label each one in the margin. That is a body paragraph, and it is a repeatable recipe.",
      [{ q: "What are the four jobs of a body paragraph?", a: "Point, evidence, explain, link" },
       { q: "What does the point do?", a: "States the reason in one sentence" },
       { q: "What is evidence?", a: "The fact, quote or example that shows it" },
       { q: "Which step do most people skip?", a: "Explain" },
       { q: "What does the link do?", a: "Connects back to the big idea or on to the next point" },
       { q: "How many reasons go in one paragraph?", a: "One" },
       { q: "Where do most of the marks live?", a: "In the explaining" },
       { q: "What if a paragraph never mentions the thesis?", a: "It has probably wandered off" }]),

    evidence: U("evidence", "6 · Evidence and Examples", "🔍", "Grades 4 to 9",
      "A claim with no proof is just an opinion said loudly. Evidence is what turns what you think into something a reader has to take seriously.",
      ["Evidence can be a number, a quote, a fact, or something that really happened.",
       "\"Break times are too short\" is an opinion. \"We timed it: break is 11 minutes\" is evidence.",
       "Always say where a fact came from. A fact with no source cannot be checked, so it does not count.",
       "Personal experience is real evidence, and it is weaker than a measurement. Use both when you can.",
       "Pick evidence that actually fits the point. Impressive facts about the wrong thing prove nothing.",
       "Two strong pieces of evidence beat five weak ones.",
       "If you cannot find any evidence for a point, that is worth noticing. It may be the wrong point."],
      dEvidence,
      "The habit worth building is asking \"how do you know?\" without any hostility in it, every time a claim goes past, including in ordinary conversation. Children who are used to that question start answering it before it is asked, which is exactly what evidence in an essay is. It also happens to be the foundation of not being fooled on the internet.",
      "🔍 Prove It: make three claims about your house, like which room is warmest. For each one, work out how you could actually prove it. Then go and do one of them, and write down what you found.",
      [{ q: "What turns an opinion into an argument?", a: "Evidence" },
       { q: "Name one kind of evidence.", a: "A number, a quote or a fact" },
       { q: "What must you say about a fact?", a: "Where it came from" },
       { q: "Why does a fact with no source not count?", a: "Nobody can check it" },
       { q: "Is what happened to you evidence?", a: "Yes, but it is weaker than a measurement" },
       { q: "Is more evidence always better?", a: "No, two strong beats five weak" },
       { q: "Must the evidence fit the point?", a: "Yes" },
       { q: "What if you cannot find evidence for a point?", a: "It may be the wrong point" }]),

    ending: U("ending", "7 · The Ending", "🎯", "Grades 4 to 9",
      "The conclusion is the last thing a reader sees, so it is the part they remember. A weak ending just says the beginning again in different words. A strong one lands somewhere.",
      ["Remind the reader of your big idea, in new words, not copied out.",
       "Pull your reasons together so they add up to something.",
       "Then go one step further: why does this matter, or what should happen now?",
       "Never put a brand new argument in the conclusion. There is no room left to prove it.",
       "Avoid \"In conclusion\" if you can. The reader can see it is the last paragraph.",
       "A short, confident ending beats a long, apologetic one.",
       "If the ending feels flat, the essay probably needed a stronger thesis, not a fancier last line."],
      dEnd,
      "A useful test: cover the conclusion and read the essay without it. If nothing is missing, the conclusion was only repeating. A good ending should leave the reader with something they did not have at the start of that paragraph, even if it is only a reason to care.",
      "🎯 Two Endings: write two endings for the same essay. One that just repeats the start, and one that says why it matters. Read both out loud to somebody and ask which one they prefer, and why.",
      [{ q: "Should a conclusion repeat the introduction word for word?", a: "No" },
       { q: "What should a conclusion do with your reasons?", a: "Pull them together" },
       { q: "What is the extra step in a strong ending?", a: "Saying why it matters or what should happen" },
       { q: "Can you add a new argument in the conclusion?", a: "No" },
       { q: "Why avoid \"In conclusion\"?", a: "The reader can already see it is the end" },
       { q: "Is a long ending better than a short one?", a: "No" },
       { q: "How do you test a conclusion?", a: "Cover it and see if anything is missing" },
       { q: "What does a flat ending often mean?", a: "The thesis was weak" }]),

    linking: U("linking", "8 · Joining It Up", "🔗", "Grades 3 to 8",
      "Joining words are signposts. They tell a reader what kind of thing is coming next, so the argument feels like one journey instead of a pile of separate sentences.",
      ["\"Also\" and \"as well\" say another point of the same kind is coming.",
       "\"However\" and \"on the other hand\" say you are about to turn to the other side.",
       "\"Because\" and \"since\" are about to give a reason.",
       "\"For example\" and \"such as\" say proof is coming.",
       "\"As a result\" and \"therefore\" say this is what followed.",
       "\"Finally\" and \"in the end\" say you are reaching the last point.",
       "Use them sparingly. A paragraph where every sentence starts with a signpost reads like a robot.",
       "Starting a sentence with And or But is not a mistake. It is a style choice, and good writers make it often."],
      dLink,
      "The And and But rule is worth correcting out loud, because a lot of children are taught it as grammar and it is not. Open almost any novel and you will find both within a few pages. What their teacher probably meant is do not start EVERY sentence that way, which is fair. Knowing which rules are real is part of learning to write.",
      "🔗 Signpost Swap: write three sentences with no joining words at all, then rewrite them with the right ones. Read both versions out loud and notice how much easier the second is to follow.",
      [{ q: "What do joining words tell the reader?", a: "What kind of thing is coming next" },
       { q: "Which word turns to the other side of an argument?", a: "However" },
       { q: "Which words come before proof?", a: "For example" },
       { q: "Which word gives a reason?", a: "Because" },
       { q: "Which words show what followed?", a: "As a result" },
       { q: "Should every sentence start with a joining word?", a: "No" },
       { q: "Is starting a sentence with But a mistake?", a: "No, it is a style choice" },
       { q: "What happens if you overuse signposts?", a: "The writing sounds like a robot" }]),

    kinds: U("kinds", "9 · Kinds of Essay", "📚", "Grades 4 to 10",
      "Not all essays want the same thing. Working out which kind a question is asking for, before you write a word, is worth more marks than anything else you can do in the first minute.",
      ["A narrative essay tells a true story from your life, and says what it meant.",
       "A descriptive essay paints a picture so clearly that a reader can see it.",
       "An expository essay explains how something works, without arguing.",
       "A persuasive essay argues for what you think and tries to change a mind.",
       "A compare and contrast essay puts two things side by side and weighs them up.",
       "An opinion essay says what you think and why, which is a gentler cousin of persuasive.",
       "The question usually tells you which one: explain, describe, argue, compare. Underline that word.",
       "Answering the wrong kind loses more marks than spelling ever will."],
      dKinds,
      "When an essay comes back with a disappointing mark, check the question before you check the writing. A beautifully written description when the question asked for an argument will always score badly, and the child will have no idea why. Reading the instruction word out loud together, before any writing, is thirty seconds well spent.",
      "📚 Six Questions: write one essay question of each kind about the same topic, say the sea. Notice how differently you would have to write for each, even though the subject never changed.",
      [{ q: "What does a narrative essay do?", a: "Tells a true story and says what it meant" },
       { q: "What does an expository essay do?", a: "Explains how something works" },
       { q: "What does a persuasive essay try to do?", a: "Change the reader's mind" },
       { q: "What does a compare and contrast essay do?", a: "Puts two things side by side" },
       { q: "How do you tell which kind is wanted?", a: "The instruction word in the question" },
       { q: "Name an instruction word.", a: "Explain, describe, argue or compare" },
       { q: "What should you do with that word?", a: "Underline it" },
       { q: "What costs more marks than spelling?", a: "Answering the wrong kind of question" }]),

    voice: U("voice", "10 · Words and Voice", "🎙️", "Grades 5 to 10",
      "Good essay writing is clear, not fancy. The most common mistake in the whole of school writing is reaching for a big word to sound clever, and ending up saying less.",
      ["Short words usually beat long ones. Use beats utilise, every single time.",
       "Cut the words that are doing nothing. \"Due to the fact that\" is just \"because\".",
       "Write like a clear person talking, not like a form. If you would not say it out loud, do not write it.",
       "Vary your sentence length. Several long sentences in a row are hard work.",
       "\"Never use I\" is a school rule, not a real one. In an opinion essay, I is often exactly right.",
       "Read your writing out loud. Anywhere you stumble is a sentence to rewrite.",
       "A thesaurus is useful for remembering a word you already know, and dangerous for finding one you do not."],
      dVoice,
      "The thesaurus warning is worth making concrete. Children swap in an impressive synonym that does not quite mean the same thing, and the sentence quietly stops making sense. The rule that works: if you could not explain the word to a younger child, do not use it yet. Sounding clever is not a goal; being understood is.",
      "🎙️ Say It Shorter: take any four sentences you have written and cut a quarter of the words without losing the meaning. It is nearly always possible, and the shorter version is nearly always better.",
      [{ q: "Which is usually better, a short word or a long one?", a: "A short word" },
       { q: "What is a shorter way to say \"utilise\"?", a: "Use" },
       { q: "What is a shorter way to say \"due to the fact that\"?", a: "Because" },
       { q: "Is \"never use I\" a real rule?", a: "No, it is a school rule" },
       { q: "What is the best way to catch a clumsy sentence?", a: "Read it out loud" },
       { q: "Should all your sentences be long?", a: "No, vary them" },
       { q: "When is a thesaurus dangerous?", a: "When you use a word you do not really know" },
       { q: "What is the goal of good writing?", a: "Being understood" }]),

    editing: U("editing", "11 · Editing and Proofreading", "✂️", "Grades 4 to 11",
      "These are two different jobs and doing them in the wrong order wastes your time. Editing is about what the writing says. Proofreading is about how it is spelled.",
      ["Edit first: is it clear, is it in the right order, can anything go?",
       "Proofread second: spelling, capital letters, full stops, names.",
       "There is no point perfecting the spelling of a sentence you are about to delete.",
       "Cutting is editing too. If a sentence is not helping the big idea, take it out.",
       "Read it out loud. Your ear catches what your eye slides over.",
       "Leave it overnight if you can. You cannot see your own mistakes while the writing is still warm.",
       "A spellchecker cannot hear the difference between their, there and they're, because all three are spelled correctly.",
       "Getting somebody else to read it is the single most effective step, and the one most people skip."],
      dEdit,
      "Ask to be read to rather than handed the page. A child reading their own work aloud hears the missing word, the sentence that runs on, the paragraph that arrived in the wrong place, and they hear it before you say anything. It also keeps the editing theirs, which matters more than the mark.",
      "✂️ Read It To Me: read your essay out loud to somebody. Every time you stumble, put a small mark in the margin and keep going. When you finish, look at the marks. Those are the sentences to fix.",
      [{ q: "Which comes first, editing or proofreading?", a: "Editing" },
       { q: "What does editing look at?", a: "Whether it is clear and in the right order" },
       { q: "What does proofreading look at?", a: "Spelling, capitals and full stops" },
       { q: "Is cutting part of editing?", a: "Yes" },
       { q: "What is the best trick for catching mistakes?", a: "Read it out loud" },
       { q: "Why leave it overnight?", a: "You cannot see your own mistakes straight away" },
       { q: "Can a spellchecker catch their and there?", a: "No, both are spelled correctly" },
       { q: "What is the most effective step people skip?", a: "Having somebody else read it" }]),

    longessay: U("longessay", "12 · The Long Essay", "📜", "Grades 7 to 12",
      "A long essay is not a different animal. It is the same shape with more room, plus one thing a short essay can get away with skipping: saying exactly where everything came from.",
      ["The shape does not change: introduction and thesis, sections that each make a point, conclusion.",
       "A longer essay needs sections rather than single paragraphs, but each section still does point, evidence, explain, link.",
       "Plan harder. The longer the piece, the more a plan is worth.",
       "Every fact you did not already know needs a source, named where you use it and listed at the end.",
       "Copying somebody's words without saying so is plagiarism, and it is treated seriously from secondary school onward.",
       "Quoting is fine when you say who wrote it. Putting it in your own words is often better, and still needs the source.",
       "Check whether a source is any good before you lean on it. Who wrote it, when, and how would they know?",
       "The five paragraph essay you learned early is scaffolding, not a law. Real essays are as long as the argument needs."],
      dLong,
      "The five paragraph frame is worth retiring out loud at this stage rather than letting it quietly expire, because plenty of students carry it into work that it actively hurts. Say plainly that it was training wheels, that it did its job, and that the number of paragraphs is now decided by the argument. Some children are genuinely relieved to hear they are allowed to stop.",
      "📜 Source Check: find three facts online about anything you like. For each one write down who said it, when, and how they would know. You will often find you cannot answer all three, which tells you something useful.",
      [{ q: "Does a long essay have a different shape?", a: "No, the same shape with more room" },
       { q: "What does each section still do?", a: "Point, evidence, explain, link" },
       { q: "What needs a source?", a: "Every fact you did not already know" },
       { q: "What is plagiarism?", a: "Using somebody's words without saying so" },
       { q: "Is quoting allowed?", a: "Yes, if you say who wrote it" },
       { q: "Name one question to ask about a source.", a: "Who wrote it, when, or how they would know" },
       { q: "Is the five paragraph essay a law?", a: "No, it is scaffolding" },
       { q: "How long should an essay be?", a: "As long as the argument needs" }]),

    pad: U("pad", "✍️ Writing Pad", "✍️", "Any age",
      "A blank sheet to write on with a pen, a finger or a mouse. Pick your stationery, write whatever you like, and press the button to turn your handwriting into typed notes.",
      ["Choose a theme first. Ten sheets of stationery, from a plain notebook to a chalkboard.",
       "Write with a stylus, a finger or a mouse. If you have a pen with an eraser end, turning it over rubs out.",
       "The lines are there to write on, the same as a real exercise book.",
       "When you have finished, press Turn my writing into typed notes.",
       "The reading happens on your own device. Your handwriting is never sent anywhere.",
       "Not every browser can read handwriting yet. If yours cannot, the pad will say so plainly and you can type your notes up instead.",
       "Use it for planning, for a first draft, or just for practising your handwriting."],
      dPad,
      "Handwriting and typing use different parts of the brain, and the research on note-taking is fairly consistent that writing by hand helps you remember and understand more, at the cost of speed. This pad is meant for the messy first stage: plan and draft by hand, then tidy up into text once the thinking is done.",
      "✍️ Plan by Hand: use the pad to plan an essay by hand: one sentence for the big idea, then three reasons. Turn it into notes and see how much the tidy-up gets right. Handwriting neatly helps a great deal.",
      [{ q: "What can you write with on the pad?", a: "A stylus, a finger or a mouse" },
       { q: "How many stationery themes are there?", a: "Ten" },
       { q: "Where does the handwriting get read?", a: "On your own device" },
       { q: "Is your handwriting sent anywhere?", a: "No" },
       { q: "What if your browser cannot read handwriting?", a: "It says so, and you can type instead" },
       { q: "What does turning a stylus over do?", a: "Rubs out" },
       { q: "Does writing by hand help you remember?", a: "Yes, more than typing" },
       { q: "What is the pad best used for?", a: "Planning and first drafts" }],
      { essayPad: true })
  };
})();
