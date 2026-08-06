// BrightSprouts Academy: the Flora & Fauna hover card.
//
// Hovering, tapping, or tabbing to a species chip in the Flora & Fauna table (Let's Learn
// Geography) opens the real photo already sourced from Wikimedia Commons in a card the child
// can spin like they are holding it, and reads the species out loud. There is no licensed
// 360-degree photography of wild species to draw on for 430 different plants and animals, so
// "spin it" is a 3D tilt card built from the one real photo each species already has, not a
// literal sphere of images.
//
// Written without em dashes.
(function () {
  "use strict";

  var HOVER_DELAY = 380;   // brushing past a chip while scrolling must not open anything
  var LEAVE_GRACE = 160;   // time to move the mouse from the chip onto the card itself
  var SPIN_SPEED = 0.22;   // degrees per frame of the idle spin, until the child takes over

  var card = null, backdrop = null;
  var hoverTimer = null, leaveTimer = null;
  var chipEl = null;        // the chip the open card belongs to
  var pinned = false;       // opened by click/tap/keyboard: stays open until closed on purpose
  var rot = 0, dragging = false, dragStartX = 0, dragStartRot = 0, autoSpin = true, rafId = null;

  function build() {
    if (card) return;
    backdrop = document.createElement("div");
    backdrop.className = "sp-pop-backdrop";
    card = document.createElement("div");
    card.className = "sp-pop";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-label", "Species card");
    card.innerHTML =
      '<button type="button" class="sp-pop-close" aria-label="Close">✕</button>' +
      '<div class="sp-pop-stage"><div class="sp-pop-cardface">' +
        '<div class="sp-pop-side sp-pop-front"><img class="sp-pop-img" alt=""><span class="sp-pop-front-emoji"></span></div>' +
        '<div class="sp-pop-side sp-pop-back"><p class="sp-pop-back-emoji"></p>' +
          '<p class="sp-pop-back-name"></p><p class="sp-pop-back-country"></p></div>' +
      '</div></div>' +
      '<p class="sp-pop-hint">Drag the photo to spin it</p>' +
      '<div class="sp-pop-info">' +
        '<p class="sp-pop-name"></p>' +
        '<p class="sp-pop-sci"></p>' +
        '<p class="sp-pop-where"></p>' +
        '<button type="button" class="sp-pop-say">🔊 Say it again</button>' +
      '</div>';
    document.body.appendChild(backdrop);
    document.body.appendChild(card);

    backdrop.addEventListener("click", close);
    card.querySelector(".sp-pop-close").addEventListener("click", close);
    card.querySelector(".sp-pop-say").addEventListener("click", function () { speak(); });
    card.addEventListener("mouseenter", function () { if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; } });
    card.addEventListener("mouseleave", function () { if (!pinned) scheduleClose(); });

    var stage = card.querySelector(".sp-pop-stage");
    var face = card.querySelector(".sp-pop-cardface");

    function down(x) {
      dragging = true; autoSpin = false; dragStartX = x; dragStartRot = rot;
      face.style.transition = "none";
    }
    function move(x) { if (!dragging) return; rot = dragStartRot + (x - dragStartX) * 0.5; paint(face); }
    function up() { dragging = false; face.style.transition = ""; }

    stage.addEventListener("mousedown", function (e) { down(e.clientX); e.preventDefault(); });
    window.addEventListener("mousemove", function (e) { move(e.clientX); });
    window.addEventListener("mouseup", up);
    stage.addEventListener("touchstart", function (e) { pin(); down(e.touches[0].clientX); }, { passive: true });
    stage.addEventListener("touchmove", function (e) { move(e.touches[0].clientX); }, { passive: true });
    stage.addEventListener("touchend", up);

    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && isOpen()) close(); });

    // The card is fixed to the viewport, anchored to a chip that is part of a long, scrollable
    // table. If the page scrolls while a hover preview is open, the chip moves out from under
    // it and the card is left floating over unrelated content. A pinned card (opened by a click,
    // tap or keyboard) is treated like a normal dialog and stays put while the page behind it
    // scrolls, matching how the rest of the site's modals behave.
    window.addEventListener("scroll", function () { if (!pinned && isOpen()) close(); }, true);
  }

  function paint(face) { face.style.transform = "rotateY(" + rot + "deg)"; }

  function tick() {
    if (isOpen()) {
      if (autoSpin && !dragging) { rot += SPIN_SPEED; paint(card.querySelector(".sp-pop-cardface")); }
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function isOpen() { return card && card.classList.contains("open"); }

  function pin() { pinned = true; backdrop.classList.add("show"); }

  function scheduleClose() {
    if (leaveTimer) clearTimeout(leaveTimer);
    leaveTimer = setTimeout(close, LEAVE_GRACE);
  }

  function caption(data) {
    var kind = data.kind === "flora" ? "flora" : "fauna";
    return data.name + ". " + data.sci + ". A " + kind + " species found in " + data.country + ".";
  }

  // The chip carries its data in data-* attributes rather than a JS property, because it is
  // built as an HTML string on the server-style render path (spChip in app.js) and only becomes
  // a real element once the browser parses it.
  function readData(chip) {
    var sci = chip.dataset.spSci || "";
    return {
      name: chip.dataset.spName || "",
      sci: sci,
      country: chip.dataset.spCountry || "",
      kind: chip.dataset.spKind || "fauna",
      img: (typeof SPECIES_IMG !== "undefined" ? SPECIES_IMG[sci] : "") || ""
    };
  }

  function speak() {
    if (typeof Speech !== "undefined" && chipEl) {
      // straight information about a real animal or plant, so this is the grown-up reading voice
      Speech.speak(caption(readData(chipEl)), null, "en", null, "mom");
    }
  }

  function place() {
    var r = chipEl.getBoundingClientRect();
    var w = card.offsetWidth, h = card.offsetHeight;
    var left = Math.min(Math.max(8, r.left), window.innerWidth - w - 8);
    var top = r.bottom + 10;
    if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 10);
    card.style.left = left + "px";
    card.style.top = top + "px";
  }

  function open(chip, keepPinned) {
    build();
    // Re-entering the chip that is already open (a hover jitter, or a click on the chip a
    // preview is already showing) should not restart the speech or the spin, but a click MUST
    // still be able to upgrade an unpinned preview into a pinned card, or clicking what you are
    // already hovering would silently do nothing.
    if (chipEl === chip && isOpen()) {
      if (keepPinned && !pinned) pin();
      place();
      return;
    }
    chipEl = chip;
    pinned = !!keepPinned;
    if (pinned) backdrop.classList.add("show"); else backdrop.classList.remove("show");

    var d = readData(chip);
    var img = card.querySelector(".sp-pop-img");
    var frontEmoji = card.querySelector(".sp-pop-front-emoji");
    // a handful of species have no free-license photo yet (see js/species-img.js); an <img>
    // with no real source would otherwise show a broken-image icon instead of failing gracefully
    if (d.img) {
      img.src = d.img; img.alt = d.name;
      img.style.display = ""; frontEmoji.style.display = "none";
    } else {
      img.removeAttribute("src"); img.alt = "";
      img.style.display = "none";
      frontEmoji.textContent = d.kind === "flora" ? "🌿" : "🐾";
      frontEmoji.style.display = "flex";
    }
    card.querySelector(".sp-pop-name").textContent = d.name;
    card.querySelector(".sp-pop-sci").textContent = d.sci;
    card.querySelector(".sp-pop-where").textContent =
      (d.kind === "flora" ? "🌿 Flora" : "🐾 Fauna") + " of " + d.country;
    card.querySelector(".sp-pop-back-emoji").textContent = d.kind === "flora" ? "🌿" : "🐾";
    card.querySelector(".sp-pop-back-name").textContent = d.name;
    card.querySelector(".sp-pop-back-country").textContent = d.country;

    rot = 0; autoSpin = true; dragging = false;
    var face = card.querySelector(".sp-pop-cardface");
    face.style.transition = "none"; paint(face);
    requestAnimationFrame(function () { face.style.transition = ""; });

    card.classList.add("open");
    place();
    if (!rafId) tick();
    speak();
  }

  function close() {
    if (!card) return;
    card.classList.remove("open");
    backdrop.classList.remove("show");
    pinned = false; chipEl = null;
    if (typeof Speech !== "undefined") Speech.stop();
  }

  // ---------- wiring: one set of delegated listeners for every chip on the page ----------
  // Delegated on document rather than attached per-chip, so a chip works the moment it is
  // rendered into the page, however many worksheets or country tables generate it.
  function wire() {
    document.addEventListener("mouseenter", function (e) {
      var chip = e.target.closest ? e.target.closest(".spchip") : null;
      if (!chip || !chip.dataset.spName) return;
      if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
      // a timer left over from the chip the pointer was just on must not fire later and swap
      // the card back to that chip after the pointer has already moved on to this one
      if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
      hoverTimer = setTimeout(function () { open(chip, false); }, HOVER_DELAY);
    }, true);
    document.addEventListener("mouseleave", function (e) {
      var chip = e.target.closest ? e.target.closest(".spchip") : null;
      if (!chip) return;
      if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
      if (!pinned) scheduleClose();
    }, true);
    document.addEventListener("click", function (e) {
      var chip = e.target.closest ? e.target.closest(".spchip") : null;
      if (!chip || !chip.dataset.spName) return;
      open(chip, true);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var chip = e.target.closest ? e.target.closest(".spchip") : null;
      if (!chip || !chip.dataset.spName) return;
      e.preventDefault();
      open(chip, true);
    });
  }

  window.SpeciesPopup = {
    wire: wire,
    open: open,
    close: close,
    _test: { readData: readData, caption: caption }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();
