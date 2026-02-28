"use client";

import { motion } from "motion/react";
import { Server, BookOpen, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  MiniTerminal,
  JsonLine,
  K,
  S,
  N,
  D,
  M,
} from "@/components/shared/mini-terminal";

/* ------------------------------------------------------------------ */
/*  Pillar data                                                        */
/* ------------------------------------------------------------------ */

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Server,
    title: "MCP Servers",
    description:
      "The tools. Connect agents to GitHub, Slack, databases, and any API through one gateway URL. OAuth tokens stay alive automatically — no human re-authentication needed.",
  },
  {
    icon: BookOpen,
    title: "Agent Skills",
    description:
      "The knowledge. Portable instruction packages that teach agents expert workflows — when to use each tool, how to chain them, and what to watch for.",
  },
  {
    icon: Box,
    title: "Sandboxes",
    description:
      "The computer. Isolated containers where agents execute code, run skill scripts, and produce artifacts. Pre-warmed for instant allocation.",
  },
];

/* ------------------------------------------------------------------ */
/*  MCP Servers terminal — Semantic Tool Search                        */
/* ------------------------------------------------------------------ */

function ServersTerminal(): React.ReactNode {
  return (
    <MiniTerminal
      method="POST"
      path="/api/v1/tools/search"
      footer="Searched 247 tools across 12 servers in 23ms"
    >
      {/* Request */}
      <JsonLine>
        <D>{"{"}</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;query&quot;</K>
        <D>:</D> <S>&quot;create a pull request&quot;</S>
      </JsonLine>
      <JsonLine>
        <D>{"}"}</D>
      </JsonLine>

      {/* Divider */}
      <div className="my-3 flex items-center gap-2">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="rounded bg-[#28c840]/15 px-2 py-0.5 text-[10px] font-bold text-[#28c840]">
          200 OK
        </span>
        <span className="text-[10px] text-white/25">23ms</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* Response */}
      <JsonLine>
        <D>[</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <D>{"{"}</D> <K>&quot;name&quot;</K>
        <D>:</D> <S>&quot;github_create_pull_request&quot;</S>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"    "}
        <K>&quot;server&quot;</K>
        <D>:</D> <S>&quot;github&quot;</S>
        <D>,</D> <K>&quot;score&quot;</K>
        <D>:</D> <N>0.97</N> <D>{"}"}</D>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <D>{"{"}</D> <K>&quot;name&quot;</K>
        <D>:</D> <S>&quot;gitlab_create_merge_request&quot;</S>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"    "}
        <K>&quot;server&quot;</K>
        <D>:</D> <S>&quot;gitlab&quot;</S>
        <D>,</D> <K>&quot;score&quot;</K>
        <D>:</D> <N>0.84</N> <D>{"}"}</D>
      </JsonLine>
      <JsonLine>
        <D>]</D>
      </JsonLine>
    </MiniTerminal>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills terminal — AI Generation                                    */
/* ------------------------------------------------------------------ */

function SkillsTerminal(): React.ReactNode {
  return (
    <MiniTerminal
      method="POST"
      path="/api/v1/skills/generate"
      footer="AI-generated from natural language intent"
    >
      {/* Request */}
      <JsonLine>
        <D>{"{"}</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;intent&quot;</K>
        <D>:</D> <S>&quot;Review PRs for security vulnerabilities&quot;</S>
      </JsonLine>
      <JsonLine>
        <D>{"}"}</D>
      </JsonLine>

      {/* Divider */}
      <div className="my-3 flex items-center gap-2">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="rounded bg-[#79c0ff]/15 px-2 py-0.5 text-[10px] font-bold text-[#79c0ff]">
          SSE Stream
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* Stream events */}
      <JsonLine>
        <M>▸</M> <span className="text-white/50">Analyzing intent...</span>
      </JsonLine>
      <JsonLine>
        <M>▸</M>{" "}
        <span className="text-white/50">Mapping to GitHub server tools...</span>
      </JsonLine>
      <JsonLine>
        <M>▸</M> <span className="text-white/50">Generating SKILL.md...</span>
      </JsonLine>
      <div className="mt-1" />
      <JsonLine>
        <span className="text-[#28c840]">✓</span>{" "}
        <span className="text-white/70">
          Created <S>&quot;security-pr-reviewer&quot;</S> v1.0.0
        </span>
      </JsonLine>
      <JsonLine>
        {"  "}
        <span className="text-white/40">
          3 tools referenced · 2 workflow steps
        </span>
      </JsonLine>
    </MiniTerminal>
  );
}

/* ------------------------------------------------------------------ */
/*  Sandboxes terminal — Execute + Results                             */
/* ------------------------------------------------------------------ */

function SandboxesTerminal(): React.ReactNode {
  return (
    <MiniTerminal
      method="POST"
      path="/api/v1/sandboxes/{id}/exec"
      footer="Isolated · No network · Read-only rootfs"
    >
      {/* Request */}
      <JsonLine>
        <D>{"{"}</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;command&quot;</K>
        <D>:</D> <S>&quot;python analyze.py --input data.csv&quot;</S>
      </JsonLine>
      <JsonLine>
        <D>{"}"}</D>
      </JsonLine>

      {/* Divider */}
      <div className="my-3 flex items-center gap-2">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="rounded bg-[#28c840]/15 px-2 py-0.5 text-[10px] font-bold text-[#28c840]">
          200 OK
        </span>
        <span className="text-[10px] text-white/25">2.3s</span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* Response */}
      <JsonLine>
        <D>{"{"}</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;exit_code&quot;</K>
        <D>:</D> <N>0</N>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;stdout&quot;</K>
        <D>:</D> <S>&quot;Analysis complete. 1,234 rows.&quot;</S>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;duration_ms&quot;</K>
        <D>:</D> <N>2341</N>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <K>&quot;files_changed&quot;</K>
        <D>: [</D>
      </JsonLine>
      <JsonLine>
        {"    "}
        <D>{"{"}</D> <K>&quot;path&quot;</K>
        <D>:</D> <S>&quot;outputs/chart.png&quot;</S>
        <D>,</D>
      </JsonLine>
      <JsonLine>
        {"      "}
        <K>&quot;action&quot;</K>
        <D>:</D> <S>&quot;created&quot;</S> <D>{"}"}</D>
      </JsonLine>
      <JsonLine>
        {"  "}
        <D>]</D>
      </JsonLine>
      <JsonLine>
        <D>{"}"}</D>
      </JsonLine>
    </MiniTerminal>
  );
}

/* ------------------------------------------------------------------ */
/*  Pillar Card                                                        */
/* ------------------------------------------------------------------ */

const terminalComponents: Record<string, () => React.ReactNode> = {
  "MCP Servers": ServersTerminal,
  "Agent Skills": SkillsTerminal,
  Sandboxes: SandboxesTerminal,
};

function PillarCard({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}): React.ReactNode {
  const Icon = pillar.icon;
  const Terminal = terminalComponents[pillar.title];

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
      {Terminal ? <Terminal /> : null}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Three Pillars Section                                              */
/* ------------------------------------------------------------------ */

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
            Tools. Knowledge. Computer.
            <br />
            One platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
          >
            Every production agent needs MCP servers to take action, skills to
            know how, and a sandbox to run code. Manage, monitor, and generate
            all three.
          </motion.p>
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
