// What each agent of the loop hands back, as zod schemas (docs/loop.md).
// The orchestrator validates every agent output against its schema and
// re-asks once on failure, handing the agent the problems `problemsIn`
// words. `npm run schemas` emits each as JSON Schema into schemas/json/,
// for an agent's structured output. Two rules run through them: every
// judgement cites the transcript turns it rests on, since a rating with no
// evidence is invalid; and nothing a playtester writes names the round,
// the author or the world's files, so a report stays blind.

import { z } from 'zod';

/** The playtesters' personas (docs/loop.md › The loop). */
export const PERSONAS = ['explorer', 'goal-seeker', 'casual', 'prose-reader', 'parser-breaker', 'newcomer'];

/** Why a playtester stopped. The turn cap is the host's backstop, not the player's choice. */
export const DONE_REASONS = ['ending', 'stuck', 'bored', 'exhausted', 'turn-cap'];

/** The axes a playtest is rated on, and a pairwise verdict judged on. */
export const AXES = ['fun', 'engagement', 'difficulty', 'interestingness', 'prose'];

const turn = z.number().int().min(1).describe('A transcript turn: the number of the line the player typed, from 1.');
const turns = z.array(turn).min(1).describe('The transcript turns this rests on; at least one.');
const words = z.string().trim().min(1);

/** One rating: a score from 1 to 5, why, and the turns it rests on. */
const rating = z
  .object({
    score: z.number().int().min(1).max(5),
    why: words,
    turns,
  })
  .strict();

export const PlaytestReport = z
  .object({
    persona: z.enum(PERSONAS),
    seed: z.number().int().min(0),
    turns: z.number().int().min(0).describe('How many lines the player typed.'),
    done: z
      .object({ reason: z.enum(DONE_REASONS), why: words })
      .strict()
      .describe('Why the player stopped, in their words.'),
    about: words.describe('What this world is about, in the player’s own words.'),
    ending: z
      .object({
        reached: z.enum(['yes', 'no', 'unsure']),
        what: z.string().trim().min(1).nullable().describe('The ending, where one was reached or may have been.'),
      })
      .strict(),
    moments: z
      .array(
        z
          .object({
            turn,
            kind: z.enum(['delight', 'frustration', 'confusion', 'surprise']),
            note: words,
          })
          .strict(),
      )
      .describe('Noted as they happened, not only at the end.'),
    wished: z.array(words).describe('What the player wished they could do, and could not.'),
    lines: z
      .array(z.object({ turn, line: words, why: words }).strict())
      .describe('Lines the world wrote that mattered to the player, as they read them.'),
    ratings: z
      .object({
        fun: rating,
        engagement: rating,
        difficulty: rating.extend({ felt: z.enum(['too easy', 'right', 'too hard']) }).strict(),
        interestingness: rating,
        prose: rating,
      })
      .strict(),
  })
  .strict()
  .superRefine((report, ctx) => {
    // A turn cited past the last one typed cites nothing the transcript holds.
    const cite = (at, path) => {
      if (at > report.turns) {
        ctx.addIssue({
          code: 'custom',
          path,
          message: `turn ${at} is past the last turn typed, ${report.turns}`,
        });
      }
    };
    report.moments.forEach((moment, i) => cite(moment.turn, ['moments', i, 'turn']));
    report.lines.forEach((line, i) => cite(line.turn, ['lines', i, 'turn']));
    for (const axis of AXES) {
      report.ratings[axis].turns.forEach((at, i) => cite(at, ['ratings', axis, 'turns', i]));
    }
    if (report.ending.reached !== 'no' && report.ending.what === null) {
      ctx.addIssue({
        code: 'custom',
        path: ['ending', 'what'],
        message: 'say what the ending was, since it was reached or may have been',
      });
    }
  });

/** Which of two unlabelled playthroughs, or worlds, was better on one axis, why, and the turns in each. */
const judged = z
  .object({
    better: z.enum(['first', 'second', 'same']),
    why: words,
    turns: z
      .object({ first: z.array(turn), second: z.array(turn) })
      .strict()
      .describe('The turns, in each, the verdict rests on.'),
  })
  .strict()
  .superRefine((one, ctx) => {
    if (one.turns.first.length + one.turns.second.length === 0) {
      ctx.addIssue({ code: 'custom', path: ['turns'], message: 'cite at least one turn, in either' });
    }
  });

export const PairwiseVerdict = z
  .object({
    axes: z
      .object(Object.fromEntries(AXES.map((axis) => [axis, judged])))
      .strict(),
    overall: judged,
  })
  .strict();

/** One place a claim rests on: a run, by its id, and a turn of it. */
const evidence = z
  .object({
    run: words.describe('The run id: its persona and seed, as `explorer-7`.'),
    turn,
    quote: z.string().trim().min(1).optional().describe('What the transcript says there, where it helps.'),
  })
  .strict();

