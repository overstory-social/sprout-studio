import { strict as assert } from 'node:assert';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

// The door server on its own, over stdio as the playtester has it: what it
// offers, and what it says where a door or the host fails. A run played
// end to end through it is round.test.mjs's.

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const root = mkdtempSync(join(tmpdir(), 'studio-door-'));
mkdirSync(join(root, '.studio', 'doors'), { recursive: true });
execFileSync(join(REPO, 'node_modules', '.bin', 'sprout'), ['scaffold', 'world', join(root, 'worlds', 'shed', 'world'), '--author', 'spec'], {
  stdio: 'ignore',
});
const ticket = (door, fields) =>
  writeFileSync(join(root, '.studio', 'doors', `${door}.json`), JSON.stringify({ world: 'worlds/shed/world', seed: 0, ...fields }));
// A door to a world that is not there, and one whose recording cannot be written.
ticket('0badbadbadbad', { world: 'worlds/secret-place/world', record: 'worlds/secret-place/run.json' });
ticket('0norecordhere', { record: 'worlds/shed/nowhere/at/all/run.json' });

let stderr = '';
let client;
before(async () => {
  const transport = new StdioClientTransport({
    command: 'node',
    args: [join(REPO, 'scripts', 'playtest-mcp.mjs')],
    env: { ...process.env, STUDIO_ROOT: root },
    stderr: 'pipe',
  });
  transport.stderr.on('data', (chunk) => (stderr += chunk));
  client = new Client({ name: 'spec', version: '0' });
  await client.connect(transport);
});
after(() => client.close());

const call = async (name, args) => {
  const result = await client.callTool({ name, arguments: args });
  return { text: result.content[0].text, refused: result.isError === true };
};

describe('the door server', () => {
  it('offers arrive, say and leave, each taking the door, and describes itself in a player’s words', async () => {
    const { tools } = await client.listTools();
    assert.deepEqual(
      tools.map((tool) => [tool.name, Object.keys(tool.inputSchema.properties)]),
      [
        ['arrive', ['door', 'name']],
        ['say', ['door', 'line']],
        ['leave', ['door']],
      ],
    );
    assert.equal(/\.json|\.sprout|\b(worlds|round|seed|record|studio)\b/i.exec(JSON.stringify(tools) + client.getInstructions()), null);
  });

  it('opens nothing for a door that is none, or a token that could name a path', async () => {
    for (const door of ['nope', '../../etc/passwd', '0000000000000000']) {
      assert.deepEqual(await call('arrive', { door, name: 'Ada' }), {
        text: 'That door opens on nothing. Use the door you were given.',
        refused: true,
      });
    }
  });

  it('tells the player only the host’s sentence where the host fails, and the host why', async () => {
    const failed = { text: 'Something went wrong outside the world, and that may not have happened.', refused: true };
    assert.deepEqual(await call('arrive', { door: '0badbadbadbad', name: 'Ada' }), failed);
    assert.deepEqual(await call('arrive', { door: '0norecordhere', name: 'Ada' }), failed);
    await new Promise((resolve) => setTimeout(resolve, 100));
    assert.match(stderr, /playtest: a call failed: .*secret-place/);
    assert.match(stderr, /playtest: a call failed: .*ENOENT/);
  });
});
