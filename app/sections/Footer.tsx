import Hairline from "../components/Hairline";
import BrandLogo from "../components/BrandLogo";

type Chip = { label: string; kind: "lang" | "fw" | "data" | "infra" | "tool" };

const stackChips: Chip[] = [
  { label: "Java 21",          kind: "lang"  },
  { label: "Spring Boot 3.3",  kind: "fw"    },
  { label: "Hibernate 6",      kind: "fw"    },
  { label: "Flyway",           kind: "data"  },
  { label: "OpenPDF",          kind: "tool"  },
  { label: "PostgreSQL 16",    kind: "data"  },
  { label: "Supabase",         kind: "infra" },
  { label: "React 18",         kind: "fw"    },
  { label: "Vite 5",           kind: "tool"  },
  { label: "Tailwind 3.4",     kind: "fw"    },
  { label: "TanStack Query",   kind: "fw"    },
  { label: "Framer Motion",    kind: "fw"    },
  { label: "Render",           kind: "infra" },
  { label: "Vercel",           kind: "infra" },
];

const siteChips: Chip[] = [
  { label: "Next.js 15",     kind: "fw"   },
  { label: "Tailwind v4",    kind: "fw"   },
  { label: "Framer Motion",  kind: "fw"   },
  { label: "Lenis",          kind: "tool" },
  { label: "Shiki",          kind: "tool" },
];

const kindStyles: Record<Chip["kind"], string> = {
  lang:  "text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]/50",
  fw:    "text-[var(--color-ink)] border-[var(--color-hairline)] bg-white/50",
  data:  "text-[var(--color-accent-ink)] border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)]/40",
  infra: "text-[var(--color-ink-soft)] border-[var(--color-hairline)] bg-[var(--color-paper-alt)]/70",
  tool:  "text-[var(--color-ink-mute)] border-[var(--color-hairline)] bg-white/40",
};

function ChipRow({ chips }: { chips: Chip[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {chips.map((c) => (
        <span
          key={c.label}
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-tight transition-colors ${kindStyles[c.kind]}`}
        >
          {c.label}
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      <Hairline />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <BrandLogo size={28} withWordmark />

          <p className="text-sm text-[var(--color-ink-soft)] max-w-[46ch] leading-relaxed">
            ClinicOS — a weekend thing, built carefully. The story stops here; the
            code keeps going.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/Dhevenddra/clinicos"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition-colors"
            >
              github · clinicos ↗
            </a>
            <a
              href="https://github.com/Dhevenddra/clinicos-website"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition-colors"
            >
              github · this site ↗
            </a>
            <a
              href="https://github.com/Dhevenddra"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition-colors"
            >
              github · profile ↗
            </a>
            <a
              href="https://www.linkedin.com/in/dhevenddra/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition-colors"
            >
              linkedin ↗
            </a>
          </div>

          {/* Tech stack chips — app */}
          <div className="w-full max-w-[56rem] pt-6 mt-2 border-t border-[var(--color-hairline-lg)] space-y-5">
            <div className="space-y-2">
              <div className="eyebrow">ClinicOS — built with</div>
              <ChipRow chips={stackChips} />
            </div>
            <div className="space-y-2">
              <div className="eyebrow">This site — built with</div>
              <ChipRow chips={siteChips} />
            </div>
          </div>

          <div className="text-xs font-mono text-[var(--color-ink-mute)] pt-2">
            © 2026 · clinicos-story.vercel.app
          </div>
        </div>
      </div>
    </footer>
  );
}
