import * as _ from '../lang'

export const il = _.word('il', {
  noun: 'summer',
  adj: 'warm',
})

// À quatre pattes, la langue dehors, rugir avec le souffle
export const odil = _.word('odil', {
  noun: 'lion',
  etym: () => [_.oda, _.il],
})
