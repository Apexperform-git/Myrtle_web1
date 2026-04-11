"use client";

import CountUp from "@/components/animations/CountUp";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlowingOrb from "@/components/animations/GlowingOrb";

const metrics = [
  {
    value: 50,
    suffix: "%+",
    label: "Non-Value-Added Reduction",
    description: "Cut waste systematically through real-time operational intelligence.",
    color: "orange" as const,
  },
  {
    value: 3,
    suffix: "×",
    label: "Faster Recovery",
    description: "Context-rich guidance accelerates recovery from disturbances.",
    color: "plum" as const,
  },
  {
    value: 100,
    suffix: "%",
    label: "Operator Control",
    description: "OmnI never acts on its own. The operator always decides.",
    color: "orange-light" as const,
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-32 overflow-hidden bg-midnight-card">
      <GlowingOrb color="orange" size="lg" className="-top-32 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-orange">
              Impact
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-foreground">
              Reduce Firefighting.{" "}
              <span className="text-orange italic">Reveal What Matters Next.</span>
            </h2>
            <p className="mt-5 text-muted text-lg max-w-2xl mx-auto">
              Bridge AI, Operational Intelligence, OT and Human Capital — cut
              Non-Value-Added time by 50% or more.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => {
            const colorClasses = {
              orange: "text-orange border-orange/20 bg-orange-glow",
              plum: "text-plum-light border-plum/20 bg-plum-glow",
              "orange-light": "text-orange-light border-orange-light/20 bg-orange-light-glow",
            };

            return (
              <ScrollReveal key={metric.label} delay={i * 0.15}>
                <div className="relative p-10 rounded-2xl border border-midnight-border bg-midnight text-center group hover:border-midnight-border/80 transition-all duration-500">
                  {/* Glow background on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${colorClasses[metric.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className={`font-display text-6xl lg:text-7xl ${colorClasses[metric.color].split(" ")[0]}`}>
                      <CountUp end={metric.value} suffix={metric.suffix} />
                    </div>
                    <h3 className="mt-4 font-body text-lg font-semibold text-foreground">
                      {metric.label}
                    </h3>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
