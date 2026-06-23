import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const workflowSteps = [
  {
    label: "Input",
    title: "Target & molecular data",
    description:
      "Start with the biological target, candidate sequences, or molecular data relevant to the discovery question.",
  },
  {
    label: "Screen",
    title: "Computational screening",
    description:
      "Use structured computational workflows to evaluate candidate behavior and interaction potential.",
  },
  {
    label: "Rank",
    title: "Candidate prioritization",
    description:
      "Compare outputs and prioritize promising candidates for deeper review or downstream validation.",
  },
  {
    label: "Output",
    title: "Research-ready insight",
    description:
      "Organize results into clearer outputs that support reporting, communication, and scientific decisions.",
  },
];

export function WorkflowSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              align="left"
              theme="dark"
              eyebrow="Workflow"
              title="A clearer path from molecular input to candidate insight."
              description="MOLwise is designed to make each stage of the discovery workflow easier to follow, compare, and communicate."
            />

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    Workflow outcome
                  </p>
                  <p className="mt-3 leading-7 text-slate-300">
                    The goal is not only faster analysis, but a more traceable
                    and understandable discovery process for scientific teams.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="grid gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={step.title}>
                    <div className="group rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-slate-900">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-200/20 transition duration-300 group-hover:bg-cyan-300 group-hover:text-slate-950">
                          <span className="text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>

                        <div className="flex-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                            {step.label}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold text-white">
                            {step.title}
                          </h3>

                          <p className="mt-2 leading-7 text-slate-300">
                            {step.description}
                          </p>
                        </div>

                        {index < workflowSteps.length - 1 && (
                          <ArrowRight className="hidden h-5 w-5 text-cyan-200 sm:block" />
                        )}
                      </div>
                    </div>

                    {index < workflowSteps.length - 1 && (
                      <div className="flex justify-center py-2 sm:hidden">
                        <ArrowDown className="h-5 w-5 text-cyan-200" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}