#!/usr/bin/env node
// The studio's published worlds as a site for GitHub Pages: what
// `.github/workflows/publish-worlds.yml` runs, and what a person runs to
// try it (docs/publishing.md).
//
//   node scripts/publish.mjs <site> [--public-key file] [--base-url url]
//
// The private key is read from SPROUT_INDEX_SIGNING_KEY, never from a file
// or an argument; it is written to a temporary file only for `sprout index`
// and removed after. Every cartridge the live index lists is carried into
// the new site, because a Pages deploy replaces the whole site and a save
// on a console is keyed to the build it was played on. A carried build is
// never replaced, and the run refuses rather than drop one it could not
// fetch.
import { execFileSync } from 'node:child_process';
import { createHash, createPublicKey, verify } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/** The studio's own folder, where its code and the pinned Sprout are. */
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
/** Where the list, the worlds and the public key are: the studio's folder, unless `STUDIO_ROOT` names another, as specs do. */
const ROOT = process.env.STUDIO_ROOT === undefined ? REPO : resolve(process.env.STUDIO_ROOT);
const SPROUT = join(REPO, 'node_modules', '.bin', 'sprout');

/** Where the site is served, and so where every cartridge's address begins. */
export const BASE_URL = 'https://overstory-social.github.io/sprout-studio/worlds/';
/** The environment variable that holds the private key. */
export const KEY_VARIABLE = 'SPROUT_INDEX_SIGNING_KEY';

const CARTRIDGE = '.sproutworld';
/** A published cartridge's name: the app's stem for its title, then the first eight digits of its bundle hash. */
const PUBLISHED_NAME = /^[a-z0-9-]{1,24}-([0-9a-f]{8})\.sproutworld$/;
const HEX64 = /^[0-9a-f]{64}$/;
const SPKI_PREFIX = Buffer.from('302a300506032b6570032100', 'hex');

const builds = (n) => (n === 1 ? '1 build' : `${n} builds`);
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** The worlds `published.json` lists, each as its folder under `worlds/`. */
export function publishedWorlds(root = ROOT) {
  const file = join(root, 'published.json');
  let list;
  try {
    list = JSON.parse(readFileSync(file, 'utf8'));
  } catch {
    throw new Error(`${file} cannot be read as JSON: it lists the published worlds, as {"worlds": [{"world": "<name>"}]}.`);
  }
  const worlds = list?.worlds;
  if (!Array.isArray(worlds) || worlds.length === 0)
    throw new Error(`${file} should list at least one world, as {"worlds": [{"world": "<name>"}]}.`);
  return worlds.map((entry, at) => {
    const keys = entry !== null && typeof entry === 'object' ? Object.keys(entry) : [];
    if (keys.length !== 1 || keys[0] !== 'world' || typeof entry.world !== 'string' || !/^[a-z0-9_]+$/.test(entry.world))
      throw new Error(`${file}: worlds[${at}] should be {"world": "<name>"}, the name of a folder under worlds/; a world's title is its manifest's.`);
    const dir = join(root, 'worlds', entry.world, 'world');
    if (!existsSync(join(dir, 'sprout.json'))) throw new Error(`${file}: worlds/${entry.world}/world has no sprout.json.`);
    return { world: entry.world, dir };
  });
}

/** The canonical text the player verifies a signature over (sprout's index.schema.json). */
export function canonicalText(value) {
  if (typeof value === 'string') return JSON.stringify(value);
  if (Number.isInteger(value)) return String(value);
  if (Array.isArray(value)) return `[${value.map(canonicalText).join(',')}]`;
  if (value !== null && typeof value === 'object')
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalText(value[key])}`).join(',')}}`;
  throw new Error(`${String(value)} has no canonical text.`);
}

/** Whether `index` is signed by the public key `publicKey` (64 hexadecimal digits), as the player checks it. */
export function isSigned(index, publicKey) {
  if (typeof index?.signed !== 'string' || !/^[0-9a-f]{128}$/.test(index.signed)) return false;
  try {
    const key = createPublicKey({ key: Buffer.concat([SPKI_PREFIX, Buffer.from(publicKey, 'hex')]), format: 'der', type: 'spki' });
    return verify(null, Buffer.from(canonicalText(index.worlds)), key, Buffer.from(index.signed, 'hex'));
  } catch {
    return false;
  }
}

/** The public key in `file`, 64 lowercase hexadecimal digits. */
export function readPublicKey(file) {
  if (!existsSync(file))
    throw new Error(`${file} is not there: the publisher's public key is committed as publisher.pub, the half \`sprout keygen\` writes beside the private key.`);
  const key = readFileSync(file, 'utf8').trim();
  if (!HEX64.test(key)) throw new Error(`${file} should hold 64 lowercase hexadecimal digits, the public key \`sprout keygen\` wrote.`);
  return key;
}

