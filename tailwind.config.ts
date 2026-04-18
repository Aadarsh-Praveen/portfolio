import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#F8F7F4",
          card: "#FFFFFF",
          elevated: "#F0EEE9",
        },
        accent: {
          cyan: "#00B89A",
          blue: "#2563EB",
        },
        text: {
          primary: "#0F0F0F",
          muted: "#6B6B80",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, rgba(0,184,154,0.06) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(37,99,235,0.04) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0,184,154,0.04) 0px, transparent 50%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 20px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.06)",
        "accent-cyan": "0 4px 20px rgba(0,184,154,0.2)",
        "accent-blue": "0 4px 20px rgba(37,99,235,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
