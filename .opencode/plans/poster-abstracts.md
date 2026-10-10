# Plan: Poster abstracts (Markdown) + shareable poster pages + PDF support

Status: approved by user. Execution was interrupted by read-only mode.
Current working tree: the 12 poster JSON files were already deleted (restorable via
`git restore src/content/posters/` — they are in commit c5cccf1). Since the plan
converts them to Markdown anyway, no restore is needed to proceed; the deletions
are part of the change. All file contents below are final and ready to write.

## Approved decisions
- Poster abstracts as Markdown body (frontmatter for metadata)
- One shareable detail page per poster (`/posters/p01/` …) with prev/next nav
- Optional `pdf` frontmatter field → download button (PDFs go in `public/posters/`)

## Step 1 — `src/content.config.ts`

Replace the posters collection (lines 47-56) with:

```ts
const posters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posters" }),
  schema: z.object({
    number: z.string(),
    day: z.number(),
    title: z.string(),
    authors: z.string(),
    affiliation: z.string(),
    pdf: z.string().optional(),
  }),
});
```

## Step 2 — Write 12 Markdown files in `src/content/posters/`

Each file: YAML frontmatter + abstract as body (full contents below).

### p01.md
```md
---
number: "P01"
day: 1
title: "Representing dense water overflows in ORCA12: sensitivity to bottom boundary layer schemes"
authors: "K. Tanaka, H. Sasaki"
affiliation: "JAMSTEC, Yokosuka, Japan"
---

Dense water overflows across the Greenland-Scotland Ridge are a key component of the Atlantic Meridional Overturning Circulation, yet their representation remains challenging at eddy-permitting resolution. We assess the simulated Denmark Strait and Faroe Bank Channel overflows in a set of ORCA12 experiments, focusing on the sensitivity to bottom boundary layer parameterizations and topography smoothing. Compared with moored transport estimates, the standard configuration overestimates the entrainment rate downstream of the sill. A refined bottom boundary layer scheme reduces this bias while preserving the overflow water properties in the Irminger and Iceland basins. Implications for the downstream deep limb of the overturning circulation are discussed.
```

### p02.md
```md
---
number: "P02"
day: 1
title: "Sensitivity of Arctic sea-ice deformation and ridging to ice rheology in NEMO-LIM"
authors: "L. Jansen, P. Nielsen"
affiliation: "Norwegian Polar Institute, Tromsø, Norway"
---

Sea-ice deformation and ridging shape the thickness distribution of the Arctic ice cover and its freshwater export. We analyze a series of NEMO-LIM simulations in which the internal ice stress formulation is varied, with a focus on linear kinematic features and ridge production along the Siberian shelves. At 1/4 degree resolution, the localization of deformation events is strongly sensitive to the rheology and to the convergence criterion used for ridging. The resulting spread in Fram Strait ice export reaches 15% between the extreme configurations. We discuss how these sensitivities propagate to the simulated Arctic freshwater budget.
```

### p03.md
```md
---
number: "P03"
day: 1
title: "Interannual to decadal variability of the Agulhas leakage in DRAKKAR global simulations"
authors: "S. Pillay, R. de Villiers"
affiliation: "CSIR, Cape Town, South Africa"
---

The leakage of warm and salty Indian Ocean waters into the Atlantic around the Agulhas system is a key element of the global overturning. We characterize its interannual to decadal variability in a multi-decadal DRAKKAR simulation at 1/4 degree resolution. Agulhas ring shedding events are identified with an automated tracking algorithm, and their properties are compared with altimetric estimates. The simulated leakage correlates significantly with large-scale modes of variability over the Southern Hemisphere, with a delayed response to ENSO forcing. The role of mesoscale dynamics in setting the leakage transport and its low-frequency modulation is quantified.
```

