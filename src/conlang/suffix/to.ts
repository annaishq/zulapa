import * as _ from '../words'
import { prefix, word } from '../zulapa'

export const to = prefix('to', {
  noun: 'movement',
  adj: 'masculine',
  glo: 'MASC',
  join: '',
  see: () => [_.subj, _.tosh],
})

export const toda = word('toda', {
  noun: 'man, wind',
  see: () => [_.tosh, _.nuda, _.wida],
  etym: () => [_.to, _.da],
})

export const tonu = word('tonu', {
  verb: 'to sing around trees, to give out',
  see: () => [_.nuto, _.nuda, _.toda],
  etym: () => [_.to, _.nu],
})
