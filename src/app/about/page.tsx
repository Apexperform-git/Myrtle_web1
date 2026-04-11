"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Humans First",
    description:
      "Technology should empower people, not replace them. OmnI keeps operators in control at all times.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description:
      "Every recommendation is explainable. No black boxes, no hidden scores. If it can't explain itself, it's noise.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Operational Truth",
    description:
      "We start with reality as-is, not how it should be. Plans are ideal. Reports are past. Operators live in now.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "OmnI improves with every shift observed. It doesn't claim certainty — it presents informed possibilities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
];

const timeline = [
  {
    label: "Foundation",
    text: "Myrtle Europe founded with a mission to transform how manufacturing operations are guided.",
  },
  {
    label: "Research",
    text: "Deep research into operational intelligence, Brown Paper methodology, and Value Stream Mapping.",
  },
  {
    label: "OmnI Development",
    text: "Development of the OmnI Navigation platform — bridging AI, OT, and human decision-making.",
  },
  {
    label: "Today",
    text: "Delivering operational intelligence that reduces NVA time by 50%+ across manufacturing operations in Europe.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <GlowingOrb color="orange" size="lg" className="top-20 -right-48" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>About</Badge>
            <h1 className="mt-8 font-display text-4xl lg:text-5xl text-foreground leading-tight max-w-4xl">
              We believe factories are not poorly run —{" "}
              <span className="text-orange">they are poorly guided.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-orange">
                  Our Story
                </span>
                <h2 className="mt-6 font-display text-3xl text-foreground leading-tight">
                  From operational frustration to{" "}
                  <span className="text-orange">intelligent guidance</span>
                </h2>
                <div className="mt-8 space-y-6 text-muted leading-relaxed">
                  <p>
                    Myrtle Europe was born from a simple observation: the
                    manufacturing floor is full of talented people making
                    decisions with incomplete information. Dashboards show the
                    past. Plans describe the ideal. But operators live in the
                    now.
                  </p>
                  <p>
                    We set out to build something different — not another
                    reporting tool, not an AI that takes over. We built OmnI
                    Navigation: a system that learns how your operation truly
                    behaves, reasons about what comes next, and guides people
                    with clarity and respect.
                  </p>
                  <p>
                    Our approach combines Brown Paper methodology, Value Stream
                    Mapping, and advanced operational intelligence to bridge the
                    gap between data and confident action.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="right">
              <div className="relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-orange/20" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <div className="absolute left-[-22px] top-1 w-3 h-3 rounded-full border-2 border-orange bg-midnight" />
                    <span className="font-mono text-xs tracking-wider uppercase text-orange">
                      {item.label}
                    </span>
                    <p className="mt-2 text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Values"
            title="What We Stand For"
            subtitle="Every feature we build, every decision we make is guided by these principles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <Card key={value.title} delay={i * 0.1}>
                <div className="text-orange">{value.icon}</div>
                <h3 className="mt-4 font-display text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-widest uppercase text-orange">
              Our Mission
            </span>
            <blockquote className="mt-8">
              <p className="font-display text-3xl lg:text-4xl text-foreground italic leading-relaxed">
                To move manufacturing operators from guessing to estimating — by
                providing human-centric intelligence that learns, reasons, and
                guides with transparency and respect.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb color="orange" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              Let&apos;s Talk{" "}
              <span className="text-orange">Operations</span>
            </h2>
            <p className="mt-6 text-muted text-lg">
              We&apos;d love to hear about your operational challenges and show
              you how OmnI can help.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch →
              </Button>
              <a
                href="https://linkedin.com/company/110151100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-body font-medium text-muted hover:text-foreground transition-colors"
              >
                Follow on LinkedIn
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
