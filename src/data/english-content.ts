import type {
  CaseStudy,
  ContentSection,
  FaqItem,
  ServicePage,
} from "@/data/site-content";

type EnglishSeed = {
  path: string;
  navTitle: string;
  title: string;
  description: string;
  definition: string;
  purpose: string;
  timing: string;
  design: string;
  analysis: string;
  outputs: string[];
  duration: string;
  yes: string[];
  no: string[];
  faqs: FaqItem[];
};

const buildEnglishService = (seed: EnglishSeed): ServicePage => ({
  kind: "service",
  path: seed.path,
  navTitle: seed.navTitle,
  eyebrow: "MARKET RESEARCH SERVICE",
  title: seed.title,
  description: seed.description,
  answerFirst: [seed.definition, seed.purpose, seed.timing],
  sections: [
    {
      heading: "What the study answers",
      paragraphs: [
        `We begin with a testable business question, not a preferred technique. ${seed.design} Before fieldwork, we turn assumptions into hypotheses, variables and interpretation rules. This makes it possible to separate an actionable signal from a superficial difference and prevents the team from collecting information that would not change the course of the project.`,
        "Scope is aligned with leadership, marketing, insights, innovation or product stakeholders. We document the target population, geography, competitive context, downstream actions and operational constraints. For multi-country Latin American work, we preserve a comparable core while adapting language, stimuli and quotas to each market. A literal translation is never treated as evidence of cultural equivalence.",
      ],
    },
    {
      heading: "Methodology and sample design",
      paragraphs: [
        `The research method follows the required level of evidence. ${seed.analysis} CAWI research with an online panel is often efficient for digitally reachable audiences; CATI can improve coverage when access or incidence makes an online-only design weak. Ethnography and in-depth interviews reveal context, tensions and vocabulary before those patterns are quantified.`,
        "Sample size is based on population heterogeneity, the number of cells or segments, expected incidence and the comparisons the study must support. Margin of error belongs to a specific design and estimate, so we state its assumptions rather than attach a generic figure to every result. Small subgroups are labelled exploratory instead of being presented as representative.",
        "Questionnaires and discussion guides are piloted. We monitor quotas, survey speed, internal consistency, duplicates and open-end quality. When stimuli are tested, exposure is randomized and order effects are controlled. The analysis plan is agreed before results are reviewed, including weighting, exclusions, missing values and thresholds for interpreting differences.",
      ],
    },
    {
      heading: "Deliverables and recommendation",
      paragraphs: [
        "The core deliverable is not a collection of charts. It is a traceable recommendation: each conclusion points to supporting evidence, states the level of confidence and identifies the action it can inform. We provide an executive narrative for alignment and a technical appendix covering the instrument, sample, quality controls and definitions.",
        `A typical package includes ${seed.outputs.join(", ")}. When the client needs to continue the analysis internally, data files, codebooks and tables are specified at the proposal stage. Materials separate observed facts, interpretation and implications so that a recommendation cannot drift into an unsupported claim.`,
        "The final session is a working meeting. We connect evidence with internal knowledge, answer technical questions and prioritize next steps by impact, effort and risk. If material uncertainty remains, it is made explicit along with a proportionate way to resolve it; we do not manufacture certainty that the design cannot provide.",
      ],
    },
    {
      heading: "Typical timing and process",
      paragraphs: [
        `${seed.duration} Timing depends on incidence, number of markets, recruitment complexity, stimuli and approval speed. A realistic plan separates design, programming or preparation, pilot, fieldwork, quality control, analysis and stakeholder readout. Compressing any stage changes risk and should be an explicit trade-off.`,
        "The same senior team defines the study, supervises fieldwork, interprets the evidence and presents the recommendation. Clients have one accountable lead and clear checkpoints: validated brief, approved instrument, field update and final findings session. This model reduces the context loss that often occurs between sales, operations and analysis.",
      ],
    },
  ],
  comparison: seed.yes.map((yes, index) => ({ yes, no: seed.no[index] })),
  faqs: seed.faqs,
});

