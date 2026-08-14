import Link from "next/link";

import {
  englishCases,
  englishFaqs,
  englishMethodology,
  englishServices,
} from "@/data/english-content";
import { contactDetails, founders, type ContentSection, type FaqItem, type ServicePage } from "@/data/site-content";

const sectionClass = "border-t border-white/15 py-[3rem] max-sm:py-[2rem]";

function Shell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return <main lang="en" className="min-h-screen bg-surface px-[3.5rem] pt-[10rem] pb-[5rem] text-white max-lg:px-[1.5rem] max-lg:pt-[8rem] max-sm:px-[1.25rem]"><article className="mx-auto max-w-[72rem]"><header className="pb-[5rem] max-sm:pb-[3rem]"><p className="font-tag text-[0.75rem] tracking-[0.12em] text-signal uppercase">{eyebrow}</p><h1 className="mt-[1rem] max-w-[60rem] font-general text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-light tracking-[-0.03em]">{title}</h1><p className="mt-[2rem] max-w-[48rem] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.55] text-white/70">{description}</p></header>{children}</article></main>;
}

function Answers({ paragraphs }: { paragraphs: string[] }) {
  return <section aria-label="Direct answer" className={`${sectionClass} grid gap-[1.25rem]`}>{paragraphs.map((paragraph) => <p key={paragraph} className="max-w-[56rem] text-[1.125rem] leading-[1.7] text-white/90">{paragraph}</p>)}</section>;
}

