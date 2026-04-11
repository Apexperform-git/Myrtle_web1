"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";

import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";

const categories = ["All", "Case Studies", "Thought Leadership", "News"];

const articles = [
  {
    category: "Case Studies",
    title: "50% NVA Reduction in Automotive Assembly",
    excerpt:
      "How a leading automotive manufacturer used OmnI to cut non-value-added time in half within three months of deployment.",
    date: "March 2026",
    readTime: "5 min read",
    color: "orange" as const,
  },
  {
    category: "Thought Leadership",
    title: "The End of Firefighting: Why Manufacturing Needs Navigation",
    excerpt:
      "Traditional dashboards tell you what happened. Operators need to know what to do now. The shift from reporting to guidance.",
    date: "February 2026",
    readTime: "8 min read",
    color: "plum" as const,
  },
  {
    category: "Case Studies",
    title: "From Guessing to Estimating: A Packaging Line Story",
    excerpt:
      "A real-world case of how shift operators went from reactive decision-making to confident, guided operations.",
    date: "February 2026",
    readTime: "6 min read",
    color: "orange" as const,
  },
  {
    category: "News",
    title: "OmnI Voice Co-Pilot: Natural Speech Interaction Now Available",
    excerpt:
      "Introducing TTS/STT-enabled guidance that lets operators interact with OmnI through natural conversation during critical moments.",
    date: "January 2026",
    readTime: "3 min read",
    color: "orange-light" as const,
  },
  {
    category: "Thought Leadership",
    title: "Human-Centric AI: Why the Operator Must Always Decide",
    excerpt:
      "Exploring the design philosophy behind OmnI's approach: intelligence that supports, explains, and respects human judgment.",
    date: "January 2026",
    readTime: "10 min read",
    color: "plum" as const,
  },
  {
    category: "News",
    title: "Myrtle Europe Launches Brown Paper Digital Analysis",
    excerpt:
      "Combining traditional Brown Paper methodology with digital intelligence for comprehensive Value Stream Mapping.",
    date: "December 2025",
    readTime: "4 min read",
    color: "orange-light" as const,
  },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

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
            <Badge variant="plum">Insights</Badge>
            <h1 className="mt-8 font-display text-5xl lg:text-7xl text-foreground leading-tight max-w-4xl">
              Operational Intelligence{" "}
              <span className="text-plum-light italic">Insights</span>
            </h1>
            <p className="mt-6 text-muted text-xl max-w-2xl leading-relaxed">
              Case studies, thought leadership, and news from the world of
              human-centric operational intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Articles */}
      <section className="py-20 bg-midnight-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-orange text-midnight"
                    : "bg-midnight border border-midnight-border text-muted hover:text-foreground hover:border-midnight-border/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((article, i) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl border border-midnight-border bg-midnight hover:border-midnight-border/80 transition-all duration-500 h-full flex flex-col card-glow">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant={article.color}>{article.category}</Badge>
                      <span className="font-mono text-[10px] tracking-wider text-muted/40">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-4 group-hover:text-orange transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 pt-6 border-t border-midnight-border/30 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted/50">
                        {article.date}
                      </span>
                      <span className="text-orange text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Read more
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-orange">
              Newsletter
            </span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-foreground">
              Get Operational Intelligence{" "}
              <span className="text-orange italic">Insights</span>
            </h2>
            <p className="mt-4 text-muted">
              Periodic updates on operational intelligence, decision-making, and
              human-centric manufacturing.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-midnight-card border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange text-midnight font-body font-semibold text-sm rounded-xl hover:bg-orange-light transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-muted/40 text-xs">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
