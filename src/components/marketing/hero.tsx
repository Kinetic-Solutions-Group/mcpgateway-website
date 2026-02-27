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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="mx-auto w-full max-w-3xl"
    >
      {/* AI Agents box */}
      <div className="rounded-xl border border-border/50 bg-card/50 p-4 text-center">
        <p className="text-sm font-semibold text-foreground">AI Agents</p>
        <p className="mt-1 text-xs text-muted-foreground">
          LangChain&nbsp;&middot;&nbsp;CrewAI&nbsp;&middot;&nbsp;Claude&nbsp;&middot;&nbsp;OpenAI&nbsp;&middot;&nbsp;Gemini&nbsp;&middot;&nbsp;Custom
        </p>
      </div>

      {/* Connector: top box → pill */}
      <div className="mx-auto h-8 w-px bg-gradient-to-b from-border to-primary/50" />

      {/* ONE URL · ONE API KEY pill */}
      <div className="flex justify-center">
        <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
          ONE URL&nbsp;&middot;&nbsp;ONE API KEY
        </span>
      </div>

      {/* Connector: pill → gateway */}
      <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/50 to-primary/30" />

      {/* MCP Gateway box */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
        <p className="font-display text-xl uppercase text-primary">
          MCP Gateway
        </p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary/80">
            Auth
          </span>
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary/80">
            Route
          </span>
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary/80">
            Audit
          </span>
        </div>
      </div>

      {/* Connector: gateway → bottom boxes (three lines) */}
      <div className="grid grid-cols-3">
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/30 to-border" />
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/30 to-border" />
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/30 to-border" />
      </div>

      {/* Bottom boxes: MCP Servers, Agent Skills, Sandboxes */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3 text-center">
          <Server className="mx-auto mb-1.5 size-4 text-muted-foreground" />
          <p className="text-sm font-semibold text-foreground">MCP Servers</p>
        </div>
        <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3 text-center">
          <BookOpen className="mx-auto mb-1.5 size-4 text-muted-foreground" />
          <p className="text-sm font-semibold text-foreground">Agent Skills</p>
        </div>
        <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3 text-center">
          <Box className="mx-auto mb-1.5 size-4 text-muted-foreground" />
          <p className="text-sm font-semibold text-foreground">Sandboxes</p>
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
