import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions as fallbackSolutions } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SolutionStep = {
  title?: string;
  description?: string;
};

type SolutionSectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: SolutionStep[];
  outcomeLabel?: string;
  outcomeText?: string;
};

type SolutionSectionProps = {
  content?: SolutionSectionContent;
};

const fallbackContent = {
  eyebrow: "The Solution",
  title: "A connected platform for intelligent molecular decision-making.",
  description:
    "MOLwise brings together molecular data, AI-assisted analysis, and clear research workflows so teams can move from raw information to better scientific decisions.",
  outcomeLabel: "Outcome",
  outcomeText:
    "A clearer research pipeline that helps teams organize molecular evidence, compare candidates, and make decisions with more confidence.",
};

const fallbackSteps: SolutionStep[] = fallbackSolutions.map((solution) => ({
  title: solution.title,
  description: solution.description,
}));

export function SolutionSection({ content }: SolutionSectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const steps =
    content?.steps && content.steps.length > 0 ? content.steps : fallbackSteps;

  return (
    <section id="platform" className="bg-slate-50 py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        </FadeIn>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-10 hidden h-px w-[76%] -translate-x-1/2 bg-cyan-200 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((solution, index) => (
              <FadeIn key={`${solution.title}-${index}`} delay={index * 0.08}>
                <div className="relative h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <span className="text-lg font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-5 top-9 hidden h-5 w-5 text-brand lg:block" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.25}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                  {section.outcomeLabel}
                </p>
                <p className="mt-3 leading-7 text-slate-600">
                  {section.outcomeText}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}