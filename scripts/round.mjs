#!/usr/bin/env node
// A round's work on disk, for the clerk agent to run while the saved
// workflow (.claude/workflows/studio-round.js) orchestrates, since a
// workflow touches no files itself (docs/loop.md › One round). Every
// command prints one JSON object on stdout, and exits 1 where it refused.
//
//   status  <world>                          where the world's rounds stand
//   open    <world> <NN> <persona> <seed> [--turn-cap T] [--advance 30]
//                                            a playtest run: its id and its door
//   save    <world> <NN> <kind> [name]       an agent's output, from stdin, if valid
//   measure <world> <NN>                     `sprout play --report` on every run, and merged
//   verify  <world>                          `sprout check` and `sprout test` on the world
//   commit  <world> <NN> <what>              the round, as one commit
//
// A door is a random token naming a ticket in .studio/doors/: the run's
// world, seed, cap and the file it is recorded to. The playtester is given
// the door alone (scripts/playtest-mcp.mjs), so nothing it holds names the
// round, the run's file or the world's folder.
import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { leaksIn, PERSONAS, problemsIn } from '../schemas/index.mjs';

/** The studio's own folder, where its code and the pinned Sprout are. */
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
/** Where the worlds and the doors are: the studio's folder, unless `STUDIO_ROOT` names another, as specs do. */
export const ROOT = process.env.STUDIO_ROOT === undefined ? REPO : resolve(process.env.STUDIO_ROOT);
export const DOORS = join(ROOT, '.studio', 'doors');

/** A world's folder under worlds/, from its name; thrown where there is none by that name. */
function worldDir(world) {
  if (!/^[a-z0-9_-]+$/.test(world)) throw new Error(`${world}: a world's name is lowercase letters, digits, - and _`);
  return join('worlds', world);
}

/** A round's folder, as rounds/NN. */
function roundDir(world, round) {
  if (!/^\d{2}$/.test(round)) throw new Error(`${round}: a round is two digits, as 01`);
  return join(worldDir(world), 'rounds', round);
}

const jsonIn = (dir, sub) =>
  existsSync(join(ROOT, dir, sub))
    ? readdirSync(join(ROOT, dir, sub))
        .filter((file) => file.endsWith('.json'))
        .map((file) => file.slice(0, -'.json'.length))
        .sort()
    : [];

/** Where `world`'s rounds stand: what the world has, and each round's files. */
export function status(world) {
  const dir = worldDir(world);
  const has = (file) => existsSync(join(ROOT, dir, file));
  const rounds = existsSync(join(ROOT, dir, 'rounds'))
    ? readdirSync(join(ROOT, dir, 'rounds')).filter((one) => /^\d{2}$/.test(one)).sort()
    : [];
  return {
    world,
    brief: has('brief.md'),
    intent: has('intent.md'),
    playable: has('world/sprout.json'),
    rounds: rounds.map((round) => {
      const at = roundDir(world, round);
      const here = (file) => existsSync(join(ROOT, at, file));
      const read = (file) => (here(file) ? JSON.parse(readFileSync(join(ROOT, at, file), 'utf8')) : null);
      const synthesis = read('synthesis.json');
      const revision = read('revision.json');
      const merged = read('metrics/merged.json');
      const design = new Set(
        (synthesis?.points ?? []).filter((point) => point.category === 'design').map((point) => point.id),
      );
      return {
        round,
        figures: merged === null ? null : figures(merged),
        points: synthesis === null ? null : synthesis.points.length,
        acceptedDesign:
          revision === null
            ? null
            : revision.decisions.filter((one) => one.decision === 'accept' && design.has(one.answers)).length,
        runs: jsonIn(at, 'runs'),
        reports: jsonIn(at, 'reports'),
        metrics: here('metrics/merged.json'),
        pairwise: jsonIn(at, 'pairwise'),
        synthesis: here('synthesis.json'),
        steering: here('steering.json'),
        revision: here('revision.json'),
        committed: here('.committed'),
      };
    }),
  };
}

/** Open a playtest run: its ticket under a fresh door, and the run's id, which carries its persona and seed. */
export function open(world, round, persona, seed, { turnCap, advance } = {}) {
  if (!PERSONAS.includes(persona)) throw new Error(`${persona}: a persona is one of ${PERSONAS.join(', ')}`);
  if (!/^\d+$/.test(String(seed))) throw new Error(`${seed}: a seed is a whole number`);
  const run = `${persona}-${seed}`;
  const at = roundDir(world, round);
  mkdirSync(join(ROOT, at, 'runs'), { recursive: true });
  mkdirSync(DOORS, { recursive: true });
  const door = randomBytes(12).toString('hex');
  const ticket = {
    world: join(worldDir(world), 'world'),
    seed: Number(seed),
    record: join(at, 'runs', `${run}.json`),
    ...(turnCap === undefined ? {} : { turnCap: Number(turnCap) }),
    ...(advance === undefined ? {} : { advancePerTurn: Number(advance) }),
  };
  writeFileSync(join(DOORS, `${door}.json`), `${JSON.stringify(ticket, null, 2)}\n`);
  return { run, door };
}

