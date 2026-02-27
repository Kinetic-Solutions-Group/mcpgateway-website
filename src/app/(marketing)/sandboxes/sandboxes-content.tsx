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
        SANDBOXES
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display uppercase"
      >
        Safe code execution for AI agents
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        Persistent container environments with warm pools, resource limits, and
        full audit trails. Hardened by default.
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
        src="/images/sandboxes-list.png"
        alt="Sandboxes list showing running and stopped instances with resource usage and recent activity"
        caption="Sandbox instances with live status, resource allocation, and recent commands"
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
          Production-grade execution environments
        </motion.h2>

        <div className="mt-16 space-y-24">
          {/* Block 1: Persistent Containers */}
          <FeatureBlock
            heading="Persistent Containers"
            description="Each sandbox gets a dedicated volume that survives stops and restarts. Session affinity ensures the same agent session reuses the same sandbox via session keys — no work is ever lost between tool calls."
            index={0}
          >
            <ProductScreenshot
              src="/images/settings-sandboxes.png"
              alt="Sandbox settings showing provider configuration, resource quotas, and timeout policies"
              caption="Configure sandbox provider, resource quotas, and idle timeouts"
            />
          </FeatureBlock>

          {/* Block 2: Warm Pool Architecture */}
          <FeatureBlock
            heading="Warm Pool Architecture"
            description="Pre-warmed containers sit ready in a pool. When an agent needs a sandbox, allocation is sub-second — no cold starts. The lifecycle manager automatically replenishes the pool and cleans up idle sandboxes."
            reversed
            index={1}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-lg border border-primary/20 bg-primary/5 p-3 text-center">
                  <p className="text-xs font-medium text-primary">Warm Pool</p>
                  <p className="text-[10px] text-muted-foreground">
                    Pre-warmed containers ready
                  </p>
                </div>
                <span className="text-muted-foreground">&rarr;</span>
                <div className="flex-1 rounded-lg border border-[#28c840]/20 bg-[#28c840]/5 p-3 text-center">
                  <p className="text-xs font-medium text-[#28c840]">Allocate</p>
                  <p className="text-[10px] text-muted-foreground">
                    Sub-second, no cold start
                  </p>
                </div>
                <span className="text-muted-foreground">&rarr;</span>
                <div className="flex-1 rounded-lg border border-[#79c0ff]/20 bg-[#79c0ff]/5 p-3 text-center">
                  <p className="text-xs font-medium text-[#79c0ff]">Execute</p>
                  <p className="text-[10px] text-muted-foreground">
                    Agent runs code safely
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg border border-border/50 bg-card/30 px-4 py-2">
                  <p className="text-[10px] text-muted-foreground">
                    &#8635; Lifecycle Manager: auto-replenish pool &middot; stop
                    idle &middot; destroy expired
                  </p>
                </div>
              </div>
            </div>
          </FeatureBlock>

          {/* Block 3: Security Hardened */}
          <FeatureBlock
            heading="Security Hardened"
            description="Every sandbox is locked down by default. No network access, no root privileges, no writable system files. Every command execution is logged with exit code, stdout, stderr, duration, and file changes."
            index={2}
          >
            <div className="rounded-xl border border-border/50 bg-card/30 p-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Read-only root filesystem",
                  "Non-root user (uid 1000)",
                  "Network disabled by default",
                  "Dropped Linux capabilities",
                  "Path traversal protection",
                  "Full execution audit log",
                  "Resource limits (CPU/mem)",
                  "Configurable timeouts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#28c840]">&#10003;</span>
                    <span className="text-xs text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FeatureBlock>

          {/* Block 4: File Management */}
          <FeatureBlock
            heading="File Management"
            description="Upload data files, execute code against them, and download results. The API tracks every file created or modified during execution. Build multi-step workflows: upload CSV → analyze → download chart."
            reversed
            index={3}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/sandboxes/{id}/exec"
              footer="Tracks every file change automatically"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"command"`}</K>
                <D>: </D>
                <S>{`"python analyze.py --input data.csv"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"timeout_seconds"`}</K>
                <D>: </D>
                <N>300</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">
                  200 OK &middot; 2.3s
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"exit_code"`}</K>
                <D>: </D>
                <N>0</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"stdout"`}</K>
                <D>: </D>
                <S>{`"Analysis complete. 1,234 rows."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"duration_ms"`}</K>
                <D>: </D>
                <N>2341</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"files_changed"`}</K>
                <D>: [{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"path"`}</K>
                <D>: </D>
                <S>{`"outputs/chart.png"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"action"`}</K>
                <D>: </D>
                <S>{`"created"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <K>{`"size_bytes"`}</K>
                <D>: </D>
                <N>45678</N>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"}]"}</D>
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
          Create, execute, and manage sandboxes. Upload files, install skills,
          track every operation.
        </motion.p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Terminal 1: Create Sandbox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/sandboxes"
              footer="Session affinity via session_key"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"image"`}</K>
                <D>: </D>
                <S>{`"mcpgateway/sandbox-python:3.12"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"memory_mb"`}</K>
                <D>: </D>
                <N>512</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"idle_timeout_seconds"`}</K>
                <D>: </D>
                <N>1800</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"session_key"`}</K>
                <D>: </D>
                <S>{`"agent-session-abc"`}</S>
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
                <S>{`"f1e2d3c4-..."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"status"`}</K>
                <D>: </D>
                <S>{`"running"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"workspace_path"`}</K>
                <D>: </D>
                <S>{`"/workspace"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 2: Execute Command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/sandboxes/{id}/exec"
              footer="Structured output with timing"
            >
              <M>{`// Request`}</M>
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"command"`}</K>
                <D>: </D>
                <S>{`"python main.py"`}</S>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">
                  200 OK &middot; 1.2s
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"exit_code"`}</K>
                <D>: </D>
                <N>0</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"stdout"`}</K>
                <D>: </D>
                <S>{`"Done."`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"duration_ms"`}</K>
                <D>: </D>
                <N>1234</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 3: Install Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MiniTerminal
              method="POST"
              path="/api/v1/sandboxes/{id}/skills"
              footer="Skills extracted to /workspace"
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
                <S>{`"data-analyzer"`}</S>
                <D>],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"already_installed"`}</K>
                <D>: []</D>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 4: Upload File */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MiniTerminal
              method="PUT"
              path="/api/v1/sandboxes/{id}/files/data.csv"
              footer="Upload any file to /workspace"
            >
              <M>{`// Headers`}</M>
              <JsonLine>
                <K>{`Content-Type`}</K>
                <D>: </D>
                <S>{`application/octet-stream`}</S>
              </JsonLine>
              <JsonLine>
                <M>{`[raw binary body]`}</M>
              </JsonLine>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">
                  204 No Content
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <M>{`// No response body`}</M>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 5: List Files (full-width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <MiniTerminal
              method="GET"
              path="/api/v1/sandboxes/{id}/files?path=/workspace/outputs"
              footer="Browse sandbox filesystem via API"
            >
              <M>{`// No request body`}</M>

              <div className="my-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] text-white/30">200 OK</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <JsonLine>
                <D>[</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"chart.png"`}</S>
                <D>, </D>
                <K>{`"type"`}</K>
                <D>: </D>
                <S>{`"file"`}</S>
                <D>, </D>
                <K>{`"size"`}</K>
                <D>: </D>
                <N>45678</N>
                <D>{`" },`}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>{"{"} </D>
                <K>{`"name"`}</K>
                <D>: </D>
                <S>{`"report.csv"`}</S>
                <D>, </D>
                <K>{`"type"`}</K>
                <D>: </D>
                <S>{`"file"`}</S>
                <D>, </D>
                <K>{`"size"`}</K>
                <D>: </D>
                <N>12345</N>
                <D>{" }"}</D>
              </JsonLine>
              <JsonLine>
                <D>]</D>
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
          Ready to give your agents a safe place to execute?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Persistent sandboxes with warm pools, security hardening, and full
          audit trails.
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

export function SandboxesContent(): React.ReactNode {
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
