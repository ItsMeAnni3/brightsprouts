// BrightSprouts Academy — Time & Money category (LESSONS[23]): everyday practical skills.
// Telling the time on a real clock face, units of time, counting coins and money sense.
// Money content ships in BOTH currencies (byCurrency) so families anywhere get the right coins.
(function () {
  if (typeof LESSONS === "undefined") return;
  var FA = 'font-family="Fredoka, system-ui, sans-serif"';
  var R = Math.round;

  // ---- a real analog clock face, hands set to h:m ----
  function clock(cx, cy, r, h, m, nums) {
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff" stroke="#5d3fa0" stroke-width="3"/>';
    for (var i = 1; i <= 12; i++) {
      var a = (i * 30 - 90) * Math.PI / 180;
      if (nums) {
        s += '<text x="' + R(cx + Math.cos(a) * (r - 13)) + '" y="' + R(cy + Math.sin(a) * (r - 13) + 4) + '"'
          + ' text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + i + '</text>';
      } else {
        s += '<line x1="' + R(cx + Math.cos(a) * (r - 4)) + '" y1="' + R(cy + Math.sin(a) * (r - 4))
          + '" x2="' + R(cx + Math.cos(a) * (r - 8)) + '" y2="' + R(cy + Math.sin(a) * (r - 8))
          + '" stroke="#b9b2d6" stroke-width="2"/>';
      }
    }
    var ha = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180, ma = (m * 6 - 90) * Math.PI / 180;
    // short red hand = hours, long blue hand = minutes
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + R(cx + Math.cos(ha) * r * 0.46) + '" y2="' + R(cy + Math.sin(ha) * r * 0.46) + '" stroke="#e2453b" stroke-width="4.5" stroke-linecap="round"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + R(cx + Math.cos(ma) * r * 0.74) + '" y2="' + R(cy + Math.sin(ma) * r * 0.74) + '" stroke="#4d96ff" stroke-width="3" stroke-linecap="round"/>';
    return s + '<circle cx="' + cx + '" cy="' + cy + '" r="3.5" fill="#2d2a4a"/>';
  }

  var clockDia = '<svg viewBox="0 0 340 232"><rect width="340" height="232" rx="14" fill="#f5f2ff"/>'
    + clock(72, 74, 54, 3, 0, true)
    + '<g ' + FA + ' font-size="12.5" fill="#2d2a4a">'
    + '<line x1="142" y1="52" x2="166" y2="52" stroke="#e2453b" stroke-width="4.5" stroke-linecap="round"/>'
    + '<text x="174" y="56">short hand = hour</text>'
    + '<line x1="142" y1="80" x2="166" y2="80" stroke="#4d96ff" stroke-width="3" stroke-linecap="round"/>'
    + '<text x="174" y="84">long hand = minutes</text>'
    + '<text x="142" y="112" font-size="11.5" fill="#6a668c">One number to the next = 5 minutes</text>'
    + '</g>'
    + clock(60, 168, 30, 3, 0, false) + clock(170, 168, 30, 3, 15, false) + clock(280, 168, 30, 3, 30, false)
    + '<g ' + FA + ' font-size="11.5" fill="#2d2a4a" text-anchor="middle">'
    + '<text x="60" y="214">3 o\'clock</text><text x="170" y="214">quarter past 3</text><text x="280" y="214">half past 3</text>'
    + '</g></svg>';

  // ---- units of time ladder ----
  var rows = [["60 seconds", "1 minute"], ["60 minutes", "1 hour"], ["24 hours", "1 day"],
              ["7 days", "1 week"], ["12 months", "1 year"]];
  var unitDia = '<svg viewBox="0 0 340 194"><rect width="340" height="194" rx="14" fill="#eef6ff"/>';
  for (var u = 0; u < rows.length; u++) {
    var uy = 14 + u * 35;
    unitDia += '<rect x="14" y="' + uy + '" width="140" height="27" rx="9" fill="#4d96ff"/>'
      + '<text x="84" y="' + (uy + 18) + '" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#fff">' + rows[u][0] + '</text>'
      + '<text x="166" y="' + (uy + 18) + '" ' + FA + ' font-size="14" fill="#5d3fa0">=</text>'
      + '<rect x="186" y="' + uy + '" width="140" height="27" rx="9" fill="#dbe9ff"/>'
      + '<text x="256" y="' + (uy + 18) + '" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#2d2a4a">' + rows[u][1] + '</text>';
  }
  unitDia += '</svg>';

  // ---- coin charts ----
  function coinRow(coins, y) {
    var s = "", xs = [43, 128, 213, 298];
    for (var i = 0; i < coins.length; i++) {
      var c = coins[i];
      s += '<circle cx="' + xs[i] + '" cy="' + y + '" r="' + c.r + '" fill="' + c.fill + '" stroke="' + c.stroke + '" stroke-width="2"/>'
        + '<text x="' + xs[i] + '" y="' + (y + 5) + '" text-anchor="middle" ' + FA + ' font-size="12" fill="#3a3352">' + c.face + '</text>'
        + '<text x="' + xs[i] + '" y="' + (y + c.r + 17) + '" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#2d2a4a">' + c.name + '</text>';
    }
    return s;
  }
  var CU = { fill: "#e0a86a", stroke: "#b87333" }, SI = { fill: "#d8dce4", stroke: "#a8adba" }, GO = { fill: "#e8c86a", stroke: "#bf9b30" };
  var ukDia = '<svg viewBox="0 0 340 196"><rect width="340" height="196" rx="14" fill="#fdfaff"/>'
    + coinRow([{ face: "1p", name: "one penny", r: 14, fill: CU.fill, stroke: CU.stroke },
               { face: "2p", name: "two pence", r: 16, fill: CU.fill, stroke: CU.stroke },
               { face: "5p", name: "five pence", r: 12, fill: SI.fill, stroke: SI.stroke },
               { face: "10p", name: "ten pence", r: 15, fill: SI.fill, stroke: SI.stroke }], 40)
    + coinRow([{ face: "20p", name: "twenty pence", r: 13, fill: SI.fill, stroke: SI.stroke },
               { face: "50p", name: "fifty pence", r: 17, fill: SI.fill, stroke: SI.stroke },
               { face: "£1", name: "one pound", r: 15, fill: GO.fill, stroke: GO.stroke },
               { face: "£2", name: "two pounds", r: 18, fill: GO.fill, stroke: GO.stroke }], 122)
    + '<text x="170" y="186" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">100 pence (100p) = £1</text></svg>';

  var usDia = '<svg viewBox="0 0 340 196"><rect width="340" height="196" rx="14" fill="#fdfaff"/>'
    + coinRow([{ face: "1¢", name: "penny", r: 14, fill: CU.fill, stroke: CU.stroke },
               { face: "5¢", name: "nickel", r: 16, fill: SI.fill, stroke: SI.stroke },
               { face: "10¢", name: "dime", r: 12, fill: SI.fill, stroke: SI.stroke },
               { face: "25¢", name: "quarter", r: 18, fill: SI.fill, stroke: SI.stroke }], 44)
    + '<rect x="104" y="106" width="132" height="56" rx="8" fill="#dff3e4" stroke="#63a375" stroke-width="2"/>'
    + '<circle cx="170" cy="134" r="17" fill="none" stroke="#63a375" stroke-width="1.5"/>'
    + '<text x="170" y="139" text-anchor="middle" ' + FA + ' font-size="16" fill="#2f6b45">$1</text>'
    + '<text x="170" y="186" text-anchor="middle" ' + FA + ' font-size="12.5" fill="#5d3fa0">100 cents (100¢) = $1</text></svg>';

  // ---- needs vs wants (currency-free) ----
  var needs = ["food", "a home", "clothes", "water"], wants = ["toys", "sweets", "games", "stickers"];
  var senseDia = '<svg viewBox="0 0 340 200"><rect width="340" height="200" rx="14" fill="#f3fbf4"/>'
    + '<rect x="14" y="12" width="150" height="30" rx="10" fill="#43aa8b"/><text x="89" y="32" text-anchor="middle" ' + FA + ' font-size="13" fill="#fff">NEEDS</text>'
    + '<rect x="176" y="12" width="150" height="30" rx="10" fill="#e0a94a"/><text x="251" y="32" text-anchor="middle" ' + FA + ' font-size="13" fill="#fff">WANTS</text>';
  for (var n = 0; n < 4; n++) {
    var ny = 54 + n * 32;
    senseDia += '<rect x="14" y="' + ny + '" width="150" height="26" rx="8" fill="#fff" stroke="#9ad6bd" stroke-width="1.5"/>'
      + '<text x="89" y="' + (ny + 18) + '" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + needs[n] + '</text>'
      + '<rect x="176" y="' + ny + '" width="150" height="26" rx="8" fill="#fff" stroke="#f0d097" stroke-width="1.5"/>'
      + '<text x="251" y="' + (ny + 18) + '" text-anchor="middle" ' + FA + ' font-size="12" fill="#2d2a4a">' + wants[n] + '</text>';
  }
  senseDia += '<text x="170" y="192" text-anchor="middle" ' + FA + ' font-size="11.5" fill="#6a668c">Needs come first — then save for the wants</text></svg>';

  LESSONS[23] = {
    clock: {
      title: "Telling Time", emoji: "🕐",
      intro: "A clock has two hands and twelve numbers — and once you know the trick, you can read it in a second. Let's learn how!",
      learn: [
        "A clock has two hands: the SHORT hand shows the hour, the LONG hand shows the minutes.",
        "The numbers 1 to 12 mark the hours. The minute hand takes 60 minutes to travel all the way round.",
        "When the long hand points straight up at 12, it is something o'clock.",
        "When the long hand points down at 6, it is half past the hour (30 minutes).",
        "Quarter past = long hand on the 3; quarter to = long hand on the 9. Each number the minute hand passes is 5 more minutes."
      ],
      activity: "🕐 Paper-Plate Clock: Make a clock from a paper plate with two card hands — a short one and a long one. Call out times and race to set them!",
      diagram: clockDia,
      questions: [
        { q: "Which hand shows the hour — the short one or the long one?", a: "The short hand" },
        { q: "Which hand shows the minutes?", a: "The long hand" },
        { q: "How many minutes does the minute hand take to go all the way round?", a: "60" },
        { q: "How many hours are marked on a clock face?", a: "12" },
        { q: "The long hand points to 12 and the short hand to 4. What time is it?", a: "4 o'clock" },
        { q: "Where does the long hand point at half past?", a: "To the 6" },
        { q: "Where does the long hand point at quarter past?", a: "To the 3" },
        { q: "Where does the long hand point at quarter to?", a: "To the 9" },
        { q: "How many minutes is 'quarter past'?", a: "15 minutes" },
        { q: "How many minutes is 'half past'?", a: "30 minutes" },
        { q: "How many minutes does the minute hand move from one number to the next?", a: "5 minutes" },
        { q: "The short hand is between 2 and 3, the long hand is on 6. What time is it?", a: "Half past 2" }
      ]
    },
    units: {
      title: "Hours, Minutes & Days", emoji: "⏳",
      intro: "Seconds, minutes, hours, days, weeks, years — time comes in sizes! Here is how they all fit together.",
      learn: [
        "60 seconds = 1 minute. 60 minutes = 1 hour.",
        "24 hours = 1 day. 7 days = 1 week.",
        "About 4 weeks = 1 month, and 12 months = 1 year.",
        "A normal year is 365 days; a leap year has 366 (an extra day on 29 February).",
        "a.m. means before midday (the morning); p.m. means after midday. Midday is 12 p.m. and midnight is 12 a.m."
      ],
      activity: "⏳ Guess a Minute: Everyone closes their eyes and says 'stop' when they think 60 seconds have passed. Time it — who gets closest?",
      diagram: unitDia,
      questions: [
        { q: "How many seconds are in a minute?", a: "60" },
        { q: "How many minutes are in an hour?", a: "60" },
        { q: "How many hours are in a day?", a: "24" },
        { q: "How many days are in a week?", a: "7" },
        { q: "How many months are in a year?", a: "12" },
        { q: "How many days are in a normal year?", a: "365" },
        { q: "How many days are in a leap year?", a: "366" },
        { q: "What does a.m. mean?", a: "Before midday — the morning" },
        { q: "What does p.m. mean?", a: "After midday — afternoon and evening" },
        { q: "Is 3 o'clock in the afternoon a.m. or p.m.?", a: "p.m." },
        { q: "How many minutes are in half an hour?", a: "30" },
        { q: "How many hours are in two days?", a: "48" }
      ]
    },
    money: {
      title: "Counting Money", emoji: "💰",
      activity: "🏪 Coin Sort: Tip out a purse of coins, sort them into piles by value, then count each pile out loud. How much is there altogether?",
      byCurrency: {
        uk: {
          intro: "Money comes in coins and notes. Let's meet the coins and learn to count them up!",
          learn: [
            "Money here is counted in pounds (£) and pence (p). 100 pence = £1.",
            "There are eight coins: 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2.",
            "Notes (paper money) come as £5, £10, £20 and £50.",
            "To count a pile, start with the biggest coins and add the smaller ones on.",
            "Different coins can make the same amount: 50p = two 20p coins and a 10p."
          ],
          diagram: ukDia,
          questions: [
            { q: "How many pence are in £1?", a: "100p" },
            { q: "What symbol do we use for pounds?", a: "£" },
            { q: "Name the eight coins.", a: "1p, 2p, 5p, 10p, 20p, 50p, £1 and £2" },
            { q: "How much is two 20p coins?", a: "40p" },
            { q: "How much is a 50p and a 20p?", a: "70p" },
            { q: "How much is three 10p coins?", a: "30p" },
            { q: "How many 5p coins make 20p?", a: "Four" },
            { q: "How many 20p coins make £1?", a: "Five" },
            { q: "How much is £1 and 50p together?", a: "£1.50" },
            { q: "Which is worth more: one 50p or two 20p coins?", a: "The 50p (50p beats 40p)" },
            { q: "How much is two £2 coins?", a: "£4" },
            { q: "Which coin is worth the least?", a: "The 1p" }
          ]
        },
        us: {
          intro: "Money comes in coins and bills. Let's meet the coins and learn to count them up!",
          learn: [
            "Money here is counted in dollars ($) and cents (¢). 100 cents = $1.",
            "There are four everyday coins: the penny (1¢), nickel (5¢), dime (10¢) and quarter (25¢).",
            "Bills (paper money) come as $1, $5, $10 and $20.",
            "To count a pile, start with the biggest coins and add the smaller ones on.",
            "Different coins can make the same amount: 25¢ = two dimes and a nickel."
          ],
          diagram: usDia,
          questions: [
            { q: "How many cents are in $1?", a: "100" },
            { q: "What is a penny worth?", a: "1 cent" },
            { q: "What is a nickel worth?", a: "5 cents" },
            { q: "What is a dime worth?", a: "10 cents" },
            { q: "What is a quarter worth?", a: "25 cents" },
            { q: "How much is two quarters?", a: "50 cents" },
            { q: "How much is three dimes?", a: "30 cents" },
            { q: "How many nickels make a quarter?", a: "Five" },
            { q: "How many quarters make $1?", a: "Four" },
            { q: "Which is worth more: a dime or a nickel?", a: "A dime" },
            { q: "How much is a quarter, a dime and a nickel together?", a: "40 cents" },
            { q: "Which coin is worth the least?", a: "The penny (1 cent)" }
          ]
        }
      }
    },
    sense: {
      title: "Money Sense", emoji: "🏦",
      intro: "Money is not just for counting — it's for choosing. Let's learn about change, needs and wants, and saving up.",
      learn: [
        "Change is the money you get back when you pay more than something costs.",
        "To work out change, count up from the price to the amount you handed over.",
        "A NEED is something you must have (food, a home, clothes). A WANT is something nice to have (toys, sweets).",
        "Saving means keeping some money now so you can buy something bigger later.",
        "A budget is a plan for your money: some to spend, some to save, some to share."
      ],
      activity: "🏪 Play Shop: Put price labels on a few toys, use real or paper coins, and take turns being shopkeeper and customer — work out the change every time!",
      diagram: senseDia,
      byCurrency: {
        uk: {
          questions: [
            { q: "What is 'change'?", a: "The money you get back when you pay more than the price" },
            { q: "You buy a 30p apple with 50p. What is your change?", a: "20p" },
            { q: "You buy a 70p drink with £1. What is your change?", a: "30p" },
            { q: "You buy a 45p pencil with 50p. What is your change?", a: "5p" },
            { q: "You have 80p and spend 25p. How much is left?", a: "55p" },
            { q: "You save 20p a week. How much after 5 weeks?", a: "£1" },
            { q: "Is food a need or a want?", a: "A need" },
            { q: "Is a toy a need or a want?", a: "A want" },
            { q: "What does it mean to save money?", a: "Keep some now so you can buy something bigger later" },
            { q: "What is a budget?", a: "A plan for your money" },
            { q: "Name one thing that is a need.", a: "Food, water, clothes, or a home" },
            { q: "Why is it useful to save up?", a: "So you can afford something bigger later" }
          ]
        },
        us: {
          questions: [
            { q: "What is 'change'?", a: "The money you get back when you pay more than the price" },
            { q: "You buy a 30¢ apple with 50¢. What is your change?", a: "20¢" },
            { q: "You buy a 70¢ drink with $1. What is your change?", a: "30¢" },
            { q: "You buy a 45¢ pencil with 50¢. What is your change?", a: "5¢" },
            { q: "You have 80¢ and spend 25¢. How much is left?", a: "55¢" },
            { q: "You save 20¢ a week. How much after 5 weeks?", a: "$1" },
            { q: "Is food a need or a want?", a: "A need" },
            { q: "Is a toy a need or a want?", a: "A want" },
            { q: "What does it mean to save money?", a: "Keep some now so you can buy something bigger later" },
            { q: "What is a budget?", a: "A plan for your money" },
            { q: "Name one thing that is a need.", a: "Food, water, clothes, or a home" },
            { q: "Why is it useful to save up?", a: "So you can afford something bigger later" }
          ]
        }
      }
    }
  };
})();
