"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      delay: index * 0.15,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.round(v * 10) / 10);
      },
    });
    return controls.stop;
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
      className="bg-bg-card rounded-2xl p-6 text-center border border-black/7 shadow-card glow-border-cyan transition-all duration-300"
    >
      <div className="font-syne font-bold text-3xl md:text-4xl text-gradient-cyan mb-2">
        {display}
        {suffix}
      </div>
      <div className="font-outfit text-sm text-text-muted">{label}</div>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading label="About Me" title="Who I Am" align="left" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" ref={ref}>
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-outfit text-text-muted text-base md:text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="font-outfit text-text-muted text-base leading-relaxed">
            I specialize in building intelligent systems that understand context,
            retrieve knowledge, and reason across complex domains — turning cutting-edge
            research into reliable, production-ready products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["RAG Systems", "Multi-Agent AI", "LLM Engineering", "Data Science", "MLOps"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full text-accent-cyan bg-accent-cyan/6 border border-accent-cyan/20"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
