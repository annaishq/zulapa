import { EntriesByType } from '../conlib'
import { VOWEL } from './generate'
import { entries } from './lang'
// force compilation
import './words'

const INFLECTIONS = [
  // 1sp   I/we                 o   -ma
  'o',
  'okei',
  'oka',
  'opi',
  'oyi',
  'olo',
  'ode',
  // 2s   you (imperative)          -ma
  '',
  // 2s   you (singular)        i   -ma
  'i',
  'ikei',
  'iyi',
  'ilo',
  // 3s   they (singular)       a   -ma
  'a',
  'akei',
  'ayi',
  'alo',
  'ape',
  // 1p   we                    sho -ma
  'sho',
  'shokei',
  'shoyi',
  'sholo',
  // 2p   you (plural)          shi -ma
  'shi',
  'shikei',
  'shiyi',
  'shilo',
  // 3p   they (plural)         sha -ma
  'sha',
  'shakei',
  'shayi',
  'shalo',
  // infinite
  'u',
]

const EXCEPTIONS: string[] = ['pinu']

export function detectConjugationIssues(entries: EntriesByType) {
  const conjugations: { [key: string]: string } = {}
  const words = entries.word
  const verbs = Object.keys(words)
    .filter(key => words[key as keyof typeof words].definition.verb)
    .sort()

  verbs.forEach(verb => {
    let printed = false
    function printHeader() {
      if (printed) {
        return
      }
      console.log(
        `=========== ${verb} (${words[verb].definition.verb}) =========`
      )
      printed = true
    }
    INFLECTIONS.forEach(inf => {
      const conj =
        inf + (VOWEL.indexOf(verb[0]) >= 0 && inf !== '' ? 'h' : '') + verb
      if (words[conj] && inf !== '' && !EXCEPTIONS.includes(conj)) {
        printHeader()
        console.log(conj)
        console.log(`verb: ${inf} - ${verb} conflicts with ${conj}`)
      } else if (conjugations[conj]) {
        printHeader()
        console.log(conj)
        console.log(
          `verb: ${inf} - ${verb} conflicts with ${conjugations[conj]}`
        )
      } else {
        conjugations[conj] = `${inf} - ${verb}`
      }
    })
  })
}

detectConjugationIssues(entries)
