// BrightSprouts Academy — Stripe Checkout function for the shop cart.
// This is the ONLY place your Stripe secret key is used, and it runs on a server (Netlify/Vercel),
// never in the browser. It turns a cart into a secure Stripe Checkout session.
//
// Security: prices are looked up here from PRICE_MAP — the browser only sends product ids and
// quantities, so a tampered cart can never change what a customer is charged.
//
// Deploy: see server/README.md. Netlify Functions signature shown; a Vercel variant is in the README.

const SITE = "https://brightsprouts.academy";

// Map each shop product id (from js/shop.js) to the Stripe Price ID you created in your Stripe
// dashboard (Products → Add product → copy the price's id, looks like "price_123...").
const PRICE_MAP = {
  "d-k2":       "price_REPLACE_ME",
  "d-35":       "price_REPLACE_ME",
  "d-stories":  "price_REPLACE_ME",
  "d-trace":    "price_REPLACE_ME",
  "p-stickers": "price_REPLACE_ME",
  "p-book":     "price_REPLACE_ME",
  "p-chart":    "price_REPLACE_ME",
  "p-plush":    "price_REPLACE_ME"
};

// Which products are physical (need a shipping address). Keep in sync with js/shop.js.
const PHYSICAL = new Set(["p-stickers", "p-book", "p-chart", "p-plush"]);

const CORS = {
  "Access-Control-Allow-Origin": SITE,          // only your site may call this
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: CORS, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers: CORS, body: "Method Not Allowed" };

  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const { items } = JSON.parse(event.body || "{}");
    if (!Array.isArray(items) || !items.length) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: "Cart is empty." }) };
    }

    const line_items = [];
    let hasPhysical = false;
    for (const it of items) {
      const price = PRICE_MAP[it.id];
      if (!price || price.indexOf("price_") !== 0 || price.indexOf("REPLACE") >= 0) {
        return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: "Unknown or unconfigured product: " + it.id }) };
      }
      const qty = Math.max(1, Math.min(20, parseInt(it.qty, 10) || 1));
      line_items.push({ price, quantity: qty });
      if (PHYSICAL.has(it.id)) hasPhysical = true;
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: SITE + "/#order-success",
      cancel_url: SITE + "/#cart",
      // Physical goods collect a shipping address. Add shipping rates in the Stripe dashboard
      // (Settings → Shipping) and list their ids in shipping_options if you want carrier options.
      ...(hasPhysical ? { shipping_address_collection: { allowed_countries: ["US", "CA"] } } : {}),
      // Turn this on AFTER enabling Stripe Tax in your dashboard, for automatic sales tax:
      // automatic_tax: { enabled: true },
      billing_address_collection: "auto"
    });

    return { statusCode: 200, headers: CORS, body: JSON.stringify({ url: session.url }) };
  } catch (e) {
    return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: e.message }) };
  }
};
