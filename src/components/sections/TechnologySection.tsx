import { Brain, Database, Microscope, FileText } from "lucide-react";
import { technologies } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Brain, Microscope, Database, FileText];

export function TechnologySection() {
  return (
    <section id="technology" className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Built around intelligent molecular workflows."
          description="The platform direction combines computational analysis, machine learning, and structured outputs to support scientific discovery."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {technologies.map((technology, index) => {
            const Icon = icons[index];

            return (
              <Card key={technology.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {technology.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {technology.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}