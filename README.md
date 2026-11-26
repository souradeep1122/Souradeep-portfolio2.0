# Souradeep Saha — Dark Neon-Lime Portfolio

> Production-ready personal portfolio website for **Souradeep Saha** (MERN Stack Developer & UI/UX Designer, Kolkata, India).

A high-impact, editorial portfolio featuring **dark near-black aesthetics (`#111111`)**, **electric lime accents (`#CCFF00`)**, **oversized display typography**, **hairline card borders**, and **scroll-choreographed entrance animations**.

---

## 📸 Design Direction & Reference

- **Visual Direction**: Dark, neon-lime, oversized-typography portfolio inspired by editorial design systems.
- **Reference Site**: [https://sanchali-saha.vercel.app/](https://sanchali-saha.vercel.app/)
- **Reference Repo**: [https://github.com/Sanchali-rif/My_portfolio](https://github.com/Sanchali-rif/My_portfolio)

---

## 🚀 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Plain CSS with CSS Custom Properties (zero UI libraries, zero Tailwind)
- **Code Quality**: ESLint + Prettier

---

## 🎨 Design System

- **Palette**:
  - `--bg-dark`: `#111111` (pitch black canvas)
  - `--surface`: `#181818` (dark cards)
  - `--hairline`: `rgba(255, 255, 255, 0.1)` (subtle borders)
  - `--c-lime`: `#CCFF00` (electric lime accent)
  - `--c-lime-hover`: `#DFFF4D`
  - `--text-heading`: `#F5F5F5` (crisp white headings)
  - `--text-body`: `#BDBDBD` (accessible body text)
  - `--text-muted`: `#8A8A8A` (WCAG AA compliant grey labels)
- **Typography**:
  - **Archivo (800/900)**: Heavy grotesque sans for oversized headlines (tight line-height 0.85-0.95).
  - **Space Grotesk (400/500/600/700)**: Clean geometric sans for navigation, body copy, and UI metadata.
- **Hero Highlights**:
  - Top-left handwritten "SS" signature logo in a green-to-lime gradient.
  - Top-center sticky navigation with backdrop blur and active section indicator (via `IntersectionObserver` scroll-spy).
  - Eyebrow label: `SOFTWARE DEVELOPER AND DESIGNER ───`.
  - Centered giant name: `SOURADEEP` over `SAHA` in electric lime `#CCFF00`.
  - Outlined background word: `BUILDER` with parallax scroll drift.
  - Interactive pill buttons with circular arrow icons ("View projects" & "Download CV").
  - Circular icon buttons for GitHub, LinkedIn, and Mail with lime hover glow.
  - Bottom-left vertical hairline with `KOLKATA, INDIA` and `OPEN TO WORK` (pulsing lime dot).
  - Decorative crosshairs and slowly rotating 4-point sparkle star.
- **Micro-Interactions**:
  - Custom desktop cursor (lime dot with trailing magnetic ring).
  - About section scroll-linked word opacity highlight in electric lime.
  - Infinite horizontal marquee of technical proficiencies in outlined text.
  - Project cards with lime hover sweep and 45-degree arrow rotation.
  - Direct email copy-to-clipboard button with animated "Copied to clipboard!" feedback toast.
  - Full respect for `prefers-reduced-motion`.

---

## 📁 Project Structure

```
src/
  main.tsx, App.tsx
  styles/global.css          (tokens, fonts, resets, utilities, grain overlay)
  data/portfolio.ts          (ALL content lives here, typed constants)
  types/index.ts             (Project, SkillGroup, Experience, Education, Certification)
  components/
    layout/Navbar.tsx, MobileMenu.tsx, Footer.tsx
    sections/Hero.tsx, About.tsx, Skills.tsx, Projects.tsx, Experience.tsx, Achievements.tsx, Contact.tsx
    ui/Logo.tsx, SectionLabel.tsx, PillButton.tsx, IconButton.tsx, Tag.tsx, Reveal.tsx, Sparkle.tsx, Crosshair.tsx, CustomCursor.tsx
  hooks/useMediaQuery.ts, useReducedMotionSafe.ts
public/cv.pdf, favicon.svg, og-image.png
```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check & build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## ✏️ How to Edit Content

All portfolio content is decoupled from components and lives in **`src/data/portfolio.ts`**. You do **not** need to touch JSX/TSX files to update your details:

- **Personal Info & Headline**: Edit `PORTFOLIO_DATA.personal`
- **Projects**: Edit `PORTFOLIO_DATA.projects` (set `inProduction: true` for unreleased projects)
- **Skills**: Edit `PORTFOLIO_DATA.skillGroups` and `PORTFOLIO_DATA.marqueeSkills`
- **Experience**: Edit `PORTFOLIO_DATA.experience`
- **Achievements & Education**: Edit `PORTFOLIO_DATA.certifications` and `PORTFOLIO_DATA.education`

---

## 🌐 Deployment Guide

### Deploy to Vercel
1. Push code to GitHub.
2. Import repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Deploy.

### Deploy to Netlify
1. Push code to GitHub.
2. Import repository in [Netlify](https://www.netlify.com).
3. Build Command: `npm run build`, Publish Directory: `dist`.
4. Deploy.

### Deploy to GitHub Pages
If deploying to `https://<USERNAME>.github.io/<REPO>/`, update the `base` in `vite.config.ts`:
```ts
export default defineConfig({
  plugins: [react()],
  base: '/Souradeep-portfolio3.0/',
  build: { outDir: 'dist' },
});
```

---

## 📄 License

MIT © [Souradeep Saha](https://github.com/souradeep1122)
