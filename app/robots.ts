import { MetadataRoute } from "next";

const BASE_URL = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wiseppl-korea.vercel.app";
  return raw.startsWith("http") ? raw : `https://${raw}`;
})();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
