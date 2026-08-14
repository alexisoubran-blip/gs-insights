export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ComparisonRow = {
  yes: string;
  no: string;
};

export type ServicePage = {
  kind: "service";
  path: string;
  navTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  answerFirst: string[];
  sections: ContentSection[];
  comparison: ComparisonRow[];
  faqs: FaqItem[];
};

type ServiceSeed = {
  path: string;
  navTitle: string;
  title: string;
  description: string;
  definition: string;
  purpose: string;
  moment: string;
  design: string;
  analysis: string;
  outputs: string[];
  duration: string;
  yes: string[];
  no: string[];
  faqs: FaqItem[];
};

const buildService = (seed: ServiceSeed): ServicePage => ({
  kind: "service",
  path: seed.path,
  navTitle: seed.navTitle,
  eyebrow: "SERVICIO DE INVESTIGACIÓN",
  title: seed.title,
  description: seed.description,
  answerFirst: [
    seed.definition,
    seed.purpose,
    seed.moment,
  ],
  sections: [
    {
      heading: "Qué responde el estudio",
      paragraphs: [
        `El punto de partida no es una técnica aislada, sino una pregunta de negocio verificable. ${seed.design} Antes de levantar campo, convertimos los supuestos del equipo en hipótesis, variables y criterios de lectura. Eso permite distinguir una señal accionable de una diferencia aparente y evita recolectar información que no cambiará el curso del proyecto.`,
        "El alcance se acuerda con marketing, insights, innovación o dirección. Documentamos la población objetivo, geografía, contexto competitivo, acciones posteriores y restricciones operativas. Cuando el reto abarca varios países de Latinoamérica, conservamos un núcleo comparable y adaptamos lenguaje, estímulos y cuotas a cada mercado; no asumimos que una traducción literal produce datos equivalentes.",
      ],
    },
    {
      heading: "Metodología y diseño de muestra",
      paragraphs: [
        `La metodología combina la fuente de evidencia con el nivel de precisión que exige el uso final. ${seed.analysis} Un levantamiento CAWI con panel online suele ser eficiente para audiencias digitalizadas; CATI puede aportar cobertura cuando la población o la incidencia hacen insuficiente el panel. La etnografía y las sesiones de profundidad permiten observar lenguaje, tensiones y contexto antes de cuantificar.`,
        "Definimos tamaño muestral con base en heterogeneidad, número de segmentos o celdas, incidencia estimada y comparaciones que deben sostenerse. El margen de error es una propiedad del diseño y de la estimación, no una etiqueta genérica: reportamos sus supuestos y evitamos presentar como representativos los cortes con base insuficiente. También establecemos controles de velocidad, consistencia, duplicidad y calidad de respuestas abiertas.",
        "Cuando el proyecto requiere experimentación, aleatorizamos estímulos y controlamos el orden para reducir sesgos. Si utiliza escalas, revisamos anclajes, balance y equivalencia cultural. El plan de análisis se define antes de mirar resultados e incluye las reglas para ponderar, excluir respuestas, tratar valores faltantes y leer diferencias. Esta disciplina ayuda a que el hallazgo sea reproducible y defendible ante finanzas o dirección.",
      ],
    },
    {
      heading: "Entregables y recomendación",
      paragraphs: [
        "El entregable principal no es un archivo de gráficas. Es una recomendación trazable: cada conclusión apunta a la evidencia que la sostiene, explicita su nivel de certeza y señala qué acción puede habilitar. Presentamos una lectura ejecutiva para alinear al equipo y un anexo técnico con cuestionario o guía, muestra, controles, bases y definiciones.",
        `El paquete habitual incluye ${seed.outputs.join(", ")}. Cuando el cliente necesita trabajar los datos internamente, acordamos desde el inicio el formato de base, diccionario y tabulaciones. Los materiales distinguen hechos, interpretación e implicaciones para que una recomendación no se convierta en una afirmación sin respaldo.`,
        "La sesión final es de trabajo, no una entrega unilateral. Contrastamos resultados con conocimiento interno, resolvemos preguntas y priorizamos próximos pasos según impacto, esfuerzo y riesgo. Si la evidencia deja una incertidumbre material, la hacemos visible y proponemos cómo resolverla; no forzamos una respuesta concluyente donde el diseño no la permite.",
      ],
    },
    {
      heading: "Duración típica y proceso",
      paragraphs: [
        `${seed.duration} El calendario depende de la incidencia, número de mercados, reclutamiento, cantidad de estímulos y velocidad de aprobación. Una propuesta seria separa diseño, programación o preparación, piloto, campo, control de calidad, análisis y socialización; comprimir una etapa modifica el riesgo y debe ser una elección explícita.`,
        "El mismo equipo senior participa en la definición, supervisa el levantamiento, interpreta la evidencia y presenta la recomendación. El cliente tiene un responsable directo y puntos de control claros: brief validado, instrumento aprobado, reporte de campo y sesión de hallazgos. Ese modelo reduce la pérdida de contexto entre venta, operación y análisis.",
      ],
    },
  ],
  comparison: seed.yes.map((yes, index) => ({ yes, no: seed.no[index] })),
  faqs: seed.faqs,
});

