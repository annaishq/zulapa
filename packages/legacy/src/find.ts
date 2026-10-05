import { entries } from './conlang/lang'
import './conlang/words'

const existing = Object.keys(entries.wordAndAlt)

function list(filter: string, count: number) {
  const re = new RegExp(filter)
  console.log(re)
  const found = existing.filter(k => re.test(k))
  ;(count > 0 ? found.slice(0, count) : found)
    .sort()
    .forEach(k => console.log(k))
}

list(process.argv[2], parseInt(process.argv[3] || '0') || 0)
