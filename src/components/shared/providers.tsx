"use client";

import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  // ThemeProvider removed — Fumadocs RootProvider (in src/app/layout.tsx) owns theming.
  // Add other client-side providers here (e.g., React Query) if needed.
  return <>{children}</>;
}
