import * as _ from '../lang'

export const gods = _.card('gods', {
  writ: 'gods',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg/330px-Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg',
  img_pos: '30%',
  desc: () => `
# Goddesses and gods

* ${_.sona}
* ${_.gaxal}
* ${_.gusona}
* ${_.xusona}
* ${_.xurakan}
* ${_.pan}

## Devotion ${_.miu}

Zulapa has incorporated some of the Hindu notion of Bhakti and the Mahavidya.
Here are the ten aspects of the Mother Goddess Parvati:

* ${_.gusona} (Kali/time)
* ${_.gisona} (Tara/compassion)
* ${_.pasona} (Lalita/Sati/all of life)

## Mythic places

* ${_.dafodil} (Underworld)

## The Higher Self is not the end

I and Thou (1923), Martin Buber.

* ${_.phrase("The small immanent human teaches (confuses) the transcendant divine.", _.xuoda, _.a.sux, _.om)}
* ${_.phrase("To discuss with the divine.", _.ktelapa, _.ko.ukte)}
`,
})

export const ukte = _.word('ukte', {
  noun: 'divine',
  desc: () => 'The possibility of separation, the opened space for the dialog.',
  etym: () => [_.u, _.kte],
})

export const ktelapa = _.word('ktelapa', {
  noun: 'dialog',
  verb: 'to discuss',
  desc: () => 'Keeping the space open for exchange, staying separated.',
  etym: () => [_.kte, _.lapa],
})
