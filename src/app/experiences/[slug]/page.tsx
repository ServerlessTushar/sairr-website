import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Check,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { getDetailExperiences, getExperience } from "@/data/experiences";
import { experienceFaqs } from "@/data/faqs";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { FaqSection } from "@/components/shared/FaqSection";
import { FadeIn } from "@/components/shared/FadeIn";
import { CtaSection } from "@/components/home/CtaSection";
import { JsonLd } from "@/components/shared/JsonLd";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getDetailExperiences()
    .filter((e) => e.slug !== "puri")
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};

  return createMetadata({
    title: `${experience.title} — ${experience.tagline}`,
    description: experience.description,
    path: `/experiences/${slug}`,
  });
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${experience.title} Experience`,
    description: experience.description,
    touristType: "Senior travellers and families",
    itinerary: {
      "@type": "ItemList",
      itemListElement: experience.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.title,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      price: experience.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative h-[50vh] min-h-[400px]">
        <PlaceholderImage
          seed={experience.imageSeed}
          alt={`${experience.title}, ${experience.location}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <Link
                href="/experiences"
                className="mb-4 inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                All Experiences
              </Link>
              <Badge className="mb-3 bg-white/20 text-white backdrop-blur-sm">
                {experience.region}
              </Badge>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                {experience.title}
              </h1>
              <p className="mt-2 text-lg text-white/80">{experience.tagline}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </FadeIn>

              <FadeIn className="mt-10" delay={0.1}>
                <h2 className="font-heading text-2xl font-semibold">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-3">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn className="mt-10" delay={0.15}>
                <h2 className="font-heading text-2xl font-semibold">
                  Day-by-day itinerary
                </h2>
                <div className="mt-6 space-y-6">
                  {experience.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="rounded-xl border border-border/60 p-5 transition-colors hover:border-brand/30"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-brand">
                        Day {day.day}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">
                        {day.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="mt-10" delay={0.2}>
                <FaqSection faqs={experienceFaqs} title="Common questions" />
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.1}>
                <div className="sticky top-24 rounded-2xl border border-border/60 bg-card p-6 shadow-lg">
                  <p className="text-3xl font-bold text-brand">
                    {experience.price}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand" />
                      {experience.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand" />
                      {experience.location}
                    </p>
                    <p>Best season: {experience.bestSeason}</p>
                  </div>

                  <div className="my-6 border-t border-border/60" />

                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    What&apos;s included
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {experience.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="/contact"
                    className="mt-6 w-full bg-brand hover:bg-brand-dark"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enquire about this trip
                  </ButtonLink>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
