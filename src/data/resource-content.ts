import type { FaqItem } from "@/data/site-content";

export type ResourceArticle = {
  path: string;
  locale: "es" | "en";
  title: string;
  description: string;
  directAnswer: string;
  outline: { heading: string; guidance: string }[];
  table: { caption: string; columns: string[]; rows: string[][] };
  faqs: FaqItem[];
  author: string;
  datePublished: string;
  dateModified: string;
};

export const spanishResources: ResourceArticle[] = [
  {
    path: "/recursos/cuanto-cuesta-un-estudio-de-mercado-en-mexico",
    locale: "es",
    title: "Cuánto cuesta un estudio de mercado en México",
    description: "Estructura para comparar rangos por tipo de estudio, alcance, muestra, método y entregables con datos verificables.",
    directAnswer: "El costo depende del método, población, incidencia, tamaño muestral, ciudades o países, estímulos, profundidad de análisis y entregables. Esta guía publicará rangos verificables cuando se incorporen fuente, fecha, impuestos y supuestos comparables; no presentamos una cifra sin esa evidencia.",
    outline: [
      { heading: "Qué variables explican el costo", guidance: "TODO_CONTENIDO: método, muestra, incidencia, geografía, reclutamiento, estímulos, análisis y entregables." },
      { heading: "Rangos por tipo de estudio", guidance: "TODO_DATOS: completar la tabla con rangos reales, fuente, fecha, moneda e impuestos." },
      { heading: "Qué debe incluir una cotización", guidance: "TODO_CONTENIDO: desglose verificable de diseño, campo, incentivos, análisis, materiales y derechos de uso." },
      { heading: "Cómo comparar propuestas", guidance: "TODO_CONTENIDO: bases equivalentes, exclusiones, calidad, calendario y seniority del equipo." },
    ],
    table: {
      caption: "Rangos por tipo de estudio — datos pendientes de validación",
      columns: ["Tipo de estudio", "Alcance comparable", "Rango MXN", "Fuente y fecha"],
      rows: [["Cualitativo", "TODO_ALCANCE", "TODO_RANGO_REAL", "TODO_FUENTE"], ["Encuesta CAWI", "TODO_ALCANCE", "TODO_RANGO_REAL", "TODO_FUENTE"], ["Segmentación", "TODO_ALCANCE", "TODO_RANGO_REAL", "TODO_FUENTE"], ["Brand tracking", "TODO_ALCANCE", "TODO_RANGO_REAL", "TODO_FUENTE"]],
    },
    faqs: [
      { question: "¿Por qué dos cotizaciones pueden ser tan distintas?", answer: "TODO_CONTENIDO: comparar muestra, incidencia, cobertura, controles, análisis, entregables y seniority sobre la misma base." },
      { question: "¿El incentivo está incluido?", answer: "TODO_DATO: indicar práctica y condiciones reales de GS Insights." },
      { question: "¿Los rangos incluyen IVA?", answer: "TODO_DATO: definir tratamiento fiscal de los rangos publicados." },
    ],
    author: "TODO_AUTOR_REAL",
    datePublished: "TODO_DATE_PUBLISHED",
    dateModified: "2026-08-14",
  },
  {
    path: "/recursos/tamano-de-muestra-para-segmentacion-latam",
    locale: "es",
    title: "Tamaño de muestra para una segmentación en LATAM",
    description: "Esquema para documentar tamaño muestral, incidencia, número de mercados, clusters y precisión en una segmentación regional.",
    directAnswer: "No existe un tamaño universal para segmentación. La muestra debe sostener la solución de clusters, los cortes prioritarios, la incidencia y la estabilidad por país. Esta guía incorporará ejemplos numéricos solo cuando estén documentados con supuestos y fuente.",
    outline: [
      { heading: "Qué determina el tamaño muestral", guidance: "TODO_CONTENIDO: variables activas, heterogeneidad, clusters esperados, celdas, incidencia y pérdidas por calidad." },
      { heading: "Diseño regional y asignación por país", guidance: "TODO_CONTENIDO: núcleo común, mínimos analíticos, ponderación y comparabilidad." },
      { heading: "Estabilidad de los clusters", guidance: "TODO_CONTENIDO: validación, replicación, holdout y sensibilidad de soluciones." },
      { heading: "Qué reportar junto con la muestra", guidance: "TODO_CONTENIDO: universo, fuente, cuotas, margen de error cuando aplica y limitaciones." },
    ],
    table: { caption: "Escenarios de muestra — completar con evidencia", columns: ["Escenario", "Mercados", "Incidencia", "Muestra sugerida", "Supuestos"], rows: [["Un país", "TODO", "TODO", "TODO_CIFRA_REAL", "TODO"], ["Regional", "TODO", "TODO", "TODO_CIFRA_REAL", "TODO"], ["Segmentos de baja incidencia", "TODO", "TODO", "TODO_CIFRA_REAL", "TODO"]] },
    faqs: [
      { question: "¿El margen de error define la muestra de una segmentación?", answer: "No por sí solo. También importan estructura multivariada, estabilidad y tamaño de los grupos que deben analizarse." },
      { question: "¿Cada país necesita la misma muestra?", answer: "No necesariamente. La asignación responde a mínimos analíticos, heterogeneidad y comparaciones prioritarias." },
      { question: "¿Se puede segmentar una base de clientes?", answer: "Sí, si la base representa la población relevante y sus sesgos están documentados." },
    ],
    author: "TODO_AUTOR_REAL",
    datePublished: "TODO_DATE_PUBLISHED",
    dateModified: "2026-08-14",
  },
  {
    path: "/recursos/costos-de-panel-online-mexico-brasil-colombia",
    locale: "es",
    title: "Costos de panel online en México, Brasil y Colombia",
    description: "Plantilla comparativa para costo por entrevista, incidencia, longitud, segmentación y controles de calidad en tres mercados.",
    directAnswer: "El costo de panel online varía por país, incidencia, duración, perfil, cuotas, dispositivo y controles. La tabla queda preparada para cifras comparables en una moneda y fecha comunes; todas las celdas de precio permanecen como TODO hasta contar con cotizaciones o fuentes verificables.",
    outline: [
      { heading: "Cómo comparar costos de panel", guidance: "TODO_CONTENIDO: misma duración, incidencia, muestra, perfil, cuotas, moneda, impuestos y calidad." },
      { heading: "Diferencias entre México, Brasil y Colombia", guidance: "TODO_DATOS: documentar disponibilidad, penetración, reclutamiento y particularidades lingüísticas." },
      { heading: "Controles que cambian el precio", guidance: "TODO_CONTENIDO: deduplicación, fraude, velocidad, geolocalización y calidad abierta." },
      { heading: "Qué pedir al proveedor", guidance: "TODO_CONTENIDO: fuente de panelistas, exclusiones, reemplazos, privacidad y reporte de campo." },
    ],
    table: { caption: "Costo comparativo de panel online — cifras pendientes", columns: ["Mercado", "Perfil / incidencia", "LOI", "Costo por entrevista", "Moneda", "Fuente y fecha"], rows: [["México", "TODO", "TODO", "TODO_COSTO_REAL", "TODO", "TODO_FUENTE"], ["Brasil", "TODO", "TODO", "TODO_COSTO_REAL", "TODO", "TODO_FUENTE"], ["Colombia", "TODO", "TODO", "TODO_COSTO_REAL", "TODO", "TODO_FUENTE"]] },
    faqs: [
      { question: "¿Qué significa incidencia en un panel?", answer: "Es la proporción de personas evaluadas que cumple los criterios del estudio; una incidencia baja suele elevar reclutamiento y costo." },
      { question: "¿Un panel barato produce datos comparables?", answer: "El precio no prueba calidad. Deben compararse fuente, controles, cuotas, exclusiones y resultado del piloto." },
      { question: "¿Brasil requiere cuestionario en portugués?", answer: "Sí. La adaptación debe ser profesional y conservar equivalencia conceptual, no solo traducción literal." },
    ],
    author: "TODO_AUTOR_REAL",
    datePublished: "TODO_DATE_PUBLISHED",
    dateModified: "2026-08-14",
  },
  {
    path: "/recursos/como-elegir-una-agencia-de-investigacion-de-mercados",
    locale: "es",
    title: "Cómo elegir una agencia de investigación de mercados",
    description: "Criterios verificables para comparar enfoque, muestra, calidad, seniority, entregables, privacidad y capacidad regional.",
    directAnswer: "Elige una agencia que pueda conectar la pregunta de negocio con un diseño defendible, explicar muestra y calidad, mostrar quién realizará el trabajo y distinguir evidencia de opinión. Esta guía ofrece una estructura de evaluación; cualquier benchmark o ponderación queda pendiente de validación.",
    outline: [
      { heading: "Señales de un buen enfoque", guidance: "TODO_CONTENIDO: pregunta, hipótesis, método proporcional, limitaciones y uso final." },
      { heading: "Cómo evaluar muestra y campo", guidance: "TODO_CONTENIDO: población, incidencia, cuotas, controles y trazabilidad del proveedor." },
      { heading: "Quién hará el trabajo", guidance: "TODO_CONTENIDO: roles, dedicación senior, subcontratación y responsable de análisis." },
      { heading: "Cómo puntuar propuestas", guidance: "TODO_DATOS: completar pesos solo después de validar criterios con compradores reales." },
    ],
    table: { caption: "Matriz para comparar agencias — ponderación pendiente", columns: ["Criterio", "Evidencia solicitada", "Peso", "Agencia A", "Agencia B"], rows: [["Claridad metodológica", "Propuesta y supuestos", "TODO_PESO", "TODO", "TODO"], ["Calidad de muestra", "Fuente y controles", "TODO_PESO", "TODO", "TODO"], ["Equipo asignado", "Nombres y roles", "TODO_PESO", "TODO", "TODO"], ["Entregables", "Ejemplo anonimizado", "TODO_PESO", "TODO", "TODO"]] },
    faqs: [
      { question: "¿Conviene elegir la propuesta más barata?", answer: "No sin comparar alcance equivalente. Una diferencia puede venir de muestra, controles, profundidad, entregables o participación senior." },
      { question: "¿Qué debe incluir la metodología?", answer: "Población, reclutamiento, muestra, instrumento, campo, calidad, análisis, calendario, entregables y limitaciones." },
      { question: "¿Es importante conocer al equipo asignado?", answer: "Sí. Solicita nombres, roles, dedicación y quién interpretará y presentará los resultados." },
    ],
    author: "TODO_AUTOR_REAL",
    datePublished: "TODO_DATE_PUBLISHED",
    dateModified: "2026-08-14",
  },
];

