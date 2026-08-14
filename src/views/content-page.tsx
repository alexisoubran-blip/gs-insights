import Link from "next/link";
import { spanishResources, type ResourceArticle } from "@/data/resource-content";

import {
  contactDetails,
  founders,
  methodologyPage,
  spanishCases,
  spanishFaqs,
  spanishServices,
  type CaseStudy,
  type ContentSection,
  type FaqItem,
  type ServicePage,
} from "@/data/site-content";

const sectionClass = "border-t border-white/15 py-[3rem] max-sm:py-[2rem]";

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-surface px-[3.5rem] pt-[10rem] pb-[5rem] text-white max-lg:px-[1.5rem] max-lg:pt-[8rem] max-sm:px-[1.25rem]">
      <article className="mx-auto max-w-[72rem]">
        <header className="pb-[5rem] max-sm:pb-[3rem]">
          <p className="font-tag text-[0.75rem] tracking-[0.12em] text-signal uppercase">{eyebrow}</p>
          <h1 className="mt-[1rem] max-w-[60rem] font-general text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-light tracking-[-0.03em]">{title}</h1>
          <p className="mt-[2rem] max-w-[48rem] font-general text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] text-white/70">{description}</p>
        </header>
        {children}
      </article>
    </main>
  );
}

function AnswerFirst({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section aria-label="Respuesta breve" className={`${sectionClass} grid gap-[1.25rem]`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="max-w-[56rem] font-general text-[1.125rem] leading-[1.7] text-white/90">{paragraph}</p>
      ))}
    </section>
  );
}

function Sections({ sections }: { sections: ContentSection[] }) {
  return sections.map((section) => (
    <section key={section.heading} className={`${sectionClass} grid grid-cols-[0.75fr_1.25fr] gap-[4rem] max-lg:grid-cols-1 max-lg:gap-[1.25rem]`}>
      <h2 className="font-general text-[clamp(1.75rem,3vw,3rem)] leading-[1] font-light">{section.heading}</h2>
      <div className="grid gap-[1.25rem]">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="font-general text-[1rem] leading-[1.75] text-white/75">{paragraph}</p>
        ))}
        {section.bullets && (
          <ul className="grid gap-[0.75rem] pl-[1.25rem] text-white/75">
            {section.bullets.map((item) => <li key={item} className="list-square">{item}</li>)}
          </ul>
        )}
      </div>
    </section>
  ));
}

