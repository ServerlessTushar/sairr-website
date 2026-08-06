"use client";

import {
  Clock,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StaggerContainer, staggerItem } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

const benefits: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Clock,
    title: "Pace that respects them",
    description:
      "No rushed mornings or exhausting days. We build itineraries around rest, comfort, and genuine enjoyment.",
  },
  {
    icon: ShieldCheck,
    title: "Verified at every step",
    description:
      "Hotels with elevators, accessible paths, and ground-floor rooms. Every stay is personally vetted.",
  },
  {
    icon: Stethoscope,
    title: "Medical-aware planning",
    description:
      "We account for dietary needs, medication schedules, and mobility requirements from day one.",
  },
  {
    icon: Phone,
    title: "24/7 on-ground support",
    description:
      "A dedicated coordinator travels with the group and stays reachable around the clock.",
  },
  {
    icon: Users,
    title: "Family stays connected",
    description:
      "Regular updates, shared photos, and direct communication so you're never left wondering.",
  },
  {
    icon: HeartHandshake,
    title: "Human, not transactional",
    description:
      "We listen first. Every trip is customised because every traveller is different.",
  },
];

export function WhySairrGrid() {
  return (
    <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit) => (
        <motion.div key={benefit.title} variants={staggerItem}>
          <FeatureCard {...benefit} />
        </motion.div>
      ))}
    </StaggerContainer>
  );
}
