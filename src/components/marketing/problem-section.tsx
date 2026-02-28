"use client";

import { motion } from "motion/react";

interface Stat {
  number: string;
  description: string;
  source: string;
}

const stats: Stat[] = [
  {
    number: "91%",
    description: "of AI tools in enterprises remain unmanaged",
    source: "Reco.ai, 2025",
  },
  {
    number: "53%",
    description: "of MCP servers use insecure static credentials",
    source: "Astrix Security, 2025",
  },
  {
    number: "$670K",
    description: "additional cost per Shadow AI breach",
    source: "IBM, 2025",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: Stat;
  index: number;
}): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      <p className="font-display text-7xl text-primary">{stat.number}</p>
      <p className="mt-3 text-sm text-muted-foreground">{stat.description}</p>
      <p className="mt-2 text-xs text-muted-foreground/50">{stat.source}</p>
    </motion.div>
  );
}

export function ProblemSection(): React.ReactNode {
  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            The Problem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            Without governance, AI agents
            <br />
            become Shadow AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground"
          >
            Every AI agent needs tools to connect to, knowledge to follow, and a
            safe place to execute code. When every developer and department
            spins up their own MCP servers, skills, and sandboxes with no
            oversight — credentials leak, costs spiral, and compliance breaks.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard key={stat.number} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
