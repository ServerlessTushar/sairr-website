import type { Experience } from "@/data/experiences";
import { whatsappHref } from "@/data/site";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { ButtonLink } from "@/components/shared/ButtonLink";

function cardCta(experience: Experience, comingSoon: boolean) {
  if (comingSoon) return "Notify me";
  if (experience.status === "live") return "Explore journey";
  return "View journey";
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  const comingSoon = experience.status === "coming-soon";
  const href = comingSoon
    ? whatsappHref(
        `I'd like to be notified when ${experience.title} dates are announced.`,
      )
    : `/experiences/${experience.slug}`;
  const cta = cardCta(experience, comingSoon);

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <PlaceholderImage
          seed={experience.imageSeed}
          src={experience.imageSrc}
          aiPlaceholder={experience.aiPlaceholder}
          alt={
            experience.aiPlaceholder
              ? `${experience.title} (placeholder photograph)`
              : `${experience.title}, ${experience.location}`
          }
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p
          className={
            experience.status === "live"
              ? "text-xs font-semibold uppercase tracking-wide text-charcoal"
              : "text-[11px] font-medium uppercase tracking-[0.18em] text-gold"
          }
        >
          {experience.statusLabel}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-charcoal">
          {experience.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate">
          {comingSoon ? experience.datesLabel : experience.tagline}
        </p>
        {experience.featureLabel && (
          <p className="mt-2 text-sm font-semibold text-charcoal">
            {experience.featureLabel}
          </p>
        )}
        {!comingSoon && experience.logistics && (
          <p className="mt-2 text-sm text-slate">{experience.logistics}</p>
        )}
        {!comingSoon && experience.price && (
          <p className="mt-1 text-sm text-charcoal">{experience.price}</p>
        )}

        {comingSoon ? (
          <ButtonLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="secondary"
            className="mt-5 h-10 w-full rounded-lg bg-sand px-4 font-sans text-sm font-medium text-charcoal hover:bg-[color-mix(in_oklch,var(--sand),var(--charcoal)_8%)] sm:w-auto"
          >
            {cta}
          </ButtonLink>
        ) : (
          <ButtonLink
            href={href}
            size="lg"
            className="mt-5 h-10 w-full rounded-lg bg-brand px-4 font-sans text-sm font-medium text-white hover:bg-forest sm:w-auto"
          >
            {cta}
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
