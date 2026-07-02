"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Silvio Batista";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-terminal-green/5 via-terminal-purple/5 to-terminal-cyan/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-terminal-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-terminal-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-terminal-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terminal-green/30 via-terminal-purple/20 to-terminal-cyan/30 blur-xl scale-110" />
          <div className="relative w-32 h-32 rounded-full border-2 border-terminal-purple/40 shadow-glow-purple overflow-hidden bg-surface-elevated">
            <img
              src="/images/profile.jpg"
              alt="Foto de Silvio Batista"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="font-mono text-left w-full max-w-md mx-auto glass-card px-5 py-4 text-sm relative">
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-terminal-purple/50 to-transparent" />
          <p className="text-muted">
            <span className="text-terminal-green">silvio@bredi</span>
            <span className="text-terminal-purple">:~$</span> whoami
          </p>
          <p className="text-terminal-cyan mt-1">
            {typedName}
            <span className="animate-blink text-terminal-purple">█</span>
          </p>
          <p className="text-muted mt-2">
            <span className="text-terminal-green">silvio@bredi</span>
            <span className="text-terminal-purple">:~$</span> cat role.txt
          </p>
          <p className="text-foreground/80 mt-1">
            Desenvolvedor Web FullStack &bull; Belém, PA
          </p>
        </div>

        <p className="text-muted max-w-lg leading-relaxed">
          Desenvolvedor back-end apaixonado por APIs robustas, sistemas escaláveis
          e código limpo. Atuo na{" "}
          <span className="text-terminal-green">Bredi Tecnologia</span> criando
          soluções para clientes de grande porte no Pará e Brasil.
        </p>

        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/Silvio-Batista"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-lg glass-card text-muted hover:text-terminal-green hover:border-terminal-green/30 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/silviobatista"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-lg glass-card text-muted hover:text-terminal-purple hover:border-terminal-purple/30 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => scrollToSection("terminal")}
            className="px-6 py-2.5 rounded-lg font-mono text-sm bg-terminal-green/10 border border-terminal-green/40 text-terminal-green hover:bg-terminal-green/20 transition-all"
          >
            Ver terminal
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2.5 rounded-lg font-mono text-sm bg-terminal-purple/10 border border-terminal-purple/30 text-terminal-purple hover:bg-terminal-purple/20 transition-all flex items-center gap-2"
          >
            Projetos <FaArrowDown className="text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
