import * as _ from '../lang'

export const Iris = _.word('Iris', {
  noun: 'Iris',
})

export const prep = _.card('prep', {
  desc: () => `
# Prepositions

The prepositions that can be used as case marking have the gloss next to them

## Time

* ${_.ref(_.lau)}
* ${_.ref(_.uya)}
* ${_.ref(_.lulei)}
* ${_.ref(_.dem)}
* ${_.ref(_.dir)}
* ${_.ref(_.lei)}
* ${_.refAndGlo(_.lu)}
* ${_.refAndGlo(_.ju)}
* ${_.refAndGlo(_.xu)}

#### nsfw

* ${_.phrase('I like when you are undressed.', _.o.zu, _.lau, _.es.yi.nefe)}

## Nouns

* ${_.refAndGlo(_.le)}
* ${_.refAndGlo(_.wu)}
* ${_.ref(_.diwu)}
* ${_.ref(_.difu)} (can also use ${_.a.s})
* ${_.ref(_.eku)}
* ${_.refAndGlo(_.ko)}
* ${_.refAndGlo(_.es)}
* ${_.refAndGlo(_.fu)}
* ${_.refAndGlo(_.ni)}
* ${_.refAndGlo(_.le)}
* ${_.refAndGlo(_.ne)}
* ${_.refAndGlo(_.sau)}
* ${_.refAndGlo(_.s)}
* ${_.refAndGlo(_.tu)}
* ${_.refAndGlo(_.dor)}
* ${_.refAndGlo(_.shun)}


#### nsfw

* ${_.phrase('I like that you are naked.', _.o.zu, _.eku, _.o.yi.e, _.nefe)}

## Generic unknown

* ${_.ref(_.don)}

* ${_.phrase('Iris whom you caressed.', _.Iris.m, _.don, _.i.mi.ema)}
* ${_.phrase('Iris who caressed you.', _.Iris, _.don, _.a.mi.ema, _.ti.m)}

## Location

* ${_.ref(_.dono)}
* ${_.ref(_.done)}
* ${_.ref(_.dona)}
* ${_.ref(_.tha)}
* ${_.ref(_.jo)}
* ${_.ref(_.fo)}
* ${_.ref(_.dau)}
* ${_.ref(_.dao)}
* ${_.ref(_.kte)}
* ${_.refAndGlo(_.fe)}
* ${_.refAndGlo(_.ro)}
* ${_.refAndGlo(_.ri)}
* ${_.refAndGlo(_.ruP)}

Examples

* ${_.phrase(
    'Where (on the body) did you caress Iris ?',
    _.dono,
    _.Iris.m,
    _.i.mi.ema,
    _.q
  )}
* ${_.phrase(
    'Where (in which place) did you kiss ?',
    _.done,
    _.shi.la.ema,
    _.q
  )}
* ${_.phrase('Who did you caress ?', _.dona.m, _.i.mi.ema, _.q)}
* ${_.phrase('To whom did you speak ?', _.ni.dona, _.i.lapa.ema, _.q)}

## Causality

* ${_.ref(_.eyu)}
* ${_.ref(_.ibu)}
* ${_.ref(_.eja)}
* ${_.ref(_.qu)}
* ${_.ref(_.eku)} (if)
* ${_.ref(_.meu)}

Examples:

* ${_.phrase('Did you caress Iris ?', _.eja, _.Iris.m, _.i.mi.eme, _.q)}
* ${_.phrase('Why ?', _.eja, _.gu.qu, _.q)}

## Similarity

* ${_.refAndGlo(_.si)}

## Composability

* ${_.ref(_.mei)}

## Articulation

* ${_.ref(_.shu)}
* ${_.ref(_.neshu)}
* ${_.ref(_.uma)}

`,
})
