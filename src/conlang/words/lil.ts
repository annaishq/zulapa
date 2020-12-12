import * as _ from '.'

export const lil = _.word('lil', {
  adj: 'petit.e',
  noun: '5',
  suffix: 'petit.e',
})
_.see(_.peulil)
_.see(_.counting)

export const hamalil = _.word('hamalil', {
  noun: 'auriculaire (petit doigt, 5ème doigt)',
})

export const lilaj = _.word('lilaj', {
  noun: 'étincelle',
  position:
    'sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)',
  desc: () => `De ${_.lil} petit et ${_.aj} feu.`,
})

export const nelil = _.word('nelil', {
  noun: 'confusion',
  verb: 'confondre',
})
_.see(_.scale)