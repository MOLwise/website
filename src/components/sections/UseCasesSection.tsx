import { ArrowRight, FlaskConical, Microscope, Workflow } from "lucide-react";
import { useCases } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [FlaskConical, Microscope, Workflow];

const labels = ["Discovery", "Diagnostics", "Research"];

export function UseCasesSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Use cases"
            title="Designed for scientific teams exploring molecular possibilities."
            description="MOLwise can support discovery, diagnostics, and custom research workflows as the platform grows."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = icons[index];

            return (
              <FadeIn key={useCase.title} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-300 opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-brand-dark">
                        {labels[index]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {useCase.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {useCase.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-brand">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-white via-brand-soft to-white p-6 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
              As the platform evolves, each solution area can expand into a dedicated
              workflow for research, diagnostics, or molecular discovery teams.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}