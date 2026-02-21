import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>): React.ReactNode {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Hexagonal gateway shape */}
      <path
        d="M16 2L28.66 9.5V24.5L16 30L3.34 24.5V9.5L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner connecting nodes — representing MCP server connections */}
      <circle cx="16" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="20" r="2" fill="currentColor" />
      <circle cx="22" cy="20" r="2" fill="currentColor" />
      {/* Connection lines */}
      <path
        d="M16 10L10 20M16 10L22 20M10 20H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
