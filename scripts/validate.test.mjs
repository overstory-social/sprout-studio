import { strict as assert } from 'node:assert';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const script = join(dirname(fileURLToPath(import.meta.url)), 'validate.mjs');

/** `validate.mjs kind` over `value` written to a file: its exit code and what it printed. */
function validate(kind, value) {
  const file = join(mkdtempSync(join(tmpdir(), 'studio-')), 'out.json');
  writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value));
  const run = spawnSync('node', [script, kind, file], { encoding: 'utf8' });
  return { code: run.status, out: run.stdout, err: run.stderr };
}

describe('npm run validate', () => {
  const plan = {
    decisions: [{ answers: 'P1', decision: 'accept', reason: 'Yes.' }],
    changes: [{ what: 'A draught.', files: ['room.sprout'], for: ['P1'] }],
  };

  it('is silent and 0 for a valid output', () => {
    assert.deepEqual(validate('revision-plan', plan), { code: 0, out: '', err: '' });
  });

  it('prints each problem on its own line and exits 1', () => {
    const run = validate('revision-plan', { ...plan, decisions: [] });
    assert.equal(run.code, 1);
    assert.equal(run.out, 'decisions: Too small: expected array to have >=1 items\nchanges.0.for.0: P1 is not an accepted point, so no change answers it\n');
  });

  it('says an output that is not JSON is not, as a problem the agent can be told', () => {
    const run = validate('synthesis', 'Here is my synthesis: {');
    assert.equal(run.code, 1);
    assert.match(run.out, /^\(the whole\): not JSON: /);
  });

  it('refuses a playtest report that leaks, and says how it is used where it is misused', () => {
    const leaky = validate('playtest-report', { about: 'round 3' });
    assert.match(leaky.out, /^about: names /m);
    const misused = validate('essay', {});
    assert.equal(misused.code, 2);
    assert.match(misused.err, /^usage: npm run validate -- <playtest-report\|pairwise-verdict\|synthesis\|revision-plan> <file\.json>/);
  });
});
