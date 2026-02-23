# Homepage Messaging Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the mcpgateway.com homepage with new messaging: "The platform for production AI agents", Shadow AI problem section, updated three pillars with code snippets, deploy-your-way section, blog section with two posts, and final CTA.

**Architecture:** Replace 6 existing homepage sections with 6 new/updated sections. Create blog infrastructure using Next.js App Router static pages (MDX upgrade later). Two blog posts written as React components with prose styling. All components use existing design system (coral, glass, Bebas Neue, Motion animations).

**Tech Stack:** Next.js 16 App Router, Tailwind v4, Motion (Framer Motion), Lucide icons, existing design system from globals.css.

---

### Task 1: Update Hero — New headline, badge, subheadline, CTAs

**Files:**

- Modify: `src/components/marketing/hero.tsx`

**Step 1: Replace the Hero component**

Remove the entire `GatewayDemo` and `TerminalLine` components. Replace the hero content with:

- Badge: "Source-Available · API-First · Self-Hosted"
- Headline: "The platform for production AI agents" with coral glow on "production AI agents"
- Subheadline: "Manage the MCP servers, skills, and sandboxes your AI agents need — with the governance enterprises trust."
- CTAs: "Get Started" (solid coral, links to GitHub) + "View on GitHub" (outline)
- Keep `GridBackground` as-is

Remove the `<GatewayDemo />` call and the terminal section. The architecture diagram will be added in Task 2.

**Step 2: Verify**

Run: `pnpm dev`
Check: http://localhost:3000 — hero shows new headline, badge, CTAs. No terminal. No errors in console.

**Step 3: Commit**

```bash
git add src/components/marketing/hero.tsx
git commit -m "feat: update hero with new messaging — platform for production AI agents"
```

---

### Task 2: Add Architecture Diagram to Hero

**Files:**

- Modify: `src/components/marketing/hero.tsx`

**Step 1: Build the architecture diagram component**

Add an `ArchitectureDiagram` component inside `hero.tsx` that renders:

- Top row: "AI Agents" box with framework names (LangChain, CrewAI, Claude, OpenAI, Gemini, Custom)
- Connector: gradient line down with "ONE URL · ONE API KEY" pill in the middle
- Middle row: "MCP GATEWAY" box (coral border, coral bg tint) with three internal badges: Auth, Route, Audit
- Connector: three gradient lines splitting down
- Bottom row: three boxes — "MCP Servers", "Agent Skills", "Sandboxes" (matching the three pillars)

Use divs + Tailwind. The gateway box gets `border-primary/30 bg-primary/5`. Bottom boxes get `border-border/50 bg-card/50`. Animated with Motion `whileInView`.

Place it below the CTAs in the hero, replacing where `<GatewayDemo />` was.

**Step 2: Verify**

Run: `pnpm dev`
Check: Architecture diagram renders below CTAs. Responsive on mobile (stacks vertically). Coral accents on gateway box.

**Step 3: Commit**

```bash
git add src/components/marketing/hero.tsx
git commit -m "feat: add architecture diagram to hero — agents → gateway → servers/skills/sandboxes"
```

---

### Task 3: Create Problem Section (Shadow AI Stats)

**Files:**

- Create: `src/components/marketing/problem-section.tsx`

**Step 1: Build the ProblemSection component**

Create a new section component with:

- Section label: "THE PROBLEM" (coral uppercase, `text-sm font-medium uppercase tracking-wider text-primary`)
- Headline: "Without governance, AI agents become Shadow AI" (h2, Bebas Neue)
- Subtext: "Every AI agent needs tools to connect to, knowledge to follow, and a safe place to execute code. When every developer and department connects their own MCP servers with no oversight — credentials leak, costs spiral, and compliance breaks."
- Three stat cards in a grid (`grid gap-6 md:grid-cols-3`):
  1. "91%" / "of AI tools in enterprises remain unmanaged" / "Reco.ai, 2025"
  2. "53%" / "of MCP servers use insecure static credentials" / "Astrix Security, 2025"
  3. "$670K" / "additional cost per Shadow AI breach" / "IBM, 2025"
- Stat numbers: Bebas Neue font (`font-display`), coral color (`text-primary`), large size (`text-6xl` or `text-7xl`)
- Description: `text-sm text-muted-foreground`
- Source: `text-xs text-muted-foreground/50`
- Cards: glass style, no borders — just the number as anchor
- All animated with Motion `whileInView`, staggered

**Step 2: Verify**

Import and render in page.tsx temporarily to check. Run `pnpm dev`. Stats should display in a row on desktop, stacked on mobile.

