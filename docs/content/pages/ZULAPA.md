# Zulapa

Zulapa is a constructed language by Anna Ishq. Its name means *the heart
speaks*.

This site is the review of the language: its sounds, its morphemes, how
they join, and how words take their place in a phrase. Each page lists the
rules of one part of the language. The rules that stand at the end of the
review are what the new compiler will follow.

## How to read a rule

A rule is a name, a sentence or two, and cases. A case has one of three
shapes.

| Shape | It shows |
| --- | --- |
| a join | the word before, the part that joins it, and the word after |
| a sound | a word, and how it is said |
| a phrase | its translation, and for each word its morphemes, its sounds, its script and its gloss |

In a join, each state is a word, its class and its gloss. The part shows
what it can mean as a noun, a verb, an adjective or an adverb.

A gloss follows the [Leipzig Glossing Rules](./glossing.html). The word
after is cut into its segments, and the gloss stands under it, one part for
each segment.

A class is one of noun, verb, adj, adv and def. A word may also set the
class of what follows it: `o` is *noun, then verb*, so the `agu` that joins
it is *to listen* and not *ear*.

Every case is built with the first compiler, which is kept frozen in
`packages/legacy`. The states before and of the part are read from it. The
state after is the one the rule expects. Where that compiler builds another
word, class or gloss, the case has a heavy bar, and shows what the compiler
builds under it. In a settled rule, this means the first compiler is wrong,
and the new one must differ.

A rule with a red number is a conflict: the cards of the old site, its
phrases and its compiler do not agree. The rule shows one case for each
side, and the question that is open. A conflict that is settled becomes a
rule, and leaves no trace.

## The pages

| Page | It settles |
| --- | --- |
| [Glossing](./glossing.html) | how a gloss is written, and the labels it may use |
| [Sounds](./sounds.html) | the sounds, and how the spelling writes them |
| [Joining](./joining.html) | what stands between two morphemes of a word |
| [Roles](./roles.html) | the class of a word, and what gives it |
| [Subjects](./subjects.html) | who acts, and how a subject makes a word an action |
| [Moods](./moods.html) | the five suffixes of one vowel, and the intent they give |
| [Time](./time.html) | when an action happens: the tenses, and the words of time |
| [Phrases](./phrases.html) | the cases, and the order of the words |

The pages to come are gender, the cases, and the numbers.

## Where the rules live

The rules are files of `packages/zulapa/design`, one per page. A page
draws the file that its `rules` fence names. To change a rule, change its
file: the page is rebuilt, and each case is checked again.
