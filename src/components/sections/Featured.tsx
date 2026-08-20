import Image from 'next/image';
import { IconExternal, IconGitHub } from '@/components/icons';
import type { Project } from '@/lib/content';

export function Featured({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <h2 className="font-serif text-3xl md:text-4xl">Featured work</h2>
      <div className="mt-14 space-y-20">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={index % 2 === 1 ? 'md:order-2' : undefined}>
              <p className="text-sm uppercase tracking-[0.18em] text-accent">Featured project</p>
              <h3 className="mt-2 font-serif text-3xl">
                {project.external ? (
                  <a href={project.external} target="_blank" rel="noreferrer noopener">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <div
                className="prose-site mt-4 rounded-sm border border-line bg-card p-5 text-base leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: project.html }}
              />
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} GitHub`}>
                    <IconGitHub className="h-5 w-5" />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} site`}>
                    <IconExternal className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            {project.cover && (
              <a
                href={project.external ?? project.github ?? '#'}
                target="_blank"
                rel="noreferrer noopener"
                className={index % 2 === 1 ? 'md:order-1' : undefined}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line bg-card">
                  <Image src={project.cover} alt={project.title} fill className="object-cover" />
                </div>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
