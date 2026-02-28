import { readFileSync } from "fs";
import { resolve } from "path";
import { NextResponse } from "next/server";

export function GET(): NextResponse {
  const specPath = resolve(process.cwd(), "content/openapi.json");
  const spec = readFileSync(specPath, "utf-8");

  return NextResponse.json(JSON.parse(spec) as Record<string, unknown>, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
