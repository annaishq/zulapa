import * as _ from '../../lang'

export const lu = _.prefix('lu', {
  def: 'while',
  glo: 'CONT',
  scla: 'verb',
  cla: 'verb',
  desc: () => `
This prefix comes after accord to the subject (unlike ${_.es}):

* ${_.phrase('I am dreaming.', _.o.lu.yafa)}
`,
})

export const lue = _.prefix('lue', {
  verb: 'to remember',
  glo: 'CONT.REMEMBER',
  scla: 'verb',
  cla: 'verb',
  desc: () => `
This prefix is accorded like ${_.lu}: after the accord to the subject:

* ${_.phrase('I am skin-remembering your skin.', _.o.lue.noa, _.noa.m)}
`,
  etym: () => [_.lu, _.em],
  see: () => [_.lui],
})

export const lui = _.prefix('lui', {
  verb: 'to desire',
  glo: 'CONT.DESIRE',
  scla: 'verb',
  cla: 'verb',
  desc: () => `
This prefix is accorded like ${_.lu}: after the accord to the subject:

* ${_.phrase('I am skin-desiring your skin.', _.o.lui.noa, _.noa.m)}
`,
  etym: () => [_.lu, _.ir],
})

export const eleu = _.word('eleu', {
  def: 'while, as',
  etym: () => [_.e.imp, _.lue],
})
