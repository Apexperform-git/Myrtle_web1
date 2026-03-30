"use client";

import Link from "next/link";

const productLinks = [
  { label: "What is OmnI", href: "/what-is-omni" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "How OmnI Thinks", href: "/how-omni-thinks" },
  { label: "Insights", href: "/insights" },
];

const companyLinks = [
  { label: "About Myrtle Europe", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-midnight-border/50 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center">
                <span className="font-display text-midnight text-lg font-bold">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-sm font-semibold tracking-wider uppercase">
                  Myrtle Europe
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-amber">
                  OmnI Navigation
                </span>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Human-centric operational intelligence that learns, reasons, and
              guides. Operators in control. Always.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber mb-6">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://linkedin.com/company/110151100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
                >
                  LinkedIn
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber mb-6">
              Stay Updated
            </h4>
            <p className="text-muted text-sm mb-4">
              Get insights on operational intelligence and decision-making.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-midnight-card border border-midnight-border rounded-lg text-sm text-foreground placeholder:text-muted/50 focus:border-amber/50 focus:ring-1 focus:ring-amber/20 transition-all duration-300 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-amber/10 text-amber border border-amber/20 rounded-lg text-sm font-medium hover:bg-amber/20 transition-all duration-300"
              >
                →
              </button>
            </form>
            <p className="text-muted/50 text-xs mt-3">
              We respect your privacy. Only OmnI updates.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-midnight-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Myrtle Europe. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted/30 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span>OmnI systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
