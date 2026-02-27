# Pillar Pages Design — MCP Servers, Skills, Sandboxes

**Date:** 2026-02-23
**Author:** Claude (with Pablo Marin)
**Status:** Approved

---

## Context

The homepage introduces the three pillars (MCP Servers, Skills, Sandboxes) with mini-terminal API showcases. Now we need dedicated pages for each pillar with full explanations, product screenshots (captured via Playwright from localhost:3000), and API showcases.

---

## Navbar Update

**Current:** Features | Deploy | Blog

**New:** MCP Servers | Skills | Sandboxes | Deploy | Blog

- "Features" removed, replaced by three pillar links
- Each links to `/mcp-servers`, `/skills`, `/sandboxes`
- Same links in mobile hamburger menu

---

## Shared Page Template

All three pages follow the same structure:

### 1. HERO BANNER

- Section label (coral uppercase)
- Page title (Bebas Neue h1)
- One-line description (text-lg muted)
- "Get Started" CTA button

### 2. PRODUCT SCREENSHOT (full-width)

- Playwright capture from the product UI (localhost:3000)
- Framed with subtle border, rounded corners, glow shadow
- Caption below describing what the user sees
- Responsive: fills container width, maintains aspect ratio

### 3. HOW IT WORKS

- 3-4 feature blocks, alternating layout:
  - Odd blocks: text left, visual right
  - Even blocks: visual left, text right
  - On mobile: stacks vertically (text on top, visual below)
- Each block has: heading (h3) + 2-3 sentences + mini-terminal OR screenshot
- Motion whileInView animations

### 4. API SHOWCASE

- 3-5 key API endpoints in mini-terminal style (reuse MiniTerminal component from three-pillars.tsx)
- Extract MiniTerminal + syntax helpers (K, S, N, D, M) into shared component
- Terminals arranged in a responsive grid or vertical stack

### 5. CTA FOOTER

- "Ready to get started?" headline
- Dual CTA: "Get Started" + "View on GitHub"

---

## Page: MCP Servers (`/mcp-servers`)

### Hero

- Label: "MCP SERVERS"
- Title: "Connect agents to any tool"
- Description: "Register, route, monitor, and secure every MCP server. Six server types, semantic search, and HTTP/2 connection pooling."

### Screenshot

- Capture: Product servers list page (localhost:3000 → servers section)

### How It Works (4 blocks)

**Block 1: Six Server Types**

- Text: Support for Remote (HTTP/SSE), NPX (Node.js), UVX (Python), Container (Docker/K8s), Generated (AI-created from API docs), and Bundle (curated collections). Connect to any MCP server regardless of how it's hosted.
- Visual: Screenshot of "Add Server" type selection dialog

**Block 2: Gateway Modes**

- Text: LIST mode returns all tools when you have < 20. SEARCH+EXECUTE mode uses semantic search when you have 100+ tools — 99.5% context reduction. AUTO mode switches dynamically based on tool count.
- Visual: Mini-terminal showing tools/list response in both modes

**Block 3: AI Server Generation**

- Text: Paste an API docs URL or OpenAPI spec. MCP Gateway's Deep Agent analyzes the API, generates tool definitions, and deploys a working virtual MCP server. Review and approve before it goes live.
- Visual: Screenshot of generation flow / or mini-terminal showing the generate endpoint

**Block 4: One URL, Every Tool**

- Text: Point any MCP client (Claude, Cursor, VS Code, Windsurf) at the unified gateway endpoint. One URL + one API key gives your agent access to every registered server. Uses MCP Streamable HTTP transport.
- Visual: Mini-terminal showing VS Code mcp.json config + gateway tools/call

### API Showcase (5 terminals)

1. `POST /api/v1/servers` — Create a server (request: name, type, config, url)
2. `POST /api/v1/servers/{id}/sync` — Sync tools (response: added/removed/total)
3. `POST /api/v1/tools/search` — Semantic search (request: query → response: tools with scores)
4. `POST /api/v1/servers/generate` — AI generation (request: docs_url → response: job_id, status)
5. `POST /mcp/gateway` — Gateway MCP call (JSON-RPC tools/call)

---

## Page: Skills (`/skills`)

### Hero

- Label: "AGENT SKILLS"
- Title: "Teach agents expert workflows"
- Description: "Import from catalogs, AI-generate from text, or upload manually. Portable skill packages following the agentskills.io spec."

### Screenshot

- Capture: Product skills list/catalog page

### How It Works (4 blocks)

**Block 1: Three Ways to Create**

- Text: Import skills from the Anthropic catalog or skills.sh community registry. AI-generate a skill from a natural language description. Or upload a SKILL.md file directly.
- Visual: Screenshot of skills catalog browser

**Block 2: Progressive Loading**

- Text: Level 1: metadata loads at startup (50 tokens). Level 2: full SKILL.md loads when relevant (up to 5K tokens). Level 3: additional files and scripts load on demand. This keeps agent context windows lean while having deep knowledge available.
- Visual: Diagram showing the three loading levels

