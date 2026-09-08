"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const CORAL = "#EC575E";

function HeroUnderline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 280 10"
      fill="none"
      className="absolute -bottom-1 left-1/2 h-2.5 w-[110%] max-w-none -translate-x-1/2"
      preserveAspectRatio="none"
    >
      <path
        d="M2 7.5C40 4.5 80 4 140 5.5C200 6.5 240 7 278 6.5"
        stroke={CORAL}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M4 8.5C42 5.5 82 5 142 6.5C202 7.5 242 8 276 7.5"
        stroke={CORAL}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative min-h-[min(calc(100dvh-5rem),52rem)] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
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
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="relative mx-auto flex min-h-[min(calc(100dvh-5rem),52rem)] max-w-4xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div>
          <div className="relative inline-block pb-1">
            <p className="text-sm font-medium text-white sm:text-base">
              Travel after 50, designed differently
            </p>
            <HeroUnderline />
          </div>

          <h1 className="mt-8 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            You show up.
            <br />
            We handle the rest.
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/experiences"
              className="inline-flex h-12 min-w-[12rem] items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: CORAL }}
            >
              Explore Experiences
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 min-w-[12rem] items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
            >
              Talk To Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
