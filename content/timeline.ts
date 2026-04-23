export type Milestone = {
  session: string;
  date: string;
  title: string;
  body: string;
  tag: "foundation" | "feature" | "polish" | "ops";
};

export const timeline: Milestone[] = [
  {
    session: "S01",
    date: "Kick-off",
    title: "Schema first, then code",
    body: "12 tables, RLS policies, Flyway baseline. No endpoint was written until the data model was provably correct.",
    tag: "foundation",
  },
  {
    session: "S02",
    date: "Auth",
    title: "JWT + RLS tenant context",
    body: "Spring Security with a custom TenantContextFilter that extracts clinic_id from the JWT and sets the Postgres session variable before any query.",
    tag: "foundation",
  },
  {
    session: "S03",
    date: "Patient",
    title: "Registration + search",
    body: "Registration number generator (P-00001 per clinic), full-text search on name/phone, duplicate detection on phone.",
    tag: "feature",
  },
  {
    session: "S04",
    date: "Queue",
    title: "Tokens + live SSE",
    body: "One FIFO per doctor. State machine: WAITING → CALLED → IN_CONSULTATION → COMPLETED. Waiting-room TVs subscribe to SSE and update in under a second.",
    tag: "feature",
  },
  {
    session: "S05",
    date: "Rx",
    title: "Consultation + prescription",
    body: "Auto-save drafts every few seconds. Medicine autocomplete from a master list. Finalize cuts an Rx number from a DB sequence and renders a PDF.",
    tag: "feature",
  },
  {
    session: "S06",
    date: "Billing",
    title: "Receipts + payment flow",
    body: "Consultation fee + optional discount. Receipt number R-2026-NNNN issued on payment. Handoff is deliberate: doctor doesn't collect — the receptionist does.",
    tag: "feature",
  },
  {
    session: "S07",
    date: "Admin",
    title: "Dashboard + settings",
    body: "Daily cash summary, top-diagnosis chart, clinic-level settings (doctors, services, working hours). Role-gated per RBAC matrix.",
    tag: "feature",
  },
  {
    session: "S08",
    date: "Display",
    title: "Queue TV display",
    body: "Fullscreen public view for the waiting room. No auth — just a clinic-scoped token. Large type, quiet animation, server-sent updates.",
    tag: "feature",
  },
  {
    session: "S09",
    date: "Deploy",
    title: "Render + Vercel, $0/month",
    body: "Backend Docker on Render. Frontend on Vercel. Supabase for Postgres + storage. Cold start budget accepted as a trade for the price tag.",
    tag: "ops",
  },
  {
    session: "S10",
    date: "Rx v2",
    title: "Prescription Workspace",
    body: "Two-pane live workspace: left pane writes, right pane renders the PDF. Vitals inline, templates, doctor-profile letterhead overlay, atomic Rx numbering.",
    tag: "feature",
  },
  {
    session: "S12",
    date: "UI",
    title: "Full UI refactor",
    body: "Every screen rebuilt against a tighter mockup set — TopBar, Sidebar, PageTransition, and every role-facing page. One consistent visual language, end-to-end.",
    tag: "polish",
  },
  {
    session: "S15",
    date: "Brand",
    title: "Pulse C + Cosmo",
    body: "Pulse-C logo with a live beating dot. Cosmo, a sidebar mascot that blinks on human cadence. Split-pane login with a tenant chip.",
    tag: "polish",
  },
];
