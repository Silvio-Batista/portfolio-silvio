"use client";

import { motion } from "framer-motion";
import { educationItems } from "@/data/education";
import Section from "./ui/Section";

const statusStyles = {
  concluído: "bg-terminal-green/20 text-terminal-green border-terminal-green/30",
  "em andamento": "bg-terminal-cyan/20 text-terminal-cyan border-terminal-cyan/30",
  previsto: "bg-terminal-purple/20 text-terminal-purple border-terminal-purple/30",
};

function InstitutionLogo({
  logo,
  institution,
}: {
  logo?: string;
  institution: string;
}) {
  if (logo) {
    return (
      <div className="w-16 h-16 rounded-xl bg-card border border-card flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
        <img
          src={logo}
          alt={institution}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-terminal-purple/30 to-terminal-cyan/30 border border-card flex items-center justify-center flex-shrink-0">
      <span className="text-lg font-bold text-terminal-cyan">
        {institution.charAt(0)}
      </span>
    </div>
  );
}

export default function Education() {
  return (
    <Section
      id="education"
      title="Formação Acadêmica"
      subtitle="Base técnica e acadêmica em constante evolução"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {educationItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-5 sm:p-6 flex flex-col gap-3 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2">
              <InstitutionLogo logo={item.logo} institution={item.institution} />
              <span
                className={`text-xs font-mono px-2 py-1 rounded-full border ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground">
                {item.institution}
              </h3>
              <p className="text-terminal-cyan text-sm font-medium mt-1">
                {item.course}
              </p>
              <p className="text-muted text-xs font-mono mt-1">
                {item.period}
              </p>
            </div>

            {item.description && (
              <p className="text-muted text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
