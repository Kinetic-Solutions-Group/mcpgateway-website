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

- Website redesign merged to main, deployed to production (2026-02-21)
- Deep market research: MCP ecosystem, Shadow AI stats, competitor positioning, messaging best practices (2026-02-23)

### Now

Website content/messaging redesign — translating research into new homepage copy and structure

### Next

- Implement new homepage messaging (headline, problem statement, three pillars, dual CTA)
- Add OG image for social sharing
- Set up MDX for documentation content
- Wire email notify form to backend (Resend/Mailchimp)

---

## Open Questions

- Which headline angle to go with (category claim vs problem-forward vs capability-forward)
- Tone: technical/direct vs problem-forward vs capability-forward
- Whether to create a separate /enterprise page or keep dual-audience on homepage

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
