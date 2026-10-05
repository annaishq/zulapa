import { alt, suffix } from '../zulapa'

export const da = suffix('da', {
  noun: 'self',
  glo: 'SELF',
  cla: 'noun',
  scla: 'noun',
  desc: () => `A 'self' can also be a place or a plant or an animal. It means "isness" in a more
  personified, alive way.`,
})

// TODO: need to fix resolution of prefix.suffix.suffix to be prefix.noun.suffix.
// For this we need to lazy resolve on usage (and not during access).
export const daN = alt('da', {
  id: 'daN',
  glo: '**self**',
  alt: () => da,
})
