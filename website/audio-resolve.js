/* ------------------------------------------------------------------
   Tiered IPA MP3 resolution: same-origin /audio → S3 URL → POST generate.
   Depends on data.js exposing ZULAPA_PHON_TO_KEY + ZULAPA_AUDIO_VOICE.
   Optional window.__ZULAPA_AUDIO__: ghAudioBase, s3AudioBase, generateUrl, voice.
   ------------------------------------------------------------------ */
(function () {
  function normBase(u) {
    if (!u) return "";
    return String(u).replace(/\/?$/, "/");
  }

  window.resolveIpaAudioUrl = async function resolveIpaAudioUrl(phonText) {
    const map = window.ZULAPA_PHON_TO_KEY || {};
    const key = map[phonText];
    if (!key) return null;

    const cfg = window.__ZULAPA_AUDIO__ || {};
    const voice = cfg.voice || window.ZULAPA_AUDIO_VOICE || "Zeina";
    const origin = typeof location !== "undefined" ? location.origin : "";
    const ghBase = normBase(cfg.ghAudioBase || (origin ? origin + "/audio" : ""));
    const s3Base = normBase(cfg.s3AudioBase || "");
    const genUrl = cfg.generateUrl || "";

    async function tryUrl(url) {
      try {
        let r = await fetch(url, { method: "HEAD", cache: "no-store" });
        if (r.ok) return url;
        if (r.status === 405 || r.status === 501) {
          r = await fetch(url, {
            method: "GET",
            headers: { Range: "bytes=0-0" },
            cache: "no-store",
          });
          if (r.ok || r.status === 206) return url;
        }
      } catch (_) {}
      return null;
    }

    const local = ghBase + key + ".mp3";
    let found = await tryUrl(local);
    if (found) return found;

    if (s3Base) {
      found = await tryUrl(s3Base + key + ".mp3");
      if (found) return found;
    }

    if (!genUrl) return null;
    try {
      const jr = await fetch(genUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phon: phonText, voice }),
      });
      if (!jr.ok) return null;
      const data = await jr.json();
      if (data && data.url) return data.url;
    } catch (_) {}
    return null;
  };
})();
