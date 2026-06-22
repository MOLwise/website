import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About MOLwise"
              title="Built at the intersection of molecular science, AI, and scalable software."
              description="MOLwise is being designed to support the next generation of molecular discovery workflows through intelligent computational tools and clear scientific interfaces."
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-soft to-brand-muted p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Scientific discovery",
                "Computational workflows",
                "AI-assisted analysis",
                "Research-ready outputs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/80 p-5 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}