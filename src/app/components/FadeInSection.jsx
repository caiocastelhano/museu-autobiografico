"use client";
import { motion } from "framer-motion";

export default function FadeInSection({ children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
