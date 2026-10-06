#!/usr/bin/env node
// The playtester's one door into a world: an MCP server over stdio, the
// only tools the playtester agent has (.claude/agents/playtester.md). A
// run is opened by `round.mjs open`, which writes a ticket under a random
// door token: the world's folder, the seed, the turn cap, how far each
// turn moves time, and where the session is recorded. The playtester is
// handed the door and nothing else, so what it plays, and where its play
// is kept, stay the host's. Each door is one session and one visitor,
// played through @overstory/sprout-mcp's session exactly as `sprout mcp`
// plays it: the prose a person reads, a fault by its name, never a path.
// A door outlives this process: the client may run one process for every
// playtester and stop it when any one of them is done, so a door opened
// again resumes its session from its recording, with its visitor still in it.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { compileBundle, DEFAULT_BLESSED } from '@overstory/sprout/lang';
import { arrive, isPresent, leave, resumeSession, say } from '@overstory/sprout-mcp';
import { readWorld } from '@overstory/sprout-player';
import { z } from 'zod';

import { DOORS, pinned, ROOT, SERVERS } from './round.mjs';

/** What a visitor is told where the host, and not the world, failed them. */
const HOST_FAILED = 'Something went wrong outside the world, and that may not have happened.';
const NO_DOOR = 'That door opens on nothing. Use the door you were given.';

const warn = (words) => process.stderr.write(`playtest: ${words}\n`);

/** Each door opened this process, with the name it arrived as. */
const opened = new Map();

/** The session behind `door`, opened or resumed on first use from its ticket; null where there is no such door. */
function sessionAt(door) {
  const known = opened.get(door);
  if (known !== undefined) return known;
  if (!/^[a-z0-9]{8,}$/.test(door)) return null;
  let ticket;
  try {
    ticket = JSON.parse(readFileSync(join(DOORS, `${door}.json`), 'utf8'));
  } catch {
    return null;
  }
  const world = readWorld(join(ROOT, ticket.world));
  if (world.source === null) throw new Error(`${ticket.world}: its manifest does not read`);
  const { bundle } = compileBundle(world.source, { mode: 'publish', blessed: DEFAULT_BLESSED });
  if (bundle === null) throw new Error(`${ticket.world}: sprout check refuses it`);
  const session = resumeSession(
    bundle,
    {
      seed: ticket.seed,
      record: join(ROOT, ticket.record),
      ...(ticket.turnCap === undefined ? {} : { turnCap: ticket.turnCap }),
      ...(ticket.advancePerTurn === undefined ? {} : { advancePerTurn: ticket.advancePerTurn }),
    },
    warn,
  );
  // A resumed door's visitor is the one its recording left standing in the world.
  const arrived = session.recorded.filter((step) => 'arrive' in step).map((step) => step.arrive);
  const entry = { session, bound: arrived.findLast((name) => isPresent(session, name)) ?? null };
  opened.set(door, entry);
  return entry;
}

/** `answer` as a tool's result. */
const result = ({ text, refused }) => ({
  content: [{ type: 'text', text }],
  ...(refused ? { isError: true } : {}),
});

/** `call` over the door's session; a door that is none, or anything the host fails at, in the host's own words. */
function through(door, call) {
  try {
    const entry = sessionAt(door.trim());
    if (entry === null) return result({ text: NO_DOOR, refused: true });
    return result(call(entry));
  } catch (error) {
    warn(`a call failed: ${error instanceof Error ? error.message : String(error)}`);
    return result({ text: HOST_FAILED, refused: true });
  }
}

const server = new McpServer(
  { name: 'studio-play', version: '0.1.0' },
  {
    instructions:
      'You are a visitor in a place made of words. Arrive through the door you were given, with a name, ' +
      'then say what you do, one line at a time, as you would type it. Each call answers with what you read.',
  },
);
const door = z.string().describe('The door you were given.');

server.registerTool(
  'arrive',
  {
    title: 'Arrive',
    description: 'Come in through your door, under a name. Answers with what you see as you arrive.',
    inputSchema: { door, name: z.string().describe('The name you go by here.') },
  },
  ({ door: at, name }) =>
    through(at, (entry) => {
      if (entry.bound !== null) return { text: `You are ${entry.bound} here already.`, refused: true };
      const answer = arrive(entry.session, name);
      if (!answer.refused) entry.bound = name.trim();
      return answer;
    }),
);

server.registerTool(
  'say',
  {
    title: 'Say',
    description:
      'Do something, as one typed line: "look", "examine the lamp", "go north". Answers with what you ' +
      'read, including anything that happened around you since your last turn.',
    inputSchema: { door, line: z.string().describe('What you type.') },
  },
  ({ door: at, line }) =>
    through(at, (entry) =>
      entry.bound === null ? { text: 'Arrive first.', refused: true } : say(entry.session, entry.bound, line),
    ),
);

server.registerTool(
  'leave',
  {
    title: 'Leave',
    description: 'Leave the world. Answers with what you read as you go.',
    inputSchema: { door },
  },
  ({ door: at }) =>
    through(at, (entry) =>
      entry.bound === null ? { text: 'Arrive first.', refused: true } : leave(entry.session, entry.bound),
    ),
);

// Which process this is and which Sprout it loaded, so `round.mjs open` can stop it once the pin moves on.
const card = join(SERVERS, `${process.pid}.json`);
mkdirSync(SERVERS, { recursive: true });
writeFileSync(card, `${JSON.stringify({ pid: process.pid, pin: pinned() })}\n`);
process.on('exit', () => rmSync(card, { force: true }));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => process.exit(0));

await server.connect(new StdioServerTransport());
