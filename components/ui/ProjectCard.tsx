"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  featured: boolean;
  live: string | null;
  github?: string | null;
  videoSrc?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  large?: boolean;
}

const CATEGORY_STYLES: Record<
  string,
  { border: string; glow: string; badgeBg: string; badgeText: string; label: string }
> = {
  "Clinical AI": {
    border: "#00B89A",
    glow: "rgba(0,184,154,0.15)",
    badgeBg: "#E6FAF6",
    badgeText: "#065F46",
    label: "Clinical AI",
  },
  "RAG/LLM": {
    border: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
    badgeBg: "#EFF6FF",
    badgeText: "#1E40AF",
    label: "RAG / LLM",
  },
  "Computer Vision": {
    border: "#7C3AED",
    glow: "rgba(124,58,237,0.15)",
    badgeBg: "#EDE9FE",
    badgeText: "#4C1D95",
    label: "Vision",
  },
  "Data Science": {
    border: "#D97706",
    glow: "rgba(217,119,6,0.15)",
    badgeBg: "#FFFBEB",
    badgeText: "#92400E",
    label: "Data Science",
  },
};

const DEFAULT_STYLE = {
  border: "#00B89A",
  glow: "rgba(0,184,154,0.15)",
  badgeBg: "#E6FAF6",
  badgeText: "#065F46",
  label: "Project",
};

function getCategoryStyle(category: string[]) {
  for (const cat of category) {
    if (CATEGORY_STYLES[cat]) return CATEGORY_STYLES[cat];
  }
  return DEFAULT_STYLE;
}

export function ProjectCard({ project, index = 0, large = false }: ProjectCardProps) {
  const style = getCategoryStyle(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -4,
        boxShadow: `0 8px 40px ${style.glow}, 0 2px 8px rgba(0,0,0,0.05)`,
      }}
      className={cn(
        "group flex flex-col bg-bg-card rounded-2xl border border-black/7 shadow-card",
        "transition-shadow duration-300 h-full",
        large ? "md:col-span-2 lg:col-span-2" : ""
      )}
      style={{ borderTop: `3px solid ${style.border}`, minHeight: 380 }}
    >
      <div className="project-card-inner project-card-body h-full p-6">
        {/* Header: badge + links row */}
        <div className="mb-3 flex-shrink-0">
          <div className="project-card-links flex flex-wrap items-center gap-1.5 mb-2">
            <span
              className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{ backgroundColor: style.badgeBg, color: style.badgeText }}
            >
              {style.label}
            </span>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-0.5 rounded-full border font-mono text-[10px] font-semibold whitespace-nowrap cursor-pointer transition-colors duration-200"
                style={{
                  borderColor: `${style.border}40`,
                  color: style.badgeText,
                  backgroundColor: style.badgeBg,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = style.border;
                  el.style.borderColor = style.border;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = style.badgeText;
                  el.style.borderColor = `${style.border}40`;
                }}
              >
                <Github size={10} />
                GitHub
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors cursor-pointer p-0.5"
                aria-label="Live demo"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>

          {/* Title */}
          <h3 className="font-syne font-bold text-lg text-text-primary leading-snug group-hover:text-accent-cyan transition-colors duration-200 flex-shrink-0">
            {project.title}
          </h3>
        </div>

        {/* Description — shrinks to content, never grows */}
        <p
          className="project-card-desc text-text-muted font-outfit leading-relaxed mb-0"
        >
          {project.description}
        </p>

        {/* Spacer absorbs remaining vertical space */}
        <div className="project-card-spacer"></div>

        {/* Tags — first 5 only, always at bottom */}
        <div className="project-card-tags flex flex-wrap gap-2" style={{ marginTop: 16 }}>
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-full border"
              style={{
                backgroundColor: style.badgeBg,
                color: style.badgeText,
                borderColor: `${style.border}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
