"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-lg border border-card bg-card ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 flex items-center justify-center rounded-lg border border-card bg-card text-muted hover:text-terminal-purple hover:border-terminal-purple/40 hover:shadow-glow-purple transition-all duration-200 ${className}`}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      title={theme === "dark" ? "Tema claro" : "Tema escuro"}
    >
      {theme === "dark" ? (
        <FaSun className="text-sm text-terminal-purple" />
      ) : (
        <FaMoon className="text-sm text-terminal-purple" />
      )}
    </button>
  );
}
