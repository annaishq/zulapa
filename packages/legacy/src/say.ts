// Builds words with the frozen engine, for the docs to check its rules
// against. Reads a JSON list of chains on stdin, such as "es.o.lu.zu",
// where each link is the id of a morpheme. Writes a JSON list of what the
// engine builds: the word, its class, the class it gives to what follows,
// its gloss, its readings, its sounds and its script, or the error.

import { readFileSync } from 'fs'
import { MAIN_KEYS, resolve } from './conlib'
import { phon, write } from './conlib/writing'
import { entries } from './conlang/lang'
import './conlang/words'

function say(chain: string) {
  try {
    const [first, ...rest] = chain.split('.')
    let word: any = entries.wordAndAlt[first]
    if (!word) {
      throw new Error(`Cannot find '${first}'`)
    }
    for (const id of rest) {
      word = word[id]
    }
    const entry = resolve(word)
    const def = entry.definition
    const readings: { [key: string]: string } = {}
    for (const key of MAIN_KEYS) {
      if (def[key]) {
        readings[key] = def[key]!
      }
    }
    return {
      name: entry.name,
      cla: def.cla,
      ncla: def.ncla,
      glo: def.glo,
      readings,
      phon: phon(entry.name),
      writ: write(entry.name),
    }
  } catch (error) {
    return { error: (error as Error).message.split('\n')[0] }
  }
}

const chains: string[] = JSON.parse(readFileSync(0, 'utf8'))
console.log(JSON.stringify(chains.map(say)))
