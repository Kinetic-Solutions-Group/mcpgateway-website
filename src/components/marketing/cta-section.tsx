"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection(): React.ReactNode {
  return (
    <section className="relative py-32">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-semibold tracking-tight"
        >
          Ready to simplify your
          <br />
          MCP infrastructure?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Deploy your first MCP server in under 5 minutes. Free for individual
          developers, with enterprise plans for teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="min-w-[200px] gap-2" asChild>
            <Link href="/docs/getting-started">
              Start Building
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
            <Link href="mailto:hello@mcpgateway.com">Talk to Sales</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
