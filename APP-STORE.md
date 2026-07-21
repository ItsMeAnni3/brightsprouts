# Turning BrightSprouts into an installable app

## What you have right now (done, live)

BrightSprouts is a **PWA (Progressive Web App)**. With no store, no fee and no review, anyone can
install it from the website:

| Device | How they install |
|---|---|
| **iPhone / iPad** | Open brightsprouts.academy in **Safari** → Share button → **Add to Home Screen** |
| **Android** | Open in Chrome → an **Install** banner appears (or menu → Install app) |
| **Windows / Mac desktop** | Chrome or Edge → install icon in the address bar |

Once installed it gets its own home-screen icon, opens **full screen with no browser bar**, and the
lessons, worksheets and games **work with no internet** (the service worker caches all 68 app files).

Things that still need a connection: the classic-books text (fetched from Project Gutenberg), the
flag images in Flag Quiz, and the Google font.

**The desktop website is completely unchanged.** A PWA is additive — same site, same URL.

### When you deploy an update
Bump the version in `sw.js`:
```js
const CACHE = "brightsprouts-v1";   // -> v2, v3 …
```
Installed users get the new version on their next launch. If you forget, they may keep seeing the
cached old files.

---

## Path A — Google Play Store (possible from your Windows PC)

Google accepts PWAs directly, wrapped as a **Trusted Web Activity**. This is the realistic
first store.

1. Go to **pwabuilder.com**, enter `https://brightsprouts.academy`, click **Package for stores → Android**.
2. It generates a signed `.aab` file from the PWA that already exists. Keep the signing key safe.
3. Create a **Google Play Developer account — $25 once**, not per year.
4. Upload the `.aab`, add screenshots, a description and a privacy policy.
5. Because it's a kids' app you must complete the **Families / Target Audience** declarations and
   follow the Play Families policy.

Realistic effort: an afternoon. No Mac required.

---

## Path B — Apple App Store (needs hardware you don't have yet)

Hard requirements, none of which can be done from Windows:

- **A Mac** running Xcode. There is no supported way to build or submit an iOS app without one.
  (Cloud Mac rentals such as MacStadium or a GitHub Actions macOS runner are the workaround.)
- **Apple Developer Program — $99/year**, renewed annually.
- **App review**, typically a few days, and it can reject.

Then the technical route:

1. `npm install @capacitor/core @capacitor/cli && npx cap init`
2. Point the `webDir` at this folder, `npx cap add ios`, `npx cap open ios`.
3. Build, sign and upload through Xcode → App Store Connect.

### Two things that will bite you — know them before you spend the $99

**1. Guideline 4.2 — Minimum Functionality.** Apple rejects apps that are "just a repackaged
website." A plain webview wrapper of this site is a genuine rejection risk. To pass, the iOS build
should add real native behavior — offline downloads, push notifications for practice reminders,
Apple Pencil support for the tracing sheets, or similar.

**2. In-app purchase.** If the iOS app unlocks Premium, Apple's rules generally require **their**
in-app purchase system, which takes **15–30%** (15% under the Small Business Program, under $1M/yr)
— instead of Stripe's ~3%. On $7.99/month that is roughly $1.20/subscriber/month to Apple at 15%.
US apps may now link out to external payment, but the rules are narrow and still changing.

A common approach: keep Premium sign-up on the **website**, and let the iOS app sign in to an
account that is already paid for.

---

## Recommendation

1. **Ship the PWA** — already done. Put "Add to Home Screen" instructions on the site so parents
   know it exists.
2. **Do Google Play next** — $25, no Mac, reuses this exact PWA.
3. **Do Apple last**, once you know the revenue justifies $99/year plus Mac access plus Apple's cut.
