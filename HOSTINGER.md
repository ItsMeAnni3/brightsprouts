# Moving BrightSprouts from GitHub Pages to Hostinger

Everything in the repo is ready. What is left needs your logins, so it cannot be done for you.
Do the steps in this order. **Do not touch DNS until step 4**, or the site goes down in the gap.

The site is entirely static and routes with `location.hash`, so no rewrite rules and no build
step are needed. It is a straight file copy.

---

## 1. Upload the site to Hostinger

In hPanel, either use **Files > File Manager** and upload into `public_html/`, or set up FTP and
let the GitHub Action do it (step 3). About 163 MB and roughly 1,780 files once `brand/` is
excluded, which the Action already skips because nothing on the site links to it.

If you upload by hand, upload a ZIP and extract it on the server. Uploading 1,780 files one at a
time over FTP is slow and drops connections.

## 2. Issue the SSL certificate  ← the step that breaks things if skipped

hPanel > **Security > SSL**, issue the free certificate for `brightsprouts.academy`, and wait for
it to say Active.

This matters more than it looks. The site is an installable app, and **a service worker only runs
over HTTPS**. Without a certificate: no offline mode, no "install as an app", and the browser
warns people away from a children's site. Confirm SSL is Active *before* DNS moves.

## 3. Turn on automatic deploys (optional but recommended)

In the GitHub repo: **Settings > Secrets and variables > Actions > New repository secret**, and
add three, taken from hPanel > Files > FTP Accounts:

| Secret | Value |
|---|---|
| `FTP_HOST` | the FTP hostname, e.g. `ftp.brightsprouts.academy` |
| `FTP_USER` | the FTP username |
| `FTP_PASSWORD` | that account's password |

`.github/workflows/deploy-hostinger.yml` then uploads changed files on every push to `main`, the
same one-command deploy you have now. Until those secrets exist the job skips itself, so nothing
breaks in the meantime.

## 4. Test BEFORE switching DNS

Hostinger gives every account a temporary URL, and you can also preview by pointing your own
machine at the server. Click through: open a lesson, press play on a video, check a worksheet
prints, and confirm the padlock in the address bar.

Only when that all works, change DNS at **Porkbun** (your nameservers are still Porkbun even
though hosting moved):

- delete the four GitHub A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
  `185.199.111.153`
- add one A record for the apex pointing at the Hostinger IP
- repoint the `www` CNAME away from `itsmeanni3.github.io`

Give it up to an hour, then check the site over https.

## 5. Afterwards

- In the GitHub repo, **Settings > Pages**, set Source to None so two hosts never claim the site.
- Keep the repo. It stays the source of truth and the version history even though it no longer
  publishes the site.
- `CNAME` in the repo root only matters to GitHub Pages. Harmless to leave, tidy to delete once
  Pages is off.

---

## What is already done for you

- **`.htaccess`** with the `.webmanifest` MIME type (the thing most likely to silently kill the
  install prompt), sensible caching, gzip, forced HTTPS, and no directory listings. It also stops
  `sw.js` and `index.html` being cached hard, which otherwise means a deploy never reaches anyone
  who has already visited.
- **The deploy workflow**, skipping itself until configured.
- **`brand/` excluded**: 29 MB and 30 files that nothing on the site references.

## Still broken right now, whichever host you choose

`brightsprouts.academy` currently has three GitHub A records **and** the Hostinger one, so
browsers round-robin and roughly one visitor in four gets a dead address. Fix that at Porkbun
today rather than waiting for the migration:

- delete `195.179.237.217`
- add `185.199.109.153`

That restores the four correct GitHub addresses while you take your time over the move.
