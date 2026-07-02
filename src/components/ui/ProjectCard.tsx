"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onDetails?: (project: Project) => void;
  index?: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const gradients = [
  "from-terminal-green/30 to-terminal-cyan/30",
  "from-terminal-cyan/30 to-terminal-purple/30",
  "from-terminal-purple/30 to-terminal-green/30",
  "from-blue-500/30 to-terminal-cyan/30",
];

export default function ProjectCard({
  project,
  onDetails,
  index = 0,
}: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card overflow-hidden flex flex-col hover:shadow-glow transition-all duration-300 group"
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center border-b border-card`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full ${
              project.imageFit === "contain"
                ? "object-contain p-6 bg-surface-elevated/80"
                : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="text-center px-4">
            <span className="text-3xl font-bold text-white/80">
              {getInitials(project.name)}
            </span>
            {project.company && (
              <p className="text-sm text-white/50 mt-1">{project.company}</p>
            )}
          </div>
        )}

        {project.country && (
          <span className="absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded-full bg-black/40 border border-white/10">
            {project.country === "BR" ? "🇧🇷" : "🇺🇸"}
          </span>
        )}

        {project.category && (
          <span className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded-full bg-black/40 border border-white/10 text-terminal-purple">
            {project.category}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-terminal-purple transition-colors">
            {project.name}
          </h3>
          {project.period && (
            <p className="text-xs text-muted font-mono mt-1">
              {project.period}
            </p>
          )}
        </div>

        <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech) => (
              <img
                key={tech}
                src={tech}
                alt="tech"
                className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-auto pt-2">
          {onDetails && (
            <button
              onClick={() => onDetails(project)}
              className="flex-1 text-sm font-mono px-4 py-2 rounded-lg bg-card border border-card text-foreground/80 hover:border-terminal-purple/50 hover:text-terminal-purple transition-all"
            >
              Ver detalhes
            </button>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-mono px-4 py-2 rounded-lg bg-terminal-green/10 border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/20 transition-all"
            >
              <FaExternalLinkAlt className="text-xs" />
              Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
