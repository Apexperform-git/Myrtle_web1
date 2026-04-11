"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-orange/80">
            Invitation
          </span>
          <h2 className="mt-4 font-display text-3xl lg:text-5xl text-foreground leading-tight">
            Test OmnI on <span className="text-orange">Your Reality</span>
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
            We do not believe in generic demos. OmnI proves itself only on real
            operations. Bring one real line, one real shift, one real problem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Request a Demo
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="/how-it-works" variant="ghost" size="lg">
            How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
