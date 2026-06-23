import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionSection() {
  return (
    <section id="platform" className="bg-white py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="The MOLwise approach"
            title="One intelligent workflow for molecular insight."
            description="MOLwise is designed to bring structure, intelligence, and clarity into early-stage molecular discovery workflows."
          />
        </FadeIn>

        <div className="mt-16">
          <div className="relative grid gap-6 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-100 lg:block" />

            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 0.08}>
                <div className="group relative h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                  <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white ring-8 ring-white transition duration-300 group-hover:bg-brand">
                    {index + 1}
                  </div>

                  <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  {index < solutions.length - 1 && (
                    <div className="absolute -right-3 top-14 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-100 bg-white text-brand shadow-sm lg:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-brand-soft to-white p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Outcome
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-700">
              Instead of scattered analysis steps, MOLwise presents a clearer
              path from molecular inputs to prioritized candidates and
              research-ready outputs.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}