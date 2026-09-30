#!/usr/bin/env node
// `npm run schemas`: every schema in schemas/index.mjs written as JSON
// Schema to schemas/json/<name>.schema.json, for an agent's structured
// output, and the round's workflow, .claude/workflows/studio-round.js,
// written from its template with the schemas in it, since a workflow reads
// no file. `--check` writes nothing and fails where a file is not what the
// schemas and the template now make, so neither drifts from the zod.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { z } from 'zod';

import { SCHEMAS } from '../schemas/index.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
let stale = 0;

/** Write `text` to `file`, or, checking, say where it is not what is there. */
function emit(file, text) {
  if (!check) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, text);
    return;
  }
  let was = null;
  try {
    was = readFileSync(file, 'utf8');
  } catch {}
  if (was !== text) {
    stale += 1;
    console.error(`schemas: ${file.slice(root.length + 1)} is not what the schemas make: npm run schemas`);
  }
}

const json = Object.fromEntries(
  Object.entries(SCHEMAS).map(([name, schema]) => [name, { title: name, ...z.toJSONSchema(schema) }]),
);
for (const [name, schema] of Object.entries(json)) {
  emit(join(root, 'schemas', 'json', `${name}.schema.json`), `${JSON.stringify(schema, null, 2)}\n`);
}
// What a playtester hands back is its report without the run's persona and seed, which it is
// never told; the workflow adds them before the report is kept.
const asPlayed = structuredClone(json['playtest-report']);
delete asPlayed.properties.persona;
delete asPlayed.properties.seed;
asPlayed.required = asPlayed.required.filter((key) => key !== 'persona' && key !== 'seed');
asPlayed.title = 'playtest-report-as-played';
const embedded = { ...json, 'playtest-report-as-played': asPlayed };
const template = readFileSync(join(root, 'scripts', 'studio-round.template.js'), 'utf8');
if (!template.includes('/*SCHEMAS*/ {}')) throw new Error('the workflow template has lost its /*SCHEMAS*/ {} mark');
emit(
  join(root, '.claude', 'workflows', 'studio-round.js'),
  template.replace('/*SCHEMAS*/ {}', () => JSON.stringify(embedded, null, 2)),
);
if (stale > 0) process.exit(1);
console.log(`schemas: ${Object.keys(SCHEMAS).length} and the workflow ${check ? 'current' : 'written'}`);
