# CONTINUITY

## Goal

Marketing and documentation website for MCP Gateway (mcpgateway.com)

## Key Decisions

| Decision   | Choice                                     | Why                                               |
| ---------- | ------------------------------------------ | ------------------------------------------------- |
| Deployment | Vercel Git Integration (no GitHub Actions) | Auto-deploys on push; overkill for marketing site |
| Branching  | Trunk-based (main = production)            | Simple, PR previews serve as staging              |
| Versioning | No SemVer tags                             | Continuous deployment, no version numbers         |
| PR checks  | Vercel build only                          | No custom CI needed                               |

---

## State

### Done (recent 2-3 only)

- Left-aligned JSON, context engineering value prop in terminal (2026-02-21)
- Bebas Neue headings, bigger terminal, app logo, dark-mode-only (2026-02-21)
- Full website redesign: 6 sections on `feat/website-redesign` (2026-02-21)

### Now

Ready to create PR for website redesign (`feat/website-redesign` → `main`)

### Next

- Review and merge website redesign PR
- Add SEO metadata and structured data (OG image)
- Set up MDX for documentation content

---

## Open Questions

- None currently

## Blockers

- None currently

---

## Update Rules

> **IMPORTANT:** You (Claude) are responsible for updating this file. The Stop hook will remind you, but YOU must make the edits.

**On task completion:**

1. Add to Done (keep only 2-3 recent items)
2. Move top of Next → Now
3. Add to CHANGELOG.md if significant

**On new feature:**
Clear Done section, start fresh

**Where detailed progress lives:**

- Feature subtasks → `docs/plans/[feature].md`
- Historical record → `docs/CHANGELOG.md`
- Learnings → `docs/solutions/`

---

## Session Start

Claude should say:

> "Loaded project state. Current focus: [Now]. Ready to continue or start something new?"
