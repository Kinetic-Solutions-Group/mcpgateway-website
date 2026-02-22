"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CloudProvider {
  name: string;
  subtitle: string;
  method: string;
}

const providers: CloudProvider[] = [
  { name: "Azure", subtitle: "Marketplace", method: "One-click on AKS" },
  { name: "AWS", subtitle: "Marketplace", method: "EKS Add-on" },
  { name: "Google Cloud", subtitle: "Marketplace", method: "Deploy on GKE" },
  { name: "Red Hat", subtitle: "OpenShift", method: "Certified Operator" },
];

function ProviderCard({
  provider,
  index,
}: {
  provider: CloudProvider;
  index: number;
}): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-glow rounded-2xl border border-border/50 bg-card/50 p-6 text-center transition-all duration-300"
    >
      <div className="text-2xl font-semibold">{provider.name}</div>
      <div className="mt-1 text-sm text-muted-foreground">
        {provider.subtitle}
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        {provider.method}
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Coming Soon
      </div>
    </motion.div>
  );
}

function NotifyForm(): React.ReactNode {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // TODO: Wire to backend API or email service (e.g. Resend, Mailchimp)
    // For now, store in localStorage as a temporary measure
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-12"
    >
      {submitted ? (
        <p className="text-center text-sm text-primary">
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
    </motion.div>
  );
}

export function DeploySection(): React.ReactNode {
  return (
    <section id="deploy" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Deployment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
          >
            Deploy on Your Cloud
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            One-click deployment on the major cloud marketplaces. Starting at
            $99/mo.
          </motion.p>
        </div>

        {/* Cloud provider cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, i) => (
            <ProviderCard key={provider.name} provider={provider} index={i} />
          ))}
        </div>

        {/* Email notification form */}
        <NotifyForm />
      </div>
    </section>
  );
}
