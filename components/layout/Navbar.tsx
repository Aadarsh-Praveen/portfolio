"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/projects", sectionId: null },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // IntersectionObserver for active section
  useEffect(() => {
    if (!isHomePage) return;
    const sectionIds = navLinks.map((l) => l.sectionId).filter(Boolean) as string[];

    const observers: IntersectionObserver[] = [];
    const sectionVisibility: Record<string, boolean> = {};

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.isIntersecting;
          const first = sectionIds.find((s) => sectionVisibility[s]);
          setActiveSection(first ?? null);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string | null
  ) => {
    if (sectionId && isHomePage) {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (link.sectionId) return activeSection === link.sectionId && isHomePage;
    return pathname === "/projects";
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-bg-base/85 backdrop-blur-xl border-b border-black/6 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-syne font-bold text-2xl text-accent-cyan hover:text-accent-cyan/80 transition-colors"
          >
            AP.
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className={cn(
                      "font-outfit text-sm transition-colors duration-200 relative pb-1 cursor-pointer",
                      active ? "text-text-primary font-medium" : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {link.label}
                    {/* Animated underline for hover */}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
                  </Link>
                  {/* Active indicator dot */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        layoutId="nav-active-dot"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan"
                      />
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-text-primary p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-card/95 backdrop-blur-xl border-b border-black/6 md:hidden shadow-sm"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className={cn(
                        "flex items-center gap-2 px-6 py-3 font-outfit text-sm transition-colors cursor-pointer",
                        active
                          ? "text-text-primary bg-accent-cyan/5"
                          : "text-text-muted hover:text-text-primary hover:bg-black/4"
                      )}
                    >
                      {active && (
                        <span className="w-1 h-1 rounded-full bg-accent-cyan shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
