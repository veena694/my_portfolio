'use client';

import React, { useEffect, useState } from 'react';

export const ScrollStory: React.FC = () => {
  const [currentWord, setCurrentWord] = useState('BUILD');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollPos / docHeight;

      if (progress < 0.25) {
        setCurrentWord('BUILD');
      } else if (progress < 0.55) {
        setCurrentWord('ANALYZE');
      } else if (progress < 0.85) {
        setCurrentWord('SOLVE');
      } else {
        setCurrentWord('CONNECT');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-30 pointer-events-none hidden xl:flex items-center gap-2 font-mono text-[10px] text-mediumGray/70 uppercase tracking-widest bg-surface/80 backdrop-blur-xs px-3 py-1 border border-borderSubtle">
      <span className="w-1.5 h-1.5 rounded-full bg-dark animate-pulse" />
      <span>NARRATIVE PHASE:</span>
      <span className="font-bold text-dark">{currentWord}</span>
    </div>
  );
};
