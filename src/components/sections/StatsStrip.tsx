import { stats as fallbackStats } from "@/data/homepage";
import { Container } from "@/components/ui/Container";

type StatsStripProps = {
  stats?: string[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  const displayedStats = stats && stats.length > 0 ? stats : fallbackStats;

  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <Container>
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {displayedStats.map((item) => (
            <p key={item} className="text-sm font-semibold text-slate-700">
              {item}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}