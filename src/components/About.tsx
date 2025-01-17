"use client";

import React from "react";
import TechCarousel from "./TechCarousel";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-200 to-blue-100 text-black"
    >
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        {/* Primeira Linha: Perfil e Sobre Mim */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Perfil e Descrição */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/profile.jpg"
              alt="Minha Foto"
              className="w-40 h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover mb-6"
            />
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Sobre Mim</h2>
            <p className="text-lg leading-relaxed">
              Sou um desenvolvedor Back-End apaixonado por criar soluções
              tecnológicas eficientes. Atualmente, atuo como Desenvolvedor na{" "}
              <span className="font-bold">Bredi Tecnologia</span>, contribuindo
              para o desenvolvimento de sistemas robustos e otimizados. Tenho
              experiência com{" "}
              <span className="font-bold">TypeScript, Laravel, PHP, MySQL</span>{" "}
              e servidores, além de conhecimentos em{" "}
              <span className="font-bold">Next.js</span> e{" "}
              <span className="font-bold">React</span> no Front-End.
            </p>
          </div>
        </div>

        {/* Objetivo Profissional */}
        <div className="bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">
            Meu Objetivo
          </h3>
          <p className="text-lg leading-relaxed text-center">
            Especializado na criação de sites e WebApps modernos. Meu
            compromisso é com a entrega de soluções que priorizam a eficiência,
            performance de alto nível, responsividade e qualidade excepcional,
            sempre visando superar as expectativas dos usuários.
          </p>
        </div>

        {/* Carrossel de Tecnologias */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
            Tecnologias que utilizo
          </h3>
          <TechCarousel />
        </div>

        {/* Segunda Linha: Experiência Atual */}
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg p-6 flex items-center space-x-4">
          <img
            src="/images/bredi.png" // Substitua pela logo da empresa
            alt="Logo da Empresa"
            className="w-36"
          />
          <div>
            <a
              href="https://www.bredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-800 hover:underline"
            >
              Back-End Developer at Bredi Tecnologia
            </a>
            <p className="text-lg leading-relaxed">
              Desenvolvedor back-end na{" "}
              <span className="font-bold">Bredi Tecnologia</span>, especialista
              em <span className="font-bold">PHP, Laravel</span> e{" "}
              <span className="font-bold">MySQL</span>. Atua na criação de APIs,
              otimização de sistemas e configuração de servidores Apache, sempre
              focado em soluções escaláveis e seguras que atendam às demandas
              dos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
