import * as _ from '../lang'

const Lila = _.word('Lila', {
  noun: 'Lila',
})

const Cai = _.word('Cai', {
  noun: 'Cai',
})

export const subj = _.card('subj', {
  // open: true,
  desc: () => `
# Subject and possessivity

The following morphemes express people (you, me, them), possessivity (my,
your, their) or verb conjugation depending on how the morpheme is
agglutinated (or not).

## Verbs

To transform a noun into a verb, the morpheme representing the subject is
prefixed on the noun as-is or with an /h/ to fix double vowels. Example:

* ${_.i.mi.ema}

Details on verbs here: ${_.verbs}.


# Subjects

Here is the full list of subjects to express actions, possessivity and address.

### indefinite

This subject is the most used to talk about oneself and it means "we" in the
indefinite sense. It is part royal and part modesty.

* ${_.linkAndGlo(_.o)}
* ${_.linkAndGlo(_.o.kei)}

With genders

* ${_.linkAndGlo(_.o.wi)}
* ${_.linkAndGlo(_.o.nu)}
* ${_.linkAndGlo(_.o.to)}

### every

* ${_.linkAndGlo(_.o.qa)}

### me

* ${_.linkAndGlo(_.o.pi)}
* ${_.linkAndGlo(_.o.yi)}
* ${_.linkAndGlo(_.o.lo)}

### you and me

* ${_.linkAndGlo(_.o.de)}

### us

* ${_.linkAndGlo(_.sho)}
* ${_.linkAndGlo(_.sho.kei)}
* ${_.linkAndGlo(_.sho.yi)}
* ${_.linkAndGlo(_.sho.lo)}

### you (just you, singular)

* ${_.linkAndGlo(_.i)}
* ${_.linkAndGlo(_.i.kei)}
* ${_.linkAndGlo(_.i.yi)}
* ${_.linkAndGlo(_.i.lo)}

With genders

* ${_.linkAndGlo(_.i.wi)}
* ${_.linkAndGlo(_.i.nu)}
* ${_.linkAndGlo(_.i.to)}

### you (plural)

* ${_.linkAndGlo(_.shi)}
* ${_.linkAndGlo(_.shi.kei)}
* ${_.linkAndGlo(_.shi.yi)}
* ${_.linkAndGlo(_.shi.lo)}

### them (singular)

* ${_.linkAndGlo(_.a)}
* ${_.linkAndGlo(_.a.kei)}
* ${_.linkAndGlo(_.a.yi)}
* ${_.linkAndGlo(_.a.lo)}

With genders

* ${_.linkAndGlo(_.a.wi)}
* ${_.linkAndGlo(_.a.nu)}
* ${_.linkAndGlo(_.a.to)}

### some of them

* ${_.linkAndGlo(_.a.pe)}

### them (plural)

* ${_.linkAndGlo(_.sha)}
* ${_.linkAndGlo(_.sha.kei)}
* ${_.linkAndGlo(_.sha.yi)}
* ${_.linkAndGlo(_.sha.lo)}

## Relative

* ${_.le} who (noun modifier)

## Possessivity suffix

We can use a prefix or suffix to introduce a noun phrase clarifying possessivity:

* ${_.linkAndGlo(_.mo)}
* ${_.linkAndGlo(_.ti)}
* ${_.linkAndGlo(_.sa)}
* ${_.linkAndGlo(_.thu)}

With genders, we add ${_.wi}, ${_.nu} or ${_.to}. For example:

* ${_.linkAndGlo(_.sa.nu)}
* ${_.linkAndGlo(_.mo.wi)}
* ${_.linkAndGlo(_.ti.nu)}

In a phrase, this makes:

* ${_.phrase('your hand', _.ti.ma)}
* ${_.phrase('your woman-hand', _.ti.nu.ma)}

or ${_.wu}

* ${_.phrase('hand of you', _.ma.wu, _.ti.noun)}
* ${_.phrase('Our hand covers your skin.', _.mo.ma, _.a.fe, _.noa.ti.m)}

The \`/m/\` endings are the 'mood' markings (accusative). See ${_.acc}.

## TODO: REWRITE END OF THIS CARD...

##### note

If you read this, I screwed up and haven't fixed the text before publishing. Bad.

## Possessivity

To mark possessivity, the morpheme is prefixed or suffixed to the noun and a
/t/ is added. Double consonant is fixed with an /a/. Examples:

* ${_.ti.ma}
* ${_.ma.ti}

The choice between prefix or suffix depends on context and what sounds best.
The difference is a bit like saying "your hand" or "hand of you". This lets
put emphasis where we want, like dropping the ${_.ti.m} of ${_.noa.ti.m} gently
after a small pause to express kindness or awe.

## Person

Depending on context we can chose between different ways to express personhood.

We can add ${_.da} (self/body) to put emphasis on the corporeal nature of the
person:

* ${_.phrase('I love you (alive in a body).', _.o.zu, _.i.da.m)}

We can use the prefix ${_.ti} (possessive) to emphasize the person's sense of
self (owning of themself):

* ${_.phrase('I love you (on your own path).', _.o.zu, _.ti.m)}

Or we can use the subject marker alone for a more neutral form:

* ${_.phrase('I love you (a bit formal).', _.o.zu, _.i.m)}

The \`/m/\` at the end marks the accusative (${_.m}).

### antecedent

All subjects can get the ${_.s} suffix to mean antecedent. It can be used on
any noun or subject form. To reference a complete sentence or clause, we use
the work ${_.eku} (fact), meaning "that fact":

${_.phraseX(
  'Lila and Cai have been making love. This annoys the neighbours.',
  Lila,
  _.ko,
  Cai,
  _.sha.lu.zuzu.em,
  _.$dot,
  _.eku.s,
  _.a.lakshan,
  _.se.muda.m
)}
## Target person (dative)

When specifying the recipient of an action, we use ${_.ni} (arrow) as prefix
on the subject. You can understand this prefix as something in the line of
"to/of".

* ${_.phrase('Massage us.', _.mi.imp, _.ni.mo)}
* ${_.phrase('Massage them.', _.mi.imp, _.ni.sa)}

There are other prefix that can be used such as ${_.fe} (on), ${_.ro} (in)
and so on: ${_.prep}.

## Subject suffix (ergative)

We usually omit the subject because it is visible on the verb but when we
want to use it, we use ${_.da} (self).

* ${_.phrase('They will talk to you.', _.a.da, _.a.lapa.ir, _.ni.ti)}

List of people:

* ${_.o.da} (people)
* ${_.i.da} (you-person)
* ${_.a.da} (they-person)
* ${_.pi.da} (I-person)
* ${_.kei.da} (Master-person)
* ${_.yi.da} (tiny-person)
* ${_.lo.da} (wet-person)
* ${_.pe.da} (someone)
* ${_.de.da} (us-two)
* ${_.pa.da} (all of us)

## Genders

To express gender, we use the possessive 'your', 'their', etc and the noun that
most closely expresses the desired notion. Note that the verb is accorded to the
possessive argument. Here are some examples:

* ${_.phrase('You-enby walk.', _.ti.wi, _.i.lipa)}
* ${_.phrase('She sings.', _.sa.nu, _.a.lipa)}
* ${_.phrase('They-men talk.', _.sa.sha.to, _.sho.lapa)}
* ${_.phrase('She loves me.', _.sa.nu, _.a.zu, _.pi.m)}

Note that we also have words to express gendered-bodies and these (like any
noun) can be used as subjects or "targets" in phrases but they then accord as
an indefinite 'person' as if we would say 'someone', 'some girl', etc.

* ${_.wi.da} (enby-person)
* ${_.nu.da} (female-person)
* ${_.to.da} (male-person)

Your next read: ${_.evolution} (how things evolved)
`,
})
