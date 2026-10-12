'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#EDE9DD] text-[#0D0D0D] px-4 text-center font-sans">
        <div className="max-w-md p-8 bg-white border border-black/10 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-semibold">Application Error</h2>
          <p className="text-sm text-gray-600">
            A critical application error occurred.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-[#0D0D0D] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors cursor-pointer"
          >
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
