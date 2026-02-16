import type { NextConfig } from "next";

// Static export for GitHub Pages
// Repo: https://github.com/imsebarz/frontend-school-landing
const repo = "frontend-school-landing";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // When serving from GitHub Pages, the site is hosted under /<repo>/
  basePath: process.env.GITHUB_PAGES === "true" ? `/${repo}` : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? `/${repo}/` : "",
};

export default nextConfig;
