export const site = {
  title: 'Taofeek F. Obafemi-Babatunde | Software Engineer',
  description:
    'Taofeek F. Obafemi-Babatunde is a software engineer with 6+ years of experience building large-scale platform infrastructure at Microsoft, specializing in CI/CD automation, service reliability, and Microsoft Graph platform engineering.',
  keywords:
    'Taofeek Obafemi-Babatunde, Fehintola, Fehintola Obafemi-Babatunde, fehintola obafemi, FehintolaObafemi, software engineer, platform engineer, Microsoft Graph, CI/CD, DevOps, cloud infrastructure, Bicep, PowerShell, TypeScript, C#, Microsoft Azure, Morgan State University',
  url: 'https://fehintolaobafemi.com',
  language: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Taofeek F. Obafemi-Babatunde',
  location: 'Austin, TX',
  email: 'taofeekobafemibabatunde@gmail.com',
  github: 'https://github.com/FehintolaObafemi',
  socialMedia: [
    { name: 'GitHub', url: 'https://github.com/FehintolaObafemi' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/taofeek-obafemi-babatunde' },
    { name: 'Website', url: 'https://fehintola.art/' },
  ],
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  homeSections: ['hero', 'about', 'jobs', 'featured', 'projects', 'contact'] as const,
};

export type HomeSectionId = (typeof site.homeSections)[number];
