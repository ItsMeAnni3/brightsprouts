// BrightSprouts Academy: "Let's Learn Music" (LESSONS[35]).
//
// One ladder from Kindergarten to Grade 12: what music is, beat and rhythm, note values, pitch,
// reading the staff, scales, melody and harmony, dynamics and tempo, the instrument families,
// your own voice, the science of sound, and listening to music from across nine hundred years.
//
// This is NOT the Music subject inside each grade (LESSONS[g].music), which is one grade's worth
// of practice. This is the whole road, in order, with a project at every step.
//
// Written without em dashes.
//
// ACCURACY RULES, because music teaching repeats a few half-truths everywhere:
//  * "A whole note is 4 beats" is only true when the quarter note gets the beat, as in 4/4. The
//    course says which time signature it means, every time.
//  * "An octave is 8 notes" counts letter names inclusively. It is also 12 semitones. Both are
//    true and they count different things, so the course says both.
//  * A440 is an agreed standard (ISO 16), not a fact of nature. Orchestras have tuned differently
//    and baroque groups still use about 415 Hz. The lesson says so.
//  * A saxophone is woodwind despite being made of brass, because a reed makes the sound. A piano
//    is a keyboard whose strings are struck, so it gets filed under percussion as often as not.
//    Both of those are taught as the interesting cases they are rather than glossed over.
//  * Composer facts are never typed from memory. Every name, year and place in COMPOSERS was
//    checked against Wikidata on 2026-07-28 and keeps its Q-number so it can be rechecked.
//    Wikidata gives the state of the day (Saxe-Eisenach, Republic of Venice), so the course names
//    both that and the modern country, because the borders really did move.
//  * Every frequency in the course is computed from A4 = 440 Hz by the equal temperament formula
//    rather than typed, so the numbers cannot drift from the maths.
(function () {
  if (typeof LESSONS === "undefined") return;

  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }

  // Ids are global to the page, so every diagram defines its own marker and prefixes its gradients.
  function arrowDef(id, col) {
    return '<defs><marker id="' + id + '" markerWidth="9" markerHeight="9" refX="7" refY="4.5" ' +
      'orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="' + col + '"/></marker></defs>';
  }

  // ==================== verified and computed data ====================

  // Checked against Wikidata 2026-07-28: birth (P569), death (P570), citizenship (P27).
  // "state" is the country as it was called then, "modern" is what is on the map now.
  var COMPOSERS = [
    { qid: "Q70991",  name: "Hildegard of Bingen",     born: 1098, died: 1179, era: "Medieval",
      state: "the Holy Roman Empire", modern: "Germany",
      known: "wrote soaring chants for her abbey, and is one of the earliest composers we can name" },
    { qid: "Q1340",   name: "Antonio Vivaldi",         born: 1678, died: 1741, era: "Baroque",
      state: "the Republic of Venice", modern: "Italy",
      known: "wrote The Four Seasons, four violin concertos that paint spring, summer, autumn and winter" },
    { qid: "Q1339",   name: "Johann Sebastian Bach",   born: 1685, died: 1750, era: "Baroque",
      state: "Saxe-Eisenach", modern: "Germany",
      known: "wove several tunes at once so tightly that they still sound impossible" },
    { qid: "Q254",    name: "Wolfgang Amadeus Mozart", born: 1756, died: 1791, era: "Classical",
      state: "the Archduchy of Austria", modern: "Austria",
      known: "was performing across Europe as a small child and wrote over six hundred works" },
    { qid: "Q255",    name: "Ludwig van Beethoven",    born: 1770, died: 1827, era: "Classical",
      state: "the Electorate of Cologne", modern: "Germany",
      known: "kept composing as he went deaf, including the symphony with the Ode to Joy in it" },
    { qid: "Q1268",   name: "Frederic Chopin",         born: 1810, died: 1849, era: "Romantic",
      state: "Poland, later a French citizen", modern: "Poland",
      known: "wrote almost entirely for the piano, and made it sing" },
    { qid: "Q132232", name: "Clara Schumann",          born: 1819, died: 1896, era: "Romantic",
      state: "the Kingdom of Saxony", modern: "Germany",
      known: "was one of the great pianists of her century and a composer while raising eight children" },
    { qid: "Q7315",   name: "Pyotr Ilyich Tchaikovsky", born: 1840, died: 1893, era: "Romantic",
      state: "the Russian Empire", modern: "Russia",
      known: "wrote the music for The Nutcracker and Swan Lake" },
    { qid: "Q191499", name: "Scott Joplin",            born: 1868, died: 1917, era: "Ragtime",
      state: "the United States", modern: "the United States",
      known: "wrote ragtime piano music with a tune that skips against a steady left hand" },
    { qid: "Q7314",   name: "Igor Stravinsky",         born: 1882, died: 1971, era: "Modern",
      state: "Russia, later French and American", modern: "Russia",
      known: "wrote The Rite of Spring, whose rhythms caused an actual riot in 1913" },
    { qid: "Q520522", name: "Florence Price",          born: 1887, died: 1953, era: "Modern",
      state: "the United States", modern: "the United States",
      known: "was the first African American woman to have a symphony played by a major orchestra" },
    { qid: "Q4030",   name: "Duke Ellington",          born: 1899, died: 1974, era: "Jazz",
      state: "the United States", modern: "the United States",
      known: "led a jazz orchestra for fifty years and wrote thousands of pieces for it" }
  ];
  window.MUSIC_COMPOSERS = COMPOSERS;

  // Every frequency in this course is COMPUTED from the standard, never typed. Equal temperament
  // divides the octave into 12 equal steps, so each semitone multiplies the frequency by 2^(1/12).
  var A4 = 440;                       // ISO 16 concert pitch, an agreed standard rather than a law
  var NOTE_ORDER = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  // semitones from A4 to the given note and octave, using scientific pitch notation (A4 = 440)
  function semisFromA4(name, octave) {
    return (NOTE_ORDER.indexOf(name) - NOTE_ORDER.indexOf("A")) + (octave - 4) * 12;
  }
  function freq(name, octave) { return A4 * Math.pow(2, semisFromA4(name, octave) / 12); }

  // Note values, as multiples of a whole note. Turning these into beats needs a time signature,
  // which is exactly the thing most lessons leave out.
  var NOTE_VALUES = [
    ["whole note", 1], ["half note", 0.5], ["quarter note", 0.25],
    ["eighth note", 0.125], ["sixteenth note", 0.0625]
  ];
  // beats a note lasts, given which note value gets one beat (the lower number of the signature)
  function beats(whole_fraction, beatUnit) { return whole_fraction * beatUnit; }

  // Scale patterns in semitones. Each must add up to 12, and the audit checks that.
  var SCALES = {
    "major":          [2, 2, 1, 2, 2, 2, 1],
    "natural minor":  [2, 1, 2, 2, 1, 2, 2]
  };
  var ALPHABET = ["A", "B", "C", "D", "E", "F", "G"];
  var TREBLE_LINES = ["E", "G", "B", "D", "F"];
  var TREBLE_SPACES = ["F", "A", "C", "E"];
  var BASS_LINES = ["G", "B", "D", "F", "A"];
  var BASS_SPACES = ["A", "C", "E", "G"];
  var FAMILIES = {
    strings: ["violin", "viola", "cello", "double bass", "harp"],
    woodwind: ["flute", "clarinet", "oboe", "bassoon", "saxophone"],
    brass: ["trumpet", "trombone", "french horn", "tuba"],
    percussion: ["drum", "cymbals", "triangle", "xylophone", "timpani"]
  };
  var DYNAMICS = [["pianissimo", "pp", "very soft"], ["piano", "p", "soft"],
                  ["mezzo piano", "mp", "medium soft"], ["mezzo forte", "mf", "medium loud"],
                  ["forte", "f", "loud"], ["fortissimo", "ff", "very loud"]];
  var TEMPI = [["largo", "very slow"], ["adagio", "slow"], ["andante", "walking pace"],
               ["moderato", "medium"], ["allegro", "fast"], ["presto", "very fast"]];

  window.MUSIC_FACTS = {
    A4: A4, freq: freq, noteOrder: NOTE_ORDER, noteValues: NOTE_VALUES, beats: beats,
    scales: SCALES, alphabet: ALPHABET, families: FAMILIES, dynamics: DYNAMICS, tempi: TEMPI,
    trebleLines: TREBLE_LINES, trebleSpaces: TREBLE_SPACES,
    bassLines: BASS_LINES, bassSpaces: BASS_SPACES
  };

  // ==================== diagrams ====================

  var dWhat = art(function (A) {
    var s = A.defs([["muW", "#ffd9a8", "#e0902b"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">music starts as something wobbling</text>';
    // a drum being struck, with sound rings coming off it
    s += '<ellipse cx="70" cy="150" rx="42" ry="10" fill="#2d2a4a" opacity=".14"/>';
    s += '<path d="M34 96 h72 v42 q-36 14 -72 0 z" fill="#c96a4a"/>';
    s += '<ellipse cx="70" cy="96" rx="36" ry="12" fill="url(#muW)"/>';
    s += '<path d="M92 66 l14 -18" stroke="#8a5f2e" stroke-width="5" stroke-linecap="round"/>';
    s += '<circle cx="110" cy="46" r="7" fill="#8a5f2e"/>';
    for (var i = 1; i <= 3; i++) {
      s += '<path d="M' + (120 + i * 22) + ' ' + (110 - i * 12) + ' q14 ' + (14 + i * 8) + ' 0 ' +
        (28 + i * 16) + '" stroke="#5d3fa0" stroke-width="3" fill="none" opacity="' + (0.9 - i * 0.2) + '"/>';
    }
    // an ear listening
    s += '<path d="M276 78 q26 -6 26 22 q0 26 -14 34 q-8 5 -8 14" stroke="#c99a5e" stroke-width="7" fill="none" stroke-linecap="round"/>';
    s += '<path d="M284 96 q10 -2 10 9" stroke="#8a5f2e" stroke-width="4" fill="none" stroke-linecap="round"/>';
    s += '<text x="70" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">it vibrates</text>';
    s += '<text x="180" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">air carries it</text>';
    s += '<text x="290" y="180" text-anchor="middle" ' + A.LB + ' font-size="11.5">you hear it</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="11">no wobble, no sound, not even a whisper</text>';
    return A.frame("#fdf6ff", s);
  });

  var dBeat = art(function (A) {
    var s = A.defs([["muB", "#ff9db0", "#c9184a"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">the beat is the steady pulse underneath</text>';
    // eight evenly spaced pulses, the strong one on 1
    for (var i = 0; i < 8; i++) {
      var x = 30 + i * 40, big = (i % 4 === 0);
      s += A.orb("muB", x, 74, big ? 15 : 9);
      s += '<text x="' + x + '" y="' + (big ? 79 : 78) + '" text-anchor="middle" ' + A.LBW +
        ' font-size="' + (big ? 12 : 9) + '">' + ((i % 4) + 1) + '</text>';
    }
    s += '<path d="M22 100 h296" stroke="#c9c4dd" stroke-width="2"/>';
    // a rhythm sitting on top of it: long, short short, long
    var rh = [[30, 70], [110, 30], [150, 30], [190, 70], [270, 48]];
    rh.forEach(function (r) {
      s += '<rect x="' + r[0] + '" y="114" width="' + r[1] + '" height="20" rx="6" fill="#5d3fa0" opacity=".8"/>';
    });
    s += '<text x="170" y="158" text-anchor="middle" ' + A.LB + ' font-size="11">the rhythm is the pattern you clap on top</text>';
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="11.5">the beat never changes, the rhythm does</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="11">the first beat of each group feels strongest</text>';
    return A.frame("#fff8f2", s);
  });

  var dNotes = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">each note splits into two of the next</text>';
    var rows = [[1, "whole", "#e2453b"], [2, "half", "#f2942b"], [4, "quarter", "#4ab55d"], [8, "eighth", "#3a7fc9"]];
    rows.forEach(function (r, i) {
      var n = r[0], y = 40 + i * 34, W = 236, gap = 3;
      for (var j = 0; j < n; j++) {
        var w = (W - gap * (n - 1)) / n;
        s += '<rect x="' + (18 + j * (w + gap)).toFixed(1) + '" y="' + y + '" width="' + w.toFixed(1) +
          '" height="24" rx="5" fill="' + r[2] + '" opacity=".85"/>';
      }
      s += '<text x="264" y="' + (y + 17) + '" ' + A.LB + ' font-size="10.5">' + n + ' ' + r[1] + (n > 1 ? "s" : "") + '</text>';
    });
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">in 4/4 a whole note lasts 4 beats, a quarter 1</text>';
    return A.frame("#f4faff", s);
  });

  var dPitch = art(function (A) {
    var s = A.defs([["muP", "#a8d8ff", "#1f6feb"]]);
    s += arrowDef("muPAr", "#5d3fa0");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">pitch is how high or how low</text>';
    // a staircase of notes climbing
    for (var i = 0; i < 6; i++) {
      var x = 34 + i * 29, h = 18 + i * 18;
      s += '<rect x="' + x + '" y="' + (150 - h) + '" width="22" height="' + h + '" rx="5" fill="url(#muP)"/>';
    }
    s += '<path d="M26 152 v-118" stroke="#5d3fa0" stroke-width="2.5" marker-end="url(#muPAr)"/>';
    s += '<text x="324" y="60" text-anchor="end" ' + A.LB + ' font-size="10.5">fast wobble</text>';
    s += '<text x="324" y="78" text-anchor="end" ' + A.LB + ' font-size="10.5">= high note</text>';
    s += '<text x="324" y="128" text-anchor="end" ' + A.LB + ' font-size="10.5">slow wobble</text>';
    s += '<text x="324" y="146" text-anchor="end" ' + A.LB + ' font-size="10.5">= low note</text>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="11.5">a short tight string makes a high note</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="11">a long loose one makes a low note</text>';
    return A.frame("#f2f9ff", s);
  });

  var dStaff = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">five lines and the four gaps between</text>';
    var top = 44, gap = 13;
    for (var i = 0; i < 5; i++) {
      s += '<path d="M20 ' + (top + i * gap) + ' h300" stroke="#2d2a4a" stroke-width="1.6"/>';
    }
    // a simplified treble clef spiral
    s += '<path d="M42 96 q-12 -10 0 -20 q12 -8 12 10 q0 22 -14 30 q-12 8 -12 -4 q0 -10 12 -8" ' +
      'stroke="#5d3fa0" stroke-width="3" fill="none" stroke-linecap="round"/>';
    s += '<path d="M46 44 v56" stroke="#5d3fa0" stroke-width="3" stroke-linecap="round"/>';
    // notes sitting in the four spaces, spelling FACE
    var sp = ["F", "A", "C", "E"];
    sp.forEach(function (n, i2) {
      var cx = 118 + i2 * 44, cy = top + gap * 4 - gap * i2 - gap / 2;
      s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="8" ry="6" fill="#e2453b"/>';
      s += '<text x="' + cx + '" y="' + (cy + 3.6) + '" text-anchor="middle" ' + A.LBW + ' font-size="8.5">' + n + '</text>';
    });
    s += '<text x="170" y="128" text-anchor="middle" ' + A.LB + ' font-size="11.5">the four spaces spell F A C E</text>';
    s += '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="11">the five lines are E G B D F, going up</text>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="11">higher on the staff means a higher note</text>';
    s += '<text x="170" y="198" text-anchor="middle" ' + A.LB + ' font-size="10.5">the bass clef uses different letters, so learn one first</text>';
    return A.frame("#fffaf4", s);
  });

  var dScale = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">one octave, seven letters, twelve keys</text>';
    // one octave of a keyboard: 7 white keys, 5 black in groups of 2 and 3
    var wx = 26, ww = 40, wy = 40, wh = 78;
    var letters = ["C", "D", "E", "F", "G", "A", "B"];
    letters.forEach(function (L, i) {
      s += '<rect x="' + (wx + i * ww) + '" y="' + wy + '" width="' + (ww - 2) + '" height="' + wh +
        '" rx="4" fill="#ffffff" stroke="#8f93a3" stroke-width="1.4"/>';
      s += '<text x="' + (wx + i * ww + ww / 2 - 1) + '" y="' + (wy + wh - 8) + '" text-anchor="middle" ' +
        A.LB + ' font-size="11">' + L + '</text>';
    });
    [0, 1, 3, 4, 5].forEach(function (i) {
      s += '<rect x="' + (wx + i * ww + ww - 12) + '" y="' + wy + '" width="24" height="' + (wh * 0.62) +
        '" rx="3" fill="#2d2a4a"/>';
    });
    // the major scale step pattern underneath
    var steps = ["2", "2", "1", "2", "2", "2", "1"];
    steps.forEach(function (st, i) {
      s += '<text x="' + (wx + i * ww + ww) + '" y="' + (wy + wh + 20) + '" text-anchor="middle" ' +
        A.LB + ' font-size="10.5" fill="' + (st === "1" ? "#e2453b" : "#3a7fc9") + '">' + st + '</text>';
    });
    s += '<text x="170" y="160" text-anchor="middle" ' + A.LB + ' font-size="11">a major scale steps 2 2 1 2 2 2 1 in semitones</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11">those add up to 12, one whole octave</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="10.5">the two 1s are where no black key sits between</text>';
    return A.frame("#f7f4ff", s);
  });

  var dMelody = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a tune goes across, a chord goes up</text>';
    // melody: notes stepping left to right
    var mel = [0, 1, 2, 1, 3, 4, 3, 2];
    mel.forEach(function (n, i) {
      var cx = 34 + i * 26, cy = 104 - n * 13;
      s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="7.5" ry="5.5" fill="#3a7fc9"/>';
      if (i) {
        s += '<path d="M' + (34 + (i - 1) * 26) + ' ' + (104 - mel[i - 1] * 13) + ' L' + cx + ' ' + cy +
          '" stroke="#3a7fc9" stroke-width="1.6" opacity=".5"/>';
      }
    });
    s += '<text x="106" y="140" text-anchor="middle" ' + A.LB + ' font-size="10.5">melody, one after another</text>';
    // harmony: a stack of three notes at once
    [0, 2, 4].forEach(function (n) {
      s += '<ellipse cx="258" cy="' + (110 - n * 15) + '" rx="9" ry="6.5" fill="#e2453b"/>';
    });
    s += '<path d="M267 80 v46" stroke="#e2453b" stroke-width="2"/>';
    s += '<text x="264" y="140" text-anchor="middle" ' + A.LB + ' font-size="10.5">chord, all at once</text>';
    s += '<text x="170" y="170" text-anchor="middle" ' + A.LB + ' font-size="11.5">harmony is notes sounding together</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">a round is one tune sung against itself</text>';
    return A.frame("#f4fbf5", s);
  });

  var dDynamics = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">how loud, and how fast</text>';
    // a crescendo hairpin with the dynamic marks along it
    s += '<path d="M24 92 L300 60" stroke="#5d3fa0" stroke-width="2.5"/>';
    s += '<path d="M24 92 L300 124" stroke="#5d3fa0" stroke-width="2.5"/>';
    var marks = [["pp", 34], ["p", 84], ["mp", 132], ["mf", 182], ["f", 232], ["ff", 282]];
    marks.forEach(function (m) {
      s += '<text x="' + m[1] + '" y="96" text-anchor="middle" ' + A.LB + ' font-size="12" font-style="italic">' + m[0] + '</text>';
    });
    s += '<text x="24" y="120" ' + A.LB + ' font-size="10.5">very soft</text>';
    s += '<text x="316" y="146" text-anchor="end" ' + A.LB + ' font-size="10.5">very loud</text>';
    s += '<text x="170" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">getting louder is a crescendo</text>';
    // tempo words on a line
    s += '<rect x="20" y="158" width="300" height="34" rx="9" fill="#ffffff"/>';
    s += '<text x="30" y="180" ' + A.LB + ' font-size="10.5">largo, adagio, andante, moderato, allegro, presto</text>';
    s += '<text x="170" y="206" text-anchor="middle" ' + A.LB + ' font-size="10.5">slowest on the left, fastest on the right</text>';
    return A.frame("#fbf8ff", s);
  });

  var dFamilies = art(function (A) {
    var s = A.defs([["muS", "#e8c49a", "#8a5f2e"], ["muBr", "#ffd166", "#c9822a"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">four families in the orchestra</text>';
    // strings: a violin body with strings
    s += '<path d="M40 56 q22 -6 22 16 q0 12 -8 16 q8 4 8 18 q0 22 -22 16 q-22 6 -22 -16 q0 -14 8 -18 q-8 -4 -8 -16 q0 -22 22 -16 z" fill="url(#muS)"/>';
    for (var i = 0; i < 4; i++) s += '<path d="M' + (34 + i * 4) + ' 56 v66" stroke="#4a3520" stroke-width="1"/>';
    // woodwind: a clarinet
    s += '<rect x="112" y="52" width="14" height="72" rx="6" fill="#2f2f38"/>';
    s += '<path d="M108 124 h22 l-4 10 h-14 z" fill="#2f2f38"/>';
    [64, 80, 96].forEach(function (y) { s += '<circle cx="119" cy="' + y + '" r="3" fill="#c9c4dd"/>'; });
    // brass: a trumpet
    s += '<rect x="186" y="76" width="52" height="12" rx="5" fill="url(#muBr)"/>';
    s += '<path d="M238 66 l18 -10 v42 l-18 -10 z" fill="url(#muBr)"/>';
    [196, 210, 224].forEach(function (x) { s += '<rect x="' + (x - 3) + '" y="62" width="6" height="16" rx="2" fill="#c9822a"/>'; });
    // percussion: a drum
    s += '<path d="M276 78 h48 v34 q-24 10 -48 0 z" fill="#c96a4a"/>';
    s += '<ellipse cx="300" cy="78" rx="24" ry="9" fill="#f4e4c8"/>';
    ["strings", "woodwind", "brass", "percussion"].forEach(function (t, i2) {
      s += '<text x="' + (48 + i2 * 84) + '" y="146" text-anchor="middle" ' + A.LB + ' font-size="11">' + t + '</text>';
    });
    s += '<text x="170" y="174" text-anchor="middle" ' + A.LB + ' font-size="11">a saxophone is woodwind, not brass</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="10.5">it is the reed that decides, not the metal</text>';
    return A.frame("#fff8f2", s);
  });

  var dVoice = art(function (A) {
    var s = A.defs([["muV", "#ffd9c4", "#e0a07b"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">your voice is an instrument you own</text>';
    // a singer with breath from the middle
    s += A.orb("muV", 74, 66, 24);
    s += '<circle cx="66" cy="62" r="2.6" fill="#2d2a4a"/><circle cx="82" cy="62" r="2.6" fill="#2d2a4a"/>';
    s += '<ellipse cx="74" cy="76" rx="7" ry="8" fill="#c9184a"/>';
    s += '<path d="M50 100 q24 -10 48 0 l6 44 h-60 z" fill="#7c5cbf"/>';
    s += '<ellipse cx="74" cy="126" rx="17" ry="12" fill="none" stroke="#ffd166" stroke-width="2.5" stroke-dasharray="5 4"/>';
    s += '<text x="74" y="152" text-anchor="middle" ' + A.LB + ' font-size="10.5">breath from here</text>';
    // range bars
    var ranges = [["soprano", 44, "#f28fb0"], ["alto", 60, "#ffd166"], ["tenor", 76, "#8fd39a"], ["bass", 92, "#7fb8e8"]];
    ranges.forEach(function (r, i) {
      s += '<rect x="' + (150 + i * 10) + '" y="' + r[1] + '" width="' + (120 - i * 12) + '" height="12" rx="6" fill="' + r[2] + '"/>';
      s += '<text x="324" y="' + (r[1] + 10) + '" text-anchor="end" ' + A.LB + ' font-size="9.5">' + r[0] + '</text>';
    });
    s += '<text x="238" y="126" text-anchor="middle" ' + A.LB + ' font-size="10.5">high voices at the top</text>';
    s += '<text x="170" y="168" text-anchor="middle" ' + A.LB + ' font-size="11.5">warm up gently, and never shout to sing</text>';
    s += '<text x="170" y="192" text-anchor="middle" ' + A.LB + ' font-size="11">every voice changes as you grow</text>';
    return A.frame("#fdf6ff", s);
  });

  var dSound = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">a wave carries the whole story</text>';
    // two waves: same loudness, different frequency
    function wave(y, cycles, amp, col) {
      var d = "M24 " + y, W = 240;
      for (var x = 0; x <= W; x += 4) {
        d += " L" + (24 + x) + " " + (y - amp * Math.sin(x / W * cycles * 2 * Math.PI)).toFixed(1);
      }
      return '<path d="' + d + '" stroke="' + col + '" stroke-width="2.4" fill="none"/>';
    }
    s += '<path d="M24 62 h240" stroke="#c9c4dd" stroke-width="1"/>' + wave(62, 3, 18, "#3a7fc9");
    s += '<path d="M24 128 h240" stroke="#c9c4dd" stroke-width="1"/>' + wave(128, 7, 18, "#e2453b");
    s += '<text x="324" y="66" text-anchor="end" ' + A.LB + ' font-size="10.5">low note</text>';
    s += '<text x="324" y="132" text-anchor="end" ' + A.LB + ' font-size="10.5">high note</text>';
    s += '<text x="170" y="164" text-anchor="middle" ' + A.LB + ' font-size="11">more waves per second means a higher note</text>';
    s += '<text x="170" y="184" text-anchor="middle" ' + A.LB + ' font-size="11">taller waves mean a louder note</text>';
    s += '<text x="170" y="204" text-anchor="middle" ' + A.LB + ' font-size="10.5">the A above middle C is agreed at 440 waves a second</text>';
    return A.frame("#f4f8ff", s);
  });

  var dHistory = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">nine hundred years of it, and still going</text>';
    s += '<path d="M22 78 h296" stroke="#5d3fa0" stroke-width="2.5"/>';
    var eras = [["1100", "Medieval", 30], ["1650", "Baroque", 96], ["1770", "Classical", 152],
                ["1850", "Romantic", 210], ["1920", "Modern", 268]];
    eras.forEach(function (e, i) {
      s += '<circle cx="' + e[2] + '" cy="78" r="7" fill="' + ["#8a4ac9", "#3a7fc9", "#4ab55d", "#f2942b", "#e2453b"][i] + '"/>';
      s += '<text x="' + e[2] + '" y="64" text-anchor="middle" ' + A.LB + ' font-size="9.5">' + e[0] + '</text>';
      s += '<text x="' + e[2] + '" y="98" text-anchor="middle" ' + A.LB + ' font-size="10">' + e[1] + '</text>';
    });
    s += '<rect x="20" y="112" width="300" height="80" rx="10" fill="#ffffff"/>';
    s += '<text x="32" y="132" ' + A.LB + ' font-size="10.5">1 describe: what did you actually hear?</text>';
    s += '<text x="32" y="150" ' + A.LB + ' font-size="10.5">2 analyse: what are the beat and the tune doing?</text>';
    s += '<text x="32" y="168" ' + A.LB + ' font-size="10.5">3 interpret: what mood is it after, and how?</text>';
    s += '<text x="32" y="186" ' + A.LB + ' font-size="10.5">4 judge: do you like it, and can you say why?</text>';
    return A.frame("#f7f4ff", s);
  });

  window.MUSIC_ART = {
    whatis: dWhat, beat: dBeat, notes: dNotes, pitch: dPitch, staff: dStaff, scales: dScale,
    melody: dMelody, dynamics: dDynamics, families: dFamilies, voice: dVoice, science: dSound,
    history: dHistory
  };

  // ==================== endless worksheets ====================
  // Frequency, scale and composer questions are generated FROM the data and the formula above,
  // never from memory, so a generated question and its answer are correct by construction.
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

  var GEN = {
    whatis: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What does every sound start as?", a: "Something vibrating" };
      if (k === 1) return { q: "What carries sound from an instrument to your ear?", a: "The air" };
      return { q: "Can sound travel where there is no air at all?", a: "No" };
    },
    beat: function () {
      var k = R(0, 2);
      if (k === 0) {
        var n = R(2, 4);
        return { q: "In " + n + "/4 time, how many beats are in one bar?", a: String(n) };
      }
      if (k === 1) return { q: "Which stays the same all the way through, the beat or the rhythm?", a: "The beat" };
      return { q: "Which beat of a bar feels strongest?", a: "The first" };
    },
    notes: function () {
      // Beats depend on the time signature, so the question always says which one.
      var v = pick(NOTE_VALUES.slice(0, 4)), unit = pick([4, 8]);
      var b = beats(v[1], unit);
      if (R(0, 1) === 0 && b >= 0.5) {
        return { q: "In " + (unit === 4 ? "4/4" : "6/8") + " time, where a " +
                 (unit === 4 ? "quarter" : "eighth") + " note is one beat, how many beats is a " + v[0] + "?",
                 a: String(b) };
      }
      var a = pick(NOTE_VALUES.slice(1, 5));
      return { q: "How many " + a[0] + "s fit inside one whole note?", a: String(Math.round(1 / a[1])) };
    },
    pitch: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Does a shorter, tighter string sound higher or lower?", a: "Higher" };
      if (k === 1) return { q: "What is the word for how high or low a note is?", a: "Pitch" };
      return { q: "Does a big instrument usually sound higher or lower than a small one?", a: "Lower" };
    },
    staff: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "How many lines does a staff have?", a: "Five" };
      if (k === 1) return { q: "What do the four treble clef spaces spell?", a: "FACE" };
      if (k === 2) {
        var i = R(0, TREBLE_LINES.length - 1);
        return { q: "On the treble staff, which note sits on line " + (i + 1) + ", counting from the bottom?",
                 a: TREBLE_LINES[i] };
      }
      var j = R(0, TREBLE_SPACES.length - 1);
      return { q: "On the treble staff, which note sits in space " + (j + 1) + ", counting from the bottom?",
               a: TREBLE_SPACES[j] };
    },
    scales: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "How many letters are in the musical alphabet?", a: "Seven" };
      if (k === 1) return { q: "How many semitones are there in one octave?", a: "Twelve" };
      if (k === 2) {
        var name = pick(Object.keys(SCALES));
        var sum = SCALES[name].reduce(function (a, b) { return a + b; }, 0);
        return { q: "The steps of a " + name + " scale add up to how many semitones?", a: String(sum) };
      }
      var letter = pick(ALPHABET);
      var next = ALPHABET[(ALPHABET.indexOf(letter) + 1) % ALPHABET.length];
      return { q: "In the musical alphabet, which letter comes after " + letter + "?", a: next };
    },
    melody: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What is it called when notes follow one after another?", a: "A melody" };
      if (k === 1) return { q: "What is it called when notes sound at the same time?", a: "Harmony" };
      return { q: "How many notes are in a basic chord?", a: "Three" };
    },
    dynamics: function () {
      var k = R(0, 2);
      if (k === 0) {
        var d = pick(DYNAMICS);
        return { q: "In music, what does " + d[0] + " (" + d[1] + ") mean?", a: cap(d[2]) };
      }
      if (k === 1) {
        var t = pick(TEMPI);
        return { q: "What speed does " + t[0] + " mean?", a: cap(t[1]) };
      }
      return { q: "What is it called when the music gradually gets louder?", a: "A crescendo" };
    },
    families: function () {
      var fam = pick(Object.keys(FAMILIES));
      var k = R(0, 1);
      if (k === 0) {
        var inst = pick(FAMILIES[fam]);
        return { q: "Which orchestra family does the " + inst + " belong to?", a: cap(fam) };
      }
      return { q: "Name an instrument in the " + fam + " family.", a: cap(pick(FAMILIES[fam])) };
    },
    voice: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Which is the highest of the four main singing voices?", a: "Soprano" };
      if (k === 1) return { q: "Which is the lowest of the four main singing voices?", a: "Bass" };
      return { q: "Where should your breath come from when you sing?", a: "Low down, not the throat" };
    },
    science: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "How many vibrations a second is the A above middle C tuned to?", a: "440" };
      if (k === 1) {
        var up = R(0, 1);
        var f = Math.round(A4 * (up ? 2 : 0.5));
        return { q: "If A is 440 vibrations a second, what is the A one octave " +
                 (up ? "higher" : "lower") + "?", a: String(f) };
      }
      if (k === 2) return { q: "What happens to the frequency when you go up one octave?", a: "It doubles" };
      return { q: "What is the unit for vibrations per second called?", a: "Hertz" };
    },
    history: function () {
      var c = pick(COMPOSERS), k = R(0, 2);
      if (k === 0) return { q: "In which year was " + c.name + " born?", a: String(c.born) };
      if (k === 1) return { q: "Which era of music was " + c.name + " part of?", a: c.era };
      return { q: "Which country, as it is called today, was " + c.name + " from?", a: cap(c.modern) };
    }
  };
  window.MUSIC_GEN = GEN;

  // ==================== the twelve units ====================
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, project, questions, extra) {
    var u = {
      title: title, emoji: emoji, band: band, intro: intro, learn: learn,
      diagram: diagram, parentNote: parentNote, project: project,
      musicGen: key, questions: questions
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    return u;
  }

  LESSONS[35] = {

    whatis: U("whatis", "1 · What Is Music?", "🎵", "Kindergarten to Grade 2",
      "Music is sound organised on purpose. Every sound you have ever heard began with something wobbling, and music is what happens when somebody arranges those wobbles into a pattern worth listening to.",
      ["Every sound starts with something vibrating: a string, a drum skin, a reed, or your own vocal folds.",
       "The vibration pushes the air, the air carries it to your ear, and your ear turns it into something you hear.",
       "Sound needs something to travel through. In space, where there is no air, nobody would hear a drum at all.",
       "Music has ingredients just like art does: beat, rhythm, pitch, melody, harmony, dynamics, tempo and tone colour.",
       "Noise and music are not different sorts of sound. The difference is whether somebody organised it.",
       "Every culture on earth has made music, and most of it was never written down."],
      dWhat,
      "The single most useful idea at this age is that sound is movement you cannot see. Rest a hand on a speaker, or on your own throat while humming, and the abstract becomes physical in one second. Children who have felt sound rather than only heard it ask much better questions later.",
      { name: "🎵 Shoebox Guitar", mins: 25,
        materials: ["An empty shoebox or a tissue box", "Rubber bands of different thicknesses",
                    "A pencil", "Scissors", "Paper"],
        safety: "A grown-up does any cutting of the box. Rubber bands are stretchy, so keep them away from faces.",
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Stretch the rubber bands around the box so they cross the opening.",
                  "Pluck each one and listen. Which sounds highest? Which sounds lowest?",
                  "Slide a pencil under the bands near one end to lift them off the box.",
                  "Pluck again. Write down what changed and what stayed the same.",
                  "Move the pencil along and find the spot where a band plays the highest note you can get."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up puts the bands on the box.",
                  "Take turns plucking and watching. Can you see the band blurring as it moves?",
                  "Put a finger lightly on a buzzing band. What happens to the sound?",
                  "Hum with a hand on your own throat and feel the same wobble.",
                  "Play a simple game: the grown-up plucks and your child says high or low, eyes closed."] } },
      [{ q: "What is music?", a: "Sound organised on purpose" },
       { q: "What does every sound start as?", a: "Something vibrating" },
       { q: "What carries sound to your ear?", a: "The air" },
       { q: "Could you hear a drum in space?", a: "No, there is no air" },
       { q: "Name one ingredient of music.", a: "Beat, or pitch, or melody" },
       { q: "What makes a sound count as music?", a: "Somebody organised it" },
       { q: "What vibrates when you sing?", a: "Your vocal folds" },
       { q: "Have all cultures made music?", a: "Yes" }]),

    beat: U("beat", "2 · Beat and Rhythm", "🥁", "Kindergarten to Grade 3",
      "The beat is the steady pulse you tap your foot to. The rhythm is the pattern you clap on top of it. Confusing the two is the commonest mix up in all of music, and once you can hear the difference everything else gets easier.",
      ["The beat is steady and does not change. It is like a clock ticking under the music.",
       "The rhythm is the pattern of long and short sounds sitting on top of the beat.",
       "Beats come in groups, and the first beat of each group feels the strongest.",
       "The time signature tells you how many beats are in each group. In 4/4 there are four, in 3/4 there are three.",
       "3/4 is the waltz feel: ONE two three, ONE two three. You can hear it in a lot of dance music.",
       "Tempo is how fast the beat goes. A fast tempo does not mean a busier rhythm, and a slow one does not mean a simpler one.",
       "A rest is a silence with a length. Silence is part of the rhythm, not a gap in it."],
      dBeat,
      "Try walking around the room to the beat while your child claps the rhythm of the words. Splitting the two between two bodies makes the difference obvious in a way that explaining never does. If they drift into clapping along with their own feet, slow right down and start again.",
      { name: "🥁 Name Rhythms", mins: 20,
        materials: ["Paper", "A pencil", "Two saucepans or a table to tap on",
                    "Wooden spoons, or just your hands"],
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Tap a steady beat with one hand and keep it going. Do not let it speed up.",
                  "Now say your full name over the top and clap the rhythm of the syllables with the other hand.",
                  "Write the name out and draw a long dash for each long syllable and a dot for each short one.",
                  "Do the same for four more names or four foods you like.",
                  "Put two of your rhythms together to make an eight beat pattern, and play the whole thing twice through without stopping."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["The grown-up keeps a slow steady beat, tapping a saucepan.",
                  "Your child claps their own name on top: An-na, or Ben-ja-min.",
                  "Swap over. Now the child keeps the beat and the grown-up claps.",
                  "Play copy cat: the grown-up claps a short pattern and the child claps it straight back.",
                  "Try one round where you both stop dead on a silent beat. That is a rest."] } },
      [{ q: "What is the beat?", a: "The steady pulse underneath" },
       { q: "What is the rhythm?", a: "The pattern of long and short sounds" },
       { q: "Which one never changes?", a: "The beat" },
       { q: "How many beats are in a bar of 4/4?", a: "Four" },
       { q: "How many beats are in a bar of 3/4?", a: "Three" },
       { q: "Which beat feels strongest?", a: "The first" },
       { q: "What is tempo?", a: "How fast the beat goes" },
       { q: "What is a rest?", a: "A silence with a length" }]),

    notes: U("notes", "3 · Note Values", "🎼", "Grades 1 to 5",
      "Written music needs a way to say how long each sound lasts. The clever part is that every note is worth exactly half of the one before it, so the whole system is built on halving.",
      ["A whole note splits into two half notes. A half note splits into two quarter notes, and so on down.",
       "So one whole note equals 2 halves, or 4 quarters, or 8 eighths, or 16 sixteenths.",
       "How many BEATS a note lasts depends on the time signature. This is the bit most people skip.",
       "In 4/4 the quarter note gets one beat, so a whole note lasts 4 beats and a half note lasts 2.",
       "In 6/8 the eighth note gets one beat, so the same whole note would last 8 beats instead.",
       "Every rest has a matching note value, so a quarter rest is one beat of silence in 4/4.",
       "A dot after a note makes it half as long again. A dotted half note is 3 beats in 4/4."],
      dNotes,
      "If your child says a whole note is four beats, agree and then add the missing half of the sentence: in 4/4. It costs nothing now and saves genuine confusion the first time they meet 6/8 or 3/2. Music notation says how notes relate to each other, and the time signature turns that into beats.",
      { name: "🎼 Build a Bar", mins: 25,
        materials: ["Paper", "Scissors", "Coloured pencils", "A ruler", "Sticky tape"],
        safety: "Round ended scissors for younger children, and a grown-up cuts the first strip.",
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Cut a strip of paper 16cm long. That is one whole note.",
                  "Cut a second strip and fold it in half, then cut. Those two 8cm pieces are half notes.",
                  "Keep going: four 4cm quarter notes, eight 2cm eighth notes.",
                  "Colour each size differently and label them.",
                  "Now build bars of 4/4 by laying pieces end to end until they add up to 16cm. Find five different ways.",
                  "Write each bar down and clap it while tapping a steady beat."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["A grown-up cuts one long strip and folds it in half in front of your child.",
                  "Ask how many halves make the whole, before cutting. Then cut and check.",
                  "Fold and cut again to make quarters. Line them up under the whole to see they match.",
                  "Take turns building a line of pieces that adds up to the long strip.",
                  "Clap each line together, saying 'ta' for a quarter and 'ta-te' for two eighths."] } },
      [{ q: "How many half notes fit in a whole note?", a: "Two" },
       { q: "How many quarter notes fit in a whole note?", a: "Four" },
       { q: "How many eighth notes fit in a whole note?", a: "Eight" },
       { q: "In 4/4, how many beats is a whole note?", a: "Four" },
       { q: "In 4/4, how many beats is a quarter note?", a: "One" },
       { q: "What decides how many beats a note lasts?", a: "The time signature" },
       { q: "What does a dot after a note do?", a: "Makes it half as long again" },
       { q: "In 4/4, how many beats is a dotted half note?", a: "Three" }]),

    pitch: U("pitch", "4 · Pitch: High and Low", "📈", "Grades 1 to 5",
      "Pitch is how high or how low a note sounds. It is not about loudness at all, which surprises people, and it comes down to one thing: how fast the thing is vibrating.",
      ["Fast vibrations make a high note. Slow vibrations make a low note.",
       "Shorter, tighter and thinner all push the pitch up. Longer, looser and thicker push it down.",
       "That is why a violin sounds higher than a cello, and a piccolo higher than a tuba.",
       "Pitch and loudness are separate. A low note can be deafening and a high note can be a whisper.",
       "When you press a guitar string down you shorten it, which is why the note goes up.",
       "Blowing across a bottle with less water in it gives a lower note, because the air column is longer."],
      dPitch,
      "The bottles and glasses experiment trips up a lot of grown-ups too, because tapping a glass and blowing across a bottle work in opposite directions. Tapping makes the glass and water vibrate, so more water means lower. Blowing makes the air column vibrate, so more water means a shorter column and a higher note. Doing both is the memorable bit.",
      { name: "📈 Water Glass Scale", mins: 30,
        materials: ["Five or more identical glasses or jars", "A jug of water",
                    "A metal spoon", "Food colouring if you have it", "Paper", "A pencil"],
        safety: "Glass and water together are slippery. Use jars on a towel, and a grown-up handles the pouring for young children.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Line the glasses up and fill the first almost to the top, then each one a little less.",
                  "Tap each with the spoon. Listen to the order the pitches come in.",
                  "Adjust the water until you can play the first five notes of a scale.",
                  "Write down how full each glass is, so you can rebuild it tomorrow.",
                  "Now blow across the tops instead of tapping. The order flips, because now you are vibrating the air and not the water.",
                  "Write one sentence explaining why tapping and blowing disagree."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["A grown-up fills three jars: nearly full, half, and just a little.",
                  "Your child taps each one and says which is highest.",
                  "Line them up from lowest to highest, like steps.",
                  "Add colouring so each one is a different colour, then play a tune by pointing.",
                  "Play a guessing game with eyes closed: which jar did the grown-up tap?"] } },
      [{ q: "What is pitch?", a: "How high or low a note is" },
       { q: "Do fast vibrations make a high note or a low one?", a: "A high one" },
       { q: "Does a shorter string sound higher or lower?", a: "Higher" },
       { q: "Which sounds lower, a violin or a cello?", a: "A cello" },
       { q: "Are pitch and loudness the same thing?", a: "No" },
       { q: "Why does pressing a guitar string change the note?", a: "It makes the string shorter" },
       { q: "Tapping a glass with more water in it gives what?", a: "A lower note" },
       { q: "What is the word for how high or low a note is?", a: "Pitch" }]),

    staff: U("staff", "5 · Reading the Staff", "🎹", "Grades 2 to 7",
      "Written music sits on five lines and the four gaps between them, and that whole arrangement is called the staff. Once you can find notes on it you can play music written by somebody you will never meet.",
      ["The staff has five lines and four spaces. Notes sit either on a line or in a space.",
       "Higher up the staff means a higher note. That much is exactly what you would guess.",
       "The clef at the start tells you which letters the lines and spaces stand for.",
       "In the treble clef the four spaces spell F A C E from the bottom up. That is the easiest thing in music to remember.",
       "In the treble clef the five lines are E G B D F from the bottom up. Every Good Boy Deserves Fudge is one way to remember it.",
       "The bass clef uses different letters: lines are G B D F A and spaces are A C E G. Learn one clef properly before starting the other.",
       "Middle C sits on a little extra line of its own, just below the treble staff and just above the bass one."],
      dStaff,
      "Resist teaching both clefs at once. Almost every child who ends up saying they cannot read music was taught two contradictory sets of letters in the same fortnight. Get treble solid, wait, then introduce bass as a new puzzle rather than a variation.",
      { name: "🎹 Giant Floor Staff", mins: 30,
        materials: ["Five long strips of paper, or five lengths of string or wool",
                    "Sticky tape", "Small objects to use as notes, such as bottle tops or coins",
                    "Paper", "A pencil"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Tape five strips to the floor, evenly spaced, to make a giant staff.",
                  "Put a bottle top in each of the four spaces and check they spell F A C E from the bottom.",
                  "Now place tops on the five lines and name them: E G B D F.",
                  "Take them all off. Have somebody call out a letter and race to put a top in the right place.",
                  "Write a four note tune on paper using only line and space notes, then lay it out on the floor staff and check it."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["Lay out the five strips together and count the lines, then count the spaces.",
                  "The grown-up puts a bottle top in the bottom space and says F, then works up: A, C, E.",
                  "Say FACE together a few times, pointing from the bottom up.",
                  "Play hop the spaces: the child stands in a space and the grown-up calls its letter.",
                  "Finish by hiding one top and asking which letter has gone missing."] } },
      [{ q: "How many lines does a staff have?", a: "Five" },
       { q: "How many spaces does a staff have?", a: "Four" },
       { q: "Does higher on the staff mean higher or lower in pitch?", a: "Higher" },
       { q: "What do the treble clef spaces spell?", a: "FACE" },
       { q: "What are the treble clef lines, bottom to top?", a: "E G B D F" },
       { q: "What are the bass clef lines, bottom to top?", a: "G B D F A" },
       { q: "What does the clef tell you?", a: "Which letters the lines stand for" },
       { q: "Where does middle C sit in the treble clef?", a: "On a short line below the staff" }]),

    scales: U("scales", "6 · The Alphabet and Scales", "🔤", "Grades 3 to 8",
      "The musical alphabet is only seven letters long, A to G, and then it starts again. A scale is a ladder of notes built from that alphabet using a fixed pattern of steps, and the pattern is what gives a scale its flavour.",
      ["The musical alphabet is A B C D E F G, then back to A. Seven letters, over and over.",
       "The distance from one note to the same letter next time is called an octave.",
       "An octave is 8 letter names if you count both ends, and 12 semitones if you count the smallest steps. Both are true, they just count different things.",
       "A semitone is the smallest step on a piano: the very next key, black or white.",
       "A major scale steps 2 2 1 2 2 2 1 in semitones. Those add up to 12, which is exactly one octave.",
       "A natural minor scale steps 2 1 2 2 1 2 2. Same twelve semitones, different order, and it sounds sadder.",
       "The two single steps in a major scale are the places where no black key sits between the white ones."],
      dScale,
      "The place to slow down is the difference between 8 and 12, because a child who has been told an octave is 8 notes and then counts 12 keys on a piano will decide one of you is wrong. They are counting different things: 8 letter names, 12 smallest steps. Count both out loud on a real keyboard or a picture of one.",
      { name: "🔤 Paper Keyboard", mins: 30,
        materials: ["A long strip of paper or two sheets taped together", "A ruler", "A pencil",
                    "A black crayon or marker", "Scissors"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Rule seven equal white keys along the strip and letter them C D E F G A B.",
                  "Draw the black keys in the right places: a group of two, then a group of three. There is no black key between E and F, or between B and C.",
                  "Count every key, black and white, from your C to the next C. You should get 12 steps.",
                  "Now count only the letter names, C to C. You should get 8.",
                  "Walk the major scale pattern 2 2 1 2 2 2 1 with your finger and check you land back on C.",
                  "Try the same pattern starting on G. You will need one black key, and that is why G major has an F sharp."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["A grown-up draws seven white keys and letters them together with your child.",
                  "Look at a real piano or a picture. Find the group of two black keys.",
                  "C is always the white key just to the left of the two black keys. Find every C.",
                  "Sing the letters A B C D E F G and then start again at A, so the loop is obvious.",
                  "Play a game: the grown-up says a letter and the child points to it on the paper keyboard."] } },
      [{ q: "How many letters are in the musical alphabet?", a: "Seven" },
       { q: "What are they?", a: "A B C D E F G" },
       { q: "What is the distance to the same letter next time called?", a: "An octave" },
       { q: "How many semitones are in an octave?", a: "Twelve" },
       { q: "How many letter names are in an octave, counting both ends?", a: "Eight" },
       { q: "What is a semitone?", a: "The smallest step, the very next key" },
       { q: "What are the steps of a major scale?", a: "2 2 1 2 2 2 1" },
       { q: "Where is there no black key between white keys?", a: "Between E and F, and B and C" }]),

    melody: U("melody", "7 · Melody and Harmony", "🎶", "Grades 3 to 8",
      "A melody is the bit you hum on the way home. Harmony is what happens underneath it. Melody moves across time, harmony stacks up at one moment, and nearly all the music you know is both at once.",
      ["A melody is notes one after another. It is the tune, and it is what you remember.",
       "Harmony is notes at the same time. Three or more together make a chord.",
       "A melody moves by steps to the next letter, or by leaps over some.",
       "The shape of a melody is called its contour. Drawing the shape in the air helps you hear it.",
       "A phrase is a musical sentence. Melodies breathe in phrases, which is why singers can sing them.",
       "A round is one melody sung against a delayed copy of itself. Row Row Row Your Boat is the famous one.",
       "Major chords tend to sound bright and minor chords tend to sound sad, though what a listener actually feels depends a lot on what they grew up hearing."],
      dMelody,
      "A round is the cheapest possible demonstration of harmony, and it only needs two people. Sing it once through together, then start the second voice two bars late and stop as soon as it clicks. Children usually laugh when the two lines lock, which is the exact moment harmony stops being a word and becomes a sound.",
      { name: "🎶 Draw the Tune, Then Sing a Round", mins: 25,
        materials: ["Paper", "Coloured pencils", "A song everybody knows",
                    "At least two people who are willing to sing"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Choose a song you know completely by heart.",
                  "Sing it slowly and draw a line that goes up when the tune goes up and down when it comes down.",
                  "Mark where you take a breath. Those marks are the ends of the phrases.",
                  "Count how many phrases the whole song has, and see whether any two have the same shape.",
                  "Now teach somebody Row Row Row Your Boat and start them two bars after you. Keep going without speeding up.",
                  "Write down what the two voices did when they overlapped."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Sing a familiar song together and move a hand up and down with the tune.",
                  "The grown-up draws the shape on paper while the child sings.",
                  "Look at the drawing. Where is the highest point of the song?",
                  "Sing Row Row Row Your Boat together twice.",
                  "Now the grown-up starts, and the child joins in when the grown-up reaches 'gently'. Expect chaos the first time, and try again."] } },
      [{ q: "What is a melody?", a: "Notes one after another" },
       { q: "What is harmony?", a: "Notes at the same time" },
       { q: "How many notes make a basic chord?", a: "Three" },
       { q: "What is the shape of a melody called?", a: "Its contour" },
       { q: "What is a musical sentence called?", a: "A phrase" },
       { q: "What is a round?", a: "One tune sung against a delayed copy of itself" },
       { q: "Name a famous round.", a: "Row Row Row Your Boat" },
       { q: "Which usually sounds brighter, major or minor?", a: "Major" }]),

    dynamics: U("dynamics", "8 · Dynamics and Tempo", "🔊", "Grades 2 to 7",
      "Two players can play exactly the same notes and only one of them makes music. The difference is usually dynamics and tempo: how loud, how soft, how fast, how slow, and when those things change.",
      ["Dynamics means how loud or soft. The words are Italian, because Italy is where the notation grew up.",
       "Piano (p) means soft and forte (f) means loud. Adding another letter makes it more so: pp is very soft, ff is very loud.",
       "Mezzo means medium, so mezzo forte (mf) is medium loud.",
       "A crescendo means gradually getting louder. A diminuendo means gradually getting softer.",
       "Tempo means how fast the beat is, from largo (very slow) through andante (walking pace) to presto (very fast).",
       "A metronome measures tempo in beats per minute, so 60 bpm is one beat every second.",
       "Accents, pauses and silence do as much work as loudness. The quietest bar in a piece is often the one people remember."],
      dDynamics,
      "Dynamics is the fastest way to make a beginner sound musical, because it needs no new technique. Ask for the same eight bars three times: once as a secret, once normally, once as an announcement. The notes will not improve and the performance will, which is a useful thing for a child to notice about themselves.",
      { name: "🔊 Conduct the Room", mins: 20,
        materials: ["Paper", "A thick pen", "Saucepans, boxes or hands to make sound with",
                    "A watch or phone with a second hand for the metronome part"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Make six cards: pp, p, mp, mf, f, ff. Write what each means on the back.",
                  "Clap a steady beat and work through the cards from quietest to loudest without changing speed.",
                  "Now do the opposite: keep the loudness the same and change only the tempo, from largo to presto.",
                  "Time yourself against a clock and clap exactly 60 beats in a minute. That is 60 bpm.",
                  "Try 120 bpm, which is two claps a second.",
                  "Perform eight bars of anything three times, as a secret, normally, and as an announcement."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["The grown-up is the conductor first. Hand low means quiet, hand high means loud.",
                  "Your child plays or claps and follows the hand. No talking allowed.",
                  "Swap over so the child conducts. This is the good bit.",
                  "Add speed: hand moving fast means fast, hand moving slowly means slow.",
                  "Finish with one very quiet ending, as quietly as you can both manage."] } },
      [{ q: "What does dynamics mean?", a: "How loud or soft the music is" },
       { q: "What does piano (p) mean?", a: "Soft" },
       { q: "What does forte (f) mean?", a: "Loud" },
       { q: "What does mezzo mean?", a: "Medium" },
       { q: "What is a crescendo?", a: "Gradually getting louder" },
       { q: "What is a diminuendo?", a: "Gradually getting softer" },
       { q: "What does tempo mean?", a: "How fast the beat is" },
       { q: "What does a metronome measure?", a: "Beats per minute" }]),

    families: U("families", "9 · The Instrument Families", "🎻", "Grades 2 to 7",
      "An orchestra is sorted into four families, and the sorting is by how the sound is made rather than by what the instrument is made of. That catches people out, and the exceptions are the interesting part.",
      ["Strings make sound from a vibrating string, bowed or plucked: violin, viola, cello, double bass and harp.",
       "Woodwind makes sound from vibrating air, usually through a reed or across a hole: flute, clarinet, oboe, bassoon and saxophone.",
       "Brass makes sound from the player's buzzing lips into a mouthpiece: trumpet, trombone, french horn and tuba.",
       "Percussion makes sound by being hit, shaken or scraped: drums, cymbals, triangle, xylophone and timpani.",
       "A saxophone is woodwind even though it is made of brass, because a reed makes the sound. It is what vibrates that decides.",
       "A flute is woodwind too, even when it is silver, for the same reason.",
       "The piano is a keyboard whose strings are hit by little hammers, so it gets filed under percussion about as often as it gets a category of its own. Both answers are defensible."],
      dFamilies,
      "The saxophone question is worth making a small fuss of, because it teaches classification rather than trivia. Ask why a silver flute is woodwind, and let your child work out that the family is named for the mechanism and not the material. That is the same reasoning that sorts whales away from fish.",
      { name: "🎻 Build One From Each Family", mins: 40,
        materials: ["An empty shoebox or a tissue box", "Rubber bands of different thicknesses",
                    "A drinking straw", "Scissors", "A cardboard tube",
                    "A jar with a lid and some rice or dried beans", "Sticky tape", "Paper", "A pencil"],
        safety: "A grown-up cuts the straw and the tube. Small beans and rice are a choking risk, so tape the jar lid shut for younger children.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Strings: stretch rubber bands over the shoebox and pluck them.",
                  "Woodwind: flatten one end of a straw, cut it into a point, and blow hard through the flattened end. It takes a few goes.",
                  "Brass: buzz your lips into one end of the cardboard tube. Your lips are the reed here, which is the whole idea.",
                  "Percussion: put rice in the jar, tape it shut and shake it.",
                  "Write down for each one what is actually vibrating.",
                  "Play all four in turn and sort them into the four families, then explain where a saxophone would go and why."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["A grown-up makes the straw reed and the shaker in advance.",
                  "Try each instrument together and ask: is it plucked, blown, buzzed or shaken?",
                  "Sort them into four spots on the floor, one per family.",
                  "Listen to a short orchestra clip together and point at each family as you hear it.",
                  "Let your child make up a name for their favourite one and decorate it."] } },
      [{ q: "How many families are in an orchestra?", a: "Four" },
       { q: "Name them.", a: "Strings, woodwind, brass and percussion" },
       { q: "Which family is the violin in?", a: "Strings" },
       { q: "Which family is the trumpet in?", a: "Brass" },
       { q: "Which family is the saxophone in?", a: "Woodwind" },
       { q: "Why is a saxophone woodwind?", a: "A reed makes the sound, not the metal" },
       { q: "What makes the sound in a brass instrument?", a: "The player's buzzing lips" },
       { q: "What decides which family an instrument is in?", a: "What vibrates to make the sound" }]),

    voice: U("voice", "10 · Your Voice", "🎤", "Grades 1 to 6",
      "You were born holding an instrument. Singing is the oldest music there is, it costs nothing, and looking after your voice is a skill in itself.",
      ["Your voice works when air from your lungs makes two small folds in your throat vibrate.",
       "Good singing breath comes from low down, so your middle moves out rather than your shoulders going up.",
       "Warm up gently before singing properly, the same way you would stretch before running.",
       "Shouting is not singing, and it damages the very thing you are trying to use.",
       "The four main singing voices from high to low are soprano, alto, tenor and bass.",
       "Everybody's voice changes as they grow, and it changes a lot during teenage years. A range that vanishes usually comes back bigger.",
       "Water helps and shouting over noise does not. If it hurts, stop, because pain is information."],
      dVoice,
      "Two things protect a child's voice for life: never shout to be heard over a backing track, and stop the moment anything hurts. Beyond that, do not worry about tunefulness at this age. Pitch matching improves with exposure and singing together, and a child who has been told they are tone deaf usually just needs another two years and somebody willing to sing beside them.",
      { name: "🎤 Warm Up and Record", mins: 20,
        materials: ["A glass of water", "A phone or anything that records",
                    "A song everybody knows", "Paper", "A pencil", "A quiet room"],
        safety: "Stop immediately if your throat feels sore or scratchy. Never sing over loud music.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Stand tall, feet apart, shoulders down. Breathe in low so your middle moves out, not your shoulders up.",
                  "Hiss out slowly on a steady sss for as long as you comfortably can, and time it.",
                  "Slide your voice from low to high on an ooo, like a siren, three times gently.",
                  "Hum quietly up and down five notes.",
                  "Now record yourself singing one verse, then listen back once. Write down one thing you liked.",
                  "Repeat the hiss timing after a week of daily practice and compare the two numbers."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Be a siren together: slide from your lowest sound to your highest and back.",
                  "Be a bee, a mouse and a lion. High, higher, and low.",
                  "Put a hand on your own chest and hum. Feel the buzz.",
                  "Sing one favourite song together, the grown-up singing quietly so the child can hear themselves.",
                  "Record it and play it back. Laughing is allowed and encouraged."] } },
      [{ q: "What vibrates when you sing?", a: "The folds in your throat" },
       { q: "Where should singing breath come from?", a: "Low down, not the shoulders" },
       { q: "What should you do before singing properly?", a: "Warm up gently" },
       { q: "Is shouting a good way to sing?", a: "No" },
       { q: "Name the highest of the four main voices.", a: "Soprano" },
       { q: "Name the lowest of the four main voices.", a: "Bass" },
       { q: "Does your voice change as you grow?", a: "Yes" },
       { q: "What should you do if singing hurts?", a: "Stop" }]),

    science: U("science", "11 · The Science of Sound", "🌊", "Grades 5 to 9",
      "Underneath every note is a wave, and the wave explains everything music does. Two numbers describe it: how many waves arrive each second, and how tall they are.",
      ["Frequency is how many waves arrive each second, measured in hertz (Hz). More waves means a higher note.",
       "Amplitude is how tall the wave is. Taller means louder. It has nothing to do with the pitch.",
       "The A above middle C is tuned to 440 Hz, which is an agreement rather than a law of nature. It is written down as ISO 16.",
       "Orchestras have not always used 440. Baroque groups often tune to about 415 Hz, which sounds noticeably lower.",
       "Going up one octave doubles the frequency. So the A above 440 Hz is 880 Hz, and the A below is 220 Hz.",
       "The octave is divided into 12 equal steps in modern tuning, so each semitone multiplies the frequency by the twelfth root of 2, which is about 1.0595.",
       "Two notes an octave apart sound so alike that we give them the same letter. That is why the alphabet repeats.",
       "Sound travels about 343 metres a second through air at room temperature, which is roughly a million times slower than light."],
      dSound,
      "The doubling rule is the moment music turns into mathematics, and it lands well with children who like numbers and have decided music is not for them. Start at 440, double it, double it again. Then halve it twice. Every one of those is an A, which is a genuinely surprising fact rather than a school one.",
      { name: "🌊 Measure an Octave", mins: 35,
        materials: ["A ruler or a tape measure", "A length of string or elastic, about a metre",
                    "Two chairs or a doorway to stretch it between", "A calculator",
                    "Paper", "A pencil", "A tuning app, if you have one"],
        safety: "Stretched elastic can snap back. Keep it below face height and a grown-up ties the ends.",
        solo: { band: "Grades 5 and up, on your own",
          steps: ["Stretch the string tightly between two fixed points and pluck it. Listen to the note.",
                  "Press the string down at the exact middle and pluck one half. That note is one octave higher.",
                  "Write down what you did to the length, and what happened to the pitch.",
                  "Halve it again. It should be another octave up, and much harder to hear.",
                  "Now do the arithmetic: starting at 440 Hz, work out the A one octave up, two octaves up, and one octave down.",
                  "Work out one semitone above 440 by multiplying by 1.0595. Check it against a tuning app if you have one."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["A grown-up stretches and ties the string between two chairs.",
                  "Pluck it together and listen to the low note.",
                  "The grown-up presses the middle while the child plucks. Ask what changed.",
                  "Measure both lengths with the tape measure and write the two numbers down.",
                  "Notice that half the string gave the higher note. That is the whole discovery, and it is a real one."] } },
      [{ q: "What is frequency measured in?", a: "Hertz" },
       { q: "What does a higher frequency sound like?", a: "A higher note" },
       { q: "What does amplitude control?", a: "How loud the note is" },
       { q: "What frequency is the A above middle C tuned to?", a: "440 Hz" },
       { q: "Is 440 Hz a law of nature?", a: "No, it is an agreed standard" },
       { q: "What happens to frequency when you go up an octave?", a: "It doubles" },
       { q: "What is the A one octave above 440 Hz?", a: "880 Hz" },
       { q: "How many equal steps is the octave divided into?", a: "Twelve" }]),

    history: U("history", "12 · Listening to Music", "🏛️", "Grades 5 to 12",
      "The last skill is the one you keep: putting a piece of music on and having something to say about it. The method is the same four steps that work for a painting, and it takes about four minutes.",
      ["Step 1, describe. What can you actually hear? Instruments, voices, fast or slow, loud or soft.",
       "Step 2, analyse. What are the beat, the melody and the harmony doing? Where does it change?",
       "Step 3, interpret. What mood is it going for, and which of the things in step 1 create it?",
       "Step 4, judge. Do you like it? Now you can have an opinion, as long as you can point at a reason.",
       "Western music is often split into eras: Medieval, Renaissance, Baroque, Classical, Romantic and Modern. The dates overlap, because styles do not change on a particular Tuesday.",
       "Hildegard of Bingen was writing chant in the 1100s, which makes her one of the earliest composers we can actually name.",
       "Bach, Mozart and Beethoven come from three different eras despite often sharing a shelf, and they sound different for good reasons.",
       "Florence Price was the first African American woman to have a symphony played by a major orchestra, in 1933, and much of her music was lost for decades before being found again.",
       "Jazz, ragtime and every popular style since are part of the same story, not a separate one."],
      dHistory,
      "Insist on finishing step 1 before anyone moves to step 4, exactly as with looking at art. Most disagreements about music are two people doing step 4 with nothing behind it. Ask for three things they can actually hear before any verdict, and the conversation improves immediately.",
      { name: "🏛️ Four Step Listening Journal", mins: 30,
        materials: ["Paper", "A pencil", "Something to play music on",
                    "Two pieces of music from different eras", "Somewhere quiet to sit"],
        solo: { band: "Grades 5 and up, on your own",
          steps: ["Choose two pieces from different eras, for example something by Vivaldi and something by Duke Ellington.",
                  "Play the first for two minutes with your eyes shut. Write nothing yet.",
                  "Describe: list ten things you actually heard. Instruments, speed, loud or soft. No opinions.",
                  "Analyse: what is the beat doing, and does the tune repeat? Where does the biggest change happen?",
                  "Interpret: write two sentences on the mood, each starting 'I think this because I heard'.",
                  "Judge: say whether you would play it again, and give one reason from the steps above.",
                  "Now do the same for the second piece and write three ways they differ."] },
        together: { band: "Kindergarten to Grade 4, with a grown-up",
          steps: ["Listen to one short piece together with eyes closed, all the way through.",
                  "Play I Spy with ears: take turns naming something you heard, until you run out.",
                  "Ask: does it feel like running, walking or sleeping music?",
                  "Move to it. Big slow steps for slow music, tiny quick ones for fast.",
                  "Last question, and only now: did you like it, and what makes you say that?"] } },
      [{ q: "What is step 1 of listening to music?", a: "Describe what you can hear" },
       { q: "In which step are you allowed an opinion?", a: "Step 4, judge" },
       { q: "Name three eras of Western music.", a: "Baroque, Classical and Romantic" },
       { q: "Why do the era dates overlap?", a: "Styles change gradually" },
       { q: "Who was writing chant in the 1100s?", a: "Hildegard of Bingen" },
       { q: "Which era was Mozart part of?", a: "Classical" },
       { q: "What was Florence Price the first to do?", a: "Have a symphony played by a major orchestra" },
       { q: "Is jazz part of the same story as classical music?", a: "Yes" }])
  };
})();
