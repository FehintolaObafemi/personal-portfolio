import type { PageContent } from '@/lib/content';

export function Hero({ data }: { data: PageContent }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">{data.title}</p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">
        {data.name}
      </h1>
      <p className="mt-5 max-w-2xl font-serif text-2xl text-muted md:text-3xl">{data.subtitle}</p>
      <div
        className="prose-site mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      <a
        href="#contact"
        className="mt-10 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper hover:bg-accent-hover">
        {data.buttonText ?? 'Get in touch'}
      </a>
    </section>
  );
}
