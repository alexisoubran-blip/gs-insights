import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  methodologyPage,
  spanishFaqs,
  spanishCases,
  spanishStaticPaths,
  spanishServices,
} from "@/data/site-content";
import { StructuredData } from "@/components/seo/structured-data";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { ContentPageView } from "@/views/content-page";
import { siteConfig } from "@/lib/site";
import { languageAlternates } from "@/data/locale-routes";
import { spanishResources } from "@/data/resource-content";
import {
  getCaseStructuredData,
  getFaqStructuredData,
  getPeopleStructuredData,
  getResourceStructuredData,
  getServiceStructuredData,
} from "@/utils/seo/structured-data";

type PageProps = { params: Promise<{ slug: string[] }> };

const resolvePath = (slug: string[]) => `/${slug.join("/")}`;

function getMeta(path: string) {
  const service = spanishServices.find((item) => item.path === path);
  if (service) return { title: service.title, description: service.description };
  const caseStudy = spanishCases.find((item) => item.path === path);
  if (caseStudy) return { title: caseStudy.title, description: caseStudy.summary };
  const resource = spanishResources.find((item) => item.path === path);
  if (resource) return { title: resource.title, description: resource.description };
  if (path === "/metodologia") return { title: methodologyPage.title, description: methodologyPage.description };
  if (path === "/casos") return { title: "Casos de investigación de mercados", description: "Experiencia del equipo en investigación, estrategia, medición y activación para marcas en México y Latinoamérica." };
  if (path === "/nosotros") return { title: "Equipo senior de GS Insights", description: "Conoce al equipo fundador de la consultora de investigación de mercados GS Insights." };
  if (path === "/contacto") return { title: "Contacto", description: "Contacta a GS Insights en Ciudad de México para revisar un proyecto de investigación de mercados." };
  if (path === "/preguntas-frecuentes") return { title: "Preguntas frecuentes", description: "Respuestas sobre estudios de mercado, métodos, tiempos, cobertura y entregables." };
  if (path === "/recursos") return { title: "Recursos de investigación de mercados", description: "Guías y referencias sobre investigación de mercados en México y Latinoamérica." };
  return null;
}

export function generateStaticParams() {
  return [...spanishStaticPaths, ...spanishResources.map((item) => item.path)].map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const path = resolvePath((await params).slug);
  const meta = getMeta(path);
  if (!meta) return {};
  return buildMetadata({ title: `${meta.title} | ${siteConfig.name}`, description: meta.description, url: path, languages: languageAlternates(path) });
}

export default async function ContentPage({ params }: PageProps) {
  const path = resolvePath((await params).slug);
  if (![...spanishStaticPaths, ...spanishResources.map((item) => item.path)].includes(path)) notFound();
  const service = spanishServices.find((item) => item.path === path);
  const caseStudy = spanishCases.find((item) => item.path === path);
  const resource = spanishResources.find((item) => item.path === path);
  const structuredData = service
    ? getServiceStructuredData(service)
    : caseStudy
      ? getCaseStructuredData(caseStudy)
      : path === "/nosotros"
        ? getPeopleStructuredData()
        : path === "/preguntas-frecuentes"
          ? getFaqStructuredData(spanishFaqs)
          : resource
            ? getResourceStructuredData(resource)
            : null;

  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      <ContentPageView path={path} />
    </>
  );
}
