import * as _ from '.'

export const fo = _.word('fo', {
  verb: 'to whip',
})

_.see(_.ofolirpal)

export const zofolir = _.alt('zofolir', {
  glo: 'I.PAS.whip.FUT',
  alt: () => _.fo,
})

export const zikeifo = _.alt('zofolir', {
  glo: 'you.PAS.HONOR.whip',
  alt: () => _.fo,
})

export const ofolir = _.alt('ofolir', {
  glo: '1SG.INDF.whip.FUT',
  alt: () => _.fo,
})

export const shafo = _.alt('shafo', {
  glo: '3PL.whip',
  alt: () => _.fo,
})

export const foliri = _.alt('foliri', {
  glo: 'whip.FUT.HOD',
  alt: () => _.fo,
})

export const afoliri = _.alt('afoliri', {
  glo: '3SG.whip.FUT.HOD',
  alt: () => _.fo,
})

export const folir = _.alt('folir', {
  glo: 'whip.FUT',
  alt: () => _.fo,
})

export const pefolir = _.alt('pefolir', {
  glo: '3PL.INDF.whip.FUT',
  alt: () => _.fo,
})
