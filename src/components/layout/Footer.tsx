import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    title: "Website",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Technology", href: "#technology" },
      { label: "Publications", href: "#publications" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Request Demo", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-slate-950"
            >
              MOLwise
            </Link>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              AI-powered molecular intelligence for modern scientific discovery.
              MOLwise is designed to support clearer, more scalable molecular
              analysis workflows.
            </p>

            <a
              href="mailto:contact@molwise.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-brand-dark transition hover:border-cyan-200 hover:bg-brand-soft"
            >
              <Mail className="h-4 w-4" />
              contact@molwise.com
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-950">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MOLwise. All rights reserved.</p>

          <p>
            Built as a modern scientific startup website with CMS-ready content.
          </p>
        </div>
      </Container>
    </footer>
  );
}