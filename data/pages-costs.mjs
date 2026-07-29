import { table, figures, strip, cardGrid } from '../lib/components.mjs';

const SRC =
  'Indicative NZ market ranges compiled July 2026 from published comparison data (MoneyHub, Policywise, Quashed, QuoteHub). These are ranges, not quotes — your own price depends on age, health, smoking status, occupation, cover amount and the insurer.';

const RANGE_NOTE = `<div class="note" data-reveal><b>Read these as ranges, not quotes</b>
  Nobody can price your cover from a table. What a table is good for is telling you whether the number in your head is in the
  right postcode — and whether the quote you have been given is unusual. Published NZ comparisons consistently find a gap of
  around <strong>30% between the cheapest and dearest quote for identical cover</strong>, which is the single best argument
  for not accepting the first number you see.</div>`;

export const COST_PAGES = [
  /* ------------------------------------------------------------------ hub -- */
  {
    slug: 'what-it-costs',
    kind: 'cost',
    priority: '0.9',
    title: 'What Insurance Costs in New Zealand (2026) — Real Ranges by Age',
    h1: 'What cover actually costs in New Zealand',
    desc:
      'Indicative 2026 premium ranges for life, health, income protection and trauma cover in NZ, by age — plus the four things that move your price most.',
    crumb: 'What it costs',
    hero: { photo: 'still-lake', kicker: 'The numbers' },
    standfirst:
      'Every insurance site says "it depends". It does — but the ranges are knowable, and knowing them is what stops you overpaying by a third.',
    answer: `<p>For a healthy non-smoking New Zealander, rough monthly starting points look like this:
      <strong>life cover</strong> from about $15–$22 at 30 for $500,000; <strong>health insurance</strong> from around
      $40–$70 at 30 rising steeply after 55; <strong>income protection</strong> commonly 1–3% of the annual income you are
      insuring; <strong>trauma cover</strong> sitting between life and income protection per dollar of benefit.</p>
      <p>The four things that move your number most: <strong>age</strong>, <strong>smoking</strong>,
      <strong>the excess or wait period you choose</strong>, and <strong>which insurer you apply to</strong>.</p>`,
    updated: '2026-07-30',
    body2: `
    ${RANGE_NOTE}

    <h2>Life cover</h2>
    ${table({
      caption: 'Life insurance, healthy non-smoker, indicative monthly premium',
      head: ['Age', 'Cover', 'Typical monthly'],
      rows: [
        ['30', '$500,000', '$15 – $22'],
        ['40', '$250,000 – $1m', '$23 – $79'],
        ['50', '$250,000 – $1m', '$52 – $195'],
      ],
      source: SRC,
    })}
    <p>Life cover is the cheapest protection per dollar in the market and the one where waiting costs the most, because
      premiums are set from your age at application. <a href="/life-insurance-cost-nz">Full life cost breakdown →</a></p>

    <h2>The four levers</h2>
    ${figures([
      ['Age', 'The dominant factor. Premiums accelerate hard after about 55.'],
      ['+50–100%', 'What smoking typically adds. Most insurers require 12 months smoke-free to reclassify.'],
      ['~30%', 'The usual gap between the cheapest and dearest quote for identical cover.'],
      ['Excess', 'On health cover, moving to a $2,000–$4,000 excess is the most under-used saving in the market.'],
    ])}

    ${strip('open-road', 'The price you are quoted is one insurer\'s opinion of you. It is not the market\'s.')}

    <h2>Where the money is usually being wasted</h2>
    <ol>
      <li><strong>A wait period that is too short.</strong> Paying for a 4-week income protection stand-down when you have
        three months of savings and leave is money burnt every single month.</li>
      <li><strong>A health excess that is too low.</strong> You are insuring the $800 event instead of the $50,000 one.</li>
      <li><strong>Stepped premiums held for decades.</strong> Cheap at 30, brutal at 58 — and the increases are why so many
        people cancel right before the years they are most likely to claim.</li>
      <li><strong>Never re-testing the market after a health change.</strong> Quitting smoking, losing weight, or resolving a
        condition can all move you to better terms, but only if someone re-applies for you.</li>
      <li><strong>Everyday/extras modules on health cover.</strong> For many households the dental and optical module returns
        roughly what it costs, minus the insurer's margin.</li>
    </ol>

    <h2>Cover by cover</h2>
    ${cardGrid([
      ['/life-insurance-cost-nz', 'Life insurance cost by age', 'What $250k, $500k and $1m cost at 25, 35, 45, 55 and 65.'],
      ['/health-insurance-cost-nz', 'Health insurance cost by age', 'Why it rises so sharply after 55, and the excess trick.'],
      ['/income-protection-cost-nz', 'Income protection cost', 'Priced as a percentage of income — and how the dials move it.'],
    ])}

    <h2>One thing a price table cannot tell you</h2>
    <p>Two policies at the same monthly premium can behave completely differently at claim time — the definitions of
      "cancer", "stroke" and "unable to work" are where the real product lives, and none of it appears in a price comparison.
      Cheapest is only meaningful once you have fixed what is being compared.</p>`,
    faqs: [
      {
        q: 'Why is the same cover so much cheaper from one insurer?',
        a: '<p>Insurers price for the customers they want. One will be competitive on a 35-year-old office worker and uncompetitive on a 52-year-old builder; another is the reverse. They also differ on how they underwrite specific health conditions. This is why the same person can get quotes 30% apart in the same week, and why the "cheapest insurer" is a person-by-person answer rather than a brand.</p>',
      },
      {
        q: 'Do premiums go up every year?',
        a: '<p>On stepped premiums, yes — they rise with your age, and the annual increases get steep in your 50s and 60s. On level premiums, the rate is fixed to a chosen age, so it does not step up with age (though insurers can still adjust rates across a whole product class). Which structure suits you depends mostly on how long you plan to hold the cover.</p>',
      },
      {
        q: 'Does using an adviser cost more?',
        a: '<p>Not usually. Advisers in New Zealand are generally paid commission by the insurer, and the premium is typically the same whether you buy direct or through an adviser. What changes is who does the comparing, the underwriting negotiation and the claim. See <a href="/adviser-vs-buying-direct">adviser vs buying direct</a>.</p>',
      },
    ],
    related: [
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/adviser-vs-buying-direct', 'Adviser vs buying direct', 'What actually differs'],
      ['/types-of-insurance', 'The six covers explained', 'Overview'],
    ],
  },

  /* ------------------------------------------------------------ life cost -- */
  {
    slug: 'life-insurance-cost-nz',
    kind: 'cost',
    priority: '0.9',
    title: 'How Much Does Life Insurance Cost in NZ? (2026 Premiums by Age)',
    h1: 'How much does life insurance cost in New Zealand?',
    desc:
      '2026 indicative life insurance premiums in NZ by age and cover amount, what smoking and level premiums do to the price, and how to sanity-check a quote.',
    crumb: 'Life insurance cost',
    hero: { photo: 'family-beach', kicker: 'The numbers' },
    standfirst:
      'The most searched insurance question in the country, and the one with the least useful answers online. Here is the range, and what actually decides where in it you land.',
    answer: `<p>In New Zealand, a healthy 30-year-old non-smoker can typically get <strong>$500,000 of life cover for about
      $15–$22 a month</strong>. At 40, $250,000 to $1 million commonly runs <strong>$23–$79 a month</strong>. At 50, the same
      band runs <strong>$52–$195 a month</strong>.</p>
      <p>Across the market as a whole, published NZ life insurance premiums span roughly
      <strong>$15.60 to $195 a month</strong> depending on age, gender, smoking status, cover amount, occupation and
      insurer.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: 'Indicative monthly life insurance premiums — healthy non-smoker, New Zealand, 2026',
      head: ['Age at application', 'Cover amount', 'Typical monthly premium'],
      rows: [
        ['30', '$500,000', '$15 – $22'],
        ['40', '$250,000', '~$23'],
        ['40', '$1,000,000', '~$79'],
        ['50', '$250,000', '~$52'],
        ['50', '$1,000,000', '~$195'],
      ],
      source: SRC,
    })}

    ${RANGE_NOTE}

    <h2>What moves your number</h2>

    <h3>Age — and why waiting is expensive</h3>
    <p>Life insurance is priced from your age when you apply, not your age now versus later in some abstract sense. A
      30-year-old who buys today locks in 30-year-old pricing as the base of their policy. The same person at 40 starts from
      a materially higher base and carries it for the rest of the policy's life. "I'll sort it next year" is the most
      expensive sentence in insurance.</p>

    <h3>Smoking — the single biggest controllable factor</h3>
    <p>Smokers typically pay <strong>50–100% more</strong> for the same cover. Most insurers will reclassify you as a
      non-smoker after 12 months smoke-free — which is a genuine, large, and entirely free premium reduction that almost
      nobody goes back and claims. If you quit more than a year ago and never told your insurer, that is a phone call worth
      making.</p>

    <h3>Stepped vs level premiums</h3>
    <p>This is where the "cost" question gets genuinely interesting, because the cheapest premium today and the cheapest
      policy over its lifetime are frequently different products.</p>
    ${table({
      caption: 'The shape of the two premium structures',
      head: ['', 'Stepped', 'Level'],
      rows: [
        ['Cost at 30', 'Lowest', 'Higher'],
        ['Cost at 45', 'Higher', 'Same as at 30'],
        ['Cost at 60', 'Much higher', 'Same as at 30'],
        ['Total paid if held 30 years', 'Usually more', 'Usually less'],
        ['Best if', 'You need cover for a defined short period', 'You intend to hold cover long-term'],
      ],
    })}
    <p>The trap with stepped is behavioural rather than mathematical: the increases arrive in your 50s, they arrive
      annually, and people cancel — which means the policy is dropped at exactly the age it was most likely to be needed.</p>

    ${strip('villas', 'The cheapest premium today and the cheapest policy over 30 years are rarely the same product.')}

    <h2>How to sanity-check a quote you have been given</h2>
    <ol>
      <li>Is it stepped or level? If the quote does not say, it is stepped.</li>
      <li>Is the cover amount built from your actual mortgage and dependants, or is it a round number someone suggested?
        Run it through the <a href="/how-much-life-cover-do-i-need">cover calculator</a>.</li>
      <li>Is trauma cover bundled into it as accelerated cover? If so, a trauma claim will reduce the life payout.</li>
      <li>Has more than one insurer been approached? Given the ~30% spread in the market, a single quote is a data point,
        not a comparison.</li>
      <li>Are there loadings or exclusions attached, and do you understand why?</li>
    </ol>

    <h2>What $500,000 actually buys</h2>
    <p>It is worth translating the sum insured into something concrete. On a $780,000 Auckland mortgage, $500,000 does not
      clear the debt — it takes the repayments from unmanageable to manageable. On a $300,000 provincial mortgage, the same
      sum clears the house outright and leaves a buffer. The same number is a completely different outcome depending on the
      household, which is exactly why "how much does it cost" is the second question and "how much do I need" is the
      first.</p>`,
    faqs: [
      {
        q: 'How much does a $100,000 life insurance policy cost in NZ?',
        a: '<p>At the low end of the market a $100,000 policy for a young healthy non-smoker can be a very small monthly amount — often under $10. It is worth asking, though, whether $100,000 solves your actual problem. For most households with a mortgage it covers the funeral and some breathing room rather than the debt, so it is better understood as a starting layer than a plan.</p>',
      },
      {
        q: 'Is life insurance cheaper for women in New Zealand?',
        a: '<p>Generally yes, at most ages, reflecting longer average life expectancy. The gap is more visible on income protection and trauma cover than on life cover.</p>',
      },
      {
        q: 'Do premiums increase if my health gets worse?',
        a: '<p>Not on a guaranteed renewable policy — that is precisely what the guarantee is for. Once you are underwritten and on cover, the insurer cannot single you out for a rate increase or cancellation because you developed a condition. This is a strong argument for applying while you are well, and for not casually cancelling a policy you have held for years.</p>',
      },
      {
        q: 'Can I reduce my premium without cancelling?',
        a: '<p>Usually, yes — reduce the sum insured, lengthen a wait period, raise an excess, switch structure, or re-test the market if your health or smoking status has improved. Cancelling should be close to the last resort, because re-applying later means new underwriting at an older age.</p>',
      },
    ],
    related: [
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/life-insurance-nz', 'How life insurance works', 'Full guide'],
      ['/what-it-costs', 'What every cover costs', 'All six'],
      ['/adviser-vs-buying-direct', 'Why quotes differ 30%', 'Adviser vs direct'],
    ],
  },

  /* ---------------------------------------------------------- health cost -- */
  {
    slug: 'health-insurance-cost-nz',
    kind: 'cost',
    priority: '0.8',
    title: 'How Much Does Health Insurance Cost in NZ? (2026, by Age)',
    h1: 'How much does health insurance cost in New Zealand?',
    desc:
      'What NZ health insurance costs by age in 2026, why premiums climb steeply after 55, and how the excess you choose changes the price more than the insurer you choose.',
    crumb: 'Health insurance cost',
    hero: { photo: 'wellington', kicker: 'The numbers' },
    standfirst:
      'Health cover is the one premium that genuinely does get uncomfortable with age — and the one where a single setting can cut the price hardest.',
    answer: `<p>Health insurance premiums in New Zealand rise with age more sharply than any other cover. A young adult on a
      base hospital plan is usually paying a modest monthly amount; the same plan in your late 60s can cost several times
      that. The two settings that change your price most are the <strong>excess</strong> and whether you add
      <strong>everyday/extras modules</strong>.</p>
      <p>Because health cover is <em>annually renewable</em> rather than locked in, the premium you are quoted is a starting
      point that will move every year — which makes the excess decision compound.</p>`,
    updated: '2026-07-30',
    body2: `
    <div class="note" data-reveal><b>Why we are not publishing a precise price grid here</b>
      Health premiums vary by insurer, plan, region, excess and module combination to a degree that a single table would
      mislead more than it helps — and the insurers republish their rates annually. What we can give you honestly is the
      <em>shape</em> of the cost and the levers that move it. For an actual number, get quotes across insurers rather than
      one.</div>

    <h2>The shape of the cost</h2>
    ${figures([
      ['Rises with age', 'Steeply after about 55, and again after 65'],
      ['Annually renewable', 'Unlike life cover, the rate is not locked in'],
      ['Excess', 'The biggest single lever you control'],
      ['~60% / ~15%', 'Southern Cross and nib shares of the NZ market'],
    ])}

    <h2>The excess decision</h2>
    <p>This is the most under-used adjustment in New Zealand health insurance. Moving from a $250 excess to $2,000 or $4,000
      can cut a premium substantially, every year, for as long as you hold the policy.</p>
    <p>The logic is worth stating plainly. Insurance is for the loss you <em>cannot</em> absorb. If a $2,000 bill would be
      unpleasant but survivable, paying a higher premium every month for forty years to avoid it is a bad trade. What you
      genuinely need protection against is the $60,000 surgery and the non-funded cancer drug — and a high excess does not
      touch either of those.</p>
    <div class="good-note" data-reveal><b>A reasonable rule of thumb</b>
      Set the excess at the largest amount you could pay tomorrow without borrowing. For a great many households that is a
      long way above $250.</div>

    ${strip('fern', 'Insure the loss you cannot absorb. Pay for the one you can.')}

    <h2>Where the money actually is</h2>
    <p>Not all of a health policy is equally valuable per dollar:</p>
    <ul>
      <li><strong>Surgical / hospital cover</strong> — the core. High value, this is the reason to hold the policy.</li>
      <li><strong>Non-Pharmac drug benefit</strong> — often $300,000–$500,000 on better plans. For certain diagnoses this is
        the single most valuable line in the document, and it is the part most likely to be missing from a cheap plan.</li>
      <li><strong>Specialist and diagnostics</strong> — high value, because it is what turns a six-month wait into a
        three-week one.</li>
      <li><strong>Everyday / extras (dental, optical, GP)</strong> — low value for most households. You are largely
        pre-paying predictable costs and giving the insurer a margin on them. Worth running the numbers on your own last two
        years of spending before adding it.</li>
    </ul>

    <h2>Why "just get it later" is more expensive here than anywhere</h2>
    <p>On life cover, waiting costs money. On health cover, waiting costs <em>coverage</em>. Every year that passes adds
      medical history, and pre-existing conditions get excluded — sometimes permanently, in the case of cardiovascular,
      cancer, back, hip and knee conditions with some insurers.</p>
    <p>The cruel arithmetic: the year you finally decide you want health insurance is usually the year something has started
      to worry you, which is the year that thing becomes uninsurable.
      <a href="/pre-existing-conditions-nz">More on pre-existing conditions →</a></p>

    <h2>What to do about rising premiums instead of cancelling</h2>
    <ol>
      <li>Raise the excess before you touch anything else.</li>
      <li>Drop the extras module, keep the hospital and drug cover.</li>
      <li>Ask about lower-cost plan variants with the same insurer — switching plans internally often preserves your
        existing cover for conditions that developed while you were insured, where switching insurers does not.</li>
      <li>Only consider changing insurer with someone checking, in writing, what cover you lose in the move.</li>
    </ol>`,
    faqs: [
      {
        q: 'Why does health insurance get so expensive after 60?',
        a: '<p>Because claims genuinely do. Health cover is annually renewable and priced to the risk of the age band you are in, and the likelihood of surgery, diagnostics and specialist care climbs sharply. Some insurers smooth this more than others, which is one of the few areas where the choice of insurer at 40 has consequences at 70.</p>',
      },
      {
        q: 'Is it cheaper through my employer?',
        a: '<p>Group schemes are frequently better value and sometimes come with reduced or waived underwriting, which can be very valuable if you have any medical history. The question to ask before relying on it is what happens when you leave — whether you can convert to a personal policy on the same terms, or whether you get underwritten fresh.</p>',
      },
      {
        q: 'Does health insurance cover cancer treatment in New Zealand?',
        a: '<p>Hospital plans generally cover surgical treatment, and better plans include a substantial benefit for cancer drugs that Pharmac does not fund — which is the part that matters most, because the public system funds a narrower list of modern cancer medicines than many comparable countries. Cover for a cancer that was pre-existing when you took the policy is a different question, and usually excluded.</p>',
      },
    ],
    related: [
      ['/health-insurance-nz', 'How health insurance works', 'Full guide'],
      ['/pre-existing-conditions-nz', 'Pre-existing conditions', 'What gets excluded'],
      ['/insurance-waiting-periods-nz', 'Waiting periods', 'When cover starts'],
      ['/what-it-costs', 'What every cover costs', 'All six'],
    ],
  },

  /* --------------------------------------------------- income protection cost -- */
  {
    slug: 'income-protection-cost-nz',
    kind: 'cost',
    priority: '0.8',
    title: 'How Much Does Income Protection Cost in NZ? (2026)',
    h1: 'How much does income protection cost?',
    desc:
      'What income protection costs in New Zealand, why it is priced as a percentage of income, and how the wait period and benefit period change the premium.',
    crumb: 'Income protection cost',
    hero: { photo: 'sheep-hills', kicker: 'The numbers' },
    standfirst:
      'Priced differently from every other cover on this site — and the only one where you can halve the premium without reducing the protection that matters.',
    answer: `<p>Income protection in New Zealand is commonly priced at roughly <strong>1% to 3% of the annual income you are
      insuring</strong>, though it can sit well outside that band. Someone insuring $80,000 of income might therefore see
      annual premiums somewhere in the region of $800 to $2,400 — with occupation, age, wait period and benefit period
      pushing it up or down substantially.</p>
      <p>Unusually, the two biggest price levers are settings you choose rather than facts about you.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Why occupation matters here more than anywhere</h2>
    <p>Life insurance mostly cares whether you are alive. Income protection cares whether you can work — so what you do for
      a living moves the price hard. Insurers band occupations roughly from desk-based professional through to manual and
      high-risk trades, and the premium difference across those bands for the same age and income can be several times
      over.</p>
    <p>It also affects the <em>definition</em> you can get. Professionals can more often obtain "own occupation" cover — it
      pays if you cannot do <em>your</em> job. Manual occupations are more often offered "any occupation" — it pays only if
      you cannot do any job you are reasonably suited to. That difference is worth more than the price difference.</p>

    <h2>The two levers you control</h2>
    ${table({
      caption: 'How the settings move the premium — directional, not a quote',
      head: ['Setting', 'Cheaper', 'Dearer', 'What you are trading'],
      rows: [
        ['Wait period', '13, 26, 52 weeks', '4 weeks', 'Your own savings and leave do the early work'],
        ['Benefit period', '2 years', 'To age 65', 'Cover for the catastrophic long-term scenario'],
        ['Structure', 'Indemnity', 'Agreed value', 'Certainty about what gets paid'],
        ['Definition', 'Any occupation', 'Own occupation', 'Whether "unable to work" means your job or any job'],
      ],
    })}

    <div class="gap-note" data-reveal><b>The shape most people get backwards</b>
      Faced with a premium they cannot afford, people shorten the <em>benefit period</em> to two years and keep a short
      four-week wait. That is the wrong way round. A household can usually survive four weeks; it cannot survive a permanent
      inability to work. Lengthening the wait period and keeping the benefit period long buys far more real protection for
      the same money.</div>

    ${strip('sheep-hills', 'Insure the year that never ends, not the month you can already cover.')}

    <h2>Tax treatment changes the real cost</h2>
    <p>Income protection is commonly structured so that either the premiums are deductible and the benefit is taxable, or
      the premiums are not deductible and the benefit is paid tax-free. Those two structures can look similar on a premium
      quote and produce quite different outcomes at claim time depending on your marginal rate.</p>
    <p>This is a genuine accountant question. It is also the reason a headline premium comparison between two policies can be
      misleading if they are structured differently.</p>

    <h2>Bringing the premium down without gutting the cover</h2>
    <ol>
      <li>Lengthen the wait period to match your actual runway — sick leave, annual leave and savings. Use the
        <a href="/income-protection-calculator">calculator</a> to work out what that runway really is.</li>
      <li>Keep the benefit period as long as you can afford. This is the part doing the heavy lifting.</li>
      <li>Check whether your occupation is banded correctly — people who have moved from the tools into management are
        sometimes still rated as manual.</li>
      <li>If you hold mortgage protection as well, check you are not paying twice toward the same income cap.</li>
      <li>Re-test the market if you have stopped smoking or changed occupation.</li>
    </ol>`,
    faqs: [
      {
        q: 'Is income protection worth the money?',
        a: '<p>The honest way to answer it is arithmetic rather than opinion: work out how many months your household could pay its bills with no income from you, and decide whether that number is acceptable. For a household with a mortgage and under six months of runway, income protection is usually the highest-value cover available — because <a href="/what-acc-does-not-cover">ACC does not cover illness</a> and illness is the most likely cause of a long absence.</p>',
      },
      {
        q: 'Why is my quote so much higher than my colleague\'s?',
        a: '<p>Most often occupation banding, age, or a difference in the settings — a four-week wait against a thirteen-week wait, or own-occupation against any-occupation, will produce very different prices for otherwise identical people. Comparing income protection premiums without comparing wait period, benefit period, definition and structure is comparing nothing.</p>',
      },
      {
        q: 'Does the premium go up each year?',
        a: '<p>Typically yes on stepped rates, with age. Some insurers offer level structures. Because income protection is the cover people most often hold for decades, the structure decision matters here as much as it does on life cover.</p>',
      },
    ],
    related: [
      ['/income-protection-nz', 'How income protection works', 'Full guide'],
      ['/income-protection-calculator', 'How long could you last?', 'Calculator'],
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'Why this exists'],
      ['/self-employed-insurance-nz', 'Self-employed', 'Where this matters most'],
    ],
  },
];
