import type { ReactNode } from "react";
import type { Metadata } from "next";
import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { APIPage } from "@/components/docs/api-page";
import { DocsLanding } from "@/components/docs/docs-landing";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<ReactNode> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const isLanding = !params.slug || params.slug.length === 0;
  const mdxContent = (
    <MDX components={{ ...defaultMdxComponents, APIPage, DocsLanding }} />
  );

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: "clerk" }}
      className={isLanding ? "max-w-none mx-0" : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {/* Landing page skips DocsBody (prose wrapper) so cards fill the
          full article width — the prose max-width: 65ch constraint
          renders inconsistently across browsers (Chrome vs Edge). */}
      {isLanding ? mdxContent : <DocsBody>{mdxContent}</DocsBody>}
    </DocsPage>
  );
}

export function generateStaticParams(): { slug?: string[] }[] {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
