// The `rules` fence of a page names a file of `packages/zulapa/design`. It
// draws each rule of the file: a name, a text, and its cases. A case has
// one of three shapes.
//
// A join is three states: the word before, the part that joins it, and the
// word after. A state is a word, its class and its gloss. A join with no
// word before is a part alone.
//
// A sound is a word and how it is said.
//
// A phrase is its translation, and a column for each word: the word cut
// into its morphemes, its sounds, its script and its gloss. The sounds and
// the script are the ones of the frozen engine.
//
// Every case is built with the frozen engine. What a case expects is in
// the file: where the engine builds something else, the case says so. A
// rule with a `conflict` has a red number, and ends with the question that
// is open. A settled rule that the engine does not follow is tagged, and
// stays black.

import {readFileSync} from "node:fs"
import {parse} from "yaml"
import {escape, ipa, isIpa, slugify} from "./html.mjs"
import {check, fromLegacy, labels, segments, withoutJoins} from "./gloss.mjs"
import {say} from "./legacy.mjs"

const design = new URL("../../packages/zulapa/design/", import.meta.url)

// The text of a rule: `code` between backticks, `/sounds/` as IPA, and
// *emphasis* between stars.
const inline = text =>
  text
    .split(/(`[^`]+`)/)
    .map(part => {
      if (!part.startsWith("`")) return escape(part).replace(/\*([^*]+)\*/g, "<em>$1</em>")
      const content = part.slice(1, -1)
      return isIpa(content) ? ipa(content) : `<code>${escape(content)}</code>`
    })
    .join("")

const split = text => text.trim().split(/\s+/)

// The words of a phrase, without the marks such as `?` that stand apart.
const wordsOf = text => split(text).filter(word => /\p{L}/u.test(word))

// A gloss with its translations in bold, and its labels plain: the bold
// parts carry the meaning, and the others are grammar.
const strong = gloss =>
  escape(gloss).replace(/[A-Za-z_]+/g, part => (/[a-z]/.test(part) ? `<strong>${part}</strong>` : part))

function figure(states, modifier, c, engine) {
  const caption = [c.source && inline(c.source), engine && `<span class="case__engine">${escape(`engine: ${engine}`)}</span>`]
    .filter(Boolean)
    .join(" · ")
  return `<figure class="case${engine ? " case--differs" : ""}"><div class="case__states${modifier}">${states}</div>${
    caption ? `<figcaption class="case__caption">${caption}</figcaption>` : ""
  }</figure>`
}

// A state: the word, its class, and its gloss. A word given as `{html}` is
// already drawn. The state after has the
// word cut into its segments above the gloss, so that the two align, and
// may end with a translation.
function state(mark, word, cla, gloss, modifier = "", cut = "", translation = "") {
  return `<div class="case__state${modifier}"><span class="case__word">${mark}${word.html ?? escape(word)}</span><span class="case__class">${escape(cla)}</span>${
    cut ? `<span class="case__gloss">${escape(cut)}</span>` : ""
  }<span class="case__gloss">${escape(gloss)}</span>${
    translation ? `<span class="case__translation">${escape(translation)}</span>` : ""
  }</div>`
}

// Each shape gives the chains to ask the frozen engine, what the engine
// builds otherwise, and its drawing.

const join = {
  chains({before, part, legacy}) {
    if (!before) return [legacy ?? part, part]
    const links = legacy ? legacy.split(".") : [...split(before), part]
    return [links.join("."), links.at(-1), links.slice(0, -1).join(".")]
  },
  differs(c, [built]) {
    if (built.error) return "fails"
    return [
      built.name !== c.after && built.name,
      built.cla !== c.class && built.cla,
      fromLegacy(built.glo) !== withoutJoins(c.gloss) && fromLegacy(built.glo),
    ]
      .filter(Boolean)
      .join(" · ")
  },
  draw(c, [built, part, before]) {
    const morphemes = c.before ? split(c.before) : []
    const cut = segments([...morphemes, c.part], c.after)
    check(c.after, cut, c.gloss)
    const readings = Object.entries(part.readings ?? {})
      .map(([cla, meaning]) => `${cla}: ${meaning}`)
      .join(" · ")
    const states = [
      before && state("", morphemes.join(" + "), before.ncla ? `${before.cla}, then ${before.ncla}` : (before.cla ?? ""), fromLegacy(before.glo)),
      state(before ? "+ " : "", c.part, readings, fromLegacy(part.glo), " case__state--part"),
      state("→ ", c.after, c.class, c.gloss, " case__state--after", cut.map(segment => segment.text).join("-"), c.translation),
    ]
    return figure(states.filter(Boolean).join(""), before ? "" : " case__states--two", c, this.differs(c, [built]))
  },
}

