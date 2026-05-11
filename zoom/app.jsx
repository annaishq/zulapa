/* ------------------------------------------------------------------
   Zulapa Explorer — main app shell.
   ------------------------------------------------------------------ */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

function trailEntrySlug(entry) {
  if (typeof entry === "string") return entry || "";
  return entry && typeof entry.slug === "string" ? entry.slug : "";
}

function trailEntryTokenId(entry) {
  if (!entry || typeof entry === "string") return null;
  return entry.tokenId || null;
}

function trailEntrySame(a, b) {
  return trailEntrySlug(a) === trailEntrySlug(b) && trailEntryTokenId(a) === trailEntryTokenId(b);
}

function trailPeek(stack) {
  const tail = stack[stack.length - 1];
  if (!tail) return null;
  return { slug: trailEntrySlug(tail), tokenId: trailEntryTokenId(tail) };
}

function crumbLabel(slug, tokenId) {
  if (tokenId && window.BY_ALT_ID[tokenId]) {
    const nm = window.BY_ALT_ID[tokenId].name;
    if (nm) return nm;
  }
  const lex = slug ? window.LEX[slug] : null;
  return lex ? lex.head : slug;
}

function crumbIpa(slug, tokenId) {
  if (tokenId && window.BY_ALT_ID[tokenId]) {
    const ph = window.BY_ALT_ID[tokenId].phon;
    if (ph) return ph;
  }
  const lex = slug ? window.LEX[slug] : null;
  return lex ? lex.ipa : "";
}

function useTrail(initial = []) {
  const [stack, setStack] = useState(initial);
  const push = useCallback((slugOrPair) =>
    setStack((p) => {
      let nextSlug;
      let nextTok = null;
      if (!slugOrPair) return p;
      if (typeof slugOrPair === "string") {
        nextSlug = slugOrPair;
      } else {
        nextSlug = slugOrPair.slug;
        nextTok = slugOrPair.tokenId || null;
      }
      if (!nextSlug) return p;
      const normalized = nextTok ? { slug: nextSlug, tokenId: nextTok } : nextSlug;
      if (p.length && trailEntrySame(p[p.length - 1], normalized)) return p;
      return [...p, normalized];
    }), []);
  const pop   = useCallback(() => setStack(p => p.slice(0, -1)), []);
  const goTo  = useCallback((i)  => setStack(p => p.slice(0, i+1)), []);
  const clear = useCallback(()    => setStack([]), []);
  // Stable object identity — re-use across renders so consumers' useMemo/useCallback don't churn.
  return useMemo(() => ({ stack, push, pop, goTo, clear }), [stack, push, pop, goTo, clear]);
}

/* ---- Article view ---- */
function Article({ slug, ctx }) {
  const a = window.ARTICLES[slug];
  if (!a) return <div className="art art--missing">No article: {slug}</div>;
  return (
    <article className="art">
      <div className="art__meta">
        <span className="art__cat">{categoryFor(slug) || "article"}</span>
        <span className="art__slug">/{slug}</span>
      </div>
      <div className="art__body desc">
        <window.MarkdownBody src={a.body} ctx={ctx} />
      </div>
    </article>
  );
}

const MemoArticle = React.memo(Article, (a, b) => a.slug === b.slug && a.ctx === b.ctx);

function categoryFor(slug) {
  const c = window.CATEGORIES.find(c => c.articles.includes(slug));
  return c ? c.label : "";
}

