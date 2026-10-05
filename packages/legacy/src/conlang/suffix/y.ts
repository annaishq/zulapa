import { alt, suffix } from '../zulapa'

export const y = suffix('y', {
  verb: 'to dance',
  glo: '*DANCE*',
  scla: 'verb',
  id: 'y',
  desc: () => `Moving without a direction, drawing, dancing.`,
})

export const y$ = alt('y', {
  verb: 'to dance',
  glo: '*DANCE*',
  id: 'y$',
  alt: () => y,
})
