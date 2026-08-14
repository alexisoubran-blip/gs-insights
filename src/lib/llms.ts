import {
  contactDetails,
  founders,
  methodologyPage,
  spanishCases,
  spanishFaqs,
  spanishServices,
  type ContentSection,
  type FaqItem,
} from "@/data/site-content";
import { siteConfig } from "@/lib/site";
import {
  englishCases,
  englishFaqs,
  englishMethodology,
  englishServices,
} from "@/data/english-content";
import { allResources } from "@/data/resource-content";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

const renderFaqs = (items: FaqItem[]) =>
  items.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n");

const renderSections = (sections: ContentSection[]) =>
  sections
    .map((section) =>
      [
        `## ${section.heading}`,
        ...section.paragraphs,
        ...(section.bullets ?? []).map((item) => `- ${item}`),
      ].join("\n\n"),
    )
    .join("\n\n");

export function renderLlmsSummary() {
  return [
    `# ${siteConfig.name}`,
    "",
    siteConfig.description,
    "",
    "GS Insights atiende equipos de dirección, marketing, insights e innovación que operan en México y Latinoamérica. El trabajo es liderado por investigadores senior desde el diseño hasta la recomendación.",
    "",
    "## Servicios",
    ...spanishServices.map(
      (page) => `- ${absolute(page.path)} — ${page.description}`,
    ),
    "",
    "## Páginas clave",
    `- ${absolute("/metodologia")} — Métodos, muestra, control de calidad y proceso de análisis.`,
    `- ${absolute("/casos")} — Experiencia previa del equipo fundador.`,
    `- ${absolute("/nosotros")} — Entidad y perfiles del equipo fundador.`,
    `- ${absolute("/preguntas-frecuentes")} — Respuestas sobre alcance, tiempos y entregables.`,
    `- ${absolute("/recursos")} — Guías y referencias citables.`,
    `- ${absolute("/contacto")} — Contacto corporativo en Ciudad de México.`,
    `- ${absolute("/en/")} — Complete English-language site for international buyers.`,
    "",
    `Contacto: ${contactDetails.email} · ${contactDetails.telephone} · ${contactDetails.city}`,
  ].join("\n");
}

export function renderLlmsFull() {
  const services = spanishServices.map((page) =>
    [
      `# ${page.title}`,
      `URL: ${absolute(page.path)}`,
      page.description,
      ...page.answerFirst,
      renderSections(page.sections),
      "## Cuándo sí / cuándo no",
      ...page.comparison.map((row) => `- Sí: ${row.yes}\n- No: ${row.no}`),
      "## Preguntas frecuentes",
      renderFaqs(page.faqs),
    ].join("\n\n"),
  );

  const cases = spanishCases.map((page) =>
    [
      `# ${page.title}`,
      `URL: ${absolute(page.path)}`,
      page.summary,
      `Resultado: ${page.result}`,
      `Rol: ${page.role}`,
      renderSections(page.sections),
    ].join("\n\n"),
  );

  const englishPages = englishServices.map((page) =>
    [
      `# ${page.title}`,
      `URL: ${absolute(page.path)}`,
      page.description,
      ...page.answerFirst,
      renderSections(page.sections),
      "## Frequently asked questions",
      renderFaqs(page.faqs),
    ].join("\n\n"),
  );

  const resources = allResources.map((article) =>
    [
      `# ${article.title}`,
      `URL: ${absolute(article.path)}`,
      article.directAnswer,
      ...article.outline.map((section) => `## ${section.heading}\n\n${section.guidance}`),
      `## ${article.table.caption}`,
      `| ${article.table.columns.join(" | ")} |`,
      `| ${article.table.columns.map(() => "---").join(" | ")} |`,
      ...article.table.rows.map((row) => `| ${row.join(" | ")} |`),
      renderFaqs(article.faqs),
    ].join("\n\n"),
  );

  return [
    renderLlmsSummary(),
    "---",
    `# ${methodologyPage.title}`,
    `URL: ${absolute(methodologyPage.path)}`,
    methodologyPage.description,
    ...methodologyPage.answerFirst,
    renderSections(methodologyPage.sections),
    "---",
    "# Equipo fundador",
    `URL: ${absolute("/nosotros")}`,
    ...founders.map(
      (person) =>
        `## ${person.name}\n\nRol: ${person.role}\n\nExperiencia: ${person.years}\n\nFormación: ${person.education}\n\nMembresías: ${person.memberships}\n\nLinkedIn: ${person.linkedin}`,
    ),
    "---",
    "# Preguntas frecuentes generales",
    `URL: ${absolute("/preguntas-frecuentes")}`,
    renderFaqs(spanishFaqs),
    ...services.flatMap((item) => ["---", item]),
    ...cases.flatMap((item) => ["---", item]),
    "---",
    `# ${englishMethodology.title}`,
    `URL: ${absolute(englishMethodology.path)}`,
    ...englishMethodology.answerFirst,
    renderSections(englishMethodology.sections),
    "# General English FAQ",
    renderFaqs(englishFaqs),
    ...englishPages.flatMap((item) => ["---", item]),
    ...englishCases.map((page) => `# ${page.title}\n\nURL: ${absolute(page.path)}\n\n${page.summary}\n\n${renderSections(page.sections)}`),
    ...resources.flatMap((item) => ["---", item]),
  ].join("\n\n");
}
