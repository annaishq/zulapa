import { prefix } from '../../zulapa'
import { shaH } from '../../roots'

export const sha = prefix('sha', {
  noun: 'they (plural)',
  glo: 'they.PL',
  cla: 'verb',
  see: () => [shaH],
})
