# Building the Android app (Google Play)

You can do all of this on your Windows PC. No Mac needed.

The app is a **Trusted Web Activity**: a thin Android shell that opens
brightsprouts.academy full screen with no browser bar. Google accepts this; it is the intended
route for a PWA. There is no second copy of the content to keep in sync, so when you push to
GitHub the app updates too.

---

## Before you start

| What | Cost | Notes |
|---|---|---|
| Google Play Developer account | **$25, once** | Not per year. play.google.com/console |
| Node.js 18 or newer | free | Needed for the build tool. You do not have it yet. |
| Java JDK 17 | free | Bubblewrap can install this for you when it asks |
| Android SDK | free | Bubblewrap can install this too |

---

## The easy route (no command line)

1. Go to **pwabuilder.com** and enter `https://brightsprouts.academy`.
2. Press **Package for stores → Android**.
3. Set the package id to **`academy.brightsprouts.app`** and the app name to
   **BrightSprouts Academy**.
4. Download the zip. It contains `app-release-bundle.aab` (upload this) and
   `signing-key-info.txt` plus a keystore.
5. **Keep the keystore and its passwords somewhere safe and backed up.** If you lose it you can
   never update the app under the same listing again. Do not commit it to git.
6. Open `assetlinks.json` in the zip, copy the SHA-256 fingerprint out of it, and follow
   "Finish the link" below.

## The command line route (more control)

```bash
npm install -g @bubblewrap/cli
cd app/android
bubblewrap init --manifest https://brightsprouts.academy/manifest.webmanifest
```

`twa-manifest.json` in this folder is already filled in for BrightSprouts, so when Bubblewrap asks,
accept the values it reads from it. Then:

```bash
bubblewrap build
```

That produces `app-release-bundle.aab` for the Play Console and `app-release-signed.apk` for
testing on a device.

---

## Finish the link (do not skip this)

Until this is done the app opens with a browser address bar across the top, which looks broken
and Google may reject it.

1. Get the SHA-256 fingerprint of your signing key:
   ```bash
   keytool -list -v -keystore android.keystore -alias brightsprouts
   ```
   Copy the line labelled `SHA256:` (a long string of colon-separated hex pairs).
2. Open `.well-known/assetlinks.json` in the site repo.
3. Replace `REPLACE_WITH_YOUR_SIGNING_KEY_SHA256_FINGERPRINT` with that fingerprint.
4. Commit and push, then check it is live:
   `https://brightsprouts.academy/.well-known/assetlinks.json`
5. Reinstall the app. The address bar should be gone.

**If you let Google sign the app for you** (Play App Signing, which is the default and is
recommended), use the fingerprint from **Play Console → Release → Setup → App integrity**, not the
one from your local keystore. Putting the wrong one in is the single most common reason the address
bar stays.

The site already has a `.nojekyll` file at the root. That is what stops GitHub Pages from hiding
the `.well-known` folder, which is a dot-folder and would otherwise never be served.

---

## Play Console setup

Use the text in `../store-listing/google-play.md` for the listing.

Two sections need care because this is a children's app:

- **Target audience and content**: declare it as appealing to children. You will then have to
  complete the **Families policy** requirements.
- **Data safety**: the answers are in `../store-listing/google-play.md`. They must match
  `privacy.html` on the site, and Google does check.

Privacy policy URL to give them: `https://brightsprouts.academy/privacy.html`

---

## Updating later

For a content change on the website, do nothing. The app loads the live site, so it is already
updated.

Only rebuild and upload a new `.aab` if you change the app shell itself, for example the icon, the
name, or the package settings. When you do, raise `appVersionCode` by 1 in `twa-manifest.json`
first; Play refuses an upload that reuses a version code.
