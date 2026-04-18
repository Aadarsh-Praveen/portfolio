"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { personalInfo } from "@/lib/data";
import { HeroNeuralNetwork } from "@/components/animations/HeroNeuralNetwork";

const roles = personalInfo.roles;
const nameWords = personalInfo.shortName.split(" ");

function MagneticButton({
  children,
  onClick,
  className,
  href,
  download,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  href?: string;
  download?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download}>
        {inner}
      </a>
    );
  }
  return inner;
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-base">
      {/* Neural network canvas background */}
      <HeroNeuralNetwork />

      {/* Particle background */}
      {engineReady && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              particles: {
                number: { value: 50, density: { enable: true } },
                color: { value: ["#00B89A", "#2563EB", "#9090A8"] },
                opacity: {
                  value: { min: 0.05, max: 0.22 },
                  animation: { enable: true, speed: 0.6, startValue: "random" },
                },
                size: { value: { min: 1, max: 2.5 } },
                move: {
                  enable: true,
                  speed: 0.35,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: { default: "out" },
                },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#00B89A",
                  opacity: 0.06,
                  width: 1,
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* Gradient blob accents */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          left: "55%",
          top: "20%",
          width: 600,
          height: 600,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,184,154,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none z-0"
        style={{
          left: "20%",
          top: "65%",
          width: 400,
          height: 400,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Word-split animated name */}
        <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-4 flex flex-wrap justify-center gap-x-4 overflow-hidden">
          {nameWords.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Typewriter role */}
        <div className="h-14 md:h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="font-syne font-semibold text-2xl md:text-3xl lg:text-4xl text-gradient-cyan"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-outfit text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Building production-grade AI systems — from RAG pipelines to multi-agent
          architectures — that solve real-world problems at scale.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            onClick={scrollToAbout}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-outfit font-semibold text-white bg-accent-cyan hover:bg-accent-cyan/90 transition-colors duration-200 cursor-pointer shadow-accent-cyan"
          >
            View My Work
            <ArrowRight size={16} />
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            download="Aadarsh_Praveen_Resume.pdf"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-outfit font-semibold text-text-primary border border-black/10 hover:border-accent-cyan/40 hover:bg-accent-cyan/4 transition-all duration-200 cursor-pointer bg-white"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-2 text-text-muted text-sm font-outfit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          {personalInfo.location}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted hover:text-accent-cyan transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
