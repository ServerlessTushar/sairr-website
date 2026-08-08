"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/sairr-coming-soon.jpeg"
          alt="Sairr travellers on the Puri pilot journey"
          fill
          priority
          className="scale-105 object-cover object-[center_55%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold"
        >
          Thoughtful travel for the people you love
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Gift them the journey
          <br />
          <span className="text-gold">they deserve</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
        >
          Sairr plans every detail — pace, comfort, and care — so your parents
          and loved ones can simply enjoy the experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink
            href="/experiences"
            size="lg"
            className="bg-brand text-white hover:bg-brand-dark"
          >
            Explore Experiences
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="/contact"
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            Talk to Sairr
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
