import * as _ from '../lang'

export const fa = _.word('fa', {
  noun: 'eyes',
  verb: 'see',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arctic_Fox_1_%2810549184013%29.jpg/400px-Arctic_Fox_1_%2810549184013%29.jpg',
  desc: () => `
${_.phrase('Show your eyes (partially).', _.guwu, _.fa.m)}

${_.phrase('Look at my hand.', _.fa, _.ma.to.m)}
`,
})

export const gufa = _.word('gufa', {
  noun: 'pupil (life of the eye)',
  glo: 'pupil',
  etym: () => [_.gu, _.fa],
})

export const falo = _.word('falo', {
  noun: 'sadness',
  verb: 'to be sad',
  etym: () => [_.fa, _.lo],
  see: () => [_.falame],
  desc: () => `
${_.phrase("Don't be sad.", _.ne.falo)}`,
})

export const fahata = _.word('fahata', {
  noun: 'mirror',
  verb: 'to reflect',
  etym: () => [_.fa, _.a],
})

// === alt