export const spanishServices: ServicePage[] = [
  buildService({
    path: "/servicios/segmentacion-de-mercado",
    navTitle: "Segmentación de mercado",
    title: "Estudios de segmentación de mercado en México",
    description:
      "Diseño de segmentaciones accionables para identificar grupos de consumidores, dimensionarlos y convertirlos en prioridades de producto, marca y crecimiento.",
    definition:
      "Un estudio de segmentación de mercado identifica grupos de consumidores con necesidades, actitudes o comportamientos diferentes y estima cuánto representa cada grupo. En México y Latinoamérica sirve para pasar de una audiencia genérica a segmentos medibles que marketing, producto, ventas y experiencia puedan activar.",
    purpose:
      "Se utiliza para priorizar oportunidades, ajustar la propuesta de valor, definir mensajes, orientar portafolio y asignar inversión. Una segmentación útil no termina en perfiles atractivos: produce reglas de clasificación, tamaños, valor potencial, barreras y rutas concretas para encontrar a cada segmento.",
    moment:
      "Conviene realizarla cuando el crecimiento se estanca, el portafolio intenta servir a públicos incompatibles, una marca entra a una categoría o país, o el equipo usa personas basadas en intuición. También puede actualizar una segmentación antigua cuando cambian hábitos, canales, precios o condiciones competitivas.",
    design:
      "Para una segmentación por clusters definimos primero las variables que deben separar grupos —necesidades, ocasiones, actitudes y conductas— y reservamos variables descriptivas para explicar y activar el resultado.",
    analysis:
      "Exploramos estabilidad y utilidad de distintas soluciones de clusters, comprobamos que los segmentos sean diferenciables y estimamos su tamaño. MaxDiff ayuda a priorizar necesidades sin el sesgo de calificar todo como importante; conjoint analysis puede medir intercambios entre atributos cuando la propuesta de valor forma parte del reto.",
    outputs: [
      "mapa de segmentos",
      "perfiles y oportunidades",
      "algoritmo de asignación",
      "tamaño y valor relativo",
      "guía de activación",
    ],
    duration:
      "Una segmentación cuantitativa de un país suele requerir entre ocho y doce semanas; una fase cualitativa exploratoria o un diseño multimercado amplían el plazo.",
    yes: [
      "Necesitas priorizar públicos con necesidades realmente distintas.",
      "Puedes adaptar producto, propuesta, comunicación o canales.",
      "Existe una población definible y accesible para el muestreo.",
      "El equipo necesita una clasificación que pueda usar después.",
    ],
    no: [
      "Solo buscas describir la distribución demográfica de clientes actuales.",
      "La organización no puede actuar de forma distinta por segmento.",
      "La base disponible es pequeña o no representa el mercado objetivo.",
      "Se espera que un algoritmo reemplace la estrategia comercial.",
    ],
    faqs: [
      { question: "¿Cuántas personas necesita una segmentación?", answer: "Depende del número de variables, subgrupos y comparaciones. Definimos el tamaño muestral después de estimar incidencia y precisión; no usamos un número universal." },
      { question: "¿Cuántos segmentos debería producir el análisis?", answer: "Los necesarios para representar diferencias estables y accionables. Comparamos soluciones estadísticas y utilidad operativa antes de elegir." },
      { question: "¿La segmentación por clusters crea personas?", answer: "Puede alimentar personas, pero primero genera grupos cuantificados y reglas de asignación. Las personas son una capa de comunicación, no el resultado estadístico." },
      { question: "¿Se puede segmentar México y otros países juntos?", answer: "Sí, si el diseño conserva variables comparables y prueba la estabilidad regional. También puede convenir una solución común con matices por país." },
    ],
  }),
  buildService({
    path: "/servicios/brand-tracking",
    navTitle: "Brand tracking",
    title: "Brand health tracking en México y Latinoamérica",
    description:
      "Sistemas de brand tracking para medir conocimiento, consideración, preferencia, asociaciones y desempeño de marca con una lectura estable en el tiempo.",
    definition:
      "Un brand health tracking es un sistema periódico de investigación que mide cómo evoluciona una marca en la mente y conducta de su mercado. Sigue indicadores como awareness, consideración, preferencia, uso, asociaciones y recomendación, junto con señales de categoría y competencia.",
    purpose:
      "Sirve para saber si la estrategia de marca y comunicación está construyendo disponibilidad mental, en qué parte del funnel se pierde demanda y qué atributos explican avances o retrocesos. Con una serie consistente, el equipo puede separar fluctuaciones normales de cambios que requieren atención.",
    moment:
      "Se usa cuando hay inversión continua en medios, varios competidores, expansión regional, un reposicionamiento o la necesidad de alinear indicadores entre mercados. También es apropiado después de establecer una línea base y antes de evaluar campañas sucesivas.",
    design:
      "Definimos una arquitectura de indicadores vinculada a objetivos de negocio, una frecuencia que pueda detectar cambios y una muestra comparable entre olas. El cuestionario protege las métricas núcleo y limita módulos variables para no romper la serie.",
    analysis:
      "Leemos niveles, tendencias y relaciones entre indicadores; contextualizamos campañas, distribución y estacionalidad. Un U&A puede preceder al tracking para describir usos, ocasiones y estructura de categoría. CAWI con panel online facilita olas frecuentes, mientras CATI puede cubrir públicos donde el acceso digital sesga la muestra.",
    outputs: [
      "dashboard de indicadores",
      "serie histórica documentada",
      "lectura de funnel",
      "drivers de preferencia",
      "recomendaciones por ola",
    ],
    duration:
      "La configuración inicial suele tomar de seis a diez semanas; cada ola posterior puede completarse en tres a cinco, según muestra, mercados y profundidad del análisis.",
    yes: [
      "Necesitas medir evolución con definiciones consistentes.",
      "Existe inversión o actividad suficiente para esperar movimiento.",
      "El equipo puede aportar contexto de medios, ventas y distribución.",
      "Se acordará una gobernanza para conservar la serie.",
    ],
    no: [
      "Solo buscas evaluar una campaña aislada una vez.",
      "No hay una población objetivo o categoría claramente definida.",
      "Se pretende atribuir causalidad únicamente con una encuesta.",
      "Las preguntas y cuotas cambiarán por completo en cada ola.",
    ],
    faqs: [
      { question: "¿Con qué frecuencia debe levantarse un brand tracking?", answer: "Depende de la velocidad de la categoría, inversión y uso de la información. Puede ser continuo, mensual, trimestral o semestral." },
      { question: "¿Brand tracking y campaña son lo mismo?", answer: "No. El tracking mide salud de marca de manera consistente; una evaluación de campaña responde preguntas específicas de una ejecución." },
      { question: "¿Se puede comparar entre países?", answer: "Sí, con un núcleo común, traducción adaptada, muestras equivalentes y lectura del contexto local." },
      { question: "¿Un cambio pequeño es significativo?", answer: "Depende del tamaño muestral, diseño y variabilidad. Reportamos intervalos y bases antes de interpretar movimientos." },
    ],
  }),
  buildService({
    path: "/servicios/test-de-concepto",
    navTitle: "Test de concepto",
    title: "Test de concepto para productos y comunicación",
    description:
      "Pruebas cualitativas y cuantitativas para comparar conceptos, detectar barreras y fortalecer propuestas antes de invertir en desarrollo o lanzamiento.",
    definition:
      "Un test de concepto evalúa una idea de producto, servicio, empaque o comunicación antes de ejecutarla a escala. Mide comprensión, relevancia, diferenciación, credibilidad e intención, y explica qué elementos fortalecen o debilitan la propuesta.",
    purpose:
      "Sirve para seleccionar entre alternativas, identificar ajustes y reducir el riesgo de avanzar con una idea que el público interpreta de otra manera. El objetivo no es obtener una calificación decorativa, sino entender la promesa, las razones para creer y las fricciones que condicionan la respuesta.",
    moment:
      "Se utiliza cuando existen conceptos suficientemente definidos para ser evaluados, pero todavía hay margen para modificarlos. Puede aplicarse antes de prototipos, al comparar territorios de innovación, durante el desarrollo de empaque o antes de producir una campaña.",
    design:
      "Alineamos qué acción tomará el equipo con el resultado y estandarizamos los estímulos para que la comparación sea justa. La exposición monádica reduce contaminación entre conceptos; un diseño secuencial puede servir para diagnóstico cuando el orden se controla.",
    analysis:
      "Sesiones de profundidad permiten depurar lenguaje y revelar objeciones. Después, un test cuantitativo estima niveles y diferencias. MaxDiff puede ordenar beneficios o mensajes; conjoint analysis ayuda cuando la aceptación depende de combinaciones de atributos, formatos y precio en lugar de una idea única.",
    outputs: [
      "scorecard de conceptos",
      "diagnóstico de promesa y soporte",
      "comparación de alternativas",
      "recomendaciones de ajuste",
      "criterios para la siguiente etapa",
    ],
    duration:
      "Un test cuantitativo enfocado suele tomar de cuatro a seis semanas; una secuencia cualitativa y cuantitativa puede requerir de seis a nueve.",
    yes: [
      "Hay conceptos comparables y todavía pueden cambiar.",
      "La audiencia y el contexto de uso están definidos.",
      "Existe una regla clara para seleccionar o mejorar.",
      "Los estímulos representan fielmente el nivel de desarrollo.",
    ],
    no: [
      "Solo existe una frase vaga que no comunica una propuesta.",
      "El lanzamiento ya está cerrado y no admite ajustes.",
      "Se quiere predecir ventas exactas con intención declarada.",
      "Las alternativas tienen niveles de acabado incomparables.",
    ],
    faqs: [
      { question: "¿Cuántos conceptos pueden evaluarse?", answer: "Depende del diseño y longitud. Priorizamos una experiencia realista para evitar fatiga y contaminación entre estímulos." },
      { question: "¿El test predice ventas?", answer: "No por sí solo. Reduce incertidumbre sobre respuesta al concepto; ventas también dependen de precio, distribución, ejecución y competencia." },
      { question: "¿Conviene empezar cualitativo o cuantitativo?", answer: "Cualitativo cuando falta lenguaje o diagnóstico; cuantitativo cuando las alternativas están estandarizadas y se requiere estimación." },
      { question: "¿Se puede incluir precio?", answer: "Sí, si forma parte de la propuesta. Según la pregunta puede incorporarse una evaluación directa, conjoint o un estudio específico de sensibilidad." },
    ],
  }),
  buildService({
    path: "/servicios/estudio-de-mercado-mexico",
    navTitle: "Estudio de mercado en México",
    title: "Estudio de mercado en México para entrada y crecimiento",
    description:
      "Investigación de mercado para dimensionar demanda, entender competencia, validar audiencias y evaluar condiciones de entrada o expansión en México.",
    definition:
      "Un estudio de mercado en México reúne evidencia sobre demanda, consumidores, competencia, canales, precios y barreras para evaluar una entrada o una estrategia de crecimiento. Traduce una oportunidad general en supuestos medibles y escenarios que pueden contrastarse antes de comprometer inversión.",
    purpose:
      "Sirve para estimar el atractivo de una categoría, identificar segmentos y ocasiones, entender cómo se compra, reconocer sustitutos y revelar condiciones locales que un análisis internacional puede omitir. El resultado orienta priorización de audiencias, propuesta de valor, ruta de entrada y preguntas pendientes.",
    moment:
      "Se utiliza antes de entrar a México, lanzar una categoría, ampliar distribución, adaptar una oferta regional o revisar por qué el desempeño está por debajo del plan. También ayuda a construir una línea base cuando los datos internos describen ventas, pero no explican el mercado disponible.",
    design:
      "Construimos un marco de mercado que integra fuentes secundarias y levantamiento primario. Separamos tamaño observable, estimaciones y supuestos; definimos categorías y geografías para no mezclar universos incompatibles.",
    analysis:
      "Un U&A cuantifica conocimiento, uso, frecuencia, ocasiones y repertorio de marcas. CAWI, CATI y panel online se eligen según cobertura e incidencia. La etnografía o sesiones de profundidad aportan contexto cultural, mientras entrevistas expertas pueden aclarar canales, regulación y dinámica competitiva.",
    outputs: [
      "mapa de mercado y competencia",
      "perfiles de demanda",
      "barreras y detonadores",
      "escenarios de entrada",
      "prioridades de validación",
    ],
    duration:
      "Un diagnóstico focalizado suele tomar de seis a ocho semanas; un programa multimétodo o con varias ciudades puede requerir de ocho a doce.",
    yes: [
      "Existe una hipótesis concreta de categoría, público y geografía.",
      "La inversión depende de entender demanda y barreras locales.",
      "Se pueden combinar datos internos, secundarios y primarios.",
      "El equipo acepta trabajar con escenarios y supuestos visibles.",
    ],
    no: [
      "Solo se busca una cifra rápida sin definir el mercado relevante.",
      "La pregunta es exclusivamente legal, fiscal o regulatoria.",
      "No existe acceso razonable a la población de interés.",
      "Se espera certeza absoluta sobre ventas futuras.",
    ],
    faqs: [
      { question: "¿El estudio incluye market sizing?", answer: "Puede incluirlo. Definimos la unidad, fuentes y supuestos, y presentamos rangos cuando una cifra puntual no es defendible." },
      { question: "¿México puede analizarse como un solo mercado?", answer: "Depende de la categoría. Región, ciudad, canal e ingreso pueden cambiar acceso y comportamiento; el diseño debe reflejarlo." },
      { question: "¿Trabajan con empresas que aún no operan en México?", answer: "Sí. El estudio puede priorizar hipótesis de entrada, adaptación y validación antes del lanzamiento." },
      { question: "¿Qué fuentes utilizan?", answer: "Fuentes públicas y sectoriales, datos del cliente y levantamiento primario. Cada cifra conserva su fuente, fecha y limitaciones." },
    ],
  }),
  buildService({
    path: "/servicios/pricing-y-sensibilidad-al-precio",
    navTitle: "Pricing y sensibilidad",
    title: "Estudios de pricing y sensibilidad al precio",
    description:
      "Investigación de precios para estimar rangos aceptables, intercambios entre atributos y respuesta de segmentos antes de cambiar una propuesta comercial.",
    definition:
      "Un estudio de pricing mide cómo cambia la percepción o preferencia ante distintos precios y qué rango resulta coherente con la propuesta de valor. Puede estimar sensibilidad declarada, umbrales, compensaciones entre atributos y diferencias entre segmentos.",
    purpose:
      "Sirve para explorar un precio de lanzamiento, revisar arquitectura de portafolio, comparar paquetes o entender si una barrera es económica o de valor percibido. No fija el precio de forma automática: produce evidencia que debe integrarse con costos, margen, canal, competencia y estrategia.",
    moment:
      "Se utiliza cuando existe una oferta suficientemente concreta y un conjunto realista de precios o configuraciones. Es especialmente útil antes de lanzar, al rediseñar paquetes, frente a inflación o cuando ventas observa objeciones que necesitan ser separadas de problemas de producto o comunicación.",
    design:
      "Elegimos el método según la pregunta comercial. Van Westendorp explora umbrales de percepción con cuatro preguntas; Gabor-Granger estima intención ante niveles; conjoint analysis modela intercambios entre precio, marca, atributos y paquete cuando el contexto de elección es central.",
    analysis:
      "Revisamos coherencia, experiencia de compra y rango competitivo antes del campo. Un panel online permite controlar cuotas y aleatorización; sesiones de profundidad ayudan a comprender referencias y lenguaje. Segmentamos la respuesta cuando hay bases suficientes y evitamos convertir intención declarada en una curva de demanda causal.",
    outputs: [
      "rangos y umbrales de precio",
      "lectura por segmento",
      "trade-offs de atributos",
      "escenarios de portafolio",
      "riesgos y supuestos comerciales",
    ],
    duration:
      "Un estudio de sensibilidad enfocado suele tomar de cuatro a seis semanas; un conjoint con diseño de producto y simulador puede requerir de siete a diez.",
    yes: [
      "La oferta, unidad y canal de compra están definidos.",
      "Existe un rango realista para someter a evaluación.",
      "Precio se analizará junto con costos y estrategia.",
      "Hay muestra suficiente para los cortes prioritarios.",
    ],
    no: [
      "La propuesta todavía no se entiende o cambia cada semana.",
      "Se busca una cifra exacta de ventas futuras.",
      "El rango probado no podría implementarse.",
      "Se confunde disposición declarada con comportamiento observado.",
    ],
    faqs: [
      { question: "¿Qué método de pricing conviene?", answer: "Depende de si buscas umbrales, respuesta a niveles o intercambios entre configuraciones. La pregunta comercial determina el método." },
      { question: "¿Qué entrega Van Westendorp?", answer: "Un rango de percepciones de precio derivado de cuatro umbrales declarados. No sustituye un modelo de demanda ni el análisis financiero." },
      { question: "¿Conjoint sirve para definir paquetes?", answer: "Sí. Permite estimar preferencias relativas y simular configuraciones si los atributos y niveles representan opciones creíbles." },
      { question: "¿Se puede comparar sensibilidad por segmento?", answer: "Sí, cuando el tamaño muestral y la incidencia sostienen esas estimaciones. Las bases pequeñas se reportan como exploratorias." },
    ],
  }),
];

