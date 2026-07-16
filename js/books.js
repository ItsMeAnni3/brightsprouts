// BrightSprouts Academy — 100 Best Books of the Last 100 Years (1926–2026)
// { t: title, a: author, y: first published, g: genre, w: why read it, n: optional parent content note }
const BOOKS = [
// ================= GRADES 1–2 =================
{ b:"1-2", t:"Winnie-the-Pooh", a:"A. A. Milne", y:1926, g:"Animal Stories", w:"A bear of very little brain and the kindest friendships in children's literature. The book that started the whole modern century of stories." },
{ b:"1-2", t:"Millions of Cats", a:"Wanda Gág", y:1928, g:"Picture Book", w:"“Hundreds of cats, thousands of cats, millions and billions and trillions of cats.” The oldest American picture book still in print — and children still chant it." },
{ b:"1-2", t:"The Story of Ferdinand", a:"Munro Leaf", y:1936, g:"Animal Stories", w:"A bull who would rather smell flowers than fight. A quiet, funny argument for being exactly who you are." },
{ b:"1-2", t:"Madeline", a:"Ludwig Bemelmans", y:1939, g:"Picture Book", w:"“In an old house in Paris that was covered with vines…” Rhyme so good children learn it by accident, and the bravest small girl in Paris." },
{ b:"1-2", t:"Curious George", a:"H. A. Rey", y:1941, g:"Humour", w:"A monkey whose curiosity gets him into trouble on literally every page. Children adore him because he does what they'd do." },
{ b:"1-2", t:"Make Way for Ducklings", a:"Robert McCloskey", y:1941, g:"Animal Stories", w:"Eight ducklings stop the traffic in Boston. Gentle, funny, and the drawings are astonishing." },
{ b:"1-2", t:"The Little Prince", a:"Antoine de Saint-Exupéry", y:1943, g:"Fantasy", w:"A tiny prince, a fox, and a rose. Read at six it's an adventure; read at forty it will undo you." },
{ b:"1-2", t:"Goodnight Moon", a:"Margaret Wise Brown", y:1947, g:"Bedtime", w:"The most perfect going-to-sleep book ever made. It slows a child's breathing all by itself." },
{ b:"1-2", t:"Harold and the Purple Crayon", a:"Crockett Johnson", y:1955, g:"Fantasy", w:"A boy draws his own world and walks into it. The purest picture of imagination ever put on paper." },
{ b:"1-2", t:"The Cat in the Hat", a:"Dr. Seuss", y:1957, g:"Humour", w:"Written with only 236 different words to prove that learning to read need not be boring. It worked." },
{ b:"1-2", t:"Green Eggs and Ham", a:"Dr. Seuss", y:1960, g:"Humour", w:"Fifty words. One glorious argument. Every beginning reader's first taste of finishing a whole book alone." },
{ b:"1-2", t:"The Snowy Day", a:"Ezra Jack Keats", y:1962, g:"Realistic Fiction", w:"A small boy, a big snowfall, and nothing more. Quietly historic: the first full-colour picture book with a Black child as its hero." },
{ b:"1-2", t:"Where the Wild Things Are", a:"Maurice Sendak", y:1963, g:"Fantasy", w:"Max is sent to bed without supper and sails away to be king of the monsters. It takes children's anger seriously — which is why they love it." },
{ b:"1-2", t:"The Giving Tree", a:"Shel Silverstein", y:1964, g:"Fable", w:"A tree gives a boy everything it has. Nobody agrees what it means, which is the best reason to read it together." },
{ b:"1-2", t:"Corduroy", a:"Don Freeman", y:1968, g:"Animal Stories", w:"A toy bear with a missing button searches a department store at night for someone to love him. Ends perfectly." },
{ b:"1-2", t:"The Tiger Who Came to Tea", a:"Judith Kerr", y:1968, g:"Fantasy", w:"A tiger knocks on the door and eats absolutely everything in the house, including all the water in the tap. No explanation. Sublime." },
{ b:"1-2", t:"The Very Hungry Caterpillar", a:"Eric Carle", y:1969, g:"Picture Book", w:"Counting, days of the week, and a life cycle — smuggled inside holes a small finger can poke through." },
{ b:"1-2", t:"Frog and Toad Are Friends", a:"Arnold Lobel", y:1970, g:"Early Reader", w:"Two friends who are nothing alike. The kindest, funniest early reader ever written, and secretly rather wise." },
{ b:"1-2", t:"Alexander and the Terrible, Horrible, No Good, Very Bad Day", a:"Judith Viorst", y:1972, g:"Realistic Fiction", w:"Everything goes wrong and nothing gets fixed. Enormously comforting, because some days are just like that." },
{ b:"1-2", t:"Each Peach Pear Plum", a:"Janet Ahlberg and Allan Ahlberg", y:1978, g:"Rhyme", w:"An I-Spy rhyme hiding every nursery character in the pictures. Toddlers spot things adults miss." },
{ b:"1-2", t:"Chicka Chicka Boom Boom", a:"Bill Martin Jr.", y:1989, g:"Rhyme", w:"The whole alphabet climbs a coconut tree and falls out of it. Impossible to read quietly." },
{ b:"1-2", t:"Owl Babies", a:"Martin Waddell", y:1992, g:"Animal Stories", w:"Three owlets wake and their mother is gone. “I want my mummy!” The best book in the world about a parent coming back." },
{ b:"1-2", t:"The Gruffalo", a:"Julia Donaldson", y:1999, g:"Rhyme", w:"A mouse invents a monster to scare off predators — then meets it. Rhyme this good should be illegal." },
{ b:"1-2", t:"Don't Let the Pigeon Drive the Bus!", a:"Mo Willems", y:2003, g:"Humour", w:"A pigeon begs the reader directly, and children get to shout NO. The first book where they're in charge." },
{ b:"1-2", t:"The Day the Crayons Quit", a:"Drew Daywalt", y:2013, g:"Humour", w:"The crayons write letters of complaint. Beige is furious. A modern classic that makes grown-ups laugh out loud." },

// ================= GRADES 3–5 =================
{ b:"3-5", t:"Little House in the Big Woods", a:"Laura Ingalls Wilder", y:1932, g:"Historical", w:"A pioneer childhood told in what they ate, made and built. The first chapter book many children finish." },
{ b:"3-5", t:"Mary Poppins", a:"P. L. Travers", y:1934, g:"Fantasy", w:"Sharper, stranger and far tarter than the film. The nanny is nobody's friend, and that's the joy of her." },
{ b:"3-5", t:"The Hobbit", a:"J. R. R. Tolkien", y:1937, g:"Fantasy", w:"A comfortable hobbit is dragged out of his door on an adventure. The gateway to every fantasy that followed." },
{ b:"3-5", t:"Mr. Popper's Penguins", a:"Richard Atwater and Florence Atwater", y:1938, g:"Humour", w:"A house painter is sent a penguin. Then there are twelve. Delightfully, completely silly." },
{ b:"3-5", t:"Pippi Longstocking", a:"Astrid Lindgren", y:1945, g:"Humour", w:"The strongest girl in the world lives alone with a horse and a monkey and answers to nobody. Anarchy, in the best way." },
{ b:"3-5", t:"Stuart Little", a:"E. B. White", y:1945, g:"Animal Stories", w:"A mouse born into a human family sets out to find his lost friend. Ends without tidying up — bravely." },
{ b:"3-5", t:"My Father's Dragon", a:"Ruth Stiles Gannett", y:1948, g:"Fantasy", w:"A boy packs lollipops and rubber bands and rescues a baby dragon. Short chapters, perfect for reading aloud." },
{ b:"3-5", t:"The Lion, the Witch and the Wardrobe", a:"C. S. Lewis", y:1950, g:"Fantasy", w:"Four children step through a coat cupboard into eternal winter. That first sight of the lamp-post never gets old." },
{ b:"3-5", t:"Charlotte's Web", a:"E. B. White", y:1952, g:"Animal Stories", w:"A spider saves a pig with words. Probably the best children's novel ever written, and it will make you cry." },
{ b:"3-5", t:"The Borrowers", a:"Mary Norton", y:1952, g:"Fantasy", w:"Tiny people live under the floor and 'borrow' your missing things. Explains every lost safety pin in history." },
{ b:"3-5", t:"James and the Giant Peach", a:"Roald Dahl", y:1961, g:"Fantasy", w:"An orphan escapes two horrid aunts inside an enormous peach with a crew of insects. Dahl at his wildest." },
{ b:"3-5", t:"The Phantom Tollbooth", a:"Norton Juster", y:1961, g:"Fantasy", w:"A bored boy drives into a land where words and numbers are at war. Every page hides a joke about language." },
{ b:"3-5", t:"A Wrinkle in Time", a:"Madeleine L'Engle", y:1962, g:"Science Fiction", w:"Meg travels by tesseract to rescue her father. Rejected by 26 publishers for having a girl lead in a physics story." },
{ b:"3-5", t:"Charlie and the Chocolate Factory", a:"Roald Dahl", y:1964, g:"Fantasy", w:"A golden ticket, a chocolate river, and four very deserving fates. Pure appetite on the page." },
{ b:"3-5", t:"Ramona the Pest", a:"Beverly Cleary", y:1968, g:"Realistic Fiction", w:"Kindergarten from Ramona's point of view, in which she is completely reasonable and everyone else is baffling." },
{ b:"3-5", t:"Fantastic Mr Fox", a:"Roald Dahl", y:1970, g:"Animal Stories", w:"Three horrible farmers versus one clever fox. Short, fast, and the digging scenes are thrilling." },
{ b:"3-5", t:"Tales of a Fourth Grade Nothing", a:"Judy Blume", y:1972, g:"Realistic Fiction", w:"Peter's little brother Fudge swallows a turtle. The definitive book about having a maddening sibling." },
{ b:"3-5", t:"The Indian in the Cupboard", a:"Lynne Reid Banks", y:1980, g:"Fantasy", w:"A toy comes alive in a cupboard — and turns out to be a person with a life of his own. Raises real questions about power.", n:"Written in 1980; its portrayal of a Native American character has been criticised. A good one to discuss together." },
{ b:"3-5", t:"The BFG", a:"Roald Dahl", y:1982, g:"Fantasy", w:"A Big Friendly Giant who blows dreams through windows and speaks gloriously wrong English. Snozzcumbers and all." },
{ b:"3-5", t:"Sarah, Plain and Tall", a:"Patricia MacLachlan", y:1985, g:"Historical", w:"A mail-order bride arrives on the prairie. Fifty-eight pages, not a word wasted, and it aches." },
{ b:"3-5", t:"Matilda", a:"Roald Dahl", y:1988, g:"Humour", w:"A brilliant girl, dreadful parents, a monstrous headmistress, and one perfect teacher. Every bookish child's revenge fantasy." },
{ b:"3-5", t:"Harry Potter and the Philosopher's Stone", a:"J. K. Rowling", y:1997, g:"Fantasy", w:"The letter, the platform, the castle. Whatever you think of it now, it turned a generation into readers." },
{ b:"3-5", t:"Because of Winn-Dixie", a:"Kate DiCamillo", y:2000, g:"Realistic Fiction", w:"A stray dog in a supermarket rearranges a lonely town. Warm without ever being sugary." },
{ b:"3-5", t:"The Tale of Despereaux", a:"Kate DiCamillo", y:2003, g:"Fantasy", w:"A mouse with enormous ears falls in love with a princess and with stories. Told by a narrator who talks straight to you." },
{ b:"3-5", t:"The Wild Robot", a:"Peter Brown", y:2016, g:"Science Fiction", w:"A robot washes up on a wild island and must learn to belong. Short chapters, big heart, brilliant for reluctant readers." },

// ================= GRADES 6–8 =================
{ b:"6-8", t:"Island of the Blue Dolphins", a:"Scott O'Dell", y:1960, g:"Adventure", w:"A girl survives alone on an island for eighteen years. Based on a real woman's life." },
{ b:"6-8", t:"Where the Red Fern Grows", a:"Wilson Rawls", y:1961, g:"Animal Stories", w:"A boy, two hunting dogs, and the Ozarks. Be warned: this one has broken hearts for sixty years.", n:"Includes hunting and the death of animals." },
{ b:"6-8", t:"The Outsiders", a:"S. E. Hinton", y:1967, g:"Realistic Fiction", w:"Greasers and Socs, written by a 16-year-old girl who was sick of fake teenagers in books. Still hits.", n:"Gang violence; a character dies." },
{ b:"6-8", t:"A Wizard of Earthsea", a:"Ursula K. Le Guin", y:1968, g:"Fantasy", w:"A gifted boy at wizard school unleashes a shadow — and must chase what he made. Fantasy about pride and names." },
{ b:"6-8", t:"Watership Down", a:"Richard Adams", y:1972, g:"Adventure", w:"Rabbits flee a doomed warren to found a new one. An epic with its own language, mythology and politics.", n:"Frank about violence and death among the rabbits." },
{ b:"6-8", t:"The Dark Is Rising", a:"Susan Cooper", y:1973, g:"Fantasy", w:"On his eleventh birthday Will learns he is the last of the Old Ones. The most atmospheric midwinter book there is." },
{ b:"6-8", t:"Tuck Everlasting", a:"Natalie Babbitt", y:1975, g:"Fantasy", w:"A family cannot die, and a girl must choose whether to join them. A whole philosophy in 139 pages." },
{ b:"6-8", t:"Roll of Thunder, Hear My Cry", a:"Mildred D. Taylor", y:1976, g:"Historical", w:"A Black family holds onto their land in 1930s Mississippi. Cassie Logan is one of literature's great narrators.", n:"Racism, racial slurs and threatened violence — as history had it." },
{ b:"6-8", t:"Bridge to Terabithia", a:"Katherine Paterson", y:1977, g:"Realistic Fiction", w:"Two children invent a kingdom in the woods. About friendship, and then about grief, and it is honest about both.", n:"A child dies suddenly." },
{ b:"6-8", t:"The Westing Game", a:"Ellen Raskin", y:1978, g:"Mystery", w:"Sixteen heirs, one dead millionaire, and a puzzle you can genuinely solve. The best kids' mystery ever built." },
{ b:"6-8", t:"Hatchet", a:"Gary Paulsen", y:1987, g:"Survival", w:"Plane crash. Boy. One hatchet. Fifty-four days. Nothing else — and you cannot put it down." },
{ b:"6-8", t:"Number the Stars", a:"Lois Lowry", y:1989, g:"Historical", w:"Ten-year-old Annemarie helps smuggle her Jewish friend out of occupied Denmark. Brave and clear-eyed.", n:"Set during the Holocaust." },
{ b:"6-8", t:"Maniac Magee", a:"Jerry Spinelli", y:1990, g:"Realistic Fiction", w:"A running, homeless, legendary boy who unknots the racial divide of a town. Told like a tall tale." },
{ b:"6-8", t:"The Giver", a:"Lois Lowry", y:1993, g:"Science Fiction", w:"A perfect community with no pain, no colour and no choice. The book that launched a thousand arguments in classrooms.", n:"Includes infanticide, handled quietly but devastatingly." },
{ b:"6-8", t:"The Watsons Go to Birmingham – 1963", a:"Christopher Paul Curtis", y:1995, g:"Historical", w:"Hilarious family road trip that drives straight into history. The tonal shift is masterful.", n:"Depicts the 1963 church bombing." },
{ b:"6-8", t:"Holes", a:"Louis Sachar", y:1998, g:"Mystery", w:"Boys dig holes in a desert camp. Three timelines braid together into one perfect click. Flawless plotting." },
{ b:"6-8", t:"Bud, Not Buddy", a:"Christopher Paul Curtis", y:1999, g:"Historical", w:"A ten-year-old runs away during the Depression to find the father he thinks is a jazz musician. Funny and hopeful." },
{ b:"6-8", t:"Esperanza Rising", a:"Pam Muñoz Ryan", y:2000, g:"Historical", w:"A wealthy Mexican girl loses everything and becomes a farm worker in California. About starting over with grace." },
{ b:"6-8", t:"Coraline", a:"Neil Gaiman", y:2002, g:"Horror", w:"A door, another mother, and buttons for eyes. Properly frightening — and about a girl who is brave anyway.", n:"Genuinely scary; best for children who like being scared." },
{ b:"6-8", t:"The Lightning Thief", a:"Rick Riordan", y:2005, g:"Fantasy", w:"Percy discovers his dyslexia is Ancient Greek wiring and his dad is Poseidon. Teaches mythology by stealth." },
{ b:"6-8", t:"The Graveyard Book", a:"Neil Gaiman", y:2008, g:"Fantasy", w:"A toddler is raised by the dead in a graveyard after his family is murdered. Strange, tender, unforgettable.", n:"Opens with an off-page family murder." },
{ b:"6-8", t:"Smile", a:"Raina Telgemeier", y:2010, g:"Graphic Novel", w:"A true story about knocking out two front teeth and surviving middle school. The book that made graphic memoir huge." },
{ b:"6-8", t:"Wonder", a:"R. J. Palacio", y:2012, g:"Realistic Fiction", w:"Auggie has a facial difference and is starting school. Told from many viewpoints, which is the whole point." },
{ b:"6-8", t:"El Deafo", a:"Cece Bell", y:2014, g:"Graphic Novel", w:"A deaf girl turns her hearing aid into a superpower. Funny, true, and quietly changes how you think." },
{ b:"6-8", t:"New Kid", a:"Jerry Craft", y:2019, g:"Graphic Novel", w:"Jordan is one of the few Black kids at a posh school. The first graphic novel to win the Newbery Medal." },

// ================= GRADES 9–12 =================
{ b:"9-12", t:"Of Mice and Men", a:"John Steinbeck", y:1937, g:"Classic", w:"Two migrant workers and one impossible dream of a small farm. A hundred pages that flatten you.", n:"Racist language of its period; violence; a mercy killing." },
{ b:"9-12", t:"Animal Farm", a:"George Orwell", y:1945, g:"Satire", w:"The animals overthrow the farmer, then rewrite the rules. The clearest lesson in propaganda ever written.", n:"Allegorical violence." },
{ b:"9-12", t:"The Diary of a Young Girl", a:"Anne Frank", y:1947, g:"Memoir", w:"A funny, furious, ordinary teenager writing in hiding. Essential — and she is *good*, not just important.", n:"The Holocaust; she died in a camp." },
{ b:"9-12", t:"Nineteen Eighty-Four", a:"George Orwell", y:1949, g:"Science Fiction", w:"Big Brother, doublethink, Room 101. It gave us the vocabulary we still use to describe tyranny.", n:"Torture; sexuality; bleak throughout." },
{ b:"9-12", t:"The Catcher in the Rye", a:"J. D. Salinger", y:1951, g:"Classic", w:"Three days with Holden Caulfield, who is grieving and can't say so. Adolescence, exactly.", n:"Strong language; smoking, drinking, a scene with a prostitute." },
{ b:"9-12", t:"Fahrenheit 451", a:"Ray Bradbury", y:1953, g:"Science Fiction", w:"Firemen burn books. Written on a rented typewriter in a library basement for $9.80." },
{ b:"9-12", t:"Lord of the Flies", a:"William Golding", y:1954, g:"Classic", w:"Schoolboys marooned, and civilisation peeling off like paint. Uncomfortable on purpose.", n:"Children killing children." },
{ b:"9-12", t:"Things Fall Apart", a:"Chinua Achebe", y:1958, g:"Historical", w:"Igbo life before and during colonisation, told from inside. The most important African novel of the century.", n:"Violence; a ritual killing; suicide." },
{ b:"9-12", t:"To Kill a Mockingbird", a:"Harper Lee", y:1960, g:"Classic", w:"Scout, Atticus, Boo Radley, and a trial in Alabama. Read it, then read the arguments about it.", n:"Racial slurs; a rape trial." },
{ b:"9-12", t:"Dune", a:"Frank Herbert", y:1965, g:"Science Fiction", w:"Desert planet, giant worms, and politics that repay a second read. The best-selling science fiction novel ever." },
{ b:"9-12", t:"I Know Why the Caged Bird Sings", a:"Maya Angelou", y:1969, g:"Memoir", w:"A childhood in the segregated South, written in prose that sings. She stopped speaking for five years; then she wrote this.", n:"Childhood sexual assault; racism." },
{ b:"9-12", t:"The House on Mango Street", a:"Sandra Cisneros", y:1984, g:"Realistic Fiction", w:"A Chicago girlhood in 46 tiny chapters, each one a poem that happens to be prose.", n:"Brief scenes of assault and harassment." },
{ b:"9-12", t:"Ender's Game", a:"Orson Scott Card", y:1985, g:"Science Fiction", w:"A gifted child is trained through games to command a war. The ending has never stopped being argued about.", n:"Bullying and violence involving children." },
{ b:"9-12", t:"Maus", a:"Art Spiegelman", y:1986, g:"Graphic Novel", w:"His father's Holocaust survival, drawn with mice and cats — and the story of a son failing to talk to his dad. The only graphic novel to win a Pulitzer.", n:"The Holocaust; suicide; smoking." },
{ b:"9-12", t:"Northern Lights (The Golden Compass)", a:"Philip Pullman", y:1995, g:"Fantasy", w:"Lyra, her dæmon, an armoured bear, and a knife at the edge of the worlds. Fantasy that argues with theology.", n:"Peril involving children; strongly critical of organised religion." },
{ b:"9-12", t:"Speak", a:"Laurie Halse Anderson", y:1999, g:"Realistic Fiction", w:"Melinda stops speaking after a party. The book that gave a generation the words for what happened to them.", n:"Rape and its aftermath; written for and with teenagers." },
{ b:"9-12", t:"The Perks of Being a Wallflower", a:"Stephen Chbosky", y:1999, g:"Realistic Fiction", w:"Letters from Charlie, an outsider being let in. “We accept the love we think we deserve.”", n:"Drugs, sexuality, abuse, suicide." },
{ b:"9-12", t:"Persepolis", a:"Marjane Satrapi", y:2000, g:"Graphic Novel", w:"Growing up during the Iranian Revolution, drawn in stark black and white. Funny, angry, human.", n:"War, execution, repression." },
{ b:"9-12", t:"The Book Thief", a:"Markus Zusak", y:2005, g:"Historical", w:"Nazi Germany narrated by Death, who finds humans exhausting and beautiful. The prose does things prose shouldn't.", n:"The Holocaust; bombing; many deaths." },
{ b:"9-12", t:"The Absolutely True Diary of a Part-Time Indian", a:"Sherman Alexie", y:2007, g:"Realistic Fiction", w:"Junior leaves the reservation school for the white school. Very funny about very hard things.", n:"Alcoholism, deaths, crude humour, strong language." },
{ b:"9-12", t:"The Hunger Games", a:"Suzanne Collins", y:2008, g:"Science Fiction", w:"Katniss volunteers. A page-turner that is genuinely about war, spectacle and who gets watched.", n:"Children forced to kill children." },
{ b:"9-12", t:"The Fault in Our Stars", a:"John Green", y:2012, g:"Realistic Fiction", w:"Two teenagers with cancer, refusing to be inspirational. Sharp, funny, and it will wreck you.", n:"Terminal illness and death." },
{ b:"9-12", t:"The Hate U Give", a:"Angie Thomas", y:2017, g:"Realistic Fiction", w:"Starr sees her friend shot by a police officer and must decide whether to speak. Urgent and enormously readable.", n:"Police shooting, strong language, drugs." },
{ b:"9-12", t:"Long Way Down", a:"Jason Reynolds", y:2017, g:"Poetry", w:"Sixty seconds in a lift, told in verse, as Will decides whether to avenge his brother. Read in one sitting; think for a year.", n:"Gun violence and grief." },
{ b:"9-12", t:"Refugee", a:"Alan Gratz", y:2017, g:"Historical", w:"Three children fleeing — 1930s Germany, 1990s Cuba, 2015 Syria — and the moment their stories touch.", n:"War, drowning, family separation." }
];

