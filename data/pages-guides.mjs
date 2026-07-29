import { table, figures, strip } from '../lib/components.mjs';

export const GUIDE_PAGES = [
  /* ------------------------------------------------------- pre-existing -- */
  {
    slug: 'pre-existing-conditions-nz',
    kind: 'guide',
    priority: '0.8',
    title: 'Insurance With Pre-Existing Conditions in NZ',
    h1: 'Pre-existing conditions and NZ insurance',
    desc:
      'What counts as a pre-existing condition in New Zealand, how insurers handle them, whether you can still get cover, and why switching insurers is the biggest risk.',
    crumb: 'Pre-existing conditions',
    hero: { photo: 'green-road', kicker: 'Guide' },
    standfirst:
      'The fear is being declined. The reality is usually a loading or an exclusion — and the bigger danger is switching a policy you already hold.',
    answer: `<p>A pre-existing condition is anything you had symptoms of, sought advice about, or were treated for before your
      cover started — whether or not it was formally diagnosed. Insurers respond in one of four ways:
      <strong>accept at standard rates</strong>, <strong>load the premium</strong>, <strong>exclude that condition</strong>,
      or <strong>decline</strong>.</p>
      <p>Outright declines are less common than people fear. Exclusions and loadings are the normal outcome, and they vary a
      lot between insurers for the same condition.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>The four outcomes, in order of likelihood</h2>
    ${table({
      caption: '',
      head: ['Outcome', 'What it means'],
      rows: [
        ['Standard terms', 'Covered normally. Common for well-controlled or historical conditions.'],
        ['Premium loading', 'Covered, at a higher price — often expressed as a percentage above standard.'],
        ['Exclusion', 'Covered for everything except that condition and things related to it.'],
        ['Decline', 'No cover offered. Least common, and often insurer-specific rather than universal.'],
      ],
    })}
    <div class="good-note" data-reveal><b>The most useful thing to know</b>
      A decline from one insurer is not a decline from the market. Insurers have genuinely different appetites for specific
      conditions — one will exclude what another accepts at standard rates. This is the single strongest practical argument
      for applying through someone who places policies every week rather than applying yourself to whichever insurer
      advertised most recently.</div>

    <h2>How the different covers treat them</h2>

    <h3>Health insurance — the strictest</h3>
    <p>Pre-existing conditions are generally excluded, and for some categories permanently. Southern Cross operates a
      moratorium-style approach where qualifying pre-existing conditions may become covered after three years of continuous
      cover on some plans. nib applies waiting periods that typically run from 12 months to four years — but permanently
      excludes pre-existing cardiovascular, cancer, hip and knee, back, transplant and reconstructive conditions on its
      Premium and Standard Hospital covers.</p>
    <p>Both positions are summarised from the insurers' published material as at July 2026; plans change and you should
      check the current policy document.</p>

    <h3>Life insurance — the most forgiving</h3>
    <p>Because it insures death rather than a specific illness, life cover is often available at standard or lightly loaded
      rates for conditions that would be excluded outright on a health policy. A well-managed condition with a good
      prognosis frequently gets standard terms.</p>

    <h3>Trauma and income protection — condition-specific</h3>
    <p>These sit in between. A history of back problems commonly draws a back exclusion on income protection; a history of
      depression or anxiety commonly draws a mental health exclusion or a shortened benefit period. Those exclusions are
      significant, because back conditions and mental health are two of the largest causes of long-term work absence in New
      Zealand.</p>

    ${strip('green-road', 'A decline from one insurer is not a decline from the market.')}

    <h2>The biggest risk is not applying. It is switching.</h2>
    <p>This deserves its own heading because it is the most expensive mistake in New Zealand health insurance.</p>
    <p>Suppose you have held health cover for eight years and, in year four, developed a heart condition — covered, because
      it arose while you were insured. Then someone offers you a cheaper premium with a different insurer. If you switch,
      you are underwritten fresh. That heart condition is now <em>pre-existing</em>, and the new insurer will very likely
      exclude it — permanently.</p>
    <p>You have saved $40 a month and lost cover for the one thing most likely to happen to you. This is not a hypothetical;
      it happens constantly, and it is a large part of why "just compare and switch" is bad advice on health cover in
      particular.</p>
    <div class="gap-note" data-reveal><b>Before any health insurance switch</b>
      Get, in writing, a comparison of what is covered under your existing policy and what would be covered under the new
      one — condition by condition. If nobody will put that in writing, do not switch.</div>

    <h2>Non-disclosure: why over-disclosing is always right</h2>
    <p>You have a duty to disclose what you know when you apply. Insurers can decline claims where something material was
      not disclosed, even when it seems unrelated to what you are claiming for. People under-disclose for understandable
      reasons — they forget a consultation from six years ago, or they assume something minor does not matter.</p>
    <p>The correct instinct is the opposite: disclose everything, let the underwriter decide what is material, and get the
      outcome in writing. A policy with a known exclusion you understand is worth far more than a policy that looks complete
      and quietly is not.</p>

    <h2>What to do if you already have a condition</h2>
    <ol>
      <li><strong>Apply anyway.</strong> The most common reason people have no cover is that they assumed they could not get
        it and never asked.</li>
      <li><strong>Apply through someone who knows the market's appetites</strong> for your specific condition.</li>
      <li><strong>Do not cancel existing cover</strong> until new cover is confirmed and you have compared the exclusions.</li>
      <li><strong>Ask about review.</strong> Some loadings and exclusions can be reviewed after a period of stability — a
        few years without recurrence, or resolved risk factors. Almost nobody goes back and asks.</li>
      <li><strong>Get whatever you can get.</strong> A policy with an exclusion still covers everything else, and everything
        else is most of what might happen to you.</li>
    </ol>`,
    faqs: [
      {
        q: 'Is high blood pressure a pre-existing condition?',
        a: '<p>Yes, if you were diagnosed, treated or investigated for it before cover started. In practice well-controlled hypertension is one of the more insurable conditions — it commonly draws standard or lightly loaded terms on life cover, though it may attract exclusions relating to cardiovascular conditions on health cover.</p>',
      },
      {
        q: 'What if I had something years ago and it resolved?',
        a: '<p>Disclose it anyway. A resolved condition with a clean history for several years frequently attracts standard terms — but it needs to be on the application, because a claim declined for non-disclosure of something that would have been accepted is the worst possible outcome.</p>',
      },
      {
        q: 'Can an exclusion be removed later?',
        a: '<p>Sometimes. Insurers will occasionally review an exclusion or loading after a defined period of stability. It is not automatic and it will not happen unless someone asks on your behalf. Worth raising at every policy review.</p>',
      },
      {
        q: 'Is endometriosis a pre-existing condition?',
        a: '<p>If it was diagnosed, investigated or symptomatic before cover started, yes. Gynaecological conditions are frequently excluded on health cover, and the treatment of them differs meaningfully between insurers — which makes it a case where where you apply matters more than usual.</p>',
      },
    ],
    related: [
      ['/health-insurance-nz', 'Health insurance explained', 'Where this bites hardest'],
      ['/insurance-waiting-periods-nz', 'Waiting periods', 'When cover switches on'],
      ['/adviser-vs-buying-direct', 'Adviser vs direct', 'Why underwriting appetite matters'],
    ],
  },

  /* --------------------------------------------------------- waiting periods -- */
  {
    slug: 'insurance-waiting-periods-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'Insurance Waiting Periods NZ: When Cover Starts',
    h1: 'Waiting periods and stand-downs',
    desc:
      'How waiting periods work on NZ health, income protection, trauma and life cover — what is covered from day one and what is not.',
    crumb: 'Waiting periods',
    hero: { photo: 'still-lake', kicker: 'Guide' },
    standfirst:
      'Two different things share the name "waiting period", and confusing them is why people think they are covered when they are not.',
    answer: `<p>There are two distinct concepts. A <strong>waiting period</strong> (health, trauma) is a period after your
      policy starts during which certain benefits are not yet available. A <strong>stand-down</strong> or
      <strong>wait period</strong> (income protection) is how long you must be unable to work before payments begin — and
      you choose it, because it is the biggest lever on your premium.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Health insurance waiting periods</h2>
    ${table({
      caption: 'Typical New Zealand health insurance waiting periods — check your own policy document',
      head: ['Benefit', 'Typical wait'],
      rows: [
        ['Accidents and sudden illness', 'Usually covered immediately'],
        ['Pregnancy complications (where covered at all)', '~12 months'],
        ['Normal pregnancy and childbirth', 'Usually excluded entirely — publicly funded in NZ'],
        ['Dental and optical extras', '2 – 6 months'],
        ['Wellness benefits', 'Often short or none'],
        ['Pre-existing conditions', '12 months to 4 years, or permanently excluded'],
      ],
      source: 'Indicative ranges from published NZ insurer material, July 2026. Individual policies vary.',
    })}

    <h2>Trauma cover</h2>
    <p>Most trauma policies apply an initial exclusion period — commonly around 90 days — for cancer, and often for heart and
      stroke conditions. The purpose is to stop people buying cover after symptoms have appeared but before diagnosis is
      confirmed. It means trauma cover taken out today does not protect you against a cancer diagnosed next month.</p>
    <p>Another reason the "I'll sort it later" instinct is expensive.</p>

    <h2>Life cover</h2>
    <p>Life insurance generally has no waiting period for accidental or natural death once the policy is in force. The
      standard exception is <strong>suicide within the first 13 months</strong> of cover, or of an increase in cover, which
      is excluded on most New Zealand policies.</p>

    <h2>Income protection: the stand-down you choose</h2>
    <p>This is the different one, because it is a setting rather than a restriction. Options typically run 4, 8, 13, 26, 52
      or 104 weeks. It is how long you must be unable to work before the benefit starts paying — and every step longer cuts
      the premium.</p>
    ${figures([
      ['4 weeks', 'Most expensive. Only worth it if you have almost no savings or leave.'],
      ['13 weeks', 'A common middle ground for households with some buffer.'],
      ['26–52 weeks', 'Substantially cheaper. Suits people with real savings or employer sick leave.'],
    ])}
    <div class="good-note" data-reveal><b>How to choose it properly</b>
      Add your sick leave, annual leave and accessible savings. Convert that to weeks of outgoings. That number is your
      honest stand-down. Anything shorter is money you spend every month insuring a period you could already fund. The
      <a href="/income-protection-calculator">income runway calculator</a> works this out.</div>

    ${strip('still-lake', 'A stand-down is not a restriction. It is the price lever you control.')}

    <h2>The payment gap people miss</h2>
    <p>Income protection benefits are usually paid <em>in arrears</em>. So a 13-week stand-down does not mean money arrives
      at week 13 — it means the first payment covers the period after week 13 and lands a month later. In practice the first
      money can be closer to four months out. Plan the household cashflow on that basis rather than on the stand-down
      number alone.</p>

    <h2>What is covered from day one</h2>
    <ul>
      <li>Life cover — from the policy start (suicide exclusion aside).</li>
      <li>Health cover — accidents and new sudden illness, on most policies.</li>
      <li>Income protection — the cover is in force immediately; it is the <em>payment</em> that waits.</li>
      <li>Trauma — most conditions, with the initial exclusion applying mainly to cancer, heart and stroke.</li>
    </ul>`,
    faqs: [
      {
        q: 'If I get sick during the waiting period, am I covered later?',
        a: '<p>Generally no — a condition that arises during a waiting period is usually treated as pre-existing from that point on, and excluded going forward. This is why waiting periods matter more than they look: they do not merely delay cover, they can remove it permanently for that condition.</p>',
      },
      {
        q: 'Can I shorten a waiting period by paying more?',
        a: '<p>On income protection, yes — that is exactly what choosing a shorter stand-down does. On health and trauma the initial waiting periods are structural and generally not purchasable away, because their purpose is to prevent claiming on something you already knew about.</p>',
      },
      {
        q: 'Do waiting periods restart if I increase my cover?',
        a: '<p>Usually for the increased portion only. Increase your trauma cover from $100,000 to $200,000 and the new $100,000 typically carries a fresh initial exclusion period while the original amount continues unaffected. The same principle applies to the 13-month suicide exclusion on life cover increases.</p>',
      },
    ],
    related: [
      ['/pre-existing-conditions-nz', 'Pre-existing conditions', 'The related risk'],
      ['/income-protection-nz', 'Income protection', 'Choosing your stand-down'],
      ['/health-insurance-nz', 'Health insurance', 'Full guide'],
    ],
  },

  /* -------------------------------------------------------------- claiming -- */
  {
    slug: 'how-insurance-claims-work-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'How Insurance Claims Work in NZ (And Why They Fail)',
    h1: 'How a claim actually works',
    desc:
      'The real process of claiming on life, trauma, income protection and health insurance in New Zealand — and the four reasons claims get declined.',
    crumb: 'How claims work',
    hero: { photo: 'wellington', kicker: 'Guide' },
    standfirst:
      'Nobody researches this until they need it, which is exactly the wrong time. It takes six minutes to read now and it changes what you buy.',
    answer: `<p>Most claims in New Zealand are paid. The ones that are not usually fail for one of four reasons:
      <strong>non-disclosure</strong> at application, a <strong>policy definition</strong> not being met, an
      <strong>exclusion</strong> that was on the policy all along, or the claim falling within a
      <strong>waiting period</strong>.</p>
      <p>Every one of those four is decided at the moment you <em>buy</em>, not the moment you claim.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What the process actually looks like</h2>
    <div class="steps mt4" data-reveal>
      <div class="step"><div><h3>Notify</h3><p>Tell the insurer or your adviser as soon as you reasonably can. Some policies
        have notification timeframes. Early notification also starts the clock on income protection, where payments run in
        arrears.</p></div></div>
      <div class="step"><div><h3>Claim forms and consent</h3><p>You complete a claim form; you sign an authority letting the
        insurer obtain medical records. Your doctor or specialist completes a section. This stage is where most of the
        elapsed time goes.</p></div></div>
      <div class="step"><div><h3>Assessment</h3><p>The insurer checks the event against the policy definition, checks your
        original application against your medical history, and may request further specialist evidence or an independent
        assessment.</p></div></div>
      <div class="step"><div><h3>Decision and payment</h3><p>Accepted, declined, or accepted in part. Income protection then
        moves to ongoing review — you will be asked periodically to confirm you remain unable to work.</p></div></div>
    </div>

    <h2>The four reasons claims fail</h2>

    <h3>1. Non-disclosure</h3>
    <p>The most common. Something material was not disclosed at application — often genuinely forgotten rather than hidden.
      Insurers pull full medical records at claim time, so a consultation you had eight years ago and did not mention will
      surface. The fix is entirely at the application stage: over-disclose, and let the underwriter decide what matters.</p>

    <h3>2. The definition was not met</h3>
    <p>Especially on trauma cover. Every policy pays "on cancer" — they do not all pay on the <em>same</em> cancer. Severity
      thresholds, troponin levels for heart attacks, evidence of permanent deficit for strokes. A diagnosis that feels
      catastrophic can still fall outside a definition. This is why the wording, not the price, is the product.</p>

    <h3>3. An exclusion applied</h3>
    <p>The back exclusion on your income protection, the cardiovascular exclusion on your health cover. These were disclosed
      when the policy was issued — but often skimmed. Knowing your own exclusions is worth ten minutes with your policy
      schedule today.</p>

    <h3>4. Timing</h3>
    <p>Within an initial waiting period, or a condition that first appeared before cover started.
      <a href="/insurance-waiting-periods-nz">See waiting periods</a>.</p>

    ${strip('wellington', 'Whether a claim gets paid is mostly decided the day you apply.')}

    <h2>What this means for how you buy</h2>
    <p>The practical conclusion is uncomfortable for the "compare and click" model: the things that determine whether you
      get paid are all decided before you ever claim, and none of them appear on a price comparison.</p>
    <ul>
      <li>Disclose thoroughly, in writing, and keep a copy of what you disclosed.</li>
      <li>Read the definitions for the conditions you are most likely to face, not all fifty.</li>
      <li>Know your exclusions by name.</li>
      <li>Keep your policy schedule somewhere your partner can find it. A surprising number of claims are delayed because
        nobody knew the policy existed.</li>
    </ul>

    <h2>If a claim is declined</h2>
    <ol>
      <li>Ask for the decline reason in writing, citing the specific policy clause.</li>
      <li>Check the clause against your policy document yourself.</li>
      <li>Ask your adviser to challenge it — this is a large part of what advisers are for.</li>
      <li>Use the insurer's internal complaints process.</li>
      <li>Escalate free of charge to the insurer's external dispute resolution scheme (IFSO, FSCL or similar). Every licensed
        NZ financial service provider must belong to one, and it costs you nothing.</li>
    </ol>
    <div class="note" data-reveal><b>A declined claim is not always the end</b>
      Dispute resolution schemes overturn insurer decisions regularly. Do not treat the first letter as final.</div>`,
    faqs: [
      {
        q: 'How long does a claim take in New Zealand?',
        a: '<p>It varies widely by cover type and complexity. A straightforward life claim with a clear cause can be quick; an income protection or trauma claim requiring specialist evidence takes considerably longer, because the pace is set by how fast medical records and specialist reports arrive. Notifying early is the main thing within your control.</p>',
      },
      {
        q: 'Will claiming push my premium up?',
        a: '<p>Not on an individual guaranteed-renewable policy — the insurer cannot single you out for a rate increase because you claimed. Health insurance is annually renewable and priced by age band and overall claims experience, so it moves for everyone rather than for you specifically.</p>',
      },
      {
        q: 'Who do I claim to if I bought through an adviser?',
        a: '<p>Contact your adviser first. Part of what commission pays for is having someone who knows what was disclosed, what the wording says, and how to push back on a decline. If your adviser is not helping, you can always go directly to the insurer.</p>',
      },
    ],
    related: [
      ['/pre-existing-conditions-nz', 'Pre-existing conditions', 'Non-disclosure risk'],
      ['/adviser-vs-buying-direct', 'Adviser vs direct', 'Who argues for you'],
      ['/insurance-waiting-periods-nz', 'Waiting periods', 'Timing declines'],
    ],
  },

  /* --------------------------------------------------------- self-employed -- */
  {
    slug: 'self-employed-insurance-nz',
    kind: 'guide',
    priority: '0.8',
    title: 'Insurance for Self-Employed and Contractors in NZ',
    h1: 'If you are self-employed or contracting',
    desc:
      'Why self-employed New Zealanders are the most exposed group in the country, the ACC CoverPlus Extra fix, and what cover actually matters.',
    crumb: 'Self-employed',
    hero: { photo: 'sheep-hills', kicker: 'Life stage' },
    standfirst:
      'No sick leave, no employer scheme, and an ACC entitlement calculated from a tax return that may look nothing like your actual life.',
    answer: `<p>Self-employed New Zealanders carry three gaps at once: <strong>no sick leave</strong>, <strong>no employer
      insurance scheme</strong>, and an <strong>ACC entitlement based on your last filed tax return</strong> rather than what
      you actually earn or live on.</p>
      <p>The first fix is usually free-ish and has nothing to do with buying insurance: sort out
      <strong>ACC CoverPlus Extra</strong>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Fix the ACC problem first</h2>
    <p>Standard ACC cover (CoverPlus) for a self-employed person calculates weekly compensation from your most recently
      filed return. That is fine in a steady year. It is a serious problem if you had a start-up year, a quiet year, a year
      with heavy deductions, or a year where you took most of your money as dividends rather than salary.</p>
    <p><strong>ACC CoverPlus Extra</strong> lets you agree a cover amount in advance. Whatever your return said, that agreed
      amount is what gets paid. It also removes the argument at claim time.</p>
    <div class="good-note" data-reveal><b>Do this before you buy anything</b>
      If you are self-employed and have never looked at CoverPlus Extra, that is very likely the highest-value hour available
      to you — and it is a conversation with ACC, not a purchase. Get it right, then look at what is left over.</div>

    <h2>What is still missing after that</h2>
    <p>Everything to do with illness. CoverPlus Extra improves your <em>accident</em> position. It does nothing for cancer, a
      heart condition, MS, mental illness, or the gradual-onset back and joint problems that end a lot of trade careers.
      <a href="/what-acc-does-not-cover">See the full ACC gap →</a></p>

    ${figures([
      ['0 days', 'Statutory sick leave if you work for yourself'],
      ['Last return', 'What standard ACC pays from'],
      ['Illness', 'Still entirely uncovered, either way'],
    ])}

    <h2>The cover that matters most here</h2>
    <ol>
      <li><strong><a href="/income-protection-nz">Income protection</a></strong>, and specifically
        <strong>agreed value</strong> if you can get it. Indemnity policies prove your income at claim time — and if you have
        a bad trading year immediately before a claim, an indemnity policy pays on that bad year. For variable income, agreed
        value is worth the extra. It has become harder to obtain in this market, which is a reason to look sooner.</li>
      <li><strong><a href="/health-insurance-nz">Health insurance</a></strong>, because waiting has a direct dollar cost when
        you are the business. A six-month wait for a knee is an inconvenience for a salaried office worker and a catastrophe
        for a self-employed builder.</li>
      <li><strong><a href="/business-insurance-nz">Business expenses cover</a></strong> if you have real fixed overheads —
        premises, leases, staff. It keeps the business alive while income protection keeps you alive.</li>
      <li><strong><a href="/trauma-insurance-nz">Trauma cover</a></strong> for the immediate cash shock, particularly if
        you have no cash buffer.</li>
    </ol>

    ${strip('sheep-hills', 'When you are the business, the business stops when you do.')}

    <h2>The income-proof problem</h2>
    <p>Self-employed applicants get tripped up on how income is defined. Insurers usually work from your <em>taxable</em>
      income — which, for someone who has been aggressively minimising it, may be far below what the household actually
      spends. The uncomfortable trade-off: the tax structure that saves you money each year can quietly halve the cover you
      qualify for.</p>
    <p>This is worth a joint conversation with your accountant and an adviser, ideally before the next return is filed
      rather than after.</p>

    <h2>A sensible order of operations</h2>
    <ol>
      <li>Sort ACC CoverPlus Extra at a realistic level.</li>
      <li>Work out your true monthly outgoings and your runway. Use the
        <a href="/income-protection-calculator">income runway calculator</a>.</li>
      <li>Get income protection sized to that, with the longest wait period your runway genuinely supports and the longest
        benefit period you can afford.</li>
      <li>Add health cover while you are well.</li>
      <li>Layer trauma and business expenses cover as cashflow allows.</li>
      <li>If there is more than one shareholder, get a buy-sell agreement and shareholder protection sorted with your
        lawyer. <a href="/business-insurance-nz">See business cover →</a></li>
    </ol>`,
    faqs: [
      {
        q: 'I am a contractor through my own company. Which am I?',
        a: '<p>For ACC purposes it depends on whether you pay yourself PAYE salary or take shareholder drawings, and the two are treated differently. This is exactly the situation where standard ACC cover produces a number nobody expects, and where CoverPlus Extra earns its keep. Worth confirming with ACC directly rather than assuming.</p>',
      },
      {
        q: 'Can I claim insurance premiums as a business expense?',
        a: '<p>Sometimes, and the answer changes the tax treatment of any benefit you receive. Broadly, where premiums are deductible the benefit tends to be taxable, and vice versa. Business expenses cover and key person cover have different treatments again. This is a genuine accountant question and worth settling before the policy is written.</p>',
      },
      {
        q: 'My income varies enormously. How do they even price it?',
        a: '<p>Usually on an average of recent years, which is precisely why agreed-value cover matters for variable income — it fixes the figure at application rather than leaving it to be argued about at claim time, when a single bad year can dominate the calculation.</p>',
      },
    ],
    related: [
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'The core gap'],
      ['/income-protection-nz', 'Income protection', 'The main cover here'],
      ['/business-insurance-nz', 'Business cover', 'If you have overheads'],
      ['/acc-vs-income-protection', 'ACC vs income protection', 'Compared'],
    ],
  },

  /* ------------------------------------------------------- first home buyers -- */
  {
    slug: 'first-home-buyers-insurance-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'Insurance for First-Home Buyers in NZ — What You Actually Need',
    h1: 'You have just bought your first home',
    desc:
      'What insurance first-home buyers in New Zealand actually need, what the bank will offer you at the table, and how to do it on a stretched budget.',
    crumb: 'First-home buyers',
    hero: { photo: 'villas', kicker: 'Life stage' },
    standfirst:
      'You have just taken on the largest debt of your life, emptied your KiwiSaver, and someone is sliding an insurance form across the table while you are too tired to read it.',
    answer: `<p>The moment you take on a mortgage is the moment your insurance need changes most sharply in your life —
      because for the first time there is a large debt that does not disappear if your income does.</p>
      <p>The starting shape for most first-home buyers: <strong>life cover sized to the mortgage</strong>, plus
      <strong>something protecting your income</strong> — full income protection if you can afford it, mortgage repayment
      cover if you cannot.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What changed the day you signed</h2>
    <p>Before the mortgage, if you could not work, you could move somewhere cheaper. After it, you have a fixed monthly
      obligation secured against the roof, and a bank that is not interested in why your income stopped.</p>
    <p>That is the whole argument. It is not about death — it is about the fact that a mortgage converts a flexible cost
      into a rigid one.</p>

    <h2>The shape, in priority order</h2>
    <div class="steps mt4" data-reveal>
      <div class="step"><div><h3>Something that protects your income</h3><p>The most likely bad scenario is not dying — it is
        being unable to work for a long stretch. <a href="/income-protection-nz">Income protection</a> is the fuller answer;
        <a href="/mortgage-protection-nz">mortgage repayment cover</a> is the affordable one. If budget is genuinely at the
        limit, start with mortgage cover and upgrade later — <a href="/income-protection-vs-mortgage-protection">the
        comparison is here</a>.</p></div></div>
      <div class="step"><div><h3>Life cover sized to the debt</h3><p>If you bought with a partner, this is about whether the
        survivor keeps the house. Size it to the mortgage plus a buffer, not to a round number. Use the
        <a href="/how-much-life-cover-do-i-need">cover calculator</a>.</p></div></div>
      <div class="step"><div><h3>Health cover, while you are young and well</h3><p>Cheapest it will ever be, and your medical
        history is as clean as it will ever be. Every year you wait removes conditions from your future policy. A
        high-excess hospital plan is the value option — see
        <a href="/health-insurance-cost-nz">the excess lever</a>.</p></div></div>
      <div class="step"><div><h3>Trauma, when there is room</h3><p>A modest amount, sized to twelve months of outgoings, does
        real work without a large premium.</p></div></div>
    </div>

    ${strip('villas', 'A mortgage turns a flexible cost into a rigid one. That is what you are insuring.')}

    <h2>About the cover the bank offers</h2>
    <p>It is convenient, and convenience at that moment is worth something. But it is worth knowing three things before you
      tick the box:</p>
    <ul>
      <li>It is often sized to the <strong>lender's</strong> exposure rather than your household's needs.</li>
      <li>The bank is sometimes the beneficiary, meaning the payout clears the debt rather than going to your family to
        decide what to do with.</li>
      <li>Some bank-arranged cover is underwritten <strong>at claim time</strong> rather than at application. That sounds
        convenient and is the opposite — it means you discover whether you were actually covered at the worst possible
        moment.</li>
    </ul>
    <p>None of that makes it wrong. It makes it worth comparing before you accept it in a room where you have already been
      signing documents for two hours.</p>

    <h2>Doing it on a stretched budget</h2>
    <p>Almost everyone is stretched at this point, and the honest advice is that a cheaper policy you keep beats a better
      policy you cancel in eight months. Levers that reduce premium without gutting protection:</p>
    <ul>
      <li>Lengthen the income protection wait period to match your actual leave and savings.</li>
      <li>Keep the benefit period long — this is the part doing the real work.</li>
      <li>Raise the health insurance excess substantially.</li>
      <li>Skip the everyday/extras module.</li>
      <li>Start with mortgage repayment cover, and <strong>diarise a review in two years</strong>. The review is the part
        people skip, and it is the part that matters.</li>
    </ul>

    <h2>If you are buying with a partner</h2>
    <p>Cover both of you, not just the higher earner. The lower earner's contribution is frequently underestimated because
      it does not show up as salary — childcare, time, the ability to work at all. And check the ownership structure so a
      payout goes where you intend it to.</p>`,
    faqs: [
      {
        q: 'Do I have to take the insurance the bank offers to get the loan?',
        a: '<p>No. Lending is not conditional on buying the lender\'s insurance. You are free to arrange cover wherever you like, including after settlement — though do not leave a long gap, because the exposure starts the day the loan does.</p>',
      },
      {
        q: 'We are young and healthy. Can we wait a couple of years?',
        a: '<p>You can, and the risk of something happening in those two years is genuinely low. The cost of waiting is not really the risk — it is that premiums are set from your age at application and health cover excludes whatever medical history you accumulate in the meantime. Waiting is a bet that costs a little if you win and a lot if you lose.</p>',
      },
      {
        q: 'Should the policy be owned personally or jointly?',
        a: '<p>It affects who receives the money and how quickly, and it interacts with your relationship property position and any trust. It is a short conversation with an adviser and worth having before the policy is issued rather than after.</p>',
      },
    ],
    related: [
      ['/income-protection-vs-mortgage-protection', 'Income vs mortgage protection', 'The key decision'],
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/mortgage-protection-nz', 'Mortgage protection', 'The budget option'],
      ['/new-parents-insurance-nz', 'New parents', 'What changes next'],
    ],
  },

  /* ----------------------------------------------------------- new parents -- */
  {
    slug: 'new-parents-insurance-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'Insurance for New Parents in NZ: What Changes',
    h1: 'You have just had a baby',
    desc:
      'What changes about your insurance needs when you have a child in New Zealand — including the cover for the parent who is not earning.',
    crumb: 'New parents',
    hero: { photo: 'family-beach', kicker: 'Life stage' },
    standfirst:
      'The single largest jump in insurance need in most people\'s lives, arriving in the period when they have the least capacity to think about it.',
    answer: `<p>A child adds roughly eighteen years of financial dependency and, usually, a period where household income
      drops while costs rise. The two things that most often need to change: <strong>the amount of life cover</strong> (it is
      now sized to raising a child, not just clearing a mortgage) and <strong>cover for the parent who is not
      earning</strong>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Sizing life cover once there is a child</h2>
    <p>Before children, life cover is largely about the mortgage. After, it has a second job: replacing income for as long
      as someone depends on it. The usual construction is <em>clear the mortgage, plus income replacement until the youngest
      is independent, plus childcare and education costs, minus savings and existing cover</em>.</p>
    <p>That number is usually a lot larger than people guess — and, importantly, it is <em>temporary</em>. It steps down as
      the mortgage shrinks and the children grow. Run it through the
      <a href="/how-much-life-cover-do-i-need">cover calculator</a>, then revisit it every few years rather than setting it
      once.</p>

    <h2>The parent who is not earning</h2>
    <p>This is the most commonly missed cover in New Zealand, and the reasoning behind missing it is superficially sensible:
      "they don't earn an income, so there is nothing to replace."</p>
    <p>Except there is. If the at-home parent could not care for the children, the earning parent either pays for full-time
      childcare or stops working. Both are large numbers. Cover for a non-earning parent is not sentimental — it is the cost
      of replacing what they do.</p>
    <div class="note" data-reveal><b>Worth pricing properly</b>
      Full-time childcare for two pre-schoolers in a New Zealand city is a substantial annual cost, for years. That is the
      figure the cover is sized against.</div>

    ${strip('family-beach', 'The parent who is not paid is not the parent who is not needed.')}

    <h2>Health cover for the child</h2>
    <p>Children can usually be added to a family health policy for a relatively small amount, and — this is the important
      part — <strong>a child added at birth has no medical history</strong>. Add them later, after any condition has been
      investigated, and that condition follows them as pre-existing for the rest of their insured life.</p>
    <p>Of everything on this page, adding a newborn to a health policy early is the item with the highest ratio of long-term
      value to cost. <a href="/pre-existing-conditions-nz">Why this matters →</a></p>

    <h2>Trauma cover, including the children's benefit</h2>
    <p>Many trauma policies include a child's benefit — usually a modest sum covering a defined set of childhood conditions,
      for very little extra premium. What it really buys is the ability for a parent to stop working, without financial
      consequence, during a child's serious illness. That is a scenario where the financial and emotional needs point in the
      same direction, and where having cash removes an impossible choice.</p>

    <h2>The practical checklist</h2>
    <ol>
      <li>Recalculate life cover for both parents, including the non-earning one.</li>
      <li>Add the baby to health cover now, not later.</li>
      <li>Check whether your income protection benefit still matches your outgoings — they went up.</li>
      <li>Check the child's trauma benefit is on your policy.</li>
      <li>Update your beneficiary nominations and your will. Insurance paid into an estate with no will is a slow,
        expensive outcome at the worst time.</li>
      <li>Diarise a review for when the second child arrives, or in three years.</li>
    </ol>
    <p>And a note on health cover specifically: normal pregnancy and childbirth are generally excluded on NZ health policies
      because maternity care is publicly funded. Complications may be covered after a waiting period of around 12 months, so
      if you are planning another child that is worth checking before you need it.</p>`,
    faqs: [
      {
        q: 'Should we insure the stay-at-home parent?',
        a: '<p>Usually yes. The cover is sized to the cost of replacing what they do — childcare, and the earning parent\'s reduced ability to work — rather than to a salary. It is one of the most commonly skipped covers and one of the more clearly justified ones.</p>',
      },
      {
        q: 'When can I add a newborn to health insurance?',
        a: '<p>Insurers generally allow a newborn to be added within a defined window after birth, often with limited or no underwriting. That window is worth knowing and not missing, because it is the only point in your child\'s life when they have no medical history at all.</p>',
      },
      {
        q: 'Does health insurance cover pregnancy in NZ?',
        a: '<p>Normal pregnancy and birth are excluded by most policies — maternity care is publicly funded here. Some policies cover complications after a waiting period of around 12 months. Check your own wording rather than assuming either way.</p>',
      },
    ],
    related: [
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/life-insurance-nz', 'Life insurance', 'Full guide'],
      ['/health-insurance-nz', 'Health insurance', 'Adding the baby'],
      ['/first-home-buyers-insurance-nz', 'First-home buyers', 'The previous stage'],
    ],
  },
];
