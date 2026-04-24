import Hairline from "../components/Hairline";
import BrandLogo from "../components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative">
      <Hairline />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <BrandLogo size={28} withWordmark />

          <p className="text-sm text-[var(--color-ink-soft)] max-w-[42ch] leading-relaxed">
            ClinicOS — a weekend thing, built carefully. The story stops here; the
            code keeps going.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/Dhevenddra/clinicos"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition"
            >
              github · clinicos ↗
            </a>
            <a
              href="https://github.com/Dhevenddra/clinicos-website"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[var(--color-ink-mute)] hover:text-[var(--color-accent)] transition"
            >
              github · this site ↗
            </a>
          </div>

          <div className="pt-6 mt-4 border-t border-[var(--color-hairline-lg)] w-full max-w-[42rem] text-xs font-mono text-[var(--color-ink-mute)] space-y-1.5">
            <div>
              Built with <span className="text-[var(--color-ink-soft)]">Next.js</span> ·{" "}
              <span className="text-[var(--color-ink-soft)]">Tailwind v4</span> ·{" "}
              <span className="text-[var(--color-ink-soft)]">Framer Motion</span> ·{" "}
              <span className="text-[var(--color-ink-soft)]">Lenis</span> ·{" "}
              <span className="text-[var(--color-ink-soft)]">Shiki</span>
            </div>
            <div>© 2026 · clinicos-story.vercel.app</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
