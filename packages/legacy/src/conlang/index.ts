import { writeFileSync } from 'fs'
import { join } from 'path'
import { exportJSON, exportLLM, compileAll } from '../conlib/compile'
import { entries } from './lang'
// force compilation
// import './words' // words is already in 'lang' what does this do ??

const compiled = compileAll(entries)
writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(compiled), 'utf8')
exportLLM(compiled, join(__dirname, '..', '..', 'llms'))
console.log('Updated DB.')
export * from './roots'
