# innatus

A personal blog — dark purple (`#160e20`) and cream (`#f2eee5`), with a cinematic
**WebM** intro on the homepage that plays on click and leaves its final frame as
the page backdrop.

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
  content/
    config.ts        # content-collection schema
    posts/           # your Markdown articles
  components/
    Hero.astro       # WebM intro + play-on-click / last-frame backdrop
  layouts/
    Base.astro       # base HTML shell
  pages/
    index.astro      # homepage: hero + article list + about + footer
    posts/[slug].astro  # article detail page
  styles/
    global.css       # theme tokens + typography
public/
  assets/videos/     # intro-desktop.webm, intro-mobile.webm
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