export const englishServices: ServicePage[] = [
  buildEnglishService({
    path: "/en/services/market-segmentation",
    navTitle: "Market segmentation",
    title: "Market segmentation studies in Mexico",
    description: "Actionable consumer segmentation for brands that need to size distinct audiences and turn them into product, brand and growth priorities.",
    definition: "A market segmentation study identifies groups of consumers with meaningfully different needs, attitudes or behaviours and estimates the size of each group. In Mexico and Latin America, it turns a broad target audience into measurable segments that marketing, product, sales and experience teams can activate.",
    purpose: "It is used to prioritize growth opportunities, refine a value proposition, shape communications, guide portfolio choices and allocate investment. A useful segmentation does not end with memorable profiles: it provides assignment rules, segment size, relative value, barriers and practical routes for reaching each audience.",
    timing: "It is appropriate when growth has stalled, a portfolio is serving incompatible audiences, a brand is entering a new category or country, or internal personas are based mostly on intuition. It can also refresh an older solution after behaviour, channels, pricing or competitive conditions change.",
    design: "For cluster-based segmentation, we first identify the needs, occasions, attitudes and behaviours that should create separation, while keeping descriptive variables available to explain and activate the final groups.",
    analysis: "We compare cluster solutions for stability, differentiation and business usefulness. MaxDiff can prioritize needs without encouraging respondents to rate everything as important; conjoint analysis can quantify trade-offs when attributes and value propositions are part of the segmentation challenge.",
    outputs: ["segment map", "profiles and opportunity areas", "typing algorithm", "size and relative value", "activation guide"],
    duration: "A single-country quantitative segmentation usually takes eight to twelve weeks. A qualitative discovery phase or multi-market design extends the schedule.",
    yes: ["You need to prioritize audiences with genuinely different needs.", "Product, proposition, communications or channels can be adapted.", "The target population is definable and reachable.", "Teams need a reusable classification after delivery."],
    no: ["You only need demographics for current customers.", "The organization cannot act differently by segment.", "The available sample is too small or biased.", "A clustering algorithm is expected to replace strategy."],
    faqs: [
      { question: "How large should a segmentation sample be?", answer: "It depends on variables, priority subgroups and comparisons. Sample size is set after incidence and precision requirements are understood." },
      { question: "How many segments should the analysis produce?", answer: "Only as many as are stable, distinctive and operationally useful. We compare statistical and business criteria before selecting a solution." },
      { question: "Does cluster segmentation create personas?", answer: "It can support personas, but it first creates quantified groups and assignment rules. Personas are a communication layer, not the statistical result." },
      { question: "Can Mexico and other countries share one segmentation?", answer: "Yes, when comparable variables are used and regional stability is tested. A common framework with local nuances may be more useful than separate models." },
    ],
  }),
  buildEnglishService({
    path: "/en/services/brand-tracking",
    navTitle: "Brand tracking",
    title: "Brand health tracking in Mexico and Latin America",
    description: "Stable brand tracking systems for awareness, consideration, preference, associations and brand performance across time and markets.",
    definition: "Brand health tracking is a recurring research system that measures how a brand changes in the minds and behaviours of its market. It monitors awareness, consideration, preference, usage, associations and advocacy alongside category and competitor signals.",
    purpose: "It shows whether brand and communications strategy is building mental availability, where demand is lost in the funnel and which attributes explain progress or decline. A consistent time series helps teams distinguish normal sampling movement from a shift that deserves action.",
    timing: "It is used when media investment is continuous, competition is active, regional expansion is underway, positioning is changing or markets need a common measurement language. It is also valuable after establishing a baseline and before evaluating successive campaigns.",
    design: "We create an indicator architecture tied to business objectives, choose a cadence capable of detecting meaningful change and preserve comparable samples across waves. Core measures remain stable while rotating modules answer current questions without breaking the series.",
    analysis: "We read levels, trends and relationships while documenting media, distribution and seasonality. A usage and attitudes study, or U&A, may precede the tracker. CAWI with an online panel supports frequent waves; CATI may be required where digital access would bias coverage.",
    outputs: ["brand dashboard", "documented time series", "funnel analysis", "drivers of preference", "wave-specific recommendations"],
    duration: "Initial setup commonly takes six to ten weeks. Later waves can be completed in three to five weeks depending on sample, markets and analytical depth.",
    yes: ["You need comparable measurement over time.", "Activity is sufficient for movement to be plausible.", "Media, sales and distribution context is available.", "Governance will protect core metrics."],
    no: ["You only need a one-off campaign evaluation.", "The category or target population is undefined.", "A survey alone is expected to prove causality.", "Questions and quotas will be rebuilt every wave."],
    faqs: [
      { question: "How often should a brand tracker run?", answer: "Cadence depends on category speed, investment and use of the data. It may be continuous, monthly, quarterly or twice a year." },
      { question: "Is brand tracking the same as campaign evaluation?", answer: "No. Tracking measures brand health consistently; campaign evaluation answers questions about a particular execution." },
      { question: "Can results be compared across countries?", answer: "Yes, with a common core, adapted translation, equivalent sample definitions and local context." },
      { question: "Is a small change meaningful?", answer: "That depends on sample size, design and variability. We report bases and uncertainty before interpreting movement." },
    ],
  }),
  buildEnglishService({
    path: "/en/services/concept-testing",
    navTitle: "Concept testing",
    title: "Concept testing for products and communications",
    description: "Qualitative and quantitative concept testing to compare ideas, diagnose barriers and strengthen propositions before major investment.",
    definition: "Concept testing evaluates a product, service, packaging or communications idea before it is executed at scale. It measures comprehension, relevance, differentiation, credibility and intent, then explains which elements strengthen or weaken the proposition.",
    purpose: "It helps teams select between alternatives, identify revisions and reduce the risk of advancing an idea that the audience interprets differently. The aim is not a decorative score; it is a clear view of the promise, reasons to believe and frictions that shape response.",
    timing: "It is appropriate when concepts are developed enough to evaluate but can still change. It may be used before prototypes, when comparing innovation territories, during packaging development or before producing a campaign.",
    design: "We align the action that follows the result and standardize stimuli so comparisons are fair. Monadic exposure reduces contamination; a sequential design can support diagnosis when order is controlled.",
    analysis: "In-depth interviews can refine language and uncover objections. Quantitative testing then estimates levels and differences. MaxDiff may rank benefits or messages, while conjoint analysis is useful when acceptance depends on combinations of attributes, formats and price.",
    outputs: ["concept scorecard", "promise and support diagnosis", "comparison of alternatives", "revision guidance", "criteria for the next stage"],
    duration: "A focused quantitative concept test usually takes four to six weeks. A qualitative-to-quantitative sequence may require six to nine weeks.",
    yes: ["Comparable concepts exist and can still change.", "Audience and usage context are defined.", "Selection or revision criteria are clear.", "Stimuli accurately represent development stage."],
    no: ["Only a vague sentence exists.", "Launch plans no longer allow revisions.", "Exact sales are expected from stated intent.", "Alternatives have incomparable levels of finish."],
    faqs: [
      { question: "How many concepts can be tested?", answer: "It depends on design and length. We protect a realistic respondent experience to limit fatigue and contamination." },
      { question: "Does a concept test predict sales?", answer: "Not by itself. It reduces uncertainty about response; sales also depend on price, distribution, execution and competition." },
      { question: "Should research start qualitative or quantitative?", answer: "Start qualitative when language or diagnosis is unclear, and quantitative when standardized alternatives need estimation." },
      { question: "Can price be included?", answer: "Yes. It may be part of a direct evaluation, conjoint exercise or dedicated price-sensitivity study depending on the question." },
    ],
  }),
  buildEnglishService({
    path: "/en/services/market-research-mexico",
    navTitle: "Market research in Mexico",
    title: "Market research in Mexico for entry and growth",
    description: "Market research for international brands assessing demand, competitors, audiences, pricing and entry conditions in Mexico.",
    definition: "A market research study in Mexico combines evidence on demand, consumers, competition, channels, pricing and barriers to assess market entry or growth. It turns a broad opportunity into measurable assumptions and scenarios that can be tested before significant investment.",
    purpose: "It helps size category attractiveness, identify segments and occasions, understand how people buy, recognize substitutes and reveal local conditions that an international desk review can miss. The result supports audience priorities, value proposition, route to market and remaining validation needs.",
    timing: "It is used before entering Mexico, launching a category, expanding distribution, adapting a regional offer or investigating performance below plan. It can also establish a baseline when internal data explains sales but not the available market.",
    design: "We combine secondary sources and primary research in one market framework. Observed size, estimates and assumptions are separated, and category and geographic definitions are fixed before sources are compared.",
    analysis: "A U&A study can quantify awareness, usage, frequency, occasions and brand repertoire. CAWI, CATI and online panels are selected for coverage and incidence. Ethnography and in-depth interviews add cultural context; expert interviews may clarify channels, regulation and competition.",
    outputs: ["market and competitor map", "demand profiles", "barriers and triggers", "entry scenarios", "validation priorities"],
    duration: "A focused diagnosis usually takes six to eight weeks. A multi-method programme across several cities or countries may require eight to twelve weeks.",
    yes: ["A category, audience and geography hypothesis exists.", "Investment depends on local demand and barriers.", "Internal, secondary and primary evidence can be combined.", "The team can work with transparent scenarios."],
    no: ["Only a quick number is wanted without defining the market.", "The question is solely legal, tax or regulatory.", "The target population cannot be reached credibly.", "Absolute certainty about future sales is expected."],
    faqs: [
      { question: "Can the study include market sizing?", answer: "Yes. We define units, sources and assumptions and use ranges when a precise point estimate is not defensible." },
      { question: "Can Mexico be treated as one market?", answer: "It depends on the category. Region, city, channel and income may change access and behaviour and should inform the design." },
      { question: "Do you work with companies not yet operating in Mexico?", answer: "Yes. Research can prioritize entry, adaptation and validation hypotheses before launch." },
      { question: "Which sources do you use?", answer: "Public and sector sources, client data and primary research. Each figure retains its source, date and limitations." },
    ],
  }),
  buildEnglishService({
    path: "/en/services/pricing-and-price-sensitivity",
    navTitle: "Pricing and price sensitivity",
    title: "Pricing and price sensitivity research",
    description: "Pricing research to estimate acceptable ranges, attribute trade-offs and segment response before changing a commercial proposition.",
    definition: "Pricing research measures how perception or preference changes across prices and which range is consistent with the value proposition. It can estimate stated sensitivity, thresholds, trade-offs between attributes and differences between consumer segments.",
    purpose: "It helps explore a launch price, revise portfolio architecture, compare bundles or establish whether a barrier is economic or reflects weak perceived value. It does not set price automatically: evidence must be combined with cost, margin, channel, competition and strategy.",
    timing: "It is used when the offer is concrete and realistic prices or configurations can be tested. It is especially useful before launch, when redesigning packages, during inflationary pressure or when sales objections need to be separated from product or communications issues.",
    design: "Method follows the commercial question. Van Westendorp explores perception thresholds with four questions; Gabor-Granger estimates stated intent at different levels; conjoint analysis models trade-offs among price, brand, attributes and bundles.",
    analysis: "We review purchase context and competitive range before fieldwork. An online panel supports quotas and randomization; in-depth interviews reveal reference points and vocabulary. Segment response is estimated only with adequate bases, and stated intent is not misrepresented as a causal demand curve.",
    outputs: ["price ranges and thresholds", "segment response", "attribute trade-offs", "portfolio scenarios", "commercial assumptions and risks"],
    duration: "A focused sensitivity study usually takes four to six weeks. Conjoint work with product design and a simulator may require seven to ten weeks.",
    yes: ["Offer, unit and purchase channel are defined.", "A realistic price range can be tested.", "Pricing will be combined with cost and strategy.", "Sample supports priority comparisons."],
    no: ["The proposition is unclear or changes weekly.", "Exact future sales are expected.", "The tested range could not be implemented.", "Stated willingness is treated as observed behaviour."],
    faqs: [
      { question: "Which pricing method should we use?", answer: "It depends on whether the need is thresholds, response to levels or trade-offs between configurations." },
      { question: "What does Van Westendorp provide?", answer: "A range of stated price perceptions from four thresholds. It does not replace demand modelling or financial analysis." },
      { question: "Can conjoint help design bundles?", answer: "Yes, when attributes and levels describe credible choices. It estimates relative preference and supports scenario simulation." },
      { question: "Can price sensitivity be compared by segment?", answer: "Yes, when sample size and incidence support those estimates. Small bases are reported as exploratory." },
    ],
  }),
];

