import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Connect
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to explore what MOLwise can do?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Connect with the MOLwise team to learn how the platform can support
            your research, discovery, or diagnostic development workflow.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="mailto:contact@molwise.com" className="gap-2 bg-white text-slate-950 hover:bg-slate-100">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}