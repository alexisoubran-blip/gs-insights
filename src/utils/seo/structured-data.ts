/**
 * @fileoverview JSON-LD structured data helpers.
 *
 * Structured data lets search engines understand the site as entities
 * (Organization, WebSite) rather than just text — improving rich results.
 * Render the output inside a `<script type="application/ld+json">` tag.
 */

import { siteConfig } from "@/lib/site";
import {
  contactDetails,
  founders,
  type CaseStudy,
  type FaqItem,
  type ServicePage,
} from "@/data/site-content";

const organizationId = `${siteConfig.url}/#organization`;

export const knowledgeAreas = [
  "Investigación de mercados",
  "Consumer insights",
  "conjoint analysis",
  "MaxDiff",
  "U&A",
  "test de concepto",
  "Van Westendorp",
  "brand health tracking",
  "segmentación por clusters",
  "CAWI",
  "CATI",
  "panel online",
  "etnografía",
  "sesiones de profundidad",
  "tamaño muestral",
  "margen de error",
  "incidencia",
] as const;

export function getFaqStructuredData(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function getServiceStructuredData(page: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.url}${page.path}/#service`,
        name: page.title,
        description: page.description,
        url: `${siteConfig.url}${page.path}`,
        serviceType: page.navTitle,
        areaServed: ["México", "Latinoamérica"],
        provider: { "@id": organizationId },
      },
      { ...getFaqStructuredData(page.faqs), "@context": undefined },
    ],
  };
}

export function getPeopleStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": founders.map((person, index) => ({
      "@type": "Person",
      "@id": `${siteConfig.url}/nosotros/#socio-${index + 1}`,
      name: person.name,
      jobTitle: person.role,
      description: `${person.years}. Formación: ${person.education}. Membresías: ${person.memberships}.`,
      worksFor: { "@id": organizationId },
      sameAs: [person.linkedin],
    })),
  };
}

export function getCaseStructuredData(page: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.summary,
    url: `${siteConfig.url}${page.path}`,
    datePublished: "TODO_DATE_PUBLISHED",
    dateModified: "2026-08-14",
    author: { "@type": "Person", name: "TODO_AUTHOR_REAL" },
    publisher: { "@id": organizationId },
    about: page.brand,
  };
}

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
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: "GS Insights",
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "TODO_DIRECCION_POSTAL",
          addressLocality: "Ciudad de México",
          postalCode: "TODO_CODIGO_POSTAL",
          addressCountry: "MX",
        },
        email: contactDetails.email,
        telephone: contactDetails.telephone,
        areaServed: [
          "México",
          "Argentina",
          "Brasil",
          "Chile",
          "Colombia",
          "Costa Rica",
          "Ecuador",
          "Guatemala",
          "Panamá",
          "Perú",
          "Uruguay",
        ],
        knowsAbout: knowledgeAreas,
        sameAs: [
          "TODO_LINKEDIN_EMPRESA",
          "TODO_CRUNCHBASE_EMPRESA",
          "TODO_PERFIL_DIRECTORIO_EMPRESA",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        alternateName: "GS Insights",
        url: siteConfig.url,
        description:
          "Consultora senior de investigación de mercados en México con cobertura en Latinoamérica.",
        areaServed: ["México", "Latinoamérica"],
        provider: { "@id": organizationId },
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
        name: siteConfig.name,
        alternateName: "GS Insights",
        description: siteConfig.description,
        url: siteConfig.url,
        publisher: { "@id": organizationId },
      },
    ],
  };
}
