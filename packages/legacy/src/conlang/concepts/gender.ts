import * as _ from '../lang'

export const gender = _.card('gender', {
  desc: () => `
# Gender

There has been many iterations on the question of gender in ${
    _.zulapa
  }. At the very
beginning, there was no gender but hey, "Go kiss him!" does not sound the same as
"Go kiss her!". So I started experimenting.

The first step was to understand what needed (or not) to have a gender. Is it
mandatory? How many genders should there be? Two? Three? Should there be a
"special can be anything" gender? In order to allow some creativity but not
overwhelm the language with too many complicated options, there are now three
genders in the language:

* ${_.refAndGlo(_.nu)}
* ${_.refAndGlo(_.to)}
* ${_.refAndGlo(_.wi)}

But specification is optional so there is the "gender-not-specified" option by simply
not using any prefix.

The second step was to understand what could be gendered. People when addressed
in the third person (he,she)? Second person (you)? First person (me)? Animals
(lion, lioness)? Plants? Objects? Body parts (boy-hand, girl-hand)? And what
about adjectives or actions (girl-kissing, boy-hugging)?

Understanding this and finding
a way to use gender without creating a big mess was not an easy task. I explored finding
shorthand versions for very common gendered pronouns (him, her, etc) but somehow, it felt
like I was pushing people into a gender-mandatory language instead of something more
free and creative.

So now, gender can be specified (or not) on:

### Subjects and nouns *(as prefix)*

* ${_.phrase('I-girl love you.', _.nu.o, _.o.zu, _.i.m)}
* ${_.phrase('You-boy love me-boy.', _.to.i, _.i.zu, _.to.o.m)}
* ${_.phrase('They-enby love her.', _.wi.a, _.a.zu, _.nu.a.m)}
* ${_.phrase('She loves you-girl.', _.nu.a, _.a.zu, _.nu.i.m)}
* ${_.phrase('(You*) love me-enby.', _.i.zu, _.wi.o.m)}
* ${_.phrase('(I*) love this masculine-chair.', _.o.zu, _.sij, _.to.kanam.m)}

\`*\` zulapa is a
[null-subject](https://en.wikipedia.org/wiki/Null-subject_language) language:
subject can be omitted.

### Conjugation *(as doer-prefix)*

* ${_.phrase('Girl-I_love you.', _.nu.o, _.nu.o.zu, _.i.m)}
* ${_.phrase('Boy-you_love me.', _.to.i.zu, _.o.m)}

### Conjugation *(as verb-color)*

* ${_.phrase('I girl-love you.', _.o, _.o.nu.zu, _.i.m)}
* ${_.phrase('They_enby-caress you.', _.a.wi.mi, _.i.m)}

Note the difference betweeen *conjugation-prefix* which says something about the
doer in the conjugation and *verb-color* which says something about the action
itself, how it is done:

* ${_.phrase('Doer-prefix: they-girl kiss you.', _.nu.a.la, _.i.m)}
* ${_.phrase('Verb color: they girl-kiss you.', _.a.nu.la, _.i.m)}

### Possessive *(possessor-prefix)*

* ${_.phrase('me-girl my legs.', _.nu.mo.baj)}
* ${_.phraseX('me-boy my vulva.', _.to.mo.yin)}

### Possessive *(possessed-prefix)*

* ${_.phrase('your boy-hair.', _.ti.to.ji)}
* ${_.phrase('their enby-eyes.', _.sa.wi.fa)}
* ${_.phraseX('my girl-dick.', _.mo.nu.taj)}

Again compare:

* ${_.phrase('Possessor-prefix: me-girl my-hand.', _.nu.mo.ma)}
* ${_.phrase('Possessed-prefix: my girl-hand.', _.mo.nu.ma)}

### Combinations *(can become creative and funny)*

* ${_.phrase('I boy-love her.', _.o.to.zu, _.nu.m)}
* ${_.phrase('I-boy girl-kiss boy-his-girl-lips.', _.to.o.nu.la, _.to.sa.nu.la)}
* ${_.phrase(
    'girl-you_girl-belly-caress me-girl-my-girl-belly',
    _.nu.i.nu.bo,
    _.nu.mo.nu.bo
  )}

`,
})
