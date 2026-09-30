import { strict as assert } from 'node:assert';
import { execFileSync } from 'node:child_process';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const SPROUT = join(REPO, 'node_modules', '.bin', 'sprout');

// A scratch studio: a git repository holding one world, `shed`, as `sprout scaffold` writes it.
const root = mkdtempSync(join(tmpdir(), 'studio-'));
process.env.STUDIO_ROOT = root;
execFileSync('git', ['init', '-q'], { cwd: root });
execFileSync('git', ['config', 'user.email', 'spec@example.com'], { cwd: root });
execFileSync('git', ['config', 'user.name', 'spec'], { cwd: root });
mkdirSync(join(root, 'worlds', 'shed'), { recursive: true });
execFileSync(SPROUT, ['scaffold', 'world', join(root, 'worlds', 'shed', 'world'), '--author', 'spec'], { stdio: 'ignore' });

const { DOORS, measure, open, save, status, commit, renderSynthesis, verify } = await import('./round.mjs');

/** A client on the playtester's server, as the playtester agent has it. */
async function playtester() {
  const client = new Client({ name: 'spec', version: '0' });
  await client.connect(
    new StdioClientTransport({
      command: 'node',
      args: [join(REPO, 'scripts', 'playtest-mcp.mjs')],
      env: { ...process.env, STUDIO_ROOT: root },
      stderr: 'pipe',
    }),
  );
  return client;
}

const text = (result) => ({ text: result.content[0].text, refused: result.isError === true });

