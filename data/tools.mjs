import { cardGrid, figures, strip } from '../lib/components.mjs';

/* Shared helpers injected once per calculator page. Everything runs client-side;
   nothing is submitted anywhere, which is both a privacy promise we can keep and
   the reason these pages need no backend. */
const CALC_LIB = `
var nf=new Intl.NumberFormat('en-NZ',{style:'currency',currency:'NZD',maximumFractionDigits:0});
function num(id){var e=document.getElementById(id);if(!e)return 0;var v=parseFloat(String(e.value).replace(/[^0-9.\\-]/g,''));return isFinite(v)?v:0;}
function val(id){var e=document.getElementById(id);return e?e.value:'';}
function put(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
function money(n){return nf.format(Math.max(0,Math.round(n)));}
function bind(fn){
  document.querySelectorAll('.calc input, .calc select').forEach(function(e){
    e.addEventListener('input',fn); e.addEventListener('change',fn);
  });
  fn();
}`;

const field = (id, label, hint, value, opts = {}) =>
  opts.select
    ? `<div class="field"><label for="${id}">${label}</label>
       <select id="${id}">${opts.select.map((o) => `<option value="${o[0]}"${o[0] === value ? ' selected' : ''}>${o[1]}</option>`).join('')}</select>
       ${hint ? `<span class="hint">${hint}</span>` : ''}</div>`
    : `<div class="field"><label for="${id}">${label}</label>
       <input id="${id}" type="number" inputmode="numeric" min="0" step="${opts.step || 1000}" value="${value}">
       ${hint ? `<span class="hint">${hint}</span>` : ''}</div>`;

