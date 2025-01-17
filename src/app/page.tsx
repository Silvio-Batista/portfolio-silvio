"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="bg-gradient-to-b from-gray-300 to-blue-200 text-black min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-2xl uppercase font-semibold">Olá, meu nome é</h1>
        <h2 className="text-5xl font-bold text-blue-800">Silvio Batista</h2>
        <p className="text-lg text-gray-700 max-w-md">
          Sou um Programador Back-End com experiência em TypeScript, Laravel,
          PHP, MySQL e servidores. Também possuo conhecimentos em Front-End,
          utilizando Next.js e React para criar interfaces modernas e
          funcionais.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-blue-800 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition duration-300"
        >
          Conheça meu trabalho
        </button>
      </section>

      {/* About Section */}
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}
