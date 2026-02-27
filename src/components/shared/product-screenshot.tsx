"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Expand } from "lucide-react";

import { Lightbox } from "./lightbox";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function ProductScreenshot({
  src,
  alt,
  caption,
  priority = false,
}: ProductScreenshotProps): React.ReactNode {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="group/frame relative mx-auto max-w-5xl"
      >
        {/* === BACKDROP LAYERS === */}

        {/* Outer glow — large coral bloom */}
        <div className="absolute -inset-8 rounded-3xl bg-primary/8 blur-[80px] transition-all duration-700 group-hover/frame:bg-primary/12 group-hover/frame:blur-[100px]" />

        {/* Mid glow — tighter, warmer */}
        <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-[40px]" />

        {/* Dot pattern texture behind the image */}
        <div
          className="absolute -inset-6 rounded-2xl opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(223, 127, 105, 0.15) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* === ANIMATED GRADIENT BORDER === */}
        <div className="relative rounded-xl p-px">
          {/* The gradient border — animates on hover */}
          <div
            className="absolute inset-0 rounded-xl opacity-40 transition-opacity duration-500 group-hover/frame:opacity-80"
            style={{
              background:
                "linear-gradient(135deg, rgba(223,127,105,0.4) 0%, rgba(223,127,105,0.05) 30%, rgba(223,127,105,0.05) 70%, rgba(223,127,105,0.3) 100%)",
            }}
          />

          {/* === IMAGE CONTAINER === */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="relative cursor-pointer overflow-hidden rounded-xl bg-[#0d1117] shadow-2xl shadow-black/50 transition-all duration-500 group-hover/frame:[transform:perspective(1200px)_rotateX(1deg)] group-hover/frame:shadow-[0_20px_60px_-10px_rgba(223,127,105,0.15)]"
          >
            {/* Top reflection — luminous edge like glass */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-px z-10 h-12 bg-gradient-to-b from-white/[0.04] to-transparent" />

            {/* Left edge highlight */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

            {/* The image */}
            <div className="transition-transform duration-700 ease-out group-hover/frame:scale-[1.015]">
              <Image
                src={src}
                alt={alt}
                width={1440}
                height={900}
                className="w-full"
                priority={priority}
              />
            </div>

            {/* Hover overlay with expand icon */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/frame:bg-black/15">
              <div className="flex size-12 items-center justify-center rounded-full border border-white/0 bg-white/0 text-white/0 backdrop-blur-none transition-all duration-300 group-hover/frame:border-white/10 group-hover/frame:bg-white/10 group-hover/frame:text-white/80 group-hover/frame:backdrop-blur-sm">
                <Expand className="size-5" />
              </div>
            </div>

            {/* Bottom gradient — anchors the image to the page */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>

        {caption ? (
          <p className="mt-5 text-center text-sm text-muted-foreground/50">
            {caption}
          </p>
        ) : null}
      </motion.div>

      {/* Lightbox modal */}
      <Lightbox
        src={src}
        alt={alt}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
