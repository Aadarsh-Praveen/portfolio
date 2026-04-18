"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  return (
    <section id="projects-preview" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading
        label="Selected Work"
        title="Featured Projects"
        subtitle="A selection of production AI systems and research projects."
        align="center"
      />

      <div className="featured-grid grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            large={i === 0}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link href="/projects">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-outfit font-semibold text-sm border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/6 transition-all duration-200 cursor-pointer bg-white shadow-card"
          >
            View All Projects
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
