// BrightSprouts Academy — Shop: product catalog + cart (pure logic; the DOM lives in app.js).
// Sells both digital downloads (instant) and physical goods (shipped). The cart lives in
// localStorage; real payment is handed off to Stripe Checkout (see CHECKOUT_ENDPOINT in app.js).
// Prices are in whole cents to avoid floating-point money bugs.

const PRODUCTS = [
  // ---- Digital downloads (instant PDF) ----
  { id:"d-k2",      type:"digital",  name:"K–2 Worksheet Mega Bundle",           price:499,  art:"📗", tag:"200+ pages · Instant PDF",
    desc:"Every Kindergarten–Grade 2 worksheet in one download — math, phonics, tracing and more." },
  { id:"d-35",      type:"digital",  name:"Grades 3–5 Worksheet Bundle",         price:499,  art:"📘", tag:"180+ pages · Instant PDF",
    desc:"A full year of Grades 3–5 practice: multiplication, reading, spelling, science and history." },
  { id:"d-stories", type:"digital",  name:"50 Moral Stories — Printable Book",    price:699,  art:"📖", tag:"Illustrated · Instant PDF",
    desc:"All 50 character-building stories, beautifully laid out to print at home and read together." },
  { id:"d-trace",   type:"digital",  name:"Alphabet & Numbers Tracing Pack",      price:399,  art:"🔤", tag:"A–Z & 1–100 · Instant PDF",
    desc:"Dashed tracing sheets for uppercase, lowercase and numbers — perfect for little hands." },
  // ---- Physical goods (shipped) ----
  { id:"p-stickers",type:"physical", name:"Reward Sticker Sheet Pack",            price:699,  art:"✨", tag:"3 sheets · Ships in 3–5 days",
    desc:"Shiny motivation! Three sheets of BrightSprouts reward stickers for charts and worksheets." },
  { id:"p-book",    type:"physical", name:"Printed Story Collection (Paperback)", price:1699, art:"📚", tag:"120 pages · Ships in 5–7 days",
    desc:"A keepsake paperback of favorite BrightSprouts stories, printed and bound for the bookshelf." },
  { id:"p-chart",   type:"physical", name:"Reward Chart + Star Kit",              price:1299, art:"⭐", tag:"Reusable · Ships in 3–5 days",
    desc:"A wipe-clean reward chart with a pack of star stickers to track streaks and celebrate wins." },
  { id:"p-plush",   type:"physical", name:"Sprout Mascot Plush Toy",              price:1999, art:"🌱", tag:"Super soft · Ships in 5–7 days",
    desc:"Cuddle the BrightSprouts mascot! A soft, huggable learning buddy for reading time." }
];

function productById(id) { return PRODUCTS.find(p => p.id === id) || null; }
function money(cents) { return "$" + (cents / 100).toFixed(2); }

const Cart = {
  load() { try { return JSON.parse(localStorage.getItem("bs_cart")) || {}; } catch (e) { return {}; } },
  save(c) { localStorage.setItem("bs_cart", JSON.stringify(c)); },
  add(id, n) {
    if (!productById(id)) return;
    const c = this.load();
    c[id] = Math.max(1, (c[id] || 0) + (n == null ? 1 : n));
    this.save(c);
  },
  setQty(id, q) {
    const c = this.load();
    if (q < 1) delete c[id]; else c[id] = q;
    this.save(c);
  },
  remove(id) { const c = this.load(); delete c[id]; this.save(c); },
  clear() { this.save({}); },
  count() { const c = this.load(); return Object.keys(c).reduce((a, k) => a + c[k], 0); },
  items() {
    const c = this.load();
    return Object.keys(c).map(id => ({ product: productById(id), qty: c[id] })).filter(x => x.product);
  },
  subtotal() { return this.items().reduce((s, x) => s + x.product.price * x.qty, 0); },
  hasPhysical() { return this.items().some(x => x.product.type === "physical"); }
};
