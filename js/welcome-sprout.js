// BrightSprouts Academy — a friendly sprout that walks across the screen to greet a
// visitor when they open the site, then gently fades away. Purely decorative:
// pointer-events off, shown once per browser session, and skipped for anyone who
// prefers reduced motion.
(function () {
  var SVG = '' +
    '<svg viewBox="0 0 120 150" role="img" aria-label="A little sprout waving hello">' +
      '<defs><radialGradient id="ws-grad" cx="42%" cy="36%" r="70%">' +
        '<stop offset="0" stop-color="#95e3a6"/><stop offset="1" stop-color="#57bd69"/>' +
      '</radialGradient></defs>' +
      '<ellipse class="ws-shadow" cx="60" cy="142" rx="30" ry="6" fill="rgba(30,45,30,.18)"/>' +
      // legs (behind the body)
      '<g class="ws-leg ws-leg-l"><rect x="47" y="103" width="9" height="25" rx="4.5" fill="#49ad5c"/>' +
        '<ellipse cx="49" cy="129" rx="8" ry="5" fill="#3d9950"/></g>' +
      '<g class="ws-leg ws-leg-r"><rect x="64" y="103" width="9" height="25" rx="4.5" fill="#49ad5c"/>' +
        '<ellipse cx="71" cy="129" rx="8" ry="5" fill="#3d9950"/></g>' +
      // body + face + sprout on top
      '<g class="ws-body">' +
        '<path class="ws-arm ws-arm-l" d="M34 80 q-10 6 -9 18" stroke="#49ad5c" stroke-width="8" stroke-linecap="round" fill="none"/>' +
        '<path class="ws-arm ws-arm-r" d="M86 80 q10 6 9 18" stroke="#49ad5c" stroke-width="8" stroke-linecap="round" fill="none"/>' +
        '<ellipse cx="60" cy="82" rx="31" ry="30" fill="url(#ws-grad)"/>' +
        '<ellipse cx="60" cy="92" rx="19" ry="14" fill="#a6ecb4" opacity=".55"/>' +
        '<circle cx="45" cy="88" r="5" fill="#ff9db0" opacity=".9"/>' +
        '<circle cx="75" cy="88" r="5" fill="#ff9db0" opacity=".9"/>' +
        '<ellipse cx="51" cy="78" rx="4.6" ry="5.6" fill="#2d2a4a"/>' +
        '<ellipse cx="69" cy="78" rx="4.6" ry="5.6" fill="#2d2a4a"/>' +
        '<circle cx="52.6" cy="76" r="1.6" fill="#fff"/><circle cx="70.6" cy="76" r="1.6" fill="#fff"/>' +
        '<path d="M50 91 q10 9 20 0" stroke="#2d2a4a" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<path d="M60 53 q0 -10 0 -16" stroke="#54b866" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<path class="ws-leaf ws-leaf-l" d="M60 41 q-17 -5 -23 -19 q15 -1 23 13 z" fill="#7ed957"/>' +
        '<path class="ws-leaf ws-leaf-r" d="M60 41 q17 -5 23 -19 q-15 -1 -23 13 z" fill="#66c778"/>' +
      '</g>' +
    '</svg>';

  function run() {
    try { if (sessionStorage.getItem("bs_welcomed")) return; sessionStorage.setItem("bs_welcomed", "1"); } catch (e) {}
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var stage = document.createElement("div");
    stage.className = "ws-stage";
    stage.setAttribute("aria-hidden", "true");
    stage.innerHTML = '<div class="ws-walker' + (reduce ? " ws-still" : "") + '">' + SVG + "</div>";
    document.body.appendChild(stage);
    setTimeout(function () { if (stage.parentNode) stage.parentNode.removeChild(stage); }, reduce ? 2300 : 6300);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
