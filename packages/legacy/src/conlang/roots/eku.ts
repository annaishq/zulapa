import * as _ from '../lang'

export const eku = _.word('eku', {
  def: 'fact',
  desc: () => `Behaves like "that" or "because"`,
  see: () => [_.prep],
  etym: () => [_.e, _.qu],
})
