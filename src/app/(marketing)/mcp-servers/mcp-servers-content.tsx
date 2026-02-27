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
        Register, route, monitor, and secure every MCP server. Six server types,
        semantic search, and HTTP/2 connection pooling.
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

          {/* Block 2: Gateway Modes */}
          <FeatureBlock
            heading="Three Gateway Modes"
            description="LIST mode returns all tools when you have fewer than 20. SEARCH+EXECUTE mode uses semantic search when you have 100+ tools — 99.5% context reduction. AUTO mode switches dynamically based on your tool count."
            reversed
            index={1}
          >
            <MiniTerminal method="POST" path="/mcp/gateway">
              <M>{`// JSON-RPC: tools/list`}</M>
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
                <S>{`"tools/list"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />
              <M>{`// Response — SEARCH+EXECUTE mode`}</M>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"tools"`}</K>
                <D>: [</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"SEARCH_TOOLS"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"description"`}</K>
                <D>: </D>
                <S>{`"Semantic search across all tools"`}</S>
                <D>{" }"}</D>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"EXECUTE_TOOL"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"description"`}</K>
                <D>: </D>
                <S>{`"Execute any tool by name"`}</S>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>]</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>

          {/* Block 3: AI Server Generation */}
          <FeatureBlock
            heading="AI Server Generation"
            description="Paste an API docs URL or OpenAPI spec. The Deep Agent analyzes the API, generates tool definitions, and deploys a working virtual MCP server. Review and approve before it goes live."
            index={2}
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

          {/* Block 4: One URL, Every Tool */}
          <FeatureBlock
            heading="One URL, Every Tool"
            description="Point any MCP client — Claude Desktop, Cursor, VS Code, Windsurf — at the unified gateway endpoint. One URL and one API key gives your agent access to every registered server."
            reversed
            index={3}
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
      <ApiShowcase />
      <CtaSection />
    </>
  );
}
