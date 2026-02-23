import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ThreePillars } from "@/components/marketing/three-pillars";
import { DeploySection } from "@/components/marketing/deploy-section";
import { BlogSection } from "@/components/marketing/blog-section";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ThreePillars />
      <DeploySection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
