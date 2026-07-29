#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch.
#
# IMPORTANT: build.mjs deletes dist/ wholesale on every run, so dist/.git never
# survives a rebuild. If you `cd dist && git add -A` without re-initialising, git
# walks UP to the source repo and you publish the SOURCE to gh-pages instead of
# the built site. That has happened. Hence the fresh `git init` and the guards.
set -euo pipefail

cd "$(dirname "$0")/.."
REPO_URL="https://github.com/amitnz-web/covercheck-nz.git"

# Default: the project-site URL, which lives under /covercheck-nz.
# To move to the custom domain once the IONOS CNAME exists, run:
#   CUSTOM_DOMAIN=cover.amit.marketing bash tools/deploy-ghpages.sh
# which serves from the root and therefore needs no base path.
if [ -n "${CUSTOM_DOMAIN-}" ]; then
  export BASE_PATH=""
  export SITE_ORIGIN="https://${CUSTOM_DOMAIN}"
else
  export BASE_PATH="${BASE_PATH-covercheck-nz}"
  export SITE_ORIGIN="${SITE_ORIGIN-https://amitnz-web.github.io}"
fi

echo "Building  BASE_PATH='${BASE_PATH}'  SITE_ORIGIN='${SITE_ORIGIN}'"
node build.mjs
node verify.mjs

cd dist
# Guard 1: we must actually be looking at a built site.
[ -f index.html ] || { echo "ABORT: dist/index.html missing"; exit 1; }
# Guard 2: the source tree must not be here.
[ -f build.mjs ] && { echo "ABORT: dist/ contains source — refusing to publish"; exit 1; }

# GitHub Pages reads the custom domain from a CNAME file in the published tree.
[ -n "${CUSTOM_DOMAIN-}" ] && echo "$CUSTOM_DOMAIN" > CNAME

rm -rf .git
git init -q
git add -A
# Guard 3: never publish a tree that has no HTML in it.
git ls-files | grep -q '^index\.html$' || { echo "ABORT: index.html not staged"; exit 1; }

git -c user.name="Amit Sharma" -c user.email="amitnz@gmail.com" \
    commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -qf "$REPO_URL" HEAD:gh-pages
rm -rf .git

echo "Published $(ls *.html | wc -l) pages to gh-pages"
