import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { entries } from '../conlang/lang'
import {
  BaseEntry,
  CompiledEntriesByType,
  CompiledEntry,
  EntriesByType,
  EntryByName,
  EntryDefinition,
  TYPES,
} from './types'
// Import all to force word creation
import { phon, write } from './writing'

export { CompiledEntry, EntryByName }

const wordList = Object.values(entries.word)
const cache: { id: string; etym: string[] }[] = wordList
  .filter(w => w.definition.etym)
  .map(w => ({
    id: makeId(w),
    etym: w.definition.etym!().map(resolveAlt).map(makeId),
  }))

function resolveAlt(entry: {
  type: string
  id: string
  definition: {
    alt: () => { id: string }
  }
}) {
  return entry.type === 'alt' ? entry.definition.alt() : entry
}

function makeId(entry: { type: string; id: string }) {
  return `${entry.type}-${entry.id}`
}

function compileWord(entry: BaseEntry): CompiledEntry {
  // So that phrases created during compilation register
  // their origin.
  entries.phraseOrig = entry
  const definition = entry.definition
  const compiled = Object.assign(
    {
      name: entry.name,
      type: entry.type,
    },
    definition,
    {
      id: makeId(entry),
      fulltext: '',
      writ: definition.writ === undefined ? write(entry.name) : definition.writ,
      phon: definition.phon === undefined ? phon(entry.name) : definition.phon,
    }
  ) as CompiledEntry
  const c = compiled as EntryDefinition
  delete c.exam
  delete c.sglo
  delete c.scla
  delete c.ncla
  if (definition.exam) {
    // This runs the phrase production
    definition.exam()
  }
  const fulltext: string[] = [entry.name]
  // if (compiled.glo === undefined) {
  //   // default value to show on gloss
  //   const key = MAIN_KEYS.find(k => definition[k])
  //   compiled.glo = '**' + definition[key!] + '**'
  // }
  if (definition.alt) {
    compiled.alt = makeId(definition.alt())
  }
  if (definition.orig) {
    compiled.orig = makeId(definition.orig())
  }
  if (definition.prev) {
    compiled.prev = makeId(definition.prev())
  }
  if (definition.etym) {
    const etym = definition.etym().map(makeId)
    compiled.etym = etym
    // fulltext.push(...etym)
  }

  if (definition.desc) {
    compiled.desc = definition.desc()
    // fulltext.push(compiled.desc)
  }

  const fullId = makeId(entry)
  const deriv = cache.filter(w => w.etym.find(id => id === fullId))

  if (deriv.length) {
    compiled.deriv = deriv.map(w => w.id)
    // fulltext.push(...deriv.map(w => w.name))
  }

  if (definition.see) {
    const see = definition.see()
    compiled.see = see.map(makeId)
    // fulltext.push(...see.map(w => w.name))
  }

  if (definition.words) {
    const words = definition.words()
    compiled.words = words.map(makeId)
    // fulltext.push(...words.map(w => w.name))
    if (entry.type === 'phrase' || entry.type === 'caption') {
      compiled.phrase = words
        .filter(w => w)
        .map(w => w.name)
        .join(' ')
    }
  }

  compiled.fulltext = [
    ...fulltext,
    // ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
  return compiled
}

function registerWord(phrase: CompiledEntry, word: CompiledEntry) {
  let { phrases } = word
  if (!phrases) {
    phrases = word.phrases = []
  }
  if (
    (word.maxPhrases === undefined || phrases.length < word.maxPhrases) &&
    !phrases.includes(phrase.id)
  ) {
    phrases.push(phrase.id)
  }
}

function registerInPhrase(
  compiled: CompiledEntriesByType,
  phrase: CompiledEntry,
  id: string
) {
  const [type] = id.split('-')
  const word = compiled[type as keyof typeof compiled][id]
  if (!word) {
    console.error(`Missing word '${id}', cannot register`)
    return
  }
  if (type === 'alt') {
    if (word.orig) {
      registerInPhrase(compiled, phrase, word.orig)
    }
    if (word.prev) {
      registerInPhrase(compiled, phrase, word.prev)
    }
  } else {
    registerWord(phrase, word)
  }
}

export function compileAll(db: EntriesByType): CompiledEntriesByType {
  const start = Date.now()
  const compiled: CompiledEntriesByType = {
    word: {},
    card: {},
    phrase: {},
    caption: {},
    alt: {},
  }

  TYPES.forEach(type => {
    const result = compiled[type]
    const entries = db[type]
    Object.keys(entries).forEach(key => {
      const entry = compileWord(entries[key])
      result[entry.id] = entry
    })
  })

  // Register phrases in words
  const { phrase } = compiled
  Object.values(phrase).forEach(phrase => {
    phrase.words!.forEach(id => registerInPhrase(compiled, phrase, id))
  })

  function count(entry: CompiledEntry) {
    return (['noun', 'adj', 'verb', 'adv'] as (keyof CompiledEntry)[])
      .map(e => entry[e])
      .filter(e => e).length
  }
  function countAll(entries: CompiledEntry[]) {
    return entries.reduce((acc, e) => acc + count(e), 0)
  }

  console.log(
    `Compiled ${Object.keys(compiled.word).length} words (${countAll(
      Object.values(compiled.word)
    )} meanings) in ${Date.now() - start} ms`
  )
  return compiled
}

export function exportJSON(compiled: CompiledEntriesByType) {
  return JSON.stringify(compiled, null, 2)
}

const STRIP_GLO = /\*\*/g
const PUNCTUATION = new Set(['.', '!', ',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

function cleanGlo(glo: string | undefined): string {
  return (glo || '').replace(STRIP_GLO, '').replace(/\*undefined\*/g, '')
}

function resolveName(db: CompiledEntriesByType, id: string): string {
  const [type] = id.split('-')
  const entry = db[type as keyof typeof db]?.[id]
  return entry?.name || id
}

function resolveGlo(db: CompiledEntriesByType, id: string): string {
  const [type] = id.split('-')
  const entry = db[type as keyof typeof db]?.[id]
  return cleanGlo(entry?.glo)
}

function renderEtymology(word: CompiledEntry, db: CompiledEntriesByType): string {
  if (!word.etym || word.etym.length === 0) return ''
  const names = word.etym.map(id => resolveName(db, id))
  const glosses = word.etym.map(id => resolveGlo(db, id))
  return [
    `- **Etymology:**`,
    `  ${word.name}`,
    `  ${names.join('.')}`,
    `  ${glosses.join('.')}`,
  ].join('\n')
}

function buildVocabulary(db: CompiledEntriesByType): string {
  const lines: string[] = ['# Vocabulary\n']

  const words = Object.values(db.word)
    .filter(w => w.type === 'word' && !PUNCTUATION.has(w.name) && w.name.trim() !== '')

  const groups: Record<string, CompiledEntry[]> = {
    noun: [],
    verb: [],
    adj: [],
    adv: [],
    def: [],
  }

  for (const w of words) {
    if (w.cla === 'noun') groups.noun.push(w)
    else if (w.cla === 'verb') groups.verb.push(w)
    else if (w.cla === 'adj') groups.adj.push(w)
    else if (w.cla === 'adv') groups.adv.push(w)
    else groups.def.push(w)
  }

  for (const [cla, group] of Object.entries(groups)) {
    if (group.length === 0) continue
    const label = cla.charAt(0).toUpperCase() + cla.slice(1) + 's'
    lines.push(`## ${label}\n`)
    for (const w of group) {
      lines.push(`### ${w.name} (${w.writ}) ${w.phon} — ${w.cla}`)
      if (w.glo) lines.push(`- **Gloss:** ${cleanGlo(w.glo)}`)
      if (w.noun && w.cla !== 'noun') lines.push(`- **Noun:** ${w.noun}`)
      if (w.verb && w.cla !== 'verb') lines.push(`- **Verb:** ${w.verb}`)
      if (w.adj && w.cla !== 'adj') lines.push(`- **Adj:** ${w.adj}`)
      if (w.adv && w.cla !== 'adv') lines.push(`- **Adv:** ${w.adv}`)
      if (w.def && w.cla !== 'def') lines.push(`- **Def:** ${w.def}`)
      const etym = renderEtymology(w, db)
      if (etym) lines.push(etym)
      if (w.desc) lines.push(`- **Description:** ${w.desc.trim().replace(/\n/g, '\n  ')}`)
      if (w.deriv) {
        const names = w.deriv.map(id => resolveName(db, id)).join(', ')
        lines.push(`- **Derived terms:** ${names}`)
      }
      if (w.see) {
        const names = w.see.map(id => resolveName(db, id)).join(', ')
        lines.push(`- **See also:** ${names}`)
      }
      lines.push('')
    }
  }

  return lines.join('\n')
}

function buildGrammar(db: CompiledEntriesByType): string {
  const lines: string[] = ['# Grammar & Concepts\n']

  for (const card of Object.values(db.card)) {
    if (!card.name) continue
    lines.push(`## ${card.name}`)
    if (card.desc) {
      const desc = card.desc
        .replace(/\[([^\]]+)\]\(card-[^)]+\)/g, '**$1**')
        .replace(/\[([^\]]+)\]\(word-[^)]+\)/g, '`$1`')
        .replace(/\[([^\]]+)\]\(phrase-[^)]+\)/g, 'phrase $1')
      lines.push(desc.trim())
    }
    lines.push('')
  }

  return lines.join('\n')
}

