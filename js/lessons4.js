// BrightSprouts Academy — Spelling lessons, Grades 1-12
const SPELLING = {
1: {
  title: "Spelling Bee Basics: Short & Sweet Words", emoji: "🐝",
  intro: "Every spelling champion started with three-letter words! Sound them out slowly — each sound gets a letter.",
  learn: [
    "Stretch the word like bubble gum: c-a-t. Write one letter for each sound you hear.",
    "Short vowels sound quick: a as in cat, e as in bed, i as in pig, o as in top, u as in bug.",
    "Say it, spell it out loud, write it, check it — the champion's routine!",
    "Practice a little every day. Five words a day beats fifty on Friday."
  ],
  activity: "🍜 Alphabet Soup: Spell today's words using cereal letters, magnet letters, or letters cut from a cereal box!",
  spellWords: ["and","big","cat","dog","sun","hat","red","run","sit","top","mom","dad","bed","pig","six","wet","yes","box","bug","ten","map","jam"]
},
2: {
  title: "Teamwork Letters: sh, ch, th & Friends", emoji: "🤝",
  intro: "Some letters work in teams! S and H join up to say 'shhh'. Learn the teams and hundreds of words unlock.",
  learn: [
    "Letter teams (digraphs): sh (ship), ch (chin), th (that), wh (when), ck (duck).",
    "Vowel teams: ai says A (rain), ee says E (tree), oa says O (coat).",
    "The bossy silent E makes vowels say their name: hop → hope, cap → cape.",
    "When a word ends in a 'k' sound after a short vowel, it's usually ck: back, duck."
  ],
  activity: "🚢 Team Hunt: Race through a picture book — who can find the most 'sh' and 'ch' words in five minutes?",
  spellWords: ["ship","chin","when","that","back","jump","hand","lunch","wish","king","duck","rain","play","tree","week","coat","road","night","story","happy","funny","water"]
},
3: {
  title: "Tricky Everyday Words", emoji: "🗝️",
  intro: "These words appear everywhere — and lots of them refuse to follow the rules. Champions just memorize the rebels!",
  learn: [
    "Some words you can't sound out — you learn them by heart: because, friend, people.",
    "Trick for 'because': Big Elephants Can Always Understand Small Elephants!",
    "Break long words into chunks: to-geth-er, af-ter-noon.",
    "Write tricky words three times: look, cover, write, check."
  ],
  activity: "🎨 Rainbow Words: Write each tricky word once in three different colors — your brain remembers the picture!",
  spellWords: ["because","before","school","friend","again","always","thought","enough","people","little","mother","father","morning","afternoon","together","sometimes","birthday","outside","myself","really","until","pretty"]
},
4: {
  title: "Big Kid Words & Sneaky Silent Letters", emoji: "🕵️",
  intro: "Why does Wednesday hide a 'd'? Why does February sneak in an 'r'? Time to outsmart the sneakiest words in English.",
  learn: [
    "Say the hidden letters when you practice: Wed-NES-day, Feb-RU-ary — hear them, spell them.",
    "'ea' can say E (weather? no — beautiful!) — when unsure, picture the word in your mind.",
    "Compound-chunk long words: break-fast, neigh-bor, cal-en-dar.",
    "Memory tricks win: 'A friEND is there til the END.' Make your own for your hardest word!"
  ],
  activity: "📝 Silent Letter Detective: Find and list 5 more words with silent letters (hint: knee, lamb, ghost...). What letters hide in them?",
  spellWords: ["although","answer","beautiful","breakfast","business","calendar","complete","different","early","favorite","february","important","knowledge","library","minute","neighbor","question","sentence","surprise","through","weather","wednesday"]
},
5: {
  title: "The i-before-e Club & Other Rules", emoji: "📏",
  intro: "English has rules — and famous rule-breakers. Learn both and you'll spell words most adults get wrong!",
  learn: [
    "I before E (believe, achieve) — except after C (receive, ceiling), or when it says A (neighbor, weigh).",
    "Watch the double letters: necessary has one C, two S's — 'one collar, two socks!'",
    "'Separate' has A RAT in it: sep-A-RAT-e.",
    "Words ending in a consonant + y: change y to i before adding endings (carry → carried)."
  ],
  activity: "🏆 Family Spelling Bee: Each family member picks 5 words from this list to quiz the others. Winner picks dessert!",
  spellWords: ["achieve","ancient","argument","athlete","brilliant","ceiling","courage","curious","decision","describe","especially","exercise","familiar","government","interrupt","language","necessary","occasion","receive","separate","stomach","vegetable"]
},
6: {
  title: "Words Everyone Misspells", emoji: "⚠️",
  intro: "This list defeats grown-ups daily — definitely, embarrass, rhythm. Master it now and out-spell the adults forever.",
  learn: [
    "'Definitely' is FINITE with de- and -ly: de-FINITE-ly. Never 'definately'!",
    "'Embarrass': double R, double S — you go extra red, so double everything.",
    "'Rhythm Helps Your Two Hips Move' — the first letters spell RHYTHM.",
    "'Environment' hides IRON in the middle: envIRONment."
  ],
  activity: "🧠 Mnemonic Factory: Invent a silly memory sentence for your 3 hardest words. The sillier the sentence, the stronger the memory!",
  spellWords: ["absence","accurate","adventure","definitely","embarrass","environment","exaggerate","fascinating","immediately","independent","judgment","lightning","mischievous","occasionally","opportunity","privilege","recommend","rhythm","sincerely","temperature","committee","apparent"]
},
7: {
  title: "Power Words with Deep Roots", emoji: "🌳",
  intro: "These longer words look scary until you see their skeletons — prefixes, roots, and suffixes snapped together like blocks.",
  learn: [
    "Spell by chunks, not letters: ac-know-ledge, en-thu-si-asm.",
    "Double letters love these words: aggressive (gg, ss), accidentally (cc, ll).",
    "'-ance' vs '-ence': no perfect rule — but 'guarantee' your memory with word cards.",
    "When a word comes from another language (gymnasium — Greek!), its spelling keeps old habits."
  ],
  activity: "🃏 Speed Cards: Make flashcards for your 5 hardest words. Beat your own time spelling all 5 correctly two days in a row.",
  spellWords: ["acknowledge","accidentally","acquire","aggressive","amateur","apology","appreciate","artificial","boundary","campaign","category","competition","criticize","curiosity","desperate","dilemma","eligible","enthusiasm","essential","foreign","guarantee","gymnasium"]
},
8: {
  title: "The Heavyweights: Champion-Level Words", emoji: "🏋️",
  intro: "Accommodate. Conscientious. Catastrophe. These are the words spelling bees are won and lost on.",
  learn: [
    "'Accommodate' is generous — it accommodates two C's AND two M's.",
    "'Colonel' sounds like 'kernel' — English borrowed it from French and kept the weird spelling.",
    "Break monsters into rooms: ar-chi-tec-ture, cor-re-spond.",
    "Spell it backwards once — it forces your brain to see every letter."
  ],
  activity: "🎤 Bee Simulation: Family member reads a word, you spell it OUT LOUD with no paper — just like a real spelling bee stage.",
  spellWords: ["absurd","accommodate","allegiance","ambassador","analyze","anxiety","architecture","bankruptcy","bulletin","catastrophe","characteristic","colonel","conscientious","controversy","correspond","deceive","descendant","efficiency","emphasize","exhaust","grievance","hindrance"]
},
9: {
  title: "High School Essentials", emoji: "🎓",
  intro: "These words appear in essays, lab reports, and applications — spell them wrong and spellcheck won't always save you.",
  learn: [
    "'Bibliography' = biblio (book) + graphy (writing). Roots reveal spelling.",
    "'Camouflage' and 'connoisseur' came from French — their vowel clusters follow French habits.",
    "Watch '-cede/-ceed': almost everything is -cede (precede); only exceed, proceed, succeed take -ceed.",
    "Type your hard words with autocorrect OFF — real recall beats recognition."
  ],
  activity: "📄 Essay Sweep: Open any old essay or message you wrote. Hunt for 3 spelling slips and fix them like an editor.",
  spellWords: ["abbreviate","accessible","adequately","bibliography","boycott","camouflage","censorship","chronological","coincidence","commemorate","comparative","consensus","contemporary","credibility","deficient","dissatisfied","entrepreneur","exaggeration","fluorescent","forfeit","hypothesis","inevitable"]
},
10: {
  title: "Words That Fool Spellcheck", emoji: "🤖",
  intro: "Bureaucracy, liaison, maneuver — words so strange even computers hesitate. Own them and your writing looks fearless.",
  learn: [
    "'Bureaucracy': bureau (desk) + cracy (rule) — rule by desks. Chunk it: bu-reau-cra-cy.",
    "'Liaison' has three vowels holding hands: i-a-i.",
    "'Maneuver' — memorize the odd middle: MAN-EU-VER.",
    "'Cemetery' is all E's: cEmEtEry — 'she screamed E-E-E in the cemetery!'"
  ],
  activity: "🕵️ Menu & Sign Hunt: Misspellings are everywhere in the wild — menus, signs, ads. Photograph or note one this week and correct it.",
  spellWords: ["aberration","acquaintance","aesthetic","alleviate","ambiguous","anecdote","bureaucracy","calamity","camaraderie","cemetery","colloquial","condemn","discrepancy","embarrassment","exhilarate","fulfill","hierarchy","idiosyncrasy","indispensable","liaison","maintenance","maneuver","mediocre"]
},
11: {
  title: "The Exotic Collection", emoji: "🦚",
  intro: "Chrysanthemum. Kaleidoscope. Lieutenant. Words with history, drama, and letters where you least expect them.",
  learn: [
    "Greek gifts: chrysanthemum (chrys = gold), kaleidoscope (kalos = beautiful) — the 'weird' parts are Greek roots.",
    "'Lieutenant' = lieu (place) + tenant (holder) — a place-holder for the captain. Spell the French way.",
    "'Millennium': double L, double N — a thousand years deserves double letters.",
    "'Facetious' contains all five vowels IN ORDER: a-e-i-o-u!"
  ],
  activity: "📚 Word Origin Dive: Look up the origin story (etymology) of your 3 favorite words from this list — the story makes the spelling stick.",
  spellWords: ["acquiesce","atrocious","belligerent","boulevard","catastrophic","chagrin","charisma","chrysanthemum","dilettante","exacerbate","facetious","grotesque","innuendo","jeopardize","kaleidoscope","labyrinth","lieutenant","millennium","nauseous","pneumonia","silhouette","vengeance"]
},
12: {
  title: "Professional & Impossible Words", emoji: "💼",
  intro: "The final level: words from law, business, and literature — including some famously 'impossible' ones. After this list, nothing scares you.",
  learn: [
    "'Questionnaire' and 'millionaire': double N in questionnaire, one L in millionaire — professional documents demand precision.",
    "'Mnemonic' starts with a silent M — fittingly, a memory word you must memorize.",
    "'Onomatopoeia': o-no-ma-to-poe-ia — clap the six chunks.",
    "'Rendezvous' and 'entrepreneur' are French guests: spell them the French way, always."
  ],
  activity: "✉️ Real-World Test: Write a short formal email or cover-letter paragraph using 5 words from this list — spelled perfectly, no spellcheck allowed.",
  spellWords: ["acquittal","affidavit","annihilate","cacophony","chauffeur","clairvoyant","dichotomy","ellipsis","euphemism","hemorrhage","indict","juxtapose","memorandum","mnemonic","onomatopoeia","paraphernalia","pharaoh","questionnaire","renaissance","rendezvous","sacrilegious","surveillance"]
}
};
for (const g in SPELLING) LESSONS[g].spelling = SPELLING[g];
