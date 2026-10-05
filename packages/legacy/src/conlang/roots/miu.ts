import * as _ from '../lang'

export const miu = _.word('miu', {
  noun: 'devotion',
  def: 'please',
  verb: 'to surrender',
  see: () => [_.lo],
  desc: () => `
Bhakti...

The difference with ${_.lo} is that this surrendering is much more profound and
goes all the way to make it not only an act of ego-death but also an act of
incredible love.

It is the sounds cat do when talking to their owners, telling them to submit.

The ultimate surrendering is not giving but receiving, ${_.phrase(
    'Receive life',
    _.es.u.miu,
    _.gui
  )}.
`,
})
