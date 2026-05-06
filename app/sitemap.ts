import type { MetadataRoute } from "next";

const baseUrl = "https://www.grahasvr.com";

const routes = [
  "",
  "/solutions",
  "/work",
  "/case-study",
  "/platforms",
  "/step-framework",
  "/partners",
  "/industries",
  "/team",
  "/contact",
  "/social-proof",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
