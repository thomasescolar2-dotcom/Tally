import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero";
import { ProblemSolutionSection } from "@/components/problem-solution";
import { FeaturesSection } from "@/components/features";
import { DemoSection } from "@/components/demo-section";
import { SocialProofSection } from "@/components/social-proof";
import { FinalCTASection } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DemoSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
