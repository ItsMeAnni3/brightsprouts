// BrightSprouts Academy — Kids & Family Jokes (category 29).
// A joke show hosted by Sprout with his best buddy Bud, played inside an old tube television.
//
// House rules for anything added here: it has to be clean enough to tell a teacher, funny to a
// seven-year-old, and free of anyone being the butt of it — no jokes about how somebody looks,
// where they are from, or how clever they are. Wordplay, silliness and groaners only. The joke
// book prints, so assume every line will be read aloud at a family dinner table.
(function () {

  // Ten channels, because a tube TV should have channels. c = the index used by every joke.
  var JOKE_CHANNELS = [
    { n: "Animal Planet",   e: "🐶", colour: "#2f9e44", tag: "Furry, feathery and fishy friends" },
    { n: "School Daze",     e: "🎒", colour: "#1f6feb", tag: "Classroom giggles" },
    { n: "Snack Time",      e: "🍕", colour: "#ff9f68", tag: "Food that talks back" },
    { n: "Outer Space",     e: "🚀", colour: "#5b21b6", tag: "Jokes from way up there" },
    { n: "Dino Hour",       e: "🦖", colour: "#4a7c1f", tag: "Prehistoric punchlines" },
    { n: "Knock-Knock",     e: "🚪", colour: "#d6336c", tag: "Someone's at the door!" },
    { n: "Spooky Silly",    e: "👻", colour: "#0e7490", tag: "Friendly monsters only" },
    { n: "Sports & Sky",    e: "⚽", colour: "#e2453b", tag: "Games and weather" },
    { n: "Science Lab",     e: "🔬", colour: "#8a5f2e", tag: "Experiments gone funny" },
    { n: "Books & Bands",   e: "🎵", colour: "#7c5cbf", tag: "Stories and songs" }
  ];

  // 100 jokes. q = the set-up Sprout reads out, a = the punchline Bud waits for.
  var JOKES = [
    // ---------- 0 · Animal Planet ----------
    { c: 0, q: "Why do cows wear bells?",                                  a: "Because their horns don't work!" },
    { c: 0, q: "What do you call a bear with no teeth?",                   a: "A gummy bear!" },
    { c: 0, q: "Where do sheep go to get a haircut?",                      a: "To the baa-baa shop!" },
    { c: 0, q: "What do you call a fish with no eyes?",                    a: "A fsh!" },
    { c: 0, q: "Why don't elephants use computers?",                       a: "They're scared of the mouse!" },
    { c: 0, q: "What do you call a pig that does karate?",                 a: "A pork chop!" },
    { c: 0, q: "Why did the cat sit on the laptop?",                       a: "To keep an eye on the mouse!" },
    { c: 0, q: "How do rabbits go on holiday?",                            a: "By hare-plane!" },
    { c: 0, q: "What do you call an alligator in a waistcoat?",            a: "An in-vest-igator!" },
    { c: 0, q: "What do you get if you cross a parrot with a woodpecker?", a: "A bird that talks in Morse code!" },

    // ---------- 1 · School Daze ----------
    { c: 1, q: "Why did the pupil eat his homework?",                      a: "The teacher said it was a piece of cake!" },
    { c: 1, q: "Why was the maths book so sad?",                           a: "It had too many problems!" },
    { c: 1, q: "Why did the girl bring a ladder to school?",               a: "Because she wanted to go to high school!" },
    { c: 1, q: "What subject are owls best at?",                           a: "Owl-gebra!" },
    { c: 1, q: "Why was the broom late for class?",                        a: "It over-swept!" },
    { c: 1, q: "Why did the clock get sent to the head teacher?",          a: "It kept tocking in class!" },
    { c: 1, q: "Why did the teacher wear sunglasses to school?",           a: "Because her class was so bright!" },
    { c: 1, q: "Who is the king of all the school supplies?",              a: "The ruler!" },
    { c: 1, q: "Why did the pencil go to the doctor?",                     a: "It had a broken point!" },
    { c: 1, q: "What did the paper say to the pencil?",                    a: "\"Write on!\"" },

    // ---------- 2 · Snack Time ----------
    { c: 2, q: "Why did the banana go to the doctor?",                     a: "It wasn't peeling well!" },
    { c: 2, q: "What do you call cheese that isn't yours?",                a: "Nacho cheese!" },
    { c: 2, q: "Why did the biscuit go to the nurse?",                     a: "Because it was feeling crumby!" },
    { c: 2, q: "Why don't eggs tell each other jokes?",                    a: "They'd crack each other up!" },
    { c: 2, q: "What did the lettuce say to the celery?",                  a: "\"Stop stalking me!\"" },
    { c: 2, q: "Why did the tomato turn red?",                             a: "Because it saw the salad dressing!" },
    { c: 2, q: "What kind of nut never has any money?",                    a: "A cash-ew!" },
    { c: 2, q: "Why did the grape stop in the middle of the road?",        a: "It ran out of juice!" },
    { c: 2, q: "What is a potato's favourite day of the week?",            a: "Fry-day!" },
    { c: 2, q: "What do you call a sad cup of coffee?",                    a: "A depresso!" },

    // ---------- 3 · Outer Space ----------
    { c: 3, q: "How does the Moon cut its hair?",                          a: "Eclipse it!" },
    { c: 3, q: "Why did the Sun go to school?",                            a: "To get a little brighter!" },
    { c: 3, q: "Where do astronauts leave their spaceships?",              a: "At a parking meteor!" },
    { c: 3, q: "How do you throw a party in space?",                       a: "You planet!" },
    { c: 3, q: "What is an astronaut's favourite key on a keyboard?",      a: "The space bar!" },
    { c: 3, q: "Why don't aliens ever eat clowns?",                        a: "Because they taste funny!" },
    { c: 3, q: "What do you call a tick living on the Moon?",              a: "A luna-tick!" },
    { c: 3, q: "What is a spaceship's favourite hot drink?",               a: "Gravi-tea!" },
    { c: 3, q: "Why did the star stop shining?",                           a: "It needed a little space!" },
    { c: 3, q: "What do you call a very small galaxy?",                    a: "A galax-tiny!" },

    // ---------- 4 · Dino Hour ----------
    { c: 4, q: "What do you call a dinosaur having a nap?",                a: "A dino-snore!" },
    { c: 4, q: "What do you call a dinosaur who knows a lot of words?",    a: "A thesaurus!" },
    { c: 4, q: "Why can't you hear a pterodactyl going to the toilet?",    a: "Because the P is silent!" },
    { c: 4, q: "What do you call a dinosaur who crashes his car?",         a: "Tyrannosaurus wrecks!" },
    { c: 4, q: "What did the dinosaur put on her dinner?",                 a: "Dino-sauce!" },
    { c: 4, q: "Why did the dinosaur cross the road?",                     a: "Because chickens hadn't been invented yet!" },
    { c: 4, q: "What do you call a dinosaur who never gives up?",          a: "A try-try-try-ceratops!" },
    { c: 4, q: "Where do dinosaurs go shopping?",                          a: "To the dino-store!" },
    { c: 4, q: "What do you call a dinosaur wearing a cowboy hat?",        a: "Tyrannosaurus Tex!" },
    { c: 4, q: "How do you invite a dinosaur to lunch?",                   a: "Tea, Rex?" },

    // ---------- 5 · Knock-Knock ----------
    // The whole exchange lives in the set-up so the punchline lands on its own, the way it does
    // when a child tells it out loud.
    { c: 5, q: "Knock, knock! … Who's there? … Lettuce. … Lettuce who?",           a: "Lettuce in, it's freezing out here!" },
    { c: 5, q: "Knock, knock! … Who's there? … Boo. … Boo who?",                   a: "Don't cry, it's only a joke!" },
    { c: 5, q: "Knock, knock! … Who's there? … Cows go. … Cows go who?",           a: "No they don't — cows go MOO!" },
    { c: 5, q: "Knock, knock! … Who's there? … Interrupting cow. … Interrupting c—", a: "MOOOOO!" },
    { c: 5, q: "Knock, knock! … Who's there? … Olive. … Olive who?",               a: "Olive right next door to you!" },
    { c: 5, q: "Knock, knock! … Who's there? … Tank. … Tank who?",                 a: "You're welcome!" },
    { c: 5, q: "Knock, knock! … Who's there? … Doughnut. … Doughnut who?",         a: "Doughnut ask, it's a secret!" },
    { c: 5, q: "Knock, knock! … Who's there? … A broken pencil. … A broken pencil who?", a: "Never mind. It's pointless." },
    { c: 5, q: "Knock, knock! … Who's there? … Alpaca. … Alpaca who?",             a: "Alpaca the lunch, you pack the bags!" },
    { c: 5, q: "Knock, knock! … Who's there? … Honeydew. … Honeydew who?",         a: "Honeydew you know how long I've been knocking?" },

    // ---------- 6 · Spooky Silly ----------
    { c: 6, q: "What is a ghost's favourite pudding?",                     a: "I-scream!" },
    { c: 6, q: "Why didn't the skeleton go to the party?",                 a: "He had no body to go with!" },
    { c: 6, q: "Where do ghosts go on their holidays?",                    a: "Mali-boo!" },
    { c: 6, q: "What shoes do frogs wear in the summer?",                  a: "Open-toad sandals!" },
    { c: 6, q: "Why don't mummies ever take a holiday?",                   a: "They're afraid to unwind!" },
    { c: 6, q: "What do you call a monster with no neck?",                 a: "The Lost Neck Monster!" },
    { c: 6, q: "Why was the robot so tired after his journey?",            a: "He'd had a hard drive!" },
    { c: 6, q: "What do you call a snowman in the middle of July?",        a: "A puddle!" },
    { c: 6, q: "Why did the scarecrow win a prize?",                       a: "Because he was outstanding in his field!" },
    { c: 6, q: "What is a ghost's favourite room in the house?",           a: "The living room!" },

    // ---------- 7 · Sports & Sky ----------
    { c: 7, q: "Why did the football coach go to the bank?",               a: "To get his quarter back!" },
    { c: 7, q: "What did the tornado say to the sports car?",              a: "\"Fancy going for a spin?\"" },
    { c: 7, q: "Why can't you play hide-and-seek with a mountain?",        a: "Because it always peaks!" },
    { c: 7, q: "What is a runner's favourite school subject?",             a: "Jog-raphy!" },
    { c: 7, q: "Why did the golfer take two pairs of trousers?",           a: "In case he got a hole in one!" },
    { c: 7, q: "What do clouds wear under their raincoats?",               a: "Thunderwear!" },
    { c: 7, q: "What did one raindrop say to the other?",                  a: "\"Two's company, three's a cloud!\"" },
    { c: 7, q: "Why did the bicycle fall over?",                           a: "Because it was two tired!" },
    { c: 7, q: "What is a boxer's favourite drink?",                       a: "Fruit punch!" },
    { c: 7, q: "Why did the football team go to the bakery?",              a: "They needed a good roll!" },

    // ---------- 8 · Science Lab ----------
    { c: 8, q: "Why can't you ever trust an atom?",                        a: "Because they make up everything!" },
    { c: 8, q: "What did the volcano say to its best friend?",             a: "\"I lava you!\"" },
    { c: 8, q: "Why does a tree find tests so tricky?",                    a: "It always gets stumped!" },
    { c: 8, q: "What does a magnet say when it meets someone?",            a: "\"I find you very attractive!\"" },
    { c: 8, q: "Why did the germ cross the microscope?",                   a: "To get to the other slide!" },
    { c: 8, q: "What do you call a bee born in the month of May?",         a: "A maybe!" },
    { c: 8, q: "Why is the ocean so friendly?",                            a: "Because it's always waving!" },
    { c: 8, q: "What did the rock say to the geologist?",                  a: "\"Don't take me for granite!\"" },
    { c: 8, q: "Why did the computer go to the doctor?",                   a: "It had caught a virus!" },
    { c: 8, q: "What is a scientist's favourite kind of dog?",             a: "A lab!" },

    // ---------- 9 · Books & Bands ----------
    { c: 9, q: "Why did the library book go to the doctor?",               a: "It needed to be checked out!" },
    { c: 9, q: "What kind of music do planets listen to?",                 a: "Nep-tunes!" },
    { c: 9, q: "Why couldn't the pirate finish his book?",                 a: "He got lost at C!" },
    { c: 9, q: "What is a skeleton's favourite instrument?",               a: "The trom-bone!" },
    { c: 9, q: "Why did the piano get locked out of the house?",           a: "Because its keys were inside!" },
    { c: 9, q: "What did the drum say when it fell over?",                 a: "\"Ba-dum-tss!\"" },
    { c: 9, q: "Why did the musical note get in trouble?",                 a: "It was in treble!" },
    { c: 9, q: "Where does a book sleep at night?",                        a: "Under its covers!" },
    { c: 9, q: "What kind of music do cows love best?",                    a: "Moo-sic!" },
    { c: 9, q: "How do you make a bandstand?",                             a: "Take away all their chairs!" }
  ];

  // ==================== The two hosts ====================

  // Sprout on stage: the chat-window seedling, holding a microphone because tonight he is the host.
  function tvSproutSvg() {
    return '<svg class="jk-sprout" viewBox="0 0 120 132" role="img" aria-label="Sprout the seedling">' +
      '<defs><radialGradient id="jk-sg" cx="42%" cy="32%" r="72%">' +
        '<stop offset="0" stop-color="#95e3a6"/><stop offset="1" stop-color="#57bd69"/></radialGradient></defs>' +
      '<ellipse cx="60" cy="121" rx="21" ry="6.5" fill="#8a6a42"/>' +
      '<ellipse cx="60" cy="118" rx="14" ry="3" fill="#a3763f" opacity=".7"/>' +
      '<path d="M60 121 L60 70" stroke="#4a9c58" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M60 90 C36 92 17 76 13 53 C42 55 60 70 60 90 Z" fill="#8fe36a"/>' +
      '<path d="M56 86 Q33 78 19 57" stroke="#5fae4a" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
      // the right leaf is the arm that holds the microphone
      '<g class="jk-micarm">' +
        '<path d="M60 90 C84 92 103 76 107 53 C78 55 60 70 60 90 Z" fill="#72cf5c"/>' +
        '<path d="M64 86 Q87 78 101 57" stroke="#4f9c52" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
        // silver, not dark: at tile size a dark microphone just reads as a smudge on a green leaf
        '<rect x="98" y="38" width="6" height="18" rx="3" fill="#6f7382"/>' +
        '<circle cx="101" cy="33" r="9.5" fill="#c9cbd6"/>' +
        '<circle cx="101" cy="33" r="6.6" fill="#5c5f70"/>' +
        '<circle cx="98.6" cy="30.6" r="2.2" fill="#eef0f6" opacity=".9"/>' +
      '</g>' +
      '<ellipse cx="60" cy="44" rx="27" ry="26" fill="url(#jk-sg)"/>' +
      '<ellipse cx="60" cy="54" rx="16" ry="11" fill="#a6ecb4" opacity=".5"/>' +
      '<circle cx="42" cy="50" r="5" fill="#ff9db0" opacity=".9"/><circle cx="78" cy="50" r="5" fill="#ff9db0" opacity=".9"/>' +
      '<ellipse class="jk-eye" cx="50" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/>' +
      '<ellipse class="jk-eye" cx="70" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/>' +
      '<circle cx="51.6" cy="37.4" r="1.6" fill="#fff"/><circle cx="71.6" cy="37.4" r="1.6" fill="#fff"/>' +
      '<ellipse class="jk-sproutmouth" cx="60" cy="55" rx="6.5" ry="3.2" fill="#2d2a4a"/>' +
      '</svg>';
  }

  // Bud: Sprout's best friend, a flower in full bloom. Deliberately goofier than Sprout —
  // mismatched eyes, a mouth permanently halfway through a laugh, and petals that wobble.
  // Sprout delivers the joke; Bud is the one who finds it funnier than anybody.
  function budSvg() {
    var petals = "";
    for (var i = 0; i < 10; i++) {
      var a = (i * 36) * Math.PI / 180;
      var px = 60 + Math.cos(a) * 25, py = 42 + Math.sin(a) * 25;
      petals += '<ellipse cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" rx="13" ry="9" ' +
        'fill="' + (i % 2 ? "#ff9f68" : "#ff6b9d") + '" opacity=".95" ' +
        'transform="rotate(' + (i * 36) + ' ' + px.toFixed(1) + ' ' + py.toFixed(1) + ')"/>';
    }
    return '<svg class="jk-bud" viewBox="0 0 120 132" role="img" aria-label="Bud the flower">' +
      '<defs><radialGradient id="jk-bg" cx="40%" cy="34%" r="70%">' +
        '<stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#f2b705"/></radialGradient></defs>' +
      '<ellipse cx="60" cy="121" rx="20" ry="6.5" fill="#8a6a42"/>' +
      '<ellipse cx="60" cy="118" rx="13" ry="3" fill="#a3763f" opacity=".7"/>' +
      '<path d="M60 121 Q56 96 60 70" stroke="#4a9c58" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M60 100 C40 102 28 92 25 76 C46 76 58 86 60 100 Z" fill="#8fe36a"/>' +
      '<path d="M60 94 C79 96 91 86 94 70 C73 70 62 80 60 94 Z" fill="#72cf5c"/>' +
      '<g class="jk-petals">' + petals + '</g>' +
      '<circle cx="60" cy="42" r="20" fill="url(#jk-bg)"/>' +
      // one eye bigger than the other: the whole character in one detail
      '<circle cx="52" cy="37" r="5.6" fill="#fff"/><circle cx="70" cy="38" r="4.4" fill="#fff"/>' +
      '<circle class="jk-budeye" cx="52.8" cy="38" r="3.2" fill="#2d2a4a"/>' +
      '<circle class="jk-budeye" cx="70.6" cy="38.8" r="2.5" fill="#2d2a4a"/>' +
      '<circle cx="49" cy="34" r="2.4" fill="#ff9db0" opacity=".85"/>' +
      '<circle cx="73" cy="35" r="2.4" fill="#ff9db0" opacity=".85"/>' +
      // laughing mouth: wide open, tongue out
      '<path class="jk-budmouth" d="M50 48 Q60 62 70 48 Q60 53 50 48 Z" fill="#2d2a4a"/>' +
      '<ellipse class="jk-budtongue" cx="60" cy="54" rx="4.6" ry="3" fill="#ff6b9d"/>' +
      '</svg>';
  }

  // ==================== The television ====================

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function channelButtons() {
    var out = '<button type="button" class="jk-ch jk-chall active" data-ch="all" onclick="JokeTv.channel(\'all\')">' +
      '<span class="jk-chnum">📺</span><span class="jk-chname">All Channels</span></button>';
    JOKE_CHANNELS.forEach(function (c, i) {
      out += '<button type="button" class="jk-ch" data-ch="' + i + '" style="--jkc:' + c.colour + '" ' +
        'onclick="JokeTv.channel(' + i + ')" title="' + esc(c.tag) + '">' +
        '<span class="jk-chnum">' + c.e + '</span><span class="jk-chname">' + esc(c.n) + '</span></button>';
    });
    return out;
  }

  function tvHtml() {
    return '' +
    '<div class="jk-room no-print">' +
      '<div class="jk-tv">' +
        '<div class="jk-aerial"><i></i><i></i></div>' +
        '<div class="jk-case">' +
          '<div class="jk-screenwrap">' +
            '<div class="jk-screen" id="jk-screen">' +
              '<div class="jk-badge" id="jk-badge">📺 All Channels</div>' +
              '<div class="jk-stage">' +
                '<div class="jk-host">' + tvSproutSvg() + '<span class="jk-name">Sprout</span></div>' +
                '<div class="jk-host jk-buddy" id="jk-buddy">' + budSvg() + '<span class="jk-name">Bud</span>' +
                  '<span class="jk-hahas" id="jk-hahas" aria-hidden="true"></span>' +
                '</div>' +
              '</div>' +
              '<div class="jk-speech" id="jk-setup">Press the big green button and I\'ll tell you a joke!</div>' +
              '<div class="jk-punch" id="jk-punch" hidden></div>' +
            '</div>' +
            '<div class="jk-glass"></div>' +
            '<div class="jk-scan" aria-hidden="true"></div>' +
          '</div>' +
          '<div class="jk-panel">' +
            '<div class="jk-knobs" aria-hidden="true"><i></i><i></i></div>' +
            '<div class="jk-buttons">' +
              '<button type="button" class="jk-btn jk-go" id="jk-go" onclick="JokeTv.go()">▶ Tell me a joke!</button>' +
              '<button type="button" class="jk-btn jk-sound" id="jk-sound" onclick="JokeTv.toggleSound()" aria-label="Turn sound off">🔊</button>' +
            '</div>' +
            '<div class="jk-grille" aria-hidden="true"></div>' +
          '</div>' +
        '</div>' +
        '<div class="jk-legs" aria-hidden="true"><i></i><i></i></div>' +
      '</div>' +
      '<p class="jk-tuner">📻 Tune in to a channel:</p>' +
      '<div class="jk-channels">' + channelButtons() + '</div>' +
      '<p class="jk-count" id="jk-count"></p>' +
    '</div>';
  }

  // The printable joke book: every joke, grouped by channel, punchlines and all.
  function bookHtml() {
    var out = '<div class="jk-book">';
    JOKE_CHANNELS.forEach(function (c, i) {
      var list = JOKES.filter(function (j) { return j.c === i; });
      out += '<div class="jk-booksec" style="--jkc:' + c.colour + '">' +
        '<h3>' + c.e + ' ' + esc(c.n) + ' <span>' + esc(c.tag) + '</span></h3><ol>';
      list.forEach(function (j) {
        out += '<li><span class="jk-q">' + esc(j.q) + '</span><span class="jk-a">' + esc(j.a) + '</span></li>';
      });
      out += '</ol></div>';
    });
    return out + '</div>';
  }

  // ==================== Controller ====================
  // Kept on window because the buttons above are plain onclick attributes, the same way the rest
  // of this app wires its interactive boards.
  var state = { ch: "all", order: [], at: -1, shown: false, muted: false, laughTimer: null };

  function shuffled(list) {
    var r = list.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }
  function pool() {
    return state.ch === "all" ? JOKES : JOKES.filter(function (j) { return j.c === state.ch; });
  }
  // A fresh shuffled running order, so a child hears every joke on a channel before any repeat.
  function reorder() {
    state.order = shuffled(pool());
    state.at = -1;
  }
  function $(id) { return document.getElementById(id); }

  // Sprout is the one holding the microphone, so the whole show is read in Sprout's voice.
  // Bud never speaks here; he only laughs, which is drawn rather than spoken.
  // `id` picks the pre-recorded clip; Voice.play falls back to the device voice without one.
  function say(text, then, id) {
    if (state.muted) { if (then) setTimeout(then, 350); return; }
    if (typeof Voice !== "undefined") { Voice.play(id, text, "sprout", then); return; }
    if (typeof Speech === "undefined" || !Speech.supported()) { if (then) setTimeout(then, 350); return; }
    Speech.speak(text, then, "en", null, "sprout");
  }
  // the clip id is keyed to the joke's position in the JOKES array, not to its text
  function jokeClipId(joke, part) {
    var i = JOKES.indexOf(joke);
    return i < 0 ? null : "jk_" + i + "_" + part;
  }

  function laugh() {
    var buddy = $("jk-buddy"), hahas = $("jk-hahas");
    if (!buddy) return;
    buddy.classList.remove("jk-laughing");
    void buddy.offsetWidth;                       // restart the animation on a repeated punchline
    buddy.classList.add("jk-laughing");
    if (hahas) {
      hahas.innerHTML = "";
      ["HA!", "HEE!", "HA HA!"].forEach(function (h, i) {
        var s = document.createElement("i");
        s.textContent = h;
        s.style.animationDelay = (i * 0.22) + "s";
        hahas.appendChild(s);
      });
    }
    if (state.laughTimer) clearTimeout(state.laughTimer);
    state.laughTimer = setTimeout(function () {
      buddy.classList.remove("jk-laughing");
      if (hahas) hahas.innerHTML = "";
    }, 2600);
  }

  function paintCount() {
    var c = $("jk-count");
    if (!c) return;
    var n = pool().length;
    c.textContent = state.ch === "all"
      ? "😂 " + JOKES.length + " jokes in the show — joke " + Math.max(1, state.at + 1) + " of this round"
      : n + " jokes on this channel — joke " + Math.max(1, state.at + 1) + " of this round";
  }

  var JokeTv = {
    // One button does both jobs: first press reveals the punchline, next press moves on. A child
    // should never have to decide which of two buttons they want.
    go: function () {
      if (state.at >= 0 && !state.shown) { this.reveal(); return; }
      this.next();
    },
    next: function () {
      if (!state.order.length || state.at >= state.order.length - 1) reorder();
      state.at++;
      state.shown = false;
      var j = state.order[state.at];
      var setup = $("jk-setup"), punch = $("jk-punch"), go = $("jk-go");
      if (!setup) return;
      setup.textContent = j.q;
      if (punch) { punch.hidden = true; punch.textContent = ""; }
      if (go) go.textContent = "😆 What's the answer?";
      paintCount();
      say(j.q, null, jokeClipId(j, "q"));
    },
    reveal: function () {
      var j = state.order[state.at];
      if (!j) { this.next(); return; }
      state.shown = true;
      var punch = $("jk-punch"), go = $("jk-go");
      if (punch) { punch.textContent = j.a; punch.hidden = false; }
      if (go) go.textContent = "▶ Next joke!";
      say(j.a, laugh, jokeClipId(j, "a"));
      if (state.muted) laugh();
    },
    channel: function (ch) {
      state.ch = ch;
      reorder();
      var badge = $("jk-badge");
      if (badge) {
        var c = ch === "all" ? null : JOKE_CHANNELS[ch];
        badge.textContent = c ? c.e + " " + c.n : "📺 All Channels";
        badge.style.background = c ? c.colour : "";
      }
      var btns = document.querySelectorAll(".jk-ch");
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("active", btns[i].getAttribute("data-ch") === String(ch));
      }
      this.next();
    },
    toggleSound: function () {
      state.muted = !state.muted;
      try { localStorage.setItem("bs_sproutbot_mute", state.muted ? "1" : "0"); } catch (e) {}
      // muting has to silence a playing RECORDING too, not just the device voice
      if (state.muted && typeof Voice !== "undefined") Voice.stop();
      else if (state.muted && typeof Speech !== "undefined") Speech.stop();
      var b = $("jk-sound");
      if (b) {
        b.textContent = state.muted ? "🔇" : "🔊";
        b.setAttribute("aria-label", state.muted ? "Turn sound on" : "Turn sound off");
      }
    },
    // called by app.js right after the lesson view paints
    mount: function () {
      if (!$("jk-screen")) return;
      try { state.muted = localStorage.getItem("bs_sproutbot_mute") === "1"; } catch (e) { state.muted = false; }
      var b = $("jk-sound");
      if (b && state.muted) { b.textContent = "🔇"; b.setAttribute("aria-label", "Turn sound on"); }
      state.at = -1; state.shown = false;
      reorder();
      paintCount();
    },
    _html: tvHtml,
    _bookHtml: bookHtml,
    _test: { JOKES: JOKES, CHANNELS: JOKE_CHANNELS, pool: pool, state: state }
  };

  window.JokeTv = JokeTv;
  window.JOKES = JOKES;
  window.JOKE_CHANNELS = JOKE_CHANNELS;

  // ==================== Lessons ====================
  if (typeof LESSONS !== "undefined") {
    LESSONS[29] = {
      jokeshow: {
        title: "The Sprout & Bud Joke Show", emoji: "📺",
        intro: "Welcome to the funniest little television in the world! Sprout has the microphone, Bud has the giggles, and there are 100 jokes waiting across ten channels. Press the green button and see if you can guess the punchline before Bud does.",
        learn: [
          "Try to guess the punchline first. Say your guess out loud before you press the button; even a wrong guess is usually funnier than the real one!",
          "A joke has two parts: the SET-UP (what Sprout says first) and the PUNCHLINE (the surprise at the end).",
          "Timing matters. Leave a tiny pause before the punchline, the way Sprout does; it makes the surprise bigger.",
          "Pick a channel to hear only one kind of joke, or leave it on All Channels for a mixed-up show.",
          "Learn your three favourites by heart today, then tell them at dinner tonight. A joke you can remember is a joke you own."
        ],
        jokeTv: true,
        activity: "🎤 Family Comedy Night: everyone picks two jokes from the show and takes a turn as the host. Whoever makes the grown-ups laugh loudest gets to choose pudding. Bonus round: tell one joke in a silly voice."
      },

      jokebook: {
        title: "The Big Joke Book: All 100", emoji: "📖",
        intro: "Every single joke from the show, written out with its punchline, sorted into the ten channels. Print it, fold it, and keep it in your bag for the school bus.",
        learn: [
          "Reading jokes out loud is brilliant reading practice: you have to read ahead to know where the funny bit lands.",
          "Underline your five favourites, then practise them until you don't need the page any more.",
          "Notice how many of these are PUNS — jokes where a word has two meanings at the same time.",
          "A joke you tell badly is still a joke. Keep going even if nobody laughs; comedians call that 'bombing' and it happens to everyone."
        ],
        jokeBook: true,
        activity: "✂️ Joke Jar: cut out ten favourites, fold them up and drop them in a jar in the kitchen. Every dinner, someone pulls one out and reads it. Refill the jar whenever it runs dry."
      },

      howjokeswork: {
        title: "How Jokes Actually Work", emoji: "🎭",
        intro: "Why is a pun funny? Why does a punchline have to come last? Comedy has rules, just like football, and once you know them you can write your own jokes instead of only borrowing them.",
        learn: [
          "A joke has two halves: the SET-UP builds a picture in your head, and the PUNCHLINE breaks that picture in a surprising way.",
          "A PUN uses one word that means two different things. 'Why was the maths book sad? It had too many problems.' Problems means sums AND worries.",
          "A HOMOPHONE joke uses two words that sound the same but mean different things, like 'two tired' and 'too tired'.",
          "The surprise word must come LAST. 'It had too many problems' is funny; 'Too many problems is what it had' is not. Comedians call the last word the tag.",
          "The rule of three: two ordinary things and then a silly one. Bud packs a lunchbox with an apple, a sandwich and a trombone.",
          "Punching up, not down: good jokes are about SITUATIONS or silly ideas, never about how a real person looks or where they come from. A joke that hurts somebody isn't a joke, it's just mean."
        ],
        activity: "✍️ Write your own: pick a word with two meanings (bat, ring, bark, wave, letter, right/write). Ask a question about one meaning, then answer with the other. Test it on three people; if nobody groans, you haven't finished yet!",
        questions: [
          { q: "What are the two parts of a joke called?", a: "The set-up and the punchline" },
          { q: "Which part of a joke comes last?", a: "The punchline" },
          { q: "What is a pun?", a: "A joke using a word with two meanings" },
          { q: "In 'the maths book had too many problems', which word has two meanings?", a: "Problems" },
          { q: "What do we call two words that sound the same but mean different things?", a: "Homophones" },
          { q: "In 'the bicycle was two tired', which two words sound alike?", a: "Two and too" },
          { q: "Where should the surprise word go in a punchline?", a: "At the very end" },
          { q: "What is the comedy 'rule of three'?", a: "Two ordinary things then a silly one" },
          { q: "What do comedians call it when nobody laughs?", a: "Bombing" },
          { q: "Should a joke ever be about how a real person looks?", a: "No" },
          { q: "What should good jokes be about instead of people?", a: "Situations and silly ideas" },
          { q: "In a knock-knock joke, who speaks first?", a: "The person knocking" },
          { q: "What makes a punchline funny?", a: "It is a surprise" },
          { q: "Why does a tiny pause help before the punchline?", a: "It makes the surprise bigger" },
          { q: "'Lettuce in!' plays on which word?", a: "Let us" }
        ]
      }
    };
  }
})();
