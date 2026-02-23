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

- Homepage messaging redesign merged to production (2026-02-23)
- Three pillars upgraded: mini-terminals with real API examples (semantic search, AI skill generation, sandbox exec) (2026-02-23)
- Domain mcpgateway.com connected to Vercel, live in production (2026-02-23)

### Now

Three pillars API terminal upgrade — reviewing locally, ready to commit and push

### Next

- Commit + push three pillars upgrade to production
- Add OG image for social sharing
- Wire email notify form to backend (Resend/Mailchimp)
- Set up MDX for documentation content (replace blog post React components)

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
