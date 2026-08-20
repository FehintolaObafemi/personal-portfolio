import { IconExternal, IconGitHub, IconLinkedIn } from '@/components/icons';
import { site } from '@/config/site';

const icons = {
  GitHub: IconGitHub,
  LinkedIn: IconLinkedIn,
  Website: IconExternal,
};

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          {site.name} · {site.location}
        </p>
        <ul className="flex items-center gap-4">
          {site.socialMedia.map((item) => {
            const Icon = icons[item.name as keyof typeof icons] ?? IconExternal;
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.name}
                  className="text-ink hover:text-accent">
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
