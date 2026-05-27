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

- **Framework**: Next.js 16 (App Router) with React 19, TypeScript 5, Tailwind CSS 4
- **Source root**: `src/` - all app code lives here; path alias `@/*` maps to `src/*`
- **Routing**: `src/app/` uses file-system routing. Layouts in `layout.tsx`, pages in `page.tsx`, loading states in `loading.tsx`, error boundaries in `error.tsx`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles in `src/app/globals.css`

## Agent skills

This project uses the `vercel-labs/agent-skills` package. The following skills are active and must be followed:

- **vercel-react-best-practices** - React/Next.js patterns and conventions
- **vercel-composition-patterns** - Component composition and structure
- **web-design-guidelines** - UI/UX design standards
- **vercel-optimize** - Performance optimisation
- **vercel-react-view-transitions** - View transition API patterns
- **deploy-to-vercel** - Deployment workflow
- **vercel-cli-with-tokens** - Vercel CLI usage

Skills are located in `.agents/skills/` (gitignored).

### MCP servers

- **next-devtools** - MCP server for Next.js development tooling (route inspection, build analysis, etc.). Planned for use in this project; not yet configured. See [next-devtools docs](https://next-devtools.vercel.app) when ready to set up.

## Project overview

Apria is a static portfolio/introduction website for a professional accounting firm. The site introduces services, builds trust with potential clients, and provides a contact channel. The owner holds ACCA and MAAT qualifications and is a member of AAT and ICAEW with 5 years of experience across financial reporting, tax planning, and business advisory.

**Site type**: Static, SEO-optimised, fully responsive  
**Tone**: Professional, clean, finance/accounting industry  
**Pages**: Home, Services, About, Contact  
**Key feature**: Contact form for potential client enquiries

## Key conventions

- Prefer React Server Components by default; add `"use client"` only when needed (interactivity, browser APIs, hooks)
- Data fetching belongs in Server Components using `async/await` - avoid `useEffect` for data loading
- Co-locate components with the route that owns them; extract to `src/components/` only when shared across routes
- Use `@/` alias for all internal imports, never relative paths that traverse `..`
- Static export compatible - avoid server-only APIs unless they work with `output: "export"`
