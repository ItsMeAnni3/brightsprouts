// BrightSprouts Academy — "Bud Explains It" (part of Kids & Family Jokes, category 29).
// Same show, same TV, same two hosts as the Joke Show (js/jokes.js) — but here Sprout and Bud
// walk through a real science or social studies concept as a short funny back-and-forth, with a
// small animated diagram illustrating the idea, then a 4-question interactive quiz checks what
// actually landed. Every fact is written and can be checked the same way as the rest of the site;
// nothing here is AI-generated video, it's the site's own hand-drawn SVG/CSS animation technique.
//
// Same house rules as js/jokes.js: clean enough for a classroom, funny to a seven-year-old, and
// the humor always comes from Bud's own silliness or the situation — never from how anyone looks,
// where they're from, or how smart they are.
(function () {

  var BUD_TOPICS = [
    {
      key: "photo", subject: "Science", title: "How Plants Make Food", emoji: "🌱", accent: "#2f9e44",
      icon: "photo",
      beats: [
        { who: "sprout", text: "Bud, why have you been standing perfectly still in that sunbeam for ten minutes?" },
        { who: "bud", mood: "proud", text: "I'm PHOTOSYNTHESIZING. I'm basically a plant now." },
        { who: "sprout", text: "...you're a flower. You already ARE a plant. But photosynthesis is a real thing plants do!" },
        { who: "bud", mood: "surprised", text: "Wait, I'm doing SCIENCE right now?" },
        { who: "sprout", text: "Plants take in sunlight, water from their roots, and a gas from the air called carbon dioxide." },
        { who: "bud", mood: "hopeful", text: "...and turn it into a triple-decker sandwich?" },
        { who: "sprout", text: "Close! They turn it into sugar, for food — and they release oxygen, the air WE breathe." },
        { who: "bud", mood: "amazed", text: "So every breath I take, I owe to a PLANT. That's actually incredible." }
      ],
      quiz: [
        { q: "What three things does a plant use to make its own food?", options: ["Sunlight, water, and carbon dioxide", "Sunlight, dirt, and music", "Water, sugar, and sand", "Carbon dioxide, rocks, and rain"], a: 0 },
        { q: "What sweet substance does photosynthesis make for the plant to use as food?", options: ["Salt", "Sugar", "Syrup", "Spice"], a: 1 },
        { q: "What gas do plants release into the air that people need to breathe?", options: ["Carbon dioxide", "Helium", "Oxygen", "Nitrogen"], a: 2 },
        { q: "Where does a plant usually take in water from?", options: ["Its leaves", "Its roots", "Its flowers", "The clouds"], a: 1 }
      ]
    },
    {
      key: "water", subject: "Science", title: "The Water Cycle", emoji: "💧", accent: "#1f6feb",
      icon: "water",
      beats: [
        { who: "sprout", text: "Bud, have you ever really thought about where a raindrop's been before it lands on you?" },
        { who: "bud", text: "It fell out of a cloud. Case closed." },
        { who: "sprout", text: "Sure, but before THAT — that same water might have been in the ocean yesterday!" },
        { who: "bud", mood: "surprised", text: "The OCEAN? How does ocean water end up falling on my head?" },
        { who: "sprout", text: "The sun heats water up until it turns into invisible vapor and rises into the sky. That's evaporation." },
        { who: "bud", text: "So the ocean just... vanishes into nothing?" },
        { who: "sprout", text: "It cools way up high and turns back into tiny droplets that clump into clouds — that's condensation." },
        { who: "bud", mood: "hopeful", text: "And when the cloud gets too heavy, it CRIES on us. I knew clouds were emotional." },
        { who: "sprout", text: "Ha — actually yes! That's called precipitation, and it all flows back to rivers and the ocean to start again." },
        { who: "bud", mood: "amazed", text: "So this raindrop on my nose might've been a whale's bathwater." }
      ],
      quiz: [
        { q: "What is it called when the sun turns water into invisible vapor?", options: ["Evaporation", "Condensation", "Precipitation", "Pollination"], a: 0 },
        { q: "What happens when water vapor cools and turns back into droplets in the sky?", options: ["Evaporation", "Condensation", "Precipitation", "Erosion"], a: 1 },
        { q: "What do we call rain, snow, or hail falling from clouds?", options: ["Evaporation", "Condensation", "Precipitation", "Irrigation"], a: 2 },
        { q: "After it rains, where does the water in the water cycle eventually go?", options: ["It disappears forever", "It flows back to rivers and oceans, and starts again", "It turns into sunlight", "It stays in the cloud forever"], a: 1 }
      ]
    },
    {
      key: "matter", subject: "Science", title: "States of Matter", emoji: "🧊", accent: "#0e7490",
      icon: "matter",
      beats: [
        { who: "sprout", text: "Bud, why are you lying completely still on the floor?" },
        { who: "bud", mood: "proud", text: "I'm being a SOLID. Solids don't move. Very scientific of me." },
        { who: "sprout", text: "Actually, solids DO move — just in tiny amounts! Everything is made of tiny particles." },
        { who: "bud", text: "Tiny particles doing what, exactly?" },
        { who: "sprout", text: "In a solid, particles are packed close together and just jiggle in place. That's why solids keep their shape." },
        { who: "bud", text: "So what am I if I get up and slide around the room?" },
        { who: "sprout", text: "That's more like a liquid! The particles slide past each other, so liquids flow and fill whatever holds them." },
        { who: "bud", mood: "hopeful", text: "And if I zoom around bouncing off the walls?" },
        { who: "sprout", text: "That's a gas! The particles fly around fast and spread out to fill all the space they can." },
        { who: "bud", mood: "amazed", text: "So I've been all three states of matter in ten seconds. I contain multitudes." }
      ],
      quiz: [
        { q: "In a solid, how are the tiny particles arranged?", options: ["Packed close together, barely moving", "Spread far apart, flying fast", "Sliding past each other loosely", "Not there at all"], a: 0 },
        { q: "What state of matter has particles that slide past each other and take the shape of their container?", options: ["Solid", "Liquid", "Gas", "Plasma"], a: 1 },
        { q: "What state of matter is steam?", options: ["Solid", "Liquid", "Gas", "Plasma"], a: 2 },
        { q: "Ice, liquid water, and steam are all different states of the exact same substance. What is it?", options: ["Water", "Air", "Sugar", "Salt"], a: 0 }
      ]
    },
    {
      key: "static", subject: "Science", title: "Static Electricity", emoji: "⚡", accent: "#8a5f2e",
      icon: "static",
      beats: [
        { who: "sprout", text: "Bud! Your petals are all standing straight up — are you okay?" },
        { who: "bud", mood: "surprised", text: "I'm not scared, I'm ELECTRIC. I just rubbed against that wool blanket." },
        { who: "sprout", text: "Ha, that's actually real! It's called static electricity. Everything is made of tiny particles..." },
        { who: "bud", text: "Charge, like... a battery?" },
        { who: "sprout", text: "Kind of! Rubbing two things together, like a balloon on hair, moves tiny charged electrons from one to the other." },
        { who: "bud", text: "So my petals are missing some of these electron guys?" },
        { who: "sprout", text: "And things with the same kind of extra charge push away from each other — that's why your petals spread out!" },
        { who: "bud", mood: "hopeful", text: "Is that also why a balloon sticks to the wall after I rub it on my head?" },
        { who: "sprout", text: "Yes! The balloon picks up extra charge and gets pulled toward the wall's opposite charge, like a tiny magnet." },
        { who: "bud", mood: "amazed", text: "Science is just tiny invisible drama happening everywhere, isn't it." }
      ],
      quiz: [
        { q: "What tiny particles move from one object to another when you rub them together?", options: ["Atoms", "Electrons", "Molecules", "Protons"], a: 1 },
        { q: "Why does a rubbed balloon stick to a wall?", options: ["It gets sticky glue on it", "It picks up a charge that's pulled toward the wall", "It gets wet", "It gets heavier"], a: 1 },
        { q: "What happens when two things carry the same kind of extra electric charge?", options: ["They stick together", "They push away from each other", "They turn into a gas", "They get hot"], a: 1 },
        { q: "Static electricity involves tiny charged particles found in...", options: ["Only batteries", "Everything, since everything is made of tiny particles", "Only metal", "Only plastic"], a: 1 }
      ]
    },
    {
      key: "law", subject: "Social Studies", title: "How a Bill Becomes a Law", emoji: "📜", accent: "#5b21b6",
      icon: "law",
      beats: [
        { who: "sprout", text: "Bud, why do you look so stressed?" },
        { who: "bud", mood: "surprised", text: "I'm trying to pass a law that pizza is a required food group. It's HARDER than it looks." },
        { who: "sprout", text: "Ha! Okay, let's walk through it. First, an idea becomes a bill — a written proposal." },
        { who: "bud", text: "Bill? Who's Bill?" },
        { who: "sprout", text: "Not a person — a bill is just the written idea before it becomes a law. It goes to Congress: the House and the Senate." },
        { who: "bud", text: "So my Pizza Bill has to go through TWO whole groups of people?" },
        { who: "sprout", text: "Yep, both have to read it, debate it, and vote yes. If both agree, it goes to the President." },
        { who: "bud", mood: "hopeful", text: "And the President just stamps it PIZZA APPROVED?" },
        { who: "sprout", text: "The President can sign it into law — or veto it, which means saying no and sending it back." },
        { who: "bud", text: "So one person can still say no to my pizza law, even after all that?" },
        { who: "sprout", text: "Yes — but Congress can even override a veto if enough of them still agree. It's a lot of steps on purpose." },
        { who: "bud", mood: "amazed", text: "So many steps for pizza justice. Worth it." }
      ],
      quiz: [
        { q: "What is a written proposal for a new law called, before it's approved?", options: ["A vote", "A bill", "A veto", "A senate"], a: 1 },
        { q: "What are the two parts of Congress that must both approve a bill?", options: ["The House and the Senate", "The President and the Governor", "The Mayor and the Judge", "The Army and the Navy"], a: 0 },
        { q: "What is it called when the President refuses to sign a bill and sends it back?", options: ["It automatically becomes law anyway", "A veto", "Congress is dissolved", "A recall"], a: 1 },
        { q: "Why does making a law take so many steps?", options: ["To make it more confusing", "So it gets carefully checked before it applies to everyone", "Because Congress likes paperwork", "So the President always wins"], a: 1 }
      ]
    },
    {
      key: "supply", subject: "Social Studies", title: "Supply and Demand", emoji: "💰", accent: "#c9a227",
      icon: "supply",
      beats: [
        { who: "sprout", text: "Bud, why are you selling your comic books for ten dollars each? You bought them for one dollar!" },
        { who: "bud", mood: "proud", text: "Supply and demand, baby. Everyone at school wants this exact comic, and I only have three copies." },
        { who: "sprout", text: "Wait, you actually understand supply and demand?" },
        { who: "bud", mood: "hopeful", text: "Kind of? Explain it like I'm a flower who just wants snacks." },
        { who: "sprout", text: "Okay: supply is how much of something there is. Demand is how much people want it." },
        { who: "bud", text: "So if there's only a little of something, but LOTS of people want it..." },
        { who: "sprout", text: "...the price usually goes up! That's exactly why your rare comic is worth more than a common one." },
        { who: "bud", text: "And if I had a thousand copies of a comic nobody wanted?" },
        { who: "sprout", text: "The price would probably drop — low demand, high supply. Like leftover Halloween candy in December!" },
        { who: "bud", mood: "amazed", text: "So the whole economy is just a really big game of 'how much do people want my stuff?'" }
      ],
      quiz: [
        { q: "What does \"demand\" mean in supply and demand?", options: ["How much of something exists", "How much people want something", "How much something costs to make", "How heavy something is"], a: 1 },
        { q: "If there's very little supply of something, but lots of people want it, what usually happens to the price?", options: ["It goes down", "It stays exactly the same", "It goes up", "It disappears"], a: 2 },
        { q: "What usually happens to price when there's a lot of supply but not much demand?", options: ["It goes up", "It goes down", "It stays the same forever", "It becomes free"], a: 1 },
        { q: "Why do toy prices often go up right before the holidays?", options: ["Toys get more expensive to make", "More people want them at the same time, so demand goes up", "Stores run out of boxes", "It's a government rule"], a: 1 }
      ]
    },
    {
      key: "time", subject: "Social Studies", title: "Time Zones", emoji: "🕐", accent: "#e2453b",
      icon: "time",
      beats: [
        { who: "sprout", text: "Bud, why did you call our friend in Japan shouting 'GOOD MORNING'? It's nighttime here." },
        { who: "bud", mood: "surprised", text: "Exactly! I was correcting them." },
        { who: "sprout", text: "Ha, no — it's actually morning THERE, even though it's night here. That's time zones!" },
        { who: "bud", text: "Time is... different... in different places?" },
        { who: "sprout", text: "Earth is a giant spinning ball, and the sun only lights up one side at a time. Wherever the sun is up, it's day." },
        { who: "bud", text: "So as Earth spins, different places take turns facing the sun?" },
        { who: "sprout", text: "Exactly — and to keep clocks matching the sun, the world is split into 24 time zones, roughly one per hour." },
        { who: "bud", mood: "hopeful", text: "So if I flew around the world fast enough, I could see every time of day at once?" },
        { who: "sprout", text: "Kind of! That's actually why pilots crossing lots of time zones get 'jet lag' — their body clock gets confused." },
        { who: "bud", mood: "proud", text: "Noted. Also — GOOD MORNING." }
      ],
      quiz: [
        { q: "Why isn't it the same time everywhere on Earth at once?", options: ["Earth is flat", "The sun only lights up one side of the spinning Earth at a time", "Clocks are broken", "Every country picks a random time"], a: 1 },
        { q: "About how many time zones is the world divided into?", options: ["4", "12", "24", "100"], a: 2 },
        { q: "When it's daytime where you are, what's happening on the opposite side of the spinning Earth?", options: ["Daytime there too", "Nighttime there", "It's always the same time everywhere", "The sun disappears completely"], a: 1 },
        { q: "What is \"jet lag\" caused by?", options: ["Eating airplane food", "A person's body clock being confused after crossing many time zones", "Flying too high", "Being tired from packing"], a: 1 }
      ]
    },
    {
      key: "barter", subject: "Social Studies", title: "Barter vs. Money", emoji: "🐔", accent: "#2f9e44",
      icon: "barter",
      beats: [
        { who: "sprout", text: "Bud, why do you have three chickens and a kazoo in your backpack?" },
        { who: "bud", mood: "proud", text: "I'm trading them for that video game Max has. Fair deal, right?" },
        { who: "sprout", text: "That's called bartering — trading one thing directly for another, with no money involved!" },
        { who: "bud", text: "So people used to do this ALL the time, before money existed?" },
        { who: "sprout", text: "Yep — but bartering has a big problem. What if Max doesn't want chickens?" },
        { who: "bud", mood: "surprised", text: "...everyone wants chickens." },
        { who: "sprout", text: "Ha, maybe! But imagine you're a farmer who wants shoes, and the shoemaker doesn't want your vegetables. You're stuck!" },
        { who: "bud", text: "So how did money fix that?" },
        { who: "sprout", text: "Money is something everyone agrees is valuable. Sell your vegetables for coins, then use those coins to buy shoes from anyone." },
        { who: "bud", mood: "amazed", text: "So money is a trade that works with ANYONE, not just people who happen to want your exact stuff." },
        { who: "sprout", text: "Exactly — and it makes saving up way easier. Chickens don't keep well in a piggy bank." },
        { who: "bud", mood: "proud", text: "Fair point. Still trying the chicken trade, though." }
      ],
      quiz: [
        { q: "What is it called when you trade one item directly for another, with no money involved?", options: ["Investing", "Bartering", "Saving", "Borrowing"], a: 1 },
        { q: "What is the main problem with bartering?", options: ["It's too fast", "Both people must want exactly what the other person has", "It only works with animals", "It's against the law"], a: 1 },
        { q: "Why is money useful compared to bartering?", options: ["It's heavier than chickens", "Everyone agrees it's valuable, so you can trade with anybody", "It makes trading illegal", "It only works one day a year"], a: 1 },
        { q: "Which of these is an example of bartering?", options: ["Buying a toy with coins", "Trading three chickens directly for a video game", "Saving money in a piggy bank", "Using a debit card"], a: 1 }
      ]
    }
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // ==================== small animated concept icons, one per topic ====================
  // These sit on the dark (#241a3a) stage, so every shape needs its own light fill — a shape that
  // relies on opacity alone disappears into the background. Sizes are deliberately generous: at
  // 140px wide, anything under ~10px of detail turns to mush.
  function iconSvg(kind, accent) {
    var body = "";
    if (kind === "photo") {
      // the sun pulses by SCALE, not opacity: on this dark stage an opacity dip just reads as a
      // muddy brown blob rather than a shining sun.
      body = '<g class="be-sun" style="transform-origin:30px 26px"><circle cx="30" cy="26" r="15" fill="#ffd166"/>' +
        '<g stroke="#ffd166" stroke-width="3" stroke-linecap="round">' +
        '<path d="M30 4 L30 -1"/><path d="M48 12 L52 8"/><path d="M12 12 L8 8"/><path d="M52 34 L57 34"/></g></g>' +
        '<g stroke="#ffd166" stroke-width="2.5" stroke-linecap="round" opacity=".85">' +
        '<path d="M42 36 L58 48"/><path d="M40 46 L56 56"/></g>' +
        '<path d="M75 96 L75 52" stroke="#4a9c58" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M75 66 C55 64 45 51 43 36 C65 38 75 51 75 66 Z" fill="#66c778"/>' +
        '<path d="M75 62 C95 60 105 47 107 32 C85 34 75 47 75 62 Z" fill="#8fe36a"/>' +
        '<ellipse cx="75" cy="96" rx="16" ry="5" fill="#8a6a42"/>';
    } else if (kind === "water") {
      body = '<circle cx="98" cy="20" r="11" fill="#ffd166"/>' +
        '<ellipse cx="46" cy="30" rx="28" ry="15" fill="#eaf3ff"/><ellipse cx="66" cy="25" rx="19" ry="12" fill="#fff"/>' +
        // three teardrops, spaced so they read as falling rain rather than a pair of legs
        '<path d="M30 56 q-6 10 0 15 a6 6 0 0 0 12 0 q6 -5 0 -15 z" fill="#4d96ff" class="be-drip"/>' +
        '<path d="M56 62 q-6 10 0 15 a6 6 0 0 0 12 0 q6 -5 0 -15 z" fill="#4d96ff" class="be-drip" style="animation-delay:.4s"/>' +
        '<path d="M82 56 q-6 10 0 15 a6 6 0 0 0 12 0 q6 -5 0 -15 z" fill="#4d96ff" class="be-drip" style="animation-delay:.8s"/>' +
        // the sea it all returns to, plus the rising-vapour arrow that closes the cycle
        '<path d="M4 90 q14 -7 28 0 t28 0 t28 0 t28 0 L116 100 L4 100 Z" fill="#2f8fc4"/>' +
        '<path d="M108 84 q6 -18 -2 -30" stroke="#aee6ff" stroke-width="3" fill="none" stroke-linecap="round" marker-end="url(#be-arrow)" class="be-swap"/>';
    } else if (kind === "matter") {
      var cell = function (x, label, fill, cls, pts) {
        var dots = pts.map(function (p, i) {
          return '<circle cx="' + (x + p[0]) + '" cy="' + (28 + p[1]) + '" r="4" fill="' + fill + '"' +
            (cls ? ' class="' + cls + '" style="animation-delay:' + (i * 0.18) + 's"' : '') + '/>';
        }).join("");
        return '<rect x="' + x + '" y="28" width="32" height="34" rx="5" fill="#fff" opacity=".12"/>' +
          '<rect x="' + x + '" y="28" width="32" height="34" rx="5" fill="none" stroke="' + fill + '" stroke-width="2"/>' +
          dots + '<text x="' + (x + 16) + '" y="78" font-size="11" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">' + label + '</text>';
      };
      body = cell(6, "solid", "#aee6ff", "", [[8, 8], [22, 8], [8, 22], [22, 22]]) +
        cell(44, "liquid", "#4d96ff", "be-jiggle", [[9, 10], [23, 14], [14, 24]]) +
        cell(82, "gas", "#ff9f68", "be-zoom", [[8, 8], [24, 10], [16, 24]]);
    } else if (kind === "static") {
      // a balloon rubbed on hair: the hair strands lifting toward it IS the concept
      body = '<g class="be-spark"><g stroke="#ffd166" stroke-width="2.6" stroke-linecap="round" fill="none">' +
        '<path d="M34 62 q6 -18 22 -26"/><path d="M32 72 q10 -16 26 -20"/><path d="M32 82 q12 -12 28 -12"/></g></g>' +
        '<circle cx="26" cy="80" r="16" fill="#ffe3c2"/>' +
        '<path d="M12 74 q14 -14 28 0" fill="#8a5f2e"/>' +
        '<ellipse cx="80" cy="46" rx="24" ry="29" fill="#ff6b9d"/>' +
        '<path d="M80 75 l-4 6 8 0 z" fill="#d6336c"/>' +
        '<path d="M80 81 q8 8 2 16" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>' +
        '<ellipse cx="72" cy="36" rx="6" ry="9" fill="#fff" opacity=".35" transform="rotate(-20 72 36)"/>';
    } else if (kind === "law") {
      // an idea (scroll) travelling between two chambers, then to the desk to be signed
      var dome = function (x, label) {
        return '<g><path d="M' + (x - 16) + ' 46 q16 -18 32 0 z" fill="#c9baff"/>' +
          '<rect x="' + (x - 18) + '" y="46" width="36" height="26" rx="2" fill="#e6dcff"/>' +
          '<g fill="#a78bfa">' +
          '<rect x="' + (x - 13) + '" y="52" width="4" height="20"/><rect x="' + (x - 3) + '" y="52" width="4" height="20"/>' +
          '<rect x="' + (x + 7) + '" y="52" width="4" height="20"/></g>' +
          '<rect x="' + (x - 20) + '" y="72" width="40" height="4" rx="1" fill="#c9baff"/>' +
          '<text x="' + x + '" y="90" font-size="11" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">' + label + '</text></g>';
      };
      body = dome(24, "House") + dome(96, "Senate") +
        '<g class="be-scroll"><rect x="50" y="30" width="20" height="15" rx="3" fill="#fff8e1" stroke="' + accent + '" stroke-width="2"/>' +
        '<path d="M54 35 h12 M54 39 h9" stroke="' + accent + '" stroke-width="1.6" stroke-linecap="round"/></g>';
    } else if (kind === "supply") {
      // a balance: few items on one side, a rising price tag on the other
      body = '<path d="M24 88 L96 88" stroke="#c9a227" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M60 88 L60 34" stroke="#c9a227" stroke-width="4"/>' +
        '<g class="be-seesaw" style="transform-origin:60px 34px">' +
          '<path d="M18 46 L102 22" stroke="#e8cf7a" stroke-width="4" stroke-linecap="round"/>' +
          '<circle cx="20" cy="45" r="10" fill="#ff9f68"/><text x="20" y="49" font-size="10" text-anchor="middle" fill="#241a3a" font-family="Verdana,sans-serif">1</text>' +
          '<circle cx="100" cy="23" r="10" fill="#8ce99a"/><text x="100" y="27" font-size="10" text-anchor="middle" fill="#241a3a" font-family="Verdana,sans-serif">$$</text>' +
        '</g>' +
        '<text x="20" y="78" font-size="10" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">few</text>' +
        '<text x="100" y="78" font-size="10" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">price</text>';
    } else if (kind === "time") {
      // a spinning Earth, lit on one side only: day here, night there
      body = '<circle cx="60" cy="50" r="32" fill="#1f4058"/>' +
        '<path d="M60 18 a32 32 0 0 1 0 64 z" fill="#4d96ff"/>' +
        '<g class="be-spin"><path d="M44 34 q10 6 4 16 q-8 -2 -4 -16 z" fill="#8ce99a"/>' +
        '<path d="M70 60 q12 4 8 14 q-10 0 -8 -14 z" fill="#8ce99a"/></g>' +
        '<circle cx="60" cy="50" r="32" fill="none" stroke="#aee6ff" stroke-width="2"/>' +
        '<circle cx="106" cy="22" r="9" fill="#ffd166"/>' +
        '<text x="86" y="96" font-size="10" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">day</text>' +
        '<text x="34" y="96" font-size="10" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">night</text>';
    } else if (kind === "barter") {
      // chicken swapped directly for shoes (barter), versus a coin that works with anyone
      body = '<text x="26" y="52" font-size="26" text-anchor="middle">🐔</text>' +
        '<path d="M42 44 L62 44" stroke="#8ce99a" stroke-width="3" marker-end="url(#be-arrow)" class="be-swap"/>' +
        '<text x="80" y="52" font-size="24" text-anchor="middle">👞</text>' +
        '<text x="60" y="72" font-size="9" fill="#dcd6f7" text-anchor="middle" font-family="Verdana,sans-serif">barter needs a match</text>' +
        '<circle cx="60" cy="86" r="10" fill="#ffd166"/>' +
        '<text x="60" y="90" font-size="10" text-anchor="middle" fill="#8a6300" font-family="Verdana,sans-serif">$</text>';
    }
    return '<svg viewBox="0 0 120 100" class="be-icon" role="img" aria-hidden="true">' +
      '<defs><marker id="be-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">' +
      '<path d="M0 0 L8 4 L0 8 Z" fill="' + accent + '"/></marker></defs>' + body + '</svg>';
  }

  // ==================== the two hosts, reused verbatim from the Joke Show ====================
  function tvSproutSvg() {
    return '<svg class="jk-sprout" viewBox="0 0 120 132" role="img" aria-label="Sprout the seedling">' +
      '<defs><radialGradient id="be-sg" cx="42%" cy="32%" r="72%">' +
        '<stop offset="0" stop-color="#95e3a6"/><stop offset="1" stop-color="#57bd69"/></radialGradient></defs>' +
      '<ellipse cx="60" cy="121" rx="21" ry="6.5" fill="#8a6a42"/>' +
      '<path d="M60 121 L60 70" stroke="#4a9c58" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M60 90 C36 92 17 76 13 53 C42 55 60 70 60 90 Z" fill="#8fe36a"/>' +
      '<path d="M60 90 C84 92 103 76 107 53 C78 55 60 70 60 90 Z" fill="#72cf5c"/>' +
      '<ellipse cx="60" cy="44" rx="27" ry="26" fill="url(#be-sg)"/>' +
      '<ellipse cx="60" cy="54" rx="16" ry="11" fill="#a6ecb4" opacity=".5"/>' +
      '<circle cx="42" cy="50" r="5" fill="#ff9db0" opacity=".9"/><circle cx="78" cy="50" r="5" fill="#ff9db0" opacity=".9"/>' +
      '<ellipse cx="50" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/><ellipse cx="70" cy="40" rx="4.3" ry="5.6" fill="#2d2a4a"/>' +
      '<circle cx="51.6" cy="37.4" r="1.6" fill="#fff"/><circle cx="71.6" cy="37.4" r="1.6" fill="#fff"/>' +
      '<ellipse cx="60" cy="55" rx="6.5" ry="3.2" fill="#2d2a4a"/>' +
      '</svg>';
  }
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
      '<defs><radialGradient id="be-bg" cx="40%" cy="34%" r="70%">' +
        '<stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#f2b705"/></radialGradient></defs>' +
      '<ellipse cx="60" cy="121" rx="20" ry="6.5" fill="#8a6a42"/>' +
      '<path d="M60 121 Q56 96 60 70" stroke="#4a9c58" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M60 100 C40 102 28 92 25 76 C46 76 58 86 60 100 Z" fill="#8fe36a"/>' +
      '<path d="M60 94 C79 96 91 86 94 70 C73 70 62 80 60 94 Z" fill="#72cf5c"/>' +
      '<g class="jk-petals">' + petals + '</g>' +
      '<circle cx="60" cy="42" r="20" fill="url(#be-bg)"/>' +
      '<circle cx="52" cy="37" r="5.6" fill="#fff"/><circle cx="70" cy="38" r="4.4" fill="#fff"/>' +
      '<circle class="jk-budeye" cx="52.8" cy="38" r="3.2" fill="#2d2a4a"/>' +
      '<circle class="jk-budeye" cx="70.6" cy="38.8" r="2.5" fill="#2d2a4a"/>' +
      '<circle cx="49" cy="34" r="2.4" fill="#ff9db0" opacity=".85"/><circle cx="73" cy="35" r="2.4" fill="#ff9db0" opacity=".85"/>' +
      '<path class="jk-budmouth" d="M50 48 Q60 62 70 48 Q60 53 50 48 Z" fill="#2d2a4a"/>' +
      '<ellipse class="jk-budtongue" cx="60" cy="54" rx="4.6" ry="3" fill="#ff6b9d"/>' +
      '</svg>';
  }

  // ==================== controller ====================
  var state = { topic: null, beatIdx: 0, quizIdx: 0, quizCorrect: 0, quizPicked: null, showQuiz: false, done: false };

  function $(id) { return document.getElementById(id); }
  function topicByKey(k) { return BUD_TOPICS.filter(function (t) { return t.key === k; })[0]; }

  // Each beat already records who is talking, so the scene is genuinely voiced as two characters
  // rather than one narrator reading both parts. `id` selects the pre-recorded clip; without one
  // (or offline) Voice.play falls back to the device voice with the same character role.
  function say(text, then, who, id) {
    var role = who === "bud" ? "bud" : "sprout";
    if (typeof Voice !== "undefined") { Voice.play(id, text, role, then); return; }
    if (typeof Speech === "undefined" || !Speech.supported()) { if (then) setTimeout(then, 250); return; }
    Speech.speak(text, then, "en", null, role);
  }

  function pickerHtml() {
    return '<div class="be-picker">' + BUD_TOPICS.map(function (t) {
      return '<div class="be-tile" style="--bec:' + t.accent + '" onclick="BudExplains.pick(\'' + t.key + '\')">' +
        '<div class="be-tileicon">' + t.emoji + '</div><h3>' + esc(t.title) + '</h3>' +
        '<span class="be-tilesubj">' + esc(t.subject) + '</span>' +
        '<button type="button" class="btn btn-primary btn-sm">Watch &amp; Learn</button></div>';
    }).join("") + '</div>';
  }

  // Every screen after "Watch & Learn" carries this, so a child is never stuck inside a topic
  // they didn't mean to open and can always get back to the list.
  function backBar() {
    return '<div class="be-back"><button type="button" class="btn btn-ghost btn-sm" onclick="BudExplains.menu()">← All Topics</button></div>';
  }

  function beatHtml() {
    var t = state.topic, b = t.beats[state.beatIdx];
    var speaker = b.who === "bud" ? "Bud" : "Sprout";
    return '<div class="be-stage" style="--bec:' + t.accent + '">' +
      backBar() +
      '<div class="jk-stage">' +
        '<div class="jk-host' + (b.who === "sprout" ? " be-talking" : "") + '">' + tvSproutSvg() + '<span class="jk-name">Sprout</span></div>' +
        '<div class="jk-host jk-buddy' + (b.who === "bud" ? " be-talking" : "") + (b.mood === "amazed" || b.mood === "surprised" ? " jk-laughing" : "") + '">' + budSvg() + '<span class="jk-name">Bud</span></div>' +
      '</div>' +
      '<div class="be-diagram">' + iconSvg(t.icon, t.accent) + '</div>' +
      '<div class="be-line"><b>' + speaker + ':</b> ' + esc(b.text) + '</div>' +
      '<div class="be-progress">' + t.beats.map(function (_, i) {
        return '<span class="pgdot ' + (i < state.beatIdx ? "past" : i === state.beatIdx ? "now" : "") + '"></span>';
      }).join("") + '</div>' +
      '<div class="be-nav">' +
        (state.beatIdx > 0 ? '<button type="button" class="btn btn-secondary" onclick="BudExplains.prevBeat()">◀ Back</button>' : '') +
        '<button type="button" class="btn btn-primary" onclick="BudExplains.nextBeat()">' +
          (state.beatIdx < t.beats.length - 1 ? "Next ▶" : "🧠 Take the Quiz") + '</button>' +
      '</div>' +
    '</div>';
  }

  function quizHtml() {
    var t = state.topic, q = t.quiz[state.quizIdx];
    var picked = state.quizPicked;
    var optsHtml = q.options.map(function (o, i) {
      var cls = "be-optbtn";
      if (picked !== null) {
        if (i === q.a) cls += " be-correct";
        else if (i === picked) cls += " be-wrong";
      }
      return '<button type="button" class="' + cls + '" ' + (picked !== null ? "disabled" : "") +
        ' onclick="BudExplains.answer(' + i + ')">' + esc(o) + '</button>';
    }).join("");
    return '<div class="be-stage" style="--bec:' + t.accent + '">' +
      backBar() +
      '<h3 class="pgstagename">Quiz ' + (state.quizIdx + 1) + ' of ' + t.quiz.length + ': ' + esc(t.title) + '</h3>' +
      '<div class="be-line">' + esc(q.q) + '</div>' +
      '<div class="be-opts">' + optsHtml + '</div>' +
      (picked !== null ? '<button type="button" class="btn btn-primary" onclick="BudExplains.nextQuiz()">' +
        (state.quizIdx < t.quiz.length - 1 ? "Next Question ▶" : "See My Score") + '</button>' : '') +
    '</div>';
  }

  function doneHtml() {
    var t = state.topic;
    return '<div class="be-stage" style="--bec:' + t.accent + '">' +
      '<div class="jk-stage"><div class="jk-host">' + tvSproutSvg() + '<span class="jk-name">Sprout</span></div>' +
        '<div class="jk-host jk-buddy jk-laughing">' + budSvg() + '<span class="jk-name">Bud</span></div></div>' +
      '<div class="pgwin">🎉 You got ' + state.quizCorrect + ' of ' + t.quiz.length + ' right on ' + esc(t.title) + '!</div>' +
      '<button type="button" class="btn btn-primary" onclick="BudExplains.pick(\'' + t.key + '\')">🔁 Watch again</button>' +
      '<button type="button" class="btn btn-ghost" style="margin-top:8px" onclick="BudExplains.menu()">🎬 Pick another topic</button>' +
    '</div>';
  }

  var BudExplains = {
    pick: function (key) {
      var t = topicByKey(key);
      if (!t) return;
      state = { topic: t, beatIdx: 0, quizIdx: 0, quizCorrect: 0, quizPicked: null, showQuiz: false, done: false };
      paint();
      say(t.beats[0].text, null, t.beats[0].who, "be_" + t.key + "_0");
    },
    menu: function () {
      // Leaving mid-scene must silence the narration too; Speech.speak() only cancels itself when
      // the NEXT line starts, and going back to the list never starts one.
      if (typeof Voice !== "undefined") Voice.stop();
      else if (typeof Speech !== "undefined" && Speech.supported()) Speech.stop();
      state = { topic: null, beatIdx: 0, quizIdx: 0, quizCorrect: 0, quizPicked: null, showQuiz: false, done: false };
      paint();
    },
    nextBeat: function () {
      var t = state.topic;
      if (state.beatIdx < t.beats.length - 1) {
        state.beatIdx++;
        paint();
        say(t.beats[state.beatIdx].text, null, t.beats[state.beatIdx].who, "be_" + t.key + "_" + state.beatIdx);
      } else {
        state.showQuiz = true;
        paint();
      }
    },
    // Step back one line, for a child who missed what was said. Stops at the first beat.
    prevBeat: function () {
      if (!state.topic || state.beatIdx <= 0) return;
      state.beatIdx--;
      paint();
      say(state.topic.beats[state.beatIdx].text, null, state.topic.beats[state.beatIdx].who, "be_" + state.topic.key + "_" + state.beatIdx);
    },
    answer: function (i) {
      if (state.quizPicked !== null) return;
      state.quizPicked = i;
      if (i === state.topic.quiz[state.quizIdx].a) state.quizCorrect++;
      paint();
    },
    nextQuiz: function () {
      var t = state.topic;
      if (state.quizIdx < t.quiz.length - 1) {
        state.quizIdx++;
        state.quizPicked = null;
        paint();
      } else {
        state.done = true;
        paint();
        if (typeof rewardOnce === "function") {
          rewardOnce("budexplains-" + t.key, 2, "🎬 +2 stars: you learned about " + t.title + "!");
          var done;
          try { done = JSON.parse(localStorage.getItem("bs_rw_done")) || {}; } catch (e) { done = {}; }
          if (BUD_TOPICS.every(function (x) { return done["budexplains-" + x.key]; }) && typeof earnBadge === "function") {
            earnBadge("budscholar");
          }
        }
      }
    },
    mount: function () { /* nothing to wire up on mount; every control is a plain onclick */ },
    _html: function () {
      if (!state.topic) return '<div id="be-root">' + pickerHtml() + '</div>';
      if (state.done) return '<div id="be-root">' + doneHtml() + '</div>';
      return '<div id="be-root">' + (state.showQuiz ? quizHtml() : beatHtml()) + '</div>';
    },
    _test: { TOPICS: BUD_TOPICS, state: function () { return state; }, reset: function () { state = { topic: null, beatIdx: 0, quizIdx: 0, quizCorrect: 0, quizPicked: null, showQuiz: false, done: false }; } }
  };

  function paint() {
    var root = $("be-root");
    if (root) root.outerHTML = BudExplains._html();
  }

  window.BudExplains = BudExplains;
  window.BUD_TOPICS = BUD_TOPICS;

  if (typeof LESSONS !== "undefined" && LESSONS[29]) {
    LESSONS[29].budexplains = {
      title: "Bud Explains It", emoji: "🎬",
      intro: "Same TV, same hosts, a new segment: Sprout and Bud walk through a real science or social studies idea as a funny back-and-forth, with a little animated diagram, then quiz you on what actually stuck.",
      learn: [
        "Watch the whole scene before you guess the quiz answers — Bud usually gets it a little bit wrong first, on purpose, so watch for the moment Sprout corrects him.",
        "Each topic ends with 4 quick questions. Getting one wrong just shows you the right answer and moves on — there's no penalty, so guess freely!",
        "Try explaining the idea back to a grown-up in your own words afterward. If you can make THEM laugh while explaining it, you really understood it."
      ],
      budExplains: true,
      activity: "🎬 Family Rerun: after watching a topic, act out Sprout and Bud's conversation with a family member and see if you can explain the real idea by the end, jokes included."
    };
  }
})();
