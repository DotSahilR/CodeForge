# CODEFORGE - SOFTWARE STUDIO

A cinematic, streaming-inspired **agency site** for **CODEFORGE Studio**, a (fictional) software development studio based in Goa, India.
Every section is an episode, every project is a case study, and the whole site plays like a series - restyled with a Spotify-inspired dark theme.

> Sample content only. Names, clients, testimonials and credentials are fictional, the emails use `.example` placeholders, and nothing is affiliated with Netflix, Spotify or any other service.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Studio name, intro, emails, LinkedIn, GitHub | `profile` |
| The "who we are" facts | `studioFacts` |
| Case studies (add an object; it appears in Work, the overlay and the counts) | `projects` |
| Stack categories and "where it's used" notes | `skillCategories`, `skillEvidence` |
| Process phases and deliverables | `seasons` |
| The services row | `topPicks` |
| Profile order (Founder / Product / Enterprise / Developer) | `viewerProfiles` |
| Team members | `team` |
| Client quotes | `testimonials` |
| Engagement models | `engagements` |
| Contact form behaviour (endpoint, subjects) | `contactConfig` |
| Opening studio card text | `profile.originalLabel` |

**Contact form:** validates on the client and shows a success message. Add a real `endpoint` in `contactConfig` to deliver submissions.

**Logo:** replace `public/logo.svg`. It is used in the navbar and footer (`SeriesMark`), the opening title card, the About ("Who We Are") card, and as the browser favicon (`index.html`).

**Photo:** the opening sequence ships with placeholder portraits generated from the source photos. To use the real photos, add `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout with the same framing) to the project root, then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

**Project art:** each case study shows its own screenshot from `public/assets/projects/<id>.webp` (e.g. `aether-studio.webp`). To swap the images, drop a screenshot named after the project id (e.g. `aether-studio.png`) into `screenshots/` and run:

```bash
npm run images:projects
```

This writes optimized WebP key art to `public/assets/projects/`. Remove a project's `image` in `portfolio.ts` to fall back to its generated motif art.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth (studio, work, team, contact)
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← black → studio card → CODEFORGE → SOFTWARE STUDIO → portrait → ▶ PLAY
    ProfileSelector        ← "Who's watching?" (changes section order only)
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: full-bleed video, shimmer title, parallax copy, scroll blackout
    PlayIntro              ← ▶ Play Intro: full-screen title card, fades back to the site
    ContinueWatching       ← cards with real "watched" progress bars
    About                  ← The Studio
    Seasons / EpisodeCard  ← How We Work, as phases and deliverables
    Originals / ProjectCard← pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen case-study overlay with a shared-element transition
    TopPicks               ← services row
    Skills                 ← stack categories; each card shows where the tech is used
    Team                   ← the crew
    Testimonials           ← client words (auto-scrolling slider)
    Engagements            ← how we engage (pricing-style cards)
    Contact                ← start-a-project form + direct details
    FinalCTA               ← TO BE CONTINUED… + contact links
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, watch progress
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
scripts/build-project-images.mjs ← case-study key-art pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.
**Theme:** Spotify-inspired - `#121212` surfaces, `#1ed760` green, Figtree type, pill/circle geometry.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc.
- Portraits are responsive WebP files (~25–110 KB). Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Esc closes it (it also auto-closes after a few seconds).
- **Project overlay:** Esc closes.
