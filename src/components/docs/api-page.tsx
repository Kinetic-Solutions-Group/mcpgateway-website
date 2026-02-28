import { createOpenAPI } from "fumadocs-openapi/server";
import { createAPIPage } from "fumadocs-openapi/ui";

const openapi = createOpenAPI({
  input: ["./content/openapi.json"],
});

export const APIPage = createAPIPage(openapi);
