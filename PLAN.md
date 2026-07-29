# Cover Check NZ — plan, strategy and open blockers

**What it is:** a 34-page organic-search insurance site for New Zealand that funnels enquiries to
**Arron Nettmann**, a licensed Financial Adviser at **Buffer Insurance** (Auckland) — a friend of Amit's.
Built 2026-07-30. Source: `C:\Users\amitn\Ventures\CoverCheck\web`.

## STATUS: LIVE at insurance.amit.marketing

All 34 pages serving. Repo `amitnz-web/covercheck-nz`, published from the `gh-pages` branch.

Vercel hit its free 100-deploys-per-day cap (twice, hours apart), so this ships on **GitHub Pages** — free, no daily
cap, and it takes a custom domain. The stray Vercel project has been deleted; GitHub Pages is the only deploy target.

**DNS (done 2026-07-30):** IONOS CNAME `insurance` → `amitnz-web.github.io`.
Note this is a **CNAME**, unlike every other amit.marketing subdomain, which uses the `76.76.21.21` A record for
Vercel. Don't "fix" it to an A record.

**HTTPS:** GitHub provisions the Let's Encrypt certificate automatically once DNS resolves; it can take up to an
hour. Until it lands the site serves over HTTP only. Once `https://insurance.amit.marketing` returns 200:
```bash
gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=insurance.amit.marketing -F https_enforced=true
```

**Redeploy:**
```bash
cd "C:/Users/amitn/Ventures/CoverCheck/web" && CUSTOM_DOMAIN=insurance.amit.marketing bash tools/deploy-ghpages.sh
```

**Two deploy traps that already bit once — both now guarded in the script:**
- `build.mjs` deletes `dist/` wholesale, so `dist/.git` never survives. Publishing by hand from `dist/` made git
  walk up to the source repo and push **source** to `gh-pages`, replacing the site with a Jekyll README page.
- Git Bash on Windows rewrites a leading-slash env value into a Windows path, so `BASE_PATH=/covercheck-nz` became
  `C:/Program Files/Git/covercheck-nz` in every URL. Pass it **without** the leading slash.

**Push-to-deploy is not wired up yet:** the `gh` token lacks `workflow` scope, so the Actions file is parked at
`web/deploy/github-pages-workflow.yml.disabled`. To enable it: `gh auth refresh -s workflow`, then move it to
`.github/workflows/pages.yml` and push.

---

## 1. Positioning — and why it does not cannibalise bufferinsurance.co.nz

Buffer's own site already ranks for brand terms and runs a decent FAQ library (life cost by age, pre-existing
conditions, ACC articles, "is trauma worth it", broker fees). **Cover Check must not rewrite those.**

The differentiation is deliberate:

| | bufferinsurance.co.nz | insurance.amit.marketing |
|---|---|---|
| Job | Brand, product pages, convert | Answer the question, capture the searcher |
| Format | Marketing site + FAQ posts | Editorial guides + **calculators** + comparison tables |
| Voice | "We make insurance easy" | "Here is the arithmetic, including when not to buy" |
| Trust play | Testimonials, 5-star reviews | Publishing the case *against* buying |

The moat is the **three calculators** and the **comparison pages**. Buffer has neither, they are the highest-intent
queries in the category, and they are what makes the site linkable.

**Rule: if Buffer publishes an article on a topic, we go one level more specific or more numeric, and we link to them.**

## 2. Regulatory position — the constraint that shaped the whole site

In New Zealand, recommending a specific product or insurer for someone's situation is **regulated financial advice**
and requires an FMA Financial Advice Provider licence (FSLAA 2019 regime). Cover Check does not have one and must
never behave as if it does.

So the architecture is: **Cover Check gives general information → Arron gives the advice.** That is also the funnel.

Enforced mechanically in `verify.mjs`, which fails the build on:
- any page missing the "not regulated financial advice" statement
- advice phrasing (`you should buy`, `we recommend you`, `the best insurer is`, …)
- an adviser link that is not UTM-stamped
- a hard-coded phone number in page copy (contact details must come from `ADVISER` in `data/site.mjs`)
- broken internal links, missing alt text, missing schema, >1 `<h1>`, orphan pages

**Do not weaken these checks to ship a page.** Rewrite the page.

## 3. Design

Palette lifted directly from bufferinsurance.co.nz (sampled from the live site) so arriving at Buffer from here
does not feel like a different conversation:

