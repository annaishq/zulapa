import * as _ from '../lang'

export const count = _.card('count', {
  writ: 'count',
  phon: '/caut/',
  desc: () => `
# Numbers and counting

Here are the number from 1 to 10:

* ${_.ipi} (10 / ౧౦)
* ${_.da} (9 / ౯)
* ${_.je} (8 / ౮)
* ${_.fe} (7 / ౭)
* ${_.shi} (6 / ౬)
* ${_.lil5} (5 / ౫)
* ${_.qa} (4 / ౪)
* ${_.pe} (3 / ౩)
* ${_.de} (2 / ౨)
* ${_.pi} (1 / ౧)

The powers of ten:

* ${_.ipu} (1000)
* ${_.ipa} (100)
* ${_.ipi10} (10)

## Some examples:

* ${_.phrase('14', _.ipi10, _.qa4)}
* ${_.phrase('24', _.de2.ipi10, _.qa4)}
* ${_.phrase('359', _.pe3.ipa100, _.lil5.ipi10, _.da9)}
* ${_.phrase('2019', _.de2.ipu1000, _.ipi10, _.da9)}
* ${_.phrase("105'000", _.ipa100, _.lil5, _.ipu1000)}

## Big numbers !

* ${_.phrase('million (1000^2)', _.ipu1000.de2.uki)}
* ${_.phrase('billion (1000^3)', _.ipu1000.pe3.uki)}
* ${_.phrase('trillion (1000^4)', _.ipu1000.qa.uki)}
* ${_.phrase(
    "999'999'999",
    _.da9.ipa100,
    _.da9.ipi10,
    _.da9,
    _.ipu1000.de2.uki,
    _.da9.ipa100,
    _.da9.ipi10,
    _.da9,
    _.ipu1000,
    _.da9.ipa100,
    _.da9.ipi10,
    _.da9
  )}

We can also express powers of ten ${_.phrase('10^4', _.ipi10.qa.uki)}.

## Small numbers

* ${_.phrase('tenth (10^-1)', _.ipi10.iki)}
* ${_.phrase('hundredth (10^-2)', _.ipi10.de2.iki)}
* ${_.phrase('thouandth (10^-3)', _.ipi10.pe3.iki)}

See ${_.ganes}
`,
})
