import { AlertTriangle, Clock, GitBranch } from "lucide-react";
import { problems } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [GitBranch, Clock, AlertTriangle];

export function ProblemSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="The challenge"
              title="Molecular discovery workflows are still too fragmented."
              description="Research teams often move between disconnected tools, large datasets, manual analysis steps, and experimental constraints. This makes it harder to identify, compare, and communicate promising molecular candidates."
            />

            <div className="mt-8 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Why it matters
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                MOLwise is designed around a clearer discovery experience:
                structured inputs, intelligent analysis, and research-ready
                outputs that help teams move with more confidence.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {problems.map((problem, index) => {
              const Icon = icons[index];

              return (
                <FadeIn key={problem.title} delay={index * 0.08}>
                  <Card className="group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-950/10">
                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                    <div className="relative flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-950">
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