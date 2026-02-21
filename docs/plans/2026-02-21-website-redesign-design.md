# MCPGateway.com Website Redesign

**Date:** 2026-02-21
**Status:** Approved

## Goal

Redesign the marketing website to match the MCP Gateway app's visual identity, accurately communicate the product's three core capabilities (MCP Servers, Agent Skills, Sandboxes), and drive users toward cloud marketplace deployment.

## Visual Identity

Match the app's brand exactly:

| Property           | Value                                                           |
| ------------------ | --------------------------------------------------------------- |
| Primary color      | Coral `#DF7F69`                                                 |
| Background (light) | Off-white `#F6F5F2`                                             |
| Background (dark)  | Deep navy `oklch(0.18 0.025 265)`                               |
| Display font       | Bebas Neue (uppercase headings)                                 |
| Body font          | Inter                                                           |
| Accent colors      | Teal `#4ECDC4`, Blue `#45B7D1`, Green `#96CEB4`, Plum `#DDA0DD` |
| Effects            | Subtle grid overlay, coral glow on hover, glassmorphic cards    |
| Theme              | Dark-mode-first via `next-themes` + class strategy              |

## Page Structure (Single Page)

### 1. Navbar

- Sticky, transparent-to-solid on scroll
- MCP Gateway logo (from app assets: `/logo-light.png`, `/logo-light-transparent.png`)
- Nav links: Features, How It Works, Architecture, Deploy
- Dark mode toggle
- GitHub stars badge + "Deploy" CTA button (coral)

### 2. Hero

- Full viewport height
- Bebas Neue headline: "YOUR AI COMMAND CENTER" (coral accent on "COMMAND CENTER")
- Subhead: "The production-grade platform where AI agents connect to any tool, learn expert workflows, and execute code safely."
- Two CTAs: "Deploy Now" (coral, scrolls to deploy section) + "View on GitHub" (outline)
- Animated terminal showing a real gateway interaction (semantic tool search)
- Grid pattern background + coral glow (matching app login page effects)

### 3. Three Pillars

Three large cards, each representing a core capability:

**MCP Servers** — "Connect agents to any tool"

- 6 server types: Remote, NPX, UVX, Container, Generated, Bundle
- Gateway mode with semantic search (pgvector)
- Connection pooling (HTTP/2, 3-5x faster)
- One URL + API Key for all tools

**Agent Skills** — "Teach agents expert workflows"

- Portable instruction packages (agentskills.io spec)
- Import from catalog, AI-generate, or manual upload
- Progressive loading (50 tokens → 5K → full assets)
- SKILL.md format with YAML frontmatter

**Sandboxes** — "Safe code execution"

- Persistent container environments with volumes
- Warm pool for sub-second allocation
- Security hardening (read-only rootfs, non-root, dropped capabilities, network disabled)
- Session affinity (same agent reuses same sandbox)

Each card: coral-tinted icon, heading, 3-4 bullet points, `card-glow` hover effect.

### 4. How It Works

Three-step numbered flow with code snippets:

- **Step 01: Register your MCP servers** — Show adding a server via API or UI (6 server types)
- **Step 02: Create Agent Skills** — Show a SKILL.md snippet with YAML frontmatter
- **Step 03: Connect your agents** — Show the unified gateway endpoint config (`/mcp/gateway`)

### 5. Architecture Diagram

Visual diagram showing the data flow:

```
AI Agents (Claude, GPT, Gemini, Custom)
            ↓ ONE URL + API Key
      ┌─ MCP GATEWAY ─┐
      │ Session Manager │
      │ Connection Pool │
      │ Semantic Search │
      └────────────────┘
            ↓
  REMOTE | NPX | UVX | CONTAINER | GENERATED | BUNDLE
```

Technical callouts:

- HTTP/2 connection pooling (3-5x faster concurrent requests)
- pgvector semantic search (99.5% context reduction at scale)
- Redis caching with graceful degradation
- OpenTelemetry + Prometheus observability
- Session persistence in PostgreSQL

### 6. Feature Grid

8 feature cards in responsive grid (2-col mobile, 3-col desktop):

1. **BYOLLM** — Anthropic, OpenAI, Azure, Google, AWS Bedrock, Ollama, vLLM
2. **Multi-Tenancy** — Org-wide servers with per-user credentials, RBAC
3. **AI Generation** — Generate MCP servers from API docs, skills from descriptions
4. **Credential Management** — AES-256-GCM encryption, auto-discovery of requirements
5. **Gateway Interface** — LIST / SEARCH+EXECUTE / AUTO modes based on tool count
6. **Playground** — Interactive testing with LangGraph Deep Agents, SSE streaming
7. **Observability** — OpenTelemetry tracing, Prometheus metrics, Grafana dashboards
8. **Customer Portal** — Team interface for skills, sandboxes, playground sessions

### 7. Deploy Section

Headline: "Deploy on Your Cloud"

Four cloud provider cards:

- **Azure Marketplace** — Azure logo, "Coming Soon" badge, "Notify Me" button, "One-click on AKS"
- **AWS Marketplace** — AWS logo, "Coming Soon" badge, "Notify Me" button, "EKS Add-on"
- **GCP Marketplace** — GCP logo, "Coming Soon" badge, "Notify Me" button, "Deploy on GKE"
- **Red Hat OpenShift** — OpenShift logo, "Coming Soon" badge, "Notify Me" button, "Certified Operator"

Pricing hint: "Starting at $99/mo" per the distribution strategy tiers (Starter $99, Team $299, Enterprise $799).

Below cards: email input + "Notify me when available" button for early access signups.

### 8. Footer

- MCP Gateway logo
- Links: GitHub, Documentation, Contact
- Copyright

## What Changes vs Current

| Current                                     | New                                                        |
| ------------------------------------------- | ---------------------------------------------------------- |
| Generic grayscale Vercel theme              | App's coral brand (`#DF7F69`, Bebas Neue, `#F6F5F2`)       |
| Vague "enterprise platform for MCP servers" | "AI Command Center" with three clear pillars               |
| 6 generic feature cards                     | Three deep pillars + 8 specific feature cards              |
| CLI-focused "How It Works"                  | Real app workflow (register, create skills, connect)       |
| "Get Started" / "Talk to Sales" CTAs        | Cloud marketplace deploy cards with "Coming Soon" + notify |
| No architecture info                        | Visual architecture diagram with technical callouts        |
| No mention of sandboxes, skills, BYOLLM     | Full product coverage                                      |

## Technical Decisions

- Single page, no routing changes needed (still `src/app/(marketing)/page.tsx`)
- Reuse existing component structure (`src/components/marketing/`)
- Add new components: `three-pillars.tsx`, `architecture.tsx`, `deploy-section.tsx`, `feature-grid.tsx`
- Update existing: `hero.tsx`, `navbar.tsx`, `footer.tsx`
- Update `globals.css` to match app's color palette and add Bebas Neue font
- Keep Motion (Framer Motion) for animations
- Keep shadcn/ui components
