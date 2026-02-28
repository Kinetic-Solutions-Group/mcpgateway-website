import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import "fumadocs-ui/css/neutral.css";
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
        title: "MCP Gateway",
        url: "/",
      }}
    >
      {children}
    </DocsLayout>
  );
}
