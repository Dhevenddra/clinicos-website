import { cn } from "@/lib/cn";
import Hairline from "./Hairline";

type Props = {
  id?: string;
  number: string;
  eyebrow?: string;
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export default function SectionShell({ id, number, eyebrow, title, className, children }: Props) {
  return (
    <section id={id} className={cn("relative", className)}>
      <Hairline />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="md:sticky md:top-24">
              <div className="sec-mark">{number}</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
            {title && (
              <h2 className="h-display text-[var(--text-section)] max-w-[22ch] mb-10 md:mb-14">
                {title}
              </h2>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
