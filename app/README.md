# The BrightSprouts app, for the App Store and Google Play

Everything needed to put BrightSprouts on both stores. The content is not duplicated anywhere: both
apps show the live website, so pushing to GitHub updates the app too, with no new store review.

```
app/
  android/   twa-manifest.json + BUILD.md   Google Play. Buildable on your Windows PC.
  ios/       capacitor.config.json + BUILD.md   Apple. Needs a Mac.
  store-listing/   the text and graphics both stores ask for
```

Two files also went into the site itself, because both stores require them:

- **`privacy.html`** at the site root. Both stores refuse a submission without a privacy policy URL.
- **`.well-known/assetlinks.json`** plus a **`.nojekyll`** file at the root. This is what removes
  the browser address bar from the Android app. It needs one value from you: see below.

---

## What is done, and what only you can do

| | Status |
|---|---|
| App shell configuration, both platforms | **Done.** Filled in for brightsprouts.academy. |
| Store listing text, both stores | **Done.** Written to each store's character limits. |
| Privacy policy | **Done and live.** Written from what the app actually does. |
| Data safety and App Privacy answers | **Done.** They match the privacy policy. |
| Android app-link file | **Done except one value.** Needs your signing key fingerprint. |
| Building the `.aab` | Needs Node.js installed. About an afternoon. |
| Building the iOS app | **Needs a Mac.** Cannot be done from Windows by anyone. |
| Screenshots and the feature graphic | Needs you. `store-listing/screenshots.md` says which screens and how. |
| Developer accounts | Needs you. $25 once for Google, $99 a year for Apple. |

---

## Do Android first

It costs $25 once instead of $99 a year, it builds on the PC you already have, and Google has no
rule against web-based apps. Apple does, and that rule is the main risk in this whole project.

Order of work:

1. Read `android/BUILD.md`.
2. Build the app with PWABuilder or Bubblewrap. You get an `.aab` and a signing key.
3. **Back up the signing key.** Lose it and you can never update the listing again.
4. Put its SHA-256 fingerprint into `.well-known/assetlinks.json` in the site repo, push, and check
   `https://brightsprouts.academy/.well-known/assetlinks.json` loads.
5. Take the screenshots.
6. Create the Play account, paste the listing from `store-listing/google-play.md`, upload, submit.

---

## Before you spend $99 on Apple

Read the top of `ios/BUILD.md` properly. The short version:

- **You cannot build or submit from Windows.** Xcode is macOS only. No workaround exists.
- **Apple Guideline 4.2 rejects repackaged websites.** A plain wrapper of this site is exactly what
  that rule describes. The app needs real native features to pass, and `ios/BUILD.md` lists four
  that suit this app, the strongest being a visible offline-download screen built on the service
  worker that already exists.
- **Apple takes 15 to 30 percent of subscriptions bought in the app.** About $1.05 a month per
  subscriber on $6.99, under the Small Business Program. Keeping Premium sign-up on the website
  avoids it.

None of that makes Apple a bad idea. It makes it the second thing to do, not the first.

---

## Keeping the apps up to date

Content changes need nothing. Both apps load the live site.

Rebuild and re-upload only when the shell itself changes: the icon, the name, the package settings,
or a new native feature. When you do, raise `appVersionCode` in `android/twa-manifest.json` first,
and the build number in Xcode for iOS. Both stores refuse a repeat of a version already uploaded.

Keep bumping `CACHE` in `sw.js` as you already do. That is what pushes new content to people who
have the app installed.