/* ---- Sidebar ---- */
function Sidebar({ current, ctx, onOpenSearch }) {
  const [filter, setFilter] = useState("");
  const cats = useMemo(() => {
    if (!filter.trim()) return window.CATEGORIES;
    const f = filter.toLowerCase();
    return window.CATEGORIES.map(c => ({
      ...c,
      articles: c.articles.filter(a => a.toLowerCase().includes(f))
    })).filter(c => c.articles.length);
  }, [filter]);

  return (
    <aside className="side">
      <div className="side__brand">
        <button className="side__logo" onClick={() => ctx.onOpenArticle("aaa")} title="Why zulapa?">
          <span className="side__logo-glyph">జు</span>
          <span className="side__logo-name">zulapa</span>
        </button>
      </div>

      <button className="side__search" onClick={onOpenSearch}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <span>search words &amp; articles</span>
        <kbd>⌘K</kbd>
      </button>

      <input
        className="side__filter"
        placeholder="filter articles…"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <nav className="side__nav">
        {cats.map(cat => (
          <details key={cat.id} className="side__cat" open={cat.id === "start" || filter.trim() !== ""}>
            <summary>{cat.label}</summary>
            <ul>
              {cat.articles.map(slug => (
                <li key={slug}>
                  <button
                    className={"side__a" + (slug === current ? " is-current" : "")}
                    onClick={() => ctx.onOpenArticle(slug)}
                  >
                    {slug}
                  </button>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </nav>

      <div className="side__foot">
        <span>{Object.keys(window.LEX).length} words · {Object.keys(window.ARTICLES).length} articles</span>
      </div>
    </aside>
  );
}

/* ---- Reference panel ---- */
function ReferencePanel({ trail, ctx, entryStyle, trailMode }) {
  const peek = trailPeek(trail.stack);
  const currentSlug = peek && peek.slug;
  const phraseTokenId = peek && peek.tokenId;
  const empty = !currentSlug;

  return (
    <section className={"ref" + (empty ? " ref--empty" : "")}>
      <header className="ref__head">
        <div className="ref__head-left">
          {!empty && (trailMode === "all" || trailMode === "back") ? (
            <button className="ref__back" onClick={trail.pop} disabled={trail.stack.length < 2} title="Back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
          ) : null}
          {!empty && (trailMode === "all" || trailMode === "breadcrumb") ? (
            <ol className="ref__crumbs">
              {trail.stack.map((entry, i) => {
                const slug = trailEntrySlug(entry);
                const tok = trailEntryTokenId(entry);
                const last = i === trail.stack.length - 1;
                return (
                  <li key={`${i}-${slug}-${tok || ""}`}>
                    <button
                      className={"ref__crumb" + (last ? " is-last" : "")}
                      onClick={() => trail.goTo(i)}
                    >
                      {crumbLabel(slug, tok)}
                    </button>
                    {!last ? <span className="ref__crumbsep">›</span> : null}
                  </li>
                );
              })}
            </ol>
          ) : null}
          {empty ? <div className="ref__hint-head">reference</div> : null}
        </div>
        <div className="ref__head-right">
          {!empty ? <button className="ref__close" onClick={trail.clear} title="Close trail">×</button> : null}
        </div>
      </header>

      {empty ? (
        <div className="ref__empty">
          <div className="ref__empty-glyph">అవి</div>
          <p>tap any <span className="ref__empty-pink">pink word</span> in the article to open it here.</p>
          <p className="ref__empty-sub">words you visit stack up. use the crumbs above to backtrack.</p>
          <div className="ref__empty-hint">
            <kbd>⌘K</kbd> to search · <kbd>esc</kbd> to step back
          </div>
        </div>
      ) : (
        <div className="ref__stack">
          {trail.stack.slice(0, -1).map((entry, i) => {
            const slug = trailEntrySlug(entry);
            const tok = trailEntryTokenId(entry);
            const lex = window.LEX[slug];
            return (
              <button key={`${i}-${slug}-${tok || ""}`} className="ref__collapsed"
                      onClick={() => trail.goTo(i)}>
                <span className="ref__collapsed-word">{crumbLabel(slug, tok)}</span>
                <span className="ref__collapsed-ipa">{crumbIpa(slug, tok)}</span>
                <span className="ref__collapsed-gloss">{lex ? lex.glosses.join(", ") : ""}</span>
              </button>
            );
          })}
          <div className="ref__current">
            {entryStyle === "list"
              ? <window.WordEntryList slug={currentSlug} ctx={ctx} />
              : entryStyle === "table"
              ? <window.WordEntryTable slug={currentSlug} ctx={ctx} />
              : <window.WordEntry slug={currentSlug} phraseTokenId={phraseTokenId} ctx={ctx} />
            }
          </div>
        </div>
      )}
    </section>
  );
}

/* ---- Search ---- */
function SearchOverlay({ open, onClose, ctx }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(0);
  useEffect(() => { if (open) setTimeout(() => inputRef.current && inputRef.current.focus(), 0); }, [open]);
  useEffect(() => { if (!open) { setQ(""); setSelected(0); } }, [open]);
  useEffect(() => { setSelected(0); }, [q]);

  const results = useMemo(() => {
    if (!q.trim()) return { words: [], arts: [], all: [] };
    const needle = q.toLowerCase();
    const words = Object.entries(window.LEX)
      .filter(([slug, lex]) =>
        lex.head.toLowerCase().includes(needle) ||
        (lex.glosses || []).some(g => g.toLowerCase().includes(needle)))
      .sort(([,a],[,b]) => {
        const an = a.head.toLowerCase() === needle ? 0 : a.head.toLowerCase().startsWith(needle) ? 1 : 2;
        const bn = b.head.toLowerCase() === needle ? 0 : b.head.toLowerCase().startsWith(needle) ? 1 : 2;
        return an - bn;
      })
      .slice(0, 14);
    const arts = Object.entries(window.ARTICLES)
      .filter(([slug, a]) =>
        slug.toLowerCase().includes(needle) ||
        (a.title || "").toLowerCase().includes(needle) ||
        (a.summary || "").toLowerCase().includes(needle))
      .slice(0, 8);
    const all = [
      ...words.map(([slug, lex]) => ({ kind:"word", slug, lex })),
      ...arts .map(([slug, a])   => ({ kind:"art",  slug, a })),
    ];
    return { words, arts, all };
  }, [q]);

  if (!open) return null;

  const activate = (item) => {
    if (!item) return;
    if (item.kind === "word") ctx.onOpenWord(item.slug);
    else ctx.onOpenArticle(item.slug);
    onClose();
  };

  return (
    <div className="srch" onClick={onClose}>
      <div className="srch__box" onClick={e => e.stopPropagation()}>
        <div className="srch__field">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input
            ref={inputRef}
            placeholder="search words, glosses, articles…"
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Escape") onClose();
              if (e.key === "ArrowDown") { e.preventDefault(); setSelected(s => Math.min(results.all.length - 1, s + 1)); }
              if (e.key === "ArrowUp")   { e.preventDefault(); setSelected(s => Math.max(0, s - 1)); }
              if (e.key === "Enter") activate(results.all[selected]);
            }}
          />
          <kbd>esc</kbd>
        </div>
        {q.trim() ? (
          <div className="srch__results">
            {results.words.length ? (
              <>
                <div className="srch__group">words</div>
                {results.words.map((item, i) => {
                  const [slug, lex] = item;
                  const absoluteIndex = i;
                  return (
                    <button key={"w-"+slug}
                            className={"srch__row" + (absoluteIndex === selected ? " is-sel" : "")}
                            onMouseEnter={() => setSelected(absoluteIndex)}
                            onClick={() => activate({ kind:"word", slug })}>
                      <span className="srch__row-word">{lex.head}</span>
                      <span className="srch__row-ipa">{lex.ipa}</span>
                      <span className="srch__row-script">{lex.script}</span>
                      <span className="srch__row-gloss">{lex.glosses.join(", ")}</span>
                    </button>
                  );
                })}
              </>
            ) : null}
            {results.arts.length ? (
              <>
                <div className="srch__group">articles</div>
                {results.arts.map((item, i) => {
                  const [slug, a] = item;
                  const absoluteIndex = results.words.length + i;
                  return (
                    <button key={"a-"+slug}
                            className={"srch__row srch__row--art" + (absoluteIndex === selected ? " is-sel" : "")}
                            onMouseEnter={() => setSelected(absoluteIndex)}
                            onClick={() => activate({ kind:"art", slug })}>
                      <span className="srch__row-arttitle">{slug}</span>
                      <span className="srch__row-artsum">{a.summary}</span>
                    </button>
                  );
                })}
              </>
            ) : null}
            {!results.words.length && !results.arts.length ? (
              <div className="srch__none">no matches.</div>
            ) : null}
          </div>
        ) : (
          <div className="srch__hint">
            try <kbd>awi</kbd>, <kbd>fish</kbd>, <kbd>grammar</kbd>, <kbd>love</kbd>…
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Mobile sheet ---- */
function MobileSheet({ open, onClose, children }) {
  return (
    <>
      <div className={"sheet__scrim" + (open ? " is-on" : "")} onClick={onClose} />
      <div className={"sheet" + (open ? " is-on" : "")}>
        <div className="sheet__grab" />
        {children}
      </div>
    </>
  );
}

/* ---- App ---- */
function App() {
  const [articleSlug, setArticleSlug] = useState("aaa");
  const trail = useTrail([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [tweaks, setTweaks] = useState({
    layout: "two-col", entryStyle: "card", trail: "all", graph: true
  });

  useEffect(() => {
    const sync = () => {
      const d = document.documentElement.dataset;
      setTweaks({
        layout: d.layout || "two-col",
        entryStyle: d.entry || "card",
        trail: d.trail || "all",
        graph: d.graph !== "off",
      });
    };
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes:true });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); setSearchOpen(true);
      }
      if (e.key === "Escape" && !searchOpen && trail.stack.length) trail.pop();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [searchOpen, trail]);

  const openWord = useCallback((slug, opts) => {
    if (!slug) return;
    trail.push(opts && opts.tokenId ? { slug, tokenId: opts.tokenId } : slug);
    setMobileSheetOpen(true);
  }, [trail]);

  const openArticle = useCallback((slug) => {
    if (!slug || !window.ARTICLES[slug]) return;
    setArticleSlug(slug);
    setMobileSheetOpen(false);
    setMobileNavOpen(false);
    document.querySelector(".main")?.scrollTo({ top: 0, behavior:"smooth" });
  }, []);

  const ctx = useMemo(() => ({ onOpenWord: openWord, onOpenArticle: openArticle }), [openWord, openArticle]);

  // expose for cross-component link clicks (legacy hook)
  window.__keo = ctx;

  return (
    <div className={"shell shell--" + tweaks.layout + " shell--entry-" + tweaks.entryStyle}
         data-trail={tweaks.trail}
         data-nav-open={mobileNavOpen ? "1" : "0"}>

      <button className="topbar__menu" onClick={() => setMobileNavOpen(o => !o)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <div className="topbar__title">{articleSlug}</div>

      <Sidebar
        current={articleSlug}
        ctx={ctx}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="main">
        <MemoArticle slug={articleSlug} ctx={ctx} />
      </main>

      <ReferencePanel
        trail={trail}
        ctx={ctx}
        entryStyle={tweaks.entryStyle}
        trailMode={tweaks.trail}
      />

      <MobileSheet open={mobileSheetOpen && trail.stack.length > 0}
                   onClose={() => setMobileSheetOpen(false)}>
        {mobileSheetOpen && trail.stack.length > 0 ? (
          <ReferencePanel
            trail={trail}
            ctx={ctx}
            entryStyle={tweaks.entryStyle}
            trailMode={tweaks.trail}
          />
        ) : null}
      </MobileSheet>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} ctx={ctx} />

      {trail.stack.length > 0 && !mobileSheetOpen ? (
        <button className="fab" onClick={() => setMobileSheetOpen(true)}>
          <span className="fab__count">{trail.stack.length}</span>
          <span>reference</span>
        </button>
      ) : null}

      {window.KeoTweaks ? <window.KeoTweaks /> : null}
    </div>
  );
}

/* ---- Boot ---- */
(async function boot() {
  await window.dataReady;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
})();
