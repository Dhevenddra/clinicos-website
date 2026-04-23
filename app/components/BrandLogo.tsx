type Props = {
  size?: number;
  withWordmark?: boolean;
  tone?: "blue" | "light";
  muted?: boolean;
  className?: string;
};

export default function BrandLogo({
  size = 32,
  withWordmark = false,
  tone = "blue",
  muted = false,
  className = "",
}: Props) {
  const stroke = tone === "light" ? "#BFDBFE" : "#2563EB";
  const wordmark = tone === "light" ? "#F8FAFC" : "#0F172A";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="ClinicOS">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        role="img"
        aria-hidden={withWordmark ? "true" : "false"}
        className={`brand-mark ${muted ? "brand-mark--muted" : ""}`}
        style={{ color: stroke }}
      >
        <path
          d="M 23.5 8.5 A 10 10 0 1 0 23.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="23.5"
          cy="8.5"
          r="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="brand-echo"
        />
        <circle cx="23.5" cy="8.5" r="2.6" fill="currentColor" className="brand-dot" />
      </svg>

      {withWordmark && (
        <span
          className="font-semibold tracking-tight"
          style={{ color: wordmark, fontSize: size * 0.55, lineHeight: 1 }}
        >
          ClinicOS
        </span>
      )}

      <style>{`
        .brand-mark .brand-dot {
          transform-origin: 23.5px 8.5px;
          animation: brand-beat 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .brand-mark .brand-echo {
          transform-origin: 23.5px 8.5px;
          opacity: 0;
          animation: brand-echo 3.2s cubic-bezier(0.2, 0.7, 0.3, 1) infinite;
          animation-delay: 0.6s;
        }
        @keyframes brand-beat {
          0%, 100% { transform: scale(1); opacity: 1; }
          15%      { transform: scale(1.22); opacity: 1; }
          30%      { transform: scale(1); opacity: 0.95; }
          45%      { transform: scale(1.12); opacity: 1; }
          60%      { transform: scale(1); opacity: 0.92; }
        }
        @keyframes brand-echo {
          0%   { transform: scale(1);   opacity: 0.55; }
          80%  { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .brand-mark--muted .brand-dot,
        .brand-mark--muted .brand-echo {
          animation: none;
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-mark .brand-dot,
          .brand-mark .brand-echo {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
}
