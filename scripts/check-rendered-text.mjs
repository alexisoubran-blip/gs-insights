import { readFile } from "node:fs/promises";

const target = process.argv[2] ?? "http://localhost:3000";

const expectedOnce = [
  "Investigación de mercados para marcas que operan en México y LATAM.",
  "Investigación de mercados para reducir riesgos antes de invertir.",
  "Sin equipos junior: el mismo investigador que diseña el estudio te presenta la recomendación.",
  "Experiencia senior. Trato directo.",
  "El mismo equipo define el estudio, supervisa la investigación, analiza los resultados y presenta la recomendación.",
  "Hacemos la investigación.",
  "Agenda 30 minutos para revisar tu reto de investigación.",
  "Experiencia aplicada a retos reales.",
  "Segmentación, brand health, test de concepto y pricing.",
  "Lo que necesitas saber",
  "Antes de invertir, comprueba qué está viendo el mercado.",
];

function decodeEntities(value) {
  const named = new Map([
    ["amp", "&"],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["nbsp", " "],
    ["quot", '"'],
  ]);

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, token) => {
    if (token.startsWith("#x")) {
      return String.fromCodePoint(Number.parseInt(token.slice(2), 16));
    }
    if (token.startsWith("#")) {
      return String.fromCodePoint(Number.parseInt(token.slice(1), 10));
    }
    return named.get(token.toLowerCase()) ?? entity;
  });
}

function extractBodyText(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;

  return decodeEntities(
    body
      .replace(/<(script|style|template|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<!--([\s\S]*?)-->/g, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function countOccurrences(text, phrase) {
  let count = 0;
  let cursor = 0;

  while ((cursor = text.indexOf(phrase, cursor)) !== -1) {
    count += 1;
    cursor += phrase.length;
  }

  return count;
}

const html = target.startsWith("http://") || target.startsWith("https://")
  ? await fetch(target).then((response) => {
      if (!response.ok) {
        throw new Error(`GET ${target} returned ${response.status}`);
      }
      return response.text();
    })
  : await readFile(target, "utf8");

const text = extractBodyText(html);
const results = expectedOnce.map((phrase) => ({
  phrase,
  count: countOccurrences(text, phrase),
}));

for (const result of results) {
  console.log(`${result.count}x ${result.phrase}`);
}

const failures = results.filter(({ count }) => count !== 1);
if (failures.length > 0) {
  console.error(`\n${failures.length} text extraction assertion(s) failed.`);
  process.exitCode = 1;
} else {
  console.log("\nAll tracked text appears exactly once.");
}
