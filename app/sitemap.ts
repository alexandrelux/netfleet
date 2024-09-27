import type { MetadataRoute } from "next";
import { siteUrl } from "./utils/const";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/search/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/genres/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
