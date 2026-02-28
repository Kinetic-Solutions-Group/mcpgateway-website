import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface NavLink {
  title: string;
  href: string;
  desc: string;
}

const gettingStarted: NavLink[] = [
  {
    title: "Quickstart",
    href: "/docs/getting-started/quickstart",
    desc: "Deploy and make your first API call",
  },
  {
    title: "Authentication",
    href: "/docs/getting-started/authentication",
    desc: "API keys and OAuth setup",
  },
];

const concepts: NavLink[] = [
  {
    title: "Architecture",
    href: "/docs/concepts/architecture",
    desc: "Three pillars: Tools + Knowledge + Computer",
  },
  {
    title: "MCP Servers",
    href: "/docs/concepts/mcp-servers",
    desc: "The tools — connect agents to any API",
  },
  {
    title: "Agent Skills",
    href: "/docs/concepts/skills",
    desc: "The knowledge — expert workflow packages",
  },
  {
    title: "Sandboxes",
    href: "/docs/concepts/sandboxes",
    desc: "The computer — isolated code execution",
  },
  {
    title: "Observability",
    href: "/docs/concepts/observability",
    desc: "Traces, metrics, and audit logs across all pillars",
  },
];

const apiGroups = [
  {
    label: "MCP Servers",
    href: "/docs/api/mcp-servers/list_servers_api_v1_servers_get",
  },
  { label: "Skills", href: "/docs/api/skills/list_skills_api_v1_skills_get" },
  {
    label: "Tools",
    href: "/docs/api/tools/tools_search_api_v1_tools_search_post",
  },
  {
    label: "Playground",
    href: "/docs/api/playground/list_available_tools_api_v1_playground_tools_get",
  },
  {
    label: "Bundles",
    href: "/docs/api/bundles/list_bundles_api_v1_bundles_get",
  },
  { label: "Health", href: "/docs/api/health/health_health_get" },
  {
    label: "Providers",
    href: "/docs/api/providers/list_providers_api_v1_settings_providers_get",
  },
  {
    label: "Auth",
    href: "/docs/api/authentication/get_current_user_api_v1_auth_me_get",
  },
];

/* ------------------------------------------------------------------ */
/*  Shared: chevron icon                                               */
/* ------------------------------------------------------------------ */

function Chevron(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="ml-2 size-4 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity group-hover/link:opacity-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function ArrowIcon(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="size-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Link Row                                                           */
/* ------------------------------------------------------------------ */

function LinkRow({ link }: { link: NavLink }): React.ReactElement {
  return (
    <Link
      href={link.href}
      className="group/link flex items-center justify-between rounded-lg px-3 py-2.5 transition-all hover:bg-primary/5"
    >
      <div className="min-w-0">
        <span className="text-sm font-medium text-fd-foreground group-hover/link:text-primary">
          {link.title}
        </span>
        <p className="text-xs text-fd-muted-foreground">{link.desc}</p>
      </div>
      <Chevron />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Docs Landing                                                       */
/* ------------------------------------------------------------------ */

export function DocsLanding(): React.ReactElement {
  return (
    <div data-docs-landing="" className="not-prose -mt-4 space-y-5">
      {/* ── Quick-action pills ── */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/docs/getting-started/quickstart"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          Get Started
          <ArrowIcon />
        </Link>
        <Link
          href="/docs/api/health/health_health_get"
          className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-fd-card/50 px-4 py-2 text-sm text-fd-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          API Explorer
        </Link>
        <Link
          href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-fd-card/50 px-4 py-2 text-sm text-fd-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </Link>
      </div>

      {/* ── Two-column: Getting Started + Core Concepts ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Getting Started */}
        <div className="card-glow glass rounded-2xl border border-border/50 p-6">
          <div className="mb-1 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="size-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </div>
            <h2 className="font-display text-lg uppercase tracking-wide text-fd-foreground">
              Getting Started
            </h2>
          </div>
          <p className="mb-4 text-sm text-fd-muted-foreground">
            Go from zero to your first API call in under 5 minutes.
          </p>
          <div className="space-y-0.5">
            {gettingStarted.map((link) => (
              <LinkRow key={link.href} link={link} />
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="card-glow glass rounded-2xl border border-border/50 p-6">
          <div className="mb-1 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="size-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                />
              </svg>
            </div>
            <h2 className="font-display text-lg uppercase tracking-wide text-fd-foreground">
              Core Concepts
            </h2>
          </div>
          <p className="mb-4 text-sm text-fd-muted-foreground">
            Agents need tools, knowledge, and a computer. Understand the three
            pillars.
          </p>
          <div className="space-y-0.5">
            {concepts.map((link) => (
              <LinkRow key={link.href} link={link} />
            ))}
          </div>
        </div>
      </div>

      {/* ── API Reference — full-width hero card ── */}
      <div className="card-glow glass rounded-2xl border border-primary/20 p-6">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h2 className="font-display text-lg uppercase tracking-wide text-fd-foreground">
                API Reference
              </h2>
            </div>
            <p className="mt-2 max-w-lg text-sm text-fd-muted-foreground">
              Interactive documentation for all 202 endpoints with live request
              testing. Auto-generated from the OpenAPI spec — always in sync
              with the product.
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 self-start rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
            <span className="size-1.5 rounded-full bg-green-400" />
            Auto-generated
          </span>
        </div>

        {/* API group tag cloud */}
        <div className="mt-5 flex flex-wrap gap-2">
          {apiGroups.map((group) => (
            <Link
              key={group.href}
              href={group.href}
              className="rounded-md border border-border/50 bg-fd-card/50 px-3 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              {group.label}
            </Link>
          ))}
          <span className="rounded-md border border-border/30 px-3 py-1.5 text-xs text-fd-muted-foreground/50">
            +24 more groups
          </span>
        </div>

        {/* CTA */}
        <div className="mt-5">
          <Link
            href="/docs/api/health/health_health_get"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            Explore API Reference
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* ── Automation pipeline ── */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border/30 bg-fd-card/30 px-5 py-3.5 font-mono text-xs text-fd-muted-foreground">
        <a
          href="/openapi.json"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-primary"
          title="View OpenAPI spec"
        >
          <span className="size-1.5 rounded-full bg-green-500" />
          <span className="text-primary underline decoration-primary/30 underline-offset-2">
            openapi.json
          </span>
        </a>
        <span className="text-fd-muted-foreground/40">→</span>
        <span>fumadocs-openapi</span>
        <span className="text-fd-muted-foreground/40">→</span>
        <span className="text-fd-foreground">202 pages</span>
        <span className="hidden text-border/50 sm:inline">|</span>
        <span className="hidden sm:inline">32 resource groups</span>
        <span className="hidden text-border/50 sm:inline">|</span>
        <span className="hidden sm:inline">Zero manual maintenance</span>
      </div>
    </div>
  );
}
