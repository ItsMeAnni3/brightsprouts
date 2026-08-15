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
  //
  // A subject that is taught in UNITS (the "Let's Learn" courses) nests its clips under `units`,
  // keyed by unit index, so a video only shows on the unit it actually teaches. Without that, one
  // clip would sit on top of all twelve geography units, including the ones it says nothing about.
  var VIDEOS = {
    0: { counting: { file: "k-counting-to-100.mp4", seconds: 60 } },
    1: { math: { file: "g1-adding-to-20.mp4", seconds: 60 } },
    2: { math: { file: "g2-tens-and-ones.mp4", seconds: 60 } },
    3: { math: { file: "g3-multiplication.mp4", seconds: 120 } },
    4: { math: { file: "g4-division-fractions.mp4", seconds: 60 } },
    // Let's Learn Geography. The clip sits on the three places a visitor could reasonably meet it:
    // the "The Globe" tab (whose own lesson text says flat maps always have to stretch something,
    // which IS this video's turn), and inside the Geography Course below.
    //
    // Geography course. The globe clip is listed under BOTH unit 0 and unit 1 on purpose.
    // Unit 1 ("Maps, Globes & Directions") is what it teaches in depth, but unit 0 ("My Place in
    // the World") is where the category opens, and unit 0 already teaches that a globe is a model
    // of the whole round Earth and asks "What is a globe?" in its questions. Listing it only on
    // unit 1 meant anyone opening Let's Learn Geography saw no video at all.
    13: {
      globe: { file: "geo-globe.mp4", seconds: 60 },
      geocourse: {
        units: {
          0: { file: "geo-globe.mp4", seconds: 60 },
          1: { file: "geo-globe.mp4", seconds: 60 }
        }
      }
    },
    // Let's Learn Computer Science. Unlike Geography this course is a flat list of subjects with
    // no units, and `basics` ("What Is a Computer?") is both the tab the category opens on
    // (js/app.js picks it as the default subject for grade 17) and the lesson this clip teaches,
    // so one entry is enough. The clip also answers "what is an algorithm" with a worked binary
    // search, which is the next rung up, so it is listed on `algorithms` too.
    17: {
      basics: { file: "cs-what-is-cs.mp4", seconds: 60 },
      algorithms: { file: "cs-what-is-cs.mp4", seconds: 60 }
    },
    // Let's Learn The History of Us. The whole category is only these two tabs, and one clip
    // covers both because it is about how they FIT TOGETHER: all of Earth's history squeezed
    // into a single day, with the entire human story in the last few seconds before midnight.
    // That framing is the earth lesson's own closing line, and it is the reason the human story
    // gets a separate timeline, so the clip belongs on both tabs rather than either one alone.
    19: {
      earth: { file: "hist-earth-and-us.mp4", seconds: 60 },
      eras: { file: "hist-earth-and-us.mp4", seconds: 60 }
    },
    // Let's Learn Geology. Four tabs; the clip teaches the rock cycle, which is what the first
    // two share: `rocks` names the three families and `cycle` shows them turning into each
    // other. `rocks` is the tab the category opens on. Not listed on `earth` (inside the Earth)
    // or `fossils`, which the clip only brushes past.
    20: {
      rocks: { file: "geo-rock-cycle.mp4", seconds: 60 },
      cycle: { file: "geo-rock-cycle.mp4", seconds: 60 }
    },
    // Let's Learn Paleontology. Four tabs; the clip teaches how a fossil actually forms, which
    // is the `digsite` tab and the one the category opens on. Deliberately NOT on `dinosaurs`,
    // `prehistoric` or `extinction`: it mentions dinosaurs but teaches none of them.
    26: {
      digsite: { file: "paleo-how-fossils-form.mp4", seconds: 60 }
    }
  };

  function get(grade, subject, unitIdx) {
    var byGrade = VIDEOS[String(grade)] || VIDEOS[grade];
    if (!byGrade) return null;
    var entry = byGrade[subject];
    if (!entry) return null;
    if (entry.units) return entry.units[unitIdx || 0] || null;
    return entry;
  }

  function mmss(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  // The poster card. Deliberately not a <video> yet: see the note at the top.
  function html(grade, subject, title, unitIdx) {
    var v = get(grade, subject, unitIdx);
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
