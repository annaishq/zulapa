import * as _ from '../lang'

export const gu = _.word('gu', {
  noun: 'darkness, empathy, life',
  verb: 'to live',
  adj: 'darkness',
  adv: 'lively, terrified',
  etym: () => [_.ga, _.u$],
  see: () => [_.em, _.nux, _.ganes, _.gufi],
  desc: () => `
To live, to feel. Empathy to the limits of terror, darkness.

This might be the most complicated concept of the whole language... Confusion in
understanding this is good. The greater the confusion, the greater the question
and the closer we are to a "feeling" of ${_.gu}.

${_.gu} can be seen as the unrealized ${_.ga}. Understanding ${_.gu} would mean
something like being dead, all questions answered and it would be very sad.

But ${_.gu} is not just the "unconscious" or some similar notion, it also means
"experience" or "transformation" or even "life".

In some way, it is the desire for experience, the quest for knowledge more than a
state of "not knowing".

And to complicate things further, the bigger ${_.ga} becomes, the bigger
${_.gu} becomes because they are the same and not the same thing.

We could also say that ${_.gu} is "the possibility of karma" and ${_.ga} is made
of "karma".

So why does ${_.gunux} mean "terror" ? Because there is a huge potential for
chaos and instability due to the unrooted nature of ${_.nux} and the power of
${_.gu}.
`,
})

export const gunux = _.word('gunux', {
  noun: 'tremendum, illusion\n(Thirodana)',
  see: () => [_.gana],
  etym: () => [_.gu, _.nux],
  desc: () => `
Litteraly, the "immaterial unconscious"`,
})

export const gulir = _.word('gulir', {
  verb: 'to wish',
  etym: () => [_.gu, _.ir],
})

export const lemegu = _.word('lemegu', {
  verb: 'to remember',
  etym: () => [_.eme, _.gu],
  see: () => [_.dafodil],
})

export const guna = _.word('guna', {
  noun: 'dissociation, robot',
  etym: () => [_.gu, _.na],
  see: () => [_.ganux],
})

export const gui = _.word('gui', {
  noun: 'life',
  verb: 'to give birth',
  see: () => [_.yuxim, _.nem],
  etym: () => [_.gu, _.i$],
})

export const rugui = _.word('rugui', {
  verb: 'to bustle about',
  etym: () => [_.ru, _.gui],
})

export const guwu = _.word('guwu', {
  verb: 'to give',
  etym: () => [_.gu, _.wu],
})

export const guwuna = _.word('guwuna', {
  noun: 'gift',
  see: () => [_.pola],
  etym: () => [_.guwu, _.na],
})

export const guru = _.word('guru', {
  noun: 'trema (stage fright)',
  etym: () => [_.gu, _.ru],
  see: () => [_.conrad, _.nuru],
  desc: () => `
Trema is the feeling of something bad coming, the feeling of the world
conspiring against oneself (concept from psychologist Klaus Conrad).

In zulapa, this litteraly means "the emergence of the darkness".
`,
})

export const gugai = _.word('gugai', {
  noun: 'fertility',
  adj: 'fertile',
  etym: () => [_.gu, _.gai],
})

export const zugu = _.word('zugu', {
  noun: 'trust',
  verb: 'to trust',
  etym: () => [_.zu.verb, _.gu],
})

export const negu = _.word('negu', {
  noun: 'agitation/dissociation',
  desc: () => `Searching for perfection to feel less. Opposite of ${_.zugu}`,
  see: () => [_.shipa],
  etym: () => [_.ne, _.gu],
})

export const guyil = _.word('guyil', {
  noun: 'apple',
  etym: () => [_.gu, _.yil],
  see: () => [_.fruits],
})

export const gupa = _.word('gupa', {
  noun: 'nature, bliss',
  etym: () => [_.gu, _.pa],
})

export const gipa = _.word('gipa', {
  noun: 'kindness',
  etym: () => [_.gi, _.pa],
})

export const qegu = _.word('qegu', {
  noun: 'wound/healing',
  etym: () => [_.qe, _.gu],
  desc: () => `
Hidden inside the darkness, behind the terror of change and the ripping of
the self lies a calling, ${_.jipa}.

\\- Was the wound necessary asked the suffering seeker ? 
\\- No it wasn't but it occured.
\\- But why ?
\\- ${_.gu}.
`,
})

export const gurum = _.word('gurum', {
  noun: 'empathy, courage',
  desc: () =>
    `To embrasse feelings. This is the real definition of courage: to feel enough that we are not blocked by fear ${_.peu}.`,
  see: () => [_.agupeu],
  etym: () => [_.gu, _.rum],
})

export const zuzau = _.word('zuzau', {
  noun: 'divin love (Ishq)',
  img_pos: '100%',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tomb_of_Abdul_Qadir_Jilani%2C_Baghdad.jpg/640px-Tomb_of_Abdul_Qadir_Jilani%2C_Baghdad.jpg',
  desc: () =>
    `A deep and cosuming longing for [divine love](https://en.wikipedia.org/wiki/Ishq).`,
  etym: () => [_.zu.verb, _.zau.adv],
})
