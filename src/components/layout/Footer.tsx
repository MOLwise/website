import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-950">MOLwise</p>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            AI-powered molecular intelligence for modern scientific discovery.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 MOLwise. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}