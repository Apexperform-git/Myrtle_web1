"use client";

import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  color?: "amber" | "electric" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlowingOrb({
  color = "amber",
  size = "md",
  className,
}: GlowingOrbProps) {
  const colors = {
    amber: "bg-amber/20",
    electric: "bg-electric/20",
    emerald: "bg-emerald/20",
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
