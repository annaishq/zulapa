import { generate, shuffle } from './conlang/generate'
import { entries } from './conlang/lang'
import './conlang/words'

const existing = Object.keys(entries.wordAndAlt)
const trueTest = (k: string) => true

function list(filter: string = '', count = 10) {
  let test = trueTest
  if (filter) {
    const re = new RegExp('^' + (filter || '') + '$')
    console.log(re)
    test = k => re.test(k)
  }
  const { syllables, lsyllables } = generate()
  const possible = shuffle(
    syllables.filter(k => !existing.includes(k) && test(k))
  )
  const lpossible = shuffle(
    lsyllables.filter(k => !existing.includes(k) && test(k))
  )
  console.log(possible.slice(0, count).join('\n'))
  console.log(lpossible.slice(0, count).join('\n'))
}

list(process.argv[2], parseInt(process.argv[3] || '20') || 20)
