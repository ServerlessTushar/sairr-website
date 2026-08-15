import { LegalPage, legalMetadata } from "@/components/shared/LegalPage";

export const metadata = legalMetadata({
  title: "Terms and Conditions",
  path: "/terms",
  heading: "Terms and Conditions",
});

export default function TermsPage() {
  return <LegalPage heading="Terms and Conditions" />;
}
