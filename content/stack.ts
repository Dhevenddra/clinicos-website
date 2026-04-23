export type StackItem = {
  name: string;
  kind: "backend" | "frontend" | "data" | "infra" | "tooling";
  note: string;
};

export const stack: StackItem[] = [
  { name: "Java 21",            kind: "backend",  note: "Records, pattern matching, virtual threads where it pays." },
  { name: "Spring Boot 3.3",    kind: "backend",  note: "Security, Data JPA, Actuator. Nothing auto-magical beyond the essentials." },
  { name: "Hibernate 6",        kind: "backend",  note: "Explicit @Transactional boundaries, lazy loading owned by the service layer." },
  { name: "Flyway",             kind: "data",     note: "21 migrations, idempotent, no manual DB edits." },
  { name: "MapStruct",          kind: "backend",  note: "Entity ↔ DTO, no hand-written boilerplate." },
  { name: "OpenPDF 2",          kind: "backend",  note: "Prescription rendering with clinic letterhead overlay." },
  { name: "PostgreSQL 16",      kind: "data",     note: "Row-Level Security is the multi-tenant boundary." },
  { name: "Supabase",           kind: "infra",    note: "Managed Postgres + Storage + Auth-adjacent primitives." },
  { name: "React 18",           kind: "frontend", note: "Functional components only, hooks, no class code." },
  { name: "Vite 5",             kind: "frontend", note: "Dev feedback under 200ms. Production build stays below 300kb gzipped." },
  { name: "TanStack Query 5",   kind: "frontend", note: "Every API call. Zustand is only for auth state." },
  { name: "Tailwind 3.4",       kind: "frontend", note: "Utility-first, design tokens via CSS variables." },
  { name: "Framer Motion",      kind: "frontend", note: "Page transitions and section reveals, no decorative bounce." },
  { name: "Render",             kind: "infra",    note: "Backend Docker, one region." },
  { name: "Vercel",             kind: "infra",    note: "Frontend CDN, preview-per-commit." },
];
