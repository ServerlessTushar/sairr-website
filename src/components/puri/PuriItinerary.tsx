import { puriDays } from "@/data/puri";
import { FadeIn } from "@/components/shared/FadeIn";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function PuriItinerary() {
  return (
    <section id="four-days" className="scroll-mt-24 border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Four days
          </p>
        </FadeIn>

        <div className="mt-12 space-y-16">
          {puriDays.map((day) => (
            <FadeIn key={day.day}>
              <article>
                <h3 className="font-heading text-2xl font-semibold text-brand sm:text-3xl">
                  Day {day.day} · {day.place}
                </h3>
                <p className="mt-2 text-base italic text-slate">{day.subtitle}</p>
                <ul className="mt-6 space-y-3 text-base leading-relaxed text-charcoal">
                  {day.activities.map((activity) => (
                    <li key={activity} className="flex gap-3">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden
                      />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>

                {day.images.length > 0 && (
                  <div
                    className={
                      day.images.length > 1
                        ? "mt-6 grid gap-3 sm:grid-cols-2"
                        : "mt-6"
                    }
                  >
                    {day.images.map((image) => (
                      <div
                        key={image.seed}
                        className="relative aspect-[4/3] overflow-hidden"
                      >
                        <PlaceholderImage seed={image.seed} alt={image.alt} />
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-sm font-medium text-brand">
                  Pictures ({day.pictureCount}): {day.pictures}
                </p>
                <p className="mt-1 text-sm italic text-slate">
                  Meals: {day.meals}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
