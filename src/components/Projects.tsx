"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Plano de Estudo",
      description:
        "Um sistema de organização de estudos com integração de planos personalizados, categorias de matérias e progresso calculado automaticamente. Ideal para estudantes do ENEM ou qualquer tipo de estudo.",
      technologies: [
        "/icons/nextjs.svg",
        "/icons/typescript.svg",
        "/icons/laravel.svg",
        "/icons/mysql.svg",
      ],
      image: "/images/projeto-estudos.png", // Substitua pelo caminho correto
      link: "", // Adicione o link caso tenha um repositório ou demonstração
    },
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
    //   className="py-20 bg-gradient-to-b from-gray-100 to-blue-50 text-black"
      className="py-20 bg-gradient-to-b from-gray-200 to-blue-100 text-black"

    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Imagem do Projeto */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />

              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <h4 className="text-blue-800 font-semibold mb-2">
                  Tecnologias:
                </h4>
                <div className="flex space-x-4">
                  {project.technologies.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech}
                      alt="Tecnologia"
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
