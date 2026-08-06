import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import type { Experience } from "@/data/experiences";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Badge } from "@/components/ui/badge";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <PlaceholderImage
          seed={experience.imageSeed}
          alt={`${experience.title}, ${experience.location}`}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="mb-2 bg-white/20 text-white backdrop-blur-sm">
            {experience.region}
          </Badge>
          <h3 className="font-heading text-2xl font-semibold text-white">
            {experience.title}
          </h3>
          <p className="text-sm text-white/80">{experience.tagline}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {experience.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {experience.location}
          </span>
          <span>Best: {experience.bestSeason}</span>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {experience.description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-brand">
            {experience.price}
            <span className="text-xs font-normal text-muted-foreground">
              {" "}
              / person
            </span>
          </p>
          <ButtonLink
            href={`/experiences/${experience.slug}`}
            variant="ghost"
            size="sm"
            className="group/btn text-brand hover:text-brand-dark"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
