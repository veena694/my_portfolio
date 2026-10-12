/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#EDE9DD',
        surface: '#FFFFFF',
        dark: '#0D0D0D',
        darkGray: '#333333',
        mediumGray: '#6F6F6F',
        lightGray: '#A8A8A8',
        softBg: '#E9E7E2',
        borderSubtle: 'rgba(0, 0, 0, 0.10)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter Tight', 'Inter', 'sans-serif'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
