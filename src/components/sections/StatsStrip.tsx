import { stats } from "@/data/homepage";
import { Container } from "@/components/ui/Container";

export function StatsStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <Container>
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <p key={item} className="text-sm font-semibold text-slate-700">
              {item}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}