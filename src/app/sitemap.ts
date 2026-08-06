import type { MetadataRoute } from "next";
import { experiences } from "@/data/experiences";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/experiences", "/why-sairr", "/about", "/contact"];

  const experiencePages = experiences.map((e) => ({
    url: `${siteConfig.url}/experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),
    ...experiencePages,
  ];
}
