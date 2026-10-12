import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollStory } from '@/components/ScrollStory';

export const metadata: Metadata = {
  title: 'Veena — Software Engineer | Frontend | Full Stack | Data Analytics',
  description:
    'Official personal portfolio of Veena — Software Engineer specializing in modern frontend engineering, full-stack web applications, and data analytics systems.',
  keywords: [
    'Veena',
    'Software Engineer',
    'Frontend Developer',
    'Full Stack Developer',
    'Data Analyst',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'SQL',
    'Python',
    'Lovely Professional University',
  ],
  authors: [{ name: 'Veena' }],
  openGraph: {
    title: 'Veena — Software Engineer | Frontend | Full Stack | Data Analytics',
    description:
      'Engineering high-performance web products, full-stack systems, and analytical data dashboards.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Veena Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veena — Software Engineer',
    description:
      'Frontend • Full Stack • Data Analytics Portfolio of Veena',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured JSON-LD Metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Veena',
              jobTitle: 'Software Engineer',
              description:
                'Software Engineer specializing in Frontend Development, Full Stack Systems, and Data Analytics.',
              alumniOf: 'Lovely Professional University',
              knowsAbout: [
                'Software Engineering',
                'Frontend Development',
                'Full Stack Development',
                'Data Analytics',
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'SQL',
                'Python',
              ],
              url: 'https://my-portfolio-eight-gilt-18.vercel.app/',
              sameAs: [
                'https://github.com/veena694',
                'https://www.linkedin.com/in/veena-sardana',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-bgPrimary text-dark selection:bg-dark selection:text-surface">
        <CustomCursor />
        <ScrollStory />
        {children}
      </body>
    </html>
  );
}
