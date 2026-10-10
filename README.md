# drakkar2027-workshop-website

Source code of the website for the **2027 DRAKKAR Ocean Modelling Workshop** (25th edition, 1-3 February 2027, IMAG Building, Grenoble, France).

Static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), designed to be hosted on **GitHub Pages**.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:4321/drakkar2027-worksop-website

## Where to edit content

| Content | Location |
| --- | --- |
| Dates, venue, links, committees, intro text | `src/config.ts` |
| Program (one file per day) | `src/content/program/*.json` |
| Keynote speakers | `src/content/keynotes/*.json` |
| Poster list | `src/content/posters/*.json` |
| Practical information | `src/pages/practical.astro` |

Registration and abstract-submission links are set in `src/config.ts` (`SITE.links.registration` and `SITE.links.abstractSubmission`); while they are empty, the buttons show a "coming soon" state.

## Deploy to GitHub Pages

1. In the GitHub repository, go to **Settings -> Pages** and set **Source** to *GitHub Actions*.
2. Push to `main`: the workflow in `.github/workflows/deploy.yml` builds and deploys the site.
3. The site is served at `https://drakkar-workshop.github.io/drakkar2027-worksop-website/`.

If the repository is renamed, update `site` and `base` in `astro.config.mjs` to match the new name.
