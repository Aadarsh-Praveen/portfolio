"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = title.split(" ");

  return (
    <div
      ref={ref}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "overflow-hidden mb-3",
            align === "center" ? "flex justify-center" : "flex"
          )}
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            {/* Accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-0.5 h-3.5 bg-accent-cyan rounded-full origin-top"
            />
            <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase">
              {label}
            </span>
          </motion.div>
        </div>
      )}

      <h2
        className={cn(
          "font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary overflow-hidden",
          align === "center" ? "flex flex-wrap justify-center gap-x-3" : "flex flex-wrap gap-x-3"
        )}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: (label ? 0.15 : 0) + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 + words.length * 0.06 }}
          className="mt-4 text-text-muted font-outfit text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35 + words.length * 0.06, ease: "easeOut" }}
        className={cn(
          "mt-4 h-px w-16 bg-gradient-to-r from-accent-cyan to-accent-blue origin-left",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
