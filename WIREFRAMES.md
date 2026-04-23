# WIREFRAMES.md — ClinicOS Showcase Site

> Low-fidelity wireframes for each of the 7 sections. These lock layout + content slots. Read alongside `PLAN.md`.
> Units: `█` filled block · `░` muted surface · `─│┌┐└┘` 1px hairline · numbers in `[ ]` are shot indices from `/public/shots/`.

---

## 01 · Hero

Full viewport. Paper background with grain overlay. Anchor letter `01` sticky in the left margin.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 01   ClinicOS                                          [github] [source]     │  ← thin nav, 64px
│                                                                              │
│                                                                              │
│                                                                              │
│               ♥  <-- live BrandLogo, lub-dub beat 62 bpm                     │
│                                                                              │
│           From token to receipt,                                             │
│           in one quiet Saturday.         <-- split-text reveal on mount      │
│                                                                              │
│           A clinic management system built end-to-end for small              │
│           Indian practices. Reception, doctor, billing, admin —              │
│           one tab, one Postgres, zero per-seat fees.                         │
│                                                                              │
│                                                                              │
│                                                        ╭──────╮              │
│                                                        │Cosmo │ <-- idle bob │
│                                                        ╰──────╯              │
│                                                                              │
│                                ↓  scroll                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Headline: Instrument Serif (display), 96/104 on desktop, 56/60 on mobile.
- Sub-copy: Inter 18/28, `--muted`.
- Scroll cue is a 1px vertical hairline that shrinks/lengthens on a 3.2s loop.
- Nav `github` link opens `github.com/Dhevenddra/clinicos`, `source` links `github.com/Dhevenddra/clinicos-website`.

---

## 02 · The problem

Calm, editorial. One column on desktop, stat row anchored bottom.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 02   The problem                                                             │
│ ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│     A paper register, a printed token pad, and a billing book that           │
│     never quite balances. Small Indian clinics run on handwriting            │
│     that nobody can read by 7pm, and on memory that nobody should            │
│     have to keep.                                                            │
│                                                                              │
│     ClinicOS replaces the paper — not the people — and does it on            │
│     a 1 GB VPS with a free Supabase row and a Vercel CDN tier.               │
│                                                                              │
│                                                                              │
│  ┌──────────────┬──────────────┬──────────────┬──────────────┐               │
│  │ $0 / month   │ 1 GB RAM     │ 2 vCPUs      │ 1 developer  │               │
│  │ hosting      │ production   │ shared       │ (+ an agent) │               │
│  └──────────────┴──────────────┴──────────────┴──────────────┘               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Prose: Instrument Serif 28/40, measure ~62ch, centered.
- Stat cells: mono numerals, 1px hairline grid.

---

## 03 · The build (timeline)

Horizontal timeline, reads left → right, chips stick when scrolled past.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 03   The build                                                               │
│ ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│   ● ────── ● ────── ● ────── ● ────── ● ────── ● ────── ●                    │
│   │        │        │        │        │        │        │                   │
│  V001    Auth     Queue    Billing   PDF      Rx        Brand                │
│  schema  JWT      SSE      receipts  render   Workspace  + Login             │
│                                                                              │
│   ← hover any chip → reveals ──────────────────────────────                 │
│   ┌──────────────────────────────────────────────────┐                       │
│   │  feat(module-10c): live prescription workspace   │                       │
│   │  cddeebf · 2026-04-17 · 12 files, +842 / -203    │                       │
│   │  Two-pane compose → live PDF preview, auto-save. │                       │
│   └──────────────────────────────────────────────────┘                       │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- 7 chips total. Data source: `content/timeline.ts` (commit hash, date, 1-line blurb).
- Dots pulse softly (opacity loop) when they enter viewport.
- Hover popover anchors below the chip; on touch devices, tap toggles.

---

## 04 · Feature tour

Sticky-side, scrolling-right pattern. Left side = annotation, right side = screenshot. Scroll advances both in lockstep.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 04   Feature tour                                                            │
│ ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  ┌─────────────────────────┐   ┌──────────────────────────────────────────┐  │
│  │ Login                   │   │                                          │  │
│  │ Tenant-aware, split     │   │                                          │  │
│  │ pane, one password for  │   │              [ shot 01 ]                 │  │
│  │ reception / doctor /    │   │            1440×900 frame                │  │
│  │ admin. Clinic chip +    │   │                                          │  │
│  │ app version bottom.     │   │                                          │  │
│  │                         │   │                                          │  │
│  │ 01 / 08 →               │   └──────────────────────────────────────────┘  │
│  └─────────────────────────┘                                                 │
│                                                                              │
│  ┌─────────────────────────┐   ┌──────────────────────────────────────────┐  │
│  │ Reception dashboard     │   │              [ shot 04 ]                 │  │
│  │ Today's tokens, waits,  │   │                                          │  │
│  │ collection at a glance. │   │                                          │  │
│  │ 02 / 08 →               │   │                                          │  │
│  └─────────────────────────┘   └──────────────────────────────────────────┘  │
│                                                                              │
│   ... 8 panels total, grouped by role:                                       │
│     Login · Reception · Queue · Doctor workspace · Billing · Admin           │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Frame: 1px hairline + 12px inner padding + subtle inner shadow. ShotFrame component enforces aspect.
- Panels 8 total; each panel can reference 1–3 shots. Data in `content/tour.ts`.
- On mobile: stacks vertically, image first then copy.

