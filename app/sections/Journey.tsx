"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionShell from "../components/SectionShell";
import { timeline, type Milestone } from "@/content/timeline";
import { cn } from "@/lib/cn";

const tagTone: Record<Milestone["tag"], string> = {
  foundation: "text-[var(--color-accent)]",
  feature:    "text-[var(--color-ink)]",
  polish:     "text-[var(--color-ink-mute)]",
  ops:        "text-[var(--color-accent-ink)]",
};

function MilestoneRow({ m, i }: { m: Milestone; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="grid grid-cols-12 gap-6 py-8 border-b border-[var(--color-hairline-lg)] last:border-b-0"
    >
      <div className="col-span-2 num text-xs text-[var(--color-ink-mute)] pt-1">
        {m.session}
      </div>
      <div className="col-span-2 eyebrow pt-1.5">{m.date}</div>
      <div className="col-span-8">
        <div className="flex items-center gap-3 mb-1.5">
          <h3 className="h-display text-lg md:text-xl">{m.title}</h3>
          <span className={cn("text-[10px] font-mono uppercase tracking-widest", tagTone[m.tag])}>
            · {m.tag}
          </span>
        </div>
        <p className="text-sm md:text-base text-[var(--color-ink-soft)] leading-relaxed max-w-[62ch]">
          {m.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <SectionShell
      id="journey"
      number="03"
      eyebrow="How it got built"
      title={
        <>
          Twelve sessions.
          <br />
          <span className="text-[var(--color-ink-mute)]">One module at a time, schema first.</span>
        </>
      }
    >
      <div>
        {timeline.map((m, i) => (
          <MilestoneRow key={m.session} m={m} i={i} />
        ))}
      </div>
    </SectionShell>
  );
}
