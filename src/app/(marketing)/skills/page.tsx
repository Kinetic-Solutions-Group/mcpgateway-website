import type { Metadata } from "next";
import { SkillsContent } from "./skills-content";

export const metadata: Metadata = {
  title: "Agent Skills",
  description:
    "Import from catalogs, AI-generate from text, or upload manually. Portable skill packages following the agentskills.io spec.",
};

export default function SkillsPage(): React.ReactNode {
  return <SkillsContent />;
}
