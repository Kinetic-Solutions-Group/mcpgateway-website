"use client";

import { motion } from "motion/react";
import {
  Cpu,
  Users,
  Sparkles,
  Lock,
  Search,
  MessageSquare,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Cpu,
    title: "Bring Your Own LLM",
    description:
      "Anthropic, OpenAI, Azure, Google, AWS Bedrock, Ollama, or vLLM — configure any provider.",
  },
  {
    icon: Users,
    title: "Multi-Tenancy",
    description:
      "Org-wide servers with per-user credentials. Role-based access control built in.",
  },
  {
    icon: Sparkles,
    title: "AI Generation",
    description:
      "Generate MCP servers from API docs and skills from text descriptions using Deep Agents.",
  },
  {
    icon: Lock,
    title: "Credential Management",
    description:
      "AES-256-GCM encrypted storage with auto-discovery of what each server needs.",
  },
  {
    icon: Search,
    title: "Gateway Interface",
    description:
      "LIST, SEARCH+EXECUTE, or AUTO mode — scales from 5 tools to 500 without context overload.",
  },
  {
    icon: MessageSquare,
    title: "Playground",
    description:
      "Interactive testing with LangGraph Deep Agents. Stream tokens and tool calls in real time.",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description:
      "OpenTelemetry tracing, Prometheus metrics, and pre-built Grafana dashboards.",
  },
  {
    icon: LayoutDashboard,
    title: "Customer Portal",
    description:
      "Team interface for browsing skills, managing sandboxes, and running playground sessions.",
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-glow rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300"
    >
      <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-4" />
      </div>
      <h3 className="text-sm font-semibold">{feature.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </motion.div>
  );
}

export function FeatureGrid(): React.ReactNode {
  return (
    <section className="relative py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Platform Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            Everything else
            <br />
            you need
          </motion.h2>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
