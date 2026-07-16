// BrightSprouts Academy — Kindergarten (age ~5) picture lessons
LESSONS[0] = {

alphabet: {
  title: "The Amazing Alphabet", emoji: "🔤",
  intro: "26 letters make every word you'll ever read! Say each letter, its sound, and its picture out loud.",
  learn: [
    "Point to each letter and say: letter name → sound → word. 'A says ah — Apple!'",
    "Big letters (A) are called UPPERCASE. Small letters (a) are lowercase.",
    "Sing the alphabet song while pointing — singing helps your brain remember!",
    "Look for these letters everywhere: on cereal boxes, signs, and shirts."
  ],
  activity: "🎵 Letter Hunt: Pick today's 'letter of the day' and count how many times you spot it around the house. Yesterday's champion letter was… everywhere!",
  cards: [
    { l: "Aa", e: "🍎", n: "Apple" }, { l: "Bb", e: "🐻", n: "Bear" }, { l: "Cc", e: "🐱", n: "Cat" },
    { l: "Dd", e: "🐶", n: "Dog" }, { l: "Ee", e: "🐘", n: "Elephant" }, { l: "Ff", e: "🐟", n: "Fish" },
    { l: "Gg", e: "🍇", n: "Grapes" }, { l: "Hh", e: "🎩", n: "Hat" }, { l: "Ii", e: "🍦", n: "Ice cream" },
    { l: "Jj", e: "🧃", n: "Juice" }, { l: "Kk", e: "🪁", n: "Kite" }, { l: "Ll", e: "🦁", n: "Lion" },
    { l: "Mm", e: "🌙", n: "Moon" }, { l: "Nn", e: "🪺", n: "Nest" }, { l: "Oo", e: "🍊", n: "Orange" },
    { l: "Pp", e: "🐧", n: "Penguin" }, { l: "Qq", e: "👑", n: "Queen" }, { l: "Rr", e: "🌈", n: "Rainbow" },
    { l: "Ss", e: "☀️", n: "Sun" }, { l: "Tt", e: "🐯", n: "Tiger" }, { l: "Uu", e: "☂️", n: "Umbrella" },
    { l: "Vv", e: "🎻", n: "Violin" }, { l: "Ww", e: "🐳", n: "Whale" }, { l: "Xx", e: "🩻", n: "X-ray" },
    { l: "Yy", e: "🪀", n: "Yo-yo" }, { l: "Zz", e: "🦓", n: "Zebra" }
  ]
},

counting: {
  title: "Counting All the Way to 100!", emoji: "💯",
  intro: "One hundred sounds HUGE — but it's just ten rows of ten. You can do this!",
  learn: [
    "Count out loud while pointing to each number on the board below.",
    "The yellow numbers are the TENS: 10, 20, 30… counting by tens is like taking giant steps!",
    "See the pattern? Every row ends the same way: 1, 2, 3, 4, 5, 6, 7, 8, 9, and a ten.",
    "Practice a little every day — one new row at a time is plenty."
  ],
  activity: "🫘 Count & Snack: Count out 10 small snacks (raisins, cereal pieces) into 3 piles. Count them all together — then eat your math!",
  numberGrid: true
},

shapes: {
  title: "Shapes All Around Us", emoji: "🔷",
  intro: "The whole world is built from shapes! A pizza is a circle, a window is a square, a party hat is a triangle.",
  learn: [
    "A CIRCLE is perfectly round — no sides, no corners.",
    "A TRIANGLE has 3 sides and 3 corners. A SQUARE has 4 equal sides.",
    "A RECTANGLE has 4 sides too — 2 long and 2 short, like a door.",
    "Corners are where sides meet. Count sides with your finger!"
  ],
  activity: "🔍 Shape Safari: Walk through your home and find one real thing for each shape below. Hardest to find: the diamond!",
  cards: [
    { e: "🔵", n: "Circle" }, { e: "🟥", n: "Square" }, { e: "🔺", n: "Triangle" },
    { svg: "<svg class='kshape' viewBox='0 0 100 70' width='60' height='42'><rect x='5' y='12' width='90' height='46' rx='4' fill='#6bcb77'/></svg>", n: "Rectangle" },
    { svg: "<svg class='kshape' viewBox='0 0 100 70' width='60' height='42'><ellipse cx='50' cy='35' rx='45' ry='27' fill='#ff9f68'/></svg>", n: "Oval" },
    { e: "⭐", n: "Star" }, { e: "❤️", n: "Heart" }, { e: "🔷", n: "Diamond" }
  ]
},

animals: {
  title: "First Words: Animals", emoji: "🐶",
  intro: "Meet 40 animal friends! Say each name out loud, make the animal's sound, and find your favorite.",
  learn: [
    "Point to the picture, say the name, then try the animal's sound!",
    "Which animals live on a farm? In the jungle? In the sea?",
    "Which animal is the biggest here? Which is the smallest?"
  ],
  activity: "🎭 Animal Charades: Act out an animal from the cards — no sounds allowed! Can your family guess it?",
  cards: [
    { e: "🐶", n: "Dog" }, { e: "🐱", n: "Cat" }, { e: "🐭", n: "Mouse" }, { e: "🐹", n: "Hamster" },
    { e: "🐰", n: "Rabbit" }, { e: "🦊", n: "Fox" }, { e: "🐻", n: "Bear" }, { e: "🐼", n: "Panda" },
    { e: "🐨", n: "Koala" }, { e: "🐯", n: "Tiger" }, { e: "🦁", n: "Lion" }, { e: "🐮", n: "Cow" },
    { e: "🐷", n: "Pig" }, { e: "🐸", n: "Frog" }, { e: "🐵", n: "Monkey" }, { e: "🐔", n: "Chicken" },
    { e: "🐧", n: "Penguin" }, { e: "🐦", n: "Bird" }, { e: "🦆", n: "Duck" }, { e: "🦉", n: "Owl" },
    { e: "🐴", n: "Horse" }, { e: "🐝", n: "Bee" }, { e: "🦋", n: "Butterfly" }, { e: "🐌", n: "Snail" },
    { e: "🐞", n: "Ladybug" }, { e: "🐢", n: "Turtle" }, { e: "🐍", n: "Snake" }, { e: "🦎", n: "Lizard" },
    { e: "🐙", n: "Octopus" }, { e: "🦀", n: "Crab" }, { e: "🐬", n: "Dolphin" }, { e: "🐳", n: "Whale" },
    { e: "🦈", n: "Shark" }, { e: "🐟", n: "Fish" }, { e: "🦓", n: "Zebra" }, { e: "🦒", n: "Giraffe" },
    { e: "🐘", n: "Elephant" }, { e: "🦏", n: "Rhino" }, { e: "🐫", n: "Camel" }, { e: "🦘", n: "Kangaroo" }
  ]
},

fruits: {
  title: "First Words: Fruits & Food", emoji: "🍎",
  intro: "30 yummy words! Which ones have you tasted? Which would you like to try?",
  learn: [
    "Say each food's name and its color: 'Banana — yellow!'",
    "Which foods grow on trees? Which grow underground?",
    "Sort them: which are fruits, which are vegetables, which are treats?"
  ],
  activity: "🥗 Rainbow Plate: At your next meal, count how many colors are on your plate. Can you get to four?",
  cards: [
    { e: "🍎", n: "Apple" }, { e: "🍌", n: "Banana" }, { e: "🍊", n: "Orange" }, { e: "🍇", n: "Grapes" },
    { e: "🍓", n: "Strawberry" }, { e: "🫐", n: "Blueberries" }, { e: "🍉", n: "Watermelon" }, { e: "🍍", n: "Pineapple" },
    { e: "🥭", n: "Mango" }, { e: "🍑", n: "Peach" }, { e: "🍐", n: "Pear" }, { e: "🍒", n: "Cherries" },
    { e: "🥝", n: "Kiwi" }, { e: "🍋", n: "Lemon" }, { e: "🥥", n: "Coconut" }, { e: "🥕", n: "Carrot" },
    { e: "🌽", n: "Corn" }, { e: "🥦", n: "Broccoli" }, { e: "🍅", n: "Tomato" }, { e: "🥔", n: "Potato" },
    { e: "🍞", n: "Bread" }, { e: "🧀", n: "Cheese" }, { e: "🥚", n: "Egg" }, { e: "🥛", n: "Milk" },
    { e: "🍚", n: "Rice" }, { e: "🍕", n: "Pizza" }, { e: "🥪", n: "Sandwich" }, { e: "🍪", n: "Cookie" },
    { e: "🍦", n: "Ice cream" }, { e: "🎂", n: "Cake" }
  ]
},

things: {
  title: "First Words: Toys & Everyday Things", emoji: "🧸",
  intro: "30 words for the things all around you — toys, rides, and things at home!",
  learn: [
    "Say each name, then point to the real one if it's in your house!",
    "Which of these can you ride? Which can you wear?",
    "Which things belong in the bathroom? The bedroom? Outside?"
  ],
  activity: "🧺 Toy Sort: Pick 10 of your real toys and sort them by size, then by color. Sorting is kindergarten superpower training!",
  cards: [
    { e: "🧸", n: "Teddy bear" }, { e: "⚽", n: "Ball" }, { e: "🏀", n: "Basketball" }, { e: "🪁", n: "Kite" },
    { e: "🪀", n: "Yo-yo" }, { e: "🎈", n: "Balloon" }, { e: "🧩", n: "Puzzle" }, { e: "🎨", n: "Paints" },
    { e: "🖍️", n: "Crayon" }, { e: "✏️", n: "Pencil" }, { e: "📚", n: "Books" }, { e: "🎒", n: "Backpack" },
    { e: "🚗", n: "Car" }, { e: "🚌", n: "Bus" }, { e: "🚂", n: "Train" }, { e: "✈️", n: "Airplane" },
    { e: "🚲", n: "Bicycle" }, { e: "⛵", n: "Boat" }, { e: "🏠", n: "House" }, { e: "🛏️", n: "Bed" },
    { e: "🪑", n: "Chair" }, { e: "⏰", n: "Clock" }, { e: "☂️", n: "Umbrella" }, { e: "👟", n: "Shoes" },
    { e: "🧢", n: "Cap" }, { e: "🧦", n: "Socks" }, { e: "🥄", n: "Spoon" }, { e: "🥤", n: "Cup" },
    { e: "🪥", n: "Toothbrush" }, { e: "🛁", n: "Bathtub" }
  ]
}
};
