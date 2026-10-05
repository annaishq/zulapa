export function shuffle(array: string[]) {
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    const t = i + Math.floor(Math.random() * (len - i))
    const a = array[i] // where to store randomized pick
    const b = array[t] // random pick un unshuffled area
    array[i] = b
    array[t] = a
  }
  return array
}

export const CONSONANT = [
  'p',
  'b',
  't',
  'd',
  'dj',
  'k',
  'kt',
  'g',
  'f',
  'm',
  'n',
  'nt',
  'r',
  's',
  'sk',
  'st',
  'sh',
  'shk',
  'sht',
  'j',
  'h',
  'l',
  'w',
  'z',
]
export const SEMI_VOWEL = ['y']
export const CONSONANT_SEMI = [...CONSONANT, ...SEMI_VOWEL]
export const VOWEL = ['a', 'e', 'i', 'o', 'u']
export const END = ['j', 'k', 'l', 'n', 'r', 's', 'sh', 't'] // we try to avoid ending in m because it used for accusative

const OR_NOTHING = ''
const GROUPS = [
  [VOWEL, CONSONANT, [...VOWEL, ...SEMI_VOWEL]],
  [VOWEL, [...VOWEL, OR_NOTHING], [...END, ...SEMI_VOWEL, OR_NOTHING]],
  [CONSONANT_SEMI, VOWEL, [...END, OR_NOTHING]],
  [CONSONANT_SEMI, VOWEL, CONSONANT_SEMI, VOWEL],
  [CONSONANT_SEMI, VOWEL, [...VOWEL, ...SEMI_VOWEL]],
]

export function generate() {
  const seen: { [key: string]: boolean } = { '': true }
  const syllables: string[] = []
  const lsyllables: string[] = []

  GROUPS.forEach(g => {
    const [a, b, c, d] = g
    a.forEach(la => {
      b.forEach(lb => {
        if (lb === la) {
          return
        }
        c.forEach(lc => {
          if (lc === lb) {
            return
          }
          if (d) {
            d.forEach(ld => {
              if (ld === lc) {
                return
              }
              const syllable = [la, lb, lc, ld]
                .filter(x => x !== OR_NOTHING)
                .join('')
              if (!seen[syllable]) {
                seen[syllable] = true
                lsyllables.push(syllable)
              }
            })
          } else {
            const syllable = [la, lb, lc].filter(x => x !== OR_NOTHING).join('')
            if (!seen[syllable]) {
              seen[syllable] = true
              syllables.push(syllable)
            }
          }
        })
      })
    })
  })
  return { syllables, lsyllables }
}