const BOOK_BANDS = [
  ["1-2",  "Grades 1–2",  "Picture books & first readers", "openbook"],
  ["3-5",  "Grades 3–5",  "First chapter books",           "dragon"],
  ["6-8",  "Grades 6–8",  "Middle grade",                  "magnifier"],
  ["9-12", "Grades 9–12", "Young adult & classics",        "rocket"]
];

// Little animated doodles that sit between the sections and down the margins.
const BOOK_DOODLES = {
openbook: `
<g class="sc-float">
  <path d="M8 40 L44 32 L44 68 L8 74 Z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M76 40 L44 32 L44 68 L76 74 Z" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M14 46 L38 41 M14 54 L38 49 M14 62 L38 57" stroke="#fff" stroke-width="2"/>
  <path d="M70 46 L50 41 M70 54 L50 49 M70 62 L50 57" stroke="#fff" stroke-width="2"/>
</g>
<g class="sc-tw"><path d="M64 18 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:1s"><path d="M18 20 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 z" fill="#ff9f68"/></g>`,

dragon: `
<g class="sc-bob">
  <ellipse cx="44" cy="54" rx="22" ry="14" fill="#6bcb77" stroke="#3f8f4a" stroke-width="2"/>
  <circle cx="24" cy="40" r="12" fill="#8fd694" stroke="#3f8f4a" stroke-width="2"/>
  <circle cx="20" cy="37" r="2.4" fill="#2d2a4a"/>
  <path d="M30 34 l4 -8 4 8 z" fill="#3f8f4a"/>
  <path d="M46 40 q10 -18 22 -10 q-6 12 -18 16 z" fill="#2ec4b6" stroke="#3f8f4a" stroke-width="2" class="sc-sway" style="transform-origin:50px 44px"/>
  <path d="M66 56 q12 4 10 16" stroke="#3f8f4a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M32 66 l0 8 M50 68 l0 8" stroke="#3f8f4a" stroke-width="4" stroke-linecap="round"/>
</g>
<g class="sc-flicker"><path d="M12 40 q-8 -2 -10 -8 q8 2 10 4 z" fill="#ff9f68"/></g>`,

magnifier: `
<g class="sc-sway" style="transform-origin:44px 44px">
  <circle cx="40" cy="38" r="20" fill="#dceefb" stroke="#7c5cbf" stroke-width="3"/>
  <circle cx="40" cy="38" r="20" fill="none" stroke="#fff" stroke-width="1.5" opacity=".8"/>
  <path d="M54 54 L72 74" stroke="#8b5a2b" stroke-width="7" stroke-linecap="round"/>
  <path d="M32 30 q6 -6 14 -2" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
</g>
<g class="sc-tw"><circle cx="16" cy="66" r="3" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:.8s"><circle cx="70" cy="22" r="2.4" fill="#ff6b9d"/></g>`,

rocket: `
<g class="sc-float">
  <path d="M44 12 q12 14 12 34 l-24 0 q0 -20 12 -34 z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
  <circle cx="44" cy="34" r="6" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M32 46 l-10 12 10 -2 z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M56 46 l10 12 -10 -2 z" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M36 46 l16 0 0 6 -16 0 z" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
</g>
<g class="sc-flicker"><path d="M38 58 q6 16 6 22 q0 -6 6 -22 z" fill="#ff9f68"/></g>
<g class="sc-tw"><circle cx="16" cy="24" r="2.4" fill="#fff8d6"/></g>
<g class="sc-tw" style="animation-delay:.7s"><circle cx="70" cy="16" r="2" fill="#fff8d6"/></g>
<g class="sc-tw" style="animation-delay:1.4s"><circle cx="74" cy="46" r="2.4" fill="#fff8d6"/></g>`,

stack: `
<g class="sc-bob">
  <rect x="14" y="60" width="60" height="12" rx="2" fill="#ff6b9d" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="18" y="48" width="52" height="12" rx="2" fill="#ffd166" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="12" y="36" width="58" height="12" rx="2" fill="#2ec4b6" stroke="#7c5cbf" stroke-width="2"/>
  <rect x="22" y="24" width="44" height="12" rx="2" fill="#4d96ff" stroke="#7c5cbf" stroke-width="2"/>
</g>
<g class="sc-flutter"><path d="M62 16 q-7 -7 -12 -2 q5 5 12 2 z M62 16 q7 -7 12 -2 q-5 5 -12 2 z" fill="#c39bff"/></g>`,

lamp: `
<path d="M30 74 L58 74" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round"/>
<path d="M44 74 L44 46" stroke="#8b5a2b" stroke-width="4"/>
<path d="M26 46 L62 46 L54 24 L34 24 Z" fill="#ffd166" stroke="#c9a227" stroke-width="2"/>
<g class="sc-glow"><path d="M44 46 L24 76 L64 76 Z" fill="#ffe680" opacity=".55"/></g>
<g class="sc-tw"><circle cx="18" cy="34" r="2.4" fill="#ffd166"/></g>
<g class="sc-tw" style="animation-delay:.9s"><circle cx="70" cy="38" r="2" fill="#ffd166"/></g>`,

owl: `
<g class="sc-bob">
  <ellipse cx="44" cy="48" rx="20" ry="22" fill="#e8c48b" stroke="#8b5a2b" stroke-width="2"/>
  <circle cx="36" cy="40" r="7" fill="#fff" stroke="#8b5a2b" stroke-width="1.6"/>
  <circle cx="52" cy="40" r="7" fill="#fff" stroke="#8b5a2b" stroke-width="1.6"/>
  <circle cx="36" cy="40" r="3" fill="#2d2a4a" class="sc-blink"/>
  <circle cx="52" cy="40" r="3" fill="#2d2a4a" class="sc-blink"/>
  <path d="M44 46 l-3 5 6 0 z" fill="#ff9f68"/>
  <path d="M28 30 l3 -9 6 6 z M60 30 l-3 -9 -6 6 z" fill="#e8c48b" stroke="#8b5a2b" stroke-width="1.6"/>
  <path d="M30 62 L58 62 L58 70 L30 70 Z" fill="#4d96ff" stroke="#7c5cbf" stroke-width="1.6"/>
</g>
<path d="M16 74 L72 74" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round"/>`,

quill: `
<g class="sc-sway" style="transform-origin:56px 70px">
  <path d="M56 70 q-6 -30 14 -46 q6 22 -8 42 z" fill="#fff" stroke="#7c5cbf" stroke-width="2"/>
  <path d="M62 34 q4 10 0 24" stroke="#c9c4dd" stroke-width="1.4" fill="none"/>
  <path d="M56 70 l-4 6" stroke="#2d2a4a" stroke-width="3" stroke-linecap="round"/>
</g>
<path d="M14 76 q14 -6 28 0" stroke="#4d96ff" stroke-width="2.4" fill="none" class="sc-wave"/>
<g class="sc-tw"><circle cx="22" cy="34" r="2.4" fill="#ffd166"/></g>`
};

