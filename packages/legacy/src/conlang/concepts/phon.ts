import * as _ from '../lang'

export const phon = _.card('phon', {
  // open: true,
  writ: 'phon',
  phon: '/fɔn/',
  desc: () => `
## Phonology and script

![lepakshi](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lepakshi...jpg/330px-Lepakshi...jpg)

Using [telugu script](https://en.wikipedia.org/wiki/Telugu_script) because it
is an *abugida*, the sounds match nearly perfectly and... it looks so good
and curvy.

## Consonants

|                 | Labial     | Coronal         | Dorsal       |
| :-------------: | :--------: | :-------------: | :----------: |
| **Nasal**       | m మ       | n న             |              |
| **Plosive**     | p ప / b బ | t త / d ద  | k క / g గ  • q |
| **Fricative**   | f చ       | θ థ • s స / z ఠ • ʃ శ / ʒ జ | x |
| **Approximant** | ʋ  వ      |                 | j య         |
| **Trill**       |            | r ర             |              |
| **Lateral**     |            | l ల             |              |

All sounds correspond to [Telugu](https://en.wikipedia.org/wiki/Telugu_script) except for:

| Symbol | Telugu     | Zulapa     | Example              |
| :----: | :--------: | :-------: | :--------:            |
| **చ**  | /tʃ/       | /f/       | ${_.falam}           |
| **ఠ**  | /tʰ/       | /z/       | ${_.zuzu}            |
| **థ**  | /tʰa/      | /θ/       | ${_.thama}           |
| **జ్‌**  | /dʒ/       | /ʒ/       | ${_.joda}, ${_.baj}  |
| **ఇ‌**  | /aj/       | /j/       | ${_.my}              |

## Vowels

|                 | Front      | Central         | Back         |
| :-------------  | :--------: | :-------------: | :----------: |
| **Close**       | i  ి  ఇ   |                 | u   ు  ఉ   |
| **Mid**         | ɛ  ే  ఎ   |                 | ɔ   ో  ఓ    |
| **Open**        | a  ా  అ  |                 |              |
 

## Semivowel

|                 | As vowel   | As consonant    |
| :-------------  | :--------: | :-------------: |
| **Palatal**     | j  ై ఇ    |  య             |

## Stress

Stress on penultimate syllable before suffix.

keOda, lamigOa, agUwu, afOliri

## Phonotactics

### Consonant cluster

Two consonants are allowed to join, except for:

* t - th
* l - r
* k - q
* x - [pbkg]

| cluster | sound | example |
| :--: | :--: | :-- |
| tth  | /tθ/ | ${_.phrase('Wild up (?).', _.lat.tha)} |
| lr | /lr/ | ${_.phrase('Butt creature.', _.pal.raj)} |
| kq | /kq/ | ${_.phrase('Shell-singularity (hidden self).', _.dak.qa)} |

Random examples of consonant clusters (to train speaking):

| ll   | /ll/ | ${_.phrase('Diarrhea.', _.pal.lam)} |
| sk   | /sk/ | ${_.phrase('Total storm.', _.xos.kal)} |
| sq   | /sq/ | ${_.phrase('Open to everything.', _.xos.qa)} |
| st  | /st/ | ${_.phrase('Their trust.', _.xos.sa)} |
| tht  | /θt/ | ${_.phrase('Bean-script (?).', _.doth.tana)} |
| shk  | /ʃk/ | ${_.phrase('Welcoming Master.', _.ish.kei)} |
| shq  | /ʃq/ | ${_.phrase('Welcoming everything.', _.ish.qa)} |
| sht  | /ʃt/ | ${_.phrase('Their acceptance.', _.ish.sa)} |
| kt  | /kt/ | ${_.phrase('Your shell (secrets).', _.dak.ti)} |
| nt  | /nt/ | ${_.phrase('Their elbow.', _.wen.sa)} |
| ms  | /ms/ | ${_.phrase('Left foot.', _.sam.se)} |
| pp  | /pp/ | ${_.phrase('To jump everywhere (to be a fool).', _.qap.pa)} |
| pt  | /pt/ | ${_.phrase('Jumping penis', _.qap.adj.taj)} |

### Vowel cluster

Vowel clusters are allowed in roots and when connecting moods. Example:

${_.phrase('Kiss me gently.', _.la.i$.imp, _.la)}.

For other cases, we use \`h\` when joining a prefix, \`n\` to join /y/ and \`l\` when joining a
suffix:

${_.phrase('I love my body.', _.o.au, _.mo.oda.m)}.

${_.phrase('Face dance (to laugh).', _.dutha.yi)}.

Words sometimes drop the last vowel when adding a suffix that starts with a
vowel instead of adding \`h\` or \`l\`.

Few words end in ${_.m} because this marker is used for accusative. 

## Script

Diphthongs are avoided and should not comme too often in scripts. If they
are present, they are written as two separate letters: ${_.noa}.

## Current evolutions

* There is a tendency to use \`/zu/\` instead of \`/au/\`.
* There might be a trend to change \`/dʒ/\` into \`/ʒ/\`. 

Your next read: ${_.kedana} (geography)

## 2023 Evolution

It's been a while that I think ${_.zulapa} sounds too much like french and I
wanted to explore some changes to the phonetic inventory. Especially now that I
am reading "A practical Introduction to Phonetics" by J. C. Catford, I really
want to explore ways to make this language sound a little bit more unique (and
"dark").

So, in order to do this work properly, I will first list the consonnant inventories
of some languages that I speak or am interested in: French, German, English, Ukrainian,
Spanish, Arabic, Indonesian, Xhosa, Hebrew, ...

### French [IPA](https://en.wikipedia.org/wiki/Help:IPA/French) [phonology](https://en.wikipedia.org/wiki/French_phonology)

|                 | Labial         | Coronal         | Dorsal       | Laryngeal |
| :-------------  | :------------: | :-------------: | :----------: | :-------: |
| **Nasal**       | m              | n               | ŋ            |           |
| **Plosive**     | p / b          | t / d           | k / g        |           |
| **Fricative**   | f / v          | s / z  •  ʃ / ʒ | ʁ            | h         |
| **Approximant** |                | l               | j  ɥ  w      |           |
| **Trill**       |                |                 |              |           |
| **Lateral**     |                |                 |              |           |

### Arabic [IPA](https://en.wikipedia.org/wiki/Help:IPA/Arabic) [phonology](https://en.wikipedia.org/wiki/Arabic_phonology)

|                 | Labial         | Coronal         | Dorsal       | Laryngeal |
| :-------------  | :------------: | :-------------: | :----------: | :-------: |
| **Nasal**       | m              | n               |              |           |
| **Plosive**     | - / b          | t / d           | k / g • q / - | ʔ        |
| **Fricative**   | f / -          | θ / ð • s / z • ʃ / - |  x / ɣ | ħ / ʕ • h |
| **Approximant** |                | l               | j w          |           |
| **Trill**       |                | r               |              |           |
| **Lateral**     |                |                 |              |           |

### German [IPA](https://en.wikipedia.org/wiki/Help:IPA/German) [phonology](https://en.wikipedia.org/wiki/German_phonology)

|                 | Labial         | Coronal         | Dorsal       | Laryngeal |
| :-------------  | :------------: | :-------------: | :----------: | :-------: |
| **Nasal**       | m              | n               | ŋ            |           |
| **Plosive**     | p / b          |                 | k / g        | (ʔ)       |
| **Fricative**   | f / v          | s / z • ʃ / - • ç / j | (x)    | h         |
| **Approximant** |                | l               |              |           |
| **Trill**       |                | r               |              |           |
| **Lateral**     |                |                 |              |           |

### Ukrainian [IPA](https://en.wikipedia.org/wiki/Help:IPA/Ukrainian) [phonology](https://en.wikipedia.org/wiki/Ukrainian_phonology)

(TODO)

|                 | Labial         | Coronal         | Dorsal       | Laryngeal |
| :-------------  | :------------: | :-------------: | :----------: | :-------: |
| **Nasal**       | m              | n               | ŋ            |           |
| **Plosive**     | p / b          |                 | k / g        | (ʔ)       |
| **Fricative**   | f / v          | s / z • ʃ / - • ç / j | (x)    | h         |
| **Approximant** |                | l               |              |           |
| **Trill**       |                | r               |              |           |
| **Lateral**     |                |                 |              |           |

### English [IPA](https://en.wikipedia.org/wiki/Help:IPA/English) [phonology](https://en.wikipedia.org/wiki/English_phonology)

(TODO)

|                 | Labial         | Coronal         | Dorsal       | Laryngeal |
| :-------------  | :------------: | :-------------: | :----------: | :-------: |
| **Nasal**       | m              | n               | ŋ            |           |
| **Plosive**     | p / b          |                 | k / g        | (ʔ)       |
| **Fricative**   | f / v          | s / z • ʃ / - • ç / j | (x)    | h         |
| **Approximant** |                | l               |              |           |
| **Trill**       |                | r               |              |           |
| **Lateral**     |                |                 |              |           |
`,
})
