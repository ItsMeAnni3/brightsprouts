// BrightSprouts Academy: the logo.
//
// Drawn in code rather than saved as a picture, for the same reasons the rest of the site is:
// it stays sharp at any size, it costs one HTTP request that is already being made, and it works
// with no internet.
//
// Written without em dashes.
//
// The mark is a seedling coming up in front of a rising sun. Bright and Sprouts, which is the
// whole name, and a growing thing is the right emblem for a place that teaches children.
// Three things keep it from looking flat:
//   * the leaves and the sun each have their own gradient, lit from the top left like everything
//     else on the site, so the logo belongs to the same world as the diagrams
//   * the seedling casts a small shadow onto the mound it is growing from
//   * the badge has a lit top edge and a shadow underneath, so it sits ON the page
(function () {
  "use strict";

  var MOTTO = "Learning that grows with your child";

  // A unique suffix per instance. Two logos on one page must not share gradient ids, or the
  // second one silently recolours the first.
  var n = 0;
  function uid() { return "lg" + (++n); }

  // The mark on its own: a rounded badge with a sprout in it.
  function mark(size, opts) {
    var o = opts || {};
    var u = uid();
    var s = '<svg class="bs-logo-mark ' + (o.cls || "") + '" viewBox="0 0 100 100" ' +
      (size ? 'width="' + size + '" height="' + size + '" ' : "") +
      'role="img" aria-label="BrightSprouts Academy">';
    s += '<defs>' +
      '<linearGradient id="' + u + 'bg" x1="0" y1="0" x2="0.4" y2="1">' +
      '<stop offset="0" stop-color="#8f6ad6"/><stop offset="1" stop-color="#5b3aa8"/></linearGradient>' +
      '<radialGradient id="' + u + 'sun" cx="38%" cy="34%" r="70%">' +
      '<stop offset="0" stop-color="#fff3c4"/><stop offset="1" stop-color="#f0a92b"/></radialGradient>' +
      '<linearGradient id="' + u + 'lf1" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#9be86a"/><stop offset="1" stop-color="#3f9c4a"/></linearGradient>' +
      '<linearGradient id="' + u + 'lf2" x1="1" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#7fd857" stop-opacity="1"/><stop offset="1" stop-color="#2f7a3c"/></linearGradient>' +
      '<linearGradient id="' + u + 'soil" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#c98a5a"/><stop offset="1" stop-color="#7a4a1d"/></linearGradient>' +
      '<filter id="' + u + 'sh" x="-30%" y="-30%" width="170%" height="170%">' +
      '<feDropShadow dx="0" dy="2.5" stdDeviation="2" flood-color="#2d2a4a" flood-opacity=".34"/></filter>' +
      '</defs>';

    // the badge, with a lit top edge. A light badge is for placing the mark ON the purple bar,
    // where a purple badge simply disappears.
    if (!o.bare) {
      var badge = o.light ? "#fff6e5" : ("url(#" + u + "bg)");
      s += '<rect x="4" y="4" width="92" height="92" rx="26" fill="' + badge + '" filter="url(#' + u + 'sh)"/>';
      s += '<rect x="10" y="9" width="80" height="30" rx="18" fill="#ffffff" opacity="' +
        (o.light ? ".55" : ".16") + '"/>';
    }

    // Below about 40 pixels the rays and the spark stop being detail and become dirt, and the
    // seedling itself gets lost. The simple build drops them and grows everything else instead.
    if (!o.simple) {
      s += '<circle cx="50" cy="46" r="20" fill="url(#' + u + 'sun)"/>';
      for (var i = 0; i < 8; i++) {
        var a = (i * 45 - 90) * Math.PI / 180;
        s += '<path d="M' + (50 + Math.cos(a) * 24).toFixed(1) + ' ' + (46 + Math.sin(a) * 24).toFixed(1) +
          ' L' + (50 + Math.cos(a) * 30).toFixed(1) + ' ' + (46 + Math.sin(a) * 30).toFixed(1) +
          '" stroke="#ffd166" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>';
      }
      s += '<path d="M22 78 q28 -12 56 0 v6 q-28 10 -56 0 z" fill="url(#' + u + 'soil)"/>';
      s += '<ellipse cx="50" cy="76" rx="13" ry="3.4" fill="#5a3412" opacity=".38"/>';
      s += '<path d="M50 76 q0 -14 0 -22" stroke="#2f7a3c" stroke-width="4.4" fill="none" stroke-linecap="round"/>';
      s += '<path d="M50 58 q-16 -3 -20 -17 q17 -2 20 17 z" fill="url(#' + u + 'lf1)"/>';
      s += '<path d="M50 54 q16 -4 20 -19 q-18 -1 -20 19 z" fill="url(#' + u + 'lf2)"/>';
      s += '<path d="M46 55 q-9 -4 -12 -11" stroke="#ffffff" stroke-width="1.6" fill="none" opacity=".5" stroke-linecap="round"/>';
      s += '<path d="M54 51 q9 -5 12 -12" stroke="#ffffff" stroke-width="1.6" fill="none" opacity=".5" stroke-linecap="round"/>';
      s += '<path d="M76 26 l1.9 4.4 4.7 .6 -3.5 3.2 .9 4.7 -4 -2.3 -4 2.3 .9 -4.7 -3.5 -3.2 4.7 -.6 z" ' +
        'fill="#fff8e0" opacity=".95"/>';
      return s + '</svg>';
    }

    // ---- the simple build, for small sizes and for the app icon at a glance ----
    s += '<circle cx="50" cy="44" r="26" fill="url(#' + u + 'sun)"/>';
    s += '<path d="M18 80 q32 -13 64 0 v7 q-32 11 -64 0 z" fill="url(#' + u + 'soil)"/>';
    s += '<path d="M50 80 q0 -18 0 -28" stroke="#2f7a3c" stroke-width="7" fill="none" stroke-linecap="round"/>';
    s += '<path d="M50 60 q-22 -4 -27 -23 q23 -3 27 23 z" fill="url(#' + u + 'lf1)"/>';
    s += '<path d="M50 55 q22 -5 27 -25 q-24 -1 -27 25 z" fill="url(#' + u + 'lf2)"/>';
    return s + '</svg>';
  }

  // The full lockup: mark, name, and the motto underneath it.
  function full(opts) {
    var o = opts || {};
    var size = o.size || 84;
    return '<div class="bs-logo ' + (o.cls || "") + '">' +
      mark(size) +
      '<div class="bs-logo-words">' +
        '<div class="bs-logo-name"><span>Bright</span><span class="bs-logo-name2">Sprouts</span>' +
        '<span class="bs-logo-acad">Academy</span></div>' +
        '<p class="bs-logo-motto">' + MOTTO + '</p>' +
      '</div></div>';
  }

  // A small one for the top bar, where the name is already set in text beside it.
  function inline(size) {
    return mark(size || 30, { cls: "bs-logo-inline", simple: true, light: true });
  }

  window.Logo = {
    motto: MOTTO,
    mark: mark,
    full: full,
    inline: inline,
    _test: { uid: uid }
  };
})();
