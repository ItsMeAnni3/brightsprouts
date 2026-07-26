// BrightSprouts Academy: Paleontology category (LESSONS[26]): fossils, dinosaurs & prehistoric
// life for grade-schoolers, K-12 appropriate. Facts checked against Britannica, USGS, NHM London,
// Smithsonian and current paleontology research (Mesozoic dates, K-Pg impact, dinosaur/bird lineage,
// and the "not a dinosaur" groups (pterosaurs and marine reptiles) are common misconceptions).
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';

  // A tiny auto-turning 3D diorama built from three flat SVG layers held apart in Z and spun
  // together with a CSS keyframe (see .paleo3d in styles.css); no drag needed, screen-only bonus.
  var DINO_3D = '<div class="paleo3d no-print" aria-hidden="true"><div class="paleo3d-stage"><div class="paleo3d-scene">'
    + '<div class="p3-layer p3-back"><svg viewBox="0 0 240 170">'
    + '<defs><linearGradient id="p3sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3ff"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient></defs>'
    + '<rect width="240" height="170" fill="url(#p3sky)"/><circle cx="200" cy="34" r="18" fill="#ffd166"/>'
    + '<path d="M40 150 L90 70 L140 150 Z" fill="#8a7566"/><path d="M100 150 L118 118 L136 150 Z" fill="#a3763f"/>'
    + '<ellipse cx="58" cy="40" rx="22" ry="9" fill="#fff" opacity=".8"/><ellipse cx="150" cy="58" rx="18" ry="7" fill="#fff" opacity=".7"/>'
    + '<rect x="0" y="150" width="240" height="20" fill="#7fae5a"/></svg></div>'
    + '<div class="p3-layer p3-mid"><svg viewBox="0 0 240 170">'
    + '<path d="M70 150 L40 128 L82 132 Z" fill="#4f7a45"/><ellipse cx="115" cy="112" rx="38" ry="28" fill="#5c8c50"/>'
    + '<rect x="150" y="70" width="10" height="14" rx="4" fill="#4f7a45"/><ellipse cx="168" cy="82" rx="24" ry="18" fill="#5c8c50"/>'
    + '<path d="M148 92 L192 96 L150 100 Z" fill="#3f6b39"/>'
    + '<g fill="#fff"><polygon points="150,93 156,97 150,99"/><polygon points="160,95 166,99 160,101"/><polygon points="170,96 176,100 170,102"/></g>'
    + '<circle cx="178" cy="76" r="3" fill="#2d2a4a"/><rect x="92" y="140" width="16" height="30" rx="6" fill="#4f7a45"/>'
    + '<rect x="128" y="140" width="16" height="30" rx="6" fill="#456b3c"/></svg></div>'
    + '<div class="p3-layer p3-front"><svg viewBox="0 0 240 170">'
    + '<ellipse cx="50" cy="162" rx="46" ry="14" fill="#a3763f"/>'
    + '<path d="M40 162 L30 130 L42 150 L48 122 L56 150 L64 132 L58 162 Z" fill="#7fae5a"/>'
    + '<ellipse cx="190" cy="164" rx="34" ry="10" fill="#8a6a42"/>'
    + '<g fill="#f4efe4"><ellipse cx="185" cy="156" rx="6" ry="5"/><ellipse cx="205" cy="156" rx="6" ry="5"/><rect x="183" y="153" width="24" height="6" rx="3"/></g>'
    + '</svg></div>'
    + '</div></div><p class="paleo3d-cap">🦖 A little 3D scene: watch it turn!</p></div>';

  LESSONS[26] = {
    digsite: {
      title: "Fossils & Digging Up the Past", emoji: "🦴",
      intro: "Every fossil is a message from the deep past. Paleontologists are scientists who dig them up, piece them together, and read the story they tell about ancient life.",
      learn: [
        "A fossil is the preserved remains or trace of a living thing from long ago: bones, shells, footprints, even leaf prints in stone.",
        "Most fossils form in sedimentary rock: a plant or animal is buried in mud, sand or ash, and minerals slowly replace it over thousands or millions of years.",
        "Body fossils preserve an actual part of the organism, like a bone or shell. Trace fossils preserve evidence it left behind, like footprints, burrows, even fossilized poop, called a coprolite!",
        "The deepest, oldest rock layers were laid down first, so fossils found deeper are usually older, a rule called the law of superposition.",
        "Paleontologists carefully dig fossils out, wrap fragile bones in protective plaster jackets, then study and rebuild them in a laboratory or museum."
      ],
      activity: "🦴 Cookie-Dough Excavation (with an adult): Freeze a few chocolate chips or small toys inside a block of ice, or bury them in a tray of flour. Use a toothpick and a small paintbrush to carefully dig them out, just like a real fossil dig!",
      diagram: '<svg viewBox="0 0 340 170"><rect width="340" height="170" rx="14" fill="#f7f4ee"/>'
        + '<rect x="20" y="18" width="230" height="32" rx="6" fill="#e7d9b8"/><rect x="20" y="50" width="230" height="32" rx="6" fill="#d9b46a"/>'
        + '<rect x="20" y="82" width="230" height="32" rx="6" fill="#b5905a"/><rect x="20" y="114" width="230" height="32" rx="6" fill="#8a6a42"/>'
        + '<ellipse cx="70" cy="66" rx="13" ry="8" fill="#6a5238"/><path d="M150 96 q10 12 22 0" stroke="#5a4530" stroke-width="3" fill="none"/>'
        + '<ellipse cx="120" cy="130" rx="15" ry="9" fill="#4a3624"/>'
        + '<defs><marker id="dsA" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#8a86a8"/></marker></defs>'
        + '<line x1="272" y1="22" x2="272" y2="140" stroke="#8a86a8" stroke-width="2" marker-end="url(#dsA)"/>'
        + '<g ' + LB + '><text x="278" y="26">Younger</text><text x="278" y="144">Older</text></g></svg>',
      questions: [
        { q: "The preserved remains or trace of an ancient living thing is a ____.", a: "Fossil" },
        { q: "A scientist who studies fossils is called a ____.", a: "Paleontologist" },
        { q: "In which kind of rock do most fossils form?", a: "Sedimentary rock" },
        { q: "A footprint left in mud that later turned to stone is a kind of ____ fossil.", a: "Trace" },
        { q: "A fossil of an actual bone or shell is called a ____ fossil.", a: "Body" },
        { q: "Fossilized ancient droppings are called a ____.", a: "Coprolite" },
        { q: "In undisturbed rock layers, are the deepest layers usually older or younger?", a: "Older" },
        { q: "The rule that deeper layers are older is the law of ____.", a: "Superposition" },
        { q: "About how long can it take for a fossil to form?", a: "Thousands to millions of years" },
        { q: "What do paleontologists wrap fragile fossil bones in?", a: "Plaster jackets" },
        { q: "Where do scientists rebuild and study fossils after a dig?", a: "A lab or museum" },
        { q: "Name two things, besides bones, that can fossilize.", a: "Shells and footprints" }
      ]
    },
    dinosaurs: {
      title: "Dinosaurs", emoji: "🦖",
      intro: "Dinosaurs walked the Earth for over 160 million years, far longer than humans have existed! Let's meet some famous ones and clear up a few myths.",
      learn: [
        "Dinosaurs lived during the Mesozoic Era, from about 252 to 66 million years ago, split into three periods: the Triassic, Jurassic and Cretaceous.",
        "Dinosaurs came in every size, from chicken-sized hunters to massive long-necked giants: not all of them were huge!",
        "Meat-eating dinosaurs, called theropods, include Tyrannosaurus rex and the much smaller, turkey-sized Velociraptor. Plant-eaters like Triceratops and Stegosaurus defended themselves with horns, plates or frills instead.",
        "Non-avian dinosaurs died out about 66 million years ago, long before the first humans existed, so people and T. rex never actually met.",
        "Fossils of small feathered theropods show that birds are the living descendants of meat-eating dinosaurs, so in a real sense, birds are dinosaurs too!"
      ],
      activity: "🦕 Dino Sort: Draw or cut out pictures of dinosaurs and sort them into two piles: 'meat-eater' (sharp teeth) and 'plant-eater' (flat teeth, horns, or plates). Which pile is bigger?",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<g><path d="M46 120 L18 96 L58 104 Z" fill="#8a7566"/><ellipse cx="96" cy="98" rx="34" ry="24" fill="#9a8676"/>'
        + '<rect x="86" y="120" width="14" height="28" rx="5" fill="#7a6656"/><ellipse cx="140" cy="76" rx="19" ry="15" fill="#9a8676"/>'
        + '<path d="M122 84 L160 88 L124 92 Z" fill="#6a5646"/>'
        + '<g fill="#fff"><polygon points="126,85 131,89 126,91"/><polygon points="136,86 141,90 136,92"/></g>'
        + '<circle cx="148" cy="72" r="2.6" fill="#2d2a4a"/></g>'
        + '<g><ellipse cx="252" cy="102" rx="40" ry="26" fill="#7fae5a"/><rect x="222" y="124" width="13" height="26" rx="5" fill="#5e8a48"/>'
        + '<rect x="270" y="124" width="13" height="26" rx="5" fill="#5e8a48"/><path d="M300 96 q22 -4 22 14 q0 14 -20 8 Z" fill="#6a9c5a"/>'
        + '<g fill="#e9e2cf"><polygon points="212,84 220,100 224,82"/><polygon points="226,78 232,98 238,80"/><polygon points="242,80 248,98 254,82"/></g>'
        + '<path d="M198 108 L176 98 L200 92 Z" fill="#5e8a48"/></g>'
        + '<g font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a" text-anchor="middle">'
        + '<text x="96" y="150">🍖 Meat-eater</text><text x="252" y="150">🌿 Plant-eater</text></g></svg>'
        + DINO_3D,
      questions: [
        { q: "Dinosaurs lived during which geologic era?", a: "The Mesozoic Era" },
        { q: "Name the three periods of the Mesozoic Era, in order.", a: "Triassic, Jurassic, Cretaceous" },
        { q: "About how many years ago did non-avian dinosaurs go extinct?", a: "66 million years ago" },
        { q: "Meat-eating dinosaurs are called ____.", a: "Theropods" },
        { q: "Triceratops mainly used its horns and frill for ____.", a: "Defense" },
        { q: "Which dinosaur had rows of bony plates along its back?", a: "Stegosaurus" },
        { q: "Which famous dinosaur was a large Cretaceous meat-eater?", a: "Tyrannosaurus rex" },
        { q: "Were all dinosaurs enormous?", a: "No, sizes varied widely" },
        { q: "Did humans and non-avian dinosaurs ever live at the same time?", a: "No, never" },
        { q: "Modern ____ are the living descendants of small meat-eating dinosaurs.", a: "Birds" },
        { q: "Velociraptor was roughly the size of a ____.", a: "Turkey" },
        { q: "Which period came first: Triassic, Jurassic, or Cretaceous?", a: "Triassic" }
      ]
    },
    prehistoric: {
      title: "Prehistoric Life", emoji: "🐚",
      intro: "Not every prehistoric creature was a dinosaur! Long before, and long after, the dinosaurs, other amazing animals ruled the land, sea and sky.",
      learn: [
        "Trilobites were hard-shelled sea creatures that appeared over 500 million years ago, hundreds of millions of years before the first dinosaurs, and died out about 252 million years ago.",
        "Plesiosaurs (long-necked) and ichthyosaurs (dolphin-shaped) were marine reptiles that swam the seas alongside the dinosaurs, but they were not dinosaurs themselves.",
        "Mosasaurs were giant marine lizards, close relatives of today's monitor lizards, like the Komodo dragon.",
        "Pterosaurs, like Pteranodon, were flying reptiles, not dinosaurs, with wings made of skin stretched along one very long finger bone.",
        "Long after the dinosaurs were gone, the Ice Age brought woolly mammoths, saber-toothed cats and giant ground sloths, which lived alongside early humans."
      ],
      activity: "🐾 Timeline Ribbon: On a long strip of paper, mark trilobites near one end, dinosaurs and marine and flying reptiles in the middle, and Ice Age mammals near the other end. Measure the gaps: that's how much time separates them!",
      diagram: '<svg viewBox="0 0 340 150"><rect width="340" height="150" rx="14" fill="#f7f4ee"/>'
        + '<rect x="20" y="90" width="90" height="20" rx="8" fill="#8aa9c9"/><rect x="110" y="90" width="140" height="20" rx="8" fill="#7fae5a"/>'
        + '<rect x="250" y="90" width="70" height="20" rx="8" fill="#d9b46a"/>'
        + '<g font-family="Fredoka, system-ui, sans-serif" font-size="22" text-anchor="middle"><text x="65" y="76">🐚</text><text x="150" y="76">🦖</text><text x="220" y="76">🦣</text></g>'
        + '<g font-family="Fredoka, system-ui, sans-serif" font-size="10" fill="#2d2a4a" text-anchor="middle">'
        + '<text x="65" y="128">Trilobites</text><text x="180" y="128">Dinosaurs &amp; reptiles</text><text x="285" y="128">Ice Age mammals</text>'
        + '<text x="110" y="142" font-size="9" fill="#6a668c">252 mya</text><text x="250" y="142" font-size="9" fill="#6a668c">66 mya</text>'
        + '<text x="322" y="142" font-size="9" fill="#6a668c" text-anchor="end">Today</text></g></svg>',
      questions: [
        { q: "In what habitat did trilobites live?", a: "The sea (ocean)" },
        { q: "Did trilobites appear before or after the first dinosaurs?", a: "Before" },
        { q: "Plesiosaurs and ichthyosaurs were marine ____, not dinosaurs.", a: "Reptiles" },
        { q: "Which marine reptile was closely related to monitor lizards?", a: "Mosasaur" },
        { q: "Pterosaurs were flying ____, not dinosaurs.", a: "Reptiles" },
        { q: "A pterosaur's wing was mostly made of skin stretched on a ____.", a: "Long finger bone" },
        { q: "Name a famous Ice Age mammal with long curved tusks.", a: "Woolly mammoth" },
        { q: "Which Ice Age predator is famous for its long saber teeth?", a: "Saber-toothed cat" },
        { q: "Did Ice Age mammals live before or after the dinosaurs?", a: "After" },
        { q: "About how many years ago did trilobites go extinct?", a: "About 252 million years ago" },
        { q: "Woolly mammoths lived alongside early ____.", a: "Humans" },
        { q: "Were mosasaurs, ichthyosaurs, and plesiosaurs dinosaurs?", a: "No, they were reptiles" }
      ]
    },
    extinction: {
      title: "Extinction & Deep Time", emoji: "☄️",
      intro: "Earth is about 4.6 billion years old, and life's story is written in fossils and rock layers. Sometimes that story includes disaster: huge mass extinctions that changed life forever.",
      learn: [
        "A mass extinction is when a very large share of Earth's species die out in a relatively short span of geologic time.",
        "The worst mass extinction ever, the End-Permian extinction (sometimes called 'the Great Dying'), happened about 252 million years ago and wiped out roughly 90% of species.",
        "The extinction that ended the age of dinosaurs, about 66 million years ago, was caused mainly by a massive asteroid that struck what is now Mexico.",
        "That impact left behind a giant crater called Chicxulub and a thin layer of the rare metal iridium found in rock all over the world, a worldwide clue to what happened.",
        "After each mass extinction, surviving species evolved and diversified to fill the empty niches. After the dinosaurs' extinction, mammals grew larger and far more varied."
      ],
      activity: "☄️ Impact Splash: Drop a marble into a shallow tray of flour or cocoa powder from different heights and watch how the size of the 'crater' changes. That's a tiny model of what a huge asteroid strike can do!",
      diagram: '<svg viewBox="0 0 340 190"><rect width="340" height="190" rx="14" fill="#12193a"/>'
        + '<circle cx="150" cy="92" r="54" fill="#5c8c50"/><circle cx="150" cy="92" r="58" fill="none" stroke="#ffd166" stroke-width="3" stroke-dasharray="5 5" opacity=".85"/>'
        + '<circle cx="224" cy="28" r="8" fill="#9a9488"/><line x1="218" y1="34" x2="178" y2="72" stroke="#9a9488" stroke-width="3"/>'
        + '<g font-family="Fredoka, system-ui, sans-serif" text-anchor="middle" fill="#fff" font-size="11">'
        + '<text x="150" y="158">Chicxulub crater</text><text x="150" y="172" font-size="9" fill="#ffd166">Iridium layer (worldwide clue)</text></g>'
        + '<g font-family="Fredoka, system-ui, sans-serif" font-size="10" fill="#c9d6ff">'
        + '<text x="16" y="20">252 mya: the Great Dying</text><text x="16" y="184">66 mya: dinosaurs\' end</text></g></svg>',
      questions: [
        { q: "About how old is planet Earth?", a: "About 4.6 billion years" },
        { q: "A very large die-off of species in a short geologic time is a ____.", a: "Mass extinction" },
        { q: "Which mass extinction is nicknamed 'the Great Dying'?", a: "End-Permian extinction" },
        { q: "About how many years ago was the End-Permian extinction?", a: "About 252 million years ago" },
        { q: "About how many years ago did the extinction that ended the dinosaurs happen?", a: "About 66 million years ago" },
        { q: "What struck Earth and helped end the age of dinosaurs?", a: "A giant asteroid" },
        { q: "The crater left by that impact is called ____.", a: "Chicxulub" },
        { q: "In which country is the impact crater located?", a: "Mexico" },
        { q: "The rare metal found in a thin layer marking the impact is ____.", a: "Iridium" },
        { q: "Which animal group grew larger and more varied after the dinosaurs' extinction?", a: "Mammals" },
        { q: "Which was more severe: the End-Permian or the End-Cretaceous extinction?", a: "The End-Permian" },
        { q: "Why do scientists study past mass extinctions today?", a: "To understand life's history" }
      ]
    }
  };
})();