---

## 05 · Design system

Gallery of the real brand surfaces. Everything is live, not a screenshot.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 05   Design system                                                           │
│ ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Colors  (click to copy hex)                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                             │
│  │ ink │ │paper│ │pap-2│ │pulse│ │muted│ │hair │                             │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                             │
│                                                                              │
│  Type scale                                                                  │
│  ─────────────────────────────────────────                                   │
│  Display  96/104   Instrument Serif                                          │
│  H1       56/60    Instrument Serif                                          │
│  H2       32/40    Inter  600                                                │
│  Body     18/28    Inter  400                                                │
│  Mono     14/22    Geist Mono                                                │
│                                                                              │
│  Brand                                                                       │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                  │
│  │  <live BrandLogo>       │    │   <live MascotCosmo>    │                  │
│  │  beating heart          │    │   blinks every 4–9s     │                  │
│  └─────────────────────────┘    └─────────────────────────┘                  │
│                                                                              │
│  Login, before → after                                                       │
│  ┌──────────────┬──────────────┐                                             │
│  │   [ before ] │   [ after ]  │ <-- flip on hover                           │
│  └──────────────┴──────────────┘                                             │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Swatch click copies hex + triggers a short toast.
- BrandLogo and MascotCosmo are hand-ported into `app/components/` for this repo, matching the app's SVG exactly.

---

## 06 · Under the hood

Three stacked ideas: architecture sketch, real-version stack marquee, ADR decision cards.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 06   Under the hood                                                          │
│ ───────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Architecture                                                                │
│  ┌────────────┐         ┌────────────┐         ┌────────────┐                │
│  │  Vercel    │ ──HTTPS│  Render    │ ──SQL──│  Supabase  │                │
│  │  CDN / UI  │◀───────│  Spring    │◀──RLS──│  Postgres  │                │
│  └────────────┘         └────────────┘         └────────────┘                │
│                                                                              │
│  Stack (real versions, marquee)                                              │
│  ─ java 21 · spring boot 3.3 · react 18 · postgres 16 · flyway · supabase ─  │
│                                                                              │
│  Decisions (3 cards)                                                         │
│  ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐  │
│  │ RLS for multi-tenant │ │ OpenPDF native render│ │ SSE for live queue   │  │
│  │                      │ │                      │ │                      │  │
│  │ Why, how, tradeoffs. │ │ Why, how, tradeoffs. │ │ Why, how, tradeoffs. │  │
│  │ ```sql snippet```    │ │ ```java snippet```   │ │ ```java snippet```   │  │
│  └──────────────────────┘ └──────────────────────┘ └──────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Architecture boxes: 1px hairline + 12px radius + `--paper-2` fill. Lines animate in on scroll.
- Marquee: continuous scroll, pauses on hover, separator dots in `--muted`.
- Cards use Shiki for the code block; languages `sql` and `java`. Code lines animate reveal bottom→top.

---

## 07 · Footer

Minimal. A signature.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ─────────────────────────────────────────────────────────────────────────    │
│                                                                              │
│   ClinicOS · a weekend thing, built carefully.                               │
│                                                                              │
│   [ github: clinicos ]   [ github: clinicos-website ]                        │
│                                                                              │
│   Built with Next.js, Tailwind, Framer Motion, Lenis, Shiki.                 │
│   © 2026                                                                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- No email capture, no newsletter, no CTA. Three lines, centered. `© 2026` in mono.

---

## Global behavior

- **Scroll** — Lenis with `lerp: 0.1`. Respect `prefers-reduced-motion`: disable smooth scroll, disable heartbeat/blink on BrandLogo + Cosmo, keep opacity reveals.
- **Reveals** — `blur(6px) → 0` + `y: 16 → 0`, spring `{ stiffness: 140, damping: 20 }`, stagger 0.04s between siblings.
- **Hairlines** — every section starts with a 1px top rule in `--hairline`, with a slow left→right shimmer (4s, ease-out) once per viewport entry.
- **Anchor letters** — sticky margin `01 / 02 …` in mono, `--muted`, fades to 20% opacity when next section overtakes it.
- **Nav** — persistent 64px top bar, `mix-blend-multiply` so it sits gracefully on paper background.
