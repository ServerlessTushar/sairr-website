"use client";

import { useEffect, useState, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  cardHover,
  cardRevealVariant,
  easeOut,
  gridCardDirection,
  staggerContainer,
  type CardRevealDirection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type CardRevealGridProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function CardRevealGrid({
  children,
  className,
  stagger = 0.18,
  delay = 0.06,
}: CardRevealGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduceMotion ? undefined : staggerContainer(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

type CardRevealGridItemProps = {
  children: ReactNode;
  className?: string;
  direction?: CardRevealDirection;
  hover?: boolean;
  as?: "div" | "article";
};

export function CardRevealGridItem({
  children,
  className,
  direction = "bottom",
  hover = true,
  as = "div",
}: CardRevealGridItemProps) {
  const Component = motion[as] as ElementType;

  return (
    <Component
      variants={cardRevealVariant(direction)}
      whileHover={hover ? cardHover : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}

type CardRevealCarouselItemProps = {
  children: ReactNode;
  className?: string;
  index: number;
  direction?: CardRevealDirection;
  hover?: boolean;
  stagger?: number;
};

export function CardRevealCarouselItem({
  children,
  className,
  index,
  direction = "left",
  hover = true,
  stagger = 0.14,
}: CardRevealCarouselItemProps) {
  const reduceMotion = useReducedMotion();
  const hidden = cardRevealVariant(direction).hidden as {
    opacity: number;
    x?: number;
    y?: number;
  };

  return (
    <motion.div
      className={cn("h-full", className)}
      initial={reduceMotion ? false : hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : index * stagger,
        ease: easeOut,
      }}
      whileHover={hover && !reduceMotion ? cardHover : undefined}
    >
      {children}
    </motion.div>
  );
}

/** Returns bottom on mobile, alternating left/right on lg+ grids */
export function useGridCardDirection(
  index: number,
  desktopColumns = 2,
): CardRevealDirection {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setColumns(mq.matches ? desktopColumns : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [desktopColumns]);

  return gridCardDirection(index, columns);
}

export function GridCardRevealItem({
  index,
  desktopColumns = 2,
  ...props
}: Omit<CardRevealGridItemProps, "direction"> & {
  index: number;
  desktopColumns?: number;
}) {
  const direction = useGridCardDirection(index, desktopColumns);
  return <CardRevealGridItem direction={direction} {...props} />;
}
