# Veena — Personal Product Portfolio

> **Software Engineer** · Frontend · Full Stack · Data Analytics  
> Production-ready, recruiter-friendly personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

---

## 🌟 Brand Narrative Concept

Built around the core narrative:
**BUILD → ANALYZE → SOLVE → CONNECT**

Combining Software Engineering, Frontend Development, Full Stack Platforms, and Data Analytics into a single cohesive persona.

---

## 🛠️ Tech Stack & Tooling

- **Framework**: Next.js 15 (App Router)
- **UI Core**: React 19 & TypeScript
- **Styling**: Tailwind CSS & CSS Custom Properties
- **Typography**: Inter Tight (Primary Sans), Instrument Serif (Editorial Accent), JetBrains Mono (Technical Code)
- **Motion**: Framer Motion & IntersectionObserver controls
- **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
my_portfolio/
├── public/
│   ├── intro.mp4                  # Introduction video
│   ├── resume/
│   │   └── Veena_Resume.pdf       # Verified PDF Resume
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with Google Fonts, metadata & JSON-LD
│   │   ├── page.tsx               # Main portfolio page composing all sections
│   │   └── globals.css            # Custom monochrome design tokens & typography utilities
│   ├── components/
│   │   ├── Navigation.tsx         # Sticky navigation with scroll progress line
│   │   ├── MobileMenu.tsx         # Full-screen sequential entrance mobile menu
│   │   ├── Hero.tsx               # High-impact Hero layout with video & outlined VEENA text
│   │   ├── VideoHero.tsx          # HTML5 Video player with sound toggle & IntersectionObserver
│   │   ├── About.tsx              # Identity Panel & vertical line connector
│   │   ├── RoleSwitcher.tsx       # Interactive persona mode switcher (Software/Frontend/FullStack/Data)
│   │   ├── Capabilities.tsx       # 4 vertical capability columns with hover expansion
│   │   ├── Skills.tsx             # Periodic-table inspired skill constellation tile matrix
│   │   ├── Projects.tsx           # Selected Work section with category filters
│   │   ├── ProjectPanel.tsx       # Editorial project card with illustrative UI canvas
│   │   ├── DataLab.tsx            # Dedicated Data Analytics section with 6-step workflow & BI dashboard
│   │   ├── Chart.tsx              # Dynamic channel distribution chart
│   │   ├── Experience.tsx         # Integrated timeline for internships & B.Tech degree
│   │   ├── Achievements.tsx       # Published IEEE paper card & verified milestone grid
│   │   ├── Certifications.tsx     # Minimal editorial row index table with flood hover effect
│   │   ├── Contact.tsx            # High-impact contact section with instant 1-click email copy
│   │   ├── Footer.tsx             # Minimalist footer
│   │   ├── CustomCursor.tsx       # Desktop custom cursor indicator
│   │   └── ScrollStory.tsx        # Scroll-driven narrative watermark indicator
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button primitive
│   │   ├── Reveal.tsx             # Framer Motion scroll reveal wrapper
│   │   ├── SectionHeading.tsx     # Standardized editorial section header
│   │   └── SkillTile.tsx          # Periodic-table style skill badge
│   └── lib/
│       ├── data.ts                # Authoritative typed portfolio dataset
│       └── utils.ts               # Class merging utilities
```

---

## 🔒 Verification & Compliance

- **Zero-Fabrication Policy**: All data, projects, degree details, internships, certificates, and IEEE research paper links strictly match Veena's official CV and portfolio source materials.
- **Performance & Accessibility**: Semantic HTML5 tags, `prefers-reduced-motion` compliance, accessible video controls, and `aria-live` email copy notifications.