### p04.md
```md
---
number: "P04"
day: 1
title: "Seasonal cycle of turbulent kinetic energy in the Bay of Bengal: ORCA025 vs. glider observations"
authors: "A. Raman, V. Krishnan"
affiliation: "INCOIS, Hyderabad, India"
---

The upper-ocean turbulent kinetic energy budget of the Bay of Bengal controls the mixed layer heat budget and hence the air-sea fluxes during the monsoon cycle. We compare one year of ORCA025 output with repeated glider sections and moored turbulence observations in the northern bay. The simulation captures the semi-annual reversal of near-inertial energy but underestimates the summer peak associated with storm-driven mixing. Sensitivity experiments with modified wind-work parameterizations suggest that the bias originates from the near-inertial wave band rather than from the convective mixing scheme. Implications for the simulated barrier layer thickness are discussed.
```

### p05.md
```md
---
number: "P05"
day: 2
title: "Impact of tidal energy parameterizations on abyssal stratification in ORCA1"
authors: "E. Ferreira, G. Roig"
affiliation: "MOI, Toulouse, France"
---

The conversion of barotropic tidal energy over rough topography sustains most of the deep-ocean mixing that maintains the abyssal stratification. We revisit the tidal mixing parameterization used in ORCA1 simulations of the DRAKKAR consortium, testing alternative maps of energy conversion and variable mixing efficiencies. Water mass properties in the deep Pacific and the diapycnal diffusivity structure are compared against Argo and microstructure-derived estimates. The enhanced conversion over ridges improves the deep temperature-salinity structure without degrading the overturning strength. We propose an optimized configuration for the next set of production runs.
```

### p06.md
```md
---
number: "P06"
day: 2
title: "Ocean heat content variability in the tropical Atlantic: eNATL60 vs. ORCA025"
authors: "D. Kim, J. Park"
affiliation: "KIOST, Busan, South Korea"
---

We quantify the contribution of resolved mesoscale and submesoscale dynamics to ocean heat content variability in the tropical Atlantic by comparing the fully explicit eNATL60 simulation with a companion ORCA025 run. The high-resolution run exhibits systematically stronger eddy-induced heat advection along the North Brazil Current rings and the equatorial tongues. The scale-dependent differences in heat content trends reach several W/m2 in boundary current regions. We discuss the implications for the interpretation of coarser-resolution DRAKKAR simulations and for the design of future observing systems.
```

### p07.md
```md
---
number: "P07"
day: 2
title: "Simulated coastal sea level along the European shelf: model drift and long-term trends"
authors: "R. Almeida, M. Costa"
affiliation: "IPMA, Lisbon, Portugal"
---

Coastal sea level projections require a careful separation of forced trends from intrinsic variability and model drift. We analyze multi-decadal DRAKKAR simulations along the European shelf seas, comparing tide gauge records and altimetry. Steric and manometric contributions are diagnosed online from the model heat and salt content. A slow hyper-ocean-driven drift is identified in the North Sea in one configuration, contaminating the estimated long-term trends. We propose a drift-aware trend estimation method and discuss its impact on the regional sea level change patterns.
```

### p08.md
```md
---
number: "P08"
day: 2
title: "Circum-Antarctic water mass transformation and overturning in high-resolution DRAKKAR runs"
authors: "A. Sørensen, K. Holm"
affiliation: "GEOMAR, Kiel, Germany"
---

The transformation of Circumpolar Deep Water into Antarctic Bottom Water sets the properties of the global abyssal ocean. We present a water mass transformation analysis of recent high-resolution DRAKKAR simulations around Antarctica, with a focus on the Weddell and Ross seas. The formation rate of newly ventilated bottom water responds strongly to sea-ice production on the continental shelves and to the representation of polynyas at eddying resolution. Diagnostics of the overturning in density space are compared between configurations and observational estimates, and the dominant drivers of inter-model spread are identified.
```

### p09.md
```md
---
number: "P09"
day: 3
title: "Improving the representation of Mediterranean Water Outflow in ORCA025"
authors: "P. García, L. Moreno"
affiliation: "ICM-CSIC, Barcelona, Spain"
---

The Mediterranean Water Outflow through the Strait of Gibraltar is a major source of intermediate-depth salt and heat for the North Atlantic, yet it is poorly resolved in basin-scale simulations. We evaluate the simulated outflow water properties and spreading pathways in ORCA025 against hydrographic sections and Argo trajectories. A combination of refined strait geometry and enhanced diapycnal mixing in the Gulf of Cadiz brings the simulated salinity anomaly closer to observations without resorting to restoring. The impact on the Mediterranean eddies (meddies) distribution and their contribution to the eastern North Atlantic salt budget is quantified.
```

