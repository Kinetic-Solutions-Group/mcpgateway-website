import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PostMeta {
  title: string;
  description: string;
  author: string;
  role: string;
  date: string;
}

const postMeta: Record<string, PostMeta> = {
  "why-ai-agents-need-a-control-plane": {
    title: "Why AI Agents Need a Control Plane",
    description:
      "91% of AI tools in enterprises are unmanaged. Here's what Shadow AI means for your organization — and why MCP Gateway exists.",
    author: "Pablo Marin",
    role: "CTO @ KSGai.com",
    date: "February 23, 2026",
  },
  "open-source-in-the-age-of-ai-coding": {
    title: "Open Source in the Age of AI Coding: Why We Chose Source-Available",
    description:
      "When AI can clone any repo in minutes, what's the real moat? We break down our licensing strategy and what it means for enterprises.",
    author: "Pablo Marin",
    role: "CTO @ KSGai.com",
    date: "February 23, 2026",
  },
};

export function generateStaticParams(): { slug: string }[] {
  return Object.keys(postMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactNode> {
  const { slug } = await params;
  const meta = postMeta[slug];

  if (!meta) notFound();

  // Dynamically import post content based on slug
  let PostContent: React.ComponentType;
  try {
    const mod = await import(`./${slug}`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-32 pt-40">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Blog
        </p>
        <h1 className="mt-4 font-display uppercase">{meta.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {meta.author}, {meta.role} · {meta.date}
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground">
        <PostContent />
      </div>
    </article>
  );
}
