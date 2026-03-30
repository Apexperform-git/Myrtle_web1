"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";

const personas = [
  {
    role: "Operators",
    question: "What should I do now?",
    description:
      "Real-time decision support with clear, explainable actions during the shift.",
    color: "amber" as const,
  },
  {
    role: "Team Leads",
    question: "What changed and why?",
    description:
      "Immediate visibility into shift dynamics and root-cause awareness.",
    color: "electric" as const,
  },
  {
    role: "Supervisors",
    question: "What is likely to break next?",
    description:
      "Predictive foresight to prevent failures before they cascade.",
    color: "emerald" as const,
  },
];

const isNotList = [
  "Not a dashboard",
  "Not an optimizer that takes control",
  "Not another reporting layer",
];

const isList = [
  "Learns how your line actually behaves",
  "Simulates what may happen next",
  "Guides people with context-rich, explainable advice",
];

export default function WhatIsOmniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <GlowingOrb color="amber" size="lg" className="top-20 -right-48" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>What is OmnI</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-4xl">
              Not a dashboard.{" "}
              <br className="hidden sm:block" />
              Not automation.{" "}
              <span className="text-amber italic">Navigation.</span>
            </h1>
            <p className="mt-6 text-muted text-xl max-w-2xl leading-relaxed">
              OmnI NAVIGATION is operational intelligence that guides, not
              reports. Seen as live guidance — voice or screen — during the
              shift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow — Understanding → Reasoning → Guidance */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="The Process"
            title="Understanding → Reasoning → Guidance"
            subtitle="OmnI turns data into confident action — not reports after the fact."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                subtitle: "Reality 'as-is'",
                description:
                  "Learn how the operation actually behaves. OmnI absorbs live production signals, events, patterns, and anomalies — replacing static thresholds with adaptive, real-time context.",
                color: "text-amber",
                bg: "bg-amber/5",
                border: "border-amber/10",
              },
              {
                step: "02",
                title: "Reasoning",
                subtitle: "What may happen next",
                description:
                  "Simulate near-future scenarios and compare possible actions. OmnI models short-term futures to provide operator foresight before events occur.",
                color: "text-electric",
                bg: "bg-electric/5",
                border: "border-electric/10",
              },
              {
                step: "03",
                title: "Guidance",
                subtitle: "What to do now",
                description:
                  "Give clear, explainable steps with expected effect and timing. Natural speech interaction keeps operators in control while OmnI communicates, suggests, and explains.",
                color: "text-emerald",
                bg: "bg-emerald/5",
                border: "border-emerald/10",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div
                  className={`relative p-8 rounded-2xl border ${item.border} ${item.bg} h-full`}
                >
                  <span className="font-mono text-xs tracking-wider text-muted/40">
                    {item.step}
                  </span>
                  <h3 className={`mt-4 font-display text-3xl ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 font-mono text-xs tracking-wider uppercase ${item.color} opacity-60`}>
                    {item.subtitle}
                  </p>
                  <p className="mt-6 text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmnI Exists */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Why"
            title="Why OmnI Exists"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Reality",
                text: "Plans describe the ideal. Reports explain the past. Operators live in 'now.'",
              },
              {
                title: "Pain",
                text: "Firefighting instead of flow. Data without direction. People blamed for system behavior.",
              },
              {
                title: "Solution",
                text: "A system that turns real-time conditions into clear, explainable guidance — with humans always in control.",
              },
            ].map((item, i) => (
              <Card key={item.title} delay={i * 0.12}>
                <h3 className="font-display text-xl text-amber mb-4">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>

          {/* Quote */}
          <ScrollReveal>
            <blockquote className="relative max-w-3xl mx-auto text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-amber/20 text-8xl font-display">
                &ldquo;
              </div>
              <p className="font-display text-2xl lg:text-3xl text-foreground italic leading-relaxed">
                Most factories are not poorly run — they are poorly guided.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="For Whom"
            title="Built for the People Who Run Operations"
            subtitle="Manufacturing, processing, and operations where flow matters more than reports."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, i) => (
              <ScrollReveal key={persona.role} delay={i * 0.12}>
                <div className="relative p-8 rounded-2xl border border-midnight-border bg-midnight group hover:border-midnight-border/80 transition-all duration-500 h-full">
                  <Badge variant={persona.color}>{persona.role}</Badge>
                  <h3 className="mt-6 font-display text-2xl text-foreground">
                    &ldquo;{persona.question}&rdquo;
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What It Is / What It's Not */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What it IS */}
            <ScrollReveal direction="left">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald mb-4 block">
                  What OmnI Is
                </span>
                <h3 className="font-display text-3xl text-foreground mb-8">
                  Human-centric operational intelligence
                </h3>
                <ul className="space-y-4">
                  {isList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* What it's NOT */}
            <ScrollReveal direction="right">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-red-400 mb-4 block">
                  What OmnI Is Not
                </span>
                <h3 className="font-display text-3xl text-foreground mb-8">
                  If it can&apos;t explain itself, it&apos;s noise
                </h3>
                <ul className="space-y-4">
                  {isNotList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Why It Matters"
            title="Business & People Impact"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <h3 className="font-display text-2xl text-amber mb-6">
                  Business Impact
                </h3>
                <ul className="space-y-4">
                  {[
                    "50%+ reduction in Non-Value-Added time",
                    "Faster stabilization after disturbances",
                    "Better learning from daily reality",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h3 className="font-display text-2xl text-electric mb-6">
                  People Impact
                </h3>
                <ul className="space-y-4">
                  {[
                    "Clear guidance instead of pressure",
                    "Understanding instead of blame",
                    "Confidence instead of guesswork",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb color="amber" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber">
              Invitation
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl text-foreground">
              Test OmnI on{" "}
              <span className="text-amber italic">Your Reality</span>
            </h2>
            <p className="mt-6 text-muted text-lg">
              Bring one real line, one real shift, one real problem. We generate
              live cases from your reality — not from slides.
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
