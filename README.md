[![Netlify Status](https://api.netlify.com/api/v1/badges/719f19c1-5fdb-4441-984d-d1851c7e692f/deploy-status)](https://app.netlify.com/sites/fehintolaportfolio/deploys)

Personal site for Taofeek F. Obafemi-Babatunde. Built with Next.js (static export) and markdown in `content/`.

## Install and run

```sh
nvm use
yarn
yarn dev
```

Production build:

```sh
yarn build
yarn start
```

Netlify publishes the `out/` directory from `yarn build`.

## How to add content

Homepage section order lives in [`src/config/site.ts`](src/config/site.ts) (`homeSections`). To add a new *kind* of homepage section: add markdown (if needed), add a component under `src/components/sections/`, register it in `src/components/sections/registry.tsx`, and append its id to `homeSections`.

### Featured project

1. Create `content/featured/<slug>/index.md`
2. Put a cover image next to it (for example `cover.png`)
3. Use this frontmatter:

```yaml
date: '2026-08-01'   # ISO date; featured list sorts newest first
title: 'Project name'
cover: './cover.png'
github: 'https://github.com/...'   # optional
external: 'https://example.com/'   # optional
tech:
  - TypeScript
featured: true
```

4. Write a short description in the markdown body.

### Other project (card grid + archive)

Add `content/projects/<Name>.md` with `date`, `title`, `tech`, optional `github` / `external` / `company`, and `showInProjects: true`.

### Job

Add `content/jobs/<Company>/index.md` with `date`, `title`, `company`, `location`, `range`, optional `url`, and bullet markdown in the body.

### Hero, about, contact

Edit `content/hero/index.md`, `content/about/index.md`, and `content/contact/index.md`. About can include `avatar: './me.png'` and a `skills` list.
