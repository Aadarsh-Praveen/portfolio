"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GROUP_COLORS: Record<string, { bg: string; text: string; border: string; label: string }> = {
  "Generative AI & LLM": {
    bg: "#E6FAF6",
    text: "#065F46",
    border: "rgba(0,184,154,0.25)",
    label: "#00B89A",
  },
  "ML & Deep Learning": {
    bg: "#EDE9FE",
    text: "#4C1D95",
    border: "rgba(124,58,237,0.25)",
    label: "#7C3AED",
  },
  "Search & Retrieval": {
    bg: "#EFF6FF",
    text: "#1E40AF",
    border: "rgba(37,99,235,0.25)",
    label: "#2563EB",
  },
  "Cloud & MLOps": {
    bg: "#FFF7ED",
    text: "#92400E",
    border: "rgba(217,119,6,0.25)",
    label: "#D97706",
  },
  "Data Engineering": {
    bg: "#FFF1F2",
    text: "#881337",
    border: "rgba(225,29,72,0.25)",
    label: "#E11D48",
  },
  "Languages & Tools": {
    bg: "#F3F4F6",
    text: "#1F2937",
    border: "rgba(107,114,128,0.25)",
    label: "#6B7280",
  },
};

const DEFAULT_COLOR = {
  bg: "#F0EEE9",
  text: "#374151",
  border: "rgba(0,0,0,0.1)",
  label: "#6B7280",
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading
        label="Technical Stack"
        title="Skills & Technologies"
        subtitle="The tools I use to build intelligent systems."
        align="center"
      />

      <div className="space-y-10">
        {skills.map((group, groupIndex) => (
          <SkillGroup key={group.group} group={group} groupIndex={groupIndex} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  groupIndex,
}: {
  group: { group: string; tags: string[] };
  groupIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const colors = GROUP_COLORS[group.group] ?? DEFAULT_COLOR;

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
        className="flex items-center gap-2 mb-4"
      >
        <div
          className="w-1.5 h-3.5 rounded-full"
          style={{ backgroundColor: colors.label }}
        />
        <h3
          className="font-mono text-xs font-bold tracking-widest uppercase"
          style={{ color: colors.label }}
        >
          {group.group}
        </h3>
      </motion.div>

      <div className="flex flex-wrap gap-2.5">
        {group.tags.map((tag, tagIndex) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: groupIndex * 0.06 + tagIndex * 0.04,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.06, y: -1 }}
            className="font-outfit text-sm px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-default"
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              borderColor: colors.border,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
