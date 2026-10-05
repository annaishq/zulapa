import * as _ from '../lang'

export const tifi = _.word('tifi', {
  verb: 'to cut',
  desc: () => `
From Samoan *tipi* as "p" cannot be pronounced it turned into "tifi". It can
also be understood as "your thread" (it is cut since there is now your thread
that is not ours).
`,
  etym: () => [_.ti, _.fi],
})

export const fiji = _.word('fiji', {
  verb: 'to forget',
  etym: () => [_.tifi, _.ji],
  desc: () => `
Litterally "to cut hair", since hair and memory are the same.
`,
})
