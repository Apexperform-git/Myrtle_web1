"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const feelings = [
  { text: "Less firefighting", icon: "🔥" },
  { text: "Faster recovery", icon: "⚡" },
  { text: "Fewer repeated losses", icon: "📉" },
  { text: "Operators supported, not judged", icon: "🤝" },
];

export default function HowItFeels() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial text */}
          <div>
            <ScrollReveal direction="left">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-orange">
                The Experience
              </span>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground leading-tight">
                Good systems make good people{" "}
                <span className="text-orange italic">better.</span>
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Bad systems make good people look bad. OmnI is designed to
                support, not surveil. It focuses on operational conditions — not
                personal performance.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                When operators disagree with a suggestion, OmnI respects that
                decision. Outcomes inform the system&apos;s learning — not the
                other way around.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — feeling cards */}
          <div className="space-y-4">
            {feelings.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 p-5 rounded-xl border border-midnight-border/50 bg-midnight-card/50 hover:bg-midnight-card hover:border-orange/10 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body text-lg text-foreground">
                    {item.text}
                  </span>
                  <svg className="w-5 h-5 text-muted/30 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