function buildPhrases(db: CompiledEntriesByType): string {
  const lines: string[] = ['# Phrases\n']

  const resolveGlossLine = (phrase: CompiledEntry): string => {
    if (!phrase.words) return ''
    return phrase.words
      .map(id => resolveGlo(db, id) || resolveName(db, id))
      .join('  ')
  }

  for (const phrase of Object.values(db.phrase)) {
    const nsfw = phrase.nsfw ? ' (NSFW)' : ''
    lines.push(`### Phrase ${phrase.name}${nsfw}\n`)
    if (phrase.phrase) lines.push(`    ${phrase.phrase}`)
    const glossLine = resolveGlossLine(phrase)
    if (glossLine) lines.push(`    ${glossLine}`)
    if (phrase.trad) lines.push(`    *${phrase.trad}*`)
    lines.push('')
  }

  return lines.join('\n')
}

function buildInflections(db: CompiledEntriesByType): string {
  const lines: string[] = [
    '# Inflected Forms\n',
    '| Form | Gloss | Root |',
    '|------|-------|------|',
  ]

  for (const alt of Object.values(db.alt)) {
    const gloss = cleanGlo(alt.glo)
    const root = alt.orig ? resolveName(db, alt.orig) : alt.name
    lines.push(`| ${alt.name} | ${gloss} | ${root} |`)
  }

  return lines.join('\n')
}

function buildCaptions(db: CompiledEntriesByType): string {
  const lines: string[] = ['# Captions\n']

  for (const caption of Object.values(db.caption)) {
    if (!caption.cap) continue
    lines.push(`### Caption ${caption.name}`)
    if (caption.phrase) lines.push(`- **Zulapa:** ${caption.phrase}`)
    lines.push(`- **English:** ${caption.cap}`)
    if (caption.trad) lines.push(`- **Translation:** ${caption.trad}`)
    lines.push('')
  }

  return lines.join('\n')
}

export function exportLLM(compiled: CompiledEntriesByType, outDir: string) {
  mkdirSync(outDir, { recursive: true })

  const files: [string, string][] = [
    ['vocabulary.md', buildVocabulary(compiled)],
    ['grammar.md', buildGrammar(compiled)],
    ['phrases.md', buildPhrases(compiled)],
    ['inflections.md', buildInflections(compiled)],
    ['captions.md', buildCaptions(compiled)],
  ]

  for (const [filename, content] of files) {
    writeFileSync(join(outDir, filename), content, 'utf8')
  }

  console.log(`Written ${files.length} markdown files to ${outDir}`)
}
