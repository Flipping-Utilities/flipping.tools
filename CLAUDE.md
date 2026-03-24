# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OSRS Flipping Tools - A website for comparing Grand Exchange flipping tools for Old School RuneScape. Lists projects with their components (Discord bots, websites, RuneLite plugins, etc.) and detailed descriptions.

## Commands

| Command | Action |
| :------ | :----- |
| `bun install` | Install dependencies |
| `bun run dev` | Start local dev server at `localhost:4321` |
| `bun run build` | Build production site to `./dist/` |
| `bun run preview` | Preview build locally |

## Architecture

- **Framework**: Astro 6.x with MDX integration, strict TypeScript
- **Styling**: Plain CSS in `<style>` blocks (CSS variables for theming)
- **Deployment**: GitHub Pages (via `.github/workflows/deploy.yml`)
- **Site URL**: https://flipping.tools
- **Node Version**: Requires >= 22.12.0
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/           # Reusable Astro components
│   ├── ComponentIcon.astro   # Icon badges for platform links
│   ├── ProjectHeader.astro   # Header for detail pages
│   └── TagBadge.astro        # Colored tag chips
├── content/              # MDX content collection
│   └── projects/             # One .mdx file per project
├── data/
│   └── projects.json         # Project metadata (name, slug, links, tags)
├── layouts/
│   └── BaseLayout.astro      # Common page layout
└── pages/
    ├── index.astro           # Project listing with table + client-side filters
    └── projects/
        └── [slug].astro      # Dynamic project detail pages
```

## Adding a New Project

1. Add entry to `src/data/projects.json` with required fields:
   - `name`, `slug`, `tagline`, `author`
   - `components`: object with optional keys (`website`, `discordBot`, `discordServer`, `runelite`, `github`, `mobile`)
   - `tags`: array of string tags

2. (Optional) Create `src/content/projects/{slug}.mdx` with detailed description

## Content Collections

Uses Astro 6 content collections with glob loader. Config at `src/content.config.ts`. Collection entries are `.mdx` files in `src/content/projects/`.
