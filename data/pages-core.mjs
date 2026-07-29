import { ADVISER, SITE, adviserLink } from './site.mjs';
import { img, credit, PHOTOS } from './images.mjs';
import { adviserCard, cardGrid, figures, strip, table, esc } from '../lib/components.mjs';

/* ---------------------------------------------------------------- home -- */
const HOME_BODY = `
<section class="hero grain">
  <div class="hero-media">${img('aoraki', { sizes: '100vw', eager: true })}</div>
  <div class="hero-scrim"></div>
  <div class="wrap hero-in">
    <p class="eyebrow">Insurance in New Zealand</p>
    <h1 class="display balance">Work out what you<br>actually need.</h1>
    <p class="lead">Plain-English guides, real New Zealand numbers, and three free calculators — with no email
      gate and nothing sold on this page. When you want a real answer about your own cover, we introduce you to
      ${esc(ADVISER.firstName)}.</p>
    <div class="btn-row mt4">
      <a class="btn btn-primary btn-lg" href="/calculators">Work out my numbers</a>
      <a class="btn btn-ghost btn-lg" href="/types-of-insurance">Start from the beginning</a>
    </div>
    <div class="trust">
      <div><strong>6</strong> covers explained properly</div>
      <div><strong>3</strong> calculators, no email required</div>
      <div><strong>1</strong> licensed adviser, when you want one</div>
    </div>
  </div>
  <p class="hero-credit">${esc(credit('aoraki'))}</p>
</section>

<!-- The hook: the single fact that reframes everything -->
<section class="section band-ink grain">
  <div class="wrap">
    <div class="split">
      <div>
        <p class="eyebrow">Start here</p>
        <h2 class="balance">ACC covers accidents.<br>It does not cover <span style="color:var(--butter)">illness</span>.</h2>
        <p class="lead mt3">Fall off a ladder and ACC pays you up to 80% of your income. Get diagnosed with cancer, a heart
          condition, MS, or back pain that built up over years — and ACC pays nothing at all.</p>
        <p class="mt3" style="color:var(--on-dark-mid)">Almost every insurance product sold in this country exists because of
          that one sentence. Most New Zealanders have never seen it written down.</p>
        <div class="btn-row mt4">
          <a class="btn btn-primary" href="/acc-gap-checker">See the gap in your own numbers</a>
          <a class="btn btn-ghost" href="/what-acc-does-not-cover">What ACC does not cover</a>
        </div>
      </div>
      <figure>
        ${img('coast-aerial', { sizes: '(min-width: 900px) 50vw, 100vw' })}
        <figcaption>${esc(credit('coast-aerial'))}</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- The six covers -->
<section class="section">
  <div class="wrap">
    <p class="eyebrow">The six covers</p>
    <h2 class="balance">Named after the product, not the problem</h2>
    <p class="lead mt3" style="max-width:52ch">Insurance names explain almost nothing. Here is each one described by the
      question it answers instead.</p>
    <div class="mt5">
      ${cardGrid(
        [
          ['/life-insurance-nz', 'Life insurance', 'If my income stopped permanently, would the people who depend on it be okay?'],
          ['/income-protection-nz', 'Income protection', 'How long could I actually go without a pay cheque?'],
          ['/trauma-insurance-nz', 'Trauma cover', 'If I were diagnosed tomorrow, what would I need cash for right now?'],
          ['/health-insurance-nz', 'Health insurance', 'If I needed a hip, a scan or a specialist, could I afford to wait?'],
          ['/mortgage-protection-nz', 'Mortgage protection', 'If I could not work, would we keep the house?'],
          ['/business-insurance-nz', 'Business & key person', 'If the person this business runs on stopped, what would it cost?'],
        ],
        'g3'
      )}
    </div>
  </div>
</section>

${strip('green-road', 'Nobody needs all six. Most people need two or three, sized properly.')}

<!-- Calculators -->
<section class="section band-pale">
  <div class="wrap">
    <p class="eyebrow">Free tools</p>
    <h2 class="balance">Three calculators. No email gate.</h2>
    <p class="lead mt3" style="max-width:56ch">Most insurance calculators online are lead-capture forms wearing a calculator
      costume. These run in your browser, show the answer immediately, and send nothing anywhere.</p>
    <div class="mt5">
      ${cardGrid(
        [
          ['/how-much-life-cover-do-i-need', 'How much life cover do I need?', 'Builds a figure from your mortgage, dependants and existing cover instead of guessing at a round number.'],
          ['/income-protection-calculator', 'How long could you last?', 'Turns your leave, savings and outgoings into a runway in weeks — which is also how you pick a wait period.'],
          ['/acc-gap-checker', 'The ACC gap checker', 'The same six months off work as an accident and as an illness, side by side, in your dollars.'],
        ],
        'g3'
      )}
    </div>
  </div>
</section>

<!-- The numbers -->
<section class="section">
  <div class="wrap">
    <div class="split rev">
      <div>
        <p class="eyebrow">The numbers</p>
        <h2 class="balance">What cover actually costs here</h2>
        <p class="lead mt3">Every insurance site says "it depends". It does — but the ranges are knowable, and knowing them
          is what stops you overpaying by a third.</p>
        ${figures([
          ['$15–$22', 'Monthly, $500k life cover, healthy 30-year-old non-smoker'],
          ['+50–100%', 'What smoking typically adds to the same policy'],
          ['~30%', 'Usual gap between the cheapest and dearest quote for identical cover'],
        ])}
        <div class="btn-row mt4">
          <a class="btn btn-ink" href="/what-it-costs">See the full cost breakdown</a>
        </div>
      </div>
      <figure>
        ${img('villas', { sizes: '(min-width: 900px) 50vw, 100vw' })}
        <figcaption>${esc(credit('villas'))}</figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- Life stages -->
<section class="section band-lilac">
  <div class="wrap">
    <p class="eyebrow">Where you are right now</p>
    <h2 class="balance">The moments this actually changes</h2>
    <div class="mt5">
      ${cardGrid(
        [
          ['/first-home-buyers-insurance-nz', 'You just bought your first home', 'A mortgage converts a flexible cost into a rigid one. That is the whole argument.'],
          ['/new-parents-insurance-nz', 'You just had a baby', 'The largest single jump in insurance need, arriving when you have the least capacity to think about it.'],
          ['/self-employed-insurance-nz', 'You work for yourself', 'No sick leave, no employer scheme, and an ACC entitlement based on your last tax return.'],
        ],
        'g3'
      )}
    </div>
  </div>
</section>

<!-- Questions -->
<section class="section">
  <div class="wrap">
    <div class="with-rail">
      <div>
        <p class="eyebrow">Questions people actually ask</p>
        <h2 class="balance">The ones that get searched at 11pm</h2>
        <div class="related-list mt4">
          <a href="/life-insurance-cost-nz">How much does life insurance cost in NZ?<span>By age</span></a>
          <a href="/what-acc-does-not-cover">Does ACC cover cancer?<span>No — here is why</span></a>
          <a href="/income-protection-vs-mortgage-protection">Income protection or mortgage protection?<span>Compared</span></a>
          <a href="/trauma-vs-income-protection">Trauma cover or income protection — which first?<span>Compared</span></a>
          <a href="/pre-existing-conditions-nz">Can I get cover with a pre-existing condition?<span>Usually, yes</span></a>
          <a href="/health-insurance-vs-public-system">Is health insurance worth it in New Zealand?<span>Honestly</span></a>
          <a href="/adviser-vs-buying-direct">Does using an adviser cost more?<span>Usually not</span></a>
          <a href="/how-insurance-claims-work-nz">Why do insurance claims get declined?<span>Four reasons</span></a>
          <a href="/insurance-waiting-periods-nz">When does my cover actually start?<span>Waiting periods</span></a>
        </div>
      </div>
      <div class="rail">
        ${adviserCard('index', 'rail', { compact: true, heading: 'Rather just ask someone?' })}
      </div>
    </div>
  </div>
</section>

<!-- Arron -->
<section class="section-lg band-ink grain">
  <div class="wrap">
    <div class="split">
      <div>
        <p class="eyebrow">Who you would actually talk to</p>
        <h2 class="balance">${esc(ADVISER.fullName)}</h2>
        <p class="lead mt3">${esc(ADVISER.role)} at ${esc(ADVISER.firm)} in ${esc(ADVISER.city)}, working with people across
          ${esc(ADVISER.serves)}.</p>
        <p class="mt3" style="color:var(--on-dark-mid)">Everything on this site is general information — it deliberately
          stops short of telling you what to do, because that is regulated financial advice and it requires a licence.
          ${esc(ADVISER.firstName)} has one. He compares cover across New Zealand's insurers, knows which of them
          underwrite which health conditions favourably, and there is no charge to talk to him.</p>
        <div class="btn-row mt4">
          <a class="btn btn-primary btn-lg" href="/talk-to-arron">Talk to ${esc(ADVISER.firstName)}</a>
          <a class="btn btn-ghost" href="${ADVISER.instagram}" rel="noopener nofollow">${esc(ADVISER.instagramHandle)}</a>
        </div>
        <p class="small mt4" style="color:#8A929C">We may benefit from that introduction. <a href="/about">Here is exactly
          how, and why this site exists</a> — we would rather say it plainly than bury it.</p>
      </div>
      <figure>
        ${img('wellington', { sizes: '(min-width: 900px) 50vw, 100vw' })}
        <figcaption>${esc(credit('wellington'))}</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap center">
    <h2 class="balance" style="max-width:22ch;margin-inline:auto">Start with the number, not the product</h2>
    <p class="lead mt3 mx-auto" style="max-width:52ch">Five minutes with a calculator beats an hour with a brochure. You will
      know what you are aiming at, and you will be much harder to sell something you do not need.</p>
    <div class="btn-row mt4" style="justify-content:center">
      <a class="btn btn-primary btn-lg" href="/calculators">Open the calculators</a>
      <a class="btn btn-ghost btn-lg" href="/types-of-insurance">Read the overview first</a>
    </div>
  </div>
</section>`;

