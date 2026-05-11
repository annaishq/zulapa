/* ------------------------------------------------------------------
   Zulapa Explorer — primitives.
   Handles markdown article rendering + word entry treatments.
   ------------------------------------------------------------------ */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ----- WordLink: inline word in body copy ----- */
function WordLink({ slug, children, onOpen }) {
  const exists = !!window.LEX[slug];
  return (
    <button
      type="button"
      className={"k-wordlink" + (exists ? "" : " is-stub")}
      onClick={(e) => { e.stopPropagation(); onOpen(slug, e.currentTarget); }}
    >
      {children || slug}
    </button>
  );
}

function ArticleLink({ slug, children, onOpen }) {
  const exists = !!window.ARTICLES[slug];
  return (
    <button
      type="button"
      className={"k-artlink" + (exists ? "" : " is-stub")}
      onClick={(e) => { e.stopPropagation(); onOpen(slug); }}
    >
      {children || slug}
    </button>
  );
}

/* ----- Render inline markdown text with [text](word-X|card-X|phrase-N) links ----- */
function renderInline(text, ctx) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[2]) {
      const label = m[1], target = m[2];
      if (target.startsWith("word-")) {
        const slug = (window.BY_WORD_ID[target] || {}).name || target.slice(5);
        parts.push(<WordLink key={i++} slug={slug} onOpen={ctx.onOpenWord}>{label}</WordLink>);
      } else if (target.startsWith("alt-")) {
        const alt = window.BY_ALT_ID[target];
        const slug = alt ? ((window.BY_WORD_ID[alt.alt] || window.BY_WORD_ID[alt.orig] || {}).name || alt.name) : target;
        parts.push(<WordLink key={i++} slug={slug} onOpen={ctx.onOpenWord}>{label}</WordLink>);
      } else if (target.startsWith("card-")) {
        const slug = target.slice(5);
        parts.push(<ArticleLink key={i++} slug={slug} onOpen={ctx.onOpenArticle}>{label}</ArticleLink>);
      } else if (target.startsWith("phrase-")) {
        // Inline phrase reference — render as a small chip that, when clicked, expands a glossed block.
        parts.push(<PhraseChip key={i++} pid={target} ctx={ctx} />);
      } else {
        parts.push(<a key={i++} className="art__plink" href={target}>{label}</a>);
      }
    } else if (m[4]) {
      parts.push(<strong key={i++}>{m[4]}</strong>);
    } else if (m[6]) {
      parts.push(<em key={i++}>{m[6]}</em>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function PhraseChip({ pid, ctx }) {
  const [open, setOpen] = useState(false);
  const p = window.PHRASES[pid] || window.CAPTIONS[pid];
  if (!p) return <span className="k-phrase-chip is-missing">{pid}</span>;
  return (
    <span className="k-phrase-wrap">
      <button className="k-phrase-chip" onClick={() => setOpen(o => !o)}>
        <span className="k-phrase-chip__num">{p.name}</span>
        <span className="k-phrase-chip__text">{p.phrase}</span>
      </button>
      {open ? <PhraseBlock pid={pid} ctx={ctx} /> : null}
    </span>
  );
}

/* ----- One interlinear gloss tier: full `glo` markdown (cf. archeology List + Markdown) ----- */
function glossLineNodes(line, ctx) {
  const s = String(line || "");
  if (!s) return null;
  return s.split(/\n/).map((ln, li) => (
    <React.Fragment key={li}>
      {li ? <br /> : null}
      {renderInline(ln, ctx)}
    </React.Fragment>
  ));
}

/* ----- Glossed phrase block (interlinear) ----- */
function PhraseBlock({ pid, ctx, caption }) {
  const p = window.PHRASES[pid] || window.CAPTIONS[pid];
  if (!p) return null;
  const rows = (p.words || []).map((wid, i) => {
    const t = window.RESOLVE(wid);
    return t || { slug:wid, head:wid, ipa:"", script:"", gloss:[wid], glossLine:"", pos:"" };
  }).filter(r => r.head && r.head !== "." && r.head !== "," && r.head !== "!");

  return (
    <div className="k-example">
      {(caption || p.trad) ? <div className="k-example__caption">{caption || p.trad}</div> : null}
      <div className="k-gloss" style={{ gridTemplateColumns:`repeat(${rows.length}, minmax(0, 1fr))` }}>
        {rows.map((r, i) => {
          const pos = String(r.pos || "").toLowerCase();
          const cla = /^(noun|verb|adj|adv)$/.test(pos) ? pos : "";
          const line = (typeof r.glossLine === "string" && r.glossLine.length)
            ? r.glossLine
            : (r.gloss || []).join(".");
          return (
          <div key={i} className={"k-gloss__col" + (cla ? " " + cla : "")}>
            <button className="k-gloss__head" onClick={() => ctx.onOpenWord(r.slug)}>
              {r.head}
            </button>
            <div className="k-gloss__ipa">{r.ipa}</div>
            <div className="k-gloss__script">{r.script}</div>
            <div className="k-gloss__line k-gloss__line--md">
              {glossLineNodes(line, ctx)}
            </div>
          </div>
        ); })}
      </div>
    </div>
  );
}

function isTag(s) {
  return /^[A-Z0-9/]+$/.test(s) || s === "I/we";
}

/* ----- Markdown body renderer for article cards ----- */
function MarkdownBody({ src, ctx }) {
  // Parse into blocks: heading, ul, p, phrase-list-item, code-block
  const lines = (src || "").split("\n");
  const blocks = [];
  let buf = [];
  let inList = false;
  const flushPara = () => {
    if (buf.length) {
      blocks.push({ kind:"p", text: buf.join(" ") });
      buf = [];
    }
  };
  const flushList = () => { if (inList) { inList = false; } };

  let listItems = [];
  const flushListBlock = () => {
    if (listItems.length) {
      blocks.push({ kind:"ul", items: listItems });
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\s+$/,"");
    if (!line.trim()) { flushPara(); flushListBlock(); continue; }
    const hm = /^(#{1,6})\s+(.*)$/.exec(line);
    if (hm) { flushPara(); flushListBlock(); blocks.push({ kind:"h", level: hm[1].length, text: hm[2] }); continue; }
    const lm = /^\s*\*\s+(.*)$/.exec(line);
    if (lm) {
      flushPara();
      // If list item is a sole phrase link, render as a phrase block
      const phraseMatch = /^\[(\d+|[^\]]+)\]\(phrase-([^)]+)\)\s*$/.exec(lm[1]);
      if (phraseMatch) {
        flushListBlock();
        blocks.push({ kind:"phrase", pid:"phrase-"+phraseMatch[2] });
      } else {
        listItems.push(lm[1]);
      }
      continue;
    }
    flushListBlock();
    buf.push(line.trim());
  }
  flushPara(); flushListBlock();

  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === "h") {
          const T = "h" + Math.min(6, Math.max(2, b.level + 1));
          return React.createElement(T, { key:i, className:"art__h art__h"+b.level }, renderInline(b.text, ctx));
        }
        if (b.kind === "p") {
          return <p key={i} className="art__p">{renderInline(b.text, ctx)}</p>;
        }
        if (b.kind === "ul") {
          return (
            <ul key={i} className="art__ul">
              {b.items.map((it, j) => <li key={j}>{renderInline(it, ctx)}</li>)}
            </ul>
          );
        }
        if (b.kind === "phrase") {
          return <PhraseBlock key={i} pid={b.pid} ctx={ctx} />;
        }
        return null;
      })}
    </>
  );
}

