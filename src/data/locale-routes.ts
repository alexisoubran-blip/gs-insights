export const localeRoutePairs = [
  ["/", "/en/"],
  ["/servicios/segmentacion-de-mercado", "/en/services/market-segmentation"],
  ["/servicios/brand-tracking", "/en/services/brand-tracking"],
  ["/servicios/test-de-concepto", "/en/services/concept-testing"],
  ["/servicios/estudio-de-mercado-mexico", "/en/services/market-research-mexico"],
  ["/servicios/pricing-y-sensibilidad-al-precio", "/en/services/pricing-and-price-sensitivity"],
  ["/metodologia", "/en/methodology"],
  ["/casos", "/en/case-studies"],
  ["/casos/tajin-oportunidad-internacional", "/en/case-studies/tajin-international-opportunity"],
  ["/casos/fedex-brand-tracking-regional", "/en/case-studies/fedex-regional-brand-tracking"],
  ["/casos/takis-cultura-de-consumo", "/en/case-studies/takis-consumption-culture"],
  ["/casos/sharkninja-activacion-de-alcance", "/en/case-studies/sharkninja-reach-activation"],
  ["/casos/bitso-optimizacion-de-conversion", "/en/case-studies/bitso-conversion-optimization"],
  ["/nosotros", "/en/about"],
  ["/contacto", "/en/contact"],
  ["/preguntas-frecuentes", "/en/frequently-asked-questions"],
  ["/recursos", "/en/resources"],
  ["/recursos/cuanto-cuesta-un-estudio-de-mercado-en-mexico", "/en/resources/how-much-does-market-research-cost-in-mexico"],
  ["/recursos/tamano-de-muestra-para-segmentacion-latam", "/en/resources/sample-size-for-segmentation-latam"],
  ["/recursos/costos-de-panel-online-mexico-brasil-colombia", "/en/resources/online-panel-costs-mexico-brazil-colombia"],
  ["/recursos/como-elegir-una-agencia-de-investigacion-de-mercados", "/en/resources/how-to-choose-a-market-research-agency"],
] as const;

export function languageAlternates(path: string) {
  const pair = localeRoutePairs.find(([spanish, english]) => spanish === path || english === path);
  if (!pair) return undefined;
  return { "es-MX": pair[0], en: pair[1], "x-default": pair[0] };
}

export const englishPaths = localeRoutePairs.map(([, english]) => english);
