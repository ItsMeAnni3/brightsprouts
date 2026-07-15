// BrightSprouts Academy — Writing lessons (Grades 1-12) + extra question banks
// The extra questions let every subject generate fresh, shuffled worksheets endlessly.

const WRITING = {
1: {
  title: "Sentences That Sparkle", emoji: "✏️",
  intro: "A sentence is a complete thought — like a tiny package with a beginning and an end. Let's build some beautiful ones!",
  learn: [
    "Every sentence starts with a CAPITAL letter.",
    "Every sentence ends with a period (.), question mark (?), or exclamation point (!).",
    "A sentence tells a complete thought: 'The dog runs.' — not just 'the dog'.",
    "Say your sentence out loud before you write it — your ears are great editors!"
  ],
  activity: "🖍️ Sentence Hunt: Find one sentence in your favorite book. Point to the capital letter at the start and the period at the end!",
  rubric: "Check for: a capital letter at the start, an end mark, and a complete thought.",
  prompts: [
    "Draw your favorite animal. Then write 2 sentences about it.",
    "Finish this sentence: I like to ____ because ____.",
    "Write a sentence about the weather today. Start with a capital letter!",
    "Finish this: My best friend is ____. We like to ____.",
    "Write 2 sentences about your favorite food.",
    "Make up a name for a pet dragon. Write a sentence about it.",
    "Write a thank-you sentence to someone who helped you this week.",
    "Write a sentence that asks a question. Don't forget the question mark!"
  ]
},
2: {
  title: "Super Sentences & Little Stories", emoji: "📝",
  intro: "Now that you can build sentences, let's stretch them, join them, and stack them into tiny stories with a beginning, middle, and end!",
  learn: [
    "Stretch a sentence by adding WHERE, WHEN, or HOW: 'The frog jumped' → 'The frog jumped into the cold pond at night.'",
    "Join two short sentences with 'and' or 'but': 'I like dogs, but cats make me sneeze.'",
    "A little story has 3 parts: beginning (who and where), middle (what happens), end (how it turns out).",
    "Read your writing out loud — if you run out of breath, you might need a period!"
  ],
  activity: "🎲 Stretch-a-Sentence: Someone says a tiny sentence ('The cat sat.'). Take turns adding one detail at a time until it's hilariously long!",
  rubric: "Check for: complete sentences, a joining word (and/but), and a beginning-middle-end.",
  prompts: [
    "Write a 3-sentence story about losing a tooth: beginning, middle, end.",
    "Describe your room using 3 describing words.",
    "Write about a rainy day using the words 'first', 'next', and 'last'.",
    "Write a short letter to a grandparent or someone you love.",
    "Invent a brand-new holiday. Write 3 sentences about how to celebrate it.",
    "Describe your dream treehouse. What's inside it?",
    "Write a 4-sentence story called 'The Day My Toy Came Alive'.",
    "Write directions for brushing your teeth in 3 steps."
  ]
},
3: {
  title: "Paragraph Power", emoji: "🧱",
  intro: "A paragraph is a team of sentences all working on the same idea. Learn the team positions and you can write about anything!",
  learn: [
    "The TOPIC SENTENCE goes first — it announces the big idea: 'Autumn is the best season of all.'",
    "Then come 3 DETAIL sentences that prove it: crunchy leaves, cozy sweaters, pumpkin everything.",
    "The CLOSING sentence wraps it up: 'That's why I count the days until fall!'",
    "Stay on topic — a sentence about your birthday doesn't belong in a paragraph about autumn."
  ],
  activity: "🍔 Paragraph Burger: Draw a burger — top bun (topic sentence), three fillings (details), bottom bun (closing). Write a paragraph to match!",
  rubric: "Check for: a topic sentence, at least 3 details that stay on topic, and a closing sentence.",
  prompts: [
    "Write a paragraph about the best season of the year.",
    "Write a paragraph about your hero and why you look up to them.",
    "If you had a superpower, what would it be? Write a paragraph.",
    "Describe your perfect Saturday in one paragraph.",
    "Write a paragraph a new kid could read to learn about your school.",
    "Invent something the world needs. Describe it in a paragraph.",
    "Write a paragraph about a food everyone should try at least once.",
    "Write a paragraph about a day in the life of your favorite animal."
  ]
},
4: {
  title: "Show, Don't Tell", emoji: "🎬",
  intro: "Weak writing TELLS: 'The dog was happy.' Strong writing SHOWS: 'The dog spun in circles, tail thumping the floor like a drum.' Feel the difference?",
  learn: [
    "Use the five senses: what does the scene look, sound, smell, taste, and feel like?",
    "Replace feeling words (happy, sad, scared) with actions that prove the feeling.",
    "Strong verbs beat weak ones: 'sprinted' paints a better picture than 'went fast'.",
    "Small details do big work: 'a backpack with one broken zipper' feels real."
  ],
  activity: "🕵️ Emotion Mystery: Write 3 sentences showing an emotion without naming it. Can your family guess the feeling from your clues?",
  rubric: "Check for: sensory details (at least 2 senses), action instead of feeling-words, and strong verbs.",
  prompts: [
    "Describe a beach using at least 3 of your five senses.",
    "Rewrite 'The dog was happy' by SHOWING it with actions.",
    "Describe an old house so it feels creepy — without using the words 'scary' or 'spooky'.",
    "Describe your favorite meal so the reader's mouth waters.",
    "Describe a thunderstorm using sound words.",
    "Show 'nervous before a big test' without saying 'nervous'.",
    "Describe a busy market or store using all five senses.",
    "Show 'the room was messy' with specific details instead of the word 'messy'."
  ]
},
5: {
  title: "Personal Narratives: Your Story Matters", emoji: "📖",
  intro: "You've lived stories no one else can tell. A personal narrative turns one of your real moments into writing that pulls readers in.",
  learn: [
    "Start with a HOOK — action, sound, or dialogue: '\"Jump!\" my cousin yelled from the dock.'",
    "Zoom in on ONE small moment. Ten minutes of your life, told well, beats a whole summer summarized.",
    "Use dialogue to make people come alive — new speaker, new line, quotation marks around spoken words.",
    "End with what the moment meant: what changed, or what you understood after."
  ],
  activity: "🎥 Memory Movie: Close your eyes and replay a favorite memory like a film. Jot every detail you 'see' — that's your narrative outline!",
  rubric: "Check for: a hook opening, one zoomed-in moment, at least one line of dialogue, and an ending that says what it meant.",
  prompts: [
    "Write about a time you tried something new. Start with a hook!",
    "Describe ten minutes of this morning like a movie scene.",
    "Write about a time you helped someone — include what you were thinking.",
    "Write a scene with dialogue between you and a talking animal.",
    "Write 'The Day Everything Went Wrong' — make the first line grab us.",
    "Write about a memory with a grandparent or older relative.",
    "Describe the scariest ride, game, or dare you ever tried.",
    "Write about a first day (new school, new team, new house)."
  ]
},
6: {
  title: "Persuasive Writing: Convince Me!", emoji: "📣",
  intro: "Persuasive writing is a friendly argument on paper: you state what you believe, back it with reasons, and win your reader over.",
  learn: [
    "Start with a clear CLAIM: 'Our school should start recycling in every classroom.'",
    "Give 3 REASONS, each backed by an example or fact — reasons are the muscles of your argument.",
    "Address the other side: 'Some say bins cost money, but...' — it makes YOU look fair and smart.",
    "End with a call to action: tell readers exactly what to do next."
  ],
  activity: "⚖️ Persuasion Duel: Pick a silly debate (pancakes vs. waffles). Each person gets 60 seconds to argue. Family votes for the most convincing!",
  rubric: "Check for: a clear claim, 3 reasons with examples, a nod to the other side, and a call to action.",
  prompts: [
    "Should students get to grade their teachers? Argue your side.",
    "What's the best pet? One paragraph: claim + 3 reasons.",
    "Convince your family you deserve a later bedtime.",
    "Should school run all year with more breaks? Persuade us.",
    "Persuade your town to build something new (skatepark, library, pool...).",
    "Should vending machines sell junk food at school? Take a side.",
    "Convince a friend to read your favorite book without spoiling it.",
    "Are video games good for kids? Argue with at least one fact."
  ]
},
7: {
  title: "Building the Five-Paragraph Essay", emoji: "🏗️",
  intro: "The five-paragraph essay is the blueprint behind most school writing: one idea, three proofs, one strong finish. Master the blueprint and every essay gets easier.",
  learn: [
    "The INTRO starts with a hook and ends with your THESIS — the one sentence your whole essay proves.",
    "Each BODY paragraph = one reason: topic sentence → evidence/example → explain how it proves your thesis.",
    "Use transitions to glue paragraphs together: 'furthermore', 'in addition', 'however', 'as a result'.",
    "The CONCLUSION restates the thesis in fresh words and answers 'so what?' — why it matters."
  ],
  activity: "🗂️ Essay Skeleton: Take any opinion you hold (best movie, best sport) and outline it: thesis + three topic sentences + closing line. Ten minutes, no full paragraphs!",
  rubric: "Check for: a clear thesis, topic sentences that each give one reason, evidence in every body paragraph, and transitions.",
  prompts: [
    "Outline a five-paragraph essay: 'Should phones be allowed in class?'",
    "Write three different thesis statements about school uniforms.",
    "Write just the INTRO (hook + thesis) for an essay on limiting homework.",
    "Write one body paragraph with evidence: 'Sports teach life skills.'",
    "Write just the CONCLUSION for an essay on social media age limits.",
    "Outline a compare-and-contrast essay on two seasons.",
    "Plan an essay: 'A person who changed history' — thesis + 3 reasons.",
    "Fix this weak thesis: 'Pollution is bad.' Make it specific and arguable."
  ]
},
8: {
  title: "Short Stories: Plot, Character & Conflict", emoji: "🎭",
  intro: "Every story you've ever loved runs on the same engine: a character who WANTS something, and trouble standing in the way. Time to build your own engine.",
  learn: [
    "Character = want + obstacle + flaw. A knight who wants glory but faints at blood? Now THAT's a story.",
    "The plot mountain: exposition → rising action → climax → falling action → resolution.",
    "Conflict is the fuel: character vs. character, vs. nature, vs. society, or vs. themselves.",
    "Write dialogue that does two jobs at once: reveals character AND moves the plot."
  ],
  activity: "🃏 Story Dice: Write 6 characters, 6 wants, and 6 obstacles on slips. Draw one of each and outline the story they create in 5 minutes!",
  rubric: "Check for: a character with a clear want, real conflict, a plot that rises to a climax, and purposeful dialogue.",
  prompts: [
    "Create a character sketch: name, greatest want, greatest fear, one secret.",
    "Write an opening scene where conflict appears in the first paragraph.",
    "Write a scene told ONLY in dialogue between two rivals.",
    "Draw and label a plot mountain for a heist story.",
    "Rewrite the ending of a famous fairy tale — change one choice.",
    "Write a setting paragraph that creates a mood (cozy, tense, or eerie).",
    "Write a twist ending for a story called 'The Locked Door'.",
    "Write a villain's monologue that makes us understand (not forgive!) them."
  ]
},
9: {
  title: "Argument Essays with Real Evidence", emoji: "⚖️",
  intro: "High-school arguments run on evidence, not volume. Learn to claim, prove, concede, and rebut — the four moves of every strong argument.",
  learn: [
    "A strong claim is specific and debatable: not 'social media is bad' but 'schools should teach social media literacy in 9th grade.'",
    "Evidence ranks: peer-reviewed studies > expert statements > statistics > anecdotes. Cite where it came from.",
    "Concede honestly ('Critics rightly note...'), then rebut ('However, the data shows...'). It builds trust.",
    "Watch for fallacies in your OWN writing: bandwagon, straw man, false dilemma — cut them before your reader finds them."
  ],
  activity: "🔍 Evidence Audit: Find one claim in an ad or post today. List what evidence it offers — then rank how strong that evidence really is.",
  rubric: "Check for: a specific debatable claim, cited evidence, a fair concession with rebuttal, and no logical fallacies.",
  prompts: [
    "Write a claim + two pieces of evidence + one counterargument on: 'Should AI tools be allowed for homework?'",
    "Write a rebuttal to: 'Homework should be banned completely.'",
    "Write one paragraph each using ethos, pathos, and logos for a seatbelt safety message.",
    "Outline an argument essay on later school start times, with evidence types you'd need.",
    "This claim has a fallacy — find and fix it: 'Everyone is buying this app, so it must be safe.'",
    "Write a hook and thesis for an essay on teens and social media.",
    "Argue for or against a minimum wage for student internships.",
    "Take a rule at your school and argue to change it — with evidence."
  ]
},
10: {
  title: "Analytical Writing: Proving What a Text Means", emoji: "🔬",
  intro: "Analysis is writing about writing: you make a claim about what a text does, quote your proof, and explain the connection. Claim, quote, explain — the analytical heartbeat.",
  learn: [
    "The TEA paragraph: Topic sentence (your claim) → Evidence (short quote) → Analysis (HOW the quote proves it). Analysis should be twice as long as the quote.",
    "Integrate quotes into your own sentence: The narrator calls the city 'indifferent,' suggesting... — never plop a quote alone.",
    "Analyze word choice: WHY 'trudged' instead of 'walked'? Authors choose on purpose; your job is to say what the choice does.",
    "Avoid summary. Summary says what happens; analysis says why it matters and how it works."
  ],
  activity: "🎧 Lyric Lab: Take one line from a favorite song and write a TEA paragraph about it. Yes, song lyrics count as text!",
  rubric: "Check for: an arguable claim about the text, an integrated quote, analysis that outweighs summary, and attention to word choice.",
  prompts: [
    "Analyze a metaphor from any song: quote it, then explain what it does.",
    "Write one paragraph that integrates a quotation smoothly into your own sentence.",
    "Compare how two ads persuade — what does each want you to feel, and how?",
    "Analyze the tone of a real news headline: which words create it?",
    "Write three topic sentences for an essay about a symbol in a book you know.",
    "Pick a paragraph from any book and explain how its word choice builds mood.",
    "Write a full TEA paragraph about a character's defining moment.",
    "Analyze one famous speech line — what technique makes it memorable?"
  ]
},
11: {
  title: "Voice & the Personal Essay", emoji: "🖋️",
  intro: "College essays and personal writing have one rule: sound like YOU, not like a committee's idea of impressive. Voice comes from specific truth, told plainly.",
  learn: [
    "Specific beats general: 'I collect broken watches' says more about you than 'I am a curious person.'",
    "Small topics, deep digging: a 300-word essay about your family's Sunday dumplings can reveal more than a mission trip summary.",
    "Cut clichés at the root: 'passion', 'journey', 'comfort zone' — replace each with the actual thing you mean.",
    "Revision is where voice appears: write hot, edit cold. Read aloud; anything you'd never SAY, rewrite."
  ],
  activity: "🎙️ Voice Test: Record yourself telling a story out loud, then transcribe 3 sentences of it. Compare with your written draft — which sounds more alive?",
  rubric: "Check for: specific concrete details, a small topic dug deep, no clichés, and sentences that sound like a real person.",
  prompts: [
    "Write 300 words about a moment that changed how you think.",
    "Write the opening line of your personal essay five different ways.",
    "Describe your bedroom so a stranger could guess three things about your character.",
    "Write about a failure — spend most of the words on what it taught you.",
    "Write about something you're obsessed with, using at least five specific details.",
    "Rewrite these clichés as real statements: 'I stepped out of my comfort zone.' 'It was a rollercoaster of emotions.'",
    "Complete and defend a personal metaphor: 'I am a ____.'",
    "Turn one line from your list of achievements into a humble, human story."
  ]
},
12: {
  title: "Research & Professional Writing", emoji: "💼",
  intro: "After graduation, writing gets real: research papers, cover letters, professional emails. Same skills, higher stakes — let's make them automatic.",
  learn: [
    "A research question drives the paper: narrow ('How did the 1936 Olympics shape propaganda?') beats broad ('Sports and politics').",
    "Cite as you draft — quote, paraphrase, or summarize, but always credit. Paraphrase means YOUR words and sentence structure, not synonyms swapped in.",
    "Professional emails: informative subject line, greeting, one-screen message, clear ask, sign-off. Proofread twice.",
    "Cover letters answer one question: 'Why are you right for THIS role?' Match your one or two best stories to their needs."
  ],
  activity: "📧 Inbox Makeover: Draft a professional email requesting something real (a reference, an interview, information). Have someone else read ONLY the subject line and guess the ask.",
  rubric: "Check for: a focused purpose, credited sources where used, professional tone, and zero typos.",
  prompts: [
    "Write a research question plus three types of sources you would need to answer it.",
    "Write an abstract of your last week in exactly 150 words.",
    "Write a cover letter paragraph for your dream job — match one real skill to their needs.",
    "Write a formal email to a professor requesting a meeting.",
    "Take any paragraph from a news article: quote one line, then paraphrase it properly with credit.",
    "Write an annotated bibliography entry for any book or article you know.",
    "Write a three-sentence professional summary of yourself for a job profile.",
    "Pitch an opinion article to a newspaper in one persuasive paragraph."
  ]
}
};
for (const g in WRITING) LESSONS[g].writing = WRITING[g];

