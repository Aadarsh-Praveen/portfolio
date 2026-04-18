"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/lib/data";
import { CertCard } from "@/components/ui/CertCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto px-6">
      <SectionHeading
        label="Credentials"
        title="Certifications"
        align="left"
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
