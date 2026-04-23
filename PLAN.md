# PLAN.md — ClinicOS Showcase Site

> Single-scroll portfolio site telling the ClinicOS build story.
> Deploys to **clinicos-story.vercel.app**. Source of truth for this repo.
> Read this before touching code. Structure mirrors the main project's `CLAUDE.md` on purpose.

---

## Quick context

A showcase, not a product page. It narrates ClinicOS from origin → problem → the eight-step clinic flow → screenshots per stage → stack → deploy story. No lead capture, no CTA, no future-roadmap reveal, no personal info. Tone: Linear / Vercel / Raycast.

## Stack (locked)

- **Framework:** Next.js 15 (App Router) · React 19 · TypeScript strict
- **Bundler:** Turbopack (`next dev --turbopack` / `next build --turbopack`)
- **Styling:** Tailwind v4 (via `@tailwindcss/postcss`)
- **Motion:** Framer Motion 12 · Lenis smooth scroll
- **Code blocks:** Shiki · `@shikijs/core`
- **Icons:** lucide-react · helpers `clsx` + `tailwind-merge` (via `lib/cn.ts`)
- **Long-form:** MDX (to add) for decisions / journey prose
- **Primitives:** a few motion patterns hand-ported from reactbits.dev — no runtime dep
- **Host:** Vercel (static export preferred; fall back to Node runtime only if a section needs it)

Do not change the stack without explicit approval.

## Content rules (hard)

1. No future todos — site shows where we are today, never what's next.
2. No personal info about the author — no photo, no bio, no LinkedIn as hero. GitHub links OK in footer.
3. Voice: mine (the assistant), approved by user. Never first-person "I" about the user.
4. No AI attribution in commits for this repo (no `Co-Authored-By: Claude …` trailer). Commits to the main `clinicos` repo keep the trailer as usual.
5. No secrets, no tokens, no `.env*` files — `.gitignore` enforces. Never paste a PAT into any file.
6. No memory / session-log / reference files in this repo. Those live in `~/.claude/projects/-home-ubuntu-clinicos/memory/` and stay there.
7. Indian-English copy, no emoji in product copy (emoji only allowed as section markers in README).

## Design tokens

| Token             | Value                                   | Use                                          |
|-------------------|-----------------------------------------|----------------------------------------------|
| `--ink`           | `#0F1115`                               | Primary text, display type                   |
| `--paper`         | `#FAFAF7`                               | Page background (warm off-white)             |
| `--paper-2`       | `#F2F1EC`                               | Elevated surfaces, cards                     |
| `--hairline`      | `rgba(15,17,21,0.08)`                   | 1px rules, borders                           |
| `--muted`         | `#6B6B6B`                               | Secondary text                               |
| `--pulse`         | `#2E6BE6`                               | Single muted accent (lifts the ClinicOS blue)|
| `--pulse-soft`    | `rgba(46,107,230,0.08)`                 | Accent washes                                |
| `--grain`         | SVG noise overlay @ 3% opacity          | Paper texture                                |
| Display font      | Instrument Serif or similar editorial   | Hero + section display                       |
| Body font         | Inter (variable)                        | Body + UI                                    |
| Mono              | JetBrains Mono or Geist Mono            | Numbers, code, versions                      |
| Motion            | Spring: `{ stiffness: 140, damping: 20 }` | Default everywhere. Never bouncy.          |
| Scroll easing     | Lenis `lerp: 0.1`                        | Global smooth scroll                         |

Hairline shimmer, sticky margin anchor letters (01 / 07 Linear-style), section transitions are `blur(6px) → 0` + `y: 16 → 0` on reveal. Conic-gradient rotating border on hover for CTA-ish buttons.

## Sitemap (single scroll, 7 sections)

| # | Section         | Purpose                                                                                                    |
|---|-----------------|------------------------------------------------------------------------------------------------------------|
| 01 | Hero           | Live `BrandLogo` beat · split-text headline "From token to receipt, in one quiet Saturday" · scroll cue · idle `MascotCosmo` |
| 02 | The problem    | 3-sentence Indian-clinic paper-chaos story · $0/month + 1GB VPS constraint as a quiet stat row             |
| 03 | The build      | Timeline chips — V001 schema → Auth → Queue/SSE → Billing → PDF → Prescription Workspace → Brand + Login. Hover reveals commit hash + date |
| 04 | Feature tour   | 8 screenshot panels, scroll-synced annotations, 1-line hook per shot                                       |
| 05 | Design system  | Swatches (click-to-copy) · type scale · live `BrandLogo` · live `MascotCosmo` · before/after login flip card |
| 06 | Under the hood | Architecture diagram (Render ↔ Supabase ↔ Vercel) · real-version stack marquee · 3 ADR-style decision cards (RLS multi-tenancy, OpenPDF native render, SSE live queue) |
| 07 | Footer         | GitHub links · built-with credit · no email capture, no CTA                                                |

Wireframes per section live in `WIREFRAMES.md`.

## Repo layout

