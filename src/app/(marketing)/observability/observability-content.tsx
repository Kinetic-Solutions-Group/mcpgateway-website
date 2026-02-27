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
        OBSERVABILITY
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display uppercase"
      >
        See everything your agents do
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        Distributed tracing, Prometheus metrics, and a full audit trail. Monitor
        every tool call, every token, every response — with secret masking built
        in.
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
        src="/images/dashboard.png"
        alt="MCP Gateway — Observability Dashboard"
        caption="Real-time dashboard with tool call volume, success rates, and latency percentiles"
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
          Everything you need to monitor MCP servers
        </motion.h2>

        <div className="mt-16 space-y-24">
          {/* Block 1: Distributed Tracing */}
          <FeatureBlock
            heading="Distributed Tracing"
            description="Push traces to any OpenTelemetry-compatible backend — Datadog, Azure Application Insights, AWS CloudWatch, Google Cloud Operations, Grafana Cloud, New Relic, Splunk, or any custom OTLP endpoint. Auto-instruments FastAPI, SQLAlchemy, and HTTPX with zero code changes. Swap providers at runtime without restarting."
            index={0}
          >
            <ProductScreenshot
              src="/images/settings-telemetry.png"
              alt="Telemetry Export settings — choose from 8 observability providers"
            />
          </FeatureBlock>

          {/* Block 2: Prometheus Metrics */}
          <FeatureBlock
            heading="Prometheus Metrics"
            description="Pull-based metrics at /api/v1/metrics in Prometheus exposition format. HTTP request counts, latency percentile histograms (p50/p90/p95/p99), tool call success rates, active connections, and token usage — all with automatic UUID normalization to prevent high-cardinality explosion."
            reversed
            index={1}
          >
            <ProductScreenshot
              src="/images/monitoring-latency.png"
              alt="Latency percentile monitoring — p50 through p99 over 24 hours"
            />
          </FeatureBlock>

          {/* Block 3: Full Audit Trail */}
          <FeatureBlock
            heading="Full Audit Trail"
            description="Every MCP tool call is logged to PostgreSQL with full-text search. See the tool name, source server, arguments, response, latency, status, and user — with automatic secret masking for API keys, tokens, and passwords. Filter by status, source, date range, and export to CSV."
            index={2}
          >
            <ProductScreenshot
              src="/images/request-history.png"
              alt="Request history — tool calls with arguments, responses, and latency"
            />
          </FeatureBlock>

          {/* Block 4: Token Usage Analytics */}
          <FeatureBlock
            heading="Token Usage Analytics"
            description="Track LLM token consumption across every MCP server. Input tokens, output tokens, and total usage with time-range filtering and per-server breakdowns. Know exactly where your AI spend is going and optimize accordingly."
            reversed
            index={3}
          >
            <ProductScreenshot
              src="/images/token-usage.png"
              alt="Token usage breakdown — input vs output tokens across servers"
            />
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
          Complete Metrics API
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Every metric is queryable. Build dashboards, set up alerts, or
          integrate with your existing monitoring stack.
        </motion.p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Terminal 1: Prometheus Scrape */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MiniTerminal
              method="GET"
              path="/api/v1/metrics"
              footer="Prometheus exposition format"
            >
              <JsonLine>
                <M>{`# HELP http_requests_total Total HTTP requests`}</M>
              </JsonLine>
              <JsonLine>
                <M>{`# TYPE http_requests_total counter`}</M>
              </JsonLine>
              <JsonLine>
                <D>{`http_requests_total{endpoint="/api/v1/search",method="POST",status="200"} 156.0`}</D>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />

              <JsonLine>
                <M>{`# HELP tool_latency_seconds Tool execution latency`}</M>
              </JsonLine>
              <JsonLine>
                <M>{`# TYPE tool_latency_seconds histogram`}</M>
              </JsonLine>
              <JsonLine>
                <D>{`tool_latency_seconds_bucket{server="github",tool="create_pr",le="0.5"} 42.0`}</D>
              </JsonLine>

              <div className="my-3 border-t border-white/[0.06]" />

              <JsonLine>
                <M>{`# HELP server_status MCP server health`}</M>
              </JsonLine>
              <JsonLine>
                <M>{`# TYPE server_status gauge`}</M>
              </JsonLine>
              <JsonLine>
                <D>{`server_status{server="github",type="remote"} 1.0`}</D>
              </JsonLine>
              <JsonLine>
                <D>{`server_status{server="slack",type="remote"} 1.0`}</D>
              </JsonLine>
            </MiniTerminal>
          </motion.div>

          {/* Terminal 2: Request History Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MiniTerminal
              method="GET"
              path="/api/v1/audit/tool-calls?status=error"
              footer="Full-text search with pagination"
            >
              <JsonLine>
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"items"`}</K>
                <D>: [</D>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"{"}</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"tool"`}</K>
                <D>: </D>
                <S>{`"github__create_pr"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"server"`}</K>
                <D>: </D>
                <S>{`"github"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"status"`}</K>
                <D>: </D>
                <S>{`"error"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"latency_ms"`}</K>
                <D>: </D>
                <N>2341</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"error"`}</K>
                <D>: </D>
                <S>{`"rate_limit_exceeded"`}</S>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"      "}
                <K>{`"created_at"`}</K>
                <D>: </D>
                <S>{`"2026-02-26T14:30:00Z"`}</S>
              </JsonLine>
              <JsonLine>
                {"    "}
                <D>{"}"}</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <D>],</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"total"`}</K>
                <D>: </D>
                <N>3</N>
                <D>,</D>
              </JsonLine>
              <JsonLine>
                {"  "}
                <K>{`"page"`}</K>
                <D>: </D>
                <N>1</N>
              </JsonLine>
              <JsonLine>
                <D>{"}"}</D>
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
          Ready to see what your agents are doing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Deploy MCP Gateway and get full visibility into every tool call,
          token, and trace.
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

export function ObservabilityContent(): React.ReactNode {
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
