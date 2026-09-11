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

  return (
    <Tag className={cn(className, splitBy === "line" && "flex flex-col")}>
      <motion.span
        className={cn(
          "inline-flex flex-wrap",
          splitBy === "line" && "flex-col items-start",
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(splitBy === "line" ? 0.14 : 0.06, delay)}
        aria-label={text}
      >
        {parts.map((part, i) => (
          <motion.span
            key={`${part}-${i}`}
            className="inline-block overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: "110%" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: easeOut },
              },
            }}
          >
            <span className="inline-block">
              {part}
              {splitBy === "word" && i < parts.length - 1 ? "\u00A0" : ""}
            </span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
