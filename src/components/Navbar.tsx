"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="mx-auto mt-4 flex items-center justify-center rounded-full shadow-lg px-6 py-2 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 bg-opacity-90 backdrop-blur-md border border-blue-200/40 max-w-2xl"
        style={{ transition: "box-shadow 0.3s" }}
      >
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            >
              Experiência
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            >
              Contato
            </button>
          </li>
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-2">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Abrir menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-2 animate-fade-in">
          <ul className="bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 text-white rounded-2xl shadow-lg py-4 px-8 space-y-3 border border-blue-200/40">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full px-3 py-2 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full px-3 py-2 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="w-full px-3 py-2 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              >
                Experiência
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-3 py-2 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}</style>
    </header>
  );
}