**Step 3: Commit**

```bash
git add src/components/marketing/problem-section.tsx
git commit -m "feat: add Shadow AI problem section with industry stats"
```

---

### Task 4: Update Three Pillars — New copy + code snippets

**Files:**

- Modify: `src/components/marketing/three-pillars.tsx`

**Step 1: Update the ThreePillars component**

Changes:

- Section label: "THE SOLUTION" (was "Core Capabilities")
- Headline: "One platform. Three capabilities." (was "Three pillars of AI agent infrastructure")
- Update each pillar card:
  - New description text (shorter, from design doc)
  - Remove bullet points
  - Add a code snippet block inside each card (Geist Mono, dark inset `bg-[#0d1117] rounded-lg p-4`)
  - MCP Servers: YAML config showing server registration
  - Agent Skills: YAML config showing skill management
  - Sandboxes: YAML config showing sandbox settings

Update the `Pillar` interface: remove `bullets: string[]`, add `description: string` and `code: string`.

**Step 2: Verify**

Run: `pnpm dev`
Check: Three cards with code snippets inside. Snippets use monospace font on dark background within the card.

**Step 3: Commit**

```bash
git add src/components/marketing/three-pillars.tsx
git commit -m "feat: update three pillars with solution framing and code snippets"
```

---

### Task 5: Update Deploy Section → "Deploy Your Way"

**Files:**

- Modify: `src/components/marketing/deploy-section.tsx`

**Step 1: Rewrite the DeploySection component**

Replace the current 4-provider grid + email form with:

- Section label: "DEPLOYMENT"
- Headline: "Your infrastructure. Your rules."
- Subtext: "Source-available under FSL. Run it anywhere. No vendor lock-in."
- Three cards (not four):
  1. Self-Hosted: Server icon, description about Helm/K8s, badge "Available Now" (green-tinted)
  2. Cloud Marketplaces: Cloud icon, description about AWS/Azure/GCP + committed spend, badge "Coming Soon" (coral), small grayscale AWS/Azure/GCP text
  3. Red Hat Certified: Shield icon, description about OpenShift Operator + enterprise SLAs, badge "Coming Soon" (coral)

Remove the `NotifyForm` from this section (it moves to the CTA section in Task 7). Remove the `providers` array and `ProviderCard`. Use Lucide icons: `Server`, `Cloud`, `Shield`.

**Step 2: Verify**

Run: `pnpm dev`
Check: Three cards with badges. "Available Now" badge should be visually distinct (green tint). "Coming Soon" badges in coral.

**Step 3: Commit**

```bash
git add src/components/marketing/deploy-section.tsx
git commit -m "feat: redesign deploy section as Deploy Your Way with three deployment options"
```

---

### Task 6: Create Blog Section

**Files:**

- Create: `src/components/marketing/blog-section.tsx`

**Step 1: Build the BlogSection component**

Create a section with:

- Section label: "INSIGHTS" (coral uppercase)
- Headline: "From the team" (h2, Bebas Neue)
- Two blog post cards in a grid (`grid gap-6 md:grid-cols-2`):
  - Card 1: "Why AI Agents Need a Control Plane" / Pablo Marin, CTO @ KSGai.com / Feb 23, 2026 / excerpt
  - Card 2: "Open Source in the Age of AI Coding: Why We Chose Source-Available" / Pablo Marin, CTO @ KSGai.com / Feb 23, 2026 / excerpt
- Each card: glass bg, no image, title (font-semibold, linked), author + date (muted text), 2-line excerpt, "Read →" link in coral
- Cards link to `/blog/why-ai-agents-need-a-control-plane` and `/blog/open-source-in-the-age-of-ai-coding`
- Motion `whileInView` animations, staggered

**Step 2: Verify**

Run: `pnpm dev`
Check: Two cards render. Links point to /blog/... URLs (will 404 until blog pages are created).

**Step 3: Commit**

```bash
git add src/components/marketing/blog-section.tsx
git commit -m "feat: add blog insights section with two post cards"
```

---

### Task 7: Create CTA Section

**Files:**

- Create: `src/components/marketing/cta-section.tsx`

**Step 1: Build the CtaSection component**

Create the final section:

