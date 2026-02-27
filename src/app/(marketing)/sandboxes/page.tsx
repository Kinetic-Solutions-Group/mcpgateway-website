import type { Metadata } from "next";
import { SandboxesContent } from "./sandboxes-content";

export const metadata: Metadata = {
  title: "Sandboxes",
  description:
    "Persistent container environments with warm pools, resource limits, and full audit trails. Safe code execution for AI agents.",
};

export default function SandboxesPage(): React.ReactNode {
  return <SandboxesContent />;
}
