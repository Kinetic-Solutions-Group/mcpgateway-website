import { Zap } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Syntax-highlighted JSON for mini-terminals                         */
/* ------------------------------------------------------------------ */

export function JsonLine({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return <div className={`whitespace-pre ${className}`}>{children}</div>;
}

/** Coral JSON key */
export function K({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <span className="text-primary">{children}</span>;
}

/** Green JSON string */
export function S({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <span className="text-[#7ee787]">{children}</span>;
}

/** Blue JSON number */
export function N({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <span className="text-[#79c0ff]">{children}</span>;
}

/** Dim/muted punctuation */
export function D({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <span className="text-white/30">{children}</span>;
}

/** Medium muted text */
export function M({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <span className="text-white/50">{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Mini-terminal component                                            */
/* ------------------------------------------------------------------ */

export function MiniTerminal({
  method,
  path,
  children,
  footer,
}: {
  method: string;
  path: string;
  children: React.ReactNode;
  footer?: string;
}): React.ReactNode {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0d1117]">
      {/* Chrome bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-[#ff5f57]" />
          <div className="size-2 rounded-full bg-[#febc2e]" />
          <div className="size-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#28c840]/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#28c840]">
            {method}
          </span>
          <span className="text-[11px] text-white/40">{path}</span>
        </div>
        <div className="w-[40px]" />
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-[11px] leading-[1.7]">{children}</div>

      {/* Footer stat line */}
      {footer ? (
        <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-2">
          <Zap className="size-3 text-primary/60" />
          <span className="text-[10px] text-white/30">{footer}</span>
        </div>
      ) : null}
    </div>
  );
}
