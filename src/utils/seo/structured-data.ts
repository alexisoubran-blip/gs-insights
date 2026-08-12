/**
 * @fileoverview JSON-LD structured data helpers.
 *
 * Structured data lets search engines understand the site as entities
 * (Organization, WebSite) rather than just text — improving rich results.
 * Render the output inside a `<script type="application/ld+json">` tag.
 */

import { siteConfig } from "@/lib/site";

/**
 * Organization + WebSite schema for the site root. Emit once, in the root
 * layout. The two nodes are linked by `@id` so crawlers treat them as related.
 */
export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "GS Insights",
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        description: siteConfig.description,
        areaServed: ["México", "Latinoamérica"],
        knowsAbout: [
          "Investigación de mercados",
          "Consumer insights",
          "Investigación cuantitativa",
          "Investigación cualitativa",
          "Brand tracking",
          "Pruebas de concepto",
          "Segmentación de consumidores",
          "Entrada a mercado",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: "GS Insights",
        url: siteConfig.url,
        description:
          "Consultora senior de investigación de mercados en México con cobertura en Latinoamérica.",
        areaServed: ["México", "Latinoamérica"],
        provider: { "@id": `${siteConfig.url}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de investigación de mercados",
          itemListElement: [
            "Mercados y oportunidades",
            "Consumidor y segmentación",
            "Marca y comunicación",
            "Medición y crecimiento",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: "GS Insights",
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
}
