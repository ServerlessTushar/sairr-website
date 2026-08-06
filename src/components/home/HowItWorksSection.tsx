"use client";

import { MessageCircle, Search, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Tell us about your traveller",
    description:
      "Share who you're planning for, their preferences, and any special needs.",
  },
  {
    icon: Search,
    step: "02",
    title: "We craft the perfect plan",
    description:
      "Our team designs a comfortable itinerary with verified stays and pacing.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "They travel, you relax",
    description:
      "A dedicated coordinator handles everything on-ground. You stay informed.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="From enquiry to unforgettable"
            description="Three simple steps to gift a journey your loved ones will talk about for years."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={staggerItem}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <item.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
