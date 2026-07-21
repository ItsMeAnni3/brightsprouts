// BrightSprouts Academy — service worker.
// Makes the installed app open instantly and keep working with no internet.
// Bump CACHE whenever you deploy so users pick up the new version.
const CACHE = "brightsprouts-v2";

const PRECACHE = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./manifest.webmanifest",
  "./globe-map.png",
  "./js/lessons1.js",
  "./js/lessons2.js",
  "./js/lessons3.js",
  "./js/lessons4.js",
  "./js/lessons5.js",
  "./js/species-img.js",
  "./js/lessons6.js",
  "./js/lessons7.js",
  "./js/elements.js",
  "./js/lessons8.js",
  "./js/lessons9.js",
  "./js/coloring.js",
  "./js/draw-trace.js",
  "./js/books.js",
  "./js/pd-books.js",
  "./js/magic-maker.js",
  "./js/engineer.js",
  "./js/plant-game.js",
  "./js/rewards.js",
  "./js/arcade.js",
  "./js/spelling-bee.js",
  "./js/games2.js",
  "./js/speech.js",
  "./js/globe-data.js",
  "./js/globe.js",
  "./js/shop.js",
  "./js/lessons10.js",
  "./js/lessons11.js",
  "./js/earth-art.js",
  "./js/human-art.js",
  "./js/lessons12.js",
  "./js/lessons13.js",
  "./js/biology.js",
  "./js/bio-art.js",
  "./js/chemistry.js",
  "./js/chem-art.js",
  "./js/physics.js",
  "./js/phys-art.js",
  "./js/geology.js",
  "./js/spanish.js",
  "./js/timemoney.js",
  "./js/space.js",
  "./js/sel.js",
  "./js/compsci.js",
  "./js/history-us.js",
  "./js/history-us2.js",
  "./js/geo-course.js",
  "./js/grade-extras.js",
  "./js/lessons0.js",
  "./js/phonics.js",
  "./js/trace-grades.js",
  "./js/story-art.js",
  "./js/stories1.js",
  "./js/stories2.js",
  "./js/app.js",
  "./js/welcome-sprout.js",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

// Install: pull the whole app shell into the cache.
self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // addAll fails the whole install if any one file 404s, so add them individually
    await Promise.all(PRECACHE.map((url) => c.add(url).catch(() => {})));
    self.skipWaiting();
  })());
});

// Activate: drop caches from older versions.
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", (e) => { if (e.data === "skipWaiting") self.skipWaiting(); });

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Let anything off-site (fonts, flag images, book text) go straight to the network.
  if (url.origin !== self.location.origin) return;

  // Pages: try the network first so a fresh deploy shows up, fall back to cache offline.
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const c = await caches.open(CACHE);
        c.put("./index.html", fresh.clone());
        return fresh;
      } catch (err) {
        return (await caches.match("./index.html")) || (await caches.match("./")) || Response.error();
      }
    })());
    return;
  }

  // Everything else: serve cached instantly, refresh in the background.
  e.respondWith((async () => {
    const cached = await caches.match(req);
    const network = fetch(req).then((res) => {
      if (res && res.status === 200) caches.open(CACHE).then((c) => c.put(req, res.clone()));
      return res;
    }).catch(() => null);
    return cached || (await network) || Response.error();
  })());
});
