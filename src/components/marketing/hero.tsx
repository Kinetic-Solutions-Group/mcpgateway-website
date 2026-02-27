"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, Server, BookOpen, Box } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/shared/wave-background";
import { ShaderBackground } from "@/components/shared/shader-background";

/* ------------------------------------------------------------------ */
/*  Background Switcher — toggle between 3 options for comparison      */
/*  Set HERO_BG to "grid", "waves", or "shader" to switch             */
/* ------------------------------------------------------------------ */

function GridOverlay(): React.ReactNode {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function HeroBackground(): React.ReactNode {
  return (
    <>
      {/* Layer 1: WebGL shader gradient (deepest) */}
      <ShaderBackground />
      {/* Layer 2: Grid pattern overlay */}
      <GridOverlay />
      {/* Layer 3: Animated SVG waves on top */}
      <WaveBackground />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Architecture Diagram                                               */
/* ------------------------------------------------------------------ */

function ArchitectureDiagram(): React.ReactNode {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* ── AI Agents Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass rounded-xl border border-border/50 p-4 text-center"
      >
        <p className="text-sm font-semibold text-foreground">AI Agents</p>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          {[
            "LangChain",
            "CrewAI",
            "Claude",
            "VS Code",
            "Copilot Studio",
            "Cursor",
          ].map((agent) => (
            <span
              key={agent}
              className="rounded-full bg-card/80 border border-border/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {agent}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Connector: Agents → Pill ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative mx-auto h-12 w-px bg-gradient-to-b from-border/50 to-primary/40"
        style={{ "--flow-distance": "48px" } as React.CSSProperties}
      >
        {[0, 0.7, 1.4].map((delay) => (
          <span
            key={delay}
            className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-primary animate-particle"
            style={{ "--particle-delay": `${delay}s` } as React.CSSProperties}
          />
        ))}
      </motion.div>

      {/* ── ONE URL · ONE API KEY Pill ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center"
      >
        <span className="animate-pulse-glow rounded-full border border-primary/40 bg-primary/10 px-5 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
          ONE URL&nbsp;&middot;&nbsp;ONE API KEY
        </span>
      </motion.div>

      {/* ── Connector: Pill → Gateway ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative mx-auto h-12 w-px bg-gradient-to-b from-border/50 to-primary/40"
        style={{ "--flow-distance": "48px" } as React.CSSProperties}
      >
        {[0, 0.7, 1.4].map((delay) => (
          <span
            key={delay}
            className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-primary animate-particle"
            style={{ "--particle-delay": `${delay}s` } as React.CSSProperties}
          />
        ))}
      </motion.div>

      {/* ── MCP Gateway Box ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/8 to-primary/3 p-6 text-center"
        style={{ boxShadow: "inset 0 0 40px rgba(223, 127, 105, 0.06)" }}
      >
        <p className="font-display text-2xl uppercase text-primary tracking-wide">
          MCP Gateway
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            "Auth",
            "Route",
            "Audit",
            "Rate Limit",
            "Telemetry",
            "RBAC",
            "Playground",
          ].map((cap) => (
            <span
              key={cap}
              className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary/80"
            >
              {cap}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Fan-out Connectors (SVG + particles) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative hidden md:block"
      >
        <svg
          viewBox="0 0 600 50"
          width="100%"
          height="50"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Left path */}
          <path
            d="M300,0 Q200,25 100,50"
            stroke="currentColor"
            className="text-primary/20"
            strokeWidth={1.5}
          />
          {/* Center path */}
          <path
            d="M300,0 L300,50"
            stroke="currentColor"
            className="text-primary/20"
            strokeWidth={1.5}
          />
          {/* Right path */}
          <path
            d="M300,0 Q400,25 500,50"
            stroke="currentColor"
            className="text-primary/20"
            strokeWidth={1.5}
          />
        </svg>

        {/* Particles on fan-out paths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left particles */}
          {[0, 0.7, 1.4].map((delay) => (
            <span
              key={`fan-left-${delay}`}
              className="absolute left-1/2 top-0 -translate-x-1/2 size-1.5 rounded-full bg-primary animate-particle"
              style={
                {
                  "--particle-delay": `${delay}s`,
                  "--particle-animation": "particle-flow-fan-left",
                  "--fan-x": "160px",
                  "--fan-y": "50px",
                } as React.CSSProperties
              }
            />
          ))}
          {/* Center particles */}
          {[0, 0.7, 1.4].map((delay) => (
            <span
              key={`fan-center-${delay}`}
              className="absolute left-1/2 top-0 -translate-x-1/2 size-1.5 rounded-full bg-primary animate-particle"
              style={
                {
                  "--particle-delay": `${delay}s`,
                  "--flow-distance": "50px",
                } as React.CSSProperties
              }
            />
          ))}
          {/* Right particles */}
          {[0, 0.7, 1.4].map((delay) => (
            <span
              key={`fan-right-${delay}`}
              className="absolute left-1/2 top-0 -translate-x-1/2 size-1.5 rounded-full bg-primary animate-particle"
              style={
                {
                  "--particle-delay": `${delay}s`,
                  "--particle-animation": "particle-flow-fan-right",
                  "--fan-x": "160px",
                  "--fan-y": "50px",
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </motion.div>

      {/* Mobile: simple vertical connector instead of SVG fan-out */}
      <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/30 to-border md:hidden" />

      {/* ── Bottom Pillar Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Card 1 — MCP Servers */}
        <div className="glass rounded-xl border border-border/40 p-4 text-left">
          <Server className="size-5 text-primary/70 mb-2" />
          <p className="text-sm font-semibold text-foreground">MCP Servers</p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {["GitHub", "Slack", "Jira", "Linear"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5">+12 more</p>
        </div>

        {/* Card 2 — Agent Skills */}
        <div className="glass rounded-xl border border-border/40 p-4 text-left">
          <BookOpen className="size-5 text-primary/70 mb-2" />
          <p className="text-sm font-semibold text-foreground">Agent Skills</p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {["bigquery", "pdf", "docx", "xlsx"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5">+8 more</p>
        </div>

        {/* Card 3 — Sandboxes */}
        <div className="glass rounded-xl border border-border/40 p-4 text-left">
          <Box className="size-5 text-primary/70 mb-2" />
          <p className="text-sm font-semibold text-foreground">Sandboxes</p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {["Python", "Bash", "Node.js"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5">
            Warm pool ready
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero(): React.ReactNode {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
            Source-Available&nbsp;&middot;&nbsp;API-First&nbsp;&middot;&nbsp;Self-Hosted
          </span>
        </motion.div>

        {/* Headline — Bebas Neue display font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display uppercase"
        >
          The platform for
          <br />
          <span className="text-primary glow-text">production AI agents</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Manage the MCP servers, skills, and sandboxes your AI agents need
          &mdash; with the governance enterprises trust.
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
            <Link
              href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
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

        {/* Architecture Diagram */}
        <div className="mt-16">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
