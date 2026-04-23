"use client";

import { useEffect, useState } from "react";

type Props = { size?: number; className?: string };

export default function MascotCosmo({ size = 56, className = "" }: Props) {
  const [blinkKey, setBlinkKey] = useState(0);
  const [doubleBlink, setDoubleBlink] = useState(false);

  useEffect(() => {
    let cancelled = false;
    function scheduleNext() {
      if (cancelled) return;
      const delay = 4000 + Math.random() * 5000;
      setTimeout(() => {
        if (cancelled) return;
        setDoubleBlink(Math.random() < 0.25);
        setBlinkKey((k) => k + 1);
        scheduleNext();
      }, delay);
    }
    scheduleNext();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`mascot-wrap inline-block ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width={size} height={size} className="mascot-svg">
        <ellipse cx="32" cy="58" rx="18" ry="2.5" fill="#0F172A" opacity="0.18" />
        <g className="mascot-body">
          <rect
            x="10"
            y="10"
            width="44"
            height="44"
            rx="14"
            fill="url(#cosmo-fill)"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <circle cx="20" cy="38" r="2.5" fill="#FCA5A5" opacity="0.7" />
          <circle cx="44" cy="38" r="2.5" fill="#FCA5A5" opacity="0.7" />
          <g className="mascot-eyes">
            <circle cx="24" cy="30" r="5" fill="white" />
            <circle cx="40" cy="30" r="5" fill="white" />
            <circle cx="24.8" cy="30.5" r="2.2" fill="#0F172A" />
            <circle cx="40.8" cy="30.5" r="2.2" fill="#0F172A" />
            <circle cx="25.6" cy="29.6" r="0.7" fill="white" />
            <circle cx="41.6" cy="29.6" r="0.7" fill="white" />
            <g
              key={blinkKey}
              className={`mascot-lids ${doubleBlink ? "mascot-lids--double" : ""}`}
            >
              <rect x="18.5" y="18" width="11" height="13" rx="3" fill="url(#cosmo-fill)" />
              <rect x="34.5" y="18" width="11" height="13" rx="3" fill="url(#cosmo-fill)" />
            </g>
          </g>
          <path
            d="M 27 42 Q 32 47 37 42"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="mascot-mouth"
          />
        </g>
        <defs>
          <linearGradient id="cosmo-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#BFDBFE" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        .mascot-wrap { cursor: pointer; }
        .mascot-body {
          transform-origin: 32px 32px;
          animation: cosmo-bob 4.2s ease-in-out infinite;
        }
        @keyframes cosmo-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-1.5px); }
        }
        .mascot-lids {
          transform-origin: 32px 18px;
          transform: scaleY(0);
          animation: cosmo-blink 0.32s ease-out 1;
        }
        .mascot-lids--double { animation: cosmo-blink-double 0.7s ease-out 1; }
        @keyframes cosmo-blink {
          0%   { transform: scaleY(0); }
          40%  { transform: scaleY(1); }
          60%  { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }
        @keyframes cosmo-blink-double {
          0%, 100% { transform: scaleY(0); }
          15%, 30% { transform: scaleY(1); }
          45%, 60% { transform: scaleY(0); }
          70%, 85% { transform: scaleY(1); }
        }
        .mascot-wrap:hover .mascot-body { animation: cosmo-wiggle 0.6s ease-in-out 1; }
        @keyframes cosmo-wiggle {
          0%, 100% { transform: rotate(0); }
          25%      { transform: rotate(-3deg); }
          75%      { transform: rotate(3deg); }
        }
        .mascot-wrap:hover .mascot-mouth { d: path("M 26 41 Q 32 49 38 41"); }
        .mascot-mouth { transition: d 200ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .mascot-body, .mascot-lids, .mascot-wrap:hover .mascot-body { animation: none; }
          .mascot-lids { transform: scaleY(0); }
        }
      `}</style>
    </div>
  );
}
