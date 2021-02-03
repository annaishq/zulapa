import * as _ from '.'

export const fo = _.word('fo', {
  verb: 'to whip',
  etym: () => [_.fen, _.o$],
})

// === alt

export const afo = _.alt('afo', {
  glo: 'they1.**whip**',
  alt: () => _.fo,
})

export const ofolir = _.alt('ofolir', {
  glo: 'wex.**whip**.FUT',
  alt: () => _.fo,
})

export const shafo = _.alt('shafo', {
  glo: 'they9.**whip**',
  alt: () => _.fo,
})

export const foliri = _.alt('foliri', {
  glo: '**whip**.FUT.HOD',
  alt: () => _.fo,
})

export const afoliri = _.alt('afoliri', {
  glo: 'they1.**whip**.FUT.HOD',
  alt: () => _.fo,
})

export const afoliriwa = _.alt('afoliriwa', {
  glo: 'they1.**whip**.FUT.HOD.TOP',
  alt: () => _.fo,
})

export const folir = _.alt('folir', {
  glo: '**whip**.FUT',
  alt: () => _.fo,
})
