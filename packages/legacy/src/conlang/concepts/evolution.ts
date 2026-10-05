import * as _ from '../lang'

export const evolution = _.card('evolution', {
  desc: () => `
# Evolution

This is some historical notes on the language as it has evolved and how
expressing the same thing has changed over time.

The current state of affaires is here: ${_.grammar}

#### note

This whole card is nsfw because this is what guides this language.

## An example

### Caress your breasts delicately

In this example, we see how the first version used a kind of dative and no
verb marking. This then evolved to use a very regular accusative, and finaly
we added the dative back but with more power and made the accusative nicer.

* ${_.phrase(
    'To you, (you) caress breasts lightly.',
    _.iHIST,
    _.mi,
    _.mun,
    _.si.enu
  )}
* ${_.phrase('Caress your breasts lightly.', _.mi, _.munatinamHIST, _.si.enu)}
* ${_.phrase('Caress your lovely breasts lightly.', _.mi, _.mun.ti.m, _.si.enu)}
* ${_.phrase(
    'For us, tonight, you will be caressing your lovely breasts lightly.',
    _.ni.mo,
    _.i.lu.mi.iro,
    _.mun.ti.m,
    _.si.enu
  )}

## Chronology

TODO: go through commit log

### Subject consitency *(Jan 2021)*

* All **plurals** (more than two) have an extra prefix of \`/ʃ/\` (**sh**),
  except for ${_.qa} (every).
* Subjects of which the **speaker** belongs to start with \`/ɔ/\` (**o**)
* Subjects of which the **listener** belongs to start with \`/i/\` (**i**)
* Subjects **not present** start with \`/a/\` (**a**)

### Removed copula *(Jan 2021)*

After adding passive and continuous tenses, it made sense to express properties without
saying "is" but instead using the "active" nature of nouns and this tense:

* ${_.phrase('She is beautiful.', _.sa.nu, _.es.a.lu.awi)}

### Full blown "dot" writing code *(Jan 2021)*

Added code in TypeScript (using JS Proxy) to automatically agglutinate
morphemes in order to ensure consistency and stable rules for word
aglutination and glossing. These 'code' based rules had an interesting
effect as they forced me to clarify the functional meaning of some of the hacks
I was writting and this led to the notion that most prefix (${_.ne} is an
exception) change the function of the word whereas most suffix (accusative ones
are the exceptions here) are semantic modifiers.

In short, most "prefixes" alter function and most "suffix" alter meaning.

~~~ts
// This is how the next phrase is written
_.phrase('We are being loved.', _.es.o.lu.zu)
~~~

${_.phrase('We are being loved.', _.es.o.lu.zu)}

### Adding modifier markers *(Feb 2021)*

After creating the most used prefixes and suffixes, I realized that I did not want
any word to agglutinate to act as a modifier because it would make words incredibly
hard to understand (and long). So I needed a way to mark a word as acting like an
adjective or adverb (and thus showing this definition in the gloss instead of the
noun).

Listening to William Croft on the Conlangery podcast, I really liked the way
Mandarin Chinese uses a prefix to change a noun into a property modifier:
something in the way of saying "very fish" to mean "beautiful". I opted for this
strategy, using (${_.le}) for adjectives which means "very" and using
(${_.si}) for adverbs which means "as, like".

* ${_.phrase(
    'The beautiful cat walks gently.',
    _.gilil,
    _.le.awi,
    _.a.sam,
    _.si.gai
  )}

### Adding infinitive *(Feb 2021)*

As the title implies, this allows saying all kinds of complicated things regarding what
we enjoy doing, who we have seen doing what and so on.

#### nsfw

* ${_.phrase('I like licking pussy.', _.o.ora, _.u.lu.li, _.yin.m)}

### Engine rewrite and testing *(Feb 2021)*

This rewrite and cleanup had the side effect of pushing all non-written phonotactics into
code, making things much more consistent on how morphemes assemble. Now prefix all "fix"
join with \`/h/\` and suffix use \`/l/\` unless there is an exception. This made numbers
funny:

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

Having tests to ensure things do not break is a very good step forward.

### Infinite subject *(August 2021)*

Transformed the ${_.u} conjugation from an infinitive into the notion of "life
itself" doing something: the infinite subject. This is a first step in
the direction of removing some of the body/mind dichotomy, trying to blur the
notion of "subject" so as to remove some of the separation with the direct
object.

David Bohm's idea on the rheomode (putting word priority on the verb) made me
try different ideas and I think the best solution is to simply use the existing
passive voice with the infinite subject: 

${_.phrase('It rains', _.es.u.gai)}

I would like to change some meanings related to "spirit". I want this languge to
be about the body, so "mind" has to be something that is a lived experience, not
some "spirit" or "soul". This means that ${_.ga} needs to change from "spirit"
to something else ? I have to do some introspection to see if I find concepts
that better describe "inner experience", something that would only exist in
relation with the body, a painting, matter. I want spirit to be a property of
matter, of ${_.gu}, not some "other thing".

### Loved *(January 2022)*

Haha ! This is why the ${_.a$} suffix was free. It was reserved, a late coming
beauty to the party. It means "loved" in the sense of being taken inside, to the
heart, to the self.

So now ${_.ga} (spirit) comes from ${_.gu.a$} (life loved, life taken to the
self). Isn't this beautiful ?

And ${_.gu} still derives from ${_.ga} as ${_.ga.u$} (pulled spirit) because
every language is a digraph and loops are fun.

No more matter/mind dichotomy since they now both define each other in a
beautiful dance.

### Zulapa *(March 2022)*

Renamed the language to Zulapa because I wanted a ".com" domain for it and I
also think that it has evolved to being something more about kindness than just
"the body". So now this language is "the heart speaks" or "heart speak".

I love it !

### Unu *(April 2022)*

Replaced "ana" to "unu" and "oto" to "ofo" because these roots sounded too much
like names. This made me change "fo" (to whip) to "fik" because father (hafo)
would be the same word as to fall.

I also felt that it was time to allow some double consonants to add a little
bit of spice to the language because singing felt boring without any stops. So
now words can end in "k" or "sh" and the consonant pairs "kt", "nt", "st",
"sht" and "shk" are allowed.

With these new sounds, I felt that we no longer need taste markings and we can
simply use "m" in all cases. It was confusing.

### Semivowel *(April 2022 - Amsterdam)*

I love slavic languages and wanted to have the /j/ sound as a vowel for a long
time. And then I met [Marina](https://instagram.com/imaginary_marina) who is an
illustrator and she spoke in Ukrainian and Russian and this reminded me that it
is time to add the /j/ sound as a vowel. I feel it adds some feminity to the
language.

Now with all this new sounds, the question arrises: is this going to be too
much, will the language loose it's distinctiveness ? Time will tell.

### Dark theme *(February 2023)*

Added a dark theme because I love fluorescent colors.

Reverted the change of "ofo" to "oto" (because I was too used to this version
and "ofo" never felt right and I wanted "fo" back because "fik" sounds like the
german word for fuck).

### Continuous without accord *(June 2023)*

To say things such as "he says nice words making me feel loved", we can now avoid
conjugating "making" to remove the feeling of intentionality:

* ${_.phrase(
    'He is making me feel loved (intentionality).',
    _.to,
    _.a.lu.xim,
    _.o.zu.n
  )}

* ${_.phrase(
    'He sings, making me feel loved (less intentionality).',
    _.to,
    _.a.lipa,
    _.lu.xim,
    _.o.zu.n
  )}

### No \`h\` with infinitive *(June 2023)*

The infinitive "conjugation" deserves a special meaning because it is not really
an action but more the possibility of all such actions and therefore I decided
to not use the joining sound \`h\` when joining with a verb that starts with a
vowel. This gives ${_.u} a slightly different sounding energy:

* ${_.phrase('Infinite loves (there is the possibility of love).', _.u.au)}

But the infinite conjugation can also mean "all of XXX and forever", as in

* ${_.phrase(
    'Life obliterates me without you by my heart.',
    _.gu,
    _.u.liu,
    _.pi.m,
    _.sau.ti,
    _.jo,
    _.zu.wu,
    _.mo
  )}

### Giver 'of', Taker 'of' *(July 2023)*

In order to express a subject defined by an action such as 'giver of life', we can
either use the phrase 'person who XXX'. Note, the ${_.thu} marking the genitive:

* ${_.phrase(
    'Giver of life (person who gives life).',
    _.oda,
    _.difu,
    _.guwu,
    _.thu.gui
  )}

Or use the shorter 'fu' prefix on the verb:

* ${_.phrase('Giver of life.', _.fu.guwu, _.thu.gui)}

### Continuous rembembering and desiring *(September 2023)*

Ouuuhhh, I am really proud of these two: ${_.lue} and ${
    _.lui
  } which are extensions of
the continuous modifier ${
    _.lu
  } and mean to 'continuously remember' and 'continuously
desire', respectively. But the really nice part about them is that they are
a mode for verbs which means that to desire or remember are ways of doing:

* ${_.phrase('I am kiss-remembering (your) lips.', _.o.lue.la, _.la.m)}
* ${_.phrase('I am caress-desiring (your) belly.', _.o.lui.mi, _.bo.m)}

Checking the consistency of some complex case with passive. So here are two
ways to say "I love remembering being held by you":

* A. ${_.phrase(
    'I love (being-held (by you)-memory-sensation).',
    _.o.au,
    _.es.o.lue.rumi.n,
    _.fu.ti
  )}

* B. ${_.phrase(
    'I love (the fact of remembering that I was being held by you).',
    _.o.au,
    _.o.ji.n,
    _.es.o.lu.rumi.n,
    _.fu.ti
  )}

Version (A), is more body-memory centric and blurs the distinction between the
past event and the recollection. in this version, the two time-frames collide
into "now".

Finally, we can remove the passive by saying "I love the memory of surrendering
to your embrace":

* C. ${_.phrase(
    'I love the memory of surrendering to your hug.',
    _.o.au,
    _.o.lue.miu.n,
    _.tu,
    _.i.rumi.n
  )}

### Phonetic changes *(November 2023)*

Up to this point, the language felt a little dull, without "edginess". As I was
reading the amazing "Practical Introduction to Phonetics" by J. C. Catford, I
really wanted to expand the sounds of the language, but without making it
impossible to sing or learn.

After some explorations with languages whose sounds I find inspiring (Ukrainian,
Arabic), I decided to add \`/q/\` (a more guttural "k") and \`/θ/\` (as in
"thing"). I also decided to allow most of the double consonants (especially in
morpheme joining).

I am also entering a second phase in root generation where more will end with a
consonant. The new roots however will not contain consonant clusters unless they
are derived. At least for this phase.

Double consonants are pronounced longer: 

${_.phrase('Be a fool !', _.$cap.qap.pa, _.$excl)}.

I also decided to replace the possessive \`to\` with ${
    _.mo
  } because it sounds better. To slap evolvves from \`mo\` to ${_.mado}

### Huge gender rewrite *(November 2023)*

Ok, this one changed a *lot* of words and meanings but I think it finally makes
sense in a beautiful way. The idea is to create a new optional suffix to "color"
possesives, nouns (and conjugations) with gender. This allows us to
differentiate between "hand" and "boy-hand" or "enby-hand" or "girl-hand" and
same with any verb, we can specify if the doer is masculine, feminine,
non-binary or unspecified:

* ${_.phrase('I love you.', _.o.zu, _.ti.m)}
* ${_.phrase('I-boy love you-girl.', _.o.to.zu, _.ti.nu.m)}
* ${_.phrase('I-girl love you-enby.', _.o.nu.zu, _.ti.wi.m)}
* ${_.phrase('I love you-boy.', _.o.zu, _.ti.to.m)}

We can also specify this on nouns:

* ${_.phrase('Caress my boy-hand!', _.mi, _.mo.to.ma.m)}
* ${_.phraseX('Girl-caress your boy-dick!', _.imp.nu.mi, _.ti.to.taj.m)}
* ${_.phraseX('Boy-caress your girl-dick!', _.imp.to.mi, _.ti.nu.taj.m)}

Examples with possessive and pronouns:

* ${_.phrase('I love her.', _.o.zu, _.nu.m)}
* ${_.phrase('She loves him.', _.nu, _.a.zu, _.to.m)}
* ${_.phrase('He girl-looks at him.', _.to, _.a.nu.fani, _.to.m)}
* ${_.phrase('I-boy caress girl-him.', _.o.to, _.o.mi, _.nu.to.m)}

`,
})
