import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

marked.setOptions({ gfm: true, breaks: false });

function toHtml(markdown: string) {
  return marked.parse(markdown, { async: false }) as string;
}

function isPresent(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function publicUrlFromRelative(filePath: string, relative?: string) {
  if (!isPresent(relative)) {
    return undefined;
  }
  const resolved = path.resolve(path.dirname(filePath), relative);
  const rel = path.relative(CONTENT_ROOT, resolved).split(path.sep).join('/');
  return `/content/${rel}`;
}

function readMarkdownFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  return {
    data: parsed.data as Record<string, unknown>,
    html: toHtml(parsed.content.trim()),
  };
}

function listMarkdownFiles(dir: string, nestedIndexOnly = false) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && nestedIndexOnly) {
      const index = path.join(full, 'index.md');
      if (fs.existsSync(index)) {
        files.push(index);
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export type PageContent = {
  title?: string;
  name?: string;
  subtitle?: string;
  buttonText?: string;
  avatar?: string;
  skills: string[];
  html: string;
};

export type Job = {
  slug: string;
  date: string;
  title: string;
  company: string;
  location: string;
  range: string;
  url?: string;
  html: string;
};

export type Project = {
  slug: string;
  date: string;
  title: string;
  tech: string[];
  github?: string;
  external?: string;
  company?: string;
  cover?: string;
  showInProjects: boolean;
  html: string;
};

export function getPage(slug: 'hero' | 'about' | 'contact'): PageContent {
  const filePath = path.join(CONTENT_ROOT, slug, 'index.md');
  const { data, html } = readMarkdownFile(filePath);
  return {
    title: isPresent(data.title) ? data.title : undefined,
    name: isPresent(data.name) ? data.name : undefined,
    subtitle: isPresent(data.subtitle) ? data.subtitle : undefined,
    buttonText: isPresent(data.buttonText) ? data.buttonText : undefined,
    avatar: publicUrlFromRelative(filePath, isPresent(data.avatar) ? data.avatar : undefined),
    skills: Array.isArray(data.skills) ? (data.skills as string[]) : [],
    html,
  };
}

export function getJobs(): Job[] {
  const files = listMarkdownFiles(path.join(CONTENT_ROOT, 'jobs'), true);
  const jobs = files.map((filePath) => {
    const { data, html } = readMarkdownFile(filePath);
    return {
      slug: path.basename(path.dirname(filePath)),
      date: String(data.date ?? ''),
      title: String(data.title ?? ''),
      company: String(data.company ?? ''),
      location: String(data.location ?? ''),
      range: String(data.range ?? ''),
      url: isPresent(data.url) ? data.url : undefined,
      html,
    };
  });
  return sortByDateDesc(jobs);
}

function readProjectFile(filePath: string, slug: string): Project {
  const { data, html } = readMarkdownFile(filePath);
  return {
    slug,
    date: String(data.date ?? ''),
    title: String(data.title ?? ''),
    tech: Array.isArray(data.tech) ? (data.tech as string[]) : [],
    github: isPresent(data.github) ? data.github : undefined,
    external: isPresent(data.external) ? data.external : undefined,
    company: isPresent(data.company) ? data.company : undefined,
    cover: publicUrlFromRelative(filePath, isPresent(data.cover) ? data.cover : undefined),
    showInProjects: data.showInProjects !== false,
    html,
  };
}

export function getFeatured(): Project[] {
  const files = listMarkdownFiles(path.join(CONTENT_ROOT, 'featured'), true);
  const projects = files.map((filePath) =>
    readProjectFile(filePath, path.basename(path.dirname(filePath))),
  );
  return sortByDateDesc(projects);
}

export function getProjects(): Project[] {
  const files = listMarkdownFiles(path.join(CONTENT_ROOT, 'projects'), false);
  const projects = files.map((filePath) =>
    readProjectFile(filePath, path.basename(filePath, '.md')),
  );
  return sortByDateDesc(projects.filter((project) => project.showInProjects));
}

export function getArchiveProjects(): Project[] {
  return sortByDateDesc([...getFeatured(), ...getProjects()]);
}
