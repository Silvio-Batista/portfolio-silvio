"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 bg-grid relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-terminal-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            <span className="text-terminal-purple font-mono text-sm sm:text-lg block mb-2">
              {"// "}
              {id}
            </span>
            {title}
          </h2>
          <div className="accent-line" />
          {subtitle && (
            <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4 px-2">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
