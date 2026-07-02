"use client";

import { motion } from "framer-motion";
import TechCarousel from "./TechCarousel";
import Section from "./ui/Section";

const skills = [
  "TypeScript",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "React",
  "Next.js",
  "Docker",
  "Redis",
  "API REST",
];

export default function About() {
  return (
    <Section
      id="about"
      title="Sobre Mim"
      subtitle="Da curiosidade com Python à construção de sistemas de grande escala"
    >
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-terminal-purple/30 shadow-glow-purple overflow-hidden bg-surface-elevated">
              <img
                src="/images/profile.jpg"
                alt="Minha Foto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-foreground/80 leading-relaxed mb-6">
              Anos atrás, uma simples curiosidade me levou a fazer um curso de
              Python. Foi ali que descobri minha paixão por programação. Hoje,
              na{" "}
              <span className="text-terminal-green font-medium">
                Bredi Tecnologia
              </span>
              , desenvolvo sistemas para hospitais, clubes, times de futebol e
              startups — sempre com foco em APIs robustas, escalabilidade e
              entrega de valor real. Utilizo IA no dia a dia para acelerar
              desenvolvimento e elevar a qualidade do código.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-mono border ${
                    i % 3 === 0
                      ? "bg-terminal-green/10 border-terminal-green/20 text-terminal-green"
                      : i % 3 === 1
                        ? "bg-terminal-purple/10 border-terminal-purple/20 text-terminal-purple"
                        : "bg-terminal-cyan/10 border-terminal-cyan/20 text-terminal-cyan"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 border-terminal-purple/20"
        >
          <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
            <span className="text-terminal-purple">{"//"}</span> Objetivo
          </h3>
          <p className="text-muted leading-relaxed">
            Transformar ideias em experiências digitais marcantes, criando
            soluções que realmente façam diferença para pessoas e negócios.
            Busco sempre unir tecnologia, criatividade e qualidade em tudo o que
            desenvolvo.
          </p>
        </motion.div>

        <div>
          <h3 className="text-lg font-bold text-center mb-6 font-mono text-foreground">
            <span className="text-terminal-purple">{"//"}</span> Stack
          </h3>
          <TechCarousel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-24 h-24 rounded-xl bg-card border border-card flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src="/images/projects/bredi-logo.svg"
              alt="Bredi Tecnologia"
              className="max-w-full max-h-full object-contain p-2"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.innerHTML =
                  '<span class="text-terminal-green font-bold text-xl">B</span>';
              }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <a
              href="https://www.bredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-foreground hover:text-terminal-purple transition-colors"
            >
              Back-End Developer na Bredi Tecnologia
            </a>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              Participo ativamente de projetos desafiadores — APIs, integrações
              com gateways de pagamento, sistemas de biometria facial com IA,
              plataformas de mobilidade urbana e muito mais. Mais de 800 clientes
              atendidos pela Bredi.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
