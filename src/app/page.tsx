"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Roadmap from "@/components/Roadmap";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Terminal />
      <Roadmap />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
