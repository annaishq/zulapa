import * as _ from '../lang'

export const nuq = _.word('nuq', {
  noun: 'tree',
  see: () => [_.nuda, _.plants],
  pos: 'cowgirl',
  desc: () =>
    `The position means "tree-like" because the legs are like roots and the torso, arms and hair represent the trunk and branches.`,
})

export const nuqawi = _.word('nuqawi', {
  noun: 'medusa',
  etym: () => [_.nuq, _.awi],
})

export const noanuq = _.word('noanuq', {
  noun: 'bark',
  etym: () => [_.noa, _.nuq],
  see: () => [_.plants],
})

export const manuq = _.word('manuq', {
  noun: 'leaf',
  etym: () => [_.ma, _.nuq],
  see: () => [_.plants, _.ish],
})

export const nuqrum = _.word('nuqrum', {
  noun: 'branch',
  etym: () => [_.nuq, _.rum],
  see: () => [_.plants],
})

export const samnuq = _.word('samnuq', {
  noun: 'root',
  etym: () => [_.sam, _.nuq],
  see: () => [_.plants],
})

export const konuq = _.word('konuq', {
  noun: 'oak',
  img: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Quercus_robur.jpg',
  see: () => [_.nuq],
})
