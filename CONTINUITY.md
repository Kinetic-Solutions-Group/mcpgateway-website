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

- Observability pillar page with 5 product screenshots, API terminals, nav/footer links (2026-02-26)
- Architecture chart redesign: flowing particles, expanded content, glassmorphic cards (2026-02-26)
- Wired remaining unused screenshots into /mcp-servers and /sandboxes (2026-02-26)

### Now

Two branches ready for PRs: `feat/architecture-chart-redesign` and `feat/observability-page`

### Next

- Create PRs and merge both branches to production
- Add OG image for social sharing
- Wire email notify form to backend (Resend/Mailchimp)

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
