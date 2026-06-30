import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { publications as fallbackPublications } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Publication = {
  _id?: string;
  title: string;
  authors: string;
  year: string;
  venue?: string;
  description?: string;
  publicationUrl?: string;
  pdfUrl?: string;
  featured?: boolean;
};

const normalizedFallbackPublications: Publication[] = fallbackPublications.map(
  (publication) => ({
    ...publication,
    description: "",
    publicationUrl: "",
    pdfUrl: "",
    featured: false,
  }),
);

type PublicationsPreviewProps = {
  publications?: Publication[];
};

export function PublicationsPreview({
  publications,
}: PublicationsPreviewProps) {
  const displayedPublications =
    publications && publications.length > 0
      ? publications
      : normalizedFallbackPublications;
  return (
    <section id="publications" className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Publications"
              title="Research and scientific updates."
              description="A dedicated publications area helps MOLwise communicate scientific credibility, research progress, and future validation work."
            />

            <div className="mt-8 rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <BookOpen className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                    Research library
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    This section highlights research outputs, scientific
                    updates, and future validation work related to MOLwise.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                View all publications
              </Button>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {displayedPublications.map((publication, index) => {
              const href =
                publication.publicationUrl || publication.pdfUrl || "#contact";

              return (
                <FadeIn
                  key={publication._id ?? publication.title}
                  delay={index * 0.08}
                >
                  <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10">
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-brand-soft opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-5 sm:flex-row">
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-brand">
                        <span className="text-xs font-semibold">YEAR</span>
                        <span className="text-lg font-bold">
                          {publication.year}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-brand-dark">
                          <FileText className="h-3.5 w-3.5" />
                          Publication
                        </div>

                        <h3 className="text-xl font-semibold leading-7 text-slate-950">
                          {publication.title}
                        </h3>

                        <p className="mt-3 text-sm text-slate-500">
                          {publication.authors}
                        </p>

                        {publication.venue && (
                          <p className="mt-1 text-sm text-slate-500">
                            {publication.venue}
                          </p>
                        )}

                        {publication.description && (
                          <p className="mt-4 leading-7 text-slate-600">
                            {publication.description}
                          </p>
                        )}

                        <a
                          href={href}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                        >
                          Read more
                          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}