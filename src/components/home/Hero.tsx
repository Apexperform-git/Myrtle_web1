"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ParticleField from "@/components/animations/ParticleField";
import GlowingOrb from "@/components/animations/GlowingOrb";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid-bg opacity-30" />
      <ParticleField />
      <GlowingOrb color="orange" size="lg" className="top-1/4 -left-48" />
      <GlowingOrb color="plum" size="md" className="bottom-1/4 -right-32" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-orange">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              OmnI Navigation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground"
          >
            Operational Intelligence{" "}
            <span className="text-glow-orange text-orange italic">that Guides,</span>{" "}
            <br className="hidden sm:block" />
            Not Reports.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed"
          >
            A human-centric intelligence that learns how your line behaves,
            reasons forward, and guides decisions. Move operators from guessing
            to estimating.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Request a Demo
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/what-is-omni" variant="secondary" size="lg">
              Discover OmnI
            </Button>
          </motion.div>

          {/* Stats ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-20 flex flex-wrap gap-12 border-t border-midnight-border/50 pt-10"
          >
            {[
              { label: "NVA Reduction", value: "50%+" },
              { label: "Recovery Speed", value: "3×" },
              { label: "Operator Control", value: "100%" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.15 }}
                  className="font-display text-3xl lg:text-4xl text-orange"
                >
                  {stat.value}
                </motion.span>
                <span className="mt-1 font-mono text-xs tracking-wider uppercase text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
