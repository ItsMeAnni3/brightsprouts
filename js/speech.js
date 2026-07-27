// BrightSprouts Academy — the two halves of the browser's built-in (free) Web Speech API:
//   Speech — Read Aloud (speech synthesis). No account, no cost, no network: the voice ships
//            with the operating system.
//   Listen — the microphone (speech recognition), used by Sprout's chat window.
//
// PRIVACY NOTE, please read before extending Listen: recognition is NOT local the way the voice
// is. Chrome and Edge stream the recorded audio to a cloud service to transcribe it; only Safari
// does some of it on device. That is why the microphone is opt-in per tap, never listens on page
// load, and stops the moment it has a sentence. See README for what to tell families.
const Speech = {
  supported() { return typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined"; },
  speaking() { return this.supported() && window.speechSynthesis.speaking; },
  _voice(lang) {
    if (!this.supported()) return null;
    const vs = window.speechSynthesis.getVoices() || [];
    if (lang === "es") {
      // a real Spanish voice only — an English voice would mispronounce every word
      return vs.find(v => /^es/i.test(v.lang) && /natural|google|helena|laura|sabina|mónica|monica|elvira/i.test(v.name))
          || vs.find(v => /^es/i.test(v.lang)) || null;
    }
    // prefer a natural-sounding English voice; fall back to any English, then anything
    return vs.find(v => /en[-_]?(GB|US)/i.test(v.lang) && /natural|google|samantha|libby|aria/i.test(v.name))
        || vs.find(v => /^en/i.test(v.lang))
        || vs[0] || null;
  },
  // is a Spanish voice installed on this device?
  hasSpanish() {
    return !!this._voice("es");
  },
  stop() { if (this.supported()) window.speechSynthesis.cancel(); },
  // speak plain text; onend() fires when finished or stopped. lang "es" speaks Spanish.
  // rate overrides the default pace (the Spelling Bee uses a slow one for "say it slowly").
  speak(text, onend, lang, rate) {
    if (!this.supported() || !text) { if (onend) onend(); return false; }
    this.stop();
    // long texts are chunked by sentence so a child can stop mid-way and browsers don't truncate
    const chunks = String(text).replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g) || [String(text)];
    let i = 0;
    const es = lang === "es";
    const v = this._voice(es ? "es" : "en");
    const next = () => {
      if (i >= chunks.length) { if (onend) onend(); return; }
      const u = new SpeechSynthesisUtterance(chunks[i++].trim());
      // a little slower in Spanish — learners need to catch each syllable
      u.rate = rate || (es ? 0.8 : 0.92); u.pitch = 1.05;
      // with no Spanish voice we still tag the utterance es-ES so the browser can pick its own
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = es ? "es-ES" : "en-GB"; }
      u.onend = next;
      u.onerror = () => { if (onend) onend(); };
      window.speechSynthesis.speak(u);
    };
    next();
    return true;
  }
};
// ---- Listen: the microphone half of the Web Speech API ----
// One recogniser at a time. start() reports back through callbacks rather than events so the
// caller stays simple: onPartial(text) while the child is still talking, onResult(text) once,
// onError(code) if it fails, onEnd() always last.
const Listen = {
  _rec: null,
  _active: false,
  supported() {
    return typeof window !== "undefined" &&
      !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },
  listening() { return this._active; },
  start(cb) {
    cb = cb || {};
    if (!this.supported()) { if (cb.onError) cb.onError("unsupported"); if (cb.onEnd) cb.onEnd(); return false; }
    this.stop();
    // Sprout must stop talking first, or the microphone transcribes Sprout's own voice.
    if (typeof Speech !== "undefined") Speech.stop();

    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    let rec;
    try { rec = new Rec(); } catch (e) { if (cb.onError) cb.onError("unsupported"); if (cb.onEnd) cb.onEnd(); return false; }
    rec.lang = "en-GB";
    rec.interimResults = true;      // show the words as the child says them
    rec.continuous = false;         // stop at the end of one question
    rec.maxAlternatives = 1;

    let finalText = "", done = false;
    const finish = () => {
      if (done) return;
      done = true;
      this._active = false; this._rec = null;
      if (cb.onEnd) cb.onEnd();
    };
    rec.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interim += r[0].transcript;
      }
      if (interim && cb.onPartial) cb.onPartial(interim.trim());
      if (finalText && cb.onResult) { const t = finalText.trim(); finalText = ""; if (t) cb.onResult(t); }
    };
    // "aborted" is what fires when we stop it on purpose, so it is not worth reporting
    rec.onerror = (e) => { if (e && e.error !== "aborted" && cb.onError) cb.onError(e.error || "error"); };
    rec.onend = finish;

    try { rec.start(); } catch (e) { finish(); if (cb.onError) cb.onError("error"); return false; }
    this._rec = rec; this._active = true;
    return true;
  },
  // stop listening but keep whatever has been recognised so far
  stop() {
    if (!this._rec) return;
    const r = this._rec;
    this._rec = null; this._active = false;
    try { r.stop(); } catch (e) { try { r.abort(); } catch (e2) {} }
  }
};

// some browsers load voices asynchronously; nudge them
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = function () {};
  try { window.speechSynthesis.getVoices(); } catch (e) {}
}
