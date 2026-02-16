# ShipFront Academy (MVP)

Landing page MVP built with Next.js + Tailwind, deployed to GitHub Pages.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

GitHub Actions builds and deploys to GitHub Pages on every push to `main`.

- Static export enabled via `next.config.ts` (`output: "export"`).
- `basePath` and `assetPrefix` are set when `GITHUB_PAGES=true`.

