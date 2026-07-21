// BrightSprouts Academy — Read Aloud, using the browser's built-in (free) Web Speech API.
// No account, no cost, no network — the voice ships with the operating system.
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
  speak(text, onend, lang) {
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
      u.rate = es ? 0.8 : 0.92; u.pitch = 1.05;
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
// some browsers load voices asynchronously; nudge them
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = function () {};
  try { window.speechSynthesis.getVoices(); } catch (e) {}
}
