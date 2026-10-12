import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bgPrimary flex flex-col items-center justify-center p-6 text-center">
      <div className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-surface border border-borderSubtle mb-4">
        404 • PAGE NOT FOUND
      </div>
      <h1 className="text-4xl sm:text-5xl font-light text-dark tracking-tight mb-4">
        This route does not exist.
      </h1>
      <p className="text-mediumGray text-sm font-mono max-w-md mb-8">
        The page you are looking for may have been moved or removed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-dark text-surface font-mono text-xs uppercase tracking-widest hover:bg-darkGray transition-colors"
      >
        Return to Home →
      </Link>
    </div>
  );
}
