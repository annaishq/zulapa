import { MAIN_KEYS } from './conlib/types'
import db from './db.json'

function stats() {
  Object.keys(db).forEach(k => {
    console.log(`[${k}] ${Object.keys(db[k as keyof typeof db]).length}`)
    if (k === 'word') {
      let c = 0
      for (const w of Object.values(db.word)) {
        c += MAIN_KEYS.filter(m => (w as any)[m]).length
      }
      console.log(`[definitions] ${c}`)
    }
  })
  console.log('\n')
}

stats()
