import { CheckCircle2 } from "lucide-react";
import { solutions } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionSection() {
  return (
    <section id="platform" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="The MOLwise approach"
          title="One intelligent workflow for molecular insight."
          description="MOLwise is designed to bring structure, intelligence, and clarity into early-stage molecular discovery workflows."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <Card key={solution.title} className="relative overflow-hidden">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <p className="mb-3 text-sm font-semibold text-slate-400">
                Step {index + 1}
              </p>

              <h3 className="text-xl font-semibold text-slate-950">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}