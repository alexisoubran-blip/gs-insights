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
}

export interface Capability {
  index: string;
  title: string;
  detail: string;
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
  title: "Antes de empezar",
  items: [
    {
      question: "¿En qué se diferencia GS Insights de una firma global?",
      answer:
        "En el estándar, no hacemos concesiones: combinamos rigor metodológico, lectura cultural, analítica y traducción comercial. La diferencia está en el acceso directo al equipo senior que diseña el estudio, interpreta la evidencia y presenta la recomendación.",
    },
    {
      question: "¿Qué tipo de decisiones investigan?",
      answer:
        "Entrada a mercados, oportunidades de categoría, segmentación, posicionamiento, salud de marca, comunicación, innovación, experiencia y optimización de inversión. Si la decisión tiene implicaciones comerciales, construimos la evidencia alrededor de ella.",
    },
    {
      question: "¿Trabajan con equipos internos y agencias?",
      answer:
        "Sí. Podemos operar como socio directo de dirección, marketing, insights o innovación, y también integrarnos a una agencia creativa, de medios o relaciones públicas cuando la investigación necesita alimentar una estrategia mayor.",
    },
    {
      question: "¿Cuánto dura un proyecto?",
      answer:
        "Depende de la decisión y el método. Un sprint ejecutivo puede tomar de dos a cuatro semanas; un estudio multimercado o un sistema de tracking requiere una planeación mayor. La primera conversación sirve para definir alcance, calendario y nivel de evidencia necesario.",
    },
    {
      question: "¿Cómo empieza una colaboración?",
      answer:
        "Con una evaluación ejecutiva de 30 minutos. Revisamos qué está en juego, qué ya se sabe, qué falta probar y si somos el socio correcto. Si hay encaje, reciben una arquitectura de investigación y una propuesta a la medida.",
    },
  ],
};

export const homeFooter: FooterCopy = {
  wordmark: "GS Insights",
  tagline:
    "Investigación senior para decisiones de mercado con consecuencias reales.",
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
        { label: "Mercado y oportunidad", href: "/#capacidades" },
        { label: "Consumidor y cultura", href: "/#capacidades" },
        { label: "Marca y comunicación", href: "/#capacidades" },
        { label: "Medición y experimentación", href: "/#capacidades" },
      ],
    },
    {
      heading: "Contacto",
      links: [
        {
          label: "Evaluar una decisión",
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
  title: "Experiencia que ya movió negocio.",
  intro:
    "La investigación importa cuando cambia una conversación, reduce riesgo o abre una oportunidad. Estos son algunos resultados construidos por el equipo a lo largo de más de una década en la industria.",
  disclosure:
    "Casos realizados por integrantes del equipo antes de la creación de GS Insights.",
  cases: [
    {
      brand: "Tajín",
      result: "800 consumidores · 4 mercados",
      detail: "Validación internacional de oportunidad y lectura de mercado.",
    },
    {
      brand: "FedEx",
      result: "Brand tracking regional",
      detail: "Sistema de seguimiento para entender visibilidad y consideración.",
    },
    {
      brand: "Takis",
      result: "Cultura de consumo",
      detail: "Investigación cualitativa para revelar códigos y territorios relevantes.",
    },
    {
      brand: "SharkNinja",
      result: "131.3M visualizaciones",
      detail: "Insights convertidos en una activación de alto alcance.",
    },
    {
      brand: "Bitso",
      result: "+400% conversión",
      detail: "Medición y optimización conectadas a impacto comercial.",
    },
  ],
  capabilitiesEyebrow: "CAPACIDADES",
  capabilitiesTitle: "Un sistema de inteligencia, no un catálogo de estudios.",
  capabilities: [
    {
      index: "01",
      title: "Mercado y oportunidad",
      detail:
        "Sizing, entrada a mercado, paisaje competitivo, tendencias y white spaces.",
    },
    {
      index: "02",
      title: "Consumidor y cultura",
      detail:
        "Segmentación, jobs to be done, etnografía, comunidades y social intelligence.",
    },
    {
      index: "03",
      title: "Marca y comunicación",
      detail:
        "Posicionamiento, equity, tracking, pruebas de concepto y efectividad creativa.",
    },
    {
      index: "04",
      title: "Medición y experimentación",
      detail:
        "Frameworks de KPI, diseño de pruebas, incrementality y optimización continua.",
    },
  ],
};
