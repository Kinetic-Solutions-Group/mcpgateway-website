"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  author: string;
  role: string;
  date: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: "Why AI Agents Need a Control Plane",
    slug: "why-ai-agents-need-a-control-plane",
    author: "Pablo Marin",
    role: "CTO @ KSGai.com",
    date: "February 23, 2026",
    excerpt:
      "91% of AI tools in enterprises are unmanaged. Here\u2019s what Shadow AI means for your organization \u2014 and why MCP Gateway exists.",
  },
  {
    title: "Open Source in the Age of AI Coding: Why We Chose Source-Available",
    slug: "open-source-in-the-age-of-ai-coding",
    author: "Pablo Marin",
    role: "CTO @ KSGai.com",
    date: "February 23, 2026",
    excerpt:
      "When AI can clone any repo in minutes, what\u2019s the real moat? We break down our licensing strategy and what it means for enterprises.",
  },
];

export function BlogSection(): React.ReactNode {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Insights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl uppercase tracking-wide sm:text-5xl"
          >
            From the team
          </motion.h2>
        </div>

        {/* Blog post cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glow group rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300"
            >
              <Link href={"/blog/" + post.slug}>
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.author}, {post.role} &middot; {post.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                href={"/blog/" + post.slug}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Read <ArrowRight className="size-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
