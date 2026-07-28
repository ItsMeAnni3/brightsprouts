// BrightSprouts Academy — the 112 paper activities for category 30.
// The engine, the themes and the drawing helpers live in js/paper.js; see the house rules at the
// top of that file before adding anything here.
//
// Each activity: { id, t (theme index), name, emoji, level, mins, blurb, needs[], steps[], tip, art }
// `art` draws the finished thing in a 200×150 box using the shared PaperArt helpers, so a child
// can see what they are aiming at before they start cutting.
(function () {
  var A = window.PaperArt;
  var P = [];

  // ==================== 0 · Origami Animals ====================
  P.push({
    id: "dog", t: 0, name: "Origami Dog", emoji: "🐶", level: "Easy", mins: 5,
    blurb: "Two folds and a face. The first origami almost everybody learns, and still one of the best.",
    needs: ["1 square of paper (15 cm is perfect)", "A felt pen or crayon"],
    steps: [
      "Put the square on the table like a diamond, one corner pointing at you.",
      "Fold the top corner down to the bottom corner. You now have a triangle.",
      "Turn the triangle so the long edge is at the top.",
      "Fold the left corner down and out to make one floppy ear. Do the same on the right.",
      "Fold the very bottom point up a little way — that is the dog's chin.",
      "Draw two eyes and a nose, and give your dog a name."
    ],
    tip: "Press every fold flat with your thumbnail before you make the next one.",
    art: function () {
      return A.ground(134) +
        A.poly("60,42 140,42 100,110", "#e8b76a") +
        A.poly("60,42 60,82 82,62", "#c9974d") + A.poly("140,42 140,82 118,62", "#c9974d") +
        A.poly("88,100 112,100 100,112", "#f3d9a8") +
        A.face(100, 70, 1.2) + A.ell(100, 88, 6, 4.6, "#2d2a4a");
    }
  });
  P.push({
    id: "catface", t: 0, name: "Origami Cat", emoji: "🐱", level: "Easy", mins: 5,
    blurb: "The dog's neighbour: same start, pointy ears instead of floppy ones.",
    needs: ["1 square of paper", "A felt pen"],
    steps: [
      "Lay the square as a diamond and fold the top corner down to the bottom. You have a triangle.",
      "Turn it so the long edge is at the top.",
      "Fold the left and right corners UP this time, so two pointy ears stand above the head.",
      "Fold the bottom point up behind the head to make the chin flat.",
      "Draw two eyes, a small triangle nose and three whiskers on each side."
    ],
    tip: "Ears up means cat, ears down means dog — that single change is the whole trick.",
    art: function () {
      return A.ground(134) +
        A.poly("58,54 142,54 100,112", "#9aa4b8") +
        A.poly("58,54 66,26 88,50", "#9aa4b8") + A.poly("142,54 134,26 112,50", "#9aa4b8") +
        A.poly("64,50 70,34 82,48", "#ffb3cd") + A.poly("136,50 130,34 118,48", "#ffb3cd") +
        A.face(100, 74, 1.2) + A.poly("94,86 106,86 100,92", "#ff6b9d") +
        A.line(70, 84, 88, 82, "#5c6478", 1.3) + A.line(70, 92, 88, 88, "#5c6478", 1.3) +
        A.line(130, 84, 112, 82, "#5c6478", 1.3) + A.line(130, 92, 112, 88, "#5c6478", 1.3);
    }
  });
  P.push({
    id: "jumpfrog", t: 0, name: "Jumping Frog", emoji: "🐸", level: "Medium", mins: 12,
    blurb: "Press its back and it really leaps. Have a jumping race across the kitchen table.",
    needs: ["1 rectangle of paper or thin card (a filing card is ideal)", "Felt pens"],
    steps: [
      "Fold the top left corner across to the right edge, crease it, and open it out. Do the same with the top right corner. You have made an X.",
      "Turn the paper over and fold straight across the middle of the X, then open it out again.",
      "Turn it back. Push the two sides of the X inwards so the top collapses into a flat triangle.",
      "Fold the two bottom corners of that triangle up to the top point — those are the front legs.",
      "Fold the long sides of the body in to the middle so the frog is narrow.",
      "Fold the bottom edge up to the top, then fold half of it back down. That zigzag is the spring.",
      "Turn it over, draw two eyes, then press down on its back and let go."
    ],
    tip: "If it flips over instead of jumping forward, your zigzag spring is too tight — make it a little looser.",
    art: function () {
      return A.ground(132) +
        A.ell(100, 100, 34, 15, "#6bcb77") +
        A.poly("70,96 52,74 66,72 82,90", "#57bd69") + A.poly("130,96 148,74 134,72 118,90", "#57bd69") +
        A.poly("74,104 58,124 72,122 86,110", "#4a9c58") + A.poly("126,104 142,124 128,122 114,110", "#4a9c58") +
        A.circ(88, 86, 7, "#8fe36a") + A.circ(112, 86, 7, "#8fe36a") +
        A.circ(88, 86, 3.2, "#2d2a4a") + A.circ(112, 86, 3.2, "#2d2a4a") +
        A.path("M86 104 q14 8 28 0", "none", ' stroke="#2f7a3c" stroke-width="2" stroke-linecap="round"') +
        A.line(64, 52, 136, 52, "#b8b2cc", 1.4, "5 4") + A.label(100, 44, "boing!", "#57bd69");
    }
  });
  P.push({
    id: "crane", t: 0, name: "Paper Crane", emoji: "🕊️", level: "Hard", mins: 25,
    blurb: "The most famous fold in the world. It takes a few goes to learn — and then you have it forever.",
    needs: ["1 square of thin paper (15 cm)", "A flat table", "Patience"],
    steps: [
      "Fold the square in half both ways, open it, turn it over, then fold corner to corner both ways and open it. You should see a star of creases.",
      "Push the four sides together so the paper collapses into a small square with a loose corner at the bottom. This is the 'square base'.",
      "With the loose corner at the bottom, fold the two lower edges of the top layer in to the centre line, like a kite.",
      "Fold the top triangle down over them, crease it well, then open all three folds back out.",
      "Lift the bottom loose corner all the way up and press the sides in, so it flattens into a long diamond. Turn over and do the same on the back.",
      "Fold the lower edges in to the centre again on both sides — the shape gets very narrow.",
      "Pull the two thin points out sideways and crease them so they stay: they are the head and tail.",
      "Fold a tiny bit at the tip of one point down to make the beak, then gently pull the wings apart."
    ],
    tip: "Do not rush step 5. If the diamond will not lie flat, your creases from step 4 are not sharp enough.",
    art: function () {
      return A.ground(134) +
        A.poly("100,88 44,50 62,84", "#ff9db0") +
        A.poly("100,88 156,50 138,84", "#ff8fb1") +
        A.poly("100,60 118,96 82,96", "#ff6b9d") +
        A.poly("100,96 88,120 112,120", "#e05586") +
        A.poly("100,64 66,36 78,58", "#ffb3cd") +
        A.poly("66,36 58,38 68,44", "#2d2a4a") +
        A.poly("100,64 138,110 128,86", "#e05586") +
        A.circ(70, 40, 1.6, "#fff");
    }
  });
  P.push({
    id: "butterfly", t: 0, name: "Origami Butterfly", emoji: "🦋", level: "Medium", mins: 10,
    blurb: "Fold a dozen in different colours and tape them up the wall in a flying line.",
    needs: ["1 square of paper", "String and tape if you want to hang them"],
    steps: [
      "Fold the square in half one way and open it, then the other way and open it.",
      "Turn it over and fold it corner to corner both ways, opening it each time.",
      "Push the two side creases inwards so the square collapses into a smaller triangle.",
      "With the open points at the bottom, fold the two bottom corners of the top layer up to the top point.",
      "Turn it over. Fold the bottom point up so it sticks out over the top edge, then fold its tip back down.",
      "Fold the whole thing in half backwards down the middle, then let it spring open a little so the wings sit apart.",
      "Curl two thin strips of paper and tape them on for antennae."
    ],
    tip: "Different sized squares make a whole family — try 20 cm, 15 cm and 10 cm.",
    art: function () {
      return A.poly("100,76 46,38 40,74 78,86", "#7c5cbf") +
        A.poly("100,76 154,38 160,74 122,86", "#8b5cf6") +
        A.poly("100,80 52,104 68,124 94,102", "#a78bfa") +
        A.poly("100,80 148,104 132,124 106,102", "#b39ddb") +
        A.ell(100, 84, 5, 22, "#4c1d95") +
        A.path("M97 62 Q88 44 78 40", "none", ' stroke="#4c1d95" stroke-width="2" stroke-linecap="round"') +
        A.path("M103 62 Q112 44 122 40", "none", ' stroke="#4c1d95" stroke-width="2" stroke-linecap="round"') +
        A.circ(78, 40, 2.4, "#4c1d95") + A.circ(122, 40, 2.4, "#4c1d95");
    }
  });
  P.push({
    id: "fox", t: 0, name: "Origami Fox", emoji: "🦊", level: "Easy", mins: 6,
    blurb: "A sharp-eared fox from one triangle. Make two and they can talk to each other.",
    needs: ["1 square of orange paper", "A black felt pen"],
    steps: [
      "Fold the square corner to corner to make a triangle, with the long edge at the bottom.",
      "Fold the triangle in half from left to right, then open it again so you can see the middle crease.",
      "Fold the left and right points UP to meet the top point — those are the ears.",
      "Turn the whole thing over.",
      "Draw a black nose on the bottom point and two eyes above it."
    ],
    tip: "Make the ears slightly uneven on purpose and your fox will look cheeky.",
    art: function () {
      return A.ground(134) +
        A.poly("54,56 146,56 100,116", "#ff9f68") +
        A.poly("54,56 62,24 92,54", "#ff9f68") + A.poly("146,56 138,24 108,54", "#ff9f68") +
        A.poly("62,50 66,32 82,50", "#ffd9c0") + A.poly("138,50 134,32 118,50", "#ffd9c0") +
        A.poly("76,86 124,86 100,116", "#fff3ea") +
        A.face(100, 74, 1.15) + A.ell(100, 106, 5.5, 4.2, "#2d2a4a");
    }
  });
  P.push({
    id: "swan", t: 0, name: "Paper Swan", emoji: "🦢", level: "Hard", mins: 18,
    blurb: "A long curved neck made only from folds. It stands up on the table all by itself.",
    needs: ["1 square of paper (white or pale blue)"],
    steps: [
      "Fold the square corner to corner, crease it hard, and open it out. That middle line guides everything.",
      "Fold the two top edges in to the middle line so you have a kite shape.",
      "Fold those same two long edges in to the middle line AGAIN. The kite gets very thin.",
      "Fold the whole thin kite in half backwards along the middle line.",
      "Hold the fat end. Bend the thin end upwards and crease it — that is the neck.",
      "Bend the very tip of the neck forwards and crease it again — that is the head.",
      "Fold a tiny triangle at the very tip for the beak, then stand the swan on its flat bottom."
    ],
    tip: "Thin paper is much easier here — by step 3 you are folding eight layers at once.",
    art: function () {
      return A.ell(100, 128, 56, 7, "#cfe3f7") +
        A.path("M56 122 Q68 92 108 96 Q142 100 150 122 Z", "#ffffff") +
        A.path("M56 122 Q68 92 108 96 Q142 100 150 122 Z", "none", ' stroke="#dfe6f2" stroke-width="1.5"') +
        A.path("M112 98 Q96 76 100 56 Q104 40 122 38", "none", ' stroke="#ffffff" stroke-width="10" stroke-linecap="round"') +
        A.path("M112 98 Q96 76 100 56 Q104 40 122 38", "none", ' stroke="#e8eef8" stroke-width="1.2" fill="none"') +
        A.poly("122,34 138,40 122,44", "#ff9f68") +
        A.circ(118, 37, 2, "#2d2a4a") +
        A.poly("74,116 104,104 124,118", "#f2f6fc");
    }
  });
  P.push({
    id: "fish", t: 0, name: "Origami Fish", emoji: "🐠", level: "Easy", mins: 7,
    blurb: "Fold a whole shoal in different colours and stick them on a window like an aquarium.",
    needs: ["1 square of paper", "Felt pens", "Sticky tack if you want to put them on a window"],
    steps: [
      "Fold the square corner to corner both ways, opening it each time, so you have an X of creases.",
      "Fold the square in half sideways and open it out.",
      "Push the two sides in so the paper collapses into a triangle with two loose flaps inside.",
      "Fold the left and right points of the top layer up to the top point.",
      "Turn it round so the long straight edge is the fish's back.",
      "Pull one of the back points out a little and crease it to make the tail fin.",
      "Draw a big round eye and some scales."
    ],
    tip: "Cut a wavy edge on the tail with scissors before you start and the finished fish looks much fishier.",
    art: function () {
      return A.path("M62 76 Q90 46 126 62 Q152 74 126 92 Q90 108 62 76 Z", "#4d96ff") +
        A.poly("60,76 34,54 40,78 34,98", "#1f6feb") +
        A.path("M104 60 Q116 72 104 84", "none", ' stroke="#7fc4ff" stroke-width="2.4" fill="none"') +
        A.path("M118 62 Q130 74 118 86", "none", ' stroke="#7fc4ff" stroke-width="2.4" fill="none"') +
        A.circ(84, 70, 7, "#fff") + A.circ(85, 70, 3.4, "#2d2a4a") +
        A.circ(70, 44, 4, "#cfe3f7") + A.circ(84, 34, 3, "#cfe3f7") + A.circ(60, 34, 2.4, "#cfe3f7");
    }
  });
  P.push({
    id: "penguin", t: 0, name: "Origami Penguin", emoji: "🐧", level: "Medium", mins: 10,
    blurb: "A little round penguin that stands on its own two feet.",
    needs: ["1 square of paper, black one side and white the other if you have it"],
    steps: [
      "Fold the square corner to corner to make a triangle, then open it back out.",
      "Fold the left and right corners in to the middle crease so you have a kite.",
      "Turn it over and fold the whole kite in half along the middle crease.",
      "Stand it on the table with the fat end down. Bend the thin top point forward and crease it — that is the head.",
      "Fold a small triangle at the very tip forwards for the beak.",
      "Fold a small triangle at each side of the bottom outwards for the feet, so it stands up.",
      "Draw two eyes just behind the beak."
    ],
    tip: "Colour the beak and feet orange with a crayon; it takes ten seconds and makes it look finished.",
    art: function () {
      return A.ground(132) +
        A.ell(100, 90, 30, 38, "#2d3142") +
        A.ell(100, 96, 20, 28, "#ffffff") +
        A.ell(72, 92, 8, 20, "#22263a", -12) + A.ell(128, 92, 8, 20, "#22263a", 12) +
        A.poly("92,124 76,132 96,132", "#ff9f68") + A.poly("108,124 124,132 104,132", "#ff9f68") +
        A.circ(92, 74, 3.2, "#2d2a4a") + A.circ(108, 74, 3.2, "#2d2a4a") +
        A.circ(93, 73, 1.1, "#fff") + A.circ(109, 73, 1.1, "#fff") +
        A.poly("94,82 106,82 100,90", "#ff9f68");
    }
  });
  P.push({
    id: "rabbit", t: 0, name: "Origami Rabbit", emoji: "🐰", level: "Medium", mins: 12,
    blurb: "Tall ears, round cheeks, and a puff of tissue for a tail.",
    needs: ["1 square of paper", "A small piece of tissue or cotton wool for the tail", "Glue"],
    steps: [
      "Fold the square in half to make a triangle, long edge at the bottom.",
      "Fold the two bottom corners up to the top point so you have a small square standing on its corner.",
      "Fold those two new points back out and downwards to make the ears stand away from the head.",
      "Turn the rabbit over.",
      "Fold the very bottom point up behind, so the rabbit sits flat and steady.",
      "Draw two eyes, a little nose and three whiskers each side.",
      "Scrunch the tissue into a ball and glue it on the back for a tail."
    ],
    tip: "Pinch a fold down the middle of each ear and they will stand up instead of flopping.",
    art: function () {
      return A.ground(132) +
        A.ell(88, 52, 8, 26, "#f5f0fa", -10) + A.ell(112, 52, 8, 26, "#f5f0fa", 10) +
        A.ell(88, 54, 4, 18, "#ffb3cd", -10) + A.ell(112, 54, 4, 18, "#ffb3cd", 10) +
        A.ell(100, 96, 27, 24, "#f5f0fa") +
        A.circ(134, 106, 9, "#ffffff") +
        A.face(100, 92, 1.2) +
        A.poly("95,100 105,100 100,106", "#ff6b9d") +
        A.line(74, 100, 90, 98, "#c9c3d8", 1.2) + A.line(74, 106, 90, 102, "#c9c3d8", 1.2) +
        A.line(126, 100, 110, 98, "#c9c3d8", 1.2) + A.line(126, 106, 110, 102, "#c9c3d8", 1.2);
    }
  });

  // ==================== 1 · Flowers & Nature ====================
  P.push({
    id: "tulip", t: 1, name: "Paper Tulip", emoji: "🌷", level: "Easy", mins: 8,
    blurb: "A flower that never needs watering. Make a whole bunch for someone who deserves one.",
    needs: ["1 square of coloured paper for the flower", "1 square of green paper for the stem", "Glue"],
    steps: [
      "Fold the coloured square corner to corner into a triangle, long edge at the bottom.",
      "Fold the left corner up so it points past the top, then do the same with the right corner.",
      "Turn it over — you have a tulip head.",
      "For the stem, fold the green square corner to corner, then roll it tightly from one end into a thin stick.",
      "Fold the last corner over and glue it so the stem does not unroll.",
      "Cut two leaf shapes from the leftover green paper and glue them to the stem.",
      "Glue the stem to the back of the flower head."
    ],
    tip: "Five tulips tied with a ribbon makes a proper bouquet.",
    art: function () {
      return A.line(100, 78, 100, 128, "#4a9c58", 5) +
        A.path("M100 104 Q76 100 68 82 Q92 82 100 104 Z", "#6bcb77") +
        A.path("M100 96 Q124 92 132 76 Q108 76 100 96 Z", "#57bd69") +
        A.path("M72 60 Q100 24 128 60 Q100 78 72 60 Z", "#ff6b9d") +
        A.poly("72,60 86,30 100,60", "#e05586") + A.poly("100,60 114,30 128,60", "#ff8fb1") +
        A.ground(132, "#e6f2e8");
    }
  });
  P.push({
    id: "tissueflower", t: 1, name: "Tissue Paper Flower", emoji: "🌺", level: "Easy", mins: 10,
    blurb: "Big, fluffy and forgiving — the messier your folds, the fuller the flower looks.",
    needs: ["6 sheets of tissue paper (or thin napkins)", "1 pipe cleaner or a twist tie", "Scissors"],
    steps: [
      "Stack all six sheets neatly on top of each other.",
      "Fold the whole stack like a fan: over, under, over, under, in strips about 3 cm wide.",
      "Squeeze the middle of the folded strip and tie it tightly with the pipe cleaner.",
      "Round off both ends of the strip with scissors, or cut them into points for a spikier flower.",
      "Open the fan out into a fat circle.",
      "Very gently pull the layers up one at a time towards the middle, starting from the top."
    ],
    tip: "Pull the layers slowly. Tissue tears if you hurry, and one torn layer spoils the puff.",
    art: function () {
      return A.petals(100, 76, 24, 8, 17, 12, "#ff9db0") +
        A.petals(100, 76, 14, 8, 13, 9, "#ff6b9d") +
        A.circ(100, 76, 11, "#ffd166") +
        A.circ(96, 72, 2.2, "#fff", ' opacity=".7"') +
        A.line(100, 100, 100, 130, "#4a9c58", 4) +
        A.ground(132, "#f7e9f0");
    }
  });
  P.push({
    id: "rose", t: 1, name: "Rolled Paper Rose", emoji: "🌹", level: "Hard", mins: 15,
    blurb: "Cut one spiral, roll it up, and a rose appears. It looks like magic and it nearly is.",
    needs: ["1 square of red or pink paper", "Scissors", "Glue", "A green straw or rolled paper for the stem"],
    steps: [
      "Draw a circle on the paper — around a mug is perfect.",
      "Cut out the circle.",
      "Starting at the edge, cut a spiral round and round towards the middle, keeping the strip about 2 cm wide. Stop when you reach the centre and leave a small round tab there.",
      "Make the spiral wavy rather than straight and the petals will look softer.",
      "Start at the outside end and roll the strip up tightly between your finger and thumb.",
      "When you reach the middle, let it relax a little so it opens out.",
      "Put glue on the round tab in the centre and press the rolled flower down onto it. Hold for a minute.",
      "Glue the finished rose to the top of the stem."
    ],
    tip: "Roll tightly for a bud and loosely for a full open rose. Make one of each.",
    art: function () {
      var s = "";
      for (var i = 0; i < 5; i++) {
        s += A.circ(100, 66, 26 - i * 5, i % 2 ? "#d6336c" : "#ff6b9d");
      }
      return A.line(100, 90, 100, 130, "#4a9c58", 4) +
        A.path("M100 110 Q80 106 74 92 Q94 92 100 110 Z", "#6bcb77") +
        s + A.path("M100 48 Q112 58 100 66 Q88 58 100 48 Z", "#8f1d47") +
        A.ground(132, "#f7e9f0");
    }
  });
  P.push({
    id: "leafgarland", t: 1, name: "Leaf Garland", emoji: "🍃", level: "Easy", mins: 12,
    blurb: "A trail of leaves to hang along a shelf or across a window.",
    needs: ["Green paper in two or three shades", "Scissors", "String (about 2 m)", "Glue stick"],
    steps: [
      "Fold a sheet of green paper in half, then in half again, and again.",
      "Draw one leaf shape on the top layer, right up against the folded edge.",
      "Cut it out through all the layers — you get eight leaves from one drawing.",
      "Repeat with the other shades until you have about thirty leaves.",
      "Draw a line down the middle of each leaf, then fold gently along it so the leaf is not flat.",
      "Lay the string out straight and put a dab of glue near the top of each leaf.",
      "Press the leaves onto the string one after another, alternating the colours."
    ],
    tip: "Leave a bare 20 cm of string at each end for tying it up.",
    art: function () {
      var s = A.line(20, 46, 180, 46, "#c9b892", 2);
      var cols = ["#6bcb77", "#2f9e44", "#8ce99a", "#4a7c1f"];
      for (var i = 0; i < 7; i++) {
        var x = 32 + i * 23, up = i % 2;
        s += A.ell(x, up ? 62 : 66, 9, 15, cols[i % 4], up ? -20 : 18);
        s += A.line(x, up ? 48 : 52, x, up ? 74 : 80, "#2f6b32", 1.2);
      }
      return s;
    }
  });
  P.push({
    id: "daisychain", t: 1, name: "Paper Daisy Chain", emoji: "🌼", level: "Medium", mins: 15,
    blurb: "The daisy chain you make in summer, except this one lasts all year.",
    needs: ["White paper", "Yellow paper", "Scissors", "Glue stick"],
    steps: [
      "Cut white paper into strips about 2 cm wide and 12 cm long. You need six per flower.",
      "Take one strip, bring both ends into the middle to make a loop, and glue the ends down. That is one petal.",
      "Make six petals for each flower.",
      "Arrange six petals in a circle with all the glued ends touching in the middle, and glue them together.",
      "Cut a small yellow circle and glue it over the middle to hide the joins.",
      "Make as many flowers as you like, then glue them to each other side by side to make the chain."
    ],
    tip: "Press each finished flower under a heavy book for five minutes so it dries flat.",
    art: function () {
      var s = A.line(66, 74, 86, 68, "#8ce99a", 3.4) + A.line(114, 68, 134, 74, "#8ce99a", 3.4);
      [[50, 76], [100, 66], [150, 76]].forEach(function (p) {
        // a soft halo behind each daisy: white petals on a near-white card vanish without it
        s += A.circ(p[0], p[1], 19, "#e4edf6");
        s += A.petals(p[0], p[1], 13, 6, 9, 6.5, "#ffffff");
        s += A.circ(p[0], p[1], 7, "#ffd166");
      });
      return s + A.ground(120, "#e6f2e8");
    }
  });
  P.push({
    id: "papertree", t: 1, name: "Stand-Up Paper Tree", emoji: "🌳", level: "Medium", mins: 14,
    blurb: "Two flat trees slot together and suddenly it is a 3D tree that stands on the table.",
    needs: ["Thick green paper or card", "Scissors", "A pencil", "Brown paper for the trunk"],
    steps: [
      "Fold a sheet of green card in half and draw half a tree shape against the fold.",
      "Cut it out and open it — you have a whole tree.",
      "Make a second tree exactly the same size. Trace the first one so they match.",
      "On the first tree, cut a straight slot from the TOP down to the middle.",
      "On the second tree, cut a straight slot from the BOTTOM up to the middle.",
      "Slide the two slots together so the trees cross in an X.",
      "Cut two small brown rectangles and glue them around the bottom as the trunk.",
      "Stand it up and check it does not wobble. Trim the bottom flat if it does."
    ],
    tip: "The slots must be exactly as wide as the card is thick, or the tree will be loose.",
    art: function () {
      return A.ground(132, "#e6f2e8") +
        A.poly("100,26 74,64 126,64", "#2f9e44") +
        A.poly("100,44 66,88 134,88", "#3aa64f") +
        A.poly("100,64 58,112 142,112", "#4ab55d") +
        A.sheet(92, 110, 16, 20, "#8a5f2e") +
        A.fold(100, 30, 100, 112) +
        A.circ(84, 78, 3, "#ff6b9d") + A.circ(118, 96, 3, "#ffd166") + A.circ(108, 66, 2.6, "#ff9f68");
    }
  });
  P.push({
    id: "sunflower", t: 1, name: "Paper Sunflower", emoji: "🌻", level: "Medium", mins: 14,
    blurb: "A big cheerful face with a middle made from scrunched-up paper balls.",
    needs: ["Yellow paper", "Brown paper", "A paper plate or a circle of card", "Glue", "Scissors"],
    steps: [
      "Cut about twenty petal shapes from the yellow paper, each around 10 cm long.",
      "Pinch the bottom of each petal and glue the pinch shut so the petal curves.",
      "Glue the petals around the edge of the circle of card, pointing outwards.",
      "Glue a second ring of petals just inside the first, so no gaps show.",
      "Tear the brown paper into small pieces and scrunch each one into a tight little ball.",
      "Cover the middle of the circle with glue and press the brown balls on, packed close together.",
      "Leave it flat to dry for twenty minutes."
    ],
    tip: "Two shades of yellow — one for each ring of petals — makes it look far more real.",
    art: function () {
      var s = A.petals(100, 72, 30, 12, 15, 8, "#ffd166") +
        A.petals(100, 72, 22, 12, 12, 7, "#f2b705") + A.circ(100, 72, 20, "#8a5f2e");
      for (var i = 0; i < 14; i++) {
        var a = i * 2.4, r = 3 + (i % 3) * 4.6;
        s += A.circ(+(100 + Math.cos(a) * r).toFixed(1), +(72 + Math.sin(a) * r).toFixed(1), 3.2, i % 2 ? "#6d4c22" : "#a3763f");
      }
      return s + A.line(100, 96, 100, 132, "#4a9c58", 5) + A.ground(134, "#eef7ef");
    }
  });
  P.push({
    id: "butterflymobile", t: 1, name: "Butterfly Mobile", emoji: "🦋", level: "Medium", mins: 20,
    blurb: "Butterflies that turn slowly above a bed. Hang it where a draught can reach it.",
    needs: ["Coloured paper", "Scissors", "Thread or thin string", "Sticky tape",
            "A garden stick or a straw — or a wire coat hanger, if a grown-up bends it and checks the ends are not sharp"],
    steps: [
      "Fold a piece of paper in half and draw half a butterfly against the fold.",
      "Cut it out and open it. Make about eight, in different colours and sizes.",
      "Fold each butterfly gently down the middle again so the wings sit up in a V.",
      "Cut eight pieces of thread, all different lengths between 15 cm and 40 cm.",
      "Tape one end of each thread to the back of a butterfly, right on the middle fold.",
      "Tie the other ends along the stick, spaced out, with the longest in the middle.",
      "Tie one more piece of thread to each end of the stick and join them above to hang it.",
      "Hold it up and slide the threads along the stick until it balances."
    ],
    tip: "If one side dips, slide a butterfly along the stick rather than adding anything.",
    art: function () {
      var s = A.line(38, 34, 162, 34, "#a3763f", 4) +
        A.line(100, 12, 38, 34, "#c9c3d8", 1.4) + A.line(100, 12, 162, 34, "#c9c3d8", 1.4);
      var cols = ["#ff6b9d", "#4d96ff", "#f2b705", "#7c5cbf", "#2ec4b6"];
      [[52, 74], [80, 96], [108, 66], [134, 90], [160, 60]].forEach(function (p, i) {
        s += A.line(p[0], 34, p[0], p[1] - 10, "#c9c3d8", 1.2);
        s += A.poly((p[0] - 14) + "," + (p[1] - 10) + " " + p[0] + "," + p[1] + " " + (p[0] - 12) + "," + (p[1] + 8), cols[i]);
        s += A.poly((p[0] + 14) + "," + (p[1] - 10) + " " + p[0] + "," + p[1] + " " + (p[0] + 12) + "," + (p[1] + 8), cols[i]);
        s += A.ell(p[0], p[1], 2, 8, "#4a4560");
      });
      return s;
    }
  });
  P.push({
    id: "cactus", t: 1, name: "Paper Cactus in a Pot", emoji: "🌵", level: "Medium", mins: 15,
    blurb: "A houseplant that survives absolutely anything, including being forgotten.",
    needs: ["Green paper", "A small paper cup or a rolled paper pot", "Scissors", "Glue", "Scrunched paper or a stone to weigh it down"],
    steps: [
      "Cut four identical cactus shapes from green paper — a fat body with two arms.",
      "Fold each one exactly in half down the middle.",
      "Glue the right half of the first to the left half of the second.",
      "Keep going until all four are joined in a ring, then glue the last edge to the first.",
      "Open it out: the cactus is now round and stands up.",
      "Put the stone or scrunched paper in the bottom of the cup so it will not tip over.",
      "Glue the bottom of the cactus into the cup.",
      "Draw little white spines with a crayon, and add a paper flower on top if you like."
    ],
    tip: "All four shapes must be the same size or the cactus will lean. Cut them together in a stack.",
    art: function () {
      return A.ground(134, "#efe7dc") +
        A.path("M88 40 q12 -10 24 0 v66 h-24 z", "#2f9e44") +
        A.path("M88 62 q-18 0 -18 16 q0 12 12 12 h6 z", "#3aa64f") +
        A.path("M112 74 q18 0 18 14 q0 10 -12 10 h-6 z", "#3aa64f") +
        A.fold(100, 36, 100, 106) +
        A.poly("74,106 126,106 120,132 80,132", "#c9704a") +
        A.sheet(72, 100, 56, 9, "#e08a5f", 0, 3) +
        A.circ(100, 36, 5, "#ff6b9d") +
        A.line(94, 56, 94, 60, "#fff", 1.2) + A.line(106, 70, 106, 74, "#fff", 1.2) +
        A.line(94, 84, 94, 88, "#fff", 1.2);
    }
  });
  P.push({
    id: "fern", t: 1, name: "Paper Fern Frond", emoji: "🌿", level: "Easy", mins: 8,
    blurb: "One long strip, snipped along both sides, curls into a feathery fern.",
    needs: ["Green paper", "Scissors", "A pencil"],
    steps: [
      "Cut a strip of green paper about 5 cm wide and as long as the sheet.",
      "Fold the strip in half lengthways and crease it.",
      "Keeping it folded, snip in from the open edges towards the fold — about every 5 mm, stopping 5 mm short of the fold.",
      "Do this all the way along the strip.",
      "Open it out. You have a long stem with lots of thin leaves.",
      "Run each leaf over the edge of a pencil to make it curl.",
      "Bend the whole frond into a gentle curve."
    ],
    tip: "Cut the snips at a slight angle rather than straight across and the fern looks much more alive.",
    art: function () {
      var s = A.path("M40 118 Q80 96 100 60 Q116 32 156 26", "none", ' stroke="#2f6b32" stroke-width="3" fill="none" stroke-linecap="round"');
      for (var i = 0; i < 12; i++) {
        var t = i / 11;
        var x = 40 + t * 116, y = 118 - Math.pow(t, 0.75) * 92;
        var len = 20 - i * 1.2;
        s += A.ell(x - len / 2, y - 3, len / 2, 4, "#4ab55d", -30);
        s += A.ell(x + len / 2, y + 3, len / 2, 4, "#6bcb77", -30);
      }
      return s;
    }
  });

  // ==================== 2 · Cards & Keepsakes ====================
  P.push({
    id: "popheart", t: 2, name: "Pop-Up Heart Card", emoji: "💗", level: "Medium", mins: 12,
    blurb: "Open the card and a heart jumps out at whoever you gave it to.",
    needs: ["1 sheet of card for the outside", "1 sheet of red or pink paper", "Scissors", "Glue stick", "Pens"],
    steps: [
      "Fold the card in half and put it to one side — that is the outside.",
      "Fold the pink paper in half and draw half a heart against the fold.",
      "Cut it out and keep it folded.",
      "Cut two short parallel slits into the FOLD of the outer card, about 3 cm apart and 2 cm deep.",
      "Open the card and push that little tab through to the inside, then close the card and press it flat.",
      "Open it again — the tab now sticks out like a step.",
      "Put glue on the front of the tab and press one half of the heart onto it.",
      "Glue the other half of the heart to the other side of the tab. Close the card gently to check it folds flat."
    ],
    tip: "If the heart shows when the card is shut, it is too big. Trim it and try again.",
    art: function () {
      return A.sheet(38, 34, 124, 92, "#ffffff", -2, 4) +
        A.poly("100,34 100,126 38,118 38,42", "#f7f2ff") +
        A.fold(100, 34, 100, 126) +
        A.heart(100, 74, 3.4, "#ff6b9d") + A.heart(100, 72, 2.6, "#ff9db0") +
        A.line(56, 104, 84, 104, "#d9d2ea", 2) + A.line(56, 112, 76, 112, "#d9d2ea", 2) +
        A.line(118, 104, 146, 104, "#d9d2ea", 2);
    }
  });
  P.push({
    id: "accordioncard", t: 2, name: "Accordion Photo Card", emoji: "🖼️", level: "Medium", mins: 15,
    blurb: "A card that opens out into a long zigzag of pictures. Perfect for grandparents.",
    needs: ["A long strip of card (or two sheets taped end to end)", "Photos or drawings", "Glue stick", "Ribbon"],
    steps: [
      "Lay the strip flat and fold it in half.",
      "Fold each half back on itself, so the strip zigzags into four equal panels.",
      "Press all the folds hard, then open it out to check the zigzag stands up like a fan.",
      "Glue one photo or drawing onto each panel.",
      "Write a few words under each one — when it was, or who is in it.",
      "Fold it back up, wrap the ribbon around the middle, and tie a bow."
    ],
    tip: "Fold first, glue second. Glueing first makes the folds crack straight through the picture.",
    art: function () {
      var s = "";
      var xs = [30, 66, 102, 138];
      for (var i = 0; i < 4; i++) {
        s += A.sheet(xs[i], i % 2 ? 44 : 36, 34, 74, i % 2 ? "#f2eefc" : "#ffffff", i % 2 ? 4 : -4, 3);
        s += A.sheet(xs[i] + 5, (i % 2 ? 52 : 44), 24, 30, ["#7fc4ff", "#ffd166", "#8ce99a", "#ff9db0"][i], i % 2 ? 4 : -4, 2);
      }
      return s + A.ell(100, 128, 60, 6, "#ece7f7");
    }
  });
  P.push({
    id: "thankyou", t: 2, name: "Thank-You Card & Envelope", emoji: "💌", level: "Easy", mins: 10,
    blurb: "A card and the envelope it goes in, both from one sheet each. Everyone should be able to make these.",
    needs: ["2 sheets of paper (one plain, one patterned)", "Scissors", "Glue stick", "Pens"],
    steps: [
      "Fold the plain sheet in half — that is the card. Decorate the front and write inside.",
      "For the envelope, put the second sheet down as a diamond, patterned side facing down.",
      "Put the folded card in the middle to check the size.",
      "Fold the left and right corners in over the card so they nearly meet.",
      "Fold the bottom corner up over both of them and glue along its edges.",
      "Slide the card in and fold the top corner down to close it.",
      "Write the name on the front."
    ],
    tip: "Make the envelope around the card, never the other way round, and it always fits.",
    art: function () {
      return A.sheet(28, 48, 92, 66, "#ffffff", -6, 3) +
        A.line(40, 66, 92, 66, "#d9d2ea", 2) + A.line(40, 76, 78, 76, "#d9d2ea", 2) +
        A.heart(76, 96, 2, "#ff6b9d") +
        A.sheet(88, 60, 84, 58, "#ffd166", 5, 3) +
        A.poly("90,64 172,68 132,96", "#f2b705") +
        A.circ(160, 74, 5, "#ff6b9d");
    }
  });
  P.push({
    id: "handprintcard", t: 2, name: "Handprint Card", emoji: "🤚", level: "Easy", mins: 8,
    blurb: "Draw round your own hand. In ten years it will be the best thing in the drawer.",
    needs: ["Card", "A pencil", "Crayons or paint", "Scissors"],
    steps: [
      "Fold the card in half.",
      "Put your hand flat on the front with your thumb touching the folded edge.",
      "Draw carefully all the way round your hand with the pencil.",
      "Cut out the hand shape, but do NOT cut along the folded edge — that keeps the card joined.",
      "Open it up: two hands, joined at the thumb.",
      "Colour it in and write your message inside.",
      "Write your age and the date somewhere small on the back."
    ],
    tip: "Keep the pencil upright while you draw round, or the hand comes out fat.",
    art: function () {
      // Palm plus five separate fingers, rather than one clever path — it reads as a hand at
      // thumbnail size, which a single outline did not.
      var hand = function (cx, thumbDir) {
        var s = "";
        for (var i = 0; i < 4; i++) {
          var fx = cx + (i - 1.5) * 8.5;
          s += A.ell(fx, 68 + Math.abs(i - 1.5) * 5, 4.4, 16, "#ffd9c0", (i - 1.5) * 7);
        }
        s += A.ell(cx + thumbDir * 17, 92, 5, 11, "#ffd9c0", thumbDir * 45);
        return s + A.ell(cx, 92, 16, 19, "#ffd9c0");
      };
      return A.sheet(30, 26, 140, 104, "#f7f2ff", 0, 5) +
        A.fold(100, 26, 100, 130) + hand(68, 1) + hand(132, -1) +
        A.label(100, 122, "with love", "#a89ec4");
    }
  });
  P.push({
    id: "cakecard", t: 2, name: "Pop-Up Cake Card", emoji: "🎂", level: "Hard", mins: 20,
    blurb: "A three-layer cake that folds completely flat and springs up when the card opens.",
    needs: ["1 sheet of card", "Coloured paper", "Ruler", "Scissors", "Glue stick"],
    steps: [
      "Fold the card in half and open it again so you can see the middle crease.",
      "Cut a pair of parallel slits into the crease, 6 cm apart and 4 cm deep. That is the biggest cake layer.",
      "Cut a second pair inside the first, 4 cm apart and 3 cm deep.",
      "Cut a third pair inside those, 2 cm apart and 2 cm deep.",
      "Fold each tab forwards, then close the card and press flat so all three tabs pop inwards.",
      "Open the card — three steps stand up, biggest at the back.",
      "Cut coloured paper to cover the front of each step and glue it on.",
      "Cut thin strips for candles, glue them behind the top step, and add little flame shapes."
    ],
    tip: "Measure the slits. This is one of the few paper projects where guessing really does not work.",
    art: function () {
      return A.sheet(34, 28, 132, 100, "#ffffff", 0, 4) +
        A.poly("100,28 100,128 34,120 34,36", "#f7f2ff") +
        A.sheet(56, 92, 88, 22, "#ff9db0", 0, 3) +
        A.sheet(66, 74, 68, 20, "#ffd166", 0, 3) +
        A.sheet(78, 58, 44, 18, "#8ce99a", 0, 3) +
        A.line(88, 58, 88, 44, "#7c5cbf", 3) + A.line(100, 58, 100, 42, "#7c5cbf", 3) + A.line(112, 58, 112, 44, "#7c5cbf", 3) +
        A.ell(88, 42, 2.4, 4, "#ff9f68") + A.ell(100, 40, 2.4, 4, "#ff9f68") + A.ell(112, 42, 2.4, 4, "#ff9f68") +
        A.fold(100, 28, 100, 128);
    }
  });
  P.push({
    id: "cornerbookmark", t: 2, name: "Corner Bookmark Monster", emoji: "👹", level: "Medium", mins: 12,
    blurb: "A little monster that sits on the corner of the page and eats it while you are not reading.",
    needs: ["1 square of coloured paper", "Scraps of white and black paper", "Scissors", "Glue stick"],
    steps: [
      "Fold the square corner to corner into a triangle, long edge at the bottom.",
      "Fold the left and right corners up to the top point, so you have a smaller square standing on its corner.",
      "Open those two folds back out.",
      "Take just the TOP layer of the top point and fold it down to the bottom edge.",
      "Now fold the left and right corners up again — and tuck them INTO the pocket you just made.",
      "Turn it over. You have a triangle with a pocket that slides onto a page corner.",
      "Cut zigzag teeth from white paper and glue them just inside the opening.",
      "Cut two white circles with black dots for eyes and glue them on top."
    ],
    tip: "Tuck the corners deep into the pocket or the monster will not hold onto the page.",
    art: function () {
      return A.sheet(96, 34, 66, 84, "#ffffff", 6, 2) +
        A.poly("46,40 142,40 94,120", "#6bcb77") +
        A.poly("60,74 128,74 94,108", "#f7fff4") +
        A.poly("60,74 70,88 80,74 90,88 100,74 110,88 120,74 128,74 94,108", "#ffffff") +
        A.circ(76, 60, 10, "#ffffff") + A.circ(108, 58, 12, "#ffffff") +
        A.circ(78, 61, 4.4, "#2d2a4a") + A.circ(110, 59, 5.2, "#2d2a4a") +
        A.line(58, 42, 68, 30, "#4a9c58", 3) + A.line(126, 42, 118, 28, "#4a9c58", 3) +
        A.circ(68, 28, 3.4, "#ff6b9d") + A.circ(118, 26, 3.4, "#ff6b9d");
    }
  });
  P.push({
    id: "photoframe", t: 2, name: "Paper Photo Frame", emoji: "🖼️", level: "Easy", mins: 10,
    blurb: "A frame with a fold-out leg, so it stands up on a shelf on its own.",
    needs: ["Thick card", "Scissors", "Ruler", "Glue", "A photo or drawing"],
    steps: [
      "Cut two rectangles of card the same size, a bit bigger than your picture.",
      "On the first, draw a window 1 cm smaller than the picture all the way round, and cut it out.",
      "Glue the two rectangles together along the bottom and both sides — but leave the TOP open.",
      "Slide the picture in through the top.",
      "Cut a long triangle of card for the stand.",
      "Fold 2 cm over at the top of the triangle and glue that flap to the back of the frame.",
      "Stand it up and bend the leg until it stops tipping backwards."
    ],
    tip: "Decorate the frame BEFORE you put the photo in. It is much easier flat.",
    art: function () {
      return A.ground(132) +
        A.sheet(52, 30, 96, 92, "#8a5f2e", -3, 4) +
        A.sheet(62, 40, 76, 72, "#7fc4ff", -3, 2) +
        A.poly("66,102 92,72 112,102", "#4a9c58", ' transform="rotate(-3 100 76)"') +
        A.circ(120, 58, 8, "#ffd166", ' transform="rotate(-3 100 76)"') +
        A.poly("136,112 156,120 136,126", "#6d4c22");
    }
  });
  P.push({
    id: "minibook", t: 2, name: "Mini Memory Book", emoji: "📓", level: "Medium", mins: 12,
    blurb: "An eight-page book from ONE sheet of paper, with one clever cut. No staples, no glue.",
    needs: ["1 sheet of paper", "Scissors", "Pens"],
    steps: [
      "Fold the sheet in half the short way, and open it.",
      "Fold it in half the long way, and open it.",
      "Fold each long edge in to the middle crease, then open everything out. You should see eight rectangles.",
      "Fold the sheet in half the short way again.",
      "Cut along the middle crease from the FOLDED edge, but stop at the centre of the sheet. You have made a slit in the middle.",
      "Open the sheet out and fold it in half the long way.",
      "Hold both ends and push them towards each other — the slit opens into a diamond and the pages fold round into a book.",
      "Flatten it into a book shape and press the spine. Now fill in the pages."
    ],
    tip: "Number the pages lightly in pencil before you cut, so you know which way up each one goes.",
    art: function () {
      return A.ground(130) +
        A.sheet(50, 44, 54, 72, "#f2eefc", -8, 3) +
        A.sheet(96, 40, 54, 72, "#ffffff", 5, 3) +
        A.line(108, 58, 140, 60, "#d9d2ea", 2) + A.line(108, 68, 134, 70, "#d9d2ea", 2) +
        A.line(108, 78, 138, 80, "#d9d2ea", 2) + A.line(108, 88, 128, 90, "#d9d2ea", 2) +
        A.heart(74, 74, 2.2, "#ff9db0") +
        A.line(100, 40, 100, 116, "#c9c3d8", 2);
    }
  });
  P.push({
    id: "secretcard", t: 2, name: "Secret Message Card", emoji: "🔐", level: "Medium", mins: 12,
    blurb: "Folds shut into a little square with a hidden catch. Only someone who knows can open it.",
    needs: ["1 square of paper", "Pens", "A sticker or a small paper heart"],
    steps: [
      "Write your message in the very middle of the square.",
      "Fold all four corners in to the centre so they meet. The message is hidden.",
      "Turn it over.",
      "Fold all four corners in to the centre on this side too.",
      "Turn it back over and fold the whole thing in half.",
      "Unfold once, and you will find you can tuck the last corner under the flap opposite it. That is the catch.",
      "Decorate the outside and stick your sticker over the catch so it stays shut."
    ],
    tip: "Write the message first. Once it is folded you cannot get back in without undoing everything.",
    art: function () {
      return A.sheet(44, 32, 112, 94, "#ffd166", -4, 3) +
        A.poly("100,32 156,80 100,126 44,80", "#ffe9a8", ' transform="rotate(-4 100 79)"') +
        A.poly("100,54 132,80 100,106 68,80", "#fff8e1", ' transform="rotate(-4 100 79)"') +
        A.line(84, 76, 116, 76, "#c9a227", 1.8) + A.line(84, 84, 108, 84, "#c9a227", 1.8) +
        A.heart(100, 40, 2, "#ff6b9d") +
        A.fold(44, 80, 156, 80) + A.fold(100, 32, 100, 126);
    }
  });
  P.push({
    id: "bouquetcard", t: 2, name: "Bouquet Card", emoji: "💐", level: "Hard", mins: 22,
    blurb: "Open it and a whole bunch of flowers fans out. The best get-well card there is.",
    needs: ["1 sheet of card", "Coloured paper", "Green paper", "Scissors", "Glue stick"],
    steps: [
      "Fold the card in half.",
      "Cut five strips of green paper about 8 cm long for the stems.",
      "Glue all five stems to the inside of the card so they fan out from one point near the bottom.",
      "Cut five small flowers, each from a folded square so the petals match.",
      "Glue one flower to the top of each stem — but glue ONLY the centre, so the petals stay loose.",
      "Cut a paper band and glue it across where the stems meet, like a ribbon holding the bunch.",
      "Fold the petals up towards the middle so the card can shut.",
      "Write your message beside the bouquet."
    ],
    tip: "Glue only the middle of each flower. Glue the petals down and the card will not close.",
    art: function () {
      var s = A.sheet(34, 28, 132, 100, "#ffffff", 0, 4) + A.poly("100,28 100,128 34,120 34,36", "#f9f6ff");
      var tips = [[62, 54], [78, 44], [100, 40], [122, 44], [138, 54]];
      tips.forEach(function (t, i) {
        s += A.path("M100 108 Q" + ((100 + t[0]) / 2) + " " + (t[1] + 26) + " " + t[0] + " " + t[1], "none",
          ' stroke="#4a9c58" stroke-width="2.4" fill="none"');
      });
      var cols = ["#ff6b9d", "#ffd166", "#7c5cbf", "#4d96ff", "#ff9f68"];
      tips.forEach(function (t, i) {
        s += A.petals(t[0], t[1], 7, 5, 5.4, 4, cols[i]) + A.circ(t[0], t[1], 3.4, "#fff8e1");
      });
      return s + A.sheet(86, 104, 30, 12, "#ff9f68", 0, 3) + A.fold(100, 28, 100, 128);
    }
  });

  // ==================== 3 · Party Decorations ====================
  P.push({
    id: "paperchain", t: 3, name: "Paper Chain", emoji: "⛓️", level: "Easy", mins: 10,
    blurb: "The one everybody knows. Still the fastest way to make a room look like a party.",
    needs: ["Coloured paper", "Scissors", "Glue stick or sticky tape"],
    steps: [
      "Cut the paper into strips about 3 cm wide and 15 cm long. Cut lots.",
      "Take one strip, bend it into a loop and glue the ends together. Hold for ten seconds.",
      "Thread the next strip through that loop before you glue its ends.",
      "Keep going, always threading through the last loop first.",
      "Change colour every few links so it makes a pattern.",
      "When it is as long as you want, tape each end up high."
    ],
    tip: "Cut every strip before you start glueing. Stopping to cut breaks the rhythm.",
    art: function () {
      return A.chain(30, 64, 9, ["#ff6b9d", "#ffd166", "#4d96ff", "#6bcb77", "#ff9f68"], 18) +
        A.label(100, 116, "loop, thread, glue", "#a89ec4");
    }
  });
  P.push({
    id: "paperfan", t: 3, name: "Concertina Fan", emoji: "🪭", level: "Easy", mins: 6,
    blurb: "Fold, staple, open. Useful on a hot day and it takes about five minutes.",
    needs: ["1 sheet of paper", "A stapler or sticky tape", "Crayons"],
    steps: [
      "Decorate both sides of the paper first — once it is folded you cannot reach the inside.",
      "Lay it landscape and fold 2 cm over from the short edge.",
      "Turn the paper over and fold another 2 cm the other way.",
      "Keep turning and folding until the whole sheet is a concertina strip.",
      "Squeeze one end tightly and staple or tape it so it cannot open.",
      "Fan out the other end."
    ],
    tip: "Keep every fold the same width by folding the last one over as a measure.",
    art: function () {
      return A.fan(100, 118, 74, 9, "#ff9f68", "#ffd166", 200, 340) +
        A.circ(100, 118, 8, "#8a5f2e") +
        A.label(100, 42, "fold, fold, fold", "#c9a227");
    }
  });
  P.push({
    id: "bunting", t: 3, name: "Bunting Flags", emoji: "🎏", level: "Easy", mins: 15,
    blurb: "A line of triangles across the room. Write a letter on each one to spell a name.",
    needs: ["Coloured paper", "Scissors", "String", "Glue stick", "Pens"],
    steps: [
      "Cut a triangle from card to use as a template — about 15 cm across the top.",
      "Draw round it on coloured paper and cut out as many flags as you need.",
      "Write one big letter on each flag if you are spelling something.",
      "Lay the string out flat on the table.",
      "Fold the top 2 cm of each flag over the string.",
      "Glue that folded flap down onto the back of the flag, trapping the string inside.",
      "Space the flags evenly and let them dry before you hang it."
    ],
    tip: "Fold the flap over the string rather than glueing the flag flat to it — it hangs much better.",
    art: function () {
      var s = A.path("M18 40 Q100 62 182 40", "none", ' stroke="#c9b892" stroke-width="2" fill="none"');
      var cols = ["#ff6b9d", "#ffd166", "#4d96ff", "#6bcb77", "#ff9f68", "#7c5cbf"];
      for (var i = 0; i < 6; i++) {
        var t = i / 5, x = 26 + t * 148, y = 42 + Math.sin(t * Math.PI) * 18;
        s += A.poly((x - 13) + "," + y + " " + (x + 13) + "," + y + " " + x + "," + (y + 32), cols[i]);
      }
      return s + A.label(100, 128, "P A R T Y", "#a89ec4");
    }
  });
  P.push({
    id: "rosette", t: 3, name: "Paper Rosette", emoji: "🏵️", level: "Medium", mins: 12,
    blurb: "A big pleated medal for the wall, or a smaller one to pin on a birthday jumper.",
    needs: ["2 sheets of paper", "Scissors", "Glue", "A circle of card for the middle"],
    steps: [
      "Fold each sheet into a concertina with folds about 1.5 cm wide.",
      "Fold each folded strip in half and glue the two inside edges together, so each sheet becomes a half circle.",
      "Glue the two half circles to each other to make one full circle.",
      "Press it flat and hold until the glue grabs.",
      "Glue the card circle over the middle to hide the joins.",
      "Cut two ribbon shapes and glue them behind the bottom edge."
    ],
    tip: "Every pleat must be the same width or the circle will not close neatly.",
    art: function () {
      return A.fan(100, 70, 40, 20, "#4d96ff", "#7fc4ff", 0, 360) +
        A.circ(100, 70, 16, "#ffd166") + A.star(100, 70, 10, "#f2b705") +
        A.poly("88,104 80,132 96,124 96,104", "#1f6feb") +
        A.poly("112,104 120,132 104,124 104,104", "#1f6feb");
    }
  });
  P.push({
    id: "lantern", t: 3, name: "Paper Lantern", emoji: "🏮", level: "Easy", mins: 8,
    blurb: "One sheet, a row of cuts, and it becomes a round lantern. Never put a real candle in it.",
    needs: ["1 sheet of coloured paper", "Scissors", "Glue or tape", "String"],
    steps: [
      "Cut a strip 3 cm wide off one long side and put it aside — that becomes the handle.",
      "Fold the rest of the sheet in half the long way.",
      "Cut from the FOLDED edge towards the open edges, stopping 3 cm short. Make a cut every 2 cm.",
      "Open the sheet out flat.",
      "Bend it round into a tube so the two short edges meet, and glue them together.",
      "Squash it gently from the top and bottom so the middle bulges out.",
      "Glue the handle strip across the top."
    ],
    tip: "Battery tea lights only. Paper and flames do not mix.",
    art: function () {
      var s = A.path("M64 34 Q54 74 64 114 L136 114 Q146 74 136 34 Z", "#e2453b");
      for (var i = 1; i < 8; i++) {
        var x = 64 + i * 9;
        s += A.path("M" + x + " 34 Q" + (x - 8 + (i > 4 ? 16 : 0)) + " 74 " + x + " 114", "none",
          ' stroke="#b52f2a" stroke-width="1.4" fill="none"');
      }
      return s + A.sheet(60, 28, 80, 8, "#8a1f1a", 0, 3) + A.sheet(60, 112, 80, 8, "#8a1f1a", 0, 3) +
        A.path("M100 28 Q100 16 100 12", "none", ' stroke="#c9b892" stroke-width="2" fill="none"') +
        A.line(72, 122, 72, 134, "#ffd166", 2) + A.line(100, 122, 100, 138, "#ffd166", 2) +
        A.line(128, 122, 128, 134, "#ffd166", 2);
    }
  });
  P.push({
    id: "pompomgarland", t: 3, name: "Pom-Pom Garland", emoji: "🎊", level: "Medium", mins: 18,
    blurb: "Fluffy paper balls in a row. It looks far harder than it is.",
    needs: ["Tissue paper", "Scissors", "String", "Thread or thin wire"],
    steps: [
      "Cut the tissue into rectangles about 15 cm by 20 cm. You need six per pom-pom.",
      "Stack six and fold the stack into a concertina with 2 cm folds.",
      "Tie thread tightly round the middle of the folded strip, leaving long ends.",
      "Round both ends of the strip with scissors.",
      "Open it out and separate the layers one at a time, fluffing as you go.",
      "Make five or six pom-poms.",
      "Tie each one onto the long string by its thread ends, spaced a hand apart."
    ],
    tip: "Six layers is the sweet spot. Fewer looks thin, more will not fluff properly.",
    art: function () {
      var s = A.path("M16 40 Q100 58 184 40", "none", ' stroke="#c9b892" stroke-width="2" fill="none"');
      var cols = ["#ff9db0", "#ffd166", "#8ce99a", "#7fc4ff", "#b39ddb"];
      for (var i = 0; i < 5; i++) {
        var t = i / 4, x = 30 + t * 140, y = 44 + Math.sin(t * Math.PI) * 14;
        s += A.line(x, y, x, y + 14, "#c9c3d8", 1.2);
        s += A.petals(x, y + 26, 7, 8, 8, 6, cols[i]) + A.circ(x, y + 26, 6, cols[i]);
      }
      return s;
    }
  });
  P.push({
    id: "stargarland", t: 3, name: "Star Garland", emoji: "⭐", level: "Medium", mins: 16,
    blurb: "Puffy 3D stars strung in a line. They catch the light from both sides.",
    needs: ["Card or thick paper", "Scissors", "A pencil", "Glue", "String", "A needle (ask a grown-up)"],
    steps: [
      "Cut out two identical stars for every finished star you want.",
      "On each star, draw a line from every point to the middle.",
      "Fold along each of those lines so the star is not flat any more — points up, valleys between.",
      "Glue the two stars back to back, so both puffy sides face outwards.",
      "Ask a grown-up to thread a needle and pass the string through the top point of each star.",
      "Slide the stars along the string and space them out.",
      "Tie a loop at each end for hanging."
    ],
    tip: "Fold both stars the SAME way before glueing, or they will not sit together.",
    art: function () {
      var s = A.path("M16 32 Q100 48 184 32", "none", ' stroke="#c9b892" stroke-width="2" fill="none"');
      var cols = ["#ffd166", "#f2b705", "#fff3c4", "#ffd166", "#f2b705"];
      for (var i = 0; i < 5; i++) {
        var t = i / 4, x = 30 + t * 140, y = 36 + Math.sin(t * Math.PI) * 12;
        s += A.line(x, y, x, y + 16, "#c9c3d8", 1.2);
        s += A.star(x, y + 32, 16, cols[i]);
        s += A.star(x, y + 32, 7, "#fff8e1");
      }
      return s;
    }
  });
  P.push({
    id: "snowflake", t: 3, name: "Six-Point Snowflake", emoji: "❄️", level: "Medium", mins: 10,
    blurb: "Real snowflakes have six sides, not four or eight. This is how you fold a proper one.",
    needs: ["1 square of thin white paper", "Scissors", "A pencil"],
    steps: [
      "Fold the square corner to corner into a triangle.",
      "Fold that triangle in half again into a smaller triangle. Find the middle of the long edge and pinch it.",
      "Fold the left third across to the right, using the pinch as the pivot.",
      "Fold the right third across on top of it. You now have a narrow wedge with all six sides stacked.",
      "Cut straight across the bottom to tidy the ragged ends.",
      "Snip shapes out of both long sides of the wedge — triangles, squares, curves. Do not cut all the way across.",
      "Open it out very carefully and press it flat under a book."
    ],
    tip: "Cut more away than feels safe. Timid cuts make a snowflake that just looks like a circle.",
    art: function () {
      var s = "";
      for (var i = 0; i < 6; i++) {
        var a = i * 60 * Math.PI / 180;
        var x2 = 100 + Math.cos(a) * 46, y2 = 74 + Math.sin(a) * 46;
        s += A.line(100, 74, x2, y2, "#7fc4ff", 5);
        s += A.line(100 + Math.cos(a) * 26, 74 + Math.sin(a) * 26,
          100 + Math.cos(a) * 26 + Math.cos(a + 1) * 14, 74 + Math.sin(a) * 26 + Math.sin(a + 1) * 14, "#7fc4ff", 3.4);
        s += A.line(100 + Math.cos(a) * 26, 74 + Math.sin(a) * 26,
          100 + Math.cos(a) * 26 + Math.cos(a - 1) * 14, 74 + Math.sin(a) * 26 + Math.sin(a - 1) * 14, "#7fc4ff", 3.4);
        s += A.circ(x2, y2, 4, "#cfe3f7");
      }
      return s + A.circ(100, 74, 8, "#e6f4ff");
    }
  });
  P.push({
    id: "placecards", t: 3, name: "Table Place Cards", emoji: "🍽️", level: "Easy", mins: 10,
    blurb: "Little folded tents with everybody's name on. They make an ordinary dinner feel like an occasion.",
    needs: ["Card", "Scissors", "Pens", "Ruler"],
    steps: [
      "Cut a rectangle of card about 10 cm by 6 cm for each person.",
      "Fold each one in half so it stands up like a tent.",
      "Write the name on one side in your best writing.",
      "Draw something small next to each name that suits that person.",
      "Cut a tiny shape from coloured paper and glue it on as decoration.",
      "Stand one on each plate before everybody sits down."
    ],
    tip: "Write the name on the FRONT of the tent while it is folded, so it ends up the right way up.",
    art: function () {
      return A.ground(126) +
        A.poly("36,116 76,116 62,64 46,64", "#ffffff") + A.poly("46,64 62,64 76,116 36,116", "#f4f0fb") +
        A.poly("84,120 128,120 116,58 96,58", "#ffffff") +
        A.poly("136,116 176,116 164,68 148,68", "#fff3c4") +
        A.label(106, 92, "Mum", "#7c5cbf") + A.label(56, 96, "Sam", "#4d96ff") +
        A.heart(160, 92, 1.6, "#ff9db0");
    }
  });
  P.push({
    id: "giantflower", t: 3, name: "Giant Wall Flower", emoji: "🌼", level: "Hard", mins: 30,
    blurb: "A flower as big as your head for the wall behind the birthday table.",
    needs: ["6 large sheets of coloured paper", "Scissors", "Glue", "A circle of card", "Sticky tack"],
    steps: [
      "Cut eight big petal shapes from the paper — each one a long teardrop about 25 cm.",
      "Cut a slit about 4 cm long into the bottom of each petal.",
      "Overlap the two sides of the slit and glue them. That makes the petal cup instead of lying flat.",
      "Glue the petals around the edge of the card circle, pointing outwards.",
      "Cut six slightly smaller petals and glue them in a second ring, sitting between the first ones.",
      "Cut four smaller petals still and curl their tips round a pencil.",
      "Glue those in the middle, curled tips pointing inwards.",
      "Stick it to the wall with sticky tack at the back of the card circle."
    ],
    tip: "Make three at slightly different sizes and group them. One giant flower on its own looks lonely.",
    art: function () {
      return A.petals(100, 74, 34, 8, 20, 12, "#ff9f68") +
        A.petals(100, 74, 22, 6, 15, 10, "#ffd166") +
        A.petals(100, 74, 10, 4, 10, 7, "#fff3c4") +
        A.circ(100, 74, 9, "#e08a5f");
    }
  });

  // ==================== 4 · Toys That Move ====================
  P.push({
    id: "pinwheel", t: 4, name: "Pinwheel", emoji: "🌀", level: "Medium", mins: 12,
    blurb: "Hold it out of a car window or just blow. Either way it spins.",
    needs: ["1 square of paper", "A pencil with a rubber on the end", "A push pin (a grown-up job)", "A small paper bead or button", "Scissors"],
    steps: [
      "Draw two lines corner to corner across the square so you have an X.",
      "Cut along each line from the corner towards the middle, but STOP about 2 cm short of the centre.",
      "You now have four triangles each with two points at the corner.",
      "Take the LEFT point of the first triangle and bend it into the centre. Do not crease it — leave it curved.",
      "Do the same with the left point of the other three, so all four meet in the middle.",
      "Hold all four points down with your thumb.",
      "Ask a grown-up to push the pin through all four points and the centre, then into the pencil rubber.",
      "Slide the little bead onto the pin first if you have one, so the wheel spins freely."
    ],
    tip: "Do not crease the folded points. A curved petal catches the wind; a creased one does not.",
    art: function () {
      var s = "";
      var cols = ["#ff6b9d", "#4d96ff", "#ffd166", "#6bcb77"];
      for (var i = 0; i < 4; i++) {
        var a = i * 90;
        s += '<g transform="rotate(' + a + ' 100 66)">' +
          A.path("M100 66 L100 22 Q128 26 130 52 Z", cols[i]) + '</g>';
      }
      return s + A.circ(100, 66, 6, "#4a4560") +
        A.line(100, 72, 100, 134, "#c9a227", 5) + A.ground(136, "#ece7f7");
    }
  });
  P.push({
    id: "spinner", t: 4, name: "Spinning Top", emoji: "🔄", level: "Medium", mins: 8,
    blurb: "A disc and a toothpick. Time whose top spins longest.",
    needs: ["Thick card", "A toothpick or short pencil", "Scissors", "Crayons", "A coin to draw round"],
    steps: [
      "Draw round the coin on the card twice and cut out both circles.",
      "Colour the top of one circle in sections, like a wheel — the colours blur when it spins.",
      "Make a small hole in the exact centre of both circles.",
      "Push the toothpick through both, so they sit together as one thicker disc.",
      "Slide the disc down until it is a third of the way up the toothpick.",
      "Spin it on a smooth flat surface."
    ],
    tip: "The hole must be dead centre or it will wobble and stop. Fold the circle in half twice to find the middle.",
    art: function () {
      var s = "";
      var cols = ["#ff6b9d", "#ffd166", "#4d96ff", "#6bcb77", "#ff9f68", "#7c5cbf"];
      for (var i = 0; i < 6; i++) {
        var a1 = i * 60 * Math.PI / 180, a2 = (i + 1) * 60 * Math.PI / 180;
        s += A.poly("100,70 " + (100 + Math.cos(a1) * 40).toFixed(1) + "," + (70 + Math.sin(a1) * 40).toFixed(1) +
          " " + (100 + Math.cos(a2) * 40).toFixed(1) + "," + (70 + Math.sin(a2) * 40).toFixed(1), cols[i]);
      }
      return s + A.circ(100, 70, 40, "none", ' stroke="#fff" stroke-width="2"') +
        A.line(100, 46, 100, 122, "#a3763f", 3.4) + A.circ(100, 70, 4, "#4a4560") +
        A.path("M60 100 Q100 118 140 100", "none", ' stroke="#c9c3d8" stroke-width="1.6" fill="none" stroke-dasharray="4 4"') +
        A.ground(128, "#ece7f7");
    }
  });
  P.push({
    id: "flappingbird", t: 4, name: "Flapping Bird", emoji: "🐦", level: "Hard", mins: 22,
    blurb: "Pull its tail and the wings really flap. The crane's clever cousin.",
    needs: ["1 square of thin paper (15 cm)"],
    steps: [
      "Make the square base exactly as for the crane: fold both ways, turn over, fold corner to corner both ways, then collapse it into a small square.",
      "With the loose points at the bottom, fold the lower edges of the top layer in to the centre, fold the top triangle down, then open all three out again.",
      "Lift the bottom point up and press the sides in to make a long diamond. Repeat on the back.",
      "Fold the lower edges in to the centre line on both sides.",
      "Pull the two inner points out sideways and crease them so they stay put.",
      "Bend the tip of one down to make a beak — that one is the head.",
      "Now the difference from the crane: fold the wings DOWN flat against the body instead of opening them out.",
      "Hold the body under the wings with one hand and pull the tail gently with the other. The wings flap."
    ],
    tip: "Hold the body, not the wings, or nothing will move.",
    art: function () {
      return A.poly("100,80 40,54 56,86", "#7fc4ff") +
        A.poly("100,80 160,54 144,86", "#4d96ff") +
        A.poly("100,52 116,92 84,92", "#1f6feb") +
        A.poly("100,52 70,30 82,52", "#7fc4ff") + A.poly("70,30 60,32 72,38", "#ffd166") +
        A.poly("100,60 140,110 128,84", "#1f6feb") +
        A.circ(74, 34, 1.8, "#2d2a4a") +
        A.path("M136 104 q10 6 16 2", "none", ' stroke="#b8b2cc" stroke-width="1.6" fill="none" stroke-dasharray="3 3"') +
        A.label(158, 118, "pull", "#a89ec4");
    }
  });
  P.push({
    id: "helicopter", t: 4, name: "Paper Helicopter", emoji: "🚁", level: "Easy", mins: 6,
    blurb: "Drop it from the top of the stairs and it spins all the way down.",
    needs: ["1 strip of paper about 5 cm by 20 cm", "Scissors", "1 paper clip"],
    steps: [
      "Cut a slit down the middle from the TOP, stopping halfway.",
      "Cut a short slit in from each side, about a third of the way up from the bottom.",
      "Fold the two bottom side flaps inwards over each other so the base is narrow.",
      "Fold the very bottom up and slide the paper clip on to hold it.",
      "Fold one top blade towards you and the other one away from you.",
      "Hold it up as high as you safely can and drop it."
    ],
    tip: "Both blades must fold in OPPOSITE directions. Fold them the same way and it just falls.",
    art: function () {
      return A.sheet(92, 76, 16, 46, "#ffd166", 0, 2) +
        A.poly("92,76 60,52 76,74 92,74", "#f2b705") +
        A.poly("108,76 140,52 124,74 108,74", "#ffe9a8") +
        A.sheet(90, 112, 20, 12, "#c9c3d8", 0, 3) +
        A.path("M150 40 q14 22 0 44", "none", ' stroke="#c9c3d8" stroke-width="1.6" fill="none" stroke-dasharray="4 4"') +
        A.label(100, 138, "spin!", "#c9a227");
    }
  });
  P.push({
    id: "jumpingjack", t: 4, name: "Jumping Jack Puppet", emoji: "🕺", level: "Hard", mins: 25,
    blurb: "Pull the string and its arms and legs fly up. A toy from two hundred years ago that still works.",
    needs: ["Thick card", "Scissors", "4 paper fasteners (or knotted string)", "String", "A hole punch or a pencil", "Pens"],
    steps: [
      "Cut five pieces from card: one body, two arms and two legs. Make the arms and legs a bit longer than you think.",
      "Punch a hole at the top of each arm and leg, and a matching hole on the body at each shoulder and hip.",
      "Punch a SECOND hole in each arm and leg, just to the inside of the first one.",
      "Join each limb to the body through the first holes with a paper fastener. Do not do them up tightly — the limbs must swing.",
      "Turn it over. Tie a short string across between the two arms, threading through their second holes.",
      "Tie another short string across between the two legs the same way.",
      "Tie one long string to the middle of the arm string, then to the middle of the leg string, and let the rest hang below.",
      "Decorate the front, hang it up by the head, and pull the long string."
    ],
    tip: "The two cross strings must be slack when the limbs hang down, or nothing will jump.",
    art: function () {
      return A.circ(100, 40, 14, "#ffd9c0") + A.face(100, 38, 1) +
        A.sheet(88, 54, 24, 38, "#4d96ff", 0, 4) +
        A.sheet(60, 52, 26, 9, "#ff9f68", -34, 4) + A.sheet(114, 52, 26, 9, "#ff9f68", 34, 4) +
        A.sheet(72, 92, 10, 30, "#7c5cbf", -18, 4) + A.sheet(118, 92, 10, 30, "#7c5cbf", 18, 4) +
        A.line(74, 56, 126, 56, "#c9c3d8", 1.2) + A.line(78, 96, 122, 96, "#c9c3d8", 1.2) +
        A.line(100, 56, 100, 138, "#a89ec4", 1.6) + A.circ(100, 138, 4, "#a89ec4") +
        A.circ(76, 56, 2, "#4a4560") + A.circ(124, 56, 2, "#4a4560");
    }
  });
  P.push({
    id: "cupball", t: 4, name: "Cup and Ball Game", emoji: "🥤", level: "Medium", mins: 12,
    blurb: "Swing the ball, catch it in the cup. Much harder than it looks.",
    needs: ["A paper cup", "String about 40 cm", "Newspaper or scrap paper", "Sticky tape", "Sticky tape"],
    steps: [
      "Scrunch the scrap paper into a tight ball about the size of a walnut.",
      "Wrap sticky tape all around it until it is firm and smooth.",
      "Tape one end of the string firmly to the ball.",
      "Make a small hole in the bottom of the cup with a pencil.",
      "Thread the other end of the string up through the hole from outside.",
      "Tie a big knot inside the cup so the string cannot pull back out, and tape over the knot.",
      "Decorate the outside of the cup.",
      "Hold the cup, swing the ball up, and try to catch it."
    ],
    tip: "Shorter string is much easier. Start at 30 cm and lengthen it once you can catch it every time.",
    art: function () {
      return A.ground(134) +
        A.poly("76,64 124,64 116,116 84,116", "#ff6b9d") +
        A.sheet(74, 60, 52, 9, "#e05586", 0, 4) +
        A.path("M100 116 Q140 106 146 62", "none", ' stroke="#c9b892" stroke-width="1.6" fill="none"') +
        A.circ(146, 56, 11, "#ffd166") + A.circ(143, 53, 3, "#fff8e1") +
        A.path("M118 40 q16 6 24 12", "none", ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="3 3"');
    }
  });
  P.push({
    id: "fingerpuppets", t: 4, name: "Finger Puppets", emoji: "🖐️", level: "Easy", mins: 10,
    blurb: "A whole cast on one hand. Put on a show over the back of the sofa.",
    needs: ["Coloured paper", "Scissors", "Sticky tape", "Pens", "Scraps of wool or paper for hair"],
    steps: [
      "Cut a strip of paper about 6 cm by 8 cm for each puppet.",
      "Wrap one round your finger to check the size, then tape it into a tube.",
      "Slide it off your finger.",
      "Draw a face on the front of the tube.",
      "Cut out ears, hair, a hat or a beak from scraps and tape them on.",
      "Make one for each finger so you have a whole family.",
      "Practise a different voice for each one."
    ],
    tip: "Make the tube slightly loose. Too tight and it will not come off again.",
    art: function () {
      var s = A.ground(134);
      var cols = ["#ff6b9d", "#4d96ff", "#ffd166", "#6bcb77"];
      for (var i = 0; i < 4; i++) {
        var x = 42 + i * 38, h = 54 + (i % 2) * 10;
        s += A.poly((x - 15) + ",128 " + (x + 15) + ",128 " + (x + 13) + "," + h + " " + (x - 13) + "," + h, cols[i]);
        s += A.face(x, h + 22, 1);
        if (i === 0) s += A.poly((x - 14) + "," + h + " " + x + "," + (h - 16) + " " + (x + 14) + "," + h, "#e05586");
        if (i === 1) s += A.circ(x - 12, h + 4, 6, "#1f6feb") + A.circ(x + 12, h + 4, 6, "#1f6feb");
        if (i === 2) s += A.sheet(x - 16, h - 8, 32, 8, "#c9a227", 0, 3);
        if (i === 3) s += A.poly((x - 12) + "," + h + " " + (x - 6) + "," + (h - 12) + " " + x + "," + h, "#4a9c58");
      }
      return s;
    }
  });
  P.push({
    id: "paperspring", t: 4, name: "Paper Spring", emoji: "🪗", level: "Easy", mins: 8,
    blurb: "Two strips folded over each other make a bouncy paper spring. Stick one behind a card and it pops.",
    needs: ["2 strips of paper the same width (about 2 cm)", "Glue stick"],
    steps: [
      "Glue the two strips together at one end so they make an L shape.",
      "Fold the bottom strip up over the top one, and press the crease.",
      "Now fold the other strip over that one, and press.",
      "Keep going, always folding the bottom strip over the top one.",
      "Do not pull it tight — the folds should stack up loosely.",
      "When you run out of paper, glue the last two ends together.",
      "Squash it down and let go."
    ],
    tip: "Long strips make a long spring. Tape two strips end to end before you start for an extra bouncy one.",
    art: function () {
      var s = "";
      for (var i = 0; i < 9; i++) {
        s += A.sheet(66 + (i % 2 ? 6 : 0), 30 + i * 11, 62, 8, i % 2 ? "#ff9f68" : "#4d96ff", 0, 2);
      }
      return s + A.path("M148 40 q12 34 0 68", "none", ' stroke="#c9c3d8" stroke-width="1.6" fill="none" stroke-dasharray="4 4"') +
        A.label(164, 78, "boing", "#a89ec4");
    }
  });
  P.push({
    id: "popper", t: 4, name: "Paper Popper", emoji: "💥", level: "Medium", mins: 6,
    blurb: "Swing it down hard and it makes a loud BANG. Best played outside.",
    needs: ["1 sheet of paper (the bigger the louder)"],
    steps: [
      "Fold the sheet in half the long way, crease it, and open it out.",
      "Fold all four corners in to that middle crease, so you have a long pointed shape.",
      "Fold the whole thing in half along the middle crease again.",
      "Fold it in half the other way to find the centre, then open that fold back out.",
      "Fold the two top corners down to the centre line so a triangle points down.",
      "Fold the whole thing in half backwards along the last crease.",
      "Hold the two loose bottom corners between finger and thumb and swing it down sharply through the air."
    ],
    tip: "It only bangs if the inner flap can whip out. If it stays silent, loosen that pocket.",
    art: function () {
      return A.poly("58,42 142,42 100,96 58,96", "#7fc4ff") +
        A.poly("58,42 100,42 100,96", "#4d96ff") +
        A.poly("100,42 142,42 100,96", "#1f6feb") +
        A.poly("100,96 88,124 112,124", "#cfe3f7") +
        A.star(150, 40, 16, "#ffd166") + A.star(150, 40, 8, "#ff9f68") +
        A.label(150, 44, "!", "#8a5f2e");
    }
  });
  P.push({
    id: "fortuneteller", t: 4, name: "Fortune Teller", emoji: "🔮", level: "Medium", mins: 12,
    blurb: "Pick a colour, pick a number, lift the flap. Everybody in the playground knows this one.",
    needs: ["1 square of paper", "Pens"],
    steps: [
      "Fold the square corner to corner both ways and open it out, so you can see the middle.",
      "Fold all four corners in to the centre.",
      "Turn it over and fold all four corners in to the centre again.",
      "Fold the whole thing in half, open it, then fold it in half the other way.",
      "Slide your thumbs and first fingers under the four square flaps and push them together — it opens and closes like a beak.",
      "Open it flat again. Write a colour on each of the four outside squares.",
      "Write the numbers 1 to 8 on the triangles inside.",
      "Lift each triangle and write a silly fortune underneath.",
      "Fold it back up and go and find someone to try it on."
    ],
    tip: "Write the fortunes last. Everything before that is folding, and folding over writing smudges it.",
    art: function () {
      return A.poly("100,30 152,74 100,118 48,74", "#ffffff") +
        A.poly("100,30 152,74 100,74", "#ff9db0") + A.poly("152,74 100,118 100,74", "#7fc4ff") +
        A.poly("100,118 48,74 100,74", "#ffd166") + A.poly("48,74 100,30 100,74", "#8ce99a") +
        A.fold(48, 74, 152, 74) + A.fold(100, 30, 100, 118) +
        A.label(100, 52, "1", "#8f1d47") + A.label(126, 78, "3", "#12447f") +
        A.label(100, 104, "5", "#7d6210") + A.label(74, 78, "7", "#2f6b32");
    }
  });

  // ==================== 5 · Flight & Space ====================
  P.push({
    id: "dart", t: 5, name: "Dart Paper Plane", emoji: "✈️", level: "Easy", mins: 4,
    blurb: "The fast one. Narrow nose, sharp wings, flies straight and hard.",
    needs: ["1 sheet of A4 or Letter paper"],
    steps: [
      "Fold the sheet in half the long way, crease it hard, and open it out.",
      "Fold the two top corners in to that middle crease so the top comes to a point.",
      "Fold the two new slanted edges in to the middle crease again. The nose gets very pointy.",
      "Fold the whole plane in half along the original middle crease, with the folded parts inside.",
      "Fold one wing down so its edge lines up with the bottom of the body, and crease.",
      "Turn it over and fold the other wing exactly the same.",
      "Open the wings out flat and throw it hard and level."
    ],
    tip: "If it dives, bend the very back edge of both wings up by a few millimetres.",
    art: function () {
      return A.poly("28,84 170,50 128,66 172,70", "#7fc4ff") +
        A.poly("28,84 128,66 118,80", "#4d96ff") +
        A.poly("128,66 172,70 138,80", "#1f6feb") +
        A.fold(28, 84, 160, 60) +
        A.path("M24 100 q40 -12 80 -8", "none", ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="4 4"');
    }
  });
  P.push({
    id: "glider", t: 5, name: "Glider Plane", emoji: "🛩️", level: "Medium", mins: 8,
    blurb: "The slow one. Wide wings, blunt nose, floats right across the room.",
    needs: ["1 sheet of paper", "A paper clip"],
    steps: [
      "Fold the sheet in half the long way and open it out.",
      "Fold the two top corners in to the middle crease.",
      "Fold the whole pointed top down so the point touches the middle of the paper. It now has a blunt nose.",
      "Fold the two new top corners in to the middle again, leaving a small triangle sticking out below.",
      "Fold that little triangle up over them — it locks the folds shut.",
      "Fold the whole plane in half backwards along the middle crease.",
      "Fold each wing down, but make them WIDE — fold about 2 cm from the body, not at the edge.",
      "Slide the paper clip onto the nose and throw it gently, level, with a slow push."
    ],
    tip: "Throw a glider gently. Thrown hard it just loops and crashes; this one wants a push, not a fling.",
    art: function () {
      return A.poly("34,74 100,58 166,74 100,86", "#8ce99a") +
        A.poly("34,74 100,66 100,86", "#6bcb77") +
        A.poly("166,74 100,66 100,86", "#4ab55d") +
        A.poly("100,58 118,44 110,62", "#2f9e44") +
        A.circ(38, 74, 4, "#c9c3d8") +
        A.path("M30 96 q50 6 100 -6", "none", ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="4 4"');
    }
  });
  P.push({
    id: "rocket", t: 5, name: "Paper Rocket", emoji: "🚀", level: "Medium", mins: 12,
    blurb: "A rolled tube with a nose cone and fins. Blow through a straw and it flies.",
    needs: ["Paper", "Sticky tape", "Scissors", "A pencil to roll round", "A drinking straw"],
    steps: [
      "Roll a piece of paper tightly around the pencil and tape the long edge so it stays a tube.",
      "Slide it off the pencil.",
      "Cut a circle of paper, cut one slit from the edge to the middle, then overlap the two sides into a cone and tape it.",
      "Tape the cone onto one end of the tube. Make sure no air can get out — that end must be sealed.",
      "Cut three fin shapes and tape them evenly around the other end.",
      "Decorate the rocket.",
      "Slide the open end over the straw, blow hard, and launch it. Point it away from people."
    ],
    tip: "The nose cone must be airtight. If it leaks, the rocket will barely move.",
    art: function () {
      return A.poly("86,52 114,52 114,110 86,110", "#ffffff") +
        A.poly("86,52 100,20 114,52", "#e2453b") +
        A.poly("86,96 66,120 86,112", "#e2453b") + A.poly("114,96 134,120 114,112", "#e2453b") +
        A.circ(100, 70, 8, "#7fc4ff") + A.circ(100, 70, 5, "#cfe3f7") +
        A.poly("90,110 110,110 104,132 96,132", "#ff9f68") +
        A.poly("94,116 106,116 101,138 99,138", "#ffd166");
    }
  });
  P.push({
    id: "ringglider", t: 5, name: "Ring Glider", emoji: "⭕", level: "Medium", mins: 10,
    blurb: "It looks like it cannot possibly fly, and then it sails right across the garden.",
    needs: ["Paper", "A drinking straw or a thin stick", "Sticky tape", "Scissors"],
    steps: [
      "Cut two strips of paper: one 3 cm wide and one 5 cm wide.",
      "Curl the narrow strip into a small ring and tape the ends together with a 2 cm overlap.",
      "Curl the wide strip into a bigger ring and tape it the same way.",
      "Lay the straw down. Tape the small ring near one end, standing up like a wheel.",
      "Tape the big ring at the other end the same way.",
      "Check both rings are square to the straw and facing the same way.",
      "Hold the straw in the middle, small ring in front, and throw it like a dart."
    ],
    tip: "Small ring at the FRONT. Throw it the other way round and it will just tumble.",
    art: function () {
      return A.line(44, 76, 158, 68, "#ffd166", 5) +
        A.ell(62, 74, 6, 18, "#4d96ff") + A.ell(62, 74, 3, 13, "#fbf8ff") +
        A.ell(142, 70, 9, 28, "#7c5cbf") + A.ell(142, 70, 5, 22, "#fbf8ff") +
        A.path("M36 104 q56 4 116 -14", "none", ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="4 4"');
    }
  });
  P.push({
    id: "parachute", t: 5, name: "Parachute Jumper", emoji: "🪂", level: "Easy", mins: 10,
    blurb: "Drop it from the landing and watch it float all the way down.",
    needs: ["A square of thin paper or a plastic bag", "4 pieces of string the same length", "Sticky tape", "A small toy or a paper figure"],
    steps: [
      "Cut the square as big as you can — bigger falls slower.",
      "Tape one piece of string to each of the four corners.",
      "Gather the four loose ends together and check they are all the same length.",
      "Tie all four ends together in one knot.",
      "Tape or tie the knot to your toy jumper.",
      "Fold the parachute loosely, hold it by the middle, and drop it from as high as you can safely reach."
    ],
    tip: "If it drops like a stone, snip a small hole in the very centre. It sounds wrong, but it makes it steadier.",
    art: function () {
      return A.path("M46 58 Q100 16 154 58 Q100 70 46 58 Z", "#ff6b9d") +
        A.path("M46 58 Q64 24 82 52", "none", ' stroke="#e05586" stroke-width="1.4" fill="none"') +
        A.path("M118 52 Q136 24 154 58", "none", ' stroke="#e05586" stroke-width="1.4" fill="none"') +
        A.line(46, 58, 100, 100, "#c9b892", 1.4) + A.line(82, 64, 100, 100, "#c9b892", 1.4) +
        A.line(118, 64, 100, 100, "#c9b892", 1.4) + A.line(154, 58, 100, 100, "#c9b892", 1.4) +
        A.circ(100, 110, 10, "#ffd9c0") + A.face(100, 108, 0.8) +
        A.sheet(92, 118, 16, 16, "#4d96ff", 0, 3);
    }
  });
  P.push({
    id: "boomerang", t: 5, name: "Paper Boomerang", emoji: "🪃", level: "Hard", mins: 15,
    blurb: "Throw it indoors and it comes back to you. It takes practice, and it is worth it.",
    needs: ["Thick card (a cereal box is ideal)", "Scissors", "A ruler", "A pencil"],
    steps: [
      "Draw three identical arms on the card, each about 10 cm long and 2 cm wide, with rounded ends.",
      "Cut them out carefully — straight edges matter here.",
      "Lay one arm flat and glue the second across it at an angle, crossing at the centre.",
      "Glue the third across both, so all three arms are evenly spaced like a fan. Let it dry.",
      "Bend the tip of each arm up very slightly — just a few millimetres of twist, all in the same direction.",
      "Hold it upright between finger and thumb, tilted slightly back.",
      "Flick it forwards with your wrist, indoors, in a big room. It should curve round and come back."
    ],
    tip: "All three tips must twist the SAME way. This is the whole secret, and the reason a wrong one never returns.",
    art: function () {
      var s = "";
      for (var i = 0; i < 3; i++) {
        s += '<g transform="rotate(' + (i * 120) + ' 100 72)">' +
          A.sheet(96, 20, 12, 52, ["#ff9f68", "#ffd166", "#e2453b"][i], 0, 6) + '</g>';
      }
      return s + A.circ(100, 72, 7, "#8a5f2e") +
        A.path("M40 118 q30 -26 62 -20 q34 6 40 -20", "none",
          ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="4 4"');
    }
  });
  P.push({
    id: "solarmobile", t: 5, name: "Solar System Mobile", emoji: "🪐", level: "Hard", mins: 30,
    blurb: "All eight planets hanging in order, with the Sun in the middle. A real bedroom-ceiling project.",
    needs: ["Card", "Compass or round things to draw round", "Scissors", "Crayons", "Thread",
            "A garden stick, or a wire coat hanger — ask a grown-up to bend it and check the ends are not sharp"],
    steps: [
      "Draw and cut circles for the Sun and all eight planets. Keep the sizes in order: Jupiter biggest, Mercury smallest.",
      "Colour both sides of each one — they will spin, so the back shows too.",
      "Cut a thin ring of card for Saturn and glue it around the middle of that planet.",
      "Write each planet's name on the back in pencil so you remember which is which.",
      "Make a small hole in the top of each planet and thread a piece of string through.",
      "Tie the Sun in the centre of the stick, hanging lowest.",
      "Tie the planets along the stick in order out from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      "Balance it by sliding the strings along the stick, then hang it up."
    ],
    tip: "Order matters more than size here. Get the order right and it teaches something every time you look up.",
    art: function () {
      var s = A.line(24, 30, 176, 30, "#a3763f", 3.4);
      var pl = [[38, "#c9c3d8", 4], [58, "#ffd166", 6], [78, "#4d96ff", 6.5], [98, "#e2453b", 5],
                [120, "#e8b76a", 12], [146, "#f2b705", 9], [166, "#7fc4ff", 7]];
      pl.forEach(function (p, i) {
        var y = 52 + (i % 3) * 16;
        s += A.line(p[0], 30, p[0], y - p[2], "#c9c3d8", 1);
        s += A.circ(p[0], y, p[2], p[1]);
        if (i === 5) s += A.ell(p[0], y, 15, 4, "none", -18).replace('fill="none"', 'fill="none" stroke="#c9a227" stroke-width="2"');
      });
      s += A.circ(100, 116, 16, "#ff9f68") + A.circ(100, 116, 10, "#ffd166") +
        A.line(100, 30, 100, 100, "#c9c3d8", 1);
      return s;
    }
  });
  P.push({
    id: "helmet", t: 5, name: "Astronaut Helmet", emoji: "👨‍🚀", level: "Medium", mins: 18,
    blurb: "A helmet big enough to actually wear, from one paper bag or a sheet of card.",
    needs: ["A large paper bag or a big sheet of card", "Scissors", "Sticky tape", "Tin foil (optional)", "Pens"],
    steps: [
      "If you are using card, roll it into a tube that fits loosely over your head and tape it.",
      "Hold it up and mark where your face is.",
      "Take it off and cut a big oval visor hole where you marked.",
      "Cut a strip of card and tape it across the top as a curved dome, front to back.",
      "Tape a second strip across side to side, so the top is closed in.",
      "Cover the outside with tin foil if you have it, or colour it silver.",
      "Tape a small paper box to each side as the air tanks.",
      "Check you can see and breathe easily before you wear it."
    ],
    tip: "Cut the visor bigger than you think. A small visor looks right but you cannot see out of it.",
    art: function () {
      return A.circ(100, 74, 44, "#e8ecf4") + A.circ(100, 74, 38, "#f7f9fc") +
        A.path("M70 70 Q100 46 130 70 Q100 96 70 70 Z", "#1f3a5f") +
        A.path("M78 66 Q94 54 108 60", "none", ' stroke="#7fc4ff" stroke-width="3" fill="none" stroke-linecap="round"') +
        A.sheet(46, 62, 14, 26, "#c9cbd6", 0, 4) + A.sheet(140, 62, 14, 26, "#c9cbd6", 0, 4) +
        A.sheet(84, 112, 32, 12, "#c9cbd6", 0, 4) +
        A.circ(100, 40, 4, "#e2453b");
    }
  });
  P.push({
    id: "starwand", t: 5, name: "Shooting Star Wand", emoji: "🌟", level: "Easy", mins: 8,
    blurb: "A star on a stick with a tail of streamers. Wave it and the tail follows.",
    needs: ["Card", "Scissors", "A stick, straw or rolled paper", "Sticky tape", "Ribbon or paper streamers"],
    steps: [
      "Cut two identical stars from card.",
      "Decorate both — one is the front and one is the back.",
      "Lay the stick on the back of one star so it sticks out from the bottom point, and tape it firmly.",
      "Cut four or five long thin strips of paper for the tail.",
      "Tape the strips to the back of the same star, hanging down past the stick.",
      "Glue the second star on top, hiding the tape and the ends of the strips.",
      "Press it under a book for five minutes, then wave it."
    ],
    tip: "Tape the stick to the star before glueing the second star on. Hiding the tape is what makes it look properly made.",
    art: function () {
      return A.star(100, 54, 34, "#ffd166") + A.star(100, 54, 18, "#fff3c4") +
        A.line(100, 84, 100, 136, "#c9a227", 5) +
        A.path("M96 92 q-16 22 -22 40", "none", ' stroke="#ff6b9d" stroke-width="3" fill="none" stroke-linecap="round"') +
        A.path("M104 92 q18 20 24 38", "none", ' stroke="#4d96ff" stroke-width="3" fill="none" stroke-linecap="round"') +
        A.path("M100 96 q-4 24 -2 40", "none", ' stroke="#8ce99a" stroke-width="3" fill="none" stroke-linecap="round"');
    }
  });
  P.push({
    id: "kite", t: 5, name: "Paper Kite", emoji: "🪁", level: "Hard", mins: 25,
    blurb: "A real kite that really flies, from paper and two thin sticks.",
    needs: ["A big sheet of paper", "2 thin sticks (bamboo skewers work; ask a grown-up to blunt the points)", "String", "Sticky tape", "Scissors", "Ribbon for the tail"],
    steps: [
      "Lay the two sticks in a cross, the short one about a third of the way down the long one.",
      "Tie the crossing point tightly with string, wrapping both ways, and tape it.",
      "Cut a small notch in the end of all four stick ends.",
      "Run string all the way round the outside, sitting in each notch, and tie it off. This is the frame.",
      "Lay the frame on the paper and draw round it, 2 cm bigger all the way round.",
      "Cut out the paper, then fold the extra 2 cm over the outside string and tape it down all the way round.",
      "Tie a long string to the crossing point of the sticks — that is your flying line.",
      "Tape a ribbon tail about two metres long to the bottom, and fly it in an open space away from trees and wires."
    ],
    tip: "Never fly a kite near power lines, and never in a thunderstorm. Choose an open field.",
    art: function () {
      return A.poly("100,20 148,66 100,124 52,66", "#ff6b9d") +
        A.poly("100,20 148,66 100,66", "#ff8fb1") + A.poly("52,66 100,66 100,20", "#e05586") +
        A.line(100, 20, 100, 124, "#8a5f2e", 2) + A.line(52, 66, 148, 66, "#8a5f2e", 2) +
        A.path("M100 124 q-10 12 4 20 q14 8 2 18", "none", ' stroke="#4d96ff" stroke-width="2.4" fill="none"') +
        A.sheet(92, 130, 10, 5, "#ffd166", -20, 2) +
        A.path("M52 66 q-24 22 -34 62", "none", ' stroke="#c9b892" stroke-width="1.4" fill="none"');
    }
  });

  // ==================== 6 · Dress Up ====================
  P.push({
    id: "crown", t: 6, name: "Paper Crown", emoji: "👑", level: "Easy", mins: 10,
    blurb: "Every birthday needs one. Sized to fit whoever is wearing it.",
    needs: ["A long strip of card (or two taped together)", "Scissors", "Sticky tape", "Crayons", "Paper jewels or stickers"],
    steps: [
      "Wrap the strip round the head of whoever will wear it and mark where it overlaps. Do not tape it yet.",
      "Lay it flat again.",
      "Draw a zigzag or a row of points along the top edge, between your marks.",
      "Cut along the line you drew.",
      "Colour it in and stick on jewels or drawn circles.",
      "Curl it round, line up your marks, and tape it — inside and outside, so it holds.",
      "Try it on. Tape it a little tighter if it slips down."
    ],
    tip: "Measure the head first, decorate second, tape last. Taping first is how you end up with a crown that fits a teddy.",
    art: function () {
      return A.poly("40,110 40,64 56,40 72,64 88,34 104,64 120,40 136,64 160,64 160,110", "#ffd166") +
        A.sheet(38, 92, 124, 20, "#f2b705", 0, 3) +
        A.circ(56, 42, 4.4, "#ff6b9d") + A.circ(88, 36, 5, "#4d96ff") + A.circ(120, 42, 4.4, "#6bcb77") +
        A.circ(70, 102, 4, "#ff6b9d") + A.circ(100, 102, 4, "#7c5cbf") + A.circ(130, 102, 4, "#4d96ff");
    }
  });
  P.push({
    id: "piratehat", t: 6, name: "Newspaper Pirate Hat", emoji: "🏴‍☠️", level: "Easy", mins: 6,
    blurb: "Six folds from one sheet of newspaper, and it actually fits a real head.",
    needs: ["1 large sheet of newspaper", "Sticky tape", "White paper and a black pen for the skull"],
    steps: [
      "Fold the sheet in half the short way, so the fold is at the top.",
      "Fold the top two corners down to the middle, leaving a strip along the bottom.",
      "Fold the front bottom strip up over the corners, and crease it.",
      "Turn the hat over and fold the back bottom strip up the same way.",
      "Tape the side corners down so the brim does not unfold.",
      "Cut a skull shape from white paper and draw a face on it.",
      "Tape the skull to the front and put the hat on."
    ],
    tip: "A double sheet of newspaper makes a hat for a grown-up. A single page fits a child.",
    art: function () {
      return A.poly("34,110 100,42 166,110", "#3a3352") +
        A.sheet(30, 104, 140, 14, "#2d2a4a", 0, 4) +
        A.circ(100, 78, 15, "#f7f9fc") +
        A.circ(94, 74, 3.2, "#2d2a4a") + A.circ(106, 74, 3.2, "#2d2a4a") +
        A.sheet(94, 86, 12, 5, "#f7f9fc", 0, 2) +
        A.line(84, 96, 116, 104, "#f7f9fc", 3) + A.line(84, 104, 116, 96, "#f7f9fc", 3);
    }
  });
  P.push({
    id: "animalmask", t: 6, name: "Animal Mask", emoji: "🎭", level: "Medium", mins: 15,
    blurb: "Pick your animal and become it. Works for a play, a party or an ordinary Tuesday.",
    needs: ["Card", "Scissors", "Elastic or string", "A hole punch", "Crayons", "Paper scraps"],
    steps: [
      "Hold the card to your face and get someone to mark roughly where your eyes are.",
      "Draw your animal's face shape around those marks and cut it out.",
      "Cut out the two eye holes. Start small and make them bigger until you can see well.",
      "Cut ears, a snout or a beak from scraps and glue them on.",
      "Colour the whole mask, including the ears.",
      "Punch a hole at each side, level with your eyes.",
      "Thread the elastic through and knot it at each side.",
      "Try it on and adjust the elastic so it is snug but not tight."
    ],
    tip: "Cut the eye holes before you decorate. It is much easier to fix a wonky eye on a plain mask.",
    art: function () {
      return A.ell(100, 76, 42, 40, "#e8b76a") +
        A.circ(64, 44, 15, "#c9974d") + A.circ(136, 44, 15, "#c9974d") +
        A.circ(64, 44, 8, "#ffd9c0") + A.circ(136, 44, 8, "#ffd9c0") +
        A.ell(82, 70, 10, 8, "#2d2a4a") + A.ell(118, 70, 10, 8, "#2d2a4a") +
        A.ell(100, 96, 16, 12, "#fff3ea") + A.ell(100, 92, 6, 4.6, "#2d2a4a") +
        A.line(58, 76, 40, 72, "#c9c3d8", 2) + A.line(142, 76, 160, 72, "#c9c3d8", 2);
    }
  });
  P.push({
    id: "cuffs", t: 6, name: "Superhero Cuffs", emoji: "💪", level: "Easy", mins: 10,
    blurb: "Two wrist cuffs with your own symbol on. Add a paper belt and you are ready.",
    needs: ["Card", "Scissors", "Sticky tape", "Crayons", "Foil or shiny paper (optional)"],
    steps: [
      "Cut two strips of card about 6 cm wide and long enough to go round a wrist with an overlap.",
      "Draw your hero symbol in the middle of each strip.",
      "Colour them in, or cover them with foil first and draw on top.",
      "Curl each strip round a wrist and mark the overlap.",
      "Tape each one into a ring at the mark.",
      "Check you can still slide your hand through — cuffs should go on and off easily."
    ],
    tip: "Make the symbol from a separate piece of paper and glue it on, so it stands out from the cuff.",
    art: function () {
      return A.ell(62, 76, 26, 30, "#4d96ff") + A.ell(62, 76, 17, 21, "#fbf8ff") +
        A.ell(138, 76, 26, 30, "#4d96ff") + A.ell(138, 76, 17, 21, "#fbf8ff") +
        A.poly("62,58 54,78 62,78 58,92 72,72 62,72", "#ffd166") +
        A.star(138, 76, 14, "#ffd166") +
        A.label(100, 122, "zap!", "#a89ec4");
    }
  });
  P.push({
    id: "supermask", t: 6, name: "Superhero Eye Mask", emoji: "🦸", level: "Easy", mins: 8,
    blurb: "The classic eye mask. Two minutes to cut, and nobody recognises you.",
    needs: ["Card", "Scissors", "Elastic or string", "Crayons"],
    steps: [
      "Fold the card in half.",
      "Draw half a mask shape against the fold — a wing that comes to a point at the outside.",
      "Cut it out and open it, so both sides match exactly.",
      "Draw one eye hole on each side and cut them out.",
      "Colour the mask.",
      "Make a small hole at each outside point.",
      "Tie the elastic through both holes, and adjust it to fit."
    ],
    tip: "Cutting it on the fold is what makes both sides match. Free-hand masks always end up lopsided.",
    art: function () {
      return A.path("M38 68 Q60 44 100 48 Q140 44 162 68 Q150 96 120 92 Q100 88 80 92 Q50 96 38 68 Z", "#e2453b") +
        A.ell(74, 70, 15, 11, "#fbf8ff") + A.ell(126, 70, 15, 11, "#fbf8ff") +
        A.path("M38 68 q-14 4 -20 10", "none", ' stroke="#4a4560" stroke-width="1.6" fill="none"') +
        A.path("M162 68 q14 4 20 10", "none", ' stroke="#4a4560" stroke-width="1.6" fill="none"') +
        A.star(100, 62, 7, "#ffd166");
    }
  });
  P.push({
    id: "bowtie", t: 6, name: "Paper Bow Tie", emoji: "🎀", level: "Medium", mins: 10,
    blurb: "A smart bow tie for a party, a play, or the dog.",
    needs: ["Coloured paper or card", "Scissors", "Sticky tape", "Elastic or a strip of paper"],
    steps: [
      "Cut a rectangle about 20 cm by 10 cm.",
      "Fold it like a concertina, with folds about 1.5 cm wide, all the way along.",
      "Pinch it hard in the middle and let the two ends fan out.",
      "Cut a small strip of paper about 2 cm by 8 cm.",
      "Wrap that strip tightly round the pinched middle and tape it at the back.",
      "Tape the elastic to the back of the middle band.",
      "Fan the two sides out evenly so it looks like a bow."
    ],
    tip: "The middle band has to be tight. A loose band lets the concertina flop open.",
    art: function () {
      return A.poly("40,50 88,72 40,94", "#7c5cbf") + A.poly("160,50 112,72 160,94", "#7c5cbf") +
        A.poly("40,50 88,72 40,94", "#8b5cf6") +
        A.line(52, 54, 52, 90, "#5b21b6", 1.4) + A.line(64, 58, 64, 86, "#5b21b6", 1.4) +
        A.line(148, 54, 148, 90, "#5b21b6", 1.4) + A.line(136, 58, 136, 86, "#5b21b6", 1.4) +
        A.sheet(88, 58, 24, 28, "#5b21b6", 0, 5) +
        A.path("M30 40 q70 -14 140 0", "none", ' stroke="#c9c3d8" stroke-width="2" fill="none"');
    }
  });
  P.push({
    id: "paperglasses", t: 6, name: "Silly Paper Glasses", emoji: "🕶️", level: "Medium", mins: 12,
    blurb: "Star-shaped, heart-shaped, enormous — whatever you like. They actually stay on.",
    needs: ["Card", "Scissors", "Coloured cellophane or tissue (optional)", "Sticky tape", "Crayons"],
    steps: [
      "Fold the card in half and draw half a pair of glasses against the fold, including the bridge over the nose.",
      "Cut it out and open it.",
      "Cut out the two lens holes.",
      "If you have cellophane, tape a piece behind each hole for coloured lenses.",
      "Cut two long arms, about 12 cm each.",
      "Tape one arm to each side of the frame.",
      "Bend the last 2 cm of each arm down to hook over the ears.",
      "Decorate the frames and put them on."
    ],
    tip: "Bend the ends of the arms DOWN. Straight arms slide off the moment you look at the floor.",
    art: function () {
      return A.circ(70, 72, 24, "none", ' stroke="#7c5cbf" stroke-width="6"') +
        A.circ(130, 72, 24, "none", ' stroke="#7c5cbf" stroke-width="6"') +
        A.circ(70, 72, 21, "#ffd166", ' opacity=".55"') + A.circ(130, 72, 21, "#7fc4ff", ' opacity=".55"') +
        A.path("M94 68 q6 -8 12 0", "none", ' stroke="#7c5cbf" stroke-width="5" fill="none"') +
        A.path("M46 66 q-20 -4 -26 6 q-2 8 4 10", "none", ' stroke="#7c5cbf" stroke-width="5" fill="none" stroke-linecap="round"') +
        A.path("M154 66 q20 -4 26 6 q2 8 -4 10", "none", ' stroke="#7c5cbf" stroke-width="5" fill="none" stroke-linecap="round"') +
        A.star(70, 72, 9, "#fff", 5, -90);
    }
  });
  P.push({
    id: "headband", t: 6, name: "Feather Headband", emoji: "🪶", level: "Medium", mins: 14,
    blurb: "A band with paper feathers standing up all round it.",
    needs: ["Card", "Coloured paper", "Scissors", "Sticky tape", "Crayons"],
    steps: [
      "Cut a strip of card long enough to go round a head, plus 3 cm to overlap.",
      "Cut leaf shapes from coloured paper for the feathers — about eight.",
      "Snip little cuts along both edges of each feather, in towards the middle, to make it look feathery.",
      "Draw a line down the middle of each feather and fold gently along it.",
      "Tape the feathers to the INSIDE of the band, so they stand up above it.",
      "Space them out evenly, tallest in the middle.",
      "Wrap the band round the head, check the fit, and tape the overlap."
    ],
    tip: "Tape the feathers on before you join the band into a circle. Working on a flat strip is far easier.",
    art: function () {
      var s = "";
      var cols = ["#ff6b9d", "#ffd166", "#4d96ff", "#6bcb77", "#ff9f68"];
      for (var i = 0; i < 5; i++) {
        var x = 52 + i * 24, h = 28 + Math.abs(2 - i) * 10;
        s += A.ell(x, h + 18, 8, 22, cols[i], (i - 2) * 8);
        s += A.line(x, h - 2, x, h + 40, "#8a5f2e", 1.2);
      }
      return s + A.sheet(32, 84, 136, 20, "#c9974d", 0, 6) +
        A.circ(70, 94, 4, "#ffd166") + A.circ(100, 94, 4, "#ff6b9d") + A.circ(130, 94, 4, "#4d96ff");
    }
  });
  P.push({
    id: "paperwatch", t: 6, name: "Paper Watch", emoji: "⌚", level: "Easy", mins: 8,
    blurb: "Set it to whatever time you like. Good practice for reading a real clock face.",
    needs: ["Card", "Scissors", "A paper fastener", "Pens", "A coin to draw round"],
    steps: [
      "Cut a strip of card about 3 cm wide, long enough to go round a wrist with an overlap.",
      "Draw round the coin in the middle of the strip and go over it to make the watch face.",
      "Write the numbers 1 to 12 around the edge of the circle, starting with 12 at the top.",
      "Cut two hands from card — one short, one long.",
      "Push the paper fastener through both hands and then through the centre of the face.",
      "Open the legs of the fastener out at the back and press them flat.",
      "Wrap the strap round the wrist and tape it, or punch holes so it can be done up."
    ],
    tip: "Write 12, 3, 6 and 9 first, then fill in the rest between them. The numbers come out evenly spaced.",
    art: function () {
      var s = A.sheet(84, 24, 32, 100, "#7c5cbf", 0, 6) +
        A.circ(100, 74, 28, "#f7f2ff") + A.circ(100, 74, 28, "none", ' stroke="#5b21b6" stroke-width="3"');
      for (var i = 0; i < 12; i++) {
        var a = (i * 30 - 90) * Math.PI / 180;
        s += A.circ(100 + Math.cos(a) * 21, 74 + Math.sin(a) * 21, 1.6, "#5b21b6");
      }
      return s + A.line(100, 74, 100, 60, "#2d2a4a", 3) + A.line(100, 74, 114, 80, "#e2453b", 2.4) +
        A.circ(100, 74, 3, "#2d2a4a");
    }
  });
  P.push({
    id: "paperwings", t: 6, name: "Paper Wings", emoji: "🧚", level: "Hard", mins: 25,
    blurb: "Wings big enough to wear, held on with two loops over your arms.",
    needs: ["A large sheet of card (or a flattened box)", "Coloured paper", "Scissors", "Glue", "2 strips of card for the arm loops", "Sticky tape"],
    steps: [
      "Fold the big sheet of card in half.",
      "Draw one wing against the fold, as big as the card allows.",
      "Cut it out and open it — you have both wings, joined in the middle.",
      "Cut lots of teardrop shapes from coloured paper for the feathers.",
      "Starting at the bottom edge of each wing, glue a row of feathers pointing downwards.",
      "Glue the next row overlapping the tops of the first, and keep going up the wing.",
      "Turn the wings over. Tape a loop of card near the middle of each wing, big enough for an arm to slide through.",
      "Slide your arms through the loops and check the wings sit comfortably before you run anywhere."
    ],
    tip: "Overlap the feather rows like roof tiles, working upwards. It hides every join.",
    art: function () {
      var wing = function (flip) {
        var g = flip ? ' transform="translate(200 0) scale(-1 1)"' : "";
        var s = '<g' + g + '>' + A.path("M100 40 Q52 30 34 68 Q26 106 62 118 Q92 124 100 96 Z", "#ffb3cd");
        for (var r = 0; r < 3; r++) {
          for (var i = 0; i < 4; i++) {
            s += A.ell(46 + i * 15 + r * 5, 106 - r * 20, 7, 10, ["#ff9db0", "#ffd7e3", "#fff0f5"][r]);
          }
        }
        return s + '</g>';
      };
      return wing(false) + wing(true) + A.sheet(94, 40, 12, 60, "#e05586", 0, 5);
    }
  });

  // ==================== 7 · Useful Things ====================
  P.push({
    id: "origamibox", t: 7, name: "Origami Box with Lid", emoji: "📦", level: "Hard", mins: 20,
    blurb: "A real box with a lid that fits, from two squares and no glue at all.",
    needs: ["2 squares of paper — the lid square must be 5 mm bigger each way than the base square"],
    steps: [
      "Take the base square. Fold it corner to corner both ways and open it out.",
      "Fold all four corners in to the centre.",
      "Fold the top edge down to the centre, then the bottom edge up to the centre. Open both out again.",
      "Do the same with the left and right edges, then open them out. You should see a grid of creases.",
      "Unfold the left and right corners only.",
      "Fold the left and right edges in to the centre, then lift them up so two walls stand.",
      "Fold the two pointed ends over the tops of the walls and tuck them down inside. The base is done.",
      "Make the lid exactly the same way with the bigger square, and slide it on top."
    ],
    tip: "The lid square MUST be slightly bigger or the lid will not go on. Cut 5 mm off two sides of the base square if you only have same-size paper.",
    art: function () {
      return A.ground(132) +
        A.poly("50,92 150,92 138,124 62,124", "#4d96ff") +
        A.poly("50,92 62,124 62,88", "#1f6feb") +
        A.poly("46,64 154,64 142,92 58,92", "#7fc4ff") +
        A.poly("46,64 58,92 58,60", "#4d96ff") +
        A.line(58, 66, 142, 66, "#cfe3f7", 2) +
        A.fold(100, 60, 100, 124);
    }
  });
  P.push({
    id: "envelope", t: 7, name: "One-Sheet Envelope", emoji: "✉️", level: "Easy", mins: 6,
    blurb: "An envelope from one square, in four folds. Learn it once and you never need to buy one.",
    needs: ["1 square of paper", "Glue stick or a sticker"],
    steps: [
      "Put the square down as a diamond, pattern facing down.",
      "Fold the bottom corner up to just past the middle.",
      "Fold the left corner in across it.",
      "Fold the right corner in across that, so the two overlap.",
      "Put a little glue on the overlap and press it.",
      "Slide your letter in from the top.",
      "Fold the top corner down and seal it with a sticker."
    ],
    tip: "Fold the bottom corner PAST the middle, not exactly to it, or the envelope will be too shallow to hold anything.",
    art: function () {
      return A.sheet(38, 44, 124, 74, "#ffd166", -3, 3) +
        A.poly("40,48 160,52 100,92", "#f2b705", ' transform="rotate(-3 100 81)"') +
        A.poly("38,116 100,84 162,120", "#ffe9a8", ' transform="rotate(-3 100 81)"') +
        A.circ(100, 90, 7, "#ff6b9d") +
        A.line(54, 108, 84, 110, "#c9a227", 1.6) + A.line(54, 114, 76, 116, "#c9a227", 1.6);
    }
  });
  P.push({
    id: "pencilpot", t: 7, name: "Pencil Pot", emoji: "✏️", level: "Easy", mins: 10,
    blurb: "Cover a tin or a tube in paper and suddenly the desk is tidy.",
    needs: ["An empty tin or cardboard tube", "Coloured paper", "Scissors", "Glue", "Card for the base"],
    steps: [
      "If you are using a tin, check the rim is not sharp. Ask a grown-up.",
      "Stand the tube on the card, draw round it, and cut out the circle.",
      "Glue the circle onto one end as the base and let it dry.",
      "Measure paper round the outside and cut it to height, with 1 cm extra to overlap.",
      "Decorate the paper while it is still flat — this is the easy moment.",
      "Wrap it round and glue the overlap.",
      "Cut a strip of a different colour and glue it round the top as a rim."
    ],
    tip: "Decorate flat, then wrap. Trying to draw on a curved pot is a fight you will lose.",
    art: function () {
      return A.ground(134) +
        A.poly("66,52 134,52 128,126 72,126", "#6bcb77") +
        A.sheet(64, 46, 72, 10, "#2f9e44", 0, 4) +
        A.circ(84, 74, 5, "#ffd166") + A.circ(112, 88, 5, "#ff6b9d") + A.circ(96, 104, 5, "#4d96ff") +
        A.line(88, 46, 84, 22, "#ffd166", 5) + A.poly("81,22 87,22 84,14", "#e08a5f") +
        A.line(104, 46, 108, 18, "#e2453b", 5) + A.poly("105,18 111,18 108,10", "#e08a5f") +
        A.line(118, 46, 122, 26, "#4d96ff", 5);
    }
  });
  P.push({
    id: "paperbag", t: 7, name: "Paper Gift Bag", emoji: "🛍️", level: "Medium", mins: 15,
    blurb: "A proper bag with a flat bottom and string handles. Wrap a present in the bag you made.",
    needs: ["A large sheet of paper", "Glue stick", "Scissors", "String", "A hole punch", "A rectangular box to fold around"],
    steps: [
      "Wrap the paper around the box like a parcel and glue the long overlap. Do not glue the ends.",
      "Slide the box until it lines up with one open end.",
      "Fold the bottom flaps in like wrapping a present: sides first, then the bottom, then the top flap over.",
      "Glue those flaps down. That is the flat base.",
      "Slide the box out.",
      "Press the two long sides in so the bag folds flat, and crease the sides.",
      "Fold the top edge over twice for a strong rim and glue it.",
      "Punch two holes in each side of the rim, thread the string through and knot it inside."
    ],
    tip: "Folding it around a box is the whole trick. Without the box the bottom never comes out square.",
    art: function () {
      return A.ground(134) +
        A.poly("58,54 142,54 136,126 64,126", "#ff9f68") +
        A.poly("58,54 142,54 130,64 70,64", "#e08a5f") +
        A.path("M80 56 q20 -26 40 0", "none", ' stroke="#8a5f2e" stroke-width="2.4" fill="none"') +
        A.line(100, 64, 100, 126, "#e08a5f", 1.4) +
        A.heart(100, 96, 3, "#ffd166");
    }
  });
  P.push({
    id: "ribbonmark", t: 7, name: "Ribbon Bookmark", emoji: "🔖", level: "Easy", mins: 6,
    blurb: "A long bookmark with a tassel. Five minutes and your book never loses your place again.",
    needs: ["Card", "Scissors", "A hole punch", "Wool, string or paper strips", "Crayons"],
    steps: [
      "Cut a strip of card about 5 cm wide and 18 cm long.",
      "Round off the two bottom corners with scissors.",
      "Decorate both sides — it will be seen from both.",
      "Punch a hole about 1 cm down from the top, in the middle.",
      "Cut six pieces of wool about 15 cm long.",
      "Fold them all in half together and push the folded loop through the hole.",
      "Thread the loose ends through that loop and pull tight to make a tassel."
    ],
    tip: "Punch the hole after decorating, or you will end up drawing over it.",
    art: function () {
      return A.path("M78 34 h44 v82 q-22 14 -44 0 z", "#7c5cbf") +
        A.line(84, 52, 116, 52, "#b39ddb", 2) + A.line(84, 62, 116, 62, "#b39ddb", 2) +
        A.star(100, 82, 12, "#ffd166") +
        A.circ(100, 42, 4, "#fbf8ff") +
        A.path("M100 42 q-4 -18 -10 -24", "none", ' stroke="#ff9f68" stroke-width="2" fill="none"') +
        A.path("M100 42 q0 -20 2 -26", "none", ' stroke="#ff6b9d" stroke-width="2" fill="none"') +
        A.path("M100 42 q6 -18 12 -22", "none", ' stroke="#4d96ff" stroke-width="2" fill="none"');
    }
  });
  P.push({
    id: "desktray", t: 7, name: "Desk Tidy Tray", emoji: "🗂️", level: "Medium", mins: 14,
    blurb: "A shallow tray with three compartments. One for pencils, one for rubbers, one for treasure.",
    needs: ["Thick card", "Scissors", "Ruler", "Glue", "Pencil"],
    steps: [
      "Cut a rectangle of card for the base, about 20 cm by 12 cm.",
      "Cut four strips 4 cm wide: two as long as the base, two as wide.",
      "Glue the long strips along the two long edges, standing up. Hold each until it grips.",
      "Glue the short strips at the ends the same way, and let the box dry.",
      "Cut two more short strips the same height.",
      "Glue them across the inside to divide the tray into three sections.",
      "Cover the outside with coloured paper if you like."
    ],
    tip: "Score the fold lines with a ruler and a dead pen first. Thick card cracks otherwise.",
    art: function () {
      return A.ground(132) +
        A.poly("34,72 166,72 154,120 46,120", "#8a5f2e") +
        A.sheet(32, 64, 136, 10, "#a3763f", 0, 3) +
        A.line(78, 72, 74, 120, "#6d4c22", 3) + A.line(122, 72, 126, 120, "#6d4c22", 3) +
        A.line(56, 66, 56, 34, "#ffd166", 4) + A.line(66, 66, 66, 40, "#e2453b", 4) +
        A.sheet(92, 82, 18, 12, "#ff9db0", 0, 3) +
        A.circ(140, 92, 7, "#4d96ff");
    }
  });
  P.push({
    id: "basket", t: 7, name: "Woven Paper Basket", emoji: "🧺", level: "Medium", mins: 20,
    blurb: "Weave strips over and under and a flat sheet becomes a basket that holds things.",
    needs: ["Coloured paper in two colours", "Scissors", "Glue stick", "Ruler"],
    steps: [
      "Fold one sheet in half and cut slits from the fold towards the open edge, stopping 3 cm short. Make them 2 cm apart.",
      "Open it out. You have a sheet with a row of slots down the middle.",
      "Cut the second colour into strips 2 cm wide.",
      "Weave the first strip through the slots: over, under, over, under.",
      "Weave the next strip the opposite way: under, over, under, over. That alternating is what makes it hold together.",
      "Keep going until the sheet is full, then glue the ends of every strip down at both sides.",
      "Bend the woven sheet up at all four sides and glue the corners together to make the basket walls.",
      "Cut one more strip and glue it across the top as a handle."
    ],
    tip: "Every row must start opposite to the one before. Two rows the same and the weave falls apart.",
    art: function () {
      var s = A.ground(134) + A.poly("52,72 148,72 138,124 62,124", "#e8b76a");
      for (var i = 0; i < 6; i++) s += A.line(60 + i * 16, 72, 64 + i * 15, 124, "#c9974d", 4);
      for (var j = 0; j < 3; j++) s += A.line(54 + j * 2, 84 + j * 14, 146 - j * 2, 84 + j * 14, "#f3d9a8", 5);
      return s + A.path("M62 72 q38 -44 76 0", "none", ' stroke="#c9974d" stroke-width="5" fill="none"') +
        A.sheet(50, 66, 100, 8, "#a3763f", 0, 3);
    }
  });
  P.push({
    id: "papercup", t: 7, name: "Origami Cup", emoji: "🥤", level: "Medium", mins: 6,
    blurb: "A cup that genuinely holds water, from one square, in about a minute.",
    needs: ["1 square of paper (not tissue — it needs to be reasonably thick)"],
    steps: [
      "Fold the square corner to corner into a triangle, with the long edge at the bottom.",
      "Take the bottom right corner and fold it up and across, so its point touches the middle of the opposite slanted edge.",
      "Do the same with the bottom left corner, folding it across the other way.",
      "You now have a shape with two points sticking up at the top.",
      "Fold the front top point down over the front.",
      "Turn it over and fold the back top point down over the back.",
      "Push the two sides gently towards each other and the cup opens up."
    ],
    tip: "It really does hold water for a few minutes — long enough to drink from. Use thicker paper for longer.",
    art: function () {
      return A.ground(134) +
        A.poly("58,50 142,50 116,124 84,124", "#7fc4ff") +
        A.poly("58,50 142,50 100,72", "#4d96ff") +
        A.poly("58,50 100,72 84,124", "#a8d6ff") +
        A.ell(100, 52, 42, 7, "#cfe3f7") +
        A.fold(100, 52, 100, 124);
    }
  });
  P.push({
    id: "wallpocket", t: 7, name: "Wall Note Pocket", emoji: "📮", level: "Medium", mins: 12,
    blurb: "A pocket for the wall by the door, so the notes and letters stop wandering off.",
    needs: ["Thick card", "Scissors", "Glue", "Coloured paper", "Sticky tack or a hole punch and string"],
    steps: [
      "Cut a rectangle of card about 20 cm by 25 cm for the back.",
      "Cut a second rectangle 20 cm by 12 cm for the front pocket.",
      "Cut two thin strips 2 cm wide and as tall as the pocket — these are the sides.",
      "Fold each strip in half lengthways to make an L.",
      "Glue one half of each L to the back panel, down each side, level with the bottom.",
      "Glue the pocket panel to the other half of each L, so it stands away from the back.",
      "Press it flat with a book and let it dry properly.",
      "Decorate the front, then punch a hole at the top and hang it up."
    ],
    tip: "The side strips are what make it a POCKET instead of a flat envelope. Do not skip them.",
    art: function () {
      return A.sheet(52, 24, 96, 104, "#8ce99a", 0, 5) +
        A.sheet(52, 72, 96, 52, "#4ab55d", 0, 5) +
        A.sheet(66, 56, 40, 30, "#ffffff", -8, 2) +
        A.sheet(96, 60, 40, 26, "#fff3c4", 6, 2) +
        A.circ(100, 32, 4, "#2f6b32") +
        A.line(72, 96, 128, 96, "#2f9e44", 2);
    }
  });
  P.push({
    id: "giftbox", t: 7, name: "Pyramid Gift Box", emoji: "🎁", level: "Hard", mins: 18,
    blurb: "A box shaped like a pyramid that closes with a ribbon. It holds a small present perfectly.",
    needs: ["Card", "Scissors", "Ruler", "Pencil", "A hole punch", "Ribbon", "Glue"],
    steps: [
      "Draw a square 12 cm across on the card.",
      "On each side of the square, draw a triangle pointing outwards, 12 cm tall. You now have a four-pointed star.",
      "Add a 1 cm glue flap along one edge of one triangle.",
      "Cut the whole star out.",
      "Score along all four sides of the middle square with a ruler and a dead pen, then fold each triangle up.",
      "Glue the flap to the neighbouring triangle so three sides join into a pyramid.",
      "Punch a hole near the tip of all four triangles.",
      "Put the present inside, thread the ribbon through all four holes, and tie a bow."
    ],
    tip: "Score before folding. Card that has not been scored folds in a wobbly line every single time.",
    art: function () {
      return A.ground(134) +
        A.poly("100,30 150,120 50,120", "#ff6b9d") +
        A.poly("100,30 150,120 118,124", "#e05586") +
        A.path("M100 30 q-12 -14 -24 -8 q6 12 24 8 z", "#ffd166") +
        A.path("M100 30 q12 -14 24 -8 q-6 12 -24 8 z", "#ffd166") +
        A.circ(100, 30, 5, "#f2b705") +
        A.line(74, 74, 126, 74, "#ff9db0", 3);
    }
  });

  // ==================== 8 · Games to Play ====================
  P.push({
    id: "paperdice", t: 8, name: "Paper Dice", emoji: "🎲", level: "Medium", mins: 15,
    blurb: "A real six-sided dice from a flat net. Handy when the dice from the board game goes missing.",
    needs: ["Card", "Ruler", "Pencil", "Scissors", "Glue", "A black pen"],
    steps: [
      "Draw a row of four squares, each 4 cm, side by side.",
      "Add one more square above the second one in the row, and one below it. You have a cross shape — that is a cube net.",
      "Add 1 cm glue flaps to the outside edges: one on each free edge that will need to join another.",
      "Cut the whole net out.",
      "Score along every fold line with a ruler and a dead pen.",
      "Draw the dots: 1 opposite 6, 2 opposite 5, 3 opposite 4. Every pair adds up to seven.",
      "Fold it into a cube and glue the flaps inside one at a time, leaving the last face until the end.",
      "Tuck the last flap in and hold it until the glue sets."
    ],
    tip: "Opposite faces must add up to seven. That is true of every real dice, and it is what makes yours fair-looking.",
    art: function () {
      return A.ground(134) +
        A.poly("62,60 100,42 138,60 100,78", "#ffffff") +
        A.poly("62,60 100,78 100,122 62,104", "#f0ecf7") +
        A.poly("138,60 100,78 100,122 138,104", "#e2ddee") +
        A.circ(100, 60, 3.4, "#2d2a4a") +
        A.circ(74, 74, 3.2, "#2d2a4a") + A.circ(88, 96, 3.2, "#2d2a4a") + A.circ(74, 96, 3.2, "#2d2a4a") +
        A.circ(112, 78, 3.2, "#e2453b") + A.circ(126, 86, 3.2, "#e2453b") +
        A.circ(112, 100, 3.2, "#e2453b") + A.circ(126, 108, 3.2, "#e2453b");
    }
  });
  P.push({
    id: "memorycards", t: 8, name: "Memory Match Cards", emoji: "🃏", level: "Easy", mins: 15,
    blurb: "Make twenty cards, ten matching pairs, and play the oldest memory game there is.",
    needs: ["Card", "Scissors", "Ruler", "Crayons"],
    steps: [
      "Cut twenty rectangles of card the same size — about 6 cm by 8 cm. Cut them together in a stack so they match.",
      "Think of ten simple pictures: a star, a cat, a boat, a tree.",
      "Draw each picture on TWO cards, as alike as you can.",
      "Colour the backs of all twenty cards exactly the same, so you cannot tell them apart face down.",
      "Shuffle them and lay them all out face down in a grid.",
      "Turn two over. If they match, keep them and go again. If not, turn them back and let the next player go.",
      "The winner has the most pairs when all the cards are gone."
    ],
    tip: "The backs must be identical. One smudge on one card and that card becomes findable.",
    art: function () {
      var s = A.ground(134);
      var cols = ["#ff6b9d", "#ffd166", "#4d96ff"];
      for (var i = 0; i < 3; i++) {
        s += A.sheet(30 + i * 40, 46, 34, 46, "#7c5cbf", i === 1 ? 4 : -4, 3);
        s += A.star(47 + i * 40, 69, 9, "#f2eefc");
      }
      s += A.sheet(146, 46, 34, 46, "#ffffff", 6, 3);
      s += A.heart(163, 70, 2.6, "#ff6b9d");
      return s + A.label(100, 118, "find the pairs", "#a89ec4");
    }
  });
  P.push({
    id: "paperfootball", t: 8, name: "Table Football Flicker", emoji: "🏈", level: "Medium", mins: 8,
    blurb: "Fold a paper triangle and flick it across the table between two goalposts made of fingers.",
    needs: ["1 sheet of paper", "Scissors"],
    steps: [
      "Cut a strip of paper about 5 cm wide and as long as the sheet.",
      "Fold the strip in half lengthways so it is narrow and strong.",
      "Fold one corner across to make a triangle at the end.",
      "Keep folding that triangle over and over along the strip, like folding a flag.",
      "When you get near the end, tuck the last little bit into the pocket of the triangle.",
      "To play, stand it up on its point at the table edge and flick it with a finger.",
      "The other player makes a goal with two thumbs and their first fingers."
    ],
    tip: "Tucking the last bit in is what stops it unravelling. Trim it first if it is too fat to tuck.",
    art: function () {
      return A.ground(126) +
        A.poly("70,110 130,110 100,58", "#8a5f2e") +
        A.poly("70,110 100,58 100,110", "#a3763f") +
        A.line(86, 88, 114, 88, "#f3d9a8", 2) + A.line(80, 100, 120, 100, "#f3d9a8", 2) +
        A.path("M144 60 q16 20 6 42", "none", ' stroke="#c9c3d8" stroke-width="1.4" fill="none" stroke-dasharray="4 4"') +
        A.label(100, 44, "flick!", "#a89ec4");
    }
  });
  P.push({
    id: "skittles", t: 8, name: "Paper Skittles", emoji: "🎳", level: "Medium", mins: 18,
    blurb: "Ten paper cones in a triangle and a scrunched paper ball. A bowling alley in the hallway.",
    needs: ["10 sheets of paper", "Sticky tape", "Scrap paper for the ball", "Crayons", "Small stones or coins to weigh the cones"],
    steps: [
      "Roll one sheet into a cone and tape the edge. Trim the bottom flat so it stands up.",
      "Make ten of them.",
      "Number the cones 1 to 10 and colour them.",
      "Drop a stone or a coin into each cone so a small breeze does not knock them over.",
      "Scrunch scrap paper into a firm ball and tape it smooth.",
      "Set the cones out in a triangle: one at the front, then two, then three, then four.",
      "Roll the ball from an agreed line and count what you knock down."
    ],
    tip: "If the cones fall over on their own the stones are too big. They should steady the cone, not anchor it.",
    art: function () {
      var s = A.ground(132);
      var rows = [[100], [86, 114], [72, 100, 128]];
      var cols = ["#ff6b9d", "#4d96ff", "#ffd166", "#6bcb77", "#ff9f68", "#7c5cbf"];
      var k = 0;
      rows.forEach(function (r, ri) {
        var y = 58 + ri * 22;
        r.forEach(function (x) {
          s += A.poly((x - 10) + "," + (y + 26) + " " + (x + 10) + "," + (y + 26) + " " + x + "," + y, cols[k % 6]);
          k++;
        });
      });
      return s + A.circ(40, 116, 12, "#8a5f2e") + A.circ(36, 112, 3.4, "#c9974d");
    }
  });
  P.push({
    id: "snakesladders", t: 8, name: "Snakes & Ladders Board", emoji: "🐍", level: "Medium", mins: 25,
    blurb: "Draw the board, make the counters, and you have a game that lasts for years.",
    needs: ["A big sheet of paper or card", "Ruler", "Pencil", "Crayons", "Card scraps for counters", "A dice (make one!)"],
    steps: [
      "Draw a grid ten squares across and ten squares down.",
      "Number the squares from 1 in the bottom left, going right along the bottom row.",
      "Number the next row from right to left, and keep zigzagging up to 100 in the top left.",
      "Draw five ladders joining a lower square to a higher one.",
      "Draw five snakes with their heads on a high square and their tails on a low one.",
      "Colour the whole board in.",
      "Cut small circles of card for counters and colour one for each player.",
      "Roll the dice, move that many squares, climb every ladder and slide down every snake."
    ],
    tip: "Number the rows in a zigzag, not all left to right. It is what makes the board work.",
    art: function () {
      var s = A.sheet(34, 24, 132, 104, "#fff8e1", 0, 4);
      for (var i = 1; i < 6; i++) {
        s += A.line(34 + i * 22, 24, 34 + i * 22, 128, "#e8d9a8", 1);
        s += A.line(34, 24 + i * 17.3, 166, 24 + i * 17.3, "#e8d9a8", 1);
      }
      s += A.path("M56 116 Q46 84 70 72 Q92 62 78 40", "none", ' stroke="#4ab55d" stroke-width="6" fill="none" stroke-linecap="round"');
      s += A.circ(78, 38, 5, "#2f9e44") + A.circ(80, 37, 1.4, "#fff");
      s += A.path("M118 118 Q140 96 128 74 Q118 56 140 40", "none", ' stroke="#e2453b" stroke-width="6" fill="none" stroke-linecap="round"');
      s += A.circ(140, 38, 5, "#b52f2a");
      s += A.line(96, 118, 96, 60, "#a3763f", 2.4) + A.line(108, 118, 108, 60, "#a3763f", 2.4);
      for (var j = 0; j < 4; j++) s += A.line(96, 68 + j * 14, 108, 68 + j * 14, "#a3763f", 2);
      return s;
    }
  });
  P.push({
    id: "tictactoe", t: 8, name: "Travel Tic-Tac-Toe", emoji: "⭕", level: "Easy", mins: 10,
    blurb: "A folding board with pieces that live in a pocket on the back. Perfect for a long car journey.",
    needs: ["Card", "Scissors", "Ruler", "Pens", "An envelope or a paper pocket"],
    steps: [
      "Cut a square of card about 12 cm across.",
      "Draw a tic-tac-toe grid on it with a ruler — two lines down, two across.",
      "Cut ten small circles of card.",
      "Draw a big X on five of them and a big O on the other five.",
      "Glue a small paper pocket or half an envelope to the back of the board.",
      "Fold the board in half if you want it smaller — score the middle line first so it folds neatly.",
      "Keep the pieces in the pocket when you are not playing."
    ],
    tip: "Round the corners of the board with scissors. It survives a school bag much better.",
    art: function () {
      var s = A.sheet(52, 26, 96, 96, "#ffffff", 0, 6) +
        A.line(84, 34, 84, 114, "#7c5cbf", 3) + A.line(116, 34, 116, 114, "#7c5cbf", 3) +
        A.line(60, 58, 140, 58, "#7c5cbf", 3) + A.line(60, 90, 140, 90, "#7c5cbf", 3);
      s += A.line(62, 38, 78, 54, "#e2453b", 3.4) + A.line(78, 38, 62, 54, "#e2453b", 3.4);
      s += A.circ(100, 46, 9, "none", ' stroke="#4d96ff" stroke-width="3.4"');
      s += A.line(126, 70, 142, 86, "#e2453b", 3.4) + A.line(142, 70, 126, 86, "#e2453b", 3.4);
      s += A.circ(100, 78, 9, "none", ' stroke="#4d96ff" stroke-width="3.4"');
      s += A.circ(70, 102, 9, "none", ' stroke="#4d96ff" stroke-width="3.4"');
      return s;
    }
  });
  P.push({
    id: "dominoes", t: 8, name: "Paper Dominoes", emoji: "🁣", level: "Easy", mins: 15,
    blurb: "A full set of twenty-eight dominoes. Play the game, or stand them up and topple them.",
    needs: ["Thick card", "Ruler", "Scissors", "A black pen"],
    steps: [
      "Cut twenty-eight rectangles of card, each about 4 cm by 8 cm.",
      "Draw a line across the middle of each one.",
      "Now the dots. Start with double blank, then blank-1, blank-2, up to blank-6.",
      "Then do 1-1, 1-2, up to 1-6. Then start at 2-2, then 3-3, and so on.",
      "That gives every pair exactly once: twenty-eight in all.",
      "Check you have no repeats — 3-5 and 5-3 are the same domino.",
      "Turn them face down, take seven each, and match the ends."
    ],
    tip: "Always start each new number from ITSELF (2-2, then 2-3…). That is how you avoid making the same domino twice.",
    art: function () {
      var s = A.ground(132);
      var pips = function (x, y, n) {
        var out = "", pos = { 1: [[0, 0]], 2: [[-4, -4], [4, 4]], 3: [[-4, -4], [0, 0], [4, 4]],
          4: [[-4, -4], [4, -4], [-4, 4], [4, 4]], 5: [[-4, -4], [4, -4], [0, 0], [-4, 4], [4, 4]],
          6: [[-4, -5], [4, -5], [-4, 0], [4, 0], [-4, 5], [4, 5]] };
        (pos[n] || []).forEach(function (p) { out += A.circ(x + p[0], y + p[1], 1.8, "#2d2a4a"); });
        return out;
      };
      [[46, 3, 5], [86, 6, 2], [126, 4, 4]].forEach(function (d, i) {
        var rot = i === 1 ? 3 : -3;
        s += A.sheet(d[0], 44, 30, 64, "#ffffff", rot, 3);
        // an outline, or white cards disappear into the card background behind them
        s += '<rect x="' + d[0] + '" y="44" width="30" height="64" rx="3" fill="none" stroke="#c9c3d8" ' +
          'stroke-width="1.4" transform="rotate(' + rot + ' ' + (d[0] + 15) + ' 76)"/>';
        s += A.line(d[0] + 2, 76, d[0] + 28, 76, "#c9c3d8", 1.4);
        s += pips(d[0] + 15, 60, d[1]) + pips(d[0] + 15, 92, d[2]);
      });
      return s;
    }
  });
  P.push({
    id: "ringtoss", t: 8, name: "Ring Toss", emoji: "🎯", level: "Medium", mins: 15,
    blurb: "Rolled paper rings and a stand to throw them onto. Score more for the harder pegs.",
    needs: ["Paper", "Sticky tape", "A cardboard box or thick card base", "Scissors", "Crayons"],
    steps: [
      "Roll a sheet of paper diagonally into a long thin tube and tape it.",
      "Bend the tube into a circle, push one end inside the other, and tape it. That is one ring.",
      "Make five rings and colour them.",
      "For the pegs, roll three shorter tubes and tape each one.",
      "Cut three slits in the box lid and push a peg into each, taping underneath so they stand upright.",
      "Write a score on the base next to each peg: 1 for the near one, 5 for the far one.",
      "Mark a throwing line and take five throws each."
    ],
    tip: "Roll the paper DIAGONALLY. Rolled straight, the tube is fat and floppy; rolled corner to corner it is long and firm.",
    art: function () {
      return A.ground(132) +
        A.sheet(44, 108, 112, 16, "#8a5f2e", 0, 4) +
        A.line(70, 108, 70, 72, "#c9974d", 6) + A.line(100, 108, 100, 62, "#c9974d", 6) +
        A.line(130, 108, 130, 78, "#c9974d", 6) +
        A.ell(70, 92, 16, 5, "none", 0).replace('fill="none"', 'fill="none" stroke="#ff6b9d" stroke-width="4"') +
        A.ell(100, 84, 16, 5, "none", 0).replace('fill="none"', 'fill="none" stroke="#4d96ff" stroke-width="4"') +
        A.ell(100, 96, 16, 5, "none", 0).replace('fill="none"', 'fill="none" stroke="#ffd166" stroke-width="4"') +
        A.label(70, 128, "1", "#fff") + A.label(100, 128, "3", "#fff") + A.label(130, 128, "5", "#fff");
    }
  });
  P.push({
    id: "papermaze", t: 8, name: "Design a Maze", emoji: "🧩", level: "Medium", mins: 20,
    blurb: "Draw a maze so tricky that a grown-up gets stuck in it. Swap with a friend and race.",
    needs: ["Squared paper if you have it, or plain paper and a ruler", "Pencil", "Rubber", "A black pen"],
    steps: [
      "Mark a START on one edge and a FINISH on the other.",
      "In pencil, draw ONE path that wanders from start to finish. Make it turn a lot.",
      "Now draw walls on both sides of that path, all the way along.",
      "Fill the empty space with dead ends: paths that branch off and stop.",
      "Make the dead ends long. Short ones are too easy to spot.",
      "Go over all the walls in black pen.",
      "Rub out your original pencil path so the answer is hidden.",
      "Test it yourself before you hand it over."
    ],
    tip: "Draw the correct path FIRST and the dead ends after. Mazes drawn the other way round usually turn out to have no solution at all.",
    art: function () {
      var s = A.sheet(36, 26, 128, 100, "#fffdf7", 0, 4);
      var w = [[48, 38, 48, 100], [48, 38, 140, 38], [140, 38, 140, 78], [64, 52, 64, 114],
               [64, 52, 124, 52], [124, 52, 124, 92], [80, 66, 80, 100], [80, 66, 108, 66],
               [96, 80, 140, 80], [96, 80, 96, 92], [110, 92, 152, 92], [48, 114, 110, 114]];
      w.forEach(function (l) { s += A.line(l[0], l[1], l[2], l[3], "#5c5f70", 2.4); });
      s += A.path("M40 32 L56 32 L56 46 L72 46 L72 60 L88 60 L88 74 L104 74 L104 86 L132 86 L132 100 L160 100",
        "none", ' stroke="#ff6b9d" stroke-width="2" fill="none" stroke-dasharray="3 3"');
      return s + A.label(38, 22, "start", "#6bcb77") + A.label(162, 118, "end", "#e2453b");
    }
  });
  P.push({
    id: "cardtower", t: 8, name: "Card Tower Challenge", emoji: "🏗️", level: "Hard", mins: 20,
    blurb: "Make a deck of blank cards and see how high a tower you can build before it falls.",
    needs: ["Thick card", "Scissors", "Ruler", "A steady table", "A ruler to measure your record"],
    steps: [
      "Cut about forty rectangles of card the same size, roughly 6 cm by 9 cm.",
      "Make sure they are all the same. A tower is only as steady as its wobbliest card.",
      "Lean two cards against each other in an upside-down V. That is one arch.",
      "Build a row of arches side by side, all touching.",
      "Lay cards flat across the top of the whole row to make a floor.",
      "Build the next row of arches on top of that floor, slightly fewer than the row below.",
      "Keep going until it falls, then measure how high you got.",
      "For a harder version, cut small slits in the card edges so they slot together instead."
    ],
    tip: "Breathe out slowly and let go with both hands at once. Most towers fall because of the person, not the cards.",
    art: function () {
      var s = A.ground(134);
      var arch = function (x, y) {
        return A.sheet(x - 12, y, 5, 26, "#ffd166", -18, 2) + A.sheet(x + 7, y, 5, 26, "#ffd166", 18, 2);
      };
      s += arch(60, 100) + arch(100, 100) + arch(140, 100) + A.sheet(42, 92, 116, 6, "#f2b705", 0, 2);
      s += arch(80, 62) + arch(120, 62) + A.sheet(62, 54, 76, 6, "#f2b705", 0, 2);
      s += arch(100, 26) + A.sheet(84, 18, 32, 6, "#f2b705", 0, 2);
      return s;
    }
  });

  // ==================== 9 · Seasons & Holidays ====================
  P.push({
    id: "snowman", t: 9, name: "Paper Snowman", emoji: "⛄", level: "Easy", mins: 10,
    blurb: "Three circles, a hat and a carrot nose. He does not melt.",
    needs: ["White paper", "Coloured scraps", "Scissors", "Glue", "Black pen", "Round things to draw round"],
    steps: [
      "Draw round three round things of different sizes on the white paper and cut out the circles.",
      "Glue them onto a background, biggest at the bottom, so they overlap a little.",
      "Cut a small orange triangle for the nose and glue it on.",
      "Draw eyes and a curved line of dots for the mouth.",
      "Cut three small black circles for the buttons and glue them down the middle.",
      "Cut a hat from black paper — a rectangle and a wider brim — and glue it on top.",
      "Cut a thin strip for a scarf and glue it round his neck, with one end flying out."
    ],
    tip: "Overlap the circles slightly. Three circles that only touch look like three circles, not a snowman.",
    art: function () {
      return A.ground(136, "#e6f0fb") +
        A.circ(100, 106, 26, "#ffffff") + A.circ(100, 72, 20, "#ffffff") + A.circ(100, 44, 15, "#ffffff") +
        A.sheet(84, 22, 32, 12, "#2d2a4a", 0, 2) + A.sheet(76, 32, 48, 6, "#2d2a4a", 0, 2) +
        A.circ(95, 42, 2.4, "#2d2a4a") + A.circ(105, 42, 2.4, "#2d2a4a") +
        A.poly("100,48 116,52 100,54", "#ff9f68") +
        A.path("M82 60 q18 10 36 0", "none", ' stroke="#e2453b" stroke-width="6" fill="none"') +
        A.path("M118 62 q10 10 6 22", "none", ' stroke="#e2453b" stroke-width="5" fill="none"') +
        A.circ(100, 68, 3, "#2d2a4a") + A.circ(100, 80, 3, "#2d2a4a") +
        A.line(74, 74, 50, 60, "#8a5f2e", 2.4) + A.line(126, 74, 150, 60, "#8a5f2e", 2.4);
    }
  });
  P.push({
    id: "bat", t: 9, name: "Hanging Paper Bat", emoji: "🦇", level: "Easy", mins: 8,
    blurb: "A bat with concertina wings that flap when it swings. Hang a row of them in a doorway.",
    needs: ["Black paper", "Scissors", "Glue", "String", "White and red paper scraps"],
    steps: [
      "Cut a fat oval from black paper for the body.",
      "Cut two rectangles of black paper for the wings.",
      "Fold each rectangle into a concertina with folds about 1 cm wide.",
      "Pinch one end of each folded wing and glue it to the side of the body.",
      "Fan out the free ends of the wings.",
      "Cut two small triangles and glue them to the top of the body as ears.",
      "Cut two tiny white circles for eyes and two little fangs, and glue them on.",
      "Tape a string to the top of the head and hang it up."
    ],
    tip: "Glue only the pinched end of each wing. Glue the whole wing down and it cannot fan out.",
    art: function () {
      return A.line(100, 10, 100, 34, "#c9c3d8", 1.2) +
        A.fan(66, 62, 34, 6, "#3a3352", "#2d2a4a", 190, 320) +
        A.fan(134, 62, 34, 6, "#3a3352", "#2d2a4a", 220, 350) +
        A.ell(100, 62, 18, 24, "#2d2a4a") +
        A.poly("86,42 90,26 98,42", "#2d2a4a") + A.poly("114,42 110,26 102,42", "#2d2a4a") +
        A.circ(94, 56, 4.4, "#ffffff") + A.circ(106, 56, 4.4, "#ffffff") +
        A.circ(94, 56, 2, "#e2453b") + A.circ(106, 56, 2, "#e2453b") +
        A.poly("96,66 99,74 102,66", "#ffffff") + A.poly("104,66 107,74 110,66", "#ffffff");
    }
  });
  P.push({
    id: "pumpkin", t: 9, name: "3D Paper Pumpkin", emoji: "🎃", level: "Medium", mins: 15,
    blurb: "Strips of orange paper joined at both ends puff out into a round pumpkin.",
    needs: ["Orange paper", "Green paper", "Scissors", "Ruler", "A stapler or glue", "Brown paper for the stalk"],
    steps: [
      "Cut eight strips of orange paper, all the same: about 2 cm wide and 25 cm long.",
      "Stack them neatly and staple through all eight at one end.",
      "Fan the strips out like a flower.",
      "Bring the other ends round and staple all eight together at the bottom too.",
      "Spread the strips out evenly all the way round until it is a fat ball.",
      "Roll a small piece of brown paper into a tube and push it into the top as the stalk.",
      "Cut a curly green strip, wind it round a pencil, and tuck it in beside the stalk."
    ],
    tip: "Every strip must be exactly the same length or the pumpkin comes out lopsided. Cut them in a stack.",
    art: function () {
      var s = "";
      for (var i = 0; i < 7; i++) {
        var w = 34 - Math.abs(3 - i) * 4;
        s += A.ell(100 + (i - 3) * 11, 82, w / 2, 34, i % 2 ? "#ff9f68" : "#e08a5f");
      }
      return s + A.sheet(94, 38, 12, 16, "#8a5f2e", 0, 3) +
        A.path("M106 42 q14 -8 10 -18", "none", ' stroke="#4a9c58" stroke-width="2.4" fill="none"') +
        A.ground(120, "#f7ece2");
    }
  });
  P.push({
    id: "conetree", t: 9, name: "Christmas Cone Tree", emoji: "🎄", level: "Medium", mins: 15,
    blurb: "A cone with layers of snipped green paper. Stand a row of them along a windowsill.",
    needs: ["Green paper", "Card for the cone", "Scissors", "Glue", "A star cut from gold paper"],
    steps: [
      "Cut a big circle from card, then cut one slit from the edge to the middle.",
      "Overlap the two cut edges to make a cone and glue them. Trim the bottom flat so it stands.",
      "Cut strips of green paper about 5 cm wide.",
      "Snip along one long edge of each strip, cutting in about 3 cm, every 1 cm.",
      "Glue the first strip round the BOTTOM of the cone, snipped edge pointing down.",
      "Glue the next strip just above it, overlapping so the glued edge is hidden.",
      "Keep going up to the top.",
      "Glue the gold star on the very tip."
    ],
    tip: "Work bottom to top so each layer hides the join of the one below, like roof tiles.",
    art: function () {
      var s = A.ground(134, "#e6f2e8");
      for (var i = 0; i < 5; i++) {
        var y = 108 - i * 17, w = 46 - i * 8;
        s += A.poly((100 - w) + "," + y + " " + (100 + w) + "," + y + " " + (100 + w - 8) + "," + (y - 14) + " " + (100 - w + 8) + "," + (y - 14), i % 2 ? "#2f9e44" : "#4ab55d");
        for (var j = -2; j <= 2; j++) s += A.poly((100 + j * 14) + "," + y + " " + (100 + j * 14 + 5) + "," + y + " " + (100 + j * 14 + 2) + "," + (y + 7), i % 2 ? "#2f9e44" : "#4ab55d");
      }
      return s + A.star(100, 26, 13, "#ffd166") + A.sheet(94, 108, 12, 20, "#8a5f2e", 0, 2);
    }
  });
  P.push({
    id: "startopper", t: 9, name: "3D Star Topper", emoji: "🌟", level: "Medium", mins: 14,
    blurb: "A star with folded points that catches the light from every angle.",
    needs: ["Gold or yellow card", "Scissors", "Pencil", "Ruler", "Glue"],
    steps: [
      "Draw a five-pointed star on the card, as big as it will fit, and cut it out.",
      "Cut a second star exactly the same. Trace the first one.",
      "On each star, rule a line from every point to the exact centre.",
      "Fold each star along all five lines — points folding UP, valleys between them.",
      "Press every fold hard so the star holds its shape.",
      "Put glue on the flat back of one star and press the two together, puffy sides out.",
      "Leave it under a book for ten minutes, then push it onto the top of a tree or hang it up."
    ],
    tip: "Fold both stars in the same direction before glueing, or they will fight each other.",
    art: function () {
      var s = A.star(100, 70, 46, "#ffd166");
      for (var i = 0; i < 5; i++) {
        var a = (-90 + i * 72) * Math.PI / 180;
        s += A.line(100, 70, 100 + Math.cos(a) * 46, 70 + Math.sin(a) * 46, "#f2b705", 2);
        var b = (-54 + i * 72) * Math.PI / 180;
        s += A.line(100, 70, 100 + Math.cos(b) * 19, 70 + Math.sin(b) * 19, "#fff3c4", 2);
      }
      return s + A.circ(100, 70, 5, "#fff8e1");
    }
  });
  P.push({
    id: "chick", t: 9, name: "Easter Paper Chick", emoji: "🐤", level: "Easy", mins: 8,
    blurb: "A round yellow chick sitting in half an eggshell.",
    needs: ["Yellow paper", "White paper", "Orange scraps", "Scissors", "Glue", "Black pen"],
    steps: [
      "Cut a big yellow circle for the body and a smaller one for the head.",
      "Glue the head so it overlaps the top of the body.",
      "Cut a white oval and snip a zigzag across the middle. Keep the bottom half — that is the broken eggshell.",
      "Glue the eggshell over the bottom of the body, so the chick looks like it is sitting inside.",
      "Cut a small orange diamond, fold it in half, and glue it on as the beak.",
      "Cut two orange feet and glue them peeping out under the shell.",
      "Draw two dot eyes and glue on a small yellow triangle for a wing."
    ],
    tip: "Snip the eggshell zigzag freehand and slightly uneven. A perfectly regular zigzag looks like a saw, not a crack.",
    art: function () {
      return A.ground(136, "#f7f2e2") +
        A.circ(100, 82, 30, "#ffd166") + A.circ(100, 48, 21, "#ffd166") +
        A.poly("66,116 134,116 128,88 118,98 108,86 96,98 84,86 74,98", "#ffffff") +
        A.circ(93, 44, 3, "#2d2a4a") + A.circ(107, 44, 3, "#2d2a4a") +
        A.poly("96,52 112,56 96,60", "#ff9f68") +
        A.ell(74, 82, 9, 12, "#f2b705", -20) +
        A.circ(90, 40, 4, "#ffe9a8");
    }
  });
  P.push({
    id: "heartgarland", t: 9, name: "Heart Garland", emoji: "❤️", level: "Easy", mins: 12,
    blurb: "A string of hearts for February, or for any day somebody needs cheering up.",
    needs: ["Red and pink paper", "Scissors", "String", "Glue stick or a stapler"],
    steps: [
      "Fold a sheet of paper in half and draw half a heart against the fold.",
      "Cut it out and open it. Make about fifteen, in both colours.",
      "Lay the string out straight on the table.",
      "Put a line of glue down the middle of the back of one heart.",
      "Press it onto the string.",
      "Add the next heart a hand-width further along, alternating the colours.",
      "Let it dry flat before you pick it up, or the hearts will slide."
    ],
    tip: "Fold each heart gently down its middle after glueing so it opens out like a V. It hangs far better.",
    art: function () {
      var s = A.path("M14 42 Q100 62 186 42", "none", ' stroke="#c9b892" stroke-width="2" fill="none"');
      for (var i = 0; i < 6; i++) {
        var t = i / 5, x = 26 + t * 148, y = 46 + Math.sin(t * Math.PI) * 16;
        s += A.line(x, y - 4, x, y + 4, "#c9c3d8", 1) + A.heart(x, y + 24, 3.2, i % 2 ? "#ff6b9d" : "#e2453b");
      }
      return s;
    }
  });
  P.push({
    id: "leafrubbing", t: 9, name: "Autumn Leaf Rubbings", emoji: "🍂", level: "Easy", mins: 12,
    blurb: "Collect real leaves and take a print of every vein with a crayon.",
    needs: ["Real leaves from outside", "Thin paper", "Wax crayons with the paper peeled off", "Scissors"],
    steps: [
      "Go outside and collect leaves of different shapes. Flat, fresh ones work best.",
      "Put one leaf on the table with its BUMPY side facing up. The veins stand out more on the back.",
      "Lay the thin paper over the top.",
      "Hold the paper still with one hand.",
      "Rub the side of the crayon — not the tip — over the leaf, in one direction.",
      "Keep rubbing until the whole leaf shape and all its veins appear.",
      "Move the leaf and do another one in a different colour, overlapping the first.",
      "Cut them out and stick them on a window when you have a whole pile."
    ],
    tip: "Bumpy side up. Rub the smooth side and you get a leaf-shaped blob with no veins.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#fffdf7", 0, 4);
      [[70, 60, "#ff9f68", -20], [120, 54, "#e2453b", 25], [96, 100, "#f2b705", 5]].forEach(function (l) {
        s += A.ell(l[0], l[1], 22, 15, l[2], l[3]);
        s += A.line(l[0] - 20, l[1], l[0] + 20, l[1], "#8a5f2e", 1.4);
        for (var i = -2; i <= 2; i++) {
          s += A.line(l[0] + i * 8, l[1], l[0] + i * 8 + 4, l[1] - 8, "#8a5f2e", 1);
          s += A.line(l[0] + i * 8, l[1], l[0] + i * 8 + 4, l[1] + 8, "#8a5f2e", 1);
        }
      });
      return s;
    }
  });
  P.push({
    id: "rainbowmobile", t: 9, name: "Spring Rainbow Mobile", emoji: "🌈", level: "Easy", mins: 12,
    blurb: "A rainbow with raindrops and a cloud hanging underneath. Cheerful on the greyest day.",
    needs: ["Card", "Coloured paper in rainbow colours", "White paper for the cloud", "Scissors", "Glue", "String"],
    steps: [
      "Cut a big arch of card as the base for the rainbow.",
      "Cut strips of each rainbow colour, each a little shorter than the last.",
      "Glue them onto the arch in order: red on the outside, then orange, yellow, green, blue and purple.",
      "Cut two fluffy cloud shapes from white paper.",
      "Glue one cloud to each end of the rainbow.",
      "Cut raindrop shapes from blue paper.",
      "Tape the raindrops onto three lengths of string.",
      "Tape the strings to the back of one cloud so the drops hang down, then hang the rainbow up."
    ],
    tip: "Glue the colours in order from the outside in. Starting in the middle means the last strip never fits.",
    art: function () {
      var cols = ["#e2453b", "#ff9f68", "#ffd166", "#6bcb77", "#4d96ff", "#7c5cbf"];
      var s = "";
      for (var i = 0; i < 6; i++) {
        s += A.path("M" + (40 + i * 7) + " 92 A" + (60 - i * 7) + " " + (60 - i * 7) + " 0 0 1 " + (160 - i * 7) + " 92",
          "none", ' stroke="' + cols[i] + '" stroke-width="7" fill="none"');
      }
      s += A.circ(44, 94, 13, "#ffffff") + A.circ(58, 96, 10, "#ffffff") + A.circ(32, 98, 9, "#ffffff");
      s += A.circ(156, 94, 13, "#ffffff") + A.circ(142, 96, 10, "#ffffff") + A.circ(168, 98, 9, "#ffffff");
      [[40, 118], [52, 128], [64, 116]].forEach(function (d) {
        s += A.path("M" + d[0] + " " + d[1] + " q-5 7 0 10 q5 -3 0 -10 z", "#7fc4ff");
      });
      return s;
    }
  });
  P.push({
    id: "adventchain", t: 9, name: "Countdown Chain", emoji: "📆", level: "Medium", mins: 20,
    blurb: "A paper chain with a job on every link. Tear one off each day and do what it says.",
    needs: ["Coloured paper", "Scissors", "Glue stick", "A pen"],
    steps: [
      "Decide how many days you are counting down, and cut that many strips of paper.",
      "On each strip, write one small thing to do that day: sing a song, ring a grandparent, draw a picture.",
      "Number the strips backwards, so the last day is number 1.",
      "Turn the first strip so the writing faces IN, and glue it into a loop.",
      "Thread the next strip through and glue it, writing facing in again.",
      "Keep going, ending with number 1 at the bottom.",
      "Hang it up and tear off the bottom link each day."
    ],
    tip: "Writing faces inwards so nobody can read ahead. That is the whole point of the chain.",
    art: function () {
      var s = "";
      var cols = ["#e2453b", "#2f9e44", "#ffd166", "#4d96ff", "#ff6b9d", "#7c5cbf"];
      for (var i = 0; i < 6; i++) {
        s += '<ellipse cx="100" cy="' + (26 + i * 18) + '" rx="' + (i % 2 ? 8 : 20) + '" ry="' + (i % 2 ? 20 : 8) +
          '" fill="none" stroke="' + cols[i] + '" stroke-width="5"/>';
      }
      return s + A.label(100, 142, "tear one a day", "#a89ec4");
    }
  });

  // ==================== 10 · Cards for Occasions ====================
  // Handmade cards for the days a family marks. Every one is a card a grade-schooler can finish
  // in one sitting and hand to somebody the same day.
  P.push({
    id: "birthdayballoon", t: 10, name: "Birthday Balloon Card", emoji: "🎈", level: "Easy", mins: 12,
    blurb: "Open it and a bunch of balloons springs up off the page.",
    needs: ["1 sheet of card", "Coloured paper", "Scissors", "Glue stick", "Pens", "Thin string or thread"],
    steps: [
      "Fold the card in half and put it down with the fold at the top.",
      "Cut four balloon shapes from different coloured papers, each about as big as your thumb.",
      "Cut four short pieces of paper about 1 cm wide and 5 cm long for the springs.",
      "Fold each spring strip back and forth like a tiny concertina.",
      "Glue one end of each spring to the inside of the card, spread out near the top.",
      "Glue a balloon to the free end of each spring, so the balloons stand up off the page.",
      "Draw a curly string from each balloon down to one point near the bottom.",
      "Write your message underneath, then close the card gently to check the balloons squash flat."
    ],
    tip: "Squash the springs flat with your hand before you close it the first time. If a balloon pokes out of the side, trim it smaller.",
    art: function () {
      var s = A.sheet(34, 28, 132, 100, "#ffffff", 0, 5) + A.poly("100,28 100,128 34,120 34,36", "#fdf7ff");
      var cols = ["#ff6b9d", "#ffd166", "#4d96ff", "#8ce99a"];
      [[68, 52], [90, 42], [112, 44], [132, 56]].forEach(function (p, i) {
        s += A.path("M" + p[0] + " " + (p[1] + 26) + " Q" + (p[0] - 4) + " " + (p[1] + 40) + " 100 108", "none",
          ' stroke="#c9c3d8" stroke-width="1.2" fill="none"');
        s += A.ell(p[0], p[1], 10, 13, cols[i]);
        s += A.poly((p[0] - 3) + "," + (p[1] + 13) + " " + (p[0] + 3) + "," + (p[1] + 13) + " " + p[0] + "," + (p[1] + 18), cols[i]);
        s += A.circ(p[0] - 3, p[1] - 4, 2.4, "#fff", ' opacity=".55"');
      });
      return s + A.fold(100, 28, 100, 128) + A.label(100, 120, "Happy Birthday!", "#b52f63");
    }
  });
  P.push({
    id: "teacherapple", t: 10, name: "Thank You, Teacher", emoji: "🍎", level: "Easy", mins: 10,
    blurb: "An apple-shaped card for the last day of term.",
    needs: ["Red card", "Green paper", "Brown paper", "Scissors", "Glue stick", "A pen"],
    steps: [
      "Fold the red card in half.",
      "Draw half an apple shape against the folded edge, so the fold runs down the middle of the apple.",
      "Cut it out, but do NOT cut along the fold, or the card will fall into two pieces.",
      "Open it up. You have an apple that opens like a book.",
      "Cut a small leaf from green paper and a short stalk from brown paper.",
      "Glue the stalk and the leaf to the top of the front.",
      "Write your thank you inside, and say one thing you actually enjoyed this year."
    ],
    tip: "Naming one real thing beats 'thanks for everything'. Teachers keep the ones that mention something they did.",
    art: function () {
      return A.ground(134, "#f7ece2") +
        A.path("M100 44 C74 40 60 62 62 84 C64 108 84 122 100 116 C116 122 136 108 138 84 C140 62 126 40 100 44 Z", "#e2453b") +
        A.path("M100 44 C74 40 60 62 62 84 C64 108 84 122 100 116 Z", "#c9342b") +
        A.sheet(96, 26, 7, 20, "#8a5f2e", 8, 3) +
        A.path("M104 32 Q126 22 132 38 Q112 46 104 32 Z", "#4ab55d") +
        A.fold(100, 44, 100, 118) +
        A.label(100, 132, "Thank you!", "#8f1d47");
    }
  });
  P.push({
    id: "getwell", t: 10, name: "Get Well Soon Card", emoji: "🩹", level: "Easy", mins: 10,
    blurb: "A cheerful card with a giant paper plaster across the front.",
    needs: ["Card", "Pale pink or cream paper", "Coloured paper", "Scissors", "Glue stick", "Pens"],
    steps: [
      "Fold the card in half.",
      "Cut a long rectangle from the pale paper and round off its four corners. That is the plaster.",
      "Cut a small rectangle of a different colour and glue it across the middle of the plaster.",
      "Draw a row of little dots on that middle patch, like a real plaster.",
      "Glue the plaster diagonally across the front of the card.",
      "Draw a smiley face in one corner.",
      "Inside, write something that will make them laugh rather than something serious."
    ],
    tip: "A joke from the Kids and Family Jokes category makes a better get-well card than a long message.",
    art: function () {
      return A.sheet(34, 26, 132, 104, "#ffffff", 0, 5) +
        A.sheet(50, 62, 100, 30, "#ffd9c0", -18, 14) +
        A.sheet(84, 68, 32, 24, "#f3c4a6", -18, 5) +
        A.circ(92, 76, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(100, 76, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(108, 76, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(92, 84, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(100, 84, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(108, 84, 1.8, "#c9974d", ' transform="rotate(-18 100 78)"') +
        A.circ(52, 42, 11, "#ffd166") + A.face(52, 40, 0.8) +
        A.label(100, 120, "Get well soon!", "#c9822a");
    }
  });
  P.push({
    id: "congrats", t: 10, name: "Congratulations Star Card", emoji: "⭐", level: "Easy", mins: 10,
    blurb: "A gold star that stands proud of the card. Good for a race won or a badge earned.",
    needs: ["Card", "Gold or yellow paper", "Scissors", "Glue stick", "Pens"],
    steps: [
      "Fold the card in half.",
      "Cut two identical stars from the gold paper.",
      "Fold one star gently down its middle so it is not flat.",
      "Glue only the LEFT half of the folded star onto the front of the card.",
      "Glue the second star flat, just behind and a little to one side, so it peeps out.",
      "The folded star now lifts off the card when you look from the side.",
      "Write what they did on the front, and why you are proud of them inside."
    ],
    tip: "Glue only one half of the folded star. Glue both and it lies flat and loses the whole effect.",
    art: function () {
      return A.sheet(34, 26, 132, 104, "#4d96ff", 0, 5) +
        A.star(114, 66, 30, "#f2b705") + A.star(100, 72, 34, "#ffd166") +
        A.line(100, 42, 100, 100, "#f2b705", 1.6) +
        A.label(100, 118, "Well done!", "#ffffff");
    }
  });
  P.push({
    id: "flowerpotcard", t: 10, name: "Mother's Day Flower Pot", emoji: "💐", level: "Medium", mins: 18,
    blurb: "A pot on the front with real paper flowers you can lift out. For a mum, a nan, or whoever does the mum jobs.",
    needs: ["Card", "Coloured paper", "Green paper", "Scissors", "Glue stick", "Pens"],
    steps: [
      "Fold the card in half.",
      "Cut a pot shape from coloured paper, about as wide as your hand.",
      "Glue the pot to the front, but put glue ONLY around the sides and the bottom. Leave the top open so it is a pocket.",
      "Cut three strips of green paper for stems, each a little longer than the pot is tall.",
      "Cut three flowers, each from a folded square so the petals match all the way round.",
      "Glue one flower to the top of each stem, and a small circle in the middle of each flower.",
      "Write one thing you love about them on each stem.",
      "Slide the stems into the pot pocket so the flowers can be pulled out and read."
    ],
    tip: "Making the pot a pocket is the whole idea. Glue the top edge by mistake and the flowers are stuck.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#fdf7ff", 0, 5);
      var cols = ["#ff6b9d", "#ffd166", "#b39ddb"];
      [[76, 46], [100, 38], [124, 46]].forEach(function (p, i) {
        s += A.line(p[0], p[1], p[0] + (1 - i) * -4, 92, "#4a9c58", 3);
        s += A.petals(p[0], p[1], 8, 6, 6, 4.4, cols[i]) + A.circ(p[0], p[1], 4, "#fff8e1");
      });
      return s + A.poly("66,88 134,88 126,120 74,120", "#c9704a") +
        A.sheet(64, 84, 72, 9, "#e08a5f", 0, 3) +
        A.label(100, 108, "for you", "#fff");
    }
  });
  P.push({
    id: "shirtcard", t: 10, name: "Father's Day Shirt Card", emoji: "👔", level: "Medium", mins: 16,
    blurb: "A card folded into a shirt with a collar and a tie. For a dad, a grandad, or whoever does the dad jobs.",
    needs: ["1 sheet of card", "Coloured paper for the tie", "Scissors", "Glue stick", "Pens", "A ruler"],
    steps: [
      "Lay the card portrait and fold the bottom edge up to the middle.",
      "Turn it over. Fold the two top corners down towards the middle so they nearly meet, leaving a small gap.",
      "Those two folded triangles are the collar.",
      "Fold the top edge of the bottom half up and tuck it UNDER the collar.",
      "Cut a tie shape from the coloured paper: a small knot and a longer pointed piece.",
      "Glue the knot into the gap between the collar points, then glue the tie hanging below it.",
      "Draw a line of buttons down the middle and a pocket on one side.",
      "Write your message on the back, or inside if you left it openable."
    ],
    tip: "Press every fold hard with your thumbnail. This one only looks like a shirt if the folds are sharp.",
    art: function () {
      return A.sheet(40, 24, 120, 108, "#7fc4ff", 0, 5) +
        A.poly("40,24 100,68 76,24", "#ffffff") + A.poly("160,24 100,68 124,24", "#ffffff") +
        A.poly("94,52 106,52 110,66 90,66", "#e2453b") +
        A.poly("90,66 110,66 104,112 96,112", "#e2453b") +
        A.circ(100, 84, 2.4, "#b52f2a") +
        A.sheet(50, 74, 22, 18, "#4d96ff", 0, 2) +
        A.line(100, 24, 100, 68, "#cfe3f7", 1.4);
    }
  });
  P.push({
    id: "christmastreecard", t: 10, name: "Christmas Tree Pop-Up", emoji: "🎄", level: "Medium", mins: 16,
    blurb: "A tree that stands straight up when the card opens, with baubles you stick on yourself.",
    needs: ["1 sheet of card", "Green paper", "Coloured paper scraps", "Scissors", "Glue stick", "Ruler"],
    steps: [
      "Fold the card in half and open it flat again so you can see the middle crease.",
      "Cut two parallel slits into the crease, 5 cm apart and 4 cm deep.",
      "Fold the flap between the slits forwards, then close the card and press it so the flap pops inwards.",
      "Open the card. A step now stands up off the middle.",
      "Cut a triangle of green paper a little taller than the step and glue its bottom edge to the front of the step.",
      "Cut a second, smaller green triangle and glue it over the first, slightly higher up.",
      "Stick small circles of coloured paper on as baubles, and a star on the top.",
      "Close the card and check the tree folds flat inside. Trim the tree if it pokes out."
    ],
    tip: "Measure the two slits with a ruler. This is one of the few paper jobs where guessing really does show.",
    art: function () {
      return A.sheet(34, 26, 132, 104, "#ffffff", 0, 5) + A.poly("100,26 100,126 34,118 34,34", "#f4faff") +
        A.poly("100,42 78,74 122,74", "#2f9e44") +
        A.poly("100,58 70,102 130,102", "#3aa64f") +
        A.sheet(94, 100, 12, 14, "#8a5f2e", 0, 2) +
        A.star(100, 36, 10, "#ffd166") +
        A.circ(88, 68, 3.4, "#e2453b") + A.circ(112, 66, 3.4, "#4d96ff") +
        A.circ(82, 92, 3.4, "#ffd166") + A.circ(118, 94, 3.4, "#ff6b9d") + A.circ(100, 86, 3.4, "#b39ddb") +
        A.fold(100, 26, 100, 126);
    }
  });
  P.push({
    id: "diwalicard", t: 10, name: "Diwali Diya Card", emoji: "🪔", level: "Medium", mins: 16,
    blurb: "A row of little clay lamps with glowing flames, for the festival of lights.",
    needs: ["Dark blue or purple card", "Orange and yellow paper", "Brown paper", "Scissors", "Glue stick", "A gold or white pen"],
    steps: [
      "Fold the dark card in half.",
      "Cut three small bowl shapes from the brown paper. These are the diyas, the little lamps.",
      "Glue them in a row across the front, near the bottom.",
      "Cut three flame shapes from orange paper and three smaller ones from yellow.",
      "Glue an orange flame above each lamp, then a yellow flame on top of each orange one.",
      "Use the gold or white pen to draw a ring of dots glowing around each flame.",
      "Draw a rangoli pattern along the bottom edge: a row of repeating shapes, mirrored on both sides.",
      "Write Happy Diwali inside."
    ],
    tip: "A rangoli pattern is symmetrical. Fold your paper in half, draw half the pattern, and copy it to the other side.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#3b1478", 0, 5);
      [[68, 96], [100, 96], [132, 96]].forEach(function (p) {
        s += A.path("M" + (p[0] - 14) + " " + p[1] + " q14 14 28 0 z", "#a3763f");
        s += A.ell(p[0], p[1], 14, 3.4, "#c9974d");
        s += A.path("M" + p[0] + " " + (p[1] - 22) + " q7 10 0 16 q-7 -6 0 -16 z", "#ff9f68");
        s += A.path("M" + p[0] + " " + (p[1] - 16) + " q4 6 0 10 q-4 -4 0 -10 z", "#ffd166");
        s += A.circ(p[0], p[1] - 18, 12, "#ffd166", ' opacity=".16"');
      });
      for (var i = 0; i < 9; i++) s += A.circ(44 + i * 14, 118, 2.4, "#ffd166", ' opacity=".8"');
      return s + A.label(100, 46, "Happy Diwali", "#ffd166");
    }
  });
  P.push({
    id: "eidcard", t: 10, name: "Eid Crescent Moon Card", emoji: "🌙", level: "Medium", mins: 15,
    blurb: "A silver moon and a sky of stars, for Eid.",
    needs: ["Dark blue card", "White or silver paper", "Yellow paper", "Scissors", "Glue stick", "A white pen"],
    steps: [
      "Fold the dark blue card in half.",
      "To make the crescent, draw a circle on the white paper, then draw a second circle overlapping it and slightly to one side.",
      "Cut around the outside of the first circle, then cut away the part where the second circle overlaps.",
      "What is left is a crescent moon. Glue it near the top of the front.",
      "Cut five or six small stars from the yellow paper and glue them around the moon.",
      "Use the white pen to add tiny dots between the stars so the sky looks full.",
      "Write Eid Mubarak on the front, and your message inside."
    ],
    tip: "The two circles must overlap, not just touch. The further you slide the second circle across, the thinner the crescent.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#12447f", 0, 5);
      s += A.path("M118 74 A26 26 0 1 1 96 48 A21 21 0 1 0 118 74 Z", "#f7f9fc");
      [[62, 46], [78, 100], [140, 52], [128, 106], [54, 78]].forEach(function (p, i) {
        s += A.star(p[0], p[1], i % 2 ? 6 : 8, "#ffd166");
      });
      for (var i = 0; i < 10; i++) {
        s += A.circ(44 + (i * 13) % 116, 34 + (i * 29) % 88, 1.4, "#cfe3f7", ' opacity=".8"');
      }
      return s + A.label(100, 122, "Eid Mubarak", "#ffd166");
    }
  });
  P.push({
    id: "spiderwebcard", t: 10, name: "Halloween Web Card", emoji: "🕸️", level: "Medium", mins: 15,
    blurb: "A card with a real woven web across the front and a friendly spider sitting on it.",
    needs: ["Black card", "White wool or string", "Scissors", "Sticky tape", "White and coloured paper", "A hole punch"],
    steps: [
      "Fold the black card in half.",
      "On the front, punch a ring of holes around the edge, about 2 cm apart.",
      "Cut a long piece of white wool and tape one end inside the front cover.",
      "Thread the wool out through one hole, across the front, and back in through a hole on the other side.",
      "Keep crossing from side to side so the threads make a web pattern.",
      "Tape the loose end inside when the web looks full.",
      "Cut a small black circle and glue two white paper eyes on it. That is the spider.",
      "Glue the spider onto the web, and add eight short legs cut from paper."
    ],
    tip: "Cross the middle a few times early on. Threads that only go round the outside look like a fence, not a web.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#2d2a4a", 0, 5);
      for (var i = 0; i < 8; i++) {
        var a = i * 45 * Math.PI / 180;
        s += A.line(100, 76, 100 + Math.cos(a) * 52, 76 + Math.sin(a) * 42, "#c9c3d8", 1.2);
      }
      [18, 30, 42].forEach(function (r) {
        var pts = [];
        for (var j = 0; j < 8; j++) {
          var a2 = j * 45 * Math.PI / 180;
          pts.push((100 + Math.cos(a2) * r * 1.25).toFixed(1) + "," + (76 + Math.sin(a2) * r).toFixed(1));
        }
        s += '<polygon points="' + pts.join(" ") + '" fill="none" stroke="#c9c3d8" stroke-width="1.2"/>';
      });
      s += A.ell(118, 60, 9, 7, "#1a1830");
      for (var k = 0; k < 4; k++) {
        s += A.line(110, 58 + k * 2, 102, 52 + k * 4, "#1a1830", 1.4);
        s += A.line(126, 58 + k * 2, 134, 52 + k * 4, "#1a1830", 1.4);
      }
      return s + A.circ(115, 58, 2.2, "#ffffff") + A.circ(121, 58, 2.2, "#ffffff") +
        A.circ(115, 58, 1, "#2d2a4a") + A.circ(121, 58, 1, "#2d2a4a");
    }
  });
  P.push({
    id: "wovenheart", t: 10, name: "Woven Heart Card", emoji: "💗", level: "Hard", mins: 22,
    blurb: "Two paper hearts woven together so they lock without any glue at all. A proper Valentine.",
    needs: ["Red paper", "White paper", "Scissors", "A ruler", "A pencil", "Card for the base"],
    steps: [
      "Cut one rectangle of red paper and one of white, both the same size, about 8 cm by 16 cm.",
      "Fold each one in half so you have two squares standing on their folds.",
      "Round off the two corners at the OPEN end of each, so each piece looks like an arch.",
      "On each piece, cut two straight slits from the folded edge up towards the curve, dividing it into three equal strips. Stop before you reach the curve.",
      "Hold the red arch in one hand and the white in the other, at right angles to each other.",
      "Weave the first red strip THROUGH the first white strip, then AROUND the second, then through the third.",
      "Weave the second red strip the opposite way: around, through, around.",
      "Weave the third strip like the first. Open it out and you have a heart-shaped pocket that holds itself together.",
      "Glue it to the front of a folded card, and slide a small note inside the pocket."
    ],
    tip: "Alternating is the whole trick: through, around, through, then around, through, around. Two rows the same and it falls apart.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#fff0f5", 0, 5);
      s += A.path("M100 118 L60 78 A22 22 0 0 1 100 56 A22 22 0 0 1 140 78 Z", "#ff6b9d");
      for (var i = 0; i < 3; i++) {
        s += A.path("M" + (76 + i * 16) + " " + (100 - i * 2) + " L" + (100 + i * 14) + " " + (60 + i * 10), "none",
          ' stroke="#ffffff" stroke-width="9" stroke-linecap="round"');
      }
      for (var j = 0; j < 3; j++) {
        s += A.path("M" + (124 - j * 16) + " " + (100 - j * 2) + " L" + (100 - j * 14) + " " + (60 + j * 10), "none",
          ' stroke="#e05586" stroke-width="9" stroke-linecap="round" opacity=".85"');
      }
      return s + A.label(100, 128, "no glue needed", "#b52f63");
    }
  });
  P.push({
    id: "menorahcard", t: 10, name: "Hanukkah Menorah Card", emoji: "🕎", level: "Hard", mins: 20,
    blurb: "A menorah with nine candles, and a flame you add each night of the festival.",
    needs: ["Blue card", "White and yellow paper", "Scissors", "Glue stick", "A silver or white pen", "A small envelope or paper pocket"],
    steps: [
      "Fold the blue card in half.",
      "Cut a menorah shape from white paper: a base, an upright stem, and a straight arm across the top.",
      "Glue it to the front of the card, low down, so there is room above it.",
      "Cut nine thin candles from white paper, all the same height except the middle one, which should be taller.",
      "Glue the candles along the arm, four on each side and the tall one in the middle.",
      "Cut nine small flames from yellow paper, but do NOT glue them on.",
      "Glue a small paper pocket inside the card and keep the flames in it.",
      "Each night of Hanukkah, take out one flame and stick it on. The tall middle candle, the shamash, is lit first every night."
    ],
    tip: "Leaving the flames loose is what makes this one worth keeping. It becomes something the family does together for eight nights.",
    art: function () {
      var s = A.sheet(34, 26, 132, 104, "#12447f", 0, 5);
      s += A.sheet(84, 112, 32, 8, "#f7f9fc", 0, 3) + A.sheet(96, 84, 8, 30, "#f7f9fc", 0, 2) +
        A.sheet(56, 78, 88, 7, "#f7f9fc", 0, 3);
      for (var i = 0; i < 9; i++) {
        var x = 60 + i * 10, mid = (i === 4);
        s += A.sheet(x - 2, mid ? 52 : 60, 5, mid ? 26 : 18, "#ffffff", 0, 2);
        if (i <= 4) {
          s += A.path("M" + (x + 0.5) + " " + ((mid ? 52 : 60) - 9) + " q4 6 0 9 q-4 -3 0 -9 z", "#ffd166");
        }
      }
      // One caption only: a second line at the foot of the card was clipping off the picture.
      return s + A.label(100, 42, "Happy Hanukkah", "#ffd166");
    }
  });

  window.PAPER_ACTIVITIES = P;
})();
