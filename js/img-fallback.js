// BrightSprouts Academy: a friendly stand-in for pictures that cannot load.
//
// Written without em dashes.
//
// The site shows several hundred photographs it does not host: species pictures from Wikimedia
// and country flags from flagcdn. With no internet, or on a flaky one, every one of those turned
// into the browser's broken-image icon, which to a child looks like the site is broken.
//
// This swaps in a drawn placeholder instead, so a lesson with no photo still looks deliberate.
// It listens in the CAPTURE phase because an image's error event does not bubble, which is the
// reason a plain document-level listener would never fire.
(function () {
  "use strict";

  // Drawn rather than fetched, because a placeholder that itself needs the network would be a
  // poor sort of placeholder.
  var PLACEHOLDER =
    "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90">' +
      '<rect width="120" height="90" rx="8" fill="#f2eefc"/>' +
      '<rect x="8" y="8" width="104" height="74" rx="5" fill="#fff" stroke="#d9d2ee" stroke-width="2"/>' +
      '<circle cx="42" cy="34" r="8" fill="#ffd166"/>' +
      '<path d="M18 70 L44 44 L62 62 L78 50 L102 70 Z" fill="#c9dff0"/>' +
      '<path d="M18 70 L44 44 L62 62 L78 50 L102 70 Z" fill="none" stroke="#a9c6d8" stroke-width="1.5"/>' +
      '<text x="60" y="86" text-anchor="middle" font-family="Verdana,Arial,sans-serif" ' +
      'font-size="8" fill="#8a86a8">picture needs internet</text></svg>');

  function swap(img) {
    if (!img || img.dataset.imgFallback === "1") return;
    img.dataset.imgFallback = "1";
    // Keep the original address so the picture can come back on the next visit with a signal.
    if (img.src && img.src.indexOf("data:") !== 0) img.dataset.originalSrc = img.src;
    img.classList.add("imgoffline");
    if (!img.getAttribute("title")) {
      img.setAttribute("title", "This picture is stored on another website, so it needs internet.");
    }
    if (!img.alt) img.alt = "Picture not available offline";
    img.src = PLACEHOLDER;
  }

  // Capture phase: an image error event does not bubble, so a listener on document only sees it
  // on the way DOWN. This is the whole trick, and getting it wrong is why the site had none.
  document.addEventListener("error", function (e) {
    var el = e.target;
    if (el && el.tagName === "IMG") swap(el);
  }, true);

  // Anything that already failed before this file ran, and anything added later.
  function sweep() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (im.complete && im.naturalWidth === 0 && im.src && im.src.indexOf("data:") !== 0) swap(im);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", sweep);
  else sweep();
  window.addEventListener("load", sweep);

  window.ImgFallback = { placeholder: PLACEHOLDER, _test: { swap: swap, sweep: sweep } };
})();
