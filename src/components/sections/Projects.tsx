import Link from 'next/link';
import { IconExternal, IconGitHub } from '@/components/icons';
import type { Project } from '@/lib/content';

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="other-work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="font-serif text-3xl md:text-4xl">Other work</h2>
        <Link href="/archive/" className="text-sm text-accent hover:text-accent-hover">
          View the archive
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="flex h-full flex-col border border-line bg-card p-6">
            <h3 className="font-serif text-xl">{project.title}</h3>
            <div
              className="prose-site mt-3 flex-1 text-sm leading-relaxed text-muted"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
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
          </article>
        ))}
      </div>
    </section>
  );
}
