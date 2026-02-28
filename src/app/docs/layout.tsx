import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Image
            src="/logo-light-transparent.png"
            alt="MCP Gateway"
            width={200}
            height={62}
            className="h-9 w-auto dark:invert dark:hue-rotate-180"
            unoptimized
          />
        ),
        url: "/",
      }}
      sidebar={{
        defaultOpenLevel: 1,
        banner: (
          <Link
            href="/docs"
            className="-mx-2 mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Docs Home
          </Link>
        ),
        footer: (
          <Link
            href="/"
            className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            &larr; Back to mcpgateway.com
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
