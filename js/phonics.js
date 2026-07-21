// BrightSprouts Academy — Phonics & Early Reading category (LESSONS[22]).
// The decoding foundation for K–2: letter sounds → blending CVC words → word families → sight words.
// Every word list is tap-to-hear (English voice) so a child hears the sound, not just sees it.
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // Short-vowel picture chart: a-apple, e-egg, i-igloo, o-octopus, u-umbrella.
  var vowelDia = '<svg viewBox="0 0 340 150"><rect width="340" height="150" rx="14" fill="#fff6ee"/>'
    // apple
    + '<circle cx="46" cy="52" r="18" fill="#e63946"/><path d="M46 34 v-7" stroke="#7a5230" stroke-width="3" fill="none"/>'
    + '<path d="M47 29 q9 -7 15 -2 q-5 8 -15 2 z" fill="#4aa35a"/>'
    // egg
    + '<ellipse cx="112" cy="54" rx="15" ry="19" fill="#fff" stroke="#e0c9a6" stroke-width="2.5"/><ellipse cx="112" cy="58" rx="7" ry="8" fill="#ffd166"/>'
    // igloo
    + '<path d="M156 68 a24 24 0 0 1 48 0 z" fill="#dceeff" stroke="#8fb8dd" stroke-width="2.5"/>'
    + '<path d="M172 68 v-10 a8 8 0 0 1 16 0 v10" fill="#b8d8f2" stroke="#8fb8dd" stroke-width="2"/>'
    // octopus
    + '<path d="M228 56 a18 16 0 0 1 36 0 v8 h-36 z" fill="#a06cf0"/>'
    + '<g stroke="#a06cf0" stroke-width="4" fill="none" stroke-linecap="round"><path d="M232 64 q-3 9 2 12"/><path d="M240 66 q-2 10 3 12"/><path d="M252 66 q2 10 -3 12"/><path d="M260 64 q3 9 -2 12"/></g>'
    + '<circle cx="240" cy="52" r="2.5" fill="#fff"/><circle cx="252" cy="52" r="2.5" fill="#fff"/>'
    // umbrella
    + '<path d="M296 54 a22 22 0 0 1 44 0 z" fill="#2ec4b6"/>'
    + '<path d="M318 54 v20 a7 7 0 0 1 -13 2" stroke="#8a6d4b" stroke-width="3" fill="none"/>'
    + '<g ' + FA + ' text-anchor="middle">'
    + '<text x="46" y="98" font-size="20" fill="#2d2a4a">Aa</text><text x="46" y="116" font-size="11" fill="#6a668c">apple</text>'
    + '<text x="112" y="98" font-size="20" fill="#2d2a4a">Ee</text><text x="112" y="116" font-size="11" fill="#6a668c">egg</text>'
    + '<text x="180" y="98" font-size="20" fill="#2d2a4a">Ii</text><text x="180" y="116" font-size="11" fill="#6a668c">igloo</text>'
    + '<text x="246" y="98" font-size="20" fill="#2d2a4a">Oo</text><text x="246" y="116" font-size="11" fill="#6a668c">octopus</text>'
    + '<text x="312" y="98" font-size="20" fill="#2d2a4a">Uu</text><text x="312" y="116" font-size="11" fill="#6a668c">umbrella</text>'
    + '<text x="170" y="140" font-size="12" fill="#5d3fa0">The five short vowel sounds</text>'
    + '</g></svg>';

  // Blending: three sound boxes pushed together into one word.
  var blendDia = '<svg viewBox="0 0 340 132"><rect width="340" height="132" rx="14" fill="#eef6ff"/>'
    + '<g fill="#fff" stroke="#4d96ff" stroke-width="2.5">'
    + '<rect x="24" y="26" width="52" height="46" rx="10"/><rect x="86" y="26" width="52" height="46" rx="10"/><rect x="148" y="26" width="52" height="46" rx="10"/></g>'
    + '<g ' + FA + ' text-anchor="middle" font-size="24" fill="#2d2a4a">'
    + '<text x="50" y="58">c</text><text x="112" y="58">a</text><text x="174" y="58">t</text></g>'
    + '<defs><marker id="bl" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#5d3fa0"/></marker></defs>'
    + '<line x1="210" y1="49" x2="248" y2="49" stroke="#5d3fa0" stroke-width="3" marker-end="url(#bl)"/>'
    + '<text x="296" y="60" text-anchor="middle" ' + FA + ' font-size="30" fill="#5d3fa0">cat</text>'
    + '<text x="170" y="98" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">Say each sound, then blend them fast</text>'
    + '<text x="170" y="118" text-anchor="middle" ' + FA + ' font-size="13" fill="#6a668c">c &#8211; a &#8211; t &#8594; cat</text>'
    + '</svg>';

  // Word family ladder: one ending, many beginnings.
  var famDia = '<svg viewBox="0 0 340 172"><rect width="340" height="172" rx="14" fill="#f3fbf4"/>'
    + '<rect x="118" y="16" width="104" height="38" rx="12" fill="#43aa8b"/>'
    + '<text x="170" y="43" text-anchor="middle" ' + FA + ' font-size="22" fill="#fff">- a t</text>';
  var fams = ["cat", "hat", "bat", "mat", "rat", "sat"];
  for (var f = 0; f < 6; f++) {
    var fc = f % 3, fr = Math.floor(f / 3), fx = 26 + fc * 100, fy = 76 + fr * 46;
    famDia += '<rect x="' + fx + '" y="' + fy + '" width="88" height="34" rx="10" fill="#fff" stroke="#9ad6bd" stroke-width="2"/>'
      + '<text x="' + (fx + 44) + '" y="' + (fy + 24) + '" text-anchor="middle" ' + FA + ' font-size="18" fill="#2d2a4a">'
      + '<tspan fill="#e26d5c">' + fams[f].charAt(0) + '</tspan>' + fams[f].slice(1) + '</text>';
  }
  famDia += '</svg>';

  // Sight-word flashcards.
  var sightDia = '<svg viewBox="0 0 340 128"><rect width="340" height="128" rx="14" fill="#fdf6ff"/>';
  var sw = ["the", "and", "you", "was", "said"];
  for (var s = 0; s < 5; s++) {
    var sx = 12 + s * 64;
    sightDia += '<rect x="' + sx + '" y="26" width="56" height="46" rx="10" fill="#fff" stroke="#c9a6f0" stroke-width="2.5"/>'
      + '<text x="' + (sx + 28) + '" y="56" text-anchor="middle" ' + FA + ' font-size="16" fill="#5d3fa0">' + sw[s] + '</text>';
  }
  sightDia += '<text x="170" y="98" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">Know these in a flash — don\'t sound them out</text>'
    + '<text x="170" y="116" text-anchor="middle" ' + LB + ' fill="#6a668c">Tricky words appear in almost every sentence</text></svg>';

  LESSONS[22] = {
    letters: {
      title: "Letter Sounds", emoji: "🔤",
      intro: "Every letter makes a sound. Once you know the sounds, you can unlock almost any word by yourself!",
      learn: [
        "Letters have a NAME and a SOUND. For reading, the sound matters most: 's' is named \"ess\" but says \"sss\" like a snake.",
        "Keep each sound short and crisp — 'b' says \"b\", not \"buh\". Long tails make blending harder.",
        "The five short vowel sounds: a (apple), e (egg), i (igloo), o (octopus), u (umbrella).",
        "Some sounds need two letters together, called digraphs: sh (ship), ch (chip), th (thumb).",
        "Every word starts with a sound — listen for the very first one you hear."
      ],
      activity: "🔎 Sound Hunt: Pick a letter sound, then race around the house finding three things that start with it. 'b' — ball, book, banana!",
      diagram: vowelDia,
      vocabLang: "en",
      vocab: [
        { es: "Aa", en: "apple", say: "apple" }, { es: "Bb", en: "ball", say: "ball" },
        { es: "Cc", en: "cat", say: "cat" }, { es: "Dd", en: "dog", say: "dog" },
        { es: "Ee", en: "egg", say: "egg" }, { es: "Ff", en: "fish", say: "fish" },
        { es: "Gg", en: "goat", say: "goat" }, { es: "Hh", en: "hat", say: "hat" },
        { es: "Ii", en: "igloo", say: "igloo" }, { es: "Mm", en: "moon", say: "moon" },
        { es: "Ss", en: "sun", say: "sun" }, { es: "Tt", en: "top", say: "top" }
      ],
      questions: [
        { q: "Does the letter 's' say \"sss\" or \"buh\"?", a: "Sss" },
        { q: "Which matters most for reading — a letter's name or its sound?", a: "Its sound" },
        { q: "Name the five short vowels.", a: "a, e, i, o, u" },
        { q: "What sound does the word 'ball' start with?", a: "The 'b' sound" },
        { q: "What sound does the word 'sun' start with?", a: "The 's' sound" },
        { q: "Which two letters together say the sound at the start of 'ship'?", a: "s and h (sh)" },
        { q: "Which two letters together say the sound at the start of 'thumb'?", a: "t and h (th)" },
        { q: "'ch' says the sound at the start of which word: chip or ship?", a: "Chip" },
        { q: "What short vowel sound do you hear in the middle of 'cat'?", a: "a" },
        { q: "What short vowel sound do you hear in the middle of 'dog'?", a: "o" },
        { q: "Write a word that begins with the 'm' sound.", a: "e.g. man, map, moon, milk" },
        { q: "Should you say 'b' as \"b\" or as \"buh\"?", a: "\"b\" — short and crisp" }
      ]
    },
    blending: {
      title: "Blending Sounds", emoji: "🐱",
      intro: "Blending is the magic trick of reading: say each sound, push them together, and a word appears. c–a–t → cat!",
      learn: [
        "A CVC word has a consonant, a vowel, then a consonant: c-a-t, d-o-g, s-u-n.",
        "Say each sound in order, then blend them faster and faster until they snap into a word.",
        "Stretch the sounds like elastic — mmm-aaa-nnn — then say it quickly: man!",
        "Change the FIRST sound to make a brand-new word: cat → hat → bat → sat.",
        "Blending is how you read words you have never seen before, all by yourself."
      ],
      activity: "🐌 Slow Then Fast: Say a word slowly, sound by sound, and let your child snap it together fast. Then swap — they stretch, you blend!",
      diagram: blendDia,
      vocabLang: "en",
      vocab: [
        { es: "cat", en: "c – a – t" }, { es: "dog", en: "d – o – g" }, { es: "sun", en: "s – u – n" },
        { es: "hat", en: "h – a – t" }, { es: "pig", en: "p – i – g" }, { es: "bed", en: "b – e – d" },
        { es: "map", en: "m – a – p" }, { es: "top", en: "t – o – p" }, { es: "bug", en: "b – u – g" },
        { es: "net", en: "n – e – t" }, { es: "cup", en: "c – u – p" }, { es: "fan", en: "f – a – n" }
      ],
      questions: [
        { q: "Blend these sounds: c – a – t. What is the word?", a: "cat" },
        { q: "Blend these sounds: d – o – g. What is the word?", a: "dog" },
        { q: "Blend these sounds: s – u – n. What is the word?", a: "sun" },
        { q: "Blend these sounds: p – i – g. What is the word?", a: "pig" },
        { q: "Blend these sounds: b – e – d. What is the word?", a: "bed" },
        { q: "Blend these sounds: m – a – p. What is the word?", a: "map" },
        { q: "How many sounds are in the word 'top'?", a: "Three (t – o – p)" },
        { q: "What does CVC stand for?", a: "Consonant, vowel, consonant" },
        { q: "Change the first sound in 'cat' to 'h'. What word do you get?", a: "hat" },
        { q: "Change the first sound in 'bug' to 'r'. What word do you get?", a: "rug" },
        { q: "Break the word 'fan' into its sounds.", a: "f – a – n" },
        { q: "Break the word 'cup' into its sounds.", a: "c – u – p" }
      ]
    },
    families: {
      title: "Word Families", emoji: "👪",
      intro: "Word families are words that end the same way and rhyme. Learn one, and you can suddenly read the whole family!",
      learn: [
        "A word family shares its ending: -at, -an, -ig, -op, -ug.",
        "Change only the first letter to make the whole family: -at gives cat, hat, bat, mat, rat, sat.",
        "If you can read one word in a family, you can read them all — that is a lot of reading for free!",
        "Families help with spelling too, because they follow the same pattern.",
        "Words in the same family usually rhyme, which makes them fun to say out loud."
      ],
      activity: "📝 Family Lists: Pick an ending like -op and list every word you can think of together — top, hop, mop, pop, stop. Who can add the last one?",
      diagram: famDia,
      vocabLang: "en",
      vocab: [
        { es: "cat", en: "-at" }, { es: "hat", en: "-at" }, { es: "bat", en: "-at" },
        { es: "can", en: "-an" }, { es: "fan", en: "-an" }, { es: "pan", en: "-an" },
        { es: "pig", en: "-ig" }, { es: "wig", en: "-ig" },
        { es: "top", en: "-op" }, { es: "hop", en: "-op" },
        { es: "bug", en: "-ug" }, { es: "rug", en: "-ug" }
      ],
      questions: [
        { q: "Cat, hat and bat all belong to which word family?", a: "The -at family" },
        { q: "Name two more words in the -at family.", a: "e.g. mat, rat, sat, fat" },
        { q: "Can, fan and pan belong to which family?", a: "The -an family" },
        { q: "Which family do pig, wig and dig belong to?", a: "The -ig family" },
        { q: "Which family do top, hop and mop belong to?", a: "The -op family" },
        { q: "Which family do bug, rug and hug belong to?", a: "The -ug family" },
        { q: "What do you change to make a new word in the same family?", a: "The first letter (the first sound)" },
        { q: "Do words in the same family usually rhyme?", a: "Yes" },
        { q: "Add a beginning sound to -un to make a word.", a: "e.g. sun, run, fun, bun" },
        { q: "Add a beginning sound to -ed to make a word.", a: "e.g. bed, red, fed, led" },
        { q: "Is 'dog' in the -at family?", a: "No" },
        { q: "Why are word families helpful?", a: "Learn one word and you can read the whole family" }
      ]
    },
    sight: {
      title: "Sight Words", emoji: "⭐",
      intro: "Some words turn up in nearly every sentence but refuse to sound out — like 'the' and 'was'. We learn these by sight!",
      learn: [
        "Sight words (also called tricky words) appear constantly: the, a, is, and, you, to, was, said.",
        "Many of them break the phonics rules, so sounding them out does not work — we just learn them.",
        "Knowing them by sight makes reading fast and smooth instead of slow and bumpy.",
        "Practise a few at a time until your child reads each one in under two seconds.",
        "Hunt for them in a favourite book — you will find them on every single page."
      ],
      activity: "⚡ Flash Practice: Write five sight words on cards. Flash each one and see if your child can read it before you count to two. Keep the ones they get!",
      diagram: sightDia,
      vocabLang: "en",
      vocab: [
        { es: "the", en: "sight word" }, { es: "and", en: "sight word" }, { es: "is", en: "sight word" },
        { es: "a", en: "sight word" }, { es: "you", en: "sight word" }, { es: "to", en: "sight word" },
        { es: "was", en: "sight word" }, { es: "said", en: "sight word" }, { es: "he", en: "sight word" },
        { es: "she", en: "sight word" }, { es: "we", en: "sight word" }, { es: "my", en: "sight word" }
      ],
      questions: [
        { q: "What is another name for sight words?", a: "Tricky words" },
        { q: "True or false: you should sound out every sight word letter by letter.", a: "False — many break the rules" },
        { q: "Name a sight word that appears in almost every sentence.", a: "e.g. the, and, is, a" },
        { q: "Is 'was' spelled the way it sounds?", a: "No — it is a tricky word" },
        { q: "Is 'said' spelled the way it sounds?", a: "No — it is a tricky word" },
        { q: "Why do we learn sight words by heart?", a: "So reading is fast and smooth" },
        { q: "Write the sight word that means 'me and you together'.", a: "we" },
        { q: "Write the sight word you use to join two things.", a: "and" },
        { q: "How fast should you be able to read a sight word?", a: "In under about two seconds" },
        { q: "Where can you hunt for sight words?", a: "In any book — they are on every page" },
        { q: "Name a sight word that starts with 't'.", a: "the, to (or this, that)" },
        { q: "Is 'the' a sight word?", a: "Yes" }
      ]
    }
  };
})();
