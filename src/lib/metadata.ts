import type { Metadata } from "next";

const siteUrl = "https://mcpgateway.com";

export const siteConfig = {
  name: "MCP Gateway",
  description:
    "Enterprise platform for hosting, managing, and securing MCP servers. Auto-create servers from docs, build Agent Skills, and deploy with confidence.",
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
  links: {
    github: "https://github.com/Kinetic-Solutions-Group/mcpgateway",
    docs: `${siteUrl}/docs`,
  },
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "MCP",
    "Model Context Protocol",
    "MCP Gateway",
    "MCP Server",
    "AI Agents",
    "Agent Skills",
    "Enterprise AI",
    "LLM Tools",
  ],
  authors: [{ name: "Kinetic Solutions Group" }],
  creator: "Kinetic Solutions Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
