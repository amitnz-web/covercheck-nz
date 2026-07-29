# HANDOFF — Cover Check NZ · 2026-07-30

Written for whoever picks this up next (likely a Claude session on the **Z1 HP**). Amit had to take the
build machine with him.

## One-line status

**The site is LIVE and finished: http://insurance.amit.marketing** — 34 pages, all returning 200.
The only thing outstanding is **HTTPS**, and it is waiting on GitHub, not on us.

## The only outstanding task

GitHub is provisioning the Let's Encrypt certificate for `insurance.amit.marketing`. Until it lands the site
serves HTTP only, so **don't promote the link yet** — browsers will show "Not secure".

**Check whether it is done:**
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://insurance.amit.marketing/
```
- `200` → cert is live. Run the enforce command below (GitHub often flips this itself, so check first).
- `000` → still provisioning. Nothing to do but wait.

**Enforce HTTPS once the cert exists** (safe to retry any number of times; returns HTTP 404
*"The certificate does not exist yet"* until it is ready):
```bash
gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=insurance.amit.marketing -F https_enforced=true
```

**Confirm:**
```bash
gh api repos/amitnz-web/covercheck-nz/pages --jq '{html_url,https_enforced,status}'
```
You want `https_enforced: true` and `html_url: https://...`.

### What has already been tried on the cert

- **CAA records ruled out** — `amit.marketing` has none, and the CNAME target `amitnz-web.github.io` explicitly
  authorises `letsencrypt.org`. Not the blocker.
- **DNS verified** — `insurance.amit.marketing` → CNAME `amitnz-web.github.io` → `185.199.108–111.153`. Correct.
- **Cert stalled ~70 min.** Likely cause: the Pages custom domain was set *before* the DNS record existed, which
  is the documented stall case. Fixed by clearing and re-adding the cname (which re-requests the cert) and
  republishing. Pages went `errored` → `built` during that; HTTP stayed up throughout.
- If it is **still** stuck many hours later, repeat that cycle:
  ```bash
  cd "<repo>/web"
  gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=""
  sleep 10
  gh api -X PUT repos/amitnz-web/covercheck-nz/pages -f cname=insurance.amit.marketing
  CUSTOM_DOMAIN=insurance.amit.marketing bash tools/deploy-ghpages.sh
  ```

## Getting set up on the Z1

Source lives on the machine Amit took, but **everything is pushed to GitHub** — nothing is stranded:

```bash
gh repo clone amitnz-web/covercheck-nz
cd covercheck-nz
node build.mjs && node verify.mjs        # should print: 34 pages, ✓ All checks passed
node serve.mjs                           # local preview on :4321
```

Redeploy (only if you change content):
```bash
CUSTOM_DOMAIN=insurance.amit.marketing bash tools/deploy-ghpages.sh
```

Requires `gh` authenticated as **amitnz-web**. If it is not: `gh auth login`.

## What this project is

A 34-page NZ insurance information site that funnels enquiries to **Arron Nettmann**, a licensed Financial
Adviser at **Buffer Insurance** (Auckland) and a friend of Amit's. Read `PLAN.md` before changing anything —
it has the positioning, the regulatory constraint and the full blocker list.

**The rule that must not be broken:** the site publishes *general information only*. Recommending a product or
insurer for someone's situation is regulated financial advice in NZ and needs an FMA licence, which this site
does not have. `verify.mjs` is the deploy gate and fails the build on advice phrasing, a missing disclaimer, an
un-UTM-stamped adviser link, a hard-coded contact detail in copy, broken links, missing alt/schema, >1 `<h1>`,
or an orphan page. **Do not weaken those checks to ship a page — rewrite the page.**

## Deploy traps already hit (all guarded now, don't re-learn them)

1. **`build.mjs` deletes `dist/` wholesale**, so `dist/.git` never survives a rebuild. Publishing by hand from
   `dist/` made git walk up to the source repo and push **source** to `gh-pages` — the live site became a Jekyll
   README page for a few minutes. Always use `tools/deploy-ghpages.sh`, which re-inits git in `dist/` and refuses
   to publish a tree missing `index.html` or containing `build.mjs`.
2. **Git Bash on Windows rewrites a leading-slash env value into a Windows path.** `BASE_PATH=/covercheck-nz`
   became `C:/Program Files/Git/covercheck-nz` in every URL. Pass it without the leading slash.
3. **Vercel is not the host.** Its free tier caps at 100 deploys/day and was exhausted twice; this ships on
   GitHub Pages. The stray Vercel project has been deleted. Don't "restore" Vercel.
4. **This is the ONE amit.marketing subdomain on a CNAME**, not the `76.76.21.21` A record the others use —
   because it points at GitHub, not Vercel. Do not "fix" it to match the others; that takes the site down.
5. **The `gh` token lacks `workflow` scope**, so `.github/workflows/*` cannot be pushed. Push-to-deploy is
   therefore not wired up; the Actions file is parked at `web/deploy/github-pages-workflow.yml.disabled`.
   To enable: `gh auth refresh -s workflow`, move it to `.github/workflows/pages.yml`, push.

## Next real work (not blocking, and none of it needs Amit's laptop)

**#1 by a distance — Arron's own contact points.** Every CTA currently points at Buffer's generic `/contact`
form and the 0800 number saying "ask for Arron", which leaks enquiries to whoever answers. In
`web/data/site.mjs`, set on the `ADVISER` object:
- `bookingUrl` — his own Calendly/booking link (single highest-impact change on the site)
- `directEmail` — his own address
- `fspNumber` — his FSP number, publishable as an E-E-A-T signal

One edit, all 60+ CTAs follow, and the UTM stamping then shows him exactly what this site sent him.
**This needs Amit to ask Arron — it is not a coding task.**

Then, in order: a photo + bio of Arron (the adviser sections currently carry landscape photography where his
face belongs, and we deliberately did not fabricate one); agree the commercial arrangement in writing; have
Arron run the site past Buffer's compliance person before it is promoted; submit the sitemap to Google Search
Console.

Content queue and honest ranking expectations are in `PLAN.md` §7–8.

## Prompt to paste into the Z1 session

> Resume the Cover Check NZ job. Read `HANDOFF.md` and `PLAN.md` in the repo `amitnz-web/covercheck-nz`
> (clone it if needed). The site is live at insurance.amit.marketing on GitHub Pages; the only outstanding
> item is enabling HTTPS once GitHub finishes provisioning the certificate. Check it, enable it if ready,
> and otherwise keep checking periodically.