/** Where an output of `kind` is kept in a round, and whether it takes a name. */
const KEPT = {
  'playtest-report': (at, name) => join(at, 'reports', `${name}.json`),
  'pairwise-verdict': (at, name) => join(at, 'pairwise', `${name}.json`),
  synthesis: (at) => join(at, 'synthesis.json'),
  'revision-plan': (at) => join(at, 'revision.json'),
  steering: (at) => join(at, 'steering.json'),
};

/** A comment as it is known across rounds: its id, its tab and its words together, since the id is only what the steward says it is. */
const commentKey = (comment) => JSON.stringify([comment.id, comment.tab, comment.words]);

/** Every comment an earlier round's steering already read. */
function readBefore(world, round) {
  const dir = join(ROOT, worldDir(world), 'rounds');
  const read = new Set();
  for (const earlier of existsSync(dir) ? readdirSync(dir) : []) {
    const file = join(dir, earlier, 'steering.json');
    if (earlier >= round || !existsSync(file)) continue;
    for (const comment of JSON.parse(readFileSync(file, 'utf8')).comments) read.add(commentKey(comment));
  }
  return read;
}

/** A round's steering as the author reads it: each new comment numbered S1, S2…, or why there is none. */
export function renderSteering(steering) {
  if (!steering.reached) return '# Steering\n\nThe steering doc could not be reached this round.\n';
  if (steering.comments.length === 0) return '# Steering\n\nNo steering this round.\n';
  const lines = ['# Steering', ''];
  steering.comments.forEach((comment, i) => {
    const on = comment.on === '' ? `on ${comment.tab}` : `on ${comment.tab}, at "${comment.on}"`;
    lines.push(`## S${i + 1} (${on})`, '', comment.words, '');
  });
  return `${lines.join('\n')}`;
}

/** A synthesis as people read it: synthesis.md beside synthesis.json. */
export function renderSynthesis(synthesis) {
  const lines = ['# Synthesis', '', `**Legibility:** ${synthesis.legibility.verdict}. ${synthesis.legibility.why}`, ''];
  for (const run of synthesis.legibility.runs) lines.push(`- ${run.run} (${run.matches}): ${run.understood}`);
  lines.push('', '## Points', '');
  for (const point of synthesis.points) {
    lines.push(
      `### ${point.id} · ${point.category} · ${point.severity} · ${point.consensus.n}/${point.consensus.of}`,
      '',
      point.claim,
      '',
      `**Recommendation:** ${point.recommendation}`,
      '',
      `Evidence: ${point.evidence.map((one) => `${one.run} turn ${one.turn}${one.quote ? ` ("${one.quote}")` : ''}`).join('; ')}`,
      '',
    );
  }
  lines.push('## Metrics', '', '| metric | before | after |', '| --- | --- | --- |');
  for (const one of synthesis.metrics) lines.push(`| ${one.metric} | ${one.before ?? '—'} | ${one.after} |`);
  return `${lines.join('\n')}\n`;
}

/** Keep `value` as a round's `kind`, where it is valid; the problems, worded for a re-ask, where it is not. */
export function save(world, round, kind, name, value) {
  const kept = KEPT[kind];
  if (kept === undefined) throw new Error(`${kind}: one of ${Object.keys(KEPT).join(', ')}`);
  const takesName = kind === 'playtest-report' || kind === 'pairwise-verdict';
  if (takesName && !/^[a-z0-9-]+$/.test(name ?? '')) throw new Error(`a ${kind} is saved under its run's id, as explorer-7`);
  const problems = [...problemsIn(kind, value), ...(kind === 'playtest-report' ? leaksIn(value) : [])];
  if (kind === 'playtest-report' && problems.length === 0 && `${value.persona}-${value.seed}` !== name) {
    problems.push(`persona and seed: ${value.persona}-${value.seed} is not the run ${name} it is saved as`);
  }
  if (problems.length > 0) return { ok: false, problems };
  const at = roundDir(world, round);
  const file = kept(at, name);
  // A steering keeps only what no earlier round read, so a comment steers once.
  const before = kind === 'steering' ? readBefore(world, round) : new Set();
  const keeping =
    kind === 'steering' ? { ...value, comments: value.comments.filter((one) => !before.has(commentKey(one))) } : value;
  mkdirSync(join(ROOT, dirname(file)), { recursive: true });
  // The page for people is written before the file that marks the step done, so a step
  // marked done always has its page.
  if (kind === 'synthesis') writeFileSync(join(ROOT, at, 'synthesis.md'), renderSynthesis(keeping));
  if (kind === 'steering') writeFileSync(join(ROOT, at, 'steering.md'), renderSteering(keeping));
  writeFileSync(join(ROOT, file), `${JSON.stringify(keeping, null, 2)}\n`);
  if (kind === 'steering' && keeping.doc !== null) {
    writeFileSync(join(ROOT, worldDir(world), 'steering.json'), `${JSON.stringify({ doc: keeping.doc }, null, 2)}\n`);
  }
  if (kind !== 'steering') return { ok: true, file };
  const dropped = value.comments.length - keeping.comments.length;
  return {
    ok: true,
    file,
    reached: keeping.reached,
    comments: keeping.comments.length,
    note: keeping.reached
      ? `steering: ${keeping.comments.length} new comment(s), ${dropped} already read in an earlier round`
      : 'steering: the doc could not be reached',
  };
}

