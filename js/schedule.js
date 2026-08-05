// BrightSprouts Academy — Daily Schedule & Weekly Assessment.
// A homeschool/afterschool structure guide: a suggested daily time-block schedule per grade band
// (Elementary K-5, Middle 6-8, High 9-12), modeled on a typical US public school day's length and
// period rhythm (recess, lunch, ~6.5-7 instructional hours). Actual school days vary by state and
// district; this is a reference structure, not a claimed standard.
// The Weekly Assessment authors NO new quiz content: it calls the same makeSheet() function that
// already powers every "New Worksheet" button, so every question reuses real, already-verified
// lesson content instead of inventing new answers that would need separate fact-checking.

const SCHED_BANDS = [
  { key: "elem",   label: "Elementary", sub: "Kindergarten – Grade 5", grades: [0,1,2,3,4,5], emoji: "🧒" },
  { key: "middle", label: "Middle School", sub: "Grades 6 – 8", grades: [6,7,8], emoji: "🧑" },
  { key: "high",   label: "High School", sub: "Grades 9 – 12", grades: [9,10,11,12], emoji: "🎓" }
];

// Kindergarten: ~6 hrs, play-based blocks matching the Kindergarten subject set (js/app.js K_SUBJECTS).
const SCHED_ROWS_K = [
  { time: "8:00 – 8:20 AM",   title: "Morning Meeting & Calendar", routine: true },
  { time: "8:20 – 8:50 AM",   title: "Alphabet Time", keys: ["alphabet"] },
  { time: "8:50 – 9:15 AM",   title: "Letter Sounds (Phonics)", keys: ["phonics"] },
  { time: "9:15 – 9:45 AM",   title: "Counting & Numbers", keys: ["counting"] },
  { time: "9:45 – 10:05 AM",  title: "Recess", routine: true },
  { time: "10:05 – 10:35 AM", title: "Shapes & Patterns", keys: ["shapes"] },
  { time: "10:35 – 11:00 AM", title: "Explore: Animals or Food", keys: ["animals", "fruits"], note: "alternate days" },
  { time: "11:00 – 11:40 AM", title: "Lunch", routine: true },
  { time: "11:40 AM – 12:10 PM", title: "Pencil Practice (Tracing)", keys: ["tracing"] },
  { time: "12:10 – 12:40 PM", title: "Draw & Trace", keys: ["drawtrace"] },
  { time: "12:40 – 1:10 PM",  title: "Story Time", hub: 15 },
  { time: "1:10 – 1:40 PM",   title: "Toys & Things Exploration", keys: ["things"] },
  { time: "1:40 – 2:00 PM",   title: "Pack Up & Dismissal", routine: true }
];

// Grades 1-5: ~6.5 hrs, all core SUBJECTS keys exist for every grade in this band.
const SCHED_ROWS_ELEM = [
  { time: "8:00 – 8:15 AM",   title: "Morning Meeting", routine: true },
  { time: "8:15 – 8:45 AM",   title: "Phonics", keys: ["phonics"] },
  { time: "8:45 – 9:30 AM",   title: "Reading", keys: ["reading"] },
  { time: "9:30 – 10:15 AM",  title: "Math", keys: ["math"] },
  { time: "10:15 – 10:30 AM", title: "Recess", routine: true },
  { time: "10:30 – 11:00 AM", title: "Vocabulary", keys: ["vocabulary"] },
  { time: "11:00 – 11:30 AM", title: "Spelling", keys: ["spelling"] },
  { time: "11:30 AM – 12:10 PM", title: "Lunch", routine: true },
  { time: "12:10 – 12:50 PM", title: "Science & Social Studies", keys: ["science", "history"], note: "alternate days" },
  { time: "12:50 – 1:30 PM",  title: "Writing", keys: ["writing"] },
  { time: "1:30 – 2:00 PM",   title: "Art & Music", keys: ["art", "music"], note: "alternate days" },
  { time: "2:00 – 2:20 PM",   title: "English Enrichment & Independent Reading", keys: ["english", "books"], note: "alternate days" },
  { time: "2:20 – 2:30 PM",   title: "Pack Up & Dismissal", routine: true }
];