export const TOOL_PAGES = [
  /* ------------------------------------------------------------------ hub -- */
  {
    slug: 'calculators',
    kind: 'guide',
    priority: '0.8',
    title: 'Free NZ Insurance Calculators (No Email Required)',
    h1: 'Three calculators, no email required',
    desc:
      'Free New Zealand insurance calculators: how much life cover you need, how long your household could last without your income, and what ACC would and would not pay.',
    crumb: 'Calculators',
    hero: { photo: 'open-road', kicker: 'Tools' },
    standfirst:
      'Everything runs in your browser. Nothing is sent anywhere, nothing is stored, and you do not have to give us an email address to see the answer.',
    answer: `<p>Most insurance calculators online are lead-capture forms wearing a calculator costume — you enter your details
      and the answer arrives via a salesperson. These do not do that. The maths runs in your browser, the result appears
      immediately, and what you do next is entirely your call.</p>`,
    updated: '2026-07-30',
    body2: `
    ${cardGrid(
      [
        ['/how-much-life-cover-do-i-need', 'How much life cover do I need?', 'Builds a number from your mortgage, dependants and existing cover instead of guessing at a round figure.'],
        ['/income-protection-calculator', 'How long could you last?', 'Turns your leave, savings and outgoings into a runway in weeks — which is also how you choose a wait period.'],
        ['/acc-gap-checker', 'The ACC gap checker', 'Shows the same illness and the same accident side by side, with your numbers. Most people find this one uncomfortable.'],
      ],
      'g3'
    )}

    <h2>Why these three</h2>
    <p>Because they answer the three questions that decide what cover makes sense, in order:</p>
    ${figures([
      ['How much?', 'The sum insured, built from your debts and dependants'],
      ['How long?', 'Your runway — which sets your wait period'],
      ['What is missing?', 'The ACC gap, in your own dollars'],
    ])}

    ${strip('open-road', 'A number you built yourself is much harder to talk you out of.')}

    <h2>A note on what a calculator can and cannot do</h2>
    <p>These produce a <strong>starting figure</strong>, not a recommendation. They cannot see your health history, your
      relationship property position, your trust structure, your employer's scheme, or which insurer would underwrite you
      most favourably. What they are good for is arriving at a conversation with a number you understand and can defend,
      instead of accepting the first one you are offered.</p>`,
    related: [
      ['/types-of-insurance', 'The six covers explained', 'Start here'],
      ['/what-it-costs', 'What cover costs', 'The numbers'],
      ['/talk-to-arron', 'Talk to Arron', 'When you want a real answer'],
    ],
  },

  /* ------------------------------------------------------- life cover calc -- */
  {
    slug: 'how-much-life-cover-do-i-need',
    kind: 'tool',
    priority: '0.9',
    title: 'How Much Life Insurance Do I Need? NZ Calculator (Free, No Email)',
    h1: 'How much life cover do you actually need?',
    desc:
      'A free NZ life insurance calculator. Builds a cover figure from your mortgage, debts and dependants. Runs in your browser, no email required.',
    crumb: 'How much cover do I need?',
    hero: { photo: 'harbour-homes', kicker: 'Calculator' },
    standfirst:
      '"$500,000 sounds about right" is not a method. This builds the number from what you actually owe and who actually depends on you.',
    answer: `<p>The standard approach is <strong>debts + income replacement + final costs − what you already have</strong>.
      Clear the mortgage and other debt, replace the income your dependants rely on for as long as they rely on it, allow for
      funeral and estate costs, then subtract savings and any existing cover.</p>
      <p>The calculator below does that. It runs entirely in your browser — nothing is sent anywhere.</p>`,
    updated: '2026-07-30',
    body2: `
    <div class="calc" data-reveal>
      <p class="eyebrow">Your numbers</p>
      <div class="calc-grid mt3">
        ${field('mortgage', 'Mortgage balance', 'What is still owing', 650000, { step: 10000 })}
        ${field('debts', 'Other debts', 'Car, credit cards, student loan', 25000, { step: 1000 })}
        ${field('spend', 'Annual living costs to replace', 'What your household needs each year without you', 65000, { step: 5000 })}
        ${field('years', 'Years to replace it for', 'Until the youngest is independent', 15, { step: 1 })}
        ${field('education', 'Education & childcare allowance', 'Total, if you want it covered', 40000, { step: 5000 })}
        ${field('final', 'Funeral & estate costs', 'Typically $10,000 – $20,000 in NZ', 15000, { step: 1000 })}
        ${field('savings', 'Savings & investments', 'Available to your family, excluding the house', 40000, { step: 5000 })}
        ${field('existing', 'Life cover you already hold', 'Include any employer or group scheme', 0, { step: 50000 })}
      </div>

      <div class="calc-out">
        <p class="eyebrow">Indicative cover</p>
        <div class="calc-headline" id="out-total">—</div>
        <p class="small dim mt2" id="out-note"></p>
        <div class="calc-rows mt3">
          <div><span>Mortgage &amp; other debt</span><span id="r-debt">—</span></div>
          <div><span>Income replacement</span><span id="r-income">—</span></div>
          <div><span>Education &amp; childcare</span><span id="r-edu">—</span></div>
          <div><span>Funeral &amp; estate</span><span id="r-final">—</span></div>
          <div><span>Less savings &amp; existing cover</span><span id="r-less">—</span></div>
          <div class="total"><span>Indicative cover needed</span><span id="r-total">—</span></div>
        </div>
      </div>
    </div>

    <h2>How to read the result</h2>
    <p>Treat it as a <strong>starting figure</strong>, not an answer. It deliberately does not try to be clever — it does not
      discount future income to present value, model inflation, or assume investment returns on the payout. Those refinements
      move the number in both directions and they require assumptions you would have to defend.</p>
    <p>What this figure is genuinely good for: walking into a conversation knowing roughly what you are aiming at, and being
      able to tell whether a quote you have been given is in the right postcode.</p>

    <h2>The inputs people get wrong</h2>
    <ul>
      <li><strong>Annual living costs.</strong> People enter their salary. The right figure is what the household would
        <em>need</em>, which is usually lower than gross salary (your own costs go with you) but higher than people assume
        once childcare is included.</li>
      <li><strong>Years to replace.</strong> Not "until retirement" — until the people who depend on you no longer do.
        For a family with a three-year-old, that is roughly fifteen to eighteen years.</li>
      <li><strong>Existing cover.</strong> Include employer or group scheme cover, but know that it usually ends when the job
        does. Cover you would lose on resignation is not cover you can plan around.</li>
      <li><strong>Savings.</strong> Only count what your family could actually access. Money tied up in the house they are
        living in does not help them stay in it.</li>
    </ul>

    <div class="note" data-reveal><b>The number is temporary</b>
      Your need is highest when the mortgage is largest and the children are smallest, and it falls every year after that.
      That is a strong argument for reviewing cover every few years rather than setting it once — and for not treating a
      large number today as a permanent expense.</div>

    ${strip('harbour-homes', 'Insure the gap, not a round number.')}

    <h2>What this cannot tell you</h2>
    <p>Whether you should hold it as level or stepped premiums, who should own the policy, whether trauma should be bundled
      or standalone, and which insurer would underwrite your health history most favourably. Those decide what actually gets
      paid, and none of them are arithmetic.
      <a href="/life-insurance-nz">The life insurance guide covers them →</a></p>`,
    faqs: [
      {
        q: 'Is 10x my salary a good rule of thumb?',
        a: '<p>It is a rough heuristic that happens to land near the right answer for a mid-career person with a mortgage and young children, and badly wrong for everyone else. Someone with no dependants and no debt needs far less; someone with a large mortgage and four children may need considerably more. A calculation built from your actual obligations beats a multiplier.</p>',
      },
      {
        q: 'Should I include my KiwiSaver?',
        a: '<p>Your KiwiSaver balance is paid to your estate on death, so it does reduce the gap — include it under savings if you want the sharper figure. Bear in mind it is also the retirement provision for a surviving partner, so counting it fully against your life cover need may leave them short later.</p>',
      },
      {
        q: 'Do I need cover if my partner earns well?',
        a: '<p>Possibly less, but rarely none. Test it directly: could their income alone service the mortgage and cover childcare, given they may also need to reduce their hours? For many households the answer is no, and that shortfall is the number.</p>',
      },
    ],
    related: [
      ['/life-insurance-nz', 'How life insurance works', 'Full guide'],
      ['/life-insurance-cost-nz', 'What that cover would cost', 'By age'],
      ['/income-protection-calculator', 'How long could you last?', 'The other calculator'],
      ['/new-parents-insurance-nz', 'New parents', 'When this number jumps'],
    ],
    script: `<script>${CALC_LIB}
bind(function(){
  var debt=num('mortgage')+num('debts');
  var income=num('spend')*num('years');
  var edu=num('education');
  var fin=num('final');
  var less=num('savings')+num('existing');
  var total=debt+income+edu+fin-less;
  put('r-debt',money(debt)); put('r-income',money(income)); put('r-edu',money(edu));
  put('r-final',money(fin)); put('r-less','− '+money(less)); put('r-total',money(total));
  put('out-total',money(total));
  put('out-note', total<=0
    ? 'On these numbers your existing cover and savings already meet the need. Worth checking that the existing cover is not tied to a job you might leave.'
    : 'A starting figure to take into a conversation — not a recommendation. Rounding to the nearest $50,000 is normal.');
});
</script>`,
  },

  /* --------------------------------------------------- income runway calc -- */
  {
    slug: 'income-protection-calculator',
    kind: 'tool',
    priority: '0.9',
    title: 'Income Protection Calculator NZ — How Long Could You Last?',
    h1: 'How long could your household last without your income?',
    desc:
      'A free NZ income protection calculator: turns your leave, savings and outgoings into a runway in weeks, and shows which wait period actually fits.',
    crumb: 'Income runway calculator',
    hero: { photo: 'sheep-hills', kicker: 'Calculator' },
    standfirst:
      'This is the number that should decide your wait period — and almost nobody works it out before buying.',
    answer: `<p>Your <strong>runway</strong> is how long your household could pay its bills with no income from you. It is
      built from sick leave, annual leave and accessible savings, measured against your monthly outgoings.</p>
      <p>It matters because the income protection <a href="/insurance-waiting-periods-nz">wait period</a> you choose is the
      single biggest lever on your premium. Buying a four-week wait when you have four months of runway means paying every
      month for cover you would never use.</p>`,
    updated: '2026-07-30',
    body2: `
    <div class="calc" data-reveal>
      <p class="eyebrow">Your numbers</p>
      <div class="calc-grid mt3">
        ${field('income-m', 'Your monthly income, after tax', 'What actually lands in your account', 6200, { step: 100 })}
        ${field('out-m', 'Household monthly outgoings', 'Mortgage or rent, food, power, childcare, everything', 5400, { step: 100 })}
        ${field('other-m', 'Other household income', 'A partner&rsquo;s income, rental income — after tax', 2800, { step: 100 })}
        ${field('sick', 'Sick leave days available', 'NZ statutory minimum is 10 days a year', 10, { step: 1 })}
        ${field('annual', 'Annual leave days available', '', 15, { step: 1 })}
        ${field('cash', 'Accessible savings', 'Money you could actually reach this month', 18000, { step: 1000 })}
      </div>

      <div class="calc-out">
        <p class="eyebrow">Your runway</p>
        <div class="calc-headline" id="out-weeks">—</div>
        <p class="small dim mt2" id="out-advice"></p>
        <div class="calc-rows mt3">
          <div><span>Monthly shortfall if your income stops</span><span id="r-gap">—</span></div>
          <div><span>Covered by leave</span><span id="r-leave">—</span></div>
          <div><span>Covered by savings</span><span id="r-cash">—</span></div>
          <div class="total"><span>Total runway</span><span id="r-weeks">—</span></div>
        </div>
        <div class="calc-rows mt3">
          <div><span>Wait period that fits your runway</span><span id="r-wait">—</span></div>
          <div><span>Typical maximum benefit (75% of income)</span><span id="r-benefit">—</span></div>
        </div>
      </div>
    </div>

    <h2>What the result is telling you</h2>
    <p>Two things. First, how exposed you are — and whether a long illness is an inconvenience or a crisis. Second, which
      wait period you should be quoting on, which is where the money is.</p>
    <div class="good-note" data-reveal><b>The move that saves the most money</b>
      If your runway is thirteen weeks, quote on a thirteen-week stand-down rather than four. The premium difference is
      substantial and repeats every month for decades — and you have given up nothing you would actually have used.</div>

    <h2>Two things this deliberately does not assume</h2>
    <ul>
      <li><strong>That ACC will pay.</strong> It will not, if the reason you cannot work is illness. That is the entire
        premise of this page. <a href="/what-acc-does-not-cover">See what ACC does not cover</a>.</li>
      <li><strong>That your outgoings stay the same.</strong> They usually rise during a serious illness — travel to
        treatment, parking, help around the house, a partner reducing hours. The runway above is, if anything,
        optimistic.</li>
    </ul>

    ${strip('sheep-hills', 'The wait period should be a decision. For most people it is an accident.')}

    <h2>Sizing the benefit</h2>
    <p>New Zealand income protection is typically capped at around 75% of income. The insurer is not being stingy — a policy
      that replaced 100% would remove any financial reason to return to work, and regulators and insurers both take a dim
      view of that.</p>
    <p>What it means practically is that even fully insured, there is a gap. Which is one of the arguments for holding some
      <a href="/trauma-insurance-nz">trauma cover</a> alongside: a lump sum that clears part of the mortgage permanently
      reduces the outgoings the 75% has to stretch across.</p>

    <h2>Then choose the benefit period</h2>
    <p>The calculator does not do this bit because it is a judgement rather than a sum, but it is the more important
      decision. Two years of cover is cheap and handles a survivable problem. The scenario that destroys households is being
      unable to work again at all — and only a benefit period running to age 65 covers it.</p>
    <p>If budget forces a compromise, a <strong>longer wait with a longer benefit period</strong> is almost always better
      shaped than a short wait with a two-year benefit.
      <a href="/income-protection-cost-nz">More on how the dials move the premium →</a></p>`,
    faqs: [
      {
        q: 'Should I count my partner\'s income?',
        a: '<p>Yes — the calculator does, because the honest question is whether the <em>household</em> can pay its bills, not whether you personally can. Where it gets complicated is that a partner often reduces their hours during a serious illness to provide care, so treating their income as fully stable is optimistic.</p>',
      },
      {
        q: 'What if my runway is already long?',
        a: '<p>Then you are in a good position, and the right response is usually a long wait period and a long benefit period — cheap cover for the catastrophic scenario, self-funding the survivable one. That is textbook use of insurance and it is much cheaper than most people expect.</p>',
      },
      {
        q: 'Does this account for a mortgage holiday?',
        a: '<p>No. Lenders will sometimes grant a repayment holiday or interest-only period during illness, which genuinely extends your runway — but it is discretionary, it accrues interest, and it is not something to plan around. If your bank has confirmed one in writing, you can add it to savings.</p>',
      },
    ],
    related: [
      ['/income-protection-nz', 'How income protection works', 'Full guide'],
      ['/income-protection-cost-nz', 'What it costs', 'The dials'],
      ['/acc-gap-checker', 'The ACC gap checker', 'Accident vs illness'],
      ['/insurance-waiting-periods-nz', 'Waiting periods', 'Choosing a stand-down'],
    ],
    script: `<script>${CALC_LIB}
bind(function(){
  var inc=num('income-m'), out=num('out-m'), other=num('other-m');
  var gap=Math.max(0, out-other);           /* monthly shortfall once your income stops */
  var daily=inc/21.7;                        /* leave is paid at your normal rate */
  var leaveCash=(num('sick')+num('annual'))*daily;
  var weeksFromLeave = gap>0 ? leaveCash/(gap/4.33) : 0;
  var weeksFromCash  = gap>0 ? num('cash')/(gap/4.33) : 0;
  var weeks = weeksFromLeave + weeksFromCash;

  put('r-gap', gap>0 ? money(gap)+' / month' : 'No shortfall');
  put('r-leave', Math.round(weeksFromLeave*10)/10+' weeks');
  put('r-cash', Math.round(weeksFromCash*10)/10+' weeks');
  put('r-weeks', Math.round(weeks)+' weeks');
  put('out-weeks', gap>0 ? Math.round(weeks)+' weeks' : 'Covered');

  var opts=[4,8,13,26,52,104], fit=4;
  for(var i=0;i<opts.length;i++){ if(weeks>=opts[i]) fit=opts[i]; }
  put('r-wait', gap>0 ? fit+' weeks' : 'n/a');
  put('r-benefit', money(inc*0.75)+' / month');

  put('out-advice', gap<=0
    ? 'On these numbers the rest of your household income already covers the outgoings. Worth re-checking with a realistic view of whether that income would hold steady during a serious illness.'
    : weeks<8
      ? 'That is a short runway. A serious illness would become a financial problem within two months, and ACC would pay nothing toward it.'
      : weeks<26
        ? 'A moderate runway. Quoting on a '+fit+'-week stand-down instead of four weeks will cut the premium meaningfully.'
        : 'A strong runway. A long wait period with a long benefit period is likely the best-value shape for you — cheap cover for the scenario you genuinely cannot self-fund.');
});
</script>`,
  },

  /* ---------------------------------------------------------- ACC gap check -- */
  {
    slug: 'acc-gap-checker',
    kind: 'tool',
    priority: '0.9',
    title: 'ACC Gap Checker NZ — What ACC Would Pay You vs What It Would Not',
    h1: 'The ACC gap, in your own numbers',
    desc:
      'Free tool: enter your income and outgoings and see the same six months off work as an accident and as an illness. The difference is the ACC gap.',
    crumb: 'ACC gap checker',
    hero: { photo: 'aoraki', kicker: 'Calculator' },
    standfirst:
      'Same person, same six months off work, same bills. One is an accident and one is an illness — and New Zealand treats them completely differently.',
    answer: `<p>ACC pays weekly compensation at up to <strong>80% of your income</strong> if an <em>accident</em> stops you
      working. If an <em>illness</em> stops you working, ACC pays <strong>nothing</strong>.</p>
      <p>The tool below shows both scenarios side by side using your own figures. Most people have some sense that this gap
      exists. Very few have seen it in dollars.</p>`,
    updated: '2026-07-30',
    body2: `
    <div class="calc" data-reveal>
      <p class="eyebrow">Your numbers</p>
      <div class="calc-grid mt3">
        ${field('g-income', 'Your monthly income, after tax', '', 6200, { step: 100 })}
        ${field('g-out', 'Household monthly outgoings', '', 5400, { step: 100 })}
        ${field('g-other', 'Other household income', 'After tax', 2800, { step: 100 })}
        ${field('g-cash', 'Accessible savings', '', 12000, { step: 1000 })}
        ${field('g-months', 'Months off work', 'Try 6, then try 24', 12, { step: 1 })}
        ${field('g-status', 'Your work status', '', 'employee', {
          select: [
            ['employee', 'Employee (PAYE)'],
            ['self', 'Self-employed or contractor'],
          ],
        })}
      </div>

      <div class="calc-out">
        <div class="grid g2">
          <div>
            <p class="eyebrow">If it is an accident</p>
            <div class="calc-headline" id="acc-head">—</div>
            <div class="calc-rows mt3">
              <div><span>ACC weekly compensation</span><span id="acc-pay">—</span></div>
              <div><span>Other household income</span><span id="acc-other">—</span></div>
              <div><span>Outgoings over the period</span><span id="acc-out">—</span></div>
              <div class="total"><span>Shortfall</span><span id="acc-gap">—</span></div>
            </div>
          </div>
          <div>
            <p class="eyebrow">If it is an illness</p>
            <div class="calc-headline" id="ill-head">—</div>
            <div class="calc-rows mt3">
              <div><span>ACC pays</span><span id="ill-pay">—</span></div>
              <div><span>Other household income</span><span id="ill-other">—</span></div>
              <div><span>Outgoings over the period</span><span id="ill-out">—</span></div>
              <div class="total"><span>Shortfall</span><span id="ill-gap">—</span></div>
            </div>
          </div>
        </div>
        <p class="small dim mt4" id="g-note"></p>
      </div>
    </div>

    <h2>Why the two columns differ so much</h2>
    <p>Because ACC is an <strong>accident</strong> compensation scheme, and always has been. The name is not a euphemism.
      Fall off a ladder and it is there. Get diagnosed with cancer, a heart condition, MS, or a back problem that built up
      over years rather than arriving in one moment, and it is not.</p>
    <p>The uncomfortable part is that the conditions most likely to stop a New Zealander working for a long stretch sit
      almost entirely in the second column. <a href="/what-acc-does-not-cover">The full breakdown of where the line falls
      →</a></p>

    ${strip('aoraki', 'Same person. Same six months. Two completely different countries.')}

    <h2>Three caveats, so this is honest</h2>
    <ul>
      <li><strong>ACC weekly compensation is taxable</strong>, and is based on pre-injury earnings. The figure above is a
        simplification and your actual entitlement is decided by ACC.</li>
      <li><strong>Self-employed people should treat the accident column with suspicion.</strong> Standard ACC cover pays
        from your <em>last filed return</em>, which for many contractors is well below what they live on.
        <a href="/self-employed-insurance-nz">ACC CoverPlus Extra fixes this →</a></li>
      <li><strong>Outgoings usually rise during serious illness</strong>, not stay flat — treatment travel, help at home, a
        partner reducing hours. Both columns are optimistic.</li>
    </ul>

    <h2>What closes the gap</h2>
    <p><a href="/income-protection-nz">Income protection</a> is the direct answer — it pays for illness as well as injury.
      <a href="/trauma-insurance-nz">Trauma cover</a> handles the immediate cash shock with a lump sum on diagnosis. Between
      them they cover the second column, which is the one the state does not.</p>
    <p>If the illness figure above bothered you, the next useful step is the
      <a href="/income-protection-calculator">income runway calculator</a>, which turns it into a wait period you can
      actually quote on.</p>`,
    faqs: [
      {
        q: 'Is this a quote?',
        a: '<p>No. It is an illustration built from figures you entered, using general rules about how ACC works. It does not know your employment history, your ACC classification or your policy wordings, and ACC decides entitlements case by case.</p>',
      },
      {
        q: 'Why 80% for ACC?',
        a: '<p>Weekly compensation is set at up to 80% of pre-injury earnings under the Accident Compensation Act 2001. There is a stand-down at the start and there are caps at high incomes, neither of which this simplified tool models.</p>',
      },
      {
        q: 'Does income protection just duplicate ACC then?',
        a: '<p>No — most policies offset against ACC precisely so you are not paid twice, which is what keeps the premium affordable. The cover earns its keep in the second column, where ACC contributes nothing at all. See <a href="/acc-vs-income-protection">ACC vs income protection</a>.</p>',
      },
    ],
    related: [
      ['/what-acc-does-not-cover', 'What ACC does not cover', 'The full picture'],
      ['/acc-vs-income-protection', 'ACC vs income protection', 'Compared'],
      ['/income-protection-calculator', 'Income runway calculator', 'The next step'],
      ['/self-employed-insurance-nz', 'Self-employed', 'CoverPlus Extra'],
    ],
    script: `<script>${CALC_LIB}
bind(function(){
  var inc=num('g-income'), out=num('g-out'), other=num('g-other'),
      cash=num('g-cash'), months=Math.max(1,num('g-months')), self=val('g-status')==='self';

  var totalOut=out*months, otherTotal=other*months;
  var accPay=inc*0.8*months;                  /* simplified: 80% of income, taxable, caps ignored */
  var accShort=Math.max(0, totalOut-accPay-otherTotal-cash);
  var illShort=Math.max(0, totalOut-otherTotal-cash);

  put('acc-pay', money(accPay)); put('acc-other', money(otherTotal));
  put('acc-out', '− '+money(totalOut)); put('acc-gap', accShort>0?money(accShort):'Covered');
  put('acc-head', accShort>0?money(accShort)+' short':'Covered');

  put('ill-pay','$0'); put('ill-other', money(otherTotal));
  put('ill-out', '− '+money(totalOut)); put('ill-gap', illShort>0?money(illShort):'Covered');
  put('ill-head', illShort>0?money(illShort)+' short':'Covered');

  var diff=illShort-accShort;
  put('g-note',
    (diff>0 ? 'Over '+months+' months, the difference between an accident and an illness is '+money(diff)+' out of your own pocket. That difference is the ACC gap. '
            : 'On these numbers your savings and other household income absorb both scenarios over '+months+' months — try increasing the months to see where that stops being true. ')
    + (self ? 'And because you are self-employed, treat the accident column as optimistic: standard ACC pays from your last filed return, not from what you actually live on.' : ''));
});
</script>`,
  },
];
