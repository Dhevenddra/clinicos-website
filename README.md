# clinicos-website

> The story of **ClinicOS** — origin, build, stack, and screenshots. Single-scroll.
> Lives at **[clinicos-story.vercel.app](https://clinicos-story.vercel.app)**.

---

### &nbsp;&nbsp;What it is

A portfolio showcase for ClinicOS, a multi-tenant clinic management system for small Indian clinics. This site is the build log — the constraints, the trade-offs, and what finally shipped. **Not a product marketing page.** No lead capture, no CTA, no roadmap reveal.

### &nbsp;&nbsp;Tour

Seven sections, in order:

1. **Hero** — opening beat, with a live heartbeat brand mark
2. **Problem** — why small Indian clinics need this
3. **Build** — session-by-session timeline
4. **Feature tour** — eighteen screenshots, grouped by role (sign in · reception · queue · doctor · billing · admin)
5. **Design system** — swatches, type scale, live components
6. **Under the hood** — architecture, stack marquee, five ADR decision cards
7. **Footer** — links and tech stack

Layout slots locked in [`WIREFRAMES.md`](./WIREFRAMES.md). Full plan in [`PLAN.md`](./PLAN.md).

### &nbsp;&nbsp;Stack (this site)

![Next.js](https://img.shields.io/badge/Next.js-15-0F1115?style=flat-square&labelColor=0F1115)
![React](https://img.shields.io/badge/React-19-0F1115?style=flat-square&labelColor=0F1115)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-0F1115?style=flat-square&labelColor=0F1115)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-0F1115?style=flat-square&labelColor=0F1115)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0F1115?style=flat-square&labelColor=0F1115)
![Lenis](https://img.shields.io/badge/Lenis-smooth_scroll-0F1115?style=flat-square&labelColor=0F1115)
![Shiki](https://img.shields.io/badge/Shiki-syntax-0F1115?style=flat-square&labelColor=0F1115)
![Turbopack](https://img.shields.io/badge/Turbopack-dev_+_build-0F1115?style=flat-square&labelColor=0F1115)

### &nbsp;&nbsp;Stack (ClinicOS itself)

**Backend** · Java 21 · Spring Boot 3.3 · Hibernate 6 · Flyway · MapStruct · OpenPDF 2
**Frontend** · React 18 · Vite 5 · TanStack Query 5 · Zustand · Tailwind 3.4 · Framer Motion
**Data** · PostgreSQL 16 · Row-Level Security · Supabase (Postgres + Storage)
**Infra** · Render (backend Docker) · Vercel (frontend CDN)
**Auth** · JWT (15 min access) + Refresh cookie (7 d, HttpOnly, Secure, SameSite=Strict)

### &nbsp;&nbsp;Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

### &nbsp;&nbsp;Repo layout

```
app/
  ├─ layout.tsx        root layout, fonts, smooth-scroll provider
  ├─ page.tsx          single-scroll composition
  ├─ globals.css       design tokens, grain, hairlines, press feedback
  ├─ components/       BrandLogo, MascotCosmo, ShotFrame, SectionShell, ...
  └─ sections/         Hero, Problem, Journey, FeatureTour, DesignSystem, UnderTheHood, Footer
content/               typed section data (timeline, tour, decisions, stack)
lib/cn.ts              tailwind-merge helper
public/shots/          18 product screenshots (numbered 01–19, gaps at 15 + 20)
```

No `index.ts` barrels. One component per file. Content colocated in `content/*.ts` as typed arrays.

### &nbsp;&nbsp;Design tokens

Warm paper neutrals (`#FAFAF7` base, `#0F1115` ink), a single muted accent (`#2563EB`), grain overlay at 3.5% opacity, 1px hairlines with a slow shimmer, custom cubic-bezier easing (never bouncy, never `ease-in` on UI). Full token table in [`PLAN.md`](./PLAN.md#design-tokens).

### &nbsp;&nbsp;Deploy

Vercel, static export where possible. One environment, no secrets.

### &nbsp;&nbsp;Built by

[github.com/Dhevenddra](https://github.com/Dhevenddra) · [linkedin.com/in/dhevenddra](https://www.linkedin.com/in/dhevenddra/)

The app itself: [github.com/Dhevenddra/clinicos](https://github.com/Dhevenddra/clinicos)

---

_A weekend-and-evenings project. Built carefully._
