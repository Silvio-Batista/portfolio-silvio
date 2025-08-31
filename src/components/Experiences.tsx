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

        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 border border-blue-100/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Logo da Empresa */}
              <div className="flex items-center justify-center w-24 md:w-36 h-24 md:h-36 rounded-2xl shadow-md border border-blue-200 bg-blue-900/90 p-2">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Detalhes da Experiência */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
                <h3 className="text-2xl font-bold text-blue-800 mb-1 group-hover:underline">
                  {experience.role}
                </h3>
                <span className="text-blue-700 font-semibold text-base mb-1">
                  {experience.company}
                </span>
                <p className="text-sm text-gray-600 mb-2">{experience.date}</p>
                <p className="text-gray-700 text-base">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
