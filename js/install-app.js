// BrightSprouts Academy — "Install the app" support.
// Registers the service worker (offline + instant start) and offers an install button.
// Android/desktop Chrome fire beforeinstallprompt; iOS gives no prompt at all, so we show
// the Share → Add to Home Screen steps instead.
(function () {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () { /* offline support just won't switch on */ });
  });

  var deferred = null;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);   // iPadOS reports as Mac
  var installed = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

  function dismissed() { try { return localStorage.getItem("bs_install_hide") === "1"; } catch (e) { return false; } }
  function hide() {
    try { localStorage.setItem("bs_install_hide", "1"); } catch (e) {}
    var b = document.getElementById("installbar");
    if (b) b.remove();
  }
  window.bsDismissInstall = hide;

  function iosSteps() {
    var b = document.getElementById("installbar");
    if (b) b.innerHTML =
      '<div class="ibtext"><b>Add BrightSprouts to your Home Screen</b>' +
      '<span>Tap the Share button ' +
      '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 3l4 4h-3v8h-2V7H8l4-4zM5 13v6h14v-6h2v8H3v-8h2z" fill="currentColor"/></svg>' +
      ' at the bottom of Safari, then choose <b>Add to Home Screen</b>.</span></div>' +
      '<button class="btn btn-sm btn-ghost" onclick="bsDismissInstall()">Got it</button>';
  }

  function showBar(onInstall) {
    if (installed || dismissed() || document.getElementById("installbar")) return;
    var bar = document.createElement("div");
    bar.id = "installbar";
    bar.className = "installbar no-print";
    bar.innerHTML =
      '<img src="icons/icon-96.png" alt="" width="38" height="38">' +
      '<div class="ibtext"><b>Get the BrightSprouts app</b>' +
      '<span>Install it for a full-screen app that works without internet.</span></div>' +
      '<button class="btn btn-sm btn-primary" id="ibgo">Install</button>' +
      '<button class="btn btn-sm btn-ghost" onclick="bsDismissInstall()">Not now</button>';
    document.body.appendChild(bar);
    document.getElementById("ibgo").addEventListener("click", onInstall);
  }

  // Android / desktop Chrome & Edge
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    showBar(function () {
      deferred.prompt();
      deferred.userChoice.then(function () { hide(); deferred = null; });
    });
  });

  window.addEventListener("appinstalled", hide);

  // iOS: no prompt exists, so show the manual steps on a short delay
  if (isIOS && !installed) {
    setTimeout(function () { showBar(iosSteps); }, 2500);
  }
})();
