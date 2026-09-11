"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import bannerUnderlineImg from "@/public/homepage/banner-underline.png";
import {
  drawLine,
  fadeDown,
  heroLine,
  staggerContainer,
} from "@/lib/motion";

const CORAL = "#EC575E";

function HeroUnderline() {
  return (
    <motion.div
      variants={drawLine}
      className="pointer-events-none absolute -bottom-0.5 left-0 h-auto w-full origin-left"
    >
      <Image
        src={bannerUnderlineImg}
        alt=""
        width={231}
        height={8}
        aria-hidden
        className="h-auto w-full"
      />
    </motion.div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.12],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 80],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduceMotion ? [1, 1] : [1, 0],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      // Autoplay may be blocked; poster/overlay still shows the hero.
    });
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <motion.div className="h-full w-full" style={{ scale: videoScale }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/homepage/banner-gif.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-dvh max-w-4xl items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer(0.14, 0.2)}
        >
          <motion.div variants={fadeDown} className="inline-block">
            <p className="text-sm font-medium text-white sm:text-base md:text-[29.18px]">
              Travel after 50,{" "}
              <span className="relative inline-block pb-1">
                designed differently
                <HeroUnderline />
              </span>
            </p>
          </motion.div>

          <motion.h1
            variants={heroLine}
            className="mt-8 font-heading text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="block font-normal">You show up.</span>
            <span className="block font-bold">We handle the rest.</span>
          </motion.h1>

          <motion.div
            variants={heroLine}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/experiences"
                className="inline-flex h-12 min-w-[12rem] items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: CORAL }}
              >
                Explore Experiences
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex h-12 min-w-[12rem] items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
              >
                Talk To Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