describe('a round on disk', () => {
  let client;
  let door;
  before(async () => {
    client = await playtester();
  });
  after(async () => {
    await client?.close();
  });

  it('opens a run under a door that names nothing of it', () => {
    const opened = open('shed', '01', 'explorer', 7, { turnCap: 3, advance: 30 });
    assert.equal(opened.run, 'explorer-7');
    assert.match(opened.door, /^[0-9a-f]{24}$/);
    door = opened.door;
    const ticket = JSON.parse(readFileSync(join(DOORS, `${door}.json`), 'utf8'));
    assert.deepEqual(ticket, {
      world: join('worlds', 'shed', 'world'),
      seed: 7,
      record: join('worlds', 'shed', 'rounds', '01', 'runs', 'explorer-7.json'),
      turnCap: 3,
      advancePerTurn: 30,
    });
    assert.throws(() => open('shed', '1', 'explorer', 7), /a round is two digits/);
    assert.throws(() => open('shed', '01', 'critic', 7), /a persona is one of/);
  });

  it('gives the playtester three tools that name no file, path or round', async () => {
    const { tools } = await client.listTools();
    assert.deepEqual(tools.map((tool) => tool.name), ['arrive', 'say', 'leave']);
    const told = JSON.stringify(tools) + (client.getInstructions() ?? '');
    assert.equal(/\.json|\.sprout|worlds\/|\bround\b|\bseed\b|\brecord/i.exec(told), null);
  });

  it('plays the run behind the door, recording it where the ticket says, and nowhere the playtester is told', async () => {
    assert.deepEqual(text(await client.callTool({ name: 'say', arguments: { door, line: 'look' } })), {
      text: 'Arrive first.',
      refused: true,
    });
    const arrived = text(await client.callTool({ name: 'arrive', arguments: { door, name: 'Ada' } }));
    assert.equal(arrived.refused, false);
    assert.notEqual(arrived.text, '');
    for (let i = 0; i < 3; i++) await client.callTool({ name: 'say', arguments: { door, line: 'look' } });
    assert.deepEqual(text(await client.callTool({ name: 'say', arguments: { door, line: 'look' } })), {
      text: 'You have taken all 3 turns this session allows.',
      refused: true,
    });
    assert.deepEqual(text(await client.callTool({ name: 'arrive', arguments: { door: 'nope', name: 'Ada' } })), {
      text: 'That door opens on nothing. Use the door you were given.',
      refused: true,
    });
    const recorded = JSON.parse(readFileSync(join(root, 'worlds', 'shed', 'rounds', '01', 'runs', 'explorer-7.json'), 'utf8'));
    assert.deepEqual(recorded.steps[0], { seed: 7 });
    // Each look, then a tick and time moved on.
    assert.deepEqual(
      recorded.steps.slice(1).map((step) => Object.keys(step)[0]),
      ['arrive', 'as', 'tick', 'advance', 'as', 'tick', 'advance', 'as', 'tick', 'advance'],
    );
  });

  it('measures every run, and all of them together', () => {
    const measured = measure('shed', '01');
    assert.deepEqual(measured.runs, ['explorer-7']);
    assert.equal(measured.figures.faults, 0);
    assert.equal(typeof measured.figures['reach.passages.never'], 'number');
    assert.deepEqual(readdirSync(join(root, 'worlds', 'shed', 'rounds', '01', 'metrics')).sort(), ['explorer-7.json', 'merged.json']);
  });

  it('keeps an output only where it is valid, and gives back the problems where it is not', () => {
    const report = {
      persona: 'explorer',
      seed: 7,
      turns: 3,
      done: { reason: 'turn-cap', why: 'I ran out of turns.' },
      about: 'A shed.',
      ending: { reached: 'no', what: null },
      moments: [],
      wished: [],
      lines: [],
      ratings: Object.fromEntries(
        ['fun', 'engagement', 'interestingness', 'prose'].map((axis) => [axis, { score: 2, why: 'Little here.', turns: [1] }]),
      ),
    };
    report.ratings.difficulty = { score: 1, why: 'Nothing to do.', turns: [2], felt: 'too easy' };
    assert.deepEqual(save('shed', '01', 'playtest-report', 'explorer-7', report), {
      ok: true,
      file: join('worlds', 'shed', 'rounds', '01', 'reports', 'explorer-7.json'),
    });
    const leaky = { ...report, about: 'The shed from round 1.' };
    assert.deepEqual(save('shed', '01', 'playtest-report', 'explorer-8', leaky), {
      ok: false,
      problems: ['about: names \\bround\\s*\\d+'],
    });
    assert.equal(existsSync(join(root, 'worlds', 'shed', 'rounds', '01', 'reports', 'explorer-8.json')), false);
  });

  it('keeps a synthesis as JSON and as a page for people', () => {
    const synthesis = {
      points: [
        {
          id: 'P1',
          category: 'design',
          severity: 'high',
          consensus: { n: 1, of: 1 },
          claim: 'There is nothing to do.',
          evidence: [{ run: 'explorer-7', turn: 2, quote: 'look' }],
          recommendation: 'Give the shed something to find.',
        },
      ],
      legibility: { verdict: 'illegible', why: 'There is no story yet.', runs: [{ run: 'explorer-7', understood: 'A shed.', matches: 'no' }] },
      metrics: [{ metric: 'reach.passages.never', before: null, after: 0 }],
    };
    assert.equal(save('shed', '01', 'synthesis', undefined, synthesis).ok, true);
    const page = readFileSync(join(root, 'worlds', 'shed', 'rounds', '01', 'synthesis.md'), 'utf8');
    assert.equal(page, renderSynthesis(synthesis));
    assert.match(page, /^### P1 · design · high · 1\/1$/m);
    assert.match(page, /^Evidence: explorer-7 turn 2 \("look"\)$/m);
  });

  it('verifies the world as sprout check and sprout test leave it', () => {
    assert.deepEqual(verify('shed'), { ok: true });
  });

  it('counts the design points a revision accepted', () => {
    const plan = {
      decisions: [{ answers: 'P1', decision: 'accept', reason: 'Yes.' }],
      changes: [{ what: 'A thing to find.', files: ['shed.sprout'], for: ['P1'] }],
    };
    assert.equal(save('shed', '01', 'revision-plan', undefined, plan).ok, true);
    assert.equal(status('shed').rounds[0].acceptedDesign, 1);
  });

  it('keeps the steering the steward read, each comment once, and why there is none', () => {
    const steering = (comments) => ({ reached: true, doc: 'https://claude.ai/doc/shed', comments });
    const first = { id: 'c1', words: 'A quieter ending.', tab: 'Round 01', on: '' };
    assert.deepEqual(save('shed', '01', 'steering', undefined, steering([first])), {
      ok: true,
      file: join('worlds', 'shed', 'rounds', '01', 'steering.json'),
      reached: true,
      comments: 1,
    });
    assert.equal(
      readFileSync(join(root, 'worlds', 'shed', 'rounds', '01', 'steering.md'), 'utf8'),
      '# Steering\n\n## S1 (on Round 01)\n\nA quieter ending.\n',
    );
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'worlds', 'shed', 'steering.json'), 'utf8')), {
      doc: 'https://claude.ai/doc/shed',
    });
    // Round 02 reads the same doc: the comment round 01 read is not read again.
    const later = { id: 'c2', words: 'More cats.', tab: 'Round 01', on: 'the shed' };
    assert.equal(save('shed', '02', 'steering', undefined, steering([first, later])).comments, 1);
    assert.equal(
      readFileSync(join(root, 'worlds', 'shed', 'rounds', '02', 'steering.md'), 'utf8'),
      '# Steering\n\n## S1 (on Round 01, at "the shed")\n\nMore cats.\n',
    );
    assert.equal(save('shed', '03', 'steering', undefined, { reached: false, doc: null, comments: [] }).reached, false);
    assert.equal(
      readFileSync(join(root, 'worlds', 'shed', 'rounds', '03', 'steering.md'), 'utf8'),
      '# Steering\n\nThe steering doc could not be reached this round.\n',
    );
    rmSync(join(root, 'worlds', 'shed', 'rounds', '02'), { recursive: true });
    rmSync(join(root, 'worlds', 'shed', 'rounds', '03'), { recursive: true });
  });

  it('refuses a report whose persona and seed are not its run', () => {
    const report = JSON.parse(readFileSync(join(root, 'worlds', 'shed', 'rounds', '01', 'reports', 'explorer-7.json'), 'utf8'));
    assert.deepEqual(save('shed', '01', 'playtest-report', 'casual-7', report), {
      ok: false,
      problems: ['persona and seed: explorer-7 is not the run casual-7 it is saved as'],
    });
  });

  it('marks a round committed only where the commit succeeds', () => {
    // A hook that refuses every commit.
    const hook = join(root, '.git', 'hooks', 'pre-commit');
    writeFileSync(hook, '#!/bin/sh\necho refused by hook >&2\nexit 1\n');
    chmodSync(hook, 0o755);
    const refused = commit('shed', '01', 'played');
    assert.equal(refused.ok, false);
    assert.match(refused.problems[0], /^git would not commit round 01: refused by hook/);
    assert.equal(status('shed').rounds[0].committed, false);
    rmSync(hook);
  });

  it('says where the rounds stand, and commits one', () => {
    const [first] = status('shed').rounds;
    assert.equal(first.figures.faults, 0);
    assert.equal(first.acceptedDesign, 1);
    assert.deepEqual(status('shed').rounds.map(({ figures: _, ...rest }) => rest), [
      {
        round: '01',
        points: 1,
        acceptedDesign: 1,
        runs: ['explorer-7'],
        reports: ['explorer-7'],
        metrics: true,
        pairwise: [],
        synthesis: true,
        steering: true,
        revision: true,
        committed: false,
      },
    ]);
    const { ok, committed } = commit('shed', '01', 'played');
    assert.equal(ok, true);
    assert.match(committed, /^[0-9a-f]{7,}$/);
    assert.equal(status('shed').rounds[0].committed, true);
    assert.equal(
      execFileSync('git', ['log', '-1', '--format=%s'], { cwd: root, encoding: 'utf8' }).trim(),
      'shed, round 01: played',
    );
  });
});
