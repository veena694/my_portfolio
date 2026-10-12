'use client';

import React from 'react';
import { PROFILE } from '@/lib/data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-bgPrimary text-dark border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Brand & Positioning */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-borderSubtle pb-8">
          <div>
            <div className="font-mono text-sm font-bold tracking-widest uppercase text-dark">
              {PROFILE.name} {PROFILE.lastName}
            </div>
            <div className="font-mono text-xs text-mediumGray uppercase mt-0.5">
              Software Engineer • Frontend • Full Stack • Data Analytics
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark hover:text-mediumGray transition-colors cursor-pointer px-3 py-1.5 border border-borderSubtle bg-surface"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Row: Copyright & Stack Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mediumGray">
          <div>
            © 2026 {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-dark">
              GitHub
            </a>
            <span>•</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-dark">
              LinkedIn
            </a>
            <span>•</span>
            <span className="text-dark font-medium">Built with Next.js 15 & React 19</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
