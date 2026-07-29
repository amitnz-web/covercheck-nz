import { table, figures, strip, cardGrid } from '../lib/components.mjs';

export const COMPARE_PAGES = [
  /* ------------------------------------------------------------------ hub -- */
  {
    slug: 'compare',
    kind: 'compare',
    priority: '0.8',
    title: 'Compare Insurance Types in New Zealand — Which Cover Does What',
    h1: 'The comparisons people actually get stuck on',
    desc:
      'Side-by-side comparisons of the NZ insurance decisions people get stuck on: income vs mortgage protection, trauma vs income protection, ACC vs insurance.',
    crumb: 'Compare',
    hero: { photo: 'green-road', kicker: 'Compare' },
    standfirst:
      'Nobody gets stuck choosing between insurers. They get stuck choosing between <em>kinds</em> of cover — because the products overlap and the names do not explain themselves.',
    answer: `<p>Four comparisons account for most of the confusion in the New Zealand market. Each one is a real trade-off
      with no universally right answer — which is why we have written them as comparisons rather than recommendations.</p>`,
    updated: '2026-07-30',
    body2: `
    ${cardGrid(
      [
        ['/income-protection-vs-mortgage-protection', 'Income protection vs mortgage protection', 'One replaces your income, the other replaces one bill. The gap between them is your grocery budget.'],
        ['/trauma-vs-income-protection', 'Trauma vs income protection', 'A lump sum on diagnosis, or a monthly payment while you cannot work. If you can only have one, this page is the decision.'],
        ['/acc-vs-income-protection', 'ACC vs income protection', 'What you already have, versus what you do not. Start here if you have never looked at the gap.'],
        ['/adviser-vs-buying-direct', 'Using an adviser vs buying direct', 'Same premium, usually. Very different process, and a very different claim.'],
        ['/health-insurance-vs-public-system', 'Health insurance vs the public system', 'You will be treated either way. What you are buying is timing, choice and non-funded drugs.'],
        ['/life-insurance-vs-trauma-cover', 'Life cover vs trauma cover', 'One pays when you die, one pays when you are diagnosed. Most households eventually want both, in different sizes.'],
      ],
      'g2'
    )}

    ${strip('green-road', 'The hard question is never which insurer. It is which problem you are solving.')}

    <h2>A shortcut, if you want one</h2>
    <p>Ask what would break first, and in what order:</p>
    ${figures([
      ['Income stops', 'Income protection is the answer'],
      ['Diagnosis lands', 'Trauma cover is the answer'],
      ['You die', 'Life cover is the answer'],
      ['You wait', 'Health insurance is the answer'],
    ])}
    <p>Then size each one to the actual gap rather than to a round number. The
      <a href="/how-much-life-cover-do-i-need">cover calculator</a> and the
      <a href="/income-protection-calculator">income runway calculator</a> both exist to make that concrete.</p>`,
    related: [
      ['/types-of-insurance', 'All six covers explained', 'Overview'],
      ['/what-it-costs', 'What each one costs', 'The numbers'],
      ['/calculators', 'The calculators', 'Work out your own numbers'],
    ],
  },

  /* ------------------------------------------------- IP vs mortgage protection -- */
  {
    slug: 'income-protection-vs-mortgage-protection',
    kind: 'compare',
    priority: '0.9',
    title: 'Income Protection vs Mortgage Protection NZ',
    h1: 'Income protection vs mortgage protection',
    desc:
      'The real difference between income protection and mortgage repayment cover in New Zealand, what each pays, what each costs, and which suits which household.',
    crumb: 'Income vs mortgage protection',
    hero: { photo: 'villas', kicker: 'Compare' },
    standfirst:
      'These two get confused constantly, and the difference between them is roughly the size of your grocery bill, your power bill and your childcare bill combined.',
    answer: `<p><strong>Income protection</strong> replaces a percentage of your whole income — commonly up to about 75% —
      while illness or injury stops you working. <strong>Mortgage repayment cover</strong> replaces one specific bill: your
      mortgage or rent payment.</p>
      <p>Mortgage cover is cheaper and simpler. Income protection is more complete. If your repayments are $2,800 and your
      household runs on $6,200, mortgage cover is solving 45% of the problem.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: 'The same household, the same illness, two different policies',
      head: ['', 'Income protection', 'Mortgage protection'],
      rows: [
        ['Benefit is sized to', 'Your income (up to ~75%)', 'Your mortgage or rent payment'],
        ['Covers illness', 'Yes', 'Yes'],
        ['Covers accident', 'Yes (usually offsets ACC)', 'Yes (usually offsets ACC)'],
        ['Covers food, power, childcare', 'Yes — it is income', 'No'],
        ['Covers redundancy', 'No', 'Sometimes, briefly'],
        ['Premium', 'Higher', 'Lower'],
        ['If you rent', 'Still fully useful', 'Covers rent on some policies'],
        ['If your partner also earns', 'Sized to your share', 'Sized to the whole bill'],
      ],
    })}

    <h2>Work the actual numbers</h2>
    <p>The comparison stops being abstract the moment you write down two figures: your monthly mortgage or rent, and your
      total monthly outgoings. The gap between them is precisely what mortgage protection does not cover.</p>
    ${figures([
      ['Repayments', 'What mortgage protection replaces'],
      ['Everything else', 'What it does not — and it does not stop'],
      ['~75%', 'The usual income protection ceiling'],
    ])}
    <p>Run your own version through the <a href="/income-protection-calculator">income runway calculator</a>.</p>

    ${strip('harbour-homes', 'Keeping the house is not the same as keeping the household running.')}

    <h2>When mortgage protection is genuinely the right call</h2>
    <p>We are not going to pretend it is always the inferior product. It is the right starting point when:</p>
    <ul>
      <li>You have just bought your first home and the budget is genuinely at its limit. A cheaper policy you keep beats a
        better policy you cancel in eight months — and lapsed cover protects nobody.</li>
      <li>Your partner earns enough to cover living costs, and the mortgage is the specific thing that would break.</li>
      <li>Your occupation makes full income protection expensive and mortgage cover is what is actually obtainable.</li>
      <li>You want redundancy cover in the mix and can accept its narrow limits.</li>
    </ul>

    <h2>When income protection is worth the extra</h2>
    <ul>
      <li>You are the household's main or only earner.</li>
      <li>You are self-employed or contracting — no sick leave, no employer scheme, and an ACC entitlement based on your last
        filed return rather than what you live on. See <a href="/self-employed-insurance-nz">self-employed cover</a>.</li>
      <li>You have children, where childcare and school costs are a large fixed line that does not pause.</li>
      <li>Your mortgage is small relative to your outgoings, which makes mortgage-only cover cover very little.</li>
    </ul>

    <h2>Do not buy both without checking</h2>
    <p>Because income protection is capped at a percentage of your income, holding a mortgage repayment policy alongside it
      can mean paying two premiums toward one ceiling — with the second one unable to pay out in full. It is not always
      wasteful, but it is worth someone checking the offset clauses before you run both.</p>

    <h2>A reasonable progression</h2>
    <p>Plenty of households sensibly start with mortgage protection at 28 when the deposit has just cleared them out, and
      move to full income protection at 35 when income and stability have improved. That is a good path. The failure mode is
      not starting there — it is <em>staying</em> there at 45 with two kids and double the outgoings, because nobody ever
      revisited it.</p>`,
    faqs: [
      {
        q: 'Does mortgage protection pay off my mortgage if I die?',
        a: '<p>No. Mortgage repayment cover pays the monthly repayments while you cannot work. Clearing the balance in a lump sum on death is what <a href="/life-insurance-nz">life insurance</a> sized to the mortgage does — and clearing it on diagnosis is what <a href="/trauma-insurance-nz">trauma cover</a> does.</p>',
      },
      {
        q: 'Is the cover the bank offered me the same thing?',
        a: '<p>Not necessarily. Cover arranged at the lending table is often sized to the lender\'s exposure rather than yours, sometimes has the bank as beneficiary, and is sometimes underwritten at claim time rather than at application — which means you find out whether you were covered at the worst possible moment. It is worth knowing which kind you have.</p>',
      },
      {
        q: 'I rent. Is mortgage protection useless to me?',
        a: '<p>Some policies cover rent as well as mortgage payments, so it can still work. But for renters the case for full income protection is usually stronger, because rent is generally a smaller share of outgoings than a mortgage and the rest of your costs are the bigger exposure.</p>',
      },
    ],
    related: [
      ['/income-protection-nz', 'Income protection explained', 'Full guide'],
      ['/mortgage-protection-nz', 'Mortgage protection explained', 'Full guide'],
      ['/first-home-buyers-insurance-nz', 'First-home buyers', 'Life stage'],
      ['/income-protection-calculator', 'Income runway calculator', 'Tool'],
    ],
  },

  /* -------------------------------------------------------- trauma vs income -- */
  {
    slug: 'trauma-vs-income-protection',
    kind: 'compare',
    priority: '0.8',
    title: 'Trauma Cover vs Income Protection NZ — Which One First?',
    h1: 'Trauma cover vs income protection',
    desc:
      'A lump sum on diagnosis or a monthly benefit while you cannot work — how the two differ in New Zealand, and which one to prioritise if you can only afford one.',
    crumb: 'Trauma vs income protection',
    hero: { photo: 'coast-aerial', kicker: 'Compare' },
    standfirst:
      'The most common real budget decision in New Zealand personal insurance, and the one where the sales pitch and the arithmetic most often disagree.',
    answer: `<p><strong>Trauma cover</strong> pays a tax-free lump sum when you are diagnosed with a listed condition — whether
      or not you can work. <strong>Income protection</strong> pays a monthly benefit while you cannot work — whatever caused
      it.</p>
      <p>Trauma has a <em>narrower trigger</em> (a defined list) but a <em>faster, more flexible</em> payout. Income
      protection has a <em>broader trigger</em> (any illness or injury that stops you working) but pays over time.
      If you can only afford one and you have a mortgage, income protection is usually the more complete cover.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: 'The two products, side by side',
      head: ['', 'Trauma cover', 'Income protection'],
      rows: [
        ['Pays', 'One lump sum', 'A monthly benefit'],
        ['Trigger', 'Diagnosis of a listed condition', 'Inability to work through illness or injury'],
        ['Must you stop working?', 'No', 'Yes'],
        ['Covers conditions not on a list', 'No', 'Yes, if they stop you working'],
        ['Covers a long slow decline', 'Only if it meets a definition', 'Yes — this is its core purpose'],
        ['Pays out', 'Quickly, on diagnosis', 'After the wait period, then monthly'],
        ['Spend it on', 'Anything', 'Living costs, in practice'],
        ['Interacts with ACC', 'No offset', 'Usually offsets'],
      ],
    })}

    <h2>The case for income protection first</h2>
    <p>It comes down to trigger breadth. Trauma pays on a <em>list</em>. You can be catastrophically, expensively unwell —
      a complex autoimmune condition, a mental health collapse, chronic pain, a cancer that does not meet the policy's
      severity threshold — and receive nothing from a trauma policy while being entirely unable to earn.</p>
    <p>Income protection does not care what is wrong with you. It cares whether you can work. That is a much larger net, and
      the scenario that ruins households is usually the long one rather than the dramatic one.</p>

    <div class="gap-note" data-reveal><b>Where trauma gets over-sold</b>
      Trauma cover is emotionally easy to sell — cancer, heart attack, stroke are vivid and frightening. Income protection is
      boring. That asymmetry, rather than the arithmetic, explains a fair amount of what gets sold in this market.</div>

    <h2>The case for trauma anyway</h2>
    <p>Which is not to say trauma is a bad product. It does three things income protection cannot:</p>
    <ul>
      <li><strong>It pays immediately.</strong> No wait period. A diagnosis brings costs in the first fortnight — travel,
        accommodation, a partner dropping work — long before an income protection wait period expires.</li>
      <li><strong>It pays even if you keep working.</strong> Plenty of people work through treatment and still face enormous
        costs. Income protection pays nothing in that case.</li>
      <li><strong>It pays a capital sum.</strong> Clearing a chunk of mortgage permanently reduces your household's fixed
        costs forever, which is a structurally different kind of help from a monthly top-up.</li>
    </ul>

    ${strip('coast-aerial', 'One covers the shock. The other covers the years.')}

    <h2>How they work together</h2>
    <p>The shape most advisers converge on, budget permitting, is: <strong>trauma handles the first year</strong> — the
      shock, the lump costs, the partner who stops working — and <strong>income protection handles the long middle</strong>,
      the eighteen months where you are neither dying nor recovered and the mortgage is still due.</p>
    <p>That means the trauma amount does not need to be enormous. Sizing it to twelve to twenty-four months of household
      outgoings, rather than to a headline six-figure number, is both more affordable and more honest about the job it is
      doing.</p>

    <h2>If you are choosing today</h2>
    <ol>
      <li><strong>Mortgage, dependants, one main income?</strong> Income protection first, trauma added later in a modest
        amount.</li>
      <li><strong>Strong savings, no dependants, secure employer with good sick leave?</strong> Trauma alone is more
        defensible, because your runway already covers the short absence.</li>
      <li><strong>Self-employed?</strong> Income protection, clearly — you have no sick leave and your
        <a href="/what-acc-does-not-cover">ACC position may be weaker than you think</a>.</li>
      <li><strong>Family history of a specific condition?</strong> Worth pricing trauma properly rather than assuming — and
        worth applying before any investigation of that condition begins.</li>
    </ol>`,
    faqs: [
      {
        q: 'Can I hold both?',
        a: '<p>Yes, and it is the most common properly-advised setup. They cover different failure modes and do not offset against each other. The question is usually sizing rather than whether.</p>',
      },
      {
        q: 'Is trauma cover taxed?',
        a: '<p>A trauma benefit paid to an individual is generally received tax-free in New Zealand. Income protection benefits are commonly taxable where the premiums were deductible. That difference is worth factoring in when comparing the real value of a $100,000 lump sum against a monthly benefit.</p>',
      },
      {
        q: 'What if I claim on trauma and then recover fully?',
        a: '<p>You keep the money. Trauma is not a reimbursement product — there is no requirement to spend it on treatment or to have suffered a financial loss. People who recover fully and keep the payout are the normal outcome, not an abuse of the policy.</p>',
      },
    ],
    related: [
      ['/trauma-insurance-nz', 'Trauma cover explained', 'Full guide'],
      ['/income-protection-nz', 'Income protection explained', 'Full guide'],
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'Context'],
      ['/what-it-costs', 'What each one costs', 'The numbers'],
    ],
  },

  /* --------------------------------------------------------- ACC vs income -- */
  {
    slug: 'acc-vs-income-protection',
    kind: 'compare',
    priority: '0.8',
    title: 'ACC vs Income Protection NZ: What Is Actually Missing',
    h1: 'ACC vs income protection',
    desc:
      'How ACC weekly compensation and private income protection differ in New Zealand, how they interact, and whether you need both.',
    crumb: 'ACC vs income protection',
    hero: { photo: 'aoraki', kicker: 'Compare' },
    standfirst:
      'This is not really a versus. It is a "what is missing" — and what is missing is every illness you can name.',
    answer: `<p><strong>ACC</strong> pays weekly compensation at up to 80% of your income when an <em>accident</em> stops you
      working. <strong>Income protection</strong> pays a monthly benefit — commonly up to about 75% — when
      <em>illness or injury</em> stops you working.</p>
      <p>The overlap is accidents. The gap is illness: cancer, heart conditions, MS, mental illness and gradual-onset back
      and joint problems. Most income protection policies offset against ACC, so you are not paid twice — the cover is doing
      its real work in the situations ACC is absent entirely.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: 'What each one does',
      head: ['', 'ACC', 'Income protection'],
      rows: [
        ['Covers accidents', 'Yes', 'Yes'],
        ['Covers illness', '<strong>No</strong>', 'Yes'],
        ['You pay for it via', 'Levies (automatic)', 'A premium you choose'],
        ['Benefit', 'Up to 80% of earnings', 'Commonly up to ~75%'],
        ['Based on', 'Last filed earnings', 'Agreed or proven income'],
        ['You must apply?', 'No — it is universal', 'Yes, with underwriting'],
        ['Health history matters?', 'No', 'Yes'],
        ['Lasts', 'While the injury prevents work', 'Your chosen benefit period'],
      ],
      source:
        'General position under the Accident Compensation Act 2001, July 2026. ACC entitlements are decided case by case.',
    })}

    <h2>The self-employed problem</h2>
    <p>For employees, ACC's earnings calculation is usually straightforward. For the self-employed it is based on your
      <strong>last filed tax return</strong> — which means a start-up year, a quiet year, or a year where you paid yourself
      largely in dividends rather than salary can leave your ACC entitlement far below what you actually live on.</p>
    <p><strong>ACC CoverPlus Extra</strong> fixes this: you agree a cover amount in advance, and that is what gets paid
      regardless of what your last return showed. It is available, it is not expensive, and a great many contractors have
      never heard of it. If you are self-employed, sorting this out is often the highest-value thing you can do before
      buying anything at all. <a href="/self-employed-insurance-nz">More on this →</a></p>

    ${strip('aoraki', 'ACC is excellent at the thing it does. It simply does not do illness.')}

    <h2>So do I need income protection if I have ACC?</h2>
    <p>Reframe it: <em>would my household survive a two-year illness with no income from me?</em> ACC has no bearing on that
      question. If the answer is no, income protection is the product that addresses it. If the answer is yes — strong
      savings, a second income that covers everything, no debt — then you may reasonably decide against it.</p>
    <p>The <a href="/income-protection-calculator">income runway calculator</a> turns that into a number in about a
      minute.</p>

    <h2>How the offset actually works</h2>
    <p>If you are injured, ACC pays, and your income protection policy typically tops you up to your covered percentage
      rather than paying in full alongside. People sometimes read this as the insurer wriggling out. It is not — it is
      why the premium is affordable. Without the offset you would be paying for cover that duplicates something the state
      already gives you for free.</p>
    <p>What varies between policies, and matters: whether the offset applies to ACC only, to any income, or to other
      insurance; and whether a reduced proportion is paid regardless. That distinction is invisible on a price comparison and
      very visible at claim time.</p>`,
    faqs: [
      {
        q: 'If ACC covers me at work, am I fine?',
        a: '<p>Only for accidents, and only for accidents ACC accepts. It makes no difference where the accident happened — ACC covers accidents at home and on the weekend too. But an illness that starts at work is still an illness, and still outside the scheme.</p>',
      },
      {
        q: 'Does income protection pay on top of ACC?',
        a: '<p>Usually not — most policies offset. Some are written to pay a proportion regardless of ACC. This differs meaningfully between insurers and is worth checking in the wording rather than the brochure.</p>',
      },
      {
        q: 'I am on a salary with good sick leave. Do I still need this?',
        a: '<p>Sick leave in New Zealand has a statutory minimum of 10 days a year. Even a generous employer scheme is usually measured in weeks or months, not years. The risk income protection addresses is not a fortnight off — it is the eighteen-month absence, and very few employment agreements cover that.</p>',
      },
    ],
    related: [
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'The full gap'],
      ['/income-protection-nz', 'Income protection explained', 'Full guide'],
      ['/self-employed-insurance-nz', 'Self-employed and contractors', 'CoverPlus Extra'],
      ['/income-protection-calculator', 'Income runway calculator', 'Tool'],
    ],
  },

  /* --------------------------------------------------------- adviser vs direct -- */
  {
    slug: 'adviser-vs-buying-direct',
    kind: 'compare',
    priority: '0.8',
    title: 'Insurance Adviser vs Buying Direct in NZ — Does It Cost More?',
    h1: 'Using an adviser vs buying direct',
    desc:
      'What a licensed financial adviser actually does in New Zealand, how they are paid, whether it costs you more, and when buying direct is perfectly sensible.',
    crumb: 'Adviser vs direct',
    hero: { photo: 'auckland', kicker: 'Compare' },
    standfirst:
      'The premium is usually the same either way. What differs is who does the comparing, who argues with the underwriter, and who is standing next to you at claim time.',
    answer: `<p>In New Zealand, insurance advisers are generally paid <strong>commission by the insurer</strong>, and the
      premium you pay is typically the same whether you buy direct or through an adviser. So the honest question is not
      "does it cost more" — it is "what do I get".</p>
      <p>What you get is: the market compared rather than one insurer, underwriting handled by someone who knows which
      insurer treats your specific health history most favourably, policy wordings read properly, and someone whose job it is
      to argue your corner at claim time.</p>`,
    updated: '2026-07-30',
    body2: `
    <div class="note" data-reveal><b>Where our own interest sits</b>
      This site introduces people to a financial adviser, so treat this page with appropriate suspicion — and then check the
      claims against the FMA's own material. We have tried to write the case against as carefully as the case for. See
      <a href="/about">why this site exists</a>.</div>

    <h2>What an adviser actually does</h2>
    ${table({
      caption: '',
      head: ['Task', 'Buying direct', 'Through an adviser'],
      rows: [
        ['Comparing insurers', 'You compare, on price', 'They compare on price, wording and underwriting appetite'],
        ['Choosing sum insured', 'You decide', 'Built from your debts, dependants and income'],
        ['Health disclosure', 'You fill the form', 'Guided — which reduces non-disclosure risk'],
        ['A loading or exclusion', 'You accept or walk away', 'Often re-shopped or negotiated'],
        ['Reading the wording', 'You, if you do', 'Their job'],
        ['Structure (level/stepped, ownership)', 'You choose blind', 'Advised, with reasons on record'],
        ['At claim time', 'You and the insurer', 'They advocate for you'],
        ['Cost to you', 'Premium', 'Usually the same premium'],
      ],
    })}

    <h2>The two places it matters most</h2>

    <h3>Underwriting, if you have any health history</h3>
    <p>Insurers differ enormously in how they treat specific conditions. One will decline a condition another will accept at
      standard rates. Someone who places policies every week knows those patterns; a comparison website does not. For a
      healthy 28-year-old this is worth little. For a 46-year-old with a thyroid condition and a family history it can be the
      difference between cover and no cover.</p>

    <h3>At claim time</h3>
    <p>This is the part people discover too late. A claim is a process — forms, medical evidence, definitions, sometimes a
      dispute about whether a condition meets a threshold. Doing that alone while seriously ill, or while grieving, is
      genuinely hard. An adviser who placed the policy knows what was disclosed, what the wording says, and who to call.</p>

    ${strip('auckland', 'Nobody reads a policy wording on the day they are diagnosed.')}

    <h2>The honest case for buying direct</h2>
    <p>Buying direct is perfectly sensible when:</p>
    <ul>
      <li>You are young, healthy, and buying a simple, modest amount of life cover.</li>
      <li>You genuinely enjoy reading policy documents and will actually do it.</li>
      <li>You are covered by a good group scheme and just topping up.</li>
      <li>You have already had advice, understand the structure you want, and are re-buying the same thing.</li>
    </ul>
    <p>The failure mode of buying direct is not usually paying too much. It is buying the wrong <em>shape</em> — a
      four-week wait period you did not need, a two-year benefit period you did need to be longer, accelerated trauma you did
      not know would erode your life cover, or a health policy switch that quietly dropped cover for the condition you
      already have.</p>

    <h2>How commission works, plainly</h2>
    <p>Advisers are typically paid an upfront commission by the insurer when a policy is placed, and often a smaller ongoing
      servicing commission. Since the premium is generally the same either way, the commission comes out of the insurer's
      margin rather than being added to your price.</p>
    <p>The obvious conflict is that commission is proportional to premium, which creates an incentive toward larger policies.
      Licensed advisers in New Zealand operate under a statutory duty to put the client's interests first and must disclose
      how they are paid. That is a real constraint, but you should still <strong>ask directly how they are paid and what
      they would earn</strong> — a good adviser will answer without flinching.</p>

    <h2>Questions worth asking any adviser</h2>
    <ol>
      <li>How are you paid, and what would you earn from this policy?</li>
      <li>How many insurers can you place business with, and did you consider more than one here?</li>
      <li>Why this insurer for me specifically — what is it about my situation?</li>
      <li>Stepped or level, and why?</li>
      <li>If I claimed, what exactly would you do?</li>
      <li>What are the exclusions on my policy and why are they there?</li>
    </ol>`,
    faqs: [
      {
        q: 'Do insurance brokers charge a fee in New Zealand?',
        a: '<p>Most personal insurance advisers do not charge the client a fee — they are paid commission by the insurer. Some charge a fee for advice instead of, or as well as, commission, particularly for complex business or estate work. Either way, they must disclose it. Ask up front.</p>',
      },
      {
        q: 'Will an adviser get me a cheaper premium?',
        a: '<p>Sometimes, because they can see the whole market and published NZ comparisons find roughly a 30% spread between cheapest and dearest for identical cover. But cheaper is not the main argument — better-shaped cover, better underwriting outcomes and support at claim time are. If an adviser is selling purely on price, that is a signal in itself.</p>',
      },
      {
        q: 'What does "licensed" mean here?',
        a: '<p>Since the 2019 reforms, anyone giving regulated financial advice to retail clients in New Zealand must do so under a Financial Advice Provider licence issued by the FMA, and is subject to statutory duties including putting the client\'s interests first and meeting competence standards. You can check who holds a licence on the Financial Service Providers Register.</p>',
      },
    ],
    related: [
      ['/talk-to-arron', 'Talk to Arron', 'The adviser this site introduces'],
      ['/about', 'Why this site exists', 'Our disclosure'],
      ['/what-it-costs', 'What cover costs', 'The 30% spread'],
    ],
  },

  /* --------------------------------------------------- health vs public system -- */
  {
    slug: 'health-insurance-vs-public-system',
    kind: 'compare',
    priority: '0.7',
    title: 'Health Insurance vs the Public System in NZ — Is It Worth Paying?',
    h1: 'Health insurance vs the public system',
    desc:
      'What private health insurance adds to New Zealand\'s public system, where the public system is genuinely better, and how to decide honestly.',
    crumb: 'Health insurance vs public',
    hero: { photo: 'fern', kicker: 'Compare' },
    standfirst:
      'You will be treated either way. This is a question about waiting, choosing, and a specific list of medicines.',
    answer: `<p>New Zealand's public health system provides emergency and acute care that private insurance does not attempt to
      replicate — and for anything urgent, the public system is where you want to be. Private health insurance buys you three
      things it does not: <strong>speed on elective treatment</strong>, <strong>choice of specialist and timing</strong>, and
      <strong>access to cancer drugs Pharmac does not fund</strong>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Where the public system is better, full stop</h2>
    <ul>
      <li><strong>Emergencies and acute care.</strong> Heart attack, major trauma, stroke — you go public, it is free, and it
        is good. No private policy improves on this.</li>
      <li><strong>Complex and intensive care.</strong> ICU, major multi-disciplinary work, rare conditions.</li>
      <li><strong>Anything urgent.</strong> Clinical priority means genuinely urgent cases are treated quickly.</li>
      <li><strong>Cost.</strong> It is already paid for.</li>
    </ul>

    <h2>Where private cover earns its premium</h2>
    <ul>
      <li><strong>Elective surgery.</strong> Hips, knees, hernias, gallbladders, ENT, gynaecology. Painful, life-limiting,
        and not clinically urgent — which is exactly the category that waits.</li>
      <li><strong>Diagnostics.</strong> Getting the scan in a fortnight rather than months, which shortens the whole
        uncertainty.</li>
      <li><strong>Non-Pharmac cancer drugs.</strong> The one most people underestimate. Pharmac funds a narrower list of
        modern cancer medicines than several comparable countries, and better health policies carry a benefit — often
        $300,000–$500,000 — specifically for drugs outside it.</li>
      <li><strong>Choosing your surgeon and your date.</strong> Which matters more than it sounds if you are self-employed
        and scheduling around income.</li>
    </ul>

    ${figures([
      ['Free & excellent', 'Emergency, acute and complex care — public'],
      ['The queue', 'Elective surgery, where private buys time'],
      ['Non-funded drugs', 'The benefit most often underestimated'],
    ])}

    ${strip('still-lake', 'Private cover does not buy better medicine. It buys a different calendar.')}

    <h2>Deciding honestly</h2>
    <p>This is the one cover on this site where a financially literate person can reasonably say no. The questions that
      actually settle it:</p>
    <ol>
      <li><strong>What does waiting cost you?</strong> A salaried employee with sick leave and an office job pays little for
        a six-month wait. A self-employed builder pays enormously.</li>
      <li><strong>Could you self-fund a $60,000 surgery?</strong> If yes, you are insuring a risk you can absorb.</li>
      <li><strong>Could you self-fund $200,000 of non-funded cancer drugs?</strong> Almost nobody can, and this is the part
        of the decision most often made on a wrong assumption about what Pharmac covers.</li>
      <li><strong>What is your health history now?</strong> Because it only gets harder to insure from here.
        <a href="/pre-existing-conditions-nz">See pre-existing conditions</a>.</li>
    </ol>

    <h2>The middle option people forget</h2>
    <p>You do not have to choose between full cover and nothing. A <strong>hospital-and-surgical plan with a high excess and
      no extras module</strong> is often a fraction of the price of a comprehensive plan and keeps the two things that matter
      most — surgical cover and the non-Pharmac drug benefit. For a lot of households that is the honest sweet spot, and it
      is rarely what gets quoted first. <a href="/health-insurance-cost-nz">More on the excess lever →</a></p>`,
    faqs: [
      {
        q: 'If I have health insurance, can I still use the public system?',
        a: '<p>Yes. Having private cover does not remove your entitlement to public healthcare. Many people use public for emergencies and private for elective work — that is the normal pattern, not a loophole.</p>',
      },
      {
        q: 'Does health insurance make me a queue-jumper?',
        a: '<p>You are not moving ahead of anyone in the public queue — you are leaving it, which if anything shortens it by one. That is the structural argument. Whether a two-tier system is good policy is a fair debate, but it is a different question from whether cover benefits you personally.</p>',
      },
      {
        q: 'What about GP visits and prescriptions?',
        a: '<p>Those sit in optional everyday/extras modules that, for most households, return roughly what they cost. The high-value part of health insurance is surgical and non-Pharmac drug cover. If budget is tight, keep those and drop the extras.</p>',
      },
    ],
    related: [
      ['/health-insurance-nz', 'How health insurance works', 'Full guide'],
      ['/health-insurance-cost-nz', 'What it costs', 'By age'],
      ['/pre-existing-conditions-nz', 'Pre-existing conditions', 'Apply while well'],
    ],
  },

  /* ------------------------------------------------------------ life vs trauma -- */
  {
    slug: 'life-insurance-vs-trauma-cover',
    kind: 'compare',
    priority: '0.7',
    title: 'Life Insurance vs Trauma Cover NZ — What Is the Difference?',
    h1: 'Life cover vs trauma cover',
    desc:
      'How life insurance and trauma cover differ in New Zealand, why they are often bundled, and what "accelerated" trauma does to your life payout.',
    crumb: 'Life vs trauma',
    hero: { photo: 'harbour-homes', kicker: 'Compare' },
    standfirst:
      'One pays when you die. One pays when you are diagnosed. They are frequently sold together in a way that means claiming on one shrinks the other — and a lot of people do not know which they bought.',
    answer: `<p><strong>Life insurance</strong> pays a lump sum on death (and usually on terminal illness diagnosis).
      <strong>Trauma cover</strong> pays a lump sum on diagnosis of a listed serious condition, while you are very much
      alive.</p>
      <p>The critical structural point: if your trauma cover is <strong>accelerated</strong>, it is attached to your life
      policy and a trauma claim <em>reduces your life cover</em> by the amount paid. If it is
      <strong>standalone</strong>, it does not. Standalone costs more.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: '',
      head: ['', 'Life cover', 'Trauma cover'],
      rows: [
        ['Pays on', 'Death, or terminal diagnosis', 'Diagnosis of a listed condition'],
        ['Who benefits', 'Your estate or nominees', 'You'],
        ['Cost per $100k', 'Lowest in the market', 'Several times higher'],
        ['Conditions covered', 'All causes of death', 'A defined list (typically 30–50)'],
        ['Can claim more than once', 'No', 'Sometimes, on reinstatement'],
        ['Taxed', 'Generally not', 'Generally not'],
      ],
    })}

    <h2>Accelerated vs standalone — the detail that matters</h2>
    <p>Say you hold $600,000 of life cover with $200,000 of accelerated trauma. You are diagnosed with cancer and claim the
      $200,000. Your life cover is now $400,000. If you then die two years later, your family receives $400,000, not
      $600,000.</p>
    <p>That is not a scandal — it is what accelerated cover is and it is why it is cheaper. The problem is that a great many
      people holding it do not know that is how it works, because it was explained once, quickly, at signing.</p>
    <div class="note" data-reveal><b>The question to ask about your own policy</b>
      "Is my trauma cover accelerated or standalone, and if I claim, what happens to my life sum insured?" If you cannot
      answer that from memory, it is worth finding out.</div>

    <p>Many accelerated policies allow the life cover to be <strong>reinstated</strong> after a period — often 12 months —
      sometimes automatically and sometimes excluding the condition claimed on. That materially changes the calculus, and it
      varies by insurer.</p>

    ${strip('villas', 'Accelerated cover is not a trick. Not knowing you have it is the problem.')}

    <h2>Which do you need?</h2>
    <p>They answer different questions, so the sizing is different:</p>
    <ul>
      <li><strong>Life cover</strong> answers <em>"if my income stopped permanently, would my dependants be okay?"</em> Size
        it to the mortgage plus income replacement until the youngest is independent. If nobody depends on you financially,
        you may need very little. Use the <a href="/how-much-life-cover-do-i-need">cover calculator</a>.</li>
      <li><strong>Trauma cover</strong> answers <em>"if I were diagnosed tomorrow, what would I need cash for right
        now?"</em> Size it to twelve to twenty-four months of household outgoings plus any specific known cost. It does not
        need to be a six-figure headline number to do its job.</li>
    </ul>
    <p>And note that trauma competes for budget with income protection more than it competes with life cover — that is the
      harder trade-off. <a href="/trauma-vs-income-protection">See trauma vs income protection →</a></p>`,
    faqs: [
      {
        q: 'Does life insurance pay out if I am diagnosed with a terminal illness?',
        a: '<p>Most modern New Zealand life policies include a terminal illness benefit that pays the sum insured early, typically where life expectancy is certified at under 12 months. That is different from trauma cover, which pays on diagnosis of a listed condition regardless of prognosis.</p>',
      },
      {
        q: 'Should I bundle them or keep them separate?',
        a: '<p>Bundling (accelerated) is cheaper and is a reasonable choice for many households, particularly where the trauma amount is modest relative to the life cover. Standalone is worth the extra where the trauma sum is large, or where you want absolute certainty the family\'s life payout is untouched. It is a budget-and-priorities decision, not a right-answer one.</p>',
      },
      {
        q: 'Can I claim trauma more than once?',
        a: '<p>On some policies, yes — after a claim the cover may be reinstated after a waiting period, usually excluding the condition already claimed on and sometimes related conditions. This is a real difference between products and worth asking about specifically.</p>',
      },
    ],
    related: [
      ['/life-insurance-nz', 'Life insurance explained', 'Full guide'],
      ['/trauma-insurance-nz', 'Trauma cover explained', 'Full guide'],
      ['/trauma-vs-income-protection', 'Trauma vs income protection', 'The harder trade-off'],
      ['/how-much-life-cover-do-i-need', 'How much life cover?', 'Calculator'],
    ],
  },
];
