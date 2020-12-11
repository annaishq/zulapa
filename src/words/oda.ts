import * as _ from '.'

export const yoda = _.word('yoda', { noun: 'corps avec une vulve' })

export const oda = _.word('oda', {
  noun: 'corps, lieu vivant ("on")',
  suffix: 'animal comme, qui a',
  desc: () => `De là vient ${_.keoda} (**la langue cachée du corps**).`,
})
_.see(_.pronouns)
_.see(_.to)

export const kahoda = _.word('kahoda', {
  noun: 'les humains',
  adj: 'humain.e',
})

export const oha = _.word('oha', {
  pronoun: 'soi poétique (nous indéf)',
  derived: [_.o, _.ada],
})

export const keoda = _.word('keoda', {
  noun: 'lieu de vie cachée, langue cachée du corps',
})
