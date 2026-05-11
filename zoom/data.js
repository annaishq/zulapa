/* ------------------------------------------------------------------
   Zulapa Explorer — data loader.
   Fetches db.json (the full lexicon authored by the user) and
   transforms it into the shape the UI expects.

   db.json schema:
     word-X  { name, noun?, verb?, adj?, desc?, etym?, see?, deriv?, glo, cla, writ, phon, phrases[] }
     alt-X   { name, glo, alt:'word-X', orig:'word-X', writ, phon }
     phrase-N{ trad, words:['word-X'|'alt-X'], phrase:'rogana oxau...', see:['card-X'] }
     caption-N { ...like phrase, plus cap }
     card-X  { name, desc (markdown with [text](word-X)|(card-X)|(phrase-N)) }
   ------------------------------------------------------------------ */

window.dataReady = (async function loadData() {
  const useTiny = /[?&]tiny=1\b/.test(location.search);
  const dbFile = useTiny ? "db-tiny.json" : "db.json";
  const db = await fetch(dbFile).then(r => r.json());
  if (useTiny) console.info("[zulapa] loaded TINY dataset (db-tiny.json) — pass without ?tiny=1 for full");

  /* ---- helpers ---- */
  const byWordId = db.word || {};
  const byAltId  = db.alt  || {};
  const byPhrase = db.phrase || {};
  const byCap    = db.caption || {};
  const byCard   = db.card || {};

  // Resolve word-X / alt-X for interlinear rows. glossLine = full markdown `glo` (cf. archeology Markdown).
  // pos = cla on that token (alt uses surface form cla, not target lemma).
  function resolveToken(id) {
    if (byWordId[id]) {
      const w = byWordId[id];
      const slug = w.name;
      const gloss = phraseGlossParts(w);
      const glossLine = phraseGlossLineFromWord(w);
      const pos = String(w.cla || "").toLowerCase();
      return { slug, head: w.name, ipa: w.phon, script: w.writ, gloss, glossLine, pos };
    }
    if (byAltId[id]) {
      const a = byAltId[id];
      const target = byWordId[a.alt] || byWordId[a.orig];
      const slug = target ? target.name : a.name;
      const raw = String(a.glo || a.name || "").trim();
      const gloss = raw.split(/\.+/).filter(Boolean);
      const pos = String(a.cla || "").toLowerCase();
      return { slug, head: a.name, ipa: a.phon, script: a.writ, gloss, glossLine: raw, pos };
    }
    return null;
  }

  function glossParts(w, stripMarkdownFallback) {
    const out = [];
    if (w.noun) out.push(w.noun);
    if (w.verb) out.push(w.verb);
    if (w.adj)  out.push(w.adj);
    if (w.adv)  out.push(w.adv);
    if (!out.length && w.glo) out.push(stripMarkdownFallback ? stripMd(w.glo) : String(w.glo).trim());
    return out;
  }

  /** One row per lexical field: { gloss, pos } for entry card (noun → teal, verb → orange, …). */
  function sensesFromWord(w) {
    const rows = [];
    function add(field) {
      const v = w[field];
      if (!v) return;
      const gloss = stripMd(String(v).trim());
      if (gloss) rows.push({ gloss, pos: field });
    }
    add("noun");
    add("verb");
    add("adj");
    add("adv");
    if (!rows.length && w.glo) {
      const gloss = stripMd(String(w.glo).trim());
      if (gloss) rows.push({ gloss, pos: String(w.cla || "glo").toLowerCase() });
    }
    return rows;
  }

  function pickGlosses(w) {
    return glossParts(w, true);
  }
  function phraseGlossParts(w) {
    return glossParts(w, false);
  }
  function phraseGlossLineFromWord(w) {
    const raw = String(w.glo || "").trim();
    if (raw && /[*[\]]/.test(raw)) return raw;
    const parts = phraseGlossParts(w);
    return parts.length ? parts.join(".") : "";
  }

  function stripMd(s) { return String(s || "").replace(/\*\*/g, "").replace(/\*/g, ""); }

  /* ---- LEX (keyed by name, like 'awi') ---- */
  const LEX = {};
  // Build reverse index: word-id -> appears-in cards (slug list)
  const wordAppearsIn = {};

  for (const id in byWordId) {
    const w = byWordId[id];
    if (!w.name || w.name.length < 1 || w.name.startsWith("$") || /[^a-zA-Z0-9\-]/.test(w.name)) continue;
    // skip the punctuation pseudo-words
    if ([".", ",", "!", "?", "'", ":", ";"].includes(w.name)) continue;

    // Map deriv/see/etym to slug names
    const namesFrom = (arr) => (arr || [])
      .map(x => (byWordId[x] || {}).name)
      .filter(Boolean);

    LEX[w.name] = {
      _id: id,
      head: w.name,
      ipa: w.phon || "",
      script: w.writ || "",
      pos: w.cla || "",
      glosses: pickGlosses(w),
      senses: sensesFromWord(w),
      etym: namesFrom(w.etym),
      deriv: namesFrom(w.deriv),
      see: namesFrom(w.see),
      desc: w.desc || "",
      phrases: w.phrases || [],
    };
  }

  /* ---- ARTICLES (keyed by card name like 'animals', 'grammar') ---- */
  const ARTICLES = {};
  for (const id in byCard) {
    const c = byCard[id];
    if (!c.name) continue;
    ARTICLES[c.name] = {
      _id: id,
      title: c.name,
      summary: firstParagraphSummary(c.desc),
      body: c.desc || "",
      raw: c.desc || "",
    };
    // Reverse index — every word linked from this card gets card in refs
    const links = collectWordLinks(c.desc);
    for (const wname of links) {
      wordAppearsIn[wname] = wordAppearsIn[wname] || new Set();
      wordAppearsIn[wname].add(c.name);
    }
  }
  // Also: phrases linked from cards — and phrases reference words — so phrase words also appear in the parent card.
  for (const id in byCard) {
    const c = byCard[id];
    const phraseIds = collectPhraseLinks(c.desc);
    for (const pid of phraseIds) {
      const p = byPhrase[pid] || byCap[pid];
      if (!p) continue;
      for (const wid of (p.words || [])) {
        const tok = resolveToken(wid);
        if (tok && tok.slug && LEX[tok.slug]) {
          wordAppearsIn[tok.slug] = wordAppearsIn[tok.slug] || new Set();
          wordAppearsIn[tok.slug].add(c.name);
        }
      }
    }
  }
  // Apply refs
  for (const wname in wordAppearsIn) {
    if (LEX[wname]) LEX[wname].refs = [...wordAppearsIn[wname]];
  }

  /* ---- CATEGORIES (curated, mirrors the user's article list) ---- */
  const CATEGORIES = [
    { id:"start",   label:"start here",  articles:["aaa","grammar","phon"] },
    { id:"world",   label:"world",       articles:["myth","gods","hero","kedana","calvin","conrad","ganes","nanes","nature"] },
    { id:"grammar", label:"grammar",     articles:["grammar","verbs","subj","subordinate","accusative","passive","prep","prefix/suffix","sing","order","count","moods","complex","evolution"] },
    { id:"lexicon", label:"lexicon",     articles:["animals","plants","fruits","flowers","food","colors","seasons","family","gender"] },
    { id:"extras",  label:"extras",      articles:["sapho","nuns","misc","corresp","videos","zzz"] },
  ];
  // Filter out missing
  for (const c of CATEGORIES) c.articles = c.articles.filter(a => ARTICLES[a]);

  // Add any uncategorized cards into 'extras' so nothing is unreachable
  const seen = new Set();
  CATEGORIES.forEach(c => c.articles.forEach(a => seen.add(a)));
  const extras = CATEGORIES.find(c => c.id === "extras");
  for (const name in ARTICLES) {
    if (!seen.has(name) && !name.startsWith("zz ") && !name.startsWith("zz -"))
      extras.articles.push(name);
  }
  // The "zz - song" cards go in a songs category
  const songs = Object.keys(ARTICLES).filter(n => n.startsWith("zz - song") || n.startsWith("zz - SONG") || n.startsWith("zz - MEDEA"));
  if (songs.length) CATEGORIES.push({ id:"songs", label:"songs", articles: songs });

  /* ---- composed alt → morpheme ribbon (reference panel) ---- */
  function altMorphRibbon(leafAltId) {
    const leaf = byAltId[leafAltId];
    if (!leaf || leaf.type !== "alt") return null;
    const idMatch = /^alt-(.+)$/.exec(leafAltId);
    if (!idMatch) return null;
    const labels = idMatch[1].split("-");
    const rawGlo = String(leaf.glo || "").trim().replace(/\n/g, ".");
    const glossFragments = rawGlo.split(/\.+/).filter(Boolean);
    if (labels.length < 2 || labels.length !== glossFragments.length) return null;

    const chain = [];
    let cur = leafAltId;
    while (cur) {
      chain.unshift(cur);
      const step = byAltId[cur];
      cur = step && step.prev ? step.prev : null;
    }
    if (chain.length !== labels.length) return null;

    function slugFrom(nodeId) {
      const w = byWordId[nodeId];
      if (w) return w.name;
      const alt = byAltId[nodeId];
      if (!alt) return "";
      const o = alt.orig ? byWordId[alt.orig] : null;
      if (o) return o.name;
      const t = alt.alt ? byWordId[alt.alt] : null;
      return t ? t.name : "";
    }

    const cells = labels.map((label, i) => {
      const nodeId = chain[i];
      const openSlug = slugFrom(nodeId) || label;
      const wNode = byWordId[nodeId];
      const altNode = byAltId[nodeId];
      const claRaw = (wNode && wNode.cla) ? wNode.cla : (altNode && altNode.cla);
      const pos = String(claRaw || "").toLowerCase();
      return { label, openSlug, glossLine: glossFragments[i] || "", pos };
    });

    return {
      surfaceHead: leaf.name,
      surfaceIpa: leaf.phon || "",
      surfaceScript: leaf.writ || "",
      leafPos: String(leaf.cla || "").toLowerCase(),
      cells,
    };
  }

  /* ---- expose ---- */
  window.LEX        = LEX;
  window.ARTICLES   = ARTICLES;
  window.CATEGORIES = CATEGORIES;
  window.PHRASES    = byPhrase;
  window.CAPTIONS   = byCap;
  window.RESOLVE    = resolveToken;
  window.BY_WORD_ID = byWordId;
  window.BY_ALT_ID  = byAltId;
  window.altMorphRibbon = altMorphRibbon;

  return true;
})();

/* ---- markdown utilities (also exposed for primitives.jsx) ------- */
function firstParagraphSummary(md) {
  if (!md) return "";
  const lines = md.split("\n").map(l => l.trim()).filter(Boolean);
  for (const l of lines) {
    if (l.startsWith("#")) continue;
    if (l.startsWith("*")) continue;
    if (l.startsWith(">")) continue;
    // strip markdown links to bare text
    const t = l.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?/g, "");
    if (t.length > 8) return t.length > 180 ? t.slice(0, 177) + "…" : t;
  }
  return "";
}

function collectWordLinks(md) {
  const out = new Set();
  if (!md) return out;
  const re = /\[([^\]]+)\]\(word-([^)]+)\)/g;
  let m;
  while ((m = re.exec(md))) out.add(m[2]);
  return out;
}

function collectPhraseLinks(md) {
  const out = [];
  if (!md) return out;
  const re = /\[([^\]]+)\]\(phrase-([^)]+)\)/g;
  let m;
  while ((m = re.exec(md))) out.push("phrase-" + m[2]);
  return out;
}

window.firstParagraphSummary = firstParagraphSummary;
window.collectWordLinks = collectWordLinks;
window.collectPhraseLinks = collectPhraseLinks;
