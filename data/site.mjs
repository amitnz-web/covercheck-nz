export const SITE = {
  name: 'Cover Check',
  longName: 'Cover Check NZ',
  domain: 'cover.amit.marketing',
  origin: 'https://cover.amit.marketing',
  tagline: 'Insurance in New Zealand, explained without the sales pitch.',
  description:
    'Plain-English guides, real NZ numbers and free calculators for life, health, income protection and trauma cover. No email gate, no sales pitch.',
  locale: 'en-NZ',
  builtBy: 'Amit Sharma',
  builtByUrl: 'https://amit.marketing',
  updated: '2026-07-30',
};

/**
 * The adviser this site exists to introduce people to.
 * Everything user-facing reads from here — no page hard-codes a phone number or URL.
 * See verify.mjs: the build fails if a contact detail is hard-coded in page copy.
 */
export const ADVISER = {
  firstName: 'Arron',
  fullName: 'Arron Nettmann',
  role: 'Financial Adviser',
  firm: 'Buffer Insurance',
  firmUrl: 'https://www.bufferinsurance.co.nz',
  city: 'Auckland',
  serves: 'all of New Zealand',
  instagram: 'https://www.instagram.com/arron.buffer.nz/',
  instagramHandle: '@arron.buffer.nz',

  // Buffer's published, public contact points. Replace `directEmail`/`bookingUrl`
  // with Arron's own the moment he supplies them — see PLAN.md, blocker #1.
  phone: '0800 646 253',
  phoneHref: 'tel:0800646253',
  email: 'hello@bufferinsurance.co.nz',
  directEmail: null,   // ← Arron's own address, when he gives us one
  bookingUrl: null,    // ← Arron's calendar link, when he gives us one

  // Set to true only once Arron confirms his FSP number so we can publish it.
  fspNumber: null,
};

/** Where a CTA points, always UTM-stamped so Arron can see exactly what this site sent him. */
export function adviserLink(page, placement) {
  const base = ADVISER.bookingUrl || `${ADVISER.firmUrl}/contact`;
  const u = new URL(base);
  u.searchParams.set('utm_source', 'covercheck');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', page);
  u.searchParams.set('utm_content', placement);
  return u.toString();
}

export const NOT_ADVICE =
  'This page is general information about how insurance works in New Zealand. It is not regulated financial advice and it does not take your situation into account. For advice about your own cover, talk to a licensed financial adviser.';

/** Sitewide navigation. Keep to five — a sixth item measurably dilutes every other one. */
export const NAV = [
  { href: '/types-of-insurance', label: 'Types of cover' },
  { href: '/what-it-costs', label: 'What it costs' },
  { href: '/compare', label: 'Compare' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/talk-to-arron', label: 'Talk to Arron' },
];

export const FOOTER_LINKS = [
  {
    title: 'Types of cover',
    links: [
      ['/life-insurance-nz', 'Life insurance'],
      ['/health-insurance-nz', 'Health insurance'],
      ['/income-protection-nz', 'Income protection'],
      ['/trauma-insurance-nz', 'Trauma cover'],
      ['/mortgage-protection-nz', 'Mortgage protection'],
      ['/business-insurance-nz', 'Business & key person'],
    ],
  },
  {
    title: 'The numbers',
    links: [
      ['/what-it-costs', 'What cover costs in NZ'],
      ['/life-insurance-cost-nz', 'Life insurance cost by age'],
      ['/health-insurance-cost-nz', 'Health insurance cost by age'],
      ['/income-protection-cost-nz', 'Income protection cost'],
      ['/how-much-life-cover-do-i-need', 'How much cover calculator'],
    ],
  },
  {
    title: 'Work it out',
    links: [
      ['/what-acc-does-not-cover', 'What ACC does not cover'],
      ['/income-protection-vs-mortgage-protection', 'Income vs mortgage protection'],
      ['/trauma-vs-income-protection', 'Trauma vs income protection'],
      ['/pre-existing-conditions-nz', 'Pre-existing conditions'],
      ['/insurance-waiting-periods-nz', 'Waiting periods & stand-downs'],
      ['/adviser-vs-buying-direct', 'Adviser vs buying direct'],
    ],
  },
  {
    title: 'About',
    links: [
      ['/talk-to-arron', 'Talk to Arron'],
      ['/about', 'Why this site exists'],
      ['/how-we-write-this', 'How we write this'],
      ['/credits', 'Photo credits'],
    ],
  },
];
