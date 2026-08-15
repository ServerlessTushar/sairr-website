import { LegalPage, legalMetadata } from "@/components/shared/LegalPage";

export const metadata = legalMetadata({
  title: "Privacy Policy",
  path: "/privacy",
  heading: "Privacy Policy",
});

export default function PrivacyPage() {
  return <LegalPage heading="Privacy Policy" />;
}
