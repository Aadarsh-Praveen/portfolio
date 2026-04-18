"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "cyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "aadarsh-praveen",
    href: personalInfo.linkedin,
    color: "blue",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "aadarsh-praveen",
    href: personalInfo.github,
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "blue",
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden bg-bg-elevated border border-black/7 shadow-card">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,184,154,0.06) 0%, transparent 70%), radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="relative p-8 md:p-16 text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-5xl text-text-primary mb-4">
              Let&apos;s Build Together
            </h2>
            <p className="font-outfit text-text-muted text-base md:text-lg max-w-xl mx-auto mb-12">
              I&apos;m open to AI/ML engineering roles, research collaborations,
              and interesting projects. Let&apos;s connect.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                const isCyan = link.color === "cyan";
                const content = (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                    className={`bg-bg-card rounded-2xl p-5 flex flex-col items-center gap-3 group transition-all duration-300 border border-black/7 shadow-card ${
                      link.href ? "cursor-pointer" : "cursor-default"
                    } ${
                      isCyan
                        ? "hover:border-accent-cyan/30"
                        : "hover:border-accent-blue/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isCyan
                          ? "bg-accent-cyan/8 text-accent-cyan group-hover:bg-accent-cyan/12"
                          : "bg-accent-blue/8 text-accent-blue group-hover:bg-accent-blue/12"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-text-muted mb-0.5">
                        {link.label}
                      </p>
                      <p className="font-outfit text-xs text-text-primary truncate max-w-[120px]">
                        {link.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
