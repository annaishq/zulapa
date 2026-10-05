import * as _ from '../lang'

export const aaa = _.card('aaa', {
  noun: 'Why zulapa ?',
  desc: () => `
My first goal with ${_.zulapa} was to create a language for love and sex.
Something that would make it easy and fun to express desire, play with power
exchanges and honor the great gift of sharing bodily love.

I also felt that the languages I speak had lots of biais in terms of what is
expected from each gender during sex. For example, most languages have words
to express the masculine action of penetration but lack words to express
feminine action of taking.

#### nsfw

* ${_.phrase('Grasp my penis with your vagina.', _.yuru.imp, _.taj)}
* ${_.phrase('Kiss my lips with your vulva.', _.yin.imp, _.la)}

I thus started to work on a language with the following constraints (in order
of importance):

1. Focus on the body
2. Simple phrases to give sexual orders
3. Relatively easy to pronounce: ${_.phon}

As I worked on the language while going through difficult mental states, I
discovered that creating words helped me better understand what happened to
me so I added words to explore the feelings of awe and terror of being alive.

And finally, I ended up working a lot on the language during my trangender
transition. For some weird reason, inventing words brought me back to my 10
year old self, before I "died" inside. Having a language with so few words
might have reminded me of learning **bahasa indonesia** or **english** or
even my first programming language **pascal** which happened at that age. Or
maybe creating words like "tree-foot" for roots or "wind" to express male
gender brought me closer to this child.

This language has acted as some kind of bridge between a little girl
experiencing the trauma of going through the wrong puberty and the adult I am
now trying to listen to the past while finally discovering a sense of
identity extending into adulthood.

I have always loved languages, choreography notations, music notation,
programming languages. Maybe this is my way to try and decipher why I felt
so dead inside... or a way to escape reality and dream of peace.

# Language evolution

During the first phase of this language creation, the language started with
nouns (representing positions) and nothing else and then I added the notion
that nouns could be verbs (${_.la} means lips but also kissing).

With this in place, it became confusing as to what was the verb and what was
the subject or the target of the action. To solve this, I added the "subject"
prefixes ${_.o$}, ${_.i$}, and later ${_.a}.

After around 2 years into the language creation, I met a guy on a bus and as
we talked, he told me that he was a linguist so I told him about my language
creation project. This is when he said that this was called a "conlang" and
that there were actually books and websites on the subject.

So I bought the books and studies conlanging with passion. Since I new
nothing about linguistices, not even the concept of "adverb" or "pronoun" was
alien to me due to me going in schools with different languages and skipping
all this, I had to do some catching up. This was very good for my project
because it helped me name some of my problems (who does what to whom) and see
(classical) solutions to this problem (accusative, dative, prepositions,
etc).

I went on a feverish refactoring of the language, clarifying verbs and nouns,
transforming afixes into case markings, conjugating verbs, adding tenses,
accusative and dative. All of this helped me create more and more complex
phrases and I started to manage translating some of my favorite poets such as
(Sapho: ${_.sapho}).

But then, things started to feel bad. The language started to sound very dull
(most phrases were ending with /am/ due to how the accusative worked). So I
tried to evolve my most important case to have some variation, I studied
irregularities and tried to evolve the language naturally.

It did not really work: the language started to feel "constructed" and "in a
box". It wasn't sexy and fun and childish anymore but felt "clever" and I really
disliked this feeling. And the weird urge to "fix" things to make it better
instead of enjoying the creation process.

At this point I realised that everything I had learned about languages had
greatly opened my understanding but at the same time was limiting me and this
is when I went back and removed some of the "linguistic" idioms in my work on
the language.

Instead, I focused on how to make it easy to understand the role a word plays
in a phrase. That is, instead of "conjugating verbs", I looked at how to
"make words take the role of actions" and then finding a way to clarify the
"agent" doing something and the "tasted" thing (direct object) instead of
thinking in terms of "ergative" and "accusative" case markings. Same goes
with "adjectives" and "adverbs": they are just affixes that modify whatever
they are related to.

Removing technical jargon for cases and pronouns and just saying "they"
instead of "3SG" and changing "ACC" to something else that marks "flavor"
also makes more sense for this project.

${_.ophrase('Your eyes shine.', _.fa.ti, _.a.awi)}
${_.ophrase('I love your eyes.', _.o.zu, _.fa.ti.m)}

# Glossing

Here are some of the terms and weird abbreviations I use for glossing (the
morpheme by morpheme translation of words):

### Indefinite subject

Written as **1SG.INDF** this means "one", "people", "someone". It does not really
mean "I" but often does. The blurry aspect of this "I/we" is important in
zulapa because it highlights the unknowable aspect of the other. The meaning
of this "unknown person" can mean many things. For example, if I say "weˣ
will undress you tonight", this can mean any of:

1. You do not know me, you will be undressed by the "surprising me" tonight.
2. We have consented to inviting others without warning and one of them will
 undress you tonight (submissive level ++).
3. I will enter some role to undress you and it will be another kind of "me".
4. etc

To actually say "me", we use ${_.pi}.

### Special case markings

* ${_.linkAndGlo(_.yi)}: diminutive, tiny
* ${_.linkAndGlo(_.kei)}: honorific, Dom
* ${_.linkAndGlo(_.lo)}: surrendered, submissive
* ${_.linkAndGlo(_.wi)}: non-binary
* ${_.linkAndGlo(_.m)}: accusitive
* ${_.linkAndGlo(_.paM)}: mystical modifier (from numinous to delirious)

## Gloss color

Words are glossed with a specific color depending on the role they take.
Modifiers are in italic (whether in-word or as separate words).

1. Noun: blue
1. Noun modifier (adjective): light blue
1. Verb: purple
1. Verb modifier (adverb): light purple

# With all this said, Welcome !

So here is ${_.zulapa} a language born in the realm of sexuality, evolved as a
way of coping through mental illness and dysphoria and blossomed as a way to
sing my love of this journey ${_.dwiju}...

❤️️

## Using this web page

On the top right or the page, there are two buttons. One is to toggle between
Telugu or latin representation. The other one "🍑" enables the display of
phrases related to sexuality (these phrases are hidden by default).

Your next read: ${_.phon} (phonology)
`,
})
