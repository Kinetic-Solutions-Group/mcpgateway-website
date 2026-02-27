# Changelog

All notable changes to MCPGateway.com Website will be documented in this file.

## 2026-02-26 — Observability Page (feat/observability-page)

### Added

- `/observability` pillar page: hero, dashboard screenshot, 4 feature blocks (Distributed Tracing, Prometheus Metrics, Full Audit Trail, Token Usage Analytics), 2 API showcase terminals, CTA
- Observability link in navbar and footer
- `server-detail.png` screenshot wired into `/mcp-servers` as "Deep Server Management" feature block
- `catalog-sandbox-images.png` screenshot wired into `/sandboxes` as "Pre-built Image Catalog" feature block
- 5 previously unused product screenshots now displayed (dashboard, monitoring-latency, request-history, token-usage, settings-telemetry)

## 2026-02-26 — Architecture Chart Redesign (feat/architecture-chart-redesign)

### Added

- CSS keyframes for flowing particle animation (`particle-flow`, `particle-flow-fan-left/right`, `pulse-glow`)
- `.animate-particle` and `.animate-pulse-glow` utility classes

### Changed

- Hero architecture diagram: upgraded from static text to premium animated version
- Agent pills: individual styled pills for LangChain, CrewAI, Claude, VS Code, Copilot Studio, Cursor (was text list)
- "ONE URL · ONE API KEY" pill: now pulses with coral glow animation
- MCP Gateway box: expanded from 3 to 7 capability pills (Auth, Route, Audit, Rate Limit, Telemetry, RBAC, Playground) with gradient border and inner glow
- Bottom pillar cards: glassmorphic cards with real example tags and "+N more" counters (was icon + label only)
- Connectors: SVG paths with flowing particle dots (was static gradient divs)
- Entrance: staggered top-down reveal animation (was single fade-in)
- Chart width: max-w-3xl → max-w-4xl
- Mobile: SVG fan-out hidden, replaced with simple vertical connector

## 2026-02-23 — Pillar Pages (feat/pillar-pages)

### Added

- `/mcp-servers` page: hero, 4 feature blocks (Six Server Types, Gateway Modes, AI Generation, One URL), 5 API showcase terminals, CTA
- `/skills` page: hero, 4 feature blocks (Three Ways to Create, Progressive Loading diagram, AI Generation, Install on Sandboxes), 4 API terminals, CTA
- `/sandboxes` page: hero, 4 feature blocks (Persistent Containers, Warm Pool diagram, Security checklist, File Management), 5 API terminals, CTA
- Shared `MiniTerminal` component extracted from three-pillars into `src/components/shared/mini-terminal.tsx`
- Shared `FeatureBlock` component for alternating text+visual layout
- Shared `ProductScreenshot` component with glow frame
- 7 placeholder SVG screenshots in `public/screenshots/`
- Sitemap updated with /mcp-servers, /skills, /sandboxes, /blog routes

### Changed

- Navbar: replaced "Features" link with three pillar links (MCP Servers, Skills, Sandboxes)
- Three-pillars homepage section now imports MiniTerminal from shared component

## 2026-02-23 — Homepage Messaging Redesign (feat/homepage-messaging-redesign)

### Added

- Problem Section: Shadow AI statistics (91% unmanaged, 53% insecure credentials, $670K breach cost)
- Blog Section: "Insights" with two post cards linking to /blog
- CTA Section: "Ready to take control" with dual CTAs and email signup
- Blog infrastructure: /blog index page, /blog/[slug] dynamic routing, @tailwindcss/typography
- Blog Post: "Why AI Agents Need a Control Plane" by Pablo Marin (Shadow AI research, references to Anthropic, Gartner, IBM, Astrix Security, NIST)
- Blog Post: "Open Source in the Age of AI Coding" by Pablo Marin (FSL licensing strategy, references to Sentry, Kong, Grafana, a16z, Tailwind)

### Changed

- Hero: "The platform for production AI agents" with architecture diagram (Agents → Gateway → Servers/Skills/Sandboxes)
- Hero badge: "Source-Available · API-First · Self-Hosted" (was "Open Source MCP Gateway")
- Three Pillars: section label "THE SOLUTION", headline "One platform. Three capabilities.", YAML code snippets inside cards
- Deploy Section: renamed "Deploy Your Way" with Self-Hosted/Marketplaces/Red Hat cards and FSL messaging
- Navbar: simplified to Features, Deploy, Blog links
- Metadata: title "The Platform for Production AI Agents", updated description

### Removed

- Terminal demo (GatewayDemo component) from hero
- How It Works section (merged into three pillars)
- Architecture section (replaced by hero diagram)
- Feature Grid section (cut for focus)

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
