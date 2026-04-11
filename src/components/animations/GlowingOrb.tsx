"use client";

import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  color?: "orange" | "plum" | "orange-light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlowingOrb({
  color = "orange",
  size = "md",
  className,
}: GlowingOrbProps) {
  const colors = {
    orange: "bg-orange/20",
    plum: "bg-plum/20",
    "orange-light": "bg-orange-light/20",
  };

  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <div
      className={cn(
        "ambient-orb animate-pulse-glow",
        colors[color],
        sizes[size],
        className
      )}
      aria-hidden="true"
    />
  );
}
