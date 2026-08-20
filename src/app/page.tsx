import { renderHomeSection } from '@/components/sections/registry';
import { site } from '@/config/site';
import { getFeatured, getJobs, getPage, getProjects } from '@/lib/content';

export default function HomePage() {
  const data = {
    hero: getPage('hero'),
    about: getPage('about'),
    contact: getPage('contact'),
    jobs: getJobs(),
    featured: getFeatured(),
    projects: getProjects(),
  };

  return <main>{site.homeSections.map((id) => renderHomeSection(id, data))}</main>;
}
