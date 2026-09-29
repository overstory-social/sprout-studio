import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import { leaksIn, problemsIn } from './index.mjs';

const rated = (score, ...turns) => ({ score, why: 'Because.', turns });

/** A report a playtester could write, valid as it stands. */
function report() {
  return {
    persona: 'explorer',
    seed: 7,
    turns: 12,
    done: { reason: 'exhausted', why: 'I had tried everything I could see.' },
    about: 'A print shop after hours, and an apprentice who wants to finish a job.',
    ending: { reached: 'unsure', what: 'The press ran, and the apprentice went quiet.' },
    moments: [{ turn: 4, kind: 'delight', note: 'The cat followed me.' }],
    wished: ['Ask the apprentice about the missing sheet.'],
    lines: [{ turn: 3, line: 'The type cabinet smells of oil.', why: 'It set the place.' }],
    ratings: {
      fun: rated(4, 4),
      engagement: rated(4, 2, 9),
      difficulty: { ...rated(3, 6), felt: 'right' },
      interestingness: rated(5, 9),
      prose: rated(5, 3),
    },
  };
}

describe('a playtest report', () => {
  it('is valid as a player writes it', () => {
    assert.deepEqual(problemsIn('playtest-report', report()), []);
  });

  it('is invalid where a rating cites no turn, since a rating with no evidence says nothing', () => {
    const bare = report();
    bare.ratings.fun.turns = [];
    assert.deepEqual(problemsIn('playtest-report', bare), [
      'ratings.fun.turns: Too small: expected array to have >=1 items',
    ]);
  });

  it('is invalid where it cites a turn past the last one typed', () => {
    const late = report();
    late.moments[0].turn = 13;
    late.ratings.prose.turns = [3, 40];
    assert.deepEqual(problemsIn('playtest-report', late), [
      'moments.0.turn: turn 13 is past the last turn typed, 12',
      'ratings.prose.turns.1: turn 40 is past the last turn typed, 12',
    ]);
  });

  it('says what the ending was wherever one may have been reached', () => {
    const vague = report();
    vague.ending = { reached: 'yes', what: null };
    assert.deepEqual(problemsIn('playtest-report', vague), [
      'ending.what: say what the ending was, since it was reached or may have been',
    ]);
    vague.ending = { reached: 'no', what: null };
    assert.deepEqual(problemsIn('playtest-report', vague), []);
  });

  it('holds nothing it does not name, and a difficulty says how it felt', () => {
    const extra = report();
    extra.round = 3;
    delete extra.ratings.difficulty.felt;
    const problems = problemsIn('playtest-report', extra);
    assert.equal(problems.length, 2);
    assert.match(problems.join('\n'), /Unrecognized key: "round"/);
    assert.match(problems.join('\n'), /^ratings\.difficulty\.felt: /m);
  });

  it('is refused as a leak where its words name a round or a world file', () => {
    const leaky = report();
    leaky.about = 'The shop, as it was in round 2.';
    leaky.wished = ['I read kiln.sprout by accident.'];
    assert.deepEqual(leaksIn(leaky), [
      'about: names \\bround\\s*\\d+',
      'wished.0: names \\.sprout\\b',
    ]);
    assert.deepEqual(leaksIn(report()), []);
  });
});

describe('a pairwise verdict', () => {
  const judged = (better, first, second) => ({ better, why: 'Livelier.', turns: { first, second } });
  const verdict = () => ({
    axes: {
      fun: judged('first', [2], []),
      engagement: judged('second', [], [5]),
      difficulty: judged('same', [3], [3]),
      interestingness: judged('first', [7], [1]),
      prose: judged('second', [], [2, 4]),
    },
    overall: judged('first', [7], [4]),
  });

  it('judges every axis and the whole, each citing a turn in either playthrough', () => {
    assert.deepEqual(problemsIn('pairwise-verdict', verdict()), []);
    const bare = verdict();
    bare.axes.prose.turns = { first: [], second: [] };
    assert.deepEqual(problemsIn('pairwise-verdict', bare), [
      'axes.prose.turns: cite at least one turn, in either',
    ]);
    const short = verdict();
    delete short.axes.fun;
    assert.match(problemsIn('pairwise-verdict', short).join('\n'), /^axes\.fun: /);
  });
});

