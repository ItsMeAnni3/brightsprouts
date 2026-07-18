// BrightSprouts Academy — Rewards system.
// Stars (a growing count), a daily streak, collectible stickers that unlock as stars are earned,
// and milestone badges. Everything lives in localStorage — pure logic here, no DOM.

// 24 stickers, unlocking at rising star totals. Locked ones show as a grey "?".
const STICKERS = [
  { e:"🌱", n:"Sprout",     cost:0 },   { e:"⭐", n:"Star",       cost:2 },
  { e:"🐣", n:"Chick",      cost:4 },   { e:"🌸", n:"Blossom",    cost:6 },
  { e:"🦋", n:"Butterfly",  cost:9 },   { e:"🐢", n:"Turtle",     cost:12 },
  { e:"🌈", n:"Rainbow",    cost:15 },  { e:"🐠", n:"Fish",       cost:18 },
  { e:"🐶", n:"Puppy",      cost:22 },  { e:"🌻", n:"Sunflower",  cost:26 },
  { e:"🦉", n:"Owl",        cost:30 },  { e:"🚀", n:"Rocket",     cost:35 },
  { e:"🐝", n:"Bee",        cost:40 },  { e:"🍎", n:"Apple",      cost:45 },
  { e:"🐬", n:"Dolphin",    cost:50 },  { e:"🦄", n:"Unicorn",    cost:60 },
  { e:"🌍", n:"Earth",      cost:70 },  { e:"🐧", n:"Penguin",    cost:80 },
  { e:"🦁", n:"Lion",       cost:90 },  { e:"🐙", n:"Octopus",    cost:100 },
  { e:"🦕", n:"Dinosaur",   cost:125 }, { e:"🌵", n:"Cactus",     cost:150 },
  { e:"🦚", n:"Peacock",    cost:175 }, { e:"👑", n:"Crown",      cost:200 }
];

// Milestone badges. Earned once, kept forever.
const BADGES = [
  { id:"firststory",   e:"📖", n:"First Story",    d:"Read your very first story" },
  { id:"bookworm",     e:"🐛", n:"Bookworm",       d:"Finish a whole book in the library" },
  { id:"greenthumb",   e:"🌿", n:"Green Thumb",    d:"Grow a plant through its whole life cycle" },
  { id:"creator",      e:"🎨", n:"Creature Maker", d:"Make and save your own creature" },
  { id:"storyteller",  e:"✨", n:"Storyteller",    d:"Make a custom story with the Story Maker" },
  { id:"mathwhiz",     e:"🧮", n:"Math Whiz",      d:"Get a perfect score in Math Race" },
  { id:"explorer",     e:"🗺️", n:"Explorer",       d:"Score 8 or more in the Flag Quiz" },
  { id:"speller",      e:"🐝", n:"Super Speller",  d:"Get a perfect score in the Spelling Bee" },
  { id:"memory",       e:"🧠", n:"Memory Master",  d:"Win a game of Memory Match" },
  { id:"streak5",      e:"🔥", n:"On Fire",        d:"Learn 5 days in a row" },
  { id:"star50",       e:"🌟", n:"Star Collector", d:"Earn 50 stars in total" }
];

const Rewards = {
  _blank() { return { stars: 0, streak: 0, lastDay: "", badges: [] }; },
  load() {
    try { return Object.assign(this._blank(), JSON.parse(localStorage.getItem("bs_rewards")) || {}); }
    catch (e) { return this._blank(); }
  },
  save(r) { localStorage.setItem("bs_rewards", JSON.stringify(r)); },
  today(d) { return (d || new Date()).toISOString().slice(0, 10); },

  // Mark today as an active learning day and update the streak. Idempotent within a day.
  touchDay(now) {
    const r = this.load();
    const t = this.today(now);
    if (r.lastDay === t) return r;
    const yest = this.today(new Date((now ? now.getTime() : Date.now()) - 86400000));
    r.streak = (r.lastDay === yest) ? r.streak + 1 : 1;
    r.lastDay = t;
    this.save(r);
    return r;
  },

  // Add stars (also refreshes the streak). Returns the new total.
  addStars(n, now) {
    const r = this.touchDay(now);
    r.stars += (n || 0);
    this.save(r);
    return r.stars;
  },

  // Grant a badge once. Returns the badge object if newly earned, else null.
  earnBadge(id, now) {
    const r = this.load();
    if (r.badges.indexOf(id) >= 0) return null;
    if (!BADGES.some(b => b.id === id)) return null;
    r.badges.push(id);
    this.save(r);
    return BADGES.find(b => b.id === id);
  },
  hasBadge(id) { return this.load().badges.indexOf(id) >= 0; },

  // Auto-badges that depend purely on the counters.
  checkAutoBadges(now) {
    const r = this.load(), earned = [];
    if (r.streak >= 5) { const b = this.earnBadge("streak5", now); if (b) earned.push(b); }
    if (r.stars >= 50) { const b = this.earnBadge("star50", now); if (b) earned.push(b); }
    return earned;
  },

  stickersUnlocked() { const s = this.load().stars; return STICKERS.filter(x => s >= x.cost).length; },
  nextSticker() { const s = this.load().stars; return STICKERS.find(x => s < x.cost) || null; }
};
