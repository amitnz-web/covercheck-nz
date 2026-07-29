import { CORE_PAGES } from './pages-core.mjs';
import { COVER_PAGES } from './pages-covers.mjs';
import { COST_PAGES } from './pages-costs.mjs';
import { COMPARE_PAGES } from './pages-compare.mjs';
import { GUIDE_PAGES } from './pages-guides.mjs';
import { TOOL_PAGES } from './tools.mjs';

/* Home first so it is index.html; the rest in the order a reader would meet them. */
export const PAGES = [
  ...CORE_PAGES.filter((p) => p.slug === 'index'),
  ...COVER_PAGES,
  ...COST_PAGES,
  ...COMPARE_PAGES,
  ...GUIDE_PAGES,
  ...TOOL_PAGES,
  ...CORE_PAGES.filter((p) => p.slug !== 'index'),
];

/* A duplicate slug silently overwrites a page, so fail loudly instead. */
const seen = new Set();
for (const p of PAGES) {
  if (seen.has(p.slug)) throw new Error(`Duplicate slug: ${p.slug}`);
  seen.add(p.slug);
}
