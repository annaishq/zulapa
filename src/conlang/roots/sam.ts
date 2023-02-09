import * as _ from '../lang'

export const sam = _.word('sam', {
  noun: 'foot',
  verb: 'to stand',
  pos: 'standing',
  exam: () => [_.phrase('left foot, right foot', _.sam.se, _.sam.we)],
})

export const samoda = _.word('samoda', {
  noun: 'hero',
  glo: 'foot.person',
  etym: () => [_.sam, _.oda],
})

export const fesam = _.word('fesam', {
  noun: 'socks',
})

export const hasam = _.word('hasam', {
  noun: 'toe',
})

export const josam = _.word('josam', {
  noun: 'ankle',
})

// Mimi's cat Pfötli
export const kasam = _.word('kasam', {
  img: 'paw.jpg',
  noun: 'paw',
  desc: () => `
  A woman, who I met in the sweet Monday's woman sauna sent me a picture of her cat Pfötli (paw in swiss-german). It was such a sweet picture, had to create the word for paw.
  
  So "paw" is "foot of 4 legged animal (${_.kabaj})...`,
  etym: () => [_.kabaj, _.sam],
})
