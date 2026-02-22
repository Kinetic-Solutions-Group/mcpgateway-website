"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, ChevronRight, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

function GridBackground(): React.ReactNode {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern — matches the MCP Gateway app login page */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      {/* Coral accent glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gateway Demo — split request / response terminal                  */
/* ------------------------------------------------------------------ */

function TerminalLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`whitespace-pre ${className}`}
    >
      {children}
    </motion.div>
  );
}

function GatewayDemo(): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative mx-auto w-full max-w-4xl overflow-hidden"
    >
      {/* Glow behind the terminal */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-sm" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1117] shadow-2xl">
        {/* Terminal chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#ff5f57]" />
            <div className="size-3 rounded-full bg-[#febc2e]" />
            <div className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1">
            <Zap className="size-3 text-primary" />
            <span className="text-[11px] font-medium tracking-wide text-white/40">
              MCP Gateway
            </span>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Two-panel layout */}
        <div className="grid md:grid-cols-2">
          {/* REQUEST panel */}
          <div className="border-b border-white/[0.06] p-6 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded bg-primary/15 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-primary">
                Request
              </span>
              <span className="text-xs text-white/25">POST /mcp/gateway</span>
            </div>

            <div className="space-y-0 font-mono text-sm leading-[1.8] text-white/70">
              <TerminalLine delay={0.7}>
                <span className="text-white/30">{"{"}</span>
              </TerminalLine>
              <TerminalLine delay={0.8}>
                {"  "}
                <span className="text-primary/80">&quot;method&quot;</span>
                <span className="text-white/30">{": "}</span>
                <span className="text-[#7ee787]">&quot;tools/call&quot;</span>
                <span className="text-white/30">,</span>
              </TerminalLine>
              <TerminalLine delay={0.9}>
                {"  "}
                <span className="text-primary/80">&quot;params&quot;</span>
                <span className="text-white/30">{": {"}</span>
              </TerminalLine>
              <TerminalLine delay={1.0}>
                {"    "}
                <span className="text-primary/80">&quot;name&quot;</span>
                <span className="text-white/30">{": "}</span>
                <span className="text-[#7ee787]">&quot;SEARCH_TOOLS&quot;</span>
                <span className="text-white/30">,</span>
              </TerminalLine>
              <TerminalLine delay={1.1}>
                {"    "}
                <span className="text-primary/80">&quot;arguments&quot;</span>
                <span className="text-white/30">{": {"}</span>
              </TerminalLine>
              <TerminalLine delay={1.2}>
                {"      "}
                <span className="text-primary/80">&quot;query&quot;</span>
                <span className="text-white/30">{": "}</span>
                <span className="text-[#7ee787]">
                  &quot;create GitHub PR&quot;
                </span>
              </TerminalLine>
              <TerminalLine delay={1.3}>
                <span className="text-white/30">{"    }"}</span>
              </TerminalLine>
              <TerminalLine delay={1.3}>
                <span className="text-white/30">{"  }"}</span>
              </TerminalLine>
              <TerminalLine delay={1.3}>
                <span className="text-white/30">{"}"}</span>
              </TerminalLine>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4 flex items-center gap-2 text-xs text-white/25"
            >
              <span className="inline-block size-1.5 rounded-full bg-primary/50" />
              Authorization: Bearer mgw_usr_...
            </motion.div>
          </div>

          {/* RESPONSE panel */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="rounded bg-[#28c840]/15 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-[#28c840]"
              >
                200 OK
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="text-xs text-white/25"
              >
                3 tools found
              </motion.span>
            </div>

            <div className="space-y-0 font-mono text-sm leading-[1.8]">
              {[
                {
                  name: "github__create_pull_request",
                  server: "github",
                  score: "0.97",
                  delay: 2.0,
                },
                {
                  name: "github__list_commits",
                  server: "github",
                  score: "0.89",
                  delay: 2.2,
                },
                {
                  name: "gitlab__create_merge_request",
                  server: "gitlab",
                  score: "0.84",
                  delay: 2.4,
                },
              ].map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: tool.delay }}
                  className="group flex items-start gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-white/[0.03]"
                >
                  <ChevronRight className="mt-0.5 size-3 shrink-0 text-primary/60" />
                  <div className="min-w-0">
                    <div className="text-sm text-white/80">{tool.name}</div>
                    <div className="flex items-center gap-3 text-xs text-white/30">
                      <span>
                        server:{" "}
                        <span className="text-[#79c0ff]">{tool.server}</span>
                      </span>
                      <span>
                        relevance:{" "}
                        <span className="text-primary/70">{tool.score}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-5 flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5 text-xs"
            >
              <Zap className="size-3 text-primary" />
              <span className="text-white/40">
                Searched{" "}
                <span className="text-white/60 font-medium">247 tools</span>{" "}
                across{" "}
                <span className="text-white/60 font-medium">12 servers</span> in{" "}
                <span className="text-primary/80 font-medium">23ms</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero(): React.ReactNode {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <GridBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
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
