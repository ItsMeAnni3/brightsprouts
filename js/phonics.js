// BrightSprouts Academy — Phonics & Word Study, folded into Kindergarten through Grade 7.
// The real developmental arc: letter sounds → blending → digraphs & silent e → vowel teams &
// syllables → affixes → Greek/Latin roots → spelling patterns → word origins.
// Every list is tap-to-hear (English) so a child hears the sound, not just sees it.
(function () {
  if (typeof LESSONS === "undefined") return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // ---- K: short-vowel picture chart ----
  var vowelDia = '<svg viewBox="0 0 340 150"><rect width="340" height="150" rx="14" fill="#fff6ee"/>'
    + '<circle cx="46" cy="52" r="18" fill="#e63946"/><path d="M46 34 v-7" stroke="#7a5230" stroke-width="3" fill="none"/>'
    + '<path d="M47 29 q9 -7 15 -2 q-5 8 -15 2 z" fill="#4aa35a"/>'
    + '<ellipse cx="112" cy="54" rx="15" ry="19" fill="#fff" stroke="#e0c9a6" stroke-width="2.5"/><ellipse cx="112" cy="58" rx="7" ry="8" fill="#ffd166"/>'
    + '<path d="M156 68 a24 24 0 0 1 48 0 z" fill="#dceeff" stroke="#8fb8dd" stroke-width="2.5"/>'
    + '<path d="M172 68 v-10 a8 8 0 0 1 16 0 v10" fill="#b8d8f2" stroke="#8fb8dd" stroke-width="2"/>'
    + '<path d="M228 56 a18 16 0 0 1 36 0 v8 h-36 z" fill="#a06cf0"/>'
    + '<g stroke="#a06cf0" stroke-width="4" fill="none" stroke-linecap="round"><path d="M232 64 q-3 9 2 12"/><path d="M240 66 q-2 10 3 12"/><path d="M252 66 q2 10 -3 12"/><path d="M260 64 q3 9 -2 12"/></g>'
    + '<circle cx="240" cy="52" r="2.5" fill="#fff"/><circle cx="252" cy="52" r="2.5" fill="#fff"/>'
    + '<path d="M296 54 a22 22 0 0 1 44 0 z" fill="#2ec4b6"/>'
    + '<path d="M318 54 v20 a7 7 0 0 1 -13 2" stroke="#8a6d4b" stroke-width="3" fill="none"/>'
    + '<g ' + FA + ' text-anchor="middle">'
    + '<text x="46" y="98" font-size="20">Aa</text><text x="46" y="116" font-size="11" fill="#6a668c">apple</text>'
    + '<text x="112" y="98" font-size="20">Ee</text><text x="112" y="116" font-size="11" fill="#6a668c">egg</text>'
    + '<text x="180" y="98" font-size="20">Ii</text><text x="180" y="116" font-size="11" fill="#6a668c">igloo</text>'
    + '<text x="246" y="98" font-size="20">Oo</text><text x="246" y="116" font-size="11" fill="#6a668c">octopus</text>'
    + '<text x="312" y="98" font-size="20">Uu</text><text x="312" y="116" font-size="11" fill="#6a668c">umbrella</text>'
    + '<text x="170" y="140" font-size="12" fill="#5d3fa0">The five short vowel sounds</text></g></svg>';

  // ---- G1: blending boxes ----
  var blendDia = '<svg viewBox="0 0 340 132"><rect width="340" height="132" rx="14" fill="#eef6ff"/>'
    + '<g fill="#fff" stroke="#4d96ff" stroke-width="2.5">'
    + '<rect x="24" y="26" width="52" height="46" rx="10"/><rect x="86" y="26" width="52" height="46" rx="10"/><rect x="148" y="26" width="52" height="46" rx="10"/></g>'
    + '<g ' + FA + ' text-anchor="middle" font-size="24" fill="#2d2a4a">'
    + '<text x="50" y="58">c</text><text x="112" y="58">a</text><text x="174" y="58">t</text></g>'
    + '<defs><marker id="bl" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#5d3fa0"/></marker></defs>'
    + '<line x1="210" y1="49" x2="248" y2="49" stroke="#5d3fa0" stroke-width="3" marker-end="url(#bl)"/>'
    + '<text x="296" y="60" text-anchor="middle" ' + FA + ' font-size="30" fill="#5d3fa0">cat</text>'
    + '<text x="170" y="98" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">Say each sound, then blend them fast</text>'
    + '<text x="170" y="118" text-anchor="middle" ' + FA + ' font-size="13" fill="#6a668c">c &#8211; a &#8211; t &#8594; cat</text></svg>';

  // ---- G2: silent e changes the vowel ----
  function chip(x, y, w, txt, fill, size) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="10" fill="' + fill + '" stroke="#d8d2ec" stroke-width="1.5"/>'
      + '<text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" ' + FA + ' font-size="' + (size || 13) + '" fill="#2d2a4a">' + txt + '</text>';
  }
  var pairs = [["hop", "hope"], ["kit", "kite"], ["cap", "cape"], ["tub", "tube"]];
  var silentDia = '<svg viewBox="0 0 340 186"><rect width="340" height="186" rx="14" fill="#f3fbf4"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="13" fill="#5d3fa0">Add a silent e — the vowel says its name</text>'
    + '<defs><marker id="se" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#43aa8b"/></marker></defs>';
  for (var i = 0; i < 4; i++) {
    var y = 38 + i * 36;
    silentDia += chip(26, y, 84, pairs[i][0], "#fff")
      + '<line x1="118" y1="' + (y + 15) + '" x2="150" y2="' + (y + 15) + '" stroke="#43aa8b" stroke-width="2.5" marker-end="url(#se)"/>'
      + chip(160, y, 96, pairs[i][1].slice(0, -1) + '<tspan fill="#e2453b">e</tspan>', "#e4f7e8")
      + '<text x="272" y="' + (y + 20) + '" ' + FA + ' font-size="11" fill="#6a668c">long ' + pairs[i][1].charAt(1) + '</text>';
  }
  silentDia += '</svg>';

  // ---- G3: vowel teams + syllables ----
  var teams = [["ai", "rain"], ["ee", "tree"], ["oa", "boat"], ["oo", "book"], ["ar", "star"], ["ir", "bird"]];
  var teamDia = '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#eef6ff"/>'
    + '<text x="170" y="22" text-anchor="middle" ' + FA + ' font-size="13" fill="#5d3fa0">Two letters, one vowel sound</text>';
  for (var t = 0; t < 6; t++) {
    var tx = 16 + (t % 3) * 104, ty = 34 + Math.floor(t / 3) * 48;
    teamDia += '<rect x="' + tx + '" y="' + ty + '" width="92" height="38" rx="11" fill="#fff" stroke="#9ab6e8" stroke-width="2"/>'
      + '<text x="' + (tx + 46) + '" y="' + (ty + 17) + '" text-anchor="middle" ' + FA + ' font-size="14" fill="#4d96ff">' + teams[t][0] + '</text>'
      + '<text x="' + (tx + 46) + '" y="' + (ty + 32) + '" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">' + teams[t][1] + '</text>';
  }
  teamDia += '<text x="170" y="150" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">Every syllable has one vowel sound</text>'
    + '<text x="170" y="168" text-anchor="middle" ' + FA + ' font-size="12" fill="#6a668c">but•ter•fly  =  3 claps</text></svg>';

  // ---- G4: building words with affixes ----
  var buildDia = '<svg viewBox="0 0 340 180"><rect width="340" height="180" rx="14" fill="#fdf6ff"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="13" fill="#5d3fa0">prefix + base word + suffix</text>'
    + chip(18, 38, 66, "un", "#ffd6a5") + '<text x="92" y="58" ' + FA + ' font-size="15" fill="#6a668c">+</text>'
    + chip(106, 38, 78, "happy", "#fff") + '<text x="192" y="58" ' + FA + ' font-size="15" fill="#6a668c">=</text>'
    + chip(206, 38, 116, "unhappy", "#e0d6f5")
    + chip(18, 84, 78, "help", "#fff") + '<text x="104" y="104" ' + FA + ' font-size="15" fill="#6a668c">+</text>'
    + chip(118, 84, 66, "ful", "#cdeef0") + '<text x="192" y="104" ' + FA + ' font-size="15" fill="#6a668c">=</text>'
    + chip(206, 84, 116, "helpful", "#e0d6f5")
    + '<text x="170" y="148" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">rain + bow = rainbow  (a compound word)</text>'
    + '<text x="170" y="166" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">hop → hopping · hope → hoping</text></svg>';

  // ---- G5: a Latin root and its family ----
  var rootWords = ["transport", "import", "portable", "export"];
  var rootDia = '<svg viewBox="0 0 340 186"><rect width="340" height="186" rx="14" fill="#fff7ea"/>'
    + '<rect x="112" y="18" width="116" height="42" rx="13" fill="#e0a94a"/>'
    + '<text x="170" y="38" text-anchor="middle" ' + FA + ' font-size="16" fill="#fff">port</text>'
    + '<text x="170" y="53" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#fff8e8">Latin: to carry</text>'
    + '<g stroke="#d8b46a" stroke-width="2" fill="none">'
    + '<path d="M140 60 L64 92"/><path d="M158 60 L136 92"/><path d="M182 60 L204 92"/><path d="M200 60 L276 92"/></g>';
  for (var r = 0; r < 4; r++) rootDia += chip(8 + r * 84, 94, 76, rootWords[r], "#fff", 11);
  rootDia += '<text x="170" y="158" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">Know the root, unlock the whole family</text>'
    + '<text x="170" y="175" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">tele = far · bio = life · aqua = water · graph = write</text></svg>';

  // ---- G6: silent letters and plural rules ----
  var silents = [["kn", "knee"], ["wr", "write"], ["mb", "lamb"], ["gh", "ghost"]];
  var spellDia = '<svg viewBox="0 0 340 186"><rect width="340" height="186" rx="14" fill="#f5f2ff"/>'
    + '<text x="170" y="22" text-anchor="middle" ' + FA + ' font-size="13" fill="#5d3fa0">Letters you write but never say</text>';
  for (var q = 0; q < 4; q++) {
    var qx = 12 + q * 82;
    spellDia += '<rect x="' + qx + '" y="32" width="72" height="44" rx="12" fill="#fff" stroke="#c9c4dd" stroke-width="2"/>'
      + '<text x="' + (qx + 36) + '" y="50" text-anchor="middle" ' + FA + ' font-size="13" fill="#a06cf0">' + silents[q][0] + '</text>'
      + '<text x="' + (qx + 36) + '" y="68" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + silents[q][1] + '</text>';
  }
  spellDia += '<text x="170" y="104" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">Making plurals</text>'
    + chip(14, 114, 100, "cat → cats", "#fff", 11)
    + chip(120, 114, 108, "box → boxes", "#fff", 11)
    + chip(234, 114, 92, "baby → babies", "#fff", 10.5)
    + '<text x="170" y="168" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">add -es after s, x, ch, sh · y after a consonant → ies</text></svg>';

  // ---- G7: where English words come from ----
  var origins = [["chocolate", "Nahuatl"], ["algebra", "Arabic"], ["piano", "Italian"],
                 ["shampoo", "Hindi"], ["tsunami", "Japanese"], ["kindergarten", "German"]];
  var originDia = '<svg viewBox="0 0 340 186"><rect width="340" height="186" rx="14" fill="#eefaf0"/>'
    + '<text x="170" y="24" text-anchor="middle" ' + FA + ' font-size="13" fill="#2f6b45">English borrows from everywhere</text>';
  for (var w = 0; w < 6; w++) {
    var wx = 14, wy = 36 + w * 24;
    if (w >= 3) { wx = 174; wy = 36 + (w - 3) * 24; }
    originDia += '<rect x="' + wx + '" y="' + wy + '" width="152" height="20" rx="7" fill="#fff" stroke="#9ad6bd" stroke-width="1.3"/>'
      + '<text x="' + (wx + 8) + '" y="' + (wy + 14) + '" ' + FA + ' font-size="10.5" fill="#2d2a4a">' + origins[w][0] + '</text>'
      + '<text x="' + (wx + 144) + '" y="' + (wy + 14) + '" text-anchor="end" ' + FA + ' font-size="10" fill="#43aa8b">' + origins[w][1] + '</text>';
  }
  originDia += '<text x="170" y="140" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">Etymology = the story of where a word came from</text>'
    + '<text x="170" y="164" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">homophone: sounds same, spelled differently</text>'
    + '<text x="170" y="178" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">homograph: spelled same, different meaning</text></svg>';

  var PHONICS = {
    0: {
      title: "Letter Sounds", emoji: "🔤",
      intro: "Every letter makes a sound. Once you know the sounds, you can start unlocking words all by yourself!",
      learn: [
        "Letters have a NAME and a SOUND. For reading, the sound matters most: 's' is named \"ess\" but says \"sss\" like a snake.",
        "Keep each sound short and crisp — 'b' says \"b\", not \"buh\".",
        "The five short vowel sounds: a (apple), e (egg), i (igloo), o (octopus), u (umbrella).",
        "Every word starts with a sound. Listen hard for the very first one you hear.",
        "Words that rhyme end with the same sound: cat, hat, bat."
      ],
      activity: "🔎 Sound Hunt: Pick a letter sound, then race around the house finding three things that start with it. 'b' — ball, book, banana!",
      diagram: vowelDia, vocabLang: "en",
      vocab: [{ es: "Aa", en: "apple", say: "apple" }, { es: "Bb", en: "ball", say: "ball" },
              { es: "Cc", en: "cat", say: "cat" }, { es: "Dd", en: "dog", say: "dog" },
              { es: "Ee", en: "egg", say: "egg" }, { es: "Ff", en: "fish", say: "fish" },
              { es: "Ii", en: "igloo", say: "igloo" }, { es: "Mm", en: "moon", say: "moon" },
              { es: "Ss", en: "sun", say: "sun" }, { es: "Tt", en: "top", say: "top" }],
      questions: [
        { q: "Does the letter 's' say \"sss\" or \"buh\"?", a: "Sss" },
        { q: "Which matters most for reading — a letter's name or its sound?", a: "Its sound" },
        { q: "Name the five short vowels.", a: "a, e, i, o, u" },
        { q: "What sound does 'ball' start with?", a: "The 'b' sound" },
        { q: "What sound does 'sun' start with?", a: "The 's' sound" },
        { q: "What short vowel sound is in the middle of 'cat'?", a: "a" },
        { q: "What short vowel sound is in the middle of 'dog'?", a: "o" },
        { q: "Write a word that begins with the 'm' sound.", a: "e.g. man, map, moon, milk" },
        { q: "Do 'cat' and 'hat' rhyme?", a: "Yes" },
        { q: "Name a word that rhymes with 'bug'.", a: "e.g. rug, hug, mug" },
        { q: "What sound does 'fish' start with?", a: "The 'f' sound" },
        { q: "Should you say 'b' as \"b\" or as \"buh\"?", a: "\"b\" — short and crisp" }
      ]
    },
    1: {
      title: "Blending & Word Families", emoji: "🐱",
      intro: "Blending is the magic trick of reading: say each sound, push them together, and a word appears. c–a–t → cat!",
      learn: [
        "A CVC word has a consonant, a vowel, then a consonant: c-a-t, d-o-g, s-u-n.",
        "Say each sound in order, then blend them faster until they snap into a word.",
        "Change the FIRST sound to make a new word: cat → hat → bat → sat.",
        "A word family shares its ending: -at, -an, -ig, -op, -ug. Learn one and you can read them all.",
        "Some words turn up everywhere but don't sound out — sight words like the, and, is, you, was, said. We learn those by heart."
      ],
      activity: "🐌 Slow Then Fast: Say a word slowly, sound by sound, and let your child snap it together fast. Then swap — they stretch, you blend!",
      diagram: blendDia, vocabLang: "en",
      vocab: [{ es: "cat", en: "c – a – t" }, { es: "dog", en: "d – o – g" }, { es: "sun", en: "s – u – n" },
              { es: "hat", en: "-at family" }, { es: "pig", en: "-ig family" }, { es: "bed", en: "b – e – d" },
              { es: "map", en: "m – a – p" }, { es: "hop", en: "-op family" }, { es: "bug", en: "-ug family" },
              { es: "the", en: "sight word" }, { es: "said", en: "sight word" }, { es: "was", en: "sight word" }],
      questions: [
        { q: "Blend these sounds: c – a – t. What is the word?", a: "cat" },
        { q: "Blend these sounds: d – o – g. What is the word?", a: "dog" },
        { q: "Blend these sounds: s – u – n. What is the word?", a: "sun" },
        { q: "How many sounds are in the word 'top'?", a: "Three (t – o – p)" },
        { q: "What does CVC stand for?", a: "Consonant, vowel, consonant" },
        { q: "Change the first sound in 'cat' to 'h'. What word do you get?", a: "hat" },
        { q: "Break the word 'fan' into its sounds.", a: "f – a – n" },
        { q: "Cat, hat and bat belong to which word family?", a: "The -at family" },
        { q: "Name two words in the -ug family.", a: "e.g. bug, rug, hug, mug" },
        { q: "What do we call words we learn by heart instead of sounding out?", a: "Sight words (tricky words)" },
        { q: "Name a sight word.", a: "e.g. the, and, is, you, was, said" },
        { q: "Is 'said' spelled the way it sounds?", a: "No — it is a tricky word" }
      ]
    },
    2: {
      title: "Digraphs, Blends & Silent e", emoji: "🔡",
      intro: "Now letters start teaming up. Two letters can make one brand-new sound — and a silent e at the end changes everything.",
      learn: [
        "A digraph is two letters making ONE sound: sh (ship), ch (chip), th (thin), wh (when).",
        "A blend is two letters you can still hear separately: bl (black), st (stop), fr (frog), sk (skip).",
        "Silent e sits at the end of a word, says nothing, and makes the vowel say its own name: hop → hope, kit → kite.",
        "That is why 'cap' and 'cape' look so similar but sound so different.",
        "Keep collecting sight words — they appear in almost every sentence you read."
      ],
      activity: "🔡 Silent e Switch: Write hop, kit, cap and tub on cards. Add an 'e' card to the end of each and read the new word. Magic!",
      diagram: silentDia, vocabLang: "en",
      vocab: [{ es: "ship", en: "sh digraph" }, { es: "chip", en: "ch digraph" }, { es: "thin", en: "th digraph" },
              { es: "when", en: "wh digraph" }, { es: "black", en: "bl blend" }, { es: "stop", en: "st blend" },
              { es: "frog", en: "fr blend" }, { es: "hope", en: "hop + silent e" }, { es: "kite", en: "kit + silent e" },
              { es: "cape", en: "cap + silent e" }, { es: "tube", en: "tub + silent e" }, { es: "shine", en: "sh + silent e" }],
      questions: [
        { q: "What is a digraph?", a: "Two letters that make one sound" },
        { q: "Which two letters make the sound at the start of 'ship'?", a: "s and h (sh)" },
        { q: "Which two letters make the sound at the start of 'thin'?", a: "t and h (th)" },
        { q: "'ch' says the sound at the start of which word: chip or ship?", a: "Chip" },
        { q: "What is a blend?", a: "Two letters you can still hear separately" },
        { q: "Name the blend at the start of 'stop'.", a: "st" },
        { q: "What does a silent e do to the vowel before it?", a: "Makes it say its own name (a long vowel)" },
        { q: "Add a silent e to 'hop'. What word do you get?", a: "hope" },
        { q: "Add a silent e to 'kit'. What word do you get?", a: "kite" },
        { q: "Do you say the 'e' in 'cape' out loud?", a: "No — it is silent" },
        { q: "Is 'sh' a digraph or a blend?", a: "A digraph" },
        { q: "Is 'bl' a digraph or a blend?", a: "A blend" }
      ]
    },
    3: {
      title: "Vowel Teams & Syllables", emoji: "🎵",
      intro: "Vowels love working in pairs — and every word has a beat you can clap. Both tricks help you read longer words.",
      learn: [
        "A vowel team is two vowels making one sound: ai (rain), ay (day), ee (tree), ea (sea), oa (boat), oo (book).",
        "You may hear \"when two vowels go walking, the first does the talking\" — it often works, but there are lots of exceptions, so always check the word makes sense.",
        "R-controlled vowels are bossed about by the r: ar (star), or (fork), er (her), ir (bird), ur (turn).",
        "A syllable is a beat in a word, and every syllable has exactly one vowel sound.",
        "Clap the beats to split a long word: but•ter•fly is 3 claps, so it is 3 syllables."
      ],
      activity: "🎵 Clap the Beats: Clap out everyone's name at dinner, then the longest word you can think of. How many syllables does 'refrigerator' have?",
      diagram: teamDia, vocabLang: "en",
      vocab: [{ es: "rain", en: "ai" }, { es: "day", en: "ay" }, { es: "tree", en: "ee" }, { es: "sea", en: "ea" },
              { es: "boat", en: "oa" }, { es: "book", en: "oo" }, { es: "star", en: "ar" }, { es: "fork", en: "or" },
              { es: "bird", en: "ir" }, { es: "turn", en: "ur" }, { es: "butterfly", en: "3 syllables" }, { es: "elephant", en: "3 syllables" }],
      questions: [
        { q: "What is a vowel team?", a: "Two vowels that make one sound" },
        { q: "Which vowel team is in 'rain'?", a: "ai" },
        { q: "Which vowel team is in 'boat'?", a: "oa" },
        { q: "Which vowel team is in 'tree'?", a: "ee" },
        { q: "Does 'when two vowels go walking' always work?", a: "No — it often works, but there are many exceptions" },
        { q: "What letter bosses the vowel in 'star' and 'bird'?", a: "r" },
        { q: "What is a syllable?", a: "A beat in a word" },
        { q: "How many vowel sounds does each syllable have?", a: "One" },
        { q: "How many syllables are in 'butterfly'?", a: "Three (but-ter-fly)" },
        { q: "How many syllables are in 'elephant'?", a: "Three (el-e-phant)" },
        { q: "How many syllables are in 'cat'?", a: "One" },
        { q: "Name a word with the 'oo' team.", a: "e.g. book, moon, food" }
      ]
    },
    4: {
      title: "Prefixes, Suffixes & Compounds", emoji: "🧩",
      intro: "Long words aren't scary — they're built from pieces. Learn the pieces and you can take any word apart.",
      learn: [
        "The base word is the main part. A prefix goes on the front and a suffix goes on the end.",
        "Prefixes change the meaning: un- (not), re- (again), pre- (before), dis- (not), mis- (wrongly).",
        "Suffixes change the job: -ing, -ed, -ful (full of), -less (without), -ly (in that way), -er (one who).",
        "A compound word is two whole words joined together: rain + bow = rainbow, foot + ball = football.",
        "Spelling tip when adding a suffix: hop → hopping (double the consonant), but hope → hoping (drop the silent e)."
      ],
      activity: "🧩 Word Surgery: Write a long word like 'unhelpful' and cut it into prefix, base and suffix with scissors. Rebuild it a different way!",
      diagram: buildDia, vocabLang: "en",
      vocab: [{ es: "unhappy", en: "un + happy" }, { es: "rewrite", en: "re + write" }, { es: "preview", en: "pre + view" },
              { es: "disagree", en: "dis + agree" }, { es: "helpful", en: "help + ful" }, { es: "careless", en: "care + less" },
              { es: "quickly", en: "quick + ly" }, { es: "teacher", en: "teach + er" }, { es: "rainbow", en: "rain + bow" },
              { es: "football", en: "foot + ball" }, { es: "hopping", en: "hop + ping" }, { es: "hoping", en: "hope + ing" }],
      questions: [
        { q: "What is a prefix?", a: "A word part added to the front of a base word" },
        { q: "What is a suffix?", a: "A word part added to the end of a base word" },
        { q: "What does the prefix 'un-' mean?", a: "Not" },
        { q: "What does the prefix 're-' mean?", a: "Again" },
        { q: "What does the suffix '-ful' mean?", a: "Full of" },
        { q: "What does the suffix '-less' mean?", a: "Without" },
        { q: "Break 'unhappy' into its parts.", a: "un + happy" },
        { q: "Break 'careless' into its parts.", a: "care + less" },
        { q: "What is a compound word?", a: "Two whole words joined together" },
        { q: "What two words make 'rainbow'?", a: "rain + bow" },
        { q: "Add -ing to 'hop'. How do you spell it?", a: "hopping (double the p)" },
        { q: "Add -ing to 'hope'. How do you spell it?", a: "hoping (drop the e)" }
      ]
    },
    5: {
      title: "Greek & Latin Roots", emoji: "🏛️",
      intro: "A huge slice of English was built from Ancient Greek and Latin. Learn a root and dozens of words open up at once.",
      learn: [
        "A root is the core of a word that carries its meaning, often borrowed from Greek or Latin.",
        "port (Latin: to carry) → transport, import, export, portable.",
        "tele (Greek: far) → telephone, telescope, television.",
        "graph / scrib (write) → autograph, paragraph, describe, scribble.",
        "aqua (water), bio (life), geo (earth), micro (small), photo (light). Spot a root and you can often work out a word you have never seen."
      ],
      activity: "🏛️ Root Detective: Pick the root 'bio' and hunt for five words that contain it. What do they all have in common?",
      diagram: rootDia, vocabLang: "en",
      vocab: [{ es: "transport", en: "port = carry" }, { es: "portable", en: "port = carry" }, { es: "telescope", en: "tele = far" },
              { es: "telephone", en: "tele = far" }, { es: "autograph", en: "graph = write" }, { es: "paragraph", en: "graph = write" },
              { es: "aquarium", en: "aqua = water" }, { es: "biology", en: "bio = life" }, { es: "geography", en: "geo = earth" },
              { es: "microscope", en: "micro = small" }, { es: "photograph", en: "photo = light" }, { es: "describe", en: "scrib = write" }],
      questions: [
        { q: "What is a root?", a: "The core part of a word that carries its meaning" },
        { q: "Which two ancient languages gave English many roots?", a: "Greek and Latin" },
        { q: "What does the root 'port' mean?", a: "To carry" },
        { q: "What does the root 'tele' mean?", a: "Far" },
        { q: "What does the root 'aqua' mean?", a: "Water" },
        { q: "What does the root 'bio' mean?", a: "Life" },
        { q: "What does the root 'graph' mean?", a: "To write or draw" },
        { q: "What does 'micro' mean?", a: "Small" },
        { q: "Name a word containing 'port'.", a: "e.g. transport, import, portable" },
        { q: "Name a word containing 'tele'.", a: "e.g. telephone, telescope, television" },
        { q: "'Geography' contains 'geo'. What does that tell you?", a: "It is about the earth" },
        { q: "Why is knowing roots useful?", a: "You can work out words you have never seen before" }
      ]
    },
    6: {
      title: "Silent Letters & Spelling Rules", emoji: "🧠",
      intro: "English spelling has some odd habits — letters that stay silent and rules with exceptions. Here's how to handle them.",
      learn: [
        "Some letters are written but never said: kn (knee, knight), wr (write, wrong), mb (lamb, thumb), gh (ghost), and the b in 'debt'.",
        "Plurals: usually add -s; add -es after s, x, z, ch or sh (boxes, brushes); a consonant + y becomes -ies (baby → babies).",
        "You may be taught \"i before e except after c\" — it is only a rough guide, and words like their, weird, science and height break it.",
        "The schwa is the lazy 'uh' sound in unstressed syllables (banana, problem, pencil) — it is the most common vowel sound in English.",
        "When a rule and a real word disagree, the word wins. Reading widely teaches spelling better than any rule."
      ],
      activity: "🧠 Silent Letter Hunt: Find ten words with silent letters in a book. Which silent letter shows up the most?",
      diagram: spellDia, vocabLang: "en",
      vocab: [{ es: "knee", en: "silent k" }, { es: "knight", en: "silent k, gh" }, { es: "write", en: "silent w" },
              { es: "wrong", en: "silent w" }, { es: "lamb", en: "silent b" }, { es: "thumb", en: "silent b" },
              { es: "ghost", en: "silent h" }, { es: "island", en: "silent s" }, { es: "boxes", en: "add -es" },
              { es: "babies", en: "y → ies" }, { es: "science", en: "breaks i-before-e" }, { es: "banana", en: "schwa sound" }],
      questions: [
        { q: "Which letter is silent in 'knee'?", a: "The k" },
        { q: "Which letter is silent in 'write'?", a: "The w" },
        { q: "Which letter is silent in 'lamb'?", a: "The b" },
        { q: "How do you make 'box' plural?", a: "boxes — add -es after x" },
        { q: "How do you make 'baby' plural?", a: "babies — the y becomes ies" },
        { q: "How do you make 'cat' plural?", a: "cats — just add -s" },
        { q: "After which letters do we add -es?", a: "s, x, z, ch and sh" },
        { q: "Is \"i before e except after c\" always true?", a: "No — it is only a rough guide with many exceptions" },
        { q: "Name a word that breaks the i-before-e rule.", a: "e.g. their, weird, science, height" },
        { q: "What is the schwa?", a: "The lazy 'uh' sound in unstressed syllables" },
        { q: "Name a word containing a schwa sound.", a: "e.g. banana, problem, pencil" },
        { q: "If a spelling rule and a real word disagree, which wins?", a: "The real word" }
      ]
    },
    7: {
      title: "Word Origins & Word Study", emoji: "📜",
      intro: "Every word has a history. English has borrowed from all over the world — and knowing where words come from makes you a sharper reader.",
      learn: [
        "Etymology is the study of where words come from and how their meanings changed over time.",
        "English is a magpie language. It has borrowed chocolate (from Nahuatl, via Spanish), algebra (Arabic), piano (Italian), shampoo (Hindi), tsunami (Japanese) and kindergarten (German).",
        "Homophones sound the same but are spelled differently and mean different things: their / there / they're.",
        "Homographs are spelled the same but differ in meaning, and sometimes in sound: a 'bow' in your hair, to 'bow' on stage, the 'bow' of a ship.",
        "Break unfamiliar academic words into root, prefix and suffix — that, plus context, will usually get you the meaning without a dictionary."
      ],
      activity: "📜 Word Detective: Look up the origin of your favourite word in a dictionary. Which language did it come from, and has its meaning shifted?",
      diagram: originDia, vocabLang: "en",
      vocab: [{ es: "etymology", en: "the study of word origins" }, { es: "chocolate", en: "from Nahuatl" },
              { es: "algebra", en: "from Arabic" }, { es: "piano", en: "from Italian" },
              { es: "shampoo", en: "from Hindi" }, { es: "tsunami", en: "from Japanese" },
              { es: "kindergarten", en: "from German" }, { es: "democracy", en: "from Greek" },
              { es: "homophone", en: "sounds the same" }, { es: "homograph", en: "spelled the same" },
              { es: "prefix", en: "front of a word" }, { es: "suffix", en: "end of a word" }],
      questions: [
        { q: "What is etymology?", a: "The study of where words come from" },
        { q: "What is a homophone?", a: "A word that sounds the same but is spelled differently and means something else" },
        { q: "Give an example of homophones.", a: "e.g. their / there / they're, or to / too / two" },
        { q: "What is a homograph?", a: "A word spelled the same but with a different meaning" },
        { q: "Give an example of a homograph.", a: "e.g. bow, lead, tear, wind" },
        { q: "Which language does 'algebra' come from?", a: "Arabic" },
        { q: "Which language does 'kindergarten' come from?", a: "German" },
        { q: "Which language does 'tsunami' come from?", a: "Japanese" },
        { q: "Which language does 'piano' come from?", a: "Italian" },
        { q: "Which language does 'shampoo' come from?", a: "Hindi" },
        { q: "Name three parts you can break a long word into.", a: "Prefix, root (base) and suffix" },
        { q: "Besides word parts, what else helps you work out a new word?", a: "The context — the sentence around it" }
      ]
    }
  };

  for (var g = 0; g <= 7; g++) {
    if (LESSONS[g] && PHONICS[g]) LESSONS[g].phonics = PHONICS[g];
  }
})();
