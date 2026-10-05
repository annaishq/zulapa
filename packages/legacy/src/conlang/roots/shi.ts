import * as _ from '../lang'

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  adj: 'learning',
  etym: () => [_.shi, _.fi],
  see: () => [_.nanes, _.shipa],
  desc: () => `
  Learning is creating links (threads) to others.
  
  ${_.phrase('I am learning, I am connecting to you.', _.o.shifi)}

  ${_.phrase('I am connecting to you.', _.o.shi, _.fi)}
  `,
})
