// BrightSprouts Academy — Lesson data, Grades 1-6
// Math lessons use the auto worksheet generator in app.js (fresh problems every time!)
const LESSONS = {

1: {
  math: {
    title: "Counting & Adding to 20", emoji: "🔢",
    intro: "Numbers are everywhere — on cakes, clocks, and even your fingers! Today we practice counting and adding small numbers.",
    learn: [
      "Adding means putting groups together. 2 apples + 3 apples = 5 apples!",
      "You can count on your fingers, or draw dots and count them all.",
      "Start with the BIGGER number and count up. For 6 + 2, say: six... seven, eight!",
      "Zero means nothing at all. Any number plus 0 stays the same."
    ],
    activity: "🎲 Treasure Hunt: Find 5 spoons and 3 cups in your kitchen. Put them together and count the whole treasure pile!"
  },
  reading: {
    title: "Sounds & Sight Words", emoji: "📖",
    intro: "Every word is made of sounds, like a song made of notes. Let's learn to hear them and spot words we see all the time!",
    learn: [
      "Sound out words slowly: c-a-t makes 'cat'. Stretch it like bubble gum!",
      "Sight words are words we see so often we just KNOW them: the, and, was, said.",
      "Read from left to right, and point to each word with your finger.",
      "If you get stuck, look at the picture for a clue."
    ],
    passage: "Sam has a red hat. The hat is big. A cat sat on the hat! 'No, cat!' said Sam. The cat ran to the mat. Sam and the cat nap in the sun.",
    questions: [
      { q: "What color is Sam's hat?", a: "Red" },
      { q: "Who sat on the hat?", a: "The cat" },
      { q: "Where did the cat run?", a: "To the mat" },
      { q: "What do Sam and the cat do at the end?", a: "They nap in the sun" },
      { q: "Point to the word 'said' in the story. Can you find it?", a: "'No, cat!' said Sam." }
    ],
    activity: "🔤 Word Detective: Find the word 'the' three times on a cereal box or in your favorite book!"
  },
  vocabulary: {
    title: "My First Word Collection", emoji: "🦋",
    intro: "Collecting new words is like collecting butterflies — each one is beautiful and makes you smarter!",
    words: [
      ["happy", "feeling very good inside", "I am happy when we play outside."],
      ["giant", "very, very big", "The giant pumpkin won a prize."],
      ["tiny", "very, very small", "A tiny ant walked on my shoe."],
      ["brave", "not afraid to try", "The brave girl pet the big dog."],
      ["share", "to give some to others", "I share my crayons with my friend."],
      ["quiet", "making little or no sound", "Be quiet, the baby is sleeping."],
      ["helpful", "doing things for others", "The helpful boy carried the bag."],
      ["curious", "wanting to know more", "The curious puppy sniffed the box."]
    ],
    activity: "🎭 Act It Out: Have someone read each word while you act it like a game of charades!"
  },
  science: {
    title: "My Five Amazing Senses", emoji: "👀",
    intro: "Your body has five super-tools called senses. They help you explore the whole world!",
    learn: [
      "SEE with your eyes 👀 — colors, shapes, and light.",
      "HEAR with your ears 👂 — music, voices, and birds.",
      "SMELL with your nose 👃 — cookies, flowers, and rain.",
      "TASTE with your tongue 👅 — sweet, salty, sour, and bitter.",
      "TOUCH with your skin ✋ — soft, rough, hot, and cold."
    ],
    questions: [
      { q: "Which sense do you use to enjoy music?", a: "Hearing (ears)" },
      { q: "Which body part helps you smell fresh bread?", a: "Your nose" },
      { q: "Name two things that feel soft.", a: "Examples: a kitten, a pillow, a blanket" },
      { q: "Which sense tells you a lemon is sour?", a: "Taste (tongue)" },
      { q: "How many senses do you have in all?", a: "Five" }
    ],
    activity: "🕵️ Mystery Bag: Ask a grown-up to hide 3 objects in a bag. Close your eyes and guess them using only touch!"
  },
  history: {
    title: "My Family's Story", emoji: "🏠",
    intro: "History isn't just about kings and castles — YOUR family has a history too, full of stories waiting to be discovered!",
    learn: [
      "History means true stories about the past — things that already happened.",
      "Your grandparents were once kids! They played different games and watched different shows.",
      "A family tree shows how everyone in a family is connected, like branches.",
      "Old photos, letters, and recipes are 'artifacts' — treasures that tell stories."
    ],
    questions: [
      { q: "What does 'history' mean?", a: "True stories about the past" },
      { q: "What does a family tree show?", a: "How family members are connected" },
      { q: "Name one 'artifact' a family might keep.", a: "Examples: old photos, letters, a recipe, a toy" },
      { q: "Were your grandparents ever children?", a: "Yes! Everyone was a child once." },
      { q: "Ask a grown-up: what game did they love as a kid?", a: "Answers will vary — that's family history!" }
    ],
    activity: "🌳 Draw your family tree with you at the bottom and grandparents at the top. Add a fun fact about each person!"
  }
},

2: {
  math: {
    title: "Adding & Subtracting to 100", emoji: "➕",
    intro: "Big numbers are just small numbers wearing costumes! Tens and ones make two-digit numbers easy.",
    learn: [
      "Numbers like 47 have TENS (4 tens = 40) and ONES (7 ones).",
      "To add 32 + 25: add the tens (30+20=50), add the ones (2+5=7), then join them: 57!",
      "Subtracting means taking away. 48 − 6 means start at 48 and hop back 6.",
      "Check subtraction by adding back: if 48 − 6 = 42, then 42 + 6 should be 48. It is!"
    ],
    activity: "🪙 Coin Counter: Grab a handful of coins. Make groups of ten cents, then count tens and ones to find your total!"
  },
  reading: {
    title: "Story Order: First, Next, Last", emoji: "🎬",
    intro: "Stories are like train rides — they go in order! Knowing what happens first, next, and last makes you a super reader.",
    learn: [
      "Every story has a beginning, a middle, and an end.",
      "Clue words help: first, then, next, after that, finally.",
      "If you mix up the order, the story stops making sense — you can't eat the cake before you bake it!",
      "After reading, try retelling the story in your own words, in order."
    ],
    passage: "First, Mia planted a seed in a cup of dirt. Next, she watered it every morning and set it by the sunny window. After a week, a green sprout popped up! Then it grew taller and taller. Finally, a yellow flower bloomed. Mia gave the flower to her grandma, who smiled all day.",
    questions: [
      { q: "What did Mia do FIRST?", a: "She planted a seed in a cup of dirt" },
      { q: "What two things did the seed need to grow?", a: "Water and sunlight" },
      { q: "What popped up after a week?", a: "A green sprout" },
      { q: "What happened LAST in the story?", a: "Mia gave the flower to her grandma" },
      { q: "Which clue words show order? Name two.", a: "First, next, then, after, finally" }
    ],
    activity: "🥪 Sandwich Steps: Tell someone how to make a sandwich using 'first, next, then, finally' — don't skip a step!"
  },
  vocabulary: {
    title: "Wonderful Describing Words", emoji: "🌈",
    intro: "Describing words (adjectives) paint pictures in your mind. A 'dog' is fine, but a 'fluffy, speedy dog' is way more fun!",
    words: [
      ["enormous", "extremely big", "An enormous whale swam by the boat."],
      ["gentle", "soft and kind", "Be gentle when you hold the baby chick."],
      ["shiny", "bright and reflecting light", "She found a shiny penny on the path."],
      ["grumpy", "in a bad mood", "The grumpy troll would not share the bridge."],
      ["speedy", "very fast", "The speedy rabbit won the morning race."],
      ["cozy", "warm and comfortable", "We read books in the cozy blanket fort."],
      ["clever", "smart and quick-thinking", "The clever fox found a way across the river."],
      ["sparkling", "shining with flashes of light", "The sparkling stream flowed over the rocks."]
    ],
    activity: "🖍️ Silly Sentences: Pick 3 words from the list and use them all in ONE silly sentence. Draw a picture of it!"
  },
  science: {
    title: "Plants & Their Life Cycle", emoji: "🌱",
    intro: "A giant oak tree starts as a tiny acorn. How? Plants have a life cycle — a circle of growing that never stops!",
    learn: [
      "The cycle: seed → sprout (seedling) → young plant → flower → new seeds!",
      "Plants need 4 things: sunlight, water, air, and soil (with nutrients).",
      "Roots drink water underground. The stem is like a straw carrying it up. Leaves catch sunlight to make food.",
      "Flowers make seeds, and bees help by carrying pollen from flower to flower."
    ],
    questions: [
      { q: "What are the 4 things plants need?", a: "Sunlight, water, air, and soil" },
      { q: "What part of the plant drinks water from the ground?", a: "The roots" },
      { q: "What do leaves use to make food?", a: "Sunlight" },
      { q: "What comes right after a seed in the life cycle?", a: "A sprout (seedling)" },
      { q: "How do bees help plants?", a: "They carry pollen from flower to flower" }
    ],
    activity: "🫘 Bean in a Bag: Put a damp paper towel and a dry bean in a clear bag. Tape it to a window and watch it sprout this week!"
  },
  history: {
    title: "Community Helpers, Then & Now", emoji: "🚒",
    intro: "Long ago, firefighters raced to fires in horse-drawn wagons! Communities have always had helpers — but their tools sure have changed.",
    learn: [
      "A community is a place where people live, work, and help each other.",
      "Helpers include firefighters, doctors, teachers, farmers, and mail carriers.",
      "Long ago: letters traveled by horse, doctors visited homes by buggy, and schools had just one room!",
      "Comparing 'then and now' is how historians think."
    ],
    questions: [
      { q: "Name three community helpers.", a: "Examples: firefighter, doctor, teacher, farmer, mail carrier, police officer" },
      { q: "How did mail travel long ago?", a: "By horse (like the Pony Express)" },
      { q: "What was different about schools long ago?", a: "Many had only one room for all ages" },
      { q: "What do historians love to compare?", a: "Then and now — the past and the present" },
      { q: "Which helper would you like to be, and why?", a: "Answers will vary" }
    ],
    activity: "📬 Thank a Helper: Draw a thank-you card for a community helper you know, and deliver it with a grown-up!"
  }
},

3: {
  math: {
    title: "Multiplication Magic", emoji: "✖️",
    intro: "Multiplication is a shortcut for adding the same number again and again. 4 bags with 3 candies each? That's 4 × 3 = 12 candies — no counting one-by-one!",
    learn: [
      "3 × 4 means '3 groups of 4' — draw 3 circles with 4 dots inside each.",
      "Order doesn't matter: 3 × 4 = 4 × 3. That cuts your memorizing in half!",
      "Tricks: ×2 is doubling, ×5 ends in 0 or 5, ×10 just adds a zero.",
      "For 9s, use your fingers: for 9 × 4, bend your 4th finger — 3 fingers left, 6 right = 36!"
    ],
    activity: "🥚 Array Hunt: Find arrays around the house — egg cartons (2×6), muffin tins, window panes. Write the multiplication for each!"
  },
  reading: {
    title: "Finding the Main Idea", emoji: "🎯",
    intro: "Every story or article has one BIG idea, like the top of an umbrella. The small details hang underneath it!",
    learn: [
      "The main idea answers: 'What is this MOSTLY about?'",
      "Details are small facts that support the main idea, like table legs holding up a table.",
      "The title and first sentence often give big clues.",
      "Test yourself: can you say what you read in ONE sentence?"
    ],
    passage: "Octopuses might be the ocean's greatest escape artists. They can squeeze their soft bodies through cracks as small as a coin. Some have slipped out of aquarium tanks, slid across the floor, and plopped into drains that lead to the sea! One octopus in New Zealand, named Inky, became famous for escaping exactly that way. Scientists say octopuses are also clever enough to open jars and solve puzzles.",
    questions: [
      { q: "What is this passage MOSTLY about?", a: "Octopuses are amazing escape artists (and very clever)" },
      { q: "Name one detail that supports the main idea.", a: "Examples: they squeeze through coin-sized cracks; Inky escaped through a drain; they open jars" },
      { q: "Who was Inky?", a: "A famous octopus in New Zealand that escaped its tank" },
      { q: "Why can octopuses fit through tiny cracks?", a: "Their bodies are soft" },
      { q: "Which sentence states the main idea?", a: "The first sentence" }
    ],
    activity: "📰 One-Line News: After dinner, tell your family about your day in exactly ONE sentence — that's your day's main idea!"
  },
  vocabulary: {
    title: "Powerful Verbs & Word Families", emoji: "⚡",
    intro: "Verbs are action words — the engines of every sentence! Strong verbs make writing zoom, sparkle, and pounce.",
    words: [
      ["whisper", "to speak very softly", "She whispered the secret to her friend."],
      ["gobble", "to eat fast and greedily", "The turkey gobbled the corn in seconds."],
      ["stumble", "to trip while walking", "He stumbled over the sleeping cat."],
      ["soar", "to fly high in the sky", "Eagles soar above the mountains."],
      ["examine", "to look at very closely", "The doctor examined the X-ray carefully."],
      ["gather", "to collect into one place", "We gathered sticks for the campfire."],
      ["protect", "to keep safe", "Helmets protect your head when you bike."],
      ["invent", "to create something new", "Who invented the ice cream cone?"],
      ["announce", "to tell everyone officially", "The principal announced a snow day!"],
      ["explore", "to travel and discover", "We explored the trail behind the park."]
    ],
    activity: "🎬 Verb Charades: Act out 'soar', 'stumble', and 'gobble' — can your family guess each verb?"
  },
  science: {
    title: "Solids, Liquids & Gases", emoji: "🧊",
    intro: "Everything around you — juice, air, your shoes — is made of matter. Matter comes in three main forms, and it can transform like magic!",
    learn: [
      "SOLIDS keep their shape: ice, rocks, pencils.",
      "LIQUIDS flow and take the shape of their container: water, milk, honey.",
      "GASES spread out to fill any space: air, steam, the helium in balloons.",
      "Heat changes matter! Ice (solid) melts to water (liquid), and boiling water becomes steam (gas). Cooling reverses it."
    ],
    questions: [
      { q: "What are the three main states of matter?", a: "Solid, liquid, and gas" },
      { q: "Which state takes the shape of its container but keeps the same amount?", a: "Liquid" },
      { q: "What happens to ice when you heat it?", a: "It melts into liquid water" },
      { q: "What is steam?", a: "Water in its gas form" },
      { q: "Is the air in a balloon a solid, liquid, or gas?", a: "A gas" }
    ],
    activity: "🧪 Ice Race: Put one ice cube on a plate in the sun and one in the shade. Predict which melts first, then time it!"
  },
  history: {
    title: "Ancient Egypt: Pyramids & Pharaohs", emoji: "🐫",
    intro: "Travel back 4,500 years to a land of golden sand, mighty rivers, and kings called pharaohs who built mountains out of stone!",
    learn: [
      "Ancient Egypt grew along the Nile River, which flooded each year and made the soil perfect for farming.",
      "Pharaohs were kings and queens. The Great Pyramid was built for Pharaoh Khufu from over 2 million stone blocks!",
      "Egyptians wrote with picture-symbols called hieroglyphics on paper made from papyrus plants.",
      "They preserved important people as mummies so their spirits could live on."
    ],
    questions: [
      { q: "Which river was the heart of Ancient Egypt?", a: "The Nile River" },
      { q: "What was an Egyptian king called?", a: "A pharaoh" },
      { q: "What are hieroglyphics?", a: "Egyptian writing made of picture-symbols" },
      { q: "Why was the Nile's yearly flood a good thing?", a: "It made the soil rich for farming" },
      { q: "About how many blocks built the Great Pyramid?", a: "Over 2 million" }
    ],
    activity: "𓀀 Secret Symbols: Invent your own hieroglyphic alphabet and write your name in it. Can your family decode it?"
  }
},

4: {
  math: {
    title: "Division & Fraction Friends", emoji: "🍕",
    intro: "Division is fair sharing, and fractions are pieces of a whole. Master both and you'll never argue over pizza again!",
    learn: [
      "20 ÷ 4 asks: 'If 20 cookies are shared by 4 friends, how many does each get?' Answer: 5.",
      "Division undoes multiplication: since 4 × 5 = 20, we know 20 ÷ 4 = 5.",
      "A fraction like 3/4 means 3 pieces out of 4 equal pieces. Bottom number (denominator) = total pieces; top (numerator) = pieces you have.",
      "Bigger denominator = smaller pieces! 1/8 of a pizza is smaller than 1/4."
    ],
    activity: "🍕 Fraction Feast: At your next meal, cut something (toast, quesadilla) into 4 equal parts. Eat one part — say what fraction is left!"
  },
  reading: {
    title: "Context Clues: Word Detective", emoji: "🔍",
    intro: "Stuck on a hard word? Don't panic — the sentences around it are dropping clues like breadcrumbs. Follow them!",
    learn: [
      "Context clues are hints in nearby words that reveal a word's meaning.",
      "Definition clue: 'The canine, or dog, barked.' The meaning is right there!",
      "Example clue: 'Reptiles, such as snakes and lizards...' — examples show the meaning.",
      "Contrast clue: 'Unlike his messy sister, Ben was tidy.' Opposites reveal meaning too."
    ],
    passage: "The hikers reached the summit, the very top of the mountain, just before noon. They were famished — they hadn't eaten since dawn, and their stomachs growled like bears. Luca opened his pack and distributed the sandwiches, handing one to each hiker. From that height, the village below looked minuscule, tinier than a toy town.",
    questions: [
      { q: "What does 'summit' mean? What clue told you?", a: "The very top of a mountain; the definition follows the comma" },
      { q: "What does 'famished' mean?", a: "Extremely hungry — clue: they hadn't eaten since dawn, stomachs growled" },
      { q: "What does 'distributed' mean?", a: "Handed out / gave to each person" },
      { q: "What does 'minuscule' mean?", a: "Very tiny — clue: 'tinier than a toy town'" },
      { q: "Which type of clue explains 'summit' — definition, example, or contrast?", a: "Definition clue" }
    ],
    activity: "🕵️ Clue Hunt: Find one unfamiliar word in any book tonight. Write your guess from context, then check a dictionary. Were you close?"
  },
  vocabulary: {
    title: "Prefixes & Suffixes: Word Building Blocks", emoji: "🧱",
    intro: "Words snap together like building blocks! Learn a few prefixes and suffixes and you can unlock hundreds of new words.",
    words: [
      ["unhappy", "not happy (un- = not)", "He was unhappy about the rainy game day."],
      ["redo", "to do again (re- = again)", "The teacher let her redo the messy page."],
      ["preview", "to view before (pre- = before)", "We watched a preview of the new movie."],
      ["misplace", "to put in the wrong spot (mis- = wrongly)", "I always misplace my left shoe."],
      ["careless", "without care (-less = without)", "The careless painter splattered the floor."],
      ["fearless", "without fear", "The fearless kitten chased the huge dog."],
      ["teacher", "one who teaches (-er = one who)", "Our teacher plays guitar on Fridays."],
      ["colorful", "full of color (-ful = full of)", "A colorful parrot landed on the fence."],
      ["disagree", "to not agree (dis- = not/opposite)", "The twins disagree about which movie is best."],
      ["kindness", "the quality of being kind (-ness)", "Her kindness made the new student smile."]
    ],
    activity: "🏗️ Word Factory: How many real words can you build in 5 minutes using un-, re-, -less, and -ful? Race a family member!"
  },
  science: {
    title: "Ecosystems & Food Chains", emoji: "🦉",
    intro: "In nature, everything is connected — every leaf, bug, and owl plays a part in one giant web of life.",
    learn: [
      "An ecosystem is a community of living things plus their home (forest, pond, desert).",
      "A food chain shows who eats whom: grass → grasshopper → frog → hawk.",
      "Producers (plants) make their own food from sunlight. Consumers (animals) must eat. Decomposers (mushrooms, worms) recycle dead things into soil.",
      "Remove one link and the whole chain feels it — that's why every creature matters!"
    ],
    questions: [
      { q: "What is an ecosystem?", a: "A community of living things and their environment" },
      { q: "In the chain grass → rabbit → fox, which is the producer?", a: "Grass" },
      { q: "What job do decomposers do?", a: "They break down dead things and recycle them into soil" },
      { q: "Why can't animals be producers?", a: "They can't make food from sunlight — they must eat" },
      { q: "What might happen if all frogs vanished from a pond?", a: "Insects they ate would multiply; animals that eat frogs would go hungry" }
    ],
    activity: "🍂 Backyard Safari: Spend 10 minutes outside and list every living thing you spot. Try to link three of them in a food chain!"
  },
  history: {
    title: "Ancient Greece: Olympics & Big Ideas", emoji: "🏛️",
    intro: "Ancient Greece gave us the Olympics, theaters, and the idea that people should vote — pretty impressive for 2,500 years ago!",
    learn: [
      "Greece was made of city-states like Athens (lovers of learning) and Sparta (mighty warriors).",
      "Athens invented democracy — rule by the people — where citizens voted on laws.",
      "The first Olympic Games (776 BC) honored the god Zeus, with running, wrestling, and chariot races.",
      "Greek thinkers like Socrates and Aristotle asked big questions we still discuss today. Greek myths told of gods like Zeus, Athena, and Poseidon."
    ],
    questions: [
      { q: "What is a democracy?", a: "Rule by the people — citizens vote on laws and leaders" },
      { q: "Which two famous city-states were very different?", a: "Athens (learning) and Sparta (warriors)" },
      { q: "Why were the first Olympics held?", a: "To honor the god Zeus" },
      { q: "Name a famous Greek thinker.", a: "Socrates, Plato, or Aristotle" },
      { q: "What was Athena the goddess of?", a: "Wisdom (and war strategy)" }
    ],
    activity: "🏅 Family Olympics: Hold three silly events (sock toss, one-foot hop, spoon-and-egg walk). Make paper-plate medals for the winners!"
  }
},

5: {
  math: {
    title: "Fractions & Decimals Unite", emoji: "🎯",
    intro: "Fractions and decimals are two costumes for the same number: 1/2 and 0.5 are twins! Let's learn to work with both.",
    learn: [
      "To add fractions with the same denominator, add the tops: 2/8 + 3/8 = 5/8.",
      "Equivalent fractions look different but are equal: 1/2 = 2/4 = 4/8. Multiply top and bottom by the same number.",
      "Decimals use place value: 0.7 is 7 tenths, 0.25 is 25 hundredths.",
      "Money is decimals in disguise! $3.75 = 3 dollars + 75 hundredths of a dollar."
    ],
    activity: "🛒 Grocery Math: On your next shopping trip, add the prices of 3 items in your head, then check against the receipt!"
  },
  reading: {
    title: "Making Inferences: Read Between the Lines", emoji: "🧩",
    intro: "Great readers are like detectives — authors don't tell you everything, they leave clues and trust YOU to figure the rest out.",
    learn: [
      "An inference = clues from the text + what you already know.",
      "If a character slams a door and won't talk, the author doesn't need to say 'she was angry' — you infer it!",
      "Look for clues in actions, dialogue, and descriptions.",
      "Always ask: 'What is the author showing me without saying it?'"
    ],
    passage: "Dev pressed his nose against the window for the tenth time that hour. The driveway was still empty. He checked that the banner was straight, rearranged the balloons again, and shushed his giggling cousins behind the couch. When headlights finally swept across the wall, his heart did a somersault. 'Places, everyone!' he whispered, and clicked off the lights.",
    questions: [
      { q: "What event is about to happen? What clues tell you?", a: "A surprise party — banner, balloons, people hiding, lights off" },
      { q: "Who is the party probably for?", a: "Whoever is arriving in the car (someone Dev is excited to surprise)" },
      { q: "How does Dev feel? Which words show it?", a: "Excited/nervous — checking the window ten times, heart 'did a somersault'" },
      { q: "Why does Dev turn off the lights?", a: "So the arriving person won't suspect the surprise" },
      { q: "What do you predict happens next?", a: "The person walks in and everyone yells 'Surprise!'" }
    ],
    activity: "🎭 Emotion Charades: Act out an emotion using only actions (no words or faces named). Family members must INFER your feeling from clues!"
  },
  vocabulary: {
    title: "Synonyms, Antonyms & Shades of Meaning", emoji: "🎨",
    intro: "Why say 'good' when you could say 'superb'? Words have flavors — learn to pick the perfect one.",
    words: [
      ["ancient", "extremely old (synonym: antique; antonym: modern)", "The ancient map showed a forgotten island."],
      ["rapid", "very fast (synonym: swift; antonym: sluggish)", "The rapid current carried the raft downstream."],
      ["fragile", "easily broken (synonym: delicate; antonym: sturdy)", "Pack the fragile ornaments in bubble wrap."],
      ["generous", "happy to give (synonym: giving; antonym: selfish)", "A generous neighbor shared her garden tomatoes."],
      ["furious", "extremely angry (stronger than 'mad')", "The coach was furious about the unfair call."],
      ["exhausted", "extremely tired (stronger than 'sleepy')", "After the marathon, she was completely exhausted."],
      ["gigantic", "huge (stronger than 'big')", "A gigantic wave crashed over the pier."],
      ["thrilled", "extremely happy (stronger than 'glad')", "He was thrilled to see his name on the winners list."],
      ["reluctant", "not wanting to do something (antonym: eager)", "The reluctant swimmer dipped one toe in the pool."],
      ["visible", "able to be seen (antonym: hidden)", "The lighthouse was visible from miles away."]
    ],
    activity: "🌡️ Word Thermometer: Order these from weakest to strongest: warm, hot, scorching, lukewarm, blazing. Make your own thermometer for 'cold' words!"
  },
  science: {
    title: "Our Solar System Adventure", emoji: "🪐",
    intro: "Strap in, space explorer! Eight planets, one blazing star, and billions of miles of mystery are waiting.",
    learn: [
      "The Sun is a star — a giant ball of burning gas that gives us light and heat.",
      "Order of planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. (Trick: 'My Very Excited Mother Just Served Us Nachos!')",
      "Inner planets (Mercury–Mars) are small and rocky; outer planets (Jupiter–Neptune) are giant balls of gas and ice.",
      "Earth orbits the Sun in one year, spins once a day, and the Moon orbits Earth in about a month."
    ],
    questions: [
      { q: "What is the Sun?", a: "A star — a giant ball of burning gas" },
      { q: "Which planet is third from the Sun?", a: "Earth" },
      { q: "Name the largest planet.", a: "Jupiter" },
      { q: "What makes day and night?", a: "Earth spinning (rotating) once every 24 hours" },
      { q: "Which planets are the rocky 'inner planets'?", a: "Mercury, Venus, Earth, and Mars" }
    ],
    activity: "🌌 Backyard Planet Walk: Place 8 objects across a room or yard to model planet spacing — notice how far Neptune is from the Sun!"
  },
  history: {
    title: "Explorers & the Age of Discovery", emoji: "⛵",
    intro: "Imagine sailing off the edge of every map you've ever seen. Five hundred years ago, explorers did exactly that!",
    learn: [
      "In the 1400s–1500s, European explorers sailed to find new trade routes for spices, silk, and gold.",
      "Columbus reached the Americas in 1492 (though people already lived there!). Magellan's crew first sailed all the way around the world.",
      "Sailors navigated with compasses, the stars, and maps that were often wrong or half-empty.",
      "Exploration connected continents but also brought hardship to native peoples — history has both bright and dark sides."
    ],
    questions: [
      { q: "Why did explorers set sail in the 1400s?", a: "To find new trade routes for spices, silk, and gold" },
      { q: "What happened in 1492?", a: "Columbus reached the Americas" },
      { q: "Whose expedition first circled the entire globe?", a: "Magellan's crew" },
      { q: "Name two tools sailors used to navigate.", a: "Compass, stars, maps" },
      { q: "Why do historians say exploration had 'two sides'?", a: "It connected the world but caused suffering for native peoples" }
    ],
    activity: "🗺️ Map Maker: Draw a treasure map of your home or street with a compass rose, a legend, and an X marking hidden 'treasure'!"
  }
},

6: {
  math: {
    title: "Ratios, Rates & Percents", emoji: "📊",
    intro: "Ratios and percents run the real world — recipes, sales, sports stats, and your phone battery. Time to speak their language!",
    learn: [
      "A ratio compares two amounts: 2 cups flour to 1 cup sugar is 2:1.",
      "A rate compares different units: 120 miles in 2 hours = 60 miles per hour.",
      "'Percent' means 'out of 100'. 45% = 45/100 = 0.45.",
      "To find 20% of 50: convert to decimal (0.20) and multiply: 0.20 × 50 = 10. Or find 10% (5) and double it!"
    ],
    activity: "🧃 Juice Lab: Mix juice and water in a 1:3 ratio, then a 1:1 ratio. Taste-test — which ratio wins in your family?"
  },
  reading: {
    title: "Theme: The Message Behind the Story", emoji: "💡",
    intro: "The theme is a story's hidden treasure — the life lesson the author buried for you to dig up.",
    learn: [
      "Theme is the big life message: 'true friendship takes work', 'honesty wins in the end'.",
      "Theme is NOT the topic. Topic: 'a dog'. Theme: 'loyalty means staying even when it's hard.'",
      "Find it by asking: How did the main character change? What did they learn?",
      "A summary retells key events in order; the theme is what those events teach."
    ],
    passage: "Kira had practiced her solo for weeks, but at the auditions she heard Amara — the new girl — warming up, and her voice was extraordinary. Kira's stomach twisted. During Amara's turn, the music track glitched and stopped. The room went silent. Kira knew the song; she had practiced to it a hundred times. She stood, walked to the piano, and played so Amara could finish. Amara won the solo. But when the choir director created a duet just for the two of them, Kira understood she hadn't lost anything at all.",
    questions: [
      { q: "What difficult choice does Kira face?", a: "Whether to help her rival, Amara, when the music stopped" },
      { q: "What does Kira do, and what does it cost her?", a: "She plays piano so Amara can finish; Amara wins the solo Kira wanted" },
      { q: "How is Kira rewarded in the end?", a: "The director creates a duet for both girls" },
      { q: "What is the THEME of this story?", a: "Examples: kindness matters more than winning; helping others brings unexpected rewards" },
      { q: "Why is 'a singing contest' NOT the theme?", a: "That's the topic — the theme is the life lesson the events teach" }
    ],
    activity: "🎬 Theme Detective: Watch any short film or favorite movie scene tonight and state its theme in one sentence. Compare answers with your family!"
  },
  vocabulary: {
    title: "Greek & Latin Roots: Word Archaeology", emoji: "🏺",
    intro: "English words are ancient ruins! Dig into Greek and Latin roots and you can decode words you've never even seen.",
    words: [
      ["telescope", "tele (far) + scope (see) = tool for seeing far", "Galileo improved the telescope in 1609."],
      ["aquarium", "aqua (water) = a tank of water for animals", "The aquarium's octopus solved a puzzle."],
      ["biology", "bio (life) + logy (study) = study of life", "In biology we studied pond water under microscopes."],
      ["audible", "audi (hear) = able to be heard", "Her whisper was barely audible in the noisy gym."],
      ["transport", "trans (across) + port (carry) = carry across", "Trains transport goods across the country."],
      ["predict", "pre (before) + dict (say) = say before it happens", "Meteorologists predict tomorrow's weather."],
      ["spectator", "spect (look) = one who watches", "The spectators cheered from the bleachers."],
      ["fracture", "fract (break) = a break or crack", "The X-ray showed a small fracture in his wrist."],
      ["autograph", "auto (self) + graph (write) = your own signature", "The pitcher signed an autograph on the baseball."],
      ["chronological", "chrono (time) = arranged in time order", "List the events in chronological order."]
    ],
    activity: "🔎 Root Round-Up: The root 'port' means carry. In 5 minutes, list every 'port' word you can (portable, export...). Decode each with the root!"
  },
  science: {
    title: "Cells: The Building Blocks of Life", emoji: "🔬",
    intro: "You are built from about 37 TRILLION microscopic living bricks called cells — and each one is busier than a city!",
    learn: [
      "All living things are made of cells — the smallest unit of life. Bacteria have one cell; you have trillions!",
      "Cell city parts: the nucleus is city hall (holds DNA instructions), mitochondria are power plants (make energy), the membrane is the city wall (controls what enters).",
      "Plant cells have extras: a stiff cell wall and chloroplasts, the green solar panels that make food.",
      "Cells team up: similar cells form tissues → tissues form organs → organs form YOU."
    ],
    questions: [
      { q: "What is the smallest unit of life?", a: "The cell" },
      { q: "Which part of the cell holds the DNA instructions?", a: "The nucleus" },
      { q: "What do mitochondria do?", a: "Make energy — the cell's power plants" },
      { q: "Name two parts plant cells have that animal cells don't.", a: "Cell wall and chloroplasts" },
      { q: "Put in order from smallest to largest: organ, cell, tissue.", a: "Cell → tissue → organ" }
    ],
    activity: "🍰 Edible Cell: Design a cell model from snacks — a cookie cell with a grape nucleus and sprinkle mitochondria. Label, then eat your science!"
  },
  history: {
    title: "The Middle Ages: Castles & Knights", emoji: "🏰",
    intro: "Drawbridges, jousting knights, and castle feasts — the Middle Ages were dramatic, dangerous, and fascinating!",
    learn: [
      "The Middle Ages (about 500–1500 AD) came after the Roman Empire fell in Europe.",
      "Feudalism was the deal of the day: kings gave land to lords, lords gave protection to peasants, and peasants farmed the land.",
      "Knights trained from age 7 (page → squire → knight) and followed a code of honor called chivalry.",
      "Castles were fortresses with moats, drawbridges, and thick walls. Most people, though, were farmers who never saw a feast!"
    ],
    questions: [
      { q: "When were the Middle Ages?", a: "About 500 to 1500 AD" },
      { q: "In feudalism, what did peasants give and receive?", a: "They farmed the land and received protection" },
      { q: "What was chivalry?", a: "The knight's code of honor — bravery, loyalty, protecting the weak" },
      { q: "What were the steps to become a knight?", a: "Page, then squire, then knight" },
      { q: "Name two castle defenses.", a: "Moat, drawbridge, thick walls, towers" }
    ],
    activity: "🛡️ Coat of Arms: Design a family shield with symbols for what your family values most. Hang it on your castle (bedroom) door!"
  }
}
};