/** The private key from the environment, checked for its shape and never printed. */
export function privateKeyFromEnvironment(env = process.env) {
  const key = (env[KEY_VARIABLE] ?? '').trim();
  if (key === '')
    throw new Error(`${KEY_VARIABLE} is not set: it holds the publisher's private key, the 64 hexadecimal digits of the .key file \`sprout keygen\` wrote; in GitHub it is an Actions secret of that name.`);
  if (!HEX64.test(key)) throw new Error(`${KEY_VARIABLE} should be 64 lowercase hexadecimal digits, the whole of the .key file \`sprout keygen\` wrote.`);
  return key;
}

/**
 * The problems with the site's index, read as the player reads it: its
 * signature by `publicKey`, and each world's file in the folder with the
 * listed size and SHA-256, at an address under `baseUrl` named for its hash.
 */
export function indexProblems(worldsDir, publicKey, baseUrl) {
  const problems = [];
  const index = JSON.parse(readFileSync(join(worldsDir, 'index.json'), 'utf8'));
  if (!isSigned(index, publicKey)) problems.push('index.json is not signed by the public key');
  const listed = new Set();
  for (const world of index.worlds ?? []) {
    const name = decodeURIComponent(String(world.url).slice(baseUrl.length));
    const match = PUBLISHED_NAME.exec(name);
    if (!String(world.url).startsWith(baseUrl) || match === null) {
      problems.push(`${world.url} is not a cartridge under ${baseUrl}`);
      continue;
    }
    if (match[1] !== String(world.hash).slice(0, 8)) problems.push(`${name} is not named for its bundle hash ${world.hash}`);
    listed.add(name);
    const file = join(worldsDir, name);
    if (!existsSync(file)) {
      problems.push(`${name} is listed and not in the site`);
      continue;
    }
    const bytes = readFileSync(file);
    if (bytes.length !== world.bytes) problems.push(`${name} is ${bytes.length} bytes, and listed as ${world.bytes}`);
    if (sha256(bytes) !== world.sha256) problems.push(`${name}'s SHA-256 is not the one listed`);
  }
  for (const file of readdirSync(worldsDir).filter((f) => f.endsWith(CARTRIDGE)))
    if (!listed.has(file)) problems.push(`${file} is in the site and not listed`);
  return problems;
}

/**
 * Fetches the live index and every cartridge it lists into `into`, each
 * checked against the size and SHA-256 listed, and returns their names. A
 * site not there yet (404) carries nothing; any other failure refuses.
 */
export async function carryForward(baseUrl, publicKey, into) {
  const indexUrl = `${baseUrl}index.json`;
  const answer = await fetch(indexUrl, { cache: 'no-store' });
  if (answer.status === 404) return [];
  if (!answer.ok) throw new Error(`${indexUrl} answered ${answer.status}: the builds it lists cannot be carried, so nothing is published.`);
  const index = await answer.json();
  if (!isSigned(index, publicKey))
    throw new Error(`${indexUrl} is not signed by publisher.pub, so the builds it lists are not carried and nothing is published. A new publisher key needs a decision about the builds already out (docs/publishing.md).`);
  const names = [];
  for (const world of index.worlds) {
    const name = decodeURIComponent(String(world.url).slice(baseUrl.length));
    if (!String(world.url).startsWith(baseUrl) || !PUBLISHED_NAME.test(name))
      throw new Error(`${indexUrl} lists ${world.url}, which is not a cartridge under ${baseUrl}.`);
    const got = await fetch(world.url, { cache: 'no-store' });
    if (!got.ok) throw new Error(`${world.url} answered ${got.status}: a published build cannot be carried, so nothing is published.`);
    const bytes = Buffer.from(await got.arrayBuffer());
    if (bytes.length !== world.bytes || sha256(bytes) !== world.sha256)
      throw new Error(`${world.url} did not arrive as listed (${bytes.length} bytes, ${world.bytes} listed, or another SHA-256): nothing is published.`);
    writeFileSync(join(into, name), bytes);
    names.push(name);
  }
  return names;
}

const escape = (text) =>
  String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** The page a person browsing the site sees: each build the index lists, and how to install one. */
