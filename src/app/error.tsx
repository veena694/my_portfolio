'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgPrimary text-dark px-4 text-center">
      <div className="max-w-md p-8 bg-surface border border-borderSubtle shadow-sm space-y-4">
        <h2 className="text-2xl font-serif font-semibold">Something went wrong</h2>
        <p className="text-sm text-mediumGray">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-dark text-surface text-xs font-mono uppercase tracking-widest hover:bg-darkGray transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