export const englishCases: CaseStudy[] = [
  ["/en/case-studies/tajin-international-opportunity", "Tajín", "Validating an international opportunity for Tajín", "800 consumers · 4 markets", "Research to compare a growth opportunity across four international markets."],
  ["/en/case-studies/fedex-regional-brand-tracking", "FedEx", "Regional brand tracking for FedEx", "Regional brand tracking", "Consistent monitoring of visibility, consideration and brand performance across markets."],
  ["/en/case-studies/takis-consumption-culture", "Takis", "Consumption culture and communications for Takis", "Qualitative research", "Qualitative exploration of behaviours, language and communications opportunities."],
  ["/en/case-studies/sharkninja-reach-activation", "SharkNinja", "Insights applied to a SharkNinja activation", "131.3M views", "Applying audience insight to a high-reach communications activation."],
  ["/en/case-studies/bitso-conversion-optimization", "Bitso", "Segmentation and conversion optimization for Bitso", "+400% conversion", "Measurement and value-proposition optimization for a fintech commercial outcome."],
].map(([path, brand, title, result, summary]) => ({
  kind: "case" as const,
  path,
  brand,
  title,
  result,
  summary,
  role: "TODO_REAL_DATA: founding team member role in this project.",
  sections: [
    { heading: "Challenge", paragraphs: [summary] },
    { heading: "Approach", paragraphs: ["The work used a structured research and analysis approach suited to the audience, markets and available evidence. Confidential stimuli and client information are not published."] },
    { heading: "Outcome", paragraphs: [`Reported result: ${result}. Source, period, base and attribution details must be documented before this case is expanded.`] },
  ],
}));

