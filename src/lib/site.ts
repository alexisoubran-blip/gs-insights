/**
 * Site-wide configuration — the single source of truth for SEO.
 *
 * Consumed by the metadata generator, `robots.ts`, `sitemap.ts`, and the
 * JSON-LD structured-data helper. Update the placeholder values per project.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "GS Insights — Investigación de mercados en México y LATAM",
  description:
    "Consultora senior de investigación de mercados. Estudios de consumidor, marca, comunicación y oportunidades en México y Latinoamérica.",
  /**
   * Public origin, no trailing slash. Drives canonical URLs, OG tags, the
   * sitemap, and JSON-LD. Set `NEXT_PUBLIC_SITE_URL` in production.
   */
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "https://www.gs-insights.com",
  /** Default Open Graph / Twitter share image (path under `public/`). */
  ogImage: "/opengraph-image",
  twitterHandle: "",
  author: "GS Insights",
  /** Browser theme-color (address bar / PWA). Matches `--void` / the orb backdrop. */
  themeColor: "#050509",
} as const;