function Sections({ sections }: { sections: ContentSection[] }) {
  return sections.map((section) => <section key={section.heading} className={`${sectionClass} grid grid-cols-[0.75fr_1.25fr] gap-[4rem] max-lg:grid-cols-1 max-lg:gap-[1.25rem]`}><h2 className="text-[clamp(1.75rem,3vw,3rem)] leading-none font-light">{section.heading}</h2><div className="grid gap-[1.25rem]">{section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-[1.75] text-white/75">{paragraph}</p>)}</div></section>);
}

function Faqs({ items }: { items: FaqItem[] }) {
  return <section className={sectionClass}><h2 className="text-[clamp(2rem,4vw,4rem)] leading-none font-light">Frequently asked questions</h2><dl className="mt-[2.5rem] divide-y divide-white/15 border-y border-white/15">{items.map((item) => <div key={item.question} className="grid grid-cols-[0.8fr_1.2fr] gap-[3rem] py-[1.5rem] max-lg:grid-cols-1 max-lg:gap-[0.75rem]"><dt className="text-[1.125rem] font-medium">{item.question}</dt><dd className="leading-[1.65] text-white/70">{item.answer}</dd></div>)}</dl></section>;
}

function Cta() {
  return <aside className="mt-[4rem] border border-white/20 bg-white px-[2rem] py-[2.5rem] text-black"><h2 className="max-w-[52rem] text-[clamp(2rem,4vw,4rem)] leading-none font-light">Review your research challenge with a senior researcher.</h2><p className="mt-[1rem] max-w-[42rem] leading-[1.6] text-black/70">In 30 minutes, we can clarify the question, scope and evidence that would be useful.</p><Link href="/en/contact" className="mt-[1.5rem] inline-flex border border-black px-[1.25rem] py-[0.8rem] font-medium">Tell us about your project</Link></aside>;
}

function Service({ page }: { page: ServicePage }) {
  return <Shell eyebrow={page.eyebrow} title={page.title} description={page.description}><Answers paragraphs={page.answerFirst} /><Sections sections={page.sections} /><section className={sectionClass}><h2 className="text-[clamp(2rem,4vw,4rem)] leading-none font-light">When it fits / when it does not</h2><div className="mt-[2rem] overflow-x-auto"><table className="w-full min-w-[42rem] border-collapse text-left"><thead><tr><th className="border border-white/20 bg-white/10 p-[1rem]">Good fit</th><th className="border border-white/20 bg-white/10 p-[1rem]">Poor fit</th></tr></thead><tbody>{page.comparison.map((row) => <tr key={row.yes}><td className="border border-white/20 p-[1rem] text-white/75">{row.yes}</td><td className="border border-white/20 p-[1rem] text-white/75">{row.no}</td></tr>)}</tbody></table></div></section><Faqs items={page.faqs} /><Cta /></Shell>;
}

function CasesIndex() {
  return <Shell eyebrow="CASE STUDIES" title="Experience applied to market, brand and growth challenges" description="Selected work completed by members of the founding team before GS Insights was established."><ul className="grid grid-cols-2 gap-[1rem] border-t border-white/15 py-[3rem] max-md:grid-cols-1">{englishCases.map((item) => <li key={item.path} className="border border-white/15 p-[1.5rem]"><p className="text-signal">{item.brand}</p><h2 className="mt-[1rem] text-[1.75rem] leading-[1.05] font-light">{item.title}</h2><p className="mt-[1rem] text-white/65">{item.summary}</p><Link href={item.path} className="mt-[1.5rem] inline-block border-b border-signal pb-[0.25rem]">View case</Link></li>)}</ul></Shell>;
}

export function EnglishPageView({ path }: { path: string }) {
  const service = englishServices.find((item) => item.path === path);
  if (service) return <Service page={service} />;
  const caseStudy = englishCases.find((item) => item.path === path);
  if (caseStudy) return <Shell eyebrow={`CASE · ${caseStudy.brand}`} title={caseStudy.title} description={caseStudy.summary}><div className="border-y border-white/15 py-[2rem]"><p className="text-[clamp(1.5rem,3vw,3rem)] font-light">{caseStudy.result}</p><p className="mt-[1rem] text-signal">{caseStudy.role}</p><p className="mt-[0.75rem] text-white/60">Founding team track record prior to GS Insights.</p></div><Sections sections={caseStudy.sections} /><Cta /></Shell>;
  if (path === "/en/") return <Shell eyebrow="MEXICO + LATIN AMERICA" title="Market research for brands operating in Mexico and LATAM" description="Senior-led market research for international and regional teams evaluating markets, consumers, brands, concepts and pricing."><Answers paragraphs={["GS Insights helps leadership, marketing, insights and innovation teams answer high-stakes questions with qualitative and quantitative evidence.", "There are no junior handoffs: the researcher who designs the study also supervises fieldwork, interprets findings and presents the recommendation."]} /><section className={sectionClass}><h2 className="text-[clamp(2rem,4vw,4rem)] font-light">Services</h2><ul className="mt-[2rem] grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">{englishServices.map((item) => <li key={item.path} className="border border-white/15 p-[1.5rem]"><h3 className="text-[1.5rem]">{item.navTitle}</h3><p className="mt-[0.75rem] text-white/65">{item.description}</p><Link href={item.path} className="mt-[1rem] inline-block border-b border-signal">View service</Link></li>)}</ul></section><Cta /></Shell>;
  if (path === "/en/methodology") return <Shell eyebrow="METHODOLOGY" title={englishMethodology.title} description={englishMethodology.description}><Answers paragraphs={englishMethodology.answerFirst} /><Sections sections={englishMethodology.sections} /><Cta /></Shell>;
  if (path === "/en/case-studies") return <CasesIndex />;
  if (path === "/en/about") return <Shell eyebrow="ABOUT" title="Senior researchers involved from start to finish" description="GS Insights is a market research consultancy based in Mexico City and working across Latin America."><Answers paragraphs={["The same team designs the study, supervises fieldwork, analyses results and presents the recommendation. Verified personal details must be supplied before credentials are published."]} /><section className={`${sectionClass} grid grid-cols-2 gap-[1rem] max-md:grid-cols-1`}>{founders.map((person) => <article key={person.name} className="border border-white/15 p-[1.5rem]"><div className="aspect-[4/3] bg-white/5 p-[1rem] text-white/40">{person.photo}</div><h2 className="mt-[1.5rem] text-[2rem] font-light">{person.name}</h2><p className="text-signal">{person.role}</p><p className="mt-[1rem] text-white/70">Experience: {person.years}</p><p className="text-white/70">Education: {person.education}</p><p className="text-white/70">Memberships: {person.memberships}</p><p className="text-white/70">LinkedIn: {person.linkedin}</p></article>)}</section><Cta /></Shell>;
  if (path === "/en/contact") return <Shell eyebrow="CONTACT" title="Tell us what you need to research" description="Share the context, question and timing of your project. We will assess the appropriate scope and evidence."><section className={`${sectionClass} grid grid-cols-2 gap-[3rem] max-lg:grid-cols-1`}><address className="grid content-start gap-[0.75rem] not-italic text-white/75"><p>Email: {contactDetails.email}</p><p>Telephone: {contactDetails.telephone}</p><p>City: {contactDetails.city}</p><p>Legal name: {contactDetails.legalName}</p></address><div><p className="leading-[1.6] text-white/70">Calendly is available as a secondary scheduling option.</p><a href={contactDetails.calendly} target="_blank" rel="noreferrer" className="mt-[1.5rem] inline-flex border border-signal px-[1.25rem] py-[0.8rem] text-signal">Open Calendly</a><iframe title="GS Insights calendar" src={contactDetails.calendly} className="mt-[2rem] h-[42rem] w-full border border-white/15 bg-white" loading="lazy" /></div></section></Shell>;
  if (path === "/en/frequently-asked-questions") return <Shell eyebrow="FAQ" title="Market research questions for Mexico and Latin America" description="Direct answers about scope, methods, timing, coverage and deliverables."><Faqs items={englishFaqs} /><Cta /></Shell>;
  if (path === "/en/resources") return <Shell eyebrow="RESOURCES" title="Market research guides for Mexico and Latin America" description="Practical references on cost, sample design, online panels and selecting a research partner."><section className={sectionClass}><p className="max-w-[48rem] text-[1.125rem] leading-[1.7] text-white/70">The editorial structure is ready. Tables and benchmarks will only be published with verified sources, dates and methodology.</p></section></Shell>;
  return null;
}
