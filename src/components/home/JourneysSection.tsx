import { getFeaturedExperiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function JourneysSection() {
  const journeys = getFeaturedExperiences();

  return (
    <section id="experiences" className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Journeys
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Thoughtfully designed journeys for 50+ travellers.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {journeys.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>

        <div className="mt-12">
          <ButtonLink
            href="/experiences"
            variant="outline"
            size="lg"
            className="h-10 rounded-lg border-brand bg-transparent px-4 font-sans text-sm font-medium text-brand hover:bg-brand hover:text-white"
          >
            Explore all journeys
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
