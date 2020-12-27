import * as _ from '.'

export const lil = _.word('lil', {
  adj: 'petit.e',
  noun: '5',
  suffix: 'petit.e',
  see: () => [_.counting],
})
_.see(_.peulil)

export const hamalil = _.word('hamalil', {
  noun: 'auriculaire (petit doigt, 5ème doigt)',
})

export const lilaj = _.word('lilaj', {
  noun: 'étincelle',
  posit:
    'sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)',
  desc: () => `De ${_.lil} petit et ${_.aj} feu.`,
})

export const nelil = _.word('nelil', {
  noun: 'confusion',
  verb: 'to confound',
  see: () => [_.gunes, _.filil],
})

export const filil = _.word('filil', {
  adj: 'insecure',
  see: () => [_.nunes, _.nelil],
})
