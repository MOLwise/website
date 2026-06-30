import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { DnaAnimation } from "@/components/visuals/DnaAnimation";

type HeroContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  heroImageUrl?: string;
};

type HeroProps = {
  content?: HeroContent;
};

const fallbackHero = {
  eyebrow: "MOLwise Platform",
  title: "AI-powered molecular intelligence for modern discovery.",
  description:
    "MOLwise helps research teams analyze molecular data, explore candidate interactions, and accelerate scientific decision-making through intelligent computational workflows.",
  primaryButtonText: "Explore Platform",
  primaryButtonLink: "#platform",
  secondaryButtonText: "Contact Us",
  secondaryButtonLink: "#contact",
};

export function Hero({ content }: HeroProps) {
  const hero = {
    ...fallbackHero,
    ...content,
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-soft to-brand-muted py-24 sm:py-32">
      <div className="absolute left-[-8rem] top-[-6rem] h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl animate-pulse-glow" />
      <div className="absolute right-[-6rem] top-24 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl animate-float-reverse" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 text-sm font-medium text-brand-dark shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              {hero.eyebrow}
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={hero.primaryButtonLink} className="gap-2">
                {hero.primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button href={hero.secondaryButtonLink} variant="secondary">
                {hero.secondaryButtonText}
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          {hero.heroImageUrl ? (
            <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl backdrop-blur">
              <Image
                src={hero.heroImageUrl}
                alt="MOLwise hero visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <DnaAnimation />
          )}
        </FadeIn>
      </Container>
    </section>
  );
}