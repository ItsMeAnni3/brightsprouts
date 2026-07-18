// BrightSprouts Academy — Read Aloud, using the browser's built-in (free) Web Speech API.
// No account, no cost, no network — the voice ships with the operating system.
const Speech = {
  supported() { return typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined"; },
  speaking() { return this.supported() && window.speechSynthesis.speaking; },
  _voice() {
    if (!this.supported()) return null;
    const vs = window.speechSynthesis.getVoices() || [];
    // prefer a natural-sounding English voice; fall back to any English, then anything
    return vs.find(v => /en[-_]?(GB|US)/i.test(v.lang) && /natural|google|samantha|libby|aria/i.test(v.name))
        || vs.find(v => /^en/i.test(v.lang))
        || vs[0] || null;
  },
  stop() { if (this.supported()) window.speechSynthesis.cancel(); },
  // speak plain text; onend() fires when finished or stopped
  speak(text, onend) {
    if (!this.supported() || !text) { if (onend) onend(); return false; }
    this.stop();
    // long texts are chunked by sentence so a child can stop mid-way and browsers don't truncate
    const chunks = String(text).replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g) || [String(text)];
    let i = 0;
    const v = this._voice();
    const next = () => {
      if (i >= chunks.length) { if (onend) onend(); return; }
      const u = new SpeechSynthesisUtterance(chunks[i++].trim());
      u.rate = 0.92; u.pitch = 1.05;
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
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
