import type { Job } from '@/lib/content';

export function Jobs({ jobs }: { jobs: Job[] }) {
  return (
    <section id="jobs" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <h2 className="font-serif text-3xl md:text-4xl">Experience</h2>
      <ol className="mt-12 space-y-0 border-l border-line">
        {jobs.map((job) => (
          <li key={job.slug} className="relative pl-8">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="pb-12">
              <p className="text-sm uppercase tracking-wide text-muted">{job.range}</p>
              <h3 className="mt-1 font-serif text-2xl">
                {job.title}
                {job.url ? (
                  <>
                    {' '}
                    <span className="text-muted">at</span>{' '}
                    <a href={job.url} className="text-accent hover:text-accent-hover">
                      {job.company}
                    </a>
                  </>
                ) : (
                  <>
                    {' '}
                    <span className="text-muted">at</span> {job.company}
                  </>
                )}
              </h3>
              {job.location && <p className="mt-1 text-sm text-muted">{job.location}</p>}
              <div
                className="prose-site mt-4 max-w-3xl text-base leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: job.html }}
              />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
