# Turning on real cart payments (Stripe Checkout)

The shop and cart already work. This is the one-time setup to accept money. You never handle card
numbers — Stripe hosts the payment page. Your **secret key lives only on the server**, never in the
website code.

## What you'll need
- A **Stripe account** (you already have one from the subscription).
- A free **Netlify** or **Vercel** account (they build in the cloud, so you don't need Node installed).

---

## Step 1 — Create your products in Stripe
1. Stripe Dashboard → **Products** → **Add product**.
2. Create one product for each item in the shop (name + price). Do this for all 8:
   - K–2 Worksheet Mega Bundle — $4.99 (digital)
   - Grades 3–5 Worksheet Bundle — $4.99 (digital)
   - 50 Moral Stories — Printable Book — $6.99 (digital)
   - Alphabet & Numbers Tracing Pack — $3.99 (digital)
   - Reward Sticker Sheet Pack — $6.99 (physical)
   - Printed Story Collection — $16.99 (physical)
   - Reward Chart + Star Kit — $12.99 (physical)
   - Sprout Mascot Plush Toy — $19.99 (physical)
3. For each, copy its **Price ID** (looks like `price_1AbC...`).
4. Paste those IDs into `PRICE_MAP` in `server/create-checkout.js`.

## Step 2 — Deploy the checkout function
**Netlify (recommended):**
1. Sign in to Netlify → **Add new site → Import from GitHub** → pick the `brightsprouts` repo.
2. Netlify auto-detects the function in `server/`. (If asked, set the **functions directory** to `server`.)
3. Site settings → **Environment variables** → add `STRIPE_SECRET_KEY` = your Stripe **secret** key
   (`sk_live_...`). Never put this in the website code.
4. Deploy. Your function URL will be:
   `https://YOUR-SITE.netlify.app/.netlify/functions/create-checkout`

**Vercel:** put the file at `api/create-checkout.js`, change the last line to
`export default function handler(req, res){ ... }` style (ask me and I'll convert it), add the same
env var, deploy; the URL is `https://YOUR-SITE.vercel.app/api/create-checkout`.

## Step 3 — Connect the website to the function
In `js/app.js`, set:
```js
const CHECKOUT_ENDPOINT = "https://YOUR-SITE.netlify.app/.netlify/functions/create-checkout";
```
Commit & push. The "Checkout securely" button now sends the cart to Stripe.

## Step 4 — Physical goods: shipping & tax
- **Shipping:** Stripe Dashboard → **Settings → Shipping** → add shipping rates. The function already
  asks for a shipping address whenever the cart has a physical item.
- **Sales tax:** enable **Stripe Tax**, then uncomment `automatic_tax: { enabled: true }` in the function.

## Step 5 — Delivering the goods
- **Physical:** you'll see paid orders (with the shipping address) in the Stripe Dashboard → **Payments**.
  Fulfil them yourself, or connect a print-on-demand service.
- **Digital:** the simplest option is to email the download link with the receipt, or add a Stripe
  **webhook** that emails the PDF automatically on `checkout.session.completed`. Ask me and I'll add it.

## Test first
Use Stripe **test mode** (`sk_test_...` and card `4242 4242 4242 4242`) before going live.

---
Tell me your host choice (Netlify or Vercel) and I'll tailor the exact files and commands for you.
