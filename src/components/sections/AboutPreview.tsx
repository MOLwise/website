import { Atom, BrainCircuit, Layers3, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    title: "Molecular science",
    description:
      "Grounded in biological and molecular discovery workflows.",
    Icon: Atom,
  },
  {
    title: "AI-assisted analysis",
    description:
      "Designed to support pattern recognition and candidate prioritization.",
    Icon: BrainCircuit,
  },
  {
    title: "Scalable software",
    description:
      "Built with a modular structure that can grow with the platform.",
    Icon: Layers3,
  },
  {
    title: "Research teams",
    description:
      "Focused on making scientific workflows easier to understand and communicate.",
    Icon: Users,
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="About MOLwise"
              title="Built at the intersection of molecular science, AI, and scalable software."
              description="MOLwise is being designed to support the next generation of molecular discovery workflows through intelligent computational tools and clear scientific interfaces."
            />

            <div className="mt-8 rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-brand-soft to-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Design direction
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                The website is structured to communicate scientific credibility,
                modern technology, and a future-ready platform experience.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.Icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-xl font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {item.description}
                      </p>
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