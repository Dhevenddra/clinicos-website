import type { Decision } from "@/content/decisions";
import { cn } from "@/lib/cn";

export default function DecisionCard({ d, className }: { d: Decision; className?: string }) {
  return (
    <article className={cn("card-soft shine-border p-6 md:p-7", className)}>
      <header className="flex items-baseline justify-between gap-4 mb-4">
        <h3 className="h-display text-xl md:text-2xl">{d.title}</h3>
        <span className="eyebrow">ADR</span>
      </header>
      <dl className="space-y-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        <div>
          <dt className="eyebrow mb-1">Context</dt>
          <dd>{d.context}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Decision</dt>
          <dd>{d.decision}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Consequence</dt>
          <dd>{d.consequence}</dd>
        </div>
      </dl>
    </article>
  );
}
