export type TourShot = {
  n: string;
  src: string;
  w: number;
  h: number;
  title: string;
  caption: string;
  side: "left" | "right";
  group: "login" | "reception" | "queue" | "doctor" | "billing" | "admin";
};

/**
 * Feature tour panels, narrative order (login → reception → queue → doctor → billing → admin).
 * w/h are the natural PNG dimensions so Next/Image sizes correctly without cropping.
 * Intentionally skipped shots: 15 (workspace finalized) and 20 (admin users).
 */
export const tour: TourShot[] = [
  {
    n: "01",
    src: "/shots/01-login-desktop.png",
    w: 1910, h: 915,
    title: "One front door, three roles",
    caption:
      "Split-pane login. Tenant chip bottom-left, app version bottom-right. One password for reception, doctor, and admin — RBAC decides the rest.",
    side: "right",
    group: "login",
  },
  {
    n: "02",
    src: "/shots/02-login-mobile.png",
    w: 528, h: 798,
    title: "Mobile-first, not mobile-afterthought",
    caption:
      "Reception staff log in from ₹8,000 Android tablets. The split pane stacks, the ID badge shrinks, nothing else changes.",
    side: "left",
    group: "login",
  },
  {
    n: "03",
    src: "/shots/03-sidebar-brand.png",
    w: 266, h: 908,
    title: "The brand lives in every screen",
    caption:
      "Pulse-C mark with a 62-bpm heartbeat. Cosmo — our Saturday mascot — keeps the sidebar from feeling clinical.",
    side: "right",
    group: "login",
  },
  {
    n: "04",
    src: "/shots/04-reception-dashboard.png",
    w: 1910, h: 914,
    title: "Reception, at a glance",
    caption:
      "Today's tokens, waits, collection, and tomorrow's appointments. Built for someone who just walked in, not someone who has an hour to onboard.",
    side: "left",
    group: "reception",
  },
  {
    n: "05",
    src: "/shots/05-patient-list.png",
    w: 1870, h: 905,
    title: "Patient list with guardrails",
    caption:
      "Search, paginate, register. Phone-number duplicate check runs server-side before a new patient row is ever written.",
    side: "right",
    group: "reception",
  },
  {
    n: "06",
    src: "/shots/06-patient-register.png",
    w: 1910, h: 1365,
    title: "Register in under 30 seconds",
    caption:
      "Name, phone, DOB or age, gender. Registration number (P-NNNNN) issued on save. ABHA optional.",
    side: "left",
    group: "reception",
  },
  {
    n: "07",
    src: "/shots/07-patient-detail.png",
    w: 1910, h: 1196,
    title: "History is the point",
    caption:
      "Three visits over five months. Every past diagnosis, prescription, and receipt reachable in two clicks.",
    side: "right",
    group: "reception",
  },
  {
    n: "08",
    src: "/shots/08-issue-token-empty.png",
    w: 1910, h: 1023,
    title: "Issue a token, find the patient",
    caption:
      "Empty state shows recent patients by default — the most common case. Typing filters against name, phone, or reg number.",
    side: "left",
    group: "queue",
  },
  {
    n: "09",
    src: "/shots/09-issue-token-selected.png",
    w: 1910, h: 1058,
    title: "Priority and follow-up, one tap each",
    caption:
      "Patient picked, doctor chosen, walk-in or appointment toggled. Token number assigned atomically when Issue is pressed.",
    side: "right",
    group: "queue",
  },
  {
    n: "10",
    src: "/shots/10-queue-reception.png",
    w: 1910, h: 928,
    title: "The queue, live",
    caption:
      "Eight tokens across Waiting, Called, In Consultation, Completed. Reception manages the room; nobody shouts names.",
    side: "left",
    group: "queue",
  },
  {
    n: "12",
    src: "/shots/12-queue-tv-display.png",
    w: 1910, h: 915,
    title: "Waiting-room TV, public view",
    caption:
      "No login. Big numbers, room IDs, called tokens pulsing. Any ₹8,000 Android TV does the job.",
    side: "right",
    group: "queue",
  },
  {
    n: "11",
    src: "/shots/11-queue-doctor-twopane.png",
    w: 1910, h: 1030,
    title: "Doctor's two-pane queue",
    caption:
      "Left: the line. Right: the selected patient's vitals, last visit, and open consultation button. One keyboard flow.",
    side: "left",
    group: "doctor",
  },
  {
    n: "13",
    src: "/shots/13-workspace-empty.png",
    w: 1910, h: 995,
    title: "Prescription Workspace, fresh",
    caption:
      "Editable vitals up top, empty medicine list, live preview on the right. Zero modal dialogs; everything is inline.",
    side: "right",
    group: "doctor",
  },
  {
    n: "14",
    src: "/shots/14-workspace-active.png",
    w: 1910, h: 995,
    title: "Typing a prescription, watching it render",
    caption:
      "Medicine search with composition + strength autocomplete. 1-0-1 dosage shorthand. Right pane updates on every keystroke.",
    side: "left",
    group: "doctor",
  },
  {
    n: "16",
    src: "/shots/16-prescription-pdf.png",
    w: 702, h: 856,
    title: "A PDF a pharmacist can actually read",
    caption:
      "OpenPDF output, A5, clinic letterhead margin-aware. Rx number (RX-DEMOCLI-2026-NNNNNN) issued atomically from a DB sequence.",
    side: "right",
    group: "doctor",
  },
  {
    n: "17",
    src: "/shots/17-billing-pending.png",
    w: 1910, h: 917,
    title: "Billing lives with reception, not the doctor",
    caption:
      "Pending payments sit here until reception collects. Doctor is never on the money side — that was a deliberate design choice.",
    side: "left",
    group: "billing",
  },
  {
    n: "18",
    src: "/shots/18-billing-receipt.png",
    w: 1910, h: 1093,
    title: "Receipt R-2026-NNNN, issued atomically",
    caption:
      "The receipt number is the same on screen, on print, and in the database. No drift, no disputes.",
    side: "right",
    group: "billing",
  },
  {
    n: "19",
    src: "/shots/19-admin-dashboard.png",
    w: 1910, h: 940,
    title: "Admin sees the clinic, not the line items",
    caption:
      "Today's collection, pending dues, bill count. Staff performance and revenue trends live behind the same screen.",
    side: "left",
    group: "admin",
  },
];
