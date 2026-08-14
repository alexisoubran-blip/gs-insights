import type { MetadataRoute } from "next";

import { englishRoutes, spanishRoutes } from "@/data/routes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...spanishRoutes, ...englishRoutes].map(({ path, lastModified }) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency:
      path === "/" || path.startsWith("/servicios/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/servicios/") ? 0.9 : 0.7,
  }));
}
