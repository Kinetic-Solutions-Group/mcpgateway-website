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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="md:w-1/2">{children}</div>
    </motion.div>
  );
}
