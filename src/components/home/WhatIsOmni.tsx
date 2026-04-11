"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Learns how your operation actually behaves — signals, events, context. Reality as-is.",
    color: "text-orange",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.5" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Reasoning",
    description:
      "Simulates near-future scenarios and compares possible actions. What may happen next.",
    color: "text-plum-light",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <path d="M8 16h16M16 8v16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10l12 12M22 10L10 22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Guidance",
    description:
      "Gives clear, explainable steps with expected effect and timing. What to do now.",
    color: "text-orange-light",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M8 12l8-8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 28h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhatIsOmni() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="How OmnI Works"
          title="Understanding, Reasoning, Guidance"
          subtitle="OmnI turns data into confident action — not reports after the fact."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <Card key={step.number} delay={i * 0.15}>
              <div className={`${step.color} mb-5`}>{step.icon}</div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-widest text-muted/40">
                  {step.number}
                </span>
                <h3 className={`font-display text-xl ${step.color}`}>
                  {step.title}
                </h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
