import * as _ from '../lang'

export const kal = _.word('kal', {
  noun: 'storm',
  adj: 'changing',
  adv: 'change',
  verb: 'to change',
  desc: () =>
    `From the sanskrit word Kāla, meaning 'time' or 'death'. The word is linked to Kali, the goddess of change (see ${_.gusona}).`,
  see: () => [_.gusona, _.ru],
})

export const kalasona = _.word('kalasona', {
  noun: 'kali',
  desc: () => `Another word for impermanence, Kali.`,
  etym: () => [_.kal, _.sona],
  see: () => [_.gusona],
})

// This is Delphine's word
export const kalasam = _.word('kalasam', {
  img: 'horse_photo_by_Marc.jpg',
  noun: 'horse',
  desc: () =>
    `${_.kalasam}, ${_.kalasam}, ${_.kalasam}, ... Can you hear the calling of the storm's feet ?`,
  etym: () => [_.kal, _.sam],
})
