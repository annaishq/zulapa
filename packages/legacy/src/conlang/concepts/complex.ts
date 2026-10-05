import * as _ from '../lang'

export const complex = _.card('complex', {
  // open: true,
  desc: () => `
# Complex forms

This card is mainly a stress-test for the language to ensure that there are
ways to express the more complex sentences without ambiguity (relative
clauses, deranking, etc).

Most if not all phrase are NSFW because this gave me extra motivation to fix
things correctly (make sure to enable the "🍑" button).

## Verb deranking

Subordinate phrases get the subordinate case and proper conjugation with the
concerned subject. If the subject is not known (indefinite), we use the infinite
subject ${_.u}.

Subordinate verbs get a case marking with ${_.n} suffix (added last).
  
### Modals and phasals

${_.phrase('I begin to run', _.o.juV, _.o.feno.n)} 

${_.phrase('It starts to rain', _.u.juV, _.u.gai.n)} 

### Purpose clauses

${_.phrase('I came home early in order to prepare dinner')}

### Desideratives

${_.phraseX(
  'I want to vagina-hold your penis.',
  _.o.ora,
  _.o.yuru.n,
  _.ti.taj.m
)}

${_.phraseX(
  'I want you to vagina-hold my penis.',
  _.o.ora,
  _.i.yuru.n,
  _.mo.taj.m
)}

### Manipulatives

${_.phraseX('I made her whip him.', _.o.maxim.em, _.nu.m, _.a.fo.n, _.toda.m)}

${_.phraseX('She made me fall.', _.nu, _.a.maxim.em, _.o.thato.n)}

### Perception

${_.phrase('I saw them undressing.', _.o.fa.em, _.sa.sha.m, _.le.u.lu.nefe)}

### 'before/after' relativisation

${_.phrase(
  'I kissed you after you fell asleep.',
  _.o.la.em,
  _.ti.m,
  _.le.xu.fodiru
)}

### 'before/after' relativisation

${_.phrase(
  'I kissed you after they fell asleep.',
  _.o.la.em,
  _.ti.m,
  _.xu.dem,
  _.a.fodiru.em
)}

### 'when' relativisation

${_.phrase(
  'When we arrived, they were still in bed.',
  _.dem,
  _.o.odu,
  _.a.lu.e.em,
  _.ro.piwe
)}

### Nominative relativisation

${_.phrase(
  'What I prefer is to sleep with you.',
  _.eku,
  _.o.ora.go,
  _.a.e,
  _.u.fodi,
  _.ko.ti.m
)}

### Reason

${_.phraseX(
  'I cannot leave her alone because she is tied to the radiator.',
  _.o.neja,
  _.u.odo,
  _.pienu,
  _.nu.m,
  _.eku,
  _.nu.s,
  _.es.a.lu.qu,
  _.ajayusa.m
)}

### Reality condition

${_.phraseX(
  'If they did not enjoy sex with you, they should not have come back.'
)}

### Knowledge

${_.phrase('I know (that) they will scream.', _.o.gama, _.sha.sheropa.ir.m)}

### Propositional attitudes

${_.phrase('I think that we should stay at home.')}

### Utterance

${_.phrase('I said that I was tired.', _.o.lapa.em, _.eku, _.tus, _.o.e.em)}

`,
})
