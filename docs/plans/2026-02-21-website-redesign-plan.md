# Website Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign mcpgateway.com to match the MCP Gateway app's coral brand identity and restructure content around three core pillars (MCP Servers, Agent Skills, Sandboxes) with cloud marketplace CTAs.

**Architecture:** Single-page marketing site. Update the theme system (CSS variables, fonts) to match the app's coral palette, then rebuild each section component. Keep the existing Next.js App Router structure (`src/app/(marketing)/page.tsx` rendering marketing components).

**Tech Stack:** Next.js 16, Tailwind CSS v4, shadcn/ui, Motion (Framer Motion), next-themes, Bebas Neue + Inter fonts, lucide-react icons.

---

## Task 1: Update Theme — Fonts and Color Palette

**Files:**

- Modify: `src/lib/fonts.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Step 1: Add Bebas Neue font to `src/lib/fonts.ts`**

```typescript
import { Geist, Geist_Mono, Bebas_Neue, Inter } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

**Step 2: Wire fonts into `src/app/layout.tsx`**

Update the body `className` to include `bebasNeue.variable` and `inter.variable`. Change font-sans to use Inter as the base font.

```tsx
import { geistSans, geistMono, bebasNeue, inter } from "@/lib/fonts";

// In the body tag:
className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} font-sans antialiased`}
```

**Step 3: Update `src/app/globals.css` — add font-display variable, replace color palette**

In the `@theme inline` block, add:

```css
--font-display: var(--font-display);
```

Replace the `:root` (light mode) color variables to match the app:

```css
:root {
  --radius: 0.625rem;
  --background: #f6f5f2;
  --foreground: #2a2c39;
  --card: #ffffff;
  --card-foreground: #2a2c39;
  --popover: #ffffff;
  --popover-foreground: #2a2c39;
  --primary: #df7f69;
  --primary-foreground: #ffffff;
  --secondary: #f6f5f2;
  --secondary-foreground: #2a2c39;
  --muted: #f6f5f2;
  --muted-foreground: #aaaaaa;
  --accent: #f3e5e1;
  --accent-foreground: #2a2c39;
  --destructive: oklch(0.577 0.245 27.325);
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #df7f69;
  --chart-1: #df7f69;
  --chart-2: #4ecdc4;
  --chart-3: #45b7d1;
  --chart-4: #96ceb4;
  --chart-5: #dda0dd;
  /* sidebar */
  --sidebar: #f6f5f2;
  --sidebar-foreground: #2a2c39;
  --sidebar-primary: #df7f69;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f3e5e1;
  --sidebar-accent-foreground: #2a2c39;
  --sidebar-border: #e5e5e5;
  --sidebar-ring: #df7f69;
}
```

Replace the `.dark` color variables to match the app's dark mode:

```css
.dark {
  --background: oklch(0.18 0.025 265);
  --foreground: oklch(0.95 0.01 90);
  --card: oklch(0.22 0.025 265);
  --card-foreground: oklch(0.95 0.01 90);
  --popover: oklch(0.22 0.025 265);
  --popover-foreground: oklch(0.95 0.01 90);
  --primary: oklch(0.72 0.15 40);
  --primary-foreground: oklch(0.18 0.025 265);
  --secondary: oklch(0.28 0.02 265);
  --secondary-foreground: oklch(0.95 0.01 90);
  --muted: oklch(0.28 0.02 265);
  --muted-foreground: oklch(0.65 0.02 90);
  --accent: oklch(0.32 0.04 40);
  --accent-foreground: oklch(0.95 0.01 90);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.72 0.15 40);
  --chart-1: #df7f69;
  --chart-2: #4ecdc4;
  --chart-3: #45b7d1;
  --chart-4: #96ceb4;
  --chart-5: #dda0dd;
  /* sidebar */
  --sidebar: oklch(0.22 0.025 265);
  --sidebar-foreground: oklch(0.95 0.01 90);
  --sidebar-primary: oklch(0.72 0.15 40);
  --sidebar-primary-foreground: oklch(0.95 0.01 90);
  --sidebar-accent: oklch(0.28 0.02 265);
  --sidebar-accent-foreground: oklch(0.95 0.01 90);
  --sidebar-border: oklch(1 0 0 / 12%);
  --sidebar-ring: oklch(0.72 0.15 40);
}
```

Update the `.glow` utility to use coral instead of blue:

```css
.glow {
  box-shadow: 0 0 80px -20px rgba(223, 127, 105, 0.3);
}

