import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutPrinciple = {
  title?: string;
  description?: string;
};

type AboutSectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  principles?: AboutPrinciple[];
  closingText?: string;
};

type AboutPreviewProps = {
  content?: AboutSectionContent;
};

const fallbackContent = {
  eyebrow: "About MOLwise",
  title: "A research-focused platform for molecular intelligence.",
  description:
    "MOLwise is being developed to support scientific teams working with molecular data, AI-assisted analysis, and discovery workflows.",
  closingText:
    "The goal is to help research teams move through discovery with more clarity, better organization, and stronger decision support.",
};

const fallbackPrinciples: AboutPrinciple[] = [
  {
    title: "Molecular science",
    description:
      "Designed around workflows where molecular information, candidate evidence, and scientific interpretation matter.",
  },
  {
    title: "AI-assisted analysis",
    description:
      "Built to support computational methods that help researchers compare, prioritize, and understand molecular candidates.",
  },
  {
    title: "Scalable software",
    description:
      "Structured as a modern web platform that can grow as the research, features, and team needs evolve.",
  },
  {
    title: "Research teams",
    description:
      "Focused on helping scientific teams organize knowledge and communicate decisions more clearly.",
  },
];

export function AboutPreview({ content }: AboutPreviewProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const principles =
    content?.principles && content.principles.length > 0
      ? content.principles
      : fallbackPrinciples;

  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />

            {section.closingText && (
              <div className="mt-8 rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm">
                <p className="leading-7 text-slate-600">
                  {section.closingText}
                </p>
              </div>
            )}
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <FadeIn key={`${principle.title}-${index}`} delay={index * 0.08}>
                <Card className="h-full p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}