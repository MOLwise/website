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
import { CustomSections } from "@/components/sections/custom/CustomSections";
import { client } from "@/sanity/lib/client";
import { homePageQuery, publicationsQuery } from "@/sanity/lib/queries";

const defaultSectionOrder = [
  "problem",
  "solution",
  "workflow",
  "technology",
  "useCases",
  "publications",
  "about",
  "customSections",
] as const;

type SectionId = (typeof defaultSectionOrder)[number];

function getSafeSectionOrder(sectionOrder?: string[]): SectionId[] {
  if (!sectionOrder || sectionOrder.length === 0) {
    return [...defaultSectionOrder];
  }

  const validSections = new Set<string>(defaultSectionOrder);

  const cleanedOrder = sectionOrder.filter(
    (section): section is SectionId =>
      validSections.has(section) &&
      !sectionOrder
        .slice(0, sectionOrder.indexOf(section))
        .includes(section),
  );

  const missingSections = defaultSectionOrder.filter(
    (section) => !cleanedOrder.includes(section),
  );

  return [...cleanedOrder, ...missingSections];
}

export default async function Home() {
  const [homePage, publications] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(publicationsQuery),
  ]);

  const sectionOrder = getSafeSectionOrder(homePage?.sectionOrder);

  const sections: Record<SectionId, React.ReactNode> = {
    problem: <ProblemSection content={homePage?.problemSection} />,
    solution: <SolutionSection content={homePage?.solutionSection} />,
    workflow: <WorkflowSection content={homePage?.workflowSection} />,
    technology: <TechnologySection content={homePage?.technologySection} />,
    useCases: <UseCasesSection content={homePage?.useCasesSection} />,
    publications: <PublicationsPreview publications={publications} />,
    about: <AboutPreview content={homePage?.aboutSection} />,
    customSections: <CustomSections sections={homePage?.customSections} />,
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero content={homePage?.hero} />
        <StatsStrip stats={homePage?.stats} />

        {sectionOrder.map((sectionId) => (
          <div key={sectionId}>{sections[sectionId]}</div>
        ))}

        <CTASection content={homePage?.ctaSection} />
      </main>
      <Footer />
    </>
  );
}