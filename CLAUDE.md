# Portfolio — Aadarsh Praveen

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 (custom design tokens in `tailwind.config.ts`)
- **Animations**: Framer Motion v11
- **Smooth scroll**: Lenis
- **Particles**: @tsparticles/react + @tsparticles/slim
- **Icons**: lucide-react
- **Fonts**: Syne (headings), Outfit (body), Space Mono (code/labels) — via next/font/google

## Design System (Light Theme)
- Base bg: `#F8F7F4` warm off-white | Card: `#FFFFFF` | Elevated: `#F0EEE9`
- Accent cyan: `#00B89A` | Accent blue: `#2563EB`
- Text primary: `#0F0F0F` | Muted: `#6B6B80`
- Card shadow: `0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)`
- Border: `rgba(0,0,0,0.07)`

## Folder Structure
```
app/
  layout.tsx          # Root layout, fonts, SmoothScrollProvider
  page.tsx            # Main landing page (all sections)
  globals.css         # Tailwind base + custom utilities
  projects/
    page.tsx          # All-projects page with filter bar

components/
  layout/
    Navbar.tsx        # Fixed navbar, blur on scroll, mobile hamburger
    Footer.tsx        # Minimal footer
  providers/
    SmoothScrollProvider.tsx  # Lenis wrapper
    PageTransition.tsx        # Fade+y page transition wrapper
  sections/
    HeroSection.tsx           # Particles, word-split name, magnetic CTAs
    AboutSection.tsx          # Bio + animated stat counters
    ExperienceSection.tsx     # Animated timeline
    FeaturedProjects.tsx      # 3 featured cards + "View All" link
    SkillsSection.tsx         # Grouped skill tags with stagger
    AchievementsSection.tsx   # Left-border card, expandable quote
    CertificationsSection.tsx # 3 cert cards with left border accents
    ContactSection.tsx        # Contact links on elevated bg
  ui/
    SectionHeading.tsx    # Animated heading (label slides left, words reveal up)
    ProjectCard.tsx       # Light card with 3D tilt + video background
    CertCard.tsx          # Cert card with accent left border
    VideoPlaceholder.tsx  # Animated shimmer shown while video loads

lib/
  utils.ts    # cn() helper (clsx + tailwind-merge)
  data.ts     # All content data (projects, experience, skills, etc.)
```

## Dev Commands
```bash
npm run dev     # Start dev server on localhost:3000
npm run build   # Production build (TypeScript check)
npm run lint    # ESLint
```

## Resume PDF
Place your actual resume at `/public/resume.pdf`. The Download Resume button links to this path with `download="Aadarsh_Praveen_Resume.pdf"`.

## Video Backgrounds on Project Cards
Videos go in `/public/videos/`. Each project has an optional `videoSrc` field in `lib/data.ts`.

**Naming convention:** `project-[slug].mp4`
**Specs:** 8–10 seconds, loop-friendly, no audio, compressed to under 3MB each.
**If no video file is present**, the card renders normally without errors.

Generate videos using **Higgsfield AI** with these prompts:

| Project | Slug | Higgsfield Prompt |
|---------|------|-------------------|
| VabGenRx | `project-vabgenrx.mp4` | Cinematic medical AI dashboard, multiple agent nodes glowing and connecting, holographic drug molecule structures floating, clean white and teal interface, professional healthcare setting, slow camera push-in, 8 seconds, loop-friendly, no text |
| Recommendation Engine | `project-recommendation.mp4` | Abstract data visualization, millions of review particles clustering and reorganizing, semantic search vectors connecting as glowing threads, deep blue and cyan color palette, cinematic slow motion, 8 seconds, loop-friendly, no text |
| RAG Financial Chatbot | `project-rag-financial.mp4` | Financial data streams flowing into a glowing document retrieval system, stock charts morphing into knowledge graphs, green and gold tones, cinematic depth of field, slow motion, 8 seconds, loop-friendly, no text |
| Enterprise RAG | `project-enterprise-rag.mp4` | Aerial city buildings transforming into document nodes in a knowledge graph, data flowing between property records and policy documents, blue and white tones, cinematic drone-style shot, 8 seconds, loop-friendly, no text |
| Food-101 | `project-food101.mp4` | Cinematic flat lay of diverse foods, glowing classification bounding boxes appearing over each item, neural network visualization overlay, warm colors, slow camera movement, 8 seconds, loop-friendly, no text |
| EEG Classification | `project-eeg.mp4` | Brain neural activity visualization, EEG signal waves flowing across the screen, glowing synapses firing in sequence, deep purple and electric blue, cinematic slow motion, 8 seconds, loop-friendly, no text |
| RFM Segmentation | `project-rfm.mp4` | World map with glowing transaction clusters forming, customers segmenting into color-coded groups, data analytics dashboard aesthetic, teal and amber tones, cinematic pull-back shot, 8 seconds, loop-friendly, no text |
