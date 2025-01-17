"use client";

import React from "react";

export default function Experiences() {
  const experiences = [
    {
      company: "IHEBE",
      role: "Jovem Aprendiz - Administrativo",
      date: "Novembro de 2021 - Maio de 2023",
      description:
        "Atuei no setor administrativo com recepção de doadores de sangue e organização de documentos.",
      logo: "/images/ihebe.png", // Substitua pelo caminho correto da logo
    },
    {
      company: "BragaSoft",
      role: "Estagiário de T.I",
      date: "Maio de 2023 - Dezembro de 2023",
      description:
        "Realizava manutenção de computadores e instalação de programas, contribuindo para o suporte técnico interno.",
      logo: "/images/bragasoft.png", // Substitua pelo caminho correto da logo
    },
    {
      company: "Bredi Tecnologia",
      role: "Desenvolvedor Back-End",
      date: "Março de 2024 - Presente",
      description:
        "Atuo no desenvolvimento de projetos de back-end complexos e eficazes, focados em soluções escaláveis.",
      logo: "/images/bredi.png", // Substitua pelo caminho correto da logo
    },
  ];

  return (
    <section
      id="experience"
      // className="py-20 bg-gradient-to-b from-gray-100 to-blue-50 text-black"
      className="py-20 bg-gradient-to-b from-gray-200 to-blue-100 text-black"

    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          Minhas Experiências
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg p-6 flex items-center space-x-6"
            >
              {/* Logo da Empresa */}
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-36 object-cover"
              />

              {/* Detalhes da Experiência */}
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  {experience.role}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{experience.date}</p>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
