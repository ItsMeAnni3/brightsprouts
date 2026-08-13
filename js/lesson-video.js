// BrightSprouts Academy: the lesson videos.
//
// A short animated clip that teaches the lesson, sitting at the top of the lesson it belongs to,
// so a child can watch and listen instead of only reading. Same characters, same voice as the
// rest of the site, with the words burned into the picture so a child who is still learning to
// read can follow along.
//
// Written without em dashes.
//
// Three decisions worth knowing about:
//   * Nothing downloads until a child presses play. A poster card stands in for the video, and
//     the real <video> element is only created on the click. A 5MB file that nobody watches is
//     5MB of someone's data allowance wasted, and these lessons are opened far more often than
//     the video is wanted.
//   * The files are deliberately NOT in the service worker precache. An installed app should
//     stay small; the mp3 narration was left out for the same reason. A video needs internet,
//     everything else on the page does not.
//   * No autoplay, ever. A video that starts talking on its own is startling for a small child
//     and rude on a shared device.
(function () {
  "use strict";

  // Where the files live. One place to change if they ever move to a CDN or to YouTube.
  var BASE = "video/";

  // grade -> subject -> the clip. `seconds` is only used for the label on the poster card.
  // Kindergarten's maths lesson is keyed `counting`, not `math`, so it is listed as such.
  var VIDEOS = {
    0: { counting: { file: "k-counting-to-100.mp4", seconds: 60 } },
    1: { math: { file: "g1-adding-to-20.mp4", seconds: 60 } },
    2: { math: { file: "g2-tens-and-ones.mp4", seconds: 60 } },
    3: { math: { file: "g3-multiplication.mp4", seconds: 120 } }
  };

  function get(grade, subject) {
    var byGrade = VIDEOS[String(grade)] || VIDEOS[grade];
    if (!byGrade) return null;
    return byGrade[subject] || null;
  }

  function mmss(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  // The poster card. Deliberately not a <video> yet: see the note at the top.
  function html(grade, subject, title) {
    var v = get(grade, subject);
    if (!v) return "";
    var t = title || "this lesson";
    return '<div class="lessonvid no-print" id="lessonvid" data-src="' + BASE + v.file + '">' +
             '<button type="button" class="lessonvid-poster" onclick="LessonVideo.play()" ' +
                     'aria-label="Play the video for ' + t.replace(/"/g, "&quot;") + '">' +
               '<span class="lessonvid-play" aria-hidden="true">▶</span>' +
               '<span class="lessonvid-copy">' +
                 '<b>Watch this lesson</b>' +
                 '<small>' + mmss(v.seconds) + ' &middot; Sprout and Bud explain it out loud</small>' +
               '</span>' +
             '</button>' +
           '</div>';
  }

  // Swap the poster for a real player and start it. Called by the poster button.
  function play() {
    var wrap = document.getElementById("lessonvid");
    if (!wrap || wrap.querySelector("video")) return;
    var src = wrap.getAttribute("data-src");

    // Stop any read-aloud first, or the narrator and the video talk over each other.
    try { if (window.Voice && Voice.stop) Voice.stop(); } catch (e) {}
    try { if (window.Speech && Speech.stop) Speech.stop(); } catch (e) {}

    var v = document.createElement("video");
    v.className = "lessonvid-player";
    v.setAttribute("controls", "");
    v.setAttribute("playsinline", "");        // iPhones otherwise hijack it into fullscreen
    v.setAttribute("controlsList", "nodownload");
    v.preload = "auto";
    v.src = src;

    // If the file is missing or there is no internet, say so in words a parent can act on
    // rather than leaving a dead black rectangle.
    v.addEventListener("error", function () {
      wrap.innerHTML = '<p class="lessonvid-err">The video could not load. It needs an internet ' +
                       'connection. Everything else in this lesson works offline.</p>';
    });

    wrap.innerHTML = "";
    wrap.appendChild(v);
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* a blocked play just leaves the controls showing */ });
  }

  window.LessonVideo = { get: get, html: html, play: play };
})();
