import * as _ from '../lang'

export const old_lady = _.card('Old Lady', {
  desc: () => `
# Old Lady

* ${_.phrase(
    '"What have you loved ?" will ask the Old Lady',
    _.don,
    _.shi.zu.em,
    _.q,
    _.a.lapu.ir,
    _.ukilei.ana
  )}
* ${_.phrase(
    'We will say: "the sound of the rain on leafs" and "the laughs of children".',
    _.sho.lapa.ir,
    _.agana.wu,
    _.gai,
    _.fe,
    _.anama,
    _.shu,
    _.duhasha.wu,
    _.joda
  )}
* ${_.phrase(
    '"The singings of our men and their tired arms entangled in our hair".'
  )}
* ${_.phrase(
    '"The blue sky dreaming itself on the grass and the whispering of the wind".'
  )}
* ${_.phrase(
    'And finally, moved beyond repair, "the sound of a familiar voice, yes, the unique tone of a loved voice".'
  )}
`,
})