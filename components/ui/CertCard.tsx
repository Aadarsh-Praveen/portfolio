"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  period: string;
  score: string | null;
  color: "blue" | "cyan";
}

interface CertCardProps {
  cert: Cert;
  index: number;
}

function getCertStyle(cert: Cert) {
  if (cert.issuer === "Amazon Web Services") {
    return {
      border: "#F97316",
      iconBg: "#FFF7ED",
      iconText: "#C2410C",
      badgeBg: "#FFF7ED",
      badgeText: "#C2410C",
      scoreBg: "#FFF7ED",
      scoreText: "#C2410C",
    };
  }
  if (cert.title.toLowerCase().includes("foundations")) {
    return {
      border: "#DC2626",
      iconBg: "#FEF2F2",
      iconText: "#DC2626",
      badgeBg: "#FEF2F2",
      badgeText: "#991B1B",
      scoreBg: "#FEF2F2",
      scoreText: "#991B1B",
    };
  }
  // OCI GenAI Professional
  return {
    border: "#C2410C",
    iconBg: "#FFF7ED",
    iconText: "#C2410C",
    badgeBg: "#FFF7ED",
    badgeText: "#9A3412",
    scoreBg: "#FFF7ED",
    scoreText: "#9A3412",
  };
}

export function CertCard({ cert, index }: CertCardProps) {
  const s = getCertStyle(cert);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: `0 8px 32px ${s.border}22` }}
      className="bg-bg-card rounded-2xl p-6 flex gap-4 items-start transition-all duration-300 border border-black/7 shadow-card"
      style={{ borderLeft: `4px solid ${s.border}` }}
    >
      <div
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: s.iconBg, color: s.iconText }}
      >
        <BadgeCheck size={22} />
      </div>
      <div className="min-w-0">
        <h4 className="font-syne font-semibold text-text-primary text-sm leading-snug mb-1">
          {cert.title}
        </h4>
        <p className="text-text-muted font-outfit text-sm">{cert.issuer}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className="font-mono text-xs text-text-muted">{cert.period}</span>
          {cert.score && (
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: s.scoreBg, color: s.scoreText }}
            >
              Score: {cert.score}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
