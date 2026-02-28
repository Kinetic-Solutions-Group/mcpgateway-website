// @ts-check
import { generateFiles } from "fumadocs-openapi";
import { createOpenAPI } from "fumadocs-openapi/server";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Use relative path for spec so generated MDX references are portable across machines
const SPEC_PATH = "./content/openapi.json";
const SPEC_PATH_ABS = resolve("content/openapi.json");
const OUTPUT_DIR = resolve("content/docs/api");

async function main() {
  if (!existsSync(SPEC_PATH_ABS)) {
    console.warn(
      `WARN: OpenAPI spec not found at ${SPEC_PATH_ABS}. Skipping API docs generation.\n` +
        `To generate API docs, copy the spec from the product repo:\n` +
        `  cp ../mcpgateway/backend/docs/api/openapi.json content/openapi.json`,
    );
    return; // Soft-fail: don't block marketing deploys
  }

  // Validate it's valid JSON
  try {
    JSON.parse(readFileSync(SPEC_PATH_ABS, "utf-8"));
  } catch {
    console.warn(
      `WARN: ${SPEC_PATH_ABS} is not valid JSON. Skipping API docs generation.`,
    );
    return; // Soft-fail
  }

  console.log("Generating API documentation from OpenAPI spec...");

  const openapi = createOpenAPI({
    input: [SPEC_PATH],
  });

  await generateFiles({
    input: openapi,
    output: OUTPUT_DIR,
    per: "operation",
    groupBy: "tag",
  });

  console.log(`API docs generated in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error("Failed to generate API docs:", err);
  process.exit(1);
});
