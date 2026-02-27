import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MCP Gateway — The Platform for Production AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage(): ImageResponse {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          display: "flex",
        }}
      />

      {/* Coral glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 300,
          borderRadius: "50%",
          background: "rgba(223, 127, 105, 0.12)",
          filter: "blur(100px)",
          display: "flex",
        }}
      />

      {/* Icon placeholder — coral gateway shape */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 20,
          border: "2px solid rgba(223, 127, 105, 0.4)",
          background: "rgba(223, 127, 105, 0.1)",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#df7f69",
            display: "flex",
          }}
        >
          ⚡
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.02em",
          textAlign: "center",
          lineHeight: 1.1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>MCP Gateway</span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 28,
          color: "#df7f69",
          marginTop: 16,
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase" as const,
          display: "flex",
        }}
      >
        The Platform for Production AI Agents
      </div>

      {/* Pill tags */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 40,
        }}
      >
        {["MCP Servers", "Agent Skills", "Sandboxes", "Observability"].map(
          (label) => (
            <div
              key={label}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                border: "1px solid rgba(223, 127, 105, 0.3)",
                background: "rgba(223, 127, 105, 0.08)",
                color: "rgba(223, 127, 105, 0.9)",
                fontSize: 16,
                fontWeight: 500,
                display: "flex",
              }}
            >
              {label}
            </div>
          ),
        )}
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: 18,
          color: "rgba(255, 255, 255, 0.4)",
          display: "flex",
        }}
      >
        mcpgateway.com
      </div>
    </div>,
    { ...size },
  );
}
