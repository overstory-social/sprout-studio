#!/usr/bin/env node
// Sprout at a pinned commit, installed from tarballs built here rather than from npm.
//
// `sprout.pin.json` names a repository and a full commit sha. `install` checks
// that commit out into `.sprout/src`, builds it, packs every publishable
// package into `.sprout/packs/<name>.tgz` (stable names, so package.json's
// `file:` dependencies never change), and runs `npm install`. `bump [ref]`
// resolves a ref (default `main`) to a sha, writes it to the pin, and
// installs. A pack stamped with the pinned commit is reused as it is.
//
// SPROUT_SRC=<path> fetches from a local Sprout checkout instead of the
// repository in the pin, so an unpushed commit can be tried; the pin keeps the
// sha only, and a commit that is not on GitHub will not install anywhere else.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pinFile = join(root, 'sprout.pin.json');
const src = join(root, '.sprout', 'src');
const packs = join(root, '.sprout', 'packs');
const stamp = join(packs, 'COMMIT');

// The workspaces that publish, and the file each one's tarball is renamed to.
const PACKAGES = {
  sprout: 'sprout',
  player: 'sprout-player',
  repl: 'sprout-repl',
  server: 'sprout-server',
  tui: 'sprout-tui',
  cli: 'sprout-cli',
  'editors/language-server': 'sprout-language-server',
};

const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { stdio: 'inherit', ...opts });
const read = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { encoding: 'utf8', ...opts }).trim();
const say = (words) => console.log(`sprout: ${words}`);

const readPin = () => JSON.parse(readFileSync(pinFile, 'utf8'));
const origin = (pin) => process.env.SPROUT_SRC ? resolve(process.env.SPROUT_SRC) : pin.repository;

/** Clones on first use, then fetches `ref` from the origin and leaves it as FETCH_HEAD. */
function fetchRef(pin, ref) {
  if (!existsSync(join(src, '.git'))) {
    mkdirSync(src, { recursive: true });
    run('git', ['init', '--quiet', src]);
  }
  run('git', ['-C', src, 'fetch', '--quiet', origin(pin), ref]);
  return read('git', ['-C', src, 'rev-parse', 'FETCH_HEAD']);
}

function build(pin) {
  const commit = pin.commit;
  if (existsSync(stamp) && readFileSync(stamp, 'utf8').trim() === commit) {
    say(`packs at ${commit.slice(0, 7)} already built`);
    return;
  }
  const fetched = fetchRef(pin, commit);
  if (fetched !== commit) throw new Error(`fetched ${fetched}, pinned ${commit}`);
  run('git', ['-C', src, 'checkout', '--quiet', '--force', '--detach', commit]);
  run('git', ['-C', src, 'clean', '--quiet', '-fdx', '-e', 'node_modules']);
  say(`building ${commit.slice(0, 7)}`);
  run('npm', ['ci', '--no-audit', '--no-fund', '--loglevel=error'], { cwd: src });
  run('npm', ['run', 'build', '--silent'], { cwd: src, stdio: ['ignore', 'ignore', 'inherit'] });
  rmSync(packs, { recursive: true, force: true });
  mkdirSync(packs, { recursive: true });
  const workspaces = Object.keys(PACKAGES).flatMap((w) => ['-w', w]);
  const packed = JSON.parse(
    read('npm', ['pack', '--json', '--silent', ...workspaces, '--pack-destination', packs], { cwd: src }),
  );
  for (const { name, filename } of packed) {
    const short = name.replace(/^@overstory\//, '');
    if (!Object.values(PACKAGES).includes(short)) throw new Error(`packed an unexpected package ${name}`);
    renameSync(join(packs, filename.replace(/^@overstory\//, 'overstory-')), join(packs, `${short}.tgz`));
  }
  const missing = Object.values(PACKAGES).filter((p) => !existsSync(join(packs, `${p}.tgz`)));
  if (missing.length > 0) throw new Error(`no tarball for ${missing.join(', ')}`);
  writeFileSync(stamp, `${commit}\n`);
  say(`packed ${readdirSync(packs).filter((f) => f.endsWith('.tgz')).length} packages`);
}

function install() {
  const pin = readPin();
  if (!/^[0-9a-f]{40}$/.test(pin.commit)) throw new Error('sprout.pin.json: commit must be a full 40-character sha');
  build(pin);
  // `npm install`, not `ci`: a new pin changes the tarballs' integrity in the lock.
  run('npm', ['install', '--no-audit', '--no-fund', '--loglevel=error'], { cwd: root });
  say(`installed ${pin.commit.slice(0, 7)} (${read('git', ['-C', src, 'log', '-1', '--format=%s', pin.commit])})`);
}

function bump(ref = 'main') {
  const pin = readPin();
  const commit = fetchRef(pin, ref);
  if (commit === pin.commit) say(`already pinned at ${ref} (${commit.slice(0, 7)})`);
  else {
    const range = existsSync(stamp) ? `${pin.commit.slice(0, 7)} → ` : '';
    writeFileSync(pinFile, `${JSON.stringify({ ...pin, commit }, null, 2)}\n`);
    say(`pinned ${range}${commit.slice(0, 7)}`);
  }
  install();
}

const [command = 'install', ...rest] = process.argv.slice(2);
try {
  if (command === 'install') install();
  else if (command === 'bump') bump(...rest);
  else {
    console.error('usage: node scripts/sprout.mjs install | bump [ref]');
    process.exit(2);
  }
} catch (error) {
  console.error(`sprout: ${error.message}`);
  process.exit(1);
}
