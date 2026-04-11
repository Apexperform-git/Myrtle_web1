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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalOpen(true)}
            className="fixed bottom-6 right-6 z-40 px-5 py-3 bg-orange text-midnight font-body font-semibold text-sm rounded-full shadow-lg hover:bg-orange-light transition-colors duration-200"
            aria-label="Request a demo"
          >
            Request Demo
          </motion.button>
        )}
      </AnimatePresence>

      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