- ink `#1B222B` · butter `#F7D775` · lilac `#D6C6F4` · pale lilac `#F0E8FF` · plum `#8261BF`
- paper `#FBFAF7` reading surface
- **Poppins** (Buffer's typeface) for UI/body + **Fraunces** for editorial display — both self-hosted, no third-party font request

Photography is **real New Zealand work under the Unsplash Licence**, downloaded locally (never hotlinked), credited
on `/credits`. Deliberately **no AI-generated images and no stock-photo "advisers"** — on a YMYL insurance page,
synthetic people are a trust liability. 12 photos × 3 widths, served with a real `srcset`.

Structural: alternating paper → ink → paper bands, full-bleed photo strips with pull-quotes, sticky adviser rail on
desktop, scroll reveals that are **progressive** (content is visible without JS; `.js` class gates the hiding).

## 4. Page inventory (34)

- **Hubs (5):** home, `/types-of-insurance`, `/what-it-costs`, `/compare`, `/calculators`
- **Cover guides (6):** life, health, income protection, trauma, mortgage protection, business/key person
- **The gap (1):** `/what-acc-does-not-cover` ← the site's central argument, and its best link magnet
- **Cost pages (3):** life by age, health by age, income protection
- **Comparisons (6):** IP vs mortgage, trauma vs IP, ACC vs IP, adviser vs direct, health vs public, life vs trauma
- **Practical guides (3):** pre-existing conditions, waiting periods, how claims work
- **Life stages (3):** first-home buyers, new parents, self-employed
- **Calculators (3):** cover amount, income runway, ACC gap checker
- **Trust (4):** talk-to-arron, about, how-we-write-this, credits

## 5. Why these calculators

They answer the three questions that decide what someone buys, and each one hands the reader a number they can
defend — which is a far better state to arrive at an adviser in than "how much is life insurance".

- `/how-much-life-cover-do-i-need` — debts + income replacement + final costs − existing. Verified against hand-calc.
- `/income-protection-calculator` — leave + savings ÷ outgoings = runway in weeks → **the wait period they should quote on**.
  This is the money insight; nobody works it out before buying and it is the biggest premium lever.
- `/acc-gap-checker` — the same months off work as an accident vs as an illness. Opens showing a real gap by default.

All run client-side, **no email gate**, nothing transmitted. That is stated on the page and is true — it is also the
strongest differentiator against every other NZ insurance "calculator", which are lead forms.

---

## 6. BLOCKED ON AMIT / ARRON — nothing converts properly until #2

1. ~~Deploy + DNS~~ — **done. Live at insurance.amit.marketing.** Only HTTPS enforcement remains (auto, see top).
2. **Get Arron's own contact points.** Right now every CTA points at Buffer's generic `/contact` form and the
   0800 number, with "ask for Arron". That leaks enquiries to whoever picks up. Set in `data/site.mjs`:
   - `ADVISER.bookingUrl` — his own Calendly/booking link *(highest impact single change on the site)*
   - `ADVISER.directEmail` — his own address
   - `ADVISER.fspNumber` — his FSP number, so we can publish it as an E-E-A-T signal
   One edit, all 60+ CTAs follow, and the UTM stamping means he can see exactly what the site sent him.
3. **Ask Arron for a photo and 100 words of bio.** The `/talk-to-arron` and home "who you would actually talk to"
   sections currently carry NZ landscape photography where a photo of Arron belongs. A real face materially lifts
   conversion on an adviser page, and we will not fabricate one.
4. **Agree the commercial arrangement in writing** — referral fee, or reciprocal, or nothing. `/about` currently says
   "we may benefit from that introduction", which is honest but vague. Once it is agreed, say exactly what it is.
5. **Confirm with Arron that the site does not create a compliance problem for Buffer's FAP licence.** It should not —
   we give no advice and make no product recommendations — but he should see it before it is promoted, and his
   compliance person may want the disclosure wording on `/about` tweaked.
6. **Google Search Console** — verify the property, submit `/sitemap.xml`.

## 7. Next content (in priority order, once live)

1. **Insurer landscape page** — factual, non-ranking: who the NZ insurers are (Southern Cross, nib, AIA, Partners Life,
   Chubb, Fidelity), what each is known for. Huge search volume, and we can do it without recommending anyone.
2. **"Does ACC cover X"** cluster — cancer, mental health, gradual back pain, surgery complications, overseas illness.
   Each is a real query and each links back to `/what-acc-does-not-cover`.
3. **Condition-specific underwriting pages** — diabetes, high blood pressure, anxiety/depression, endometriosis, ADHD.
   Extremely high intent, very low competition, and exactly the situation where an adviser genuinely adds value.
4. **Regional pages** only if Arron wants them (Auckland, Hamilton, Tauranga, Christchurch) — thin unless localised properly.
5. **Instagram cross-link** — Arron's `@arron.buffer.nz` is a content source. Each of his reels can become a page here,
   and each page gives him a link to put in stories. That loop is what makes this compound.

## 8. Honest expectations

The brief was "one of the top ranking insurance pages in New Zealand". Insurance is among the most competitive and
most expensive SERPs there is — the incumbents (MoneyHub, Policywise, Quashed, the insurers themselves) have years of
domain authority and full-time content teams. A new subdomain will not outrank them on "life insurance NZ", and any
plan that assumes otherwise is not a plan.

What is genuinely winnable within 6–12 months, because the competition is weak and the intent is high:
- the **ACC-gap** cluster (the incumbents cover it thinly and it is the most under-served real question in the market)
- the **comparison** queries (X vs Y) — under-served, and our pages are better than what currently ranks
- the **calculator** queries, where every competing result is an email gate and ours is not
- **long-tail condition + insurance** queries

That is where the leads actually are anyway. Someone searching "income protection vs mortgage protection" is far
closer to buying than someone searching "life insurance".

Related memory: `[[dadprep-site]]` (same friend, same funnel pattern), `[[portfolio-master-strategy]]`,
`[[premium-website-rules]]`, `[[single-page-cashsites]]`.
