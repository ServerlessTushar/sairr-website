"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { cn } from "@/lib/utils";

type AnimatedSectionHeaderProps = {
  heading: string;
  description?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  className?: string;
  headingAs?: "h1" | "h2" | "h3";
  align?: "center" | "left";
};

export function AnimatedSectionHeader({
  heading,
  description,
  headingClassName,
  descriptionClassName,
  className,
  headingAs = "h2",
  align = "center",
}: AnimatedSectionHeaderProps) {
  const Tag = headingAs;

  return (
    <FadeIn className={className}>
      <div className={cn(align === "center" && "text-center")}>
        {align === "left" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Tag className={headingClassName}>{heading}</Tag>
          </motion.div>
        ) : (
          <TextReveal
            as={headingAs}
            text={heading}
            className={headingClassName}
          />
        )}
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className={cn(
              "mt-4 text-base leading-relaxed text-slate",
              align === "center" && "mx-auto max-w-2xl",
              descriptionClassName,
            )}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </FadeIn>
  );
}
