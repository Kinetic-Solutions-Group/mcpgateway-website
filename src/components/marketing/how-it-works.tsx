"use client";

import { motion } from "motion/react";

interface Step {
  number: string;
  title: string;
  description: string;
  code: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Register your MCP servers",
    description:
      "Add servers from npm, PyPI, Docker Hub, remote URLs, or let AI generate one from API documentation. Six server types cover every integration pattern.",
    code: `POST /api/v1/servers
{
  "name": "github",
  "type": "npx",
  "command": "@modelcontextprotocol/server-github",
  "env_vars": { "GITHUB_TOKEN": "{{credential}}" }
}

# Response
{ "id": "srv_abc123", "status": "running", "tools": 28 }`,
  },
  {
    number: "02",
    title: "Create Agent Skills",
    description:
      "Build portable instruction packages that teach agents expert workflows. Import from the catalog, describe what you need and let AI generate one, or upload a SKILL.md manually.",
    code: `---
name: code-review-expert
description: Systematic PR code review
version: 1.0.0
allowed-tools:
  - github__get_pull_request
  - github__list_commits
  - github__create_review
---
# Code Review Workflow
1. Fetch PR diff and commit history
2. Check for security issues, logic errors
3. Submit review with inline comments`,
  },
  {
    number: "03",
    title: "Connect your agents",
    description:
      "Point any MCP client at the gateway endpoint. One URL + API Key gives your agent access to all registered servers and skills. Semantic search finds the right tools automatically.",
    code: `# Claude Desktop, Cursor, or any MCP client
{
  "mcpServers": {
    "gateway": {
      "url": "https://your-gateway.com/mcp/sse",
      "headers": {
        "Authorization": "Bearer mgw_your_api_key"
      }
    }
  }
}`,
  },
];

function StepCard({
  step,
  index,
}: {
  step: Step;
  index: number;
}): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="absolute left-6 top-12 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-primary/30 to-transparent lg:block" />
      )}

      <div className="flex gap-6">
        {/* Step number */}
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5 font-mono text-sm text-primary">
          {step.number}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {step.description}
          </p>

          {/* Code block */}
          <div className="mt-5 overflow-hidden rounded-lg border border-border/50 bg-card/30">
            <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground/80">
              <code>{step.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorks(): React.ReactNode {
  return (
    <section id="how-it-works" className="relative py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-semibold tracking-tight"
          >
            From setup to production
            <br />
            in minutes
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mt-20 space-y-12 lg:space-y-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
