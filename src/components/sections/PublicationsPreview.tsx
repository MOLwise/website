import { ArrowRight } from "lucide-react";
import { publications } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PublicationsPreview() {
  return (
    <section id="publications" className="bg-slate-50 py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Publications"
            title="Research and scientific updates."
            description="Placeholder publications can later be replaced with real records managed through the CMS."
          />

          <Button href="#contact" variant="secondary" className="w-fit">
            View all publications
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {publications.map((publication) => (
            <Card key={publication.title}>
              <p className="text-sm font-semibold text-brand">
                {publication.year}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-7 text-slate-950">
                {publication.title}
              </h3>

              <p className="mt-4 text-sm text-slate-500">
                {publication.authors}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {publication.venue}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}