export type CaseStudy = {
  kind: "case";
  path: string;
  brand: string;
  title: string;
  result: string;
  summary: string;
  sections: ContentSection[];
  role: string;
};

export const spanishCases: CaseStudy[] = [
  {
    kind: "case",
    path: "/casos/tajin-oportunidad-internacional",
    brand: "Tajín",
    title: "Validación de una oportunidad internacional para Tajín",
    result: "800 consumidores · 4 mercados",
    summary: "Investigación para contrastar una oportunidad de crecimiento en cuatro mercados internacionales.",
    role: "TODO_DATO_REAL: rol del integrante del equipo fundador en este proyecto.",
    sections: [
      { heading: "El reto", paragraphs: ["La marca necesitaba comparar la oportunidad entre mercados sin perder las diferencias de contexto, categoría y comportamiento que podían alterar la lectura."] },
      { heading: "El enfoque", paragraphs: ["Se estructuró una evaluación comparable con 800 consumidores distribuidos en cuatro mercados. El diseño permitió contrastar señales comunes y matices locales."] },
      { heading: "El resultado", paragraphs: ["La evidencia permitió validar la oportunidad y ordenar los factores que debían considerarse antes de avanzar. No publicamos conclusiones comerciales confidenciales."] },
    ],
  },
  {
    kind: "case",
    path: "/casos/fedex-brand-tracking-regional",
    brand: "FedEx",
    title: "Brand tracking regional para FedEx",
    result: "Brand tracking regional",
    summary: "Seguimiento de visibilidad, consideración y desempeño de marca con una lectura comparable entre mercados.",
    role: "TODO_DATO_REAL: rol del integrante del equipo fundador en este proyecto.",
    sections: [
      { heading: "El reto", paragraphs: ["El equipo requería una lectura consistente de la salud de marca y de los movimientos relevantes a través del tiempo y los mercados."] },
      { heading: "El enfoque", paragraphs: ["Se trabajó con una arquitectura estable de indicadores y una lectura regional que preservó el contexto local de cada ola."] },
      { heading: "El resultado", paragraphs: ["El sistema apoyó el seguimiento de visibilidad, consideración y desempeño. Los valores y hallazgos específicos permanecen confidenciales."] },
    ],
  },
  {
    kind: "case",
    path: "/casos/takis-cultura-de-consumo",
    brand: "Takis",
    title: "Cultura de consumo y comunicación para Takis",
    result: "Investigación cualitativa",
    summary: "Exploración cualitativa de comportamientos, lenguaje y oportunidades de comunicación.",
    role: "TODO_DATO_REAL: rol del integrante del equipo fundador en este proyecto.",
    sections: [
      { heading: "El reto", paragraphs: ["La marca necesitaba comprender el significado de la categoría en la vida de sus consumidores y reconocer territorios de comunicación relevantes."] },
      { heading: "El enfoque", paragraphs: ["La investigación cualitativa profundizó en ocasiones, códigos culturales, motivaciones y formas de hablar sobre el consumo."] },
      { heading: "El resultado", paragraphs: ["La síntesis conectó comportamientos con oportunidades de comunicación. No se publican estímulos ni recomendaciones confidenciales."] },
    ],
  },
  {
    kind: "case",
    path: "/casos/sharkninja-activacion-de-alcance",
    brand: "SharkNinja",
    title: "Insights aplicados a una activación de SharkNinja",
    result: "131.3M visualizaciones",
    summary: "Aplicación de insights a una activación de comunicación de alto alcance.",
    role: "TODO_DATO_REAL: rol del integrante del equipo fundador en este proyecto.",
    sections: [
      { heading: "El reto", paragraphs: ["El trabajo debía conectar una comprensión de audiencia con una ejecución capaz de ganar relevancia y alcance."] },
      { heading: "El enfoque", paragraphs: ["Los insights se tradujeron en criterios para orientar la activación y su lectura de desempeño."] },
      { heading: "El resultado", paragraphs: ["La activación alcanzó 131.3 millones de visualizaciones. La atribución, periodo y fuente deben documentarse antes de ampliar este caso."] },
    ],
  },
  {
    kind: "case",
    path: "/casos/bitso-optimizacion-de-conversion",
    brand: "Bitso",
    title: "Segmentación y optimización de conversión para Bitso",
    result: "+400% conversión",
    summary: "Medición y optimización de una propuesta de valor orientada a resultados comerciales en fintech.",
    role: "TODO_DATO_REAL: rol del integrante del equipo fundador en este proyecto.",
    sections: [
      { heading: "El reto", paragraphs: ["El equipo buscaba fortalecer la propuesta de valor y comprobar su capacidad para mejorar la respuesta comercial."] },
      { heading: "El enfoque", paragraphs: ["La segmentación y la medición guiaron un rediseño de la propuesta con una lectura orientada a conversión."] },
      { heading: "El resultado", paragraphs: ["El caso registró un incremento de 400% en conversión. Falta documentar periodo, base, definición y fuente antes de publicar más detalle."] },
    ],
  },
];

