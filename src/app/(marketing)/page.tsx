import { Hero } from "@/components/marketing/hero";
import { ThreePillars } from "@/components/marketing/three-pillars";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Architecture } from "@/components/marketing/architecture";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { DeploySection } from "@/components/marketing/deploy-section";

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Hero />
      <ThreePillars />
      <HowItWorks />
      <Architecture />
      <FeatureGrid />
      <DeploySection />
    </>
  );
}
