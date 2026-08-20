import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">That URL is not part of this site.</p>
      <Link href="/" className="mt-8 inline-block text-accent hover:text-accent-hover">
        Back home
      </Link>
    </main>
  );
}
