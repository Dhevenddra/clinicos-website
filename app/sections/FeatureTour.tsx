import SectionShell from "../components/SectionShell";
import SplitReveal from "../components/SplitReveal";
import ShotFrame from "../components/ShotFrame";
import { tour } from "@/content/tour";
import { cn } from "@/lib/cn";

export default function FeatureTour() {
  return (
    <SectionShell
      id="tour"
      number="04"
      eyebrow="The product"
      title={
        <>
          What the clinic actually sees.
        </>
      }
    >
      <div className="space-y-24 md:space-y-32">
        {tour.map((shot) => (
          <div
            key={shot.n}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
            )}
          >
            <div className={cn(
              "lg:col-span-5",
              shot.side === "right" ? "lg:order-2" : "lg:order-1",
            )}>
              <SplitReveal>
                <div className="eyebrow mb-3">Frame {shot.n}</div>
                <h3 className="h-display text-2xl md:text-3xl mb-4">{shot.title}</h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-[44ch]">
                  {shot.caption}
                </p>
              </SplitReveal>
            </div>
            <div className={cn(
              "lg:col-span-7",
              shot.side === "right" ? "lg:order-1" : "lg:order-2",
            )}>
              <ShotFrame
                src={shot.src}
                alt={shot.title}
                caption={`clinicos · frame ${shot.n}`}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
