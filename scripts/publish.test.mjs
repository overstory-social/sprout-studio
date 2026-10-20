import { strict as assert } from 'node:assert';
import { execFileSync } from 'node:child_process';
import { createPrivateKey, generateKeyPairSync, sign } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, before, describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const SPROUT = join(REPO, 'node_modules', '.bin', 'sprout');

// A scratch studio publishing one world, `shed`, as `sprout scaffold` writes it, with a throwaway key pair.
const root = mkdtempSync(join(tmpdir(), 'studio-publish-spec-'));
process.env.STUDIO_ROOT = root;
const shed = join(root, 'worlds', 'shed', 'world');
mkdirSync(dirname(shed), { recursive: true });
execFileSync(SPROUT, ['scaffold', 'world', shed, '--author', 'spec'], { stdio: 'ignore' });
writeFileSync(join(root, 'published.json'), JSON.stringify({ worlds: [{ world: 'shed' }] }));
execFileSync(SPROUT, ['keygen', join(root, 'publisher')], { stdio: 'ignore' });
execFileSync(SPROUT, ['keygen', join(root, 'other')], { stdio: 'ignore' });
const privateKey = readFileSync(join(root, 'publisher.key'), 'utf8').trim();
const otherKey = readFileSync(join(root, 'other.key'), 'utf8').trim();
const publicKey = readFileSync(join(root, 'publisher.pub'), 'utf8').trim();

const { canonicalText, indexProblems, isSigned, publish, publishedWorlds, sitePage } = await import('./publish.mjs');

