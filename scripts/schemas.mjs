#!/usr/bin/env node
// `npm run schemas`: every schema in schemas/index.mjs written as JSON
// Schema to schemas/json/<name>.schema.json, for an agent's structured
// output. `--check` writes nothing and fails where a file is not what the
// schemas now make, so the JSON never drifts from the zod.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { z } from 'zod';

import { SCHEMAS } from '../schemas/index.mjs';

const out = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'schemas', 'json');
const check = process.argv.includes('--check');
let stale = 0;
mkdirSync(out, { recursive: true });
for (const [name, schema] of Object.entries(SCHEMAS)) {
  const file = join(out, `${name}.schema.json`);
  const text = `${JSON.stringify({ title: name, ...z.toJSONSchema(schema) }, null, 2)}\n`;
  if (!check) writeFileSync(file, text);
  else {
    let was = null;
    try {
      was = readFileSync(file, 'utf8');
    } catch {}
    if (was !== text) {
      stale += 1;
      console.error(`schemas: ${name}.schema.json is not what the schemas make: npm run schemas`);
    }
  }
}
if (stale > 0) process.exit(1);
console.log(`schemas: ${Object.keys(SCHEMAS).length} ${check ? 'current' : 'written'}`);
