// BrightSprouts Academy — The Study of the English Language, Grade 1 to 12.
// A structured journey from phonics to literary analysis and persuasion,
// built on the four domains: Reading, Writing, Speaking and Listening.

// Animated doodles for this category (reuse the sc-* animations; merged into the shared doodle set).
Object.assign(BOOK_DOODLES, {
  speech: `
<g class="sc-bob">
  <path d="M14 20 Q14 10 26 10 L62 10 Q74 10 74 20 L74 44 Q74 54 62 54 L36 54 L22 66 L26 54 Q14 54 14 44 Z" fill="#fff" stroke="#7c5cbf" stroke-width="2.5"/>
  <circle cx="30" cy="32" r="4" fill="#ff6b9d" class="sc-tw"/>
  <circle cx="44" cy="32" r="4" fill="#ffd166" class="sc-tw" style="animation-delay:.4s"/>
  <circle cx="58" cy="32" r="4" fill="#2ec4b6" class="sc-tw" style="animation-delay:.8s"/>
</g>
<g class="sc-float" style="animation-delay:.6s">
  <path d="M60 62 Q60 56 67 56 L76 56 Q83 56 83 62 L83 70 Q83 76 76 76 L72 76 L66 82 L68 76 Q60 76 60 70 Z" fill="#e8f7f5" stroke="#2ec4b6" stroke-width="2"/>
</g>`,
  ear: `
<g class="sc-bob">
  <path d="M34 26 Q34 8 50 8 Q66 8 66 26 Q66 38 56 46 Q50 51 50 60 Q50 70 40 70 Q31 70 31 60" fill="#ffd9c4" stroke="#c68a5e" stroke-width="2.5"/>
  <path d="M44 26 Q44 18 51 18 Q58 18 58 27 Q58 34 52 38" fill="none" stroke="#c68a5e" stroke-width="2.2"/>
</g>
<path d="M14 30 q6 8 0 16" stroke="#4d96ff" stroke-width="3" fill="none" stroke-linecap="round" class="sc-tw"/>
<path d="M6 24 q10 14 0 28" stroke="#4d96ff" stroke-width="3" fill="none" stroke-linecap="round" class="sc-tw" style="animation-delay:.5s"/>
<g class="sc-tw" style="animation-delay:1s"><path d="M76 22 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 z" fill="#ffd166"/></g>`,
  pencil: `
<g class="sc-sway" style="transform-origin:34px 64px">
  <rect x="40" y="8" width="14" height="42" rx="2" fill="#ffd166" stroke="#c9a227" stroke-width="2" transform="rotate(35 47 29)"/>
  <path d="M30 56 L42 64 L26 70 Z" fill="#ffd9c4" stroke="#c68a5e" stroke-width="2"/>
  <path d="M28 66 L30 68 L26 70 Z" fill="#2d2a4a"/>
  <rect x="58" y="0" width="14" height="8" rx="3" fill="#ff6b9d" stroke="#c2185b" stroke-width="1.6" transform="rotate(35 65 4)"/>
</g>
<path d="M12 78 q14 -8 28 0 q14 8 28 0 q10 -6 16 -2" stroke="#7c5cbf" stroke-width="2.6" fill="none" stroke-linecap="round" class="sc-wave"/>`,
  abc: `
<g class="sc-bob"><rect x="10" y="34" width="26" height="26" rx="4" fill="#ff6b9d" stroke="#c2185b" stroke-width="2"/>
  <text x="23" y="53" text-anchor="middle" font-family="Verdana" font-weight="bold" font-size="16" fill="#fff">A</text></g>
<g class="sc-bob" style="animation-delay:.3s"><rect x="42" y="26" width="26" height="26" rx="4" fill="#4d96ff" stroke="#2c5f9e" stroke-width="2"/>
  <text x="55" y="45" text-anchor="middle" font-family="Verdana" font-weight="bold" font-size="16" fill="#fff">B</text></g>
<g class="sc-bob" style="animation-delay:.6s"><rect x="30" y="60" width="26" height="26" rx="4" fill="#2ec4b6" stroke="#1a8a80" stroke-width="2"/>
  <text x="43" y="79" text-anchor="middle" font-family="Verdana" font-weight="bold" font-size="16" fill="#fff">C</text></g>
<g class="sc-tw"><path d="M74 40 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 z" fill="#ffd166"/></g>`
});

