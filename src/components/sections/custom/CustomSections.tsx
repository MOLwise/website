import Image from "next/image";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TextImageSection = {
  _type: "textImageSection";
  _key: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonLink?: string;
};

type FeatureGridSection = {
  _type: "featureGridSection";
  _key: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  features?: {
    title?: string;
    description?: string;
  }[];
};

type FAQSection = {
  _type: "faqSection";
  _key: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  questions?: {
    question?: string;
    answer?: string;
  }[];
};

type CTABannerSection = {
  _type: "ctaBannerSection";
  _key: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

type CustomSection =
  | TextImageSection
  | FeatureGridSection
  | FAQSection
  | CTABannerSection;

type CustomSectionsProps = {
  sections?: CustomSection[];
};

export function CustomSections({ sections }: CustomSectionsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "textImageSection":
            return <TextImageSectionView key={section._key} section={section} />;

          case "featureGridSection":
            return (
              <FeatureGridSectionView key={section._key} section={section} />
            );

          case "faqSection":
            return <FAQSectionView key={section._key} section={section} />;

          case "ctaBannerSection":
            return <CTABannerSectionView key={section._key} section={section} />;

          default:
            return null;
        }
      })}
    </>
  );
}

function TextImageSectionView({ section }: { section: TextImageSection }) {
  const imageFirst = section.imagePosition === "left";

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn className={imageFirst ? "lg:order-2" : ""}>
            <SectionHeading
              align="left"
              eyebrow={section.eyebrow}
              title={section.title || ""}
              description={section.description}
            />

            {section.buttonText && section.buttonLink && (
              <div className="mt-8">
                <Button href={section.buttonLink} className="gap-2">
                  {section.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.1} className={imageFirst ? "lg:order-1" : ""}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white shadow-xl shadow-cyan-950/10">
              {section.imageUrl ? (
                <Image
                  src={section.imageUrl}
                  alt={section.title || "MOLwise section image"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-8 text-center">
                  <p className="max-w-sm text-lg font-semibold text-brand-dark">
                    Add an image in Sanity Studio to complete this section.
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function FeatureGridSectionView({ section }: { section: FeatureGridSection }) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title || ""}
            description={section.description}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(section.features || []).map((feature, index) => (
            <FadeIn key={`${feature.title}-${index}`} delay={index * 0.06}>
              <Card className="h-full p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQSectionView({ section }: { section: FAQSection }) {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title || ""}
            description={section.description}
          />
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {(section.questions || []).map((item, index) => (
            <FadeIn key={`${item.question}-${index}`} delay={index * 0.05}>
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <HelpCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {item.question}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTABannerSectionView({ section }: { section: CTABannerSection }) {
  return (
    <section className="bg-white py-16">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/20 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                    {section.description}
                  </p>
                )}
              </div>

              {section.buttonText && section.buttonLink && (
                <Button href={section.buttonLink} variant="primary">
                  {section.buttonText}
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}