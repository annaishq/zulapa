// The frozen engine, asked what it builds. A chain is the ids of its
// morphemes with dots between them, such as `es.o.lu.zu`. The answer to a
// chain is the word and its gloss, or the error of the engine.

import {execFileSync} from "node:child_process"
import {fileURLToPath} from "node:url"

const legacy = fileURLToPath(new URL("../../packages/legacy", import.meta.url))

export function say(chains) {
  const out = execFileSync("pnpm", ["-s", "say"], {
    cwd: legacy,
    input: JSON.stringify(chains),
    encoding: "utf8",
  })
  return JSON.parse(out)
}
