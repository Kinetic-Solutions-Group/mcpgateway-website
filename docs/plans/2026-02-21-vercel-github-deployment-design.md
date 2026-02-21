# Vercel + GitHub Deployment Workflow

**Date:** 2026-02-21
**Status:** Approved

## Goal

Replace CLI-based Vercel deployments with a Git-driven workflow: feature branches, PRs, and auto-deploy to production on merge to `main`.

## Decision

Use Vercel's built-in GitHub Git integration. No GitHub Actions, no custom CI/CD, no version tagging.

## Architecture

```
feature branch → push → Vercel preview deployment (unique URL)
PR to main → Vercel bot comments preview URL → review
merge to main → Vercel auto-deploys to production
```

## What Gets Set Up

1. **Vercel Git Integration** — connect GitHub repo in Vercel dashboard
2. **GitHub branch protection on `main`** — require PR reviews + Vercel status check
3. **`.gitignore`** — ensure `.vercel/` is excluded
4. **Initial commit pushed to `main`** — all current code

## What We Skip

| Skipped               | Reason                                                 |
| --------------------- | ------------------------------------------------------ |
| GitHub Actions CI/CD  | Vercel handles deployment; overkill for marketing site |
| Semantic versioning   | Continuous deployment, no version numbers              |
| Staging environment   | PR preview URLs serve as staging                       |
| Custom deploy scripts | Vercel auto-detects `pnpm build`                       |

## Implementation Steps

1. Verify `.gitignore` includes `.vercel/`, `.env*`, `node_modules/`
2. Commit and push all code to GitHub `main`
3. Connect GitHub repo to Vercel project in dashboard (user action — requires browser)
4. Configure GitHub branch protection rules on `main` (user action — requires browser)
5. Test the workflow: create a feature branch, push, verify preview URL, create PR, merge, verify production deploy
