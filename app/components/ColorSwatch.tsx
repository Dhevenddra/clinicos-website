export default function ColorSwatch({
  name,
  hex,
  role,
}: {
  name: string;
  hex: string;
  role: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-xl border border-[var(--color-hairline)] shrink-0"
        style={{ background: hex }}
      />
      <div className="min-w-0">
        <div className="font-medium text-sm">{name}</div>
        <div className="num text-xs text-[var(--color-ink-mute)]">{hex}</div>
        <div className="text-xs text-[var(--color-ink-mute)] mt-0.5">{role}</div>
      </div>
    </div>
  );
}
