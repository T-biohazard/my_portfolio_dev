# my_portfolio_dev

Professional portfolio for **Md Tahsin** — AI & MLOps Engineer (MagicMind), Graduate Research Assistant (EWU), PhD Applicant. Updated from 2026 CV & profile summary.

## Live demo

**[https://portfolio-psi-orcin-88.vercel.app](https://portfolio-psi-orcin-88.vercel.app)**

Deployed on [Vercel](https://vercel.com/tahsin/portfolio) from [this repository](https://github.com/T-biohazard/my_portfolio_dev).

## CI/CD (auto-deploy on push)

Every push to `main` runs **GitHub Actions → Vercel production**. That updates:

**https://portfolio-psi-orcin-88.vercel.app**

### One-time secrets (required once)

Repo → **Settings → Secrets and variables → Actions → New repository secret**

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | Create at [vercel.com/account/tokens](https://vercel.com/account/tokens) (Full Account) |
| `VERCEL_ORG_ID` | `team_wSCru1MAADprqoHjNmSsZCjy` |
| `VERCEL_PROJECT_ID` | `prj_CAskLP3Jsu8oTwLafwnUYkd8eELq` |

After that, any `git push origin main` redeploys live.

### Optional native Vercel GitHub link

[Vercel → portfolio → Settings → Git](https://vercel.com/tahsin/portfolio/settings/git) → connect `T-biohazard/my_portfolio_dev` (install Vercel GitHub App if asked).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS + Swiper
- GitHub Actions → Vercel production

## Links

- [Google Scholar](https://scholar.google.com/citations?user=6zm80xAAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/tahsin0o/)
- [GitHub](https://github.com/T-biohazard)
- [ResearchGate](https://www.researchgate.net/profile/Md-Tahsin-4)
