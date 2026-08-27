import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { JsonLd } from "@/components/shared/JsonLd";
import { UtmCapture } from "@/components/shared/UtmCapture";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const grenettePro = localFont({
  src: [
    {
      path: "../../public/Grenette-Pro/GrenettePro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Grenette-Pro/GrenettePro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Grenette-Pro/GrenettePro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Grenette-Pro/GrenettePro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Grenette-Pro/GrenettePro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address,
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${grenettePro.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <Suspense fallback={null}>
          <UtmCapture />
        </Suspense>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
        <Toaster />
      </body>
    </html>
  );
}
