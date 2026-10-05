import * as _ from '../lang'

// lapa sun
export const pasux = _.word('pasu', {
  verb: 'to teach',
  etym: () => [_.lapa, _.sux],
})

export const pasuxa = _.word('pasuxa', {
  noun: 'teaching',
  etym: () => [_.pasux, _.na],
})
