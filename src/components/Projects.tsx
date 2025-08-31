"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Team-Façanha",
      description:
        "Plataforma de colaboração para equipes que permite gerenciamento de tarefas, controle de progresso e comunicação integrada. Desenvolvido com foco em escalabilidade e produtividade.",
      technologies: [
        "/icons/nextjs.svg",
        "/icons/typescript.svg",
        "/icons/node.svg",
      ],
      image: "/images/team-facanha.png", // Substitua pelo caminho correto
      link: "https://facanha-frontend.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-200 to-blue-100 text-black"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl shadow-xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-blue-100/60"
            >
              <div className="relative mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-2xl object-cover w-full h-48 shadow-md border border-blue-200 group-hover:shadow-lg transition"
                />
                {project.link && (
                  <span className="absolute top-2 right-2 bg-blue-800 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-80 group-hover:opacity-100 transition">
                    Ver Online
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-blue-800 mb-2 group-hover:underline">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-blue-800 font-semibold mb-2 text-sm">
                    Tecnologias:
                  </h4>
                  <div className="flex space-x-3">
                    {project.technologies.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech}
                        alt="Tecnologia"
                        className="w-8 h-8 drop-shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
