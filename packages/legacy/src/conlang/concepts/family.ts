import * as _ from '../lang'

// Babina = grand-maman slovaque
// Dedo (/djedo/) = grand-papa

export const family = _.card('family', {
  writ: 'family',
  desc: () => `
# Parents and siblings

To understand family, you need to have a 3D view of space in the language.
Imagine that you are looking forward. You have the spatial directions as
follow (yes it looks like a person looking south "sud").

|          | front   |        |
| :-:      | :-:     | :-:    |
|          | ${_.du} |        |
| ${_.se}  |  🥰     | ${_.we} |
|          | ${_.no} |        |
|          | back    |        |

On a vertical plane:

| up / far |
| :-:     |
| ${_.tha} |
|    🥰    |
| ${_.jo} |
| down / close |

Imagine your family standing around you:

* In front of you, your younger siblings ${_.duda}.
* Behind you, your elder siblings ${_.noda}
* On the sides your friends ${_.adu}

On the vertical plane:

* Above you, your parents: ${_.thada}
* Below you, your children: ${_.joda}

And now all these terms can be cased with one of the three genders:

* ${_.wi} (bird)
* ${_.nu} (tree)
* ${_.to} (wind)

## ${_.xida} (siblings)

|           | ${_.nu} | ${_.wi} | ${_.to} |
| :----     | :------: | :------: | :-------: |
| ${_.duda} | ${_.dunu}| ${_.duwi}| ${_.duto} |
| ${_.xida} | ${_.xinu}| ${_.xiwi}| ${_.xito} |
| ${_.noda} | ${_.nonu}| ${_.nowi}| ${_.noto} |

If you just need quick terms (without the notion of being
younger or elderly):

* ${_.xinu} (sister)
* ${_.xiwi} (enby sibling)
* ${_.xito} (brother)

## ${_.thada} (parent) / ${_.joda} (child)

|           | ${_.nu}  | ${_.wi}  | ${_.to}  |
| :----     | :------:  | :------:  | :-------: |
| ${_.thada} | ${_.thanu} | ${_.thawi} | ${_.thato} |
| ${_.joda} | ${_.jonu} | ${_.jowi} | ${_.joto} |

## And mom and dad

* ${_.mama} (mum)
* ${_.baba} (dad)
`,
})
