import { table, figures, strip } from '../lib/components.mjs';

/* Every figure on this site carries a dated source line. If we cannot source it,
   we do not publish it. See /how-we-write-this. */
const SRC_COST =
  'Indicative NZ market ranges compiled July 2026 from published comparison data (MoneyHub, Policywise, Quashed). Your own price depends on age, health, smoking status, occupation and the insurer.';

export const COVER_PAGES = [
  /* ------------------------------------------------------------------ hub -- */
  {
    slug: 'types-of-insurance',
    kind: 'guide',
    priority: '0.9',
    title: 'Types of Insurance in NZ: What Each One Does',
    h1: 'The six covers, and what each one is actually for',
    desc:
      'Life, health, income protection, trauma, mortgage protection and business cover — what each one pays, when it pays, and which gap it was invented to fill.',
    crumb: 'Types of cover',
    hero: { photo: 'aoraki', kicker: 'Start here' },
    standfirst:
      'Insurance names are unhelpful. Almost all of them describe the <em>product</em> instead of the problem it solves. Here is each one described by the problem instead.',
    answer: `<p>New Zealanders mostly buy six covers. <strong>Life</strong> pays a lump sum when you die.
      <strong>Trauma</strong> pays a lump sum when you are diagnosed with a listed serious illness.
      <strong>Income protection</strong> pays a monthly amount while you cannot work.
      <strong>Health</strong> pays for private medical treatment so you are not waiting in the public queue.
      <strong>Mortgage protection</strong> is a narrower income protection sized to your repayments.
      <strong>Business cover</strong> keeps a company running when a key person stops.</p>
      <p>Two of them — trauma and income protection — exist almost entirely because <a href="/what-acc-does-not-cover">ACC covers accidents but not illness</a>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>The one distinction that explains everything</h2>
    <p>If you learn one thing on this site, learn this: New Zealand has ACC, and ACC is generous — but it is an
      <strong>accident</strong> scheme. Fall off a ladder and ACC is there. Get diagnosed with cancer, MS, a heart condition
      or a back problem that did not come from a specific accident, and ACC is not there at all.</p>
    <p>Almost every personal insurance product sold in this country is designed around that single sentence. Once you see it,
      the product names stop being confusing.</p>
    ${figures([
      ['Accidents', 'Covered by ACC — weekly compensation at up to 80% of income'],
      ['Illness', 'Not covered by ACC — this is the gap the insurance market fills'],
      ['Two shapes', 'Lump sum (life, trauma) or monthly (income protection)'],
    ])}

    <h2>Cover by cover</h2>

    <h3>1. Life insurance — a lump sum for the people left behind</h3>
    <p>Pays an agreed amount to your estate or nominated people when you die. It is the simplest product in the market and
      usually the cheapest per dollar of cover, because the insurer is paying once, on an event that is certain but usually
      far away. Most policies also pay early on terminal illness diagnosis.</p>
    <p>The question it answers: <em>if my income stopped permanently tomorrow, would the people who depend on it be okay?</em>
      <a href="/life-insurance-nz">Full guide to life insurance in NZ →</a></p>

    <h3>2. Trauma cover — a lump sum on diagnosis, while you are still alive</h3>
    <p>Also sold as "critical illness". Pays a tax-free lump sum when you are diagnosed with one of a listed set of conditions
      — cancer of a specified severity, heart attack, stroke, major organ failure and so on. You do not have to be unable to
      work, and you do not have to spend it on medical bills. People use it to clear a mortgage, pay for treatment that is not
      publicly funded, or simply to buy a year of not worrying.</p>
    <p>The question it answers: <em>if I got seriously ill, what would I do with a pile of cash right now?</em>
      <a href="/trauma-insurance-nz">Full guide to trauma cover →</a></p>

    <h3>3. Income protection — a monthly payment while you cannot work</h3>
    <p>Replaces a percentage of your income (commonly up to about 75%) after a chosen stand-down period, for a chosen benefit
      period. It is the only product that covers the long, boring middle of a serious illness: the eighteen months where you
      are not dying and not recovered, and the mortgage is still due.</p>
    <p>The question it answers: <em>how long could I actually go without a pay cheque?</em>
      <a href="/income-protection-nz">Full guide to income protection →</a></p>

    <h3>4. Health insurance — skipping the public waiting list</h3>
    <p>Pays for private treatment: surgery, specialist consultations, diagnostics, and — the part most people underrate —
      non-Pharmac-funded cancer drugs. New Zealand's public system will treat you. Health insurance largely buys you
      <em>timing</em> and <em>choice</em>, which for a working-age person with a mortgage is not a small thing.</p>
    <p>The question it answers: <em>if I needed a hip, a scan or a specialist, could I afford to wait?</em>
      <a href="/health-insurance-nz">Full guide to health insurance →</a></p>

    <h3>5. Mortgage protection — income protection, sized to the house</h3>
    <p>A narrower cover that replaces your mortgage or rent payments rather than your income. Cheaper, simpler, and popular
      with first-home buyers whose budget is already stretched. The trade-off is that it protects the roof and nothing else —
      groceries, power and childcare do not stop.</p>
    <p><a href="/income-protection-vs-mortgage-protection">Income protection vs mortgage protection, compared →</a></p>

    <h3>6. Business and key person cover</h3>
    <p>For companies rather than families. Key person cover pays the business a lump sum if someone the business depends on
      cannot work. Shareholder protection funds the buy-out of a departing owner's shares. There is also business expenses
      cover, which keeps the lights on — rent, leases, staff — while an owner-operator is out.</p>
    <p><a href="/business-insurance-nz">Full guide to business cover →</a></p>

    ${strip('green-road', 'Nobody needs all six. Most people need two or three, sized properly.')}

    <h2>So which do you actually need?</h2>
    <p>There is no universal answer and anyone who gives you one is selling something. But the ordering question is usually
      the same, and it is not "which product is best" — it is <strong>"what would break first?"</strong></p>
    <ul>
      <li><strong>Single, renting, no dependants, no debt.</strong> Nobody is financially harmed if you die. But you would
        still be harmed if you could not work. Income protection and health tend to matter more than life cover.</li>
      <li><strong>Mortgage, partner, young kids.</strong> This is the sharpest need in the country. A lump sum that clears the
        mortgage plus something that replaces income is the usual starting shape.</li>
      <li><strong>Self-employed or contracting.</strong> No sick leave, no employer scheme, and often no ACC CoverPlus Extra
        set up properly. Income protection carries the most weight here.</li>
      <li><strong>Mortgage nearly gone, kids independent.</strong> The need for large life cover often falls away. Health and
        trauma tend to become the priority as premiums start to climb with age.</li>
    </ul>
    <p>Work through your own version with the <a href="/how-much-life-cover-do-i-need">cover calculator</a>, or read the
      <a href="/what-acc-does-not-cover">ACC gap page</a> first if you have never looked at it.</p>`,
    faqs: [
      {
        q: 'Can I hold more than one type at once?',
        a: '<p>Yes, and most people who are properly covered do. The common combination is life cover sized to the mortgage, income protection sized to the mortgage plus living costs, and health cover. Trauma is often added in a smaller amount as a buffer for the first year of a diagnosis, because it pays on diagnosis rather than on inability to work.</p>',
      },
      {
        q: 'Does one policy ever reduce another payout?',
        a: '<p>It can. Some trauma policies are sold as "accelerated" — bundled with life cover, so a trauma claim reduces the life sum insured by the amount paid. Standalone trauma does not do this but costs more. This is exactly the kind of structural detail that is easy to get wrong buying direct, and it only shows up at claim time.</p>',
      },
      {
        q: 'Is KiwiSaver or my mortgage lender insurance enough?',
        a: '<p>Lender-arranged cover is usually sized to the lender\'s interest rather than yours, and the bank is often the beneficiary. It is not automatically bad, but it is worth knowing what it actually pays and to whom before you assume the family is covered.</p>',
      },
    ],
    related: [
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'The gap everything else fills'],
      ['/what-it-costs', 'What cover costs in New Zealand', 'Real ranges by age'],
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/adviser-vs-buying-direct', 'Adviser vs buying direct', 'What changes'],
    ],
  },

  /* --------------------------------------------------------------- ACC gap -- */
  {
    slug: 'what-acc-does-not-cover',
    kind: 'guide',
    priority: '0.9',
    title: 'What ACC Does Not Cover in New Zealand (2026) — The Illness Gap',
    h1: 'What ACC does not cover',
    desc:
      'ACC covers accidents, not illness. Where the line falls for cancer, heart conditions and back pain, and what Kiwis use to fill the gap.',
    crumb: 'What ACC does not cover',
    hero: { photo: 'coast-aerial', kicker: 'The gap' },
    standfirst:
      'Most New Zealanders believe they are more covered than they are — and the reason is one word in the ACC name that almost nobody reads carefully.',
    answer: `<p><strong>ACC covers injury caused by an accident. It does not cover illness.</strong> If you are off work
      because of cancer, a stroke, a heart condition, multiple sclerosis, mental illness, or degenerative back or joint pain
      that did not come from a specific accident, ACC pays you nothing.</p>
      <p>In that situation your income falls back on sick leave (a statutory minimum of 10 days a year), then annual leave,
      then savings, then a means-tested benefit. For most working households that runway is measured in weeks.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What ACC does cover — credit where it is due</h2>
    <p>ACC is genuinely one of the better schemes in the world and it is easy to undersell it. If you are injured in an
      accident in New Zealand — at work, at home, on the road, playing sport — ACC generally covers treatment costs and pays
      <strong>weekly compensation at up to 80% of your pre-injury income</strong> after a stand-down, for as long as the
      injury keeps you off work.</p>
    <p>It applies to everyone: employees, self-employed, visitors, children, people who were entirely at fault. There is no
      claim against anyone. That is the trade — New Zealanders gave up the right to sue for personal injury.</p>

    <h2>Where the line actually falls</h2>
    ${table({
      caption: 'The rough shape of the boundary. Individual claims turn on facts and ACC decisions can be reviewed.',
      head: ['Situation', 'ACC?'],
      rows: [
        ['Broke your leg mountain biking', 'Covered'],
        ['Back injury from a specific lifting incident at work', 'Usually covered'],
        ['Back pain that came on gradually over years', 'Usually <strong>not</strong> covered'],
        ['Cancer — almost all forms', '<strong>Not covered</strong>'],
        ['Heart attack or stroke with no accident cause', '<strong>Not covered</strong>'],
        ['Heart attack caused by a work accident', 'May be covered'],
        ['Depression or anxiety on its own', '<strong>Not covered</strong>'],
        ['Mental injury caused by a covered physical injury', 'May be covered'],
        ['Complications of surgery (treatment injury)', 'Often covered'],
        ['Arthritis, MS, diabetes and other degenerative or systemic illness', '<strong>Not covered</strong>'],
        ['Illness contracted overseas', '<strong>Not covered</strong>'],
      ],
      source:
        'General position under the Accident Compensation Act 2001, current as at July 2026. ACC decisions are made case by case — see acc.co.nz for your own situation.',
    })}

    <div class="gap-note" data-reveal><b>The statistic worth sitting with</b>
      The conditions most likely to stop a New Zealander working for a long stretch — cancer, cardiovascular disease and
      musculoskeletal problems that build up over time — sit almost entirely on the wrong side of that line.</div>

    ${strip('still-lake', 'ACC is an accident scheme wearing a name that sounds like it covers everything.')}

    <h2>Three specific traps</h2>

    <h3>1. "Gradual process" back and joint pain</h3>
    <p>This is the most common surprise. People assume a back injury is a back injury. ACC distinguishes between an injury
      from an identifiable accident and a condition that developed gradually — and gradual-process claims are declined
      routinely unless they meet a narrow work-related test. Yet gradual musculoskeletal pain is one of the leading causes of
      long-term work absence in this country.</p>

    <h3>2. Self-employed people who never sorted their cover level</h3>
    <p>If you are self-employed, ACC's standard cover (CoverPlus) pays based on your <em>last filed</em> tax return. Have a
      quiet year, a start-up year, or a year where you paid yourself in dividends rather than salary, and your ACC
      entitlement can be far below what you actually live on. <strong>CoverPlus Extra</strong> lets you agree a fixed
      cover amount in advance — but you have to ask for it, and a great many contractors never do.</p>

    <h3>3. Assuming 80% is 80% of what you spend</h3>
    <p>Weekly compensation is 80% of pre-injury earnings, and it is taxable. For a household running close to its income,
      losing 20% plus any overtime, commission or contracting variability is not a rounding error.</p>

    <h2>What people use to fill the gap</h2>
    <ul>
      <li><strong><a href="/income-protection-nz">Income protection</a></strong> — the direct answer. It pays for illness as
        well as injury, which is the whole point. Most policies offset against ACC so you are not paid twice, and that offset
        is a good thing: it is why the premium is affordable.</li>
      <li><strong><a href="/trauma-insurance-nz">Trauma cover</a></strong> — pays a lump sum on diagnosis of a listed
        condition, regardless of whether you can work. It covers the immediate cash shock: travel to treatment, a partner
        dropping to part time, drugs Pharmac does not fund.</li>
      <li><strong><a href="/health-insurance-nz">Health insurance</a></strong> — does not replace income, but shortens the
        time you are off it by getting you treated sooner.</li>
    </ul>

    <h2>How to check your own exposure in five minutes</h2>
    <ol>
      <li>Find your last payslip. How many sick days do you actually have banked?</li>
      <li>Add annual leave. That is your real runway before savings.</li>
      <li>Look at your monthly outgoings — mortgage or rent, insurance, power, food, childcare. That is the number that does
        not stop.</li>
      <li>Divide savings by that number. That is how many months you have.</li>
      <li>If it is under six, you have found the thing worth looking at first.</li>
    </ol>
    <p>The <a href="/income-protection-calculator">income protection calculator</a> does steps 2 to 5 for you.</p>`,
    faqs: [
      {
        q: 'Does ACC cover cancer?',
        a: '<p>No, not in the ordinary case. Cancer is an illness, not an injury, so it falls outside ACC. The narrow exceptions are work-related cancers caused by proven occupational exposure to a listed substance, and cancer caused by a treatment injury. For almost everyone diagnosed with cancer in New Zealand, ACC pays nothing toward lost income.</p>',
      },
      {
        q: 'If ACC declines me, can I do anything?',
        a: '<p>Yes. ACC decisions can be formally reviewed, and a meaningful share of reviewed decisions are overturned. There are free advocacy services. This is separate from insurance, but worth knowing before you accept a decline.</p>',
      },
      {
        q: 'Do I still need income protection if I have ACC levies deducted?',
        a: '<p>Paying ACC levies gives you accident cover. It does nothing for illness. Whether you need income protection on top depends on how long your household could absorb an illness with no income — which is a maths question, not a sales question.</p>',
      },
      {
        q: 'Does income protection pay on top of ACC?',
        a: '<p>Usually not — most policies offset, meaning they top you up to your covered percentage rather than paying in full alongside ACC. Some policies are written to pay a proportion regardless. This is a real difference between policies and worth checking on the wording rather than the brochure.</p>',
      },
    ],
    related: [
      ['/income-protection-nz', 'Income protection explained', 'The direct fix'],
      ['/trauma-insurance-nz', 'Trauma cover explained', 'Lump sum on diagnosis'],
      ['/income-protection-calculator', 'How long could you last?', 'Calculator'],
      ['/self-employed-insurance-nz', 'If you are self-employed', 'The CoverPlus Extra trap'],
    ],
  },

  /* ------------------------------------------------------------------ life -- */
  {
    slug: 'life-insurance-nz',
    kind: 'guide',
    priority: '0.9',
    title: 'Life Insurance NZ: How It Works and What It Costs',
    h1: 'Life insurance in New Zealand',
    desc:
      'What life insurance pays, what it costs by age in NZ, how much cover people actually take, and the policy details that matter at claim time.',
    crumb: 'Life insurance',
    hero: { photo: 'family-beach', kicker: 'Cover type' },
    standfirst:
      'The simplest product in the market, and the one most often bought in the wrong amount — usually too little, occasionally far too much.',
    answer: `<p>Life insurance pays an agreed lump sum to the people you nominate when you die, and on most modern policies it
      also pays early if you are diagnosed as terminally ill. It is not an investment; you are buying certainty for the people
      who depend on your income.</p>
      <p>In New Zealand a healthy 30-year-old non-smoker can commonly get <strong>$500,000 of cover for roughly $15–$22 a
      month</strong>. By your 40s that same cover typically runs $23–$79 a month, and in your 50s $52–$195.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What it costs</h2>
    ${table({
      caption: 'Indicative monthly premiums, healthy non-smoker, level of cover as shown',
      head: ['Age', 'Typical monthly range'],
      rows: [
        ['30 · $500,000 cover', '$15 – $22'],
        ['40 · $250k – $1m cover', '$23 – $79'],
        ['50 · $250k – $1m cover', '$52 – $195'],
      ],
      source: SRC_COST,
    })}
    <p>Two things drive that range harder than anything else: <strong>smoking</strong> (expect 50–100% more) and
      <strong>age at application</strong>. Premiums for the same person do not get cheaper by waiting. Full breakdown on the
      <a href="/life-insurance-cost-nz">cost by age page</a>.</p>

    <h2>How much cover do people take?</h2>
    <p>The honest answer is: less than the maths suggests. A common starting shape is <em>clear the mortgage, plus enough to
      replace income until the youngest child is independent, plus funeral and estate costs, minus existing savings and any
      cover you already hold.</em> That calculation is what the
      <a href="/how-much-life-cover-do-i-need">cover calculator</a> runs.</p>
    <p>Where people go wrong is treating it as a round number. "$500k sounds sensible" is not a method. A $780,000 mortgage
      and two kids under five is a different problem from a $180,000 mortgage and a teenager.</p>

    ${strip('villas', 'The number is not a vibe. It is a mortgage, a shortfall and a timeframe.')}

    <h2>The four policy details that decide what happens at claim time</h2>

    <h3>Level vs stepped premiums</h3>
    <p><strong>Stepped</strong> premiums start low and rise every year with your age — cheap now, expensive later, and the
      later increases are the reason many people cancel in their 50s exactly when they are most likely to claim.
      <strong>Level</strong> premiums are fixed to a chosen age (often 65 or 70): more expensive at the start, dramatically
      cheaper over the life of the policy. Which is right depends on how long you intend to hold the cover — a genuinely
      important decision that is easy to get wrong on a comparison website.</p>

    <h3>Non-disclosure</h3>
    <p>You have a duty to disclose what you know about your health when you apply. Insurers can and do decline claims where
      something material was not disclosed — even when it seems unrelated. The practical advice: over-disclose. It is better
      to be underwritten with an exclusion you know about than to hold a policy that quietly does not work.</p>

    <h3>Who the money goes to</h3>
    <p>If the policy is owned personally and no nomination is in place, the payout generally falls into your estate — which
      means it can be delayed by probate, and it can be exposed to creditors. Ownership structure (personal, joint, trust) is
      worth ten minutes of thought.</p>

    <h3>Guaranteed renewable / wording upgrades</h3>
    <p>Look for policies that cannot be individually re-rated or cancelled because your health changed, and that pass on
      wording improvements. These clauses cost nothing today and matter enormously in twenty years.</p>

    <h2>Who does not need it</h2>
    <p>This is not a product everyone should own. If nobody is financially dependent on you, you have no debt someone else
      would inherit responsibility for, and your estate can cover its own costs, life insurance is largely solving a problem
      you do not have. <a href="/income-protection-nz">Income protection</a> and
      <a href="/health-insurance-nz">health cover</a> are usually the higher priority for that person.</p>`,
    faqs: [
      {
        q: 'Is a life insurance payout taxed in New Zealand?',
        a: '<p>Life insurance proceeds paid to an individual are generally not subject to income tax in New Zealand. Policies owned by a business can be treated differently depending on how premiums were handled, which is a conversation for your accountant.</p>',
      },
      {
        q: 'Does life insurance cover suicide?',
        a: '<p>Most New Zealand policies exclude death by suicide within the first 13 months of cover (or of an increase in cover), and cover it after that period. Wordings vary and this is one to read rather than assume.</p>',
      },
      {
        q: 'What happens if I stop paying?',
        a: '<p>Cover lapses, usually after a grace period. There is no surrender value on standard term life cover — you are buying protection for a period, not building an asset. If money is tight, reducing the sum insured is almost always better than cancelling, because re-applying later means being underwritten again at an older age with whatever health history you have accumulated.</p>',
      },
      {
        q: 'Can I get cover with a pre-existing condition?',
        a: '<p>Often yes, on one of three terms: standard, loaded (a higher premium), or with an exclusion for that condition. Declines happen but are less common than people fear. What matters is applying through someone who knows which insurers underwrite your particular condition most favourably — that varies a lot. See <a href="/pre-existing-conditions-nz">pre-existing conditions</a>.</p>',
      },
    ],
    related: [
      ['/life-insurance-cost-nz', 'Life insurance cost by age', 'The full table'],
      ['/how-much-life-cover-do-i-need', 'How much cover do I need?', 'Calculator'],
      ['/trauma-vs-income-protection', 'Trauma vs income protection', 'Which first?'],
      ['/new-parents-insurance-nz', 'If you have just had a baby', 'Life stage'],
    ],
  },

  /* ---------------------------------------------------------------- health -- */
  {
    slug: 'health-insurance-nz',
    kind: 'guide',
    priority: '0.9',
    title: 'Health Insurance NZ: Cover, Cost and Is It Worth It',
    h1: 'Health insurance in New Zealand',
    desc:
      'What private health cover actually buys you in NZ, how pre-existing conditions and waiting periods work, what it costs by age, and when it is worth it.',
    crumb: 'Health insurance',
    hero: { photo: 'wellington', kicker: 'Cover type' },
    standfirst:
      'New Zealand has a public health system that will treat you. Health insurance is not buying treatment — it is buying <em>timing</em>, <em>choice</em> and a handful of things the public system does not fund at all.',
    answer: `<p>Health insurance in New Zealand pays for private medical treatment: surgery, specialist appointments,
      diagnostic imaging, and on better plans, cancer drugs that Pharmac does not fund. The public system remains available
      to you either way — what you are buying is the ability to be treated on your timetable rather than the queue's.</p>
      <p>Roughly <strong>Southern Cross holds about 60% of the market and nib about 15%</strong>, with AIA, Partners Life and
      others making up the rest. Pre-existing conditions are generally excluded, sometimes permanently.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What you are actually buying</h2>
    <p>It helps to be blunt about this, because health insurance is sold badly. You are buying four things:</p>
    <ol>
      <li><strong>Time.</strong> Elective surgery in the public system runs on clinical priority. If your hip, knee, hernia or
        gallbladder is painful but not urgent, you can wait a long time — and if you are self-employed or on your feet for a
        living, waiting has a dollar cost.</li>
      <li><strong>Choice.</strong> Your surgeon, your hospital, your date.</li>
      <li><strong>Non-funded drugs.</strong> This is the one people underrate. Pharmac funds a narrower list of modern cancer
        medicines than several comparable countries. Better health policies include a non-Pharmac drug benefit, often
        $300,000–$500,000. For some diagnoses that benefit is the single most valuable thing in the policy.</li>
      <li><strong>Diagnostics.</strong> Getting the scan quickly is often the difference between a fast answer and months of
        uncertainty.</li>
    </ol>

    <h2>Pre-existing conditions — the thing to understand before you apply</h2>
    <p>A pre-existing condition is anything you had symptoms of, sought advice about or were treated for before cover started
      — whether or not it was formally diagnosed. Insurers handle them in one of three ways: permanent exclusion, a
      time-limited exclusion, or a premium loading.</p>
    ${table({
      caption: 'How the two largest insurers approach pre-existing conditions',
      head: ['Insurer', 'General approach'],
      rows: [
        ['Southern Cross', 'Moratorium-style. Qualifying pre-existing conditions may become covered after 3 years of continuous cover on some plans, provided a benefit exists for the treatment.'],
        ['nib', 'Waiting periods typically 12 months to 4 years. After 3 years on Premium or Standard Hospital cover some pre-existing conditions become covered — but cardiovascular, cancer, hip/knee, back, transplant and reconstructive conditions are permanently excluded.'],
      ],
      source:
        'Summarised from the insurers\' published policy material, July 2026. Plans change; check the current policy document before relying on this.',
    })}
    <div class="note" data-reveal><b>The practical takeaway</b>
      Health insurance rewards applying while you are well by more than any other cover. Every year you wait is another year
      of accumulated medical history that gets written out of your policy. Full detail on
      <a href="/pre-existing-conditions-nz">pre-existing conditions</a>.</div>

    <h2>Waiting periods on everything else</h2>
    <p>Even with a clean history, benefits switch on at different times: pregnancy commonly has a 12-month wait where it is
      covered at all (most policies exclude normal pregnancy), and dental and optical extras usually have 2–6 month waits.
      See <a href="/insurance-waiting-periods-nz">waiting periods and stand-downs</a>.</p>

    ${strip('fern', 'The public system decides when. Health insurance is you deciding when.')}

    <h2>Excess: the lever that changes the price most</h2>
    <p>Moving from a $250 excess to $2,000 or $4,000 can cut a premium substantially. It is the most under-used adjustment in
      the market. The logic is straightforward — if you could comfortably find $2,000 in an emergency, you are paying a lot
      each month to insure an amount you do not need insured. What you actually want protection against is the
      $40,000 surgery, not the $900 one.</p>

    <h2>Is it worth it?</h2>
    <p>Honestly: it depends on a number, and the number is your tolerance for waiting. Health insurance is the one cover on
      this site where a reasonable, financially literate person can decide "no thanks" and be right. If you have strong
      savings, a job that tolerates absence, and no family history that worries you, self-insuring the elective-surgery risk
      is defensible.</p>
    <p>What is <em>not</em> defensible is assuming the public system covers modern cancer drugs. It funds fewer than people
      expect, and that is the part of the decision most often made on a wrong assumption.</p>
    <p>Costs by age are on the <a href="/health-insurance-cost-nz">health insurance cost page</a>.</p>`,
    faqs: [
      {
        q: 'Does health insurance cover GP visits?',
        a: '<p>Base hospital plans generally do not. GP visits, prescriptions, physio, dental and optical usually sit in an optional "everyday" or "extras" module that costs extra and, for many people, returns roughly what it costs. The high-value part of health insurance is the surgical and non-Pharmac drug cover, not the everyday module.</p>',
      },
      {
        q: 'Does health insurance cover pregnancy and birth?',
        a: '<p>Normal pregnancy and childbirth are excluded by most New Zealand policies — maternity care is publicly funded here. Some policies cover complications of pregnancy after a waiting period of around 12 months. If you are planning a family, this is worth checking specifically rather than assuming.</p>',
      },
      {
        q: 'If I switch insurers do I lose my cover for existing conditions?',
        a: '<p>Frequently yes, and this is the single most expensive mistake in health insurance. Switching restarts underwriting, so conditions that developed while you were covered can be excluded by the new insurer. A cheaper premium is not a saving if it silently removes cover for the thing most likely to happen to you. Any adviser worth their fee will check this before recommending a switch.</p>',
      },
      {
        q: 'Can my employer\'s scheme cover me instead?',
        a: '<p>Group schemes are often good value and sometimes waive or reduce underwriting. The catch is what happens when you leave the job — check whether you can convert to a personal policy on the same terms, because if you cannot, you will be underwritten fresh at whatever age and health you have then.</p>',
      },
    ],
    related: [
      ['/health-insurance-cost-nz', 'Health insurance cost by age', 'The numbers'],
      ['/pre-existing-conditions-nz', 'Pre-existing conditions', 'How they are handled'],
      ['/insurance-waiting-periods-nz', 'Waiting periods explained', 'When cover starts'],
      ['/types-of-insurance', 'All six covers compared', 'Overview'],
    ],
  },

  /* ------------------------------------------------------- income protection -- */
  {
    slug: 'income-protection-nz',
    kind: 'guide',
    priority: '0.9',
    title: 'Income Protection NZ — How It Works, Cost, and the ACC Overlap',
    h1: 'Income protection in New Zealand',
    desc:
      'How income protection works in NZ, what it costs, how it interacts with ACC, and the wait and benefit period choices that decide your premium.',
    crumb: 'Income protection',
    hero: { photo: 'open-road', kicker: 'Cover type' },
    standfirst:
      'The least glamorous product in the market and, for most working New Zealanders under 55 with a mortgage, the one that carries the most weight.',
    answer: `<p>Income protection pays you a monthly benefit — commonly <strong>up to about 75% of your income</strong> — while
      illness or injury stops you working. You choose a <strong>wait period</strong> (how long before payments start) and a
      <strong>benefit period</strong> (how long they continue: two years, five years, or to age 65).</p>
      <p>Critically, it covers <strong>illness</strong>, which is exactly what
      <a href="/what-acc-does-not-cover">ACC does not</a>.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>The two dials that set the price</h2>
    <p>Almost the entire cost of an income protection policy is decided by two numbers, and understanding them lets you buy
      the cover you need instead of the cover you were quoted.</p>

    <h3>Wait period (stand-down)</h3>
    <p>Options typically run 4, 8, 13, 26, 52 or 104 weeks. Every step you lengthen it, the premium falls — often sharply.
      The right answer is not "as short as possible", it is <em>"how long can my household actually self-fund?"</em> If you
      have sick leave, annual leave and three months of savings, buying a 4-week wait means paying every month for cover you
      would not use.</p>

    <h3>Benefit period</h3>
    <p>Two years is cheap. To age 65 is expensive. But the risk being insured is not "off work for a while" — a two-year
      claim is survivable for most households. The catastrophic scenario is being unable to work again <em>at all</em>, and
      that is precisely the one a two-year benefit period does not cover. If budget forces a choice, a longer wait period
      with a longer benefit period is usually a better-shaped policy than the reverse.</p>

    ${figures([
      ['Up to 75%', 'Of income, the usual maximum benefit'],
      ['4–104 wks', 'Wait period options — the biggest price lever'],
      ['2 yrs → 65', 'Benefit period — where the real protection is'],
    ])}

    <h2>Indemnity vs agreed value</h2>
    <p><strong>Indemnity</strong> policies prove your income at claim time. <strong>Agreed value</strong> policies establish
      it at application, so what you were earning when you applied is what gets paid. Agreed value costs more and is far more
      valuable to anyone with variable income — contractors, business owners, people on commission — because a bad trading
      year before a claim can gut an indemnity payout. Agreed value has become harder to obtain in this market, which is a
      reason to look at it sooner rather than later if it fits you.</p>

    <h2>How it interacts with ACC</h2>
    <p>Most income protection policies <strong>offset</strong> against ACC: if ACC is paying you, the insurer tops you up to
      your covered percentage rather than paying on top. People sometimes read this as being ripped off. It is the opposite —
      the offset is why the premium is affordable, and the cover is doing its real job in the situation ACC is absent
      entirely, which is illness.</p>
    <div class="gap-note" data-reveal><b>Watch for</b>
      Some policies offset against ACC, some against any income, some against other insurance. Some pay a reduced proportion
      regardless of ACC. This is genuinely different between insurers and it is invisible on a price comparison.</div>

    ${strip('sheep-hills', 'The risk is not a bad month. It is a year that turns into three.')}

    <h2>Mortgage protection is not the same thing</h2>
    <p>Mortgage repayment cover replaces your repayments; income protection replaces your income. Mortgage cover is cheaper
      and simpler, and for a stretched first-home buyer it can be the sensible starting point. But groceries, power,
      childcare and insurance do not pause because you are ill.
      <a href="/income-protection-vs-mortgage-protection">Full comparison →</a></p>

    <h2>If you are self-employed</h2>
    <p>Income protection matters more here than anywhere, for three reasons: no sick leave, no employer scheme, and an ACC
      entitlement based on your last filed return rather than what you actually live on. If you are a contractor and have
      never looked at <strong>ACC CoverPlus Extra</strong>, that is a free-ish fix worth making before you buy anything.
      <a href="/self-employed-insurance-nz">More on self-employed cover →</a></p>

    <p>Work out your own runway and benefit with the
      <a href="/income-protection-calculator">income protection calculator</a>.</p>`,
    faqs: [
      {
        q: 'Is income protection tax deductible in New Zealand?',
        a: '<p>Generally, if the premiums are deductible then the benefit is taxable, and if premiums are not deductible the benefit is usually paid tax-free. Policies are commonly structured one way or the other and the maths differs by marginal rate. This is a genuine accountant question rather than something to guess at from a website.</p>',
      },
      {
        q: 'Will it pay if I can still do some work?',
        a: '<p>Most policies include a partial or "proportionate" benefit for when you return part time or at reduced capacity. Definitions of disability matter here: "own occupation" (you cannot do your job) is much stronger than "any occupation" (you cannot do any job you are suited to). Which definition you hold is one of the most consequential lines in the policy.</p>',
      },
      {
        q: 'Does it cover mental health?',
        a: '<p>Usually yes, though some insurers apply limits — a shorter benefit period for mental health claims is common, and pre-existing mental health history is frequently excluded or loaded. Given mental health is a leading cause of long-term work absence, it is worth asking about explicitly rather than reading the summary.</p>',
      },
      {
        q: 'What if I lose my job — does it pay then?',
        a: '<p>No. Income protection covers inability to work due to illness or injury, not redundancy. Redundancy cover is a separate and much more limited product.</p>',
      },
    ],
    related: [
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'Why this exists'],
      ['/income-protection-cost-nz', 'What income protection costs', 'By age and income'],
      ['/income-protection-vs-mortgage-protection', 'vs mortgage protection', 'Compared'],
      ['/self-employed-insurance-nz', 'Self-employed and contractors', 'Life stage'],
    ],
  },

  /* ---------------------------------------------------------------- trauma -- */
  {
    slug: 'trauma-insurance-nz',
    kind: 'guide',
    priority: '0.8',
    title: 'Trauma Insurance NZ — What It Covers and Whether It Is Worth It',
    h1: 'Trauma cover in New Zealand',
    desc:
      'Trauma (critical illness) insurance explained: what conditions are covered, standalone vs accelerated, what it costs, and the honest case for and against.',
    crumb: 'Trauma cover',
    hero: { photo: 'harbour-homes', kicker: 'Cover type' },
    standfirst:
      'A lump sum on diagnosis — no requirement to be dying, no requirement to be unable to work, no requirement to spend it on treatment.',
    answer: `<p>Trauma insurance (also sold as critical illness cover) pays a <strong>tax-free lump sum</strong> when you are
      diagnosed with one of a defined list of serious conditions — cancer at a specified severity, heart attack, stroke, major
      organ failure, multiple sclerosis and typically 30 to 50 others.</p>
      <p>You do not need to be unable to work and you can spend it on anything. That flexibility is the entire product.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>What people actually spend it on</h2>
    <p>The brochures talk about medical costs. In practice, in New Zealand, the payout usually goes on the things insurance
      does not otherwise touch:</p>
    <ul>
      <li>A partner dropping to part-time or stopping work to be a carer</li>
      <li>Clearing or reducing the mortgage so the household's fixed costs shrink</li>
      <li>Treatment or drugs outside the funded list, or treatment overseas</li>
      <li>Travel and accommodation for treatment if you do not live near a major centre</li>
      <li>Home or vehicle modifications after a stroke</li>
      <li>Simply buying time — a year of not making financial decisions under pressure</li>
    </ul>

    <h2>Standalone vs accelerated — read this before you buy</h2>
    <p><strong>Accelerated</strong> trauma is attached to a life policy: a trauma claim reduces your life cover by the amount
      paid. It is cheaper, and for many people it is fine — if you claim on trauma and survive, you can often reinstate the
      life cover later, sometimes automatically after 12 months.</p>
    <p><strong>Standalone</strong> trauma sits on its own and does not touch your life cover. It costs more.</p>
    <p>The mistake is not choosing one or the other. The mistake is not knowing which you bought.</p>

    ${strip('coast-aerial', 'It pays when you are diagnosed — not when you die, and not when you stop working.')}

    <h2>The definitions are the product</h2>
    <p>Every trauma policy pays "on cancer". They do not all pay on the <em>same</em> cancer. Policies define severity
      thresholds — early-stage and in-situ cancers are often paid at a reduced partial benefit or not at all; heart attacks
      require specified troponin levels or ECG changes; strokes require evidence of permanent deficit.</p>
    <p>Two policies at the same price can behave completely differently at claim time, and the difference is buried in
      definitions no comparison table shows. This is the single strongest argument for having someone who reads wordings for
      a living involved in the decision.</p>
    <div class="note" data-reveal><b>Ask this question</b>
      "Does this policy pay a partial benefit for early-stage cancer, and at what percentage?" The answer separates good
      trauma policies from cheap ones faster than any other question.</div>

    <h2>The honest case against</h2>
    <p>Trauma cover is the product most likely to be over-sold, and it deserves a fair criticism: it pays on a
      <em>list</em>. You can be seriously, expensively unwell in a way that ruins your finances and still not meet a listed
      definition. <a href="/income-protection-nz">Income protection</a> pays on your inability to work regardless of what
      caused it, which is a broader trigger.</p>
    <p>If budget forces a single choice, income protection is usually the more complete cover. Trauma earns its place as the
      thing that handles the first twelve months — the shock, the lump costs, the partner who stops working — while income
      protection handles the long middle. <a href="/trauma-vs-income-protection">Full comparison →</a></p>

    <h2>How much do people take?</h2>
    <p>There is no formula as clean as life cover. A common approach is to size it to twelve to twenty-four months of
      household outgoings, plus any specific known cost (a mortgage tranche you would want gone, or a drug benefit gap).
      Smaller amounts of trauma are far more common — and more affordable — than the headline sums people imagine.</p>`,
    faqs: [
      {
        q: 'Is trauma insurance worth it in New Zealand?',
        a: '<p>It depends on what else you hold. If you have no income protection, trauma is a partial substitute that pays quickly but on a narrower trigger. If you already have income protection, trauma covers the lump costs income protection does not. If you have neither and can only afford one, most advisers would start with income protection — though the right answer genuinely differs by household.</p>',
      },
      {
        q: 'Can I buy trauma cover on its own?',
        a: '<p>Yes — that is standalone trauma. It costs more than accelerated cover attached to a life policy, but it does not erode your life sum insured when it pays.</p>',
      },
      {
        q: 'Does trauma cover children?',
        a: '<p>Many policies offer a child\'s trauma benefit, usually a modest sum (often $25,000–$50,000) covering a defined set of childhood conditions. It is inexpensive. What it really buys is the ability for a parent to stop working without financial consequence during a child\'s illness.</p>',
      },
      {
        q: 'If I claim, does the policy end?',
        a: '<p>Usually the cover reduces by the amount paid, and on accelerated policies your life cover reduces too. Some policies allow reinstatement of the trauma cover after a period, sometimes excluding the condition already claimed on. Worth checking — it is the difference between a one-shot policy and ongoing protection.</p>',
      },
    ],
    related: [
      ['/trauma-vs-income-protection', 'Trauma vs income protection', 'Which first?'],
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'The context'],
      ['/life-insurance-nz', 'Life insurance', 'Often bundled with this'],
      ['/what-it-costs', 'What cover costs', 'All six, by age'],
    ],
  },

  /* --------------------------------------------------------------- mortgage -- */
  {
    slug: 'mortgage-protection-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'Mortgage Protection Insurance NZ: What It Misses',
    h1: 'Mortgage protection in New Zealand',
    desc:
      'Mortgage repayment cover explained: what it pays, how it differs from income protection and from the bank\'s own cover, and when it is the right starting point.',
    crumb: 'Mortgage protection',
    hero: { photo: 'villas', kicker: 'Cover type' },
    standfirst:
      'The cover most often bought at the mortgage table, in the ten minutes when nobody has the energy left to compare anything.',
    answer: `<p>Mortgage repayment cover pays a monthly benefit sized to your mortgage or rent payments while illness or injury
      stops you working. If your repayments are $2,800 a month, that is roughly the size of the benefit.</p>
      <p>It is a narrower, cheaper version of <a href="/income-protection-nz">income protection</a> — it protects the roof,
      not the household.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Why it exists</h2>
    <p>Because income protection is priced off your whole income and mortgage cover is priced off one bill, mortgage cover is
      meaningfully cheaper. For a first-home buyer who has just emptied their KiwiSaver, cheaper is not a trivial
      consideration — and a policy you can actually afford to keep beats a better policy you cancel in eight months.</p>

    <h2>What it misses</h2>
    <p>Everything that is not the mortgage. Power, food, insurance, childcare, rates, the car, and any income your household
      relies on beyond the repayments. If your mortgage is $2,800 and your household runs on $6,200, mortgage protection is
      covering 45% of the problem.</p>
    ${table({
      caption: 'The same household, the same illness, two different covers',
      head: ['', 'Mortgage protection', 'Income protection'],
      rows: [
        ['Sized to', 'Your repayments', 'Your income (up to ~75%)'],
        ['Typical benefit', 'The mortgage bill', 'Mortgage + living costs'],
        ['Premium', 'Lower', 'Higher'],
        ['Covers illness', 'Yes', 'Yes'],
        ['Covers redundancy', 'Sometimes, briefly', 'No'],
        ['Best for', 'Stretched budgets, first homes', 'Households relying on one or two incomes'],
      ],
    })}

    <h2>Bank-arranged cover is a different animal again</h2>
    <p>Cover arranged at the lending table is often <em>lender-benefit</em> cover: sized to the bank's exposure, sometimes with
      the bank as beneficiary, and frequently underwritten only at claim time rather than at application — which sounds
      convenient and is the opposite. Underwriting at claim time means you find out whether you were covered at the worst
      possible moment.</p>
    <p>It is not automatically bad. It is worth knowing which kind you have.</p>

    ${strip('harbour-homes', 'A policy you keep beats a better policy you cancel.')}

    <h2>A reasonable way to think about it</h2>
    <p>Mortgage protection is a good <strong>floor</strong> and a poor <strong>ceiling</strong>. Plenty of households
      sensibly start here at 28 with a new mortgage and no savings, then move to full income protection once income and
      stability improve. That progression is fine. What is not fine is buying it at 28 and never revisiting it at 38 with two
      kids and double the outgoings.</p>
    <p><a href="/income-protection-vs-mortgage-protection">Read the full side-by-side comparison →</a></p>`,
    faqs: [
      {
        q: 'Does mortgage protection pay off the whole mortgage?',
        a: '<p>No — that is a different product. Mortgage repayment cover pays the monthly repayments while you cannot work. Paying off the balance in a lump sum is what <a href="/life-insurance-nz">life insurance</a> or <a href="/trauma-insurance-nz">trauma cover</a> sized to the mortgage does.</p>',
      },
      {
        q: 'Can I have both mortgage protection and income protection?',
        a: '<p>You can, but there is usually little point — income protection is generally capped at a percentage of your income, and holding both often means paying twice toward the same ceiling. Sizing one properly is usually better value than layering two.</p>',
      },
      {
        q: 'Does it cover redundancy?',
        a: '<p>Some mortgage repayment policies include a limited redundancy benefit — typically a small number of months, with a waiting period after the policy starts, and excluding redundancy you knew was coming. It is real but modest. Do not buy the policy for that feature alone.</p>',
      },
    ],
    related: [
      ['/income-protection-vs-mortgage-protection', 'Income vs mortgage protection', 'Side by side'],
      ['/first-home-buyers-insurance-nz', 'First-home buyers', 'Life stage'],
      ['/income-protection-nz', 'Income protection', 'The fuller version'],
    ],
  },

  /* --------------------------------------------------------------- business -- */
  {
    slug: 'business-insurance-nz',
    kind: 'guide',
    priority: '0.7',
    title: 'Business & Key Person Insurance NZ: A Plain Guide',
    h1: 'Business and key person cover',
    desc:
      'Key person cover, shareholder protection and business expenses cover explained for New Zealand small businesses — what each solves and how they are sized.',
    crumb: 'Business cover',
    hero: { photo: 'auckland', kicker: 'Cover type' },
    standfirst:
      'Most New Zealand businesses insure the van and the building. Far fewer insure the person the whole thing actually runs on.',
    answer: `<p>Three covers do most of the work for small NZ businesses. <strong>Key person cover</strong> pays the business a
      lump sum if someone it depends on dies or becomes seriously ill. <strong>Shareholder protection</strong> funds the
      purchase of a departing owner's shares so the business does not end up in partnership with a grieving family.
      <strong>Business expenses cover</strong> pays fixed overheads — rent, leases, staff — while an owner-operator is off.</p>`,
    updated: '2026-07-30',
    body2: `
    <h2>Key person cover</h2>
    <p>The test is simple: if this person did not come in on Monday and never came back, what would it cost the business?
      For a firm where one person holds the client relationships, the technical skill or the bank's confidence, the answer is
      usually far more than the owner's instinct suggests — lost revenue while replacing them, recruitment, the productivity
      dip of a new hire, and in many cases a bank facility that is conditional on that person being there.</p>
    <p>The policy is owned by the business and pays the business. Sizing is usually built from a revenue-contribution
      calculation plus recruitment and transition costs.</p>

    <h2>Shareholder protection</h2>
    <p>This is the one most often missing, and the one that causes the most damage when it is. Two or three owners build
      something; one dies; their shares pass to their estate. The surviving owners now have a co-owner who knows nothing
      about the business and needs money, and no funds to buy them out.</p>
    <p>Shareholder protection pairs a life and trauma policy with a properly drafted <strong>buy-sell agreement</strong> so
      the funds and the legal obligation to transfer shares exist at the same time. The insurance without the agreement, or
      the agreement without the insurance, both fail.</p>
    <div class="note" data-reveal><b>Two documents, one problem</b>
      If your company has more than one shareholder and no buy-sell agreement, that is worth raising with your lawyer and
      your adviser in the same conversation — because the insurance sizing follows the agreement's valuation method.</div>

    <h2>Business expenses cover</h2>
    <p>Sits alongside personal income protection and covers the <em>fixed</em> costs of the business while the owner-operator
      cannot work: premises rent, equipment leases, accounting fees, permanent staff wages, insurance, utilities. Usually a
      shorter benefit period (commonly 12 months) because the purpose is to keep the doors open long enough to recover or to
      wind down in an orderly way.</p>
    <p>It is particularly relevant to sole practitioners with a physical footprint — a clinic, a workshop, a studio — where
      the overheads keep running whether or not the owner does.</p>

    ${strip('auckland', 'Most businesses insure the ute. Fewer insure the person driving it.')}

    <h2>Group schemes</h2>
    <p>Once a business has a handful of staff, a group life or group health scheme is often better value per person than
      individual policies, and underwriting is frequently lighter or automatic up to a limit. It is also one of the few
      benefits a small NZ employer can offer that competes with a larger company's package.</p>

    <h2>Getting the ownership and tax treatment right</h2>
    <p>Business insurance goes wrong in structure more than in product choice. Who owns the policy, who pays the premium, who
      receives the proceeds and how it is treated for tax all interact — and getting it wrong can turn a tax-free personal
      payout into a taxable business receipt, or leave a payout in the wrong entity entirely.</p>
    <p>This is genuinely a three-way conversation between you, your accountant and an adviser. It is not a
      buy-it-online product.</p>`,
    faqs: [
      {
        q: 'Are business insurance premiums tax deductible in NZ?',
        a: '<p>It depends on the cover and who benefits. Broadly, where a policy protects revenue (key person revenue cover, business expenses) premiums are more likely deductible and proceeds assessable; where a policy protects capital (shareholder protection) the reverse is more likely. Your accountant should confirm this for your specific structure before the policy is written, not after.</p>',
      },
      {
        q: 'How much key person cover does a small business need?',
        a: '<p>A common starting method is the person\'s contribution to gross profit multiplied by the number of years it would realistically take to replace them, plus direct recruitment and training costs, plus any debt personally guaranteed or conditional on them. For most owner-operated NZ businesses that lands well above the number people first guess.</p>',
      },
      {
        q: 'We are a two-person company. Is this overkill?',
        a: '<p>Two-person companies are the highest-risk case, not the lowest. There is no bench, no redundancy of skills, and usually a personal guarantee on the lending. The exposure per person is at its maximum.</p>',
      },
    ],
    related: [
      ['/self-employed-insurance-nz', 'Self-employed and contractors', 'Life stage'],
      ['/income-protection-nz', 'Income protection', 'The personal counterpart'],
      ['/talk-to-arron', 'Talk to Arron about business cover', 'Get advice'],
    ],
  },
];
