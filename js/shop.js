// BrightSprouts Academy — Shop: product catalog + cart (pure logic; the DOM lives in app.js).
// Sells both digital downloads (instant) and physical goods (shipped). The cart lives in
// localStorage; real payment is handed off to Stripe Checkout (see CHECKOUT_ENDPOINT in app.js).
// Prices are in whole cents to avoid floating-point money bugs.

// No products are listed for sale right now, so the shop shows a friendly "coming soon" message
// while the cart stays available. To stock the shop, add product objects here, for example:
//   { id:"d-k2", type:"digital", name:"K–2 Worksheet Bundle", price:499, art:"📗",
//     tag:"200+ pages · Instant PDF", desc:"…" }
// (type can be "digital" or "physical"; the cart & Stripe checkout already handle both.)
const PRODUCTS = [];

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
  count() { return this.items().reduce((a, x) => a + x.qty, 0); },   // only counts products that still exist
  items() {
    const c = this.load();
    return Object.keys(c).map(id => ({ product: productById(id), qty: c[id] })).filter(x => x.product);
  },
  subtotal() { return this.items().reduce((s, x) => s + x.product.price * x.qty, 0); },
  hasPhysical() { return this.items().some(x => x.product.type === "physical"); }
};
