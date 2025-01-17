"use client";

import React from "react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 bg-opacity-90 backdrop-blur-md">
      <nav className="bg-blue-800 text-white py-2 px-8 rounded-full shadow-md flex space-x-8 mt-2">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-purple-300 transition"
        >
          Sobre
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-purple-300 transition"
        >
          Projetos
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="hover:text-purple-300 transition"
        >
          Experiência
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-purple-300 transition"
        >
          Contato
        </button>
      </nav>
    </header>
  );
}
