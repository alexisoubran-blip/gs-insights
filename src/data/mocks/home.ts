/**
 * Home-page copy. Passed in via props so the view remains the content owner.
 */

export interface LoaderCopy {
  brand: string;
  brandDetail: string;
  bootLabel: string;
  bootState: string;
  initializing: string;
  loading: string;
  coordinates: string;
  version: string;
}

export interface FaqCopy {
  eyebrow: string;
  title: string;
  items: { question: string; answer: string }[];
}

export interface FooterCopy {
  wordmark: string;
  tagline: string;
  columns: { heading: string; links: { label: string; href: string }[] }[];
  legal?: string;
}

export interface ProofCase {
  brand: string;
  result: string;
  detail: string;
  href: string;
}

export interface Capability {
  index: string;
  title: string;
  detail: string;
  href: string;
}

export interface ProofCopy {
  eyebrow: string;
  title: string;
  intro: string;
  disclosure: string;
  cases: ProofCase[];
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilities: Capability[];
}

export const homeFaq: FaqCopy = {
  eyebrow: "05 — PREGUNTAS",
  title: "Lo que necesitas saber",
  items: [
    {
      question: "¿Qué es GS Insights?",
      answer:
        "GS Insights es una consultora senior de investigación de mercados en México con cobertura en Latinoamérica. Realizamos estudios cuantitativos y cualitativos para decisiones de mercado, consumidor, marca, comunicación y crecimiento.",
    },
    {
      question: "¿En qué se diferencia GS Insights de una firma global?",
      answer:
        "Ofrecemos rigor metodológico y experiencia senior con un proceso más directo. El equipo que diseña el estudio también supervisa la investigación, interpreta los resultados y presenta la recomendación.",
    },
    {
      question: "¿Qué tipo de decisiones investigan?",
      answer:
        "Ayudamos a evaluar mercados, oportunidades de categoría, segmentos, posicionamiento, salud de marca, conceptos, comunicación, innovación y decisiones de inversión.",
    },
    {
      question: "¿Trabajan con equipos internos y agencias?",
      answer:
        "Sí. Trabajamos directamente con dirección, marketing, insights e innovación. También nos integramos con agencias creativas, de medios o relaciones públicas cuando la investigación forma parte de una estrategia más amplia.",
    },
    {
      question: "¿Cuánto dura un proyecto?",
      answer:
        "Un estudio ejecutivo puede tomar de dos a cuatro semanas. Los proyectos multimercado, segmentaciones o sistemas de tracking requieren más tiempo. Antes de comenzar definimos alcance, entregables, calendario e inversión.",
    },
    {
      question: "¿Cómo empieza una colaboración?",
      answer:
        "Con una conversación de 30 minutos para entender qué necesitas decidir, qué información ya tienes y qué falta comprobar. Si existe encaje, presentamos alcance, metodología, tiempos e inversión.",
    },
  ],
};

export const homeFooter: FooterCopy = {
  wordmark: "GS Insights",
  tagline:
    "Investigación de mercados para decidir con mayor certeza.",
  columns: [
    {
      heading: "Explorar",
      links: [
        { label: "Enfoque", href: "/#enfoque" },
        { label: "Capacidades", href: "/#capacidades" },
        { label: "Casos", href: "/#casos" },
        { label: "Preguntas", href: "/#preguntas" },
      ],
    },
    {
      heading: "Capacidades",
      links: [
        { label: "Mercados y oportunidades", href: "/#capacidades" },
        { label: "Consumidor y segmentación", href: "/#capacidades" },
        { label: "Marca y comunicación", href: "/#capacidades" },
        { label: "Medición y crecimiento", href: "/#capacidades" },
      ],
    },
    {
      heading: "Contacto",
      links: [
        {
          label: "Cuéntanos tu proyecto",
          href: "/contacto",
        },
      ],
    },
  ],
  legal: "© 2026 GS Insights. México + LATAM.",
};

export const homeLoader: LoaderCopy = {
  brand: "GS INSIGHTS",
  brandDetail: "MARKET INTELLIGENCE / MX–LATAM",
  bootLabel: "SECUENCIA DE ANÁLISIS",
  bootState: "● ACTIVA",
  initializing: "CALIBRANDO SEÑAL",
  loading: "CARGANDO EVIDENCIA",
  coordinates: "19.4326°N / 99.1332°W",
  version: "SENIOR-LED / CAPACIDAD LIMITADA",
};

export const homeProof: ProofCopy = {
  eyebrow: "04 — EVIDENCIA",
  title: "Experiencia aplicada a decisiones reales.",
  intro:
    "Más de 10 años trabajando en investigación, estrategia, medición y crecimiento de marca en México y Latinoamérica.",
  disclosure:
    "Casos realizados por integrantes del equipo antes de la creación de GS Insights.",
  cases: [
    {
      brand: "Tajín",
      result: "800 consumidores · 4 mercados",
      detail: "Validación de una oportunidad en mercados internacionales.",
      href: "/casos/tajin-oportunidad-internacional",
    },
    {
      brand: "FedEx",
      result: "Brand tracking regional",
      detail: "Seguimiento de visibilidad, consideración y desempeño de marca.",
      href: "/casos/fedex-brand-tracking-regional",
    },
    {
      brand: "Takis",
      result: "Cultura de consumo",
      detail: "Investigación cualitativa para entender comportamientos y oportunidades de comunicación.",
      href: "/casos/takis-cultura-de-consumo",
    },
    {
      brand: "SharkNinja",
      result: "131.3M visualizaciones",
      detail: "Insights aplicados a una activación de alto alcance.",
      href: "/casos/sharkninja-activacion-de-alcance",
    },
    {
      brand: "Bitso",
      result: "+400% conversión",
      detail: "Medición y optimización orientadas a resultados comerciales.",
      href: "/casos/bitso-optimizacion-de-conversion",
    },
  ],
  capabilitiesEyebrow: "SERVICIOS",
  capabilitiesTitle: "Estudios diseñados alrededor de tu decisión.",
  capabilities: [
    {
      index: "01",
      title: "Mercados y oportunidades",
      detail:
        "Evalúa demanda, competencia, barreras y condiciones para entrar a un mercado o categoría.",
      href: "/servicios/estudio-de-mercado-mexico",
    },
    {
      index: "02",
      title: "Consumidor y segmentación",
      detail:
        "Entiende quién compra, qué necesita, cómo decide y qué diferencia a cada segmento.",
      href: "/servicios/segmentacion-de-mercado",
    },
    {
      index: "03",
      title: "Marca y comunicación",
      detail:
        "Mide posicionamiento y prueba conceptos, mensajes, campañas, productos o empaques.",
      href: "/servicios/test-de-concepto",
    },
    {
      index: "04",
      title: "Medición y crecimiento",
      detail:
        "Detecta qué funciona, qué frena los resultados y dónde conviene invertir.",
      href: "/servicios/brand-tracking",
    },
  ],
};