/** The installed `sprout` command, from the pin. */
const SPROUT = join(REPO, 'node_modules', '.bin', 'sprout');

/** The figures a synthesis reports the deltas of, from a merged report. */
export function figures(report) {
  return {
    'reading.unreadRate': report.reading.unreadRate,
    'reading.refusedRate': report.reading.refusedRate,
    faults: report.faults.length,
    repetition: report.repetition.length,
    ...Object.fromEntries(
      Object.entries(report.reach).map(([what, reach]) => [`reach.${what}.never`, reach.never.length]),
    ),
  };
}

/** `sprout play --report` on every run of a round, then all together; the merged figures. */
export function measure(world, round) {
  const at = roundDir(world, round);
  const worldAt = join(ROOT, worldDir(world), 'world');
  const runs = jsonIn(at, 'runs');
  if (runs.length === 0) throw new Error(`${at} has no runs to measure`);
  mkdirSync(join(ROOT, at, 'metrics'), { recursive: true });
  for (const run of runs) {
    execFileSync(SPROUT, ['play', worldAt, join(ROOT, at, 'runs', `${run}.json`), '--report', join(ROOT, at, 'metrics', `${run}.json`)], {
      stdio: ['ignore', 'ignore', 'inherit'],
    });
  }
  const merged = join(ROOT, at, 'metrics', 'merged.json');
  try {
    execFileSync(SPROUT, ['test', worldAt, ...runs.map((run) => join(ROOT, at, 'runs', `${run}.json`)), '--report', merged], {
      stdio: ['ignore', 'ignore', 'inherit'],
    });
  } catch {
    // A recording that no longer plays as written is a failed test, and still reported.
  }
  return { runs, figures: figures(JSON.parse(readFileSync(merged, 'utf8'))) };
}

/** `sprout check` and `sprout test` on the world, as the author must leave it; what each said where one fails. */
export function verify(world) {
  const worldAt = join(ROOT, worldDir(world), 'world');
  const problems = [];
  for (const command of ['check', 'test']) {
    try {
      execFileSync(SPROUT, [command, worldAt], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (error) {
      problems.push(`sprout ${command}: ${String(error.stdout ?? '')}${String(error.stderr ?? '')}`.trim());
    }
  }
  return problems.length === 0 ? { ok: true } : { ok: false, problems };
}

/** Commit the round's files and the world as they stand, and mark the round committed. */
export function commit(world, round, what) {
  const at = roundDir(world, round);
  const marker = join(ROOT, at, '.committed');
  // The marker is part of the commit, and is taken back where the commit fails, so a round
  // is marked committed exactly when it is.
  writeFileSync(marker, '');
  try {
    execFileSync('git', ['add', worldDir(world)], { cwd: ROOT, stdio: ['ignore', 'ignore', 'pipe'] });
    execFileSync('git', ['commit', '-q', '-m', `${world}, round ${round}: ${what}`], { cwd: ROOT, stdio: ['ignore', 'ignore', 'pipe'] });
  } catch (error) {
    rmSync(marker, { force: true });
    execFileSync('git', ['reset', '-q', '--', marker], { cwd: ROOT, stdio: 'ignore' });
    const said = String(error.stderr ?? error.message).trim();
    return { ok: false, problems: [`git would not commit round ${round}: ${said}`] };
  }
  return { ok: true, committed: execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim() };
}

/** `--name value` flags, and the words before them. */
function argsOf(argv) {
  const words = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) flags[argv[i].slice(2)] = argv[++i];
    else words.push(argv[i]);
  }
  return { words, flags };
}

function main(argv) {
  const { words, flags } = argsOf(argv);
  const [command, world, round, ...rest] = words;
  switch (command) {
    case 'status':
      return status(world);
    case 'open':
      return open(world, round, rest[0], rest[1], { turnCap: flags['turn-cap'], advance: flags.advance });
    case 'save':
      return save(world, round, rest[0], rest[1], JSON.parse(readFileSync(0, 'utf8')));
    case 'measure':
      return measure(world, round);
    case 'verify':
      return verify(world);
    case 'commit':
      return commit(world, round, rest.join(' ') || 'played');
    default:
      throw new Error('usage: round.mjs status|open|save|measure|verify|commit <world> [NN] …');
  }
}

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const out = main(process.argv.slice(2));
    console.log(JSON.stringify(out));
    process.exit(out.ok === false ? 1 : 0);
  } catch (error) {
    console.log(JSON.stringify({ ok: false, problems: [error instanceof Error ? error.message : String(error)] }));
    process.exit(1);
  }
}
