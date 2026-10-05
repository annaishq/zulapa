import * as _ from '../lang'

export const sona = _.word('sona', {
  noun: 'mother earth',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg/330px-Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg',
  img_pos: '30%',
  desc: () => `
[Mother goddess](https://en.wikipedia.org/wiki/Mother_goddess)
  `,
  see: () => [_.gods],
  etym: () => [_.so, _.na],
})

export const xusona = _.word('xusona', {
  noun: 'veil',
  img: 'dhumavati.jpeg',
  desc: () => `
She is the Veil Goddess: the illusion of beginings and endings, limits, the confusion that serves as a protection from the intensity of the divine. She hides creation so that we can explore it, through time (${_.gusona}) and space (${_.gisona}).

She is also called **Dhūmāvatī (धूमावती)**.
  `,
  etym: () => [_.xu.noun, _.sona],
  see: () => [_.gods],
})

export const gusona = _.word('gusona', {
  noun: 'impermanence',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kali_by_Raja_Ravi_Varma.jpg/330px-Kali_by_Raja_Ravi_Varma.jpg',
  img_pos: '0',
  desc: () => `
${_.gusona} allows the unfolding of space through time, of life through
death, of knowledge through experience. She is the mother goddess of ${_.gu} and opens the door to timelessness.

Her other name is **Kālī (काली)**, the Hindu goddess of Time, Creation,
Destruction and Power.

Kali is the chief of the
[Mahavidyas](https://en.wikipedia.org/wiki/Mahavidya), a group of ten Tantric
goddesses who each form a different aspect of the mother goddess ${_.sona}.
  `,
  etym: () => [_.gu, _.sona],
  see: () => [_.gods],
})

// 1. Kali (Time)
export const kali = _.word('kali', {
  noun: 'impermanence',
  see: () => [_.gusona],
})

// 2. Tara (Protection)
export const gisona = _.word('gisona', {
  noun: 'compassion',
  etym: () => [_.gi, _.sona],
})

// 3. Lalita (All of life)
export const pasona = _.word('pasona', {
  noun: 'mystery',
  desc: () => `
This is the name of the Goddess Lalita (Tripura Sundari, Sati). She is the highest form of the ten aspects of ${_.sona} (Parvati).

With Sadasiva, she is the creator of the 5 Pancha-Krityas (${_.ru}):

* ${_.ru} Sristi or creation
* ${_.gi} Sthithi or protection
* ${_.ne} Samhara or destruction
* ${_.gunux} Thirodhana or concealment of the world in Maya
* ${_.gana} Anugraha or final liberation
`,
  see: () => [_.ganes],
})
