// BrightSprouts Academy — Computer Science, Grade 1 to 12.
// A curriculum plan plus four teaching lessons by grade band, each with endless worksheets.
// Every recommended tool is free and real (checked); facts are kept to the uncontroversial.
const CS_PLAN = [
  { band: "Grades 1–2 · Thinking in Steps (no screen needed)",
    goals: [
      "Understand that a computer only does exactly what it is told, in order.",
      "Give and follow step-by-step instructions (an algorithm is just a recipe).",
      "Spot and fix a wrong step — that's debugging, and six-year-olds are great at it.",
      "Name the basic parts: screen, keyboard, mouse, and the computer itself."
    ],
    tools: "ScratchJr (free tablet app, scratchjr.org) · Code.org pre-reader courses (code.org) · mostly paper, floor games and a grown-up pretending to be a robot",
    milestone: "Can steer a 'human robot' (a parent!) across the kitchen with step-by-step commands, and spot the step that went wrong." },
  { band: "Grades 3–5 · Block Coding",
    goals: [
      "Build real programs by snapping blocks together: sequences, loops, and events.",
      "Use IF to make a program decide things for itself.",
      "Make something of their own — a simple game, story or animation.",
      "Start good habits: test often, fix one thing at a time, and be kind online."
    ],
    tools: "Scratch (scratch.mit.edu, free from MIT) · Code.org CS Fundamentals · Blockly Games (blockly.games)",
    milestone: "Builds their own Scratch project that uses at least one loop and one IF — and can explain what each block does." },
  { band: "Grades 6–8 · First Real Language",
    goals: [
      "Learn how computers count: binary — everything is 0s and 1s underneath.",
      "Move from blocks to typed code, usually Python: variables, input, IF, loops.",
      "Understand roughly how the internet moves messages from one computer to another.",
      "Debug on purpose: read the error message, guess, test, repeat."
    ],
    tools: "Python (python.org, free) with the Mu or IDLE editor · Code.org CS Discoveries · Scratch for quick prototypes",
    milestone: "Writes a Python program from scratch that asks a question, makes a decision with IF, and uses a loop." },
  { band: "Grades 9–12 · Building Things",
    goals: [
      "Get comfortable with functions, lists and dictionaries — the everyday tools of programming.",
      "Build a real multi-part project and finish it (finishing is the skill).",
      "Meet the web: what HTML, CSS and JavaScript each do.",
      "Look ahead: AP Computer Science courses, and where coding leads — games, science, art, medicine, everywhere."
    ],
    tools: "Python (python.org) · Harvard's CS50 (cs50.harvard.edu, free online) · Khan Academy computing (khanacademy.org) · a plain text editor and curiosity",
    milestone: "Completes a project they chose themselves — a game, a website, a tool — and can walk someone through the code." }
];

const CS_SUBJECT_KEYS = ["cs12", "cs35", "cs68", "cs912"];

