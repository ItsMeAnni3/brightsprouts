# 🌱 BrightSprouts Academy

A fun, printable learning app for families — **Grades 1–12** lessons in Math, Reading,
Vocabulary, Science & History, **50 moral-value stories**, and a **custom story maker** —
with a built-in Free/Premium plan structure so you can earn money from subscriptions.

## ▶️ How to run it (right now)

Just **double-click `index.html`** — it opens in your browser. Everything works offline:
accounts, lessons, stories, printing. No installation needed.

## 💡 What's inside

| Feature | Details |
|---|---|
| 📚 Lessons | 84 lessons: Grades 1–12 × 7 subjects (Math, Reading, Vocabulary, Spelling, Writing, Science, History) plus a free Kindergarten section (alphabet, counting to 100, shapes, 100 picture words) — each with a "Let's Learn" section, a fun family activity, and practice questions |
| 🌍 General Knowledge | World geography (7 continents, 195 countries with flags + capitals) and Flora & Fauna (5 plants + 5 animals per country, with photos and scientific names) |
| ⚗️ Additional Material | Colour periodic table (118 elements), the abacus and how to use it, essential formulas for Grades 1–12, and printable addition/multiplication tables |
| 🔢 Worksheet generator | **Every subject** generates fresh worksheets — click "New Worksheet" for a reshuffled sheet, endlessly (math problems are fully auto-generated; other subjects draw from expanded question pools) |
| 🖨️ Printing | Every lesson and story has a Print button. Worksheets print with a Name/Date header, answer lines, and an **optional answer key** (parents' checkbox) |
| 📖 Story Library | 50 original stories with morals, in 3 themes: Adventures, Kids Helping Strangers, and Helping at Home — each with discussion questions |
| ✨ Story Maker | Parents enter their child's name, a sidekick, a setting, a theme, and a value — the app writes a personalized story with a moral, ready to print |
| 👤 Accounts | Sign up / log in / account page. Data is stored in the browser (see "Going live" below) |
| ⭐ Monetization | Free plan (Grades 1–2, 10 stories, 2 custom stories) vs Premium **$9.99/month + state sales tax** (everything). Locked content shows 🔒 and funnels users to sign up or upgrade |

## 💰 How you earn money with this

The app is already structured as a **freemium subscription business**:

1. **Free plan hooks families in** — Grades 1–2 and 10 stories are genuinely useful, so parents sign up.
2. **Locks create the upgrade moment** — the instant a parent taps Grade 3 or story #11, they see the Premium page.
3. **Premium is priced at $9.99/month plus tax** (change `PRICE` and `RULES` at the top of `js/app.js` to adjust pricing or what's free).

### Turning on REAL payments (the demo checkout → Stripe)

The upgrade button currently simulates a purchase. To collect real money:

1. Create a free account at **stripe.com** → Products → add "Premium Family, $9.99/month subscription".
2. Create a **Payment Link** for it (no coding needed — Stripe generates a checkout URL). Turn on **Stripe Tax** in the settings — it automatically calculates and collects the correct sales tax for each customer's state (this is exactly the "plus tax depending on state" behavior, handled for you).
3. In the Payment Link's settings, set **After payment → redirect customers to**: `https://brightsprouts.academy/#payment-success`
4. In `js/app.js`, paste the link into `STRIPE_PAYMENT_LINK = "..."` near the top. That's the whole switch: the upgrade button now opens real Stripe checkout (with the customer's email pre-filled), and returning customers are auto-upgraded to Premium in that browser.
5. Stripe handles cards, receipts, recurring billing, and state sales tax, and pays out to your bank.

**Honest limitation of this starter setup:** Premium activation happens in the customer's browser via the redirect, not through verified server-side confirmation — and accounts don't sync across devices. This is fine for launch (the content is client-visible anyway), but before scaling up, move to real accounts + Stripe webhooks (Firebase/Supabase) so payment status is verified and follows the user everywhere.

Simpler alternatives: **Gumroad** or **Lemon Squeezy** (even easier than Stripe, they also handle sales tax for you).

### More ways to earn from this same content

- **Sell printable packs** — export lesson worksheets as PDFs and sell bundles on **Teachers Pay Teachers**, **Etsy**, or **Gumroad** ("Grade 3 Complete Pack", "50 Moral Stories eBook").
- **Ads** — once you have traffic, Google AdSense on the free pages.
- **One-time lifetime price** — some parents prefer "$39 forever" to a subscription; you can offer both.

## 🚀 Going live on the internet

1. **Host it free**: drag the `brightsprouts` folder into **netlify.com** (or Vercel / GitHub Pages). You get a real URL in about a minute.
2. **Buy a domain** (~$10/year, e.g. brightsprouts.com) and connect it in Netlify.
3. **Important — real accounts**: this starter stores accounts in each visitor's own browser
   (fine for testing and single-family use, but users can't log in from another device, and the
   premium flag lives on their machine). Before charging real customers, move accounts to a real
   backend — **Firebase Authentication** or **Supabase** are free to start and are the standard
   choice for exactly this kind of app. That's also where you'd verify Stripe subscriptions.

## 🎨 Easy customizations

- **Name & branding**: search-and-replace "BrightSprouts" in `index.html` and `js/app.js`; colors live at the top of `css/styles.css`.
- **Pricing / what's free**: `RULES` and `PRICE` at the top of `js/app.js`.
- **Add lessons**: copy any lesson block in `js/lessons1.js` / `lessons2.js` — the format is self-explanatory.
- **Add stories**: append to `js/stories2.js` following the same pattern (id, title, theme, ages, moral, text).

## ✅ Content accuracy

Factual data is verified against outside sources rather than trusted from memory:

| Data | Verified against | Result |
|---|---|---|
| 195 countries & capitals | Wikidata SPARQL | all match |
| 1,950 species claims (flora/fauna) | GBIF occurrence records | verified; 20 errors found & fixed |
| 118 chemical elements | Built from PubChem, cross-checked against Wikidata | 0 symbol errors, all grid positions correct |
| 6,240 generated maths answers | Independently recomputed from each question | 2 generator bugs found & fixed |
| 265 spelling words | dictionaryapi.dev + Wiktionary | all real, correctly spelled |
| 55 formulas | Numerically tested (identities, roots plugged back in, known values) | all correct |
| 288 arithmetic table cells | Recomputed | all correct |

**Known limitation:** prose facts in the science/history lessons and reading-comprehension answer keys are human-written and not machine-verifiable.

## 📁 Files

```
brightsprouts/
├── index.html        ← open this!
├── css/styles.css    ← all styling incl. print layout
└── js/
    ├── lessons1.js   ← Grades 1–6 lesson content
    ├── lessons2.js   ← Grades 7–12 lesson content
    ├── stories1.js   ← stories 1–25
    ├── stories2.js   ← stories 26–50
    └── app.js        ← accounts, plans, math generator, story maker
```