export const Synthesis = z
  .object({
    points: z.array(
      z
        .object({
          id: z.string().regex(/^P\d+$/, 'a point is P and its number, as P1'),
          category: z.enum(['design', 'world-bug', 'engine-bug', 'language-gap']),
          severity: z.enum(['low', 'medium', 'high']),
          consensus: z
            .object({ n: z.number().int().min(1), of: z.number().int().min(1) })
            .strict()
            .describe('How many of the round’s runs support it.'),
          claim: words,
          evidence: z.array(evidence).min(1),
          recommendation: words,
        })
        .strict()
        .superRefine((point, ctx) => {
          if (point.consensus.n > point.consensus.of) {
            ctx.addIssue({
              code: 'custom',
              path: ['consensus', 'n'],
              message: `${point.consensus.n} of ${point.consensus.of} is more runs than there were`,
            });
          }
        }),
    ),
    legibility: z
      .object({
        verdict: z.enum(['legible', 'partly', 'illegible']),
        why: words,
        runs: z
          .array(
            z
              .object({
                run: words,
                understood: words.describe('What the player thought the world was about.'),
                matches: z.enum(['yes', 'partly', 'no']),
              })
              .strict(),
          )
          .min(1),
      })
      .strict()
      .describe('What players took the world to be about, against the sealed intent.'),
    metrics: z
      .array(
        z
          .object({
            metric: words.describe('A figure from `sprout test --report`, as `reach.passages.never`.'),
            before: z.number().nullable().describe('Last round’s; null in round 1.'),
            after: z.number(),
          })
          .strict(),
      )
      .describe('The round’s metric deltas.'),
  })
  .strict()
  .superRefine((synthesis, ctx) => {
    const seen = new Set();
    synthesis.points.forEach((point, i) => {
      if (seen.has(point.id)) {
        ctx.addIssue({ code: 'custom', path: ['points', i, 'id'], message: `${point.id} is used twice` });
      }
      seen.add(point.id);
    });
  });

export const RevisionPlan = z
  .object({
    decisions: z
      .array(
        z
          .object({
            answers: z
              .string()
              .regex(/^(P|S)\d+$/, 'answer a synthesis point, as P1, or a steering comment, as S1'),
            decision: z.enum(['accept', 'reject']),
            reason: words.describe('Why, for a rejection above all: the brief and the artistic direction outrank the median playtester.'),
          })
          .strict(),
      )
      .min(1),
    changes: z
      .array(
        z
          .object({
            what: words,
            files: z.array(words).min(1).describe('The world files it touches.'),
            for: z.array(z.string().regex(/^(P|S)\d+$/)).min(1).describe('The accepted points it answers.'),
          })
          .strict(),
      ),
  })
  .strict()
  .superRefine((plan, ctx) => {
    const accepted = new Set(plan.decisions.filter((one) => one.decision === 'accept').map((one) => one.answers));
    const answered = new Set();
    plan.decisions.forEach((one, i) => {
      if (answered.has(one.answers)) {
        ctx.addIssue({ code: 'custom', path: ['decisions', i, 'answers'], message: `${one.answers} is answered twice` });
      }
      answered.add(one.answers);
    });
    plan.changes.forEach((change, i) =>
      change.for.forEach((id, j) => {
        if (!accepted.has(id)) {
          ctx.addIssue({
            code: 'custom',
            path: ['changes', i, 'for', j],
            message: `${id} is not an accepted point, so no change answers it`,
          });
        }
      }),
    );
  });

/** Every schema, by the name an agent's output is validated as. */
export const SCHEMAS = {
  'playtest-report': PlaytestReport,
  'pairwise-verdict': PairwiseVerdict,
  synthesis: Synthesis,
  'revision-plan': RevisionPlan,
};

/**
 * What is wrong with `value` as a `kind`, one line to a problem, each at
 * its path, worded to hand back to the agent on the one re-ask; empty
 * where it is valid.
 */
export function problemsIn(kind, value) {
  const schema = SCHEMAS[kind];
  if (schema === undefined) throw new Error(`no schema named ${kind}: one of ${Object.keys(SCHEMAS).join(', ')}`);
  const parsed = schema.safeParse(value);
  if (parsed.success) return [];
  return parsed.error.issues.map((issue) => {
    const at = issue.path.length === 0 ? '(the whole)' : issue.path.join('.');
    return `${at}: ${issue.message}`;
  });
}

/**
 * What a blind player cannot know, and so never writes in character: a
 * round's number, or the name of a world's files. A report whose words
 * hold one is refused as a leak.
 */
export const LEAKS = [/\bround\s*\d+/i, /\.sprout\b/i, /\.prose\b/i, /\bsprout\.json\b/i];

/** Every place a playtest report's words name what a blind player cannot know; empty where none do. */
export function leaksIn(report) {
  const found = [];
  const walk = (value, path) => {
    if (typeof value === 'string') {
      for (const leak of LEAKS) if (leak.test(value)) found.push(`${path.join('.')}: names ${leak.source}`);
    } else if (Array.isArray(value)) value.forEach((one, i) => walk(one, [...path, i]));
    else if (value !== null && typeof value === 'object') {
      for (const [key, one] of Object.entries(value)) walk(one, [...path, key]);
    }
  };
  walk(report, []);
  return found;
}