### p10.md
```md
---
number: "P10"
day: 3
title: "Machine-learning emulation of NEMO bulk formulas: first results with the eophis framework"
authors: "G. Meier, F. Bauer"
affiliation: "IGE, Grenoble, France"
---

Online coupling of machine-learning components with NEMO opens the way to hybrid physics-data parameterizations. We present first experiments in which a neural network trained on eddy-covariance data emulates the bulk air-sea flux formulation within a NEMO configuration, using the eophis coupling framework and the OASIS-MCT coupler. A single-column configuration at Ocean Station Papa is used to assess the stability and computational cost of the online setup. The trained network provides flux estimates comparable to the reference bulk algorithm while adding an explicit estimate of the flux uncertainty. Remaining challenges for global configurations are discussed.
```

### p11.md
```md
---
number: "P11"
day: 3
title: "Eddies and fronts in the Gulf Stream separation zone: grid-scale dependence"
authors: "Y. Chen, S. Wang"
affiliation: "SAMS, Oban, UK"
---

The separation of the Gulf Stream at Cape Hatteras is a long-standing challenge for ocean models. We compare eddy and front statistics in the separation zone across a hierarchy of simulations, from ORCA1 to the submesoscale-resolving eNATL60. Frontal sharpness, eddy kinetic energy levels, and the recirculation gyre transports are evaluated against altimetry and SST front detections. Only at 1/12 degree and finer does the separation latitude and the north wall position become stable. We discuss the effective resolution at which the Gulf Stream dynamics converge and the benefit of the SWOT-era observations for such evaluations.
```

### p12.md
```md
---
number: "P12"
day: 3
title: "A community diagnostics package for NEMO budgets: prototype and use cases"
authors: "N. Almeida, T. Oliveira"
affiliation: "USP, São Paulo, Brazil"
---

Rigorous analysis of NEMO simulations requires consistent online and offline diagnostics of the heat, salt, and momentum budgets. We present a prototype of a community diagnostics package built on xarray and the online budget outputs of NEMO 5. The package provides closed budget terms, water mass transformation diagnostics, and ready-to-publish figures from a single configuration file. Use cases include the evaluation of the Atlantic Meridional Overturning Circulation in DRAKKAR runs and the comparison of mixing parameterizations. We invite the community to contribute use cases ahead of the planned plenary discussion on a NEMO analysis toolbox.
```

## Step 3 — `src/pages/posters.astro` (full rewrite)

