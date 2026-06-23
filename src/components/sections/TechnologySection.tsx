import { Brain, Database, FileText, Microscope } from "lucide-react";
import { technologies } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Brain, Microscope, Database, FileText];

const tags = ["AI Models", "Screening", "Pipelines", "Outputs"];

export function TechnologySection() {
  return (
    <section id="technology" className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Technology"
              title="Built around intelligent molecular workflows."
              description="The platform direction combines computational analysis, machine learning, and structured outputs to support scientific discovery."
            />

            <div className="mt-8 rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Core idea
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                MOLwise is designed to make molecular analysis easier to
                structure, compare, and communicate across research workflows.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {technologies.map((technology, index) => {
              const Icon = icons[index];

              return (
                <FadeIn key={technology.title} delay={index * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-7 w-7" />
                        </div>

                        <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-brand-dark">
                          {tags[index]}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-950">
                        {technology.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {technology.description}
                      </p>

                      <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-1/2 rounded-full bg-brand transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}