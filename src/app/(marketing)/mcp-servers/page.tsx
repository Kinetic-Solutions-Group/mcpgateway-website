import type { Metadata } from "next";
import { McpServersContent } from "./mcp-servers-content";

export const metadata: Metadata = {
  title: "MCP Servers",
  description:
    "Register, route, monitor, and secure every MCP server connection. Six server types, semantic search, HTTP/2 connection pooling, and AI server generation.",
};

export default function McpServersPage(): React.ReactNode {
  return <McpServersContent />;
}
