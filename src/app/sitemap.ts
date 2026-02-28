import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const siteUrl = "https://mcpgateway.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const marketingPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/mcp-servers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sandboxes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const docsPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...marketingPages, ...docsPages];
}