/* ----- Inline mini-graph for a word entry ----- */
function MiniGraph({ slug, onOpen }) {
  const lex = window.LEX[slug];
  if (!lex) return null;
  const deriv = (lex.deriv || []).slice(0, 8);
  const see   = (lex.see   || []).slice(0, 4);
  const etym  = (lex.etym  || []).slice(0, 3);
  const nodes = [
    ...etym.map(s => ({ slug:s, kind:"etym" })),
    ...deriv.map(s => ({ slug:s, kind:"deriv" })),
    ...see.map(s => ({ slug:s, kind:"see" })),
  ];
  if (!nodes.length) return null;

  const W = 340, H = 220, cx = W/2, cy = H/2;
  const rOuter = 88;
  const nw = 52, nh = 22, nr = 11;  // outer node box
  const cw = 64, ch = 26, cr = 13;  // center node box
  const positions = nodes.map((n, i) => {
    const t = (i / nodes.length) * Math.PI * 2 - Math.PI/2;
    return { ...n, x: cx + Math.cos(t) * rOuter, y: cy + Math.sin(t) * rOuter };
  });

  const colorOf = (k) => k === "deriv" ? "var(--cyan)" : k === "etym" ? "var(--lime)" : "var(--magenta)";

  return (
    <div className="k-graph">
      <div className="k-graph__label">relations</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="k-graph__svg">
        {positions.map((p, i) => (
          <line key={"L"+i} x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke={colorOf(p.kind)} strokeOpacity="0.35" strokeWidth="1" />
        ))}
        <rect x={cx - cw/2} y={cy - ch/2} width={cw} height={ch} rx={cr}
          fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x={cx} y={cy+4} textAnchor="middle" className="k-graph__center">{lex.head}</text>
        {positions.map((p, i) => (
          <g key={"N"+i} className="k-graph__node" onClick={() => onOpen(p.slug)} style={{cursor:"pointer"}}>
            <rect x={p.x - nw/2} y={p.y - nh/2} width={nw} height={nh} rx={nr}
              fill="var(--bg-panel)" stroke={colorOf(p.kind)} strokeWidth="1" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" className="k-graph__lbl">
              {window.LEX[p.slug] ? window.LEX[p.slug].head : p.slug}
            </text>
          </g>
        ))}
      </svg>
      <div className="k-graph__legend">
        <span><i style={{background:"var(--lime)"}}/>etym</span>
        <span><i style={{background:"var(--cyan)"}}/>deriv</span>
        <span><i style={{background:"var(--magenta)"}}/>see</span>
      </div>
    </div>
  );
}

