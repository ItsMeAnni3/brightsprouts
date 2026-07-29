// BrightSprouts Academy: the shelf art for Books & Stories.
//
// The books lie on their sides in a pile, spines towards you, so a child can read every title
// straight across without tipping their head. Each one gets a cover colour and a little drawn
// emblem from its genre, so the pile is worth looking at as well as reading.
//
// Written without em dashes.
(function () {
  "use strict";

  // A lit disc, the same trick the diagrams use: gradient body, highlight, contact shadow.
  function orb(id, r) {
    return '<ellipse cx="0" cy="' + (r * 0.92) + '" rx="' + (r * 0.8) + '" ry="' + (r * 0.18) +
      '" fill="#2d2a4a" opacity=".2"/>' +
      '<circle cx="0" cy="0" r="' + r + '" fill="url(#' + id + ')"/>' +
      '<ellipse cx="' + (-r * 0.3) + '" cy="' + (-r * 0.36) + '" rx="' + (r * 0.26) + '" ry="' + (r * 0.17) +
      '" fill="#fff" opacity=".55" transform="rotate(-28 ' + (-r * 0.3) + ' ' + (-r * 0.36) + ')"/>';
  }
  function grad(id, a, b) {
    return '<radialGradient id="' + id + '" cx="34%" cy="26%" r="78%">' +
      '<stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></radialGradient>';
  }

  // genre -> cover colours and the emblem drawn on the spine
  var GENRES = {
    "Fantasy": {
      c1: "#8a5cf0", c2: "#5b3aa8", ink: "#fff",
      art: function (u) {
        return grad(u, "#ffe9a8", "#e0a52b") + orb(u, 13) +
          '<path d="M0 -7 l2.2 4.6 5 .7 -3.6 3.5 .9 5 -4.5 -2.4 -4.5 2.4 .9 -5 -3.6 -3.5 5 -.7 z" fill="#fff8e0"/>';
      } },
    "Fairy Tale": {
      c1: "#f06fa8", c2: "#b8347a", ink: "#fff",
      art: function (u) {
        return grad(u, "#fff0f7", "#f0a8cc") + orb(u, 13) +
          '<path d="M-8 3 l1.6 -9 4.4 4.6 2 -7 2 7 4.4 -4.6 1.6 9 z" fill="#ffd166"/>' +
          '<rect x="-8" y="3" width="16" height="3" rx="1.4" fill="#e0a52b"/>';
      } },
    "Animal Stories": {
      c1: "#e08a3c", c2: "#a15618", ink: "#fff",
      art: function (u) {
        return grad(u, "#ffd9b8", "#c98a4a") + orb(u, 13) +
          '<ellipse cx="0" cy="3" rx="5.4" ry="4.4" fill="#7a4a1d"/>' +
          '<circle cx="-5" cy="-3.6" r="2.4" fill="#7a4a1d"/><circle cx="5" cy="-3.6" r="2.4" fill="#7a4a1d"/>' +
          '<circle cx="-8.6" cy="1" r="2.2" fill="#7a4a1d"/><circle cx="8.6" cy="1" r="2.2" fill="#7a4a1d"/>';
      } },
    "Adventure": {
      c1: "#2f9e6b", c2: "#166b45", ink: "#fff",
      art: function (u) {
        return grad(u, "#d8f2e4", "#7fc4a0") + orb(u, 13) +
          '<circle cx="0" cy="0" r="8.4" fill="none" stroke="#166b45" stroke-width="1.8"/>' +
          '<path d="M4.6 -4.6 L-1.4 1.4 -4.6 4.6 1.4 -1.4 z" fill="#e2453b"/>' +
          '<circle cx="0" cy="0" r="1.6" fill="#166b45"/>';
      } },
    "Mystery": {
      c1: "#3f4a7a", c2: "#232a4f", ink: "#fff",
      art: function (u) {
        return grad(u, "#e6ecff", "#93a3d8") + orb(u, 13) +
          '<circle cx="-1.6" cy="-1.6" r="5.4" fill="none" stroke="#232a4f" stroke-width="2.2"/>' +
          '<path d="M2.4 2.4 L7.4 7.4" stroke="#232a4f" stroke-width="2.8" stroke-linecap="round"/>';
      } },
    "Science Fiction": {
      c1: "#2f7fd8", c2: "#17457f", ink: "#fff",
      art: function (u) {
        return grad(u, "#ffd9a8", "#d8792b") + orb(u, 11) +
          '<ellipse cx="0" cy="1" rx="17" ry="4.6" fill="none" stroke="#ffe9a8" stroke-width="2.4" transform="rotate(-18 0 1)"/>';
      } },
    "Fable": {
      c1: "#e8a92b", c2: "#a06f0c", ink: "#fff",
      art: function (u) {
        return grad(u, "#fff4cc", "#e0b84a") + orb(u, 13) +
          '<circle cx="-3.4" cy="-1.6" r="3.2" fill="#fff"/><circle cx="3.4" cy="-1.6" r="3.2" fill="#fff"/>' +
          '<circle cx="-3.4" cy="-1.6" r="1.5" fill="#2d2a4a"/><circle cx="3.4" cy="-1.6" r="1.5" fill="#2d2a4a"/>' +
          '<path d="M-2.4 3.4 h4.8 l-2.4 3 z" fill="#e0902b"/>';
      } },
    "Realistic Fiction": {
      c1: "#d8506a", c2: "#8f2440", ink: "#fff",
      art: function (u) {
        return grad(u, "#ffe0e6", "#f0a0b0") + orb(u, 13) +
          '<path d="M-8 2 L0 -6 L8 2 z" fill="#8f2440"/>' +
          '<rect x="-5.6" y="2" width="11.2" height="6" fill="#c9384f"/>' +
          '<rect x="-1.6" y="4" width="3.2" height="4" fill="#ffe0e6"/>';
      } },
    "Classic": {
      c1: "#8d7a63", c2: "#4f4034", ink: "#fff",
      art: function (u) {
        return grad(u, "#f4ecdc", "#c9b48f") + orb(u, 13) +
          '<rect x="-6.4" y="-6" width="3" height="12" fill="#6b5a44"/>' +
          '<rect x="-1.5" y="-6" width="3" height="12" fill="#6b5a44"/>' +
          '<rect x="3.4" y="-6" width="3" height="12" fill="#6b5a44"/>' +
          '<rect x="-8" y="-8" width="16" height="2.4" rx="1" fill="#8a7458"/>';
      } }
  };
  var FALLBACK = { c1: "#7c5cbf", c2: "#4d3580", ink: "#fff",
    art: function (u) { return grad(u, "#efe6ff", "#b9a4e8") + orb(u, 13); } };

  function forGenre(g) { return GENRES[g] || FALLBACK; }

  // The emblem, ready to drop on a spine. The id is per book so two covers on one page never
  // share a gradient, which would silently recolour one of them.
  function emblem(genre, uid) {
    var t = forGenre(genre);
    return '<svg class="bs-emblem" viewBox="-16 -16 32 34" aria-hidden="true">' +
      '<defs>' + t.art(uid).slice(0, t.art(uid).indexOf("</radialGradient>") + 17) + '</defs>' +
      t.art(uid).slice(t.art(uid).indexOf("</radialGradient>") + 17) + '</svg>';
  }

  // How thick the book looks, from how long it actually is. A short fable should not look like
  // War and Peace, and a child can see the reading commitment before opening it.
  function thickness(words) {
    var w = words || 20000;
    if (w < 15000) return 1;
    if (w < 40000) return 2;
    if (w < 80000) return 3;
    return 4;
  }

  window.BookArt = {
    genres: GENRES,
    forGenre: forGenre,
    emblem: emblem,
    thickness: thickness,
    _test: { fallback: FALLBACK }
  };
})();
