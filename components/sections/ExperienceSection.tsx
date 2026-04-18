"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COMPANY_COLORS: Record<string, string> = {
  "IpserLab LLC": "#00B89A",
  "EasyBee AI": "#2563EB",
  "Accenture": "#7C3AED",
};

function TimelineItem({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dotColor = COMPANY_COLORS[job.company] ?? "#00B89A";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-8 md:pl-12"
    >
      {/* Dot on timeline */}
      <div
        className="absolute left-0 top-2 w-3 h-3 rounded-full ring-4"
        style={{
          backgroundColor: dotColor,
          boxShadow: `0 0 0 4px ${dotColor}28`,
        }}
      />

      <div className="bg-bg-card rounded-2xl p-6 border border-black/7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
        style={{ borderTop: `3px solid ${dotColor}` }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-syne font-bold text-lg text-text-primary">
                {job.title}
              </h3>
              {job.tag && (
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: `${dotColor}10`,
                    color: dotColor,
                    borderColor: `${dotColor}30`,
                  }}
                >
                  {job.tag}
                </span>
              )}
            </div>
            <p
              className="font-outfit font-semibold text-sm"
              style={{ color: dotColor }}
            >
              {job.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-text-muted text-xs font-mono shrink-0">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {job.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {job.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2">
          {job.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm text-text-muted font-outfit leading-relaxed"
            >
              <ChevronRight
                size={14}
                className="shrink-0 mt-0.5"
                style={{ color: dotColor }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading label="Work History" title="Experience" align="left" />

      <div ref={containerRef} className="relative">
        {/* Animated vertical line */}
        <div className="absolute left-1.5 top-0 w-px h-full bg-black/6">
          <motion.div
            className="w-full bg-gradient-to-b from-[#00B89A] to-[#2563EB] origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <TimelineItem key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