**Block 3: AI Skill Generation**

- Text: Describe what you want in plain English. MCP Gateway's Deep Agent generates a complete SKILL.md with metadata, instructions, workflow steps, and tool references. Streamed via SSE so you see progress in real time.
- Visual: Mini-terminal showing the SSE generation stream

**Block 4: Install on Sandboxes**

- Text: Skills are portable ZIP packages containing SKILL.md plus optional scripts and resources. Install them directly into sandboxes where agents can reference the instructions and execute the bundled scripts.
- Visual: Mini-terminal showing skills install on sandbox

### API Showcase (4 terminals)

1. `GET /api/v1/skills/catalog/anthropics` — Browse catalog
2. `POST /api/v1/skills/import` — Import from catalog
3. `POST /api/v1/skills/generate` — AI generation (SSE stream events)
4. `GET /api/v1/skills/{id}/package` — Download .skill package

---

## Page: Sandboxes (`/sandboxes`)

### Hero

- Label: "SANDBOXES"
- Title: "Safe code execution for AI agents"
- Description: "Persistent container environments with warm pools, resource limits, and full audit trails. Hardened by default."

### Screenshot

- Capture: Product sandboxes dashboard

### How It Works (4 blocks)

**Block 1: Persistent Containers**

- Text: Each sandbox gets a dedicated volume that survives stops and restarts. Session affinity ensures the same agent session reuses the same sandbox via session keys. No work is ever lost.
- Visual: Screenshot of sandbox detail page

**Block 2: Warm Pool Architecture**

- Text: Pre-warmed containers sit ready in a pool. When an agent needs a sandbox, allocation is sub-second — no cold starts. The lifecycle manager automatically replenishes the pool and cleans up idle sandboxes.
- Visual: Diagram or screenshot showing warm pool

**Block 3: Security Hardened**

- Text: Read-only root filesystem. Non-root user. Network disabled by default. Dropped Linux capabilities. Path traversal protection. Every execution is logged with exit code, stdout, stderr, duration, and file changes.
- Visual: Security checklist visual (checkmarks with hardening features)

**Block 4: File Management**

- Text: Upload data files, execute code against them, and download results. The API tracks every file created or modified during execution. Agents can build multi-step workflows: upload CSV → analyze → download chart.
- Visual: Mini-terminal showing upload → exec → list files flow

### API Showcase (5 terminals)

1. `POST /api/v1/sandboxes` — Create sandbox (with session_key for affinity)
2. `POST /api/v1/sandboxes/{id}/exec` — Execute command (response: exit_code, stdout, files_changed)
3. `POST /api/v1/sandboxes/{id}/skills` — Install skills
4. `PUT /api/v1/sandboxes/{id}/files/{path}` — Upload file
5. `GET /api/v1/sandboxes/{id}/files` — List files in directory

---

## Shared Components to Extract

### MiniTerminal (from three-pillars.tsx → shared)

- Move `MiniTerminal`, `JsonLine`, `K`, `S`, `N`, `D`, `M` components to `src/components/shared/mini-terminal.tsx`
- Reuse across homepage three-pillars AND all three pillar pages

### FeatureBlock (new)

- Alternating text + visual layout component
- Props: heading, description, visual (React node), reversed (boolean)
- Handles responsive stacking

### ProductScreenshot (new)

- Full-width image with glow frame, border, caption
- Handles responsive sizing, lazy loading, blur placeholder

### PillarPageLayout (new)

- Shared structure: Hero → Screenshot → Features → API Showcase → CTA
- Reduces duplication across three pages

---

## Screenshots to Capture (via Playwright)

Product must be running on localhost:3000. Capture these:

| Screenshot             | URL / Navigation               | Filename                  |
| ---------------------- | ------------------------------ | ------------------------- |
| Servers list           | /servers or main servers view  | `servers-list.png`        |
| Add Server dialog      | Click "Add Server" button      | `servers-add.png`         |
| Server generation flow | /servers → generate            | `servers-generate.png`    |
| Skills catalog         | /skills or skills catalog view | `skills-catalog.png`      |
| Skill detail           | Click into a specific skill    | `skills-detail.png`       |
| Sandboxes dashboard    | /sandboxes or sandboxes view   | `sandboxes-dashboard.png` |
| Sandbox detail         | Click into a specific sandbox  | `sandboxes-detail.png`    |
| Playground             | /playground                    | `playground.png`          |

Save all to `public/screenshots/`. Use 1440px wide viewport, dark mode.

---

## Routes

All within the `(marketing)` route group (inherits navbar + footer):

- `/mcp-servers` → `src/app/(marketing)/mcp-servers/page.tsx`
- `/skills` → `src/app/(marketing)/skills/page.tsx`
- `/sandboxes` → `src/app/(marketing)/sandboxes/page.tsx`

---

## What This Does NOT Include

- Full API reference docs (future — separate /docs section)
- Interactive API playground (future)
- Pricing page (future)
- Video walkthroughs (future)
