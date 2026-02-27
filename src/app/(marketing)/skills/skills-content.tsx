"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeatureBlock } from "@/components/shared/feature-block";
import { ProductScreenshot } from "@/components/shared/product-screenshot";
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
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero(): React.ReactNode {
  return (
    <section className="pt-40 pb-16 px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-medium uppercase tracking-wider text-primary"
      >
        AGENT SKILLS
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display uppercase"
      >
        Teach agents expert workflows
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        Import from catalogs, AI-generate from text, or upload manually.
        Portable skill packages following the agentskills.io spec.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10"
      >
        <Button
          asChild
          size="lg"
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Screenshot                                                 */
/* ------------------------------------------------------------------ */

function ScreenshotSection(): React.ReactNode {
  return (
    <section className="py-16 px-6">
      <ProductScreenshot
        src="/images/catalog-skills.png"
        alt="Agent Skills catalog showing skills from Anthropic, OpenAI, and Skills.sh sources"
        caption="Agent Skills catalog — browse and import skills from Anthropic, OpenAI, and Skills.sh"
        priority
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

function HowItWorks(): React.ReactNode {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider text-primary"
        >
          HOW IT WORKS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          From intent to expert agent in minutes
        </motion.h2>

        <div className="mt-16 space-y-24">
          {/* Block 1: Three Ways to Create */}
          <FeatureBlock
            heading="Three Ways to Create"
            description="Import skills from the Anthropic catalog or skills.sh community registry. AI-generate a skill from a natural language description. Or upload a SKILL.md file directly. Every skill follows the agentskills.io open spec."
            index={0}
          >
            <ProductScreenshot
              src="/images/playground.png"
              alt="Playground with agent chat, tools list, and skills loaded"
            />
          </FeatureBlock>

          {/* Block 2: Progressive Loading */}
          <FeatureBlock
            heading="Progressive Loading"
            description="Level 1: skill metadata loads at startup — just 50 tokens. Level 2: the full SKILL.md loads when relevant — up to 5K tokens. Level 3: additional files and scripts load on demand. This keeps agent context windows lean while having deep knowledge available when needed."
            reversed
            index={1}
          >
            <div className="space-y-3">
              {[
                {
                  level: "Level 1",
                  label: "Metadata",
                  tokens: "~50 tokens",
                  width: "w-1/4",
                  color: "bg-primary/20",
                },
                {
                  level: "Level 2",
                  label: "Full SKILL.md",
                  tokens: "~5K tokens",
                  width: "w-2/3",
                  color: "bg-primary/30",
                },
                {
                  level: "Level 3",
                  label: "Scripts & Resources",
                  tokens: "On demand",
                  width: "w-full",
                  color: "bg-primary/40",
                },
              ].map((item) => (
                <div key={item.level} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-xs text-muted-foreground">
                    {item.level}
                  </span>
                  <div
                    className={`${item.width} ${item.color} rounded-lg px-3 py-2`}
                  >
                    <span className="text-xs font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {item.tokens}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FeatureBlock>

          {/* Block 3: AI Skill Generation */}
          <FeatureBlock
            heading="AI Skill Generation"
            description="Describe what you want in plain English. The Deep Agent generates a complete SKILL.md with metadata, instructions, workflow steps, and tool references. Streamed via SSE so you see progress in real time."
            index={2}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/skills/generate"
              footer="Deep Agent with workspace tools"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"intent"`}</K>
                <D>: </D>
                <S>{`"Review PRs for security vulnerabilities"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"mcp_server_id"`}</K>
                <D>: </D>
                <S>{`"550e8400-..."`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="rounded-full bg-[#79c0ff]/10 px-2 py-0.5 text-[10px] text-[#79c0ff]">
                  SSE Stream
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <M>{`▸ Analyzing intent...`}</M>
              </JsonLine>
              <JsonLine>
                <M>{`▸ Mapping to GitHub server tools...`}</M>
              </JsonLine>
              <JsonLine>
                <M>{`▸ Generating SKILL.md...`}</M>
              </JsonLine>

              <div className="mt-2" />

              <JsonLine>
                <span className="text-[#28c840]">{`✓`}</span>
                {` Created `}
                <S>{`"security-pr-reviewer"`}</S>
                {` v`}
                <N>1.0.0</N>
              </JsonLine>
              <JsonLine>
                <M>{`  3 tools referenced · 2 workflow steps`}</M>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>

          {/* Block 4: Install on Sandboxes */}
          <FeatureBlock
            heading="Install on Sandboxes"
            description="Skills are portable ZIP packages containing a SKILL.md plus optional scripts and resources. Install them directly into sandboxes where agents can reference the instructions and execute the bundled scripts."
            reversed
            index={3}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/sandboxes/{id}/skills"
              footer="Portable .skill packages (ZIP)"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"skill_ids"`}</K>
                <D>: [</D>
                <S>{`"abc123..."`}</S>
                <D>, </D>
                <S>{`"def456..."`}</S>
                <D>]</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"installed"`}</K>
                <D>: [</D>
                <S>{`"security-pr-reviewer"`}</S>
                <D>, </D>
                <S>{`"data-analyzer"`}</S>
                <D>],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"already_installed"`}</K>
                <D>: [],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"extraction_errors"`}</K>
                <D>: []</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </FeatureBlock>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  API Showcase                                                       */
/* ------------------------------------------------------------------ */

function ApiShowcase(): React.ReactNode {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-wider text-primary"
        >
          API REFERENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Complete REST API
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Import, generate, manage, and distribute skills programmatically.
        </motion.p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Terminal 1: Browse Catalog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MiniTerminal
              method="GET"
              path="/api/v1/skills/catalog/anthropics"
              footer="Anthropic + skills.sh catalogs"
            >
              <M>{`// No request body`}</M>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"items"`}</K>
                <D>: [{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"github-pr-reviewer"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"author"`}</K>
                <D>: </D>
                <S>{`"Anthropic"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"version"`}</K>
                <D>: </D>
                <S>{`"1.2.0"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"tags"`}</K>
                <D>: [</D>
                <S>{`"github"`}</S>
                <D>, </D>
                <S>{`"code-review"`}</S>
                <D>]</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{`}],`}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"total"`}</K>
                <D>: </D>
                <N>24</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 2: Import from Catalog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/skills/import"
              footer="One-click catalog import"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"source"`}</K>
                <D>: </D>
                <S>{`"anthropics"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"skill_name"`}</K>
                <D>: </D>
                <S>{`"github-pr-reviewer"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"mcp_server_id"`}</K>
                <D>: </D>
                <S>{`"550e8400-..."`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">201 Created</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"id"`}</K>
                <D>: </D>
                <S>{`"abc123..."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"github-pr-reviewer"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"source_type"`}</K>
                <D>: </D>
                <S>{`"imported"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 3: AI Generate (SSE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/skills/generate"
              footer="Streamed via Server-Sent Events"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"intent"`}</K>
                <D>: </D>
                <S>{`"Analyze CSV data and produce charts"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="rounded-full bg-[#79c0ff]/10 px-2 py-0.5 text-[10px] text-[#79c0ff]">
                  SSE Stream
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <K>{`event: `}</K>
                <S>{`progress`}</S>
              </JsonLine>
              <JsonLine>
                <K>{`data: `}</K>
                <S>{`"Analyzing intent..."`}</S>
              </JsonLine>
              <JsonLine>
                <K>{`event: `}</K>
                <S>{`complete`}</S>
              </JsonLine>
              <JsonLine>
                <K>{`data: `}</K>
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"data-analyzer"`}</S>
                <D>, </D>
                <K>{`"version"`}</K>
                <D>: </D>
                <S>{`"1.0.0"`}</S>
                <D>{" }"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 4: Download Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MiniTerminal
              method="GET"
              path="/api/v1/skills/{id}/package"
              footer="Portable .skill ZIP package"
            >
              <M>{`// No request body`}</M>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <K>{`Content-Type`}</K>
                <D>: </D>
                <S>{`application/zip`}</S>
              </JsonLine>
              <JsonLine>
                <K>{`Content-Disposition`}</K>
                <D>: </D>
                <S>{`attachment;`}</S>
              </JsonLine>
              <JsonLine>
                {"  "}
                <S>{`filename="github-pr-reviewer.skill"`}</S>
              </JsonLine>

              <div className="mt-2" />

              <JsonLine>
                <M>{`[4,096 bytes — SKILL.md + scripts/]`}</M>
              </JsonLine>
            </MiniTerminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

function CtaSection(): React.ReactNode {
  return (
    <section className="relative py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Ready to teach your agents?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Import skills from the community or generate your own. Give every
          agent expert-level workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link
              href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="https://github.com/Kinetic-Solutions-Group/mcpgateway"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Content (exported)                                            */
/* ------------------------------------------------------------------ */

export function SkillsContent(): React.ReactNode {
  return (
    <>
      <Hero />
      <ScreenshotSection />
      <HowItWorks />
      <ApiShowcase />
      <CtaSection />
    </>
  );
}
