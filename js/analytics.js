// BrightSprouts Academy — privacy-first analytics.
//
// WHY NOT GOOGLE ANALYTICS: this is a site directed at children, so COPPA applies. GA4 sets
// identifiers and profiles visitors, which creates real compliance exposure on a kids' site.
// The two options below are cookieless, store no personal data and need no cookie banner.
//
// TO TURN IT ON: pick ONE, paste your value, deploy. Until then nothing loads and nothing is sent.
//
//   Plausible  — plausible.io, paid, simplest dashboards. Set ANALYTICS.plausible to your domain:
//                ANALYTICS.plausible = "brightsprouts.academy";
//   GoatCounter — goatcounter.com, free for small sites. Set ANALYTICS.goatcounter to your code
//                (the "yourcode" part of yourcode.goatcounter.com):
//                ANALYTICS.goatcounter = "brightsprouts";
//
var ANALYTICS = {
  plausible: "",
  goatcounter: ""
};

(function () {
  function add(src, attrs) {
    var s = document.createElement("script");
    s.async = true; s.defer = true; s.src = src;
    Object.keys(attrs || {}).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
  }

  if (ANALYTICS.plausible) {
    add("https://plausible.io/js/script.js", { "data-domain": ANALYTICS.plausible });
  } else if (ANALYTICS.goatcounter) {
    add("https://gc.zgo.at/count.js", { "data-goatcounter": "https://" + ANALYTICS.goatcounter + ".goatcounter.com/count" });
  }

  // The app is a single page, so a normal pageview tag only ever records one visit. This reports
  // each in-app view (#lessons, #library, a lesson, a game) as its own page so you can see what
  // people actually use.
  var last = "";
  function report() {
    var path = location.pathname + (location.hash || "");
    if (path === last) return;
    last = path;
    try {
      if (window.plausible) window.plausible("pageview", { u: location.origin + path });
      else if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: path });
    } catch (e) { /* analytics must never break the app */ }
  }
  if (ANALYTICS.plausible || ANALYTICS.goatcounter) {
    window.addEventListener("hashchange", report);
    setInterval(report, 3000);   // the app changes view without touching the hash in places
  }
})();
