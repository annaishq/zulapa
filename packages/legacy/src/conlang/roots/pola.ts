import * as _ from '../lang'

export const pola = _.word('pola', {
  noun: 'gift',
  verb: 'to give away',
  desc: () => `
(Potlatch !)[https://en.wikipedia.org/wiki/Potlatch]

A special kind of gift, beautiful and obscure, full of meaning and warning, covering
shame or guilt, expecting submission or showing off, rekindling links or menacing
to break them. A ${_.pola} can be many things but is always a mark of power.

A "free" gift is ${_.guwuna} (even though, this one is also full of
${_.gu})...
`,
})