LESSONS[17] = {
csplan: {
  title: "The Computer Science Plan, Grade 1 to 12", emoji: "🗺️",
  intro: "One page that shows the whole journey: from giving a pretend robot instructions at age six, to writing real programs at seventeen. Print it and tick things off as your child grows.",
  learn: [
    "Computer science is not 'using apps' — it's understanding and telling computers what to do. A child can start before they can read.",
    "The ideas come first, the typing comes later. Loops and IFs learned with blocks at eight are the same loops and IFs typed in Python at twelve.",
    "Everything recommended below is completely free. Computer science is one of the cheapest subjects there is — the expensive part is patience.",
    "A little history for the dinner table: Ada Lovelace described the first computer algorithm back in the 1840s — a century before any computer existed to run it. The first room-sized electronic computers arrived in the 1940s; your phone is millions of times faster.",
    "Screens aren't required every day. Half of good computer science practice is done with paper, cards and conversation."
  ],
  activity: "🤖 Robot Parent: You are a robot that obeys commands EXACTLY ('step forward', 'turn left'...). Have your child steer you to the biscuit tin. When you crash into the sofa — that's a bug, and they must fix their program!",
  csPlan: true
},
cs12: {
  title: "Thinking in Steps", emoji: "🧩",
  intro: "Computers are powerful but not clever: they only do exactly what they're told, in exactly the order they're told. Learning to think in tidy little steps is the whole secret — and you don't even need a computer to practise.",
  learn: [
    "An ALGORITHM is a list of steps for doing something. A recipe is an algorithm. Getting dressed is an algorithm. You already use them all day!",
    "Order matters. 'Put on shoes, then socks' is the same two steps as 'socks, then shoes' — but only one of them works.",
    "A BUG is a step that's wrong or missing. Finding and fixing bugs is called DEBUGGING, and it's a happy thing: every bug you fix makes the program better.",
    "A computer has parts with jobs: the KEYBOARD and MOUSE let you talk to it (input), the SCREEN and SPEAKERS let it talk to you (output).",
    "Computer chips hide everywhere — not just in laptops, but inside phones, cars and washing machines."
  ],
  activity: "🥪 The Exact Sandwich: Ask your child to tell you how to make a sandwich — then do EXACTLY what they say. 'Put butter on the bread' with no 'pick up the knife' first? Use your elbow. They will laugh, and they will learn precision forever.",
  csWork: "cs12"
},
cs35: {
  title: "Block Coding: Loops, Events & IFs", emoji: "🧱",
  intro: "Block coding tools like Scratch let children snap commands together like toy bricks — no spelling, no typing errors, just pure logic. And the logic they learn here is the real thing.",
  learn: [
    "A LOOP repeats steps so you don't have to write them again. 'Repeat 4 times: [move, stamp]' is 8 actions from 2 blocks.",
    "An EVENT starts a program: 'when the green flag is clicked', 'when the space key is pressed'. Programs wait for events, then run.",
    "An IF makes a choice: 'IF you touch the wall, THEN bounce back.' The steps inside only happen when the condition is true.",
    "Loops can carry loops inside them — 'repeat 3 [repeat 2 [stamp]]' stamps 6 times. Count it out with your fingers!",
    "Scratch is free, made by MIT, and used by children in every country on Earth. Their projects — games, cartoons, music machines — are real programs."
  ],
  activity: "🎮 First Game Night: On scratch.mit.edu, help your child make the classic starter game: a cat that moves with the arrow keys and says 'Ouch!' if it touches the edge. Loops, events and IFs — all three ideas in one evening.",
  csWork: "cs35"
},
cs68: {
  title: "Binary & First Python", emoji: "🔢",
  intro: "Two big steps happen in middle school: discovering that everything in a computer — photos, songs, this sentence — is secretly just 0s and 1s, and typing your first real code.",
  learn: [
    "BINARY is counting with only two digits, 0 and 1. Each place is worth double the last: 8, 4, 2, 1. So binary 1011 means 8+0+2+1 = 11.",
    "Why 0 and 1? Because a switch is either off or on. A computer is billions of tiny switches flicking on and off billions of times a second.",
    "PYTHON is a language where you type instructions: x = 5 puts 5 in a box called x; print(x) shows what's in the box.",
    "A VARIABLE is that named box. x = x + 3 means 'take what's in the box, add 3, put it back'. After it, the old value is gone.",
    "The internet works by chopping messages into small packets, sending each one hopping between computers, and reassembling them at the far end — usually in under a tenth of a second.",
    "Error messages are not scolding you. They are the computer saying, as precisely as it can, where it got confused. Read the last line first."
  ],
  activity: "✋ Binary Fingers: With thumb=1, index=2, middle=4, ring=8, pinky=16, raised fingers ADD UP. Show 5 (thumb + middle). Show 10. Show 21. One hand counts to 31!",
  csWork: "cs68"
},
cs912: {
  title: "Real Programming", emoji: "🐍",
  intro: "By high school, coding stops being an exercise and starts being a power: you can build the thing you wish existed. These are the everyday tools programmers actually use.",
  learn: [
    "FUNCTIONS wrap steps up with a name so you can reuse them: define greet() once, call it a thousand times.",
    "LISTS hold many values in order — and computers count from 0, so in [10, 20, 30], item number 1 is 20, not 10. Every programmer trips on this exactly once.",
    "Useful Python arithmetic: // divides and throws away the remainder (17 // 5 is 3), % keeps ONLY the remainder (17 % 5 is 2), and ** is 'to the power of' (2 ** 5 is 32).",
    "Strings are just lists of characters: len('hello') is 5, 'ha' * 3 is 'hahaha', and 'hello'[0] is 'h'.",
    "Booleans are the tiny logic of every decision: 'and' needs both sides true, 'or' needs at least one, 'not' flips it.",
    "The web is three languages doing three jobs: HTML is the structure, CSS is the appearance, JavaScript is the behaviour. This very website is exactly that.",
    "The real skill isn't memorising — it's breaking a big problem into small ones, and looking things up without shame. Professionals do both all day."
  ],
  activity: "🛠️ Build a Real Tool: Write a Python program the family actually uses — a chore-picker that chooses randomly, a screen-time calculator, a quiz about your family. Real users are the fastest teachers.",
  csWork: "cs912"
}
};
