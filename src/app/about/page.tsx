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
    icon: "👤",
  },
  {
    title: "Radical Transparency",
    description:
      "Every recommendation is explainable. No black boxes, no hidden scores. If it can't explain itself, it's noise.",
    icon: "🔍",
  },
  {
    title: "Operational Truth",
    description:
      "We start with reality as-is, not how it should be. Plans are ideal. Reports are past. Operators live in now.",
    icon: "📊",
  },
  {
    title: "Continuous Learning",
    description:
      "OmnI improves with every shift observed. It doesn't claim certainty — it presents informed possibilities.",
    icon: "🔄",
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
        <GlowingOrb color="amber" size="lg" className="top-20 -right-48" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>About</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-4xl">
              We believe factories are not poorly run —{" "}
              <span className="text-amber italic">they are poorly guided.</span>
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
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber">
                  Our Story
                </span>
                <h2 className="mt-6 font-display text-4xl text-foreground leading-tight">
                  From operational frustration to{" "}
                  <span className="text-amber italic">intelligent guidance</span>
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
                <div className="absolute left-3 top-2 bottom-2 w-px bg-amber/20" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <div className="absolute left-[-22px] top-1 w-3 h-3 rounded-full border-2 border-amber bg-midnight" />
                    <span className="font-mono text-xs tracking-wider uppercase text-amber">
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
                <span className="text-3xl">{value.icon}</span>
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
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber">
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
        <GlowingOrb color="amber" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              Let&apos;s Talk{" "}
              <span className="text-amber italic">Operations</span>
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
