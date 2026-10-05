import * as _ from '../lang'

export const pi = _.word('pi', {
  noun: 'I',
  glo: 'I',
  adj: 'origin',
  desc: () => `
${_.pi} is the opposite of ${_.pa}... and it is the same.

It means 'one', 'here' whereas ${_.pa} means 'every', 'all around'.
`,
  see: () => [_.pa],
})

export const pida = _.word('pida', {
  def: 'I person',
  etym: () => [_.pi, _.da],
  see: () => [_.subj],
})

export const papi = _.word('papi', {
  noun: 'sagesse (tout écho en soi)',
  etym: () => [_.pa, _.pi],
})

export const pipa = _.word('pipa', {
  noun: 'innocence (soi partout)',
  etym: () => [_.pi, _.pa],
})

export const pienu = _.word('pienu', {
  adj: 'alone',
  adv: 'alone',
  etym: () => [_.pi, _.enu],
  desc: () => `
  ${_.phrase(
    'Standing in the vast inner loneliness.',
    _.u.sen,
    _.ro.pienu.es,
    _.le.goa
  )}
  `,
})

export const pienules = _.word('pienules', {
  noun: 'loneliness',
  etym: () => [_.pienu, _.es],
})

export const aupi = _.word('aupi', {
  verb: `self-love`,
  etym: () => [_.au, _.pi],
})

export const gupi = _.word('gupi', {
  verb: 'to accept',
  etym: () => [_.gu, _.pi],
  see: () => [_.nelo, _.qupa],
})

export const nepi = _.word('nepi', {
  noun: 'division',
  verb: 'to fragment', // = to fight to death
  adj: 'disembodied, fragmented',
  etym: () => [_.ne, _.pi],
  see: () => [_.nexa, _.ganes, _.nanes],
})

// L'écoute de djopi ouvre à hapi
export const djopi = _.word('djopi', {
  noun: 'soi proximal (soi profond, souvent le passé)',
})

// Sentir hapi donne le courage d'écouter djopi
export const hapi = _.word('hapi', {
  noun: 'soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)',
})

export const piyi$ = _.word('piyi', {
  def: 'I (tiny)',
  glo: 'I.TINY',
  see: () => [_.verbs],
})
