"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-blue-50 to-gray-100 text-black"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <div className="w-full max-w-xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-blue-100/60">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
            Vamos conversar?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-2">
            Entre em contato e vamos juntos construir soluções digitais incríveis!
          </p>

          {/* Botão do WhatsApp */}
          <a
            href="https://wa.me/5591992984421"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-400 transition-all duration-300 text-lg animate-bounce"
          >
            <BsWhatsapp className="text-2xl" />
            Mande uma mensagem
          </a>

          {/* Links para Redes Sociais */}
          <div className="flex justify-center gap-6 mt-2">
            <a
              href="https://github.com/Silvio-Batista"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white shadow-md transition-all duration-200 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/silvio-p-batista/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white shadow-md transition-all duration-200 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/silsawkkj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white shadow-md transition-all duration-200 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:bilviosatista@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white shadow-md transition-all duration-200 text-2xl"
              aria-label="E-mail"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 mt-8 text-center">
            Copyright © {new Date().getFullYear()} Silvio Batista
          </p>
        </div>
      </div>
    </section>
  );
}
