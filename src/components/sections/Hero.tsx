import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-violet-50 py-24 sm:py-32">
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute right-10 top-40 -z-0 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            MOLwise Platform
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            AI-powered molecular intelligence for modern discovery.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MOLwise helps research teams analyze molecular data, explore
            candidate interactions, and accelerate scientific decision-making
            through intelligent computational workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#platform" className="gap-2">
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-200">MOLwise Insight Panel</p>
                  <h3 className="mt-1 text-xl font-semibold">Candidate Overview</h3>
                </div>
                <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Candidate sequences", "248"],
                  ["Confidence score", "91%"],
                  ["Active analyses", "12"],
                  ["Reports generated", "4"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className="mt-3 text-3xl font-bold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 p-4">
                <p className="text-sm text-slate-300">Workflow stage</p>
                <p className="mt-2 font-medium">
                  Computational screening → Candidate prioritization
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}