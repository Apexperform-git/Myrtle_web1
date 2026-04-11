"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const feelings = [
  {
    text: "Less firefighting",
    icon: (
      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    text: "Faster recovery",
    icon: (
      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    text: "Fewer repeated losses",
    icon: (
      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.95 11.95 0 014.306 6.43l.776 2.898M2.25 6l3 6m-3-6h6" />
      </svg>
    ),
  },
  {
    text: "Operators supported, not judged",
    icon: (
      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function HowItFeels() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal direction="left">
              <span className="font-mono text-[10px] tracking-widest uppercase text-orange/80">
                The Experience
              </span>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl text-foreground leading-tight">
                Good systems make good people{" "}
                <span className="text-orange">better.</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Bad systems make good people look bad. OmnI is designed to
                support, not surveil. It focuses on operational conditions — not
                personal performance.
              </p>
              <p className="mt-3 text-muted leading-relaxed text-sm">
                When operators disagree with a suggestion, OmnI respects that
                decision. Outcomes inform the system&apos;s learning — not the
                other way around.
              </p>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {feelings.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.08} direction="right">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-midnight-border/40 bg-midnight-card/30 hover:border-orange/15 transition-colors duration-300">
                  {item.icon}
                  <span className="font-body text-foreground">
                    {item.text}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
