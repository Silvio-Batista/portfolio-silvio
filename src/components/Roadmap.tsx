"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaFlag, FaProjectDiagram } from "react-icons/fa";
import { timelineItems } from "@/data/timeline";
import { TimelineItemType } from "@/types";
import Section from "./ui/Section";

const typeConfig: Record<
  TimelineItemType,
  { icon: React.ComponentType<{ className?: string }>; color: string; label: string }
> = {
  work: { icon: FaBriefcase, color: "text-terminal-cyan", label: "Trabalho" },
  milestone: { icon: FaFlag, color: "text-terminal-purple", label: "Marco" },
  project: { icon: FaProjectDiagram, color: "text-terminal-green", label: "Projeto" },
};

function getInitials(text: string) {
  return text
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      title="Trajetória Profissional"
      subtitle="Da primeira oportunidade aos projetos que construo hoje"
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green via-terminal-cyan to-terminal-purple opacity-30" />

        <div className="flex flex-col gap-5 sm:gap-8">
          {timelineItems.map((item, index) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 sm:pl-16 md:pl-20"
              >
                <div
                  className={`absolute left-1.5 sm:left-3 md:left-5 top-5 sm:top-6 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-surface-elevated border border-card flex items-center justify-center ${config.color}`}
                >
                  <Icon className="text-xs" />
                </div>

                <div className="glass-card p-4 sm:p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-row items-start gap-3 sm:gap-4">
                    {item.logo ? (
                      <div className="w-14 h-14 rounded-xl bg-card border border-card flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                        <img
                          src={item.logo}
                          alt={item.subtitle || item.title}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.classList.add(
                                "bg-gradient-to-br",
                                "from-terminal-green/20",
                                "to-terminal-cyan/20"
                              );
                              parent.innerHTML = `<span class="text-terminal-green font-bold text-sm">${getInitials(item.subtitle || item.title)}</span>`;
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-terminal-green/20 to-terminal-cyan/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-terminal-green font-bold text-sm">
                          {getInitials(item.subtitle || item.title)}
                        </span>
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-full bg-card border border-card ${config.color}`}
                        >
                          {config.label}
                        </span>
                        <span className="text-xs text-muted font-mono">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 leading-snug">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-terminal-purple transition-colors"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>

                      {item.subtitle && (
                        <p className="text-terminal-cyan text-sm font-medium mb-2">
                          {item.subtitle}
                        </p>
                      )}

                      <p className="text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
