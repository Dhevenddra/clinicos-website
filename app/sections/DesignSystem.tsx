"use client";

import { useState } from "react";
import SectionShell from "../components/SectionShell";
import SplitReveal from "../components/SplitReveal";
import BrandLogo from "../components/BrandLogo";
import MascotCosmo from "../components/MascotCosmo";
import { Check, Copy } from "lucide-react";

type Swatch = { name: string; token: string; value: string; onLight?: boolean };

const swatches: Swatch[] = [
  { name: "ink", token: "--color-ink", value: "#0F1115" },
  { name: "ink-soft", token: "--color-ink-soft", value: "#1F2228" },
  { name: "ink-mute", token: "--color-ink-mute", value: "#4A4F57" },
  { name: "paper", token: "--color-paper", value: "#FAFAF7", onLight: true },
  { name: "paper-alt", token: "--color-paper-alt", value: "#F2F1EC", onLight: true },
  { name: "accent", token: "--color-accent", value: "#2563EB" },
  { name: "accent-soft", token: "--color-accent-soft", value: "#DBEAFE", onLight: true },
  { name: "hairline", token: "--color-hairline", value: "#1F22281F", onLight: true },
];

const typeScale = [
  { role: "Hero",    px: "clamp(51→100)", font: "Manrope 600", sample: "Rewritten" },
  { role: "Display", px: "clamp(38→64)",  font: "Manrope 600", sample: "The build" },
  { role: "Section", px: "clamp(30→42)",  font: "Manrope 600", sample: "Under the hood" },
  { role: "Body",    px: "16–18",         font: "Inter 400",   sample: "A clinic, rewritten from the schema up." },
  { role: "Mono",    px: "12–14",         font: "JetBrains",   sample: "RX-DEMOCLI-2026-000003" },
];

export default function DesignSystem() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value);
      setTimeout(() => setCopied(null), 1200);
    });
  }

  return (
    <SectionShell
      id="system"
      number="05"
      eyebrow="The vocabulary"
      title={
        <>
          A small system,
          <br />
          <span className="text-[var(--color-ink-mute)]">carefully named.</span>
        </>
      }
    >
      {/* Colors */}
      <SplitReveal>
        <div className="eyebrow mb-4">Colors · click to copy</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {swatches.map((s) => {
            const isCopied = copied === s.value;
            return (
              <button
                key={s.name}
                onClick={() => copy(s.value)}
                className="group relative text-left rounded-xl overflow-hidden border border-[var(--color-hairline)] hover:border-[var(--color-accent)]/40 transition-colors"
                style={{ background: s.value }}
                aria-label={`Copy ${s.value}`}
              >
                <div className="aspect-[5/4]" />
                <div className={`absolute inset-x-0 bottom-0 px-3 py-2 text-xs font-mono flex items-center justify-between ${s.onLight ? "text-[var(--color-ink)]" : "text-white"}`}>
                  <div className="flex flex-col leading-tight">
                    <span className="opacity-70">{s.name}</span>
                    <span>{s.value}</span>
                  </div>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </SplitReveal>

      {/* Type scale */}
      <SplitReveal delay={0.1}>
        <div className="eyebrow mb-4">Type · three families</div>
        <div className="border-t border-[var(--color-hairline-lg)] mb-16">
          {typeScale.map((t) => (
            <div
              key={t.role}
              className="grid grid-cols-12 gap-4 py-5 border-b border-[var(--color-hairline-lg)] items-baseline"
            >
              <div className="col-span-2 eyebrow">{t.role}</div>
              <div className="col-span-2 text-xs font-mono text-[var(--color-ink-mute)]">{t.px}px</div>
              <div className="col-span-3 text-xs font-mono text-[var(--color-ink-mute)]">{t.font}</div>
              <div
                className={`col-span-5 truncate ${
                  t.role === "Hero" || t.role === "Display" || t.role === "Section"
                    ? "h-display"
                    : t.role === "Mono"
                    ? "font-mono"
                    : ""
                }`}
                style={
                  t.role === "Hero"
                    ? { fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }
                    : t.role === "Display"
                    ? { fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }
                    : t.role === "Section"
                    ? { fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }
                    : t.role === "Body"
                    ? { fontSize: "1.05rem" }
                    : { fontSize: "0.9rem" }
                }
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </SplitReveal>

      {/* Live brand */}
      <SplitReveal delay={0.2}>
        <div className="eyebrow mb-4">Brand · live components</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card-soft p-10 flex flex-col items-center justify-center gap-4 min-h-[240px]">
            <BrandLogo size={72} />
            <div className="eyebrow">Pulse-C · 62 bpm</div>
            <p className="text-sm text-[var(--color-ink-mute)] text-center max-w-[32ch]">
              A single SVG path. Beats once per second with a secondary echo ring. Respects{" "}
              <code className="font-mono text-[var(--color-ink)]">prefers-reduced-motion</code>.
            </p>
          </div>
          <div className="card-soft p-10 flex flex-col items-center justify-center gap-4 min-h-[240px]">
            <MascotCosmo size={88} />
            <div className="eyebrow">Cosmo · blinks every 4–9s</div>
            <p className="text-sm text-[var(--color-ink-mute)] text-center max-w-[32ch]">
              Hover to wiggle. The waiting-room face of the app — why this was built on a Saturday.
            </p>
          </div>
        </div>
      </SplitReveal>
    </SectionShell>
  );
}
