import type { PageContent } from '@/lib/content';
import { site } from '@/config/site';

export function Contact({ data }: { data: PageContent }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 text-center">
      <h2 className="font-serif text-3xl md:text-4xl">{data.title ?? 'Get in touch'}</h2>
      <div
        className="prose-site mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
      <a
        href={`mailto:${site.email}`}
        className="mt-8 inline-flex rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-paper">
        {data.buttonText ?? 'Say hello'}
      </a>
    </section>
  );
}
