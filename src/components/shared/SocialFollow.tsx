import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "@sairr.in",
    icon: "/contact/inta.svg",
  },
  {
    href: siteConfig.social.youtube,
    label: "@SairrOfficial",
    icon: "/contact/youtube.svg",
  },
  {
    href: siteConfig.social.linkedin,
    label: "Sairr",
    icon: "/contact/linkedin.svg",
  },
] as const;

function SocialLinkItem({
  href,
  label,
  icon,
  iconClassName = "size-11",
}: {
  href: string;
  label: string;
  icon: string;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1.5 text-center transition-opacity hover:opacity-80"
    >
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className={iconClassName}
      />
      <span className="text-xs text-[#5d5d5d] sm:text-sm">{label}</span>
    </a>
  );
}

type SocialFollowProps = {
  className?: string;
};

export function SocialFollow({ className }: SocialFollowProps) {
  return (
    <section
      className={cn(
        "mx-4 mb-10 rounded-lg bg-[#E9DFC8]/50 px-5 py-6 sm:mx-6 sm:px-8 md:py-7 lg:mx-auto lg:mb-16 lg:max-w-6xl lg:px-12",
        className,
      )}
    >
      <FadeIn>
        <div className="text-center md:hidden">
          <h2 className="font-heading text-3xl font-semibold text-[#1a1a1a]">
            Follow along
          </h2>
          <p className="mt-1.5 text-sm text-[#5d5d5d]">
            See what Sairr is all about.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
            {socialLinks.map((link) => (
              <SocialLinkItem
                key={link.href}
                {...link}
                iconClassName="size-12"
              />
            ))}
          </div>
        </div>

        <div
          className="hidden md:grid md:grid-cols-[minmax(0,1fr)_1px_minmax(0,2fr)] md:items-center md:gap-x-10 lg:gap-x-14"
        >
          <div className="min-w-0 pr-2 lg:pr-4">
            <h2 className="font-heading text-[1.75rem] font-semibold leading-tight text-[#1a1a1a] lg:text-4xl">
              Follow along
            </h2>
            <p className="mt-1 text-sm text-[#5d5d5d] lg:text-base">
              See what Sairr is all about.
            </p>
          </div>
          <div className="relative w-px shrink-0 self-center" aria-hidden>
            <div
              className="absolute left-0 top-1/2 h-14 w-px -translate-y-1/2 bg-[#EC575E] lg:h-24"
            />
          </div>
          <div className="grid grid-cols-3 items-center justify-items-center">
            {socialLinks.map((link) => (
              <SocialLinkItem
                key={link.href}
                {...link}
                iconClassName="size-12 lg:size-14"
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
