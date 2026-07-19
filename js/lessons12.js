// BrightSprouts Academy — Visual Art subject for Grades 1–12.
// A progressive art curriculum: colours & lines → colour theory → elements & principles →
// space, perspective & proportion → art history → media, composition & critique.
// Each grade has a hands-on project (activity) and a bank of verifiable art-concept questions
// (colour theory and art facts are objective) that feed the standard worksheet generator.
(function () {
  var ART = {
    1: {
      title: "Colors, Lines & Shapes", emoji: "🖍️",
      intro: "Every great artist starts with colors, lines, and shapes — the ABCs of art. Let's make some marks!",
      learn: [
        "The three primary colors are red, yellow, and blue. You can't mix other colors to make them.",
        "Lines come in many kinds: straight, curvy, zigzag, and dotted.",
        "A shape is a flat, closed outline — like a circle, square, or triangle.",
        "Art is for everyone. There is no single 'right' way to make it!"
      ],
      activity: "🦁 Line Zoo: Draw an animal using only lines — straight legs, a curvy tail, zigzag teeth. How many kinds of line can you fit in?",
      questions: [
        { q: "Name the three primary colors.", a: "Red, yellow, and blue" },
        { q: "What do we call a line that goes back and forth in sharp points, like /\\/\\ ?", a: "A zigzag line" },
        { q: "What shape is perfectly round with no corners?", a: "A circle" },
        { q: "How many sides does a triangle have?", a: "3" },
        { q: "Would you use a straight line or a curvy line to draw a smile?", a: "A curvy line" },
        { q: "Which one is a primary color: green or red?", a: "Red" },
        { q: "A flat, closed outline (like a square) is called a ____.", a: "Shape" },
        { q: "Which is NOT a primary color: yellow or orange?", a: "Orange" },
        { q: "How many corners does a square have?", a: "4" },
        { q: "Name one tool an artist uses to draw lines.", a: "A pencil (crayon, marker, or pen)" }
      ]
    },
    2: {
      title: "Color Mixing & Patterns", emoji: "🌈",
      intro: "Time for color magic! Mix the colors you already know to make brand-new ones.",
      learn: [
        "Mixing two primary colors makes a secondary color.",
        "Red + yellow = orange. Blue + yellow = green. Red + blue = purple.",
        "The three secondary colors are orange, green, and purple.",
        "A pattern is a design that repeats, like stripes or polka dots."
      ],
      activity: "🎨 Mixing Magic: Using red, yellow, and blue paint (or overlapping markers), make orange, green, and purple yourself — then paint a rainbow!",
      questions: [
        { q: "Red + yellow = ?", a: "Orange" },
        { q: "Blue + yellow = ?", a: "Green" },
        { q: "Red + blue = ?", a: "Purple (violet)" },
        { q: "Name the three secondary colors.", a: "Orange, green, and purple" },
        { q: "What do we call a design that repeats over and over?", a: "A pattern" },
        { q: "Which two colors mix to make green?", a: "Blue and yellow" },
        { q: "Orange is made from red and ____.", a: "Yellow" },
        { q: "Is purple a primary or a secondary color?", a: "Secondary" },
        { q: "Which two colors mix to make orange?", a: "Red and yellow" },
        { q: "Stripes and polka dots are examples of ____.", a: "Patterns" }
      ]
    },
    3: {
      title: "The Color Wheel: Warm & Cool", emoji: "🎡",
      intro: "Colors have feelings! Meet the color wheel and discover warm and cool colors.",
      learn: [
        "The color wheel arranges colors in a circle to show how they relate.",
        "Warm colors are red, orange, and yellow — they remind us of fire and sunshine.",
        "Cool colors are blue, green, and purple — they remind us of water and grass.",
        "Artists choose warm or cool colors to give a picture a certain feeling."
      ],
      activity: "🌗 Warm & Cool Split: Fold a paper in half and draw the same simple picture twice — one side using only warm colors, the other only cool. How do they feel different?",
      questions: [
        { q: "Is blue a warm or a cool color?", a: "Cool" },
        { q: "Is red a warm or a cool color?", a: "Warm" },
        { q: "Name the three warm colors.", a: "Red, orange, and yellow" },
        { q: "Name the three cool colors.", a: "Blue, green, and purple" },
        { q: "The tool that shows colors arranged in a circle is the ____.", a: "Color wheel" },
        { q: "Which is a cool color: orange or green?", a: "Green" },
        { q: "Fire and sunshine remind us of ____ colors.", a: "Warm" },
        { q: "Water and grass remind us of ____ colors.", a: "Cool" },
        { q: "Is yellow warm or cool?", a: "Warm" },
        { q: "Is purple warm or cool?", a: "Cool" }
      ]
    },
    4: {
      title: "Elements of Art: Tints & Shades", emoji: "🧊",
      intro: "Learn the building blocks every artist uses — the Elements of Art — and make colors lighter and darker.",
      learn: [
        "The Elements of Art are: line, shape, form, color, value, texture, and space.",
        "A shape is flat (2D); a form is solid (3D). A circle is a shape; a ball (sphere) is a form.",
        "A tint is a color mixed with white (lighter). A shade is a color mixed with black (darker).",
        "Texture is how something feels, or looks like it would feel: rough, smooth, or bumpy."
      ],
      activity: "🏀 Shape to Form: Draw a circle, then shade one side to turn it into a 3D ball. Try turning a square into a cube the same way!",
      questions: [
        { q: "What do you add to a color to make a lighter tint?", a: "White" },
        { q: "What do you add to a color to make a darker shade?", a: "Black" },
        { q: "A flat circle is a shape. A round ball is a ____.", a: "Form" },
        { q: "Name any three Elements of Art.", a: "Any three of: line, shape, form, color, value, texture, space" },
        { q: "Is a cube a shape or a form?", a: "A form (it is 3D)" },
        { q: "Pink is a tint of which color?", a: "Red" },
        { q: "Texture describes how something ____.", a: "Feels (rough, smooth, bumpy)" },
        { q: "A shape is 2D. A form is ____.", a: "3D" },
        { q: "Light pink is a tint. Dark, blackened red is a ____.", a: "Shade" },
        { q: "Which element means the flat, closed outline of something?", a: "Shape" }
      ]
    },
    5: {
      title: "Value & Shading", emoji: "🌑",
      intro: "Give your drawings a glow-up! Value and shading make flat pictures pop into 3D.",
      learn: [
        "Value is how light or dark a color is. Using many values makes art look real.",
        "Shading adds value gradually to make drawings look 3D — like one side of a ball.",
        "Complementary colors are opposite on the color wheel: red & green, blue & orange, yellow & purple.",
        "Placed side by side, complementary colors make each other look brighter."
      ],
      activity: "📊 Value Scale: Draw a strip of 5 boxes and shade them from white to black, one step darker each time. Then shade a circle so it looks like a round ball.",
      questions: [
        { q: "What is the complement (opposite) of red?", a: "Green" },
        { q: "What is the complement of blue?", a: "Orange" },
        { q: "What is the complement of yellow?", a: "Purple" },
        { q: "Value means how ____ or dark a color is.", a: "Light" },
        { q: "Adding dark and light to make a drawing look 3D is called ____.", a: "Shading" },
        { q: "Red and green are ____ colors.", a: "Complementary" },
        { q: "Which color is opposite orange on the color wheel?", a: "Blue" },
        { q: "A scale from white to black through grays is a ____ scale.", a: "Value (grayscale)" },
        { q: "On the color wheel, complementary colors are placed how?", a: "Opposite each other" },
        { q: "Which pair is complementary: yellow & purple, or red & blue?", a: "Yellow and purple" }
      ]
    },
    6: {
      title: "Principles of Design", emoji: "⚖️",
      intro: "Now that you know the ingredients, learn the recipe: the Principles of Design that make art look 'just right'.",
      learn: [
        "If the Elements are the ingredients, the Principles of Design are the recipe for arranging them.",
        "Key principles include: balance, contrast, pattern, emphasis (a focal point), rhythm/movement, and unity.",
        "Symmetry is a kind of balance where both sides match, like a butterfly.",
        "Contrast means big differences — such as light next to dark — that grab your eye."
      ],
      activity: "🦋 Symmetry Butterfly: Paint one wing, fold the paper while the paint is wet, and press. The mirror print makes a perfectly symmetrical butterfly!",
      questions: [
        { q: "When both sides of a picture match, that balance is called ____.", a: "Symmetry" },
        { q: "The part of an artwork that grabs your attention first is the ____ (focal point).", a: "Emphasis" },
        { q: "Light placed next to dark is an example of ____.", a: "Contrast" },
        { q: "Name any two Principles of Design.", a: "Any two of: balance, contrast, pattern, emphasis, rhythm/movement, unity" },
        { q: "A butterfly's matching wings show ____ balance.", a: "Symmetrical" },
        { q: "Elements are the ingredients; Principles are the ____.", a: "Recipe (how you arrange them)" },
        { q: "Repeating shapes or colors creates a ____.", a: "Pattern (or rhythm)" },
        { q: "When all parts of an artwork feel like they belong together, that's ____.", a: "Unity (harmony)" },
        { q: "Is symmetry a type of balance or a type of color?", a: "Balance" },
        { q: "Big differences that grab your eye are called ____.", a: "Contrast" }
      ]
    },
    7: {
      title: "Space & Perspective", emoji: "🛣️",
      intro: "Make a flat page look deep! Learn how artists show space and distance with perspective.",
      learn: [
        "Space is the area in and around objects. The foreground is near; the background is far.",
        "To show distance, far objects are drawn smaller, higher up, and overlapped by nearer ones.",
        "One-point perspective uses a horizon line and a single vanishing point where lines meet.",
        "Overlapping one object in front of another shows which one is closer."
      ],
      activity: "🛤️ Road to Nowhere: Draw a horizon line and one dot (the vanishing point). Draw a road and fence posts that shrink toward the dot — instant 3D depth!",
      questions: [
        { q: "In a landscape, the part closest to you is the ____.", a: "Foreground" },
        { q: "Faraway objects are drawn ____ than near ones.", a: "Smaller" },
        { q: "In one-point perspective, all the lines meet at the ____ point.", a: "Vanishing" },
        { q: "The line where the sky meets the ground is the ____ line.", a: "Horizon" },
        { q: "Drawing one shape partly in front of another is called ____.", a: "Overlapping" },
        { q: "The far part of a picture is the ____.", a: "Background" },
        { q: "How many vanishing points does one-point perspective have?", a: "One" },
        { q: "To make something look far away, draw it ____ on the page.", a: "Higher up (and smaller)" },
        { q: "The empty area around objects is sometimes called ____ space.", a: "Negative" },
        { q: "Which looks closer: a bigger tree or a smaller tree?", a: "The bigger tree" }
      ]
    },
    8: {
      title: "Proportion & Drawing People", emoji: "🧍",
      intro: "Draw people and objects that look believable using proportion and gesture.",
      learn: [
        "Proportion is the size of the parts compared to the whole — like a head compared to a body.",
        "A simple rule: a typical adult body is about 7 to 8 heads tall.",
        "On a face, the eyes sit about halfway down the head — not near the top!",
        "Gesture drawing captures a pose quickly with loose lines before you add details."
      ],
      activity: "🙂 Face Map: Lightly draw an oval, then a line across the MIDDLE for the eyes. Add the nose and mouth in the lower half. Correct proportions make it look real!",
      questions: [
        { q: "The size of one part compared to the whole is called ____.", a: "Proportion" },
        { q: "About how many 'heads' tall is a typical adult body?", a: "About 7 to 8 heads" },
        { q: "On a face, the eyes are located about ____ down the head.", a: "Halfway (the middle)" },
        { q: "A quick, loose drawing of a pose is a ____ drawing.", a: "Gesture" },
        { q: "A drawing of arranged everyday objects (fruit, jars) is called a ____.", a: "Still life" },
        { q: "If a hand is drawn far too big for the arm, the ____ is wrong.", a: "Proportion" },
        { q: "True or False: eyes belong near the very top of the head.", a: "False — they're about halfway down" },
        { q: "Comparing head size to body size checks the ____.", a: "Proportion" },
        { q: "Loose lines first, details later — that quick first sketch is the ____.", a: "Gesture sketch" },
        { q: "A bowl of fruit arranged to draw is an example of a ____.", a: "Still life" }
      ]
    },
    9: {
      title: "Art History: Caves to the Renaissance", emoji: "🏛️",
      intro: "Step into a time machine! Explore art from ancient caves to the Renaissance masters.",
      learn: [
        "The oldest known art is cave paintings, made tens of thousands of years ago.",
        "Ancient Egyptians made art with strict rules; the Ancient Greeks made lifelike sculptures.",
        "The Renaissance (1400s–1500s) brought realism, perspective, and famous masters.",
        "Leonardo da Vinci painted the Mona Lisa; Michelangelo painted the Sistine Chapel ceiling and sculpted David."
      ],
      activity: "🖼️ Master Copy: Pick a Renaissance painting you like and sketch your own version. Notice how the artist used light and perspective to add depth.",
      questions: [
        { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
        { q: "Who painted the ceiling of the Sistine Chapel?", a: "Michelangelo" },
        { q: "Michelangelo also carved a famous marble statue named ____.", a: "David" },
        { q: "The rebirth of art and learning in the 1400s–1500s is called the ____.", a: "Renaissance" },
        { q: "The oldest known paintings were made on the walls of ____.", a: "Caves" },
        { q: "Leonardo da Vinci also painted 'The Last ____'.", a: "Supper (The Last Supper)" },
        { q: "Which ancient culture built pyramids and drew figures from the side by strict rules?", a: "Ancient Egypt" },
        { q: "Lifelike, realistic sculpture was perfected by the ancient ____.", a: "Greeks" },
        { q: "The Mona Lisa is famous for her mysterious ____.", a: "Smile" },
        { q: "Renaissance artists used ____ to make flat paintings look deep and 3D.", a: "Perspective" }
      ]
    },
    10: {
      title: "Modern Art Movements", emoji: "🖼️",
      intro: "Meet the rebels of modern art — the movements that changed how we see the world.",
      learn: [
        "Impressionism (Claude Monet) used quick, visible brushstrokes to capture light and a moment.",
        "Post-Impressionism: Vincent van Gogh painted swirling, emotional works like The Starry Night.",
        "Cubism (Pablo Picasso & Georges Braque) broke objects into shapes seen from many angles at once.",
        "Surrealism (Salvador Dalí) painted dreamlike scenes, such as melting clocks."
      ],
      activity: "🌀 Starry Style: Paint a night sky using swirling, visible brushstrokes like Van Gogh — let every brushstroke show!",
      questions: [
        { q: "Who painted The Starry Night?", a: "Vincent van Gogh" },
        { q: "Which movement, led by Monet, captured light with quick brushstrokes?", a: "Impressionism" },
        { q: "Who co-founded Cubism and painted 'Guernica'?", a: "Pablo Picasso" },
        { q: "Salvador Dali's melting clocks belong to which dreamlike movement?", a: "Surrealism" },
        { q: "Claude Monet often painted his garden's water ____.", a: "Lilies" },
        { q: "Cubism breaks objects into ____ seen from many sides.", a: "Shapes (geometric shapes)" },
        { q: "Van Gogh's style, which came after Impressionism, is called ____.", a: "Post-Impressionism" },
        { q: "Who painted 'The Scream'?", a: "Edvard Munch" },
        { q: "Surrealism paints scenes that look like ____.", a: "Dreams" },
        { q: "Impressionists loved to paint how ____ falls and changes.", a: "Light" }
      ]
    },
    11: {
      title: "Media, Techniques & Color Schemes", emoji: "🖌️",
      intro: "Explore an artist's toolbox: different media, techniques, and clever color schemes.",
      learn: [
        "Media are the materials artists use: pencil, watercolor, acrylic, oil paint, clay, printmaking, and digital.",
        "Watercolor is see-through and light; oil paint is thick and blends slowly over days.",
        "Color schemes: analogous colors sit next to each other on the wheel; triadic uses three evenly spaced colors; monochromatic uses one color's tints and shades.",
        "Sculpture is 3D art you can walk around; printmaking makes copies from a carved or inked plate."
      ],
      activity: "🎭 Three Ways: Draw the same object three times — once in analogous colors, once monochromatic, once triadic. Which color mood do you like best?",
      questions: [
        { q: "A color scheme using colors next to each other on the wheel is ____.", a: "Analogous" },
        { q: "A color scheme using only one color's tints and shades is ____.", a: "Monochromatic" },
        { q: "Three colors evenly spaced on the wheel form a ____ scheme.", a: "Triadic" },
        { q: "See-through, watery paint is called ____.", a: "Watercolor" },
        { q: "3D art you can walk all the way around is called ____.", a: "Sculpture" },
        { q: "The material an artist works in (paint, clay, pencil) is called the ____.", a: "Medium (media)" },
        { q: "Making multiple copies from an inked, carved plate is ____.", a: "Printmaking" },
        { q: "Which paint is thick and takes days to dry: watercolor or oil?", a: "Oil paint" },
        { q: "Art made on a computer or tablet is ____ art.", a: "Digital" },
        { q: "Blue, blue-green, and green used together is an example of an ____ scheme.", a: "Analogous" }
      ]
    },
    12: {
      title: "Composition, Critique & Portfolio", emoji: "📐",
      intro: "Put it all together — composition, critique, and building an art portfolio for the future.",
      learn: [
        "Composition is how you arrange everything within the frame.",
        "The rule of thirds splits the frame into a 3×3 grid and places key parts along the lines for a pleasing layout.",
        "Art critique has four steps (Feldman's method): Describe, Analyze, Interpret, and Judge.",
        "A portfolio is a collection of your best, varied work — useful for art school and careers like illustrator, animator, designer, or architect."
      ],
      activity: "📸 Rule of Thirds: Take or draw a scene with the main subject on a thirds line (not dead center). Then write a 4-step critique of your own artwork.",
      questions: [
        { q: "Dividing the frame into a 3×3 grid to place key parts is the rule of ____.", a: "Thirds" },
        { q: "How you arrange all the parts within the frame is the ____.", a: "Composition" },
        { q: "Name the four steps of art critique (Feldman's method).", a: "Describe, Analyze, Interpret, Judge" },
        { q: "A collection of an artist's best work is a ____.", a: "Portfolio" },
        { q: "Lines that guide the viewer's eye through a picture are called ____ lines.", a: "Leading" },
        { q: "In critique, stating only what you see (no opinions yet) is the ____ step.", a: "Describe" },
        { q: "Forming your final opinion of the artwork is the ____ step.", a: "Judge" },
        { q: "Name one career that uses visual art.", a: "Any of: illustrator, animator, graphic designer, architect, art teacher…" },
        { q: "The main spot your eye is drawn to in a composition is the ____.", a: "Focal point (emphasis)" },
        { q: "The rule of thirds arranges a scene to look more balanced and ____.", a: "Interesting (pleasing)" }
      ]
    }
  };

  if (typeof LESSONS !== "undefined") {
    for (var g = 1; g <= 12; g++) {
      if (LESSONS[g]) LESSONS[g].art = ART[g];
    }
  }
})();
