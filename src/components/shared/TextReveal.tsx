"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut, staggerContainer } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "word" | "line";
};

export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  splitBy = "word",
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const parts =
    splitBy === "line"
      ? text.split("\n")
      : text.split(" ").filter(Boolean);

  const isLine = splitBy === "line";

  return (
    <Tag className={className}>
      <motion.span
        className={isLine ? "block" : "inline"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(isLine ? 0.14 : 0.06, delay)}
        aria-label={text}
      >
        {parts.map((part, i) => (
          <motion.span
            key={`${part}-${i}`}
            className={cn(
              "overflow-hidden",
              isLine ? "block" : "inline-block",
            )}
            variants={{
              hidden: { opacity: 0, y: "110%" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: easeOut },
              },
            }}
          >
            <span className={isLine ? "block" : "inline-block"}>
              {part}
              {!isLine && i < parts.length - 1 ? "\u00A0" : ""}
            </span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