.glow-text {
  text-shadow: 0 0 80px rgba(223, 127, 105, 0.5);
}
```

Add a brand gradient utility and a card-glow hover utility:

```css
.bg-brand-gradient {
  background: linear-gradient(135deg, #df7f69 0%, #c4604a 100%);
}

.card-glow:hover {
  box-shadow: 0 4px 20px -4px rgba(223, 127, 105, 0.15);
  border-color: rgba(223, 127, 105, 0.3);
}
```

**Step 4: Verify the build**

Run: `pnpm build`
Expected: Build succeeds, no errors.

**Step 5: Commit**

```bash
git add src/lib/fonts.ts src/app/layout.tsx src/app/globals.css
git commit -m "feat: update theme to match app brand (coral palette, Bebas Neue + Inter)"
```

---

## Task 2: Update Navbar

**Files:**

- Modify: `src/components/layout/navbar.tsx`

**Step 1: Update navbar content**

Update `navLinks` to:

```typescript
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#architecture", label: "Architecture" },
  { href: "#deploy", label: "Deploy" },
] as const;
```

Update the logo text to use the display font (Bebas Neue uppercase):

```tsx
<span className="font-display text-lg uppercase tracking-wide">
  MCP Gateway
</span>
```

Update the desktop actions:

- Keep the ThemeToggle
- Change the GitHub button to show a GitHub icon (import `Github` from lucide-react)
- Change the CTA button from "Get Started" to "Deploy" with coral primary style, linking to `#deploy`

```tsx
<div className="hidden items-center gap-3 md:flex">
  <ThemeToggle />
  <Button variant="ghost" size="sm" asChild>
    <Link
      href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="mr-1.5 size-4" />
      GitHub
    </Link>
  </Button>
  <Button
    size="sm"
    className="bg-primary text-primary-foreground hover:bg-primary/90"
    asChild
  >
    <Link href="#deploy">Deploy</Link>
  </Button>
</div>
```

Update mobile CTA similarly.

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/layout/navbar.tsx
git commit -m "feat: update navbar with brand font, architecture link, deploy CTA"
```

---

## Task 3: Redesign Hero Section

**Files:**

- Modify: `src/components/marketing/hero.tsx`

**Step 1: Rewrite the hero**

Key changes:

- Headline in Bebas Neue: "YOUR AI" on line 1, "COMMAND CENTER" on line 2 in coral
- Replace the blue glow with a coral glow
- Update the subheadline to describe all three pillars
- Replace CTAs: "Deploy Now" (coral, scrolls to `#deploy`) + "View on GitHub" (outline)
- Update the terminal code snippet to show a real gateway interaction — an agent using semantic search to discover tools, then executing one

The terminal should show:

```
# Connect your AI agent to 100+ tools via one endpoint
$ curl -X POST https://gateway.mcpgateway.com/mcp \
    -H "Authorization: Bearer mgw_..." \
    -d '{"method": "tools/call", "params": {"name": "SEARCH_TOOLS", "arguments": {"query": "create GitHub PR"}}}'

{
  "tools": [
    {"name": "github__create_pull_request", "server": "github"},
    {"name": "github__list_commits", "server": "github"},
    {"name": "gitlab__create_merge_request", "server": "gitlab"}
  ]
}
```

The GridBackground should use coral glow instead of blue:

```tsx
<div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
```

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/marketing/hero.tsx
git commit -m "feat: redesign hero with brand identity and gateway demo"
```

---

## Task 4: Create Three Pillars Section

**Files:**

- Create: `src/components/marketing/three-pillars.tsx`

**Step 1: Build the three-pillars component**

Three large cards in a row (stacked on mobile). Each card has:

- Coral-tinted icon (from lucide-react: `Server` for MCP Servers, `BookOpen` for Agent Skills, `Container`/`Box` for Sandboxes)
- Title in font-display (Bebas Neue, uppercase)
- Subtitle (one line)
- 4 bullet points with descriptions
- Hover: `card-glow` effect

Use `motion` for scroll-triggered entrance animations (same pattern as existing features.tsx).

```tsx
"use client";

import { motion } from "motion/react";
import { Server, BookOpen, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bullets: string[];
}

const pillars: Pillar[] = [
  {
    icon: Server,
    title: "MCP Servers",
    subtitle: "Connect agents to any tool",
    bullets: [
      "6 server types: Remote, NPX, UVX, Container, Generated, Bundle",
      "Gateway mode with semantic search across 100+ tools",
      "HTTP/2 connection pooling — 3-5x faster concurrent requests",
      "One URL + API Key gives agents access to everything",
    ],
  },
  {
    icon: BookOpen,
    title: "Agent Skills",
    subtitle: "Teach agents expert workflows",
    bullets: [
      "Portable instruction packages following the agentskills.io spec",
      "Import from catalog, AI-generate from text, or upload manually",
      "Progressive loading: 50 tokens → 5K → full assets on demand",
      "Skills teach when to use tools, in what order, and edge cases",
    ],
  },
  {
    icon: Box,
    title: "Sandboxes",
    subtitle: "Safe code execution",
    bullets: [
      "Persistent container environments with dedicated volumes",
      "Warm pool architecture — sub-second allocation, no cold starts",
      "Hardened: read-only rootfs, non-root, network disabled by default",
      "Session affinity ensures the same agent reuses the same sandbox",
    ],
  },
];
```

Each card renders as:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="card-glow group rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300"
>
  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
    <Icon className="size-6" />
  </div>
  <h3 className="font-display text-2xl uppercase tracking-wide">
    {pillar.title}
  </h3>
  <p className="mt-1 text-base text-muted-foreground">{pillar.subtitle}</p>
  <ul className="mt-5 space-y-3">
    {pillar.bullets.map((bullet) => (
      <li
        key={bullet}
        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
      >
        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
        {bullet}
      </li>
    ))}
  </ul>
</motion.div>
```

Section wrapper:

```tsx
<section id="features" className="relative py-32">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-2xl text-center">
      <motion.p className="text-sm font-medium uppercase tracking-wider text-primary">
        Core Capabilities
      </motion.p>
      <motion.h2 className="mt-4 font-semibold tracking-tight">
        Three pillars of
        <br />
        AI agent infrastructure
      </motion.h2>
    </div>
    <div className="mt-16 grid gap-6 lg:grid-cols-3">
      {pillars.map((pillar, i) => (
        <PillarCard key={pillar.title} pillar={pillar} index={i} />
      ))}
    </div>
  </div>
</section>
```

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds (component exists but isn't wired to page yet — will be wired in Task 9).

**Step 3: Commit**

```bash
git add src/components/marketing/three-pillars.tsx
git commit -m "feat: add three pillars section (servers, skills, sandboxes)"
```

---

## Task 5: Rewrite How It Works Section

**Files:**

- Modify: `src/components/marketing/how-it-works.tsx`

**Step 1: Update the step content**

Replace the three steps with content that reflects the actual app workflow:

Step 01: "Register your MCP servers"

- Description: "Add servers from npm, PyPI, Docker Hub, remote URLs, or let AI generate one from API documentation. Six server types cover every integration pattern."
- Code: Show a `POST /api/v1/servers` JSON payload registering a GitHub MCP server

Step 02: "Create Agent Skills"

- Description: "Build portable instruction packages that teach agents expert workflows. Import from the catalog, describe what you need and let AI generate one, or upload a SKILL.md manually."
- Code: Show a SKILL.md example with YAML frontmatter (name, description, allowed-tools) and a brief workflow section

Step 03: "Connect your agents"

- Description: "Point any MCP client at the gateway endpoint. One URL + API Key gives your agent access to all registered servers and skills. Semantic search finds the right tools automatically."
- Code: Show the MCP client config JSON connecting to `https://your-gateway.com/mcp/sse`

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/marketing/how-it-works.tsx
git commit -m "feat: update how-it-works with real app workflow"
```

---

## Task 6: Create Architecture Diagram Section

**Files:**

- Create: `src/components/marketing/architecture.tsx`

**Step 1: Build the architecture section**

A visual component-based diagram (not an image) showing the data flow. Use styled divs to represent:

Top row: "AI Agents" box (Claude, GPT-4, Gemini, Custom) with icons
Arrow down labeled "ONE URL + API Key"
Middle: "MCP GATEWAY" box with internal labels (Session Manager, Connection Pool, Semantic Search, Cache)
Arrow down
Bottom row: Six boxes for server types (REMOTE, NPX, UVX, CONTAINER, GENERATED, BUNDLE)

Below the diagram, 5 technical callout cards in a grid:

1. "HTTP/2 Connection Pooling" — 3-5x faster concurrent requests vs one-connection-per-request
2. "Semantic Search" — pgvector embeddings, 99.5% context reduction at 100+ tools
3. "Session Persistence" — PostgreSQL-backed sessions, multi-turn context preserved
4. "Caching" — Redis with graceful degradation to direct DB queries
5. "Observability" — OpenTelemetry tracing, Prometheus metrics, Grafana dashboards

Use coral accent colors for the gateway box, muted for everything else. The diagram should be built with Tailwind classes (not SVG), responsive, and dark-mode-aware.

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/marketing/architecture.tsx
git commit -m "feat: add architecture diagram section with tech callouts"
```

---

## Task 7: Create Feature Grid Section

**Files:**

- Create: `src/components/marketing/feature-grid.tsx`

**Step 1: Build the feature grid**

8 cards in a responsive grid (1-col mobile, 2-col tablet, 4-col desktop). Each card is compact: icon + title + one-liner description.

```typescript
const features = [
  {
    icon: Cpu,
    title: "Bring Your Own LLM",
    description:
      "Anthropic, OpenAI, Azure, Google, AWS Bedrock, Ollama, or vLLM — configure any provider.",
  },
  {
    icon: Users,
    title: "Multi-Tenancy",
    description:
      "Org-wide servers with per-user credentials. Role-based access control built in.",
  },
  {
    icon: Sparkles,
    title: "AI Generation",
    description:
      "Generate MCP servers from API docs and skills from text descriptions using Deep Agents.",
  },
  {
    icon: Lock,
    title: "Credential Management",
    description:
      "AES-256-GCM encrypted storage with auto-discovery of what each server needs.",
  },
  {
    icon: Search,
    title: "Gateway Interface",
    description:
      "LIST, SEARCH+EXECUTE, or AUTO mode — scales from 5 tools to 500 without context overload.",
  },
  {
    icon: MessageSquare,
    title: "Playground",
    description:
      "Interactive testing with LangGraph Deep Agents. Stream tokens and tool calls in real time.",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description:
      "OpenTelemetry tracing, Prometheus metrics, and pre-built Grafana dashboards.",
  },
  {
    icon: LayoutDashboard,
    title: "Customer Portal",
    description:
      "Team interface for browsing skills, managing sandboxes, and running playground sessions.",
  },
];
```

Section wrapper with "Platform Features" pre-title in coral, heading "Everything else you need".

Cards use the same hover effect as pillars but smaller (p-5, smaller icon).

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/marketing/feature-grid.tsx
git commit -m "feat: add 8-card feature grid (BYOLLM, multi-tenancy, etc.)"
```

---

## Task 8: Create Deploy Section (Cloud Marketplace CTAs)

**Files:**

- Create: `src/components/marketing/deploy-section.tsx`

**Step 1: Build the deploy section**

Replace the old `cta-section.tsx`. This section has:

Heading: "Deploy on Your Cloud" (font-display, uppercase)
Subhead: "One-click deployment on the major cloud marketplaces. Starting at $99/mo."

Four cloud provider cards in a 2x2 grid (4-col on desktop):

- Each card has: cloud logo (SVG inline or from a simple component), provider name, deployment method subtitle ("One-click on AKS", "EKS Add-on", "Deploy on GKE", "Certified Operator"), a coral "Coming Soon" badge, and a "Notify Me" button (outline).
- Cards are slightly transparent with border, matching the glassmorphic style.

For the cloud logos, use simple SVG paths or text representations initially (Azure, AWS, GCP, OpenShift). We can replace with proper SVGs later.

Below the cards: a centered email input + "Notify me when available" coral button. This is a simple form that captures email for future marketplace launch notifications. For now, just a client-side form — no backend. The submit can show a "Thanks! We'll notify you." message.

```tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

interface CloudProvider {
  name: string;
  subtitle: string;
  method: string;
}

const providers: CloudProvider[] = [
  { name: "Azure", subtitle: "Marketplace", method: "One-click on AKS" },
  { name: "AWS", subtitle: "Marketplace", method: "EKS Add-on" },
  { name: "Google Cloud", subtitle: "Marketplace", method: "Deploy on GKE" },
  { name: "Red Hat", subtitle: "OpenShift", method: "Certified Operator" },
];
```

Each provider card:

```tsx
<div className="card-glow rounded-2xl border border-border/50 bg-card/50 p-6 text-center transition-all duration-300">
  <div className="text-2xl font-semibold">{provider.name}</div>
  <div className="text-sm text-muted-foreground">{provider.subtitle}</div>
  <div className="mt-3 text-xs text-muted-foreground">{provider.method}</div>
  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
    Coming Soon
  </div>
</div>
```

Email form:

```tsx
const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);