/* --------------------------------------------------------- talk to Arron -- */
const CONTACT_BODY = `
<section class="hero grain">
  <div class="hero-media">${img('auckland', { sizes: '100vw', eager: true })}</div>
  <div class="hero-scrim"></div>
  <div class="wrap hero-in">
    <p class="eyebrow">No charge, no obligation</p>
    <h1 class="balance">Talk to ${esc(ADVISER.firstName)}</h1>
    <p class="lead">${esc(ADVISER.fullName)} is a ${esc(ADVISER.role)} at ${esc(ADVISER.firm)}, based in
      ${esc(ADVISER.city)} and working with people across ${esc(ADVISER.serves)}.</p>
  </div>
  <p class="hero-credit">${esc(credit('auckland'))}</p>
</section>

<div class="wrap section">
  <div class="with-rail">
    <article class="article-body">
      <div class="answer" data-reveal>
        <p class="eyebrow">Why talk to an adviser at all</p>
        <p>Because everything on this site stops at general information. Working out whether a specific policy, from a
          specific insurer, with specific exclusions, is right for <em>you</em> is regulated financial advice in New Zealand
          and it requires a licence. ${esc(ADVISER.firstName)} holds one.</p>
        <p>In practice, the value is in three places: comparing insurers on wording and underwriting appetite rather than
          just price, getting your health history in front of the insurer most likely to accept it, and having someone
          whose job it is to argue your corner at claim time.</p>
      </div>

      <h2>What happens when you get in touch</h2>
      <div class="steps mt4" data-reveal>
        <div class="step"><div><h3>A conversation, not a pitch</h3><p>What you earn, what you owe, who depends on you, and
          what you would want to happen if you could not work. Usually half an hour.</p></div></div>
        <div class="step"><div><h3>He compares the market</h3><p>Across New Zealand's insurers — on price, on policy
          wording, and on which of them is most likely to accept your particular health history on good terms.</p></div></div>
        <div class="step"><div><h3>A recommendation, in writing</h3><p>With the reasoning, the exclusions and the costs set
          out. Licensed advisers must put your interests first and disclose how they are paid — ask him both.</p></div></div>
        <div class="step"><div><h3>He handles the application</h3><p>Including the back-and-forth with underwriters, which
          is the part that takes the time. And he is there at claim time, which is the part that matters.</p></div></div>
      </div>

      <h2>How to reach him</h2>
      <div class="grid g2 mt3" data-reveal>
        <a class="card" href="${adviserLink('talk-to-arron', 'contact-primary')}" rel="noopener">
          <h3>Enquire through ${esc(ADVISER.firm)}</h3>
          <p class="small dim mt2">The contact form at ${esc(ADVISER.firm)} — mention you came from Cover Check and ask for
            ${esc(ADVISER.firstName)} by name.</p>
        </a>
        <a class="card" href="${ADVISER.phoneHref}">
          <h3>${esc(ADVISER.phone)}</h3>
          <p class="small dim mt2">${esc(ADVISER.firm)}'s free phone line. Ask for ${esc(ADVISER.firstName)}.</p>
        </a>
        <a class="card" href="${ADVISER.instagram}" rel="noopener nofollow">
          <h3>${esc(ADVISER.instagramHandle)}</h3>
          <p class="small dim mt2">${esc(ADVISER.firstName)} posts about insurance on Instagram. A DM is a perfectly good
            way to start.</p>
        </a>
        <a class="card" href="mailto:${ADVISER.email}?subject=Enquiry%20for%20${encodeURIComponent(ADVISER.firstName)}%20(via%20Cover%20Check)">
          <h3>${esc(ADVISER.email)}</h3>
          <p class="small dim mt2">Email ${esc(ADVISER.firm)} and ask for ${esc(ADVISER.firstName)}.</p>
        </a>
      </div>

      <h2>Worth doing before you call</h2>
      <p>You will get far more out of the conversation — and be much harder to sell something you do not need — if you turn
        up with your own numbers. Fifteen minutes with these three will do it:</p>
      <div class="related-list mt3" data-reveal>
        <a href="/how-much-life-cover-do-i-need">Work out roughly how much cover you need<span>Calculator</span></a>
        <a href="/income-protection-calculator">Work out how long you could last without income<span>Calculator</span></a>
        <a href="/acc-gap-checker">See what ACC would and would not pay you<span>Calculator</span></a>
      </div>

      <h2>Questions worth asking him</h2>
      <ol>
        <li>How are you paid, and what would you earn from this policy?</li>
        <li>How many insurers can you place business with, and did you consider more than one for me?</li>
        <li>Why this insurer for my situation specifically?</li>
        <li>Stepped or level premiums, and why?</li>
        <li>What exclusions are on my policy, and why are they there?</li>
        <li>If I claimed, what exactly would you do?</li>
      </ol>
      <p>A good adviser answers all six without flinching. <a href="/adviser-vs-buying-direct">More on what advisers
        do →</a></p>

      <div class="note mt5" data-reveal><b>Our disclosure, up front</b>
        Cover Check is not part of ${esc(ADVISER.firm)}. This site was built by ${esc(SITE.builtBy)}, who is a friend of
        ${esc(ADVISER.firstName)}'s, and it exists to send him enquiries. We may benefit from that.
        <a href="/about">The full version is here</a> — including what we will not do because of it.</div>

      <p class="disclaimer">Cover Check does not provide financial advice and is not a financial advice provider. Information
        on this site is general in nature. ${esc(ADVISER.fullName)} provides regulated financial advice under
        ${esc(ADVISER.firm)}'s licence — ask him for his disclosure statement, which he is required to give you.</p>
    </article>
    <div class="rail">
      ${adviserCard('talk-to-arron', 'rail', { compact: true, heading: 'Ready when you are' })}
    </div>
  </div>
</div>`;