export const methodologyPage = {
  path: "/metodologia",
  title: "Metodología de investigación de mercados en México y LATAM",
  description: "Cómo GS Insights diseña estudios cualitativos y cuantitativos, controla calidad y convierte evidencia en recomendaciones.",
  answerFirst: [
    "Nuestra metodología parte de la pregunta de negocio, define qué evidencia podría cambiar el curso del proyecto y elige las técnicas después. Un estudio puede combinar investigación documental, sesiones de profundidad, etnografía, CAWI, CATI, panel online, U&A, MaxDiff, conjoint analysis o Van Westendorp cuando la pregunta lo requiere.",
    "Cada diseño explicita población, tamaño muestral, incidencia, cuotas, controles, plan de análisis y limitaciones. El mismo equipo senior acompaña brief, instrumento, campo, análisis y presentación.",
  ],
  sections: [
    { heading: "1. Definir la pregunta", paragraphs: ["Alineamos la acción que seguirá al estudio, las hipótesis, los públicos y el nivel de certeza necesario. Esta etapa evita que un cuestionario sustituya al razonamiento."] },
    { heading: "2. Diseñar la evidencia", paragraphs: ["Elegimos método, muestra y estímulos de acuerdo con el uso final. Documentamos supuestos, margen de error cuando aplica y condiciones de comparabilidad."] },
    { heading: "3. Controlar el campo", paragraphs: ["Pilotamos, monitoreamos incidencia, cuotas y calidad, y registramos cualquier desviación. En proyectos cualitativos, cuidamos reclutamiento, guía y trazabilidad del análisis."] },
    { heading: "4. Analizar y recomendar", paragraphs: ["Separamos datos, interpretación e implicación. La recomendación muestra qué evidencia la sostiene, qué incertidumbre permanece y qué siguiente paso es proporcional al riesgo."] },
  ],
};

