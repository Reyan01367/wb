# Health Communications Portfolio

Personal portfolio for ADV602 Assessment 2. Static site built with **Astro**, **GSAP** (ScrollTrigger + SplitText) and **Lenis**.

See [`docs/SUBMISSION-STRUCTURE.md`](docs/SUBMISSION-STRUCTURE.md) for how the site, PDFs and video map to the marking rubric.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Edit content (no layout code needed)

| What | File |
| --- | --- |
| Name, bio, email, socials, awards, video, CV | `src/data/site.ts` |
| Campaigns: research, insight, COM-B, executions, KPIs, references, AI log | `src/data/campaigns.ts` |

### Adding your real visuals

Every creative output is drawn in code (`src/components/poster/`), one composition per `art` key.

- **Own photography (OLIVARA):** save the photo in `public/media/olivara/` and set `photo` on the execution. It is placed inside the layout, with the headline on top:
  ```ts
  { title: 'Trade press double-page spread', art: 'grove', photo: '/media/olivara/tree-01.jpg', ... }
  ```
- **Finished artwork:** set `image` on an execution (or `cover` on a campaign) to replace the drawn visual entirely.

### Exporting the creative outputs

```bash
npm run build && npx astro preview --port 4400
npm run export:outputs   # in a second terminal; PNGs land in submission/creative-outputs/
```

### Video

Set one of `youtubeId`, `vimeoId` or `file` in `site.video`.

### Documents

Drop `cv.pdf` and `career-pack.pdf` into `public/docs/`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. On vercel.com: **Add New → Project → Import** the repo. Vercel detects Astro automatically and needs no settings.
3. Update `site` in `astro.config.mjs` and `url` in `src/data/site.ts` to the live URL, then push again.

## Structure

```
src/
  data/          content + types (edit here)
  layouts/       Base.astro: head, nav, cursor, transitions, footer
  components/    PosterArt (key visuals), Pulse (ECG motif), home/, case/
  pages/         index, about, 404, work/[slug]
  scripts/       motion: scroll, preloader, transition, cursor, reveal, sections
  styles/        global tokens + utilities
```

Motion respects `prefers-reduced-motion`, and all content stays readable without JavaScript.