```
clinicos-website/
├── PLAN.md               ← this file (read first)
├── WIREFRAMES.md         ← ASCII wireframes per section
├── README.md             ← public-facing, minimal, labels only
├── app/
│   ├── layout.tsx        ← root layout, fonts, SmoothScroll provider
│   ├── page.tsx          ← single-scroll composition (sections in order)
│   ├── globals.css       ← tokens, base layer, grain overlay
│   ├── components/       ← primitives (BrandLogo, MascotCosmo, Hairline, SectionShell, ShotFrame, SplitReveal, ColorSwatch, DecisionCard, SmoothScroll)
│   └── sections/         ← one file per section (Hero, Problem, Journey, FeatureTour, DesignSystem, UnderTheHood, Footer)
├── content/              ← typed data for section content (decisions, stack, timeline, tour)
├── lib/                  ← cn, format helpers
├── public/
│   └── shots/            ← 20 screenshots (01-…-20-…), AVIF preferred after optimize pass
└── scripts/              ← ingest/optimize helpers (future)
```

Rules: no `index.ts` barrel files. One component per file. Colocate data in `content/*.ts` as typed arrays, not JSON.

## Build order (milestones)

| M | Milestone                                    | Status      |
|---|----------------------------------------------|-------------|
| 0 | Repo scaffold, remote, plan                  | DONE        |
| 1 | Design tokens in globals.css + fonts loaded  | IN PROGRESS |
| 2 | Primitives finalized (BrandLogo / Cosmo / SectionShell / Hairline / ShotFrame / SplitReveal / ColorSwatch / DecisionCard / SmoothScroll) | IN PROGRESS |
| 3 | Section 01 Hero + Section 02 Problem shipped | TODO        |
| 4 | Section 03 Build timeline + Section 04 Feature Tour shell (no shots yet) | TODO  |
| 5 | Screenshot ingest pass (shots land in `/public/shots/`) | BLOCKED on user capture |
| 6 | Section 04 wired with real shots             | TODO        |
| 7 | Section 05 Design System                     | TODO        |
| 8 | Section 06 Under the Hood (ADR cards, arch, stack marquee) | TODO |
| 9 | Section 07 Footer + meta (OG image, favicon, sitemap) | TODO |
| 10 | Lighthouse pass — target 100 on all four    | TODO        |
| 11 | Vercel deploy + domain promote to clinicos-story.vercel.app | TODO |

## Screenshot inventory (20 shots)

Captured at 1440×900, dev-tools closed, on real demo data. Raw shots land in a local-only ingest folder that is `.gitignore`d; only the approved AVIFs make it to `/public/shots/` in this repo.

| # | Filename                      | What it shows                                                 |
|---|-------------------------------|---------------------------------------------------------------|
| 01 | 01-login-desktop.png         | Full login split-pane + ID badge + tenant chip                |
| 02 | 02-login-mobile.png          | Login at ~390px width                                         |
| 03 | 03-sidebar-brand.png         | Sidebar crop — BrandLogo header + Cosmo tile                  |
| 04 | 04-reception-dashboard.png   | Reception landing, today's stats populated                    |
| 05 | 05-patient-list.png          | Patient list with search + pagination                         |
| 06 | 06-patient-register.png      | Blank registration form                                       |
| 07 | 07-patient-detail.png        | Rajesh Kumar detail — 3-visit history                         |
| 08 | 08-issue-token-empty.png     | Issue Token with input focused, Recent patients dropdown      |
| 09 | 09-issue-token-selected.png  | Same page with patient picked + priority + follow-up          |
| 10 | 10-queue-reception.png       | Reception queue with 8 tokens across states                   |
| 11 | 11-queue-doctor-twopane.png  | Doctor queue two-pane, Divya selected, vitals + history       |
| 12 | 12-queue-tv-display.png      | /display TV mode, big tokens                                  |
| 13 | 13-workspace-empty.png       | Fresh workspace on Karthik — editable vitals, empty meds      |
| 14 | 14-workspace-active.png      | Divya workspace — vitals filled + 2 meds + diagnosis + preview|
| 15 | 15-workspace-finalized.png   | Meera finalized Rx, Rx# badge visible                         |
| 16 | 16-prescription-pdf.png      | PDF tab, A5 view                                              |
| 17 | 17-billing-pending.png       | Billing queue — Arjun pending, Meera paid                     |
| 18 | 18-billing-receipt.png       | Receipt view after paying                                     |
| 19 | 19-admin-dashboard.png       | Admin dashboard — stats, revenue bar, staff tiles             |
| 20 | 20-admin-users.png           | Manage users roster                                           |

Ingest rule: keep the numeric prefix — the section renderer sorts by filename.

## Commit conventions (this repo only)

- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `ci:`
- Subject ≤ 70 chars
- Body describes the *why* — present tense, no trailing co-author line
- Author identity must be the repo owner (verify `git config user.name` + `user.email` locally before committing)
- Do **not** add `Co-Authored-By: …` AI-attribution trailers for commits in this repo. The main `clinicos` repo retains them as usual.
- Branch: work on `main` directly until the site is live, then switch to short feature branches for tweaks.

## Deployment

- Vercel project name: `clinicos-story`
- Framework preset: Next.js
- Build command: `next build --turbopack` (default from `package.json`)
- Output: static where possible; `output: 'export'` only if no server-only APIs end up needed
- Domain: `clinicos-story.vercel.app` (promote after first green deploy)
- No env vars required for MVP. If we add analytics later, use Vercel Analytics (no third-party scripts)

## When confused

Re-read this file, then `WIREFRAMES.md`, then peek at the ClinicOS app at `/home/ubuntu/clinicos/` for brand components. Do not guess on design tokens — copy them from here verbatim.
