import { ArrowDown, Brain, Database, LineChart, Route, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type WorkflowStep = {
  label?: string;
  title?: string;
  description?: string;
};

type WorkflowSectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  highlightLabel?: string;
  highlightText?: string;
  steps?: WorkflowStep[];
};

type WorkflowSectionProps = {
  content?: WorkflowSectionContent;
};

const fallbackContent = {
  eyebrow: "Workflow",
  title: "From molecular input to research-ready insight.",
  description:
    "MOLwise supports a structured discovery workflow that helps teams move from raw molecular information to organized candidate insights.",
  highlightLabel: "Designed for clarity",
  highlightText:
    "Each stage is designed to reduce friction in the research process, helping teams keep molecular data, AI-assisted analysis, and decision-making connected.",
};

const fallbackSteps: WorkflowStep[] = [
  {
    label: "Input",
    title: "Collect molecular data",
    description:
      "Start with candidate sequences, molecular records, or research-specific datasets.",
  },
  {
    label: "Screen",
    title: "Analyze candidate patterns",
    description:
      "Apply computational methods to identify meaningful molecular relationships and signals.",
  },
  {
    label: "Rank",
    title: "Prioritize candidates",
    description:
      "Compare candidates using structured evidence and AI-assisted insight.",
  },
  {
    label: "Output",
    title: "Support decisions",
    description:
      "Present findings in a clear workflow that supports research planning and communication.",
  },
];

const workflowIcons = [Database, Brain, LineChart, Send];

export function WorkflowSection({ content }: WorkflowSectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const steps =
    content?.steps && content.steps.length > 0 ? content.steps : fallbackSteps;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(103,232,249,0.12),transparent_34%)]" />

      <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[-10rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-sky-400/20 blur-3xl animate-float-slow" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <div className="sticky top-28">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
                <Route className="h-4 w-4" />
                {section.eyebrow}
              </div>

              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {section.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {section.description}
              </p>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-white/[0.05] p-6 shadow-xl shadow-cyan-950/20 backdrop-blur">
                <div className="absolute h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20">
                    <Route className="h-6 w-6" />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    {section.highlightLabel}
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    {section.highlightText}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/30 to-transparent sm:block" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = workflowIcons[index % workflowIcons.length];

                return (
                  <FadeIn key={`${step.title}-${index}`} delay={index * 0.08}>
                    <div className="group relative">
                      <div className="absolute -inset-1 rounded-[2.2rem] bg-cyan-300/0 blur-xl transition duration-300 group-hover:bg-cyan-300/20" />

                      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-cyan-950/20 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/45 group-hover:bg-slate-900/95">
                        <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-300 group-hover:bg-cyan-300/20" />

                        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20 transition duration-300 group-hover:scale-105">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                                {step.label}
                              </p>

                              <span className="text-sm font-semibold text-slate-500">
                                Step {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                              {step.title}
                            </h3>

                            <p className="mt-3 leading-7 text-slate-300">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {index < steps.length - 1 && (
                          <div className="absolute left-7 top-full hidden h-6 w-px bg-cyan-300/40 sm:block">
                            <ArrowDown className="absolute -bottom-2 -left-2 h-4 w-4 text-cyan-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}