import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
    </>
  );
}
