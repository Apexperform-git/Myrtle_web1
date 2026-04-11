"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-block font-mono text-[10px] tracking-widest uppercase text-orange/80 mb-3">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl lg:text-4xl text-foreground leading-tight",
          align === "center" && "max-w-2xl mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-muted leading-relaxed",
            align === "center" && "max-w-xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
