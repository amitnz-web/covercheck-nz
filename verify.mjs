/**
 * Build lint. Runs against dist/ after build.mjs.
 * These are the rules that must never quietly rot: the compliance line on every
 * page, no advice language, no broken internal links, no unstamped CTAs.
 * Exits non-zero so a deploy fails rather than shipping a regression.
 */
import { readdir, readFile, access } from 'node:fs/promises';
import { PAGES } from './data/pages.mjs';
import { ADVISER } from './data/site.mjs';

const DIST = new URL('./dist/', import.meta.url);
// Match the build: on a subdirectory deploy every internal URL is prefixed, so
// strip the prefix before checking links and asset paths.
const BASE_RAW = (process.env.BASE_PATH || '').trim().replace(/^\/+|\/+$/g, '');
const BASE = BASE_RAW ? '/' + BASE_RAW : '';
const errors = [];
const warnings = [];
const fail = (slug, msg) => errors.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

const files = (await readdir(DIST)).filter((f) => f.endsWith('.html'));
const slugs = new Set(PAGES.map((p) => p.slug));

/* Phrases that would turn general information into regulated financial advice.
   See /how-we-write-this — this is a legal line, not a style preference. */
const ADVICE_PHRASES = [
  'you should buy',
  'we recommend you',
  'we recommend that you',
  'the best policy is',
  'the best insurer is',
  'you need to buy',
  'guaranteed return',
  'this is the right policy for you',
  'our advice is',
];

/* Every page must carry a plain-English "this is not advice" statement. The
   footer legal block covers the site; article pages carry their own too. */
const DISCLAIMER_MARKERS = ['not regulated financial advice', 'does not provide financial advice'];

for (const file of files) {
  const slug = file === 'index.html' ? 'index' : file.replace(/\.html$/, '');
  const raw = await readFile(new URL(file, DIST), 'utf8');
  const html = BASE ? raw.split(`"${BASE}/`).join('"/').split(`, ${BASE}/`).join(', /') : raw;
  // Collapse whitespace before phrase matching — source templates wrap lines, so
  // "not\n  regulated financial advice" must still match "not regulated financial advice".
  const lower = html.toLowerCase().replace(/\s+/g, ' ');
  const page = PAGES.find((p) => p.slug === slug);

  /* --- compliance ------------------------------------------------------ */
  if (!DISCLAIMER_MARKERS.some((m) => lower.includes(m))) {
    fail(slug, 'missing the "not regulated financial advice" statement');
  }
  for (const phrase of ADVICE_PHRASES) {
    if (lower.includes(phrase)) fail(slug, `contains advice language: "${phrase}"`);
  }

  /* --- adviser CTAs must be UTM-stamped so referrals are attributable --- */
  const firmLinks = [...html.matchAll(/href="(https:\/\/www\.bufferinsurance\.co\.nz[^"]*)"/g)].map((m) => m[1]);
  for (const link of firmLinks) {
    // The bare firm homepage link in the footer disclosure is deliberately unstamped.
    const isBareFooterLink = link === ADVISER.firmUrl;
    if (!isBareFooterLink && !link.includes('utm_source=covercheck')) {
      fail(slug, `adviser link is not UTM-stamped: ${link}`);
    }
  }

  /* --- contact details must come from ADVISER, never be typed into copy - */
  const bodyOnly = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
  const strippedOfHrefs = bodyOnly.replace(/href="[^"]*"/g, '');
  const phoneDigits = ADVISER.phone.replace(/\s/g, '');
  const otherPhone = /\b0800\s?\d{3}\s?\d{3}\b/g;
  for (const m of strippedOfHrefs.match(otherPhone) || []) {
    if (m.replace(/\s/g, '') !== phoneDigits) fail(slug, `hard-coded phone number in copy: ${m}`);
  }

  /* --- SEO ------------------------------------------------------------- */
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
  if (!title) fail(slug, 'no <title>');
  if (title.length > 65) warn(slug, `title is ${title.length} chars (>65 will truncate in Google)`);
  if (!desc) fail(slug, 'no meta description');
  else if (desc.length < 70 || desc.length > 165) warn(slug, `meta description is ${desc.length} chars (aim 70–165)`);
  if (!html.includes('<link rel="canonical"')) fail(slug, 'no canonical');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(slug, `has ${h1s} <h1> tags, expected exactly 1`);
  if (!html.includes('application/ld+json')) fail(slug, 'no structured data');

  /* --- internal links must resolve ------------------------------------- */
  for (const m of html.matchAll(/href="\/([a-z0-9-]*)"/g)) {
    const target = m[1];
    if (target === '') continue; // "/" is the home page
    if (target.startsWith('assets')) continue;
    if (!slugs.has(target)) fail(slug, `broken internal link: /${target}`);
  }

  /* --- images must exist and have alt text ----------------------------- */
  for (const m of html.matchAll(/<img[^>]*>/g)) {
    const tag = m[0];
    if (!/\salt="[^"]+"/.test(tag)) fail(slug, 'an <img> has no alt text');
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (src?.startsWith('/assets/')) {
      try {
        await access(new URL('.' + src, DIST));
      } catch {
        fail(slug, `missing image file: ${src}`);
      }
    }
  }

  /* --- calculators must ship their script ------------------------------ */
  if (page?.kind === 'tool' && !html.includes('function bind(')) {
    fail(slug, 'calculator page is missing its calculator script');
  }
}

/* --- every page must be reachable from somewhere ----------------------- */
const allRaw = (await Promise.all(files.map((f) => readFile(new URL(f, DIST), 'utf8')))).join('\n');
const allHtml = BASE ? allRaw.split(`"${BASE}/`).join('"/') : allRaw;
for (const p of PAGES) {
  if (p.slug === 'index') continue;
  if (!allHtml.includes(`href="/${p.slug}"`)) fail(p.slug, 'orphan page — nothing links to it');
}

/* --- report ------------------------------------------------------------ */
console.log(`Checked ${files.length} pages.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log('  ! ' + w);
}
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log('\n✓ All checks passed.');
