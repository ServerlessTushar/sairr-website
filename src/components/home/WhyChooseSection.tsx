"use client";

import Link from "next/link";
import { Heart, Shield, Users } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Built with care",
    description:
      "Every itinerary is designed around comfort, pace, and the unique needs of your traveller.",
  },
  {
    icon: Shield,
    title: "Safety first",
    description:
      "Verified stays, 24/7 on-ground support, and medical-aware planning you can trust.",
  },
  {
    icon: Users,
    title: "Family peace of mind",
    description:
      "Stay connected throughout the journey. We keep families informed every step of the way.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Sairr"
            title="Travel that feels as good as it looks"
            description="We go beyond bookings to curate experiences your loved ones will cherish — and you'll feel confident about."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10 text-center" delay={0.2}>
          <Link
            href="/why-sairr"
            className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            Learn how Sairr works →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
