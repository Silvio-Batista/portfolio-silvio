"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";
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
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigate = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 safe-top">
      <nav className="mx-auto mt-2 sm:mt-4 flex items-center justify-between rounded-xl shadow-lg px-3 sm:px-4 py-2.5 bg-surface/90 backdrop-blur-md border border-card max-w-4xl relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terminal-purple/40 to-transparent" />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs sm:text-sm text-terminal-green hover:text-terminal-purple transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center"
        >
          ~/silvio
        </button>

        <ul className="hidden lg:flex space-x-1 z-10">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => navigate(id)}
                className={`px-3 py-2 rounded-lg text-sm font-mono transition-all duration-200 min-h-[44px] ${
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

        <div className="flex items-center gap-1.5 z-10">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-muted hover:text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-card transition"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
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
        <>
          <button
            className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          />
          <div className="lg:hidden fixed left-3 right-3 top-[4.5rem] z-50 animate-fade-in safe-top">
            <ul className="bg-surface/98 backdrop-blur-md border border-card rounded-xl shadow-2xl py-2 px-2 space-y-0.5 max-h-[calc(100dvh-6rem)] overflow-y-auto">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => navigate(id)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-base font-mono transition-all min-h-[48px] ${
                      activeSection === id
                        ? "bg-terminal-purple/15 text-terminal-purple border border-terminal-purple/25"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