LESSONS[15] = {
best100: {
  title: "The 100 Best Books of the Last 100 Years", emoji: "🏆",
  intro: "One hundred books published since 1926 — every genre, every age from Grade 1 to 12. Picture books, fantasy, mystery, science fiction, history, graphic novels, memoir and poetry. Pick a genre, find your next favourite.",
  learn: [
    "There is no such thing as a book that's 'too easy'. Reading anything, happily, is what builds a reader. Comics count. Re-reading counts.",
    "A book a child chooses beats a book you choose, almost every time. Use this list to offer, not to assign.",
    "The right book at the wrong age is the wrong book. Each list here is grouped by grade — but children read all over the place, and that's fine.",
    "Where a book has hard material in it, we say so under 'For parents'. Hard books aren't bad books; a heads-up just lets you read alongside.",
    "Almost every one of these is on the shelf at your local library, free, today."
  ],
  activity: "📚 Library Trip: Pick three from this list together, walk to the library, and borrow all three. Let your child choose which one you read first — even if it's the one you'd have picked last.",
  best100: true
},
readnow: {
  title: "Read Online — Free Classic Books", emoji: "📖",
  intro: "Complete books your child can read right here, right now, free. Every one is out of copyright, so it belongs to everybody — including you.",
  learn: [
    "These are the whole books, not summaries. Every word the author wrote.",
    "The reader remembers where your child stopped, so they can come back tomorrow and carry on.",
    "Use A− and A+ to change the text size. Bigger text genuinely helps newer and dyslexic readers.",
    "Any chapter can be printed if your child prefers paper — a lot of children do.",
    "Some of these are over a hundred years old, so the language can be old-fashioned. That's a feature: reading slightly-hard writing is how vocabulary grows."
  ],
  activity: "🌙 Bedtime Chapter: Read one chapter aloud together each night. A chapter a night finishes The Secret Garden in under a month.",
  readOnline: true
}
};
