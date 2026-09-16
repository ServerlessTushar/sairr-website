"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { whatsappHref } from "@/data/site";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import whatsappIcon from "@/public/homepage/whatsapp.png";
import bgImgDesktop from "@/public/homepage/homepage-bottom.webp";
import bgImgMobile from "@/public/homepage/homepage-bottom-sec-mob.webp";
import { scaleIn, springSnappy, staggerContainer } from "@/lib/motion";

const TEAL = "#0E5E6F";
const CORAL = "#EC575E";
const GRAY_BTN = "#E8E8E8";

export function CtaSection() {
  const { openContactForm } = useContactFormDialog();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={bgImgMobile}
          alt=""
          fill
          className="object-cover md:hidden"
          sizes="100vw"
        />
        <Image
          src={bgImgDesktop}
          alt=""
          fill
          className="hidden object-cover md:block"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleIn}
            className="mx-auto max-w-2xl rounded-[17px] border border-white/50 bg-white/65 px-8 py-8 text-center shadow-[0_8px_40px_rgba(27,29,31,0.12)] backdrop-blur-md sm:px-12 sm:py-9 lg:px-14"
          >
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={scaleIn}
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: TEAL }}
              >
                Start a conversation
              </motion.p>

              <TextReveal
                as="h2"
                text="Where have you been meaning to go?"
                className="mt-3 font-heading text-2xl font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-[2rem] md:text-3xl"
                delay={0.1}
              />

              <motion.p
                variants={scaleIn}
                className="mt-3 text-sm leading-snug text-[#6B7075] md:text-base"
              >
                Tell us, even if you&apos;re not sure yet. We&apos;ll make it
                happen for you
              </motion.p>

              <motion.div
                variants={scaleIn}
                className="mt-6 flex flex-col items-stretch justify-center gap-3 md:gap-5 sm:flex-row sm:items-center sm:justify-center"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <button
                    type="button"
                    onClick={() => openContactForm()}
                    className="bg-[#FF4859] hover:bg-[#E63B4C] hover:scale-104 tab:hover-0.98 cursor-pointer inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Get a Callback
                  </button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <Link
                    href={whatsappHref("Hi Sairr — I'd like to talk about a journey.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 opacity-70 inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm border border-gray-300 font-semibold text-charcoal transition-opacity hover:opacity-90"
                  >
                    <Image
                      src={whatsappIcon}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[22px] shrink-0"
                    />
                    WhatsApp us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
