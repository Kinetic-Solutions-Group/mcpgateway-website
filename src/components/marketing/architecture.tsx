"use client";

import { motion } from "motion/react";
import { Zap, Search, Database, HardDrive, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const serverTypes = [
  "Remote",
  "NPX",
  "UVX",
  "Container",
  "Generated",
  "Bundle",
] as const;

interface Callout {
  icon: LucideIcon;
  title: string;
  description: string;
}

const callouts: Callout[] = [
  {
    icon: Zap,
    title: "HTTP/2 Connection Pooling",
    description:
      "Multiplexed streams over shared connections. Significantly faster concurrent requests vs one-connection-per-request.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "pgvector embeddings find the right tools from hundreds. Massive context reduction at scale — agents only see what they need.",
  },
  {
    icon: Database,
    title: "Session Persistence",
    description:
      "PostgreSQL-backed sessions preserve multi-turn context. Agents pick up exactly where they left off.",
  },
  {
    icon: HardDrive,
    title: "Caching Layer",
    description:
      "Redis with graceful degradation. Falls back to direct DB queries if Redis is unavailable — zero downtime.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "OpenTelemetry tracing, Prometheus metrics, and pre-built Grafana dashboards. See every request, every tool call.",
  },
];

function ArchitectureDiagram(): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl"
    >
      <div className="rounded-2xl border border-border/50 bg-card/30 p-6 sm:p-8">
        {/* AI Agents row */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-5 py-3">
            <span className="text-sm font-medium text-foreground">
              AI Agents
            </span>
            <span className="text-xs text-muted-foreground">
              Claude, GPT, Gemini, Custom
            </span>
          </div>
        </div>

        {/* Arrow down */}
        <div className="my-4 flex flex-col items-center gap-1">
          <div className="h-6 w-px bg-gradient-to-b from-border to-primary/50" />
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
            ONE URL + API Key
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-primary/50 to-border" />
        </div>

        {/* Gateway box */}
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
          <div className="text-center">
            <span className="font-display text-xl uppercase tracking-wide text-primary">
              MCP Gateway
            </span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              "Session Manager",
              "Connection Pool",
              "Semantic Search",
              "Cache",
            ].map((label) => (
              <span
                key={label}
                className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary/80"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div className="my-4 flex justify-center">
          <div className="h-8 w-px bg-gradient-to-b from-primary/30 to-border" />
        </div>

        {/* Server types row */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {serverTypes.map((type) => (
            <div
              key={type}
              className="rounded-lg border border-border/50 bg-card/50 px-2 py-2 text-center text-xs font-medium text-muted-foreground"
            >
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CalloutCard({
  callout,
  index,
}: {
  callout: Callout;
  index: number;
}): React.ReactNode {
  const Icon = callout.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-glow rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300"
    >
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-4" />
      </div>
      <h4 className="text-sm font-semibold">{callout.title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {callout.description}
      </p>
    </motion.div>
  );
}

export function Architecture(): React.ReactNode {
  return (
    <section id="architecture" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            One gateway,
            <br />
            every tool
          </motion.h2>
        </div>

        {/* Diagram */}
        <div className="mt-16">
          <ArchitectureDiagram />
        </div>

        {/* Technical callouts */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {callouts.map((callout, i) => (
            <CalloutCard key={callout.title} callout={callout} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
