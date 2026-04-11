"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-lg bg-midnight-card border border-midnight-border rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-8">
                <span className="font-mono text-xs tracking-widest uppercase text-orange">
                  Request Demo
                </span>
                <h3 className="font-display text-2xl mt-2 text-foreground">
                  Test OmnI on Your Reality
                </h3>
                <p className="text-muted text-sm mt-2">
                  Bring one real line, one real shift, one real problem. We
                  generate live cases from your reality — not from slides.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-midnight border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-midnight border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-midnight border border-midnight-border rounded-xl text-sm text-foreground placeholder:text-muted/40 focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your operation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange text-midnight font-body font-semibold rounded-xl hover:bg-orange-light transition-all duration-300 shadow-lg shadow-orange/10"
                >
                  Request Demo
                </button>
              </form>

              <p className="text-muted/40 text-xs text-center mt-4">
                We&apos;ll respond within 24 hours. No spam, ever.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
