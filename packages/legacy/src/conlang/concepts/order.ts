import * as _ from '../lang'

export const Jane = _.word('Jane', {
  noun: 'Jane',
  phon: '/dʒan/',
  writ: 'జాఁ',
})
export const Janeam = _.alt('Janeam', {
  glo: '**Jane**.ACC',
  phon: '/dʒanam/',
  writ: 'జానాం',
  alt: () => _.Jane,
})
export const fuJane = _.alt('fuJane', {
  glo: 'ERG.**Jane**',
  phon: '/fudʒan/',
  writ: 'చుజాఁ',
  alt: () => _.Jane,
})

export const John = _.word('John', {
  noun: 'John',
  phon: '/dʒɔn/',
  writ: 'జోఁ',
})

export const order = _.card('order', {
  // open: true,
  writ: 'order',
  desc: () => `
# Word order

##### note

Warning: there is a lot of butt whipping on this page and phrases are not
marked as 'nsfw' here because the explanations would not make sense without
all the examples. It's just butt whipping (nothing more).

Word order evolved to be nearly free so that we can put emphasis and
expectation on any part of the phrase, helping identify the
[theme](https://en.wikipedia.org/wiki/Topic_and_comment) and the
[rheme](https://en.wikipedia.org/wiki/Topic_and_comment), the topic and the
comment, the known and the unknown, the old information and the new.

##### note 

Click on the "i" emoji on the top right corner of this card to hide/show gloss and
traductions for all phrases on this card.

In order to be able to move words and sub phrases around, we use three cases:

* ${_.fu} *Doer*: ergative (who)
* ${_.m} *Taste/mood*: accusative (what)
* ${_.ni} *Incidental*: dative (to whom)

Ergative case marking is rare. It is only used when we want to emphasize who
does the action or if the context is very confusing (for example when using
body parts as subjects):

${_.phrase('On your skin, my hand walks.', _.fe.noa.ti, _.fu.ma, _.a.fen)}

## Examples:

In these examples, the english traductions are not meant to be grammatically
correct because english is not a free word order language.

#### nsfw

${_.phrase('Jane whips the butt of John', _.Jane, _.a.fo, _.pal.wu, _.John.m)}

${_.phrase(
  'John gives the ball to Jane',
  _.John,
  _.a.guwu,
  _.tame.m,
  _.ni.Jane
)}

${_.phrase(
  'John talks about Iris to Jane',
  _.John,
  _.a.lapa,
  _.Iris.m,
  _.ni.Jane
)}

${_.phrase(
  'To John, insults, yells Jane.',
  _.ni.John,
  _.lapanagu.m,
  _.a.thaopa,
  _.Jane
)}

## Some more examples

${_.phrase(
  'Iris shows her eyes to Jane.',
  _.Iris,
  _.a.guwu,
  _.sa.nu.fa.m,
  _.ni.Jane
)}

${_.phrase(
  'I always dream Iris and me make love to you.',
  _.o.yafa.au,
  _.eku,
  _.Iris,
  _.shu,
  _.mo,
  _.sho.zuzu,
  _.ti.m
)}

${_.phrase('They talk about John to me.', _.a.lapa, _.John.m, _.ni.mo)}

And in this one, "Jane" is the object of a preposition (the place where the
ball is thrown) and has no marking.

${_.phrase(
  'John throws the ball at Jane',
  _.John,
  _.a.rumo,
  _.tame.m,
  _.done,
  _.Jane
)}

## Accusative marking

See (${_.acc.name})[${
    _.acc.id
  }] for all the details on this... But basically, the target of an
action (accusative case) is marked ${_.m}.

* ${_.m} glossed \`${_.m.definition.glo}\`

For poetic purpose, the "na" can be added before the marking on vowel ending
to refer to "old style" markings in /nam/.

Here are some examples to show when accusative marking on grouped and ungrouped words of a noun phrase.

${_.phrase("They whip John's butt.", _.a.fo, _.John, _.pal.m)}

${_.phrase('They whip the butt of John.', _.a.fo, _.pal.wu, _.John.m)}

${_.phrase('The butt, they whip (of) John.', _.pal.m, _.a.fo, _.John.m)}

---

In our imaginary context, Jane is the Domina and John's butt is the receiver
of the action. Talking to friends we want to tell that Jane will be whipping
John's butt putting emphasis on any part of this action by suspending
discourse and revealing the crux of the action last. So here are the
different parts:

1. Jane (Subject, optional ergative case ${_.fu})
2. will (Tense)
3. whip (Verb)
4. John's butt (Receiver, accusative ${_.m})

## 1. Emphasis on the subject

${_.phrase(
  'The butt of John will be whipped by ... Jane.',
  _.pal.wu,
  _.John.m,
  _.a.fo.iri,
  _.fuJane
)}

## 2. Emphasis on the tense

Note that here we do not say ${_.phrase(
    'The butt of John',
    _.pal.wu,
    _.John.m
  )} because pal is seen
as part of the verb "to whip a butt". Body parts tend to stick to verbs and
actions. Don't ask me why.

${_.phrase(
  'There will be a whipping of butt of John by Jane... tonight.',
  _.fo,
  _.pal,
  _.John.m,
  _.fuJane,
  _.e.iro
)}

## 3. Emphasis on the verb

${_.phrase(
  "By Jane on John's butt, tonight, there will be a whipping.",
  _.fuJane,
  _.John,
  _.pal.m,
  _.a.fo.iri
)}

## 4. Emphasis on the receiver

${_.phrase(
  'Jane will whip tonight the butt of ... John.',
  _.Jane,
  _.a.fo.iri,
  _.pal.wu,
  _.John.m
)}

## 5. Emphasis on the body part

${_.phrase(
  "Jane will whip tonight John's butt.",
  _.Jane,
  _.a.fo.iri,
  _.John,
  _.pal.m
)}

---

## One last word

The topic of the phrase can be further highlighted by ending the first part
of the phrase with ${_.wa}. This allows a kind of pause before saying
precisely what happens (the comment).

We all know Jane loves to whip but we are really interested in knowing
who's butt it will be: 

${_.phrase(
  "Jane will whip tonight - wa ! - John's butt.",
  _.Jane,
  _.a.fo.iri.wa,
  _.John,
  _.pal.m
)}

Your next read: ${_.subj} (subjects)
`,
})