```astro
---
import Base from "../layouts/Base.astro";
import PageHeader from "../components/PageHeader.astro";
import NoteBanner from "../components/NoteBanner.astro";
import { getCollection, render } from "astro:content";
import { nav } from "../utils";

const entries = (await getCollection("posters")).sort(
  (a, b) => a.data.day - b.data.day || a.data.number.localeCompare(b.data.number)
);

const rendered = await Promise.all(
  entries.map(async (entry) => ({
    entry,
    Content: (await render(entry)).Content,
  }))
);
---

<Base
  title="List of Posters"
  description="Posters presented during the daily poster sessions of the 2027 DRAKKAR Ocean Modelling Workshop."
>
  <PageHeader
    title="List of Posters"
    subtitle="The ordered list of all posters presented during each daily poster session."
  />

  <NoteBanner
    text="Sample list for demonstration purposes only. The 2027 poster list will be published here after the abstract selection."
  />

  <section class="mx-auto max-w-6xl px-4 pt-10">
    <div class="rounded-2xl border border-ocean-100 bg-white p-5 text-sm leading-relaxed text-slate-600">
      <span class="font-semibold text-ocean-900">Poster format: A0, portrait orientation.</span> On-site
      presenters install their poster in the morning of their session day and remove it in the same evening.
      Posters from remote participants are shared as PDFs with registered participants for virtual Q&amp;A.
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-10">
    <div id="poster-filters" class="flex flex-wrap gap-2">
      <button
        data-filter="all"
        class="rounded-full border border-ocean-700 bg-ocean-700 px-4 py-1.5 text-sm font-semibold text-white transition"
      >
        All
      </button>
      <button
        data-filter="1"
        class="rounded-full border border-ocean-200 bg-white px-4 py-1.5 text-sm font-semibold text-ocean-700 transition hover:border-ocean-400"
      >
        Day 1 &mdash; Monday
      </button>
      <button
        data-filter="2"
        class="rounded-full border border-ocean-200 bg-white px-4 py-1.5 text-sm font-semibold text-ocean-700 transition hover:border-ocean-400"
      >
        Day 2 &mdash; Tuesday
      </button>
      <button
        data-filter="3"
        class="rounded-full border border-ocean-200 bg-white px-4 py-1.5 text-sm font-semibold text-ocean-700 transition hover:border-ocean-400"
      >
        Day 3 &mdash; Wednesday
      </button>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-2">
      {
        rendered.map(({ entry, Content }) => (
          <article
            data-day={entry.data.day}
            class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-600 text-sm font-bold text-white">
                {entry.data.number}
              </div>
              <div class="min-w-0 flex-1">
                <h2 class="font-semibold leading-snug text-slate-900">
                  <a class="hover:text-ocean-700" href={nav(`posters/${entry.id}`)}>
                    {entry.data.title}
                  </a>
                </h2>
                <p class="mt-1 text-sm text-slate-600">{entry.data.authors}</p>
                <p class="text-xs text-slate-400">{entry.data.affiliation}</p>
              </div>
              <span class="self-start rounded-full bg-ocean-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ocean-700">
                Day {entry.data.day}
              </span>
            </div>
            {entry.body && (
              <details class="text-sm">
                <summary class="cursor-pointer font-semibold text-ocean-600 hover:text-ocean-800">Abstract</summary>
                <div class="mt-3 leading-relaxed text-slate-600 [&_p]:my-3">
                  <Content />
                </div>
              </details>
            )}
            <div class="mt-auto flex items-center justify-between gap-3 text-xs">
              <a
                class="font-semibold text-ocean-600 hover:text-ocean-800 hover:underline"
                href={nav(`posters/${entry.id}`)}
              >
                View poster page &rarr;
              </a>
              {entry.data.pdf && (
                <a
                  class="font-semibold text-ocean-600 hover:text-ocean-800 hover:underline"
                  href={nav(`posters/${entry.data.pdf}`)}
                  download
                >
                  Download PDF
                </a>
              )}
            </div>
          </article>
        ))
      }
    </div>
  </section>
</Base>

<script>
  const filters = document.querySelectorAll<HTMLButtonElement>("#poster-filters button");
  const cards = document.querySelectorAll<HTMLElement>("[data-day]");

  const activeClasses = ["bg-ocean-700", "text-white", "border-ocean-700"];
  const inactiveClasses = ["bg-white", "text-ocean-700", "border-ocean-200"];

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filters.forEach((other) => {
        other.classList.remove(...activeClasses);
        other.classList.add(...inactiveClasses);
      });
      button.classList.remove(...inactiveClasses);
      button.classList.add(...activeClasses);
      cards.forEach((card) => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.day !== filter);
      });
    });
  });
</script>
```

## Step 4 — New file `src/pages/posters/[id].astro`