export const CORE_PAGES = [
  {
    slug: 'index',
    kind: 'core',
    priority: '1.0',
    title: 'Cover Check NZ: Insurance Explained, No Sales Pitch',
    h1: 'Work out what you actually need',
    desc: SITE.description,
    hero: { photo: 'aoraki' },
    updated: '2026-07-30',
    body: HOME_BODY,
  },

  {
    slug: 'talk-to-arron',
    kind: 'core',
    priority: '0.9',
    title: `Talk to ${ADVISER.fullName} — Insurance Adviser, ${ADVISER.city}`,
    h1: `Talk to ${ADVISER.firstName}`,
    crumb: `Talk to ${ADVISER.firstName}`,
    desc: `${ADVISER.fullName} is a licensed financial adviser at ${ADVISER.firm} in ${ADVISER.city}. No charge to talk, no obligation — here is how to reach him and what to ask.`,
    hero: { photo: 'auckland' },
    updated: '2026-07-30',
    body: CONTACT_BODY,
  },

  /* ------------------------------------------------------------- about -- */
  {
    slug: 'about',
    kind: 'core',
    priority: '0.6',
    title: 'Why This Site Exists — Cover Check NZ',
    h1: 'Why this site exists',
    crumb: 'About',
    desc:
      'Who built Cover Check, why it sends enquiries to one adviser, how that is paid for, and what we will not do because of it.',
    hero: { photo: 'still-lake', kicker: 'About' },
    standfirst:
      'A site that funnels you toward one adviser owes you a straight explanation of why. Here it is, before you read anything else.',
    answer: `<p>Cover Check was built by <strong>${esc(SITE.builtBy)}</strong>, who is not an insurance adviser and does not
      hold a financial advice licence. It exists to answer the questions New Zealanders search about insurance, and to
      introduce the ones who want advice to <strong>${esc(ADVISER.fullName)}</strong> — a licensed financial adviser at
      ${esc(ADVISER.firm)}, and a friend.</p>
      <p><strong>We may benefit from that introduction.</strong> That is the commercial arrangement and we would rather put
      it in the second paragraph than the footer.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>The obvious problem with that</h2>
    <p>A site that makes money from insurance enquiries has an incentive to tell you that you need more insurance. We are
      aware of it, and rather than claim to be above it, here is what we do about it.</p>

    <h3>We publish the case against</h3>
    <p>Read <a href="/health-insurance-vs-public-system">health insurance vs the public system</a> — it says plainly that a
      financially secure person can reasonably decide not to buy health cover. Read
      <a href="/trauma-insurance-nz">trauma cover</a> — it says trauma is the product most likely to be over-sold and
      explains why. Read <a href="/life-insurance-nz">life insurance</a> — it has a section titled "who does not need it".</p>
    <p>An honest site about insurance has to be able to say "not you, and not that". If ours ever stops doing that, it has
      stopped being useful.</p>

    <h3>We do not gate anything</h3>
    <p>The three <a href="/calculators">calculators</a> run entirely in your browser. There is no email field, nothing is
      transmitted, nothing is stored, and no result arrives via a salesperson. You can use this entire site and never
      contact anybody.</p>

    <h3>We do not give advice</h3>
    <p>Everything here is general information about how insurance works in New Zealand. It deliberately stops short of
      telling you what to do, because that is regulated financial advice and it requires an FMA licence — which
      ${esc(ADVISER.firstName)} has and this site does not.</p>

    <h3>We do not invent people</h3>
    <p>There are no fabricated testimonials on this site, no stock-photo "advisers", and no invented case studies presented
      as real clients. The photographs are real New Zealand landscape photography, credited on
      <a href="/credits">the credits page</a>. If we ever publish a client story it will be a real named person who agreed
      to it.</p>

    ${strip('still-lake', 'If a site about insurance cannot tell you when not to buy it, it is a brochure.')}

    <h2>Why ${esc(ADVISER.firstName)}, specifically</h2>
    <p>Because ${esc(SITE.builtBy)} knows him, and would send his own family to him. That is the entire basis of the
      recommendation, and it is worth being clear that this is a personal relationship rather than the output of a
      comparison process. We have not surveyed every adviser in New Zealand and concluded he is the best one — nobody could.</p>
    <p>What we can tell you objectively: he is a ${esc(ADVISER.role)} at ${esc(ADVISER.firm)} in ${esc(ADVISER.city)}, a
      family-run brokerage, and he provides regulated financial advice under their licence. Licensed advisers in New Zealand
      operate under a statutory duty to put your interests first and must disclose how they are paid. Ask him for his
      disclosure statement — he is required to give it to you.</p>
    <p>And if you would rather use a different adviser, that is a completely reasonable response to reading this page. The
      <a href="/calculators">calculators</a> and the guides work just as well.</p>

    <h2>How we write this</h2>
    <p>Sourcing, dating and correction policy are set out on <a href="/how-we-write-this">how we write this</a>. The short
      version: every figure carries a dated source, we publish ranges rather than fake precision, and where we are not sure
      we say so instead of writing around it.</p>

    <h2>Corrections</h2>
    <p>If something here is wrong — a number, a policy detail, a change in how an insurer operates — tell us and we will fix
      it and date the fix. Insurance detail changes constantly and a site like this decays without maintenance.</p>`,
    faqs: [
      {
        q: 'Are you an insurance company?',
        a: '<p>No. Cover Check is an independent information site. It is not an insurer, not a broker, and not a financial advice provider. It cannot sell you a policy and does not try to.</p>',
      },
      {
        q: 'Do you get paid if I contact Arron?',
        a: '<p>We may benefit from introductions made through this site. We are not going to pretend otherwise — it is why the site exists. What we have tried to do is build something genuinely useful whether or not you ever make contact.</p>',
      },
      {
        q: 'Is my calculator data sent anywhere?',
        a: '<p>No. The calculators are plain JavaScript running in your browser. Nothing is transmitted, nothing is stored, and there is no form submission. You can check this by opening the page with your network tools open, or by turning off your internet after the page loads — they still work.</p>',
      },
    ],
    related: [
      ['/how-we-write-this', 'How we write this', 'Sourcing and corrections'],
      ['/adviser-vs-buying-direct', 'Adviser vs buying direct', 'The case both ways'],
      ['/talk-to-arron', 'Talk to Arron', 'If you want to'],
    ],
  },

  /* -------------------------------------------------- editorial policy -- */
  {
    slug: 'how-we-write-this',
    kind: 'core',
    priority: '0.5',
    title: 'How We Write This: Sourcing and Corrections',
    h1: 'How we write this',
    crumb: 'How we write this',
    desc:
      'Cover Check\'s editorial rules: where figures come from, why we publish ranges instead of fake precision, and how corrections work.',
    hero: { photo: 'fern', kicker: 'Editorial' },
    standfirst:
      'Insurance content online is mostly either a brochure or a lead form. These are the rules we hold ourselves to so this is neither.',
    answer: `<p>Five rules: <strong>every figure carries a dated source</strong>; <strong>ranges, not fake
      precision</strong>; <strong>no invented people</strong>; <strong>general information only, never advice</strong>; and
      <strong>we say when we do not know</strong>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>1. Every figure carries a dated source</h2>
    <p>Where we publish a premium range, a market share or a waiting period, there is a line under it saying where it came
      from and when it was compiled. Insurance detail changes constantly — premiums are reset annually, policy wordings get
      updated, insurers change their appetite for particular conditions. An undated number on an insurance site is close to
      worthless.</p>
    <p>Our cost figures are compiled from published New Zealand comparison sources (including MoneyHub, Policywise, Quashed
      and QuoteHub) and from insurers' own published material, as at July 2026. We are not an insurer and we do not have
      access to underwriting tables.</p>

    <h2>2. Ranges, not fake precision</h2>
    <p>We will tell you that a healthy 30-year-old non-smoker can commonly get $500,000 of life cover for about $15–$22 a
      month. We will not tell you it costs $18.40, because we cannot know that and neither can anyone else without
      underwriting you. Precision you cannot support is a form of dishonesty.</p>
    <p>Where a range would mislead more than it helps — health insurance premiums, which vary by insurer, plan, excess,
      region and module — we say so and explain the <em>shape</em> of the cost instead of publishing a table that would be
      wrong for most readers.</p>

    <h2>3. No invented people</h2>
    <p>No fabricated testimonials, no fictional case studies presented as real clients, no stock-photo advisers, no
      "as a father of three" byline attached to nobody. Where we illustrate a scenario it is described as a scenario.</p>
    <p>The photography on this site is real New Zealand landscape and street photography under the Unsplash licence, and
      every photographer is credited on <a href="/credits">the credits page</a> even though the licence does not require
      it.</p>

    <h2>4. General information, never advice</h2>
    <p>This is a legal line as well as an editorial one. In New Zealand, telling someone what they should do with their
      money — recommending a particular product, or a particular insurer, for their situation — is <strong>regulated
      financial advice</strong> and requires a Financial Advice Provider licence from the FMA. General information about how
      products work does not.</p>
    <p>So we explain mechanisms, publish ranges, and describe trade-offs. What we never do is direct you to a particular
      product or name an insurer as the right one for your circumstances. Where a decision genuinely requires advice, we say
      that and point you to someone licensed to give it. Every page carries this note explicitly.</p>

    <h2>5. We say when we do not know</h2>
    <p>Several pages here contain sentences like "this is a genuine accountant question" or "individual claims turn on
      facts". Those are not hedges to avoid liability — they are the honest answer. Tax treatment of income protection,
      ownership structures, and ACC entitlement decisions all genuinely depend on circumstances a website cannot see.</p>

    ${strip('fern', 'Precision you cannot support is a form of dishonesty.')}

    <h2>What we are not</h2>
    <ul>
      <li><strong>Not a comparison engine.</strong> We do not quote or rank insurers. We do not have live pricing.</li>
      <li><strong>Not an insurer or a broker.</strong> We cannot sell you anything.</li>
      <li><strong>Not independent of commercial interest.</strong> This site introduces people to one adviser and may
        benefit from it. <a href="/about">Stated in full here</a>.</li>
      <li><strong>Not a substitute for the policy document.</strong> Where this site and an insurer's current wording
        disagree, the wording is right and we are wrong.</li>
    </ul>

    <h2>Corrections</h2>
    <p>If you find something wrong, tell us. We will correct it and update the review date on the page. Every page shows
      when it was last reviewed, so you can judge for yourself how stale it might be.</p>
    <p>Pages touching health outcomes and financial decisions get reviewed on a shorter cycle than the rest, because that is
      where being out of date does the most harm.</p>`,
    related: [
      ['/about', 'Why this site exists', 'Our disclosure'],
      ['/credits', 'Photo credits', 'Every photographer'],
      ['/talk-to-arron', 'Talk to Arron', 'For actual advice'],
    ],
  },

  /* ------------------------------------------------------------ credits -- */
  {
    slug: 'credits',
    kind: 'core',
    priority: '0.3',
    title: 'Photo Credits — Cover Check NZ',
    h1: 'Photo credits',
    crumb: 'Credits',
    desc: 'Every photograph on Cover Check and the photographer who took it. Real New Zealand photography under the Unsplash Licence, credited even though it need not be.',
    hero: { photo: 'coast-aerial', kicker: 'Credits' },
    standfirst:
      'All photography here is real New Zealand work under the Unsplash licence, which does not require attribution. We credit it anyway.',
    answer: `<p>Every image on this site is a real photograph, licensed for commercial use under the
      <a href="https://unsplash.com/license" rel="noopener nofollow">Unsplash Licence</a>. None of it is AI-generated, and
      there are no stock-photo people posing as advisers or clients.</p>`,
    updated: '2026-07-30',
    body2: `
    ${table({
      caption: '',
      head: ['Photograph', 'Photographer'],
      rows: Object.values(PHOTOS).map((p) => [
        esc(p.alt),
        `<a href="https://unsplash.com/@${p.un}" rel="noopener nofollow">${esc(p.by)}</a>`,
      ]),
      source: 'All images used under the Unsplash Licence. Downloaded and served from this site rather than hotlinked.',
    })}
    <h2>Type</h2>
    <p>Set in <strong>Poppins</strong> (Indian Type Foundry) and <strong>Fraunces</strong> (Undercase Type), both under the
      SIL Open Font Licence 1.1, self-hosted rather than loaded from a third party.</p>
    <p>The colour palette deliberately echoes <a href="${ADVISER.firmUrl}" rel="noopener">${esc(ADVISER.firm)}</a>'s, so
      that arriving there from here does not feel like a different conversation.</p>`,
    related: [
      ['/how-we-write-this', 'How we write this', 'Editorial rules'],
      ['/about', 'Why this site exists', 'Disclosure'],
    ],
  },
];
