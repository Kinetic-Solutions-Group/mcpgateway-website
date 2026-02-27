# Pillar Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create three dedicated pillar pages (/mcp-servers, /skills, /sandboxes) with product screenshots, feature explanations, and API showcases. Update navbar to link to them.

**Architecture:** Extract shared MiniTerminal component from three-pillars.tsx. Create reusable FeatureBlock and ProductScreenshot components. Capture product screenshots via Playwright from localhost:3000. Build three pages using shared layout pattern. Each page: Hero → Screenshot → Features (alternating blocks) → API Showcase → CTA.

**Tech Stack:** Next.js 16 App Router, Tailwind v4, Motion, Lucide icons, Playwright for screenshots, Next.js Image for optimized screenshots.

---

### Task 1: Extract MiniTerminal into shared component

**Files:**

- Create: `src/components/shared/mini-terminal.tsx`
- Modify: `src/components/marketing/three-pillars.tsx`

**Step 1: Create the shared mini-terminal module**

Move `MiniTerminal`, `JsonLine`, `K`, `S`, `N`, `D`, `M`, and the `Zap` import from `three-pillars.tsx` into a new file `src/components/shared/mini-terminal.tsx`. Export all of them.

The file should NOT have `"use client"` — it only contains pure components with no hooks. Parent pages will be client components and that's fine.

Actually, `Zap` is from lucide-react which is fine in server components. But the parents using Motion need "use client". Keep mini-terminal as a plain module — no directive needed since it's imported by client components.

**Step 2: Update three-pillars.tsx**

Replace the local `MiniTerminal`, `JsonLine`, `K`, `S`, `N`, `D`, `M` definitions with:

```tsx
import {
  MiniTerminal,
  JsonLine,
  K,
  S,
  N,
  D,
  M,
} from "@/components/shared/mini-terminal";
```

