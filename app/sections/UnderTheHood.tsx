"use client";

import SectionShell from "../components/SectionShell";
import SplitReveal from "../components/SplitReveal";
import DecisionCard from "../components/DecisionCard";
import { decisions } from "@/content/decisions";
import { stack } from "@/content/stack";
import { ArrowRight, Cloud, Database, Server } from "lucide-react";

export default function UnderTheHood() {
  // Duplicate stack list for a seamless marquee loop.
  const track = [...stack, ...stack];

  return (
    <SectionShell
      id="hood"
      number="06"
      eyebrow="What it runs on"
      title={
        <>
          Three boxes,
          <br />
          <span className="text-[var(--color-ink-mute)]">one migration at a time.</span>
        </>
      }
    >
      {/* Architecture */}
      <SplitReveal>
        <div className="eyebrow mb-4">Architecture</div>
        <div className="card-soft p-6 md:p-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center">
            <ArchBox
              icon={<Cloud className="w-4 h-4" />}
              label="Vercel"
              sub="Edge CDN · React 18 · Vite build"
            />
            <ArrowRight className="hidden md:block w-5 h-5 mx-auto text-[var(--color-ink-mute)]" />
            <ArchBox
              icon={<Server className="w-4 h-4" />}
              label="Render"
              sub="Spring Boot 3.3 · Docker · Asia-south"
              highlight
            />
            <ArrowRight className="hidden md:block w-5 h-5 mx-auto text-[var(--color-ink-mute)]" />
            <ArchBox
              icon={<Database className="w-4 h-4" />}
              label="Supabase"
              sub="Postgres 16 · RLS · Storage"
            />
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--color-hairline-lg)] grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono text-[var(--color-ink-mute)]">
            <Stat n="$0" l="monthly hosting" />
            <Stat n="1 GB" l="prod RAM" />
            <Stat n="21" l="Flyway migrations" />
            <Stat n=" < 300ms" l="SSE queue update" />
          </div>
        </div>
      </SplitReveal>

      {/* Stack marquee */}
      <SplitReveal delay={0.1}>
        <div className="eyebrow mb-4">Stack · real versions</div>
        <div className="marquee overflow-hidden py-4 mb-16 border-y border-[var(--color-hairline-lg)]">
          <div className="marquee-track flex gap-10 whitespace-nowrap" style={{ width: "200%" }}>
            {track.map((s, i) => (
              <span
                key={`${s.name}-${i}`}
                className="inline-flex items-baseline gap-2 text-sm text-[var(--color-ink-soft)]"
              >
                <span className="font-mono">{s.name}</span>
                <span className="text-[var(--color-ink-mute)]">·</span>
              </span>
            ))}
          </div>
        </div>
      </SplitReveal>

      {/* Decisions */}
      <SplitReveal delay={0.2}>
        <div className="eyebrow mb-4">Decisions · five that shaped the build</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {decisions.map((d) => (
            <DecisionCard key={d.id} d={d} />
          ))}
        </div>
      </SplitReveal>
    </SectionShell>
  );
}

function ArchBox({
  icon,
  label,
  sub,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 text-center transition-colors ${
        highlight
          ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]/30"
          : "bg-white/70 border-[var(--color-hairline)]"
      }`}
    >
      <div className="flex items-center justify-center gap-2 mb-2 text-[var(--color-ink-mute)]">
        {icon}
        <span className="eyebrow">{label}</span>
      </div>
      <div className="h-display text-base md:text-lg">{label}</div>
      <div className="mt-1 text-xs font-mono text-[var(--color-ink-mute)]">{sub}</div>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="num text-[var(--color-ink)] text-sm">{n}</span>
      <span className="uppercase tracking-widest text-[10px]">{l}</span>
    </div>
  );
}
