# Natalie Ovcharov — Portfolio

Personal portfolio site built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS 4** and **MDX**, deployed on **Netlify**.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run lint`.

## Project structure

```
src/
  app/                   Routes (home, projects, project/[slug], resume, contact)
  components/            UI components (navbar, particle background, cards…)
  content/projects/      One .mdx write-up per project
  lib/projects.ts        Project list: titles, tags, links, videos
  lib/site.ts            Name, email, social links, site URL
public/                  Images, demo videos, resume.pdf
```

## Add a project

1. Add an entry to `src/lib/projects.ts` (the `slug` becomes the URL).
2. Create `src/content/projects/<slug>.mdx` with the write-up.
3. Optional: put a demo video in `public/videos/` and a poster image in `public/images/`.
   Compress videos first, e.g.
   `ffmpeg -i in.mp4 -vf "fps=30,scale=-2:1000" -c:v libx264 -crf 28 -an -movflags +faststart out.mp4`

## Deployment

Netlify builds and deploys every push to `main`, and creates a preview URL for every pull request.
Set the `NEXT_PUBLIC_SITE_URL` environment variable in Netlify to the live URL
(used for the sitemap, canonical URLs and link previews).
