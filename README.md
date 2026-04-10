# Workshop Template

A modern, responsive workshop documentation website built with [Eleventy (11ty)](https://www.11ty.dev/).

Inspired by the design of hands-on workshop sites with:
- 📖 Sidebar navigation with ordered chapters
- 📑 "On this page" table of contents
- 🔍 Client-side search (Ctrl+K)
- 🌗 Light/dark theme toggle
- 📋 Code block copy buttons
- ⬅️➡️ Previous/Next page navigation
- 📱 Fully responsive design
- ♿ Accessible markup (skip links, ARIA labels, keyboard nav)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:8080` by default.

## Project Structure

```
├── eleventy.config.js          # Eleventy configuration
├── package.json
├── src/
│   ├── _data/
│   │   └── site.json           # Global site metadata (title, emoji, etc.)
│   ├── _includes/
│   │   └── base.njk            # Main layout template
│   ├── css/
│   │   ├── styles.css          # Main stylesheet (light/dark themes)
│   │   └── prism-one-dark.css  # Syntax highlighting theme
│   ├── js/
│   │   ├── main.js             # Theme toggle, mobile menu, TOC, copy buttons
│   │   └── search.js           # Client-side search
│   ├── images/
│   │   └── favicon.svg
│   ├── search-index.njk        # Auto-generated search index
│   ├── index.md                # Home / Get Started page
│   ├── about.md                # About the workshop
│   ├── dev-environment.md      # Dev environment setup
│   ├── 1_setup.md              # Chapter 1
│   ├── 2_create-component.md   # Chapter 2
│   ├── 3_instructions.md       # Chapter 3
│   ├── 4_add-knowledge.md      # Chapter 4
│   ├── 5_add-tool.md           # Chapter 5
│   ├── 6_integrations.md       # Chapter 6
│   ├── get-started.md          # Account setup guide
│   ├── license.md
│   └── contact-feedback.md
└── _site/                      # Built output (generated)
```

## Customizing

### Site Metadata

Edit `src/_data/site.json` to change:
- `title` — Site name shown in the header
- `emoji` — Emoji shown before the title
- `description` — Meta description
- `author` — Your name
- `github` — Link to your workshop repo

### Adding Pages

1. Create a new `.md` file in `src/`
2. Add frontmatter:

```yaml
---
title: "Your Page Title"
layout: base.njk
tags: workshop
order: 10          # Controls sidebar ordering
sidebarTitle: "Sidebar Label"
lastUpdated: 2025-01-17
---
```

3. Write your content in Markdown
4. The page automatically appears in the sidebar and search

### Ordering Pages

The `order` field in frontmatter controls sidebar position. Use gaps (0, 1, 2, 3...) to leave room for future pages.

### Styling

All styles live in `src/css/styles.css` with CSS custom properties. Modify the `:root` and `[data-theme="dark"]` blocks to change colors, fonts, and spacing.

## Deploying

### Azure Static Web Apps

```bash
npm run build
# Deploy the _site/ directory
```

### GitHub Pages

Add a GitHub Action that runs `npm run build` and deploys the `_site/` folder.

### Netlify / Vercel

Set build command to `npm run build` and publish directory to `_site`.

## License

MIT
