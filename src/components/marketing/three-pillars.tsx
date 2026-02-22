"use client";

import { motion } from "motion/react";
import { Server, BookOpen, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bullets: string[];
}

const pillars: Pillar[] = [
  {
    icon: Server,
    title: "MCP Servers",
    subtitle: "Connect agents to any tool",
    bullets: [
      "6 server types: Remote, NPX, UVX, Container, Generated, Bundle",
      "Gateway mode with semantic search across 100+ tools",
      "HTTP/2 connection pooling for faster concurrent requests",
      "One URL + API Key gives agents access to everything",
    ],
  },
  {
    icon: BookOpen,
    title: "Agent Skills",
    subtitle: "Teach agents expert workflows",
    bullets: [
      "Portable instruction packages following the agentskills.io spec",
      "Import from catalog, AI-generate from text, or upload manually",
      "Progressive loading: 50 tokens to 5K to full assets on demand",
      "Skills teach when to use tools, in what order, and edge cases",
    ],
  },
  {
    icon: Box,
    title: "Sandboxes",
    subtitle: "Safe code execution",
    bullets: [
      "Persistent container environments with dedicated volumes",
      "Warm pool architecture for sub-second allocation, no cold starts",
      "Hardened: read-only rootfs, non-root, network disabled by default",
      "Session affinity ensures the same agent reuses the same sandbox",
    ],
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}): React.ReactNode {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow group rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300"
    >
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="font-display text-2xl uppercase tracking-wide">
        {pillar.title}
      </h3>
      <p className="mt-1 text-base text-muted-foreground">{pillar.subtitle}</p>
      <ul className="mt-5 space-y-3">
        {pillar.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ThreePillars(): React.ReactNode {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-semibold tracking-tight"
          >
            Three pillars of
            <br />
            AI agent infrastructure
          </motion.h2>
        </div>

        {/* Pillar cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
