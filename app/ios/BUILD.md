# Building the iOS app (Apple App Store)

## Read this before spending anything

Two hard facts, neither of which I can work around for you:

**1. You cannot build or submit an iOS app from Windows.** Apple requires Xcode, which only runs on
macOS, and submissions go through it. There is no supported alternative. Your options are a Mac, a
borrowed Mac for an afternoon, or a rented cloud Mac (MacStadium, or a macOS runner on GitHub
Actions, which is free for public repositories).

**2. Apple may reject this app.** Guideline 4.2, "Minimum Functionality", says an app that is only a
repackaged website does not belong in the App Store. A plain wrapper around brightsprouts.academy is
exactly the thing that guideline describes, so this is a real risk, not a theoretical one. Google
has no equivalent rule, which is why Android is the sensible first store.

There is also a money question. If the iOS app unlocks the $6.99 Premium subscription, Apple
generally requires their in-app purchase system, which takes 15 to 30 percent (15% under the Small
Business Program, which you would qualify for). On $6.99 that is about $1.05 per subscriber per
month. The usual way round it: keep Premium sign-up on the website, and let the app sign in to an
account that is already paid for. Do not put a link in the app that sends people to your website to
pay, as Apple's rules on that are narrow and enforcement changes.

---

## How to make it pass review

If you want this app approved, it needs to do something a browser tab cannot. Pick at least two:

- **Offline downloads.** The service worker already caches the whole site. Make that visible: a
  "Download for offline" screen with a real progress bar and a list of what is saved. This is the
  strongest single answer to 4.2, and the plumbing is already there.
- **Practice reminders.** Local notifications, scheduled on the device, no server needed:
  "Time for today's worksheet." Add `@capacitor/local-notifications`.
- **Apple Pencil on the tracing sheets.** Pressure and tilt in the tracing and Trace and Draw
  activities. Genuinely native, and a good fit for a handwriting app.
- **Share sheet.** Send a finished worksheet or custom story straight to Files, Mail or a printer
  using the native share sheet rather than the browser print dialog.

Write what you added into the "Notes for review" box when you submit. Reviewers read it, and saying
"this is a wrapper" without naming the native features is how a rejection happens.

---

## The build, on a Mac

```bash
cd app/ios
npm run setup        # installs Capacitor and creates the ios/ project
npm run open         # opens Xcode
```

`capacitor.config.json` is already set to load `https://brightsprouts.academy`, so the app shows the
live site and updates when you push, with no App Store review for content changes.

In Xcode:

1. Signing and Capabilities: choose your Apple Developer team. The bundle id is
   `academy.brightsprouts.app`.
2. Set the version to 1.0.0 and the build to 1.
3. Add the app icon: use `icons/icon-512.png` from the site repo. Xcode will generate the sizes.
4. Product → Archive → Distribute App → App Store Connect.

`limitsNavigationsToAppBoundDomains` is already set to true in the config. That keeps the web view
locked to your own domain, which is both safer and something reviewers like to see on a children's
app.

---

## App Store Connect

Costs **$99 per year**, renewed annually, and it stops working if you let it lapse.

Use the text in `../store-listing/apple-app-store.md`.

Because this is for children you must complete the **Kids Category** requirements if you list it
there. Doing so means: no third-party analytics, no third-party advertising, and no sending personal
information off the device without verified parental consent.

Note this one carefully: **the Kids Category rules would require turning off GoatCounter.** It is
cookieless and collects no personal data, but Apple's rule on third-party analytics in the Kids
Category is written strictly. If you want the Kids Category badge, set `ANALYTICS.goatcounter` to
an empty string in `js/analytics.js` for the app build, or accept listing under Education instead.
Education is the simpler path and is what the listing text assumes.

Privacy policy URL: `https://brightsprouts.academy/privacy.html`

The App Privacy questionnaire answers are in `../store-listing/apple-app-store.md`. Answer them
honestly and make sure they match `privacy.html`; a mismatch is a rejection, and a later
discrepancy can pull the app.
