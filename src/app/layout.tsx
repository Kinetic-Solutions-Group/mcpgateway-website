import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider/next";

import { inter, spaceGrotesk, geistMono, bebasNeue } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { Providers } from "@/components/shared/providers";

import "./globals.css";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        <RootProvider
          theme={{ defaultTheme: "dark", attribute: "class" }}
          search={{ enabled: true }}
        >
          <Providers>{children}</Providers>
        </RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
