// The gloss of a word follows the Leipzig Glossing Rules. A hyphen parts
// two morphemes, in the word and in its gloss, and both have as many
// hyphens. A period parts two meanings of one morpheme. A label in capitals
// is a grammatical category, and is listed in
// `packages/zulapa/design/glosses.yaml`. A meaning in lower case is a
// translation, and a name keeps its capital. A joining sound is a segment of its own, glossed `EP`.

import {readFileSync} from "node:fs"
import {parse} from "yaml"

const design = new URL("../../packages/zulapa/design/", import.meta.url)

export const labels = parse(readFileSync(new URL("glosses.yaml", design), "utf8")).labels

const known = new Set(labels.map(({label}) => label))

// The word cut into its morphemes and the joining sounds between them.
export function segments(morphemes, word) {
  const list = []
  let at = 0
  for (const morpheme of morphemes) {
    const start = word.indexOf(morpheme, at)
    if (start < 0) throw new Error(`Cannot find '${morpheme}' in '${word}'`)
    if (start > at) list.push({text: word.slice(at, start), joins: true})
    list.push({text: morpheme, joins: false})
    at = start + morpheme.length
  }
  if (at < word.length) throw new Error(`'${word}' has more than its morphemes: ${morphemes.join(" ")}`)
  return list
}

// A gloss must have one segment for each segment of its word, `EP` for each
// joining sound and for nothing else, and only labels that are listed.
export function check(word, cut, gloss) {
  const parts = gloss.split("-")
  if (parts.length !== cut.length) {
    throw new Error(`'${word}' has ${cut.length} segments (${cut.map(s => s.text).join("-")}) and its gloss ${parts.length}: ${gloss}`)
  }
  parts.forEach((part, index) => {
    if ((part === "EP") !== cut[index].joins) throw new Error(`'${word}': EP is not at a joining sound in ${gloss}`)
    for (const meaning of part.split(".")) {
      if (/^[A-Z]?[a-z][a-z_]*$/.test(meaning)) continue
      const label = meaning.replace(/^[123]/, "")
      if (/^[123]/.test(meaning) && (label === "" || known.has(label))) continue
      if (!known.has(meaning)) throw new Error(`'${word}': '${meaning}' in ${gloss} is not a listed label`)
    }
  })
}

// The frozen engine has its own glosses. This table gives the label of
// this site for each of its labels.
const legacy = {
  "I/we": "1",
  you: "2SG",
  they: "3SG",
  we: "1PL",
  "my/our": "1.POSS",
  your: "2SG.POSS",
  their: "3SG.POSS",
  FEM: "F",
  MASC: "M",
  two: "DU",
  I: "SG",
  ALL: "all",
  "IS-NESS": "NMLZ",
  OF: "GEN",
  DISC: "TOP",
  SELF: "self",
  POSTE: "after",
  ANTE: "before",
  "when+PST": "when",
}

// The labels of the engine that are one morpheme with two meanings. Their
// period is not a boundary.
const whole = ["PST.HOD", "PST.PROX", "PST.DIST", "PST.EVNT", "FUT.HOD", "FUT.PROX", "FUT.DIST", "FUT.EVNT", "CONT.REMEMBER", "CONT.DESIRE", "when.PST", "when.FUT"]

// A translation of the frozen engine, as one word: its senses, with no
// note, and periods for its spaces and between its senses. A root with
// several senses holds them all at once. A name keeps its capital.
function lexical(part) {
  const sense = part.replace(/\(.*?\)/g, "").split(",").map(s => s.trim()).filter(Boolean).join(" ").replaceAll(" ", ".")
  return /^[A-Z][a-z]+$/.test(sense) ? sense : sense.toLowerCase()
}

// A gloss of the frozen engine, written as a gloss of this site, without
// the joining sounds, which the engine does not gloss.
export function fromLegacy(gloss) {
  return (gloss ?? "")
    .replaceAll("*", "")
    .replaceAll("you.PL", "2PL")
    .replaceAll("they.PL", "3PL")
    .replace(new RegExp(whole.join("|").replaceAll(".", "\\."), "g"), label => label.replace(".", "+"))
    .split(".")
    .map(part => legacy[part] ?? part.split("+").map(meaning => legacy[meaning] ?? (/^[A-Z0-9]+$/.test(meaning) ? meaning : lexical(meaning))).join("+"))
    .join("-")
    .replaceAll("+", ".")
}

export const withoutJoins = gloss => gloss.split("-").filter(part => part !== "EP").join("-")
