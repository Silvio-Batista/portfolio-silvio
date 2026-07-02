"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contato"
      subtitle="Vamos construir algo incrível juntos?"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto glass-card p-8 flex flex-col items-center gap-6"
      >
        <a
          href="https://wa.me/5591992984421"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-terminal-green/10 border border-terminal-green/40 text-terminal-green font-mono px-8 py-3 rounded-lg hover:bg-terminal-green/20 transition-all duration-300 text-base"
        >
          <BsWhatsapp className="text-xl" />
          Mande uma mensagem
        </a>

        <div className="flex justify-center gap-4">
          {[
            {
              href: "https://github.com/Silvio-Batista",
              icon: FaGithub,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/silvio-p-batista/",
              icon: FaLinkedin,
              label: "LinkedIn",
            },
            {
              href: "https://instagram.com/silsawkkj",
              icon: FaInstagram,
              label: "Instagram",
            },
            {
              href: "mailto:bilviosatista@gmail.com",
              icon: FaEnvelope,
              label: "E-mail",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg glass-card text-muted hover:text-terminal-purple hover:border-terminal-purple/30 transition-all text-xl"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted font-mono mt-4">
          © {new Date().getFullYear()} Silvio Batista — built with Next.js
        </p>
      </motion.div>
    </Section>
  );
}
