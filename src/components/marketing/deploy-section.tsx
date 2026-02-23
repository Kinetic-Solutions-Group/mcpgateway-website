"use client";

import { motion } from "motion/react";
import { Server, Cloud, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DeployOption {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: { label: string; variant: "available" | "coming-soon" };
  footnote: string;
}

const deployOptions: DeployOption[] = [
  {
    icon: Server,
    title: "Self-Hosted",
    description:
      "Deploy on your Kubernetes cluster, your VPC, your compliance boundary. One Helm chart, full control.",
    badge: { label: "Available Now", variant: "available" },
    footnote: "Audit every line of code on GitHub",
  },
  {
    icon: Cloud,
    title: "Cloud Marketplaces",
    description:
      "Subscribe on AWS, Azure, or GCP. Use your committed cloud spend. License key activates enterprise features.",
    badge: { label: "Coming Soon", variant: "coming-soon" },
    footnote: "AWS \u00b7 Azure \u00b7 GCP",
  },
  {
    icon: Shield,
    title: "Red Hat Certified",
    description:
      "Certified OpenShift Operator. Enterprise support SLAs, CVE response, joint escalation with Red Hat.",
    badge: { label: "Coming Soon", variant: "coming-soon" },
    footnote: "OpenShift Operator Hub",
  },
];

function DeployCard({
  option,
  index,
}: {
  option: DeployOption;
  index: number;
}): React.ReactNode {
  const Icon = option.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300"
    >
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="text-lg font-semibold">{option.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
      {option.badge.variant === "available" ? (
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          {option.badge.label}
        </span>
      ) : (
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {option.badge.label}
        </span>
      )}
      <p className="mt-2 text-xs text-muted-foreground/50">{option.footnote}</p>
    </motion.div>
  );
}

export function DeploySection(): React.ReactNode {
  return (
    <section id="deploy" className="py-32">
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
            Your infrastructure. Your rules.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Source-available under FSL. Run it anywhere. No vendor lock-in.
          </motion.p>
        </div>

        {/* Deploy option cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {deployOptions.map((option, i) => (
            <DeployCard key={option.title} option={option} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