describe('a synthesis', () => {
  const synthesis = () => ({
    points: [
      {
        id: 'P1',
        category: 'design',
        severity: 'medium',
        consensus: { n: 4, of: 6 },
        claim: 'Players did not find the back room.',
        evidence: [{ run: 'explorer-7', turn: 12 }],
        recommendation: 'Mention the draught under the door.',
      },
      {
        id: 'P2',
        category: 'language-gap',
        severity: 'low',
        consensus: { n: 1, of: 6 },
        claim: 'A player wanted to pour water on the fire.',
        evidence: [{ run: 'parser-breaker-3', turn: 8, quote: 'pour water on fire' }],
        recommendation: 'A liquid kind, if the language gets one.',
      },
    ],
    legibility: {
      verdict: 'partly',
      why: 'Half saw the apprentice’s story.',
      runs: [{ run: 'explorer-7', understood: 'A print shop at night.', matches: 'partly' }],
    },
    metrics: [{ metric: 'reach.passages.never', before: null, after: 11 }],
  });

  it('files each point with its category, its consensus and its evidence', () => {
    assert.deepEqual(problemsIn('synthesis', synthesis()), []);
  });

  it('is invalid where a point cites no evidence, counts more runs than there were, or reuses an id', () => {
    const wrong = synthesis();
    wrong.points[0].evidence = [];
    wrong.points[1].consensus = { n: 7, of: 6 };
    wrong.points[1].id = 'P1';
    assert.deepEqual(problemsIn('synthesis', wrong), [
      'points.0.evidence: Too small: expected array to have >=1 items',
      'points.1.consensus.n: 7 of 6 is more runs than there were',
      'points.1.id: P1 is used twice',
    ]);
  });
});

describe('a revision plan', () => {
  const plan = () => ({
    decisions: [
      { answers: 'P1', decision: 'accept', reason: 'The back room is the heart of it.' },
      { answers: 'P2', decision: 'reject', reason: 'Not this world’s to answer; logged in friction.md.' },
      { answers: 'S1', decision: 'accept', reason: 'Eric asked for a quieter ending.' },
    ],
    changes: [{ what: 'A draught under the door.', files: ['back_room.sprout'], for: ['P1'] }],
  });

  it('answers every point and comment, and changes the world only for what it accepted', () => {
    assert.deepEqual(problemsIn('revision-plan', plan()), []);
    const wrong = plan();
    wrong.changes[0].for = ['P2'];
    wrong.decisions.push({ answers: 'P1', decision: 'reject', reason: 'Second thoughts.' });
    assert.deepEqual(problemsIn('revision-plan', wrong), [
      'decisions.3.answers: P1 is answered twice',
      'changes.0.for.0: P2 is not an accepted point, so no change answers it',
    ]);
  });

  it('gives a reason for every decision', () => {
    const silent = plan();
    silent.decisions[1].reason = ' ';
    assert.equal(problemsIn('revision-plan', silent).length, 1);
  });
});

describe('problemsIn', () => {
  it('names the schemas there are where asked for one that is not', () => {
    assert.throws(() => problemsIn('essay', {}), /no schema named essay: one of playtest-report, pairwise-verdict, synthesis, revision-plan, brief-check/);
  });
});

describe('a brief check', () => {
  it('is ok exactly where it names no violation', () => {
    const violation = { constraint: 'No fault in any run.', where: 'world/kiln.sprout', why: '`kick kiln` overflows.' };
    assert.deepEqual(problemsIn('brief-check', { ok: true, violations: [] }), []);
    assert.deepEqual(problemsIn('brief-check', { ok: false, violations: [violation] }), []);
    assert.deepEqual(problemsIn('brief-check', { ok: true, violations: [violation] }), [
      'ok: a world is ok exactly where it has no violations',
    ]);
  });
});