const ENG_PLAN = [
  { band: "Grades 1–2 · Sounds Become Words", doodle: "abc",
    reading: [
      "Hear the separate sounds inside words (c-a-t) — phonemic awareness comes before letters.",
      "Match letters to sounds and blend them: first short words, then teams like sh, ch, th.",
      "Learn the common sight words that don't play fair: the, said, was.",
      "Read simple sentences and picture books aloud — wobbles and all."
    ],
    writing: [
      "Form the letters, big and small, comfortably.",
      "Write sentences that start with a capital and end with a full stop.",
      "Move from invented spelling ('becoz') toward conventional spelling without losing the joy.",
      "Write two or three sentences that belong together — a first tiny story."
    ],
    speaking: [
      "Answer in complete sentences, not just single words.",
      "Retell a familiar story in the right order: beginning, middle, end.",
      "Show and tell: describe one object with three details."
    ],
    listening: [
      "Follow two-step spoken directions the first time they're given.",
      "Listen to a story and answer who, what and where.",
      "Hear rhymes and clap out syllables — listening for the shape of words."
    ],
    milestone: "Reads a simple picture book aloud, then writes and says two sentences about it." },
  { band: "Grades 3–5 · Fluent and Curious", doodle: "openbook",
    reading: [
      "Read aloud with expression — the voice goes up for questions, characters sound different.",
      "Find the main idea and the details that hold it up.",
      "Use context clues to work out new words instead of stopping dead.",
      "Finish chapter books, and compare two characters or two versions of a story."
    ],
    writing: [
      "Build the paragraph: topic sentence, supporting details, closing sentence.",
      "Write narratives with a real beginning, middle and end — and dialogue in quotation marks.",
      "Write a short factual report from more than one source.",
      "Revise on purpose: read it aloud, find one thing to improve, fix it."
    ],
    speaking: [
      "Give a short prepared talk to the class without reading every word.",
      "Take part in group discussions: build on what others said, disagree politely.",
      "Speak in paragraphs, not just sentences — first this, then that, finally."
    ],
    listening: [
      "Follow instructions of three or more steps.",
      "Identify a speaker's main point and one supporting reason.",
      "Take simple notes while listening — key words, not whole sentences."
    ],
    milestone: "Reads a chapter book, writes a structured paragraph about it, and presents it out loud." },
  { band: "Grades 6–8 · Reading Between the Lines", doodle: "magnifier",
    reading: [
      "Make inferences: what the author shows but doesn't say.",
      "Find the theme — the life idea underneath the plot.",
      "Notice point of view, and how the story would change from other eyes.",
      "Meet figurative language properly: metaphor, simile, personification, symbol.",
      "Read nonfiction strategically: headings, structure, claims and evidence."
    ],
    writing: [
      "Write essays with a thesis — one arguable sentence the whole piece proves.",
      "Support claims with quoted evidence, and explain how the evidence proves the point.",
      "Draft, then genuinely revise: strong verbs, varied sentences, cut the padding.",
      "Try different forms: narrative, explanatory, argument, poetry."
    ],
    speaking: [
      "Present with structure: hook, points, conclusion — and eye contact over reading aloud.",
      "Argue a position in informal debate, using evidence rather than volume.",
      "Adapt tone and words to the audience: friends, teachers, strangers."
    ],
    listening: [
      "Evaluate a speaker's claims: what's the evidence? what's missing?",
      "Summarise someone else's argument fairly before answering it.",
      "Notice bias and loaded language in what you hear, including advertisements."
    ],
    milestone: "Writes an evidence-based essay and defends its claim aloud for two minutes of questions." },
  { band: "Grades 9–12 · Analysis and Persuasion", doodle: "quill",
    reading: [
      "Analyse literature closely: symbolism, irony, unreliable narrators, what a text does and how.",
      "Read classic and world literature — texts talking to each other across centuries.",
      "Analyse rhetoric: how speeches, essays and media persuade (ethos, pathos, logos).",
      "Read criticism and disagreement about the same text, and form a position."
    ],
    writing: [
      "Write persuasive essays that concede the other side's best point — then answer it.",
      "Write literary analysis: claim, quotation, close reading, so-what.",
      "Master the personal essay: specific truth in your own voice.",
      "Write for the real world: applications, professional emails, research with citations."
    ],
    speaking: [
      "Deliver a prepared formal speech with rhetorical technique used on purpose.",
      "Debate with structure: case, rebuttal, summary — and grace in defeat.",
      "Handle interviews and presentations: the professional register."
    ],
    listening: [
      "Listen critically to speeches, podcasts and news: technique, evidence, agenda.",
      "Take usable notes from long-form talks and lectures.",
      "Hear the difference between a strong argument and a strong delivery."
    ],
    milestone: "Writes a full persuasive essay with counterargument and rebuttal — and delivers it as a speech." }
];

