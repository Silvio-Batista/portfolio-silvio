"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { terminalScenarios } from "@/data/terminal";
import { useTypewriter } from "@/hooks/useTypewriter";
import { TerminalLineType } from "@/types";
import Section from "./ui/Section";

const lineColors: Record<TerminalLineType, string> = {
  input: "text-gray-100",
  output: "text-gray-500",
  success: "text-terminal-green",
  error: "text-red-400",
  info: "text-terminal-cyan",
};

const SCENARIO_INTERVAL = 15000;

export default function Terminal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scenarioKey, setScenarioKey] = useState(0);
  const scenario = terminalScenarios[activeIndex];

  const handleComplete = useCallback(() => {
    // wait before auto-switching
  }, []);

  const { displayedLines, isTyping } = useTypewriter({
    lines: scenario.lines,
    onComplete: handleComplete,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % terminalScenarios.length);
      setScenarioKey((k) => k + 1);
    }, SCENARIO_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const selectScenario = (index: number) => {
    setActiveIndex(index);
    setScenarioKey((k) => k + 1);
  };

  return (
    <Section
      id="terminal"
      title="Terminal"
      subtitle="Um vislumbre do que rola no dia a dia de desenvolvimento"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="rounded-xl overflow-hidden border border-terminal-purple/20 shadow-2xl shadow-glow-purple bg-[#0d1117]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-terminal-purple/15">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-terminal-purple/80" />
            <span className="ml-3 text-gray-500 text-sm font-mono">
              silvio@bredi:~/portfolio
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scenarioKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 md:p-6 min-h-[280px] font-mono text-sm md:text-base"
            >
              {displayedLines.map((line, index) => (
                <div
                  key={index}
                  className={`${lineColors[line.type]} leading-relaxed`}
                >
                  {line.type === "input" && (
                    <span className="text-terminal-purple">silvio@bredi:~$ </span>
                  )}
                  {line.displayedText}
                </div>
              ))}
              {isTyping && displayedLines.length > 0 && (
                <span className="text-terminal-purple animate-blink">█</span>
              )}
              {!isTyping && displayedLines.length === 0 && (
                <div className="text-gray-500">
                  <span className="text-terminal-purple">silvio@bredi:~$ </span>
                  <span className="animate-blink">█</span>
                </div>
              )}
              {!isTyping && displayedLines.length > 0 && (
                <div className="mt-2">
                  <span className="text-terminal-purple">silvio@bredi:~$ </span>
                  <span className="animate-blink">█</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {terminalScenarios.map((s, index) => (
            <button
              key={s.id}
              onClick={() => selectScenario(index)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 border ${
                activeIndex === index
                  ? "bg-terminal-purple/20 border-terminal-purple text-terminal-purple"
                  : "bg-card border-card text-muted hover:border-terminal-purple/30 hover:text-foreground"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
