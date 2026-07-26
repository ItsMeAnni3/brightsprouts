// BrightSprouts Academy: Sprout the Kid Chat Bot.
// A friendly, animated chat widget for grade-schoolers. It does NOT call any AI/API; it searches
// the site's own already-verified lesson content (the LESSONS object, populated by geology.js,
// paleontology.js, physical-science.js, earth-space-science.js, space.js, history-us.js, etc.)
// for the closest matching fact, so every answer is something a real lesson on this site already
// says. Anything it can't find in that curated corpus gets a friendly "I don't know that one"
// reply instead of a guess. A small blocklist catches unsafe topics before any search runs, and
// replies are read aloud with the same Speech.speak() used for books & stories.
(function () {
  if (typeof window === "undefined") return;

  // ---------- Sprout's face: a little plant just poking out of the soil, with two big round
  // baby leaves (cotyledons) and a friendly bud-face on top. ----------
  function avatarSvg(extraClass) {
    return '<svg class="sb-avatar' + (extraClass ? " " + extraClass : "") + '" viewBox="0 0 120 130" role="img" aria-label="Sprout">' +
      '<defs><radialGradient id="sb-grad" cx="42%" cy="32%" r="72%">' +
        '<stop offset="0" stop-color="#95e3a6"/><stop offset="1" stop-color="#57bd69"/>' +
      '</radialGradient></defs>' +
      // soil
      '<ellipse cx="60" cy="119" rx="21" ry="6.5" fill="#8a6a42"/>' +
      '<ellipse cx="60" cy="116" rx="14" ry="3" fill="#a3763f" opacity=".7"/>' +
      // stem
      '<path d="M60 119 L60 70" stroke="#4a9c58" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      // two big baby leaves (cotyledons)
      '<path d="M60 90 C36 92 17 76 13 53 C42 55 60 70 60 90 Z" fill="#8fe36a"/>' +
      '<path d="M56 86 Q33 78 19 57" stroke="#5fae4a" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
      '<path d="M60 90 C84 92 103 76 107 53 C78 55 60 70 60 90 Z" fill="#72cf5c"/>' +
      '<path d="M64 86 Q87 78 101 57" stroke="#4f9c52" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
      // bud head + face
      '<ellipse cx="60" cy="44" rx="27" ry="26" fill="url(#sb-grad)"/>' +
      '<ellipse cx="60" cy="54" rx="16" ry="11" fill="#a6ecb4" opacity=".5"/>' +
      '<circle cx="42" cy="50" r="5" fill="#ff9db0" opacity=".9"/><circle cx="78" cy="50" r="5" fill="#ff9db0" opacity=".9"/>' +
      '<ellipse class="sb-eye" cx="50" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/>' +
      '<ellipse class="sb-eye sb-eye2" cx="70" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/>' +
      '<circle cx="51.6" cy="37.4" r="1.6" fill="#fff"/><circle cx="71.6" cy="37.4" r="1.6" fill="#fff"/>' +
      '<path class="sb-smile" d="M50 54 q10 8 20 0" stroke="#2d2a4a" stroke-width="2.8" fill="none" stroke-linecap="round"/>' +
      '<ellipse class="sb-mouth" cx="60" cy="55" rx="6.5" ry="2.8" fill="#2d2a4a"/>' +
      '</svg>';
  }

  // ==================== 1. Knowledge base: index the site's own lesson content ====================
  // Only the standalone "Let's Learn" categories carry fixed, hand-written, fact-checked content
  // (grades 1-12's core subjects generate fresh worksheet questions on the fly and aren't
  // meaningful trivia to search). Category numbers per js/app.js's subjectsFor().
  var CATEGORY_GRADES = [13, 14, 17, 19, 20, 21, 23, 24, 25, 26, 27, 28];

  var KB = [];  // { tokens:[...], answer, topic, emoji, grade, subjKey, weight }

  var STOP = {};
  // NOTE: the whole concatenation MUST be parenthesized before .split(), since "a" + "b".split(" ")
  // binds .split() to "b" alone (method calls outrank +), silently dropping every earlier word.
  ("a an the is are was were be been being what whats how why who whom when where which do does did " +
  "i you your yours my me mine we our us they them their he she it its this that these those " +
  "can could would should will shall may might must " +
  "tell about of to in on for and or but so if not no yes " +
  "please know knows have has had with at as by from up down out " +
  "im ok okay hi hey hello sprout").split(" ").forEach(function (w) { STOP[w] = 1; });

  // A tiny "poor man's" stemmer so "magnets"/"magnet" and "oceans"/"ocean" count as the same
  // token; no real NLP library is available client-side, but bare plural -s is most of the gap.
  function stem(w) {
    if (w.length > 4 && /[a-z]s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
    return w;
  }

  function tokenize(s) {
    return String(s || "").toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(function (w) { return w.length > 1 && !STOP[w]; })
      .map(stem);
  }

  function addKbEntry(text, answer, topic, emoji, grade, subjKey, kind) {
    if (!text || !answer) return;
    var titleTokens = tokenize(topic);
    var textTokens = tokenize(text);
    if (!textTokens.length) return;
    KB.push({
      tokens: textTokens,
      titleTokens: titleTokens,
      answer: answer,
      topic: topic,
      emoji: emoji || "🌱",
      grade: grade,
      subjKey: subjKey,
      kind: kind  // "learn" (full sentence, preferred) or "qa" (short answer)
    });
  }

  function indexEntry(entry, grade, subjKey, fallbackTitle, fallbackEmoji) {
    if (!entry || typeof entry !== "object") return;
    var title = entry.title || fallbackTitle || subjKey;
    var emoji = entry.emoji || fallbackEmoji || "🌱";
    // The intro is a topic's own hand-written summary: the best natural answer to a broad
    // "tell me about X" question, so it's indexed (and, via scoreEntry's title bonus, favoured).
    if (typeof entry.intro === "string") addKbEntry(entry.intro, entry.intro, title, emoji, grade, subjKey, "learn");
    if (Array.isArray(entry.learn)) {
      entry.learn.forEach(function (bullet) { addKbEntry(bullet, bullet, title, emoji, grade, subjKey, "learn"); });
    }
    if (Array.isArray(entry.questions)) {
      entry.questions.forEach(function (qa) {
        if (qa && qa.q && qa.a) addKbEntry(qa.q, qa.a, title, emoji, grade, subjKey, "qa");
      });
    }
    // Money-style variants: { byCurrency: { uk:{...}, us:{...} } }. Strip units/byCurrency before
    // recursing, or the merged copy still carries the same array/object and re-triggers this same
    // branch forever, each level multiplying the entry count instead of just unwrapping once.
    if (entry.byCurrency && typeof entry.byCurrency === "object") {
      Object.keys(entry.byCurrency).forEach(function (k) {
        var variant = {};
        for (var f in entry) if (entry.hasOwnProperty(f) && f !== "byCurrency" && f !== "units") variant[f] = entry[f];
        var over = entry.byCurrency[k];
        for (var f2 in over) if (over.hasOwnProperty(f2)) variant[f2] = over[f2];
        indexEntry(variant, grade, subjKey, title, emoji);
      });
    }
    // Multi-unit subjects: { units: [ {learn, questions, ...partial overrides} ] }
    if (Array.isArray(entry.units)) {
      entry.units.forEach(function (u) {
        var merged = {};
        for (var f3 in entry) if (entry.hasOwnProperty(f3) && f3 !== "units" && f3 !== "byCurrency") merged[f3] = entry[f3];
        for (var f4 in u) if (u.hasOwnProperty(f4)) merged[f4] = u[f4];
        indexEntry(merged, grade, subjKey, title, emoji);
      });
    }
  }

  function buildKb() {
    if (typeof LESSONS === "undefined") return;
    CATEGORY_GRADES.forEach(function (g) {
      var subjects = LESSONS[g];
      if (!subjects || typeof subjects !== "object") return;
      Object.keys(subjects).forEach(function (subjKey) {
        try { indexEntry(subjects[subjKey], g, subjKey); } catch (e) { /* skip malformed content, never crash the bot */ }
      });
    });
    // Hand-written "how do I use this site" FAQ: these are the "anything inside the website" answers.
    var FAQ = [
      { q: "how do I print a worksheet", a: "Open any lesson and press the pink Print Worksheet button. You can also tick 'Show answer key' first if you want it included.", topic: "Using BrightSprouts", emoji: "🖨️" },
      { q: "how do I get a new worksheet new questions", a: "Press the New Worksheet button on any lesson: math, spelling and vocabulary sheets make a brand new set of questions every time!", topic: "Using BrightSprouts", emoji: "🔄" },
      { q: "where are the games arcade", a: "Tap Games in the menu, or the Games tile on the Pick a Grade page, to open the arcade. There are lots of quiz games to try!", topic: "Using BrightSprouts", emoji: "🎮" },
      { q: "how do I make my own story custom story maker", a: "Open Books & Stories and look for the custom story maker: you can pick a hero and a theme and make your very own story!", topic: "Using BrightSprouts", emoji: "📖" },
      { q: "how do I make a creature creature maker", a: "The Creature Maker lets you mix and match parts to build your own silly creature. Find it on the Pick a Grade page!", topic: "Using BrightSprouts", emoji: "🎨" },
      { q: "what is brightsprouts academy", a: "BrightSprouts Academy is a learning website with printable lessons for Kindergarten through Grade 12, plus games, stories and fun extra courses like Geology and Space!", topic: "About BrightSprouts", emoji: "🌱" },
      { q: "how many grades does brightsprouts have", a: "BrightSprouts covers Kindergarten all the way through Grade 12, with a subject for everyone.", topic: "About BrightSprouts", emoji: "🌱" }
    ];
    FAQ.forEach(function (f) { addKbEntry(f.q, f.a, f.topic, f.emoji, null, null, "faq"); });
  }

  // ==================== 2. Safety filter ====================
  // Checked BEFORE any search runs. If matched, Sprout declines; no knowledge lookup happens at all.
  var UNSAFE_PATTERNS = [
    /\b(kill|murder|shoot(ing)?|stab(bing)?|gun|rifle|pistol|weapon|bomb|explosive|grenade|torture)\b/i,
    /\b(suicide|self[-\s]?harm|kill myself|hurt myself|want to die|cutting myself)\b/i,
    /\b(sex|sexual|porn|nude|naked|penis|vagina|breast[s]?)\b/i,
    /\b(drugs?|cocaine|heroin|marijuana|weed|vape|vaping|cigarette|smoking|alcohol|beer|wine|vodka|drunk|high on)\b/i,
    /\b(nazi|hate\s*(speech|group)|raci[sz]m|slur)\b/i,
    /\b(your address|my address|phone number|where do you live|meet (me|up)|social security|credit card number|home address|send me a picture)\b/i,
    /\b(scary story|horror story|creepypasta|jump ?scare|ghost story)\b/i,
    /\b(how to make a bomb|make a weapon|hack (a|into|someone)|poison (someone|somebody)|how to steal)\b/i,
    /\b(ignore (your|previous|all) (instructions|rules)|system prompt|pretend you('| a)re not sprout|developer mode|jailbreak)\b/i
  ];
  function isUnsafe(text) {
    return UNSAFE_PATTERNS.some(function (re) { return re.test(text); });
  }

  // ==================== 3. Search ====================
  function scoreEntry(qTokens, entry) {
    var score = 0;
    qTokens.forEach(function (t) {
      // A word matching the LESSON'S OWN TITLE is a much stronger relevance signal than merely
      // appearing somewhere in one bullet's text; without this, a broad one-word question like
      // "dinosaurs" can tie-break onto any lesson that happens to mention the word once in
      // passing, instead of the lesson that's actually *about* it.
      if (entry.titleTokens.indexOf(t) !== -1) score += 3;
      if (entry.tokens.indexOf(t) !== -1) score += 2;
    });
    return score;
  }
  function findAnswer(question) {
    var qTokens = tokenize(question);
    if (!qTokens.length || !KB.length) return null;
    var threshold = qTokens.length <= 2 ? 1 : 2;
    var best = null, bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var s = scoreEntry(qTokens, KB[i]);
      if (s > bestScore) { bestScore = s; best = KB[i]; }
    }
    if (!best || bestScore < threshold) return null;
    return best;
  }

  // ==================== 4. Chat UI ====================
  var FALLBACKS = [
    "Hmm, I don't know that one yet! I'm great with school stuff though, so try asking me about math, reading, science, space, animals or history! 🌟",
    "I haven't learned about that one! Ask me something about a school subject and I'll do my best. 📚",
    "That's a tricky one for me! I'm best at questions about the lessons on this site, so try asking about a subject you're studying. 🌈"
  ];
  var BLOCK_MSG = "🌱 That's not something Sprout can talk about. Let's stick to school stuff! Try asking me about math, reading, science, animals or space. If something's ever bothering you, it's always best to talk to a grown-up you trust.";
  var STARTER_CHIPS = [
    "🦖 Tell me about dinosaurs!",
    "🌈 How does a rainbow form?",
    "🔢 What is 7 times 8?",
    "🌊 How many oceans are there?"
  ];

  var els = {}, muted = false, open = false, mounted = false;

  function persistedMute() {
    try { return localStorage.getItem("bs_sproutbot_mute") === "1"; } catch (e) { return false; }
  }
  function setMuted(m) {
    muted = m;
    try { localStorage.setItem("bs_sproutbot_mute", m ? "1" : "0"); } catch (e) {}
    if (els.muteBtn) els.muteBtn.innerHTML = muted ? "🔇" : "🔊";
    if (els.muteBtn) els.muteBtn.setAttribute("aria-label", muted ? "Turn sound on" : "Turn sound off");
    if (muted && typeof Speech !== "undefined") Speech.stop();
  }

  function scrollToEnd() { if (els.body) els.body.scrollTop = els.body.scrollHeight; }

  function addMsg(text, who, opts) {
    opts = opts || {};
    var div = document.createElement("div");
    div.className = "sb-msg sb-" + who + (opts.block ? " sb-block" : "");
    div.textContent = text;
    if (opts.tag) {
      var tag = document.createElement("span");
      tag.className = "sb-tag";
      tag.textContent = opts.tag;
      div.appendChild(tag);
    }
    if (opts.lessonGrade != null && opts.lessonSubj) {
      var btn = document.createElement("button");
      btn.className = "sb-lesson-link";
      btn.type = "button";
      btn.textContent = "Go to lesson →";
      btn.addEventListener("click", function () {
        try {
          if (typeof App !== "undefined" && App.openGrade) {
            App.openGrade(opts.lessonGrade);
            if (typeof App !== "undefined" && App.openSubject) App.openSubject(opts.lessonSubj);
          }
          closePanel();
        } catch (e) {}
      });
      div.appendChild(document.createElement("br"));
      div.appendChild(btn);
    }
    els.body.appendChild(div);
    scrollToEnd();
    return div;
  }

  function showTyping() {
    var t = document.createElement("div");
    t.className = "sb-typing";
    t.id = "sb-typing-indicator";
    t.innerHTML = "<i></i><i></i><i></i>";
    els.body.appendChild(t);
    scrollToEnd();
    return t;
  }

  function speak(text) {
    if (muted || typeof Speech === "undefined" || !Speech.supported()) return;
    if (els.avatarHead) els.avatarHead.classList.add("sb-talking");
    Speech.speak(text, function () { if (els.avatarHead) els.avatarHead.classList.remove("sb-talking"); });
  }

  function respondTo(question) {
    var clean = String(question || "").trim();
    if (!clean) return;
    addMsg(clean, "user");
    if (els.input) els.input.value = "";
    if (els.chipsWrap) els.chipsWrap.style.display = "none";
    var typingEl = showTyping();
    var delay = 500 + Math.random() * 400;
    setTimeout(function () {
      if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
      if (isUnsafe(clean)) {
        addMsg(BLOCK_MSG, "bot", { block: true });
        speak(BLOCK_MSG);
        return;
      }
      var hit = findAnswer(clean);
      if (hit) {
        var reply = hit.kind === "learn" ? hit.answer : hit.answer.replace(/\.?$/, ".");
        var opts = { tag: "From the " + hit.topic + " lesson" };
        if (hit.grade != null && hit.subjKey) { opts.lessonGrade = hit.grade; opts.lessonSubj = hit.subjKey; }
        addMsg((hit.kind === "qa" ? "Good question! " : "") + reply, "bot", opts);
        speak(reply);
      } else {
        var fb = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
        addMsg(fb, "bot");
        speak(fb);
      }
    }, delay);
  }

  function openPanel() {
    if (!mounted) mount();
    open = true;
    els.panel.style.display = "flex";
    els.fab.classList.add("sb-hide");
    if (els.input) setTimeout(function () { els.input.focus(); }, 60);
    document.addEventListener("keydown", onEscape);
  }
  function closePanel() {
    open = false;
    if (els.panel) els.panel.style.display = "none";
    if (els.fab) els.fab.classList.remove("sb-hide");
    if (typeof Speech !== "undefined") Speech.stop();
    document.removeEventListener("keydown", onEscape);
  }
  function onEscape(e) { if (e.key === "Escape") closePanel(); }

  function mount() {
    if (mounted) return;
    mounted = true;
    buildKb();
    muted = persistedMute();

    var panel = document.createElement("div");
    panel.className = "sproutbot-panel no-print";
    panel.style.display = "none";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Chat with Sprout");
    panel.innerHTML =
      '<div class="sproutbot-head" id="sb-head">' +
        avatarSvg() +
        '<div class="sb-title"><h3>Sprout</h3><p>Your school buddy: ask me anything!</p></div>' +
        '<div class="sb-headbtns">' +
          '<button type="button" id="sb-mute" aria-label="Turn sound off">🔊</button>' +
          '<button type="button" id="sb-close" aria-label="Close chat">✕</button>' +
        '</div>' +
      '</div>' +
      '<div class="sproutbot-body" id="sb-body"></div>' +
      '<div class="sb-chipswrap" id="sb-chipswrap"><div class="sb-chips" id="sb-chips"></div></div>' +
      '<div class="sproutbot-foot">' +
        '<input type="text" id="sb-input" maxlength="120" autocomplete="off" placeholder="Ask Sprout something..." aria-label="Ask Sprout a question">' +
        '<button type="button" id="sb-send" aria-label="Send">➤</button>' +
      '</div>';
    document.body.appendChild(panel);

    els.panel = panel;
    els.avatarHead = document.getElementById("sb-head");
    els.body = document.getElementById("sb-body");
    els.chipsWrap = document.getElementById("sb-chipswrap");
    els.chips = document.getElementById("sb-chips");
    els.input = document.getElementById("sb-input");
    els.sendBtn = document.getElementById("sb-send");
    els.muteBtn = document.getElementById("sb-mute");
    els.closeBtn = document.getElementById("sb-close");

    setMuted(muted);
    els.muteBtn.addEventListener("click", function () { setMuted(!muted); });
    els.closeBtn.addEventListener("click", closePanel);
    els.sendBtn.addEventListener("click", function () { respondTo(els.input.value); });
    els.input.addEventListener("keydown", function (e) { if (e.key === "Enter") respondTo(els.input.value); });

    STARTER_CHIPS.forEach(function (c) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "sb-chip";
      chip.textContent = c;
      chip.addEventListener("click", function () { respondTo(c.replace(/^\S+\s/, "")); });
      els.chips.appendChild(chip);
    });

    var greeting = "Hi, I'm Sprout! 🌱 I love learning, so ask me a question about math, reading, science, history, space, or anything else you're curious about!";
    addMsg(greeting, "bot");
    speak(greeting);
  }

  function init() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var fab = document.createElement("button");
    fab.className = "sproutbot-fab no-print";
    fab.type = "button";
    fab.setAttribute("aria-label", "Chat with Sprout");
    fab.innerHTML = avatarSvg() + '<span class="sb-fabbadge">Chat!</span>';
    if (reduce) fab.style.animation = "none";
    fab.addEventListener("click", openPanel);
    document.body.appendChild(fab);
    els.fab = fab;
  }

  // Small internal test surface (mirrors how Globe/Speech/App are exposed elsewhere in this app),
  // used only by audit_sproutbot.html to verify the search/safety logic in headless Chrome.
  window.SproutBot = {
    _test: {
      tokenize: tokenize,
      isUnsafe: isUnsafe,
      buildKb: buildKb,
      findAnswer: findAnswer,
      kbSize: function () { return KB.length; }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
