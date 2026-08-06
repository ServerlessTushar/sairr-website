import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export function ComingSoon() {
  return (
    <div
      className="flex min-h-screen flex-col overflow-x-hidden text-charcoal"
      style={{
        background: `
          radial-gradient(ellipse at 15% 0%, rgba(232, 216, 177, 0.35), transparent 55%),
          radial-gradient(ellipse at 85% 100%, rgba(200, 168, 103, 0.12), transparent 50%),
          var(--mist)
        `,
      }}
    >
      <header className="flex items-center px-[6vw] pt-9 max-[520px]:px-[7vw] max-[520px]:pt-7">
        <div
          className={`${cormorant.className} text-[30px] font-medium tracking-[0.5px] text-primary`}
        >
          Sairr
        </div>
      </header>

      <div className="relative z-1 flex flex-1 flex-col items-center justify-center px-[6vw] py-[4vh] pb-[6vh] text-center">
        <div
          className={`${cormorant.className} mb-[30px] text-[clamp(40px,7vw,72px)] font-medium tracking-[0.5px] text-primary`}
        >
          Website Coming Soon
        </div>

        <h1
          className={`${cormorant.className} mb-[18px] max-w-[640px] text-[clamp(24px,3.4vw,34px)] leading-[1.35] font-medium text-charcoal`}
        >
          Travel that families can <em className="text-primary italic">trust</em>{" "}
          their parents with.
        </h1>

        <hr className="mb-[26px] h-0.5 w-[46px] border-0 bg-gold" />

        <p className="mb-11 max-w-[480px] text-base leading-[1.75] font-normal text-charcoal/75">
          One accountable system, from the first call to the trip back home — built
          for India&apos;s 50+ travellers, and the families arranging it from afar.
        </p>

        <div className="mb-[22px] w-full max-w-[480px] overflow-hidden rounded-[3px] shadow-[0_12px_34px_-12px_rgba(14,94,111,0.35),0_4px_10px_rgba(27,29,31,0.08)]">
          <Image
            src="/sairr-coming-soon.jpeg"
            alt="Sairr travellers on a pilot journey to Puri"
            width={960}
            height={640}
            className="block h-auto w-full"
            priority
          />
        </div>

        <p
          className={`${cormorant.className} mb-2.5 text-[22px] font-medium text-primary italic`}
        >
          We&apos;re already on the ground.
        </p>

        <p className="mb-10 max-w-[460px] text-sm leading-[1.75] text-forest">
          Our pilot journey took eight travellers to Puri, 30 July – 2 August —
          founder-led, start to finish.
        </p>

        <p className="text-sm text-charcoal/80">
          Write to us at{" "}
          <a
            href="mailto:tanmay@sairr.in"
            className="border-b border-gold pb-0.5 text-primary no-underline transition-colors hover:border-forest hover:text-forest"
          >
            tanmay@sairr.in
          </a>
        </p>
      </div>

      <footer className="relative z-1 border-t border-sand px-[6vw] py-[22px] pb-[30px] text-center">
        <p className="m-0 text-[11px] tracking-[0.5px] text-charcoal/50">
          © 2026 SAIRR
        </p>
      </footer>
    </div>
  );
}
