"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { scrollToSection } from "@/lib/scroll";

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

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 sm:pt-28 bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-terminal-green/5 via-terminal-purple/5 to-terminal-cyan/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-terminal-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-terminal-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-5 sm:space-y-6 max-w-2xl w-full">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terminal-green/30 via-terminal-purple/20 to-terminal-cyan/30 blur-xl scale-110" />
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-terminal-purple/40 shadow-glow-purple overflow-hidden bg-surface-elevated">
            <img
              src="/images/profile.jpg"
              alt="Foto de Silvio Batista"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="font-mono text-left w-full glass-card px-4 sm:px-5 py-3.5 sm:py-4 text-xs sm:text-sm relative overflow-hidden">
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-terminal-purple/50 to-transparent" />
          <p className="text-muted break-all sm:break-normal">
            <span className="text-terminal-green">silvio@bredi</span>
            <span className="text-terminal-purple">:~$</span> whoami
          </p>
          <p className="text-terminal-cyan mt-1 text-sm sm:text-base">
            {typedName}
            <span className="animate-blink text-terminal-purple">█</span>
          </p>
          <p className="text-muted mt-2 break-all sm:break-normal">
            <span className="text-terminal-green">silvio@bredi</span>
            <span className="text-terminal-purple">:~$</span> cat role.txt
          </p>
          <p className="text-foreground/80 mt-1 text-sm">
            Desenvolvedor Web FullStack &bull; Belém, PA
          </p>
        </div>

        <p className="text-muted max-w-lg leading-relaxed text-sm sm:text-base px-1">
          Desenvolvedor back-end apaixonado por APIs robustas, sistemas escaláveis
          e código limpo. Atuo na{" "}
          <span className="text-terminal-green">Bredi Tecnologia</span> criando
          soluções para clientes de grande porte no Pará e Brasil.
        </p>

        <div className="flex gap-3 justify-center">
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

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 justify-center px-2">
          <button
            onClick={() => scrollToSection("terminal")}
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-mono text-sm bg-terminal-green/10 border border-terminal-green/40 text-terminal-green hover:bg-terminal-green/20 transition-all min-h-[48px]"
          >
            Ver terminal
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-mono text-sm bg-terminal-purple/10 border border-terminal-purple/30 text-terminal-purple hover:bg-terminal-purple/20 transition-all flex items-center justify-center gap-2 min-h-[48px]"
          >
            Projetos <FaArrowDown className="text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
