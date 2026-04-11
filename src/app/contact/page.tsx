"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";

export default function ContactPage() {
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
            <Badge>Contact</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-4xl">
              Test OmnI on{" "}
              <span className="text-orange italic">Your Reality</span>
            </h1>
            <p className="mt-6 text-muted text-xl max-w-2xl leading-relaxed">
              We don&apos;t believe in generic demos. Bring one real line, one
              real shift, one real problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-32 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="p-8 lg:p-10 rounded-2xl border border-midnight-border bg-midnight">
                <h2 className="font-display text-2xl text-foreground mb-8">
                  Request a Demo
                </h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                      Tell Us About Your Operation
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none resize-none"
                      placeholder="Describe your line, your shift, your challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-orange text-midnight font-body font-semibold text-base rounded-xl hover:bg-orange-light transition-all duration-300 shadow-lg shadow-orange/10 hover:shadow-orange/30"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: "01",
                        title: "We review your request",
                        text: "Our team evaluates your operational context to prepare a meaningful conversation.",
                      },
                      {
                        step: "02",
                        title: "We schedule a call",
                        text: "A focused discussion about your specific challenges and how OmnI can address them.",
                      },
                      {
                        step: "03",
                        title: "We run a live test",
                        text: "We generate live cases from your real operational data — not from slides or generic scenarios.",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15 }}
                        className="flex gap-4"
                      >
                        <span className="font-mono text-sm text-orange/40 mt-1 flex-shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="font-body font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-muted text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-8 rounded-2xl border border-midnight-border bg-midnight">
                  <h4 className="font-mono text-xs tracking-widest uppercase text-orange mb-6">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@myrtle-europe.com"
                      className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                    >
                      <svg className="w-5 h-5 text-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">info@myrtle-europe.com</span>
                    </a>
                    <a
                      href="https://linkedin.com/company/110151100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                    >
                      <svg className="w-5 h-5 text-orange/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-8 rounded-2xl border border-midnight-border bg-midnight">
                  <h4 className="font-mono text-xs tracking-widest uppercase text-orange mb-4">
                    Stay Updated
                  </h4>
                  <p className="text-muted text-sm mb-4">
                    Get insights on operational intelligence and decision-making.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2.5 bg-midnight-card border border-midnight-border rounded-lg text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-orange/10 text-orange border border-orange/20 rounded-lg text-sm font-medium hover:bg-orange/20 transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-muted/40 text-xs mt-3">
                    We respect your privacy. Only OmnI updates.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
