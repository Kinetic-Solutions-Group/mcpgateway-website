"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeatureBlock } from "@/components/shared/feature-block";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
import {
  MiniTerminal,
  JsonLine,
  K,
  S,
  N,
  D,
  M,
} from "@/components/shared/mini-terminal";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero(): React.ReactNode {
  return (
    <section className="pt-40 pb-16 px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-medium uppercase tracking-wider text-primary"
      >
        MCP SERVERS
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display uppercase"
      >
        Connect agents to any tool
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        One URL to search thousands of tools. Automatic OAuth token management.
        Six server types. Your agents get the right tool at the right time —
        without bloating the context window.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10"
      >
        <Button
          asChild
          size="lg"
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Screenshot                                                 */
/* ------------------------------------------------------------------ */

function ScreenshotSection(): React.ReactNode {
  return (
    <section className="py-16 px-6">
      <ProductScreenshot
        src="/images/servers-list.png"
        alt="MCP Gateway — Servers Dashboard"
        caption="Servers list with live status, tool counts, and connection details"
        priority
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

function HowItWorks(): React.ReactNode {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider text-primary"
        >
          HOW IT WORKS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Everything you need to manage MCP servers
        </motion.h2>

        <div className="mt-16 space-y-24">
          {/* Block 1: Six Server Types */}
          <FeatureBlock
            heading="Six Server Types"
            description="Support for Remote (HTTP/SSE), NPX (Node.js), UVX (Python), Container (Docker/K8s), Generated (AI-created from API docs), and Bundle (curated collections). Connect to any MCP server regardless of how it's hosted."
            index={0}
          >
            <ProductScreenshot
              src="/images/catalog-servers.png"
              alt="MCP Servers Catalog — curated and community servers with one-click import"
            />
          </FeatureBlock>

          {/* Block 2: Automatic Credential Management */}
          <FeatureBlock
            heading="Credentials That Never Expire"
            description="The gateway keeps OAuth tokens alive indefinitely. A background service refreshes tokens before they expire — with intelligent retry, exponential backoff, and rate-limit awareness. Your agents authenticate once and stay connected forever. No human re-authentication, no stale tokens, no surprise auth failures."
            reversed
            index={1}
          >
            <MiniTerminal
              method="BACKGROUND"
              path="token-refresh-daemon"
              footer="AES-256-GCM encrypted · per-user isolation · runs every 60s"
            >
              <JsonLine>
                <M>▸</M>{" "}
                <span className="text-white/50">
                  Checking tokens due for refresh...
                </span>
              </JsonLine>
              <JsonLine>
                <M>▸</M>{" "}
                <span className="text-white/50">
                  Found 3 tokens expiring within 5 min
                </span>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />

              <JsonLine>
                <span className="text-[#28c840]">{"✓"}</span>{" "}
                <S>{`"github"`}</S>{" "}
                <span className="text-white/40">refreshed · next in 55m</span>
              </JsonLine>
              <JsonLine>
                <span className="text-[#28c840]">{"✓"}</span>{" "}
                <S>{`"office365"`}</S>{" "}
                <span className="text-white/40">refreshed · next in 58m</span>
              </JsonLine>
              <JsonLine>
                <span className="text-[#28c840]">{"✓"}</span> <S>{`"slack"`}</S>{" "}
                <span className="text-white/40">rotated · next in 52m</span>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />

              <JsonLine>
                <span className="text-white/30">
                  All 47 connections healthy · 0 failures
                </span>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>

          {/* Block 3: Server Detail & Tool Management */}
          <FeatureBlock
            heading="Deep Server Management"
            description="Drill into any server to see its tools, OAuth connections, sync status, and credential health. Enable or disable individual tools, search across tool schemas, and sync on-demand to pick up upstream changes."
            index={2}
          >
            <ProductScreenshot
              src="/images/server-detail.png"
              alt="Server detail view — tools, OAuth connections, and sync status"
            />
          </FeatureBlock>

          {/* Block 4: Search + Execute — The Context Engineering Story */}
          <FeatureBlock
            heading="Search, Then Execute"
            description="The biggest problem in production AI: tool sprawl. Anthropic says tool accuracy degrades past 30 tools. Cursor hard-caps at 40. With 5 MCP servers averaging 30 tools each, you burn 55K+ tokens on tool definitions before the agent does any work. MCP Gateway solves this with progressive tool loading. Instead of dumping every tool into the context window, the agent gets two meta-tools: SEARCH_TOOLS and EXECUTE_TOOL. Search by intent, get back the top matches with name and schema, then execute the one you need. Thousands of tools, two context slots. Configurable top-K results, three gateway modes (LIST, SEARCH+EXECUTE, AUTO), and the threshold is a setting you control."
            reversed
            index={3}
          >
            <MiniTerminal
              method="POST"
              path="/mcp/gateway"
              footer="247 tools across 12 servers → 2 context slots"
            >
              <M>{`// Step 1: Agent searches by intent`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"method"`}</K>
                <D>: </D>
                <S>{`"tools/call"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"params"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"SEARCH_TOOLS"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"arguments"`}</K>
                <D>: {"{"} </D>
                <K>{`"query"`}</K>
                <D>: </D>
                <S>{`"send an email"`}</S>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="rounded bg-[#28c840]/15 px-2 py-0.5 text-[10px] font-bold text-[#28c840]">
                  200 OK
                </span>
                <span className="text-[10px] text-white/25">18ms</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <M>{`// Step 2: Agent picks the best match and executes`}</M>
              <JsonLine>
                <D>[</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"O365__send_email"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"score"`}</K>
                <D>: </D>
                <N>0.96</N>
                <D>,</D> <K>{`"server"`}</K>
                <D>: </D>
                <S>{`"office365"`}</S>
                <D>{" },"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"GMAIL__send_message"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"score"`}</K>
                <D>: </D>
                <N>0.89</N>
                <D>,</D> <K>{`"server"`}</K>
                <D>: </D>
                <S>{`"google"`}</S>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                <D>]</D>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>

          {/* Block 5: AI Server Generation */}
          <FeatureBlock
            heading="AI Server Generation"
            description="Paste an API docs URL or OpenAPI spec. The Deep Agent analyzes the API, generates tool definitions, and deploys a working virtual MCP server. Review and approve before it goes live."
            index={4}
          >
            <MiniTerminal method="POST" path="/api/v1/servers/generate">
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"input_type"`}</K>
                <D>: </D>
                <S>{`"docs_url"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"input_content"`}</K>
                <D>: </D>
                <S>{`"https://docs.stripe.com/api"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"server_name"`}</K>
                <D>: </D>
                <S>{`"stripe-api"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />
              <M>{`// SSE stream`}</M>

              <JsonLine>
                <K>{`data: `}</K>
                <D>{"{"} </D>
                <K>{`"phase"`}</K>
                <D>: </D>
                <S>{`"analyzing"`}</S>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                <K>{`data: `}</K>
                <D>{"{"} </D>
                <K>{`"phase"`}</K>
                <D>: </D>
                <S>{`"enriching"`}</S>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                <K>{`data: `}</K>
                <D>{"{"} </D>
                <K>{`"phase"`}</K>
                <D>: </D>
                <S>{`"complete"`}</S>
                <D>, </D>
                <K>{`"tool_count"`}</K>
                <D>: </D>
                <N>18</N>
                <D>{" }"}</D>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>

          {/* Block 6: One URL, Every Tool */}
          <FeatureBlock
            heading="One URL, Every Tool"
            description="Point any MCP client — Claude Desktop, Cursor, VS Code, Windsurf — at the unified gateway endpoint. One URL and one API key gives your agent access to every registered server."
            reversed
            index={5}
          >
            <MiniTerminal method="GET" path="mcp.json">
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"servers"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"mcpgateway"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"url"`}</K>
                <D>: </D>
                <S>{`"https://your-domain.com/mcp/gateway"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"headers"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"        "}
                <K>{`"Authorization"`}</K>
                <D>: </D>
                <S>{`"Bearer mgw_usr_..."`}</S>
              </JsonLine>
              <JsonLine>
                {"      "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Context Engineering Stats                                          */
/* ------------------------------------------------------------------ */

interface ContextStat {
  before: string;
  after: string;
  label: string;
}

const contextStats: ContextStat[] = [
  {
    before: "55K+",
    after: "~500",
    label: "tokens for tool definitions",
  },
  {
    before: "150",
    after: "2",
    label: "tools in context window",
  },
  {
    before: "2-3x",
    after: "1x",
    label: "cost per response",
  },
];

function ContextEngineeringStats(): React.ReactNode {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider text-primary"
        >
          CONTEXT ENGINEERING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          The right tool, at the right time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-3xl text-lg text-muted-foreground"
        >
          <Link
            href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Anthropic&apos;s research
          </Link>{" "}
          shows tool accuracy collapses past 30-50 tools.{" "}
          <Link
            href="https://www.speakeasy.com/blog/100x-token-reduction-dynamic-toolsets"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Speakeasy benchmarks
          </Link>{" "}
          show static tool loading becomes infeasible at 200+ tools. With
          SEARCH+EXECUTE mode, MCP Gateway replaces hundreds of tool definitions
          with two meta-tools — bringing only what the agent needs into context,
          on demand.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {contextStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border/50 bg-card/50 p-8 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="font-display text-3xl text-muted-foreground/40 line-through decoration-muted-foreground/20">
                  {stat.before}
                </span>
                <span className="text-2xl text-muted-foreground/30">
                  &rarr;
                </span>
                <span className="font-display text-5xl text-primary">
                  {stat.after}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-xs text-muted-foreground/50"
        >
          Based on Anthropic, Speakeasy, and MCPVerse benchmarks (2025-2026)
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  API Showcase                                                       */
/* ------------------------------------------------------------------ */

function ApiShowcase(): React.ReactNode {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider text-primary"
        >
          API REFERENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Complete REST API
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Every operation is an API call. Build integrations, automate
          workflows, or connect your own tools.
        </motion.p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Terminal 1: Create Server */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/servers"
              footer="6 server types supported"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"github"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"type"`}</K>
                <D>: </D>
                <S>{`"remote"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"config"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"url"`}</K>
                <D>: </D>
                <S>{`"https://api.githubcopilot.com/mcp/"`}</S>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">201 Created</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"id"`}</K>
                <D>: </D>
                <S>{`"550e8400-..."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"status"`}</K>
                <D>: </D>
                <S>{`"pending"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"mcp_endpoint_url"`}</K>
                <D>: </D>
                <S>{`"/mcp/servers/550e8400-..."`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 2: Sync Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/servers/{id}/sync"
              footer="Auto-generates vector embeddings"
            >
              <M>{`// No request body needed`}</M>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"added"`}</K>
                <D>: [</D>
                <S>{`"create_pr"`}</S>
                <D>, </D>
                <S>{`"list_issues"`}</S>
                <D>],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"removed"`}</K>
                <D>: [],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"total_tools"`}</K>
                <D>: </D>
                <N>42</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 3: Semantic Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/tools/search"
              footer="pgvector-powered semantic matching"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"query"`}</K>
                <D>: </D>
                <S>{`"create a pull request"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"limit"`}</K>
                <D>: </D>
                <N>3</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">
                  200 OK &middot; 23ms
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>[</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"create_pull_request"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"server"`}</K>
                <D>: </D>
                <S>{`"github"`}</S>
                <D>, </D>
                <K>{`"score"`}</K>
                <D>: </D>
                <N>0.97</N>
                <D>{`" },`}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"create_merge_request"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"server"`}</K>
                <D>: </D>
                <S>{`"gitlab"`}</S>
                <D>, </D>
                <K>{`"score"`}</K>
                <D>: </D>
                <N>0.91</N>
                <D>{`" }`}</D>
              </JsonLine>
              <JsonLine>
                <D>]</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 4: AI Generation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/servers/generate"
              footer="Deep Agent pipeline: parse → enrich → deploy"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"input_type"`}</K>
                <D>: </D>
                <S>{`"docs_url"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"input_content"`}</K>
                <D>: </D>
                <S>{`"https://docs.stripe.com/api"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">201 Created</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"job_id"`}</K>
                <D>: </D>
                <S>{`"7f3a2b1c-..."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"status"`}</K>
                <D>: </D>
                <S>{`"analyzing"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 5: Gateway MCP Call (full-width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <MiniTerminal
              method="POST"
              path="/mcp/gateway"
              footer="MCP JSON-RPC 2.0 over Streamable HTTP"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"jsonrpc"`}</K>
                <D>: </D>
                <S>{`"2.0"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"id"`}</K>
                <D>: </D>
                <N>1</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"method"`}</K>
                <D>: </D>
                <S>{`"tools/call"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"params"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"GITHUB__create_pull_request"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"arguments"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"title"`}</K>
                <D>: </D>
                <S>{`"Fix auth bug"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"base"`}</K>
                <D>: </D>
                <S>{`"main"`}</S>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"jsonrpc"`}</K>
                <D>: </D>
                <S>{`"2.0"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"id"`}</K>
                <D>: </D>
                <N>1</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"result"`}</K>
                <D>: {"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"content"`}</K>
                <D>: [{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"type"`}</K>
                <D>: </D>
                <S>{`"text"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"text"`}</K>
                <D>: </D>
                <S>{`"PR #42 created"`}</S>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"}]"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

function CtaSection(): React.ReactNode {
  return (
    <section className="relative py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Ready to connect your agents?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Deploy MCP Gateway and give every agent in your organization access to
          every tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link
              href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Content (exported)                                            */
/* ------------------------------------------------------------------ */

export function McpServersContent(): React.ReactNode {
  return (
    <>
      <Hero />
      <ScreenshotSection />
      <HowItWorks />
      <ContextEngineeringStats />
      <ApiShowcase />
      <CtaSection />
    </>
  );
}
