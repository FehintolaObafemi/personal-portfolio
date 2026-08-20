import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Featured } from '@/components/sections/Featured';
import { Hero } from '@/components/sections/Hero';
import { Jobs } from '@/components/sections/Jobs';
import { Projects } from '@/components/sections/Projects';
import type { HomeSectionId } from '@/config/site';
import type { Job, PageContent, Project } from '@/lib/content';

type HomeData = {
  hero: PageContent;
  about: PageContent;
  contact: PageContent;
  jobs: Job[];
  featured: Project[];
  projects: Project[];
};

export function renderHomeSection(id: HomeSectionId, data: HomeData) {
  switch (id) {
    case 'hero':
      return <Hero key={id} data={data.hero} />;
    case 'about':
      return <About key={id} data={data.about} />;
    case 'jobs':
      return <Jobs key={id} jobs={data.jobs} />;
    case 'featured':
      return <Featured key={id} projects={data.featured} />;
    case 'projects':
      return <Projects key={id} projects={data.projects} />;
    case 'contact':
      return <Contact key={id} data={data.contact} />;
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}
