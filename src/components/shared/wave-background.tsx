"use client";

import { motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Option A: Animated SVG Waves (zero new dependencies)               */
/*  Layered wave paths that slowly undulate in coral/navy tones        */
/* ------------------------------------------------------------------ */

function WavePath({
  d1,
  d2,
  duration,
  delay,
  opacity,
  color,
}: {
  d1: string;
  d2: string;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}): React.ReactNode {
  return (
    <motion.path
      d={d1}
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeOpacity={opacity}
      animate={{
        d: [d1, d2, d1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function WaveBackground(): React.ReactNode {
  // Wave paths — each pair is the start and end state of the morph
  const waves = [
    {
      d1: "M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400 C1400,350 1600,450 1800,400",
      d2: "M0,400 C200,450 400,350 600,400 C800,450 1000,350 1200,400 C1400,450 1600,350 1800,400",
      duration: 8,
      delay: 0,
      opacity: 0.25,
      color: "oklch(0.72 0.15 40)",
    },
    {
      d1: "M0,350 C250,300 450,400 700,350 C950,300 1100,400 1350,350 C1550,300 1700,400 1800,350",
      d2: "M0,350 C250,400 450,300 700,350 C950,400 1100,300 1350,350 C1550,400 1700,300 1800,350",
      duration: 10,
      delay: 0.5,
      opacity: 0.2,
      color: "oklch(0.72 0.15 40)",
    },
    {
      d1: "M0,450 C300,400 500,500 750,450 C1000,400 1200,500 1450,450 C1650,400 1750,500 1800,450",
      d2: "M0,450 C300,500 500,400 750,450 C1000,500 1200,400 1450,450 C1650,500 1750,400 1800,450",
      duration: 12,
      delay: 1,
      opacity: 0.18,
      color: "oklch(0.72 0.15 40)",
    },
    {
      d1: "M0,300 C180,260 380,340 580,300 C780,260 980,340 1180,300 C1380,260 1580,340 1800,300",
      d2: "M0,300 C180,340 380,260 580,300 C780,340 980,260 1180,300 C1380,340 1580,260 1800,300",
      duration: 9,
      delay: 1.5,
      opacity: 0.12,
      color: "oklch(0.65 0.02 90)",
    },
    {
      d1: "M0,500 C220,460 420,540 620,500 C820,460 1020,540 1220,500 C1420,460 1620,540 1800,500",
      d2: "M0,500 C220,540 420,460 620,500 C820,540 1020,460 1220,500 C1420,540 1620,460 1800,500",
      duration: 11,
      delay: 2,
      opacity: 0.12,
      color: "oklch(0.65 0.02 90)",
    },
    {
      d1: "M0,250 C250,220 500,280 750,250 C1000,220 1250,280 1500,250 C1650,220 1750,280 1800,250",
      d2: "M0,250 C250,280 500,220 750,250 C1000,280 1250,220 1500,250 C1650,280 1750,220 1800,250",
      duration: 14,
      delay: 0.3,
      opacity: 0.08,
      color: "oklch(0.72 0.15 40)",
    },
    {
      d1: "M0,550 C200,520 450,580 700,550 C950,520 1150,580 1400,550 C1600,520 1750,580 1800,550",
      d2: "M0,550 C200,580 450,520 700,550 C950,580 1150,520 1400,550 C1600,580 1750,520 1800,550",
      duration: 13,
      delay: 0.8,
      opacity: 0.08,
      color: "oklch(0.65 0.02 90)",
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Coral accent glow */}
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      {/* Animated waves */}
      <svg
        viewBox="0 0 1800 800"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {waves.map((wave, i) => (
          <WavePath key={i} {...wave} />
        ))}
      </svg>

      {/* Radial fade to background at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_70%)]" />
    </div>
  );
}
