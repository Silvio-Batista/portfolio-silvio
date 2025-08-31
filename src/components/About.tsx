"use client";

import React from "react";
import TechCarousel from "./TechCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-200 to-blue-100 text-black"
    >
      <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-12">
        {/* Perfil e Sobre Mim */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/70 rounded-3xl shadow-xl p-8">
          <img
            src="/images/profile.jpg"
            alt="Minha Foto"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full shadow-lg object-cover mb-4 md:mb-0 border-4 border-blue-200"
          />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h2 className="text-3xl font-bold text-blue-800">Sobre Mim</h2>
            <p className="text-lg leading-relaxed">
              Anos atrás, uma simples curiosidade me levou a fazer um curso de
              Python. Foi ali que descobri minha paixão por programação, que me
              motivou a buscar mais conhecimento e transformar isso na minha
              profissão. Hoje, sigo evoluindo e aprendendo todos os dias, sempre
              em busca de novos desafios. Se você está começando, lembre-se: um
              pequeno passo pode mudar tudo. 🚀
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                TypeScript
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Laravel
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                PHP
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                MySQL
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Next.js
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo Profissional */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl shadow-lg p-8 flex flex-col items-center gap-4">
          <h3 className="text-2xl font-semibold text-blue-800">Meu Objetivo</h3>
          <p className="text-lg leading-relaxed text-center max-w-2xl">
            Quero transformar ideias em experiências digitais marcantes, criando
            soluções que realmente façam diferença para pessoas e negócios.
            Busco sempre unir tecnologia, criatividade e qualidade em tudo o que
            desenvolvo.
          </p>
        </div>

        {/* Carrossel de Tecnologias */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-2xl font-semibold text-blue-800">
            Tecnologias que utilizo
          </h3>
          <div className="w-full max-w-3xl">
            <TechCarousel />
          </div>
        </div>

        {/* Experiência Atual */}
        <div className="flex flex-col gap-2 items-center mb-2">
          <h3 className="text-2xl font-semibold text-blue-800">
            Experiência Atual
          </h3>
          <p className="text-base text-gray-700 text-center max-w-2xl">
            Atualmente, faço parte do time da{" "}
            <span className="font-bold text-blue-800">Bredi Tecnologia</span>,
            onde atuo como desenvolvedor back-end e contribuo para projetos
            desafiadores e inovadores.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/bredi.png"
            alt="Logo da Empresa"
            className="w-28 md:w-36"
          />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a
              href="https://www.bredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-800 hover:underline"
            >
              Back-End Developer na Bredi Tecnologia
            </a>
            <p className="text-lg leading-relaxed">
              Participo ativamente de projetos desafiadores, desenvolvendo APIs robustas, otimizando sistemas e garantindo infraestrutura eficiente. Meu foco é criar soluções inovadoras, seguras e escaláveis que realmente geram valor para o negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
