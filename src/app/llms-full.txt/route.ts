import { renderLlmsFull } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderLlmsFull(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
