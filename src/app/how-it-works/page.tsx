"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";


export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <GlowingOrb color="plum" size="lg" className="top-20 -left-48" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="plum">How It Works</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-5xl">
              What is <span className="text-plum-light italic">really happening</span>{" "}
              on the line.
            </h1>
            <p className="mt-6 text-muted text-xl max-w-2xl leading-relaxed">
              Not what should happen. Not what was planned. But what is
              happening now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge>Reality</Badge>
                <h2 className="mt-6 font-display text-4xl text-foreground">
                  OmnI observes what is{" "}
                  <span className="text-orange italic">actually</span> happening
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  The system monitors process flow, signals, stops, and line
                  rhythm continuously. Through observation, it learns:
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "What works",
                    "What causes loss",
                    "What helps recovery",
                    "What makes things worse",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-muted"
                    >
                      <div className="w-6 h-px bg-orange/60" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-8 text-muted leading-relaxed">
                  Best practices emerge from real operation — not predetermined
                  theory. Available on intranet, floor, office, or secure remote
                  connection.
                </p>
              </div>
            </ScrollReveal>

            {/* Signal visualization mockup */}
            <ScrollReveal direction="right">
              <div className="relative p-8 rounded-2xl border border-midnight-border bg-midnight overflow-hidden">
                <div className="font-mono text-xs text-muted/50 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-light animate-pulse" />
                  LIVE SIGNALS
                </div>
                {/* Fake signal bars */}
                {[0.7, 0.9, 0.5, 0.8, 0.6, 0.95, 0.4, 0.85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    className="inline-block w-[10%] mx-[1%] origin-bottom rounded-t"
                    style={{
                      height: `${h * 120}px`,
                      background:
                        h > 0.8
                          ? "rgba(240, 168, 85, 0.4)"
                          : h > 0.5
                          ? "rgba(232, 146, 58, 0.4)"
                          : "rgba(239, 68, 68, 0.4)",
                    }}
                  />
                ))}
                <div className="mt-4 h-px bg-midnight-border" />
                <div className="mt-3 flex justify-between font-mono text-[10px] text-muted/30">
                  <span>06:00</span>
                  <span>09:00</span>
                  <span>12:00</span>
                  <span>15:00</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-8">
              If you have ever asked
            </p>
            <div className="space-y-4">
              {[
                "What should I do now?",
                "What is really going on?",
                "What will this cause later?",
              ].map((q, i) => (
                <motion.p
                  key={q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="font-display text-3xl lg:text-4xl text-foreground"
                >
                  {q}
                </motion.p>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-orange font-body text-lg"
            >
              Then OmnI was built for you.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Foresight Section */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Timeline visualization */}
            <ScrollReveal direction="left">
              <div className="relative p-8 rounded-2xl border border-midnight-border bg-midnight">
                <div className="font-mono text-xs text-muted/50 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                  FORESIGHT ENGINE
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-midnight-border" />

                  {[
                    { time: "08:15", event: "Minor delay detected", status: "warning", color: "orange" },
                    { time: "08:22", event: "Pattern matches pre-stop sequence", status: "alert", color: "orange" },
                    { time: "08:25", event: "Suggested: Reduce speed 5%", status: "guidance", color: "orange-light" },
                    { time: "08:30", event: "40-min recovery stop prevented", status: "success", color: "orange-light" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.time}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                      className="relative pl-10 pb-6 last:pb-0"
                    >
                      <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 ${
                        item.color === "orange-light"
                          ? "border-orange-light bg-orange-light/20"
                          : "border-orange bg-orange/20"
                      }`} />
                      <span className="font-mono text-xs text-muted/50">{item.time}</span>
                      <p className={`text-sm mt-1 ${
                        item.color === "orange-light" ? "text-orange-light" : "text-orange"
                      }`}>
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <Badge variant="plum">Foresight</Badge>
                <h2 className="mt-6 font-display text-4xl text-foreground">
                  Detect warning signs{" "}
                  <span className="text-plum-light italic">before</span> they escalate
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Most systems wait for failures. OmnI detects early shift
                  patterns before stops occur, suggesting preventive adjustments.
                </p>
                <blockquote className="mt-8 pl-6 border-l-2 border-orange/30">
                  <p className="text-foreground italic font-display text-lg">
                    &ldquo;One small slowdown prevented a 40-minute recovery stop.&rdquo;
                  </p>
                </blockquote>
                <p className="mt-8 text-muted leading-relaxed">
                  The best shift is not one with heroic fixes — it&apos;s one
                  where nothing went wrong at all.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge variant="orange-light">Guidance</Badge>
                <h2 className="mt-6 font-display text-4xl text-foreground">
                  Your operational{" "}
                  <span className="text-orange-light italic">co-pilot</span>
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Voice-enabled insight through TTS/STT for a collaborative
                  co-pilot experience. OmnI listens, suggests, and explains —
                  while you stay in control.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Clear foresight into potential issues",
                    "Context-rich, explainable recommendations",
                    "Natural speech interaction at decision moments",
                    "Human-machine collaboration, not replacement",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-5 h-5 text-orange-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Voice waveform mockup */}
            <ScrollReveal direction="right">
              <div className="relative p-8 rounded-2xl border border-midnight-border bg-midnight overflow-hidden">
                <div className="font-mono text-xs text-muted/50 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-light animate-pulse" />
                  CO-PILOT ACTIVE
                </div>

                {/* Voice waveform */}
                <div className="flex items-center justify-center gap-1 h-20">
                  {Array.from({ length: 32 }, (_, i) => {
                    const h = Math.sin(i * 0.5) * 30 + 35 + Math.random() * 15;
                    return (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.1 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + i * 0.03,
                          duration: 0.3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: Math.random() * 2,
                        }}
                        className="w-1.5 rounded-full bg-orange-light/40"
                        style={{ height: `${h}%` }}
                      />
                    );
                  })}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-midnight-card/50 border border-midnight-border/50">
                  <p className="text-sm text-orange-light font-mono">
                    &ldquo;Line 3 showing early pattern similar to yesterday&apos;s
                    08:45 slowdown. Suggest reducing feed rate by 5% for the
                    next 10 minutes.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Outcomes"
            title="What Operators & Decision Makers Get"
            subtitle="Less firefighting. Faster recovery. Fewer repeated losses. More control during the shift — where it matters."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Less Firefighting",
                description: "Clear foresight into potential issues before they become problems.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                title: "Faster Recovery",
                description: "Context-rich suggestions that accelerate recovery from disturbances.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Fewer Losses",
                description: "Understanding operational consequences before they impact KPIs.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.95 11.95 0 014.306 6.43l.776 2.898M2.25 6l3 6m-3-6h6" />
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description: "Natural human-machine interaction at critical decision moments.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Card key={item.title} delay={i * 0.1}>
                <div className="text-orange">{item.icon}</div>
                <h3 className="mt-4 font-body font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb color="orange" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">
              See It in <span className="text-orange italic">Action</span>
            </h2>
            <p className="mt-6 text-muted text-lg">
              Experience how OmnI transforms your operational reality into
              confident guidance.
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