export const spanishFaqs: FaqItem[] = [
  { question: "¿Qué hace una consultora de investigación de mercados?", answer: "Diseña y ejecuta estudios para reducir incertidumbre sobre mercados, consumidores, marcas, productos, comunicación y precios. El resultado debe vincular evidencia con una acción concreta." },
  { question: "¿Trabajan en todo México?", answer: "Sí. El alcance exacto depende de la población, la metodología y la viabilidad de reclutamiento. Para muestras nacionales definimos cobertura y cuotas explícitas." },
  { question: "¿Realizan estudios en Latinoamérica?", answer: "Sí. Diseñamos un núcleo comparable y adaptamos lenguaje, estímulos, muestra y contexto por país." },
  { question: "¿Cuánto tarda un estudio?", answer: "Un proyecto enfocado puede tomar de cuatro a seis semanas; una segmentación, un programa multimétodo o un tracking regional requieren más. El calendario se confirma con el alcance." },
  { question: "¿Qué información necesitan para cotizar?", answer: "La pregunta de negocio, población, mercados, momento del proyecto, técnicas consideradas y uso esperado del resultado. Si algo no está definido, lo trabajamos en la conversación inicial." },
  { question: "¿Entregan las bases de datos?", answer: "Puede incluirse base, diccionario, tabulaciones e instrumentos. El formato y las reglas de privacidad se acuerdan desde la propuesta." },
];

