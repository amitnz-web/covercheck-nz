# HANDOFF — Cover Check NZ · 2026-07-30

Written for whoever picks this up next (likely a Claude session on the **Z1 HP**). Amit had to take the
build machine with him.

## One-line status

**DONE. Live over HTTPS: https://insurance.amit.marketing** — 34 pages, all returning 200, valid certificate,
HTTPS enforced. **Nothing technical is outstanding.**

The remaining work is Amit-and-Arron work, not engineering — see "Next real work" below.

## HTTPS — resolved 2026-07-30, no action needed

The Let's Encrypt certificate stalled ~70 minutes because the Pages custom domain was set *before* the DNS record
existed (the documented stall case). Clearing and re-adding the cname re-requested it; it issued shortly after and
`https_enforced` is now `true`.

Ruled out and not worth re-checking: CAA records (`amit.marketing` has none, and `amitnz-web.github.io` authorises
`letsencrypt.org`) and the DNS chain (correct).

If HTTPS ever breaks in future, this cycle is the fix — run it from the `web/` directory:

    gh api -X PUT repos/amitnz-web/covercheck-nz/pages --raw-field cname=
    sleep 10
    gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=insurance.amit.marketing
    CUSTOM_DOMAIN=insurance.amit.marketing bash tools/deploy-ghpages.sh
    # then once https returns 200:
    gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=insurance.amit.marketing -F https_enforced=true

Health check any time:

    curl -s -o /dev/null -w "%{http_code}\n" https://insurance.amit.marketing/
    gh api repos/amitnz-web/covercheck-nz/pages --jq '{html_url,https_enforced,status}'

## Getting set up on the Z1

Source lives on the machine Amit took, but **everything is pushed to GitHub** — nothing is stranded:

    gh repo clone amitnz-web/covercheck-nz
    cd covercheck-nz
    node build.mjs && node verify.mjs        # expect: 34 pages, "All checks passed"
    node serve.mjs                           # local preview on :4321

Redeploy (only if you change content):

    CUSTOM_DOMAIN=insurance.amit.marketing bash tools/deploy-ghpages.sh

Requires `gh` authenticated as **amitnz-web**. If not: `gh auth login`.

## What this project is

A 34-page NZ insurance information site that funnels enquiries to **Arron Nettmann**, a licensed Financial Adviser
at **Buffer Insurance** (Auckland) and a friend of Amit's. Read `PLAN.md` before changing anything — it has the
positioning, the regulatory constraint and the full blocker list.

**The rule that must not be broken:** the site publishes *general information only*. Recommending a product or
insurer for someone's situation is regulated financial advice in NZ and needs an FMA licence, which this site does
not have. `verify.mjs` is the deploy gate and fails the build on advice phrasing, a missing disclaimer, an
un-UTM-stamped adviser link, a hard-coded contact detail in copy, broken links, missing alt/schema, more than one
`<h1>`, or an orphan page. **Do not weaken those checks to ship a page — rewrite the page.**

## Traps already hit (all guarded now — don't re-learn them)

1. **`build.mjs` deletes `dist/` wholesale**, so `dist/.git` never survives a rebuild. Publishing by hand from
   `dist/` made git walk up to the source repo and push **source** to `gh-pages` — the live site became a Jekyll
   README page for a few minutes. Always use `tools/deploy-ghpages.sh`; it re-inits git in `dist/` and refuses to
   publish a tree missing `index.html` or containing `build.mjs`.
2. **Git Bash on Windows rewrites a leading-slash env value into a Windows path.** `BASE_PATH=/covercheck-nz`
   became `C:/Program Files/Git/covercheck-nz` in every URL. Pass it without the leading slash.
3. **Don't nest backticks inside a `node -e` string in Bash.** The shell expands them and stray commands execute —
   this fired a real `gh api` call mid-script. Use the Write tool for file edits instead.
4. **Vercel is not the host.** Its free tier caps at 100 deploys/day and was exhausted twice; this ships on GitHub
   Pages. The stray Vercel project has been deleted. Don't "restore" Vercel.
5. **This is the ONE amit.marketing subdomain on a CNAME**, not the `76.76.21.21` A record the others use, because
   it points at GitHub rather than Vercel. Do not "fix" it to match the others — that takes the site down.
6. **The `gh` token lacks `workflow` scope**, so `.github/workflows/*` cannot be pushed. Push-to-deploy is not
   wired up; the Actions file is parked at `web/deploy/github-pages-workflow.yml.disabled`. To enable:
   `gh auth refresh -s workflow`, move it to `.github/workflows/pages.yml`, push.

## Next real work — none of it needs Amit's laptop

**#1 by a distance — Arron's own contact points.** Every CTA currently points at Buffer's generic `/contact` form
and the 0800 number saying "ask for Arron", which leaks enquiries to whoever answers. In `web/data/site.mjs`, set
on the `ADVISER` object:

- `bookingUrl` — his own Calendly/booking link (single highest-impact change on the site)
- `directEmail` — his own address
- `fspNumber` — his FSP number, publishable as an E-E-A-T signal

One edit, all 60+ CTAs follow, and the UTM stamping then shows him exactly what this site sent him.
**This needs Amit to ask Arron — it is not a coding task.**

Then, in order: a photo and short bio of Arron (the adviser sections carry landscape photography where his face
belongs, and we deliberately did not fabricate one); agree the commercial arrangement in writing; have Arron run
the site past Buffer's compliance person before it is promoted; submit the sitemap to Google Search Console.

Content queue and honest ranking expectations are in `PLAN.md` sections 7–8.

## Prompt to paste into the Z1 session

> Resume the Cover Check NZ job. Read `HANDOFF.md` and `PLAN.md` in the repo `amitnz-web/covercheck-nz` (clone it
> if needed). The site is fully live over HTTPS at insurance.amit.marketing — there is no outstanding technical
> work. The next task is whatever Amit brings back from Arron: his booking link, email and FSP number for
> `web/data/site.mjs`, plus a photo and bio.
