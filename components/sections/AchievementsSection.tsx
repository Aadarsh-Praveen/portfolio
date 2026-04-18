"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Trophy, ChevronDown, Users } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading label="Recognition" title="Achievements" align="left" />
      <div className="space-y-6">
        {achievements.map((achievement, i) => (
          <AchievementCard key={i} achievement={achievement} index={i} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden bg-white border border-black/6"
      style={{ borderLeft: "4px solid #00B89A" }}
    >
      <div className="relative p-6 md:p-8">
        <div className="flex items-start gap-4">

          <div
            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(0,184,154,0.1)" }}
          >
            <Trophy size={24} color="#00B89A" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-syne font-bold text-lg md:text-xl text-text-primary mb-2 leading-snug">
              {achievement.title}
            </h3>
            <p className="font-outfit text-text-muted text-sm md:text-base leading-relaxed mb-4">
              {achievement.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {achievement.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(0,184,154,0.08)",
                    color: "#065F46",
                    border: "1px solid rgba(0,184,154,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 font-outfit text-sm cursor-pointer"
              style={{ color: "#00B89A" }}
            >
              {expanded ? "Show less" : "Read the story"}
              <ChevronDown
                size={14}
                style={{
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <blockquote
                    className="mt-4 pl-4 font-outfit italic text-text-muted text-sm leading-relaxed"
                    style={{ borderLeft: "2px solid rgba(0,184,154,0.3)" }}
                  >
                    &ldquo;{achievement.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={13} style={{ color: "#2563EB" }} />
                      <span className="font-mono text-xs text-text-muted uppercase tracking-wide">
                        Team
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {achievement.team.map((name) => (
                        <span
                          key={name}
                          className="font-outfit text-xs px-2 py-1 rounded-lg text-text-muted"
                          style={{
                            background: "#F0EEE9",
                            border: "1px solid rgba(0,0,0,0.07)",
                          }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {achievement.badgeUrl && achievement.badgeImageUrl && (
            <motion.a
              href={achievement.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to verify on Credly"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 flex flex-col items-center gap-1.5 no-underline"
            >
              <img
                src={achievement.badgeImageUrl}
                alt="InterSystems Hackathon Challenge Winner Badge"
                width={80}
                height={80}
                style={{
                  borderRadius: "12px",
                  border: "1.5px solid rgba(0,0,0,0.08)",
                  background: "white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  objectFit: "contain",
                  padding: "4px",
                  mixBlendMode: "multiply" as const,
                }}
              />
              <span className="font-mono text-xs text-text-muted text-center">
                Verified Badge
              </span>
              <span
                className="font-mono text-xs text-center"
                style={{ color: "#00B89A" }}
              >
                ↗ Credly
              </span>
            </motion.a>
          )}

        </div>
      </div>
    </motion.div>
  );
}
