import Image from 'next/image';
import type { PageContent } from '@/lib/content';

export function About({ data }: { data: PageContent }) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <h2 className="font-serif text-3xl md:text-4xl">{data.title ?? 'About'}</h2>
      <div className="mt-10 grid items-start gap-12 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div
            className="prose-site max-w-xl space-y-4 text-lg leading-relaxed text-muted"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
          {data.skills.length > 0 && (
            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-ink sm:max-w-md">
              {data.skills.map((skill) => (
                <li key={skill} className="before:mr-2 before:text-accent before:content-['—']">
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
        {data.avatar && (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-line bg-card">
            <Image src={data.avatar} alt={data.name ?? 'Portrait'} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
