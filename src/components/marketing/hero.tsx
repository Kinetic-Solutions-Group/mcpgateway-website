"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

function GridBackground(): React.ReactNode {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="bg-grid dark:bg-grid absolute inset-0 bg-grid-light opacity-40 dark:opacity-100" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      {/* Coral accent glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </div>
  );
}

function GatewayDemo(): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative mx-auto w-full max-w-2xl overflow-hidden"
    >
      <div className="glow overflow-hidden rounded-xl border border-border/50 bg-card/50 shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
          <div className="size-3 rounded-full bg-red-500/20" />
          <div className="size-3 rounded-full bg-yellow-500/20" />
          <div className="size-3 rounded-full bg-green-500/20" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            gateway
          </span>
        </div>

        {/* Code content */}
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-muted-foreground">
              {"# Connect your AI agent to 100+ tools via one endpoint"}
            </span>
            {"\n"}
            <span className="text-primary">$</span>
            <span className="text-foreground">{" curl -X POST "}</span>
            <span className="text-chart-3">
              https://gateway.mcpgateway.com/mcp
            </span>
            {" \\\n"}
            <span className="text-foreground">{"    -H "}</span>
            <span className="text-chart-4">
              {'"Authorization: Bearer mgw_..."'}
            </span>
            {" \\\n"}
            <span className="text-foreground">{"    -d "}</span>
            <span className="text-chart-4">{"'"}</span>
            <span className="text-chart-2">{'{"method": "tools/call",'}</span>
            {"\n"}
            <span className="text-chart-2">
              {'         "params": {"name": "SEARCH_TOOLS",'}
            </span>
            {"\n"}
            <span className="text-chart-2">
              {'          "arguments": {"query": "create GitHub PR"}}}'}
            </span>
            <span className="text-chart-4">{"'"}</span>
            {"\n\n"}
            <span className="text-muted-foreground">{"{"}</span>
            {"\n"}
            <span className="text-muted-foreground">{'  "tools": ['}</span>
            {"\n"}
            <span className="text-chart-4">
              {
                '    {"name": "github__create_pull_request", "server": "github"}'
              }
            </span>
            {",\n"}
            <span className="text-chart-4">
              {'    {"name": "github__list_commits", "server": "github"}'}
            </span>
            {",\n"}
            <span className="text-chart-4">
              {
                '    {"name": "gitlab__create_merge_request", "server": "gitlab"}'
              }
            </span>
            {"\n"}
            <span className="text-muted-foreground">{"  ]"}</span>
            {"\n"}
            <span className="text-muted-foreground">{"}"}</span>
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

export function Hero(): React.ReactNode {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <GridBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="inline-flex size-1.5 rounded-full bg-primary" />
            Open Source MCP Gateway
          </span>
        </motion.div>

        {/* Headline — Bebas Neue display font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display uppercase"
        >
          Your AI
          <br />
          <span className="text-primary glow-text">Command Center</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          The production-grade platform where AI agents connect to any tool,
          learn expert workflows, and execute code safely.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="min-w-[180px] gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="#deploy">
              Deploy Now
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[180px] gap-2"
            asChild
          >
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

        {/* Gateway demo terminal */}
        <div className="mt-16">
          <GatewayDemo />
        </div>
      </div>
    </section>
  );
}