export const englishMethodology = {
  path: "/en/methodology",
  title: "Market research methodology for Mexico and Latin America",
  description: "How GS Insights designs qualitative and quantitative studies, controls quality and turns evidence into recommendations.",
  answerFirst: [
    "Our methodology starts with the business question, defines what evidence could change the project and selects techniques only then. A study may combine desk research, in-depth interviews, ethnography, CAWI, CATI, online panels, U&A, MaxDiff, conjoint analysis or Van Westendorp when appropriate.",
    "Every design states the population, sample size, incidence, quotas, controls, analysis plan and limitations. The same senior team remains involved from brief to final readout.",
  ],
  sections: [
    { heading: "1. Frame the question", paragraphs: ["We align the action that will follow, hypotheses, audiences and required confidence. This prevents a questionnaire from substituting for reasoning."] },
    { heading: "2. Design the evidence", paragraphs: ["We select method, sample and stimuli for the intended use. Assumptions, margin of error where applicable and comparability conditions are documented."] },
    { heading: "3. Control fieldwork", paragraphs: ["We pilot, monitor incidence, quotas and quality, and record deviations. Qualitative work includes recruitment, guide and analytical traceability checks."] },
    { heading: "4. Analyse and recommend", paragraphs: ["Facts, interpretation and implications remain distinct. Recommendations show their evidence, remaining uncertainty and a proportionate next step."] },
  ] satisfies ContentSection[],
};

export const englishFaqs: FaqItem[] = [
  { question: "What does a market research consultancy do?", answer: "It designs and conducts studies to reduce uncertainty about markets, consumers, brands, products, communications and pricing, linking evidence to a concrete action." },
  { question: "Do you cover all of Mexico?", answer: "Yes. Exact coverage depends on population, method and recruitment feasibility. National samples use explicit geographic and demographic quotas." },
  { question: "Do you conduct research across Latin America?", answer: "Yes. We preserve a comparable core and adapt language, stimuli, sample and interpretation for each country." },
  { question: "How long does a study take?", answer: "A focused project may take four to six weeks; segmentation, multi-method programmes and regional tracking require longer. Timing is confirmed with scope." },
  { question: "What do you need to prepare a proposal?", answer: "The business question, target population, markets, project stage, methods under consideration and intended use of findings." },
];

export const englishStaticPaths = [
  "/en/",
  ...englishServices.map((page) => page.path),
  "/en/methodology",
  "/en/case-studies",
  ...englishCases.map((page) => page.path),
  "/en/about",
  "/en/contact",
  "/en/frequently-asked-questions",
  "/en/resources",
];
