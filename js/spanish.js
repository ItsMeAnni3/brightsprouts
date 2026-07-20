// BrightSprouts Academy — Learn Spanish category (LESSONS[21]): basic Spanish for grade-schoolers.
// Greetings, numbers, colours, family and animals — each with a labeled picture-vocabulary diagram.
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // Numbers 1–10 — numeral bubbles with the Spanish word beneath (two rows of five).
  var nums = [["1","uno"],["2","dos"],["3","tres"],["4","cuatro"],["5","cinco"],
              ["6","seis"],["7","siete"],["8","ocho"],["9","nueve"],["10","diez"]];
  var numDia = '<svg viewBox="0 0 340 162"><rect width="340" height="162" rx="14" fill="#eef6ff"/>';
  for (var i = 0; i < 10; i++) {
    var c = i % 5, r = Math.floor(i / 5), cx = 42 + c * 64, cy = 42 + r * 72;
    numDia += '<circle cx="' + cx + '" cy="' + cy + '" r="20" fill="#4d96ff"/>'
      + '<text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" ' + FA + ' font-size="16" fill="#fff">' + nums[i][0] + '</text>'
      + '<text x="' + cx + '" y="' + (cy + 40) + '" text-anchor="middle" ' + LB + '>' + nums[i][1] + '</text>';
  }
  numDia += '</svg>';

  // Colours — a swatch of each colour with the Spanish word beneath (two rows of five).
  var cols = [["#e63946","rojo"],["#4d96ff","azul"],["#ffd166","amarillo"],["#43aa8b","verde"],["#f3722c","naranja"],
              ["#7c5cbf","morado"],["#ff8fb1","rosa"],["#8a5a2b","marrón"],["#2b2b2b","negro"],["#ffffff","blanco"]];
  var colDia = '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#faf7ff"/>';
  for (var j = 0; j < 10; j++) {
    var cc = j % 5, cr = Math.floor(j / 5), x = 16 + cc * 64, y = 20 + cr * 74;
    colDia += '<rect x="' + x + '" y="' + y + '" width="48" height="40" rx="9" fill="' + cols[j][0] + '" stroke="#d8d2e8" stroke-width="1.5"/>'
      + '<text x="' + (x + 24) + '" y="' + (y + 56) + '" text-anchor="middle" ' + LB + '>' + cols[j][1] + '</text>';
  }
  colDia += '</svg>';

  // Family — a simple labeled figure for each of six family words (two rows of three).
  function person(px, py, col, lbl) {
    return '<circle cx="' + px + '" cy="' + py + '" r="13" fill="' + col + '"/>'
      + '<path d="M' + (px - 17) + ' ' + (py + 40) + ' Q' + px + ' ' + (py + 10) + ' ' + (px + 17) + ' ' + (py + 40) + ' Z" fill="' + col + '"/>'
      + '<text x="' + px + '" y="' + (py + 58) + '" text-anchor="middle" ' + LB + '>' + lbl + '</text>';
  }
  var famDia = '<svg viewBox="0 0 340 194"><rect width="340" height="194" rx="14" fill="#fff3f6"/>'
    + person(70, 34, "#4d96ff", "papá") + person(170, 34, "#e26d8f", "mamá") + person(270, 34, "#5aa469", "hermano")
    + person(70, 116, "#e0a94a", "hermana") + person(170, 116, "#7c5cbf", "abuelo") + person(270, 116, "#d06a6a", "abuela")
    + '</svg>';

  // Greetings — two speech bubbles with translations.
  var greetDia = '<svg viewBox="0 0 340 150"><rect width="340" height="150" rx="14" fill="#fff6ee"/>'
    + '<g><rect x="26" y="26" width="130" height="56" rx="16" fill="#ffd6a5" stroke="#f0a04a" stroke-width="2"/>'
    + '<path d="M58 80 l-8 22 l26 -18 z" fill="#ffd6a5" stroke="#f0a04a" stroke-width="2"/>'
    + '<text x="91" y="62" text-anchor="middle" ' + FA + ' font-size="22" fill="#b5651d">¡Hola!</text></g>'
    + '<text x="91" y="128" text-anchor="middle" ' + LB + '>= Hello</text>'
    + '<g><rect x="184" y="26" width="130" height="56" rx="16" fill="#bfe3ff" stroke="#4d96ff" stroke-width="2"/>'
    + '<path d="M282 80 l8 22 l-26 -18 z" fill="#bfe3ff" stroke="#4d96ff" stroke-width="2"/>'
    + '<text x="249" y="62" text-anchor="middle" ' + FA + ' font-size="21" fill="#2b6bc4">¡Adiós!</text></g>'
    + '<text x="249" y="128" text-anchor="middle" ' + LB + '>= Goodbye</text></svg>';

  // Animals — four simple labeled creatures.
  var aniDia = '<svg viewBox="0 0 340 118"><rect width="340" height="118" rx="14" fill="#eefaf0"/>'
    // pez (fish)
    + '<ellipse cx="52" cy="52" rx="26" ry="16" fill="#4da6ff"/><path d="M78 52 l18 -12 v24 z" fill="#4da6ff"/><circle cx="42" cy="47" r="3" fill="#123"/>'
    // pájaro (bird)
    + '<circle cx="133" cy="52" r="20" fill="#ffca3a"/><path d="M151 50 l15 4 l-15 6 z" fill="#f4820a"/><circle cx="138" cy="46" r="3" fill="#123"/><path d="M120 54 q9 9 18 1" fill="none" stroke="#e0a800" stroke-width="3"/>'
    // gato (cat)
    + '<circle cx="214" cy="54" r="20" fill="#b0a8c0"/><path d="M198 42 l-5 -16 l16 8 z" fill="#b0a8c0"/><path d="M230 42 l5 -16 l-16 8 z" fill="#b0a8c0"/><circle cx="207" cy="52" r="2.5" fill="#123"/><circle cx="221" cy="52" r="2.5" fill="#123"/><path d="M214 58 v5 M206 60 h-9 M222 60 h9" stroke="#5a5470" stroke-width="1.4" fill="none"/>'
    // perro (dog)
    + '<circle cx="295" cy="54" r="18" fill="#c99a6a"/><ellipse cx="279" cy="52" rx="6" ry="12" fill="#a6774a"/><ellipse cx="311" cy="52" rx="6" ry="12" fill="#a6774a"/><circle cx="289" cy="52" r="2.5" fill="#123"/><circle cx="301" cy="52" r="2.5" fill="#123"/><ellipse cx="295" cy="62" rx="4" ry="3" fill="#5a3d24"/>'
    + '<g ' + LB + ' text-anchor="middle"><text x="52" y="104">pez</text><text x="133" y="104">pájaro</text><text x="214" y="104">gato</text><text x="295" y="104">perro</text></g></svg>';

  LESSONS[21] = {
    greetings: {
      title: "Greetings & Manners", emoji: "👋",
      intro: "¡Hola! That means 'hello' — you just spoke Spanish! Let's learn the friendly words to greet people and be polite.",
      learn: [
        "\"Hola\" means hello — the h is silent, so it sounds like OH-lah.",
        "\"Adiós\" means goodbye. \"Buenos días\" means good morning (good day).",
        "\"Buenas tardes\" means good afternoon; \"Buenas noches\" means good evening / good night.",
        "To be polite: \"por favor\" = please, \"gracias\" = thank you, \"de nada\" = you're welcome.",
        "\"Sí\" means yes and \"no\" means no. \"¿Cómo estás?\" means \"How are you?\" — you can answer \"Bien\" (good)."
      ],
      activity: "👋 Greeting Game: All week, greet your family with '¡Buenos días!' and say '¡Gracias!' whenever someone helps you. Count how many times you use Spanish in a day!",
      diagram: greetDia,
      questions: [
        { q: "How do you say 'hello' in Spanish?", a: "Hola" },
        { q: "How do you say 'goodbye' in Spanish?", a: "Adiós" },
        { q: "What does 'gracias' mean?", a: "Thank you" },
        { q: "How do you say 'please' in Spanish?", a: "Por favor" },
        { q: "What does 'buenos días' mean?", a: "Good morning (good day)" },
        { q: "How do you say 'yes' in Spanish?", a: "Sí" },
        { q: "How do you say 'no' in Spanish?", a: "No" },
        { q: "What does 'de nada' mean?", a: "You're welcome" },
        { q: "'Buenas noches' means ____.", a: "Good evening / good night" },
        { q: "What does '¿Cómo estás?' mean?", a: "How are you?" },
        { q: "How do you answer that you feel good?", a: "Bien" },
        { q: "Is the 'h' in 'hola' spoken out loud?", a: "No — it is silent" }
      ]
    },
    numbers: {
      title: "Numbers 1–10", emoji: "🔢",
      intro: "Counting in Spanish sounds like a little song. Let's learn to count from uno all the way to diez!",
      learn: [
        "1 = uno, 2 = dos, 3 = tres.",
        "4 = cuatro, 5 = cinco, 6 = seis.",
        "7 = siete, 8 = ocho, 9 = nueve.",
        "10 = diez. Try clapping once for each number as you say it!",
        "\"¿Cuántos?\" means \"How many?\""
      ],
      activity: "🔢 Count It Out: Count your toys, the stairs, or your snacks in Spanish — 'uno, dos, tres...' up to diez. Then teach someone in your family to count to 10!",
      diagram: numDia,
      questions: [
        { q: "What is 'one' in Spanish?", a: "Uno" },
        { q: "What is 'two' in Spanish?", a: "Dos" },
        { q: "What is 'three' in Spanish?", a: "Tres" },
        { q: "What is 'four' in Spanish?", a: "Cuatro" },
        { q: "What is 'five' in Spanish?", a: "Cinco" },
        { q: "What number is 'seis'?", a: "Six (6)" },
        { q: "What is 'seven' in Spanish?", a: "Siete" },
        { q: "What number is 'ocho'?", a: "Eight (8)" },
        { q: "What is 'nine' in Spanish?", a: "Nueve" },
        { q: "What is 'ten' in Spanish?", a: "Diez" },
        { q: "What does '¿Cuántos?' mean?", a: "How many?" },
        { q: "Count from 1 to 3 in Spanish.", a: "Uno, dos, tres" }
      ]
    },
    colours: {
      title: "Colours", emoji: "🌈",
      intro: "Rojo, azul, amarillo... colours are everywhere! Let's learn to name them all en español.",
      learn: [
        "rojo = red, azul = blue, amarillo = yellow.",
        "verde = green, naranja = orange, morado = purple.",
        "rosa = pink, marrón = brown.",
        "negro = black, blanco = white.",
        "\"¿De qué color es?\" means \"What colour is it?\""
      ],
      activity: "🌈 Colour Hunt: Walk around your home and point at things, naming each colour in Spanish — '¡Rojo!' for an apple, '¡Azul!' for the sky. Find something for every colour you learned!",
      diagram: colDia,
      questions: [
        { q: "What is 'red' in Spanish?", a: "Rojo" },
        { q: "What is 'blue' in Spanish?", a: "Azul" },
        { q: "What is 'yellow' in Spanish?", a: "Amarillo" },
        { q: "What is 'green' in Spanish?", a: "Verde" },
        { q: "What colour is 'naranja'?", a: "Orange" },
        { q: "What is 'purple' in Spanish?", a: "Morado" },
        { q: "What colour is 'rosa'?", a: "Pink" },
        { q: "What is 'black' in Spanish?", a: "Negro" },
        { q: "What is 'white' in Spanish?", a: "Blanco" },
        { q: "What colour is 'marrón'?", a: "Brown" },
        { q: "What does '¿De qué color es?' mean?", a: "What colour is it?" },
        { q: "What is the Spanish word for the colour of grass?", a: "Verde (green)" }
      ]
    },
    family: {
      title: "Family", emoji: "👨‍👩‍👧",
      intro: "Your familia is your family! Let's learn to name the special people you love in Spanish.",
      learn: [
        "madre (or mamá) = mother; padre (or papá) = father.",
        "hermano = brother; hermana = sister.",
        "abuelo = grandfather; abuela = grandmother.",
        "hijo = son; hija = daughter.",
        "\"familia\" = family. Many Spanish words end in -o for boys/men and -a for girls/women."
      ],
      activity: "👨‍👩‍👧 Family Portrait: Draw your family and label each person in Spanish — 'mamá', 'papá', 'hermano', 'hermana'. Then show your picture and say who everyone is en español!",
      diagram: famDia,
      questions: [
        { q: "What is 'mother' in Spanish?", a: "Madre (mamá)" },
        { q: "What is 'father' in Spanish?", a: "Padre (papá)" },
        { q: "What is 'brother' in Spanish?", a: "Hermano" },
        { q: "What is 'sister' in Spanish?", a: "Hermana" },
        { q: "What does 'abuela' mean?", a: "Grandmother" },
        { q: "What is 'grandfather' in Spanish?", a: "Abuelo" },
        { q: "What does 'familia' mean?", a: "Family" },
        { q: "What is 'son' in Spanish?", a: "Hijo" },
        { q: "What does 'hija' mean?", a: "Daughter" },
        { q: "Spanish words often end in -o for boys and ____ for girls.", a: "-a" },
        { q: "What does 'hermano' mean?", a: "Brother" },
        { q: "How do you say 'mom' affectionately in Spanish?", a: "Mamá" }
      ]
    },
    animals: {
      title: "Animals", emoji: "🐶",
      intro: "El perro says woof and el gato says meow! Let's meet the animals — los animales — in Spanish.",
      learn: [
        "perro = dog; gato = cat.",
        "pájaro = bird; pez = fish.",
        "caballo = horse; vaca = cow.",
        "pato = duck; cerdo = pig.",
        "\"animal\" is spelled the same but sounds different (ah-nee-MAL). \"¿Qué animal es?\" = \"What animal is it?\""
      ],
      activity: "🐶 Animal Sounds: Point to animals in a book or out the window and name them in Spanish — 'perro', 'gato', 'pájaro'. Make each animal's sound after you say its Spanish name!",
      diagram: aniDia,
      questions: [
        { q: "What is 'dog' in Spanish?", a: "Perro" },
        { q: "What is 'cat' in Spanish?", a: "Gato" },
        { q: "What animal is a 'pájaro'?", a: "A bird" },
        { q: "What is 'fish' in Spanish?", a: "Pez" },
        { q: "What is 'horse' in Spanish?", a: "Caballo" },
        { q: "What animal is a 'vaca'?", a: "A cow" },
        { q: "What is 'duck' in Spanish?", a: "Pato" },
        { q: "What animal is a 'cerdo'?", a: "A pig" },
        { q: "What does '¿Qué animal es?' mean?", a: "What animal is it?" },
        { q: "What is the Spanish word for a pet that barks?", a: "Perro" },
        { q: "What is 'bird' in Spanish?", a: "Pájaro" },
        { q: "What is 'cow' in Spanish?", a: "Vaca" }
      ]
    }
  };
})();
