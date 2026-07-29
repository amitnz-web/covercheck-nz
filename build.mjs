import { mkdir, writeFile, readFile, cp, rm } from 'node:fs/promises';
import { SITE, ADVISER, NAV, FOOTER_LINKS } from './data/site.mjs';
import { PHOTOS } from './data/images.mjs';
import { esc } from './lib/components.mjs';
import { articleShell } from './lib/components.mjs';
import { PAGES } from './data/pages.mjs';

const DIST = new URL('./dist/', import.meta.url);

/**
 * Deploy-target config.
 *   BASE_PATH   — subdirectory the site is served from, e.g. "/covercheck-nz" on
 *                 GitHub Pages project sites. Empty for a root domain.
 *   SITE_ORIGIN — the origin canonical/og/sitemap URLs should point at.
 * Both default to a root deploy on the real domain, so a plain `node build.mjs`
 * still produces the production build.
 */
// Accepts "covercheck-nz" or "/covercheck-nz". Prefer passing it WITHOUT the
// leading slash: Git Bash on Windows rewrites a leading-slash env value into a
// Windows path (BASE_PATH=/x becomes C:/Program Files/Git/x).
const BASE_RAW = (process.env.BASE_PATH || '').trim().replace(/^\/+|\/+$/g, '');
const BASE = BASE_RAW ? '/' + BASE_RAW : '';
const ORIGIN = (process.env.SITE_ORIGIN || SITE.origin).replace(/\/$/, '');

