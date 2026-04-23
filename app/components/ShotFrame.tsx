"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  parallax?: boolean;
  priority?: boolean;
  className?: string;
};

export default function ShotFrame({
  src,
  alt,
  caption,
  aspectRatio = "16/10",
  parallax = true,
  priority = false,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [40, -40] : [0, 0]);

  return (
    <figure ref={ref} className={cn("w-full", className)}>
      <motion.div
        style={{ y }}
        className="shot-frame"
      >
        <div style={{ aspectRatio }} className="relative w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      </motion.div>
      {caption && (
        <figcaption className="mt-4 text-xs text-[var(--color-ink-mute)] font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
