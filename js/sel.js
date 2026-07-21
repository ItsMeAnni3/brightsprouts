// BrightSprouts Academy — Feelings & Kindness (LESSONS[25]): social-emotional learning for grade-schoolers.
// Naming feelings → calming them → empathy → friendship → speaking up.
// Strategies are the mainstream, well-established ones (name it to tame it, slow breathing,
// perspective-taking, a real apology, "yet"), kept practical and never clinical.
(function () {
  if (typeof LESSONS === "undefined") return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';

  // ---- a feelings face ----
  function face(cx, cy, r, fill, type) {
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '" stroke="#b9b2d6" stroke-width="1.5"/>';
    var ink = 'stroke="#2d2a4a" stroke-width="2.6" fill="none" stroke-linecap="round"';
    var eye = 'fill="#2d2a4a"';
    if (type === "scared") {
      s += '<circle cx="' + (cx - 8) + '" cy="' + (cy - 4) + '" r="5" fill="#fff" stroke="#2d2a4a" stroke-width="1.5"/>'
        + '<circle cx="' + (cx + 8) + '" cy="' + (cy - 4) + '" r="5" fill="#fff" stroke="#2d2a4a" stroke-width="1.5"/>'
        + '<circle cx="' + (cx - 8) + '" cy="' + (cy - 3) + '" r="2" ' + eye + '/><circle cx="' + (cx + 8) + '" cy="' + (cy - 3) + '" r="2" ' + eye + '/>'
        + '<ellipse cx="' + cx + '" cy="' + (cy + 10) + '" rx="4.5" ry="5.5" fill="#8a3a4a"/>'
        + '<path d="M' + (cx - 14) + ' ' + (cy - 14) + ' q5 -4 10 -1 M' + (cx + 14) + ' ' + (cy - 14) + ' q-5 -4 -10 -1" ' + ink + '/>';
      return s;
    }
    if (type === "proud" || type === "calm") {
      var d = type === "proud" ? -4 : 0;
      s += (type === "proud"
        ? '<path d="M' + (cx - 13) + ' ' + (cy - 3) + ' q5 -6 10 0 M' + (cx + 3) + ' ' + (cy - 3) + ' q5 -6 10 0" ' + ink + '/>'
        : '<path d="M' + (cx - 12) + ' ' + (cy - 4) + ' h9 M' + (cx + 3) + ' ' + (cy - 4) + ' h9" ' + ink + '/>');
      s += '<path d="M' + (cx - 10) + ' ' + (cy + 7 + d) + ' q10 ' + (type === "proud" ? 10 : 7) + ' 20 0" ' + ink + '/>';
      return s;
    }
    s += '<circle cx="' + (cx - 8) + '" cy="' + (cy - 4) + '" r="3" ' + eye + '/><circle cx="' + (cx + 8) + '" cy="' + (cy - 4) + '" r="3" ' + eye + '/>';
    if (type === "happy") s += '<path d="M' + (cx - 11) + ' ' + (cy + 6) + ' q11 11 22 0" ' + ink + '/>';
    if (type === "sad") s += '<path d="M' + (cx - 11) + ' ' + (cy + 12) + ' q11 -11 22 0" ' + ink + '/>'
      + '<path d="M' + (cx + 9) + ' ' + (cy + 1) + ' q3 5 0 7 q-3 -2 0 -7 z" fill="#4d96ff"/>';
    if (type === "angry") s += '<path d="M' + (cx - 16) + ' ' + (cy - 15) + ' l11 6 M' + (cx + 16) + ' ' + (cy - 15) + ' l-11 6" ' + ink + '/>'
      + '<path d="M' + (cx - 10) + ' ' + (cy + 12) + ' q10 -8 20 0" ' + ink + '/>';
    if (type === "excited") s += '<path d="M' + (cx - 15) + ' ' + (cy - 15) + ' q6 -5 12 -1 M' + (cx + 15) + ' ' + (cy - 15) + ' q-6 -5 -12 -1" ' + ink + '/>'
      + '<path d="M' + (cx - 11) + ' ' + (cy + 3) + ' a11 11 0 0 0 22 0 z" fill="#8a3a4a"/>';
    if (type === "worried") s += '<path d="M' + (cx - 15) + ' ' + (cy - 13) + ' q6 -4 11 1 M' + (cx + 15) + ' ' + (cy - 13) + ' q-6 -4 -11 1" ' + ink + '/>'
      + '<path d="M' + (cx - 11) + ' ' + (cy + 10) + ' q5.5 -6 11 0 t11 0" ' + ink + '/>';
    return s;
  }

  var faces = [["happy", "happy", "#ffe6a3"], ["sad", "sad", "#cfe0ff"], ["angry", "angry", "#ffc9c2"], ["scared", "scared", "#e0d6f5"],
               ["excited", "excited", "#ffd9ec"], ["worried", "worried", "#d8ecd8"], ["proud", "proud", "#ffe0b8"], ["calm", "calm", "#cdeef0"]];
  var feelDia = '<svg viewBox="0 0 340 206"><rect width="340" height="206" rx="14" fill="#fffaf2"/>';
  for (var fi = 0; fi < 8; fi++) {
    var fx = 43 + (fi % 4) * 85, fy = 44 + Math.floor(fi / 4) * 90;
    feelDia += face(fx, fy, 26, faces[fi][2], faces[fi][0])
      + '<text x="' + fx + '" y="' + (fy + 42) + '" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + faces[fi][1] + '</text>';
  }
  feelDia += '<text x="170" y="198" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">All of these feelings are okay to have</text></svg>';

  // ---- calming: flower in, candle out, plus the four steps ----
  var calmDia = '<svg viewBox="0 0 340 214"><rect width="340" height="214" rx="14" fill="#eef8f4"/>'
    + '<g><circle cx="66" cy="52" r="10" fill="#ffd166"/>'
    + '<g fill="#ff8fb1"><ellipse cx="66" cy="34" rx="8" ry="12"/><ellipse cx="66" cy="70" rx="8" ry="12"/>'
    + '<ellipse cx="48" cy="52" rx="12" ry="8"/><ellipse cx="84" cy="52" rx="12" ry="8"/></g>'
    + '<path d="M66 82 v22" stroke="#5aa469" stroke-width="3" fill="none"/></g>'
    + '<text x="66" y="122" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">smell the flower</text>'
    + '<text x="66" y="138" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">breathe IN</text>'
    + '<g><rect x="256" y="52" width="20" height="52" rx="5" fill="#ffe6a3" stroke="#e0b84a" stroke-width="2"/>'
    + '<path d="M266 50 c6 -8 4 -14 0 -20 c-4 6 -6 12 0 20 z" fill="#ff9f68"/>'
    + '<path d="M266 44 c3 -4 2 -7 0 -10 c-2 3 -3 6 0 10 z" fill="#ffd166"/></g>'
    + '<text x="266" y="122" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">blow the candle</text>'
    + '<text x="266" y="138" text-anchor="middle" ' + FA + ' font-size="11" fill="#6a668c">breathe OUT</text>'
    + '<path d="M104 66 q60 -18 128 0" fill="none" stroke="#8a86a8" stroke-width="2" stroke-dasharray="5 4"/>';
  var steps = ["Stop", "Name it", "Breathe", "Choose"];
  for (var ci = 0; ci < 4; ci++) {
    var sx = 14 + ci * 80;
    calmDia += '<rect x="' + sx + '" y="158" width="72" height="34" rx="11" fill="#43aa8b"/>'
      + '<text x="' + (sx + 36) + '" y="180" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#fff">' + (ci + 1) + '. ' + steps[ci] + '</text>';
  }
  calmDia += '</svg>';

  // ---- kindness looks like ... ----
  var kind = ["share", "help", "include someone", "listen", "smile", "say thank you"];
  var kindDia = '<svg viewBox="0 0 340 200"><rect width="340" height="200" rx="14" fill="#fff2f6"/>'
    + '<path d="M170 44 C150 24 118 32 118 56 C118 78 150 92 170 106 C190 92 222 78 222 56 C222 32 190 24 170 44 Z" fill="#ff8fb1"/>'
    + '<text x="170" y="72" text-anchor="middle" ' + FA + ' font-size="14" fill="#fff">kindness</text>';
  for (var ki = 0; ki < 6; ki++) {
    var kx = 14 + (ki % 2) * 163, ky = 120 + Math.floor(ki / 2) * 27;
    kindDia += '<rect x="' + kx + '" y="' + ky + '" width="163" height="23" rx="8" fill="#fff" stroke="#f7c6d6" stroke-width="1.5"/>'
      + '<text x="' + (kx + 10) + '" y="' + (ky + 16) + '" ' + FA + ' font-size="11.5" fill="#2d2a4a">💛 ' + kind[ki] + '</text>';
  }
  kindDia += '</svg>';

  // ---- how to join in ----
  var fsteps = [["👀", "Watch first"], ["🙋", "\"Can I play?\""], ["🔄", "Take turns"], ["👂", "Listen"]];
  var friendDia = '<svg viewBox="0 0 340 152"><rect width="340" height="152" rx="14" fill="#eef6ff"/>';
  for (var gi = 0; gi < 4; gi++) {
    var gx = 43 + gi * 85;
    friendDia += '<circle cx="' + gx + '" cy="52" r="27" fill="#fff" stroke="#4d96ff" stroke-width="2.5"/>'
      + '<text x="' + gx + '" y="60" text-anchor="middle" font-size="22">' + fsteps[gi][0] + '</text>'
      + '<text x="' + gx + '" y="98" text-anchor="middle" ' + FA + ' font-size="11" fill="#2d2a4a">' + fsteps[gi][1] + '</text>';
    if (gi < 3) friendDia += '<path d="M' + (gx + 30) + ' 52 h22" stroke="#9ab6e8" stroke-width="2.5" fill="none"/>';
  }
  friendDia += '<text x="170" y="132" text-anchor="middle" ' + FA + ' font-size="12" fill="#5d3fa0">If they say no, that\'s okay — try another game or friend</text></svg>';

  // ---- speaking up: three steps ----
  var bsteps = ['"Stop. I don\'t', 'Walk away', 'Tell a trusted'];
  var bsub = ['like that."', '', 'grown-up'];
  var braveDia = '<svg viewBox="0 0 340 176"><rect width="340" height="176" rx="14" fill="#fff7ea"/>';
  for (var bi = 0; bi < 3; bi++) {
    var bx = 12 + bi * 108;
    braveDia += '<rect x="' + bx + '" y="26" width="96" height="70" rx="14" fill="#fff" stroke="#e0a94a" stroke-width="2.5"/>'
      + '<circle cx="' + (bx + 48) + '" cy="20" r="13" fill="#e0a94a"/>'
      + '<text x="' + (bx + 48) + '" y="25" text-anchor="middle" ' + FA + ' font-size="13" fill="#fff">' + (bi + 1) + '</text>'
      + '<text x="' + (bx + 48) + '" y="62" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">' + bsteps[bi] + '</text>'
      + '<text x="' + (bx + 48) + '" y="78" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">' + bsub[bi] + '</text>';
  }
  braveDia += '<rect x="52" y="116" width="236" height="40" rx="13" fill="#7c5cbf"/>'
    + '<text x="170" y="134" text-anchor="middle" ' + FA + ' font-size="13" fill="#fff">"I can\'t do it… YET"</text>'
    + '<text x="170" y="150" text-anchor="middle" ' + FA + ' font-size="10.5" fill="#e0d6f5">mistakes are how brains grow</text></svg>';

  LESSONS[25] = {
    feelings: {
      title: "Naming Feelings", emoji: "😊",
      intro: "Feelings are like weather inside you — they roll in and they roll out. The first big skill is being able to name them.",
      learn: [
        "Everyone has feelings, and all of them are okay: happy, sad, angry, scared, excited, worried, proud, calm.",
        "Feelings are not 'good' or 'bad'. What we DO with a feeling is what matters.",
        "Your body gives clues: a tight tummy, hot cheeks, a fast heartbeat or tears can tell you what you are feeling.",
        "Naming a feeling makes it smaller and easier to handle. Try: \"I feel ___ because ___.\"",
        "Feelings change, just like weather. Even a very big feeling will not last forever."
      ],
      activity: "😊 Feelings Check-In: At dinner, everyone shares one feeling from their day using the sentence \"I felt ___ when ___.\" Grown-ups go first!",
      diagram: feelDia,
      questions: [
        { q: "Are all feelings okay to have?", a: "Yes — all feelings are normal" },
        { q: "Name three feelings.", a: "e.g. happy, sad, angry, scared, excited, proud" },
        { q: "What clues does your body give about feelings?", a: "A tight tummy, hot cheeks, a fast heartbeat, tears" },
        { q: "What happens when you name a feeling?", a: "It gets smaller and easier to handle" },
        { q: "Finish the sentence: \"I feel ___ because ___.\"", a: "Any honest answer" },
        { q: "Do big feelings last forever?", a: "No — feelings change, like weather" },
        { q: "Is it the feeling, or what we do with it, that matters most?", a: "What we do with it" },
        { q: "What might a fast heartbeat and shaky hands mean?", a: "You might feel scared, nervous or excited" },
        { q: "What feeling might you have after finishing something hard?", a: "Proud" },
        { q: "Is it okay to feel angry?", a: "Yes — but we still choose kind actions" },
        { q: "Can two people feel differently about the same thing?", a: "Yes" },
        { q: "Who could you tell if a feeling gets too big?", a: "A grown-up you trust" }
      ]
    },
    calm: {
      title: "Calming Big Feelings", emoji: "🌬️",
      intro: "Sometimes a feeling gets so big it feels like it is driving. Here is how to take the wheel back.",
      learn: [
        "When a big feeling arrives, first STOP. Then name it: \"I am angry.\"",
        "Breathe slowly: smell the flower (in through your nose), blow out the candle (out through your mouth). Do it about five times.",
        "Slow breathing tells your body it is safe, and your thinking brain switches back on.",
        "Other things that help: count to ten, sip some water, squeeze a cushion, move your body, or find a quiet spot.",
        "Wait until you are calm before you speak or act. If a feeling is too big, or will not go away, tell a grown-up you trust."
      ],
      activity: "🌬️ Flower and Candle: Practise five slow breaths together while everyone is already calm. Practising when calm is what makes it work when you are upset.",
      diagram: calmDia,
      questions: [
        { q: "What is the first thing to do with a big feeling?", a: "Stop" },
        { q: "What do you do straight after you stop?", a: "Name the feeling" },
        { q: "Describe flower-and-candle breathing.", a: "Breathe in through your nose, blow out slowly through your mouth" },
        { q: "Why does slow breathing help?", a: "It tells your body it is safe so you can think clearly again" },
        { q: "Name two other things that help you calm down.", a: "e.g. count to ten, sip water, move, find a quiet spot" },
        { q: "Should you make a big decision while you are very upset?", a: "No — wait until you are calm" },
        { q: "About how many slow breaths is a good number to try?", a: "Five" },
        { q: "What can you do if a feeling is too big to handle alone?", a: "Tell a grown-up you trust" },
        { q: "Is it okay to take a break when you are upset?", a: "Yes" },
        { q: "When is the best time to practise calming tricks?", a: "When you are already calm" },
        { q: "Does calming down mean your feeling was wrong?", a: "No — it just helps you choose what to do next" },
        { q: "What are the four steps?", a: "Stop, name it, breathe, choose" }
      ]
    },
    kindness: {
      title: "Kindness & Empathy", emoji: "💛",
      intro: "Empathy is imagining how someone else feels. It is a genuine superpower — and kindness is what you do with it.",
      learn: [
        "Empathy means imagining how someone else might be feeling, even when it is different from how you feel.",
        "Look at faces and bodies for clues, and really listen to what people say.",
        "Kindness is empathy in action: including someone, sharing, helping, or simply asking \"Are you okay?\"",
        "Small kind acts count for a lot — a smile, a thank you, holding a door, or using someone's name.",
        "Kindness spreads. When someone is kind to you, you are more likely to be kind to somebody else."
      ],
      activity: "💛 Secret Kindness: Do one kind thing for someone today without telling them it was you. Afterwards, talk about how it felt to do it.",
      diagram: kindDia,
      questions: [
        { q: "What does empathy mean?", a: "Imagining how someone else feels" },
        { q: "Where can you look for clues about how someone feels?", a: "Their face, their body, and what they say" },
        { q: "What is kindness?", a: "Empathy in action — doing something that helps someone" },
        { q: "Name a small act of kindness.", a: "e.g. a smile, sharing, helping, including someone" },
        { q: "What could you say to someone who looks sad?", a: "\"Are you okay?\"" },
        { q: "If someone is sitting alone at playtime, what could you do?", a: "Invite them to join in" },
        { q: "Does everyone feel the same way about the same thing?", a: "No — people feel differently" },
        { q: "What often happens when you are kind to someone?", a: "It spreads — they are more likely to be kind too" },
        { q: "Is kindness only for your friends?", a: "No — you can be kind to anyone" },
        { q: "Name one way to show you are really listening.", a: "Look at them, nod, and don't interrupt" },
        { q: "How could you be kind to someone who is new?", a: "Say hello, learn their name, show them around" },
        { q: "Does being kind to yourself matter too?", a: "Yes — speak kindly to yourself as well" }
      ]
    },
    friends: {
      title: "Making Friends", emoji: "🤝",
      intro: "Friends make everything better — and being a good friend is a skill you can practise, just like reading.",
      learn: [
        "To join a game, watch for a moment first, then ask: \"Can I play?\" If they say no, that is okay — try another game or another friend.",
        "Good friends take turns, share, and let other people choose sometimes too.",
        "Listening is half of friendship: look at your friend, let them finish, and ask a question back.",
        "Friends disagree sometimes, and that is completely normal. Talk it over calmly, or take a break and come back to it.",
        "A real apology has three parts: what you did, why it was wrong, and what you will do next time — not just the word \"sorry\"."
      ],
      activity: "🤝 Turn-Taking Game: Play a board game as a family and talk about how it feels to wait your turn, to win kindly, and to lose kindly.",
      diagram: friendDia,
      questions: [
        { q: "What is a good way to join a game?", a: "Watch first, then ask \"Can I play?\"" },
        { q: "What should you do if someone says no?", a: "Accept it kindly and try another game or friend" },
        { q: "Name two things good friends do.", a: "Take turns, share, listen, include others" },
        { q: "What are the three parts of a real apology?", a: "What you did, why it was wrong, what you'll do next time" },
        { q: "Is it normal for friends to disagree?", a: "Yes" },
        { q: "What can you do if an argument gets heated?", a: "Take a break and come back when you are calm" },
        { q: "How do you show a friend you are listening?", a: "Look at them, let them finish, ask a question" },
        { q: "Is it kind to always insist on your own game?", a: "No — let others choose sometimes" },
        { q: "What does it mean to lose kindly?", a: "Congratulate the winner and try again" },
        { q: "How can you make a new person feel welcome?", a: "Say hello, learn their name, invite them to join in" },
        { q: "Do you have to be friends with everybody?", a: "No — but you should be kind to everybody" },
        { q: "Name one way you could be a good friend today.", a: "Any kind, including or helpful action" }
      ]
    },
    brave: {
      title: "Speaking Up & Trying Again", emoji: "🦁",
      intro: "Being brave does not mean never feeling scared. It means doing the right thing — and trying again — even when it is hard.",
      learn: [
        "If someone is unkind to you, you can say it firmly: \"Stop. I don't like that.\" Then walk away.",
        "Always tell a grown-up you trust if someone keeps being unkind, hurts you, or makes you feel unsafe. That is not tattling — it is brave and sensible.",
        "Know your trusted grown-ups before you need them: a parent, a teacher, a grandparent, a coach. If the first one cannot help, tell another.",
        "You are allowed to say no to something that feels wrong — even to another child.",
        "When something is hard, add the word YET: \"I can't do it YET.\" Mistakes are how brains grow, so trying again IS the skill."
      ],
      activity: "🦁 My Trusted Grown-Ups: Draw around your hand and write the name of one trusted grown-up on each finger. Put it somewhere you will see it.",
      diagram: braveDia,
      questions: [
        { q: "What can you say if someone is being unkind to you?", a: "\"Stop. I don't like that.\"" },
        { q: "What should you do after saying stop?", a: "Walk away and tell a trusted grown-up" },
        { q: "Is telling a grown-up about someone being unkind the same as tattling?", a: "No — it is brave and sensible" },
        { q: "Name a grown-up you could trust.", a: "e.g. a parent, teacher, grandparent or coach" },
        { q: "Are you allowed to say no if something feels wrong?", a: "Yes" },
        { q: "What word can you add when something feels too hard?", a: "Yet — \"I can't do it YET\"" },
        { q: "What do mistakes help your brain do?", a: "Learn and grow" },
        { q: "Does being brave mean you never feel scared?", a: "No — it means doing the right thing anyway" },
        { q: "What should you do if you see someone else being treated unkindly?", a: "Be kind to them and tell a trusted grown-up" },
        { q: "If one grown-up cannot help, what should you do?", a: "Tell another grown-up you trust" },
        { q: "What is a good thing to say to yourself after a mistake?", a: "\"I'll try again\" or \"not yet\"" },
        { q: "Who can you talk to when you feel worried inside?", a: "A grown-up you trust" }
      ]
    }
  };
})();