// On submit, just show thank you (no backend yet)
<form
  onSubmit={(e) => {
    e.preventDefault();
    setSubmitted(true);
  }}
  className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
>
  {submitted ? (
    <p className="text-sm text-primary">
      Thanks! We'll notify you when we launch.
    </p>
  ) : (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="h-10 w-full max-w-sm rounded-lg border border-border/50 bg-card/50 px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-72"
      />
      <Button
        type="submit"
        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Bell className="size-4" />
        Notify Me
      </Button>
    </>
  )}
</form>;
```

**Step 2: Verify the build**

Run: `pnpm build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/marketing/deploy-section.tsx
git commit -m "feat: add cloud marketplace deploy section with coming-soon CTAs"
```

---

## Task 9: Wire Everything Together + Update Footer

**Files:**

- Modify: `src/app/(marketing)/page.tsx`
- Modify: `src/components/layout/footer.tsx`
- Delete (or repurpose): `src/components/marketing/features.tsx` (replaced by three-pillars)
- Delete: `src/components/marketing/cta-section.tsx` (replaced by deploy-section)

**Step 1: Update `src/app/(marketing)/page.tsx`**

```tsx
import { Hero } from "@/components/marketing/hero";
import { ThreePillars } from "@/components/marketing/three-pillars";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Architecture } from "@/components/marketing/architecture";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { DeploySection } from "@/components/marketing/deploy-section";

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Hero />
      <ThreePillars />
      <HowItWorks />
      <Architecture />
      <FeatureGrid />
      <DeploySection />
    </>
  );
}
```

**Step 2: Delete old components**

Delete `src/components/marketing/features.tsx` and `src/components/marketing/cta-section.tsx`.

**Step 3: Update footer**

- Update the tagline from "Enterprise MCP server management with AI-powered Agent Skills" to "Production-grade infrastructure for AI agents. MCP Servers, Agent Skills, and Sandboxes."
- Update the logo text to use `font-display` (Bebas Neue uppercase)
- Remove placeholder links to pages that don't exist yet (Pricing, Changelog, API Reference, Blog, Examples, About, Privacy, Terms)
- Keep: Features (#features), How It Works (#how-it-works), Architecture (#architecture), Deploy (#deploy), GitHub, Contact

Simplified footer sections:

```typescript
const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Architecture", href: "#architecture" },
      { label: "Deploy", href: "#deploy" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kinetic-Solutions-Group/mcpgateway",
      },
      {
        label: "Documentation",
        href: "https://github.com/Kinetic-Solutions-Group/mcpgateway#readme",
      },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Contact", href: "mailto:hello@mcpgateway.com" }],
  },
] as const;
```

**Step 4: Update metadata in `src/lib/metadata.ts`**

Update the description:

```typescript
description: "Production-grade infrastructure for AI agents. Connect to any tool with MCP Servers, teach expert workflows with Agent Skills, and execute code safely in Sandboxes.",
```

Update keywords to include "Sandboxes", "Cloud Marketplace", "Kubernetes".

**Step 5: Verify the build**

Run: `pnpm build`
Expected: Build succeeds with all sections rendering.

**Step 6: Commit**

```bash
git add src/app/(marketing)/page.tsx src/components/layout/footer.tsx src/lib/metadata.ts
git rm src/components/marketing/features.tsx src/components/marketing/cta-section.tsx
git commit -m "feat: wire all sections together, update footer and metadata"
```

---

## Task 10: Visual QA and Polish

**Files:**

- Possibly modify any of the above files based on visual review

**Step 1: Start dev server and visually inspect**

Run: `pnpm dev`

Open browser at http://localhost:3000. Check:

- [ ] Coral brand color is visible in hero, CTAs, accents
- [ ] Bebas Neue renders for hero headline and pillar titles
- [ ] Dark mode toggle works and dark palette matches the app
- [ ] Three pillars are readable, well-spaced, responsive
- [ ] How It Works code snippets are legible
- [ ] Architecture diagram is responsive and clear
- [ ] Feature grid cards are aligned
- [ ] Deploy section shows all 4 cloud providers with "Coming Soon"
- [ ] Email form shows "Thanks!" on submit
- [ ] Mobile menu works, all sections stack properly
- [ ] No broken links or console errors
- [ ] Grid background and coral glow effects are visible

**Step 2: Fix any issues found**

Address spacing, alignment, font sizing, or color contrast issues.

**Step 3: Final build check**

Run: `pnpm build`
Expected: Build succeeds with zero errors.

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: visual QA polish — spacing, alignment, responsive fixes"
```

---

## Summary

| Task | What                       | Files                             | Est.   |
| ---- | -------------------------- | --------------------------------- | ------ |
| 1    | Theme (fonts + colors)     | fonts.ts, layout.tsx, globals.css | 5 min  |
| 2    | Navbar update              | navbar.tsx                        | 3 min  |
| 3    | Hero redesign              | hero.tsx                          | 5 min  |
| 4    | Three Pillars (new)        | three-pillars.tsx                 | 5 min  |
| 5    | How It Works rewrite       | how-it-works.tsx                  | 5 min  |
| 6    | Architecture diagram (new) | architecture.tsx                  | 8 min  |
| 7    | Feature Grid (new)         | feature-grid.tsx                  | 5 min  |
| 8    | Deploy Section (new)       | deploy-section.tsx                | 5 min  |
| 9    | Wire together + footer     | page.tsx, footer.tsx, metadata.ts | 5 min  |
| 10   | Visual QA + polish         | Various                           | 10 min |
