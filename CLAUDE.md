# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm run lint      # ESLint
npx tsc --noEmit  # type-check without building
```

## Architecture

**Framework**: Next.js 16 (App Router), React 19, TypeScript 5, SCSS Modules  
**Source root**: `src/` — path alias `@/*` maps to `src/*`

### Routing

File-system routing under `src/app/`. Four pages: `/` `/services` `/about` `/contact`. All pages are Server Components (no `"use client"`) except where noted. The layout at `src/app/layout.tsx` wraps every page with `<Navbar>` and `<Footer>`.

### Styling system

No Tailwind — all styling is SCSS Modules.

- **Design tokens**: `src/styles/_variables.scss` — single source of truth for all colors (`$color-navy`, `$color-teal`, etc.), font sizes (`$fs-xs` → `$fs-5xl`), spacing, radii, shadows, transitions, breakpoints, and responsive mixins (`@include sm/md/lg/xl`).
- **Global styles**: `src/app/globals.scss` — resets, `html`/`body`/`main` base rules, and all shared `@keyframes` (`fadeInUp`, `fadeIn`, `slideDown`, `scaleIn`, etc.) that component modules reference by name.
- **Component styles**: each component has a co-located `style.module.scss`. Page-level styles live in `page.module.scss` next to the route file.
- Every SCSS file that uses variables starts with `@use '../../styles/variables' as *;` (adjust `../` depth to match file location).

To retheme: edit `src/styles/_variables.scss` only.

### Content / i18n

All copy lives in `src/i18n/messages/en.json`. Components import it directly (`import en from "@/i18n/messages/en.json"`) for Server Components, or use `useTranslations` from `next-intl` for Client Components. `next-intl` is configured at `src/i18n/request.ts` (single locale: `en`).

### Constants

- `src/constants/routes.ts` — `ROUTES` object and `NAV_LINKS` array (used by Navbar and Footer).
- `src/constants/services.ts` — `SERVICE_IDS`, `SERVICE_CATEGORIES`, `SERVICE_SELECT_OPTIONS`, `HERO_SLIDES`.
- `src/constants/credentials.ts` — `CREDENTIALS`, `CREDENTIAL_BADGES`.

### Shared components

Components in `src/components/` are reused across multiple pages:

- `Navbar` / `Footer` — layout chrome, always rendered via `layout.tsx`.
- `HeroBanner` — hero section on the home page with framer-motion entrance animations; `"use client"`.
- `HeroSlider` — animated sliding hero (alternative hero; `"use client"`).
- `StatsBar` — animated counters + logo strip; `"use client"` (uses `useInView`).
- `ServiceCard` — card used in the home and services grids.
- `FadeIn` — `motion.div` wrapper for scroll-triggered fade-in; accepts `className` and `direction` props; `"use client"`.
- `StaggerGrid` — `motion.div` grid wrapper that staggers children on scroll; accepts `className`; `"use client"`.
- `ContactForm` — controlled form with Formspree submission; `"use client"`.

### Animation pattern

Framer Motion is used throughout. `FadeIn` and `StaggerGrid` are the standard scroll-trigger wrappers — pass the grid/layout class via `className` from the parent's SCSS module. Direct `motion.*` elements in components use `initial`/`animate` with `useInView` for imperative control.

## Key conventions

- Prefer React Server Components; add `"use client"` only for interactivity, browser APIs, or hooks.
- All copy goes in `en.json`, not hardcoded in components.
- Add new route constants to `ROUTES` and `NAV_LINKS` in `src/constants/routes.ts`.
- Static-export compatible — no server-only APIs.
- Use `@/` alias for all internal imports.
- **No section-label comments** — `{/* Services */}`, `{/* Desktop layout */}`, `{/* Left */}` and similar comments that restate what the class name or element already communicates are forbidden. Only add a comment when the *why* is non-obvious (a workaround, a subtle invariant, a browser quirk).

## Project overview

Apria is a static marketing site for a professional accounting firm. The owner holds ACCA and MAAT qualifications and is a member of AAT and ICAEW. The contact form submits to Formspree (endpoint placeholder in `ContactForm/index.tsx`).
