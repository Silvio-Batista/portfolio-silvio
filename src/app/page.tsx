"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-300 to-blue-200 text-black min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}
