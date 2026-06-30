import { AlertTriangle, Clock, GitBranch, LucideIcon, Search } from "lucide-react";
import { problems as fallbackProblems } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type ProblemCard = {
  title?: string;
  description?: string;
  icon?: "GitBranch" | "Clock" | "AlertTriangle";
};

type ProblemSectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  whyItMattersLabel?: string;
  whyItMattersText?: string;
  cards?: ProblemCard[];
};

type ProblemSectionProps = {
  content?: ProblemSectionContent;
};

const iconMap: Record<string, LucideIcon> = {
  GitBranch,
  Clock,
  AlertTriangle,
};

const fallbackContent = {
  eyebrow: "The Problem",
  title: "Scientific discovery is powerful, but the workflow is still fragmented.",
  description:
    "Research teams often move between disconnected tools, manual analysis, and scattered data sources. MOLwise is designed to support a more connected, intelligent workflow for molecular discovery.",
  whyItMattersLabel: "Why it matters",
  whyItMattersText:
    "A clearer digital workflow helps research teams reduce repeated manual work, organize scientific knowledge, and move from raw molecular data toward better decisions.",
};

const fallbackCards: ProblemCard[] = fallbackProblems.map((problem, index) => ({
  title: problem.title,
  description: problem.description,
  icon:
    index === 0
      ? "GitBranch"
      : index === 1
        ? "Clock"
        : "AlertTriangle",
}));

export function ProblemSection({ content }: ProblemSectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const cards =
    content?.cards && content.cards.length > 0 ? content.cards : fallbackCards;

  return (
    <section id="problem" className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-cyan-100/80 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-sky-100/80 blur-3xl animate-float-slow" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/80 blur-3xl animate-float-reverse" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand shadow-sm backdrop-blur">
              <Search className="h-4 w-4" />
              {section.eyebrow}
            </div>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {section.description}
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-6 shadow-xl shadow-cyan-950/5">
              <div className="relative">
                <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-cyan-950/10">
                    <AlertTriangle className="h-6 w-6" />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                    {section.whyItMattersLabel}
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    {section.whyItMattersText}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            {cards.map((problem, index) => {
              const Icon = iconMap[problem.icon ?? "AlertTriangle"];

              return (
                <FadeIn key={`${problem.title}-${index}`} delay={index * 0.08}>
                  <Card className="group relative overflow-hidden border-cyan-100/70 bg-white/90 p-0 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-950/10">
                    <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cyan-300 via-sky-400 to-cyan-200" />
                    <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-cyan-200/0 blur-3xl transition duration-300 group-hover:bg-cyan-200/70" />

                    <div className="relative flex gap-5 p-6 sm:p-7">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand text-white shadow-lg shadow-cyan-950/10 transition duration-300 group-hover:scale-105 group-hover:bg-slate-950">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <div className="mb-3 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">
                          Challenge 0{index + 1}
                        </div>

                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                          {problem.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}