const ENG_DOMAINS = [["reading","📖 Reading"],["writing","✍️ Writing"],["speaking","🎤 Speaking"],["listening","👂 Listening"]];

LESSONS[18] = {
engplan: {
  title: "The English Language Plan, Grade 1 to 12", emoji: "🗺️",
  intro: "One structured journey from the first letter sounds to literary analysis and persuasive speech — built on the four domains that make a complete communicator: Reading, Writing, Speaking and Listening.",
  learn: [
    "Reading research identifies five pillars of learning to read: phonemic awareness, phonics, fluency, vocabulary and comprehension. The early bands below follow that order on purpose.",
    "The four domains feed each other: children write what they can say, and say what they have heard. A child behind in writing often just needs more talking and reading first.",
    "Keep reading aloud to your child long after they can read alone — comprehension of heard language runs years ahead of reading level, and read-alouds pull vocabulary upward.",
    "Every band's skills live in this site's grade lessons too: Reading, Vocabulary, Spelling and Writing tabs in Grades 1–12 are the practice ground for this plan.",
    "There is no falling behind, only starting where the child is. The bands describe a staircase, not a deadline."
  ],
  activity: "🍽️ The Dinner Table Domain Game: one meal, four domains. Someone retells their day (speaking), everyone asks one question about it (listening), find one new word from anyone's day (vocabulary/reading), and the youngest writes tomorrow's dinner plan (writing).",
  engPlan: true
},
engreading: {
  title: "Reading: From Sounds to Stories", emoji: "📖", engDoodle: "openbook",
  intro: "Reading starts in the ear, not the eye: a child who can hear that 'cat' is three sounds is ready to map letters onto them. From there the road runs through fluency and vocabulary all the way to reading between the lines.",
  learn: [
    "Words are built from syllables — beats you can clap. 'Apple' is two claps, 'banana' is three. Clapping words is real reading practice.",
    "Rhymes train the ear to hear word endings — that's why nursery rhymes matter. Cat, hat, bat: same ending sound, different first sound.",
    "Alphabetical order is a reader's tool for life: dictionaries, indexes, libraries. Compare first letters; if they match, compare the second.",
    "Some words break the rules and must be known by sight: one child, two children; one mouse, two mice; one sheep, two... sheep.",
    "The goal of all of it is comprehension: not saying the words, but seeing the picture the words make."
  ],
  activity: "👂 Sound Hunt: choose a sound — say, 'sh'. Find ten things during the day whose names contain it. Ears first, spelling second: 'ocean' counts!",
  engWork: "engreading"
},
engwriting: {
  title: "Writing: From Letters to Arguments", emoji: "✍️", engDoodle: "pencil",
  intro: "Writing is speech slowed down and made permanent. The mechanics — capitals, end marks, tenses — are the training wheels; the destination is a young writer who can argue a case on paper.",
  learn: [
    "Every sentence begins with a capital letter and ends with an end mark. The word 'I' is always a capital, wherever it stands.",
    "Three end marks, three jobs: a full stop for telling, a question mark for asking, an exclamation mark for strong feeling — used sparingly, like chilli.",
    "Verbs travel in time. Most add -ed for the past (jump → jumped), but the most common ones go their own way: go → went, eat → ate, think → thought.",
    "A paragraph is a team of sentences on one idea. An essay is a team of paragraphs proving one thesis. The structure scales all the way up.",
    "Persuasion has a shape: your claim, your reasons with evidence, the other side's best point — and your answer to it. Conceding well is a power move."
  ],
  activity: "📝 Family Complaints Department: everyone writes a short, extremely polite letter of complaint about something silly (the sock drawer, Monday, broccoli). Best structured argument wins dessert.",
  engWork: "engwriting"
},
engspeaking: {
  title: "Speaking: From Show-and-Tell to Speeches", emoji: "🎤", engDoodle: "speech",
  intro: "Speaking is the most-used language skill and the least practised one. The route runs from describing a favourite toy to delivering a persuasive speech — and every stage is practice for real life.",
  learn: [
    "Complete sentences are the first habit: not 'dog', but 'The dog is digging again.'",
    "Structure beats confidence. A talk with a beginning, middle and end feels confident even when the speaker isn't.",
    "Slow down. Nerves speed everyone up; a deliberate pause feels enormous to the speaker and completely natural to the listener.",
    "Eyes up: look at your audience, not your paper. Notes are for glancing, not reading.",
    "In debate, attack ideas and never people — the strongest speaker is the one who can state their opponent's view fairly before answering it."
  ],
  activity: "⏱️ The One-Minute Expert: draw a silly topic from a hat (spoons, clouds, left socks) and speak about it for a full minute — beginning, middle, end. Family votes on structure, not silliness.",
  engWork: "engspeaking"
},
englistening: {
  title: "Listening: The Hidden Skill", emoji: "👂", engDoodle: "ear",
  intro: "Listening looks passive but it's the engine of the other three domains — vocabulary, grammar and story-shape all arrive through the ear first. And critical listening is a life skill in a noisy world.",
  learn: [
    "Following spoken directions is memory training: hold the steps, then do them in order.",
    "Good listeners can replay: what was said first, second, last? Retelling is proof of listening.",
    "Listening for detail and listening for the main point are different skills — practise both.",
    "By the teenage years, listening turns critical: what is this speaker claiming? What's the evidence? What do they want from me?",
    "The fairness test, for life: can you repeat someone's point back so well that they say 'yes, exactly'? That's listening at full power."
  ],
  activity: "🎧 Story With Holes: read your child a short story, but change three details on the re-read (the dog becomes a cat...). They catch the changes. Then swap roles — you catch theirs.",
  engWork: "englistening"
}
};

