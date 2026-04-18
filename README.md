# Aadarsh Praveen — AI/ML Engineer Portfolio

A production-grade personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo
[https://aadarsh-praveen.netlify.app/]

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Syne, Outfit, Space Mono

## ✨ Features

- Light warm theme with deep navy-charcoal accents
- 3D neural network canvas animation in hero section
- Typewriter effect cycling through roles
- Scroll-triggered reveal animations on all sections
- Magnetic CTA buttons with cursor-following effect
- Word-by-word text reveal on section headings
- Smooth page transitions between routes
- Vertical timeline with animated draw effect for experience
- Project cards with colored category borders and GitHub links
- Canvas-based animated backgrounds on project cards
- Skills section with color-coded category groups
- Achievement card with verified Credly badge integration
- Certification cards with issuer-specific accent colors
- Contact section with social links
- Fully mobile responsive
- Clean production build with zero TypeScript errors

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── projects/
│   │   └── page.tsx          # All projects page
│   └── layout.tsx            # Root layout
├── components/
│   ├── animations/           # Canvas animation components
│   ├── sections/             # Page sections
│   └── ui/                   # Reusable UI components
├── lib/
│   └── data.ts               # All content and data
└── public/
    ├── resume.pdf            # Resume (add your PDF here)
    ├── intersystems-badge.png
```

## 📝 Customization

All content is centralized in `lib/data.ts`:
- Personal info, roles, bio
- Work experience and bullets
- Projects with GitHub and live links
- Skills grouped by category
- Achievements with Credly badge URL
- Certifications

## 🖼️ Assets Required

Place these in `/public/`:
- `resume.pdf` — Your resume PDF (from Overleaf)
- `intersystems-badge.png` — Already added

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Key Dependencies

```json
{
  "next": "14.x",
  "framer-motion": "latest",
  "tailwindcss": "latest",
  "typescript": "latest",
  "lucide-react": "latest",
  "lenis": "latest"
}
```

## 🏆 Achievements

- **2nd Place** — InterSystems Challenge, HSIL Hackathon 2026 (Harvard)
- Built VabGenRx — multi-agent clinical AI platform
- Verified badge: [Credly](https://www.credly.com/badges/1c989f18-25cb-4b9c-b1a0-a6aa1b2fc60e/public_url)

## 📄 License

This portfolio is personal and not licensed for reuse.

---

Built with Claude Code + UI/UX Pro Max Skill + 21st.dev components
