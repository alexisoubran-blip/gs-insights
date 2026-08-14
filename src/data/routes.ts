export const caseSlugs = [
  "tajin-oportunidad-internacional",
  "fedex-brand-tracking-regional",
  "takis-cultura-de-consumo",
  "sharkninja-activacion-de-alcance",
  "bitso-optimizacion-de-conversion",
] as const;

export const spanishRoutes = [
  { path: "/", lastModified: "2026-08-12" },
  { path: "/servicios/segmentacion-de-mercado", lastModified: "2026-08-14" },
  { path: "/servicios/brand-tracking", lastModified: "2026-08-14" },
  { path: "/servicios/test-de-concepto", lastModified: "2026-08-14" },
  { path: "/servicios/estudio-de-mercado-mexico", lastModified: "2026-08-14" },
  {
    path: "/servicios/pricing-y-sensibilidad-al-precio",
    lastModified: "2026-08-14",
  },
  { path: "/metodologia", lastModified: "2026-08-14" },
  { path: "/casos", lastModified: "2026-08-14" },
  ...caseSlugs.map((slug) => ({
    path: `/casos/${slug}`,
    lastModified: "2026-08-14",
  })),
  { path: "/nosotros", lastModified: "2026-08-14" },
  { path: "/contacto", lastModified: "2026-08-14" },
  { path: "/preguntas-frecuentes", lastModified: "2026-08-14" },
  { path: "/recursos", lastModified: "2026-08-14" },
] as const;
