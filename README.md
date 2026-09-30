# Portfolio

My personal site. It's built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and MDX, and it's deployed on Netlify.

## Running it

```bash
npm install
npm run dev
```

It runs at http://localhost:3000. `npm run build` makes a production build and `npm run lint` checks the code.

## Where things are

```
src/
  app/                   pages (home, projects, project/[slug], resume, contact)
  components/            navbar, particle background, cards and so on
  content/projects/      one .mdx write-up per project
  lib/projects.ts        the project list: titles, tags, links, videos
  lib/site.ts            name, email, social links, site address
public/                  images, demo videos, resume.pdf
```

## Adding a project

1. Add it to `src/lib/projects.ts`. The `slug` becomes the address.
2. Write `src/content/projects/<slug>.mdx`.
3. If there's a demo, put the video in `public/videos/` and a poster image in `public/images/`. Shrink the video first, for example:

   ```bash
   ffmpeg -i in.mp4 -vf "fps=30,scale=-2:1000" -c:v libx264 -crf 28 -an -movflags +faststart out.mp4
   ```

## Deploying

Netlify builds every push to `main` and makes a preview for every pull request. `NEXT_PUBLIC_SITE_URL` has to be set in Netlify to the live address, it's used for the sitemap, canonical links and link previews.
