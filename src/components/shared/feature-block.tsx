"use client";

import { motion } from "motion/react";

interface FeatureBlockProps {
  heading: string;
  description: string;
  children: React.ReactNode;
  reversed?: boolean;
  index?: number;
}

export function FeatureBlock({
  heading,
  description,
  children,
  reversed = false,
  index = 0,
}: FeatureBlockProps): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Text side */}
      <div className="md:w-[45%]">
        <motion.div
          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">{heading}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Visual side */}
      <motion.div
        className="md:w-[55%]"
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
