import * as _ from '../lang'

export const grammar = _.card('grammar', {
  // open: true,
  desc: () => `
# Grammar

If you haven't, you should read the ${_.link('origins of the language', _.aaa)}.

### Moods

There are many ways to express moods in this language from the "maybe tomorrow"
answers to "yes tonight" through tenses or "caressing-look at me", "hit-look at
me" through verb intent. Not to mention honorific or diminutives and other ways
to address people.

These moods are a very important part of the language because they enable
subtlety without requiring lots of vocabulary.

See ${_.verbs} and ${_.subj}.

### Meaning and form

In this language, words change their meaning depending on their function. At
the basic level, everything is a noun and it changes role with markers
(mostly prefix). This means that **every body part is a verb** !!! Youhou !
Now we have a "vulving" verb and a glans-hitting one too ! Nice.

And this also means that we can be creative in how things become active
(verbs) or how they extend meaning (adjective, adverbs). If someone decides
that "cherry" feels like it should mean "provocative" as an adverb and this
becomes part of some love making "surprise me" thing. That would be crazy
nice. And now cherries never look or taste the same...

### Active marker

The "active" marker creates a verb by prefixing a noun with a ${_.link(
    'subject morpheme',
    _.subj
  )}:

* ${_.ma} (hand)
* ${_.a.ma} (they "do something with hand = grab")

### Semantic modifiers

Nouns prefixed with ${_.le} or ${_.si} become semantic extensions
("adjectives" or "adverbs"). Example:

* ${_.phrase('They grab delicately.', _.a.ma, _.si.enu)}

Some morphemes that are used a lot as modifiers become suffixes. For example
${_.uki}, ${_.lo} or ${_.lil}:

* ${_.phrase('Long echoes.', _.agade.uki)}

In these cases, some of these morphemes behave like grammatical cases (INESS,
SUPESS, DIM, etc).

* ${_.phraseX('Inside the vagina.', _.ro.yuru)}

## To be or not to be

In zulapa, we prefer to not use a copula¹ and instead express properties in
terms of being possessed by something, going through something. This gives a
feeling of impermanence, and of the possibility of change as well as the
importance of gratitude for what is now and will be gone.

#### note

(¹) I could not resist to the pleasure of using this word... *Borrowed from
Latin copula ("connection, linking of words"), from co- ("together") +‎ apere
("fasten")*... See ${_.qude}.

This means that instead of saying "She is beautiful", we would say "She is
being beautified" (passive continuous tense):

* ${_.phrase('She is beautiful.', _.sa.nu, _.es.a.lu.awi)}

This highlights the fact that most things in
life happen to us without much agency on our side (one of the reasons why we
should be kind and helping to one another).

A noun or person's property could arise from personal effort, happy birth,
bad luck or anything. In the end, people are mysteries and we have no way of
knowing what they are, their ontology or even the slightest thing about the
causal nature of their being. This is why we just say "beauty is happening"
or "joy is happening" or "love is happening".

When using adjectives, these are bound to the context of the phrase and do
not produce the "is-ness" feeling:

* ${_.phrase('Woman beautiful.', _.nu, _.le.awi)}

And in this case, since 'feminine' is a suffix, we can attach it on a noun
(remember that in Zulapa, ${_.awi} means beauty because fishes are beautiful
and shiny):

* ${_.phrase('Womanly beauty.', _.awi.nu)}

Actually using the verb to be (${_.e}) to express properties is rude and cute
because only foreigners do it.

* ${_.phrase('We are loved.', _.es.o.lu.zu)}

Next reading: ${_.acc}
`,
})
