#!/usr/bin/env bash
# One-time CI/CD setup: push GitHub Actions secrets for Vercel auto-deploy.
# Requires: gh auth login  AND  an existing Vercel CLI login (vercel whoami)
set -euo pipefail

REPO="T-biohazard/my_portfolio_dev"
ORG_ID="team_wSCru1MAADprqoHjNmSsZCjy"
PROJECT_ID="prj_CAskLP3Jsu8oTwLafwnUYkd8eELq"
AUTH_FILE="${HOME}/.local/share/com.vercel.cli/auth.json"

if ! command -v gh >/dev/null 2>&1 && [[ ! -x "${HOME}/.local/bin/gh" ]]; then
  echo "Install GitHub CLI first: https://cli.github.com/"
  exit 1
fi

GH="${HOME}/.local/bin/gh"
command -v gh >/dev/null 2>&1 && GH="$(command -v gh)"

if ! "$GH" auth status >/dev/null 2>&1; then
  echo "Run: $GH auth login"
  exit 1
fi

if [[ ! -f "$AUTH_FILE" ]]; then
  echo "Vercel not logged in. Run: npx vercel login"
  exit 1
fi

TOKEN="$(python3 -c "import json; print(json.load(open('$AUTH_FILE'))['token'])")"

echo "Setting GitHub secrets on $REPO ..."
printf '%s' "$TOKEN" | "$GH" secret set VERCEL_TOKEN --repo "$REPO"
printf '%s' "$ORG_ID" | "$GH" secret set VERCEL_ORG_ID --repo "$REPO"
printf '%s' "$PROJECT_ID" | "$GH" secret set VERCEL_PROJECT_ID --repo "$REPO"

echo "Done. Trigger a deploy with: git commit --allow-empty -m 'ci: trigger deploy' && git push"
"$GH" workflow list --repo "$REPO" || true