// Grades 6-8: ~7 hrs, period-based. Biology sits alongside Science from Grade 6 on.
const SCHED_ROWS_MIDDLE = [
  { time: "Period 1 • 8:00 – 8:50 AM",  title: "English / Reading", keys: ["reading"] },
  { time: "Period 2 • 8:50 – 9:40 AM",  title: "Math", keys: ["math"] },
  { time: "9:40 – 9:45 AM",                   title: "Passing Period", routine: true },
  { time: "Period 3 • 9:45 – 10:35 AM", title: "Science", keys: ["science", "biology"], note: "alternate days" },
  { time: "Period 4 • 10:35 – 11:25 AM", title: "Social Studies", keys: ["history"] },
  { time: "11:25 AM – 12:05 PM",              title: "Lunch", routine: true },
  { time: "Period 5 • 12:05 – 12:55 PM", title: "Elective: Art or Music", keys: ["art", "music"], note: "alternate days" },
  { time: "Period 6 • 12:55 – 1:45 PM",  title: "Writing & Spelling Workshop", keys: ["writing", "spelling"], note: "alternate days" },
  { time: "Period 7 • 1:45 – 2:35 PM",   title: "Vocabulary & Independent Reading", keys: ["vocabulary", "books"], note: "alternate days" },
  { time: "2:35 – 3:00 PM",                   title: "Advisory / Wrap-Up", routine: true }
];

// Grades 9-12: ~7 hrs, period-based. Science is one specific course per year, like a real US
// high school sequence (Biology 9th, Chemistry 10th, Physics 11th/12th) — see scienceTrackKey().
const SCHED_ROWS_HIGH = [
  { time: "Period 1 • 8:00 – 8:50 AM",  title: "English", keys: ["reading", "vocabulary"], note: "alternate days" },
  { time: "Period 2 • 8:50 – 9:40 AM",  title: "Math", keys: ["math"] },
  { time: "9:40 – 9:45 AM",                   title: "Passing Period", routine: true },
  { time: "Period 3 • 9:45 – 10:35 AM", title: "Science", role: "scienceTrack", note: "Biology → Chemistry → Physics, one per year" },
  { time: "Period 4 • 10:35 – 11:25 AM", title: "Social Studies", keys: ["history"] },
  { time: "11:25 AM – 12:05 PM",              title: "Lunch", routine: true },
  { time: "Period 5 • 12:05 – 12:55 PM", title: "Elective: Art or Music", keys: ["art", "music"], note: "alternate days" },
  { time: "Period 6 • 12:55 – 1:45 PM",  title: "Writing / Composition", keys: ["writing"] },
  { time: "Period 7 • 1:45 – 2:35 PM",   title: "English Enrichment / Study Hall", keys: ["english", "books"], note: "alternate days" },
  { time: "2:35 – 3:00 PM",                   title: "Wrap-Up", routine: true }
];

function scheduleRowsFor(g) {
  if (g === 0) return SCHED_ROWS_K;
  if (g >= 1 && g <= 5) return SCHED_ROWS_ELEM;
  if (g >= 6 && g <= 8) return SCHED_ROWS_MIDDLE;
  return SCHED_ROWS_HIGH;
}
function scienceTrackKey(g) { return g === 9 ? "biology" : g === 10 ? "chemistry" : "physics"; }

// Resolve a row's role keys against what this exact grade actually has, dropping anything missing
// so a schedule link can never point at content that doesn't exist for that grade.
function resolveRowKeys(g, row) {
  let keys = row.keys ? row.keys.slice() : row.role === "scienceTrack" ? [scienceTrackKey(g)] : [];
  return keys.filter((k) => LESSONS[g] && LESSONS[g][k]);
}

// Subjects excluded from the auto-built Weekly Assessment: hub hand-offs and drawing tools rather
// than quizzable lesson content.
const ASSESS_EXCLUDE = ["books", "create", "tracing", "drawtrace", "english"];
function assessableSubjects(g) {
  if (!LESSONS[g] || typeof subjectsFor !== "function") return [];
  return subjectsFor(g).filter((s) => {
    if (ASSESS_EXCLUDE.includes(s.key)) return false;
    const lesson = LESSONS[g][s.key];
    if (!lesson) return false;
    try { return makeSheet(g, s.key, lesson).length > 0; } catch (e) { return false; }
  });
}
// Groups of {key,label,emoji,items:[{q,a}]} — one group per assessable subject, ~3 questions each,
// pulled straight from that subject's own makeSheet() output.
function weeklyAssessment(g) {
  return assessableSubjects(g).map((s) => {
    const items = makeSheet(g, s.key, LESSONS[g][s.key]).slice(0, 3);
    return { key: s.key, label: s.label, emoji: s.emoji, items };
  }).filter((gr) => gr.items.length);
}
