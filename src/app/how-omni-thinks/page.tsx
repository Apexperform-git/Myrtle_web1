"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";
import SectionHeading from "@/components/ui/SectionHeading";

const architecture = [
  {
    id: "brain",
    title: "OmnI Brain",
    subtitle: "Learning Reality from Live Signals",
    description:
      "Continuously absorbs production run rates, events, patterns, and anomalies. Replaces static thresholds with adaptive, real-time context that evolves with your operation.",
    color: "amber",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1={20 + Math.cos((angle * Math.PI) / 180) * 8}
            y1={20 + Math.sin((angle * Math.PI) / 180) * 8}
            x2={20 + Math.cos((angle * Math.PI) / 180) * 16}
            y2={20 + Math.sin((angle * Math.PI) / 180) * 16}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
      </svg>
    ),
  },
  {
    id: "cortex",
    title: "OmnI Cortex",
    subtitle: "Visual Reasoning and Prediction",
    description:
      "Simulates possible next steps and outcomes. Models short-term futures to provide operator foresight before events occur. Compares consequences of different actions.",
    color: "electric",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M8 20h24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 8v24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12l16 16" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path d="M28 12L12 28" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
    ),
  },
  {
    id: "guidance",
    title: "Human-Aligned Guidance",
    subtitle: "Operator Co-Pilot",
    description:
      "Natural speech interaction (TTS/STT). Communicates directly with operators — listens, suggests, and explains while keeping humans in control of every decision.",
    color: "emerald",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M10 30c0-8 4-14 10-14s10 6 10 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 25h12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M16 28h8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "loop",
    title: "Intelligence Loop",
    subtitle: "Continuous Learning Cycle",
    description:
      "Ingest reality → Learn patterns → Simulate futures → Deliver guidance. A continuous, transparent, and auditable cycle that improves with every shift observed.",
    color: "amber",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <path d="M20 6a14 14 0 0 1 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 20a14 14 0 0 1-14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 34a14 14 0 0 1-14-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20A14 14 0 0 1 20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="20,3 23,9 17,9" fill="currentColor" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Does OmnI act on its own?",
    answer:
      "No. OmnI does not act on its own. It observes live operations, reasons about possible outcomes, and supports human decisions. The operator always decides.",
  },
  {
    question: "How does OmnI explain its reasoning?",
    answer:
      "OmnI bases its guidance on observable signals — events, run rates, context, and historical patterns. For every recommendation, it can explain which signals mattered and why a particular action is suggested.",
  },
  {
    question: "Can OmnI be wrong?",
    answer:
      "Yes — and that is intentional. OmnI does not claim certainty. It presents informed possibilities, learns from real outcomes, and improves over time. Transparency about uncertainty is a core design principle.",
  },
  {
    question: "Who decides — OmnI or the operator?",
    answer:
      "The operator. OmnI never executes actions. It informs, explains, and adapts based on how humans choose to respond. When operators disagree, OmnI respects that and learns from the outcome.",
  },
  {
    question: "How is OmnI different from a dashboard?",
    answer:
      "Dashboards describe the past. OmnI builds a living model of current conditions, explores possible futures, and explains its reasoning in plain language — providing guidance, not reports.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="border border-midnight-border rounded-xl overflow-hidden"
        animate={{ borderColor: isOpen ? "rgba(245, 158, 11, 0.2)" : "rgba(42, 42, 58, 1)" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-midnight-card/50 transition-colors"
        >
          <span className="font-body text-lg text-foreground pr-4">{question}</span>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-amber flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-6 text-muted leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
}

export default function HowOmniThinksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <GlowingOrb color="amber" size="lg" className="top-20 -right-48" />
        <GlowingOrb color="electric" size="md" className="bottom-0 -left-32" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>Architecture</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-4xl">
              Stop reacting.{" "}
              <span className="text-amber italic">Start guiding.</span>
            </h1>
            <p className="mt-6 text-muted text-xl max-w-2xl leading-relaxed">
              Under the hood, OmnI bridges AI, operational intelligence, OT, and
              human decision-making into a unified intelligence layer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Cards */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Four Core Layers"
            title="How OmnI is Built"
            subtitle="Each layer works in concert to transform raw operational signals into confident, explainable guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecture.map((layer, i) => {
              const colorMap: Record<string, string> = {
                amber: "text-amber border-amber/20 hover:border-amber/40",
                electric: "text-electric border-electric/20 hover:border-electric/40",
                emerald: "text-emerald border-emerald/20 hover:border-emerald/40",
              };
              return (
                <ScrollReveal key={layer.id} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`relative p-8 rounded-2xl border bg-midnight transition-all duration-500 h-full ${colorMap[layer.color]}`}
                  >
                    <div className={`${colorMap[layer.color].split(" ")[0]} mb-6`}>
                      {layer.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted/40">
                      Layer {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`mt-2 font-display text-2xl ${colorMap[layer.color].split(" ")[0]}`}>
                      {layer.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs tracking-wider text-muted/50">
                      {layer.subtitle}
                    </p>
                    <p className="mt-4 text-muted leading-relaxed">
                      {layer.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intelligence Loop Animation */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading
            tag="The Loop"
            title="Continuous Intelligence Cycle"
            subtitle="OmnI never stops learning. Every shift, every signal, every outcome feeds back into smarter guidance."
          />

          {/* Animated circular loop */}
          <div className="relative w-80 h-80 mx-auto mt-16">
            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-amber/5 border border-amber/20 flex items-center justify-center">
                <span className="font-mono text-xs text-amber tracking-wider">OmnI</span>
              </div>
            </div>

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg className="w-full h-full" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
              </svg>
            </motion.div>

            {/* Loop steps */}
            {[
              { label: "Ingest Reality", angle: -90, color: "amber" },
              { label: "Learn Patterns", angle: 0, color: "electric" },
              { label: "Simulate Futures", angle: 90, color: "emerald" },
              { label: "Guide Decisions", angle: 180, color: "amber" },
            ].map((step, i) => {
              const rad = (step.angle * Math.PI) / 180;
              const x = 160 + Math.cos(rad) * 130;
              const y = 160 + Math.sin(rad) * 130;
              const colorClasses: Record<string, string> = {
                amber: "bg-amber/10 border-amber/30 text-amber",
                electric: "bg-electric/10 border-electric/30 text-electric",
                emerald: "bg-emerald/10 border-emerald/30 text-emerald",
              };
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                  className={`absolute px-3 py-1.5 rounded-full text-xs font-mono tracking-wider border ${colorClasses[step.color]}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {step.label}
                </motion.div>
              );
            })}
          </div>

          <ScrollReveal>
            <p className="mt-16 text-muted max-w-lg mx-auto leading-relaxed">
              Transparent and auditable. Every recommendation references
              observable signals with clear reasoning about likely outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about how OmnI works, decides, and learns."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb color="amber" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              Ready to See How{" "}
              <span className="text-amber italic">OmnI Thinks?</span>
            </h2>
            <p className="mt-6 text-muted text-lg">
              Let us show you the intelligence loop in action — on your real
              operational data.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                Request a Demo →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
