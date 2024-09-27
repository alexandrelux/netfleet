import type { MetadataRoute } from "next";
import { siteUrl } from "./utils/const";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
