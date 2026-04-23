export type TourShot = {
  n: string;
  src: string;
  title: string;
  caption: string;
  side: "left" | "right";
};

/**
 * Numbered screenshots the user is taking and SCP-ing into
 * /home/ubuntu/clinicos-website/public/screenshots/.
 * Keep the names stable so the grab→drop flow stays simple.
 */
export const tour: TourShot[] = [
  {
    n: "01",
    src: "/screenshots/01-login.png",
    title: "The front door",
    caption: "Split-pane login · tenant chip · Pulse-C brand mark",
    side: "right",
  },
  {
    n: "02",
    src: "/screenshots/02-reception-dashboard.png",
    title: "Reception, at a glance",
    caption: "Today's count · tokens in flight · quick actions",
    side: "left",
  },
  {
    n: "03",
    src: "/screenshots/03-patient-register.png",
    title: "Patient registration",
    caption: "Duplicate-phone guard · auto-issued registration number",
    side: "right",
  },
  {
    n: "04",
    src: "/screenshots/04-issue-token.png",
    title: "Issuing a token",
    caption: "Search-as-you-type · doctor pick · walk-in or appointment",
    side: "left",
  },
  {
    n: "05",
    src: "/screenshots/05-doctor-queue.png",
    title: "Doctor's queue",
    caption: "Live SSE feed · states: waiting, called, in consultation",
    side: "right",
  },
  {
    n: "06",
    src: "/screenshots/06-prescription-workspace.png",
    title: "Prescription Workspace",
    caption: "Left pane writes. Right pane renders the printable PDF, live.",
    side: "left",
  },
  {
    n: "07",
    src: "/screenshots/07-prescription-pdf.png",
    title: "The printable output",
    caption: "RX-DEMOCLI-2026-000003 · letterhead-ready margins",
    side: "right",
  },
  {
    n: "08",
    src: "/screenshots/08-billing.png",
    title: "Billing handoff",
    caption: "Receptionist collects · receipt R-2026-NNNN issued atomically",
    side: "left",
  },
  {
    n: "09",
    src: "/screenshots/09-patient-detail.png",
    title: "Patient history",
    caption: "Every past visit, diagnosis, and prescription in one view",
    side: "right",
  },
  {
    n: "10",
    src: "/screenshots/10-queue-display.png",
    title: "Waiting-room TV",
    caption: "Public view · no auth · updates in under a second",
    side: "left",
  },
  {
    n: "11",
    src: "/screenshots/11-admin-dashboard.png",
    title: "Admin overview",
    caption: "Daily cash · top diagnoses · practitioner load",
    side: "right",
  },
];