- Centered layout, coral gradient glow behind (subtle, using existing glow utility)
- Headline: "Ready to take control of your AI agent infrastructure?" (h2, Bebas Neue)
- Subtext: "Stop Shadow AI before it starts. One platform for every MCP server, skill, and sandbox in your organization."
- Two CTAs side by side: "Get Started" (solid coral, → GitHub) + "Talk to Us" (outline, → mailto or # for now)
- Email signup form below CTAs (reuse the form pattern from old deploy-section): input + "Notify Me" button
- Small text: "Get notified when cloud marketplace listings go live."
- The email form uses localStorage same as the old one (TODO: wire backend later)

**Step 2: Verify**

Run: `pnpm dev`
Check: Section renders with headline, CTAs, and email form. Form submits to localStorage.

**Step 3: Commit**

```bash
git add src/components/marketing/cta-section.tsx
git commit -m "feat: add final CTA section with email signup"
```

---

### Task 8: Wire Up Homepage — New section composition

**Files:**

- Modify: `src/app/(marketing)/page.tsx`

**Step 1: Update the page composition**

Replace the current imports and rendering order:

```tsx
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ThreePillars } from "@/components/marketing/three-pillars";
import { DeploySection } from "@/components/marketing/deploy-section";
import { BlogSection } from "@/components/marketing/blog-section";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ThreePillars />
      <DeploySection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
```

Remove imports for `HowItWorks`, `Architecture`, `FeatureGrid`.

**Step 2: Verify**

Run: `pnpm dev`
Check: Full homepage renders all 6 sections in order. Scroll through — animations work, no console errors.

**Step 3: Commit**

```bash
git add src/app/(marketing)/page.tsx
git commit -m "feat: compose new homepage — hero, problem, pillars, deploy, blog, CTA"
```

---

### Task 9: Update Navbar + Metadata

**Files:**

- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/lib/metadata.ts`

**Step 1: Update navbar links**

Replace the `navLinks` array:

```typescript
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#deploy", label: "Deploy" },
  { href: "/blog", label: "Blog" },
] as const;
```

Remove "How It Works" and "Architecture" links. Add "Blog" link pointing to `/blog`. Keep "Features" (points to three pillars section) and "Deploy" (points to deploy section).

**Step 2: Update metadata**

In `src/lib/metadata.ts`, change the title template:

- From: `"MCP Gateway — Your AI Command Center"`
- To: `"MCP Gateway — The Platform for Production AI Agents"`

Update description to: "The platform for production AI agents. Manage MCP servers, skills, and sandboxes with enterprise governance. Source-available, self-hosted, API-first."

**Step 3: Verify**

Run: `pnpm dev`
Check: Navbar shows Features, Deploy, Blog links. Blog link navigates. Page title updated in browser tab.

**Step 4: Commit**

```bash
git add src/components/layout/navbar.tsx src/lib/metadata.ts
git commit -m "feat: update navbar links and SEO metadata for new positioning"
```

---

### Task 10: Create Blog Infrastructure

**Files:**

- Create: `src/app/blog/page.tsx` (blog index)
- Create: `src/app/blog/layout.tsx` (blog layout)

**Step 1: Create blog layout**

Simple layout that wraps blog content in a centered container with max-width and padding. Reuses the marketing layout (navbar + footer are already in the (marketing) layout, but blog routes are outside it).

Actually, create blog routes inside the (marketing) group so they get navbar + footer:

- Create: `src/app/(marketing)/blog/page.tsx`
- Create: `src/app/(marketing)/blog/[slug]/page.tsx`

The blog index page (`/blog`) shows a list of all posts with title, date, author, excerpt.

The `[slug]/page.tsx` uses `generateStaticParams` to pre-render both posts. Each post is a separate component imported dynamically.

**Step 2: Create the blog index page**

A simple page listing both posts with links. Uses the same dark aesthetic. No pagination needed yet.

**Step 3: Verify**

Run: `pnpm dev`
Check: `/blog` shows list of posts. Clicking a post navigates to `/blog/[slug]`.

**Step 4: Commit**

```bash
git add src/app/(marketing)/blog/
git commit -m "feat: add blog infrastructure — index page and dynamic slug routing"
```

---

### Task 11: Write Blog Post 1 — "Why AI Agents Need a Control Plane"

**Files:**

- Create: `src/app/(marketing)/blog/[slug]/why-ai-agents-need-a-control-plane.tsx` (post content component)

**Step 1: Write the post content**

A React component that renders the full blog post as styled prose. Content based on our research:

1. **The Agent Architecture** — What Anthropic's blog posts tell us about what production AI agents need (MCP servers, skills, sandboxes). Reference the "Building Effective Agents" and "Code Execution with MCP" posts.

2. **The Shadow AI Problem** — Industry statistics:
   - 91% of AI tools unmanaged (Reco.ai)
   - 53% of MCP servers use insecure static credentials (Astrix Security)
   - 98% of orgs have unauthorized AI usage (Programs.com)
   - $670K additional breach cost (IBM)
   - 40% of orgs will face shadow AI incidents by 2030 (Gartner)
   - Mend.io coined "Shadow MCP"
   - NIST AI Agent Standards Initiative launched Feb 2026

3. **The Three Pillars** — MCP Servers, Skills, Sandboxes explained

4. **Why a Control Plane** — The gateway pattern: auth, routing, audit, observability

5. **What MCP Gateway Provides** — Brief product description

Style: `prose prose-invert` Tailwind classes for article formatting. Links to sources are real URLs from our research.

**Step 2: Wire into the slug page**

The `[slug]/page.tsx` imports and renders this component when the slug matches.

**Step 3: Verify**

Run: `pnpm dev`
Check: Navigate to `/blog/why-ai-agents-need-a-control-plane`. Full article renders with proper typography, headings, links.

**Step 4: Commit**

```bash
git add src/app/(marketing)/blog/
git commit -m "feat: add blog post — Why AI Agents Need a Control Plane"
```

---

### Task 12: Write Blog Post 2 — "Open Source in the Age of AI Coding"

**Files:**

- Create: `src/app/(marketing)/blog/[slug]/open-source-in-the-age-of-ai-coding.tsx` (post content component)

**Step 1: Write the post content**

Content based on our research:

1. **The State of Open Source in 2026** — Tailwind -80% revenue despite 30M downloads. curl bug bounty shutdown. Mitchell Hashimoto's Vouch system. PR volumes up 40%, merge rates down. "The future of open source is smaller, quieter, and much more exclusive."

2. **What AI Coding Changes** — Keon Kim "Cost of Code Is Going to Zero". a16z "Context is King" — "judgment can't be automated like code." NFX on new moats. Code replication is trivial; trust/distribution/certification are not.

3. **Why Code Is No Longer the Moat** — The Kong model ($400M+ enterprise), Grafana ($400M ARR), Sentry (FSL). Distribution, community trust, certification, managed services.

4. **Our Licensing Decision** — FSL-2.0 for core, Apache 2.0 for SDKs. Why FSL over BSL, AGPL, MIT. The dbt Labs model. 2-year conversion to Apache 2.0.

5. **What Enterprises Get** — Cloud marketplace access (AWS, Azure, GCP), support SLAs, Red Hat certification, CVE response, compliance. Why enterprises pay despite visible source code.

6. **The Real Moat** — Distribution through marketplaces, Red Hat certification, community trust, operational excellence. Not the code.

**Step 2: Wire into the slug page**

The `[slug]/page.tsx` imports and renders this component when the slug matches.

**Step 3: Verify**

Run: `pnpm dev`
Check: Navigate to `/blog/open-source-in-the-age-of-ai-coding`. Full article renders.

**Step 4: Commit**

```bash
git add src/app/(marketing)/blog/
git commit -m "feat: add blog post — Open Source in the Age of AI Coding"
```

---

### Task 13: Clean Up Removed Components + Final Build Check

**Files:**

- Delete: `src/components/marketing/how-it-works.tsx`
- Delete: `src/components/marketing/architecture.tsx`
- Delete: `src/components/marketing/feature-grid.tsx`

**Step 1: Delete unused components**

Remove the three files that are no longer imported by page.tsx.

**Step 2: Run build**

Run: `pnpm build`
Expected: Build succeeds with no errors. No unused import warnings.

**Step 3: Run lint**

Run: `pnpm lint`
Expected: No errors.

**Step 4: Visual check**

Run: `pnpm dev`
Scroll through entire homepage. Check:

- Hero: new headline, architecture diagram, CTAs
- Problem: three stat cards with coral numbers
- Three Pillars: code snippets inside cards
- Deploy Your Way: three deployment options
- Blog: two post cards linking to real pages
- CTA: headline, two CTAs, email form
- Navbar: Features, Deploy, Blog links
- Blog pages: both posts render at their URLs

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove unused components (how-it-works, architecture, feature-grid)"
```

---

## Execution Notes

- **No worktree needed** — this is a redesign of the main site, not a parallel feature
- **No tests to write** — this is a static marketing site with no test infrastructure. Visual verification via `pnpm dev` and `pnpm build`
- **Blog posts are React components** — not MDX. MDX setup is a future task. For now, posts are `.tsx` files with prose content
- **Email form** remains localStorage-based (backend integration is a separate task)
- **Total estimated tasks:** 13
- **Each task produces a commit** — incremental, reviewable progress
