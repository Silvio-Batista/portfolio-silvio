"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { featuredProjects, brediProjects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import ProjectCard from "./ui/ProjectCard";
import Section from "./ui/Section";

type Tab = "featured" | "bredi";

const brediCategories: (ProjectCategory | "Todos")[] = [
  "Todos",
  "App",
  "E-commerce",
  "Sistema",
  "Portal",
  "Site",
  "Plataforma",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("featured");
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | "Todos">("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredBredi =
    categoryFilter === "Todos"
      ? brediProjects
      : brediProjects.filter((p) => p.category === categoryFilter);

  const projects = activeTab === "featured" ? featuredProjects : filteredBredi;

  return (
    <>
      <Section
        id="projects"
        title="Projetos"
        subtitle="Soluções em que participei ativamente e portfólio Bredi"
      >
        <div className="flex justify-center gap-2 mb-8">
          {(["featured", "bredi"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg font-mono text-sm transition-all border ${
                activeTab === tab
                  ? tab === "featured"
                    ? "bg-terminal-green/20 border-terminal-green text-terminal-green"
                    : "bg-terminal-purple/20 border-terminal-purple text-terminal-purple"
                  : "bg-card border-card text-muted hover:text-foreground"
              }`}
            >
              {tab === "featured" ? "Em destaque" : "Bredi"}
            </button>
          ))}
        </div>

        {activeTab === "bredi" && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {brediCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  categoryFilter === cat
                    ? "bg-terminal-purple/15 border-terminal-purple text-terminal-purple"
                    : "bg-card border-card text-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onDetails={setSelectedProject}
            />
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface-elevated border border-card rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.company && (
                    <p className="text-terminal-purple text-sm mt-1">
                      {selectedProject.company}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted hover:text-foreground p-1"
                  aria-label="Fechar"
                >
                  <FaTimes />
                </button>
              </div>

              <p className="text-muted text-sm mb-4">
                {selectedProject.description}
              </p>

              {selectedProject.solution && (
                <div className="mb-4">
                  <h4 className="text-sm font-mono text-terminal-purple mb-2">
                    <span>{"//"}</span> Solução
                  </h4>
                  <p className="text-foreground/80 text-sm">
                    {selectedProject.solution}
                  </p>
                </div>
              )}

              {selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-mono text-terminal-purple mb-2">
                    <span>{"//"}</span> Recursos
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-terminal-purple mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-terminal-green/10 border border-terminal-green/30 text-terminal-green text-sm font-mono hover:bg-terminal-green/20 transition-all"
                >
                  Visitar site →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
