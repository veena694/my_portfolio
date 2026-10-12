import React from 'react';

interface SectionHeadingProps {
  number?: string;
  subtitle: string;
  titlePrefix: string;
  serifItalicWord: string;
  titleSuffix?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  subtitle,
  titlePrefix,
  serifItalicWord,
  titleSuffix = '',
  className = '',
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {number ? (
          <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 bg-softBg text-darkGray border border-borderSubtle font-medium">
            {number}
          </span>
        ) : null}
        <span className="font-mono text-xs uppercase tracking-widest text-mediumGray font-medium">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-dark leading-[1.1]">
        {titlePrefix}{' '}
        <span className="font-editorial-serif italic font-normal text-black underline decoration-1 underline-offset-4 decoration-borderSubtle">
          {serifItalicWord}
        </span>
        {titleSuffix ? ` ${titleSuffix}` : ''}
      </h2>
    </div>
  );
};
