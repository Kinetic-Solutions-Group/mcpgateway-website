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
    title: "Point to your docs",
    description:
      "Provide any API documentation URL — OpenAPI specs, REST endpoints, or even raw HTML docs. Our AI analyzes the structure and capabilities.",
    code: `mcpgateway create \\
  --from-docs https://api.example.com/docs \\
  --name "my-api-server"`,
  },
  {
    number: "02",
    title: "AI generates the server",
    description:
      "Deep Agents analyze, generate, and validate the MCP server. Each tool is tested, typed, and ready for production.",
    code: `Analyzing documentation...     Done
Generating 23 MCP tools...     Done
Running validation suite...    Done
Building container image...    Done`,
  },
  {
    number: "03",
    title: "Deploy and connect",
    description:
      "Your MCP server is live. Connect any AI agent through the unified gateway endpoint with built-in auth, logging, and rate limiting.",
    code: `# Connect from any MCP client
{
  "mcpServers": {
    "my-api": {
      "url": "https://gw.mcpgateway.com/my-api-server/sse",
      "headers": { "Authorization": "Bearer sk-..." }
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
        <div className="absolute left-6 top-12 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-border to-transparent lg:block" />
      )}

      <div className="flex gap-6">
        {/* Step number */}
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card/50 font-mono text-sm text-muted-foreground">
          {step.number}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="mt-2 text-muted-foreground">{step.description}</p>

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
            className="text-sm font-medium uppercase tracking-wider text-muted-foreground"
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
            From docs to production
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