/** Rewrite root-relative URLs so the page works from a subdirectory. */
function withBase(html) {
  if (!BASE) return html;
  return html
    // srcset first: its candidates are comma-separated, not a single attribute value.
    .replace(/srcset="([^"]+)"/g, (m, s) => `srcset="${s.replace(/(^|,\s*)\//g, `$1${BASE}/`)}"`)
    // `srcset="` does not match `src="` here because src must be followed by `="`.
    .replace(/(href|src)="\//g, `$1="${BASE}/`);
}

/* ------------------------------------------------------------------ head -- */
function jsonLd(page) {
  const url = ORIGIN + BASE + (page.slug === 'index' ? '/' : '/' + page.slug);
  const graph = [
    {
      '@type': 'WebSite',
      '@id': ORIGIN + BASE + '/#website',
      url: ORIGIN + BASE + '/',
      name: SITE.longName,
      description: SITE.description,
      inLanguage: 'en-NZ',
      publisher: { '@id': ORIGIN + BASE + '/#publisher' },
    },
    {
      '@type': 'Person',
      '@id': ORIGIN + BASE + '/#publisher',
      name: SITE.builtBy,
      url: SITE.builtByUrl,
    },
  ];

  if (page.slug !== 'index') {
    graph.push({
      '@type': page.kind === 'tool' ? 'WebApplication' : 'Article',
      '@id': url + '#main',
      headline: page.h1 || page.title,
      description: page.desc,
      url,
      inLanguage: 'en-NZ',
      dateModified: page.updated || SITE.updated,
      isPartOf: { '@id': ORIGIN + BASE + '/#website' },
      author: { '@id': ORIGIN + BASE + '/#publisher' },
      ...(page.kind === 'tool'
        ? { applicationCategory: 'FinanceApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'NZD' } }
        : {}),
    });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + BASE + '/' },
        { '@type': 'ListItem', position: 2, name: page.crumb || page.h1 || page.title, item: url },
      ],
    });
  }

  if (page.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
        },
      })),
    });
  }

  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

function head(page) {
  const url = ORIGIN + BASE + (page.slug === 'index' ? '/' : '/' + page.slug);
  const ogPhoto = PHOTOS[page.hero?.photo || 'aoraki'];
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${page.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1'}">
<meta property="og:type" content="${page.slug === 'index' ? 'website' : 'article'}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${esc(SITE.longName)}">
<meta property="og:locale" content="en_NZ">
<meta property="og:image" content="${ORIGIN + BASE}/assets/photos/${ogPhoto.file}-1400.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/covercheck.css">
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/fraunces-latin-1.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/poppins-latin-1.woff2" crossorigin>
<meta name="theme-color" content="#1B222B">
<script>document.documentElement.className+=' js'</script>
${jsonLd(page)}`;
}

/* --------------------------------------------------------------- chrome -- */
const MARK = `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8"/><path d="M16 6.5 8 10v6.4c0 4.7 3.2 8.4 8 9.6 4.8-1.2 8-4.9 8-9.6V10l-8-3.5Zm-1.1 15.1-4-4 1.9-1.9 2.1 2.1 5-5 1.9 1.9-6.9 6.9Z"/></svg>`;

function header(page) {
  return `<header class="site-header" id="hdr">
  <div class="wrap-full header-in">
    <a class="brand" href="/">${MARK}<span>Cover Check<span class="dim" style="font-weight:400"> NZ</span></span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <nav class="nav" id="nav">
      ${NAV.map((n) =>
        n.href === '/talk-to-arron'
          ? `<a class="btn btn-ink" href="${n.href}">${esc(n.label)}</a>`
          : `<a href="${n.href}"${'/' + page.slug === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`
      ).join('')}
    </nav>
  </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-cols">
      ${FOOTER_LINKS.map(
        (c) =>
          `<div><h4>${esc(c.title)}</h4><ul>${c.links.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>`
      ).join('')}
    </div>
    <div class="footer-base">
      <p class="footer-legal">
        <strong style="color:#F2F1EC">Cover Check NZ is an independent information site.</strong> It is not an insurer and not a
        financial advice provider. Everything here is general information about how insurance works in New Zealand — it is not
        regulated financial advice and it does not consider your circumstances. Product details, premiums and policy wordings
        change; always check the insurer's current policy document. When you are ready for advice about your own cover we
        introduce you to <a href="${ADVISER.instagram}" rel="noopener nofollow">${esc(ADVISER.fullName)}</a>, a licensed
        financial adviser at <a href="${ADVISER.firmUrl}" rel="noopener">${esc(ADVISER.firm)}</a>.
        We may benefit from that introduction — see <a href="/about">why this site exists</a>.
      </p>
      <p>Built by <a href="${SITE.builtByUrl}?utm_source=covercheck&amp;utm_medium=footer">${esc(SITE.builtBy)}</a><br>
      Updated ${esc(SITE.updated)} · <a href="/credits">Photo credits</a></p>
    </div>
  </div>
</footer>`;
}

const SCRIPT = `<script>
(function(){
  var h=document.getElementById('hdr');
  var onScroll=function(){ if(h) h.toggleAttribute('data-scrolled', window.scrollY>8); };
  addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var t=document.querySelector('.nav-toggle'), n=document.getElementById('nav');
  if(t&&n) t.addEventListener('click',function(){
    var open=n.toggleAttribute('data-open');
    t.setAttribute('aria-expanded',open?'true':'false');
  });

  var els=document.querySelectorAll('[data-reveal]');
  var showAll=function(){ els.forEach(function(e){e.classList.add('in');}); };
  if(!window.IntersectionObserver||matchMedia('(prefers-reduced-motion: reduce)').matches){
    showAll();
  } else {
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{rootMargin:'0px 0px -8% 0px',threshold:.05});
    els.forEach(function(e){io.observe(e);});
    // Failsafe: if the observer never fires (some embedded//non-painting webviews
    // never compute intersections) show everything rather than hide the page.
    setTimeout(showAll, 2500);
  }
})();
</script>`;

/* ---------------------------------------------------------------- layout -- */
function layout(page) {
  const showCrumbs = page.slug !== 'index';
  return `<!doctype html>
<html lang="en-NZ">
<head>
${head(page)}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(page)}
<main id="main">
${showCrumbs ? `<div class="wrap crumbs"><a href="/">Cover Check</a><span>›</span>${esc(page.crumb || page.h1 || page.title)}</div>` : ''}
${page.body || articleShell(page)}
</main>
${footer()}
${page.script || ''}
${SCRIPT}
</body>
</html>`;
}

/* ----------------------------------------------------------------- build -- */
await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });
await cp(new URL('./public/', import.meta.url), DIST, { recursive: true });

for (const page of PAGES) {
  const path = page.slug === 'index' ? 'index.html' : `${page.slug}.html`;
  await writeFile(new URL(path, DIST), withBase(layout(page)));
}

// The stylesheets carry root-relative URLs too (@import of the font sheet, and the
// font src() paths). Rewrite them for a subdirectory deploy as well.
if (BASE) {
  for (const css of ['assets/covercheck.css', 'assets/fonts.css']) {
    const p = new URL(css, DIST);
    const text = await readFile(p, 'utf8');
    await writeFile(p, text.replace(/url\((['"]?)\//g, `url($1${BASE}/`));
  }
  // GitHub Pages otherwise runs the output through Jekyll, which drops _-prefixed
  // files and can rewrite things we do not want touched.
  await writeFile(new URL('.nojekyll', DIST), '');
}

const urls = PAGES.filter((p) => !p.noindex)
  .map((p) => {
    const loc = ORIGIN + BASE + (p.slug === 'index' ? '/' : '/' + p.slug);
    const pri = p.slug === 'index' ? '1.0' : p.priority || '0.7';
    return `  <url><loc>${loc}</loc><lastmod>${p.updated || SITE.updated}</lastmod><priority>${pri}</priority></url>`;
  })
  .join('\n');

await writeFile(
  new URL('sitemap.xml', DIST),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
await writeFile(new URL('robots.txt', DIST), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN + BASE}/sitemap.xml\n`);

console.log(`Built ${PAGES.length} pages → dist/  (${PAGES.filter((p) => !p.noindex).length} indexable)`);