export const founders = [
  {
    name: "TODO_NOMBRE_SOCIO_1",
    role: "TODO_ROL_SOCIO_1",
    years: "TODO_ANOS_EXPERIENCIA_SOCIO_1",
    education: "TODO_FORMACION_SOCIO_1",
    memberships: "TODO_MEMBRESIAS_SOCIO_1",
    linkedin: "TODO_LINKEDIN_SOCIO_1",
    photo: "TODO_FOTO_SOCIO_1",
  },
  {
    name: "TODO_NOMBRE_SOCIO_2",
    role: "TODO_ROL_SOCIO_2",
    years: "TODO_ANOS_EXPERIENCIA_SOCIO_2",
    education: "TODO_FORMACION_SOCIO_2",
    memberships: "TODO_MEMBRESIAS_SOCIO_2",
    linkedin: "TODO_LINKEDIN_SOCIO_2",
    photo: "TODO_FOTO_SOCIO_2",
  },
] as const;

export const contactDetails = {
  email: "TODO_EMAIL_CORPORATIVO",
  telephone: "TODO_TELEFONO_CORPORATIVO",
  city: "Ciudad de México",
  legalName: "TODO_RAZON_SOCIAL",
  calendly: "https://calendly.com/alexis-soubran/contact",
} as const;

export const spanishStaticPaths = [
  ...spanishServices.map((page) => page.path),
  "/metodologia",
  "/casos",
  ...spanishCases.map((page) => page.path),
  "/nosotros",
  "/contacto",
  "/preguntas-frecuentes",
  "/recursos",
];
