import { renderLlmsSummary } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderLlmsSummary(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
