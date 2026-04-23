export type Decision = {
  id: string;
  title: string;
  context: string;
  decision: string;
  consequence: string;
};

export const decisions: Decision[] = [
  {
    id: "multi-tenant",
    title: "Multi-tenant with Row-Level Security",
    context:
      "Small clinics in India can't justify a dedicated database each. But data leaks across tenants would be an existential bug.",
    decision:
      "Shared PostgreSQL schema, RLS enforced at the row level. Every request sets a tenant context via a Spring Security filter before any query runs.",
    consequence:
      "One database, one deploy, zero cross-tenant leak paths. The filter is the single enforcement point — if it runs, isolation holds.",
  },
  {
    id: "jwt-refresh",
    title: "JWT (15min) + Refresh cookie (7d)",
    context:
      "Sessions need to be revocable, survive browser refreshes, and never put credentials in localStorage.",
    decision:
      "Short-lived JWT in memory for API calls. Refresh token in an HttpOnly, Secure, SameSite=Strict cookie. Access token rotates every 15 minutes without the user noticing.",
    consequence:
      "XSS can't steal the refresh token. A compromised access token expires in 15 minutes. The cost is one interceptor and one silent-refresh endpoint.",
  },
  {
    id: "flyway-only",
    title: "Flyway migrations, never manual",
    context:
      "A schema drift between dev and prod in a multi-tenant system means every tenant is at risk.",
    decision:
      "No hand-edits on the database — ever. Every change is a versioned V###__description.sql. The CI migration run is the source of truth.",
    consequence:
      "21 migrations shipped, zero drift. Rolling back is a new migration, not a SQL surgery.",
  },
  {
    id: "sse-over-websockets",
    title: "SSE for the queue, not WebSockets",
    context:
      "Waiting-room displays and receptionists need token changes live. Bidirectional messaging was overkill.",
    decision:
      "Server-Sent Events via Spring SseEmitter. Queue updates flow one-way from server to every connected display.",
    consequence:
      "No ws:// infra, no sticky sessions, no socket library on the client. Reconnect is built-in. The receptionist ticks 'Call' — TVs update in ~300ms.",
  },
  {
    id: "openpdf-letterhead",
    title: "OpenPDF with clinic letterhead overlay",
    context:
      "Indian clinics print prescriptions on pre-printed letterheads. The PDF has to lay ink exactly where the letterhead leaves room.",
    decision:
      "OpenPDF renderer with configurable top/bottom margins, optional clinic logo and doctor signature from Supabase Storage. A RX-DEMOCLI-2026-NNNNNN number is issued atomically from a DB sequence.",
    consequence:
      "Prescriptions print clean on any letterhead. The Rx number is the same on screen, on print, and in the DB — dispute-proof.",
  },
];
