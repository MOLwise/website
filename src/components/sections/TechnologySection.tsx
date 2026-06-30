import {
  Brain,
  Database,
  LucideIcon,
  Network,
  ShieldCheck,
} from "lucide-react";
import { technologies as fallbackTechnologies } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TechnologyCard = {
  title?: string;
  description?: string;
  tag?: string;
  icon?: "Brain" | "Database" | "Network" | "ShieldCheck";
};

type TechnologySectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  coreIdeaLabel?: string;
  coreIdeaText?: string;
  cards?: TechnologyCard[];
};

type TechnologySectionProps = {
  content?: TechnologySectionContent;
};

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Database,
  Network,
  ShieldCheck,
};

const fallbackContent = {
  eyebrow: "Technology",
  title: "Built around intelligent molecular workflows.",
  description:
    "MOLwise combines computational biology, AI-assisted analysis, and structured software workflows to support molecular discovery teams.",
  coreIdeaLabel: "Core idea",
  coreIdeaText:
    "The platform is designed to help researchers move from scattered molecular information toward clearer, more organized scientific insight.",
};

const fallbackCards: TechnologyCard[] = fallbackTechnologies.map(
  (technology, index) => ({
    title: technology.title,
    description: technology.description,
    tag:
      index === 0
        ? "AI"
        : index === 1
          ? "Data"
          : index === 2
            ? "Workflow"
            : "Security",
    icon:
      index === 0
        ? "Brain"
        : index === 1
          ? "Database"
          : index === 2
            ? "Network"
            : "ShieldCheck",
  }),
);

export function TechnologySection({ content }: TechnologySectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const cards =
    content?.cards && content.cards.length > 0
      ? content.cards
      : fallbackCards;

  return (
    <section id="technology" className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />

            <div className="mt-8 rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                {section.coreIdeaLabel}
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                {section.coreIdeaText}
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((technology, index) => {
              const Icon = iconMap[technology.icon ?? "Brain"];

              return (
                <FadeIn
                  key={`${technology.title}-${index}`}
                  delay={index * 0.08}
                >
                  <Card className="group relative h-full overflow-hidden p-6">
                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>

                        {technology.tag && (
                          <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">
                            {technology.tag}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-slate-950">
                        {technology.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {technology.description}
                      </p>

                      <div className="mt-6 h-1 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-1/3 rounded-full bg-brand transition-all duration-300 group-hover:w-full" />
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