const englishPaths = [
  "/en/resources/how-much-does-market-research-cost-in-mexico",
  "/en/resources/sample-size-for-segmentation-latam",
  "/en/resources/online-panel-costs-mexico-brazil-colombia",
  "/en/resources/how-to-choose-a-market-research-agency",
] as const;

const englishTitles = [
  "How much does market research cost in Mexico?",
  "Sample size for a segmentation study in Latin America",
  "Online panel costs in Mexico, Brazil and Colombia",
  "How to choose a market research agency",
] as const;

export const englishResources: ResourceArticle[] = spanishResources.map((article, index) => ({
  path: englishPaths[index],
  locale: "en",
  title: englishTitles[index],
  description: `Evidence-ready outline for ${englishTitles[index].toLowerCase()}`,
  directAnswer: "This article is structured to answer the question directly, but no price, benchmark or credential will be published until its source, date, units and assumptions are verified. Data cells remain explicit TODOs.",
  outline: article.outline.map((section) => ({
    heading: `Evidence section: ${section.heading}`,
    guidance: "TODO_CONTENT: add verified English-language analysis corresponding to the Spanish source section.",
  })),
  table: {
    caption: "Comparison table — verified data pending",
    columns: article.table.columns.map((column) => `EN: ${column}`),
    rows: article.table.rows.map((row) => row.map(() => "TODO_VERIFIED_DATA")),
  },
  faqs: article.faqs.map((faq) => ({
    question: `English FAQ: ${faq.question}`,
    answer: "TODO_CONTENT: professional English answer based on verified source material.",
  })),
  author: article.author,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
}));

export const allResources = [...spanishResources, ...englishResources];
