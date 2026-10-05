import * as _ from '../lang'

export const hero = _.card('hero', {
  def: 'Words for a Campbelian quest',
  desc: () => `
These "stages" are described [on wikipedia](https://en.wikipedia.org/wiki/Hero%27s_journey) with quite some
lyrism. I encourage you to check the full article.

> There is no single idea promulgated by amateurs that has done more harm to
> serious folklore study than the notion of archetype.
> 
> [Alan Dundes](https://en.wikipedia.org/wiki/Hero%27s_journey#CITEREFDundes2016)

As with everything in life, overarching explanations hurt. Use these ideas to put life in your dreams, not stockpile
them in a jar.

Work in progress...
`,
})
/*
# Departure

## 1. The Call to Adventure

${_.phrase('The hero begins in a situation of normality.', _.ten, _.samoda)}

${_.phrase(
  'A dream is received that acts as a call to head off into the unknown.'
)}

## 2. Refusal of the Call

${_.phrase(
  'Often when the call is given, the future hero first refuses to heed it.'
)}

## 3. Supernatural Aid

${_.phrase(
  'Once the hero has committed to the quest, his magical helper becomes known.'
)}

${_.phrase(
  'What such a figure represents is the benign, protecting power of destiny.'
)}

${_.phrase(
  'Protective power is always and ever present within or just behind the unfamiliar features of the world.'
)}

## 4. The Crossing of the First Threshold

This is the point where the hero actually crosses into the field of adventure, leaving the known limits of his world and venturing into an unknown and dangerous realm where the rules and limits are unknown. Campbell tells us,

With the personifications of his destiny to guide and aid him, the hero goes forward in his adventure until he comes to the "threshold guardian" at the entrance to the zone of magnified power. Such custodians bound the world in four directions—also up and down—standing for the limits of the hero's present sphere, or life horizon. Beyond them is darkness, the unknown and danger; just as beyond the parental watch is danger to the infant and beyond the protection of his society danger to the members of the tribe. The usual person is more than content, he is even proud, to remain within the indicated bounds, and popular belief gives him every reason to fear so much as the first step into the unexplored.

...

The adventure is always and everywhere a passage beyond the veil of the known into the unknown; the powers that watch at the boundary are dangerous; to deal with them is risky; yet for anyone with competence and courage the danger fades.[20]

## 5. Belly of the Whale

The belly of the whale represents the final separation from the hero's known world and self. By entering this stage, the person shows willingness to undergo a metamorphosis. When first entering the stage the hero may encounter a minor danger or setback. According to Campbell,

The idea that the passage of the magical threshold is a transit into a sphere of rebirth is symbolized in the worldwide womb image of the belly of the whale. The hero, instead of conquering or conciliating the power of the threshold, is swallowed into the unknown and would appear to have died.

...

This popular motif gives emphasis to the lesson that the passage of the threshold is a form of self-annihilation. ... [I]nstead of passing outward, beyond the confines of the visible world, the hero goes inward, to be born again. The disappearance corresponds to the passing of a worshipper into the temple—where he is to be quickened by the recollection of who and what he is, namely dust and ashes unless immortal. The temple interior, the belly of the whale, and the heavenly land beyond, above, and below the confines of the world, are one and the same. That is why the approaches of and entrances to temples are flanked and defended by colossal gargoyles [equivalent to] the two rows of teeth of the whale. They illustrate the fact that the devotee at the moment of entry into a temple undergoes a metamorphosis. ... Once inside he may be said to have died to time and returned to the World Womb, the World Navel, the Earthly Paradise. ... Allegorically, then, the passage into a temple and the hero-dive through the jaws of the whale are identical adventures, both denoting in picture language, the life-centering, life-renewing act.[21]

In the exemplary Book of Jonah, the eponymous Israelite refuses God's command to prophesy the destruction of Nineveh and attempts to flee by sailing to Tarshish. A storm arises, and the sailors cast lots to determine that Jonah is to blame. He allows himself to be thrown overboard to calm the storm, and is saved from drowning by being swallowed by a "great fish". Over three days, Jonah commits to God's will, and he is vomited safely onto the shore. He subsequently goes to Nineveh and preaches to its inhabitants.[22] Jonah's passage through the belly of the whale can be viewed as a symbolic death and rebirth in Jungian analysis.[23]

# Initiation

## 6. The Road of Trials

The road of trials is a series of tests that the hero must undergo to begin the transformation. Often the hero fails one or more of these tests, which often occur in threes. Eventually the hero will overcome these trials and move on to the next step. Campbell explains that

Once having traversed the threshold, the hero moves in a dream landscape of curiously fluid, ambiguous forms, where he must survive a succession of trials. This is a favorite phase of the myth-adventure. It has produced a world literature of miraculous tests and ordeals. The hero is covertly aided by the advice, amulets, and secret agents of the supernatural helper whom he met before his entrance into this region. Or it may be that he here discovers for the first time that there is a benign power everywhere supporting him in his superhuman passage.

...

The original departure into the land of trials represented only the beginning of the long and really perilous path of initiatory conquests and moments of illumination. Dragons have now to be slain and surprising barriers passed—again, again, and again. Meanwhile there will be a multitude of preliminary victories, unsustainable ecstasies and momentary glimpses of the wonderful land.[24]

## 7. The Meeting with the Goddess

This is where the hero gains items given to him that will help him in the future. Campbell proposes that

The ultimate adventure, when all the barriers and ogres have been overcome, is commonly represented as a mystical marriage of the triumphant hero-soul with the Queen Goddess of the World. This is the crisis at the nadir, the zenith, or at the uttermost edge of the earth, at the central point of the cosmos, in the tabernacle of the temple, or within the darkness of the deepest chamber of the heart.

...

The meeting with the goddess (who is incarnate in every woman) is the final test of the talent of the hero to win the boon of love (charity: amor fati), which is life itself enjoyed as the encasement of eternity.

And when the adventurer, in this context, is not a youth but a maid, she is the one who, by her qualities, her beauty, or her yearning, is fit to become the consort of an immortal. Then the heavenly husband descends to her and conducts her to his bed—whether she will or not. And if she has shunned him, the scales fall from her eyes; if she has sought him, her desire finds its peace.[25]

## 8. Woman as the Temptress

In this step, the hero faces those temptations, often of a physical or pleasurable nature, that may lead him to abandon or stray from his quest, which does not necessarily have to be represented by a woman. Woman is a metaphor for the physical or material temptations of life, since the hero-knight was often tempted by lust from his spiritual journey. Campbell relates that

The crux of the curious difficulty lies in the fact that our conscious views of what life ought to be seldom correspond to what life really is. Generally we refuse to admit within ourselves, or within our friends, the fullness of that pushing, self-protective, malodorous, carnivorous, lecherous fever which is the very nature of the organic cell. Rather, we tend to perfume, whitewash, and reinterpret; meanwhile imagining that all the flies in the ointment, all the hairs in the soup, are the faults of some unpleasant someone else. But when it suddenly dawns on us, or is forced to our attention that everything we think or do is necessarily tainted with the odor of the flesh, then, not uncommonly, there is experienced a moment of revulsion: life, the acts of life, the organs of life, woman in particular as the great symbol of life, become intolerable to the pure, the pure, pure soul. ... The seeker of the life beyond life must press beyond [the woman], surpass the temptations of her call, and soar to the immaculate ether beyond.[26]

## 9. Atonement with the Father/Abyss

In this step the hero must confront and be initiated by whatever holds the ultimate power in his life. In many myths and stories this is the father, or a father figure who has life and death power. This is the center point of the journey. All the previous steps have been moving into this place, all that follow will move out from it. Although this step is most frequently symbolized by an encounter with a male entity, it does not have to be a male; just someone or thing with incredible power. Per Campbell,

Atonement consists in no more than the abandonment of that self-generated double monster—the dragon thought to be God (superego) and the dragon thought to be Sin (repressed id). But this requires an abandonment of the attachment to ego itself, and that is what is difficult. One must have a faith that the father is merciful, and then a reliance on that mercy. Therewith, the center of belief is transferred outside of the bedeviling god's tight scaly ring, and the dreadful ogres dissolve. It is in this ordeal that the hero may derive hope and assurance from the helpful female figure, by whose magic (pollen charms or power of intercession) he is protected through all the frightening experiences of the father's ego-shattering initiation. For if it is impossible to trust the terrifying father-face, then one's faith must be centered elsewhere (Spider Woman, Blessed Mother); and with that reliance for support, one endures the crisis—only to find, in the end, that the father and mother reflect each other, and are in essence the same.[27]

Campbell later expounds:

The problem of the hero going to meet the father is to open his soul beyond terror to such a degree that he will be ripe to understand how the sickening and insane tragedies of this vast and ruthless cosmos are completely validated in the majesty of Being. The hero transcends life with its peculiar blind spot and for a moment rises to a glimpse of the source. He beholds the face of the father, understands—and the two are atoned.[28]

## 10. Apotheosis

Further information: Apotheosis
This is the point of realization in which a greater understanding is achieved. Armed with this new knowledge and perception, the hero is resolved and ready for the more difficult part of the adventure. Campbell discloses that

Those who know, not only that the Everlasting lies in them, but that what they, and all things, really are is the Everlasting, dwell in the groves of the wish-fulfilling trees, drink the brew of immortality, and listen everywhere to the unheard music of eternal concord.[29]

## 11. The Ultimate Boon
The ultimate boon is the achievement of the goal of the quest. It is what the hero went on the journey to get. All the previous steps serve to prepare and purify the hero for this step, since in many myths the boon is something transcendent like the elixir of life itself, or a plant that supplies immortality, or the holy grail. Campbell confers that

The gods and goddesses then are to be understood as embodiments and custodians of the elixir of Imperishable Being but not themselves the Ultimate in its primary state. What the hero seeks through his intercourse with them is therefore not finally themselves, but their grace, i.e., the power of their sustaining substance. This miraculous energy-substance and this alone is the Imperishable; the names and forms of the deities who everywhere embody, dispense, and represent it come and go. This is the miraculous energy of the thunderbolts of Zeus, Yahweh, and the Supreme Buddha, the fertility of the rain of Viracocha, the virtue announced by the bell rung in the Mass at the consecration, and the light of the ultimate illumination of the saint and sage. Its guardians dare release it only to the duly proven.[30]

# Return

## 12. Refusal of the Return

Having found bliss and enlightenment in the other world, the hero may not want to return to the ordinary world to bestow the boon onto his fellow man. Campbell continues:

When the hero-quest has been accomplished, through penetration to the source, or through the grace of some male or female, human or animal personification, the adventurer still must return with his life-transmuting trophy. The full round, the norm of the monomyth, requires that the hero shall now begin the labor of bringing the runes of wisdom, the Golden Fleece, or his sleeping princess, back into the kingdom of humanity, where the boon may redound to the renewing of the community, the nation, the planet, or the ten thousand worlds. But the responsibility has been frequently refused. Even Gautama Buddha, after his triumph, doubted whether the message of realization could be communicated, and saints are reported to have died while in the supernal ecstasy. Numerous indeed are the heroes fabled to have taken up residence forever in the blessed isle of the unaging Goddess of Immortal Being.[31]

## 13. The Magic Flight

Sometimes the hero must escape with the boon, if it is something that the gods have been jealously guarding. It can be just as adventurous and dangerous returning from the journey as it was to go on it. Campbell reveals that

If the hero in his triumph wins the blessing of the goddess or the god and is then explicitly commissioned to return to the world with some elixir for the restoration of society, the final stage of his adventure is supported by all the powers of his supernatural patron. On the other hand, if the trophy has been attained against the opposition of its guardian, or if the hero's wish to return to the world has been resented by the gods or demons, then the last stage of the mythological round becomes a lively, often comical, pursuit. This flight may be complicated by marvels of magical obstruction and evasion.[32]

## 14. Rescue from Without

Just as the hero may need guides and assistants to set out on the quest, often he must have powerful guides and rescuers to bring them back to everyday life, especially if the person has been wounded or weakened by the experience. Campbell elucidates,

The hero may have to be brought back from his supernatural adventure by assistance from without. That is to say, the world may have to come and get him. For the bliss of the deep abode is not lightly abandoned in favor of the self-scattering of the wakened state. "Who having cast off the world," we read [in the Upanishads], "would desire to return again? He would be only there." And yet, in so far as one is alive, life will call. Society is jealous of those who remain away from it, and will come knocking at the door. If the hero—like Muchukunda—is unwilling, the disturber suffers an ugly shock; but on the other hand, if the summoned one is only delayed—sealed in by the beatitude of the state of perfect being (which resembles death)—an apparent rescue is effected, and the adventurer returns.[33]

## 15. The Crossing of the Return Threshold

Campbell says in The Hero with a Thousand Faces that "The returning hero, to complete his adventure, must survive the impact of the world."[34] The trick in returning is to retain the wisdom gained on the quest, to integrate that wisdom into a human life, and then maybe figure out how to share the wisdom with the rest of the world. Earlier in the book, Campbell says,

Many failures attest to the difficulties of this life-affirmative threshold. The first problem of the returning hero is to accept as real, after an experience of the soul-satisfying vision of fulfillment, the passing joys and sorrows, banalities and noisy obscenities of life. Why re-enter such a world? Why attempt to make plausible, or even interesting, to men and women consumed with passion, the experience of transcendental bliss? As dreams that were momentous by night may seem simply silly in the light of day, so the poet and the prophet can discover themselves playing the idiot before a jury of sober eyes. The easy thing is to commit the whole community to the devil and retire again into the heavenly rock dwelling, close the door, and make it fast. But if some spiritual obstetrician has drawn the shimenawa across the retreat, then the work of representing eternity in time, and perceiving in time eternity, cannot be avoided.[35]

## 16. Master of the Two Worlds

For a human hero, it may mean achieving a balance between the material and spiritual. The person has become comfortable and competent in both the inner and outer worlds. Campbell demonstrates that

Freedom to pass back and forth across the world division, from the perspective of the apparitions of time to that of the causal deep and back—not contaminating the principles of the one with those of the other, yet permitting the mind to know the one by virtue of the other—is the talent of the master. The Cosmic Dancer, declares Nietzsche, does not rest heavily in a single spot, but gaily, lightly, turns and leaps from one position to another. It is possible to speak from only one point at a time, but that does not invalidate the insights of the rest.[36] The individual, through prolonged psychological disciplines, gives up completely all attachment to his personal limitations, idiosyncrasies, hopes and fears, no longer resists the self-annihilation that is prerequisite to rebirth in the realization of truth, and so becomes ripe, at last, for the great at-one-ment. His personal ambitions being totally dissolved, he no longer tries to live but willingly relaxes to whatever may come to pass in him; he becomes, that is to say, an anonymity.[37]

## 17. Freedom to Live

In this step, mastery leads to freedom from the fear of death, which in turn is the freedom to live. This is sometimes referred to as living in the moment, neither anticipating the future nor regretting the past. Campbell declares,

The hero is the champion of things becoming, not of things become, because he is. "Before Abraham was, I AM." He does not mistake apparent changelessness in time for the permanence of Being, nor is he fearful of the next moment (or of the "other thing"), as destroying the permanent with its change. [Quoting Ovid's Metamorphoses:] "Nothing retains its own form; but Nature, the greater renewer, ever makes up forms from forms. Be sure that nothing perishes in the whole universe; it does but vary and renew its form." Thus the next moment is permitted to come to pass.[38]
`,
})
*/
