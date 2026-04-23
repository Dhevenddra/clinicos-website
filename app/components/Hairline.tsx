import { cn } from "@/lib/cn";

export default function Hairline({ className }: { className?: string }) {
  return <div className={cn("hairline", className)} aria-hidden />;
}
