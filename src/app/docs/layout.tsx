import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";
import Link from "next/link";
import "fumadocs-openapi/css/preset.css";

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
          <span className="flex items-center gap-2">
            {/* Light mode: dark text logo */}
            <Image
              src="/logo-light-transparent.png"
              alt="MCP Gateway"
              width={120}
              height={37}
              className="h-8 w-auto dark:hidden"
              unoptimized
            />
            {/* Dark mode: white text logo */}
            <Image
              src="/logo-dark.png"
              alt="MCP Gateway"
              width={120}
              height={37}
              className="hidden h-8 w-auto dark:block"
              unoptimized
            />
          </span>
        ),
        url: "/",
      }}
      sidebar={{
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
