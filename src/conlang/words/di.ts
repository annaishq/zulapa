import * as _ from '.'

export const di = _.word('di', { prefix: 'qui (transforme verbe en adj)' })
_.see(_.prep)
_.see(_.diwu)

export const diguwu = _.word('diguwu', {
  noun: 'généreu.se.x',
  etym: () => [_.di, _.guwu],
})
