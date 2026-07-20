// BrightSprouts Academy — Physics subject for Grades 9–12 (a progressive physical-science course).
// forces & motion → energy, work & machines → waves, light & sound → electricity & magnetism.
// Verifiable question banks feed the standard worksheet generator.
(function () {
  if (typeof LESSONS === "undefined") return;
  var PHYSICS = {
    9: {
      title: "Forces & Motion", emoji: "🏃",
      intro: "Why do things start, stop and speed up? Physics begins with forces — the pushes and pulls that make our whole world move.",
      learn: [
        "A force is a push or a pull. Forces can start motion, stop it, speed it up, slow it down, or change its direction.",
        "Gravity is a force that pulls objects toward each other; on Earth it pulls everything down toward the ground.",
        "Friction is a force that slows moving things down when two surfaces rub together.",
        "Speed is how fast something moves (distance ÷ time); velocity is speed in a certain direction.",
        "Isaac Newton's first law: an object stays still, or keeps moving in a straight line, unless a force acts on it (inertia)."
      ],
      activity: "🎳 Force Test: Roll a ball across a carpet, then across a smooth floor. Which stops sooner? That's friction — there's more of it on the carpet!",
      questions: [
        { q: "What is a force?", a: "A push or a pull" },
        { q: "Name two things a force can do to an object.", a: "Start it, stop it, speed it up, slow it down, or change its direction" },
        { q: "What force pulls objects toward the ground?", a: "Gravity" },
        { q: "What force slows things down when surfaces rub together?", a: "Friction" },
        { q: "Speed is distance divided by ____.", a: "Time" },
        { q: "Speed in a certain direction is called ____.", a: "Velocity" },
        { q: "Whose laws of motion explain how forces work?", a: "Isaac Newton" },
        { q: "An object stays still or keeps moving unless a ____ acts on it.", a: "Force" },
        { q: "The tendency of an object to keep doing what it's doing is ____.", a: "Inertia" },
        { q: "If you push a heavy box and it won't budge, what force pushes back?", a: "Friction" },
        { q: "Does gravity pull things up or down on Earth?", a: "Down (toward the ground)" },
        { q: "A car speeding up shows a force changing its ____.", a: "Speed (motion)" }
      ]
    },
    10: {
      title: "Energy, Work & Simple Machines", emoji: "⚙️",
      intro: "Nothing moves or changes without energy. Let's discover its many forms — and the clever machines that make hard work easy.",
      learn: [
        "Energy is the ability to do work (to move or change things). It comes in forms like heat, light, sound, motion and electrical.",
        "Kinetic energy is the energy of MOVING things; potential energy is stored energy, like a ball at the top of a hill.",
        "Energy cannot be created or destroyed — it only changes form. This is the law of conservation of energy.",
        "In science, work is done when a force moves something: Work = force × distance.",
        "Simple machines make work easier: the lever, wheel and axle, pulley, ramp (inclined plane), wedge and screw."
      ],
      activity: "⚙️ Ramp It Up: Try lifting a heavy book straight up, then slide it up a board leaning against a chair. The ramp — an inclined plane — makes the same work feel much easier!",
      questions: [
        { q: "What is energy?", a: "The ability to do work (to move or change things)" },
        { q: "Energy of a MOVING object is ____ energy.", a: "Kinetic" },
        { q: "Stored energy (like a ball on a hill) is ____ energy.", a: "Potential" },
        { q: "Energy cannot be created or destroyed — it only ____.", a: "Changes form" },
        { q: "This rule is called the conservation of ____.", a: "Energy" },
        { q: "In science, work is done when a force ____ something.", a: "Moves it" },
        { q: "Work equals force times ____.", a: "Distance" },
        { q: "Name three simple machines.", a: "Any three of: lever, wheel and axle, pulley, ramp, wedge, screw" },
        { q: "A ramp is also called an inclined ____.", a: "Plane" },
        { q: "A see-saw is an example of which simple machine?", a: "A lever" },
        { q: "As you slide down a slide, potential energy turns into ____ energy.", a: "Kinetic" },
        { q: "Name one form of energy.", a: "Heat, light, sound, motion, or electrical" }
      ]
    },
    11: {
      title: "Waves, Light & Sound", emoji: "🌈",
      intro: "Light lets you see and sound lets you hear — and both are waves! Let's explore how energy travels in ripples all around us.",
      learn: [
        "A wave carries energy from one place to another without carrying the material itself.",
        "Sound is a wave made by vibrations; it travels through air, water and solids — but NOT through empty space (a vacuum).",
        "Light is also a wave, but it CAN travel through empty space — that's how sunlight crosses space to reach Earth.",
        "Light bounces off mirrors (reflection) and bends as it passes into water or glass (refraction).",
        "White light is made of all the colours of the rainbow; a prism splits it into that spectrum."
      ],
      activity: "🌈 Make a Rainbow: On a sunny day, spray a fine mist of water with the Sun behind you. The droplets bend and split sunlight into a rainbow — just like a prism!",
      questions: [
        { q: "What does a wave carry from place to place?", a: "Energy" },
        { q: "Sound is a wave made by ____.", a: "Vibrations" },
        { q: "Can sound travel through empty space (a vacuum)?", a: "No" },
        { q: "Can light travel through empty space?", a: "Yes — that's how sunlight reaches us" },
        { q: "When light bounces off a mirror, that is ____.", a: "Reflection" },
        { q: "When light bends passing into water or glass, that is ____.", a: "Refraction" },
        { q: "White light contains all the ____ of the rainbow.", a: "Colours" },
        { q: "What splits white light into a spectrum of colours?", a: "A prism" },
        { q: "Sound travels through air, water and ____.", a: "Solids" },
        { q: "Which travels faster: light or sound?", a: "Light" },
        { q: "You see lightning before you hear thunder because light is ____ than sound.", a: "Faster" },
        { q: "Light and sound both travel as ____.", a: "Waves" }
      ]
    },
    12: {
      title: "Electricity & Magnetism", emoji: "⚡",
      intro: "Flip a switch and light floods the room. Behind that everyday magic are two invisible partners — electricity and magnetism.",
      learn: [
        "Electricity is the flow of tiny charged particles called electrons. A flow of charge is an electric current.",
        "A circuit is a complete loop that lets current flow — usually from a battery, through wires, to a device like a bulb.",
        "Voltage is the 'push' that drives the current; a switch opens the loop (off) or closes it (on).",
        "Magnets have two poles, north and south. Like poles push apart (repel); opposite poles pull together (attract).",
        "Electricity and magnetism are linked: moving electricity makes magnetism, and moving magnets make electricity — that's how motors and generators work."
      ],
      activity: "⚡ Simple Circuit: With an adult, connect a battery to a small bulb with two wires so it lights up. Break the loop and it goes dark — a circuit must be a complete path!",
      questions: [
        { q: "Electricity is the flow of tiny charged particles called ____.", a: "Electrons" },
        { q: "A flow of electric charge is called a ____.", a: "Current" },
        { q: "A complete loop that lets current flow is a ____.", a: "Circuit" },
        { q: "What usually provides the power in a simple circuit?", a: "A battery" },
        { q: "The 'push' that drives current around a circuit is ____.", a: "Voltage" },
        { q: "What part opens or closes a circuit to turn it on or off?", a: "A switch" },
        { q: "How many poles does a magnet have?", a: "Two (north and south)" },
        { q: "Do LIKE poles of magnets attract or repel?", a: "Repel (push apart)" },
        { q: "Do OPPOSITE poles attract or repel?", a: "Attract (pull together)" },
        { q: "Moving magnets can create ____.", a: "Electricity" },
        { q: "A device that uses electricity to spin and do work is a ____.", a: "Motor" },
        { q: "If a circuit is broken (not a complete loop), does current flow?", a: "No" }
      ]
    }
  };

  for (var g = 9; g <= 12; g++) {
    if (LESSONS[g] && PHYSICS[g]) LESSONS[g].physics = PHYSICS[g];
  }
})();
