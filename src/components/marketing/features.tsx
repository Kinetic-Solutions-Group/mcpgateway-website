"use client";

import { motion } from "motion/react";
import { Zap, Shield, GitBranch, Blocks, Globe, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: "Auto-Create from Docs",
    description:
      "Point to any API documentation and let AI generate a fully functional MCP server. OpenAPI, REST, GraphQL — we handle it all.",
  },
  {
    icon: Blocks,
    title: "Agent Skills",
    description:
      "Build composable skills that augment your AI agents. Skills combine tools, prompts, and context into reusable capabilities.",
  },
  {
    icon: Globe,
    title: "Universal Hosting",
    description:
      "Deploy MCP servers as containers, NPX packages, or remote endpoints. Kubernetes-native orchestration at any scale.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "PII detection, secret masking, tool poisoning scanning, and granular access control. SOC 2 compliant by design.",
  },
  {
    icon: Zap,
    title: "Real-Time Streaming",
    description:
      "SSE-based streaming with live progress for agent operations. Watch your AI reason in real time.",
  },
  {
    icon: GitBranch,
    title: "Gateway Interface",
    description:
      "One unified endpoint for all your MCP servers. Semantic search across tools, automatic routing, and built-in observability.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}): React.ReactNode {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-border hover:bg-card/60"
    >
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/5 text-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="text-base font-semibold">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </motion.div>
  );
}

export function Features(): React.ReactNode {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-muted-foreground"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-semibold tracking-tight"
          >
            Everything you need to manage
            <br />
            MCP servers at scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From auto-generation to enterprise security, MCP Gateway handles the
            full lifecycle.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
