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
    title: "Connect via the Gateway endpoint",
    description:
      "Point any MCP client at the unified gateway. One URL + API Key gives your agent access to all registered servers. Uses MCP Streamable HTTP transport — works with Claude, Cursor, VS Code, Windsurf.",
    code: `# VS Code (.vscode/mcp.json)
{
  "servers": {
    "mcpgateway": {
      "type": "http",
      "url": "https://your-domain.com/mcp/gateway",
      "headers": {
        "Authorization": "Bearer mgw_usr_your_api_key"
      }
    }
  }
}

# Or connect to a single server directly
POST /mcp/servers/{server_id}`,
  },
  {
    number: "02",
    title: "Browse and install Agent Skills",
    description:
      "Import skills from the catalog, AI-generate from a description, or upload a SKILL.md. Skills teach agents expert workflows — when to use tools, in what order, and edge cases to handle.",
    code: `# List available skills from the catalog
GET /api/v1/skills/catalog/skillssh

# Import a skill into your gateway
POST /api/v1/skills/import
{
  "source": "skillssh",
  "skill_name": "code-reviewer"
}

# Download as portable .skill package
GET /api/v1/skills/{skill_id}/package
# → Returns code-reviewer.skill (ZIP)`,
  },
  {
    number: "03",
    title: "Execute code in Sandboxes",
    description:
      "Spin up persistent container environments with warm pool allocation. Hardened by default — read-only rootfs, non-root user, network disabled. Install skills directly into sandboxes.",
    code: `# Create a sandbox
POST /api/v1/sandboxes
{
  "image": "mcpgateway/sandbox-python:3.12",
  "idle_timeout_seconds": 1800
}

# Execute code safely
POST /api/v1/sandboxes/{sandbox_id}/exec
{ "command": "python main.py" }

# Response
{ "exit_code": 0, "stdout": "...",
  "duration_ms": 123 }`,
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
