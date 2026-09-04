# innatus

A personal blog — dark purple (`#160e20`) and cream (`#f2eee5`), with a cinematic
**WebM** intro on the homepage. The intro plays on click; once it finishes the
page switches to a fixed still **avif** backdrop
(`intro-desktop-response.avif` / `intro-mobile-response.avif`) that the content
scrolls over — mirroring the original site's discover-scene behaviour.

Built with **Astro** (static output) + Markdown content collections.

## Requirements

- Node 18+ (Node 20 recommended)

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the built site
```

## Adding an article

Create a Markdown file under `src/content/posts/`, e.g. `my-note.md`:

```md
---
title: "My first note"
description: "A short summary shown on the list page."
pubDate: 2026-09-02
tags: ["meta"]
---

Article body in Markdown here.
```

It automatically appears on the homepage list and at `/posts/my-note/`.

## Project structure

```
src/
  consts.ts          # site title/description, posts per page
  content/
    config.ts        # content-collection schema
    posts/           # your Markdown articles
  components/
    Hero.astro       # WebM intro (play on click) -> fixed avif backdrop on end
    PostList.astro   # paginated article list
  layouts/
    Base.astro       # base HTML shell (SEO meta + RSS link)
  lib/
    format.ts        # shared date formatting
  pages/
    [...page].astro     # homepage: hero + article list + about (paginated)
    404.astro           # not-found page
    posts/[slug].astro  # article detail page
    robots.txt.ts       # robots.txt
    rss.xml.ts          # RSS 2.0 feed
    sitemap.xml.ts      # sitemap
  styles/
    global.css       # theme tokens + typography
public/
  assets/videos/     # intro-desktop.webm, intro-mobile.webm
  assets/images/     # intro-desktop-response.avif, intro-mobile-response.avif
```

## Deploy: Tencent EdgeOne (via GitHub)

1. Push this repo to `github.com/rzri/afterw` (requires an ICP-filed domain for
   mainland EdgeOne nodes; CDN edge is fine otherwise).
2. In EdgeOne, create a static site build from GitHub:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
3. EdgeOne builds on every push to the default branch.

---

© innatus · MADE BY rzri · haenlau.me@gmail.com
