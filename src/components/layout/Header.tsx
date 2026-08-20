'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/config/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">
          {site.name.split(' ')[0]}
        </Link>
        <button
          type="button"
          className="rounded-md border border-line px-3 py-1 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}>
          Menu
        </button>
        <nav id="site-nav" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-4 border-b border-line bg-paper px-6 py-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {site.navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-sm tracking-wide text-muted hover:text-accent"
              onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
