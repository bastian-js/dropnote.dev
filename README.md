<div align="center">
  <img src="public/images/icon.png" width="96" alt="DropNote" />

  <h1>dropnote.dev</h1>

  <p><strong>The official website for DropNote — the macOS menu bar notes app.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-MIT-6b7280?style=flat-square" alt="License" />
  </p>

  <p>
    <a href="https://dropnote.dev"><strong>dropnote.dev</strong></a> &nbsp;·&nbsp;
    <a href="https://github.com/bastian-js/dropnote"><strong>App Repo</strong></a> &nbsp;·&nbsp;
    <a href="https://github.com/bastian-js/dropnote/releases"><strong>Download</strong></a>
  </p>

</div>

---

## About

This repository contains the source code for **[dropnote.dev](https://dropnote.dev)** — the product landing page for [DropNote](https://github.com/bastian-js/dropnote), a lightweight macOS menu bar app for quick notes and todos.

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Bundler | Vite 7 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Icons | Lucide React |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx       # Fixed top navigation
│   ├── Hero.tsx         # Landing hero with app screenshot
│   ├── Features.tsx     # Bento grid feature overview
│   ├── Carousel.tsx     # Auto-playing screenshot carousel
│   ├── About.tsx        # About section with stats
│   └── Footer.tsx       # Site footer
├── pages/
│   ├── Home.tsx         # Main landing page
│   ├── Privacy.tsx      # Privacy policy
│   └── 404.tsx          # Not found page
└── index.css            # Global styles & animations
```

---

## License

**MIT License** — applies to this website only.

The DropNote macOS app is [licensed separately](https://github.com/bastian-js/dropnote/blob/main/LICENSE) under a custom non-commercial license.

---

<div align="center">
  <sub>
    Made with ♥ by <a href="https://github.com/bastian-js">bastian-js</a>
  </sub>
</div>
