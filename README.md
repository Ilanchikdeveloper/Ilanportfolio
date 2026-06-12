# Ilan Biniashvili — Portfolio

Awwwards-level portfolio built with Next.js, GSAP, and Lenis smooth scroll.

## Stack

- **Next.js 15** — SSR, image optimization, performance
- **GSAP + ScrollTrigger** — scroll-driven reveals and micro-interactions
- **Lenis** — buttery smooth scroll (replaces Webflow's native scroll)
- **Tailwind CSS 4** — utility-first styling with 12-column grid

## Getting started

1. Install [Node.js](https://nodejs.org/) (LTS v20+)
2. Open terminal in this folder
3. Run:

```bash
npm install
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Why this is smoother than Webflow

| Webflow | This project |
|---------|-------------|
| Native scroll + heavy JS | Lenis smooth scroll at 60fps |
| Generic interactions | GSAP with GPU-accelerated transforms |
| Large bundle | Code-split, tree-shaken Next.js |
| Limited control | Full control over easing and timing |

## Next steps

- Add real project images to `/public/projects/`
- Create individual project pages (`/work/suberlev`, etc.)
- Connect real social links in `src/lib/data.ts`
