import * as _ from '../words'
import { prefix, word } from '../zulapa'

export const wi = prefix('wi', {
  noun: 'creativity',
  adj: 'enby',
  glo: 'NB',
  join: '',
  see: () => [_.dwi, _.nu, _.to],
})

export const wida = word('wida', {
  noun: 'enby, bird',
  see: () => [_.dwi, _.nuda, _.toda],
  etym: () => [_.wi, _.da],
})
