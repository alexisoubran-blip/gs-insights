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
  { path: "/recursos/cuanto-cuesta-un-estudio-de-mercado-en-mexico", lastModified: "2026-08-14" },
  { path: "/recursos/tamano-de-muestra-para-segmentacion-latam", lastModified: "2026-08-14" },
  { path: "/recursos/costos-de-panel-online-mexico-brasil-colombia", lastModified: "2026-08-14" },
  { path: "/recursos/como-elegir-una-agencia-de-investigacion-de-mercados", lastModified: "2026-08-14" },
] as const;

export const englishRoutes = [
  "/en/",
  "/en/services/market-segmentation",
  "/en/services/brand-tracking",
  "/en/services/concept-testing",
  "/en/services/market-research-mexico",
  "/en/services/pricing-and-price-sensitivity",
  "/en/methodology",
  "/en/case-studies",
  "/en/case-studies/tajin-international-opportunity",
  "/en/case-studies/fedex-regional-brand-tracking",
  "/en/case-studies/takis-consumption-culture",
  "/en/case-studies/sharkninja-reach-activation",
  "/en/case-studies/bitso-conversion-optimization",
  "/en/about",
  "/en/contact",
  "/en/frequently-asked-questions",
  "/en/resources",
  "/en/resources/how-much-does-market-research-cost-in-mexico",
  "/en/resources/sample-size-for-segmentation-latam",
  "/en/resources/online-panel-costs-mexico-brazil-colombia",
  "/en/resources/how-to-choose-a-market-research-agency",
].map((path) => ({ path, lastModified: "2026-08-14" })) as ReadonlyArray<{
  path: string;
  lastModified: string;
}>;
