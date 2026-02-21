"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

function GridBackground(): React.ReactNode {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="bg-grid dark:bg-grid absolute inset-0 bg-grid-light opacity-40 dark:opacity-100" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
    </div>
  );
}

function CodeSnippet(): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative mx-auto w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
          <div className="size-3 rounded-full bg-red-500/20" />
          <div className="size-3 rounded-full bg-yellow-500/20" />
          <div className="size-3 rounded-full bg-green-500/20" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            terminal
          </span>
        </div>

        {/* Code content */}
        <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
          <code>
            <span className="text-muted-foreground">{"# "}</span>
            <span className="text-muted-foreground">
              Create an MCP server from any API docs
            </span>
            {"\n"}
            <span className="text-green-400">$</span>
            <span className="text-foreground">
              {" "}
              mcpgateway create --from-docs
            </span>{" "}
            <span className="text-blue-400">https://api.stripe.com/docs</span>
            {"\n\n"}
            <span className="text-muted-foreground">
              {"  "}Analyzing API documentation...
            </span>
            {"\n"}
            <span className="text-muted-foreground">
              {"  "}Generating MCP server with 47 tools...
            </span>
            {"\n"}
            <span className="text-green-400">{"  "}Done!</span>
            <span className="text-foreground"> Server deployed at</span>{" "}
            <span className="text-blue-400">gateway.mcpgateway.com/stripe</span>
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog/launch"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:border-border hover:text-foreground"
          >
            <span className="inline-flex size-1.5 rounded-full bg-green-500" />
            Now in Beta
            <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-semibold tracking-tight"
        >
          The enterprise platform
          <br />
          <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            for MCP servers
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Host, manage, and secure MCP servers at scale. Auto-create servers
          from any API documentation. Build Agent Skills that make your AI
          smarter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="min-w-[180px] gap-2" asChild>
            <Link href="/docs/getting-started">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="min-w-[180px]" asChild>
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </motion.div>

        {/* Code snippet */}
        <div className="mt-16">
          <CodeSnippet />
        </div>
      </div>
    </section>
  );
}
