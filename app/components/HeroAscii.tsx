"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Digit-rain ASCII rendering of the Pulse-C brand mark.
 *
 * The grid is sized COLS × ROWS. For each cell we evaluate the signed
 * distance to the C ring and pick a digit by density:
 *   - deep inside the ring      → dense digits (7, 8, 9)
 *   - near the ring edge        → mid digits (3, 4, 5, 6)
 *   - outside                   → sparse digits (0, 1, 2) with dropouts
 *   - the heartbeat dot         → solid pack of 8/9s
 *
 * A small fraction of cells re-rolls each frame to simulate a living terminal.
 * Respects prefers-reduced-motion by freezing the grid.
 */

const COLS = 72;
const ROWS = 28;

// Geometry in grid coordinates. The brand mark lives in a 32×32 box;
// we map that onto the center of the grid.
const CX = COLS / 2;      // horizontal centre
const CY = ROWS / 2;      // vertical centre
const RX_OUT = 13;        // outer radius (cols)
const RX_IN  = 9;         // inner radius (cols)
const RY_SCALE = 0.55;    // vertical squash so the C isn't too tall at 2:1 char aspect
const CUT_ANGLE = Math.PI / 3.4; // opening on the right, ~±53°

// Heartbeat dot in grid coords (top-right of the C, where BrandLogo draws its dot).
const DOT_X = CX + RX_OUT * Math.cos(-CUT_ANGLE);
const DOT_Y = CY + RX_OUT * Math.sin(-CUT_ANGLE) * RY_SCALE;
const DOT_R = 2.2;

type Band = "deep" | "near" | "edge" | "dot" | "outside";

const digits = {
  deep:    ["7", "8", "9", "6", "8"],
  near:    ["3", "4", "5", "6"],
  edge:    ["2", "3", "4"],
  dot:     ["8", "9", "0"],
  outside: ["0", "1", "2", " ", " ", " ", " "],
};

function classify(col: number, row: number): Band {
  const dx = col - CX;
  const dy = (row - CY) / RY_SCALE;
  const d = Math.sqrt(dx * dx + dy * dy);
  const a = Math.atan2(dy, dx); // 0 = east, ±π = west

  // Heartbeat dot
  const ddx = col - DOT_X;
  const ddy = (row - DOT_Y) / RY_SCALE;
  const dotD = Math.sqrt(ddx * ddx + ddy * ddy);
  if (dotD < DOT_R) return "dot";

  // Right-side opening: if angle falls within the cut, treat as outside.
  const inCut = a > -CUT_ANGLE && a < CUT_ANGLE;

  if (!inCut && d < RX_IN - 1) return "outside";     // interior hole
  if (!inCut && d < RX_IN) return "edge";            // inner rim
  if (!inCut && d <= RX_OUT - 1.2) return "deep";    // main ring body
  if (!inCut && d <= RX_OUT) return "near";          // outer rim
  if (!inCut && d <= RX_OUT + 1.2) return "edge";    // soft halo
  return "outside";
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildGrid(): { char: string; band: Band }[][] {
  const grid: { char: string; band: Band }[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: { char: string; band: Band }[] = [];
    for (let c = 0; c < COLS; c++) {
      const band = classify(c, r);
      row.push({ char: pick(digits[band]), band });
    }
    grid.push(row);
  }
  return grid;
}

export default function HeroAscii({ className = "" }: { className?: string }) {
  const [grid, setGrid] = useState(() => buildGrid());
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Initial paint
  const initial = useMemo(() => buildGrid(), []);
  useEffect(() => setGrid(initial), [initial]);

  // Detect reduced-motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Shimmer loop — re-roll ~1.2% of cells every frame (~60fps).
  useEffect(() => {
    if (reduceMotion) return;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      // Throttle to ~18fps so the noise feels terminal-ish, not chaotic.
      if (dt > 55) {
        last = now;
        setGrid((prev) => {
          const next = prev.map((row) => row.slice());
          const cells = Math.floor(COLS * ROWS * 0.012);
          for (let i = 0; i < cells; i++) {
            const r = Math.floor(Math.random() * ROWS);
            const c = Math.floor(Math.random() * COLS);
            const cell = next[r][c];
            next[r][c] = { ...cell, char: pick(digits[cell.band]) };
          }
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  return (
    <div
      className={`hero-ascii relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/25 ${className}`}
      aria-hidden="true"
    >
      {/* Blue field + vignette */}
      <div className="absolute inset-0 hero-ascii__field" />
      <div className="absolute inset-0 hero-ascii__vignette" />

      {/* Grid */}
      <pre
        className="relative z-10 font-mono select-none m-0 p-5 md:p-7 text-[clamp(8px,0.95vw,11px)] leading-[1.05] tracking-tight"
        style={{ color: "rgba(219, 234, 254, 0.85)" }}
      >
        {grid.map((row, r) => (
          <div key={r} className="whitespace-pre">
            {row.map((cell, c) => {
              const tone =
                cell.band === "dot"
                  ? "ascii-dot"
                  : cell.band === "deep"
                  ? "ascii-deep"
                  : cell.band === "near"
                  ? "ascii-near"
                  : cell.band === "edge"
                  ? "ascii-edge"
                  : "ascii-outside";
              return (
                <span key={c} className={tone}>
                  {cell.char}
                </span>
              );
            })}
          </div>
        ))}
      </pre>

      {/* Caption */}
      <div className="absolute left-5 bottom-4 z-10 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white/55">
        <span className="inline-block w-1 h-1 rounded-full bg-white/70 ascii-heartbeat" />
        <span>pulse-c · 62 bpm</span>
      </div>

      <style>{`
        .hero-ascii__field {
          background:
            radial-gradient(120% 90% at 30% 20%, rgba(59, 130, 246, 0.55), transparent 60%),
            linear-gradient(180deg, #1D4ED8 0%, #1E40AF 100%);
        }
        .hero-ascii__vignette {
          background: radial-gradient(80% 60% at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.35) 100%);
          mix-blend-mode: multiply;
        }
        .ascii-deep    { color: rgba(255, 255, 255, 0.96); }
        .ascii-near    { color: rgba(219, 234, 254, 0.82); }
        .ascii-edge    { color: rgba(191, 219, 254, 0.6);  }
        .ascii-outside { color: rgba(147, 197, 253, 0.28); }
        .ascii-dot     { color: #ffffff; text-shadow: 0 0 6px rgba(255,255,255,0.85); }
        .ascii-heartbeat {
          animation: ascii-beat 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes ascii-beat {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          15%      { transform: scale(2.2); opacity: 1;   }
          30%      { transform: scale(1);   opacity: 0.9; }
          45%      { transform: scale(1.7); opacity: 1;   }
          60%      { transform: scale(1);   opacity: 0.8; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ascii-heartbeat { animation: none; }
        }
      `}</style>
    </div>
  );
}
