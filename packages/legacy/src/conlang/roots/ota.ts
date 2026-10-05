import * as _ from '../lang'

export const ota = _.word('ota', {
  noun: 'circle',
  adv: 'again',
  adj: 'surrounded',
})

export const lamota = _.word('lamota', {
  noun: `circle around urethra`,
  etym: () => [_.lam, _.ota],
})

export const hamunota = _.word('hamunota', {
  noun: 'areola',
  etym: () => [_.hamun, _.ota],
})

export const qepalota = _.word('qepalota', {
  noun: `circle around the anus`,
  etym: () => [_.qepal, _.ota],
})
