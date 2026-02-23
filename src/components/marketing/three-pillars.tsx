"use client";

import { motion } from "motion/react";
import { Server, BookOpen, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  code: string;
}

const pillars: Pillar[] = [
  {
    icon: Server,
    title: "MCP Servers",
    description:
      "Register, route, monitor, and secure every MCP server connection. One gateway URL replaces dozens of direct connections.",
    code: `servers:
  - name: github
    transport: streamable-http
    auth: oauth2
  - name: slack
    transport: streamable-http
    auth: api-key`,
  },
  {
    icon: BookOpen,
    title: "Agent Skills",
    description:
      "Import, version, and distribute portable skill packages across your organization. Progressive loading keeps context windows lean.",
    code: `skills:
  - name: code-review
    version: 2.1.0
    access: engineering
  - name: compliance-check
    version: 1.0.0
    access: all-teams`,
  },
  {
    icon: Box,
    title: "Sandboxes",
    description:
      "Isolated execution environments with resource limits, warm pools, and full audit trails. Agents execute code safely.",
    code: `sandbox:
  runtime: python:3.12
  memory: 512Mi
  timeout: 30s
  network: restricted`,
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
      <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
      <div className="mt-4 overflow-hidden rounded-lg bg-[#0d1117] p-4">
        <pre className="font-mono text-xs leading-relaxed text-white/70">
          <code>{pillar.code}</code>
        </pre>
      </div>
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
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            One platform.
            <br />
            Three capabilities.
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
