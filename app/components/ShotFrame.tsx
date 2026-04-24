"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  parallax?: boolean;
  priority?: boolean;
  className?: string;
};

export default function ShotFrame({
  src,
  alt,
  width,
  height,
  caption,
  parallax = true,
  priority = false,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? [28, -28] : [0, 0]);

  // Portraits (ratio < 1) get a fixed max-width so they don't overwhelm the column.
  const isPortrait = width / height < 1;

  return (
    <figure ref={ref} className={cn("w-full", className)}>
      <motion.div
        style={{ y }}
        className={cn(
          "shot-frame mx-auto",
          isPortrait ? "max-w-[360px]" : "max-w-full"
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={isPortrait ? "360px" : "(min-width: 1024px) 900px, 100vw"}
          className="block w-full h-auto object-contain"
          priority={priority}
        />
      </motion.div>
      {caption && (
        <figcaption className="mt-4 text-xs text-[var(--color-ink-mute)] font-mono text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
