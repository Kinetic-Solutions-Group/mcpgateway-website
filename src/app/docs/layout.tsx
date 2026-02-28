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
