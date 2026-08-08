// BrightSprouts Academy: Health & My Body (LESSONS[39]) — how a body works and how to look
// after it, written for grade schoolers.
//
// EVERY NUMBER IN HERE IS FROM A NAMED AUTHORITY, NOT FROM MEMORY. If any of these are edited,
// re-check the source first:
//   sleep hours by age .......... AAP / American Academy of Sleep Medicine (CDC repeats it)
//                                 6-12 years: 9-12 hours.  13-18 years: 8-10 hours.
//   handwashing ................. CDC: five steps, scrub at least 20 seconds
//                                 (hum Happy Birthday twice)
//   food groups ................. USDA MyPlate: Fruits, Vegetables, Grains, Protein, Dairy
//   physical activity ........... CDC: 60 minutes a day, ages 6-17; vigorous on 3+ days a week
//   toothbrushing ............... ADA: twice a day, two minutes, fluoride toothpaste;
//                                 replace the brush every 3-4 months
//
// TONE RULES for anything added here, because this is health content aimed at children:
//   * Food is FUEL and variety. Never "good" or "bad" foods, never calories, never weight,
//     never body size. A child should finish this category liking their body, not auditing it.
//   * No frightening disease detail. Germs are explained, illness is not dramatised.
//   * Nothing that reads as medical advice. "Ask a grown-up" or "ask your doctor" is the answer
//     to anything specific.
//   * Bodies differ. Say so out loud rather than describing one "normal" body.
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';

  // ---- a simple front-on body with the four organs the lesson actually names ----
  function bodyDiagram() {
    return '<svg viewBox="0 0 360 232" role="img" aria-label="A child\'s body showing the brain, heart, lungs and bones">'
      + '<rect width="360" height="232" rx="14" fill="#f4f0ff"/>'
      + '<ellipse cx="112" cy="206" rx="62" ry="9" fill="#ded6f5"/>'
      // legs, then arms, then torso on top, so the limbs tuck behind the body
      + '<g fill="#8fd3f4" stroke="#4d96ff" stroke-width="2" stroke-linejoin="round">'
      + '<path d="M98 138 l-4 58 q0 6 7 6 q7 0 7 -6 l2 -58 z"/>'
      + '<path d="M126 138 l4 58 q0 6 -7 6 q-7 0 -7 -6 l-2 -58 z"/>'
      + '<path d="M88 76 q-16 6 -20 30 l-4 26 q-1 7 6 8 q7 1 8 -6 l4 -26 q2 -10 10 -16 z"/>'
      + '<path d="M136 76 q16 6 20 30 l4 26 q1 7 -6 8 q-7 1 -8 -6 l-4 -26 q-2 -10 -10 -16 z"/>'
      + '<path d="M112 60 q-18 0 -24 12 q-6 12 -6 32 l0 26 q0 10 10 10 l40 0 q10 0 10 -10 l0 -26 q0 -20 -6 -32 q-6 -12 -24 -12 z"/>'
      + '</g>'
      // head, with the brain drawn INSIDE it rather than perched on top
      + '<circle cx="112" cy="40" r="21" fill="#ffe3c2" stroke="#e3b98f" stroke-width="2"/>'
      + '<path d="M100 36 q3 -9 8 -4 q4 -7 8 0 q5 -5 8 4 q3 8 -4 11 q-10 4 -18 0 q-6 -3 -2 -11 z" fill="#c9a7f0" stroke="#7c5cbf" stroke-width="1.4"/>'
      + '<path d="M104 84 l16 0 l0 -22 l-16 0 z" fill="#8fd3f4"/>'
      // lungs behind, heart in front and left of centre, which is where it really sits
      + '<path d="M106 82 q-14 3 -15 22 q-1 18 9 23 q5 -3 6 -20 z" fill="#ffb3c7" stroke="#d6336c" stroke-width="1.5"/>'
      + '<path d="M120 82 q14 3 15 22 q1 18 -9 23 q-5 -3 -6 -20 z" fill="#ffb3c7" stroke="#d6336c" stroke-width="1.5"/>'
      + '<path d="M107 100 c-5 -6 -14 -2 -14 6 c0 9 11 15 14 19 c3 -4 14 -10 14 -19 c0 -8 -9 -12 -14 -6 z" fill="#e2453b" stroke="#a52a21" stroke-width="1.5"/>'
      // spine and thigh bones
      + '<g stroke="#fffdf5" stroke-width="3" stroke-linecap="round" opacity=".9">'
      + '<path d="M112 88 l0 44"/><path d="M101 152 l-2 34"/><path d="M123 152 l2 34"/></g>'
      + '<g ' + LB + '>'
      + '<text x="200" y="44">Brain: the boss of everything</text>'
      + '<text x="200" y="76">Lungs: take in air</text>'
      + '<text x="200" y="108">Heart: pumps blood</text>'
      + '<text x="200" y="140">Bones: hold you up</text>'
      + '<text x="200" y="172">Muscles: move you about</text>'
      + '</g>'
      // one leader line per label, all five of them
      + '<g stroke="#8a86a8" stroke-width="1.2" fill="none">'
      + '<path d="M130 34 L196 40"/><path d="M134 96 L196 72"/><path d="M122 112 L196 104"/>'
      + '<path d="M116 130 L196 136"/><path d="M158 130 L196 168"/></g>'
      + '</svg>';
  }

  // ---- MyPlate, drawn as the plate it is ----
  function plateDiagram() {
    return '<svg viewBox="0 0 360 232" role="img" aria-label="A plate divided into fruits, vegetables, grains and protein, with a glass of milk beside it">'
      + '<rect width="360" height="232" rx="14" fill="#f7fbff"/>'
      + '<circle cx="150" cy="116" r="86" fill="#fff" stroke="#d9d4ee" stroke-width="3"/>'
      // four quarters
      + '<path d="M150 116 L150 30 A86 86 0 0 0 64 116 Z" fill="#8ce99a"/>'
      + '<path d="M150 116 L64 116 A86 86 0 0 0 150 202 Z" fill="#ffb26b"/>'
      + '<path d="M150 116 L150 202 A86 86 0 0 0 236 116 Z" fill="#c9a7f0"/>'
      + '<path d="M150 116 L236 116 A86 86 0 0 0 150 30 Z" fill="#ff8fa3"/>'
      + '<circle cx="150" cy="116" r="86" fill="none" stroke="#b7afd6" stroke-width="3"/>'
      + '<g ' + LB + ' text-anchor="middle" font-size="13" fill="#2d2a4a">'
      + '<text x="106" y="74">Vegetables</text><text x="196" y="74">Fruits</text>'
      + '<text x="104" y="164">Grains</text><text x="198" y="164">Protein</text></g>'
      // the glass of milk that sits beside a MyPlate
      + '<path d="M262 78 l40 0 l-5 76 q-1 8 -15 8 q-14 0 -15 -8 z" fill="#eaf3ff" stroke="#9ab6d9" stroke-width="2"/>'
      + '<g ' + LB + ' text-anchor="middle"><text x="282" y="180">Dairy</text></g>'
      + '<g ' + LB + '><text x="18" y="220">The five food groups, from the USDA MyPlate</text></g>'
      + '</svg>';
  }

  // ---- the five handwashing steps as five little panels ----
  function handsDiagram() {
    var steps = [["1", "Wet", "#8fd3f4"], ["2", "Soap", "#ffd166"], ["3", "Scrub 20s", "#8ce99a"],
                 ["4", "Rinse", "#8fd3f4"], ["5", "Dry", "#ffb26b"]];
    var s = '<svg viewBox="0 0 360 232" role="img" aria-label="The five steps of washing your hands">'
      + '<rect width="360" height="232" rx="14" fill="#eaf7ff"/>';
    steps.forEach(function (st, i) {
      var x = 14 + i * 68;
      s += '<rect x="' + x + '" y="52" width="60" height="92" rx="12" fill="' + st[2] + '" opacity=".85"/>'
        + '<g ' + LB + ' text-anchor="middle" font-size="22" font-weight="bold">'
        + '<text x="' + (x + 30) + '" y="88">' + st[0] + '</text></g>'
        + '<g ' + LB + ' text-anchor="middle" font-size="11">'
        + '<text x="' + (x + 30) + '" y="112">' + st[1] + '</text></g>';
      if (i < 4) s += '<path d="M' + (x + 62) + ' 98 l4 0" stroke="#4a5568" stroke-width="2"/>';
    });
    s += '<g ' + LB + ' font-size="13"><text x="14" y="34">Wash for at least 20 seconds</text></g>'
      + '<g ' + LB + ' font-size="12"><text x="14" y="176">Tip: hum Happy Birthday twice. That is about 20 seconds.</text>'
      + '<text x="14" y="198">Always before eating, and after the toilet, pets or coughing.</text>'
      + '<text x="14" y="220">Source: CDC</text></g>'
      + '</svg>';
    return s;
  }

  // ---- a clock face showing the 9 to 12 hour sleep window ----
  function sleepDiagram() {
    return '<svg viewBox="0 0 360 232" role="img" aria-label="How many hours of sleep children need at different ages">'
      + '<rect width="360" height="232" rx="14" fill="#241a3a"/>'
      + '<circle cx="80" cy="116" r="46" fill="#3a2f6b"/>'
      + '<path d="M80 116 L80 74 A42 42 0 1 1 44 96 Z" fill="#c9baff" opacity=".75"/>'
      + '<circle cx="80" cy="116" r="46" fill="none" stroke="#c9baff" stroke-width="3"/>'
      + '<circle cx="80" cy="116" r="4" fill="#ffd166"/>'
      + '<g fill="#ffd166"><text x="286" y="46" font-size="20">&#127769;</text></g>'
      + '<g font-family="Fredoka, system-ui, sans-serif" font-size="13" fill="#f3ecff">'
      + '<text x="150" y="70">Ages 6 to 12</text>'
      + '<text x="150" y="94" font-size="20" fill="#ffd166">9 to 12 hours</text>'
      + '<text x="150" y="132">Ages 13 to 18</text>'
      + '<text x="150" y="156" font-size="20" fill="#ffd166">8 to 10 hours</text>'
      + '<text x="20" y="206" font-size="11" fill="#c9baff">Every night, not just at weekends.</text>'
      + '<text x="20" y="222" font-size="11" fill="#c9baff">Source: American Academy of Pediatrics</text>'
      + '</g></svg>';
  }

  // ---- a tooth and the two-minute timer ----
  function teethDiagram() {
    return '<svg viewBox="0 0 360 232" role="img" aria-label="A tooth, and a reminder to brush twice a day for two minutes">'
      + '<rect width="360" height="232" rx="14" fill="#eafaf7"/>'
      + '<path d="M108 52 c26 -14 46 -14 72 0 c14 8 12 40 4 72 c-6 24 -14 46 -22 46 c-10 0 -8 -34 -18 -34 c-10 0 -8 34 -18 34 c-8 0 -16 -22 -22 -46 c-8 -32 -10 -64 4 -72 z" fill="#fff" stroke="#9ab6d9" stroke-width="2.5"/>'
      + '<path d="M126 66 q18 -8 36 0" stroke="#dff1ff" stroke-width="8" stroke-linecap="round" fill="none"/>'
      // brush
      + '<g transform="rotate(-18 250 120)">'
      + '<rect x="222" y="112" width="86" height="12" rx="6" fill="#4d96ff"/>'
      + '<rect x="208" y="108" width="20" height="20" rx="5" fill="#eaf3ff" stroke="#9ab6d9" stroke-width="1.5"/>'
      + '<g stroke="#8ce99a" stroke-width="3" stroke-linecap="round">'
      + '<path d="M212 106 l0 -8"/><path d="M218 106 l0 -8"/><path d="M224 106 l0 -8"/></g></g>'
      // Split across two lines on purpose: as one line this ran past the 360-wide viewBox and the
      // source was silently clipped mid-word.
      + '<g ' + LB + ' font-size="14">'
      + '<text x="20" y="184">Twice a day. Two minutes each time.</text>'
      + '<text x="20" y="204" font-size="11">Fluoride toothpaste. New brush every 3 to 4 months.</text>'
      + '<text x="20" y="220" font-size="11">Source: American Dental Association</text>'
      + '</g></svg>';
  }

  LESSONS[39] = {
    body: {
      title: "Your Amazing Body", emoji: "🫀",
      intro: "Right now, without you thinking about it once, your heart is beating, your lungs are filling, and your brain is running the whole show. Let's meet the team inside you.",
      learn: [
        "Your HEART is a muscle about the size of your own fist, and it never takes a day off. It pumps blood everywhere, carrying food and oxygen to the rest of you.",
        "Your LUNGS take in air so your blood can collect the oxygen from it. Put a hand on your ribs and breathe in slowly, and you can feel them fill.",
        "Your BONES are the frame that holds you up. A grown-up has 206 of them, and they are alive: they grow, and they mend themselves if they break.",
        "Your MUSCLES pull on your bones to move you. They can only pull, never push, which is why they come in pairs that take turns.",
        "Your BRAIN is in charge of everything, including all the jobs you never think about: breathing, blinking, digesting your lunch.",
        "Every body is different: different heights, different shapes, bodies that move in different ways or need help to do things. There is no one right kind of body."
      ],
      diagram: bodyDiagram(),
      activity: "❤️ Feel Your Heart: Sit still and find your pulse on your wrist or neck. Count the beats for 15 seconds. Now run on the spot for one minute and count again. Why did your heart speed up? Because your muscles just asked for more oxygen, and your heart delivered.",
      questions: [
        { q: "What organ pumps blood around your body?", a: "The heart" },
        { q: "Roughly how big is your heart?", a: "About the size of your fist" },
        { q: "What do your lungs take in?", a: "Air, so your blood can collect oxygen" },
        { q: "How many bones does a grown-up have?", a: "206" },
        { q: "What do muscles pull on to move you?", a: "Your bones" },
        { q: "Can a muscle push?", a: "No, muscles can only pull" },
        { q: "Which body part is in charge of everything?", a: "The brain" },
        { q: "Name one job your brain does without you thinking about it.", a: "Breathing, blinking or digesting" },
        { q: "Are bones alive?", a: "Yes, they grow and can mend themselves" },
        { q: "Is there one right kind of body?", a: "No, every body is different" }
      ]
    },

    eat: {
      title: "Food Is Fuel", emoji: "🍎",
      intro: "Food is the fuel your body runs on. Different foods do different jobs, which is why eating a mix of them is the whole trick. There are five food groups, and a good plate has a bit of most of them.",
      learn: [
        "The five food groups are Fruits, Vegetables, Grains, Protein Foods and Dairy. That is the USDA's MyPlate, the same guide used in American schools.",
        "VEGETABLES and FRUITS bring vitamins: tiny helpers your body cannot make for itself. Different colours bring different vitamins, which is why 'eat a rainbow' is real advice and not just a rhyme.",
        "GRAINS like bread, rice, oats and pasta are your main energy. Wholegrain kinds keep you feeling full for longer.",
        "PROTEIN FOODS like beans, eggs, fish, chicken, nuts and tofu are the building materials your body uses to grow and to repair itself.",
        "DAIRY, or a calcium-rich alternative, helps build strong bones and teeth.",
        "There are no bad foods. Cake is not naughty and broccoli is not good: they just do different jobs, and cake's job is to be delicious at a party. What matters is the mix over a whole week, not any one meal.",
        "Water is the drink your body actually wants. You need more of it on hot days and after running about."
      ],
      diagram: plateDiagram(),
      activity: "🌈 Rainbow Hunt: Over one day, write down every colour of fruit or vegetable you eat. Red, orange, yellow, green, purple, white. How many colours can your family collect by bedtime? Try to beat it tomorrow.",
      questions: [
        { q: "How many food groups are there on MyPlate?", a: "Five" },
        { q: "Name the five food groups.", a: "Fruits, Vegetables, Grains, Protein and Dairy" },
        { q: "Which group is bread, rice and pasta in?", a: "Grains" },
        { q: "What do protein foods help your body do?", a: "Grow and repair itself" },
        { q: "Which group helps build strong bones and teeth?", a: "Dairy" },
        { q: "Why is eating different colours of vegetables a good idea?", a: "Different colours bring different vitamins" },
        { q: "Are some foods bad foods?", a: "No, different foods just do different jobs" },
        { q: "What is the best drink for your body?", a: "Water" },
        { q: "Name two protein foods that do not come from an animal.", a: "Beans, nuts or tofu" },
        { q: "Which kind of grains keep you full for longer?", a: "Wholegrain ones" }
      ]
    },

    germs: {
      title: "Germs & Clean Hands", emoji: "🧼",
      intro: "Germs are living things far too small to see, and most of them are completely harmless. A few can make you poorly, and the single best way to stop those few is something you can do in twenty seconds at a sink.",
      learn: [
        "Germs are tiny living things. Some are helpful, like the ones in your tummy that help you digest food. Only a few kinds make people ill.",
        "Germs spread by hitching a ride: on hands, on door handles, and in the tiny drops that fly out when somebody coughs or sneezes.",
        "The CDC's five steps are: WET your hands, add SOAP, SCRUB for at least 20 seconds, RINSE, and DRY.",
        "Twenty seconds is longer than it feels. Hum Happy Birthday twice and you have it about right.",
        "Soap works in a clever way: it does not poison germs, it makes them let go and slide off with the water. That is why the scrubbing matters more than the water being hot.",
        "Wash before eating, after the toilet, after playing with animals, and after coughing or sneezing.",
        "Cough or sneeze into your elbow, not your hand. Your elbow does not open doors or hold hands."
      ],
      diagram: handsDiagram(),
      activity: "✨ Glitter Germs: Ask a grown-up to put a little glitter or flour on your hands, then go about the room for a minute. Look where the 'germs' ended up: the door, the chair, your face. Now wash for 20 seconds and see how much scrubbing it takes to shift it all.",
      questions: [
        { q: "How long should you scrub your hands?", a: "At least 20 seconds" },
        { q: "What song can you hum twice to time 20 seconds?", a: "Happy Birthday" },
        { q: "What are the five handwashing steps?", a: "Wet, soap, scrub, rinse, dry" },
        { q: "Are all germs harmful?", a: "No, only a few kinds make people ill" },
        { q: "Name a helpful germ's job.", a: "Helping your tummy digest food" },
        { q: "How does soap remove germs?", a: "It makes them let go and slide off" },
        { q: "Should you cough into your hand or your elbow?", a: "Your elbow" },
        { q: "Why the elbow and not the hand?", a: "Your elbow does not touch door handles" },
        { q: "Name two times you should always wash your hands.", a: "Before eating and after the toilet" },
        { q: "Does the water have to be hot to wash germs away?", a: "No, the scrubbing matters more" }
      ]
    },

    teeth: {
      title: "Happy Teeth", emoji: "🦷",
      intro: "You get one set of grown-up teeth, and they have to last the rest of your life. Looking after them takes four minutes a day in total, which is less time than one song.",
      learn: [
        "Brush TWICE a day for TWO minutes each time, with fluoride toothpaste. That is what the American Dental Association recommends.",
        "Two minutes is longer than most people brush. Play one song, or set a timer, and brush until it stops.",
        "Fluoride is a mineral that makes the hard outside of a tooth tougher, so it fights off decay better.",
        "Brushing gets the flat faces of your teeth, but floss is the only thing that reaches between them, and that is exactly where holes like to start.",
        "Sugar itself does not rot teeth. The germs already in your mouth eat the sugar and make acid, and the ACID is what harms the tooth. That is why sipping a sweet drink all afternoon is worse for teeth than eating a whole cake at once.",
        "Change your toothbrush every three or four months, or sooner once the bristles start to splay out.",
        "Your first teeth fall out on purpose, to make room for bigger ones. Your grown-up teeth do not get a second chance."
      ],
      diagram: teethDiagram(),
      activity: "🎵 Two Minute Song: Pick a song that is about two minutes long and make it your brushing song. Play it every morning and every night. When it ends, you are done, and you never have to guess again.",
      questions: [
        { q: "How many times a day should you brush?", a: "Twice" },
        { q: "How long should each brushing take?", a: "Two minutes" },
        { q: "What mineral in toothpaste protects teeth?", a: "Fluoride" },
        { q: "What is the only thing that cleans between teeth?", a: "Floss" },
        { q: "Does sugar rot teeth directly?", a: "No, germs turn it into acid and the acid does it" },
        { q: "Why is sipping a sweet drink all day worse than one cake?", a: "It keeps making acid all day" },
        { q: "How often should you replace a toothbrush?", a: "Every 3 to 4 months" },
        { q: "Why do your first teeth fall out?", a: "To make room for bigger grown-up teeth" },
        { q: "How many sets of grown-up teeth do you get?", a: "One" },
        { q: "How many minutes of brushing is that in a whole day?", a: "Four minutes" }
      ]
    },

    sleep: {
      title: "Why You Need Sleep", emoji: "😴",
      intro: "Sleep is not your body switching off. It is your body doing a night shift: growing, mending, and filing away everything you learned today. Skip it and tomorrow is harder at everything.",
      learn: [
        "Children aged 6 to 12 need 9 to 12 hours of sleep a night. Teenagers aged 13 to 18 need 8 to 10. That comes from the American Academy of Pediatrics.",
        "While you sleep, your brain sorts through the day and moves what matters into your long-term memory. Practising something and then sleeping really does lock it in.",
        "Your body does most of its growing and repairing at night, which is why you need more sleep than a grown-up does.",
        "Screens make falling asleep harder, because their light tells your brain it is still daytime. Switching them off a while before bed helps.",
        "Going to bed and getting up at around the same time every day, weekends included, makes falling asleep much easier than catching up later.",
        "If you are grumpy, clumsy, or cannot concentrate, being tired is worth suspecting first. It is the most common reason and the easiest to fix."
      ],
      diagram: sleepDiagram(),
      activity: "🛏️ Sleep Detective: For one week, write down what time you fell asleep and give the next day a score out of ten for how you felt. Look at the two columns at the end of the week. Most people can see their own pattern straight away.",
      questions: [
        { q: "How many hours should a 6 to 12 year old sleep?", a: "9 to 12 hours" },
        { q: "How many hours should a 13 to 18 year old sleep?", a: "8 to 10 hours" },
        { q: "What does your brain do with the day while you sleep?", a: "Sorts it and stores what matters" },
        { q: "When does your body do most of its growing?", a: "At night, while you sleep" },
        { q: "Why do screens make sleep harder?", a: "Their light tells your brain it is daytime" },
        { q: "Why keep the same bedtime at weekends?", a: "It makes falling asleep easier" },
        { q: "Name one sign that you might need more sleep.", a: "Feeling grumpy or unable to concentrate" },
        { q: "Is your body switched off while you sleep?", a: "No, it is busy growing and repairing" },
        { q: "Who recommends these sleep hours?", a: "The American Academy of Pediatrics" },
        { q: "Does sleeping after practising help you remember?", a: "Yes" }
      ]
    },

    move: {
      title: "Move Your Body", emoji: "🤸",
      intro: "Bodies are built to move, and they work better when they do. The good news is that it does not have to be sport: running about, dancing in the kitchen and climbing all count.",
      learn: [
        "Children and teenagers aged 6 to 17 need 60 minutes or more of activity a day. That is the CDC's guidance, and it does not have to be all in one go.",
        "Most of that hour should get you breathing harder. On at least three days a week, some of it should be vigorous: the kind where you would struggle to hold a conversation.",
        "Moving strengthens your heart. It is a muscle, and like every muscle it gets stronger when it is used.",
        "Three days a week should include something that works your muscles, like climbing or push-ups, and something that loads your bones, like running or jumping.",
        "Exercise changes your mood, not just your body. Moving about genuinely helps with feeling worried or grumpy, and it helps you sleep better that night.",
        "It only counts if you keep doing it, so pick things you actually enjoy. Dancing, scooting, swimming and playing tag are all real exercise."
      ],
      activity: "⏱️ Sixty In A Day: Do not try to do an hour at once. Write down every burst of moving today: walking to school, playtime, dancing to two songs, running upstairs. Add them up at bedtime. Most children are closer to sixty minutes than they expect.",
      questions: [
        { q: "How many minutes of activity a day do 6 to 17 year olds need?", a: "60 minutes or more" },
        { q: "Does it all have to be in one go?", a: "No, it can be spread through the day" },
        { q: "How many days a week should include vigorous activity?", a: "At least 3" },
        { q: "What does vigorous mean?", a: "Hard enough that talking is difficult" },
        { q: "Why does moving make your heart stronger?", a: "It is a muscle, and muscles get stronger when used" },
        { q: "Name an activity that loads your bones.", a: "Running or jumping" },
        { q: "How does exercise change your mood?", a: "It helps with worry and grumpiness" },
        { q: "Does exercise affect your sleep?", a: "Yes, it helps you sleep better" },
        { q: "Does dancing count as exercise?", a: "Yes" },
        { q: "Who recommends 60 minutes a day?", a: "The CDC" }
      ]
    },

    safe: {
      title: "Keeping Yourself Safe", emoji: "🪖",
      intro: "Looking after your body also means protecting it. Most of this is quick, boring and worth it: a helmet, a seatbelt, sun cream, and knowing who to tell when something is wrong.",
      learn: [
        "Wear a helmet every time you ride a bike or scooter, even for a short trip. It should sit level, not tipped back, and the strap should be snug under your chin.",
        "The sun can burn skin in a surprisingly short time. Sun cream, a hat and shade are the three that work, and you need them on bright cloudy days too.",
        "Crossing a road: stop at the kerb, look and listen both ways, and keep looking as you cross. Never step out from between parked cars, because drivers cannot see you there.",
        "Your body belongs to you. You are allowed to say no to a hug or any touch you do not want, even from someone you know and like, and even if it seems rude.",
        "A grown-up should never ask you to keep a secret about your body. Surprises like birthday presents are fine, because a surprise is meant to be told in the end. A secret you must never tell is different, and that one always needs telling.",
        "Pick your trusted grown-ups: two or three people you could tell anything to. A parent, a teacher, a grandparent. Knowing who they are before you need them is the point.",
        "If something feels wrong, tell a trusted grown-up. If they do not listen, tell another one, and keep going until somebody does. That is not being rude; that is exactly what they are for."
      ],
      activity: "🤝 My Trusted Grown-Ups: Draw around your hand and write the name of one trusted grown-up on each finger. Put it somewhere you will see it. Everyone in the family can make one, grown-ups included.",
      questions: [
        { q: "When should you wear a helmet?", a: "Every time you ride a bike or scooter" },
        { q: "How should a helmet sit on your head?", a: "Level, with the strap snug under your chin" },
        { q: "Name the three things that protect you from the sun.", a: "Sun cream, a hat and shade" },
        { q: "Can you get burnt on a cloudy day?", a: "Yes, on bright cloudy days you can" },
        { q: "Why should you not cross between parked cars?", a: "Drivers cannot see you there" },
        { q: "Are you allowed to say no to a hug?", a: "Yes, your body belongs to you" },
        { q: "What is the difference between a surprise and a secret?", a: "A surprise gets told in the end" },
        { q: "Should a grown-up ask you to keep a secret about your body?", a: "No, never" },
        { q: "How many trusted grown-ups is it good to have?", a: "Two or three" },
        { q: "What do you do if the first grown-up does not listen?", a: "Tell another one, and keep going" }
      ]
    }
  };
})();
