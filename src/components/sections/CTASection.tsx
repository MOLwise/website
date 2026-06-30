import { Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type ContactOption = {
  label?: string;
  value?: string;
};

type CTASectionContent = {
  eyebrow?: string;
  title?: string;
  description?: string;
  contactOptions?: ContactOption[];
  formTitle?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  buttonText?: string;
  helperText?: string;
};

type CTASectionProps = {
  content?: CTASectionContent;
};

const fallbackContent = {
  eyebrow: "Contact",
  title: "Let’s explore what MOLwise can support.",
  description:
    "Connect with the team to discuss research collaborations, platform direction, or future scientific applications.",
  formTitle: "Start a conversation",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  buttonText: "Send Message",
  helperText:
    "Your message will help us understand the best way to connect with you.",
};

const fallbackContactOptions: ContactOption[] = [
  {
    label: "General inquiries",
    value: "Connect with the MOLwise team",
  },
  {
    label: "Research collaboration",
    value: "Discuss scientific workflows and platform direction",
  },
];

export function CTASection({ content }: CTASectionProps) {
  const section = {
    ...fallbackContent,
    ...content,
  };

  const contactOptions =
    content?.contactOptions && content.contactOptions.length > 0
      ? content.contactOptions
      : fallbackContactOptions;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(103,232,249,0.16),transparent_34%)]" />

      <div className="absolute left-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/25 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-sky-400/25 blur-3xl animate-float-slow" />
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl animate-float-reverse" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-cyan-200/20 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <FadeIn>
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    {section.eyebrow}
                  </div>

                  <h2 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {section.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    {section.description}
                  </p>
                </div>

                <div className="mt-10 grid gap-4">
                  {contactOptions.map((option, index) => (
                    <div
                      key={`${option.label}-${index}`}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-200/15 bg-slate-950/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-xl hover:shadow-cyan-950/40"
                    >
                      <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-cyan-300/20 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                      <div className="relative flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20 transition duration-300 group-hover:scale-105">
                          {index === 0 ? (
                            <Mail className="h-5 w-5" />
                          ) : (
                            <MessageSquare className="h-5 w-5" />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                            {option.label}
                          </p>
                          <p className="mt-2 leading-7 text-slate-300">
                            {option.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative h-full">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-300/40 via-sky-300/20 to-transparent blur-xl" />

                <div className="relative h-full overflow-hidden rounded-[2rem] border border-cyan-200/25 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur sm:p-8">
                  <div className="absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
                  <div className="absolute bottom-[-5rem] left-[-5rem] h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                          MOLwise
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {section.formTitle}
                        </h3>
                      </div>

                      <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20 sm:flex">
                        <Send className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="grid gap-5">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-cyan-50">
                          {section.nameLabel}
                        </span>
                        <input
                          type="text"
                          className="rounded-2xl border border-cyan-200/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/[0.13] focus:ring-4 focus:ring-cyan-300/10"
                          placeholder={section.nameLabel}
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-cyan-50">
                          {section.emailLabel}
                        </span>
                        <input
                          type="email"
                          className="rounded-2xl border border-cyan-200/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/[0.13] focus:ring-4 focus:ring-cyan-300/10"
                          placeholder={section.emailLabel}
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-cyan-50">
                          {section.messageLabel}
                        </span>
                        <textarea
                          rows={5}
                          className="resize-none rounded-2xl border border-cyan-200/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/[0.13] focus:ring-4 focus:ring-cyan-300/10"
                          placeholder={section.messageLabel}
                        />
                      </label>

                      <Button href="#contact" className="w-full justify-center gap-2">
                        {section.buttonText}
                        <Send className="h-4 w-4" />
                      </Button>

                      {section.helperText && (
                        <p className="text-center text-sm leading-6 text-slate-400">
                          {section.helperText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}