export function sitePage(index) {
  const rows = index.worlds
    .map((world) => {
      const name = world.url.slice(world.url.lastIndexOf('/') + 1);
      const size = `${Math.max(1, Math.round(world.bytes / 1024))} KB`;
      return `      <li><a href="worlds/${escape(name)}">${escape(world.title)}</a> <span>by ${escape(world.author)}, version ${escape(world.version)}, build ${escape(world.hash.slice(0, 8))}, ${size}</span></li>`;
    })
    .join('\n');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sprout Worlds</title>
    <style>
      :root { color-scheme: light dark; --ink: #1d1d1b; --muted: #5f5f5a; --paper: #fbfaf6; --link: #2f5d3a; }
      @media (prefers-color-scheme: dark) { :root { --ink: #ecebe6; --muted: #a8a7a0; --paper: #161614; --link: #9cd3a8; } }
      body { margin: 0 auto; max-width: 40rem; padding: 2rem 16px; font: 1rem/1.5 system-ui, sans-serif; color: var(--ink); background: var(--paper); }
      a { color: var(--link); }
      li { margin: 0.5rem 0; }
      li span, p.note { color: var(--muted); }
    </style>
  </head>
  <body>
    <h1>Sprout worlds</h1>
    <p>Worlds from <a href="https://github.com/overstory-social/sprout-studio">sprout-studio</a>, each one <code>.sproutworld</code> file. The Sprout player on Playdate downloads them from its "more worlds…" screen; to install one by hand, copy it into <code>Data/social.overstory.sprout-player/worlds/</code> on the console's data disk.</p>
    <ul>
${rows}
    </ul>
    <p class="note">Every build stays here, so a game saved on one keeps its world. The signed list the player reads is <a href="worlds/index.json">worlds/index.json</a>.</p>
  </body>
</html>
`;
}

/** Runs the pinned `sprout`, with the private key kept out of its environment. */
function sprout(args) {
  const env = { ...process.env };
  delete env[KEY_VARIABLE];
  return execFileSync(SPROUT, args, { encoding: 'utf8', env, stdio: ['ignore', 'pipe', 'pipe'] });
}

/**
 * Builds the site in `site`, which must be empty or absent: each listed
 * world tested and packed, the live builds carried, the signed index and
 * its cartridges under `worlds/`, and `index.html`.
 */
export async function publish({ site, publicKeyFile = join(ROOT, 'publisher.pub'), baseUrl = BASE_URL, env = process.env, log = console.log }) {
  if (!/^https?:\/\/[^/]+\/(.*\/)?$/.test(baseUrl)) throw new Error(`--base-url ${baseUrl} should be an http or https address ending in /.`);
  const privateKey = privateKeyFromEnvironment(env);
  const publicKey = readPublicKey(publicKeyFile);
  const worlds = publishedWorlds();
  if (existsSync(site) && readdirSync(site).length > 0) throw new Error(`${site} is not empty: name a new folder for the site.`);
  const worldsDir = join(site, 'worlds');
  const work = mkdtempSync(join(tmpdir(), 'studio-publish-'));
  try {
    const cartridges = join(work, 'cartridges');
    mkdirSync(cartridges);
    const carried = await carryForward(baseUrl, publicKey, cartridges);
    log(carried.length === 0 ? `publish: no live index at ${baseUrl}, so no earlier builds to carry` : `publish: carried ${builds(carried.length)} already published: ${carried.join(', ')}`);
    for (const { world, dir } of worlds) {
      try {
        sprout(['test', dir]);
      } catch (err) {
        throw new Error(`${world}'s tests fail, so nothing is published:\n${err.stdout ?? ''}${err.stderr ?? ''}`);
      }
      sprout(['pack', dir, '-o', join(cartridges, `${world}${CARTRIDGE}`)]);
      log(`publish: tested and packed ${world}`);
    }
    // `sprout index` refuses a key whose public half beside it is not its own, so a secret that is not publisher.pub's never signs.
    const keys = join(work, 'keys');
    mkdirSync(keys, { mode: 0o700 });
    writeFileSync(join(keys, 'publisher.key'), `${privateKey}\n`, { mode: 0o600 });
    copyFileSync(publicKeyFile, join(keys, 'publisher.pub'));
    try {
      log(sprout(['index', cartridges, '--base-url', baseUrl, '--key', join(keys, 'publisher.key'), '-o', join(worldsDir, 'index.json')]).trim());
    } finally {
      rmSync(keys, { recursive: true, force: true });
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
  const problems = indexProblems(worldsDir, publicKey, baseUrl);
  if (problems.length > 0) throw new Error(`the index the player would read is wrong:\n  ${problems.join('\n  ')}`);
  const index = JSON.parse(readFileSync(join(worldsDir, 'index.json'), 'utf8'));
  writeFileSync(join(site, 'index.html'), sitePage(index));
  log(`publish: ${site} holds ${builds(index.worlds.length)}, signed and checked as the player checks them`);
  return index;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const args = process.argv.slice(2);
  const flag = (name) => {
    const at = args.indexOf(name);
    if (at < 0) return undefined;
    const [, value] = args.splice(at, 2);
    if (value === undefined) throw new Error(`${name} wants a value after it.`);
    return value;
  };
  try {
    const publicKeyFile = flag('--public-key');
    const baseUrl = flag('--base-url');
    if (args.length !== 1) throw new Error('usage: node scripts/publish.mjs <site> [--public-key file] [--base-url url]');
    await publish({ site: resolve(args[0]), publicKeyFile: publicKeyFile && resolve(publicKeyFile), baseUrl });
  } catch (err) {
    console.error(`publish: ${err.message}`);
    process.exit(1);
  }
}
