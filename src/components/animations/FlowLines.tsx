"use client";

import { motion } from "framer-motion";

interface FlowLinesProps {
  className?: string;
}

export default function FlowLines({ className }: FlowLinesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 100"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 50 Q200 20 400 50 Q600 80 800 50"
        stroke="url(#flow-gradient)"
        strokeWidth="1"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.path
        d="M0 60 Q200 30 400 60 Q600 90 800 60"
        stroke="url(#flow-gradient-2)"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="flow-gradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="rgba(245, 158, 11, 0)" />
          <stop offset="0.3" stopColor="rgba(245, 158, 11, 0.5)" />
          <stop offset="0.7" stopColor="rgba(59, 130, 246, 0.5)" />
          <stop offset="1" stopColor="rgba(16, 185, 129, 0.5)" />
        </linearGradient>
        <linearGradient id="flow-gradient-2" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="rgba(245, 158, 11, 0)" />
          <stop offset="0.5" stopColor="rgba(245, 158, 11, 0.3)" />
          <stop offset="1" stopColor="rgba(59, 130, 246, 0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
