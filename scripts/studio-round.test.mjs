import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

// The generated workflow, run with stand-ins for its agents: every clerk
// command answered from a small model of the world's rounds on disk, so
// what is tested is the workflow's own control flow — which agents it asks,
// in what order, with what, and when it stops.

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = readFileSync(join(REPO, '.claude', 'workflows', 'studio-round.js'), 'utf8');
const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
const body = SOURCE.replace(/^export const meta = /m, 'const meta = ');
const workflow = new AsyncFunction('args', 'agent', 'phase', 'log', 'pipeline', 'parallel', 'budget', body);

const rated = { score: 3, why: 'Fine.', turns: [1] };

/** A valid report for `persona` and `seed`. */
const reportFor = (persona, seed) => ({
  persona,
  seed,
  turns: 5,
  done: { reason: 'exhausted', why: 'Done.' },
  about: 'A shed.',
  ending: { reached: 'no', what: null },
  moments: [],
  wished: [],
  lines: [],
  ratings: {
    fun: rated,
    engagement: rated,
    difficulty: { ...rated, felt: 'right' },
    interestingness: rated,
    prose: rated,
  },
});

const SYNTHESIS = {
  points: [
    {
      id: 'P1',
      category: 'design',
      severity: 'low',
      consensus: { n: 1, of: 2 },
      claim: 'Quiet.',
      evidence: [{ run: 'explorer-1', turn: 1 }],
      recommendation: 'Less quiet.',
    },
  ],
  legibility: { verdict: 'partly', why: 'Some.', runs: [{ run: 'explorer-1', understood: 'A shed.', matches: 'partly' }] },
  metrics: [],
};

/**
 * Stand-ins for a run: the world on disk as `status` says it, and what each
 * agent answers, with every call kept. `options` bends it: a world that is
 * not yet playable, a revision that accepts nothing, a brief that stays
 * violated, a synthesis refused once.
 */
function stage(options = {}) {
  const world = {
    brief: true,
    intent: !options.fresh,
    playable: !options.fresh,
    rounds: (options.rounds ?? []).map((one) => ({ ...one })),
  };
  const calls = [];
  const logs = [];
  const phases = [];
  let refusals = options.refuseSynthesis ? 1 : 0;
  const current = () => world.rounds[world.rounds.length - 1];

  const clerk = (command, stdin) => {
    const [verb, , round, kind, name] = command.split(' ');
    switch (verb) {
      case 'status':
        return world;
      case 'open': {
        const [, , nn, persona, seed] = command.split(' ');
        if (!world.rounds.some((one) => one.round === nn)) {
          world.rounds.push({ round: nn, runs: [], reports: [], metrics: false, pairwise: [], synthesis: false, steering: false, revision: false, committed: false, figures: null, acceptedDesign: null });
        }
        current().runs.push(`${persona}-${seed}`);
        return { run: `${persona}-${seed}`, door: `door${persona.length}${seed}aa` };
      }
      case 'save':
        if (kind === 'synthesis' && refusals > 0) {
          refusals -= 1;
          return { ok: false, problems: ['points.0.evidence: Too small'] };
        }
        if (kind === 'playtest-report') current().reports.push(name);
        if (kind === 'synthesis') current().synthesis = true;
        if (kind === 'revision-plan') {
          current().revision = true;
          current().acceptedDesign = stdin.decisions.filter((one) => one.decision === 'accept').length;
        }
        return { ok: true, file: `${kind}.json` };
      case 'measure':
        current().metrics = true;
        current().figures = { faults: 0, 'reach.passages.never': 3 };
        return { runs: current().runs, figures: current().figures };
      case 'verify':
        return { ok: true };
      case 'commit':
        current().committed = true;
        return { committed: 'abc1234' };
      default:
        throw new Error(`unexpected clerk command ${command}`);
    }
  };

  const agent = async (prompt, opts = {}) => {
    const type = opts.agentType ?? 'workflow';
    calls.push({ type, prompt, label: opts.label, model: opts.model, phase: opts.phase });
    switch (type) {
      case 'clerk': {
        const command = /^Run: node scripts\/round\.mjs (.*?)(\nFeed|$)/s.exec(prompt)[1];
        const stdin = /\nFeed it this on stdin, exactly:\n([^]*)$/.exec(prompt);
        return { stdout: JSON.stringify(clerk(command, stdin === null ? undefined : JSON.parse(stdin[1]))) };
      }
      case 'playtester': {
        const [, persona, seed] = /persona "([a-z-]+)" and seed (\d+)/.exec(prompt);
        return reportFor(persona, Number(seed));
      }
      case 'brief-checker':
        return options.violated
          ? { ok: false, violations: [{ constraint: 'No faults.', where: 'kiln', why: 'It overflows.' }] }
          : { ok: true, violations: [] };
      case 'synthesizer':
        return SYNTHESIS;
      case 'steward':
        return 'Published.';
      case 'author':
        if (opts.schema === undefined) {
          world.playable = true;
          world.intent = true;
          return 'Wrote it.';
        }
        return {
          decisions: [{ answers: 'P1', decision: options.acceptNothing ? 'reject' : 'accept', reason: 'Because.' }],
          changes: options.acceptNothing ? [] : [{ what: 'Louder.', files: ['shed.sprout'], for: ['P1'] }],
        };
      default:
        return null;
    }
  };

  const pipeline = async (items, ...stages) =>
    Promise.all(
      items.map(async (item, i) => {
        let value = item;
        for (const run of stages) {
          try {
            value = await run(value, item, i);
          } catch {
            return null;
          }
        }
        return value;
      }),
    );
  const budget = { total: null, spent: () => 0, remaining: () => Infinity };
  const run = (args) => workflow(args, agent, (title) => phases.push(title), (line) => logs.push(line), pipeline, null, budget);
  return { run, calls, logs, phases, world };
}

