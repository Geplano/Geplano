import { ABOUT_STATS } from "./about.types";
import { AboutStatCard } from "./AboutStatCard";

export function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-8 text-center scroll-reveal">
      {ABOUT_STATS.map((stat) => (
        <AboutStatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