// ---- Fact tables for the worksheet generators (each checked in the audit) ----
const ENG_SYLLABLES = [["cat",1],["dog",1],["sun",1],["book",1],["tree",1],
  ["apple",2],["water",2],["happy",2],["paper",2],["rabbit",2],["pencil",2],
  ["banana",3],["elephant",3],["butterfly",3],["computer",3],["umbrella",3],["dinosaur",3],["crocodile",3],
  ["television",4],["caterpillar",4],["watermelon",4]];
const ENG_RHYMES = [["cat",["hat","bat","mat"]],["dog",["log","frog","fog"]],["sun",["fun","run","bun"]],
  ["cake",["lake","snake","rake"]],["night",["light","kite","bright"]],["tree",["bee","sea","three"]],
  ["star",["car","far","jar"]],["mouse",["house","blouse"]],["king",["ring","sing","wing"]],["goat",["boat","coat","float"]]];
const ENG_PLURALS = [["child","children"],["mouse","mice"],["foot","feet"],["tooth","teeth"],["goose","geese"],
  ["man","men"],["woman","women"],["person","people"],["sheep","sheep"],["fish","fish"]];
const ENG_PAST = [["go","went"],["run","ran"],["eat","ate"],["see","saw"],["sing","sang"],["write","wrote"],
  ["think","thought"],["buy","bought"],["teach","taught"],["swim","swam"],["ride","rode"],["come","came"],
  ["jump","jumped"],["play","played"],["walk","walked"],["laugh","laughed"]];
const ENG_ENDMARK = [["What time is it","?"],["The cat is asleep","."],["Watch out","!"],["Where do you live","?"],
  ["I like pancakes","."],["That is amazing","!"],["Can you swim","?"],["We walked to school","."],
  ["How old are you","?"],["My shoes are wet","."],["Do birds sleep","?"],["That was the best day ever","!"]];
const ENG_FIXCAP = ["my dog loves the park","yesterday i saw a rainbow","we are going to the beach",
  "the library opens at nine","i think summer is the best season","our teacher plays the guitar",
  "on friday i lost my tooth","the moon looked huge last night"];
const ENG_WORDPOOL = ["apple","banana","cat","dog","elephant","fish","goat","hat","igloo","jam","kite","lion",
  "moon","nest","owl","pig","queen","rain","sun","tree","umbrella","violin","whale","yarn","zebra"];
const ENG_SEQS = [["red","blue","green","yellow"],["dog","cat","fish","bird"],["apple","pear","plum","grape"],
  ["run","hop","spin","clap"],["one","two","three","four"]];
const ENG_SPEAK_PROMPTS = [
  "Describe your favourite place using all five senses — one sentence per sense.",
  "Convince us in one minute: why your bedtime should be 30 minutes later. Claim, two reasons, finish strong.",
  "Retell the last film or story you loved — beginning, middle, end — in under two minutes.",
  "Teach us something you can do — tying laces, drawing a cat — in clear spoken steps.",
  "Argue FOR something you actually dislike, fairly, for 30 seconds. (This is harder and better than it sounds.)",
  "Interview a family member for three questions, then introduce them to the room like a talk-show host.",
  "Give a weather forecast for tomorrow — in your most professional presenter voice.",
  "Tell the story of your name: who chose it, what it means, whether it suits you."
];
const ENG_SPEAK_RUBRIC = "Listen for: a clear beginning-middle-end, complete sentences, a steady pace with pauses, and eyes up. Content answers will vary!";
