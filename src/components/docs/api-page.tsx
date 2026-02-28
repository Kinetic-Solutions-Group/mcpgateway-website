import { createOpenAPI } from "fumadocs-openapi/server";
import { createAPIPage } from "fumadocs-openapi/ui";

const openapi = createOpenAPI();

export const APIPage = createAPIPage(openapi);
