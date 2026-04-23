"use client";

import { motion } from "framer-motion";
import BrandLogo from "../components/BrandLogo";
import Hairline from "../components/Hairline";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col">
      {/* Top nav */}
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-10 flex items-center justify-between">
        <BrandLogo size={28} withWordmark />
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--color-ink-mute)]">
          <a href="#problem" className="hover:text-[var(--color-ink)] transition">Problem</a>
          <a href="#journey" className="hover:text-[var(--color-ink)] transition">Journey</a>
          <a href="#tour" className="hover:text-[var(--color-ink)] transition">Tour</a>
          <a href="#system" className="hover:text-[var(--color-ink)] transition">Design</a>
          <a href="#hood" className="hover:text-[var(--color-ink)] transition">Under the hood</a>
        </nav>
        <a
          href="https://github.com/Dhevenddra"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition"
        >
          github ↗
        </a>
      </div>

      {/* Hero body */}
      <div className="flex-1 flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow mb-6">A side project · 2025 → 2026</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-display text-[var(--text-hero)] max-w-[18ch]"
          >
            A clinic,
            <br />
            rewritten from
            <br />
            the <span className="text-[var(--color-accent)]">schema up</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-[56ch] text-lg text-[var(--color-ink-soft)] leading-relaxed"
          >
            ClinicOS is a multi-tenant clinic management system for small Indian
            practices — built solo, one migration and one screen at a time. This page
            is the build log: the constraints, the trade-offs, and what finally
            shipped.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center gap-3 text-xs font-mono text-[var(--color-ink-mute)]"
          >
            <ArrowDown className="w-3.5 h-3.5" />
            <span>scroll</span>
          </motion.div>
        </div>
      </div>

      <Hairline />
    </section>
  );
}
