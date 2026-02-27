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
        className="relative mx-auto max-w-5xl"
      >
        {/* Multi-layer glow behind the image */}
        <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-[60px]" />
        <div className="absolute -inset-2 rounded-2xl bg-primary/3 blur-[30px]" />

        {/* Clickable image container */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.08] shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-[0_8px_40px_-8px]"
        >
          {/* Gradient overlay on top edge — gives depth */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/[0.03] to-transparent" />

          {/* Subtle reflection line at top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* The image itself */}
          <div className="transition-transform duration-500 group-hover:scale-[1.02]">
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
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
            <div className="flex size-12 items-center justify-center rounded-full bg-white/0 text-white/0 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/80">
              <Expand className="size-5" />
            </div>
          </div>

          {/* Bottom gradient fade — anchors the image */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {caption ? (
          <p className="mt-4 text-center text-sm text-muted-foreground/50">
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
