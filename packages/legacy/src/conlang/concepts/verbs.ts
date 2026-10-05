import * as _ from '../lang'

const emPST = _.alt('em', {
  id: 'emPST',
  def: 'past',
  cla: 'def',
  glo: 'PST',
  alt: () => _.em,
})

const irFUT = _.alt('ir', {
  id: 'irFUT',
  def: 'future',
  cla: 'def',
  glo: 'FUT',
  alt: () => _.ir,
})

const lauETERN = _.alt('lau', {
  id: 'lauETERN',
  adv: 'always',
  glo: 'ETERN',
  cla: 'adv',
  alt: () => _.la,
})

const neiNEVER = _.alt('nei', {
  id: 'neiNEVER',
  adv: 'never',
  glo: 'NEVER',
  cla: 'adv',
  alt: () => _.nei,
})

const leiNOW = _.alt('lei', {
  id: 'leiNOW',
  adv: 'now',
  glo: 'NOW',
  cla: 'adv',
  alt: () => _.lei,
})

export const verbs = _.card('verbs', {
  // open: true,
  desc: () => `
# Action

All nouns can become actions (verbs) with an "activity" marker (${_.subj}).
Some nouns have a precise meaning when they take the "action" role such as
${_.fa}, ${_.fen}, ${_.awi}, ${_.yin}, etc.

Another particularity of this language is the use of three suffix used to
mark intent or style:

* ${_.i$} (CARE, caring, gentle)
* ${_.o$} (PUSH, pushing, away from)
* ${_.u$} (PULL, pulling, towards)

### Examples:

* ${_.phrase('Caress (i) long hair.', _.mi.imp, _.ji.uki.m)}
* ${_.phrase('You breath (u) fresh air.', _.i.sheu, _.she.egi.m)}
* ${_.phrase('Yesterday, you threw (o) the ball.', _.i.rumo.emi, _.tame.m)}

#### nsfw

* ${_.phraseX('Pull my nipple (lovingly).', _.mu.au.imp, _.hamun.m)}
* ${_.phraseX('Pull my nipple (fiercely).', _.mu.qer.imp, _.hamun.m)}
* ${_.phraseX(
    'Pull my nipple (intensely and with love).',
    _.mu.do.imp,
    _.hamun.m
  )}
* ${_.phraseX('Pinch my nipple (gently with love).', _.mu.gi.imp, _.hamun.m)}
* ${_.phraseX('Whip my butt.', _.fo.imp, _.pal.m)}

## The hardest case

The most complicated action type is the continuous passive in the past or
future. Here we go:

* ${_.ophrase('You were being caressed.', _.es.i.lu.mi.em)}

Decomposed in its parts, this is:

| ${_.es} | ${_.i} | ${_.lu} | ${_.mi} | ${_.em} |
| :-:     | :-:    | :-:     | :-:     |  :-:     |
| es | i | lu | mi | lem |
| passive | you    | continuous | caress | past |

Now that you know about the hardest, let's restart and move gently from one concept to the next.

## Imperative

The simplest tense is the second-person imperative. Note that we can drop the
accusative and possessive when using the imperative to say "do something to a
part of my body".

${_.phrase('Kiss my lips.', _.la.imp, _.la)}
${_.phrase('Kiss my cheek (face).', _.la.imp, _.dutha)}

But here the imperative (and consent) is required:

${_.phrase('Kiss her lips.', _.la.imp, _.la.m, _.ni.nu)}

For other subjects, we simply use the now tens ${_.lei}.

${_.phrase("Let's sing (chantons)!", _.sho.lapa.lei)}

## Word order

Phrases do not have precise verb, subject or object positioning. We use
marking on the target expressing some kind of bond with the subject (taste,
accusative) and sometimes receiver marking (dative) to remove ambiguity. See
${_.m} for details on "taste" marking.

* ${_.phrase('Touch (our) lips.', _.noa.imp, _.la.m)}
* ${_.phrase('(our) skin, kiss.', _.noa.m, _.la.imp)}
* ${_.phrase('Kiss (our) lips (wholeheartedly).', _.la.imp, _.la.m)}
* ${_.phrase(
    'John gives the ball (he dislikes, accusative) to Jane (dative)',
    _.John,
    _.a.guwu,
    _.tame.m,
    _.ni.Jane
  )}

For more information on word order: ${_.order}

## Transforming a noun into an action

To mark nouns as "active", making them something like verbs, we prefix them with
a subject marker (the "doer" or "receiver" when used with ${_.es}).

The origin of this is that saying "I hand" transforms "hand" into the "massage" or
"take" action and it evolved to be "Ihand" in a single word. Example:

* ${_.phrase('We mouth pull', _.sho, _.li, _.u$)}
* ${_.phrase('We eat.', _.sho.liu)}

The full list of "subject" prefix: ${_.subj}

## Passive voice

The passive voice transforms the target of the action into the subject. For
this we use ${_.es} prefix before the subject.

For example:

* ${_.phrase('I massage your foot.', _.o.mi, _.sam.ti.m)} becomes ${_.phrase(
    'Your foot is massaged (litteraly: foot.you be-him.caress).',
    _.sam.ti,
    _.es.a.mi
  )}
* ${_.phrase('I will be massaged.', _.es.o.mi.ir)} ("be-me.**caress**.will-be")

#### nsfw

* ${_.phrase('My pussy will be licked.', _.yin.mo, _.es.a.qeli.ir)}

## Continuous aspect ${_.lu}

To denote an action that is happening for some time, we use ${_.lu} as prefix
on the action (comes after accord with the subject).

* ${_.phrase(
    'He was thinkink of you when he fell asleep.',
    _.a.lu.gaxim,
    _.ti.m,
    _.dem,
    _.a.fodiru.em
  )}
* ${_.phrase(
    'Thinking of you, he fell asleep.',
    _.lu.gaxim,
    _.ti.m,
    _.a.fodiru.em
  )}
* ${_.phrase('I am dreaming of you.', _.o.lu.yafa, _.ti.m)}

When ${_.lu} prefix is not accorded to any subject, it is used to transform 
a verb or noun into a locus, a situation.

* ${_.phrase('Singing, I feel joy.', _.lu.lipa, _.o.dapa)}

#### nsfw

* ${_.phrase(
    'My pussy will be licked (continuously).',
    _.yin.mo,
    _.es.a.lu.qeli.ir
  )}

## Infinite subject (infinitive)

The prefix ${_.u} marks the indefinite subject (life itself). The meaning is
something like 'life does'. When used as a noun the verb becomes close to the
notion of infinitive and requires proper accusative marking. The ${_.u}
prefix does not simply make a noun, extra markers are required for other roles such
as adjective or adverb.

* ${_.phrase('They like "the talking" (to talk).', _.a.au, _.u.lapa.m)}
* ${_.phrase(
    'I saw him "like the coming" (coming).',
    _.o.fa.em,
    _.toda.m,
    _.le.u.lu.odu
  )}
* ${_.phrase('The person to love is me.', _.o.da, _.le.u.au, _.a.e, _.pi.m)}
* ${_.phrase('I want to see.', _.o.ora, _.u.fa.m)}

## Impersonal (weather verbs)

To express things without a subject, we use the passive voice accorded to the infinite subject:

* ${_.phrase('It rains', _.es.u.gai)}
* ${_.phrase('It rains (there is a rain)', _.es.u.e, _.gai)}
* ${_.phrase('It is raining', _.es.u.lu.gai)}

This is from [1401st Just Used 5 Minutes of Your Day](https://www.reddit.com/r/conlangs/comments/kzeek7/1401st_just_used_5_minutes_of_your_day/).

${_.phrase(
  'It turned out that the child was lying.',
  _.es.u.ru.em,
  _.gama.m,
  _.mei,
  _.joda,
  _.a.lu.dolo.em
)}

## Honorific / tiny

This idea of Honorific/tiny was inspired by BDSM power exchange and role play
but it transformed quite a lot to express something closer to the person
taking care (parent) and the innocent being taken care of (child). This is
also present in the BDSM Dom/sub relationship but I wanted something that
focussed more on expressing respect for the responsabilty of the "carer"
(${_.keda}) and the vulnerability of the "cared for" (${_.yi.da}).

#### nsfw

For more BDSM and sexual contexts, the Dominant is still referred to as
"fantastic" ${_.keda} but the sub is refered to as "wet" ${_.lo.da} instead of
"tiny" ${_.yi.da}.

This translates in subjects ${_.o.kei}, ${_.i.yi}, ${_.i.lo}, etc.

* ${_.phrase('I am ready, Master.', _.o.yi.e, _.sen, _.keda)}
* ${_.phrase('I (Master) will undress (tiny you).', _.o.kei.nefe.ir, _.yi.da.m)}
* ${_.phrase('(tiny) me will undress you (Master).', _.o.yi.nefe.ir, _.keda.m)}

Just remember, what sounds like "OKey" is in fact "I-fantastic" and
everything with a /y/ such as ${_.yi.da} are meant to be said with a soft and
very kind voice.

# Tenses

The tense is marked by a suffix related to time. There are a lot of them
because these timings are important in the erotic situations where this
language originated.

The logic is as follows:

| vowel | meaning | future |
| :---: | :---------- | :------------ |
|       | ${_.refAndGlo(emPST)} | ${_.refAndGlo(irFUT)} |
| **o** | ${_.refAndGlo(_.emo)} | ${_.refAndGlo(_.iro)} |
| **i** | ${_.refAndGlo(_.emi)} | ${_.refAndGlo(_.iri)} |
| **a** | ${_.refAndGlo(_.ema)} | ${_.refAndGlo(_.ira)} |
| **u** | ${_.refAndGlo(_.emu)} | ${_.refAndGlo(_.iru)} |
| **e** | ${_.refAndGlo(_.eme)} | ${_.refAndGlo(_.ire)} |

## Eternal tenses

| always | never | (now) |
| :---------- | :------------ | :-------- |
| ${_.refAndGlo(lauETERN)} | ${_.refAndGlo(neiNEVER)} | ${_.refAndGlo(leiNOW)}

#### nsfw

The "never" tens can be used in phrases where we say,  
${_.phrase('With you, I make-love...never', _.ti.m, _.o.zuzu.nei)}  
or  
${_.phrase('With you, I make-love...tonight', _.ti.m, _.o.zuzu.iro)}  
droping the tens as a cliff hanger.

## Examples

* ${_.phrase('yesterday, I kissed a girl.', _.o.la.emi, _.nu.m)}
* ${_.phrase(
    'They might love you (completely) someday.',
    _.a.zu.ire,
    _.au.ti.m
  )}
* ${_.phrase('I will always love you.', _.o.zu.lau, _.ti.m)}
* ${_.phraseX('I will not make love with you.', _.o.ne.zuzu.ir, _.oda.ti.m)}
* ${_.phrase('I never eat apples.', _.o.liu.nei, _.guyil.m)}

#### nsfw

* ${_.phraseX('I am eating (lots of) pussy.', _.o.lu.liu, _.yin.m)}

Your next read: ${_.order} (word order)
`,
})
