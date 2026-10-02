"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import bannerUnderlineImg from "@/public/homepage/banner-underline.png";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import {
  drawLine,
  fadeDown,
  heroLine,
  staggerContainer,
} from "@/lib/motion";

const CORAL = "#EC575E";

function HeroUnderline() {
  return (
    <motion.span
      variants={drawLine}
      className="pointer-events-none absolute -bottom-0.5 left-0 block h-auto w-full origin-left"
    >
      <Image
        src={bannerUnderlineImg}
        alt=""
        width={231}
        height={8}
        aria-hidden
        className="h-auto w-full"
      />
    </motion.span>
  );
}

export function HeroSection() {
  const { openContactForm } = useContactFormDialog();
  const reduceMotion = useReducedMotion();
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [enableParallax, setEnableParallax] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || !enableParallax ? [1, 1] : [1, 1.12],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || !enableParallax ? [0, 0] : [0, 80],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduceMotion ? [1, 1] : [1, 0],
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Play the correct video based on viewport, pause the other
  useEffect(() => {
    const desktop = desktopVideoRef.current;
    const mobile = mobileVideoRef.current;
    const section = sectionRef.current;

    function updateVideoFit(video: HTMLVideoElement) {
      if (!section) return;
      const width = section.clientWidth;
      const height = section.clientHeight;
      if (!width || !height) return;
      const viewportAspect = width / height;
      const videoAspect =
        video.videoWidth > 0 && video.videoHeight > 0
          ? video.videoWidth / video.videoHeight
          : 16 / 9;
      video.style.objectPosition =
        viewportAspect > videoAspect ? "50% 28%" : "50% 50%";
    }

    function setupVideo(video: HTMLVideoElement) {
      video.addEventListener("loadedmetadata", () => updateVideoFit(video));
      updateVideoFit(video);
      if (!reduceMotion) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }

    if (desktop) setupVideo(desktop);
    if (mobile) setupVideo(mobile);

    const resizeObserver = new ResizeObserver(() => {
      if (desktop) updateVideoFit(desktop);
      if (mobile) updateVideoFit(mobile);
    });
    if (section) resizeObserver.observe(section);

    return () => {
      resizeObserver.disconnect();
    };
  }, [reduceMotion]);

  return (
    <section
      id="home-hero"
      data-header-hero
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0 flex items-center justify-center origin-[50%_40%]"
          style={{ scale: videoScale }}
        >
          {/* Desktop video */}
          <video
            ref={desktopVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hidden md:block min-h-full min-w-full max-h-none max-w-none object-cover"
          >
            <source src="/homepage/Desktop_Website cover video.mp4" type="video/mp4" />
          </video>
          {/* Mobile video */}
          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block md:hidden min-h-full min-w-full max-h-none max-w-none object-cover"
          >
            <source src="/homepage/Mobile_website cover video.mp4" type="video/mp4" />
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
          <motion.div variants={fadeDown} className="mx-auto max-w-full">
            <p className="text-balance text-lg font-medium text-white sm:text-lg md:text-[29.18px]">
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
            className="mx-auto mt-10 flex w-[13rem] md:w-[16.25rem] max-w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#destinations"
                className="bg-[#FF4859] capitalize hover:bg-[#E63B4C] inline-flex h-10 md:h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 text-xs md:text-sm font-semibold text-white transition-opacity sm:w-auto sm:min-w-[12rem]"
              >
                Explore Destinations
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <button
                type="button"
                onClick={() => openContactForm({ intent: "callback" })}
                className="capitalize inline-flex h-10 md:h-12 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-white px-6 text-xs md:text-sm font-semibold text-charcoal transition-opacity hover:bg-gray-300 sm:w-auto sm:min-w-[12rem]"
              >
                Get a Callback
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#whySairr"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
        initial={reduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.6 }}
        aria-label="Scroll to destinations"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        {reduceMotion ? (
          <span className="block h-8 w-px bg-white/60" aria-hidden />
        ) : (
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
            aria-hidden
          >
            <span className="block h-8 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </motion.span>
        )}
      </motion.a>
    </section>
  );
}
