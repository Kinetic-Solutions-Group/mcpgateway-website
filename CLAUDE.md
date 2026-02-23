# CLAUDE.md - MCPGateway.com Website

## Project Overview

### What Is This?

Marketing and documentation website for MCP Gateway — the open-source MCP Gateway application located in the parent directory (`../mcpgateway`). This is a standalone Next.js site, not part of the gateway codebase itself.

### Tech Stack

| Layer      | Choice                              | Why                                                   |
| ---------- | ----------------------------------- | ----------------------------------------------------- |
| Framework  | Next.js 16 App Router               | Server Components by default, streaming, ISR          |
| Styling    | Tailwind CSS v4                     | 5x faster builds, CSS-first config, container queries |
| Components | shadcn/ui + Radix                   | Accessible primitives, marketing blocks ecosystem     |
| Animation  | Motion (Framer Motion v11)          | 2.5x faster than GSAP, React-native API               |
| Fonts      | Geist Sans + Geist Mono             | Vercel's own, designed for screens, variable weight   |
| Dark Mode  | next-themes + class strategy        | Dark-first like Linear/Vercel/Resend                  |
| SEO        | Metadata API + JSON-LD + sitemap.ts | Full structured data                                  |
| Content    | MDX (start), headless CMS later     | Developer-first, version controlled                   |
| Deploy     | Vercel                              | Analytics, Speed Insights, preview deployments        |

### File Structure

```
mcpgateway-website/
├── src/
│   ├── app/              # Next.js App Router (pages, layouts, routes)
│   ├── components/       # React components (ui/, sections/, etc.)
│   └── lib/              # Shared utilities
├── public/               # Static assets
├── docs/
│   ├── plans/            # Design documents
│   └── solutions/        # Compounded learnings (searchable)
├── .claude/
│   ├── commands/         # Workflow commands (ENFORCED)
│   └── rules/            # Coding standards (auto-loaded)
├── .vercel/              # Vercel project config (gitignored)
├── components.json       # shadcn/ui config
├── next.config.ts        # Next.js configuration
├── tailwind config       # In CSS via Tailwind v4
└── package.json          # pnpm
```

### Design Direction

- Premium, dark-mode-first aesthetic (think Linear.app, Vercel.com)
- Geist Sans + Geist Mono font pairing
- No generic "AI slop" — avoid purple gradients, evenly-spaced 3-card grids

### Deployment

**Git-driven via Vercel GitHub Integration. No CLI deploys, no GitHub Actions.**

```
feature branch → push → Vercel preview deployment (unique URL)
PR to main → Vercel bot comments preview URL → review
merge to main → Vercel auto-deploys to production
```

- **Production URL:** https://mcpgateway-website.vercel.app
- **GitHub repo:** Kinetic-Solutions-Group/mcpgateway-website
- **Vercel project:** mcpgateway-website (team: ksg-team-url)
- **Branch protection on `main`:** require PR + 1 approval + Vercel status check passing

**Environment variables:** managed in Vercel dashboard (Project Settings > Environment Variables), scoped per environment (Production, Preview, Development). Use `vercel env pull` to download dev vars locally. Never commit `.env` files.

**How this was set up (one-time, already done):**

1. Logged into Vercel CLI: `npx vercel login`
2. Initial deploy: `npx vercel --yes` (created Vercel project + first production deploy)
3. Connected GitHub to Vercel account: Vercel Dashboard > Settings > Authentication > Connect GitHub
4. Installed Vercel GitHub App on the org: Vercel Dashboard > Project > Settings > Git > GitHub > Install
5. Connected repo: Vercel Dashboard > Project > Settings > Git > select `mcpgateway-website` repo > Connect
6. GitHub branch protection: GitHub > repo Settings > Branches > Add rule for `main` (require PR, require Vercel status check)

**What we intentionally skip:**

| Skipped               | Reason                                                 |
| --------------------- | ------------------------------------------------------ |
| GitHub Actions CI/CD  | Vercel handles deployment; overkill for marketing site |
| Semantic versioning   | Continuous deployment, no version numbers              |
| Staging environment   | PR preview URLs serve as staging                       |
| Custom deploy scripts | Vercel auto-detects `pnpm build`                       |

### Key Commands

```bash
# Development
pnpm dev                               # Start Next.js dev server (http://localhost:3000)
pnpm build                             # Production build (Turbopack)
pnpm lint                              # ESLint check
pnpm start                             # Serve production build locally

# Deployment (Git-driven — no direct Vercel CLI deploys)
git checkout -b feat/{name}            # Start feature branch
git push -u origin feat/{name}         # Push → triggers Vercel preview deploy
# Create PR on GitHub → Vercel bot posts preview URL
# Merge PR to main → Vercel auto-deploys to production

# Workflows (MANDATORY - hooks enforce these)
/new-feature <name>     # Full feature workflow (creates worktree)
/fix-bug <name>         # Bug fix with systematic debugging (creates worktree)
/quick-fix <name>       # Trivial changes only (< 3 files, no worktree)
```

---

## Detailed Rules

All coding standards, workflow rules, and policies are in `.claude/rules/`.
These files are auto-loaded by Claude Code with the same priority as this file.

**What's in `.claude/rules/`:**

- `principles.md` — Top-level principles and design philosophy
- `workflow.md` — Decision matrix for choosing the right command
- `worktree-policy.md` — Git worktree isolation rules
- `critical-rules.md` — Non-negotiable rules (branch safety, TDD, etc.)
- `memory.md` — How to use persistent memory and save learnings
- `security.md`, `testing.md`, `api-design.md` — Coding standards
- Language-specific: `python-style.md`, `typescript-style.md`, `database.md`, `frontend-design.md`
