import * as _ from '../lang'

export const na = _.word('na', {
  noun: 'thing, pain',
  verb: 'to hurt',
  suff: 'thing',
  adj: 'humility',
  glo: 'THING',
  scla: 'noun',
  desc: () => `
  Pain, reality, hurt, resistance but also the joy of there being a world, an other, something to discover.
  ${_.na} is why things matter.
  `,
})

export const nena = _.word('nena', {
  noun: 'nothing',
  etym: () => [_.ne, _.na],
})

export const nemna = _.word('nemna', {
  noun: 'weapon',
  etym: () => [_.nem, _.na],
})

// === alt
