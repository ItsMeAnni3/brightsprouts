// BrightSprouts Academy — Cursive handwriting (Grades 2-5).
//
// The letterforms are drawn as SVG paths rather than set in a font, for three reasons:
//   * there is no dependable cursive font. CSS `font-family: cursive` resolves to Comic Sans on
//     most Windows machines, which is print, not cursive; real school-cursive fonts
//     (D'Nealian, Zaner-Bloser) are proprietary and cannot be bundled.
//   * a tracing sheet needs the ENTRY and EXIT strokes to line up so letters join. A font gives
//     isolated glyphs; joining is the whole point of cursive.
//   * it keeps the site offline-capable and dependency-free, like js/logo.js.
//
// Every glyph is authored UPRIGHT on one shared baseline grid and the slant is applied once as a
// skew on the group. Baking a slant into 52 hand-written paths would guarantee they disagree.
//   ascender top   y = 12
//   x-height top   y = 40   (the dashed middle guide line)
//   baseline       y = 80
//   descender foot y = 104
// Letters begin and end ON the baseline so one letter's exit meets the next letter's entry.
(function () {

  var CURSIVE_SLANT = -11;   // degrees; real cursive leans, and a skew keeps every glyph agreeing

  // ---- lowercase ----------------------------------------------------------------
  // w = the advance width, i.e. where the next letter starts.
  var LOWER = {
    a: { w: 52, d: "M6 74 C8 79 14 80 18 78 M38 44 C34 40 26 39 20 42 C11 46 7 54 7 62 C7 71 13 77 21 77 C30 77 37 69 38 58 L38 44 L38 76 C38 80 44 81 50 75" },
    b: { w: 48, d: "M6 74 C8 79 14 80 18 78 M14 78 L14 20 C14 15 18 12 21 14 C25 17 23 26 19 34 C15 42 12 52 12 62 C12 72 18 78 26 78 C34 78 40 71 40 63 C40 55 34 50 27 51 C22 52 18 56 17 60 M40 63 C42 73 46 78 50 75" },
    c: { w: 46, d: "M6 74 C8 79 14 80 18 78 M40 50 C37 43 30 39 23 41 C13 44 7 54 7 63 C7 72 14 78 22 78 C31 78 38 72 42 66" },
    d: { w: 50, d: "M6 74 C8 79 14 80 18 78 M38 50 C35 43 28 39 21 41 C12 44 7 54 7 63 C7 72 13 78 21 78 C30 78 37 70 38 60 L38 20 C38 15 41 13 43 16 M38 60 L38 76 C38 80 44 81 50 75" },
    e: { w: 44, d: "M6 74 C8 79 14 80 18 78 M10 62 C18 60 28 56 33 51 C37 47 36 41 31 40 C24 39 17 46 14 55 C11 64 13 73 21 77 C29 81 37 76 42 69" },
    f: { w: 46, d: "M6 74 C8 79 14 80 18 78 M16 78 C16 60 18 40 20 28 C22 17 26 12 29 14 C32 17 30 25 26 33 C20 44 14 60 12 74 C10 88 12 98 18 100 C23 102 27 98 27 93 C27 87 22 84 16 86 M28 92 C32 88 38 82 44 76" },
    g: { w: 50, d: "M6 74 C8 79 14 80 18 78 M38 50 C35 43 28 39 21 41 C12 44 7 54 7 63 C7 72 13 78 21 78 C30 78 37 70 38 60 L38 44 L38 86 C38 96 33 102 26 102 C20 102 16 98 17 93 C18 88 24 86 32 88 C40 90 46 84 50 76" },
    h: { w: 50, d: "M6 74 C8 79 14 80 18 78 M14 78 L14 20 C14 15 18 12 21 14 C25 17 23 26 19 34 C15 42 12 54 12 66 L12 78 C12 66 16 52 24 47 C31 43 38 47 38 56 L38 76 C38 80 44 81 50 75" },
    i: { w: 40, d: "M6 74 C8 79 14 80 18 78 M14 78 C14 66 18 52 22 44 L22 76 C22 80 28 81 34 75 M22 28 A2.5 2.5 0 1 1 22 27" },
    j: { w: 42, d: "M6 74 C8 79 14 80 18 78 M14 78 C14 66 18 52 22 44 L22 86 C22 96 17 102 11 102 C6 102 3 98 4 93 C5 88 11 86 18 88 C27 90 33 84 37 76 M22 28 A2.5 2.5 0 1 1 22 27" },
    k: { w: 50, d: "M6 74 C8 79 14 80 18 78 M14 78 L14 20 C14 15 18 12 21 14 C25 17 23 26 19 34 C15 42 12 54 12 66 L12 78 M12 62 C20 58 30 52 36 46 M18 60 C22 66 24 72 26 76 C28 80 34 81 40 75" },
    l: { w: 40, d: "M6 74 C8 79 14 80 18 78 M14 78 L14 20 C14 15 18 12 21 14 C25 17 23 26 19 34 C15 42 12 54 12 66 L12 76 C12 80 18 81 24 75" },
    m: { w: 66, d: "M6 74 C8 79 14 80 18 78 M12 78 C12 66 14 52 18 45 L18 76 C18 62 22 50 28 46 C33 43 38 47 38 56 L38 76 C38 62 42 50 48 46 C53 43 58 47 58 56 L58 76 C58 80 64 81 70 75" },
    n: { w: 54, d: "M6 74 C8 79 14 80 18 78 M12 78 C12 66 14 52 18 45 L18 76 C18 62 22 50 28 46 C33 43 38 47 38 56 L38 76 C38 80 44 81 50 75" },
    // o, v, w and b are the four letters that join from the TOP, not the baseline. Their exit
    // stroke has to leave at x-height or the next letter attaches in the wrong place.
    o: { w: 46, d: "M6 74 C8 79 14 80 18 78 M34 47 C31 41 24 39 18 42 C9 46 5 55 5 63 C5 72 11 78 19 78 C28 78 34 70 34 60 C34 53 31 47 27 44 C31 43 34 44 36 46 C39 49 42 49 45 46" },
    p: { w: 50, d: "M6 74 C8 79 14 80 18 78 M14 78 C14 66 16 52 20 45 L20 102 M20 66 C22 56 28 48 35 46 C42 44 47 49 47 57 C47 66 41 74 33 77 C27 79 22 77 20 72 M47 62 C48 72 52 78 56 75" },
    q: { w: 50, d: "M6 74 C8 79 14 80 18 78 M38 50 C35 43 28 39 21 41 C12 44 7 54 7 63 C7 72 13 78 21 78 C30 78 37 70 38 60 L38 44 L38 96 C38 100 42 102 46 100 C50 98 50 92 46 88 M40 96 C44 100 50 100 54 96" },
    // r is NOT a short n: it rises to a point, runs briefly FLAT, then drops. Without that flat
    // shoulder it renders as an n and a child copies the wrong letter.
    r: { w: 46, d: "M6 74 C8 79 14 80 18 78 M12 78 C12 66 15 54 19 45 C20 50 19 54 21 54 C26 53 32 50 38 49 C36 53 35 56 35 60 C35 68 35 73 36 76 C37 80 43 81 49 75" },
    // s rises to a SHARP apex and comes straight back down without looping over itself.
    // Any backward loop at the top instantly reads as an e -- that is what e's loop is.
    s: { w: 42, d: "M6 74 C8 79 14 80 18 78 M13 76 C19 66 25 55 29 46 C24 51 20 58 19 65 C18 72 23 78 30 77 C35 76 38 72 40 67" },
    t: { w: 44, d: "M6 74 C8 79 14 80 18 78 M20 78 C20 60 22 36 24 24 C25 18 28 16 29 19 C30 23 28 32 26 42 L26 74 C26 79 32 81 38 75 M12 44 L34 44" },
    u: { w: 52, d: "M6 74 C8 79 14 80 18 78 M14 44 L14 68 C14 76 20 79 26 76 C32 73 36 64 36 54 L36 44 L36 76 C36 80 42 81 48 75" },
    // v needs a POINTED bottom and a top exit. Rounded at the bottom it is indistinguishable
    // from a u, which is exactly how the first draft rendered.
    v: { w: 48, d: "M6 74 C8 79 14 80 18 78 M13 44 C15 57 20 70 26 78 C31 70 35 56 37 44 C38 52 38 46 40 45 C42 44 44 45 46 47" },
    w: { w: 62, d: "M6 74 C8 79 14 80 18 78 M14 44 C14 58 17 70 22 76 C26 80 30 78 32 70 C34 62 35 52 35 44 C35 56 37 68 41 75 C44 80 49 79 52 71 C55 63 56 52 56 44 C56 58 57 70 59 75 C61 79 65 80 68 76" },
    x: { w: 46, d: "M6 74 C8 79 14 80 18 78 M12 46 C18 54 28 68 34 76 C36 79 42 80 46 74 M38 46 C32 54 22 68 16 76" },
    y: { w: 50, d: "M6 74 C8 79 14 80 18 78 M14 44 L14 68 C14 76 20 79 26 76 C32 73 36 64 36 54 L36 44 L36 86 C36 96 31 102 24 102 C18 102 14 98 15 93 C16 88 22 86 30 88 C38 90 44 84 48 76" },
    z: { w: 46, d: "M6 74 C8 79 14 80 18 78 M12 46 C20 45 30 45 36 46 C30 56 22 68 16 78 C24 79 32 78 38 74 M22 78 L22 96 C22 100 18 102 15 100 C12 98 13 94 17 92 M22 90 C28 92 36 90 42 84" }
  };

  // ---- uppercase ----------------------------------------------------------------
  // Capitals in cursive start a word, so they do not need an entry stroke, only a clean exit.
  var UPPER = {
    A: { w: 56, d: "M40 24 C32 34 20 56 14 72 C12 78 16 80 20 76 M40 24 C40 40 40 60 42 74 C43 79 48 80 52 75 M20 60 L42 56" },
    B: { w: 56, d: "M18 76 C18 56 20 34 22 22 C24 16 30 14 32 18 C34 24 28 34 20 42 M22 24 C32 20 42 24 43 34 C44 43 36 50 26 50 C36 50 46 55 46 65 C46 74 38 79 30 77 C24 75 20 70 19 64 M46 68 C48 74 52 78 56 74" },
    C: { w: 52, d: "M46 34 C42 24 32 18 24 22 C14 27 9 42 10 55 C11 68 18 78 28 78 C36 78 43 72 47 64" },
    D: { w: 56, d: "M18 76 C18 56 20 34 22 22 C24 16 30 14 32 18 C34 24 28 34 20 42 M22 24 C34 18 46 26 47 44 C48 62 38 78 26 78 C21 78 18 74 18 68 M47 58 C48 70 52 78 56 74" },
    E: { w: 50, d: "M42 30 C38 22 30 18 24 22 C16 27 12 40 13 52 C14 66 20 78 30 78 C38 78 44 72 47 64 M14 50 C22 48 30 44 34 40" },
    F: { w: 54, d: "M46 24 C38 20 28 22 24 30 C20 40 20 58 20 74 C20 82 16 88 12 86 C9 84 10 78 16 76 M14 46 L40 42 M24 26 L48 22" },
    G: { w: 56, d: "M46 32 C42 24 32 18 24 22 C14 27 9 42 10 55 C11 68 18 78 28 78 C36 78 42 72 44 64 L44 76 C44 80 50 81 56 75 M36 62 L48 60" },
    H: { w: 58, d: "M16 78 C16 58 18 34 20 22 C22 16 27 14 29 18 C31 24 26 34 18 42 M20 52 C30 48 40 44 44 38 M44 20 C42 34 40 56 40 72 C40 78 46 80 50 74" },
    // I needs a FULL-HEIGHT stem. The first draft's loop and stem both sat in the x-height band,
    // so it rendered as a lowercase q.
    I: { w: 48, d: "M42 27 C36 18 25 19 22 28 C19 38 28 45 36 40 C32 52 28 64 26 71 C24 78 30 81 36 78 C41 76 44 72 46 68" },
    J: { w: 48, d: "M34 22 C26 20 18 24 18 32 C18 40 26 44 32 40 C38 36 36 28 30 24 M32 30 C32 50 30 74 28 88 C26 98 20 102 14 100 C9 98 8 92 12 89 C17 86 24 88 30 94 M32 88 C36 94 42 96 46 92" },
    K: { w: 56, d: "M16 78 C16 58 18 34 20 22 C22 16 27 14 29 18 C31 24 26 34 18 42 M20 56 C30 50 40 42 46 34 M26 54 C30 62 34 70 38 76 C40 80 46 81 52 75" },
    L: { w: 52, d: "M40 22 C32 30 22 46 18 60 C15 70 18 78 26 78 C34 78 42 72 46 64 M18 68 C24 62 32 52 38 42 C42 36 40 30 36 30" },
    M: { w: 64, d: "M12 78 C12 58 14 36 18 24 L18 74 C18 56 22 36 28 26 C32 20 36 24 36 34 L36 74 C36 56 40 36 46 26 C50 20 54 24 54 34 L54 74 C54 79 60 81 66 75" },
    N: { w: 58, d: "M12 78 C12 58 14 36 18 24 L18 74 C18 56 22 36 28 26 C32 20 36 24 36 34 L36 74 C36 79 42 81 48 75" },
    // O finishes at the TOP. Exiting from mid-height gave it a stem and it read as lowercase a.
    O: { w: 54, d: "M41 31 C36 22 26 19 18 26 C9 34 7 52 11 64 C15 75 25 80 34 76 C43 71 47 57 45 44 C43 34 38 27 32 24 C36 22 42 24 46 29" },
    P: { w: 52, d: "M18 78 C18 58 20 34 22 22 C24 16 30 14 32 18 C34 24 28 34 20 42 M22 24 C34 18 46 24 47 36 C48 48 38 56 26 55 C21 54 18 51 18 47" },
    Q: { w: 56, d: "M42 32 C38 24 30 18 22 22 C12 27 8 42 9 55 C10 68 18 78 28 78 C38 78 44 68 44 56 C44 44 40 34 34 28 M36 66 C42 74 48 84 52 92 C54 96 50 100 46 96" },
    R: { w: 54, d: "M18 78 C18 58 20 34 22 22 C24 16 30 14 32 18 C34 24 28 34 20 42 M22 24 C34 18 44 24 45 34 C46 44 38 52 26 52 M28 52 C32 60 36 70 40 76 C42 80 48 81 54 75" },
    S: { w: 50, d: "M44 30 C40 22 30 18 22 22 C13 27 10 38 14 46 C18 54 28 58 32 66 C35 73 30 79 22 78 C16 77 12 72 11 66" },
    // T keeps a visible curved crossbar; without it the stem alone reads as a bracket.
    T: { w: 56, d: "M44 26 C37 21 29 23 26 31 C22 41 22 59 22 74 C22 79 28 81 34 75 M14 27 C24 20 40 18 52 23" },
    U: { w: 56, d: "M16 22 C14 38 12 58 14 70 C15 77 22 80 28 76 C34 72 38 60 40 46 C41 36 42 28 42 22 L42 74 C42 79 48 81 54 75" },
    // V, like its lowercase, needs a POINTED bottom or it is just a U.
    V: { w: 52, d: "M13 22 C15 41 21 63 29 77 C37 63 43 41 45 22 C46 31 45 26 48 25 C51 24 53 26 55 29" },
    W: { w: 66, d: "M12 22 C14 40 18 62 24 74 C27 79 31 78 33 70 C36 58 37 38 36 22 C38 40 42 62 48 74 C51 79 55 78 57 70 C60 58 61 38 60 22 M60 58 C62 68 66 74 70 70" },
    X: { w: 52, d: "M14 24 C22 38 34 60 42 74 C44 79 50 80 54 74 M46 24 C38 38 26 60 18 74" },
    Y: { w: 54, d: "M14 22 C16 38 22 56 30 64 C33 67 36 66 38 60 C41 50 43 34 43 22 L42 86 C42 96 36 102 29 102 C23 102 20 98 21 93 C22 88 28 86 36 88 M40 88 C44 94 50 96 54 92" },
    Z: { w: 50, d: "M14 26 C22 22 34 22 42 26 C34 40 24 60 18 76 C26 78 36 76 42 70 M24 78 L24 94 C24 99 20 101 17 99 M24 90 C30 92 38 90 44 84" }
  };

  // ---- how cursive is actually taught: by stroke family, not alphabetical order ----
  // Letters that share a starting stroke are learned together, because the hand is learning the
  // stroke rather than 26 unrelated shapes.
  var FAMILIES = [
    { key: "undercurve", name: "The Undercurve", emoji: "🌙",
      note: "Every one of these starts with the same swing up from the baseline.",
      letters: ["i", "t", "u", "w"] },
    { key: "overcurve", name: "The Overcurve", emoji: "🌈",
      note: "These start with a bump over the top, like a little hill.",
      letters: ["n", "m", "v", "x", "y", "z"] },
    { key: "loops", name: "Tall Loops", emoji: "🎈",
      note: "These reach up to the top line and make a loop on the way.",
      letters: ["l", "b", "h", "k", "f"] },
    { key: "ovals", name: "The Oval", emoji: "⭕",
      note: "All of these begin with the same round oval, drawn back over the top.",
      letters: ["a", "c", "d", "g", "o", "q"] },
    { key: "tails", name: "Below the Line", emoji: "⬇️",
      note: "These letters drop a tail below the baseline.",
      letters: ["j", "p", "g", "q", "y", "z"] },
    { key: "rest", name: "The Last Few", emoji: "✨",
      note: "The trickiest shapes, saved for when your hand already knows the strokes.",
      letters: ["e", "r", "s"] }
  ];

  // Joining practice: short real words, chosen so the joins are the common ones a child meets.
  var WORDS = {
    easy:  ["it", "us", "we", "in", "run", "sun", "win", "nut"],
    mid:   ["moon", "rain", "hand", "bird", "tree", "star", "milk", "sand"],
    hard:  ["family", "school", "friend", "garden", "little", "yellow"],
    names: ["Ana", "Sam", "Kim", "Ben", "Lucy", "Max"]
  };

  // Kept SHORT on purpose. A full pangram auto-fits down to about a fifth of normal size, and at
  // that scale the fine detail that separates s from i is simply gone -- a tracing sheet a child
  // cannot read is worse than a shorter one they can.
  var SENTENCES = [
    "I can write in cursive.",
    "My family made a garden.",
    "Read a book every day.",
    "The brown fox can jump."
  ];

  // ---- drawing --------------------------------------------------------------------
  // One glyph. `dashed` draws the tracing copy; solid draws the model to look at.
  function glyph(ch, dashed) {
    var g = LOWER[ch] || UPPER[ch];
    if (!g) return null;
    return { w: g.w, d: g.d, dashed: !!dashed };
  }
  function widthOf(ch) {
    var g = LOWER[ch] || UPPER[ch];
    return g ? g.w : 26;   // a space, or anything unknown, still advances
  }

  // A row of guide lines with one solid model then dashed copies, matching the print tracing sheet.
  function row(text, reps, opts) {
    var o = opts || {};
    var W = 480;
    var unit = o.scale || 0.72;                    // glyph units -> sheet units
    var USABLE = W - 20, gap = 14, i;

    // Auto-fit: a whole sentence is far wider than the sheet at the default size. Without this
    // the overflow guard below rejects even the FIRST copy and the row renders completely empty,
    // which is exactly how the sentence mode first behaved.
    var rawW = 0;
    for (i = 0; i < text.length; i++) rawW += widthOf(text[i]);
    if (rawW * unit > USABLE) unit = Math.max(0.18, USABLE / rawW);

    // The guide lines are DERIVED from the final scale, never hard-coded. scale() shrinks the
    // glyph's y coordinates as well as its x, so a fixed baseline at y=80 would sit well below
    // letters drawn smaller and they would visibly float.
    var PAD = 6;
    var TOP = PAD + 12 * unit, MID = PAD + 40 * unit,
        BASE = PAD + 80 * unit, DESC = PAD + 104 * unit, H = DESC + 10;
    var runW = rawW * unit;
    var out = "";
    for (var r = 0; r < reps; r++) {
      var x = 10 + r * (runW + gap);
      // The FIRST copy always draws. Only extra repeats are dropped for space -- otherwise a
      // line too long to fit would render as nothing at all rather than as one model to trace.
      if (r > 0 && x + runW > W - 6) break;
      var solid = (r === 0);
      var inner = "", cx = 0;
      for (i = 0; i < text.length; i++) {
        var ch = text[i];
        if (ch === " ") { cx += 26 * unit; continue; }
        var g = LOWER[ch] || UPPER[ch];
        if (!g) continue;
        inner += '<path d="' + g.d + '" transform="translate(' + cx.toFixed(1) + ' ' + PAD + ') scale(' + unit + ')"' +
                 ' fill="none" stroke="' + (solid ? "#6f6a92" : "#c4bedd") + '"' +
                 ' stroke-width="' + (solid ? 3.2 : 2.6) + '"' +
                 (solid ? "" : ' stroke-dasharray="7 6"') +
                 ' stroke-linecap="round" stroke-linejoin="round"/>';
        cx += g.w * unit;
      }
      out += '<g transform="translate(' + x.toFixed(1) + ' 0)">' + inner + "</g>";
    }
    // the slant is applied once, to everything, around the baseline
    return '<svg class="cursrow" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Trace ' + text + '">' +
      '<line x1="6" y1="' + TOP + '" x2="' + (W - 6) + '" y2="' + TOP + '" stroke="#ddd8ee" stroke-width="1"/>' +
      '<line x1="6" y1="' + MID + '" x2="' + (W - 6) + '" y2="' + MID + '" stroke="#ddd8ee" stroke-width="1" stroke-dasharray="6 5"/>' +
      '<line x1="6" y1="' + BASE + '" x2="' + (W - 6) + '" y2="' + BASE + '" stroke="#9a94b8" stroke-width="1.6"/>' +
      '<line x1="6" y1="' + DESC + '" x2="' + (W - 6) + '" y2="' + DESC + '" stroke="#ece8f8" stroke-width="1"/>' +
      '<g transform="skewX(' + CURSIVE_SLANT + ') translate(' + (Math.abs(CURSIVE_SLANT) * 0.9) + ' 0)">' + out + "</g>" +
      "</svg>";
  }

  // ---- the practice sets a sheet can show ------------------------------------------
  var MODES = [];
  FAMILIES.forEach(function (f) { MODES.push(["fam-" + f.key, f.emoji + " " + f.name]); });
  MODES.push(["lower", "✏️ All Small Letters"]);
  MODES.push(["upper", "🅰️ All Capitals"]);
  MODES.push(["words-easy", "🔗 Join: Short Words"]);
  MODES.push(["words-mid", "🔗 Join: Longer Words"]);
  MODES.push(["words-hard", "🔗 Join: Tricky Words"]);
  MODES.push(["names", "🙋 Names"]);
  MODES.push(["sentence", "📜 Whole Sentences"]);

  // Each mode returns [text, repeats] rows. Longer text gets fewer repeats so nothing
  // runs off the right-hand edge of the sheet.
  function rowsFor(mode) {
    var i, out = [];
    if (mode.indexOf("fam-") === 0) {
      var fam = null;
      FAMILIES.forEach(function (f) { if ("fam-" + f.key === mode) fam = f; });
      if (!fam) return [];
      fam.letters.forEach(function (c) { out.push([c, 5]); });
      return out;
    }
    if (mode === "lower") { Object.keys(LOWER).forEach(function (c) { out.push([c, 5]); }); return out; }
    if (mode === "upper") { Object.keys(UPPER).forEach(function (c) { out.push([c, 4]); }); return out; }
    if (mode === "words-easy") { WORDS.easy.forEach(function (w) { out.push([w, 3]); }); return out; }
    if (mode === "words-mid") { WORDS.mid.forEach(function (w) { out.push([w, 2]); }); return out; }
    if (mode === "words-hard") { WORDS.hard.forEach(function (w) { out.push([w, 2]); }); return out; }
    if (mode === "names") { WORDS.names.forEach(function (w) { out.push([w, 3]); }); return out; }
    if (mode === "sentence") { SENTENCES.forEach(function (s) { out.push([s, 1]); }); return out; }
    return [];
  }

  window.Cursive = {
    LOWER: LOWER, UPPER: UPPER, FAMILIES: FAMILIES, WORDS: WORDS, SENTENCES: SENTENCES,
    MODES: MODES, SLANT: CURSIVE_SLANT,
    row: row, rowsFor: rowsFor, widthOf: widthOf, glyph: glyph,
    letters: function () { return Object.keys(LOWER); },
    capitals: function () { return Object.keys(UPPER); }
  };

  // ---- the lessons ------------------------------------------------------------------
  // Cursive is a Grade 2-5 skill in US schools: introduced around Grade 2-3, expected to be
  // fluent by Grade 4-5. Print tracing on this site stops after Grade 2, so this picks up
  // exactly where it leaves off.
  if (typeof LESSONS !== "undefined") {
    var L = {
      2: {
        title: "Cursive: The First Strokes", emoji: "✒️",
        intro: "Cursive is joined-up writing, where your pencil stays on the paper and the letters hold hands. Before any letters, there are just four little strokes to learn, and every single letter is built from them.",
        learn: [
          "Cursive letters lean the same way, like grass in the wind. Keep every letter leaning together and your writing looks tidy even when it is not perfect.",
          "Almost every small letter starts on the bottom line and swings UP. That swing is called the undercurve, and it is what joins one letter to the next.",
          "Start with i, t, u and w. They all begin with the same undercurve, so once you can do one you can nearly do all four.",
          "Then try n, m, v and x. These start with an overcurve, a little bump over the top instead of a swing underneath.",
          "Go slowly. Cursive is about smooth, not fast. Speed turns up by itself after a few weeks."
        ],
        activity: "✋ Air Writing: Write the letter as big as you can in the air with your whole arm, three times, before you write it on paper. Big muscles learn the shape first, and the small ones copy them.",
        cursiveSheet: true,
        cursiveModes: ["fam-undercurve", "fam-overcurve"],
        cursiveStart: "fam-undercurve"
      },
      3: {
        title: "Cursive: Every Small Letter", emoji: "✒️",
        intro: "Now all twenty-six small letters, learned in families. Letters that start the same way are practised together, because your hand is really learning the stroke, not twenty-six separate shapes.",
        learn: [
          "The tall loops (l, b, h, k, f) climb all the way to the top line and loop on the way up.",
          "The oval letters (a, c, d, g, o, q) all begin with the same round oval, traced back over the top to the left.",
          "Four letters join from the TOP instead of the bottom: o, v, w and b. Watch where their tail finishes, because the next letter has to start from there.",
          "Some letters drop below the bottom line: j, p, g, q, y and z. That part is called the descender.",
          "e, r and s are the fiddly ones, so they come last, when your hand already knows the strokes.",
          "Check your slant, not your speed. Hold the page up and see whether all your letters lean the same way."
        ],
        activity: "🔍 Slant Check: Finish a line, then draw a straight pencil line down through the middle of each letter. If all your lines point the same way, your slant is even. If they fan out, slow down.",
        cursiveSheet: true,
        cursiveModes: ["fam-undercurve", "fam-overcurve", "fam-loops", "fam-ovals", "fam-tails", "fam-rest", "lower"],
        cursiveStart: "fam-loops"
      },
      4: {
        title: "Cursive: Capitals & Joining Up", emoji: "✒️",
        intro: "Capital letters, and the real trick of cursive: joining letters into whole words without lifting your pencil. Capitals are the show-offs of cursive, and unlike the small letters they do not have to join to what follows.",
        learn: [
          "A cursive capital starts a name or a sentence. It does not need to join to the letter after it, so you may lift your pencil once you have finished it.",
          "To join small letters, finish one letter's tail exactly where the next letter begins. The join IS a stroke, not a gap you draw across afterwards.",
          "Remember the four top-joiners: after o, v, w and b, the next letter starts high, not on the line.",
          "Keep your letters the same distance apart. Even spacing does more for neat handwriting than perfect letter shapes.",
          "Do not lift your pencil in the middle of a word. Lift it between words, and only there."
        ],
        activity: "✍️ Your Own Name: Write your first name in cursive ten times, slowly. It is the word you will write more than any other in your whole life, so it is worth getting comfortable.",
        cursiveSheet: true,
        cursiveModes: ["upper", "names", "words-easy", "words-mid"],
        cursiveStart: "upper"
      },
      5: {
        title: "Cursive: Smooth & Speedy", emoji: "✒️",
        intro: "You know the letters. Now the goal is writing that is quick AND still readable, which is the whole reason cursive exists: it is faster than printing because the pencil hardly ever leaves the page.",
        learn: [
          "Cursive is faster than print because you lift the pencil once per WORD instead of once per letter.",
          "Neatness at speed comes from three things only: even slant, even spacing, and letters that sit properly on the line. Not from pressing harder.",
          "If your writing goes messy when you speed up, you have gone past your current pace. Drop back a little and stay there for a week.",
          "Rest your hand. If your fingers ache you are gripping too tightly, and a tight grip is the main reason handwriting gets worse over a page, not lack of skill.",
          "Your signature is your own cursive. Once you can write your name smoothly, let it become a little bit yours."
        ],
        activity: "⏱️ One Minute Challenge: Copy the same sentence for one minute, then count the words. Try again tomorrow. Track it for a week and watch your own speed climb without your writing falling apart.",
        cursiveSheet: true,
        cursiveModes: ["words-mid", "words-hard", "sentence", "lower", "upper"],
        cursiveStart: "sentence"
      }
    };
    Object.keys(L).forEach(function (g) {
      if (LESSONS[g]) LESSONS[g].cursive = L[g];
    });
  }
})();
