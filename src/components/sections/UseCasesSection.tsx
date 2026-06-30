import {
  ArrowRight,
  FlaskConical,
  LucideIcon,
  Microscope,
  Workflow,
} from "lucide-react";
import { useCases as fallbackUseCases } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type UseCaseCard = {
  title?: string;
  description?: string;
  icon?: "FlaskConical" | "Microscope" | "Workflow";
};

type UseCasesSectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  cards?: UseCaseCard[];
  bottomNote?: string;
};

type UseCasesSectionProps = {
  content?: UseCasesSectionContent;
};

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Microscope,
  Workflow,
};

const fallbackContent = {
  eyebrow: "Use Cases",
  title: "Designed for scientific teams exploring molecular discovery.",
  description:
    "MOLwise can support different research workflows where molecular information, candidate comparison, and decision-making need to be clearer and more connected.",
  bottomNote:
    "As the platform evolves, each solution area can expand into a dedicated workflow for research, diagnostics, or molecular discovery teams.",
};

const fallbackCards: UseCaseCard[] = fallbackUseCases.map((useCase, index) => ({
  title: useCase.title,
  description: useCase.description,
  icon:
    index === 0
      ? "FlaskConical"
      : index === 1
        ? "Microscope"
        : "Workflow",
}));

export function UseCasesSection({ content }: UseCasesSectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const cards =
    content?.cards && content.cards.length > 0
      ? content.cards
      : fallbackCards;

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl animate-pulse-glow" />
      <div className="absolute right-[-8rem] bottom-[-8rem] h-96 w-96 rounded-full bg-sky-200/60 blur-3xl animate-float-slow" />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl animate-float-reverse" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur">
              {section.eyebrow}
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((useCase, index) => {
            const Icon = iconMap[useCase.icon ?? "FlaskConical"];

            return (
              <FadeIn key={`${useCase.title}-${index}`} delay={index * 0.08}>
                <Card className="group relative h-full overflow-hidden border-cyan-100/70 bg-white/90 p-0 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-950/10">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200" />
                  <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-cyan-200/0 blur-3xl transition duration-300 group-hover:bg-cyan-200/70" />
                  <div className="absolute bottom-[-5rem] left-[-5rem] h-40 w-40 rounded-full bg-sky-100/0 blur-3xl transition duration-300 group-hover:bg-sky-100/90" />

                  <div className="relative flex h-full flex-col p-7">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-brand text-white shadow-lg shadow-cyan-950/10 transition duration-300 group-hover:scale-105 group-hover:bg-slate-950">
                        <Icon className="h-8 w-8" />
                      </div>

                      <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {useCase.title}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-slate-600">
                      {useCase.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-brand">
                      Explore workflow
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {section.bottomNote && (
          <FadeIn delay={0.2}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-cyan-100 bg-white/85 p-6 text-center shadow-xl shadow-cyan-950/5 backdrop-blur">
              <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-brand" />
              <p className="text-lg leading-8 text-slate-600">
                {section.bottomNote}
              </p>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}