import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Veena | Full Stack Developer • Creative Frontend Engineer",
  description: "Explore the modern cinematic portfolio of Veena, a Full Stack Developer specializing in immersive frontend engineering, scalable architectures, Next.js, React, Three.js, GSAP, and AI-powered platforms.",
  keywords: ["Veena", "Full Stack Developer", "Frontend Development Intern", "Unified Mentor", "EntreSkill Hub", "Next.js", "GSAP Animations", "Three.js", "Creative Portfolio", "React Engineer"],
  authors: [{ name: "Veena" }],
  openGraph: {
    title: "Veena | Full Stack Developer • Creative Frontend Engineer",
    description: "Immersive luxury digital experience showcasing scalable full-stack products, learning ecosystems, and high-performance frontend animations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body id="portfolio-root-body">
        {children}
      </body>
    </html>
  );
}