const sound = {
  chains: ({word, legacy}) => [legacy ?? word],
  differs(c, [built]) {
    if (built.error) return "fails"
    return built.phon === `/${c.ipa}/` ? "" : built.phon
  },
  draw(c, [built]) {
    const states = state("", c.word, built.writ ?? "", "") + state("→ ", {html: ipa(c.ipa)}, "", "", " case__state--after", "", c.translation)
    return figure(states, " case__states--two", c, this.differs(c, [built]))
  },
}

const phrase = {
  chains: ({words, legacy}) => words.map((word, index) => legacy?.[index] ?? split(word).join(".")),
  differs(c, built) {
    const glosses = split(c.gloss)
    return wordsOf(c.text)
      .map((word, index) => {
        const {name, glo, error} = built[index]
        if (error) return `${word} fails`
        const same = name === word && fromLegacy(glo) === withoutJoins(glosses[index])
        return same ? "" : `${name} ${fromLegacy(glo)}`
      })
      .filter(Boolean)
      .join(" · ")
  },
  draw(c, built) {
    const words = wordsOf(c.text)
    const glosses = split(c.gloss)
    if (words.length !== c.words.length || words.length !== glosses.length) {
      throw new Error(`'${c.text}' has not one gloss and one list of morphemes for each word`)
    }
    const columns = words.map((word, index) => {
      const cut = segments(split(c.words[index]), word)
      check(word, cut, glosses[index])
      const {phon = "", writ = ""} = built[index]
      return `<span class="phrase__word"><span class="phrase__cut">${escape(cut.map(segment => segment.text).join("-"))}</span><span class="phrase__sounds">${phon ? ipa(phon) : ""}</span><span class="phrase__script">${escape(writ)}</span><span class="phrase__gloss">${strong(glosses[index])}</span></span>`
    })
    const states = `<div class="case__state case__state--after"><span class="phrase__translation">${escape(c.translation)}</span><span class="phrase__words">${columns.join("")}</span></div>`
    return figure(states, " case__states--one", c, this.differs(c, built))
  },
}

const shape = c => (c.ipa !== undefined ? sound : c.words ? phrase : join)

export function rules(body) {
  const file = body.trim()
  const {family, rules} = parse(readFileSync(new URL(`${file}.yaml`, design), "utf8"))
  const built = say(rules.flatMap(rule => rule.cases.flatMap(c => shape(c).chains(c))))
  return rules
    .map(({name, text, conflict, open, cases}) => {
      const answers = cases.map(c => built.splice(0, shape(c).chains(c).length))
      const differs = cases.some((c, index) => shape(c).differs(c, answers[index]))
      const tag = conflict ? "conflict" : differs ? "differs from legacy" : family
      return `<section class="rule${conflict ? " rule--conflict" : ""}" id="${slugify(family)}-${slugify(name)}">
<p class="rule__head"><span class="rule__name">${inline(name)}</span><span class="rule__tag">${escape(tag)}</span></p>
<p class="rule__text">${inline(conflict ?? text)}</p>
<div class="rule__examples">${cases.map((c, index) => shape(c).draw(c, answers[index])).join("")}</div>
${open ? `<p class="rule__rework"><span class="rule__label">Open</span> ${inline(open)}</p>` : ""}
</section>`
    })
    .join("\n")
}

// The `glosses` fence draws the table of the labels.
export function glosses() {
  const rows = labels
    .map(({label, meaning, of, from}) => `<tr><td><code>${escape(label)}</code></td><td>${escape(meaning)}</td><td>${inline(of.split(", ").map(m => /^[a-z]+$/.test(m) ? `\`${m}\`` : m).join(", "))}</td><td>${escape(from)}</td></tr>`)
    .join("\n")
  return `<div class="table-wrap"><table>
<thead><tr><th>Label</th><th>Meaning</th><th>Of</th><th>From</th></tr></thead>
<tbody>
${rows}
</tbody></table></div>`
}
