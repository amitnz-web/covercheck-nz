# Cover Check NZ

Plain-English insurance guides, real New Zealand numbers and three free calculators — an organic-search
information site that introduces readers to a licensed financial adviser when they want actual advice.

**Live:** https://insurance.amit.marketing — GitHub Pages, `gh-pages` branch.

## Commands

```bash
node build.mjs      # generate dist/
node verify.mjs     # compliance + link + SEO lint (run after build)
node serve.mjs      # local preview on :4321
npm run assets      # re-download photos and fonts (one-off)
```

Deploying to a subdirectory (GitHub Pages project site):

```bash
BASE_PATH=covercheck-nz SITE_ORIGIN=https://amitnz-web.github.io node build.mjs
```

Pass `BASE_PATH` **without** a leading slash — Git Bash on Windows rewrites `/x` into a Windows path.

## Structure

- `data/site.mjs` — brand, nav, and the `ADVISER` block. **Every CTA, phone number and UTM stamp comes from here.**
- `data/images.mjs` — photo manifest with credits; `tools/fetch-photos.mjs` downloads them locally.
- `data/pages-*.mjs`, `data/tools.mjs` — page content. `data/pages.mjs` assembles and de-duplicates slugs.
- `lib/components.mjs` — shared render helpers and the standard article shell.
- `build.mjs` — head/schema/chrome/layout and the build loop.
- `verify.mjs` — the deploy gate.

## The rule that matters

This site publishes **general information only**. Recommending a specific product or insurer for someone's
situation is *regulated financial advice* in New Zealand and requires an FMA licence, which this site does not
have. `verify.mjs` fails the build on advice phrasing, a missing disclaimer, an un-stamped adviser link, a
hard-coded phone number in copy, broken internal links, missing alt text or schema, more than one `<h1>`, or an
orphan page.

**Do not weaken those checks to ship a page — rewrite the page.**

See `../PLAN.md` for strategy, positioning and open blockers.
