import { ADVISER, NOT_ADVICE, adviserLink } from '../data/site.mjs';
import { img, credit } from '../data/images.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The conversion unit. Never hand-written in a page — always built here so the
 *  UTM stamp, the disclosure and the "who is Arron" line can never drift apart. */
export function adviserCard(page, placement, { heading, blurb, compact = false } = {}) {
  const href = adviserLink(page, placement);
  return `<aside class="adviser-card" data-reveal>
  <div class="adviser-who"><span class="dot"></span> ${esc(ADVISER.fullName)} · ${esc(ADVISER.role)} at ${esc(ADVISER.firm)} · ${esc(ADVISER.city)}</div>
  <h3>${esc(heading || 'Want this looked at properly?')}</h3>
  <p>${esc(
    blurb ||
      `${ADVISER.firstName} is a licensed financial adviser. He compares cover across New Zealand's insurers, tells you what you actually need, and there is no charge to talk to him.`
  )}</p>
  <div class="btn-row">
    <a class="btn btn-primary" href="${href}" rel="noopener">Talk to ${esc(ADVISER.firstName)}</a>
    ${compact ? '' : `<a class="btn btn-ghost" href="${ADVISER.phoneHref}">${esc(ADVISER.phone)}</a>`}
    ${compact ? '' : `<a class="btn btn-ghost" href="${ADVISER.instagram}" rel="noopener nofollow">${esc(ADVISER.instagramHandle)}</a>`}
  </div>
</aside>`;
}

export function answerBox(html, label = 'The short answer') {
  return `<div class="answer" data-reveal><p class="eyebrow">${esc(label)}</p>${html}</div>`;
}

export function figures(items) {
  return `<div class="figures" data-reveal>${items
    .map((f) => `<div class="figure"><b>${esc(f[0])}</b><span>${f[1]}</span></div>`)
    .join('')}</div>`;
}

export function table({ caption, head, rows, source }) {
  return `<div class="table-scroll" data-reveal><table>
  ${caption ? `<caption>${caption}</caption>` : ''}
  <thead><tr>${head.map((h, i) => `<th${i ? ' class="n"' : ''}>${h}</th>`).join('')}</tr></thead>
  <tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td${i ? ' class="n"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>
</table>${source ? `<p class="src-line">${source}</p>` : ''}</div>`;
}

export function faqBlock(faqs) {
  if (!faqs?.length) return '';
  return `<section class="mt5" data-reveal><h2>Common follow-up questions</h2>
  <div class="mt3">${faqs
    .map((f) => `<details class="faq"><summary>${esc(f.q)}</summary><div class="faq-body">${f.a}</div></details>`)
    .join('')}</div></section>`;
}

export function strip(photoKey, quote) {
  return `<div class="strip grain">${img(photoKey, { sizes: '100vw' })}
  ${quote ? `<div class="strip-quote"><p class="balance">${esc(quote)}</p></div>` : ''}</div>`;
}

export function relatedBlock(related) {
  if (!related?.length) return '';
  return `<section class="mt5" data-reveal><h2>Keep reading</h2>
  <div class="related-list mt3">${related
    .map(([href, label, note]) => `<a href="${href}">${esc(label)}${note ? `<span>${esc(note)}</span>` : ''}</a>`)
    .join('')}</div></section>`;
}

export function cardGrid(items, cols = 'g3') {
  return `<div class="grid ${cols}" data-reveal>${items
    .map(
      ([href, title, blurb]) => `<a class="card" href="${href}">
      <h3>${esc(title)}</h3>
      <p class="small dim mt2">${esc(blurb)}</p>
    </a>`
    )
    .join('')}</div>`;
}

/** Guide/cost/compare pages all share one shell: hero → answer → article with a
 *  sticky adviser rail → FAQ → related → CTA. Consistency is the point. */
export function articleShell(page) {
  const hero = page.hero || {};
  const photoKey = hero.photo || 'still-lake';
  return `
<section class="hero grain">
  <div class="hero-media">${img(photoKey, { sizes: '100vw', eager: true })}</div>
  <div class="hero-scrim"></div>
  <div class="wrap hero-in">
    <p class="eyebrow">${esc(hero.kicker || 'Guide')}</p>
    <h1 class="balance">${esc(page.h1 || page.title)}</h1>
    ${page.standfirst ? `<p class="lead">${page.standfirst}</p>` : ''}
  </div>
  <p class="hero-credit">${esc(credit(photoKey))}</p>
</section>

<div class="wrap section">
  <div class="with-rail">
    <article class="article-body">
      ${page.answer ? answerBox(page.answer) : ''}
      ${page.updated ? `<p class="small dim mt3">Last reviewed ${esc(page.updated)}</p>` : ''}
      ${page.body2 || ''}
      ${faqBlock(page.faqs)}
      ${relatedBlock(page.related)}
      <p class="disclaimer">${esc(NOT_ADVICE)}</p>
    </article>
    <div class="rail">
      ${adviserCard(page.slug, 'rail', { compact: true, heading: page.railHeading })}
    </div>
  </div>
</div>

<section class="section band-ink grain">
  <div class="wrap">
    ${adviserCard(page.slug, 'footer', { heading: page.ctaHeading, blurb: page.ctaBlurb })}
  </div>
</section>`;
}
