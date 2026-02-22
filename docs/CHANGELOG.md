# Changelog

All notable changes to MCPGateway.com Website will be documented in this file.

## [Unreleased]

### Added

- Initial project setup with Claude Code configuration

## 2026-02-21 — Website Redesign (feat/website-redesign)

### Added

- Coral brand theme matching MCP Gateway app (`#DF7F69` primary, `#F6F5F2` off-white, OKLCH dark mode)
- Bebas Neue display font for headlines + Inter for body text
- Three Pillars section (MCP Servers, Agent Skills, Sandboxes)
- Architecture diagram section with visual flow and 5 technical callouts
- Feature Grid section with 8 platform capabilities
- Deploy Section with 4 cloud marketplace cards (Azure, AWS, GCP, Red Hat) + email notify form
- `card-glow` hover utility, `bg-brand-gradient`, coral glow effects
- WCAG-compliant contrast tokens (`--primary-foreground: #2A2C39`, `--muted-foreground: #777777`)

### Changed

- Hero: "YOUR AI COMMAND CENTER" with coral glow, gateway semantic search demo terminal
- Navbar: Bebas Neue logo, anchor links (#features, #how-it-works, #architecture, #deploy), coral Deploy CTA
- How It Works: rewritten with real app workflow (register servers, create skills, connect agents)
- Footer: simplified to anchor links + GitHub + Contact (removed broken placeholder links)
- Metadata: updated description and keywords for three pillars
- Sitemap: removed nonexistent `/docs`, `/pricing`, `/blog` routes

### Removed

- `features.tsx` (replaced by three-pillars.tsx)
- `cta-section.tsx` (replaced by deploy-section.tsx)
- Broken links to `/blog/launch`, `/docs/getting-started`, `/pricing`

---

## Format

Each entry should include:

- Date (YYYY-MM-DD)
- Brief description
- Related issue/PR if applicable
