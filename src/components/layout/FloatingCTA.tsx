"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoModal from "./DemoModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && !modalOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setModalOpen(true)}
            className="fixed bottom-8 right-8 z-40 group"
            aria-label="Request a demo"
          >
            <div className="relative px-6 py-3.5 bg-amber text-midnight font-body font-semibold text-sm rounded-full shadow-lg shadow-amber/20 hover:shadow-amber/40 hover:scale-105 transition-all duration-300">
              Request Demo
              <div className="absolute inset-0 rounded-full bg-amber/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