// ---- Extra question banks: give every subject a bigger pool so worksheets reshuffle endlessly ----
const EXTRAS = {
1: {
  reading: [
    { q: "Find two words in the story that rhyme with 'hat'.", a: "cat, sat (also mat)" },
    { q: "Is the hat small or big?", a: "Big" }
  ],
  science: [
    { q: "Which sense would you use to enjoy a rainbow?", a: "Sight (eyes)" },
    { q: "Your skin tells you if bath water is too hot. Which sense is that?", a: "Touch" }
  ],
  history: [
    { q: "Name one thing kids today have that grandparents didn't have as kids.", a: "Examples: tablets, smartphones, video games" },
    { q: "Who is usually at the TOP of a family tree drawing?", a: "Grandparents (the oldest family members)" }
  ]
},
2: {
  reading: [
    { q: "How long did it take for the sprout to pop up?", a: "About a week" },
    { q: "Why do you think Grandma smiled all day?", a: "The flower was a kind gift from Mia" }
  ],
  science: [
    { q: "Which plant part is like a straw that carries water up?", a: "The stem" },
    { q: "What do flowers make so new plants can grow?", a: "Seeds" }
  ],
  history: [
    { q: "What did the Pony Express carry?", a: "Mail (letters)" },
    { q: "Name a tool a firefighter uses today that didn't exist long ago.", a: "Examples: fire truck, radio, smoke detector" }
  ]
},
3: {
  reading: [
    { q: "What country was Inky the octopus from?", a: "New Zealand" },
    { q: "Name one puzzle-like thing octopuses can do.", a: "Open jars / solve puzzles" }
  ],
  science: [
    { q: "Is honey a solid, liquid, or gas?", a: "A liquid (it flows and takes its container's shape)" },
    { q: "What happens to steam when it cools down?", a: "It condenses back into liquid water" }
  ],
  history: [
    { q: "What plant did Egyptians turn into paper?", a: "Papyrus" },
    { q: "Why did Egyptians make mummies?", a: "To preserve people so their spirits could live on" }
  ]
},
4: {
  reading: [
    { q: "What time of day did the hikers reach the summit?", a: "Just before noon" },
    { q: "What does 'their stomachs growled like bears' compare?", a: "Hungry stomach sounds to bear growls (a simile)" }
  ],
  science: [
    { q: "In the chain grass → rabbit → fox, what eats the rabbit?", a: "The fox" },
    { q: "Name one decomposer.", a: "Mushrooms, worms, or bacteria" }
  ],
  history: [
    { q: "In what year were the first Olympic Games held?", a: "776 BC" },
    { q: "Which city-state was famous for its warriors?", a: "Sparta" }
  ]
},
5: {
  reading: [
    { q: "How many times had Dev checked the window?", a: "Ten times in one hour" },
    { q: "Who was hiding behind the couch?", a: "His giggling cousins" }
  ],
  science: [
    { q: "What trick sentence helps you remember the planet order?", a: "'My Very Excited Mother Just Served Us Nachos'" },
    { q: "How long does the Moon take to orbit Earth?", a: "About a month" }
  ],
  history: [
    { q: "Name two goods explorers sailed to find.", a: "Spices, silk, gold" },
    { q: "What was often wrong with sailors' maps?", a: "They were incomplete or incorrect (half-empty)" }
  ]
},
6: {
  reading: [
    { q: "What instrument did Kira play to help Amara?", a: "The piano" },
    { q: "How did the choir director reward both girls?", a: "She created a duet just for the two of them" }
  ],
  science: [
    { q: "About how many cells make up your body?", a: "About 37 trillion" },
    { q: "What are the 'green solar panels' in plant cells called?", a: "Chloroplasts" }
  ],
  history: [
    { q: "What empire's fall began the Middle Ages in Europe?", a: "The Roman Empire" },
    { q: "At what age did knight training begin?", a: "Age 7 (as a page)" }
  ]
},
7: {
  reading: [
    { q: "What broke on the narrator's bike?", a: "The bike chain" },
    { q: "What was on the old man's porch?", a: "Tools and half-fixed radios" }
  ],
  science: [
    { q: "How fast can nerve signals travel?", a: "Up to 250 mph" },
    { q: "Which organ absorbs water near the end of digestion?", a: "The large intestine" }
  ],
  history: [
    { q: "How long did Michelangelo paint the Sistine Chapel ceiling?", a: "Four years (lying on his back)" },
    { q: "About when was the printing press invented, and by whom?", a: "Around 1440, by Gutenberg" }
  ]
},
8: {
  reading: [
    { q: "What percentage statistic does the speech jokingly cite?", a: "34% fewer complaints about pop quizzes" },
    { q: "What food does the speech call 'not a food group'?", a: "Vending machine snacks (neon cheese puffs)" }
  ],
  science: [
    { q: "Which law explains why you lurch forward when a car brakes?", a: "Newton's 1st Law — inertia" },
    { q: "What force pulls you toward Earth at 9.8 m/s²?", a: "Gravity" }
  ],
  history: [
    { q: "In what year was the Declaration of Independence signed?", a: "1776" },
    { q: "Name one way the Industrial Revolution changed where people worked.", a: "Work moved from farms to factories; cities grew rapidly" }
  ]
},
9: {
  reading: [
    { q: "Where did Maya move the plant, and why there?", a: "To the window — the only spot with direct light each day" },
    { q: "What did Maya tape beside the new leaf?", a: "A photo of her first city friend" }
  ],
  science: [
    { q: "How many genes do humans have, roughly?", a: "About 20,000" },
    { q: "In genetics, what does a capital letter like 'B' represent?", a: "A dominant allele" }
  ],
  history: [
    { q: "In which city was Archduke Franz Ferdinand assassinated?", a: "Sarajevo" },
    { q: "Which treaty ended WWI and punished Germany?", a: "The Treaty of Versailles (1919)" }
  ]
},
10: {
  reading: [
    { q: "What start time does the American Academy of Pediatrics recommend?", a: "No earlier than 8:30 a.m." },
    { q: "How many districts had already solved the bus problem?", a: "Forty districts in the state" }
  ],
  science: [
    { q: "Which group of elements barely reacts at all?", a: "Group 18 — the noble gases" },
    { q: "In H₂O, what type of bond holds the atoms together?", a: "Covalent (electrons are shared)" }
  ],
  history: [
    { q: "What happened on December 7, 1941?", a: "Japan attacked Pearl Harbor; the U.S. entered WWII" },
    { q: "What was D-Day, and when did it happen?", a: "The Allied invasion of Normandy, June 6, 1944" }
  ]
},
11: {
  reading: [
    { q: "Name two things the narrator 'borrowed' from Priya.", a: "Headphones, laptop, and once her car" },
    { q: "When does the new roommate arrive?", a: "Tuesday" }
  ],
  science: [
    { q: "What kind of energy does food contain?", a: "Chemical energy" },
    { q: "In a series circuit, what happens when one bulb burns out?", a: "All the bulbs go out — there's only one path" }
  ],
  history: [
    { q: "What wall divided a city from 1961 to 1989?", a: "The Berlin Wall" },
    { q: "Who refused to give up her bus seat in 1955, sparking a boycott?", a: "Rosa Parks (the Montgomery Bus Boycott)" }
  ]
},
12: {
  reading: [
    { q: "What language does Nana speak her proverbs in?", a: "Igbo" },
    { q: "What did Amara's notebook become 'a map of'?", a: "Everything that mattered (what would not translate)" }
  ],
  science: [
    { q: "Which sphere contains all living things?", a: "The biosphere" },
    { q: "Name the three steps of the water cycle.", a: "Evaporation, condensation, precipitation" }
  ],
  history: [
    { q: "Which branch of government interprets the laws?", a: "The judicial branch" },
    { q: "Give one habit that protects you from misinformation.", a: "Check sources / verify before sharing / read past the headline" }
  ]
}
};
for (const g in EXTRAS) for (const s in EXTRAS[g]) LESSONS[g][s].extraQuestions = EXTRAS[g][s];