```astro
---
import Base from "../../layouts/Base.astro";
import PageHeader from "../../components/PageHeader.astro";
import { getCollection, render } from "astro:content";
import { nav } from "../../utils";

export async function getStaticPaths() {
  const posters = (await getCollection("posters")).sort(
    (a, b) => a.data.day - b.data.day || a.data.number.localeCompare(b.data.number)
  );
  return posters.map((entry, index) => ({
    params: { id: entry.id },
    props: {
      entry,
      prev: posters[index - 1] ?? null,
      next: posters[index + 1] ?? null,
    },
  }));
}

const { entry, prev, next } = Astro.props;
const { Content } = await render(entry);
const dayLabel =
  entry.data.day === 1
    ? "Monday 1 February"
    : entry.data.day === 2
      ? "Tuesday 2 February"
      : "Wednesday 3 February";
---

<Base title={`Poster ${entry.data.number}`} description={entry.data.title}>
  <PageHeader title={`Poster ${entry.data.number}`} subtitle={entry.data.title} />

  <section class="mx-auto max-w-3xl px-4 py-12">
    <a
      href={nav("posters")}
      class="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-600 hover:text-ocean-800"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
      </svg>
      Back to the poster list
    </a>

    <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div class="flex flex-wrap items-center gap-3">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-600 text-sm font-bold text-white">
          {entry.data.number}
        </span>
        <span class="rounded-full bg-ocean-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ocean-700">
          Poster session &middot; Day {entry.data.day} &mdash; {dayLabel}
        </span>
      </div>
      <h2 class="mt-5 text-xl font-bold leading-snug text-slate-900">{entry.data.title}</h2>
      <p class="mt-2 text-sm font-medium text-slate-700">{entry.data.authors}</p>
      <p class="text-xs text-slate-400">{entry.data.affiliation}</p>
      {entry.data.pdf && (
        <a
          href={nav(`posters/${entry.data.pdf}`)}
          download
          class="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-ocean-950 transition hover:bg-amber-300"
        >
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
          </svg>
          Download poster (PDF)
        </a>
      )}
      <div class="mt-6 border-t border-slate-100 pt-6">
        <h3 class="text-sm font-semibold uppercase tracking-widest text-ocean-600">Abstract</h3>
        <div class="mt-4 leading-relaxed text-slate-700 [&_p]:my-4">
          <Content />
        </div>
      </div>
    </div>

    <nav class="mt-8 flex items-stretch justify-between gap-4 text-sm">
      {
        prev ? (
          <a
            href={nav(`posters/${prev.id}`)}
            class="group flex min-w-0 flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-ocean-300 hover:shadow-sm"
          >
            <span class="text-xs font-semibold uppercase tracking-wide text-slate-400">&larr; Previous</span>
            <span class="mt-1 truncate font-semibold text-ocean-700 group-hover:underline">
              {prev.data.number} &middot; {prev.data.title}
            </span>
          </a>
        ) : (
          <span class="flex-1"></span>
        )
      }
      {
        next ? (
          <a
            href={nav(`posters/${next.id}`)}
            class="group flex min-w-0 flex-1 flex-col items-end rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:border-ocean-300 hover:shadow-sm"
          >
            <span class="text-xs font-semibold uppercase tracking-wide text-slate-400">Next &rarr;</span>
            <span class="mt-1 truncate font-semibold text-ocean-700 group-hover:underline">
              {next.data.number} &middot; {next.data.title}
            </span>
          </a>
        ) : (
          <span class="flex-1"></span>
        )
      }
    </nav>
  </section>
</Base>
```

## Step 5 — README.md content table

Replace the row `| Poster list | src/content/posters/*.json |` with:

```
| Poster list (one file per poster; abstract as the body) | `src/content/posters/*.md` |
```

And after the paragraph about registration links, add:

```
Poster PDFs: set an optional `pdf` field in a poster's frontmatter (filename only) and place the
corresponding file in `public/posters/` to show a download button on the poster page.
```

## Step 6 — Build and verify

```bash
npm run build
(npm run preview >/tmp/preview.log 2>&1 &) && sleep 3
for p in posters posters/p01 posters/p12 program keynotes practical; do
  curl -s -o /dev/null -w "/$p -> %{http_code}\n" "http://localhost:4321/drakkar2027-worksop-website/$p"
done
pkill -f "astro preview"
```

Expect: all 200s; build output lists 12 poster routes (`/posters/p01/index.html` ...).

## Step 7 — Commit and push

```bash
git add -A
git commit -m "Add poster abstracts with Markdown content and shareable poster pages"
git push
```

## Rollback option (if the feature is dropped instead)

```bash
git restore src/content/posters/
```
