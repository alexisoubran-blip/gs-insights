import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StructuredData } from "@/components/seo/structured-data";
import { englishCases, englishFaqs, englishMethodology, englishServices, englishStaticPaths } from "@/data/english-content";
import { languageAlternates } from "@/data/locale-routes";
import { siteConfig } from "@/lib/site";
import { generateMetadata as buildMetadata } from "@/utils/seo/generate-page-metadata";
import { getCaseStructuredData, getFaqStructuredData, getPeopleStructuredData, getServiceStructuredData } from "@/utils/seo/structured-data";
import { EnglishPageView } from "@/views/english-page";

type Props = { params: Promise<{ slug?: string[] }> };
const resolvePath = (slug?: string[]) => slug?.length ? `/en/${slug.join("/")}` : "/en/";

function getMeta(path: string) {
  const service = englishServices.find((item) => item.path === path);
  if (service) return { title: service.title, description: service.description };
  const caseStudy = englishCases.find((item) => item.path === path);
  if (caseStudy) return { title: caseStudy.title, description: caseStudy.summary };
  if (path === "/en/") return { title: "Market research agency in Mexico and LATAM", description: "Senior-led market research for brands operating in Mexico and Latin America." };
  if (path === "/en/methodology") return { title: englishMethodology.title, description: englishMethodology.description };
  const staticMeta: Record<string, { title: string; description: string }> = {
    "/en/case-studies": { title: "Market research case studies", description: "Selected market, brand and growth work by the founding team." },
    "/en/about": { title: "Senior market researchers", description: "The founding team behind GS Insights in Mexico City." },
    "/en/contact": { title: "Contact", description: "Contact GS Insights about a market research project in Mexico or Latin America." },
    "/en/frequently-asked-questions": { title: "Frequently asked questions", description: "Answers about market research scope, methods, timing and deliverables." },
    "/en/resources": { title: "Market research resources", description: "Guides for commissioning research in Mexico and Latin America." },
  };
  return staticMeta[path] ?? null;
}

export function generateStaticParams() {
  return englishStaticPaths.map((path) => ({ slug: path === "/en/" ? undefined : path.slice(4).split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = resolvePath((await params).slug);
  const meta = getMeta(path);
  if (!meta) return {};
  return buildMetadata({ title: `${meta.title} | ${siteConfig.name}`, description: meta.description, url: path, languages: languageAlternates(path) });
}

export default async function EnglishPage({ params }: Props) {
  const path = resolvePath((await params).slug);
  if (!englishStaticPaths.includes(path)) notFound();
  const service = englishServices.find((item) => item.path === path);
  const caseStudy = englishCases.find((item) => item.path === path);
  const data = service ? getServiceStructuredData(service) : caseStudy ? getCaseStructuredData(caseStudy) : path === "/en/about" ? getPeopleStructuredData() : path === "/en/frequently-asked-questions" ? getFaqStructuredData(englishFaqs) : null;
  return <>{data && <StructuredData data={data} />}<EnglishPageView path={path} /></>;
}
