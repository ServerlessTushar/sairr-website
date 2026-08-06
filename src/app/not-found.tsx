import { ButtonLink } from "@/components/shared/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page doesn&apos;t exist — but great journeys await.
      </p>
      <ButtonLink href="/" className="mt-8 bg-brand hover:bg-brand-dark">
        Back to Home
      </ButtonLink>
    </section>
  );
}
