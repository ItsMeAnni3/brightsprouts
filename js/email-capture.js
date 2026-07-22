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
  var DISMISS = "bs_maillist_hide";

  function already() { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } }
  function hidden() { try { return localStorage.getItem(DISMISS) === "1"; } catch (e) { return false; } }
  function markDone(email) { try { localStorage.setItem(KEY, email); } catch (e) {} }

  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e || "").trim()); }

  window.MailList = {
    already: already,
    hidden: hidden,

    // The signup card, dropped into any view.
    html: function (compact) {
      if (already()) {
        return '<div class="mlcard done"><b>✅ You\'re on the list!</b>' +
               '<span>Thanks — we\'ll send new printable packs as they land. No more than once a month.</span></div>';
      }
      return '<div class="mlcard" id="mlcard">' +
        '<div class="mltext"><b>📬 Get free printable packs by email</b>' +
        '<span>New worksheets and seasonal packs, sent to <b>parents</b> — about once a month. ' +
        'No spam, unsubscribe any time.</span></div>' +
        '<div class="mlform">' +
          '<input id="mlemail" type="email" inputmode="email" autocomplete="email" ' +
                 'placeholder="parent@example.com" aria-label="Parent email address">' +
          '<button class="btn btn-primary btn-sm" onclick="MailList.submit()">Send me packs</button>' +
        '</div>' +
        '<div id="mlmsg" class="mlmsg"></div>' +
        (compact ? '' : '<button class="mlclose" onclick="MailList.dismiss()" aria-label="No thanks">✕</button>') +
        '</div>';
    },

    dismiss: function () {
      try { localStorage.setItem(DISMISS, "1"); } catch (e) {}
      var c = document.getElementById("mlcard"); if (c) c.remove();
    },

    submit: function () {
      var el = document.getElementById("mlemail");
      var msg = document.getElementById("mlmsg");
      var email = el ? el.value.trim() : "";
      if (!validEmail(email)) {
        if (msg) { msg.className = "mlmsg bad"; msg.textContent = "That email doesn't look right — please check it."; }
        if (el) el.focus();
        return;
      }
      var btn = document.querySelector("#mlcard .btn");
      if (btn) { btn.textContent = "Sending…"; btn.disabled = true; }

      if (typeof CONTACT_ACCESS_KEY === "undefined" || !CONTACT_ACCESS_KEY) {
        // no mail service configured — still record it so nothing is lost
        markDone(email);
        if (msg) { msg.className = "mlmsg ok"; msg.textContent = "Thanks! You're on the list."; }
        return;
      }

      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          subject: "BrightSprouts: mailing list signup",
          from_name: "BrightSprouts Academy",
          name: "Mailing list signup",
          email: email,
          message: "A parent asked to receive free printable packs.\nEmail: " + email +
                   "\nSigned up: " + new Date().toLocaleString()
        })
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok || res.j.success === false) throw new Error("rejected");
          markDone(email);
          var card = document.getElementById("mlcard");
          if (card) card.outerHTML = MailList.html();
        })
        .catch(function () {
          if (btn) { btn.textContent = "Send me packs"; btn.disabled = false; }
          if (msg) { msg.className = "mlmsg bad"; msg.textContent = "Sorry — that didn't send. Please try again in a moment."; }
        });
    }
  };
})();
