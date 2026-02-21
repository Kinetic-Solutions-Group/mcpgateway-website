# CLAUDE.md - MCPGateway.com Website

## Project Overview

### What Is This?

Marketing and documentation website for MCP Gateway — the open-source MCP Gateway application located in the parent directory (`../mcpgateway`). This is a standalone Next.js site, not part of the gateway codebase itself.

### Tech Stack

| Layer      | Choice                              | Why                                                   |
| ---------- | ----------------------------------- | ----------------------------------------------------- |
| Framework  | Next.js 15 App Router               | Server Components by default, streaming, ISR          |
| Styling    | Tailwind CSS v4                     | 5x faster builds, CSS-first config, container queries |
| Components | shadcn/ui + Radix                   | Accessible primitives, marketing blocks ecosystem     |
| Animation  | Motion (Framer Motion v11)          | 2.5x faster than GSAP, React-native API               |
| Fonts      | Geist Sans + Geist Mono             | Vercel's own, designed for screens, variable weight   |
| Dark Mode  | next-themes + class strategy        | Dark-first like Linear/Vercel/Resend                  |
| SEO        | Metadata API + JSON-LD + sitemap.ts | Full structured data                                  |
| Content    | MDX (start), headless CMS later     | Developer-first, version controlled                   |
| Deploy     | Vercel                              | Analytics, Speed Insights, preview deployments        |

### File Structure

**Replace this example with YOUR project's actual structure. Claude uses this to navigate your codebase.**

```
project/
├── src/              # Backend code
├── frontend/         # Frontend code
├── tests/            # Test files
├── docs/             # Documentation
│   ├── prds/         # Product requirements
│   ├── plans/        # Design documents
│   ├── solutions/    # Compounded learnings (searchable)
│   └── CHANGELOG.md  # Historical record
└── .claude/          # Claude Code configuration
    ├── commands/     # Workflow commands (ENFORCED)
    └── rules/        # Coding standards (auto-loaded)
```

### Design Direction (optional — delete if not needed)

<!-- Remove this comment block and fill in your project's aesthetic:
- Premium, dark-mode-first aesthetic (think Linear.app, Vercel.com)
- Font pairing: Instrument Serif for headlines, Geist for body
- Color palette: deep navy (#0A0E27), electric blue (#3B82F6), warm white (#F8FAFC)
- No generic "AI slop" — avoid Inter, purple gradients, evenly-spaced 3-card grids
-->

### Deployment (optional — delete if not needed)

<!-- Remove this comment block and fill in your deployment setup:
- Hosted on Vercel, auto-deploys from `main` branch
- Use `vercel --yes` for preview deployments
- Environment variables managed via Vercel dashboard
-->

### Key Commands

**Replace the examples below with your project's actual commands:**

```bash
# Workflows (MANDATORY - hooks enforce these)
/new-feature <name>     # Full feature workflow
/fix-bug <name>         # Bug fix with systematic debugging
/quick-fix <name>       # Trivial changes only (< 3 files)
/codex <instruction>    # Second opinion from OpenAI Codex CLI

# Example project commands:
cd src && uv run pytest                    # Run tests
cd src && uv run ruff check .              # Lint
git checkout -b feat/{name}                # Start feature
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
