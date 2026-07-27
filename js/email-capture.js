// BrightSprouts Academy — parent mailing-list signup.
//
// Posts through the same Web3Forms account the contact form already uses, so there is no second
// service to set up. Signups arrive in your inbox tagged "Mailing list signup"; move them into a
// mailing tool (Buttondown, ConvertKit, Mailchimp) whenever you are ready.
//
// COPPA: this asks a PARENT for their address and says so plainly. Never collect a child's email,
// name, age or school. Keep it that way.
(function () {
  var KEY = "bs_maillist";          // remembers who already signed up, so we stop asking
  var GRADE = "bs_maillist_grade";  // the one grade that family is signed up for
  var DISMISS = "bs_maillist_hide";

  // Packs are made per grade, so a family picks the one that matches their child. One grade at a
  // time: a family can switch whenever their child moves up, but never holds two at once.
  //
  // Worth being clear-eyed about what this can and cannot do. The browser can only remember what
  // THIS browser did — a second device, a different browser or a cleared cache starts fresh. The
  // rule is really enforced wherever the mailing list lives, by keeping one row per email address;
  // that is why the grade travels in the signup email. Treat this as the polite front door, not
  // the lock. See README.
  var GRADES = [
    { v: "K", label: "Kindergarten" },
    { v: "1", label: "Grade 1" }, { v: "2", label: "Grade 2" }, { v: "3", label: "Grade 3" },
    { v: "4", label: "Grade 4" }, { v: "5", label: "Grade 5" }, { v: "6", label: "Grade 6" },
    { v: "7", label: "Grade 7" }, { v: "8", label: "Grade 8" }, { v: "9", label: "Grade 9" },
    { v: "10", label: "Grade 10" }, { v: "11", label: "Grade 11" }, { v: "12", label: "Grade 12" }
  ];
  var editing = false;              // true while a family is switching to a different grade

  function already() { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } }
  function hidden() { try { return localStorage.getItem(DISMISS) === "1"; } catch (e) { return false; } }
  function savedGrade() { try { return localStorage.getItem(GRADE) || ""; } catch (e) { return ""; } }
  function savedEmail() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
  function markDone(email, grade) {
    try { localStorage.setItem(KEY, email); localStorage.setItem(GRADE, grade); } catch (e) {}
  }
  function gradeLabel(v) {
    for (var i = 0; i < GRADES.length; i++) if (GRADES[i].v === v) return GRADES[i].label;
    return "";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || "").trim()); }

  window.MailList = {
    already: already,
    hidden: hidden,
    grade: savedGrade,
    grades: function () { return GRADES.slice(); },

    // The signup card, dropped into any view.
    html: function (compact) {
      var have = savedGrade();
      if (already() && !editing) {
        return '<div class="mlcard done"><b>✅ You\'re on the list' +
               (have ? ' for ' + esc(gradeLabel(have)) : '') + '!</b>' +
               '<span>Thanks — we\'ll send ' + (have ? esc(gradeLabel(have)) + ' ' : '') +
               'printable packs as they land. No more than once a month.</span>' +
               '<span class="mlswitch">One grade per family. Child moved up, or signing up for a ' +
               'sibling instead? <button type="button" class="mllink" onclick="MailList.change()">' +
               'Switch grade</button></span></div>';
      }
      var opts = '<option value="">Choose a grade…</option>' + GRADES.map(function (g) {
        return '<option value="' + g.v + '"' + (g.v === have ? ' selected' : '') + '>' + esc(g.label) + '</option>';
      }).join("");
      return '<div class="mlcard" id="mlcard">' +
        '<div class="mltext"><b>📬 ' + (editing ? 'Switch to a different grade' : 'Get free printable packs by email') + '</b>' +
        '<span>' + (editing
          ? 'Packs are made grade by grade, so we\'ll swap you over — you\'ll stop getting ' +
            esc(gradeLabel(have)) + ' packs and start getting the new ones.'
          : 'New worksheets and seasonal packs, sent to <b>parents</b> — about once a month. ' +
            'No spam, unsubscribe any time.') + '</span></div>' +
        '<div class="mlform">' +
          '<select id="mlgrade" aria-label="Which grade are the packs for?">' + opts + '</select>' +
          '<input id="mlemail" type="email" inputmode="email" autocomplete="email" ' +
                 'placeholder="parent@example.com" aria-label="Parent email address" value="' +
                 esc(editing ? savedEmail() : "") + '">' +
          '<button class="btn btn-primary btn-sm" onclick="MailList.submit()">' +
            (editing ? 'Switch my grade' : 'Send me packs') + '</button>' +
        '</div>' +
        '<div class="mlnote">📦 One grade per family — pick the one that fits your child best. ' +
        'You can switch any time as they move up.</div>' +
        '<div id="mlmsg" class="mlmsg"></div>' +
        (compact || editing ? '' : '<button class="mlclose" onclick="MailList.dismiss()" aria-label="No thanks">✕</button>') +
        '</div>';
    },

    // Switching, not adding: the new grade replaces the old one.
    change: function () {
      editing = true;
      var card = document.querySelector(".mlcard");
      if (card) card.outerHTML = MailList.html();
      var sel = document.getElementById("mlgrade");
      if (sel) sel.focus();
    },

    dismiss: function () {
      try { localStorage.setItem(DISMISS, "1"); } catch (e) {}
      var c = document.getElementById("mlcard"); if (c) c.remove();
    },

    submit: function () {
      var el = document.getElementById("mlemail");
      var sel = document.getElementById("mlgrade");
      var msg = document.getElementById("mlmsg");
      var email = el ? el.value.trim() : "";
      var grade = sel ? sel.value : "";
      var was = savedGrade();
      var switching = editing;

      // Grade first: it is the new field, and the one a parent is most likely to skip.
      if (!grade || !gradeLabel(grade)) {
        if (msg) { msg.className = "mlmsg bad"; msg.textContent = "Please choose which grade the packs are for."; }
        if (sel) sel.focus();
        return;
      }
      if (!validEmail(email)) {
        if (msg) { msg.className = "mlmsg bad"; msg.textContent = "That email doesn't look right — please check it."; }
        if (el) el.focus();
        return;
      }
      if (switching && grade === was) {
        if (msg) { msg.className = "mlmsg bad"; msg.textContent = "You're already signed up for " + gradeLabel(was) + " packs."; }
        if (sel) sel.focus();
        return;
      }
      var btn = document.querySelector("#mlcard .btn");
      var btnText = switching ? "Switch my grade" : "Send me packs";
      if (btn) { btn.textContent = "Sending…"; btn.disabled = true; }

      function finish() {
        editing = false;
        markDone(email, grade);
        var card = document.getElementById("mlcard");
        if (card) card.outerHTML = MailList.html();
      }

      if (typeof CONTACT_ACCESS_KEY === "undefined" || !CONTACT_ACCESS_KEY) {
        // no mail service configured — still record it so nothing is lost
        finish();
        return;
      }

      // The grade rides along in both the subject and the body: the subject so a filter can sort
      // signups into per-grade folders, the body so switches are obvious when deduping by address.
      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          subject: "BrightSprouts: mailing list signup — " + gradeLabel(grade) +
                   (switching ? " (grade switch)" : ""),
          from_name: "BrightSprouts Academy",
          name: "Mailing list signup",
          email: email,
          grade: gradeLabel(grade),
          message: (switching
              ? "A parent switched which grade their free printable packs are for.\n" +
                "Previously: " + (gradeLabel(was) || "unknown") + "\nNow: " + gradeLabel(grade) +
                "\nPlease replace their old entry rather than adding a second one."
              : "A parent asked to receive free printable packs.\nGrade: " + gradeLabel(grade)) +
            "\nEmail: " + email +
            "\nSubmitted: " + new Date().toLocaleString() +
            "\n\nOne grade per family: if this address is already on the list, update that row " +
            "instead of adding another."
        })
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || res.j.success === false) throw new Error("rejected");
          finish();
        })
        .catch(function () {
          if (btn) { btn.textContent = btnText; btn.disabled = false; }
          if (msg) { msg.className = "mlmsg bad"; msg.textContent = "Sorry — that didn't send. Please try again in a moment."; }
        });
    }
  };
})();
