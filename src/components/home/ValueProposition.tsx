"use client";

import CountUp from "@/components/animations/CountUp";
import ScrollReveal from "@/components/animations/ScrollReveal";

const metrics = [
  {
    value: 50,
    suffix: "%+",
    label: "Non-Value-Added Reduction",
    description: "Cut waste systematically through real-time operational intelligence.",
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster Recovery",
    description: "Context-rich guidance accelerates recovery from disturbances.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Operator Control",
    description: "OmnI never acts on its own. The operator always decides.",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-midnight-card">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-widest uppercase text-orange/80">
              Impact
            </span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl text-foreground">
              Reduce Firefighting.{" "}
              <span className="text-orange">Reveal What Matters Next.</span>
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Bridge AI, Operational Intelligence, OT and Human Capital — cut
              Non-Value-Added time by 50% or more.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.12}>
              <div className="p-8 rounded-2xl border border-midnight-border bg-midnight text-center hover:border-orange/15 transition-colors duration-400">
                <div className="font-display text-5xl text-orange">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="mt-3 font-body text-sm font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
