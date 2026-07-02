"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "about", label: "Sobre" },
  { id: "terminal", label: "Terminal" },
  { id: "roadmap", label: "Trajetória" },
  { id: "projects", label: "Projetos" },
  { id: "education", label: "Formação" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <nav className="mx-auto mt-4 flex items-center justify-between rounded-xl shadow-lg px-4 py-2 bg-surface/80 backdrop-blur-md border border-card max-w-4xl relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terminal-purple/40 to-transparent" />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-terminal-green hover:text-terminal-purple transition-colors px-2 z-10"
        >
          ~/silvio
        </button>

        <ul className="hidden md:flex space-x-1 z-10">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all duration-200 ${
                  activeSection === id
                    ? "bg-terminal-purple/15 text-terminal-purple border border-terminal-purple/25 shadow-glow-purple"
                    : "text-muted hover:text-foreground hover:bg-card border border-transparent"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 z-10">
          <ThemeToggle className="hidden md:flex" />
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-muted hover:text-foreground p-2 rounded-lg hover:bg-card transition"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mx-auto mt-2 max-w-4xl animate-fade-in">
          <ul className="bg-surface/95 backdrop-blur-md border border-card rounded-xl shadow-lg py-3 px-4 space-y-1">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-mono transition-all ${
                    activeSection === id
                      ? "bg-terminal-purple/15 text-terminal-purple border border-terminal-purple/25"
                      : "text-muted hover:bg-card hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-card flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
