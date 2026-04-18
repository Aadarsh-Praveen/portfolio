import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-bg-card border-t border-black/7 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-syne font-bold text-accent-cyan text-lg">AP.</p>
        <p className="text-text-muted text-sm font-outfit">
          &copy; {new Date().getFullYear()} {personalInfo.shortName}. Built with
          Next.js & Framer Motion.
        </p>
        <div className="flex gap-4">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors text-sm cursor-pointer"
          >
            GitHub
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors text-sm cursor-pointer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
