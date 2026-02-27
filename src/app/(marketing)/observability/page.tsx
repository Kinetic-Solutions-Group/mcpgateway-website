import type { Metadata } from "next";
import { ObservabilityContent } from "./observability-content";

export const metadata: Metadata = {
  title: "Observability",
  description:
    "Monitor every tool call, trace every request, and track token usage. OpenTelemetry distributed tracing, Prometheus metrics, and a full audit trail with secret masking.",
};

export default function ObservabilityPage(): React.ReactNode {
  return <ObservabilityContent />;
}
