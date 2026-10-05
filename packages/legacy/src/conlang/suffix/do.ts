import { suffix } from '../zulapa'

const do_ = suffix('do', {
  id: 'do',
  adj: 'intense',
  noun: 'intensity',
  desc: () => `
Implies a very deep, intimate and intense contact. Not something out
of brute force but through whatever creates intensity in the specific
giving and receiving vsituation.
`,
})
export { do_ as do }
