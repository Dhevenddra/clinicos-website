import SectionShell from "../components/SectionShell";
import SplitReveal from "../components/SplitReveal";
import ShotFrame from "../components/ShotFrame";
import { tour } from "@/content/tour";
import { cn } from "@/lib/cn";

const groupLabel: Record<string, string> = {
  login: "Sign in",
  reception: "Reception",
  queue: "Queue",
  doctor: "Doctor",
  billing: "Billing",
  admin: "Admin",
};

export default function FeatureTour() {
  return (
    <SectionShell
      id="tour"
      number="04"
      eyebrow="The product"
      title={<>What the clinic actually sees.</>}
    >
      <div className="space-y-24 md:space-y-36">
        {tour.map((shot, i) => {
          const prev = i > 0 ? tour[i - 1].group : null;
          const showGroupHeader = shot.group !== prev;
          return (
            <div key={shot.n} className="relative">
              {showGroupHeader && (
                <SplitReveal className="mb-10">
                  <div className="flex items-center gap-4">
                    <div className="eyebrow">{groupLabel[shot.group]}</div>
                    <div className="flex-1 h-px bg-[var(--color-hairline-lg)]" />
                  </div>
                </SplitReveal>
              )}
              <div
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                )}
              >
                <div
                  className={cn(
                    "lg:col-span-5",
                    shot.side === "right" ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <SplitReveal>
                    <div className="eyebrow mb-3">Frame {shot.n}</div>
                    <h3 className="h-display text-2xl md:text-3xl mb-4 max-w-[22ch]">
                      {shot.title}
                    </h3>
                    <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-[44ch]">
                      {shot.caption}
                    </p>
                  </SplitReveal>
                </div>
                <div
                  className={cn(
                    "lg:col-span-7",
                    shot.side === "right" ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <ShotFrame
                    src={shot.src}
                    alt={shot.title}
                    width={shot.w}
                    height={shot.h}
                    caption={`clinicos · frame ${shot.n}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
