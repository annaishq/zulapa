import * as _ from '.'

export const adu = _.word('adu', {
  noun: 'proche, ami',
})

export const doda = _.word('doda', {
  noun: 'chien',
  etym: () => [_.adu, _.oda],
})
_.see(_.duda)