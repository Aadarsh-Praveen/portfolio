"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  label: string;
  index: number;
  groupIndex: number;
}

export function SkillTag({ label, index, groupIndex }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: groupIndex * 0.1 + index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(0, 217, 181, 0.4)",
        boxShadow: "0 0 12px rgba(0, 217, 181, 0.2)",
      }}
      className="inline-block font-outfit text-sm px-3 py-1.5 rounded-lg border border-white/8 bg-bg-card text-text-muted hover:text-text-primary transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
