# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog at john-lavender.com. A Next.js 13 static blog using the App Router, with markdown files as the content source. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint via Next.js
- No test framework is configured

## Architecture

**Content pipeline:** Markdown files in `posts/` use YAML frontmatter (`section`, `title`, `date`, `subtitle`). At build time, `components/getPostMetadata.ts` reads all posts and `components/getPostContent.ts` extracts content. Posts are statically generated via `generateStaticParams()` in `app/posts/[slug]/page.tsx`.

**Sections:** Posts are grouped by their `section` frontmatter field (Experience, Education, Projects). The home page (`app/page.tsx`) organizes posts into collapsible sections using `CollapsibleSection`.

**Rendering:** Post markdown is rendered with `react-markdown` and syntax highlighting via `react-syntax-highlighter`.

**Client vs Server:** Only `CollapsibleSection` is a client component ("use client"). Everything else is server-rendered.

## Tech Stack

Next.js 13.5, React 18, TypeScript, Tailwind CSS with Typography plugin, gray-matter for frontmatter parsing, Vercel Analytics.