// A stand-in for the live site: answers what `serving` holds, under /worlds/, and 404 for anything else.
let serving = null;
let status = null;
const server = createServer((req, res) => {
  const name = req.url.replace(/^\/worlds\//, '');
  const file = serving && join(serving, name);
  if (status !== null) res.writeHead(status).end();
  else if (file && req.url.startsWith('/worlds/') && existsSync(file) && statSync(file).isFile()) res.end(readFileSync(file));
  else res.writeHead(404).end();
});
let baseUrl;
before(async () => {
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  baseUrl = `http://127.0.0.1:${server.address().port}/worlds/`;
});
after(() => {
  server.close();
  rmSync(root, { recursive: true, force: true });
});

const quiet = () => {};
const env = { SPROUT_INDEX_SIGNING_KEY: privateKey };
const site = (name) => join(root, 'sites', name);
const publishTo = (name, more = {}) =>
  publish({ site: site(name), publicKeyFile: join(root, 'publisher.pub'), baseUrl, env, log: quiet, ...more });
const cartridges = (dir) => readdirSync(join(dir, 'worlds')).filter((f) => f.endsWith('.sproutworld')).sort();
const setVersion = (version) => {
  const file = join(shed, 'sprout.json');
  const manifest = JSON.parse(readFileSync(file, 'utf8'));
  writeFileSync(file, JSON.stringify({ ...manifest, version }, null, 2));
};

/** A live site in `dir` whose index lists `worlds` (with the first site's cartridges beside it), signed by the throwaway publisher key. */
const liveSite = (dir, worlds) => {
  mkdirSync(dir, { recursive: true });
  const key = createPrivateKey({ key: Buffer.concat([Buffer.from('302e020100300506032b657004220420', 'hex'), Buffer.from(privateKey, 'hex')]), format: 'der', type: 'pkcs8' });
  writeFileSync(join(dir, 'index.json'), JSON.stringify({ worlds, signed: sign(null, Buffer.from(canonicalText(worlds)), key).toString('hex') }));
  return dir;
};
const firstIndex = () => JSON.parse(readFileSync(join(site('first'), 'worlds', 'index.json'), 'utf8'));

describe('the signature the player checks', () => {
  it('is over the canonical text: keys in order, no spaces, integers in decimal', () => {
    assert.equal(canonicalText([{ b: 2, a: 'x"y' }]), '[{"a":"x\\"y","b":2}]');
    assert.throws(() => canonicalText([1.5]), /no canonical text/);
  });

  it('verifies a signature by the key and refuses one by another or over other worlds', () => {
    const { privateKey: key, publicKey: pub } = generateKeyPairSync('ed25519');
    const hex = pub.export({ format: 'der', type: 'spki' }).subarray(12).toString('hex');
    const worlds = [{ title: 'Shed', bytes: 3 }];
    const signed = sign(null, Buffer.from(canonicalText(worlds)), key).toString('hex');
    assert.equal(isSigned({ worlds, signed }, hex), true);
    assert.equal(isSigned({ worlds: [{ title: 'Shed', bytes: 4 }], signed }, hex), false);
    assert.equal(isSigned({ worlds, signed }, publicKey), false);
    assert.equal(isSigned({ worlds, signed: 'nope' }, hex), false);
  });
});

describe('published.json', () => {
  it('lists each world by its folder under worlds/', () => {
    assert.deepEqual(publishedWorlds(), [{ world: 'shed', dir: shed }]);
  });

  it('refuses a world with no manifest, an entry with more than its name, and an empty list', () => {
    const scratch = mkdtempSync(join(tmpdir(), 'studio-list-'));
    try {
      const listing = (worlds) => {
        writeFileSync(join(scratch, 'published.json'), JSON.stringify({ worlds }));
        return () => publishedWorlds(scratch);
      };
      assert.throws(listing([{ world: 'nowhere' }]), /worlds\/nowhere\/world has no sprout.json/);
      assert.throws(listing([{ world: 'shed', title: 'Shed' }]), /should be \{"world": "<name>"\}/);
      assert.throws(listing([]), /at least one world/);
    } finally {
      rmSync(scratch, { recursive: true, force: true });
    }
  });
});

describe('publish', () => {
  it('refuses with no key in the environment, before it builds anything', async () => {
    await assert.rejects(publishTo('no-key', { env: {} }), /SPROUT_INDEX_SIGNING_KEY is not set/);
    assert.equal(existsSync(site('no-key')), false);
  });

  it('refuses a key that is not the private half of publisher.pub, and never says the key', async () => {
    await assert.rejects(publishTo('wrong-key', { env: { SPROUT_INDEX_SIGNING_KEY: otherKey } }), (err) => {
      assert.match(err.message, /not the private half/);
      assert.equal(err.message.includes(otherKey), false);
      return true;
    });
  });

  it('refuses where publisher.pub is not committed', async () => {
    await assert.rejects(publishTo('no-pub', { publicKeyFile: join(root, 'absent.pub') }), /publisher.pub/);
  });

  it('publishes a first build where no site is live yet, signed and checked as the player reads it', async () => {
    serving = null;
    const index = await publishTo('first');
    assert.equal(index.worlds.length, 1);
    assert.equal(isSigned(index, publicKey), true);
    assert.deepEqual(indexProblems(join(site('first'), 'worlds'), publicKey, baseUrl), []);
    assert.match(cartridges(site('first'))[0], /^world-[0-9a-f]{8}\.sproutworld$/);
    assert.match(readFileSync(join(site('first'), 'index.html'), 'utf8'), /<a href="worlds\/world-[0-9a-f]{8}\.sproutworld">World<\/a>/);
    assert.equal(readdirSync(tmpdir()).some((f) => f.startsWith('studio-publish-') && existsSync(join(tmpdir(), f, 'keys'))), false);
  });

  it('carries every live build, byte for byte, beside a new one', async () => {
    serving = join(site('first'), 'worlds');
    setVersion('0.2.0');
    try {
      const index = await publishTo('second');
      const [first] = cartridges(site('first'));
      assert.equal(index.worlds.length, 2);
      assert.equal(cartridges(site('second')).includes(first), true);
      assert.deepEqual(readFileSync(join(site('second'), 'worlds', first)), readFileSync(join(serving, first)));
      assert.deepEqual(indexProblems(join(site('second'), 'worlds'), publicKey, baseUrl), []);
    } finally {
      setVersion('0.1.0');
    }
  });

  it('publishes an unchanged world as the build already live, not a second copy', async () => {
    serving = join(site('first'), 'worlds');
    const index = await publishTo('again');
    assert.deepEqual(cartridges(site('again')), cartridges(site('first')));
    assert.equal(index.worlds.length, 1);
  });

  it('refuses rather than drop a build when the live site cannot be read', async () => {
    serving = join(site('first'), 'worlds');
    status = 503;
    try {
      await assert.rejects(publishTo('unreachable'), /answered 503/);
    } finally {
      status = null;
    }
  });

  it('refuses a live build that does not arrive as its index lists it', async () => {
    const live = join(root, 'tampered');
    mkdirSync(live, { recursive: true });
    const index = JSON.parse(readFileSync(join(site('first'), 'worlds', 'index.json'), 'utf8'));
    const [name] = cartridges(site('first'));
    writeFileSync(join(live, 'index.json'), JSON.stringify(index));
    const bytes = readFileSync(join(site('first'), 'worlds', name));
    bytes[bytes.length - 1] ^= 1;
    writeFileSync(join(live, name), bytes);
    serving = live;
    await assert.rejects(publishTo('tampered'), /did not arrive as listed/);
  });

  it('refuses a live index another key signed', async () => {
    const live = join(root, 'foreign');
    mkdirSync(live, { recursive: true });
    const index = JSON.parse(readFileSync(join(site('first'), 'worlds', 'index.json'), 'utf8'));
    writeFileSync(join(live, 'index.json'), JSON.stringify({ ...index, signed: '0'.repeat(128) }));
    serving = live;
    await assert.rejects(publishTo('foreign'), /not signed by publisher.pub/);
  });

  it('refuses a live build the new index would publish under another name', async () => {
    const [world] = firstIndex().worlds;
    const [name] = cartridges(site('first'));
    const moved = `old-stem-${world.hash.slice(0, 8)}.sproutworld`;
    serving = liveSite(join(root, 'moved'), [{ ...world, url: `${baseUrl}${moved}` }]);
    writeFileSync(join(serving, moved), readFileSync(join(site('first'), 'worlds', name)));
    await assert.rejects(publishTo('moved'), new RegExp(`${moved} is published and the new index names it otherwise`));
  });

  for (const [what, url] of [
    ['a name that climbs out of the folder', () => `${baseUrl}..%2F..%2Fescaped-${'ab'.repeat(4)}.sproutworld`],
    ['an address under another base', () => `http://elsewhere.test/worlds/world-${'ab'.repeat(4)}.sproutworld`],
    ['an escape that does not decode', () => `${baseUrl}world-%E0%A4%A.sproutworld`],
  ]) {
    it(`refuses a signed live index listing ${what}, writing nothing`, async () => {
      const [world] = firstIndex().worlds;
      const dir = join(root, 'paths', String(what.length));
      serving = liveSite(dir, [{ ...world, url: url() }]);
      await assert.rejects(publishTo(`paths-${what.length}`), /is not a cartridge under/);
      assert.equal(existsSync(join(root, 'escaped-abababab.sproutworld')), false);
      assert.equal(existsSync(join(dirname(tmpdir()), 'escaped-abababab.sproutworld')), false);
    });
  }

  it('refuses a site folder that already holds something', async () => {
    serving = null;
    await assert.rejects(publishTo('first'), /is not empty/);
  });
});

describe('the site page', () => {
  it('lists each build by its title, its words escaped', () => {
    const page = sitePage({
      worlds: [{ title: 'Rats & <Mice>', author: 'Ann', version: '1', bytes: 2048, hash: 'ab'.repeat(32), url: `${baseUrl}rats-mice-abababab.sproutworld` }],
    });
    assert.match(page, /<a href="worlds\/rats-mice-abababab\.sproutworld">Rats &amp; &lt;Mice&gt;<\/a>/);
    assert.match(page, /build abababab, 2 KB/);
  });
});

describe('the index a run checks', () => {
  it('names a cartridge in the site that the index leaves out', () => {
    const dir = join(root, 'sites', 'extra');
    mkdirSync(join(dir, 'worlds'), { recursive: true });
    for (const file of readdirSync(join(site('first'), 'worlds'))) writeFileSync(join(dir, 'worlds', file), readFileSync(join(site('first'), 'worlds', file)));
    writeFileSync(join(dir, 'worlds', 'stray-00000000.sproutworld'), 'x');
    assert.deepEqual(indexProblems(join(dir, 'worlds'), publicKey, baseUrl), ['stray-00000000.sproutworld is in the site and not listed']);
  });
});
