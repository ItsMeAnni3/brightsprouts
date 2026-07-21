// BrightSprouts Academy — Learn Spanish category (LESSONS[21]): basic Spanish for grade-schoolers.
// Greetings, numbers, colours, family and animals — each with a labeled picture-vocabulary diagram.
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // A numeral chart: ten bubbles, each with the Spanish word beneath (two rows of five).
  function numberChart(list, bg, fill, wordSize) {
    var s = '<svg viewBox="0 0 340 162"><rect width="340" height="162" rx="14" fill="' + bg + '"/>';
    for (var n = 0; n < list.length; n++) {
      var c = n % 5, r = Math.floor(n / 5), cx = 42 + c * 64, cy = 42 + r * 72;
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="20" fill="' + fill + '"/>'
        + '<text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" ' + FA + ' font-size="16" fill="#fff">' + list[n][0] + '</text>'
        + '<text x="' + cx + '" y="' + (cy + 40) + '" text-anchor="middle" ' + FA + ' font-size="' + wordSize + '" fill="#2d2a4a">' + list[n][1] + '</text>';
    }
    return s + '</svg>';
  }
  var numDia = numberChart([["1","uno"],["2","dos"],["3","tres"],["4","cuatro"],["5","cinco"],
                            ["6","seis"],["7","siete"],["8","ocho"],["9","nueve"],["10","diez"]], "#eef6ff", "#4d96ff", 12);
  var num2Dia = numberChart([["11","once"],["12","doce"],["13","trece"],["14","catorce"],["15","quince"],
                             ["16","dieciséis"],["17","diecisiete"],["18","dieciocho"],["19","diecinueve"],["20","veinte"]],
                            "#f0fbf3", "#43aa8b", 10);

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

  // Food — four labeled everyday foods.
  var foodDia = '<svg viewBox="0 0 340 122"><rect width="340" height="122" rx="14" fill="#fff6ee"/>'
    // la manzana (apple)
    + '<rect x="50" y="26" width="4" height="12" rx="2" fill="#7a5230"/>'
    + '<path d="M54 30 q10 -8 18 -6 q-2 10 -14 12 z" fill="#4aa35a"/>'
    + '<circle cx="52" cy="58" r="21" fill="#e63946"/><ellipse cx="45" cy="51" rx="5" ry="3" fill="#fff" opacity=".35"/>'
    // el plátano (banana)
    + '<path d="M118 34 q4 34 32 42 q7 -8 2 -15 q-22 -6 -25 -29 z" fill="#ffd23f" stroke="#e0a91f" stroke-width="2"/>'
    // el pan (bread)
    + '<path d="M190 62 q0 -26 24 -26 q24 0 24 26 z" fill="#d9a05b" stroke="#b57f3d" stroke-width="2"/>'
    + '<rect x="189" y="60" width="50" height="14" rx="6" fill="#c98f4a" stroke="#b57f3d" stroke-width="2"/>'
    + '<g stroke="#b57f3d" stroke-width="2" stroke-linecap="round"><line x1="203" y1="50" x2="209" y2="44"/><line x1="213" y1="50" x2="219" y2="44"/><line x1="223" y1="50" x2="229" y2="44"/></g>'
    // la leche (glass of milk)
    + '<path d="M281 34 h28 l-5 42 h-18 z" fill="#ffffff" stroke="#9fb3d0" stroke-width="2"/>'
    + '<path d="M284 48 h22 l-4 26 h-14 z" fill="#eff5ff"/>'
    + '<g ' + LB + ' text-anchor="middle"><text x="52" y="106">manzana</text><text x="133" y="106">plátano</text><text x="214" y="106">pan</text><text x="295" y="106">leche</text></g></svg>';

  // Days of the week — a strip of seven rows, weekend in a warmer colour.
  var days = [["lunes","Monday"],["martes","Tuesday"],["miércoles","Wednesday"],["jueves","Thursday"],
              ["viernes","Friday"],["sábado","Saturday"],["domingo","Sunday"]];
  var dayDia = '<svg viewBox="0 0 340 212"><rect width="340" height="212" rx="14" fill="#f5f2ff"/>';
  for (var d = 0; d < 7; d++) {
    var dy = 12 + d * 28, wknd = d >= 5;
    dayDia += '<rect x="16" y="' + dy + '" width="308" height="24" rx="8" fill="' + (wknd ? "#ffe0b0" : "#ddd6f5") + '"/>'
      + '<text x="30" y="' + (dy + 17) + '" ' + FA + ' font-size="13" fill="#2d2a4a">' + days[d][0] + '</text>'
      + '<text x="310" y="' + (dy + 17) + '" text-anchor="end" ' + FA + ' font-size="11" fill="#6a668c">' + days[d][1] + '</text>';
  }
  dayDia += '</svg>';

  // Months — twelve chips, four per row, a colour band per row.
  var months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  var mRow = ["#bfe3ff", "#ffe6a3", "#d8f0c8"];
  var monDia = '<svg viewBox="0 0 340 172"><rect width="340" height="172" rx="14" fill="#fdfaff"/>';
  for (var m = 0; m < 12; m++) {
    var mc = m % 4, mr = Math.floor(m / 4), mx = 12 + mc * 80, my = 16 + mr * 50;
    monDia += '<rect x="' + mx + '" y="' + my + '" width="72" height="34" rx="10" fill="' + mRow[mr] + '" stroke="#e2dcf2" stroke-width="1.5"/>'
      + '<text x="' + (mx + 36) + '" y="' + (my + 22) + '" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#2d2a4a">' + months[m] + '</text>';
  }
  monDia += '</svg>';

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
      vocab: [
        { es: "hola", en: "hello" }, { es: "adiós", en: "goodbye" },
        { es: "buenos días", en: "good morning" }, { es: "buenas tardes", en: "good afternoon" },
        { es: "buenas noches", en: "good night" }, { es: "por favor", en: "please" },
        { es: "gracias", en: "thank you" }, { es: "de nada", en: "you're welcome" },
        { es: "sí", en: "yes" }, { es: "no", en: "no" },
        { es: "¿Cómo estás?", en: "How are you?" }, { es: "bien", en: "good / well" }
      ],
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
      vocab: [
        { es: "uno", en: "one" }, { es: "dos", en: "two" }, { es: "tres", en: "three" },
        { es: "cuatro", en: "four" }, { es: "cinco", en: "five" }, { es: "seis", en: "six" },
        { es: "siete", en: "seven" }, { es: "ocho", en: "eight" }, { es: "nueve", en: "nine" },
        { es: "diez", en: "ten" }
      ],
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
      vocab: [
        { es: "rojo", en: "red" }, { es: "azul", en: "blue" }, { es: "amarillo", en: "yellow" },
        { es: "verde", en: "green" }, { es: "naranja", en: "orange" }, { es: "morado", en: "purple" },
        { es: "rosa", en: "pink" }, { es: "marrón", en: "brown" }, { es: "negro", en: "black" },
        { es: "blanco", en: "white" }
      ],
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
      vocab: [
        { es: "familia", en: "family" }, { es: "madre", en: "mother" }, { es: "mamá", en: "mom" },
        { es: "padre", en: "father" }, { es: "papá", en: "dad" }, { es: "hermano", en: "brother" },
        { es: "hermana", en: "sister" }, { es: "abuelo", en: "grandfather" }, { es: "abuela", en: "grandmother" },
        { es: "hijo", en: "son" }, { es: "hija", en: "daughter" }
      ],
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
      vocab: [
        { es: "el perro", en: "the dog" }, { es: "el gato", en: "the cat" }, { es: "el pájaro", en: "the bird" },
        { es: "el pez", en: "the fish" }, { es: "el caballo", en: "the horse" }, { es: "la vaca", en: "the cow" },
        { es: "el pato", en: "the duck" }, { es: "el cerdo", en: "the pig" }
      ],
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
    },
    food: {
      title: "Food", emoji: "🍎",
      intro: "¡Tengo hambre! That means \"I'm hungry!\" Let's learn to name the food on your plate en español.",
      learn: [
        "la manzana = apple; el plátano = banana; la naranja = orange (the fruit AND the colour!).",
        "el pan = bread; el queso = cheese; el huevo = egg.",
        "la leche = milk; el agua = water; el jugo = juice.",
        "el arroz = rice; el pollo = chicken; el pescado = fish (to eat).",
        "\"el\" and \"la\" both mean \"the\" — \"el\" for boy-words and \"la\" for girl-words. \"Tengo hambre\" = I'm hungry; \"¡Qué rico!\" = How tasty!"
      ],
      activity: "🍎 Snack Time en Español: At your next meal, name each food in Spanish before you eat it — 'la manzana', 'el pan', 'la leche'. Say '¡Qué rico!' if you like it!",
      diagram: foodDia,
      vocab: [
        { es: "la manzana", en: "apple" }, { es: "el plátano", en: "banana" }, { es: "la naranja", en: "orange" },
        { es: "el pan", en: "bread" }, { es: "el queso", en: "cheese" }, { es: "el huevo", en: "egg" },
        { es: "la leche", en: "milk" }, { es: "el agua", en: "water" }, { es: "el jugo", en: "juice" },
        { es: "el arroz", en: "rice" }, { es: "el pollo", en: "chicken" }, { es: "Tengo hambre", en: "I'm hungry" }
      ],
      questions: [
        { q: "What is 'apple' in Spanish?", a: "La manzana" },
        { q: "What food is 'el pan'?", a: "Bread" },
        { q: "What is 'milk' in Spanish?", a: "La leche" },
        { q: "What is 'water' in Spanish?", a: "El agua" },
        { q: "What food is 'el queso'?", a: "Cheese" },
        { q: "What is 'egg' in Spanish?", a: "El huevo" },
        { q: "What food is 'el plátano'?", a: "A banana" },
        { q: "What is 'rice' in Spanish?", a: "El arroz" },
        { q: "What food is 'el pollo'?", a: "Chicken" },
        { q: "What does 'Tengo hambre' mean?", a: "I'm hungry" },
        { q: "What does '¡Qué rico!' mean?", a: "How tasty (delicious)!" },
        { q: "Which Spanish word means both a fruit and a colour?", a: "Naranja (orange)" }
      ]
    },
    days: {
      title: "Days of the Week", emoji: "📅",
      intro: "Seven days make una semana — a week. Let's learn to say each one, from lunes all the way to domingo.",
      learn: [
        "lunes = Monday; martes = Tuesday; miércoles = Wednesday.",
        "jueves = Thursday; viernes = Friday.",
        "sábado = Saturday; domingo = Sunday — el fin de semana (the weekend)!",
        "\"la semana\" = the week, and it usually starts on lunes (Monday) in Spanish-speaking countries.",
        "Days are NOT capitalized in Spanish. \"Hoy es lunes\" = \"Today is Monday.\""
      ],
      activity: "📅 Weekly Chart: Make a 7-day chart and write each day in Spanish. Every morning, point to the day and say '¡Hoy es ___!' out loud.",
      diagram: dayDia,
      vocab: [
        { es: "la semana", en: "the week" }, { es: "lunes", en: "Monday" }, { es: "martes", en: "Tuesday" },
        { es: "miércoles", en: "Wednesday" }, { es: "jueves", en: "Thursday" }, { es: "viernes", en: "Friday" },
        { es: "sábado", en: "Saturday" }, { es: "domingo", en: "Sunday" },
        { es: "hoy", en: "today" }, { es: "mañana", en: "tomorrow" }
      ],
      questions: [
        { q: "What is 'Monday' in Spanish?", a: "Lunes" },
        { q: "What day is 'martes'?", a: "Tuesday" },
        { q: "What is 'Wednesday' in Spanish?", a: "Miércoles" },
        { q: "What day is 'jueves'?", a: "Thursday" },
        { q: "What is 'Friday' in Spanish?", a: "Viernes" },
        { q: "What day is 'sábado'?", a: "Saturday" },
        { q: "What is 'Sunday' in Spanish?", a: "Domingo" },
        { q: "What does 'la semana' mean?", a: "The week" },
        { q: "How many days are in una semana?", a: "Seven (siete)" },
        { q: "Which day usually starts the week in Spanish?", a: "Lunes (Monday)" },
        { q: "Are days of the week capitalized in Spanish?", a: "No" },
        { q: "What does 'Hoy es lunes' mean?", a: "Today is Monday" }
      ]
    },
    months: {
      title: "Months of the Year", emoji: "🗓️",
      intro: "Twelve months make un año — a year. Many of them sound a lot like English, so you already know more than you think!",
      learn: [
        "enero = January; febrero = February; marzo = March.",
        "abril = April; mayo = May; junio = June.",
        "julio = July; agosto = August; septiembre = September.",
        "octubre = October; noviembre = November; diciembre = December.",
        "\"el mes\" = the month and \"el año\" = the year. Like days, months are NOT capitalized in Spanish."
      ],
      activity: "🗓️ Birthday en Español: Find your birthday month and practise saying 'Mi cumpleaños es en ___'. Then find out everyone's birthday month in your family!",
      diagram: monDia,
      vocab: [
        { es: "el año", en: "the year" }, { es: "el mes", en: "the month" },
        { es: "enero", en: "January" }, { es: "febrero", en: "February" }, { es: "marzo", en: "March" },
        { es: "abril", en: "April" }, { es: "mayo", en: "May" }, { es: "junio", en: "June" },
        { es: "julio", en: "July" }, { es: "agosto", en: "August" }, { es: "septiembre", en: "September" },
        { es: "octubre", en: "October" }, { es: "noviembre", en: "November" }, { es: "diciembre", en: "December" }
      ],
      questions: [
        { q: "What is 'January' in Spanish?", a: "Enero" },
        { q: "What month is 'marzo'?", a: "March" },
        { q: "What is 'May' in Spanish?", a: "Mayo" },
        { q: "What month is 'julio'?", a: "July" },
        { q: "What is 'August' in Spanish?", a: "Agosto" },
        { q: "What month is 'octubre'?", a: "October" },
        { q: "What is 'December' in Spanish?", a: "Diciembre" },
        { q: "What does 'el año' mean?", a: "The year" },
        { q: "What does 'el mes' mean?", a: "The month" },
        { q: "How many meses are in un año?", a: "Twelve (doce)" },
        { q: "Are months capitalized in Spanish?", a: "No" },
        { q: "What is 'April' in Spanish?", a: "Abril" }
      ]
    },
    more: {
      title: "Numbers 11–100", emoji: "🔟",
      intro: "You can already count to diez. Now let's go all the way to cien — one hundred!",
      learn: [
        "11 = once, 12 = doce, 13 = trece, 14 = catorce, 15 = quince.",
        "16 = dieciséis, 17 = diecisiete, 18 = dieciocho, 19 = diecinueve, 20 = veinte.",
        "30 = treinta, 40 = cuarenta, 50 = cincuenta.",
        "60 = sesenta, 70 = setenta, 80 = ochenta, 90 = noventa, 100 = cien.",
        "For the numbers in between, join them with \"y\" (and): 31 = treinta y uno, 45 = cuarenta y cinco."
      ],
      activity: "🔟 Count by Tens: Count 10, 20, 30... all the way to 100 in Spanish — 'diez, veinte, treinta...'. Then say your age and your house number en español!",
      diagram: num2Dia,
      vocab: [
        { es: "once", en: "eleven" }, { es: "doce", en: "twelve" }, { es: "trece", en: "thirteen" },
        { es: "catorce", en: "fourteen" }, { es: "quince", en: "fifteen" }, { es: "dieciséis", en: "sixteen" },
        { es: "veinte", en: "twenty" }, { es: "treinta", en: "thirty" }, { es: "cuarenta", en: "forty" },
        { es: "cincuenta", en: "fifty" }, { es: "noventa", en: "ninety" }, { es: "cien", en: "one hundred" }
      ],
      questions: [
        { q: "What is 'eleven' in Spanish?", a: "Once" },
        { q: "What number is 'doce'?", a: "Twelve (12)" },
        { q: "What is 'fifteen' in Spanish?", a: "Quince" },
        { q: "What number is 'veinte'?", a: "Twenty (20)" },
        { q: "What is 'thirty' in Spanish?", a: "Treinta" },
        { q: "What number is 'cincuenta'?", a: "Fifty (50)" },
        { q: "What is 'one hundred' in Spanish?", a: "Cien" },
        { q: "How do you say 31 in Spanish?", a: "Treinta y uno" },
        { q: "Which little word joins tens and ones (like in 45)?", a: "Y (and)" },
        { q: "What number is 'catorce'?", a: "Fourteen (14)" },
        { q: "What is 'sixteen' in Spanish?", a: "Dieciséis" },
        { q: "What is 'ninety' in Spanish?", a: "Noventa" }
      ]
    }
  };
})();
