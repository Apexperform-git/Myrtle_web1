"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlowingOrb from "@/components/animations/GlowingOrb";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <GlowingOrb color="orange" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-orange">
            Invitation
          </span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl text-foreground leading-tight">
            Test OmnI on{" "}
            <span className="text-orange italic">Your Reality</span>
          </h2>
          <p className="mt-6 text-muted text-lg max-w-xl mx-auto leading-relaxed">
            We do not believe in generic demos. OmnI proves itself only on real
            operations. Bring one real line, one real shift, one real problem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Request a Demo
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="/how-it-works" variant="ghost" size="lg">
            Learn How It Works →
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
