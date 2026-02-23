# Homepage Messaging Redesign — Design Document

**Date:** 2026-02-23
**Author:** Claude (with Pablo Marin)
**Status:** Approved

---

## Context

The current homepage leads with "Your AI Command Center" — a vague tagline that doesn't communicate what MCP Gateway is or what problem it solves. Based on extensive market research (Shadow AI statistics, MCP ecosystem analysis, competitor positioning, and SaaS website best practices), we're redesigning the homepage to clearly state what MCP Gateway is, what problem it solves, and who it's for.

### Key Strategic Decisions Made During This Session

1. **Positioning:** "The platform for production AI agents" (not "AI Command Center")
2. **Licensing:** Source-available under FSL-2.0 (not "open source" as identity)
3. **Revenue model:** Free self-hosted core + paid enterprise features (SSO, RBAC, audit logs, GUI) via license key
4. **Distribution:** Cloud marketplaces (AWS, Azure, GCP) + Red Hat OpenShift certification
5. **Hero visual:** Architecture diagram (replacing terminal demo)
6. **Brand color:** Coral (#df7f69) retained
7. **Page structure:** Problem-first (Approach A) — 6 focused sections

---

## Page Structure

### Section 1: HERO (full viewport)

- **Badge:** `Source-Available · API-First · Self-Hosted`
- **Headline:** "The platform for production AI agents" (Bebas Neue, coral glow on "production AI agents")
- **Subheadline:** "Manage the MCP servers, skills, and sandboxes your AI agents need — with the governance enterprises trust."
- **CTAs:** "Get Started" (solid coral) + "View on GitHub" (outline)
- **Visual:** Architecture diagram built with divs/Tailwind (not an image):
  - AI Agents (framework icons) → ONE URL / ONE API KEY → MCP Gateway (Auth | Route | Audit) → MCP Servers | Skills | Sandboxes
- **Background:** Grid pattern + radial fade (existing pattern)
- **Animation:** Agents flow down through gateway to three outputs

### Section 2: THE PROBLEM

- **Section label:** `THE PROBLEM` (coral uppercase)
- **Headline:** "Without governance, AI agents become Shadow AI"
- **Subtext:** 2 lines explaining the problem (unmanaged servers, leaked credentials, no audit trail)
- **Three stat cards:**
  - **91%** of AI tools in enterprises remain unmanaged — Reco.ai 2025
  - **53%** of MCP servers use insecure static credentials — Astrix Security 2025
  - **$670K** additional cost per Shadow AI breach — IBM 2025
- **Design:** Large Bebas Neue numbers in coral, small body text below, muted source attribution

### Section 3: THREE PILLARS (The Solution)

- **Section label:** `THE SOLUTION`
- **Headline:** "One platform. Three capabilities."
- **Three cards with code snippets inside each:**
  1. **MCP Servers** — Register, route, monitor, secure. YAML config snippet showing server registration.
  2. **Agent Skills** — Import, version, distribute. YAML snippet showing skill management.
  3. **Sandboxes** — Isolated execution with resource limits. YAML snippet showing sandbox config.
- **Design:** Coral icons, glass cards with card-glow hover, Geist Mono code blocks inside cards

### Section 4: DEPLOY YOUR WAY

- **Section label:** `DEPLOYMENT`
- **Headline:** "Your infrastructure. Your rules."
- **Subtext:** "Source-available under FSL. Run it anywhere. No vendor lock-in."
- **Three cards:**
  1. **Self-Hosted** — Helm chart, full control. Badge: "Available Now"
  2. **Cloud Marketplaces** — AWS/Azure/GCP, committed spend. Badge: "Coming Soon"
  3. **Red Hat Certified** — OpenShift Operator, enterprise SLAs. Badge: "Coming Soon"

### Section 5: BLOG (Insights)

- **Section label:** `INSIGHTS`
- **Headline:** "From the team"
- **Two blog post cards:**
  1. "Why AI Agents Need a Control Plane" by Pablo Marin, CTO @ KSGai.com
  2. "Open Source in the Age of AI Coding: Why We Chose Source-Available" by Pablo Marin
- **Design:** Dark glass cards, typography-only (no images), title + author + date + excerpt

### Section 6: CTA

- **Headline:** "Ready to take control of your AI agent infrastructure?"
- **Subtext:** "Stop Shadow AI before it starts. One platform for every MCP server, skill, and sandbox in your organization."
- **CTAs:** "Get Started" (solid coral) + "Talk to Us" (outline)
- **Email signup:** Inline form for marketplace launch notifications

---

## Blog Posts

### Post 1: "Why AI Agents Need a Control Plane"

**Author:** Pablo Marin, CTO @ KSGai.com
**Thesis:** Every AI agent needs MCP servers, skills, and sandboxes. Without governance, this becomes Shadow AI — the enterprise security crisis of 2025-2026.

**Structure:**

1. What Anthropic's architecture tells us about what agents need
2. The Shadow AI problem (with statistics from Gartner, IBM, Astrix Security, Reco.ai)
3. The three pillars: MCP Servers, Skills, Sandboxes
4. Why a control plane (gateway) is the answer
5. What MCP Gateway provides

**Key references:** Anthropic blog posts, Gartner 40% prediction, IBM breach cost data, Astrix Security MCP server audit, NIST AI Agent Standards Initiative, Mend.io "Shadow MCP" analysis.

### Post 2: "Open Source in the Age of AI Coding: Why We Chose Source-Available"

**Author:** Pablo Marin, CTO @ KSGai.com
**Thesis:** When AI can clone any codebase in minutes, what's the real moat? We explain why we chose FSL over open source, and what enterprises should look for.

**Structure:**

1. The state of open source in 2026 (Tailwind -80% revenue, curl bug bounty shutdown, maintainer burnout)
2. What AI coding changes about defensibility (a16z, Sequoia, NFX analysis)
3. Why code is no longer the moat (distribution, trust, certification are)
4. Our licensing decision: FSL-2.0 + Apache 2.0 SDKs
5. What enterprises get: marketplace access, support SLAs, compliance
6. The Kong/Grafana/Sentry model and why it works

**Key references:** Tailwind revenue collapse, Mitchell Hashimoto Vouch system, Sentry FSL creation, Kong/Grafana business models, a16z "Context is King," Keon Kim "Cost of Code Is Going to Zero."

---

## Components to Create/Modify

### New Components

- `src/components/marketing/architecture-hero.tsx` — New architecture diagram for hero
- `src/components/marketing/problem-section.tsx` — Shadow AI stats section
- `src/components/marketing/blog-section.tsx` — Blog post cards
- `src/app/blog/[slug]/page.tsx` — Blog post page (MDX)
- `src/content/blog/` — Blog post MDX files

### Modified Components

- `src/app/(marketing)/page.tsx` — New section composition
- `src/components/marketing/hero.tsx` — New headline, subheadline, CTAs, architecture diagram
- `src/components/marketing/three-pillars.tsx` — Updated copy, add code snippets inside cards
- `src/components/marketing/deploy-section.tsx` — Becomes "Deploy Your Way" with new cards
- `src/lib/metadata.ts` — Updated SEO metadata

### Removed Components

- `src/components/marketing/how-it-works.tsx` — Merged into three-pillars
- `src/components/marketing/architecture.tsx` — Replaced by hero architecture diagram
- `src/components/marketing/feature-grid.tsx` — Cut for focus

### Unchanged

- `src/components/layout/navbar.tsx` — Keep as-is (add Blog link)
- `src/components/layout/footer.tsx` — Keep as-is
- `src/components/ui/button.tsx` — Keep as-is
- `src/app/globals.css` — Keep design system (coral, glass, glow)
- `src/lib/fonts.ts` — Keep Bebas Neue + Inter + Geist Mono

---

## Design System (Unchanged)

- **Colors:** Coral primary (#df7f69), deep navy background, glass surfaces
- **Typography:** Bebas Neue headings, Inter body, Geist Mono code
- **Animation:** Motion (Framer Motion) — scroll-triggered fade-in, staggered children
- **Patterns:** Grid background, radial fades, card-glow hover effects

---

## What This Does NOT Include

- Blog infrastructure (MDX setup) — separate task
- Marketplace integration — future
- License key system — future
- Contact/demo form backend — future
- Pricing page — future
