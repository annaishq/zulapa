import * as _ from '../lang'

export const uba = _.word('uba', {
  verb: 'to run down',
  exam: () => [
    _.phrase(
      'Tears are running down your face.',
      _.falam,
      _.a.uba,
      _.fe.dutha.ti
    ),
  ],
})
