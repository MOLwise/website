import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PublicationsPreview } from "@/components/sections/PublicationsPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ProblemSection />
        <SolutionSection />
        <WorkflowSection />
        <TechnologySection />
        <UseCasesSection />
        <PublicationsPreview />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}