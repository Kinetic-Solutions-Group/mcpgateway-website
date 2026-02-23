import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI agents, MCP infrastructure, and enterprise governance from the MCP Gateway team.",
};

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
      "91% of AI tools in enterprises are unmanaged. Here's what Shadow AI means for your organization — and why MCP Gateway exists.",
  },
  {
    title: "Open Source in the Age of AI Coding: Why We Chose Source-Available",
    slug: "open-source-in-the-age-of-ai-coding",
    author: "Pablo Marin",
    role: "CTO @ KSGai.com",
    date: "February 23, 2026",
    excerpt:
      "When AI can clone any repo in minutes, what's the real moat? We break down our licensing strategy and what it means for enterprises.",
  },
];

export default function BlogPage(): React.ReactNode {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-32 pt-40">
      <h1 className="font-display uppercase">Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Insights on AI agents, MCP infrastructure, and enterprise governance.
      </p>

      <div className="mt-16 space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-display text-3xl uppercase tracking-wide transition-colors group-hover:text-primary">
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {post.author}, {post.role} · {post.date}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
