import { Action, Filter } from '../app'
import { CompiledEntry } from '../conlib'
import { getEntry } from '../helpers/getEntry'

export interface CopyPhraseArg {
  id: string
}

export const copyPhrase: Action<CopyPhraseArg> = (ctx, { id }) => {
  console.log('copyPhrase', id)
  const phrase = getEntry(ctx, id)
  if (!phrase) {
    return
  }
  const parts = phrase.words!.map(s => getEntry(ctx, s)) as CompiledEntry[]
  const r = [
    phrase.trad!,
    '\n',
    `| ${parts.map(s => s.writ).join(' | ')} |`,
    `| ${parts.map(s => ':-:').join(' | ')} |`,
    `| ${parts.map(s => s.phon).join(' | ')} |`,
    `| ${parts.map(s => s.name).join(' | ')} |`,
    `| ${parts.map(s => s.glo).join(' | ')} |`,
  ]

  console.log(r.join('\n'))
  navigator.clipboard.writeText(r.join('\n'))
}
