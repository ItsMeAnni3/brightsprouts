// BrightSprouts Academy — Shop: product catalog + cart (pure logic; the DOM lives in app.js).
// Sells both digital downloads (instant) and physical goods (shipped). The cart lives in
// localStorage; real payment is handed off to Stripe Checkout (see CHECKOUT_ENDPOINT in app.js).
// Prices are in whole cents to avoid floating-point money bugs.

// Products can be:
//   • Internal (have a `price` in cents) — added to the cart & bought via Stripe checkout.
//   • External (have a `url`) — physical goods stocked in our sister shop, Petal & Stone;
//     the card links straight out to that collection instead of using the cart.
// To add an internal item later:
//   { id:"d-k2", type:"digital", name:"K–2 Worksheet Bundle", price:499, art:"📗", tag:"…", desc:"…" }
const PRODUCTS = [
  { id:"col-stem", type:"physical", art:"🔬",
    name:"STEM for Kids",
    tag:"Shop the collection ↗",
    desc:"Hands-on science, building and tech kits that make learning irresistible.",
    url:"https://petalandstone.shop/collections/s-t-e-m-for-kids" },
  { id:"col-toys", type:"physical", art:"🧸",
    name:"Kids' Toys & Squishy",
    tag:"Shop the collection ↗",
    desc:"Squishies, fidgets and playful toys for fun and sensory breaks.",
    url:"https://petalandstone.shop/collections/kids-toys" },
  { id:"col-school", type:"physical", art:"🎒",
    name:"School Supplies",
    tag:"Shop the collection ↗",
    desc:"Backpacks, notebooks, pens and everything for a bright school year.",
    url:"https://petalandstone.shop/collections/hair-accessories" }
];

function productById(id) { return PRODUCTS.find(p => p.id === id) || null; }
function money(cents) { return "$" + (cents / 100).toFixed(2); }

const Cart = {
  load() { try { return JSON.parse(localStorage.getItem("bs_cart")) || {}; } catch (e) { return {}; } },
  save(c) { localStorage.setItem("bs_cart", JSON.stringify(c)); },
  add(id, n) {
    const p = productById(id);
    if (!p || p.url) return;   // external (linked) collections are not cart items
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
  count() { return this.items().reduce((a, x) => a + x.qty, 0); },   // only counts products that still exist
  items() {
    const c = this.load();
    return Object.keys(c).map(id => ({ product: productById(id), qty: c[id] })).filter(x => x.product);
  },
  subtotal() { return this.items().reduce((s, x) => s + x.product.price * x.qty, 0); },
  hasPhysical() { return this.items().some(x => x.product.type === "physical"); }
};
