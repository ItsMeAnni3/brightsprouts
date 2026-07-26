// BrightSprouts Academy — Physical Science category (LESSONS[27]): matter, forces, energy and
// electricity/magnetism for grade-schoolers, K-12 appropriate. Distinct from the Grade 9+
// Physics/Chemistry subjects — this is the earlier, hands-on foundation, same role Geology plays
// for earth science. Facts checked against Britannica, NASA, EIA/Energy Kids, and standard physics
// curricula (six simple machines, Newton's three laws, four states of matter, conservation of
// energy, and how electromagnets work).
(function () {
  if (typeof LESSONS === "undefined") return;
  var LB = 'font-family="Fredoka, system-ui, sans-serif" font-size="12" fill="#2d2a4a"';

  // A tiny auto-turning 3D atom model — three electron rings tilted in 3D space, each spinning
  // at its own speed, held together in one wobbling scene (see .phys3d in styles.css).
  var ATOM_3D = '<div class="phys3d no-print" aria-hidden="true"><div class="phys3d-stage"><div class="phys3d-scene">'
    + '<div class="phys3d-nucleus"></div>'
    + '<div class="phys3d-ring phys3d-r1"><div class="phys3d-spin"><div class="phys3d-e"></div></div></div>'
    + '<div class="phys3d-ring phys3d-r2"><div class="phys3d-spin"><div class="phys3d-e"></div></div></div>'
    + '<div class="phys3d-ring phys3d-r3"><div class="phys3d-spin"><div class="phys3d-e"></div></div></div>'
    + '</div></div><p class="phys3d-cap">⚛️ Electrons zipping around the nucleus!</p></div>';

  LESSONS[27] = {
    matter: {
      title: "Matter & Atoms", emoji: "🧊",
      intro: "Everything around you — this page, the air you breathe, even you — is made of matter. Let's zoom into atoms and see how matter changes state.",
      learn: [
        "Matter is anything that takes up space and has mass — solids, liquids and gases are all matter.",
        "Solids keep their own shape and volume. Liquids keep their volume but take the shape of their container. Gases spread out to fill any container they're in.",
        "Plasma is a fourth state of matter — an electrically charged gas found in lightning, neon signs and stars. It's actually the most common state of matter in the whole universe!",
        "All matter is made of tiny building blocks called atoms, which join together to form molecules — like two hydrogen atoms and one oxygen atom joining to make water.",
        "Heating or cooling matter can change its state: ice (solid) melts into water (liquid), and water boils into water vapor (gas). This is a physical change — it's still the same substance."
      ],
      activity: "🧊 Melting Race: Put an ice cube in the sun and another in the shade. Time how long each takes to melt completely. Which state change happened faster, and why?",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<rect x="20" y="20" width="90" height="90" rx="10" fill="#eaf2ff"/><rect x="125" y="20" width="90" height="90" rx="10" fill="#eaf2ff"/><rect x="230" y="20" width="90" height="90" rx="10" fill="#eaf2ff"/>'
        + '<g fill="#4d96ff">'
        + '<circle cx="35" cy="35" r="4"/><circle cx="55" cy="35" r="4"/><circle cx="75" cy="35" r="4"/><circle cx="95" cy="35" r="4"/>'
        + '<circle cx="35" cy="55" r="4"/><circle cx="55" cy="55" r="4"/><circle cx="75" cy="55" r="4"/><circle cx="95" cy="55" r="4"/>'
        + '<circle cx="35" cy="75" r="4"/><circle cx="55" cy="75" r="4"/><circle cx="75" cy="75" r="4"/><circle cx="95" cy="75" r="4"/>'
        + '<circle cx="35" cy="95" r="4"/><circle cx="55" cy="95" r="4"/><circle cx="75" cy="95" r="4"/><circle cx="95" cy="95" r="4"/>'
        + '</g>'
        + '<g fill="#4d96ff">'
        + '<circle cx="140" cy="40" r="4"/><circle cx="162" cy="36" r="4"/><circle cx="182" cy="46" r="4"/><circle cx="199" cy="40" r="4"/>'
        + '<circle cx="136" cy="62" r="4"/><circle cx="158" cy="66" r="4"/><circle cx="178" cy="58" r="4"/><circle cx="197" cy="64" r="4"/>'
        + '<circle cx="142" cy="84" r="4"/><circle cx="162" cy="80" r="4"/><circle cx="182" cy="88" r="4"/><circle cx="200" cy="82" r="4"/>'
        + '<circle cx="150" cy="102" r="4"/><circle cx="175" cy="100" r="4"/>'
        + '</g>'
        + '<g fill="#4d96ff">'
        + '<circle cx="245" cy="34" r="4"/><circle cx="300" cy="30" r="4"/><circle cx="255" cy="70" r="4"/>'
        + '<circle cx="300" cy="90" r="4"/><circle cx="270" cy="100" r="4"/><circle cx="240" cy="95" r="4"/><circle cx="295" cy="55" r="4"/>'
        + '</g>'
        + '<g ' + LB + ' text-anchor="middle">'
        + '<text x="65" y="132">Solid</text><text x="170" y="132">Liquid</text><text x="275" y="132">Gas</text>'
        + '</g></svg>'
        + ATOM_3D,
      questions: [
        { q: "Anything that takes up space and has mass is called ____.", a: "Matter" },
        { q: "Which state of matter keeps both its shape and volume?", a: "Solid" },
        { q: "Which state of matter takes the shape of its container but keeps its volume?", a: "Liquid" },
        { q: "Which state of matter spreads out to fill its whole container?", a: "Gas" },
        { q: "Name the fourth state of matter, found in lightning and stars.", a: "Plasma" },
        { q: "The tiny building blocks that all matter is made of are ____.", a: "Atoms" },
        { q: "Two or more atoms joined together form a ____.", a: "Molecule" },
        { q: "Water is made of two hydrogen atoms and one ____ atom.", a: "Oxygen" },
        { q: "Melting is a change from solid to ____.", a: "Liquid" },
        { q: "Boiling is a change from liquid to ____.", a: "Gas" },
        { q: "Is melting ice a physical change or a chemical change?", a: "A physical change" },
        { q: "Which state of matter is most common in the universe?", a: "Plasma" }
      ]
    },
    forces: {
      title: "Forces & Motion", emoji: "🎢",
      intro: "Pushes and pulls make the whole world move! Let's explore the forces that start, stop and steer everything around you.",
      learn: [
        "A force is a push or a pull. Forces can start, stop, speed up, slow down, or change the direction of motion.",
        "Newton's first law: an object at rest stays at rest, and an object in motion keeps moving at the same speed and direction, unless a force acts on it. This is called inertia.",
        "Newton's second law: a bigger force makes an object speed up more, and heavier objects need more force to speed up by the same amount.",
        "Newton's third law: for every action force, there's an equal and opposite reaction force — like a rocket pushing gas backward while the gas pushes the rocket forward.",
        "Gravity pulls objects toward each other; friction is a force between touching surfaces that slows motion down. Simple machines — like the lever, wheel and axle, pulley, inclined plane, wedge and screw — help us do work using less force."
      ],
      activity: "🎢 Marble Ramp: Prop up a book with a ruler to make a ramp. Roll a marble down onto carpet, then onto a smooth floor. Which surface has more friction — where does the marble travel farther?",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<g><path d="M30 96 L150 96" stroke="#8a7566" stroke-width="10" stroke-linecap="round"/><path d="M78 96 L98 118 L118 96 Z" fill="#6a668c"/>'
        + '<path d="M40 70 L40 92" stroke="#e63946" stroke-width="3" marker-end="url(#fA1)"/><rect x="128" y="66" width="24" height="24" rx="4" fill="#7fae5a"/>'
        + '<path d="M140 62 L140 40" stroke="#2ec4b6" stroke-width="3" marker-end="url(#fA2)"/></g>'
        + '<defs><marker id="fA1" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 0 L8 0 L4 8 Z" fill="#e63946"/></marker>'
        + '<marker id="fA2" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 8 L8 8 L4 0 Z" fill="#2ec4b6"/></marker></defs>'
        + '<g ' + LB + ' text-anchor="middle"><text x="90" y="140">Lever (push down, load lifts)</text></g>'
        + '<g><path d="M210 138 L210 60 L320 138 Z" fill="#d9b46a"/><rect x="230" y="94" width="20" height="20" rx="3" fill="#7fae5a" transform="rotate(-27 240 104)"/>'
        + '<path d="M255 88 L280 68" stroke="#4d96ff" stroke-width="3" marker-end="url(#fA3)"/></g>'
        + '<defs><marker id="fA3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#4d96ff"/></marker></defs>'
        + '<g ' + LB + ' text-anchor="middle"><text x="250" y="150">Inclined plane</text></g></svg>',
      questions: [
        { q: "A push or a pull is called a ____.", a: "Force" },
        { q: "An object's tendency to keep doing what it's already doing is ____.", a: "Inertia" },
        { q: "Which of Newton's laws is also called the law of inertia?", a: "The first law" },
        { q: "Under Newton's second law, do heavier objects need more or less force to speed up the same amount?", a: "More force" },
        { q: "Newton's third law says every action force has an equal and opposite ____.", a: "Reaction force" },
        { q: "The force that pulls objects toward each other, like Earth pulling you down, is ____.", a: "Gravity" },
        { q: "The force between touching surfaces that slows motion down is ____.", a: "Friction" },
        { q: "A flat surface set at an angle, used to raise things with less force, is a(n) ____.", a: "Inclined plane" },
        { q: "A simple machine with a bar that pivots on a fulcrum is a ____.", a: "Lever" },
        { q: "A grooved wheel that changes the direction of a pulling force is a ____.", a: "Pulley" },
        { q: "A simple machine made of two inclined planes that splits things apart is a ____.", a: "Wedge" },
        { q: "A simple machine that fastens two objects together by turning is a ____.", a: "Screw" }
      ]
    },
    energy: {
      title: "Energy", emoji: "⚡",
      intro: "Energy makes everything happen — from a bouncing ball to a glowing lightbulb. It never disappears; it just changes from one form to another.",
      learn: [
        "Energy is the ability to do work or cause change. It comes in many forms: kinetic (motion), potential (stored), thermal (heat), light, sound and electrical energy.",
        "Kinetic energy is the energy of motion — a rolling ball has kinetic energy. Potential energy is stored energy, like a ball held up high or a stretched rubber band.",
        "As a ball falls, its stored potential energy changes into motion — kinetic energy. Energy is always changing form.",
        "The law of conservation of energy says energy can't be created or destroyed, only changed from one form into another.",
        "Heat naturally flows from warmer things to cooler things — that's why hot cocoa cools down and ice cream melts in your hand."
      ],
      activity: "⚡ Energy Hunt: Walk around your home and find 5 examples of energy changing form — like a toaster (electrical to heat) or a flashlight (electrical to light). Write down what you find!",
      diagram: '<svg viewBox="0 0 340 168"><rect width="340" height="168" rx="14" fill="#f7f4ee"/>'
        + '<path d="M20 130 Q120 20 320 130" fill="none" stroke="#8a86a8" stroke-width="3" stroke-dasharray="1 8" stroke-linecap="round"/>'
        + '<circle cx="70" cy="55" r="16" fill="#ff8a3d"/><circle cx="280" cy="112" r="16" fill="#4d96ff"/>'
        + '<g ' + LB + ' text-anchor="middle">'
        + '<text x="70" y="34">Potential energy</text>'
        + '<text x="280" y="146">Kinetic energy</text>'
        + '</g></svg>',
      questions: [
        { q: "The ability to do work or cause change is called ____.", a: "Energy" },
        { q: "The energy of motion is called ____ energy.", a: "Kinetic" },
        { q: "Stored energy, like a ball held up high, is called ____ energy.", a: "Potential" },
        { q: "As a ball falls, its potential energy changes into ____ energy.", a: "Kinetic" },
        { q: "The rule that energy can't be created or destroyed is the law of ____.", a: "Conservation of energy" },
        { q: "Energy can never be destroyed — it can only change ____.", a: "Form" },
        { q: "Heat naturally flows from warmer things to ____ things.", a: "Cooler" },
        { q: "Name a form of energy you can hear.", a: "Sound" },
        { q: "Name a form of energy given off by the sun that you can see.", a: "Light" },
        { q: "A toaster changes electrical energy into ____ energy.", a: "Heat energy" },
        { q: "A stretched rubber band stores ____ energy.", a: "Potential" },
        { q: "What kind of energy powers a lightbulb?", a: "Electrical energy" }
      ]
    },
    electromag: {
      title: "Electricity & Magnetism", emoji: "🧲",
      intro: "Flip a switch and a room fills with light. Wave a magnet near a paperclip and — snap — it jumps! Electricity and magnetism are secretly best friends.",
      learn: [
        "Electric current is the flow of tiny charged particles called electrons through a material. Metals let electricity flow easily and are called conductors; rubber and plastic block it and are called insulators.",
        "A circuit is a complete loop that lets electric current flow. If the loop breaks — an open circuit — the current stops and the light goes out.",
        "Static electricity happens when charges build up on a surface instead of flowing, like when a balloon rubbed on hair makes your hair stand up.",
        "Magnets have two poles, north and south. Like poles repel (push apart), and opposite poles attract (pull together).",
        "Electricity and magnetism are linked: an electric current flowing through a coil of wire creates a magnetic field, making an electromagnet — used in speakers, doorbells and electric motors."
      ],
      activity: "🧲 Paperclip Pickup: See how many paperclips a magnet can pick up in a chain. Then, with an adult, wrap a wire coil around a nail and connect it to a battery to make your own simple electromagnet!",
      diagram: '<svg viewBox="0 0 340 158"><rect width="340" height="158" rx="14" fill="#f7f4ee"/>'
        + '<g fill="none" stroke="#4d96ff" stroke-width="4"><path d="M40 40 L40 118"/><path d="M40 118 L150 118"/><path d="M150 118 L150 40"/><path d="M150 40 L95 40"/></g>'
        + '<rect x="30" y="50" width="20" height="28" rx="2" fill="#2d2a4a"/><rect x="34" y="54" width="12" height="4" fill="#ffd166"/><rect x="34" y="70" width="12" height="4" fill="#fff"/>'
        + '<circle cx="95" cy="40" r="12" fill="#ffd166" stroke="#e6483d" stroke-width="2"/>'
        + '<g ' + LB + ' text-anchor="middle"><text x="95" y="140">Closed circuit (bulb lights up)</text></g>'
        + '<rect x="230" y="65" width="80" height="28" rx="4" fill="#e63946"/><rect x="270" y="65" width="40" height="28" rx="4" fill="#4d96ff"/>'
        + '<g font-family="Fredoka, system-ui, sans-serif" text-anchor="middle" font-size="13" fill="#fff"><text x="250" y="84">N</text><text x="290" y="84">S</text></g>'
        + '<g fill="none" stroke="#8a86a8" stroke-width="1.5"><path d="M230 79 Q195 40 230 20 Q260 5 270 30"/><path d="M310 79 Q345 40 310 20 Q280 5 270 30"/></g>'
        + '<g ' + LB + ' text-anchor="middle"><text x="270" y="140">Magnet with field lines</text></g></svg>',
      questions: [
        { q: "The flow of electric charge through a material is electric ____.", a: "Current" },
        { q: "A material that lets electricity flow easily, like metal, is a ____.", a: "Conductor" },
        { q: "A material that blocks electric current, like rubber, is an ____.", a: "Insulator" },
        { q: "A complete loop that lets current flow is called a ____.", a: "Circuit" },
        { q: "If a circuit's loop breaks, is it an open or a closed circuit?", a: "An open circuit" },
        { q: "Charge that builds up on a surface instead of flowing is ____ electricity.", a: "Static" },
        { q: "A magnet has two poles, called north and ____.", a: "South" },
        { q: "Do like magnetic poles attract or repel each other?", a: "Repel" },
        { q: "Do opposite magnetic poles attract or repel each other?", a: "Attract" },
        { q: "A magnet made using an electric current through a coil of wire is a(n) ____.", a: "Electromagnet" },
        { q: "Name a device that uses an electromagnet.", a: "A speaker or motor" },
        { q: "Rubbing a balloon on your hair builds up ____ electricity.", a: "Static" }
      ]
    }
  };
})();
