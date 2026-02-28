import { ApiReference } from "@scalar/nextjs-api-reference";

export const GET = ApiReference({
  url: "/api/openapi.json",
  pageTitle: "MCP Gateway API Reference",
  darkMode: true,
  theme: "saturn",
  customCss: `
    .dark-mode {
      --scalar-background-1: #0f0f17;
      --scalar-background-2: #161622;
      --scalar-background-3: #1e1e2e;
      --scalar-color-1: rgba(255, 255, 255, 0.9);
      --scalar-color-2: rgba(255, 255, 255, 0.6);
      --scalar-color-3: rgba(255, 255, 255, 0.4);
      --scalar-color-accent: #e8734a;
      --scalar-border-color: rgba(255, 255, 255, 0.1);
      font-family: "Geist", system-ui, sans-serif;
    }
    .light-mode {
      --scalar-color-accent: #d4613a;
      font-family: "Geist", system-ui, sans-serif;
    }
  `,
});