/* ----- Word entry — full card ----- */
function WordEntry({ slug, ctx }) {
  const lex = window.LEX[slug];
  if (!lex) {
    return (
      <div className="k-entry k-entry--stub">
        <div className="k-entry__head"><span className="k-entry__word">{slug}</span></div>
        <p className="k-entry__pos">— not in the lexicon yet</p>
      </div>
    );
  }
  const showGraph = document.documentElement.dataset.graph !== "off";

  return (
    <article className="k-entry k-entry--card">
      <header className="k-entry__head">
        <h3 className="k-entry__word">{lex.head}</h3>
        <span className="k-entry__pos">{lex.pos}</span>
      </header>
      <div className="k-entry__phono">
        <span className="k-entry__ipa">{lex.ipa}</span>
        <span className="k-entry__script">{lex.script}</span>
      </div>
      {lex.glosses.length ? (
        <div className="k-entry__glosses">
          {lex.glosses.map((g, i) => (
            <span key={i} className="k-entry__gloss">
              {g}{i < lex.glosses.length - 1 ? <span className="k-entry__sep">,</span> : null}
            </span>
          ))}
        </div>
      ) : null}

      {lex.desc ? (
        <section className="k-entry__sec desc">
          <MarkdownBody src={lex.desc} ctx={ctx} />
        </section>
      ) : null}

      {(lex.etym && lex.etym.length) ? (
        <section className="k-entry__sec k-entry__rel">
          <div><span className="k-entry__reltag">etym</span>
            {lex.etym.map((s, i) => (
              <span key={i}>
                <button className="k-entry__rellink" onClick={() => ctx.onOpenWord(s)}>
                  {window.LEX[s] ? window.LEX[s].head : s}
                </button>
                {i < lex.etym.length - 1 ? <span className="k-entry__plus">+</span> : null}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {((lex.deriv && lex.deriv.length) || (lex.see && lex.see.length)) ? (
        <section className="k-entry__sec k-entry__rel">
          {lex.deriv && lex.deriv.length ? (
            <div><span className="k-entry__reltag">deriv</span>
              {lex.deriv.map(s => (
                <button key={s} className="k-entry__rellink" onClick={() => ctx.onOpenWord(s)}>
                  {window.LEX[s] ? window.LEX[s].head : s}
                </button>
              ))}
            </div>
          ) : null}
          {lex.see && lex.see.length ? (
            <div><span className="k-entry__reltag">see</span>
              {lex.see.map(s => (
                <button key={s} className="k-entry__rellink" onClick={() => ctx.onOpenWord(s)}>
                  {window.LEX[s] ? window.LEX[s].head : s}
                </button>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {showGraph ? <MiniGraph slug={slug} onOpen={ctx.onOpenWord} /> : null}

      {lex.phrases && lex.phrases.length ? (
        <section className="k-entry__sec">
          <h4>used in</h4>
          {lex.phrases.slice(0, 4).map(pid => (
            <PhraseBlock key={pid} pid={pid} ctx={ctx} />
          ))}
          {lex.phrases.length > 4 ? (
            <div className="k-entry__more">+ {lex.phrases.length - 4} more</div>
          ) : null}
        </section>
      ) : null}

      {lex.refs && lex.refs.length ? (
        <section className="k-entry__sec">
          <h4>appears in</h4>
          <div className="k-entry__refs">
            {lex.refs.map(r => (
              <button key={r} className="k-entry__refchip"
                      onClick={() => ctx.onOpenArticle(r)}>
                {r}
              </button>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

/* ----- Word entry — compact list ----- */
function WordEntryList({ slug, ctx }) {
  const lex = window.LEX[slug];
  if (!lex) return null;
  return (
    <article className="k-list">
      <div className="k-list__row">
        <h3 className="k-list__word">{lex.head}</h3>
        <span className="k-list__ipa">{lex.ipa}</span>
        <span className="k-list__script">{lex.script}</span>
        <span className="k-list__pos">{lex.pos}</span>
      </div>
      {lex.glosses.length ? <div className="k-list__gloss">{lex.glosses.join(", ")}</div> : null}
      {lex.desc ? <div className="k-list__desc desc"><MarkdownBody src={lex.desc} ctx={ctx} /></div> : null}
      {lex.etym && lex.etym.length ? (
        <div className="k-list__rel"><span>etym</span>
          {lex.etym.map((s,i) => (
            <React.Fragment key={i}>
              <button onClick={()=>ctx.onOpenWord(s)}>{window.LEX[s]?window.LEX[s].head:s}</button>
              {i < lex.etym.length-1 ? <em>+</em> : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
      {lex.deriv && lex.deriv.length ? (
        <div className="k-list__rel"><span>deriv</span>
          {lex.deriv.map(s => <button key={s} onClick={()=>ctx.onOpenWord(s)}>{window.LEX[s]?window.LEX[s].head:s}</button>)}
        </div>
      ) : null}
      {lex.see && lex.see.length ? (
        <div className="k-list__rel"><span>see</span>
          {lex.see.map(s => <button key={s} onClick={()=>ctx.onOpenWord(s)}>{window.LEX[s]?window.LEX[s].head:s}</button>)}
        </div>
      ) : null}
    </article>
  );
}

/* ----- Word entry — table ----- */
function WordEntryTable({ slug, ctx }) {
  const lex = window.LEX[slug];
  if (!lex) return null;
  const rows = [
    ["ipa",    lex.ipa || "—"],
    ["script", lex.script || "—"],
    ["pos",    lex.pos || "—"],
    ["gloss",  lex.glosses.join(", ") || "—"],
    ["etym",   (lex.etym||[]).join(" + ") || "—"],
    ["deriv",  (lex.deriv||[]).join(", ") || "—"],
    ["see",    (lex.see||[]).join(", ") || "—"],
  ];
  return (
    <article className="k-table">
      <h3 className="k-table__word">{lex.head}</h3>
      <dl>
        {rows.map(([k, v]) => (
          <React.Fragment key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </React.Fragment>
        ))}
      </dl>
      {lex.desc ? <div className="k-table__desc desc"><MarkdownBody src={lex.desc} ctx={ctx} /></div> : null}
    </article>
  );
}

Object.assign(window, {
  WordLink, ArticleLink, renderInline, MarkdownBody,
  PhraseBlock, PhraseChip, MiniGraph, isTag,
  WordEntry, WordEntryList, WordEntryTable,
});
