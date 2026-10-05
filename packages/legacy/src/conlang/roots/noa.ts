import * as _ from '../lang'

export const noa = _.word('noa', {
  noun: 'skin',
  verb: 'to touch',
})

export const noadun = _.word('noadun', {
  noun: 'territory',
  etym: () => [_.noa, _.dun],
})

// Abi...
export const nomy = _.word('nomy', {
  noun: 'Thank you',
  verb: 'to feel',
  img: 'feet_on_sand.jpeg',
  desc: () => `(I) feel (you) drawing on my skin.
  
Note that if we specify who we thank, it uses the accusative (it is the thing we feel):
  
${_.phrase('I feel (thank) them.', _.o.nomy, _.a.m)}

And if we are grateful for something in particular, the "something" is either a noun
(accusative) or an action becoming a noun (subordinate):

${_.phrase('I thank them for their kindness.', _.o.nomy, _.sa.gi.m)}

Or

${_.phrase('I thank them for speaking.', _.o.nomy, _.a.lapa.n)}

`,
  see: () => [_.odogi, _.palus],
  etym: () => [_.noa, _.my],
})

export const yaunoa = _.word('yaunoa', {
  noun: 'flesh',
  etym: () => [_.yau, _.noa],
})

export const noanoa = _.word('noanoa', {
  verb: 'to make love',
  etym: () => [_.noa.verb, _.noa],
})