function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className={sectionClass}>
      <h2 className="font-general text-[clamp(2rem,4vw,4rem)] leading-none font-light">Preguntas frecuentes</h2>
      <dl className="mt-[2.5rem] divide-y divide-white/15 border-y border-white/15">
        {items.map((item) => (
          <div key={item.question} className="grid grid-cols-[0.8fr_1.2fr] gap-[3rem] py-[1.5rem] max-lg:grid-cols-1 max-lg:gap-[0.75rem]">
            <dt className="font-general text-[1.125rem] font-medium">{item.question}</dt>
            <dd className="font-general leading-[1.65] text-white/70">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ClosingCta() {
  return (
    <aside className="mt-[4rem] border border-white/20 bg-white px-[2rem] py-[2.5rem] text-black">
      <h2 className="max-w-[52rem] font-general text-[clamp(2rem,4vw,4rem)] leading-none font-light">Revisa tu reto con un investigador senior.</h2>
      <p className="mt-[1rem] max-w-[42rem] leading-[1.6] text-black/70">En 30 minutos podemos aclarar la pregunta, el alcance y qué evidencia tendría sentido producir.</p>
      <Link href="/contacto" className="mt-[1.5rem] inline-flex border border-black px-[1.25rem] py-[0.8rem] font-medium">Cuéntanos tu proyecto</Link>
    </aside>
  );
}

function ServiceView({ page }: { page: ServicePage }) {
  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} description={page.description}>
      <AnswerFirst paragraphs={page.answerFirst} />
      <Sections sections={page.sections} />
      <section className={sectionClass}>
        <h2 className="font-general text-[clamp(2rem,4vw,4rem)] leading-none font-light">Cuándo sí / cuándo no</h2>
        <div className="mt-[2rem] overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead><tr><th className="border border-white/20 bg-white/10 p-[1rem]">Cuándo sí</th><th className="border border-white/20 bg-white/10 p-[1rem]">Cuándo no</th></tr></thead>
            <tbody>{page.comparison.map((row) => <tr key={row.yes}><td className="border border-white/20 p-[1rem] text-white/75">{row.yes}</td><td className="border border-white/20 p-[1rem] text-white/75">{row.no}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
      <FaqList items={page.faqs} />
      <ClosingCta />
    </PageShell>
  );
}

function CasesIndexView() {
  return (
    <PageShell eyebrow="CASOS" title="Experiencia aplicada a retos de mercado, marca y crecimiento" description="Trayectoria del equipo en investigación, estrategia, medición y activación. Los proyectos señalados son previos a la creación de GS Insights.">
      <ul className="grid grid-cols-2 gap-[1rem] border-t border-white/15 py-[3rem] max-md:grid-cols-1">
        {spanishCases.map((item) => (
          <li key={item.path} className="border border-white/15 p-[1.5rem]">
            <p className="font-tag text-[0.75rem] tracking-[0.1em] text-signal uppercase">{item.brand}</p>
            <h2 className="mt-[1rem] text-[1.75rem] leading-[1.05] font-light">{item.title}</h2>
            <p className="mt-[1rem] text-white/65">{item.summary}</p>
            <Link href={item.path} className="mt-[1.5rem] inline-block border-b border-signal pb-[0.25rem]">Ver caso</Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

function CaseView({ page }: { page: CaseStudy }) {
  return (
    <PageShell eyebrow={`CASO · ${page.brand}`} title={page.title} description={page.summary}>
      <div className="border-y border-white/15 py-[2rem]">
        <p className="text-[clamp(1.5rem,3vw,3rem)] font-light">{page.result}</p>
        <p className="mt-[1rem] text-signal">{page.role}</p>
        <p className="mt-[0.75rem] text-white/60">Trayectoria del equipo fundador, previa a GS Insights.</p>
      </div>
      <Sections sections={page.sections} />
      <ClosingCta />
    </PageShell>
  );
}

function AboutView() {
  return (
    <PageShell eyebrow="NOSOTROS" title="Investigadores senior involucrados de principio a fin" description="GS Insights es una consultora de investigación de mercados en Ciudad de México con cobertura en Latinoamérica.">
      <AnswerFirst paragraphs={["El equipo que diseña el estudio también supervisa el campo, analiza los resultados y presenta la recomendación. La relación de trabajo es directa: no existe una capa junior entre la pregunta y la interpretación.", "Los perfiles personales deben completarse con información verificable antes de publicar credenciales, formación o membresías."]} />
      <section className={`${sectionClass} grid grid-cols-2 gap-[1rem] max-md:grid-cols-1`}>
        {founders.map((person) => (
          <article key={person.name} className="border border-white/15 p-[1.5rem]">
            <div className="aspect-[4/3] bg-white/5 p-[1rem] text-white/40" aria-label="Foto pendiente">{person.photo}</div>
            <h2 className="mt-[1.5rem] text-[2rem] font-light">{person.name}</h2>
            <p className="mt-[0.5rem] text-signal">{person.role}</p>
            <dl className="mt-[1.5rem] grid gap-[0.75rem] text-white/70">
              <div><dt className="text-white">Experiencia</dt><dd>{person.years}</dd></div>
              <div><dt className="text-white">Formación</dt><dd>{person.education}</dd></div>
              <div><dt className="text-white">Membresías</dt><dd>{person.memberships}</dd></div>
              <div><dt className="text-white">LinkedIn</dt><dd>{person.linkedin}</dd></div>
            </dl>
          </article>
        ))}
      </section>
      <ClosingCta />
    </PageShell>
  );
}

function ContactView() {
  return (
    <PageShell eyebrow="CONTACTO" title="Cuéntanos qué necesitas investigar" description="Comparte el contexto, la pregunta y el momento de tu proyecto. Revisaremos si existe un enfoque adecuado y qué información hace falta para definirlo.">
      <section className={`${sectionClass} grid grid-cols-[0.8fr_1.2fr] gap-[4rem] max-lg:grid-cols-1`}>
        <div>
          <h2 className="text-[2rem] font-light">Datos de contacto</h2>
          <address className="mt-[1.5rem] grid gap-[0.75rem] not-italic text-white/75">
            <p><span className="text-white">Email:</span> {contactDetails.email}</p>
            <p><span className="text-white">Teléfono:</span> {contactDetails.telephone}</p>
            <p><span className="text-white">Ciudad:</span> {contactDetails.city}</p>
            <p><span className="text-white">Razón social:</span> {contactDetails.legalName}</p>
          </address>
        </div>
        <div>
          <h2 className="text-[2rem] font-light">Agenda como opción secundaria</h2>
          <p className="mt-[1rem] leading-[1.6] text-white/70">Si prefieres reservar directamente, abre el calendario. El contacto y la identidad de la empresa permanecen disponibles en HTML rastreable en esta página.</p>
          <a href={contactDetails.calendly} target="_blank" rel="noreferrer" className="mt-[1.5rem] inline-flex border border-signal px-[1.25rem] py-[0.8rem] text-signal">Abrir Calendly</a>
          <iframe title="Calendario de GS Insights" src={contactDetails.calendly} className="mt-[2rem] h-[42rem] w-full border border-white/15 bg-white" loading="lazy" />
        </div>
      </section>
    </PageShell>
  );
}

function ResourcesView() {
  return (
    <PageShell eyebrow="RECURSOS" title="Guías de investigación de mercados para México y LATAM" description="Próximamente: referencias prácticas sobre costos, muestras, paneles y selección de una agencia de investigación.">
      <section className={sectionClass}>
        <p className="max-w-[48rem] text-[1.125rem] leading-[1.7] text-white/70">La estructura editorial está lista. Los artículos y sus tablas se publicarán con datos verificables, fuente, fecha y metodología; no incluimos rangos ni benchmarks sin evidencia.</p>
        <ul className="mt-[2rem] grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">{spanishResources.map((article) => <li key={article.path} className="border border-white/15 p-[1.5rem]"><h2 className="text-[1.5rem] font-light">{article.title}</h2><p className="mt-[0.75rem] text-white/65">{article.description}</p><Link href={article.path} className="mt-[1rem] inline-block border-b border-signal">Ver estructura</Link></li>)}</ul>
      </section>
    </PageShell>
  );
}

function ResourceArticleView({ article }: { article: ResourceArticle }) {
  return <PageShell eyebrow="RECURSO · BORRADOR" title={article.title} description={article.description}><AnswerFirst paragraphs={[article.directAnswer]} /><section className={sectionClass}><h2 className="text-[clamp(2rem,4vw,4rem)] font-light">Esquema editorial</h2><div className="mt-[2rem] grid gap-[1rem]">{article.outline.map((section) => <section key={section.heading} className="border border-white/15 p-[1.5rem]"><h2 className="text-[1.5rem] font-light">{section.heading}</h2><p className="mt-[0.75rem] text-signal">{section.guidance}</p></section>)}</div></section><section className={sectionClass}><h2 className="text-[clamp(2rem,4vw,4rem)] font-light">Tabla de datos</h2><div className="mt-[2rem] overflow-x-auto"><table className="w-full min-w-[48rem] border-collapse"><caption className="mb-[1rem] text-left text-white/60">{article.table.caption}</caption><thead><tr>{article.table.columns.map((column) => <th key={column} className="border border-white/20 bg-white/10 p-[0.75rem] text-left">{column}</th>)}</tr></thead><tbody>{article.table.rows.map((row, index) => <tr key={`${article.path}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`} className="border border-white/20 p-[0.75rem] text-white/70">{cell}</td>)}</tr>)}</tbody></table></div></section><FaqList items={article.faqs} /></PageShell>;
}

export function ContentPageView({ path }: { path: string }) {
  const resource = spanishResources.find((item) => item.path === path);
  if (resource) return <ResourceArticleView article={resource} />;
  const service = spanishServices.find((item) => item.path === path);
  if (service) return <ServiceView page={service} />;
  const caseStudy = spanishCases.find((item) => item.path === path);
  if (caseStudy) return <CaseView page={caseStudy} />;
  if (path === "/metodologia") return <PageShell eyebrow="METODOLOGÍA" title={methodologyPage.title} description={methodologyPage.description}><AnswerFirst paragraphs={methodologyPage.answerFirst} /><Sections sections={methodologyPage.sections} /><ClosingCta /></PageShell>;
  if (path === "/casos") return <CasesIndexView />;
  if (path === "/nosotros") return <AboutView />;
  if (path === "/contacto") return <ContactView />;
  if (path === "/preguntas-frecuentes") return <PageShell eyebrow="PREGUNTAS FRECUENTES" title="Preguntas sobre investigación de mercados en México y LATAM" description="Respuestas directas sobre alcance, tiempos, cobertura, entregables y forma de trabajo."><FaqList items={spanishFaqs} /><ClosingCta /></PageShell>;
  if (path === "/recursos") return <ResourcesView />;
  return null;
}
