import {
  ArrowRight,
  Mail,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const contactOptions = [
  {
    title: "Research collaboration",
    description:
      "Discuss scientific workflows, discovery goals, or validation needs.",
    Icon: Sparkles,
  },
  {
    title: "Platform inquiry",
    description:
      "Explore how MOLwise could support molecular analysis workflows.",
    Icon: MessageSquareText,
  },
  {
    title: "General contact",
    description:
      "Reach out for team, publication, or partnership questions.",
    Icon: Mail,
  },
];

export function CTASection() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Connect
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to explore intelligent molecular discovery?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Connect with the MOLwise team to learn how the platform can
              support research, discovery, or diagnostic development workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="mailto:contact@molwise.com"
                className="gap-2 bg-white text-slate-950 hover:bg-slate-100"
              >
                Email the Team
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href="#publications"
                variant="secondary"
                className="bg-slate-900 text-white ring-white/15 hover:bg-slate-800"
              >
                View Publications
              </Button>
            </div>

            <div className="mt-10 space-y-4">
              {contactOptions.map((option) => {
                const Icon = option.Icon;

                return (
                  <div
                    key={option.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/10"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-200/20 transition duration-300 group-hover:bg-cyan-300 group-hover:text-slate-950">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {option.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    Request information
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Tell us what you are exploring.
                  </h3>

                  <form className="mt-8 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-200"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:bg-white/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-200"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:bg-white/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-200"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your workflow, research goal, or collaboration idea."
                        className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:bg-white/10"
                      />
                    </div>

                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Submit inquiry
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className="text-xs leading-6 text-slate-400">
                      Your message will help us understand the best way to connect with you.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}