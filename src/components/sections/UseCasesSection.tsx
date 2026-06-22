import { useCases } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function UseCasesSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          title="Designed for scientific teams exploring molecular possibilities."
          description="MOLwise can support a range of discovery and analysis workflows as the platform grows."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Card
              key={useCase.title}
              className="transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {useCase.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}