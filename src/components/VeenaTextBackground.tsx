'use client';

import React from 'react';

export const VeenaTextBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-full max-w-full text-center overflow-hidden select-none px-2 sm:px-4"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100vw',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div className="relative inline-block mx-auto max-w-full">
        {/* Base Layer: Subtle High-Contrast Serif Outline */}
        <span
          className="block font-serif font-normal uppercase leading-none tracking-tight whitespace-nowrap select-none"
          style={{
            fontSize: 'clamp(6rem, 17vw, 19rem)',
            letterSpacing: '-0.02em',
            WebkitTextStroke: '1.5px rgba(13, 13, 13, 0.20)',
            color: 'transparent',
            display: 'block',
          }}
        >
          VEENA
        </span>

        {/* Top Layer: Solid Black Fill with 1.4s Left-to-Right Clip Reveal */}
        <span
          className="block font-serif font-normal uppercase leading-none tracking-tight text-dark animate-left-to-right-fill whitespace-nowrap select-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            fontSize: 'clamp(6rem, 17vw, 19rem)',
            letterSpacing: '-0.02em',
            color: '#0D0D0D',
            display: 'block',
          }}
        >
          VEENA
        </span>
      </div>
    </div>
  );
};
