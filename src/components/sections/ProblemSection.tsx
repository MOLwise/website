import { problems } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="The challenge"
          title="Molecular discovery workflows are complex, fragmented, and time-consuming."
          description="Research teams often move between disconnected tools, large datasets, manual analysis steps, and experimental constraints."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title}>
              <h3 className="text-xl font-semibold text-slate-950">
                {problem.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}