// BrightSprouts Academy — fold Computer Science, English, Books and Create into every Grade 1–12,
// each matched to that grade's level. Runs after all the source content is defined.
(function () {
  if (typeof LESSONS === "undefined") return;
  // Which grade sits in which progression band.
  function bandOf(g) {
    if (g <= 2) return { cs: "cs12",  books: "1-2",  eng: 0 };
    if (g <= 5) return { cs: "cs35",  books: "3-5",  eng: 1 };
    if (g <= 8) return { cs: "cs68",  books: "6-8",  eng: 2 };
    return         { cs: "cs912", books: "9-12", eng: 3 };
  }
  for (var g = 1; g <= 12; g++) {
    if (!LESSONS[g]) continue;
    var bd = bandOf(g);

    // Computer Science — the band lesson for this grade (it carries its own worksheet via csWork).

    // Create — the same creative tools, but only in the younger grades (1–6).
    // Creature Maker and Build It! are defined per grade in create-grades.js

    // Books — only the classics at this grade's reading level.
    LESSONS[g].books = {
      title: "Free Classic Books", emoji: "📚",
      intro: "Read wonderful classic stories online — hand-picked for your reading level, and free forever! Tap any book to start reading.",
      readOnline: true, booksBand: bd.books
    };

    // English — the English-language plan band for this grade.
    LESSONS[g].english = {
      title: "The English Language", emoji: "🗣️",
      intro: "A structured journey through English — reading, writing, speaking and listening — at just the right level for this grade. It grows alongside your Reading, Writing, Spelling and Vocabulary tabs.",
      engBand: bd.eng
    };
  }
})();
