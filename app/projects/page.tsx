"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/providers/PageTransition";

const filterCategories = [
  "All",
  "RAG/LLM",
  "Computer Vision",
  "Data Science",
  "Clinical AI",
];

const FILTER_COLORS: Record<string, { active: string; text: string }> = {
  All:             { active: "#0F0F0F", text: "#ffffff" },
  "RAG/LLM":       { active: "#2563EB", text: "#ffffff" },
  "Computer Vision": { active: "#7C3AED", text: "#ffffff" },
  "Data Science":  { active: "#D97706", text: "#ffffff" },
  "Clinical AI":   { active: "#00B89A", text: "#ffffff" },
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-bg-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6"
        >
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors font-outfit text-sm mb-10 group cursor-pointer"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            Back to Home
          </Link>

          {/* Page heading */}
          <div ref={headingRef} className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-0.5 h-3.5 bg-accent-cyan rounded-full" />
              <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase">
                Portfolio
              </span>
            </motion.div>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4 flex flex-wrap gap-x-4 overflow-hidden">
              {["All", "Projects"].map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    className="inline-block"
                    initial={{ y: 40, opacity: 0 }}
                    animate={headingInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="h-px w-16 bg-gradient-to-r from-accent-cyan to-accent-blue origin-left"
            />
          </div>

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              const colors = FILTER_COLORS[cat];
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-outfit text-sm px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer"
                  style={
                    isActive
                      ? {
                          backgroundColor: colors.active,
                          color: colors.text,
                          boxShadow: `0 4px 14px ${colors.active}40`,
                        }
                      : {
                          backgroundColor: "#F0EEE9",
                          color: "#6B6B80",
                        }
                  }
                >
                  {cat}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-muted font-outfit py-16"
            >
              No projects found for this category.
            </motion.p>
          )}
        </motion.div>
      </main>
      <Footer />
    </PageTransition>
  );
}