describe('the studio-round workflow', () => {
  it('writes a new world, then plays a round of it through every phase, in order', async () => {
    const s = stage({ fresh: true });
    const out = await s.run({ world: 'shed', new: true, personas: ['explorer', 'casual'], author: 'fable' });
    assert.deepEqual(s.phases, ['Author', 'Playtest', 'Measure', 'Synthesize', 'Steer', 'Revise', 'Commit']);
    assert.deepEqual(out.rounds.map((one) => [one.round, one.runs, one.points, one.acceptedDesign]), [['01', 2, 1, 1]]);
    // The author is the brief's model, every time it is asked.
    assert.deepEqual([...new Set(s.calls.filter((one) => one.type === 'author').map((one) => one.model))], ['fable']);
  });

  it('hands a playtester its door, a name and a persona, and nothing that names the world, the round or a file', async () => {
    const s = stage();
    await s.run({ world: 'shed', personas: ['explorer', 'casual'], turnCap: 150 });
    const plays = s.calls.filter((one) => one.type === 'playtester');
    assert.equal(plays.length, 2);
    for (const play of plays) {
      assert.match(play.prompt, /^Your door: door\d+aa\n/);
      assert.equal(/shed|worlds\/|round|\.json|\.sprout|intent|brief/i.exec(play.prompt), null);
    }
    const opens = s.calls.filter((one) => one.type === 'clerk' && /round\.mjs open/.test(one.prompt));
    assert.match(opens[0].prompt, /open shed 01 explorer 1 --turn-cap 150 --advance 30/);
    // The impatient casual player has the shorter cap.
    assert.match(opens[1].prompt, /open shed 01 casual 1 --turn-cap 30 --advance 30/);
  });

  it('re-asks once, with the problems, where an output is refused', async () => {
    const s = stage({ refuseSynthesis: true });
    await s.run({ world: 'shed', personas: ['explorer'] });
    const synths = s.calls.filter((one) => one.type === 'synthesizer');
    assert.equal(synths.length, 2);
    assert.match(synths[1].prompt, /Your last answer was refused\. Fix exactly these, and change nothing else:\n- points\.0\.evidence: Too small/);
  });

  it('checks the brief before every round after the first, and stops where a revision cannot meet it', async () => {
    const committed = { round: '01', runs: ['explorer-1'], reports: ['explorer-1'], metrics: true, pairwise: [], synthesis: true, steering: true, revision: true, committed: true, figures: { faults: 0 }, acceptedDesign: 1 };
    const s = stage({ rounds: [committed], violated: true });
    const out = await s.run({ world: 'shed', personas: ['explorer'] });
    assert.deepEqual(s.phases, ['Brief-check']);
    assert.equal(s.calls.filter((one) => one.type === 'brief-checker').length, 2);
    assert.equal(s.calls.filter((one) => one.type === 'author').length, 1);
    assert.deepEqual(out.rounds, []);
    assert.match(s.logs.at(-1), /^stopping: the world still violates its brief after one revision/);
  });

  it('resumes a round from what is on disk, playing only the runs not yet reported', async () => {
    const half = { round: '01', runs: ['explorer-1'], reports: ['explorer-1'], metrics: false, pairwise: [], synthesis: false, steering: false, revision: false, committed: false, figures: null, acceptedDesign: null };
    const s = stage({ rounds: [half] });
    await s.run({ world: 'shed', personas: ['explorer', 'casual'] });
    assert.deepEqual(s.calls.filter((one) => one.type === 'playtester').map((one) => /persona "([a-z-]+)"/.exec(one.prompt)[1]), ['casual']);
    assert.match(s.logs[0], /round 01, resumed from disk/);
  });

  it('stops after two rounds with no accepted design point and flat metrics', async () => {
    const s = stage({ acceptNothing: true });
    const out = await s.run({ world: 'shed', rounds: 6, personas: ['explorer'] });
    assert.deepEqual(out.rounds.map((one) => one.round), ['01', '02', '03']);
    assert.equal(s.logs.at(-1), 'stopping: two rounds with no accepted design point and flat metrics');
  });

  it('refuses to start without a world to play, or a brief to play it to', async () => {
    await assert.rejects(stage().run({}), /args\.world names a folder under worlds\//);
    const s = stage();
    s.world.brief = false;
    await assert.rejects(s.run({ world: 'shed' }), /worlds\/shed\/brief\.md is missing/);
  });
});
