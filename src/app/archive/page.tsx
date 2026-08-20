import type { Metadata } from 'next';
import { IconExternal, IconGitHub } from '@/components/icons';
import { getArchiveProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Archive | Taofeek F. Obafemi-Babatunde',
  alternates: { canonical: '/archive/' },
};

export default function ArchivePage() {
  const projects = getArchiveProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl">Archive</h1>
      <p className="mt-3 text-lg text-muted">A list of things I have worked on</p>
      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line text-muted">
              <th className="py-3 pr-4 font-normal">Year</th>
              <th className="py-3 pr-4 font-normal">Title</th>
              <th className="hidden py-3 pr-4 font-normal md:table-cell">Made at</th>
              <th className="hidden py-3 pr-4 font-normal md:table-cell">Built with</th>
              <th className="py-3 font-normal">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-line/70">
                <td className="py-4 pr-4 text-muted">{project.date.slice(0, 4) || '—'}</td>
                <td className="py-4 pr-4 font-serif text-base">{project.title}</td>
                <td className="hidden py-4 pr-4 text-muted md:table-cell">{project.company ?? '—'}</td>
                <td className="hidden py-4 pr-4 text-muted md:table-cell">{project.tech.join(' · ')}</td>
                <td className="py-4">
                  <span className="flex gap-3">
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noreferrer noopener" aria-label="External link">
                        <IconExternal className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                        <IconGitHub className="h-4 w-4" />
                      </a>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
