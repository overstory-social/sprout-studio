#!/usr/bin/env node
// `npm run validate -- <kind> <file.json>`: whether an agent's output is a
// valid `kind` (playtest-report, pairwise-verdict, synthesis,
// revision-plan). Silent and 0 where it is; otherwise every problem on
// its own line, as the re-ask hands them back to the agent, and 1. A
// playtest report is also refused where its words name what a blind
// player cannot know.
import { readFileSync } from 'node:fs';

import { leaksIn, problemsIn, SCHEMAS } from '../schemas/index.mjs';

const [kind, file] = process.argv.slice(2);
if (kind === undefined || file === undefined || !(kind in SCHEMAS)) {
  console.error(`usage: npm run validate -- <${Object.keys(SCHEMAS).join('|')}> <file.json>`);
  process.exit(2);
}
let value;
try {
  value = JSON.parse(readFileSync(file, 'utf8'));
} catch (error) {
  console.log(`(the whole): not JSON: ${error.message}`);
  process.exit(1);
}
const problems = [...problemsIn(kind, value), ...(kind === 'playtest-report' ? leaksIn(value) : [])];
for (const problem of problems) console.log(problem);
process.exit(problems.length === 0 ? 0 : 1);
