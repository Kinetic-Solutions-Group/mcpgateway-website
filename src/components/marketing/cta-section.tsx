"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Bell, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection(): React.ReactNode {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const existing = JSON.parse(
      localStorage.getItem("mcpgateway_notify_emails") ?? "[]",
    ) as string[];
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(
        "mcpgateway_notify_emails",
        JSON.stringify(existing),
      );
    }
    setSubmitted(true);
  }

  return (
    <section className="relative py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl uppercase tracking-wide sm:text-5xl"
        >
          Ready to take control of your AI agent infrastructure?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Give your agents the tools, knowledge, and compute they need — with
          the governance your enterprise requires.
        </motion.p>

        {/* CTA buttons */}
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
            <Link href="https://github.com/Kinetic-Solutions-Group/mcpgateway">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="mailto:hello@ksgai.com">
              <Mail className="size-4" />
              Talk to Us
            </Link>
          </Button>
        </motion.div>

        {/* Email notification form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          {submitted ? (
            <p className="text-sm text-primary">
              Thanks! We&apos;ll notify you when we launch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="h-10 w-full max-w-sm rounded-lg border border-border/50 bg-card/50 px-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-72"
              />
              <Button
                type="submit"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Bell className="size-4" />
                Notify Me
              </Button>
            </form>
          )}
          <p className="mt-3 text-xs text-muted-foreground/50">
            Get notified when cloud marketplace listings go live.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
