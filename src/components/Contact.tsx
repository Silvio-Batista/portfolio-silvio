"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 text-black" id="contact">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Pronto para construir soluções escaláveis e eficientes?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Entre em contato agora e descubra como posso ajudar a levar seu
          projeto para o próximo nível.
        </p>

        {/* Botão do WhatsApp */}
        <a
          href="https://wa.me/5591992984421"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-8"
        >
          <BsWhatsapp className="inline-block mr-2 text-lg" />
          Mande uma mensagem
        </a>

        {/* Links para Redes Sociais */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/Silvio-Batista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/silvio-p-batista/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/silsawkkj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:bilviosatista@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 mt-12">
          Copyright © {new Date().getFullYear()} Silvio Batista
        
        </p>
      </div>
    </section>
  );
}
