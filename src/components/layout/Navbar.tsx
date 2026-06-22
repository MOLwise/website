import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Technology", href: "#technology" },
  { label: "Publications", href: "#publications" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-950">
          MOLwise
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Request Demo</Button>
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}