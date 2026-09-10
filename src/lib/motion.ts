import type { Transition, Variants } from "framer-motion";

/** Smooth travel-site easing — soft deceleration */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const heroLine: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOut },
  },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, delay: 0.35, ease: easeOut },
  },
};

export const cardHover = {
  y: -8,
  transition: springSnappy,
};

export const imageHover = {
  scale: 1.06,
  transition: { duration: 0.6, ease: easeOut },
};

export type CardRevealDirection = "bottom" | "left" | "right";

const cardRevealOffsets: Record<
  CardRevealDirection,
  { x?: number; y?: number }
> = {
  bottom: { y: 64 },
  left: { x: -64 },
  right: { x: 64 },
};

export function cardRevealVariant(
  direction: CardRevealDirection = "bottom",
): Variants {
  const offset = cardRevealOffsets[direction];

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };
}

/** Desktop grid: alternate columns; single column: rise from bottom */
export function gridCardDirection(
  index: number,
  columns = 2,
): CardRevealDirection {
  if (columns <= 1) return "bottom";
  return index % columns === 0 ? "left" : "right";
}