Remove the `Zap` import from three-pillars.tsx (it's now in mini-terminal).

**Step 3: Verify**

Run: `pnpm build`
Expected: Builds successfully. Homepage three pillars still render correctly.

**Step 4: Commit**

```bash
git add src/components/shared/mini-terminal.tsx src/components/marketing/three-pillars.tsx
git commit -m "refactor: extract MiniTerminal into shared component"
```

---

### Task 2: Create shared layout components (FeatureBlock, ProductScreenshot)

**Files:**

- Create: `src/components/shared/feature-block.tsx`
- Create: `src/components/shared/product-screenshot.tsx`

**Step 1: Create FeatureBlock**

A `"use client"` component with alternating text + visual layout.

Props:

```tsx
interface FeatureBlockProps {
  heading: string;
  description: string;
  children: React.ReactNode; // The visual (terminal, screenshot, diagram)
  reversed?: boolean; // Flip text/visual order
  index?: number; // For stagger animation delay
}
```

Layout:

- Desktop (`md:`): Two columns — text on one side (60% width), visual on other (40% width). `reversed` flips the order via `md:flex-row-reverse`.
- Mobile: Stacks vertically, text on top, visual below.
- Text side: h3 (text-2xl font-semibold) + p (text-muted-foreground leading-relaxed)
- Animated with Motion `whileInView`

```tsx
"use client";

import { motion } from "motion/react";

export function FeatureBlock({
  heading,
  description,
  children,
  reversed = false,
  index = 0,
}: FeatureBlockProps): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="md:w-1/2">{children}</div>
    </motion.div>
  );
}
```

**Step 2: Create ProductScreenshot**

A component that displays a product screenshot with a glow frame.

Props:

```tsx
interface ProductScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}
```

Uses Next.js `Image` with `width={1440}` `height={900}` and `className` for styling:

- Outer wrapper: `relative mx-auto max-w-5xl` with glow effect behind
- Image: `rounded-xl border border-border/50 shadow-2xl` with `object-cover`
- Caption: `text-center text-sm text-muted-foreground/50 mt-4`
- Glow: absolute div behind the image with `bg-primary/5 blur-[60px] rounded-xl`

```tsx
import Image from "next/image";

export function ProductScreenshot({
  src,
  alt,
  caption,
}: ProductScreenshotProps): React.ReactNode {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-[60px]" />
      <div className="relative overflow-hidden rounded-xl border border-border/50">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="w-full"
          priority
        />
      </div>
      {caption ? (
        <p className="mt-4 text-center text-sm text-muted-foreground/50">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
```

**Step 3: Verify**

Run: `pnpm build`
Expected: Builds (components not used yet, but should compile).

**Step 4: Commit**

```bash
git add src/components/shared/feature-block.tsx src/components/shared/product-screenshot.tsx
git commit -m "feat: add FeatureBlock and ProductScreenshot shared components"
```

---

### Task 3: Capture product screenshots via Playwright

**Prerequisites:** The MCP Gateway product must be running at localhost:3000. The user should have it running before this task.

**Files:**

- Create: `public/screenshots/` directory
- Create screenshots: `servers-list.png`, `servers-add.png`, `skills-catalog.png`, `skills-detail.png`, `sandboxes-dashboard.png`, `sandbox-detail.png`, `playground.png`

**Step 1: Create the screenshots directory**

```bash
mkdir -p public/screenshots
```

**Step 2: Use Playwright to capture screenshots**

Navigate to each product page and capture. Use viewport 1440x900, dark mode. The product dashboard routes are under `(dashboard)` route group, so URLs are: `/servers`, `/skills`, `/sandboxes`, `/playground`.

The product requires authentication. Check if there's a login-free way, or if the user needs to be logged in. If login is required, ask the user to log in via Playwright first.

Capture these screenshots using `mcp__playwright__browser_take_screenshot`:

1. Navigate to `http://localhost:3000/servers` → screenshot as `public/screenshots/servers-list.png`
2. On the servers page, click "Add Server" or "+" button → screenshot the dialog as `public/screenshots/servers-add.png`
3. Navigate to `http://localhost:3000/skills` → screenshot as `public/screenshots/skills-catalog.png`
4. Click into a specific skill → screenshot as `public/screenshots/skills-detail.png`
5. Navigate to `http://localhost:3000/sandboxes` → screenshot as `public/screenshots/sandboxes-dashboard.png`
6. Click into a specific sandbox → screenshot as `public/screenshots/sandbox-detail.png`
7. Navigate to `http://localhost:3000/playground` → screenshot as `public/screenshots/playground.png`

Use `fullPage: false` and `type: "png"` for each screenshot.

If the product is not running or requires login, ask the user for guidance.

**Step 3: Verify screenshots exist**

```bash
ls -la public/screenshots/
```

Expected: 7 PNG files, each a few hundred KB.

**Step 4: Commit**

```bash
git add public/screenshots/
git commit -m "feat: capture product UI screenshots via Playwright"
```

---

### Task 4: Update Navbar

**Files:**

- Modify: `src/components/layout/navbar.tsx`

**Step 1: Update the navLinks array**

Change from:

```tsx
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#deploy", label: "Deploy" },
  { href: "/blog", label: "Blog" },
] as const;
```

To:

```tsx
const navLinks = [
  { href: "/mcp-servers", label: "MCP Servers" },
  { href: "/skills", label: "Skills" },
  { href: "/sandboxes", label: "Sandboxes" },
  { href: "#deploy", label: "Deploy" },
  { href: "/blog", label: "Blog" },
] as const;
```

**Step 2: Verify**

Run: `pnpm dev -p 3001`
Check: Navbar shows 5 links. MCP Servers, Skills, Sandboxes link to their pages (will 404 until pages are created).

**Step 3: Commit**

```bash
git add src/components/layout/navbar.tsx
git commit -m "feat: add MCP Servers, Skills, Sandboxes links to navbar"
```

---

### Task 5: Build MCP Servers page (`/mcp-servers`)

**Files:**

- Create: `src/app/(marketing)/mcp-servers/page.tsx`

**Step 1: Build the page**

This is a `"use client"` page component (needs Motion for animations).

Structure:

1. **Hero section** (`pt-40 pb-16`): label "MCP SERVERS", title "Connect agents to any tool", description, "Get Started" CTA
2. **Product screenshot** (`py-16`): `<ProductScreenshot src="/screenshots/servers-list.png" alt="MCP Gateway — Servers Dashboard" caption="Manage all your MCP server connections from one dashboard" />`
3. **How It Works** (`py-32`): Section label + headline + 4 FeatureBlocks with alternating layout
4. **API Showcase** (`py-32`): Section label + headline + grid of 5 MiniTerminals
5. **CTA** (`py-32`): Reuse or inline the same CTA pattern from the homepage

**How It Works blocks (4):**

Block 1 (text left, screenshot right): **Six Server Types**

- "Support for Remote (HTTP/SSE), NPX (Node.js), UVX (Python), Container (Docker/K8s), Generated (AI-created from API docs), and Bundle (curated collections). Connect to any MCP server regardless of how it's hosted."
- Visual: `<ProductScreenshot src="/screenshots/servers-add.png" ... />`

Block 2 (reversed — screenshot left, text right): **Gateway Modes**

- "LIST mode returns all tools when you have fewer than 20. SEARCH+EXECUTE mode uses semantic search when you have 100+ tools — 99.5% context reduction. AUTO mode switches dynamically based on your tool count."
- Visual: MiniTerminal showing tools/list response

Block 3 (text left, visual right): **AI Server Generation**

- "Paste an API docs URL or OpenAPI spec. The Deep Agent analyzes the API, generates tool definitions, and deploys a working virtual MCP server. Review and approve before it goes live."
- Visual: MiniTerminal showing POST /api/v1/servers/generate

Block 4 (reversed): **One URL, Every Tool**

- "Point any MCP client — Claude Desktop, Cursor, VS Code, Windsurf — at the unified gateway endpoint. One URL and one API key gives your agent access to every registered server."
- Visual: MiniTerminal showing VS Code mcp.json config snippet

**API Showcase (5 terminals in a grid `grid gap-6 lg:grid-cols-2` with the 5th spanning full width):**

1. Create Server: `POST /api/v1/servers` — request with name, type, config → response with id, status, mcp_endpoint_url
2. Sync Tools: `POST /api/v1/servers/{id}/sync` — response with added, removed, total_tools
3. Semantic Search: `POST /api/v1/tools/search` — request with query → response with tools + scores
4. AI Generation: `POST /api/v1/servers/generate` — request with input_type, input_content → response with job_id, status
5. Gateway MCP Call: `POST /mcp/gateway` — JSON-RPC tools/call request → response

Add metadata export:

```tsx
// Can't use metadata export in "use client" component
// Instead, use generateMetadata in a separate server layout or use a wrapper
```

Actually, since we need both Motion animations AND metadata, create a thin server wrapper:

- `src/app/(marketing)/mcp-servers/page.tsx` — server component with metadata export, imports and renders the client component
- `src/app/(marketing)/mcp-servers/mcp-servers-content.tsx` — `"use client"` with all the actual content

**Step 2: Verify**

Run: `pnpm dev -p 3001`
Navigate to `http://localhost:3001/mcp-servers`
Check: Hero, screenshot, 4 feature blocks (alternating), 5 API terminals, CTA footer.

**Step 3: Commit**

```bash
git add src/app/(marketing)/mcp-servers/
git commit -m "feat: add MCP Servers pillar page with API showcase"
```

---

### Task 6: Build Skills page (`/skills`)

**Files:**

- Create: `src/app/(marketing)/skills/page.tsx`
- Create: `src/app/(marketing)/skills/skills-content.tsx`

**Step 1: Build the page**

Same pattern as MCP Servers: server component wrapper + client content component.

**Hero:** Label "AGENT SKILLS", title "Teach agents expert workflows", description about importing/generating/uploading skills.

**Screenshot:** `skills-catalog.png`

**How It Works blocks (4):**

Block 1: **Three Ways to Create**

- Import from Anthropic catalog or skills.sh. AI-generate from natural language. Upload a SKILL.md directly.
- Visual: `<ProductScreenshot src="/screenshots/skills-detail.png" ... />`

Block 2 (reversed): **Progressive Loading**

- Level 1: metadata (50 tokens). Level 2: full SKILL.md (5K tokens). Level 3: additional files on demand. Keeps agent context windows lean.
- Visual: A styled diagram showing three levels with token counts (build with divs, not an image)

Block 3: **AI Skill Generation**

- Describe what you want. Deep Agent generates a complete SKILL.md. Streamed via SSE.
- Visual: MiniTerminal showing SSE stream (reuse the pattern from homepage)

Block 4 (reversed): **Install on Sandboxes**

- Portable ZIP packages. Install directly into sandboxes. Agents reference instructions and execute bundled scripts.
- Visual: MiniTerminal showing POST /api/v1/sandboxes/{id}/skills

**API Showcase (4 terminals in a `grid gap-6 lg:grid-cols-2`):**

1. Browse Catalog: `GET /api/v1/skills/catalog/anthropics`
2. Import: `POST /api/v1/skills/import`
3. AI Generate: `POST /api/v1/skills/generate` (SSE events)
4. Download Package: `GET /api/v1/skills/{id}/package`

**Step 2: Verify**

Navigate to `http://localhost:3001/skills`. Check all sections render.

**Step 3: Commit**

```bash
git add src/app/(marketing)/skills/
git commit -m "feat: add Skills pillar page with API showcase"
```

---

### Task 7: Build Sandboxes page (`/sandboxes`)

**Files:**

- Create: `src/app/(marketing)/sandboxes/page.tsx`
- Create: `src/app/(marketing)/sandboxes/sandboxes-content.tsx`

**Step 1: Build the page**

Same pattern.

**Hero:** Label "SANDBOXES", title "Safe code execution for AI agents", description about persistent containers, warm pools, security.

**Screenshot:** `sandboxes-dashboard.png`

**How It Works blocks (4):**

Block 1: **Persistent Containers**

- Dedicated volumes survive restarts. Session affinity via session keys. No work lost.
- Visual: `<ProductScreenshot src="/screenshots/sandbox-detail.png" ... />`

Block 2 (reversed): **Warm Pool Architecture**

- Pre-warmed containers, sub-second allocation, no cold starts. Lifecycle manager auto-replenishes and cleans up.
- Visual: A styled diagram showing the warm pool flow (build with divs)

Block 3: **Security Hardened**

- Read-only rootfs. Non-root user. Network disabled. Dropped capabilities. Path traversal protection. Full execution logging.
- Visual: A styled security checklist (green checkmarks with feature names, built with divs)

Block 4 (reversed): **File Management**

- Upload data, execute code, download results. API tracks every file change. Multi-step workflows.
- Visual: MiniTerminal showing exec → files_changed response

**API Showcase (5 terminals in `grid gap-6 lg:grid-cols-2`, 5th spanning full):**

1. Create Sandbox: `POST /api/v1/sandboxes` with session_key
2. Execute: `POST /api/v1/sandboxes/{id}/exec`
3. Install Skills: `POST /api/v1/sandboxes/{id}/skills`
4. Upload File: `PUT /api/v1/sandboxes/{id}/files/{path}`
5. List Files: `GET /api/v1/sandboxes/{id}/files`

**Step 2: Verify**

Navigate to `http://localhost:3001/sandboxes`. Check all sections.

**Step 3: Commit**

```bash
git add src/app/(marketing)/sandboxes/
git commit -m "feat: add Sandboxes pillar page with API showcase"
```

---

### Task 8: Update sitemap + final build check

**Files:**

- Modify: `src/app/sitemap.ts`

**Step 1: Add new routes to sitemap**

Read the current sitemap.ts and add entries for `/mcp-servers`, `/skills`, `/sandboxes`.

**Step 2: Run full build**

```bash
pnpm build
```

Expected: All routes compile. New pages are statically generated.

**Step 3: Run lint**

```bash
pnpm lint
```

Expected: No errors.

**Step 4: Visual verification**

Run `pnpm dev -p 3001` and check:

- Navbar: 5 links (MCP Servers, Skills, Sandboxes, Deploy, Blog)
- `/mcp-servers`: Full page with hero, screenshot, 4 feature blocks, 5 API terminals, CTA
- `/skills`: Full page with hero, screenshot, 4 feature blocks, 4 API terminals, CTA
- `/sandboxes`: Full page with hero, screenshot, 4 feature blocks, 5 API terminals, CTA
- Homepage three pillars still work (MiniTerminal extracted correctly)
- Mobile responsive: all pages stack properly

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add pillar pages to sitemap, final build verification"
```

---

## Execution Notes

- **Screenshots depend on the product running at localhost:3000.** If it's not running, ask the user to start it before Task 3. Alternatively, use placeholder images and swap later.
- **Each page is ~300-500 lines of TSX.** The API terminals are the most verbose part — each terminal is ~20-40 lines of JSX.
- **MiniTerminal is the workhorse component.** Extracting it first (Task 1) unblocks everything.
- **Server/client component split:** Metadata exports require server components, Motion requires client components. Use thin server wrappers.
- **Total estimated tasks:** 8
- **Each task produces a commit.**
