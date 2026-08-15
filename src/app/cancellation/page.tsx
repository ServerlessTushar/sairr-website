import { LegalPage, legalMetadata } from "@/components/shared/LegalPage";

export const metadata = legalMetadata({
  title: "Cancellation and Refund Policy",
  path: "/cancellation",
  heading: "Cancellation and Refund Policy",
});

export default function CancellationPage() {
  return (
    <LegalPage
      heading="Cancellation and Refund Policy"
      note="Full terms will be published before bookings open. This is the first legal page we'll complete. Questions: tanmay@sairr.in."
    />
  );
}
