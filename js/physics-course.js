// BrightSprouts Academy: "Let's Learn Physics" (LESSONS[36]).
//
// One ladder from Kindergarten to Grade 12: what physics is, forces, motion, gravity, friction,
// simple machines, energy, heat, light, sound, electricity and magnetism, and Newton's laws.
//
// This is NOT the Physics subject inside Grades 9 to 12 (js/physics.js), which assumes algebra.
// This is the whole road, starting from pushing a box across a floor.
//
// Written without em dashes.
//
// ACCURACY RULES. Physics is the subject with the most confidently repeated wrong answers, so
// this course names the misconception out loud instead of quietly avoiding it:
//  * Heavy things do NOT fall faster. In air a feather loses to a hammer because of air
//    resistance, not weight. Drop them where there is no air and they land together.
//  * Mass and weight are different. Mass is how much stuff there is and does not change. Weight
//    is the pull of gravity on that stuff and changes with where you stand.
//  * A moving thing does not need a continuous push to keep moving. It needs one to START, and
//    friction is why it seems otherwise on Earth.
//  * Energy is never used up, only changed into another form. "Wasted" energy is usually heat.
//  * Cold does not come in. Heat goes out. Every "the cold got in" sentence is backwards.
//  * You see a chair because light bounces OFF it INTO your eye. Eyes do not send anything out.
//  * Magnets do not attract all metals. Iron, nickel and cobalt yes; aluminium and copper no.
//  * There is no sound in space, because sound needs something to travel through.
//  * Every number here is either computed by a formula that the audit verifies numerically, or
//    taken from Wikidata with the Q-number kept. None of them are typed from memory.
(function () {
  if (typeof LESSONS === "undefined") return;

  function K() { return window.DiagramKit; }
  function art(draw) { return function () { return draw(K()); }; }

  function arrowDef(id, col) {
    return '<defs><marker id="' + id + '" markerWidth="9" markerHeight="9" refX="7" refY="4.5" ' +
      'orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="' + col + '"/></marker></defs>';
  }

  // ==================== verified and computed data ====================

  // Surface gravity checked against Wikidata (P7015) on 2026-07-28. Q-numbers kept as the receipt.
  // Jupiter is the interesting one: it has no solid surface, so the figure is the effective value
  // at the cloud tops including its own spin, and other sources quote 24.79 for a different
  // definition. The lesson says so rather than pretending there is one number.
  var BODIES = [
    { qid: "Q2",   name: "Earth",   g: 9.798,  note: "the one you grew up with" },
    { qid: "Q405", name: "the Moon", g: 1.62,  note: "about one sixth of Earth, which is why the astronauts bounced" },
    { qid: "Q111", name: "Mars",    g: 3.71,   note: "a bit over a third of Earth" },
    { qid: "Q308", name: "Mercury", g: 3.7278, note: "almost exactly the same as Mars, even though it is much smaller, because it is packed denser" },
    { qid: "Q313", name: "Venus",   g: 8.9,    note: "nearly the same as Earth, because it is nearly the same size" },
    { qid: "Q319", name: "Jupiter", g: 23.1,   note: "measured at the cloud tops, because Jupiter has no surface to stand on" }
  ];
  window.PHYS_BODIES = BODIES;

  // Constants. c is exact by definition: the metre is DEFINED from it, so it cannot be measured
  // more precisely. The others are the standard school values with their conditions stated.
  var CONST = {
    c: 299792458,          // m/s, exact by the SI definition of the metre
    g: 9.8,                // m/s^2, the round number used all through school
    soundAir20: 343,       // m/s, dry air at 20 degrees Celsius
    absoluteZero: -273.15  // degrees Celsius
  };

  // Every formula carries a verify() that checks it against a value worked out another way, so a
  // typo fails the audit instead of reaching a child. Same idea as the maths course.
  var FORMULAS = [
    { unit: "motion", name: "Speed", f: "speed = distance / time",
      means: "A car going 100 km in 2 hours is doing 50 km per hour.",
      verify: function () { return 100 / 2 === 50; } },
    { unit: "motion", name: "Distance", f: "distance = speed x time",
      means: "At 50 km per hour for 3 hours you cover 150 km.",
      verify: function () { return 50 * 3 === 150; } },
    { unit: "gravity", name: "Weight", f: "weight = mass x gravity",
      means: "A 10 kg bag weighs about 98 newtons on Earth and about 16 on the Moon.",
      verify: function () { return Math.abs(10 * CONST.g - 98) < 0.5 && Math.abs(10 * 1.62 - 16.2) < 0.1; } },
    { unit: "forces", name: "Newton's second law", f: "force = mass x acceleration",
      means: "Pushing 2 kg so it speeds up by 3 metres per second every second takes 6 newtons.",
      verify: function () { return 2 * 3 === 6; } },
    { unit: "machines", name: "Work", f: "work = force x distance",
      means: "Lifting with 20 newtons through 3 metres is 60 joules of work.",
      verify: function () { return 20 * 3 === 60; } },
    { unit: "machines", name: "Power", f: "power = work / time",
      means: "Doing 60 joules in 2 seconds is 30 watts.",
      verify: function () { return 60 / 2 === 30; } },
    { unit: "energy", name: "Movement energy", f: "kinetic energy = 1/2 x mass x speed x speed",
      means: "2 kg going 3 metres a second carries 9 joules. Double the speed and it is four times as much.",
      verify: function () {
        var ke = function (m, v) { return 0.5 * m * v * v; };
        return ke(2, 3) === 9 && ke(2, 6) === 4 * ke(2, 3);
      } },
    { unit: "energy", name: "Height energy", f: "stored energy = mass x gravity x height",
      means: "A 2 kg book on a 1.5 m shelf stores about 29 joules.",
      verify: function () { return Math.abs(2 * CONST.g * 1.5 - 29.4) < 0.01; } },
    { unit: "heat", name: "Density", f: "density = mass / volume",
      means: "1 kg of water fills 1 litre, so its density is 1 kg per litre. Things less dense than water float.",
      verify: function () { return 1 / 1 === 1; } },
    { unit: "sound", name: "Wave speed", f: "speed = frequency x wavelength",
      means: "A 343 Hz note in air has a wavelength of about 1 metre, because sound travels 343 m/s.",
      verify: function () { return Math.abs(343 * 1 - CONST.soundAir20) < 1; } },
    { unit: "electricity", name: "Ohm's law", f: "voltage = current x resistance",
      means: "2 amps through 3 ohms needs 6 volts.",
      verify: function () { return 2 * 3 === 6; } },
    { unit: "light", name: "Light time", f: "time = distance / speed of light",
      means: "Light from the Sun takes about 8 minutes and 20 seconds to reach us.",
      verify: function () {
        var secs = 149597870700 / CONST.c;   // one astronomical unit, the Sun to Earth distance
        return Math.abs(secs - 499) < 2;
      } }
  ];
  window.PHYS_FORMULAS = FORMULAS;

  // Only these three common metals are magnetic. Getting this wrong is nearly universal.
  var MAGNETIC = ["iron", "steel", "nickel", "cobalt"];
  var NOT_MAGNETIC = ["aluminium", "copper", "gold", "silver", "brass", "plastic", "wood", "glass"];

  // Forms of energy, and the everyday chain each one sits in.
  var ENERGY_FORMS = [
    ["movement", "a rolling ball"], ["heat", "a warm radiator"], ["light", "a lamp"],
    ["sound", "a shout"], ["electrical", "a wire in a circuit"], ["chemical", "food and batteries"],
    ["stored", "a stretched elastic band or a book on a shelf"]
  ];

  var MACHINES = [
    ["lever", "a see-saw, a spoon opening a tin, your own forearm"],
    ["ramp", "a slope up to a door, a screw thread, a wedge"],
    ["pulley", "a flagpole, a well, a crane"],
    ["wheel and axle", "a door handle, a bicycle, a steering wheel"]
  ];

  window.PHYS_FACTS = {
    consts: CONST, bodies: BODIES, formulas: FORMULAS,
    magnetic: MAGNETIC, notMagnetic: NOT_MAGNETIC,
    energyForms: ENERGY_FORMS, machines: MACHINES
  };

  // ==================== diagrams ====================

  var dWhat = art(function (A) {
    var s = A.defs([["phW", "#ffd166", "#e0902b"], ["phB", "#a8d8ff", "#1f6feb"]]);
    s += '<text x="170" y="26" text-anchor="middle" ' + A.LB + ' font-size="14">physics asks how, and then why</text>';
    // a thrown ball on an arc
    var pts = [];
    for (var i = 0; i <= 8; i++) {
      var x = 24 + i * 12, y = 128 - (48 - Math.pow(i - 4, 2) * 3);
      pts.push([x, y]);
      s += '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#1f6feb" opacity="' + (0.3 + i * 0.08) + '"/>';
    }
    s += A.orb("phB", 120, 128, 11);
    s += '<text x="72" y="150" text-anchor="middle" ' + A.LB + ' font-size="11">how things move</text>';
    // a lamp for energy
    s += A.orb("phW", 186, 78, 20);
    s += '<rect x="178" y="96" width="16" height="12" rx="3" fill="#8f93a3"/>';
    for (var j = 0; j < 6; j++) {
      var a = (j / 6) * Math.PI * 2;
      s += '<path d="M' + (186 + Math.cos(a) * 26).toFixed(1) + ' ' + (78 + Math.sin(a) * 26).toFixed(1) +
        ' L' + (186 + Math.cos(a) * 33).toFixed(1) + ' ' + (78 + Math.sin(a) * 33).toFixed(1) +
        '" stroke="#e0902b" stroke-width="2.5" stroke-linecap="round"/>';
    }
    s += '<text x="186" y="150" text-anchor="middle" ' + A.LB + ' font-size="11">energy</text>';
    // a horseshoe magnet
    s += '<path d="M254 118 v-26 a24 24 0 0 1 48 0 v26 h-14 v-26 a10 10 0 0 0 -20 0 v26 z" fill="#e2453b"/>';
    s += '<rect x="254" y="118" width="14" height="12" fill="#3a7fc9"/>';
    s += '<rect x="288" y="118" width="14" height="12" fill="#c9c4dd"/>';
    s += '<text x="278" y="150" text-anchor="middle" ' + A.LB + ' font-size="11">forces</text>';
    s += '<text x="170" y="178" text-anchor="middle" ' + A.LB + ' font-size="11.5">the same few rules run the whole universe</text>';
    s += '<text x="170" y="198" text-anchor="middle" ' + A.LB + ' font-size="11">from a dropped spoon to a distant galaxy</text>';
    return A.frame("#f2f8ff", s);
  });

  var dForces = art(function (A) {
    var s = A.defs([]);
    s += arrowDef("phFA", "#e2453b") + arrowDef("phFB", "#3a7fc9");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a force is a push or a pull</text>';
    // balanced
    s += A.slab(122, 44, 60, 40, "#ffd166", "#fff3c4", 8);
    s += '<path d="M110 64 h-46" stroke="#3a7fc9" stroke-width="4" marker-end="url(#phFB)"/>';
    s += '<path d="M194 64 h46" stroke="#e2453b" stroke-width="4" marker-end="url(#phFA)"/>';
    s += '<text x="170" y="102" text-anchor="middle" ' + A.LB + ' font-size="10.5">equal pushes, so it stays put</text>';
    // unbalanced
    s += A.slab(122, 118, 60, 40, "#ffd166", "#fff3c4", 8);
    s += '<path d="M110 138 h-22" stroke="#3a7fc9" stroke-width="4" marker-end="url(#phFB)"/>';
    s += '<path d="M194 138 h64" stroke="#e2453b" stroke-width="7" marker-end="url(#phFA)"/>';
    s += '<text x="170" y="176" text-anchor="middle" ' + A.LB + ' font-size="10.5">one bigger, so it moves that way</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="11">forces are measured in newtons</text>';
    return A.frame("#fff8f2", s);
  });

  var dMotion = art(function (A) {
    var s = A.defs([["phC", "#ff9db0", "#c9184a"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">speed is distance shared out over time</text>';
    s += '<path d="M20 108 h300" stroke="#8f93a3" stroke-width="2"/>';
    for (var i = 0; i <= 4; i++) {
      var x = 24 + i * 72;
      s += '<path d="M' + x + ' 102 v12" stroke="#8f93a3" stroke-width="2"/>';
      s += '<text x="' + x + '" y="128" text-anchor="middle" ' + A.LB + ' font-size="9.5">' + (i * 25) + ' km</text>';
    }
    // a little car partway along
    s += '<path d="M180 86 h44 l10 14 h10 v8 h-64 v-8 z" fill="#c9184a"/>';
    s += A.orb("phC", 192, 100, 7) + A.orb("phC", 228, 100, 7);
    s += '<text x="170" y="156" text-anchor="middle" ' + A.LB + ' font-size="11.5">100 km in 2 hours is 50 km per hour</text>';
    s += '<text x="170" y="178" text-anchor="middle" ' + A.LB + ' font-size="11">velocity is speed plus which way you are going</text>';
    s += '<text x="170" y="198" text-anchor="middle" ' + A.LB + ' font-size="11">acceleration is how fast the speed itself changes</text>';
    return A.frame("#f4faff", s);
  });

  var dGravity = art(function (A) {
    var s = A.defs([["phH", "#c9c4dd", "#6f7382"]]);
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">with no air, they land together</text>';
    // left: with air, feather lags
    s += '<rect x="16" y="36" width="146" height="130" rx="10" fill="#e8f4ff"/>';
    s += '<text x="89" y="54" text-anchor="middle" ' + A.LB + ' font-size="10.5">with air</text>';
    s += A.orb("phH", 54, 132, 13);
    s += '<path d="M118 74 q10 12 0 24 q-10 -12 0 -24 z" fill="#ffffff" stroke="#8f93a3" stroke-width="1.4"/>';
    s += '<path d="M118 106 v14" stroke="#8f93a3" stroke-width="1.4" stroke-dasharray="3 3"/>';
    s += '<path d="M20 156 h138" stroke="#8a5f2e" stroke-width="3"/>';
    // right: vacuum, both together
    s += '<rect x="178" y="36" width="146" height="130" rx="10" fill="#221f36"/>';
    s += '<text x="251" y="54" text-anchor="middle" ' + A.LBW + ' font-size="10.5">no air at all</text>';
    s += A.orb("phH", 216, 120, 13);
    s += '<path d="M286 108 q10 12 0 24 q-10 -12 0 -24 z" fill="#ffffff" stroke="#c9c4dd" stroke-width="1.4"/>';
    s += '<path d="M182 156 h138" stroke="#c9c4dd" stroke-width="3"/>';
    s += '<text x="170" y="184" text-anchor="middle" ' + A.LB + ' font-size="11">a feather loses to a hammer because of air,</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="11">not because the hammer is heavier</text>';
    return A.frame("#fbf8ff", s);
  });

  var dFriction = art(function (A) {
    var s = A.defs([]);
    s += arrowDef("phFr", "#e2453b");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">friction is the rub that slows things down</text>';
    // rough surface
    s += A.slab(40, 46, 52, 30, "#8fd39a", "#d9f0d4", 6);
    var rough = "M20 84";
    for (var i = 0; i < 30; i++) rough += " l5 " + (i % 2 ? 5 : -5);
    s += '<path d="' + rough + '" stroke="#8a5f2e" stroke-width="2.5" fill="none"/>';
    s += '<path d="M96 62 h30" stroke="#e2453b" stroke-width="3" marker-end="url(#phFr)"/>';
    s += '<text x="196" y="66" ' + A.LB + ' font-size="10.5">rough: lots of friction</text>';
    // smooth surface
    s += A.slab(40, 118, 52, 30, "#8fd39a", "#d9f0d4", 6);
    s += '<path d="M20 154 h300" stroke="#7fb8e8" stroke-width="3"/>';
    s += '<path d="M96 134 h84" stroke="#e2453b" stroke-width="3" marker-end="url(#phFr)"/>';
    s += '<text x="196" y="128" ' + A.LB + ' font-size="10.5">smooth: hardly any</text>';
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11">friction turns movement into heat</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="11">rub your hands together and feel it happen</text>';
    return A.frame("#f4fbf5", s);
  });

  var dMachines = art(function (A) {
    var s = A.defs([["phM", "#ffd166", "#c9822a"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a machine trades distance for force</text>';
    // lever
    s += '<path d="M22 92 h84" stroke="#8a5f2e" stroke-width="6" stroke-linecap="round"/>';
    s += '<path d="M56 92 l10 18 h-20 z" fill="#5d3fa0"/>';
    s += '<rect x="88" y="78" width="16" height="14" rx="3" fill="#c9184a"/>';
    s += '<text x="64" y="132" text-anchor="middle" ' + A.LB + ' font-size="10.5">lever</text>';
    // ramp
    s += '<path d="M124 116 h74 l-74 -34 z" fill="#8fd39a"/>';
    s += A.orb("phM", 160, 92, 10);
    s += '<text x="161" y="132" text-anchor="middle" ' + A.LB + ' font-size="10.5">ramp</text>';
    // pulley
    s += '<circle cx="264" cy="66" r="15" fill="none" stroke="#8f93a3" stroke-width="5"/>';
    s += '<path d="M249 66 v46" stroke="#8a5f2e" stroke-width="2.5"/>';
    s += '<path d="M279 66 v34" stroke="#8a5f2e" stroke-width="2.5"/>';
    s += '<rect x="270" y="100" width="18" height="16" rx="3" fill="#c9184a"/>';
    s += '<text x="264" y="132" text-anchor="middle" ' + A.LB + ' font-size="10.5">pulley</text>';
    s += '<text x="170" y="160" text-anchor="middle" ' + A.LB + ' font-size="11.5">you push less hard, but for further</text>';
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="11">the work done comes out the same</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="10.5">no machine ever gives you energy for free</text>';
    return A.frame("#fffaf4", s);
  });

  var dEnergy = art(function (A) {
    var s = A.defs([["phE", "#c9f0c0", "#3f9c4a"]]);
    s += arrowDef("phEA", "#5d3fa0");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">energy changes form, it never vanishes</text>';
    // a roller coaster hill: stored at the top, movement at the bottom
    s += '<path d="M20 140 q40 -86 84 -86 q48 0 74 86 q22 -44 60 -44 q42 0 62 44" ' +
      'stroke="#7c5cbf" stroke-width="5" fill="none"/>';
    s += A.orb("phE", 104, 44, 11);
    s += '<text x="122" y="42" ' + A.LB + ' font-size="9.5">stored</text>';
    s += A.orb("phE", 178, 134, 11);
    s += '<text x="178" y="158" text-anchor="middle" ' + A.LB + ' font-size="9.5">moving fast</text>';
    s += '<rect x="20" y="168" width="300" height="34" rx="9" fill="#ffffff"/>';
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="9.5">high up is stored energy, low down is movement</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="9.5">the leftovers become heat and sound</text>';
    return A.frame("#f7f4ff", s);
  });

  var dHeat = art(function (A) {
    var s = A.defs([]);
    s += arrowDef("phHt", "#e2453b");
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">heat always moves hot to cold</text>';
    // hot mug and cold hand
    s += '<path d="M40 62 h56 v42 q-28 12 -56 0 z" fill="#e2453b"/>';
    s += '<path d="M96 72 q20 2 20 14 q0 12 -20 14" stroke="#c9184a" stroke-width="5" fill="none"/>';
    s += '<ellipse cx="68" cy="62" rx="28" ry="8" fill="#ffd9c4"/>';
    s += '<text x="68" y="128" text-anchor="middle" ' + A.LB + ' font-size="10.5">hot</text>';
    s += '<rect x="238" y="62" width="60" height="46" rx="10" fill="#cfe8ff"/>';
    s += '<text x="268" y="128" text-anchor="middle" ' + A.LB + ' font-size="10.5">cold</text>';
    for (var i = 0; i < 3; i++) {
      s += '<path d="M132 ' + (72 + i * 16) + ' h74" stroke="#e2453b" stroke-width="3" marker-end="url(#phHt)"/>';
    }
    s += '<text x="170" y="152" text-anchor="middle" ' + A.LB + ' font-size="11.5">"the cold got in" is backwards</text>';
    s += '<text x="170" y="174" text-anchor="middle" ' + A.LB + ' font-size="11">what really happened is the heat went out</text>';
    s += '<text x="170" y="196" text-anchor="middle" ' + A.LB + ' font-size="10.5">temperature is how hot, heat is the energy moving</text>';
    return A.frame("#fff8f2", s);
  });

  var dLight = art(function (A) {
    var s = A.defs([["phL", "#ffd166", "#e0902b"]]);
    s += arrowDef("phLA", "#f2b705");
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">you see because light bounces into your eye</text>';
    // lamp, apple, eye
    s += A.orb("phL", 42, 62, 16);
    s += '<path d="M60 72 L140 100" stroke="#f2b705" stroke-width="3" marker-end="url(#phLA)"/>';
    s += '<circle cx="166" cy="108" r="21" fill="#e2453b"/>';
    s += '<path d="M166 88 q6 -10 14 -12" stroke="#3f9c4a" stroke-width="3" fill="none"/>';
    s += '<path d="M188 104 L262 84" stroke="#f2b705" stroke-width="3" marker-end="url(#phLA)"/>';
    s += '<path d="M272 84 q22 -14 44 0 q-22 14 -44 0 z" fill="#ffffff" stroke="#2d2a4a" stroke-width="1.8"/>';
    s += '<circle cx="294" cy="84" r="7" fill="#3a7fc9"/><circle cx="294" cy="84" r="3" fill="#2d2a4a"/>';
    // spectrum strip
    var cols = ["#e2453b", "#f2942b", "#f2d024", "#4ab55d", "#3a7fc9", "#5a3ac9", "#8a4ac9"];
    cols.forEach(function (c, i) {
      s += '<rect x="' + (86 + i * 24) + '" y="142" width="24" height="20" fill="' + c + '"/>';
    });
    s += '<text x="170" y="180" text-anchor="middle" ' + A.LB + ' font-size="11">white light is all the colours mixed together</text>';
    s += '<text x="170" y="200" text-anchor="middle" ' + A.LB + ' font-size="10.5">light is the fastest thing there is, at 300000 km a second</text>';
    return A.frame("#fdf6ff", s);
  });

  var dSound = art(function (A) {
    var s = A.defs([]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">sound needs something to travel through</text>';
    // a bell ringing in air
    s += '<rect x="16" y="40" width="140" height="104" rx="10" fill="#e8f4ff"/>';
    s += '<path d="M62 108 q0 -36 24 -36 q24 0 24 36 z" fill="#ffd166"/>';
    s += '<circle cx="86" cy="112" r="5" fill="#c9822a"/>';
    for (var i = 1; i <= 3; i++) {
      s += '<path d="M' + (118 + i * 8) + ' ' + (86 - i * 6) + ' q10 ' + (12 + i * 5) + ' 0 ' + (24 + i * 10) +
        '" stroke="#3a7fc9" stroke-width="2.5" fill="none"/>';
    }
    s += '<text x="86" y="160" text-anchor="middle" ' + A.LB + ' font-size="10.5">in air: you hear it</text>';
    // a bell in a vacuum jar
    s += '<rect x="184" y="40" width="140" height="104" rx="10" fill="#221f36"/>';
    s += '<path d="M230 108 q0 -36 24 -36 q24 0 24 36 z" fill="#ffd166"/>';
    s += '<circle cx="254" cy="112" r="5" fill="#c9822a"/>';
    s += '<text x="296" y="86" text-anchor="middle" ' + A.LBW + ' font-size="16">X</text>';
    s += '<text x="254" y="160" text-anchor="middle" ' + A.LB + ' font-size="10.5">in space: silence</text>';
    s += '<text x="170" y="182" text-anchor="middle" ' + A.LB + ' font-size="11">sound travels about 343 metres a second in air</text>';
    s += '<text x="170" y="202" text-anchor="middle" ' + A.LB + ' font-size="11">which is why you see lightning before you hear it</text>';
    return A.frame("#f4f8ff", s);
  });

  var dElectric = art(function (A) {
    var s = A.defs([["phBulb", "#fff3c4", "#f2b705"]]);
    s += '<text x="170" y="24" text-anchor="middle" ' + A.LB + ' font-size="14">a circuit has to be a complete loop</text>';
    // battery, wires, bulb, switch
    s += '<path d="M60 60 h190 v78 h-190 z" stroke="#c9822a" stroke-width="4" fill="none"/>';
    s += '<rect x="88" y="128" width="46" height="20" rx="4" fill="#5d3fa0"/>';
    s += '<rect x="134" y="133" width="7" height="10" rx="2" fill="#c9c4dd"/>';
    s += '<text x="111" y="166" text-anchor="middle" ' + A.LB + ' font-size="10">battery</text>';
    s += A.orb("phBulb", 250, 60, 17);
    s += '<rect x="243" y="74" width="15" height="10" rx="2" fill="#8f93a3"/>';
    s += '<text x="282" y="66" ' + A.LB + ' font-size="10">bulb</text>';
    s += '<path d="M172 60 l22 -14" stroke="#c9822a" stroke-width="4" stroke-linecap="round"/>';
    s += '<circle cx="172" cy="60" r="4" fill="#8a5f2e"/><circle cx="200" cy="60" r="4" fill="#8a5f2e"/>';
    s += '<text x="186" y="40" text-anchor="middle" ' + A.LB + ' font-size="10">switch, open</text>';
    s += '<text x="170" y="186" text-anchor="middle" ' + A.LB + ' font-size="11">break the loop anywhere and it all stops</text>';
    s += '<text x="170" y="204" text-anchor="middle" ' + A.LB + ' font-size="10.5">magnets pull iron, nickel and cobalt, and nothing else</text>';
    return A.frame("#fbf8ff", s);
  });

  var dNewton = art(function (A) {
    var s = A.defs([["phN", "#a8d8ff", "#1f6feb"], ["phN2", "#ff9db0", "#c9184a"]]);
    s += arrowDef("phNA", "#5d3fa0");
    s += '<text x="170" y="22" text-anchor="middle" ' + A.LB + ' font-size="13.5">three rules that run everything that moves</text>';
    // 1: at rest stays at rest
    s += A.orb("phN", 56, 66, 16);
    s += '<path d="M34 92 h44" stroke="#8a5f2e" stroke-width="3"/>';
    s += '<text x="56" y="112" text-anchor="middle" ' + A.LB + ' font-size="9.5">1 it keeps doing</text>';
    s += '<text x="56" y="124" text-anchor="middle" ' + A.LB + ' font-size="9.5">whatever it was</text>';
    // 2: F = ma
    s += A.orb("phN", 170, 66, 16);
    s += '<path d="M136 66 h16" stroke="#5d3fa0" stroke-width="4" marker-end="url(#phNA)"/>';
    s += '<path d="M190 66 h30" stroke="#5d3fa0" stroke-width="2" stroke-dasharray="4 4"/>';
    s += '<text x="170" y="112" text-anchor="middle" ' + A.LB + ' font-size="9.5">2 harder push,</text>';
    s += '<text x="170" y="124" text-anchor="middle" ' + A.LB + ' font-size="9.5">faster change</text>';
    // 3: action and reaction
    s += A.orb("phN", 266, 58, 13) + A.orb("phN2", 266, 92, 13);
    s += '<path d="M292 58 h22" stroke="#1f6feb" stroke-width="3" marker-end="url(#phNA)"/>';
    s += '<path d="M240 92 h-22" stroke="#c9184a" stroke-width="3" marker-end="url(#phNA)"/>';
    s += '<text x="266" y="112" text-anchor="middle" ' + A.LB + ' font-size="9.5">3 pushes come</text>';
    s += '<text x="266" y="124" text-anchor="middle" ' + A.LB + ' font-size="9.5">in pairs</text>';
    s += '<rect x="20" y="136" width="300" height="62" rx="9" fill="#ffffff"/>';
    s += '<text x="32" y="154" ' + A.LB + ' font-size="10">1 nothing changes its motion unless a force acts on it</text>';
    s += '<text x="32" y="170" ' + A.LB + ' font-size="10">2 force = mass x acceleration</text>';
    s += '<text x="32" y="186" ' + A.LB + ' font-size="10">3 the pair acts on two different objects</text>';
    return A.frame("#f2f9ff", s);
  });

  window.PHYS_ART = {
    whatis: dWhat, forces: dForces, motion: dMotion, gravity: dGravity, friction: dFriction,
    machines: dMachines, energy: dEnergy, heat: dHeat, light: dLight, sound: dSound,
    electricity: dElectric, laws: dNewton
  };

  // ==================== endless worksheets ====================
  // Numeric questions are GENERATED and then answered by the same formula the lesson teaches,
  // so a generated question and its answer are correct by construction.
  function R(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[R(0, a.length - 1)]; }
  function round1(x) { return Math.round(x * 10) / 10; }

  var GEN = {
    whatis: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What does physics study?", a: "How things move and why" };
      if (k === 1) return { q: "Is a falling spoon physics?", a: "Yes" };
      return { q: "Do the same rules of physics work far out in space?", a: "Yes" };
    },
    forces: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What is a force?", a: "A push or a pull" };
      if (k === 1) return { q: "What unit is force measured in?", a: "Newtons" };
      var m = R(2, 9), a = R(2, 9);
      return { q: "A force makes " + m + " kg speed up by " + a +
               " metres per second every second. What is the force, in newtons?", a: String(m * a) };
    },
    motion: function () {
      var k = R(0, 2);
      if (k === 0) {
        var t = R(2, 6), sp = pick([10, 20, 25, 30, 40, 50, 60]);
        return { q: "A car goes " + (sp * t) + " km in " + t + " hours. What is its speed in km per hour?",
                 a: String(sp) };
      }
      if (k === 1) {
        var sp2 = pick([10, 20, 30, 40, 50]), t2 = R(2, 6);
        return { q: "Travelling at " + sp2 + " km per hour for " + t2 +
                 " hours, how far do you go?", a: String(sp2 * t2) + " km" };
      }
      return { q: "What is the difference between speed and velocity?", a: "Velocity also says which way" };
    },
    gravity: function () {
      var k = R(0, 3);
      if (k === 0) {
        var b = pick(BODIES.slice(1));
        return { q: "Is gravity on " + b.name + " stronger or weaker than on Earth?",
                 a: b.g > 9.798 ? "Stronger" : "Weaker" };
      }
      if (k === 1) {
        var m = pick([2, 5, 10, 20, 50]);
        return { q: "A " + m + " kg bag on Earth weighs about how many newtons? Use 9.8 for gravity.",
                 a: String(round1(m * CONST.g)) };
      }
      if (k === 2) return { q: "In a place with no air, which lands first, a hammer or a feather?", a: "They land together" };
      return { q: "Does your mass change when you go to the Moon?", a: "No, only your weight does" };
    },
    friction: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "What does friction do to a moving object?", a: "Slows it down" };
      if (k === 1) return { q: "What does friction turn movement energy into?", a: "Heat" };
      var pair = pick([["ice", "carpet"], ["a polished floor", "sandpaper"], ["a wet slide", "grass"]]);
      return { q: "Which has more friction, " + pair[0] + " or " + pair[1] + "?", a: pair[1] };
    },
    machines: function () {
      var k = R(0, 2);
      if (k === 0) {
        var m = pick(MACHINES);
        return { q: "Name something that works as a " + m[0] + ".", a: m[1].split(",")[0].trim() };
      }
      if (k === 1) {
        var f = pick([5, 10, 20, 25, 50]), d = R(2, 8);
        return { q: "You push with " + f + " newtons for " + d + " metres. How much work is that, in joules?",
                 a: String(f * d) };
      }
      return { q: "Does a machine give you energy for free?", a: "No" };
    },
    energy: function () {
      var k = R(0, 2);
      if (k === 0) {
        var e = pick(ENERGY_FORMS);
        return { q: "Which kind of energy is " + e[1] + "?", a: e[0].charAt(0).toUpperCase() + e[0].slice(1) };
      }
      if (k === 1) return { q: "Can energy be destroyed?", a: "No, it only changes form" };
      return { q: "Where does the energy of a bouncing ball end up?", a: "Mostly as heat and sound" };
    },
    heat: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Which way does heat always move?", a: "From hot to cold" };
      if (k === 1) return { q: "Is it true that cold gets into a house?", a: "No, the heat goes out" };
      return { q: "What is the difference between heat and temperature?",
               a: "Temperature is how hot, heat is the energy moving" };
    },
    light: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Why can you see a chair?", a: "Light bounces off it into your eye" };
      if (k === 1) return { q: "What is white light made of?", a: "All the colours mixed" };
      return { q: "What is the fastest thing in the universe?", a: "Light" };
    },
    sound: function () {
      var k = R(0, 2);
      if (k === 0) return { q: "Can sound travel through empty space?", a: "No" };
      if (k === 1) return { q: "Roughly how fast does sound travel in air, in metres per second?", a: "343" };
      return { q: "Why do you see lightning before you hear thunder?", a: "Light travels much faster than sound" };
    },
    electricity: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "What must a circuit be for the bulb to light?", a: "A complete loop" };
      if (k === 1) {
        var mat = pick(R(0, 1) ? MAGNETIC : NOT_MAGNETIC);
        return { q: "Will a magnet pick up " + mat + "?", a: MAGNETIC.indexOf(mat) >= 0 ? "Yes" : "No" };
      }
      if (k === 2) {
        var i = R(2, 6), r = R(2, 9);
        return { q: i + " amps flowing through " + r + " ohms needs how many volts?", a: String(i * r) };
      }
      return { q: "Name a metal a magnet does NOT pick up.", a: pick(NOT_MAGNETIC.slice(0, 5)) };
    },
    laws: function () {
      var k = R(0, 3);
      if (k === 0) return { q: "What does Newton's first law say happens with no force?", a: "Motion does not change" };
      if (k === 1) return { q: "What is Newton's second law as a formula?", a: "Force = mass x acceleration" };
      if (k === 2) return { q: "In Newton's third law, do the two forces act on the same object?", a: "No, on two different ones" };
      return { q: "Does a moving thing need a constant push to keep moving?", a: "No" };
    }
  };
  window.PHYS_GEN = GEN;

  // ==================== the twelve units ====================
  function U(key, title, emoji, band, intro, learn, diagram, parentNote, project, questions, extra) {
    var u = {
      title: title, emoji: emoji, band: band, intro: intro, learn: learn,
      diagram: diagram, parentNote: parentNote, project: project,
      physGen: key, questions: questions
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    return u;
  }

  LESSONS[36] = {

    whatis: U("whatis", "1 · What Is Physics?", "🔭", "Kindergarten to Grade 2",
      "Physics is the study of how things move and why they do what they do. It is the science underneath all the others: chemistry runs on it, biology runs on chemistry, and the same handful of rules works on a dropped spoon and on a galaxy.",
      ["Physics asks how things move, how energy travels, and what everything is made of.",
       "The same rules work everywhere. A ball thrown here and a moon going round Jupiter obey the same maths.",
       "Physicists guess, then test the guess, then change the guess when the test disagrees. That last step is the whole job.",
       "A prediction that cannot be tested is not physics yet.",
       "Physics is measured, so it uses units: metres, seconds, kilograms, newtons, joules.",
       "Being wrong is normal and useful. Some of the biggest discoveries started with a result nobody expected."],
      dWhat,
      "The idea worth planting early is that a scientist changes their mind when the evidence says so, and that this is a strength rather than an embarrassment. Ask what would have to happen for your child to decide they were wrong about something. That question is the beginning of real scientific thinking and it transfers well beyond physics.",
      { name: "🔭 Predict, Then Drop", mins: 20,
        materials: ["Two objects of very different weight, such as a coin and a paperclip",
                    "A sheet of paper", "Paper", "A pencil", "A chair to stand on, or just tall arms"],
        safety: "A grown-up does any standing on furniture. Drop things onto a clear floor, not near feet.",
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Write down your prediction first: which lands first, the coin or the paperclip?",
                  "Hold them at exactly the same height and let go at the same moment. Listen for one thump or two.",
                  "Write what actually happened next to your prediction.",
                  "Now drop the flat sheet of paper against the coin. Predict, then test.",
                  "Scrunch the same sheet into a tight ball and try again. Same paper, same weight, different result.",
                  "Write one sentence saying what actually made the difference. It was not the weight."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up holds two objects up high, one in each hand.",
                  "Ask your child to guess which will land first. Guessing first is the important bit.",
                  "Drop them together and listen. One thump or two?",
                  "Try a flat sheet of paper against a coin, then scrunch the paper up and try again.",
                  "Ask what changed. The paper is the same paper, so it cannot be the weight."] } },
      [{ q: "What does physics study?", a: "How things move and why" },
       { q: "Do the rules of physics change in space?", a: "No, they are the same" },
       { q: "What does a physicist do when a test disagrees with them?", a: "Change the guess" },
       { q: "Is a guess that cannot be tested physics?", a: "Not yet" },
       { q: "Name one unit used in physics.", a: "Metres, or seconds, or newtons" },
       { q: "Is being wrong useful in science?", a: "Yes" },
       { q: "Which science sits underneath chemistry?", a: "Physics" },
       { q: "Is a dropped spoon physics?", a: "Yes" }]),

    forces: U("forces", "2 · Forces: Push and Pull", "💪", "Kindergarten to Grade 3",
      "A force is a push or a pull. That is the whole definition, and it is enough to explain why a door opens, why a magnet grabs a fridge, and why you do not float off the ground.",
      ["Every force is either a push or a pull. Nothing else.",
       "Forces are measured in newtons, named after Isaac Newton.",
       "A force can start something moving, stop it, speed it up, slow it down, or change its direction.",
       "A force can also change something's shape, like squashing clay or stretching an elastic band.",
       "When the forces on something are balanced, its motion does not change. It stays still, or keeps going exactly as it was.",
       "When they are unbalanced, it changes its motion in the direction of the bigger force.",
       "Some forces need touching, like a push. Some work at a distance, like gravity and magnetism."],
      dForces,
      "Tug of war is the clearest picture of balanced and unbalanced forces there is, and you can play it with a towel across a doorway. While it is even, nothing moves even though both sides are pulling hard. Children often think no movement means no force, and one game fixes that permanently.",
      { name: "💪 Newton Meter From an Elastic Band", mins: 25,
        materials: ["A thick elastic band", "A paperclip", "A ruler", "A few objects to weigh",
                    "A pencil", "Paper", "Sticky tape"],
        safety: "Stretched elastic can snap back, so keep it below face height and do not overstretch it.",
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Tape one end of the elastic band to the edge of a table so it hangs down.",
                  "Bend the paperclip into a hook and attach it to the free end.",
                  "Tape the ruler beside it, zero at the top, and note where the empty hook sits.",
                  "Hang an object on the hook and write down how far the band stretched.",
                  "Do the same for five objects and put them in order of pull.",
                  "You have built a force meter. Test your ordering by holding two objects, one in each hand, and see if you agree."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up sets up the elastic band and hook.",
                  "Hang something light on it and look at the stretch together.",
                  "Now something heavier. Ask what happened to the band and why.",
                  "Play tug of war with a towel. While nobody is winning, is anybody pulling?",
                  "Sort three objects into 'small pull' and 'big pull' by hanging each one up."] } },
      [{ q: "What is a force?", a: "A push or a pull" },
       { q: "What unit is force measured in?", a: "Newtons" },
       { q: "Name one thing a force can do.", a: "Start, stop or turn something" },
       { q: "What happens when forces are balanced?", a: "The motion does not change" },
       { q: "What happens when they are unbalanced?", a: "It moves towards the bigger force" },
       { q: "Name a force that works without touching.", a: "Gravity, or magnetism" },
       { q: "Can a force change something's shape?", a: "Yes" },
       { q: "In an even tug of war, is anybody pulling?", a: "Yes, but the pulls are balanced" }]),

    motion: U("motion", "3 · Motion: Speed and Direction", "🏃", "Grades 2 to 6",
      "Motion is just a change of position. To describe it properly you need two things: how fast, and which way. Physics has separate words for those, and using them precisely makes everything later easier.",
      ["Speed is how much distance you cover in a certain time. Speed = distance divided by time.",
       "A car going 100 km in 2 hours has a speed of 50 km per hour.",
       "You can rearrange it: distance = speed x time, and time = distance divided by speed.",
       "Velocity is speed plus a direction. 50 km per hour north is a velocity. 50 km per hour on its own is a speed.",
       "Acceleration is how quickly the velocity itself changes. Speeding up, slowing down and turning are all acceleration.",
       "Average speed uses total distance over total time, which is not the same as the speed you were doing at any one moment.",
       "Motion is relative. Sitting still on a train you are not moving compared with your seat, and moving very fast compared with the ground."],
      dMotion,
      "The relativity of motion is genuinely startling and needs nothing but a car journey. Ask whether your child is moving right now. They are still compared with the seat, doing 60 mph compared with the road, and going round the Sun at about 30 km a second on top of that. All three answers are correct, which is exactly the point.",
      { name: "🏃 Measure Your Own Speed", mins: 30,
        materials: ["A tape measure or a metre stick", "A stopwatch or a phone timer",
                    "Chalk or two markers for the ends", "Paper", "A pencil", "A calculator"],
        safety: "Measure somewhere with no traffic and a clear run. Walk the first attempt before running.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Measure out exactly 20 metres and mark both ends.",
                  "Time yourself walking it. Write down the seconds.",
                  "Work out your speed: 20 divided by your time, in metres per second.",
                  "Now run it and work out that speed too.",
                  "Multiply metres per second by 3.6 to get kilometres per hour, and see how you compare with a bicycle.",
                  "Do the run three times and take an average. Explain in one sentence why the average is a better number than any single go."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Mark a start and a finish about ten steps apart.",
                  "The grown-up counts out loud while the child walks it. Count the seconds.",
                  "Now hop it, then crawl it, counting each time.",
                  "Put the three ways in order from slowest to fastest using your counts.",
                  "Ask which took the biggest number of seconds, and why that means it was slowest."] } },
      [{ q: "What is speed?", a: "Distance divided by time" },
       { q: "A car goes 100 km in 2 hours. What is its speed?", a: "50 km per hour" },
       { q: "What is velocity?", a: "Speed with a direction" },
       { q: "What is acceleration?", a: "How fast the velocity changes" },
       { q: "Is slowing down acceleration?", a: "Yes" },
       { q: "How do you find distance from speed and time?", a: "Multiply them" },
       { q: "Are you moving while sitting still on a train?", a: "It depends what you compare with" },
       { q: "What is average speed?", a: "Total distance divided by total time" }]),

    gravity: U("gravity", "4 · Gravity", "🪐", "Grades 1 to 6",
      "Gravity is the pull every piece of matter has on every other piece. It is very weak, which is why you do not stick to your chair, and the Earth only wins because it is so enormous.",
      ["Gravity pulls things together. The more mass something has, the harder it pulls.",
       "Heavy things do NOT fall faster. In a place with no air, a hammer and a feather land at exactly the same moment, and astronauts have actually tried it on the Moon.",
       "The reason a feather loses on Earth is air resistance pushing up on it, not its weight.",
       "Mass is how much stuff there is, measured in kilograms. It never changes.",
       "Weight is the pull of gravity on that mass, measured in newtons. It changes with where you are.",
       "On Earth gravity pulls at about 9.8 newtons for every kilogram. On the Moon it is about 1.6, which is roughly a sixth.",
       "So a 10 kg bag has a mass of 10 kg everywhere, but weighs about 98 newtons here and about 16 on the Moon.",
       "Gravity is what keeps the Moon going round the Earth and the Earth going round the Sun."],
      dGravity,
      "The heavier-falls-faster belief is nearly universal and survives being told the correct answer, so do not tell it. Show it: drop a flat sheet of paper against a coin, then scrunch that same sheet into a ball and drop again. Same paper, same weight, opposite result. The only thing that changed was the air, and children work that out for themselves in about three seconds.",
      { name: "🪐 Weigh Yourself on Six Worlds", mins: 25,
        materials: ["Bathroom scales", "A calculator", "Paper", "A pencil", "A ruler"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Weigh yourself in kilograms. That number is your mass, and it is the same everywhere in the universe.",
                  "Work out your weight on Earth in newtons: multiply your mass by 9.8.",
                  "Now do it for the Moon, multiplying by 1.62 instead. Then Mars at 3.71.",
                  "Do Mercury at 3.73 and Venus at 8.9, then Jupiter at 23.1.",
                  "Draw a bar chart of all six. Notice Mercury and Mars come out almost the same even though Mercury is far smaller.",
                  "Write one sentence explaining why your mass did not change on any of them."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["Weigh your child on the scales and write the number down.",
                  "The grown-up works out the Moon number by dividing by six, roughly.",
                  "Try jumping normally, then imagine jumping six times as high on the Moon. Mark both on a wall with sticky notes.",
                  "Talk about why astronauts bounce instead of walking.",
                  "Ask: would you still be made of the same amount of you on the Moon? Yes. Only the pull changed."] } },
      [{ q: "What does gravity do?", a: "Pulls things together" },
       { q: "Do heavier things fall faster in a vacuum?", a: "No, everything falls together" },
       { q: "Why does a feather fall slowly on Earth?", a: "Air resistance" },
       { q: "What is mass?", a: "How much stuff something is made of" },
       { q: "What is weight?", a: "The pull of gravity on that mass" },
       { q: "Which one changes on the Moon?", a: "Weight" },
       { q: "How strong is Earth's gravity, roughly?", a: "About 9.8 newtons per kilogram" },
       { q: "What keeps the Moon going round the Earth?", a: "Gravity" }]),

    friction: U("friction", "5 · Friction and Air Resistance", "🧊", "Grades 2 to 6",
      "Friction is the force that shows up whenever two surfaces rub. It is the reason nothing on Earth keeps sliding forever, and it is why you can walk instead of skating everywhere.",
      ["Friction acts against the direction something is moving. It always tries to slow things down.",
       "Rough surfaces make more friction than smooth ones. Sandpaper more than ice.",
       "Friction turns movement energy into heat. That is why rubbing your hands warms them.",
       "Air resistance is friction with air, and it is why a parachute works and why a feather drifts.",
       "Water resistance is the same thing in water, which is why boats are pointed at the front.",
       "Friction is often useful. Brakes, shoe grips and being able to hold a pencil all need it.",
       "Oil, wheels and polished surfaces reduce friction when you would rather not have it."],
      dFriction,
      "Friction is the hidden reason children believe motion needs a constant push, because on Earth everything really does stop. Ask what would happen to a rolling ball on a floor with no friction at all, and let them reach the strange answer themselves: it would never stop. That is the doorway into Newton's first law, three units later.",
      { name: "🧊 The Slide Test", mins: 25,
        materials: ["A wooden board, a tray or a large book to use as a ramp",
                    "A small toy car or a coin", "Different surfaces: a towel, tin foil, paper, a tea towel",
                    "A tape measure", "Paper", "A pencil"],
        solo: { band: "Grades 3 and up, on your own",
          steps: ["Prop the board up at a fixed angle. Keep the angle the same all the way through.",
                  "Let the car go from the same starting line every time. That is called a fair test.",
                  "Measure how far it travels past the bottom of the ramp on a bare floor.",
                  "Now cover the run with a towel, then foil, then paper, and measure each one.",
                  "Put the surfaces in order from most friction to least, using your distances.",
                  "Write down what you kept the same and what you changed. That is the difference between a variable and a control."] },
        together: { band: "Kindergarten to Grade 2, with a grown-up",
          steps: ["A grown-up props up a tray as a slide.",
                  "Send a toy car down onto the bare floor and mark where it stops.",
                  "Lay a towel down and try again. Which went further?",
                  "Rub your hands together fast for ten seconds and feel them get warm. That is friction too.",
                  "Look for grippy things around the house: shoe soles, rubber mats, the handle of a spoon."] } },
      [{ q: "What is friction?", a: "The force when two surfaces rub" },
       { q: "Which way does friction act?", a: "Against the movement" },
       { q: "Which has more friction, ice or carpet?", a: "Carpet" },
       { q: "What does friction turn movement into?", a: "Heat" },
       { q: "What is air resistance?", a: "Friction with the air" },
       { q: "Why does a parachute slow you down?", a: "Air resistance pushes up on it" },
       { q: "Name a time friction is useful.", a: "Brakes, or shoe grip" },
       { q: "How can you reduce friction?", a: "Oil, wheels or a smoother surface" }]),

    machines: U("machines", "6 · Simple Machines", "⚙️", "Grades 3 to 8",
      "A simple machine does not create energy. It changes a big force over a short distance into a small force over a long one, which is a trade rather than a saving, and it is one of the oldest ideas in engineering.",
      ["Work in physics has an exact meaning: work = force x distance. It is measured in joules.",
       "A machine lets you use a smaller force, but you have to apply it over a greater distance. The work comes out the same.",
       "A lever turns on a pivot called a fulcrum. Move the fulcrum and you change the trade.",
       "A ramp lets you raise something with less force by pushing it further. A screw is a ramp wrapped round a pole, and a wedge is a ramp you drive into things.",
       "A pulley changes the direction you pull. More pulleys share the load and make it easier still.",
       "A wheel and axle turns a small turn at the edge into a strong twist at the middle, or the other way round.",
       "Power is how fast you do the work: power = work divided by time, measured in watts.",
       "No machine gives you energy for free. Anything claiming to is wrong, and people have been claiming it for centuries."],
      dMachines,
      "The trade is the whole lesson, and children usually assume a machine reduces the total effort. Walk up a steep staircase and then up a long gentle ramp to the same height: the ramp feels easier and takes longer. Same you, same height, same work. That is why perpetual motion machines cannot work, which is a satisfying thing for a child to be able to argue.",
      { name: "⚙️ Lift a Book Three Ways", mins: 35,
        materials: ["A heavy book", "A ruler or a strong stick for the lever",
                    "Two pencils, one to write with and one to use as the pivot",
                    "A plank, board or stiff card for the ramp", "String", "A tape measure", "Paper"],
        safety: "Keep fingers clear of the book landing zone, and a grown-up sets up anything heavy.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Lift the book straight up onto a chair. Measure the height in metres.",
                  "Now build a lever: the ruler across the pencil, book on one end, press the other.",
                  "Move the pencil closer to the book and try again. Which is easier?",
                  "Build a ramp to the same chair and slide the book up. Measure the ramp's length.",
                  "Notice that the ramp needs less force but a longer distance. That is the trade.",
                  "If you have a spring balance or the elastic band meter from unit 2, measure the force each way and multiply by the distance. The answers should be close."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["Try lifting a heavy book straight up with one finger. Hard.",
                  "The grown-up sets up a ruler on a pencil as a see-saw. Try lifting the book by pressing the other end.",
                  "Move the pencil nearer the book and try again. Easier or harder?",
                  "Slide the book up a sloped board instead. Which way felt easiest?",
                  "Go on a hunt for levers around the house: scissors, a spoon, a door handle, your own arm."] } },
      [{ q: "What is the formula for work?", a: "Force x distance" },
       { q: "What unit is work measured in?", a: "Joules" },
       { q: "What does a simple machine trade?", a: "Less force for more distance" },
       { q: "What is the pivot of a lever called?", a: "The fulcrum" },
       { q: "What simple machine is a screw?", a: "A ramp wrapped round a pole" },
       { q: "What does a pulley change?", a: "The direction you pull" },
       { q: "What is power?", a: "Work divided by time" },
       { q: "Can a machine give you energy for free?", a: "No" }]),

    energy: U("energy", "7 · Energy", "⚡", "Grades 3 to 8",
      "Energy is the thing that lets something happen. It comes in several forms, it moves between them constantly, and the total never changes. That last part is one of the deepest rules in all of science.",
      ["Energy is measured in joules, the same unit as work.",
       "The forms worth knowing are movement, heat, light, sound, electrical, chemical and stored energy.",
       "Energy is never created or destroyed. It only changes form. That is called conservation of energy.",
       "So energy is never really used up. When people say wasted energy they nearly always mean it turned into heat.",
       "Stored energy is energy waiting to happen: a stretched elastic band, a book on a shelf, a charged battery.",
       "Movement energy depends on speed twice over. Double the speed and you get four times the energy, which is why fast crashes are so much worse than slow ones.",
       "A chain of changes is easy to trace: food is chemical, your muscles make it movement, friction makes it heat.",
       "The Sun is where almost all of Earth's energy came from originally, including the energy in your dinner."],
      dEnergy,
      "The four-times rule is the one with real-world weight. Movement energy uses the speed twice, so a car at 40 mph carries four times the energy of one at 20, not double. It is worth saying out loud to a child who will one day be a passenger and later a driver, and it is a nice example of a formula that changes behaviour.",
      { name: "⚡ Energy Chain Hunt", mins: 25,
        materials: ["Paper", "A pencil", "Coloured pencils", "An elastic band",
                    "A ball that bounces", "A torch if you have one"],
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Drop a ball and watch it bounce lower each time. Where did the missing energy go?",
                  "Write the chain out: stored at the top, movement on the way down, then heat and sound at the bounce.",
                  "Stretch an elastic band and let it go across the room. Write that chain too.",
                  "Find five more everyday things and write the energy chain for each: a torch, a kettle, a bicycle, a plant, yourself.",
                  "Trace each chain back as far as you can. Most of them end at the Sun.",
                  "Draw one of them as a comic strip with arrows between the forms."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Bounce a ball together and count how many bounces before it stops.",
                  "Ask where the bounce went. Feel the ball, and listen to the sound it made.",
                  "Wind up a toy or stretch an elastic band. Where is the energy while it is waiting?",
                  "Name the energy in three things in the room: a lamp, a radiator, a person.",
                  "Trace your own energy back to breakfast, and breakfast back to the Sun."] } },
      [{ q: "What unit is energy measured in?", a: "Joules" },
       { q: "Can energy be destroyed?", a: "No" },
       { q: "What is that rule called?", a: "Conservation of energy" },
       { q: "What does wasted energy usually become?", a: "Heat" },
       { q: "Name a kind of stored energy.", a: "A stretched elastic band, or a book on a shelf" },
       { q: "Double the speed and movement energy goes up how much?", a: "Four times" },
       { q: "Where does most of Earth's energy come from?", a: "The Sun" },
       { q: "What kind of energy is in food?", a: "Chemical" }]),

    heat: U("heat", "8 · Heat and Temperature", "🌡️", "Grades 3 to 8",
      "Heat and temperature sound like the same thing and are not. Temperature is how hot something is. Heat is energy on the move, and it only ever moves one way.",
      ["Temperature measures how hot something is. Heat is the energy that flows because of a temperature difference.",
       "A bath at 40 degrees holds far more heat energy than a cup of tea at 90, because there is so much more of it.",
       "Heat always flows from hotter to colder. Never the other way round on its own.",
       "So cold never gets in. Heat gets out. Almost every sentence about cold getting in is backwards.",
       "Heat travels three ways: conduction through solids, convection in liquids and gases, and radiation across empty space.",
       "Metals conduct heat well, which is why a metal spoon in soup gets hot and a wooden one does not.",
       "That is also why metal feels colder than wood at the same temperature. It is pulling heat out of your hand faster.",
       "The coldest anything can get is about minus 273 degrees Celsius, called absolute zero. Nothing can go below it."],
      dHeat,
      "The metal-feels-colder demonstration is worth doing because it separates temperature from what your skin reports. Put a metal spoon and a wooden one in the same room for an hour, then have your child hold both. They are the same temperature and one feels much colder. Your skin measures how fast heat leaves it, not how hot something is.",
      { name: "🌡️ Which Cup Keeps the Heat?", mins: 35,
        materials: ["Three identical cups or jars", "Warm water from the tap, not boiling",
                    "A thermometer if you have one", "A towel, tin foil and a lid to insulate with",
                    "A timer", "Paper", "A pencil"],
        safety: "Use warm tap water only. A grown-up handles anything hotter, and never use boiling water for this.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Fill all three cups with the same amount of warm water at the same time.",
                  "Leave one bare, wrap one in a towel, and cover one with foil and a lid.",
                  "Record the starting temperature, or just note that they all started the same.",
                  "Check every five minutes for half an hour and write down what you find.",
                  "Draw a graph of temperature against time with all three lines on it.",
                  "Write which kept its heat best and, importantly, describe what happened as heat LEAVING rather than cold arriving."] },
        together: { band: "Grades 1 to 3, with a grown-up",
          steps: ["A grown-up fills two cups with the same warm water.",
                  "Wrap one in a towel and leave the other bare.",
                  "Wait fifteen minutes, then feel both with a finger on the outside.",
                  "Ask which is still warmer and why the towel helped.",
                  "Hold a metal spoon and a wooden one from the same drawer. They are the same temperature, so why does one feel colder?"] } },
      [{ q: "What is temperature?", a: "How hot something is" },
       { q: "What is heat?", a: "Energy moving because of a temperature difference" },
       { q: "Which way does heat flow?", a: "From hotter to colder" },
       { q: "Does cold get into a house?", a: "No, heat gets out" },
       { q: "Name the three ways heat travels.", a: "Conduction, convection and radiation" },
       { q: "Why does a metal spoon in soup get hot?", a: "Metal conducts heat well" },
       { q: "Why does metal feel colder than wood?", a: "It takes heat from your hand faster" },
       { q: "What is the coldest possible temperature called?", a: "Absolute zero" }]),

    light: U("light", "9 · Light", "💡", "Grades 3 to 8",
      "Light is how almost everything you know about the world got into your head. It travels in straight lines, it bounces, it bends, and it is the fastest thing there is.",
      ["Light travels in straight lines until something bounces it or bends it.",
       "You see an object because light bounces off it and into your eye. Your eyes do not send anything out.",
       "A shadow is where an object has blocked the straight path of the light.",
       "Reflection is light bouncing. A mirror is smooth enough to keep the picture intact.",
       "Refraction is light bending as it moves from one material into another. It is why a straw looks broken in a glass of water.",
       "White light is all the colours mixed. A prism or a raindrop splits it into a spectrum, which is what a rainbow is.",
       "An object looks red because it reflects red light and soaks up the rest.",
       "Light travels at about 300000 kilometres a second, so sunlight takes about 8 minutes and 20 seconds to reach us."],
      dLight,
      "A surprising number of children, and adults, quietly believe that seeing involves something leaving the eye. It is worth asking directly: what would happen in a completely dark room, with your eyes wide open, if nothing came off the walls? Nothing. That closes the loop and makes the direction of light obvious.",
      { name: "💡 Bend, Bounce and Split", mins: 30,
        materials: ["A torch", "A glass of water", "A straw", "A small mirror",
                    "A white wall or a sheet of white paper", "A shallow tray of water",
                    "Paper", "A pencil"],
        safety: "Never shine a torch into anybody's eyes, and never look at the Sun with or without anything.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Stand the straw in a glass of water and look from the side. Draw what you see. That bend is refraction.",
                  "In a dim room, shine the torch at a mirror and find where the beam lands. Move the mirror and predict where it will go next.",
                  "Test your prediction. The angle it arrives at matches the angle it leaves at.",
                  "Put the mirror in a shallow tray of water at an angle and shine the torch at it. Look for a spectrum on the wall.",
                  "Make shadows with your hand and see how the shape changes as you move nearer the torch.",
                  "Write down which of the three you saw was reflection, which was refraction and which was splitting."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["Put a straw in a glass of water and look from the side. It looks broken. It is not.",
                  "Make shadow shapes on a wall with a torch. Whose hand makes the biggest shadow, and how?",
                  "Bounce the torch beam off a mirror onto the ceiling.",
                  "Ask: can you see anything in a completely dark room? Try it for ten seconds.",
                  "Look for rainbows in a puddle with oil on it, or through a glass of water in sunlight."] } },
      [{ q: "How does light travel?", a: "In straight lines" },
       { q: "Why can you see a chair?", a: "Light bounces off it into your eye" },
       { q: "What is a shadow?", a: "Where something blocked the light" },
       { q: "What is light bouncing called?", a: "Reflection" },
       { q: "What is light bending called?", a: "Refraction" },
       { q: "What is white light made of?", a: "All the colours mixed" },
       { q: "Why does a red apple look red?", a: "It reflects red and soaks up the rest" },
       { q: "How long does sunlight take to reach Earth?", a: "About 8 minutes" }]),

    sound: U("sound", "10 · Sound and Waves", "🔊", "Grades 3 to 8",
      "Sound is a wave of squeezes and stretches travelling through stuff. That means it needs stuff to travel through, which has one famous consequence: space is silent.",
      ["Sound starts with something vibrating and travels as a wave through a material.",
       "It needs a medium. There is no sound in space at all, because there is nothing to carry it.",
       "Sound travels about 343 metres a second in air at room temperature.",
       "It travels faster in water, and faster still in solids, because the particles are closer together.",
       "Light is roughly a million times faster than sound, which is why you see lightning first and can count the gap.",
       "Pitch comes from frequency: more vibrations a second means a higher note.",
       "Loudness comes from amplitude: a bigger vibration means a louder sound.",
       "An echo is sound reflecting off a hard surface and coming back to you."],
      dSound,
      "Counting between the lightning and the thunder is the demonstration worth waiting for a storm to do. Roughly three seconds per kilometre, because sound covers about 343 metres each second while the light arrives effectively instantly. It turns a frightening thing into an interesting one, which is a good trade at any age.",
      { name: "🔊 String Telephone and the Thunder Count", mins: 30,
        materials: ["Two paper or plastic cups", "About 10 metres of string",
                    "A pencil to make the holes", "A ruler", "Paper", "A pencil"],
        safety: "A grown-up makes the holes in the cups. Do not go outside during a storm to count thunder, do it from a window.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Make a small hole in the base of each cup and thread the string through, knotting inside.",
                  "Stand far enough apart that the string is tight and does not touch anything.",
                  "Take turns talking and listening. Then touch the string in the middle and try again.",
                  "Write down what happened when you damped the string, and explain it using the word vibration.",
                  "Try a wet string, a thicker string, and a slack string. Which carries sound best?",
                  "Next thunderstorm, count the seconds between the flash and the bang and divide by 3 for the distance in kilometres."] },
        together: { band: "Kindergarten to Grade 3, with a grown-up",
          steps: ["A grown-up makes the cup telephone.",
                  "Walk apart until the string is tight and whisper to each other.",
                  "Let the string go slack and try again. What happened?",
                  "Feel the string gently while the other person is talking. You can feel the sound.",
                  "Put an ear on the table while somebody taps the other end. Sound goes through solids too."] } },
      [{ q: "What does sound need to travel?", a: "Something to travel through" },
       { q: "Is there sound in space?", a: "No" },
       { q: "Roughly how fast is sound in air?", a: "About 343 metres a second" },
       { q: "Does sound go faster in water or air?", a: "Water" },
       { q: "Why do you see lightning before hearing thunder?", a: "Light is much faster" },
       { q: "What makes a sound higher?", a: "A higher frequency" },
       { q: "What makes a sound louder?", a: "A bigger vibration" },
       { q: "What is an echo?", a: "Sound reflecting back to you" }]),

    electricity: U("electricity", "11 · Electricity and Magnetism", "🔌", "Grades 4 to 9",
      "Electricity and magnetism look like two subjects and are really one. A moving electric charge makes a magnetic field, and a moving magnet makes electricity, which is how almost all the world's power is generated.",
      ["An electric current is a flow of charge, and it only flows round a complete loop called a circuit.",
       "Break the loop anywhere, with a switch or a gap, and everything in it stops at once.",
       "Current is measured in amps, the push behind it in volts, and how much a component resists it in ohms.",
       "Ohm's law ties them together: voltage = current x resistance.",
       "Conductors let current through, like copper and most metals. Insulators do not, like plastic, rubber and glass.",
       "Current is not used up going round a circuit. The same amount comes back as went out. What gets used is the energy it carries.",
       "Magnets attract only some metals: iron, steel, nickel and cobalt. They do not attract aluminium, copper, gold or silver.",
       "Every magnet has a north and a south pole. Opposite poles attract and like poles push apart.",
       "Electricity from a socket is dangerous and is never part of an experiment. Batteries of 1.5 volts are the ones to learn with."],
      dElectric,
      "The magnet test is worth doing before saying anything, because nearly everybody predicts that a magnet picks up all metals. Hand your child a magnet and a coin, a key, a fork, some foil and a paperclip and let them sort. The surprise is what makes it stick, and it is a good moment to say that a tidy sounding rule can simply be wrong.",
      { name: "🔌 Circuit and Magnet Sort", mins: 35,
        materials: ["A 1.5 volt battery", "A small torch bulb or an LED", "Two pieces of insulated wire",
                    "Sticky tape", "A magnet", "A pile of things to test: coin, paperclip, foil, key, spoon, eraser",
                    "Paper", "A pencil"],
        safety: "Only ever use a battery. Never, ever use a wall socket, and never put anything into one. If a wire or battery feels warm, disconnect it straight away.",
        solo: { band: "Grades 4 and up, on your own",
          steps: ["Tape one wire to the flat end of the battery and touch the other end to the bulb's base.",
                  "Complete the loop with the second wire from the bulb's side back to the battery's bump.",
                  "When it lights, break the loop somewhere and watch it go out. That is a switch.",
                  "Test which objects can complete the loop when you put them in the gap. Sort them into conductors and insulators.",
                  "Now take the magnet and predict, for each object, whether it will be attracted. Write predictions BEFORE testing.",
                  "Test them and count how many predictions you got right. Most people are surprised by the aluminium foil and the copper coin."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["A grown-up sets up the battery, wire and bulb and shows it lighting.",
                  "Let your child break the circuit with a finger gap and watch the light go out.",
                  "Now the magnet. Guess first for each object, then test.",
                  "Sort everything into two piles: the magnet likes it, the magnet ignores it.",
                  "Look at the ignored pile. Some of it is metal. That is the surprise, and it is the lesson."] } },
      [{ q: "What must a circuit be for current to flow?", a: "A complete loop" },
       { q: "What is current measured in?", a: "Amps" },
       { q: "What is Ohm's law?", a: "Voltage = current x resistance" },
       { q: "Name a good conductor.", a: "Copper, or any metal" },
       { q: "Name an insulator.", a: "Plastic, or rubber" },
       { q: "Does a magnet attract all metals?", a: "No" },
       { q: "Name a metal a magnet does attract.", a: "Iron, or nickel, or cobalt" },
       { q: "What happens when two north poles meet?", a: "They push apart" }]),

    laws: U("laws", "12 · Newton's Laws and Beyond", "🍎", "Grades 5 to 12",
      "In 1687 Isaac Newton wrote down three rules that between them describe the motion of everything you are ever likely to see. They held up for more than two hundred years before anybody found their edges.",
      ["First law: an object keeps doing exactly what it was doing, still or moving, unless a force acts on it.",
       "That is why a moving thing does not need a constant push. It needs one to start, and friction is why things seem to need one on Earth.",
       "The tendency to keep going is called inertia, and more mass means more inertia.",
       "Second law: force = mass x acceleration. Push harder and the change is bigger. Push the same on something heavier and the change is smaller.",
       "Third law: for every force there is an equal and opposite force.",
       "The pair in the third law acts on two DIFFERENT objects, which is exactly why they do not cancel each other out.",
       "You walk by pushing the ground backwards, so the ground pushes you forwards. A rocket works the same way with its exhaust.",
       "Newton's laws are not the last word. Near the speed of light you need Einstein's relativity, and for atoms you need quantum physics. Newton is still right for everything in your house."],
      dNewton,
      "The third law is the one that gets mangled, usually into a belief that the two forces cancel out and nothing should ever move. The fix is to insist on naming both objects every time: the ball pushes the bat, the bat pushes the ball. Two objects, two forces, no cancelling. Ask which object each force is acting on and the confusion disappears.",
      { name: "🍎 Balloon Rocket", mins: 30,
        materials: ["A long balloon", "A drinking straw", "About 5 metres of string",
                    "Sticky tape", "Two chairs or door handles to tie the string to",
                    "A tape measure", "Paper", "A pencil"],
        safety: "Uninflated balloons are a choking risk for small children, so a grown-up handles them. Pop the balloon away from faces.",
        solo: { band: "Grades 5 and up, on your own",
          steps: ["Thread the string through the straw and tie it tightly between two chairs.",
                  "Blow the balloon up, hold the neck shut, and tape it to the straw so the neck points backwards.",
                  "Let go and measure how far it travels.",
                  "Name the third law pair out loud: the balloon pushes air backwards, the air pushes the balloon forwards.",
                  "Try it with a half full balloon, and with the string sloping upwards. Record the distances.",
                  "Tape a small coin to the balloon to add mass and try again. Explain what happened using force = mass x acceleration."] },
        together: { band: "Grades 2 to 4, with a grown-up",
          steps: ["A grown-up sets up the string and straw and blows up the balloon.",
                  "Count down together and let go. Watch it fly.",
                  "Ask which way the air came out, and which way the balloon went.",
                  "Try sitting on a wheeled chair and pushing off a wall. Which way did you go?",
                  "Push a wall while standing still. Can you feel it pushing back?"] } },
      [{ q: "What does Newton's first law say?", a: "Motion does not change without a force" },
       { q: "Does a moving object need a constant push?", a: "No" },
       { q: "What is the tendency to keep going called?", a: "Inertia" },
       { q: "What is Newton's second law?", a: "Force = mass x acceleration" },
       { q: "What is Newton's third law?", a: "Every force has an equal and opposite force" },
       { q: "Why do the third law forces not cancel?", a: "They act on two different objects" },
       { q: "How do you walk forwards?", a: "By pushing the ground backwards" },
       { q: "Where do Newton's laws stop working?", a: "Near the speed of light, and for atoms" }])
  };
})();
