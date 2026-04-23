import SectionShell from "../components/SectionShell";
import SplitReveal from "../components/SplitReveal";

const pains = [
  {
    k: "01",
    title: "Paper registers, lost histories",
    body: "A folder per patient, smudged pages, a file cabinet that grows. Past visits get lost when a receptionist rotates out.",
  },
  {
    k: "02",
    title: "Handwritten prescriptions",
    body: "Pharmacists guess at dosages. Patients forget what was said. No digital record exists to reference next time.",
  },
  {
    k: "03",
    title: "Queues nobody trusts",
    body: "Hand-written tokens, shouted names, angry relatives. No one in the waiting room knows how many people are ahead.",
  },
  {
    k: "04",
    title: "Day-end cash reconciliation",
    body: "Carbon-copy receipt books, manual tallying at closing, disputes when a number doesn't match.",
  },
];

export default function Problem() {
  return (
    <SectionShell
      id="problem"
      number="02"
      eyebrow="Why this exists"
      title={
        <>
          Small Indian clinics run on paper.
          <br />
          <span className="text-[var(--color-ink-mute)]">Every friction point is a real one.</span>
        </>
      }
    >
      <SplitReveal className="text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)] max-w-[68ch] mb-14">
        I grew up watching clinics operate out of notebooks. Not because the staff were
        careless — because every &quot;clinic software&quot; on offer was priced for
        300-bed hospitals, or needed a salesperson to install it, or locked the data
        inside their cloud. ClinicOS is the answer I wanted for that kind of clinic:
        small, honest, self-serve, and priced like nothing.
      </SplitReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {pains.map((p, i) => (
          <SplitReveal key={p.k} delay={i * 0.08}>
            <div className="flex gap-5">
              <div className="num text-xs text-[var(--color-ink-mute)] pt-1">{p.k}</div>
              <div>
                <h3 className="h-display text-xl md:text-2xl mb-2">{p.title}</h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">{p.body}</p>
              </div>
            </div>
          </SplitReveal>
        ))}
      </div>
    </SectionShell>
  );
}
