import { createMetadata } from "@/lib/seo";

type Props = {
  title: string;
  path: string;
  heading: string;
};

export function legalMetadata({ title, path, heading }: Props) {
  return createMetadata({
    title,
    description: `${heading} for Sairr and Meenadeep Experiences Pvt Ltd.`,
    path,
  });
}

export function LegalPage({ heading, note }: { heading: string; note?: string }) {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
          {heading}
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          {note ??
            "This page will be published before bookings open. If you have a question in the meantime, write to tanmay@sairr.in."}
        </p>
      </div>
    </section>
  );
}
